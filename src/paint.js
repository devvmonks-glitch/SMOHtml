import * as THREE from 'three';

// Painterly shading, added to the standard materials with onBeforeCompile:
//  - light falls off in a few soft bands whose edges wobble along brush strokes,
//  - shadows lean cool and lilac, highlights warm,
//  - a second brush layer varies the pigment, and silhouettes darken softly.
// Everything is in the material shaders, so there is no post-processing pass.

let brushTex = null;

// A tileable greyscale texture of overlapping brush strokes (mean value ~0.5).
export function brushTexture() {
  if (brushTex) return brushTex;
  const S = 512, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = 'rgb(128,128,128)'; g.fillRect(0, 0, S, S);
  g.lineCap = 'round';
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 1600; i++) {
    const x = rnd() * S, y = rnd() * S, a = -0.5 + (rnd() - 0.5) * 0.9, len = 18 + rnd() * 60, w = 4 + rnd() * 12;
    const v = Math.round(70 + rnd() * 116);
    g.strokeStyle = `rgba(${v},${v},${v},0.32)`; g.lineWidth = w;
    // Draw each stroke at every wrap offset so the texture tiles seamlessly.
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
      g.beginPath();
      g.moveTo(x + ox, y + oy);
      g.quadraticCurveTo(x + ox + Math.cos(a + 0.3) * len * 0.5, y + oy + Math.sin(a + 0.3) * len * 0.5, x + ox + Math.cos(a) * len, y + oy + Math.sin(a) * len);
      g.stroke();
    }
  }
  brushTex = new THREE.CanvasTexture(c);
  brushTex.wrapS = brushTex.wrapT = THREE.RepeatWrapping;
  brushTex.colorSpace = THREE.NoColorSpace;
  return brushTex;
}

const VERT_DECL = 'varying vec3 vPaintPos;\nvarying vec3 vPaintN;\n';
const VERT_BODY = `
  vec4 paintWP = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    paintWP = instanceMatrix * paintWP;
  #endif
  vPaintPos = (modelMatrix * paintWP).xyz;
  vPaintN = normalize(mat3(modelMatrix) * objectNormal);
`;
const FRAG_DECL = `
varying vec3 vPaintPos;
varying vec3 vPaintN;
uniform sampler2D uBrush;
uniform float uPaint;
float paintBrush(vec3 p, vec3 n, float scale) {
  vec3 w = pow(abs(n), vec3(4.0));
  w /= (w.x + w.y + w.z + 1e-5);
  return texture2D(uBrush, p.zy * scale).r * w.x + texture2D(uBrush, p.xz * scale).r * w.y + texture2D(uBrush, p.xy * scale).r * w.z;
}
`;
const FRAG_BODY = `
{
  vec3 pn = normalize(vPaintN);
  float br = paintBrush(vPaintPos, pn, 0.33);
  float br2 = paintBrush(vPaintPos + 17.0, pn, 0.55);
  vec3 col = outgoingLight;
  float lum = max(dot(col, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  // Band the light in a compressed range so bright areas don't get dozens of steps.
  float t = lum / (1.0 + lum);
  t = clamp(t + (br - 0.5) * 0.3 * uPaint, 0.0, 0.999);
  float bands = 5.0, q = floor(t * bands), f = fract(t * bands);
  float tq = (q + smoothstep(0.3, 0.7, f)) / bands;
  float lumQ = tq / max(1.0 - tq, 1e-3);
  col *= mix(1.0, lumQ / lum, 0.75 * uPaint);
  // Cool lilac shadows, warm highlights.
  float shade = 1.0 - smoothstep(0.1, 0.55, t);
  col = mix(col, col * vec3(0.8, 0.82, 1.1) + vec3(0.02, 0.012, 0.05), shade * 0.55 * uPaint);
  col *= mix(vec3(1.0), vec3(1.05, 1.0, 0.92), smoothstep(0.45, 0.85, t) * uPaint);
  // Pigment variation (value and a slight hue wobble) and a soft painted contour.
  col *= 1.0 + (br2 - 0.5) * 0.3 * uPaint;
  col *= 1.0 + vec3(br - 0.5, (br2 - 0.5) * 0.4, 0.5 - br) * 0.12 * uPaint;
  float rim = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
  col *= 1.0 - smoothstep(0.6, 1.0, rim) * 0.2 * uPaint;
  outgoingLight = col;
}
#include <opaque_fragment>
`;

export function paintify(mat, strength = 1) {
  if (!mat || mat.userData.painted || !(mat.isMeshStandardMaterial || mat.isMeshLambertMaterial)) return;
  mat.userData.painted = true;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, r) => {
    if (prev) prev(shader, r);
    shader.uniforms.uBrush = { value: brushTexture() };
    shader.uniforms.uPaint = { value: strength };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + VERT_DECL)
      .replace('#include <project_vertex>', '#include <project_vertex>\n' + VERT_BODY);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + FRAG_DECL)
      .replace('#include <opaque_fragment>', FRAG_BODY);
  };
  const key = mat.customProgramCacheKey ? mat.customProgramCacheKey.bind(mat) : () => '';
  mat.customProgramCacheKey = () => key() + '|paint' + strength;
  mat.needsUpdate = true;
}

export function paintScene(root) {
  root.traverse((o) => {
    if (!o.material || o.userData.noPaint) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) paintify(m);
  });
}

// Equirectangular painted sky: gradient, brushy clouds and layered distant hills.
export function paintedSky() {
  const W = 2048, H = 1024, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, H * 0.52);
  gr.addColorStop(0, '#3f68c9'); gr.addColorStop(0.45, '#78a6ee'); gr.addColorStop(0.82, '#c4d3f3'); gr.addColorStop(1, '#f4dcb8');
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  let seed = 3;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  // Clouds: clusters of soft round dabs, lit on top.
  for (let i = 0; i < 26; i++) {
    const cx = rnd() * W, cy = H * (0.16 + rnd() * 0.24), size = 40 + rnd() * 90;
    for (let j = 0; j < 40; j++) {
      const x = cx + (rnd() - 0.5) * size * 3.2, y = cy + (rnd() - 0.5) * size * 0.7, r = size * (0.25 + rnd() * 0.45);
      for (const ox of [-W, 0, W]) {
        const rg = g.createRadialGradient(x + ox, y - r * 0.3, 0, x + ox, y, r);
        rg.addColorStop(0, 'rgba(255,252,245,0.55)'); rg.addColorStop(0.6, 'rgba(236,232,248,0.25)'); rg.addColorStop(1, 'rgba(220,220,245,0)');
        g.fillStyle = rg; g.beginPath(); g.arc(x + ox, y, r, 0, Math.PI * 2); g.fill();
      }
    }
  }
  // Distant hills: three hazy layers just above the horizon line.
  const horizon = H * 0.5;
  [['#b6c1d8', 70, 0.004], ['#9fb7b4', 48, 0.007], ['#88aa8a', 28, 0.011]].forEach(([col, amp, freq], k) => {
    g.fillStyle = col; g.beginPath(); g.moveTo(0, horizon + 4);
    const ph = rnd() * 10;
    for (let x = 0; x <= W; x += 8) {
      const y = horizon - amp * (0.55 + 0.45 * Math.sin(x * freq * Math.PI * 2 / 4 + ph) * Math.sin(x * freq * 1.7 + ph * 2)) - k * 4;
      g.lineTo(x, y);
    }
    g.lineTo(W, horizon + 4); g.closePath(); g.fill();
  });
  g.fillStyle = '#88aa8a'; g.fillRect(0, horizon, W, H - horizon);
  // Brush texture over everything so the sky reads as painted, not airbrushed.
  g.globalAlpha = 0.08; g.globalCompositeOperation = 'overlay';
  const b = brushTexture().image;
  for (let x = 0; x < W; x += 512) for (let y = 0; y < H; y += 512) g.drawImage(b, x, y);
  g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.mapping = THREE.EquirectangularReflectionMapping;
  return t;
}

// Paper grain for the CSS overlay (multiplied over the canvas).
export function paperDataURL() {
  const S = 256, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d'), img = g.createImageData(S, S);
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < S * S; i++) {
    const v = 236 + rnd() * 19;
    img.data[i * 4] = v; img.data[i * 4 + 1] = v - 2; img.data[i * 4 + 2] = v - 7; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  g.strokeStyle = 'rgba(150,130,110,0.09)'; g.lineWidth = 1;
  for (let i = 0; i < 220; i++) {
    const x = rnd() * S, y = rnd() * S, a = rnd() * Math.PI, l = 4 + rnd() * 14;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
  return c.toDataURL();
}

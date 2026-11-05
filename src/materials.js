import * as THREE from 'three';

export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// White dev-room grid: one texture tile covers 2 x 2 metres.
let gridTex = null;
export function gridTexture() {
  if (gridTex) return gridTex;
  gridTex = canvasTex(256, 256, (g) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#f0f0f0'; g.fillRect(0, 0, 128, 128); g.fillRect(128, 128, 128, 128);
    g.strokeStyle = 'rgba(0,0,0,0.07)'; g.lineWidth = 1;
    for (let i = 32; i < 256; i += 32) { g.beginPath(); g.moveTo(i + 0.5, 0); g.lineTo(i + 0.5, 256); g.moveTo(0, i + 0.5); g.lineTo(256, i + 0.5); g.stroke(); }
    g.strokeStyle = 'rgba(0,0,0,0.22)'; g.lineWidth = 3;
    for (const i of [1.5, 129.5]) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); }
  });
  gridTex.wrapS = gridTex.wrapT = THREE.RepeatWrapping;
  return gridTex;
}

const cache = new Map();
export function gridMat(color) {
  if (!cache.has(color)) cache.set(color, new THREE.MeshStandardMaterial({ color, map: gridTexture(), roughness: 0.82, metalness: 0 }));
  return cache.get(color);
}

// Box UVs in world metres so the grid lines up across every block.
export function worldUV(geo, ox, oy, oz, scale = 0.5) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) + ox, y = p.getY(i) + oy, z = p.getZ(i) + oz;
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i));
    let u, v;
    if (ay > 0.5) { u = x; v = z; } else if (ax > 0.5) { u = z; v = y; } else { u = x; v = y; }
    uv.setXY(i, u * scale, v * scale);
  }
  uv.needsUpdate = true;
  return geo;
}

// ---------- painted world textures ----------
// Each tile covers 2 x 2 metres (worldUV scale 0.5) and is painted with canvas strokes.
function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
function strokes(g, n, S, colors, len, width, rnd, alpha = 0.5, angle = null) {
  g.lineCap = 'round';
  for (let i = 0; i < n; i++) {
    const x = rnd() * S, y = rnd() * S, a = angle === null ? rnd() * Math.PI : angle + (rnd() - 0.5) * 0.6;
    const l = len * (0.5 + rnd()), c = colors[Math.floor(rnd() * colors.length)];
    g.strokeStyle = c; g.globalAlpha = alpha * (0.5 + rnd() * 0.5); g.lineWidth = width * (0.6 + rnd() * 0.8);
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
      g.beginPath(); g.moveTo(x + ox, y + oy); g.lineTo(x + ox + Math.cos(a) * l, y + oy + Math.sin(a) * l); g.stroke();
    }
  }
  g.globalAlpha = 1;
}
const PAINT = {
  grass(g, S, rnd) {
    g.fillStyle = '#7fb85a'; g.fillRect(0, 0, S, S);
    strokes(g, 900, S, ['#6aa64a', '#8cc463', '#9ed06e', '#5f9a45', '#b3d57a'], 10, 5, rnd, 0.6, -1.3);
    for (let i = 0; i < 26; i++) { g.fillStyle = ['#fff6d5', '#ffd2e4', '#ffe58a', '#d8e4ff'][i % 4]; g.beginPath(); g.arc(rnd() * S, rnd() * S, 2 + rnd() * 2, 0, Math.PI * 2); g.fill(); }
  },
  stone(g, S, rnd) {
    g.fillStyle = '#b9b2a6'; g.fillRect(0, 0, S, S);
    // Irregular courses of stones.
    const rows = 4;
    for (let r = 0; r < rows; r++) {
      let x = r % 2 ? -S / 8 : 0; const y = r * S / rows, h = S / rows;
      while (x < S) {
        const w = S / 4 * (0.7 + rnd() * 0.6), v = 165 + rnd() * 40;
        g.fillStyle = `rgb(${v + 8},${v + 2},${v - 8})`;
        roundRect(g, x + 3, y + 3, w - 6, h - 6, 10); g.fill();
        x += w;
      }
    }
    strokes(g, 300, S, ['#a39b8f', '#cdc6b8', '#958d84', '#d9d2c3'], 14, 5, rnd, 0.35);
  },
  path(g, S, rnd) {
    g.fillStyle = '#d9c9a6'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const v = 210 + rnd() * 30;
      g.fillStyle = `rgb(${v + 10},${v},${v - 22})`;
      roundRect(g, i * S / 4 + 4 + rnd() * 3, j * S / 4 + 4 + rnd() * 3, S / 4 - 9, S / 4 - 9, 12); g.fill();
    }
    strokes(g, 260, S, ['#c8b48d', '#e8dcc0', '#bfa985'], 12, 4, rnd, 0.35);
  },
  brick(g, S, rnd) {
    g.fillStyle = '#c9a58a'; g.fillRect(0, 0, S, S);
    const rows = 8;
    for (let r = 0; r < rows; r++) for (let c = -1; c < 4; c++) {
      const x = c * S / 4 + (r % 2 ? S / 8 : 0), y = r * S / rows, v = rnd() * 30;
      g.fillStyle = `rgb(${200 + v},${110 + v * 0.6},${80 + v * 0.4})`;
      roundRect(g, x + 3, y + 3, S / 4 - 6, S / rows - 6, 5); g.fill();
    }
    strokes(g, 260, S, ['#b9764f', '#e0a179', '#a7623f'], 12, 4, rnd, 0.3, 0);
  },
  wood(g, S, rnd) {
    g.fillStyle = '#b98656'; g.fillRect(0, 0, S, S);
    const planks = 4;
    for (let p = 0; p < planks; p++) {
      const v = rnd() * 26;
      g.fillStyle = `rgb(${180 + v},${128 + v * 0.7},${80 + v * 0.4})`;
      g.fillRect(0, p * S / planks + 3, S, S / planks - 6);
    }
    strokes(g, 500, S, ['#9b6b40', '#cf9d68', '#8a5c35', '#d9ae7c'], 40, 2.5, rnd, 0.45, 0);
    g.fillStyle = '#6e4a2b';
    for (let p = 0; p < planks; p++) for (const x of [S * 0.1, S * 0.9]) { g.beginPath(); g.arc(x, p * S / planks + S / planks / 2, 3, 0, Math.PI * 2); g.fill(); }
  },
  plaster(g, S, rnd) {
    g.fillStyle = '#efe6d6'; g.fillRect(0, 0, S, S);
    strokes(g, 400, S, ['#e3d8c4', '#f7f0e2', '#d8ccb6'], 26, 10, rnd, 0.35);
  },
  dirt(g, S, rnd) {
    g.fillStyle = '#9a7652'; g.fillRect(0, 0, S, S);
    strokes(g, 500, S, ['#876443', '#ad8a62', '#7a5a3c', '#b99a72'], 12, 6, rnd, 0.5);
    for (let i = 0; i < 30; i++) { g.fillStyle = '#c0a888'; g.beginPath(); g.arc(rnd() * S, rnd() * S, 2 + rnd() * 3, 0, Math.PI * 2); g.fill(); }
  },
};

const texCache = new Map();
export function themeTex(kind) {
  if (!texCache.has(kind)) {
    const rnd = rng(kind.length * 977 + 13);
    const t = canvasTex(256, 256, (g, S) => PAINT[kind](g, S, rnd));
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    texCache.set(kind, t);
  }
  return texCache.get(kind);
}
const themeCache = new Map();
export function themeMat(kind, tint = 0xffffff) {
  const key = kind + tint;
  if (!themeCache.has(key)) themeCache.set(key, new THREE.MeshStandardMaterial({ color: tint, map: themeTex(kind), roughness: 0.92, metalness: 0 }));
  return themeCache.get(key);
}

// A wooden sign board with painted lettering.
export function labelTex(title, lines = [], accent = '#ff8a3d') {
  return canvasTex(512, 288, (g, w, h) => {
    const rnd = rng(title.length * 31 + 7);
    g.fillStyle = '#a8784a'; roundRect(g, 0, 0, w, h, 26); g.fill();
    g.save(); roundRect(g, 0, 0, w, h, 26); g.clip();
    for (let p = 0; p < 4; p++) { const v = rnd() * 24; g.fillStyle = `rgb(${172 + v},${124 + v * 0.7},${80 + v * 0.4})`; g.fillRect(0, p * h / 4 + 2, w, h / 4 - 4); }
    strokes(g, 260, w, ['#8f633b', '#c79566', '#7d5532'], 60, 2, rnd, 0.4, 0);
    g.restore();
    g.strokeStyle = '#6a4527'; g.lineWidth = 8; roundRect(g, 4, 4, w - 8, h - 8, 22); g.stroke();
    // Painted header ribbon.
    g.fillStyle = accent; g.globalAlpha = 0.92; roundRect(g, 18, 16, w - 36, 62, 16); g.fill(); g.globalAlpha = 1;
    g.fillStyle = '#3b2a1c'; g.font = '700 40px Fredoka, "Segoe UI", sans-serif'; g.textBaseline = 'middle';
    g.fillText(title, 34, 48, w - 68);
    g.fillStyle = '#fff4dc'; g.font = '600 29px Fredoka, "Segoe UI", sans-serif';
    g.shadowColor = 'rgba(60,35,15,0.6)'; g.shadowOffsetY = 2;
    lines.forEach((l, i) => g.fillText(l, 34, 118 + i * 42, w - 68));
  });
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

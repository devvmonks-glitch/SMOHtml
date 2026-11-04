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

export function labelTex(title, lines = [], accent = '#ff8a3d') {
  return canvasTex(512, 288, (g, w, h) => {
    g.fillStyle = '#1d2a44'; roundRect(g, 0, 0, w, h, 28); g.fill();
    g.fillStyle = accent; roundRect(g, 14, 14, w - 28, 62, 18); g.fill();
    g.fillStyle = '#1d2a44'; g.font = '700 40px Fredoka, "Segoe UI", sans-serif'; g.textBaseline = 'middle';
    g.fillText(title, 32, 46, w - 64);
    g.fillStyle = '#eef3ff'; g.font = '500 29px Fredoka, "Segoe UI", sans-serif';
    lines.forEach((l, i) => g.fillText(l, 32, 116 + i * 42, w - 64));
  });
}

export function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

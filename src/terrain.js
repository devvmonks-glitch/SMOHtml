import * as THREE from 'three';
import { canvasTex, themeMat, worldUV } from './materials.js';
import { PI, TAU } from './util.js';
import { block } from './level.js';
import { rand } from './decor.js';

// Shared builders for the kingdoms: rough layered cliffs, water, waterfalls and the
// one animation object that scrolls them. Each kingdom sits at an x offset (ox) and is
// laid out in local coordinates, so terrain(G, ox, look) hands back helpers that take
// local x and place things in the world.

const hash = (x, y, z) => { const v = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return v - Math.floor(v); };
function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), f = (t) => t * t * (3 - 2 * t);
  const u = f(x - xi), v = f(y - yi), w = f(z - zi), L = (a, b, t) => a + (b - a) * t;
  const h = (a, b, c) => hash(xi + a, yi + b, zi + c);
  return L(L(L(h(0, 0, 0), h(1, 0, 0), u), L(h(0, 1, 0), h(1, 1, 0), u), v), L(L(h(0, 0, 1), h(1, 0, 1), u), L(h(0, 1, 1), h(1, 1, 1), u), v), w);
}
const fbm = (x, y, z) => noise3(x, y, z) * 0.6 + noise3(x * 2.1, y * 2.1, z * 2.1) * 0.28 + noise3(x * 4.3, y * 4.3, z * 4.3) * 0.12;
const DAMP = new THREE.Color(0x8d8a84);
let rockMat = null;

// The look of a kingdom's rock: strata colours from bottom up, the colour its grassy
// tops fade to, and what a "grass" top is painted with.
export const LOOKS = {
  falls: { strata: [0xdcc6a2, 0xc9a983, 0xe7d8bb, 0xbb9b7b, 0xd5b78f, 0xc4b29c], moss: 0x6f9c4f, top: 'grass' },
  desert: { strata: [0xe0a06a, 0xc97f52, 0xedc08c, 0xb86a45, 0xd99868, 0xf0cfa0], moss: 0xf2d6a0, top: 'sand' },
};

function rippleTex(base = '#8fd0ef') {
  const t = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      g.strokeStyle = `rgba(255,255,255,${0.15 + Math.random() * 0.35})`; g.lineWidth = 1 + Math.random() * 2;
      const x = Math.random() * w, y = Math.random() * h, l = 6 + Math.random() * 18;
      for (const ox of [0, -w, w]) for (const oy of [0, -h, h]) { g.beginPath(); g.moveTo(x + ox, y + oy); g.quadraticCurveTo(x + ox + l / 2, y + oy - 3, x + ox + l, y + oy); g.stroke(); }
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function fallTex() {
  const t = canvasTex(64, 256, (g, w, h) => {
    g.fillStyle = 'rgba(186,228,250,0.84)'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * w, y = Math.random() * h, len = 24 + Math.random() * 110, wd = 1 + Math.random() * 3.5;
      g.fillStyle = `rgba(255,255,255,${0.45 + Math.random() * 0.55})`;
      g.fillRect(x, y, wd, len); if (y + len > h) g.fillRect(x, y - h, wd, len);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function terrain(G, ox, look = LOOKS.falls) {
  const X = (lx) => ox + lx;
  const V = (lx, y, z) => new THREE.Vector3(X(lx), y, z);
  const strata = look.strata.map((c) => new THREE.Color(c)), moss = new THREE.Color(look.moss);
  const anim = { falls: [], surfs: [], foam: [], mist: [], mistT: 0 };

  // A block given by its bounds rather than its centre.
  const slab = (x0, x1, z0, z1, y0, y1, color, opts) =>
    block(G, X((x0 + x1) / 2), y0, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0, color, opts);

  // Cliffs keep a plain box for collision but are drawn as rough, layered rock: each side is
  // a grid pushed in and out by noise, banded in strata colours, fading to the top colour.
  // opts: top 'grass' (default: the look's top) or 'stone', tufts (grass tufts on top; default
  // with grass), noLedge, noCam, damp (darker rock, for river beds).
  function cliff(x0, x1, z0, z1, y0, y1, opts = {}) {
    const wx0 = X(x0), wx1 = X(x1), cx = (wx0 + wx1) / 2, cz = (z0 + z1) / 2, grassy = opts.top !== 'stone';
    const solid = G.world.box(cx, (y0 + y1) / 2, cz, wx1 - wx0, y1 - y0, z1 - z0,
      { noLedge: !!opts.noLedge, noCam: !!opts.noCam, grass: grassy && look.top === 'grass' && opts.tufts !== false });
    const topGeo = new THREE.PlaneGeometry(wx1 - wx0, z1 - z0); topGeo.rotateX(-PI / 2); worldUV(topGeo, cx, y1, cz);
    const topM = new THREE.Mesh(topGeo, grassy ? themeMat(look.top) : themeMat('stone', 0xd9c9ad));
    topM.position.set(cx, y1, cz); topM.receiveShadow = true; G.scene.add(topM);
    // Rock that reaches the bottom of the world runs on down out of sight.
    const yb = y0 <= -8 ? -22 : y0;
    const pos = [], col = [], idx = [], c = new THREE.Color();
    const corners = [[wx0, z1], [wx1, z1], [wx1, z0], [wx0, z0]];
    for (let k = 0; k < 4; k++) {
      const [ax, az] = corners[k], [bx, bz] = corners[(k + 1) % 4];
      const len = Math.hypot(bx - ax, bz - az), nu = Math.max(1, Math.ceil(len / 1.4)), nv = Math.max(1, Math.ceil((y1 - yb) / 1.2));
      const base = pos.length / 3;
      for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
        let px = ax + (bx - ax) * i / nu, pz = az + (bz - az) * i / nu, py = yb + (y1 - yb) * j / nv;
        const topRow = j === nv;
        if (topRow) py = y1 - 0.12; else if (j > 0) py += (hash(px, py, pz) - 0.5) * 0.5;
        // Pushed out along the side's normal (corners use the diagonal, so sides meet without cracks).
        let dx = px >= wx1 - 1e-6 ? 1 : px <= wx0 + 1e-6 ? -1 : 0, dz = pz >= z1 - 1e-6 ? 1 : pz <= z0 + 1e-6 ? -1 : 0;
        const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
        const n = fbm(px * 0.32, py * 0.5, pz * 0.32);
        let d = (n - 0.45) * 0.95 + Math.sin(py * 2.1 + n * 4) * 0.16;
        if (topRow) d = Math.abs(d) * 0.35;
        px += dx * d; pz += dz * d;
        pos.push(px, py, pz);
        c.copy(strata[((Math.floor((py + n * 1.4) / 1.25) % strata.length) + strata.length) % strata.length]);
        c.multiplyScalar(0.9 + n * 0.22);
        if (opts.damp) c.lerp(DAMP, 0.55);
        const fromTop = y1 - py;
        if (grassy && fromTop < 0.9) c.lerp(moss, (1 - fromTop / 0.9) * 0.85);
        col.push(c.r, c.g, c.b);
      }
      for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
        const a = base + j * (nu + 1) + i, b = a + 1, d2 = a + nu + 1, e = d2 + 1;
        idx.push(a, b, d2, b, e, d2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx); geo.computeVertexNormals();
    rockMat = rockMat || new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });
    const sides = new THREE.Mesh(geo, rockMat); sides.castShadow = true; sides.receiveShadow = true; G.scene.add(sides);
    return solid;
  }

  // A boundary cliff broken into segments of different heights, so the skyline isn't a ruler.
  function ridge(x0, x1, z0, z1, heights) {
    const alongX = x1 - x0 >= z1 - z0, n = heights.length, o = { noLedge: true, tufts: false };
    for (let i = 0; i < n; i++) {
      const a = i / n, b = (i + 1) / n;
      if (alongX) cliff(x0 + (x1 - x0) * a, x0 + (x1 - x0) * b, z0, z1, -8, heights[i], o);
      else cliff(x0, x1, z0 + (z1 - z0) * a, z0 + (z1 - z0) * b, -8, heights[i], o);
    }
  }

  // ---------- water ----------
  const deepMat = new THREE.MeshStandardMaterial({ color: 0x2f8fc4, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide });
  let ripples = null;
  function water(x0, x1, z0, z1, y0, y1) {
    G.world.water(X(x0), X(x1), y0, y1, z0, z1);
    const body = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), deepMat);
    body.position.set(X((x0 + x1) / 2), (y0 + y1) / 2, (z0 + z1) / 2); body.userData.noPaint = true; G.scene.add(body);
    ripples = ripples || rippleTex();
    const tex = ripples.clone(); tex.needsUpdate = true; tex.repeat.set((x1 - x0) / 6, (z1 - z0) / 6);
    const surf = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, color: 0xd8f2ff, roughness: 0.1, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }));
    surf.rotation.x = -PI / 2; surf.position.set(X((x0 + x1) / 2), y1 - 0.01, (z0 + z1) / 2); G.scene.add(surf);
    anim.surfs.push({ tex, sx: 0.02, sz: 0.035 });
  }
  // A river running along z on top of something: a scrolling strip of ripples.
  function stream(lx, z, w, len, y, speed = -0.5) {
    const tex = rippleTex(); tex.repeat.set(1, len / 6.7);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, len), new THREE.MeshStandardMaterial({ map: tex, color: 0xcfeeff, roughness: 0.1, transparent: true, opacity: 0.8, depthWrite: false }));
    m.rotation.x = -PI / 2; m.position.set(X(lx), y, z); G.scene.add(m);
    anim.surfs.push({ tex, sx: 0, sz: speed });
  }
  // A sheet of falling water (x, z in world units): two scrolling layers, foam where it lands and drifting mist.
  function waterfall(x, z, w, yTop, yBot, rotY, foam = true) {
    const h = yTop - yBot;
    for (const [off, speed, op] of [[0, 1.6, 0.95], [0.35, 1.1, 0.7]]) {
      const tex = fallTex(); tex.repeat.set(w / 3, h / 7);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, transparent: true, opacity: op, depthWrite: false, side: THREE.DoubleSide, roughness: 0.2, emissive: 0x9cc8e4, emissiveIntensity: 0.4 }));
      m.position.set(x - Math.sin(rotY) * off, (yTop + yBot) / 2, z - Math.cos(rotY) * off); m.rotation.y = rotY; m.userData.noPaint = true;
      G.scene.add(m);
      anim.falls.push({ tex, speed: speed * h / 7 / 3 });
    }
    if (!foam) return;
    const foamMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, transparent: true, opacity: 0.85, emissive: 0xffffff, emissiveIntensity: 0.2 });
    for (let i = 0; i < 9; i++) {
      const t = (i + 0.5) / 9 - 0.5, b = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), foamMat);
      const px = x + Math.cos(rotY) * t * w, pz = z - Math.sin(rotY) * t * w + Math.cos(rotY) * 0.6;
      b.position.set(px, yBot, pz); G.scene.add(b);
      anim.foam.push({ m: b, phase: rand(0, TAU), k: rand(0.7, 1.1) });
    }
    anim.mist.push({ x, y: yBot, z, w, rotY });
  }

  // ---------- moving water, foam and mist ----------
  G.objects.push({
    render(dt, time, G2) {
      for (const f of anim.falls) f.tex.offset.y += f.speed * dt;
      for (const s of anim.surfs) { s.tex.offset.x += s.sx * dt; s.tex.offset.y += s.sz * dt; }
      for (const f of anim.foam) { const k = f.k * (0.9 + Math.sin(time * 5 + f.phase) * 0.25); f.m.scale.set(k * 1.3, k * 0.45, k); }
      if (!dt || !anim.mist.length || Math.abs(G2.P.pos.x - ox) > 120) return;
      anim.mistT -= dt;
      if (anim.mistT > 0) return;
      anim.mistT = 0.05;
      for (const m of anim.mist) {
        const t = rand(-0.5, 0.5) * m.w;
        G2.fx.spawn(m.x + Math.cos(m.rotY) * t, m.y + 0.2, m.z + 0.8, rand(-0.6, 0.6), rand(1.2, 2.6), rand(0.6, 1.6), rand(0.9, 1.5), rand(0.35, 0.6), 0.9, 0xf4fbff, 0.3, 1.2);
      }
    },
  });

  return { X, V, slab, cliff, ridge, water, stream, waterfall, anim };
}

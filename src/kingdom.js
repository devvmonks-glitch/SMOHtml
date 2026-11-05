import * as THREE from 'three';
import { std } from './character.js';
import { canvasTex, themeMat, worldUV } from './materials.js';
import { PI, TAU } from './util.js';
import { groundBelow } from './world.js';
import { C, MOON, block, coinLine, coinRing, coinArc, zone } from './level.js';
import { tree, bush, flowers, rock, fence, grassTufts, tuftBlocked, rand } from './decor.js';
import { Coin, Moon, Flower, QBlock, Brick, Stake, PSwitch, Checkpoint, Pipe, Mover, Sign, Cloud, Boulder } from './objects.js';
import { Frog, Goomba, Goombette, Pylon, ChainChomp, wireMesh } from './captures.js';

// Tumble Falls: a small kingdom in the spirit of SMO's first one. A grassy valley with a
// plunge pool under a tall waterfall, a stepped ancient spire in the middle, cliff terraces
// up to a plateau, and an east edge where the river spills off into a sea of clouds.
// It sits 300m east of the dev room, far past the haze, and a plaza pipe leads here.
//
// Layout below is in local coordinates (lx, lz) with the valley floor at y = 0:
// north (-z) is the plateau and the falls, south (+z) the meadow where the pipe arrives.

export const KX = 300;
export const KINGDOM = 'Tumble Falls';
const X = (lx) => KX + lx;
const V = (lx, y, z) => new THREE.Vector3(X(lx), y, z);

// A block given by its bounds rather than its centre.
const slab = (G, x0, x1, z0, z1, y0, y1, color, opts) =>
  block(G, X((x0 + x1) / 2), y0, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0, color, opts);

// ---------- natural rock ----------
// Cliffs keep a plain box for collision but are drawn as rough, layered rock: each side is
// a grid pushed in and out by noise, banded in sandy strata colours, with moss at the top.
const hash = (x, y, z) => { const v = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return v - Math.floor(v); };
function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), f = (t) => t * t * (3 - 2 * t);
  const u = f(x - xi), v = f(y - yi), w = f(z - zi), L = (a, b, t) => a + (b - a) * t;
  const h = (a, b, c) => hash(xi + a, yi + b, zi + c);
  return L(L(L(h(0, 0, 0), h(1, 0, 0), u), L(h(0, 1, 0), h(1, 1, 0), u), v), L(L(h(0, 0, 1), h(1, 0, 1), u), L(h(0, 1, 1), h(1, 1, 1), u), v), w);
}
const fbm = (x, y, z) => noise3(x, y, z) * 0.6 + noise3(x * 2.1, y * 2.1, z * 2.1) * 0.28 + noise3(x * 4.3, y * 4.3, z * 4.3) * 0.12;
const STRATA = [0xdcc6a2, 0xc9a983, 0xe7d8bb, 0xbb9b7b, 0xd5b78f, 0xc4b29c].map((c) => new THREE.Color(c));
const MOSS = new THREE.Color(0x6f9c4f), DAMP = new THREE.Color(0x8d8a84);
let rockMat = null;

// opts: top 'grass' (default) or 'stone', tufts (grass tufts on top; default with grass),
// noLedge, noCam, damp (darker rock, for river beds).
function cliff(G, x0, x1, z0, z1, y0, y1, opts = {}) {
  const wx0 = X(x0), wx1 = X(x1), cx = (wx0 + wx1) / 2, cz = (z0 + z1) / 2, grassy = opts.top !== 'stone';
  const solid = G.world.box(cx, (y0 + y1) / 2, cz, wx1 - wx0, y1 - y0, z1 - z0,
    { noLedge: !!opts.noLedge, noCam: !!opts.noCam, grass: grassy && opts.tufts !== false });
  const topGeo = new THREE.PlaneGeometry(wx1 - wx0, z1 - z0); topGeo.rotateX(-PI / 2); worldUV(topGeo, cx, y1, cz);
  const topM = new THREE.Mesh(topGeo, grassy ? themeMat('grass') : themeMat('stone', 0xd9c9ad));
  topM.position.set(cx, y1, cz); topM.receiveShadow = true; G.scene.add(topM);
  // Rock that reaches the bottom of the world runs on down into the sea of clouds.
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
      c.copy(STRATA[((Math.floor((py + n * 1.4) / 1.25) % STRATA.length) + STRATA.length) % STRATA.length]);
      c.multiplyScalar(0.9 + n * 0.22);
      if (opts.damp) c.lerp(DAMP, 0.55);
      const fromTop = y1 - py;
      if (grassy && fromTop < 0.9) c.lerp(MOSS, (1 - fromTop / 0.9) * 0.85);
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
function ridge(G, x0, x1, z0, z1, heights) {
  const alongX = x1 - x0 >= z1 - z0, n = heights.length, o = { noLedge: true, tufts: false };
  for (let i = 0; i < n; i++) {
    const a = i / n, b = (i + 1) / n;
    if (alongX) cliff(G, x0 + (x1 - x0) * a, x0 + (x1 - x0) * b, z0, z1, -8, heights[i], o);
    else cliff(G, x0, x1, z0 + (z1 - z0) * a, z0 + (z1 - z0) * b, -8, heights[i], o);
  }
}

// ---------- water ----------
function rippleTex() {
  const t = canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#8fd0ef'; g.fillRect(0, 0, w, h);
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

export function buildKingdom(G) {
  const anim = { falls: [], surfs: [], foam: [], mist: [], mistT: 0 };
  const deepMat = new THREE.MeshStandardMaterial({ color: 0x2f8fc4, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide });
  const ripples = rippleTex();
  function water(x0, x1, z0, z1, y0, y1) {
    G.world.water(X(x0), X(x1), y0, y1, z0, z1);
    const body = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), deepMat);
    body.position.set(X((x0 + x1) / 2), (y0 + y1) / 2, (z0 + z1) / 2); body.userData.noPaint = true; G.scene.add(body);
    const tex = ripples.clone(); tex.needsUpdate = true; tex.repeat.set((x1 - x0) / 6, (z1 - z0) / 6);
    const surf = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, color: 0xd8f2ff, roughness: 0.1, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }));
    surf.rotation.x = -PI / 2; surf.position.set(X((x0 + x1) / 2), y1 - 0.01, (z0 + z1) / 2); G.scene.add(surf);
    anim.surfs.push({ tex, sx: 0.02, sz: 0.035 });
  }
  // A sheet of falling water: two scrolling layers, foam where it lands and drifting mist.
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

  // ---------- ground ----------
  const floor = { noCam: true }, wet = { top: 'stone', damp: true };
  cliff(G, -62, 40, -8, 60, -8, 0, floor);                 // the meadow and valley floor
  cliff(G, -62, -14, -30, -8, -8, 0, floor);               // west of the pool
  cliff(G, -14, 14, -22, -8, -8, -6, wet);                 // deep plunge pool bed
  cliff(G, 14, 39, -22, -8, -8, -3, wet);                  // shallower river bed
  cliff(G, 39, 40.6, -22, -8, -8, 0.3, { top: 'stone', noLedge: true }); // weir the river spills over
  cliff(G, -4, 4, -27, -22, -8, 0, { top: 'stone' });      // floor of the cave behind the falls
  water(-14, 39, -22, -8, -6, -0.4);

  // ---------- the plateau, the falls and the cave behind them ----------
  cliff(G, -44, 40, -62, -30, -8, 16);
  cliff(G, -44, -4, -30, -22, -8, 16);
  cliff(G, 4, 40, -30, -22, -8, 16);
  cliff(G, -4, 4, -30, -27, -8, 4, { top: 'stone', damp: true });   // back of the cave
  cliff(G, -4, 4, -30, -22, 4, 16, { top: 'stone', damp: true });   // lintel the river pours over
  // The river on top, running south to the lip.
  const stream = rippleTex(); stream.repeat.set(1, 6);
  const streamMesh = new THREE.Mesh(new THREE.PlaneGeometry(6, 40), new THREE.MeshStandardMaterial({ map: stream, color: 0xcfeeff, roughness: 0.1, transparent: true, opacity: 0.8, depthWrite: false }));
  streamMesh.rotation.x = -PI / 2; streamMesh.position.set(X(0), 16.03, -42); G.scene.add(streamMesh);
  anim.surfs.push({ tex: stream, sx: 0, sz: -0.5 });
  for (const s of [-1, 1]) for (let i = 0; i < 9; i++) rock(G, X(s * rand(3.4, 4.2)), -60 + i * 4.3, rand(0.5, 0.8), 16);
  waterfall(X(0), -21.2, 7.8, 16.1, -0.4, 0); // clear of the rock's bumps
  new Moon(G, X(0), 1.3, -25.4, 'Behind the Falls', { color: MOON.cyan });
  coinLine(G, [X(-2.5), 0.8, -24.2], [X(2.5), 0.8, -24.2], 3);
  new Moon(G, X(0), 17.4, -25.5, 'Top of the Falls', { color: MOON.gold });
  new Moon(G, X(6), -5.0, -15, 'Plunge Pool Dive', { color: MOON.green });
  coinRing(G, X(6), -4.6, -15, 2.6, 8);
  // The river tumbles off the east edge into the clouds.
  waterfall(X(40.7), -15, 13.6, 0.3, -45, PI / 2, false);
  new Sign(G, X(-12), 0, -5.5, 0, 'PLUNGE POOL', ['Dive deep, and peek', 'behind the waterfall...'], '#7fc4ff');

  // ---------- boundary cliffs ----------
  ridge(G, -66, -62, -66, -8, [21, 19, 23, 20, 22]);                     // west, behind the terraces
  ridge(G, -66, -58, -8, 28.4, [12, 10.5, 13, 11]);                      // west, by the meadow
  ridge(G, -66, -58, 31.6, 64, [11, 13.5, 10, 12]);
  cliff(G, -66, -61.5, 28.4, 31.6, -8, 11, { noLedge: true, tufts: false });  // back of the Chomp's cave
  cliff(G, -61.5, -58, 28.4, 31.6, 2.8, 11, { noLedge: true, tufts: false }); // and its low roof
  ridge(G, -66, 40, 60, 64, [10, 12.5, 11, 13, 10.5, 12, 9.5, 11.5]);   // south
  ridge(G, -66, 40, -66, -62, [22, 25, 21, 24, 23, 26, 22]);            // north

  // ---------- arrival meadow ----------
  zone(G, X(0), 44, 14, 10, C.yellow);
  const pipe = new Pipe(G, X(0), 0, 46, 1.3);
  pipe.facing = PI;
  G.fallsSpawn = { pos: V(0, 0, 43.5), facing: PI };
  pipe.onArrive = (G2) => { G2.spawn = G2.fallsSpawn; G2.spawnFlag = null; };
  if (G.fallsPipe) { pipe.link = G.fallsPipe; G.fallsPipe.link = pipe; }
  new Checkpoint(G, X(5.5), 0, 44, 'Falls Gate', PI);
  new Sign(G, X(-4), 0, 41.5, 0, 'TUMBLE FALLS', ['12 Power Moons hide in this', 'valley. Look high and low!'], '#5fd3c4');
  coinLine(G, [X(0), 0.8, 38], [X(0), 0.8, 30], 5);
  new QBlock(G, X(-7), 3.5, 36, 1); new QBlock(G, X(-6), 3.5, 36, 3); new QBlock(G, X(-5), 3.5, 36, 1);

  // ---------- the ancient spire (Grand Moon) ----------
  slab(G, 1, 4, 16, 19, -8, 1.2, C.wall);
  slab(G, 4, 7, 16, 19, -8, 2.4, C.wall);
  slab(G, 7, 21, 7, 21, -8, 4.2, C.wall);
  slab(G, 10, 18, 10, 18, 4.2, 10.5, C.wall);
  slab(G, 14.25, 17.75, 10.25, 13.75, 10.5, 17, C.wall);
  // Carved trim round the top of each tier.
  const trimM = themeMat('stone', 0xb9a88c);
  for (const [x0, x1, z0, z1, y] of [[7, 21, 7, 21, 4.2], [10, 18, 10, 18, 10.5], [14.25, 17.75, 10.25, 13.75, 17]]) {
    const t = new THREE.Mesh(worldUV(new THREE.BoxGeometry(x1 - x0 + 0.3, 0.4, z1 - z0 + 0.3), X((x0 + x1) / 2), y - 0.25, (z0 + z1) / 2), trimM);
    t.position.set(X((x0 + x1) / 2), y - 0.25, (z0 + z1) / 2); t.castShadow = true; G.scene.add(t);
  }
  new Flower(G, X(8.6), 4.2, 14, { power: 23, color: 0x7fd8ff });
  new Mover(G, V(12, 10.75, 16), V(12, 16.75, 16), { x: 3, y: 0.5, z: 3 }, 4.6, C.green);
  const grand = new Moon(G, X(16), 18.7, 12, 'Spire Summit', { color: 0xffe066 });
  grand.group.scale.setScalar(1.6); grand.grand = true;
  const stone = std(0xd9cfbd, { roughness: 0.95 });
  for (const [cx, cz] of [[8, 8], [20, 8], [20, 20], [8, 20]]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 2.6, 12), stone); col.position.set(X(cx), 4.2 + 1.3, cz); col.castShadow = true; G.scene.add(col);
    const capM = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.3, 1.3), stone); capM.position.set(X(cx), 6.65, cz); capM.castShadow = true; G.scene.add(capM);
    G.world.cyl(X(cx), cz, 0.55, 4.2, 6.8, { noLedge: true });
  }
  coinRing(G, X(14), 5.0, 14, 6.2, 12);
  coinLine(G, [X(8.6), 6, 14], [X(8.6), 9.5, 14], 3);
  new Sign(G, X(2.5), 0, 22.5, PI / 5, 'THE OLD SPIRE', ['Climb the steps, bounce the', 'flower, then ride the lift.'], '#c49bff');
  new Checkpoint(G, X(4), 0, 26, 'Spire Base', PI);

  // ---------- west: cliff terraces up to the plateau ----------
  const steps = [[-22, -18, 2.5], [-26, -22, 5], [-30, -26, 7.5], [-34, -30, 10], [-38, -34, 12.5], [-42, -38, 15], [-62, -42, 16]];
  for (const [z0, z1, y] of steps) cliff(G, -62, -44, z0, z1, -8, y);
  for (const [z0, z1, y] of steps.slice(0, 6)) new Coin(G, X(-53), y + 0.9, (z0 + z1) / 2);
  new Sign(G, X(-49), 0, -15.5, 0, 'CLIFF TERRACES', ['Jump and grab each ledge', 'to reach the plateau.'], '#8fdc7a');
  new Checkpoint(G, X(-14), 16, -38, 'Falls Summit', 0);

  // ---------- frog and its pillar ----------
  const lily = new THREE.Mesh(new THREE.CircleGeometry(3.2, 40), new THREE.MeshStandardMaterial({ color: 0x3fb7e8, roughness: 0.15, transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -3 }));
  lily.rotation.x = -PI / 2; lily.position.set(X(-24), 0.01, -1); lily.receiveShadow = true; G.scene.add(lily);
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * TAU + 0.4, pad = new THREE.Mesh(new THREE.CircleGeometry(0.6, 18, 0.3, TAU - 0.6), std(0x55c45e));
    pad.rotation.x = -PI / 2; pad.position.set(X(-24) + Math.cos(a) * 1.9, 0.02, -1 + Math.sin(a) * 1.9); G.scene.add(pad);
  }
  new Frog(G, X(-24), 0, -1);
  cliff(G, -32, -28, -18, -14, -8, 6.5);
  new Moon(G, X(-30), 7.7, -16, 'Frog Pillar', { color: MOON.green });

  // ---------- blue staircase over the pool (P switch) ----------
  const blue = [];
  for (let i = 0; i < 11; i++) { const t = 1.05 * (i + 1); blue.push([X(-8), t - 0.25, 10 - i * 1.75, 2, 0.5, 1.3]); }
  new PSwitch(G, X(-8), 0, 13, blue, 12);
  cliff(G, -9.3, -6.7, -11.3, -8.7, -8, 12.6, { top: 'stone', damp: true });
  new Moon(G, X(-8), 13.8, -10, 'Blue Stair Dash', { color: MOON.cyan });
  new Sign(G, X(-11.5), 0, 14, PI / 6, 'P SWITCH', ['12 seconds to climb', 'the blue stairs!'], '#7fc4ff');

  // ---------- spark pylon up to the plateau ----------
  const a = V(32, 2.6, 2), b = V(32, 18.6, -40);
  const wire = new THREE.CatmullRomCurve3([a, V(32, 13, -12), V(32, 20, -24), b]);
  wireMesh(G, wire);
  new Pylon(G, X(32), 0, 2, wire, PI);
  new Pylon(G, X(32), 16, -40, new THREE.CatmullRomCurve3(wire.points.slice().reverse()), 0);
  new Moon(G, X(35), 17.4, -44, 'Live Wire Lift', { color: MOON.purple });
  new Sign(G, X(28.5), 0, 4.5, -PI / 5, 'SPARK PYLON', ['Cap the pylon to zip', 'up to the plateau.'], '#7fc4ff');

  // ---------- Chain Chomp and the sealed cave ----------
  zone(G, X(-47), 30, 16, 12, C.grey);
  new ChainChomp(G, X(-45.5), 30, 5.5);
  new Boulder(G, X(-57), 30, 2.6);
  new Moon(G, X(-60), 1.3, 30, 'Chomp Cave', { color: MOON.red });
  new Sign(G, X(-40), 0, 24.5, -PI / 4, 'SEALED CAVE', ['Something shiny behind that', 'boulder. Who could crack it?'], '#aab2c0');

  // ---------- Goomba picnic ----------
  zone(G, X(26), 40, 14, 12, C.red);
  const pen = { x: X(26), z: 39, r: 4.5 };
  for (const [gx, gz] of [[-2.5, 37], [2, 36.5], [3, 41], [-2, 42]]) new Goomba(G, X(26 + gx), 0, gz, pen);
  slab(G, 24, 28, 45, 48, -8, 3, C.pink);
  const picnic = new Moon(G, X(26), 1.4, 42.6, 'Goomba Picnic', { hidden: true, color: MOON.pink });
  new Goombette(G, X(26), 3, 45.6, picnic, PI);
  fence(G, X(19), 33, X(33), 33);
  new Sign(G, X(17.5), 0, 36, -PI / 3, 'GOOMBA PICNIC', ['She only likes tall', 'Goombas...'], '#ff6b6b');

  // ---------- ruins ----------
  const ruinMoon = new Moon(G, X(-22), 1.4, 40, 'Ruined Bricks', { hidden: true, color: MOON.orange });
  for (const bx of [-23, -22, -21]) for (const bz of [39, 40, 41]) new Brick(G, X(bx), 0.5, bz, bx === -22 && bz === 40 ? ruinMoon : null);
  new Brick(G, X(-22), 1.5, 40);
  for (const [cx, cz, h] of [[-26, 37, 3.2], [-18, 37, 1.6], [-26, 43, 2.2], [-18, 43, 3.6]]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, h, 12), stone); col.position.set(X(cx), h / 2, cz); col.castShadow = true; G.scene.add(col);
    G.world.cyl(X(cx), cz, 0.5, 0, h, { noLedge: true });
  }

  // ---------- the old post, hidden in the flowers ----------
  const postMoon = new Moon(G, X(-44), 2.2, 52, 'Old Post', { hidden: true, color: MOON.gold });
  new Stake(G, X(-44), 0, 52, postMoon);
  flowers(G, X(-44), 52, 30, 3);
  for (const [bx, bz] of [[-47, 50], [-41, 54.5], [-46.5, 55], [-41.5, 49]]) bush(G, X(bx), bz, rand(1, 1.3));

  // ---------- east edge: long jump to the outcrop ----------
  cliff(G, 47, 53, 20, 26, -3, 0);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(3.6, 8, 9), std(0x9a7652, { roughness: 1 }));
  cone.rotation.x = PI; cone.position.set(X(50), -7, 23); cone.castShadow = true; G.scene.add(cone);
  new Moon(G, X(50), 1.3, 23, 'Over the Edge', { color: MOON.orange });
  coinArc(G, [X(40), 1.4, 23], [X(47), 1.4, 23], 4, 1.6);
  new Sign(G, X(36.5), 0, 27.5, -PI / 2.6, 'THE EDGE', ['Run, Crouch, Jump:', 'long jump the gap!'], '#ff9a52');
  for (let z = -6; z < 58; z += 8) if (z < 18 || z > 28) rock(G, X(rand(38.4, 39.4)), z + rand(-1, 1), rand(0.5, 0.9));

  // ---------- greenery ----------
  for (const [x, z, s] of [[-54, 56, 1.5], [-50, 44, 1.3], [-56, 6, 1.4], [-52, -2, 1.2], [-38, 12, 1.3], [-14, 56, 1.4], [-30, 56, 1.2],
    [12, 56, 1.5], [36, 54, 1.3], [16, 30, 1.2], [-36, -12, 1.3], [-20, -16, 1.1], [22, 28, 1.1], [36, 14, 1.3], [-10, 30, 1.1]]) tree(G, X(x), z, s);
  for (const [x, z, s] of [[-30, -45, 1.4], [-20, -55, 1.6], [-8, -48, 1.3], [12, -52, 1.5], [22, -36, 1.2], [36, -56, 1.4], [-38, -56, 1.3], [-56, -52, 1.4]]) tree(G, X(x), z, s, 16);
  for (const [x, z] of [[-34, 18], [-12, 22], [10, 34], [32, 26], [-28, 50], [20, 52], [-40, -2], [-6, -4]]) bush(G, X(x), z, rand(0.9, 1.3));
  for (const [x, z] of [[14, -46], [-26, -38], [28, -58]]) bush(G, X(x), z, rand(1, 1.3), 16);
  for (const [x, z, n, r] of [[-8, 50, 18, 2], [14, 44, 16, 1.8], [-34, 34, 14, 1.6], [22, 6, 14, 1.6], [-20, 8, 16, 2]]) flowers(G, X(x), z, n, r);
  for (const [x, z, n, r] of [[-18, -48, 14, 2], [18, -44, 12, 1.6]]) flowers(G, X(x), z, n, r, 16);
  for (const [x, z, s] of [[-17, -12, 0.9], [10, -5, 0.7], [-44, 8, 1], [30, 50, 0.9], [-54, 20, 1.1]]) rock(G, X(x), z, s);
  grassTufts(G, G.low ? 500 : 1800, () => {
    const x = X(rand(-62, 40)), z = rand(-62, 60);
    if (z < -22 && Math.abs(x - KX) < 3.6) return null; // the stream on the plateau
    const g = groundBelow(G.world, x, 30, z);
    if (!g || !g.s.grass) return null;
    return tuftBlocked(G, x, g.y, z, g.s) ? null : [x, g.y, z];
  });

  // ---------- far scenery: mountains all round and a sea of clouds below the edge ----------
  const blobGeo = new THREE.IcosahedronGeometry(1, 3);
  const nearHill = std(0x86ad6a, { roughness: 1 }), farHill = std(0xa3b9cf, { roughness: 1 });
  for (let i = 0; i < 22; i++) {
    const ang = i / 22 * TAU + rand(-0.1, 0.1);
    if (Math.cos(ang) > 0.35) continue; // keep the view off the east edge open
    const d = rand(110, 165), r = rand(30, 58);
    const m = new THREE.Mesh(blobGeo, i % 2 ? farHill : nearHill);
    m.position.set(X(-10) + Math.cos(ang) * d, -r * 0.35, Math.sin(ang) * d); m.scale.set(r * 1.3, r, r * 1.3);
    G.scene.add(m);
  }
  // A painted sea of clouds far below, fading into the haze.
  const seaTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#d3dcee'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      const x = Math.random() * w, y = Math.random() * h, r = 14 + Math.random() * 34;
      for (const ox of [0, -w, w]) for (const oy of [0, -h, h]) {
        const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
        gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.6, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = gr; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
      }
      g.fillStyle = 'rgba(176,190,222,0.18)'; g.beginPath(); g.ellipse(x, y + r * 0.45, r * 0.8, r * 0.25, 0, 0, TAU); g.fill();
    }
  });
  seaTex.wrapS = seaTex.wrapT = THREE.RepeatWrapping; seaTex.repeat.set(14, 14);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(520, 520), new THREE.MeshStandardMaterial({ map: seaTex, emissive: 0xc8d4ec, emissiveIntensity: 0.2, roughness: 1 }));
  sea.rotation.x = -PI / 2; sea.position.set(X(70), -18, 0); G.scene.add(sea);
  anim.surfs.push({ tex: seaTex, sx: 0.004, sz: 0.0015 });
  for (let i = 0; i < 16; i++) new Cloud(G, X(-110 + i * 15), i % 3 ? rand(-15, -9) : rand(32, 48), rand(-100, 100), rand(4, 7), KX);

  // ---------- moving water, foam and mist ----------
  G.objects.push({
    render(dt, time, G2) {
      for (const f of anim.falls) f.tex.offset.y += f.speed * dt;
      for (const s of anim.surfs) { s.tex.offset.x += s.sx * dt; s.tex.offset.y += s.sz * dt; }
      for (const f of anim.foam) { const k = f.k * (0.9 + Math.sin(time * 5 + f.phase) * 0.25); f.m.scale.set(k * 1.3, k * 0.45, k); }
      if (!dt || G2.P.pos.x < KX - 120) return;
      anim.mistT -= dt;
      if (anim.mistT > 0) return;
      anim.mistT = 0.05;
      for (const m of anim.mist) {
        const t = rand(-0.5, 0.5) * m.w;
        G2.fx.spawn(m.x + Math.cos(m.rotY) * t, m.y + 0.2, m.z + 0.8, rand(-0.6, 0.6), rand(1.2, 2.6), rand(0.6, 1.6), rand(0.9, 1.5), rand(0.35, 0.6), 0.9, 0xf4fbff, 0.3, 1.2);
      }
    },
  });

  // Tag the moons for the Moons tab, and add warps (each with a time trial).
  for (const m of G.moons) if (m.base.x > KX - 100) m.kingdom = KINGDOM;
  G.stations.push(...[
    ['Falls Gate', 0, 0, 42, PI], ['Plunge pool', 0, 0, -5, PI, 'Behind the Falls'], ['Old spire', 2, 0, 25, PI * 0.8, 'Spire Summit'],
    ['Cliff terraces', -50, 0, -12, PI, 'Top of the Falls'], ['Spark pylon', 30, 0, 6, PI, 'Live Wire Lift'], ['Blue stairs', -8, 0, 16, PI, 'Blue Stair Dash'],
    ['Frog pillar', -20, 0, 2, -PI * 0.75, 'Frog Pillar'], ['Sealed cave', -40, 0, 30, -PI / 2], ['The edge', 30, 0, 23, PI / 2, 'Over the Edge'],
  ].map(([name, x, y, z, f, moon]) => ({ name, pos: V(x, y, z), facing: f, moon, group: KINGDOM })));
}

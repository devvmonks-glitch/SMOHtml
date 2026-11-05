import * as THREE from 'three';
import { std } from './character.js';
import { TAU } from './util.js';

// Set dressing that turns the test room into a garden: trees, bushes, flowers, rocks,
// lamps, a fence round the Goomba pen and hills beyond the walls. Everything here is
// placed away from the stations so it never gets in the way of a move.

let seed = 1234;
const rnd = (a = 0, b = 1) => a + ((seed = (seed * 16807) % 2147483647) / 2147483647) * (b - a);
const blob = new THREE.IcosahedronGeometry(1, 2);
const leafMats = [0x6fae4d, 0x5f9f45, 0x82bd58, 0x4f8f3e].map((c) => std(c, { roughness: 0.9 }));
const bark = std(0x7a5232, { roughness: 0.95 });

function add(G, mesh, cast = true) { mesh.castShadow = cast; mesh.receiveShadow = true; G.scene.add(mesh); return mesh; }

export function tree(G, x, z, s = 1) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rnd(0, TAU); G.scene.add(g);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.32 * s, 2.4 * s, 10), bark);
  trunk.position.y = 1.2 * s; trunk.castShadow = true; g.add(trunk);
  const n = 4 + Math.floor(rnd(0, 3));
  for (let i = 0; i < n; i++) {
    const a = i / n * TAU + rnd(-0.3, 0.3), r = i === 0 ? 0 : rnd(0.5, 0.9) * s;
    const m = new THREE.Mesh(blob, leafMats[i % leafMats.length]);
    const k = (i === 0 ? 1.5 : rnd(0.9, 1.25)) * s;
    m.position.set(Math.cos(a) * r, (i === 0 ? 3.3 : rnd(2.5, 3.2)) * s, Math.sin(a) * r);
    m.scale.set(k, k * 0.85, k); m.castShadow = true; m.receiveShadow = true; g.add(m);
  }
  G.world.cyl(x, z, 0.35 * s, 0, 2.6 * s, { noLedge: true });
}

export function bush(G, x, z, s = 1) {
  for (let i = 0; i < 3; i++) {
    const m = add(G, new THREE.Mesh(blob, leafMats[(i + 1) % leafMats.length]));
    const k = s * rnd(0.55, 0.8);
    m.position.set(x + rnd(-0.5, 0.5) * s, k * 0.6, z + rnd(-0.5, 0.5) * s); m.scale.set(k, k * 0.8, k);
  }
  G.world.cyl(x, z, 0.7 * s, 0, 0.9 * s, { noLedge: true, noWall: true });
}

const petalGeo = new THREE.SphereGeometry(0.09, 8, 6), stemGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.35, 4);
const petalMats = [0xfff4d6, 0xffc0d8, 0xffdd6e, 0xc9b6ff, 0xff9e7a].map((c) => std(c, { roughness: 0.7 }));
const stemMat = std(0x5f9f45, { roughness: 0.9 });
export function flowers(G, x, z, n = 14, r = 1.6) {
  for (let i = 0; i < n; i++) {
    const a = rnd(0, TAU), d = Math.sqrt(rnd()) * r, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d;
    const stem = add(G, new THREE.Mesh(stemGeo, stemMat), false); stem.position.set(px, 0.17, pz);
    const p = add(G, new THREE.Mesh(petalGeo, petalMats[i % petalMats.length]), false); p.position.set(px, 0.36, pz); p.scale.set(1.3, 0.6, 1.3);
  }
}

const rockGeo = new THREE.DodecahedronGeometry(1, 0), rockMat = std(0xb3aa9c, { roughness: 0.95, flatShading: true });
export function rock(G, x, z, s = 1) {
  const m = add(G, new THREE.Mesh(rockGeo, rockMat));
  m.position.set(x, s * 0.35, z); m.scale.set(s * rnd(0.9, 1.3), s * rnd(0.5, 0.8), s * rnd(0.9, 1.2)); m.rotation.set(rnd(0, 1), rnd(0, TAU), rnd(0, 1));
  G.world.cyl(x, z, s * 0.9, 0, s * 0.7, { noLedge: true });
}

const lampGlow = new THREE.MeshStandardMaterial({ color: 0xffe2a0, emissive: 0xffc860, emissiveIntensity: 1.4, roughness: 0.4 });
const iron = std(0x3d3a44, { roughness: 0.5, metalness: 0.4 });
export function lamp(G, x, z) {
  const post = add(G, new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.8, 8), iron)); post.position.set(x, 1.4, z);
  const cap = add(G, new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.25, 8), iron)); cap.position.set(x, 3.15, z);
  const glow = add(G, new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), lampGlow), false); glow.position.set(x, 2.92, z);
  G.world.cyl(x, z, 0.12, 0, 2.8, { noLedge: true, noWall: true });
}

const fenceMat = std(0xa77a4c, { roughness: 0.9 });
export function fence(G, x0, z0, x1, z1) {
  const len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len / 1.6)), a = Math.atan2(x1 - x0, z1 - z0);
  for (let i = 0; i <= n; i++) {
    const t = i / n, post = add(G, new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, 0.12), fenceMat));
    post.position.set(x0 + (x1 - x0) * t, 0.35, z0 + (z1 - z0) * t);
  }
  for (const y of [0.25, 0.52]) {
    const rail = add(G, new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, len), fenceMat));
    rail.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); rail.rotation.y = a;
  }
}

export function decorate(G) {
  // A ring of trees just inside the walls, with bushes in between.
  for (let i = 0; i < 44; i++) {
    const side = i % 4, t = (Math.floor(i / 4) + 0.5) / 11 * 2 - 1, inset = rnd(70, 76);
    const along = t * 74 + rnd(-2, 2);
    const [x, z] = side === 0 ? [along, -inset] : side === 1 ? [along, inset] : side === 2 ? [-inset, along] : [inset, along];
    tree(G, x, z, rnd(1.1, 1.6));
    if (i % 2) bush(G, x + rnd(-4, 4), z + rnd(-4, 4), rnd(0.9, 1.3));
  }
  // Accent trees in open ground between stations.
  for (const [x, z, s] of [[-7, 22, 1.1], [10, -28, 1.2], [-20, -32, 1.3], [26, 32, 1.1], [48, -8, 1.3], [-48, 12, 1.4],
    [-40, 42, 1.2], [46, 50, 1.3], [-50, -18, 1.2], [62, 4, 1.3], [-2, -40, 1.4], [30, -40, 1.2]]) tree(G, x, z, s);
  for (const [x, z] of [[-11, 20], [8, -34], [-24, -36], [52, -12], [-46, 30], [20, 44], [34, 40]]) bush(G, x, z, rnd(0.9, 1.2));
  for (const [x, z, n, r] of [[7.5, 15, 16, 1.6], [-17, 28, 20, 2.2], [-6, -6, 12, 1.4], [22, -20, 18, 2], [-36, 8, 14, 1.6],
    [-28, 18, 12, 1.4], [44, 12, 16, 1.8], [-6, 46, 16, 2]]) flowers(G, x, z, n, r);
  for (const [x, z, s] of [[-25.5, 38, 0.9], [-18, 34, 0.7], [16, -26, 0.8], [-38, -10, 0.9], [50, 40, 1.1], [-52, 0, 0.8]]) rock(G, x, z, s);
  for (const [x, z] of [[-8, 0], [8, 0], [-8, 17], [8, 17]]) lamp(G, x, z);
  // Fence round the Goomba pen (decoration only; the Goombas keep to the pen themselves).
  fence(G, -7, 26, 7, 26); fence(G, -7, 26, -7, 38); fence(G, 7, 26, 7, 38);

  // Rolling hills beyond the walls, softened by the haze.
  const hill = std(0x7fae66, { roughness: 1 });
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * TAU + rnd(-0.1, 0.1), d = rnd(115, 150), r = rnd(22, 40);
    const m = new THREE.Mesh(blob, hill);
    m.position.set(Math.cos(a) * d, -r * 0.55, Math.sin(a) * d); m.scale.set(r * 1.6, r, r * 1.6);
    m.receiveShadow = false; G.scene.add(m);
  }
}

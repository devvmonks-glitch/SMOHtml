import * as THREE from 'three';
import { worldUV, themeMat } from './materials.js';
import { decorate } from './decor.js';
import { PI, TAU } from './util.js';
import { Coin, Moon, Flower, Spring, QBlock, Brick, Stake, PSwitch, Checkpoint, Pipe, Mover, Spinner, Sign, Cloud, Boulder } from './objects.js';
import { Frog, Goomba, Goombette, Pylon, ChainChomp, wireMesh } from './captures.js';

export const C = {
  floor: 0xc9ced6, wall: 0xe8ebf0, white: 0xf4f1ea, orange: 0xff9a52, yellow: 0xffd166, pink: 0xff7fb4,
  purple: 0xa78bfa, blue: 0x7fc4ff, green: 0x8fdc7a, teal: 0x5fd3c4, red: 0xff6b6b, grey: 0xaab2c0,
};
export const MOON = { gold: 0xffd23f, cyan: 0x5fe0ff, pink: 0xff7fc8, orange: 0xffa03f, green: 0x7dff8a, purple: 0xc49bff, red: 0xff6b6b };

// What each station colour is built from: [top surface, sides, tint for the sides].
const LOOK = {
  [C.floor]: ['grass', 'dirt'], [C.wall]: ['stone', 'stone', 0xe6dccb], [C.white]: ['grass', 'stone'],
  [C.orange]: ['grass', 'brick'], [C.yellow]: ['wood', 'wood', 0xffe6b0], [C.pink]: ['grass', 'plaster', 0xffc6d6],
  [C.purple]: ['stone', 'stone', 0xd4c2f0], [C.blue]: ['wood', 'wood', 0xa9cdf0], [C.green]: ['grass', 'dirt'],
  [C.teal]: ['grass', 'stone', 0xb4e0d6], [C.red]: ['brick', 'brick'], [C.grey]: ['stone', 'stone'],
};

// A solid block of painted grass, stone, brick, wood or plaster. y0 is the bottom.
export function block(G, x, y0, z, sx, sy, sz, color, opts = {}) {
  const cy = y0 + sy / 2;
  const s = G.world.box(x, cy, z, sx, sy, sz, opts);
  const geo = worldUV(new THREE.BoxGeometry(sx, sy, sz), x, cy, z);
  const [top, side, tint = 0xffffff] = LOOK[color] || ['stone', 'stone', color];
  const sideM = themeMat(side, tint), topM = top === 'grass' ? themeMat('grass') : themeMat(top, tint);
  // BoxGeometry face order: +x, -x, +y, -y, +z, -z.
  const m = new THREE.Mesh(geo, [sideM, sideM, topM, sideM, sideM, sideM]);
  m.position.set(x, cy, z); m.castShadow = !opts.noShadow; m.receiveShadow = true;
  G.scene.add(m);
  s.mesh = m;
  return s;
}

export function coinLine(G, a, b, n) {
  for (let i = 0; i < n; i++) { const t = n === 1 ? 0 : i / (n - 1); new Coin(G, a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t); }
}
export function coinRing(G, x, y, z, r, n) {
  for (let i = 0; i < n; i++) { const a = i / n * TAU; new Coin(G, x + Math.cos(a) * r, y, z + Math.sin(a) * r); }
}
export function coinArc(G, a, b, n, height) {
  for (let i = 0; i < n; i++) {
    const t = (i + 1) / (n + 1);
    new Coin(G, a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t + Math.sin(t * PI) * height, a[2] + (b[2] - a[2]) * t);
  }
}
// A paved pad under each station, faintly tinted with the station colour.
export function zone(G, x, z, w, d, color) {
  const geo = new THREE.PlaneGeometry(w, d); geo.rotateX(-PI / 2);
  worldUV(geo, x, 0, z);
  const tint = new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.72);
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: tint, map: themeMat('path').map, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2 }));
  m.position.set(x, 0.006, z); m.receiveShadow = true;
  G.scene.add(m);
  G.zones.push({ x, z, w, d });
}

export function buildLevel(G) {
  const W = G.world;

  // ---------- room shell ----------
  block(G, 0, -2, 0, 164, 2, 164, C.floor, { noShadow: true, noCam: true });
  for (const [x, z, sx, sz] of [[0, -82, 164, 2], [0, 82, 164, 2], [-82, 0, 2, 164], [82, 0, 2, 164]])
    block(G, x, 0, z, sx, 8, sz, C.wall, { noLedge: true, noShadow: true });
  for (let i = 0; i < 10; i++) new Cloud(G, -110 + i * 24, 34 + Math.random() * 14, -70 + Math.random() * 140, 3 + Math.random() * 2.5);

  // ---------- plaza ----------
  zone(G, 0, 6, 16, 14, C.yellow);
  new Sign(G, 0, 0, -1, 0, 'HOP LAB · DEV ROOM', ['Every station has a Power Moon.', 'Press ? for moves and warps.'], '#ffd166');
  coinRing(G, 0, 0.8, 4, 2.6, 10);
  new Checkpoint(G, 4, 0, 12, 'Plaza', PI);
  // ? blocks
  new QBlock(G, -6, 3.5, 5, 1); new QBlock(G, -5, 3.5, 5, 5); new QBlock(G, -4, 3.5, 5, 1);
  new Sign(G, -5, 0, 7.5, 0, '? BLOCKS', ['Jump into them from below.', 'The middle one has 5 coins.'], '#ffd166');
  // brick pyramid with a hidden moon
  const brickMoon = new Moon(G, 9, 1.4, 5, 'Brick Breaker', { hidden: true, color: MOON.orange });
  for (const bx of [8, 9, 10]) for (const bz of [4, 5, 6]) new Brick(G, bx, 0.5, bz, bx === 9 && bz === 5 ? brickMoon : null);
  new Brick(G, 9, 1.5, 5);
  new Sign(G, 9, 0, 8, 0, 'BRICKS', ['Ground pound the top brick', 'and keep pounding through.'], '#ff9a52');
  // ground-pound post
  const postMoon = new Moon(G, -9, 2.2, 13, 'Pound the Post', { hidden: true, color: MOON.green });
  new Stake(G, -9, 0, 13, postMoon);
  new Sign(G, -9, 0, 15.5, 0, 'POST', ['Ground pound it flat.'], '#8fdc7a');

  // ---------- north: jump tiers ----------
  zone(G, -12.5, -18, 18, 8, C.orange);
  block(G, -18, 0, -18, 3.5, 1.6, 3.5, C.white);
  block(G, -12.5, 0, -18, 3.5, 2.5, 3.5, C.yellow);
  block(G, -7, 0, -18, 3.5, 4.2, 3.5, C.orange);
  new Coin(G, -18, 2.4, -18); new Coin(G, -12.5, 3.3, -18);
  new Moon(G, -7, 5.3, -18, 'Triple Jump Tier', { color: MOON.gold });
  new Sign(G, -12.5, 0, -13.2, 0, 'JUMP CHAIN', ['1.6m · 2.5m · 4.2m', 'Run and jump as you land, 3 times.'], '#ff9a52');
  new Checkpoint(G, -2, 0, -12, 'Jump Tiers', PI);

  // long jump gap
  zone(G, 4, -21, 5, 26, C.blue);
  block(G, 4, 0, -9, 3, 1, 2, C.white);
  block(G, 4, 0, -14, 3, 2, 8, C.blue);
  block(G, 4, 0, -28.5, 3, 2, 6, C.blue);
  coinArc(G, [4, 2.8, -18], [4, 2.8, -25.5], 5, 1.4);
  new Moon(G, 4, 3.4, -29.5, 'Long Jump Gap', { color: MOON.cyan });
  new Sign(G, 7, 0, -9, -PI / 6, 'LONG JUMP · 7.5m', ['Run, hold Crouch, then Jump.'], '#7fc4ff');

  // backflip pillar
  zone(G, 18, -15, 6, 7, C.purple);
  block(G, 18, 0, -16, 2.2, 4.6, 2.2, C.purple);
  new Moon(G, 18, 5.8, -16, 'Backflip Pillar', { color: MOON.purple });
  new Sign(G, 18, 0, -12.2, 0, 'BACKFLIP · 4.6m', ['Stand still, hold Crouch, Jump.'], '#a78bfa');

  // P switch staircase
  zone(G, 14, 0, 5, 18, C.blue);
  const steps = [];
  for (let i = 0; i < 8; i++) { const top = 1.1 * (i + 1); steps.push([14, top - 0.25, 6 - i * 1.7, 2, 0.5, 1.3]); }
  steps.push([14, 9.9 - 0.25, -7.8, 2.6, 0.5, 2.6]);
  new PSwitch(G, 14, 0, 8.5, steps, 9);
  new Moon(G, 14, 11.1, -7.8, 'Timed Staircase', { color: MOON.cyan });
  new Sign(G, 17, 0, 10, -PI / 5, 'P SWITCH', ['Step on it. 9 seconds to climb!'], '#7fc4ff');

  // ---------- west: wall jump chimney + ledge ladder ----------
  zone(G, -29.3, 0, 8, 10, C.orange);
  block(G, -31.7, 0, 0, 1.4, 14, 7, C.orange);
  block(G, -26.9, 0, 0, 1.4, 14, 7, C.orange);
  new Moon(G, -29.3, 13, 0, 'Chimney Climb', { color: MOON.orange });
  coinLine(G, [-29.3, 3, 0], [-29.3, 9, 0], 4);
  new Sign(G, -24, 0, 4.5, -PI / 2.4, 'WALL JUMP · 14m', ['Slide down a wall, then Jump.', 'Hold toward each wall.'], '#ff9a52');
  new Checkpoint(G, -22, 0, -4, 'West Wing', -PI / 2);

  zone(G, -30, -14, 8, 14, C.teal);
  block(G, -30, 0, -13.5, 6, 3, 3, C.teal);
  block(G, -30, 0, -16.5, 6, 5.5, 3, C.white);
  block(G, -30, 0, -19.5, 6, 8, 3, C.teal);
  new Moon(G, -30, 9.3, -19.5, 'Ledge Ladder', { color: MOON.green });
  new Sign(G, -25, 0, -9.5, -PI / 4, 'LEDGE GRAB', ['Jump at a ledge and hold toward it.', 'Jump to climb, move to shimmy.'], '#5fd3c4');

  // lookout tower reached by pipe
  block(G, -44, 0, -40, 5, 20, 5, C.grey);
  const pipeA = new Pipe(G, -14, 0, 14, 1.3), pipeB = new Pipe(G, -44, 20, -40, 1.0);
  pipeA.link = pipeB; pipeB.link = pipeA;
  new Moon(G, -44, 21.6, -42, 'Pipe Dream Lookout', { color: MOON.red });
  new Checkpoint(G, -42.6, 20, -38.6, 'Lookout', PI / 4);
  new Sign(G, -14, 0, 17, 0, 'WARP PIPE', ['Crouch on it, or ground', 'pound onto it.'], '#8fdc7a');

  // ---------- south-west: captures ----------
  // frog pond and cliff
  const pond = new THREE.Mesh(new THREE.CircleGeometry(5, 48), new THREE.MeshStandardMaterial({ color: 0x3fb7e8, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -3 }));
  pond.rotation.x = -PI / 2; pond.position.set(-22, 0.01, 24); pond.receiveShadow = true; G.scene.add(pond);
  for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; const pad = new THREE.Mesh(new THREE.CircleGeometry(0.7, 20, 0.3, TAU - 0.6), new THREE.MeshStandardMaterial({ color: 0x55c45e })); pad.rotation.x = -PI / 2; pad.position.set(-22 + Math.cos(a) * 3, 0.02, 24 + Math.sin(a) * 3); G.scene.add(pad); }
  new Frog(G, -22, 0, 24);
  block(G, -31, 0, 31, 8, 6.5, 8, C.green);
  new Moon(G, -31, 7.7, 31, 'Frog Leap', { color: MOON.green });
  new Sign(G, -16, 0, 19, -PI / 4, 'FROG · 6.5m cliff', ['Throw your cap at the frog.', 'Jump for a huge leap.'], '#8fdc7a');

  // goomba pen + goombette
  zone(G, 0, 32, 14, 12, C.red);
  const pen = { x: 0, z: 32, r: 5 };
  for (const [gx, gz] of [[-3, 30], [2, 29], [3.5, 34], [-2, 35], [0, 32]]) new Goomba(G, gx, 0, gz, pen);
  block(G, 0, 0, 40.5, 4, 3, 3, C.pink);
  const betteMoon = new Moon(G, 0, 1.4, 36.6, 'Goomba Tower', { hidden: true, color: MOON.pink });
  new Goombette(G, 0, 3, 39.6, betteMoon, PI);
  coinRing(G, 0, 0.8, 32, 6.5, 8);
  new Sign(G, 9, 0, 27, -PI / 4, 'GOOMBA TOWER', ['Capture one, then land on others', 'to stack. Reach the one on top!'], '#ff6b6b');
  new Checkpoint(G, 10, 0, 22, 'Capture Yard', 0);

  // spark pylon to the east tower
  block(G, 36, 0, 0, 6, 14, 6, C.grey);
  const a = new THREE.Vector3(20, 2.6, 26), b = new THREE.Vector3(36, 16.6, 0);
  const wire = new THREE.CatmullRomCurve3([a, new THREE.Vector3(25, 9, 19), new THREE.Vector3(31, 15.5, 8), b]);
  wireMesh(G, wire);
  const back = new THREE.CatmullRomCurve3(wire.points.slice().reverse());
  new Pylon(G, 20, 0, 26, wire, Math.atan2(b.x - 31, b.z - 8));
  new Pylon(G, 36, 14, 0, back, Math.atan2(20 - 25, 26 - 19));
  new Moon(G, 34, 15.4, -1.8, 'Electric Express', { color: MOON.cyan });
  new Sign(G, 17.5, 0, 24, PI / 3, 'SPARK PYLON', ['Throw your cap at the orb', 'to ride the wire.'], '#7fc4ff');

  // ---------- east: cap jump float ----------
  zone(G, 24, 16, 6, 16, C.yellow);
  block(G, 24, 0, 9.5, 3, 1, 2, C.white);
  block(G, 24, 0, 13, 4, 2, 4, C.yellow);
  // The cap stops ~4m out, short of the float, so you bounce up in front of it.
  block(G, 24, 4.9, 21.5, 3.5, 0.6, 3.5, C.yellow);
  new Moon(G, 24, 6.7, 21.5, 'Cap Jump Float', { color: MOON.gold });
  new Sign(G, 27.5, 0, 8, -PI / 5, 'CAP JUMP', ['Jump, throw your cap,', 'then jump into it again.'], '#ffd166');
  new Checkpoint(G, 26, 0, 2, 'East Wing', PI / 2);

  // flower garden
  zone(G, 33, -11, 16, 12, C.pink);
  new Flower(G, 28, 0, -8, { power: 23 });
  block(G, 34, 0, -8, 4, 6, 4, C.pink);
  new Flower(G, 34, 6, -8, { power: 23, color: 0xb18cff });
  block(G, 40, 0, -14, 4, 12, 4, C.purple);
  new Moon(G, 40, 13.3, -14, 'Flower Garden Summit', { color: MOON.pink });
  new Flower(G, 28, 0, -14, { power: 15, color: 0xffb347 });
  new Flower(G, 31, 0, -16, { power: 12, color: 0xff6b6b });
  coinLine(G, [28, 3, -8], [28, 7, -8], 3);
  new Sign(G, 25, 0, -5, -PI / 3, 'JUMP FLOWERS', ['Land on one to launch.', 'Jump or pound for extra height.'], '#ff7fb4');

  // platform course
  zone(G, 46, 26, 26, 20, C.blue);
  new Spring(G, 35.5, 0, 20, 21);
  block(G, 40, 0, 20, 4, 6, 4, C.blue);
  new Mover(G, new THREE.Vector3(45.5, 5.75, 20), new THREE.Vector3(52, 5.75, 20), { x: 3, y: 0.5, z: 3 }, 3.6, C.yellow);
  new Spinner(G, 57, 6, 20, 2.5, 1.1);
  new Mover(G, new THREE.Vector3(57, 5.75, 26.5), new THREE.Vector3(57, 11.75, 26.5), { x: 3, y: 0.5, z: 3 }, 4.6, C.green);
  block(G, 57, 0, 33, 4, 13, 4, C.blue);
  new Moon(G, 57, 14.3, 33, 'Platform Hopper', { color: MOON.purple });
  coinLine(G, [46, 7, 20], [51, 7, 20], 3);
  new Sign(G, 33, 0, 16.5, -PI / 4, 'PLATFORMS', ['Spring up, then ride the', 'mover, spinner and lift.'], '#7fc4ff');

  // ---------- far west: 8-bit wall (built in flat.js) ----------
  zone(G, -59.5, 16, 7, 26, C.orange);
  new Sign(G, -56, 0, 30.5, -PI / 2.2, '8-BIT WALL', ['Walk into the green pipe', 'to become pixel art!'], '#ff9a52');

  // ---------- west: chain chomp ----------
  zone(G, -49, 34, 14, 18, C.grey);
  new ChainChomp(G, -50, 30, 5.5);
  const chompMoon = new Moon(G, -50, 1.3, 41.5, 'Chomp Smash', { hidden: true, color: MOON.purple });
  new Boulder(G, -50, 41.5, 2.6, chompMoon);
  new Boulder(G, -58.5, 30, 2.2);
  new Sign(G, -42.5, 0, 26, -PI / 3, 'CHAIN CHOMP', ['Capture it, pull away from the', 'stake, then let go to launch!'], '#aab2c0');

  // ---------- south-east: swimming pool ----------
  zone(G, 30, 52, 18, 16, C.blue);
  block(G, 34, 0, 45.5, 14, 3.4, 1, C.grey); block(G, 34, 0, 58.5, 14, 3.4, 1, C.grey);
  block(G, 27.5, 0, 52, 1, 3.4, 12, C.grey); block(G, 40.5, 0, 52, 1, 3.4, 12, C.grey);
  block(G, 25.5, 0, 55.5, 2, 1.1, 2, C.white); block(G, 25.5, 0, 53, 2, 2.2, 2, C.white);
  G.world.water(28, 40, 0, 3.0, 46, 58);
  const waterMat = new THREE.MeshStandardMaterial({ color: 0x4aa3d6, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide });
  const water = new THREE.Mesh(new THREE.BoxGeometry(12, 3.0, 12), waterMat); water.position.set(34, 1.5, 52); water.userData.noPaint = true; G.scene.add(water);
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshStandardMaterial({ color: 0x9fd8f2, roughness: 0.1, transparent: true, opacity: 0.45, depthWrite: false, side: THREE.DoubleSide }));
  surf.rotation.x = -PI / 2; surf.position.set(34, 2.99, 52); G.scene.add(surf);
  new Moon(G, 34, 0.9, 52, 'Pool Dive', { color: MOON.cyan });
  coinRing(G, 34, 1.4, 52, 3.4, 8);
  new Sign(G, 23.5, 0, 57.5, PI / 2.4, 'SWIMMING POOL', ['Jump in. Crouch to dive,', 'Jump to stroke. Moon below!'], '#7fc4ff');

  // ---------- south: roll ramp ----------
  W.ramp(-18, -10, 42, 58, 'z', 1, 0, 6);
  let rampGeo = new THREE.BufferGeometry();
  const v = [-18, 0, 42, -10, 0, 42, -10, 6, 58, -18, 6, 58, -18, 0, 58, -10, 0, 58];
  rampGeo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  rampGeo.setIndex([0, 2, 1, 0, 3, 2, 0, 4, 3, 1, 2, 5, 4, 5, 2, 4, 2, 3]);
  rampGeo.setAttribute('uv', new THREE.Float32BufferAttribute([-9, 21, -5, 21, -5, 29, -9, 29, -9, 29, -5, 29], 2));
  rampGeo = rampGeo.toNonIndexed();
  rampGeo.computeVertexNormals();
  const rampMesh = new THREE.Mesh(rampGeo, themeMat('wood', 0xffd9b0)); rampMesh.castShadow = true; rampMesh.receiveShadow = true; G.scene.add(rampMesh);
  block(G, -14, 0, 62, 8, 6, 8, C.orange);
  coinLine(G, [-14, 1, 44], [-14, 5.5, 56], 7);
  new Sign(G, -6.5, 0, 40, -PI / 5, 'ROLL RAMP', ['Climb up, then hold Crouch', 'and press Cap to roll down.'], '#ff9a52');


  // ---------- sky island: a small real course 40m up, beyond the north wall ----------
  const Y = 40;
  const isle = (x, z, sx, sz, top, color = C.green, depth = 3) => {
    const s = block(G, x, top - depth, z, sx, depth, sz, color);
    // A rocky underside so it reads as floating.
    const cone = new THREE.Mesh(new THREE.ConeGeometry(Math.min(sx, sz) * 0.62, Math.min(sx, sz) * 1.1, 9), themeMat('dirt'));
    cone.rotation.x = PI; cone.position.set(x, top - depth - Math.min(sx, sz) * 0.55, z); cone.castShadow = true; G.scene.add(cone);
    return s;
  };
  isle(0, -120, 12, 12, Y);
  const skyPipe = new Pipe(G, 0, Y, -116, 1.0);
  const plazaSkyPipe = new Pipe(G, -3, 0, 16, 1.3);
  plazaSkyPipe.link = skyPipe; skyPipe.link = plazaSkyPipe;
  // The pipe to Tumble Falls (linked up in kingdom.js).
  G.fallsPipe = new Pipe(G, 3.5, 0, 17, 1.3);
  G.fallsPipe.facing = PI; G.fallsPipe.onArrive = (G2) => { G2.spawn = { pos: new THREE.Vector3(3.5, 0, 14.5), facing: PI }; G2.spawnFlag = null; };
  new Sign(G, 6.8, 0, 15.6, PI + PI / 6, 'TUMBLE FALLS', ['A whole kingdom of waterfalls', 'and 12 Power Moons. Hop in!'], '#5fd3c4');
  const skyFlag = new Checkpoint(G, 3.5, Y, -116, 'Sky Island', PI);
  skyFlag.island = true;
  new Sign(G, -3.5, Y, -116.5, 0, 'SKY ISLAND', ['A real course: use everything', 'you learned. Grand Moon ahead!'], '#ffd166');
  // Stepping stones.
  for (const [x, z] of [[0, -129], [2.5, -133], [-0.5, -137]]) { isle(x, z, 2.6, 2.6, Y, C.white, 1.2); new Coin(G, x, Y + 0.9, z); }
  // Goomba meadow.
  isle(0, -145, 10, 7, Y + 1);
  const skyPen = { x: 0, z: -145, r: 2.6 };
  new Goomba(G, -2, Y + 1, -145, skyPen); new Goomba(G, 2, Y + 1, -144, skyPen);
  coinLine(G, [-3.5, Y + 2, -147], [3.5, Y + 2, -147], 5);
  // Spring up to the next island, then a moving platform across.
  new Spring(G, 4, Y + 1, -147.5, 21);
  isle(6, -153, 6, 6, Y + 4, C.orange, 2);
  new Mover(G, new THREE.Vector3(11.5, Y + 3.75, -153), new THREE.Vector3(18.5, Y + 3.75, -153), { x: 3, y: 0.5, z: 3 }, 3.4, C.yellow);
  isle(24, -153, 6, 6, Y + 4, C.green, 4);
  coinArc(G, [24, Y + 5, -156], [24, Y + 5, -163], 4, 1.2);
  // Long-jump gap to the chimney island.
  isle(24, -166.5, 7, 6, Y + 4, C.green, 4);
  block(G, 21.6, Y + 4, -167.5, 1.4, 10, 4, C.grey);
  block(G, 26.4, Y + 4, -167.5, 1.4, 10, 4, C.grey);
  coinLine(G, [24, Y + 6, -167.5], [24, Y + 12, -167.5], 4);
  // Summit beside the chimney top, with the Grand Moon.
  isle(30.5, -167.5, 4.6, 4.6, Y + 14, C.white, 1.2);
  const grand = new Moon(G, 30.5, Y + 15.6, -167.5, 'Grand Moon', { color: 0xffe066 });
  grand.group.scale.setScalar(1.6); grand.grand = true;
  new Sign(G, 27, Y + 4, -161, PI, 'LONG JUMP, THEN CLIMB', ['Long jump the gap, then', 'wall jump up the chimney.'], '#ff9a52');
  G.islandStart = { pos: new THREE.Vector3(0, Y, -121.5), facing: PI };

  decorate(G);

  // ---------- warp list ----------
  G.stations = [
    ['Plaza', 0, 0, 10, PI], ['Jump chain', -12.5, 0, -11, PI, 'Triple Jump Tier'], ['Long jump', 4, 0, -5, PI, 'Long Jump Gap'],
    ['Backflip', 18, 0, -10.5, PI, 'Backflip Pillar'], ['P switch', 14, 0, 11, PI, 'Timed Staircase'],
    ['Wall jump', -23, 0, 0, -PI / 2, 'Chimney Climb'], ['Ledge grab', -30, 0, -8, PI, 'Ledge Ladder'],
    ['Warp pipe', -14, 0, 18, PI, 'Pipe Dream Lookout'], ['Frog', -17, 0, 20, -PI / 4, 'Frog Leap'], ['Goomba tower', 0, 0, 24, 0],
    ['Spark pylon', 17, 0, 23, PI / 3, 'Electric Express'], ['Cap jump', 24, 0, 5, 0, 'Cap Jump Float'],
    ['Jump flowers', 24, 0, -4, PI / 2, 'Flower Garden Summit'], ['Platforms', 32, 0, 20, PI / 2, 'Platform Hopper'], ['Roll ramp', -14, 0, 36, 0],
    ['Swimming pool', 22.5, 0, 53, PI / 2, 'Pool Dive'], ['Chain Chomp', -43, 0, 30, -PI / 2], ['8-bit wall', -57, 0, 27.25, -PI / 2], ['Sky island', 0, 40, -121.5, PI, 'Grand Moon'],
  ].map(([name, x, y, z, f, moon]) => ({ name, pos: new THREE.Vector3(x, y, z), facing: f, moon }));
}

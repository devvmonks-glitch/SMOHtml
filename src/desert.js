import * as THREE from 'three';
import { std } from './character.js';
import { canvasTex, themeMat, themeTex, worldUV } from './materials.js';
import { terrain, LOOKS } from './terrain.js';
import { PI, TAU } from './util.js';
import { C, MOON, coinLine, coinRing, coinArc, zone } from './level.js';
import { rock, cactus, palm, dune, rand } from './decor.js';
import { Coin, Moon, Spring, PSwitch, Checkpoint, Pipe, Mover, Sign, Cloud, Boulder } from './objects.js';
import { Pylon, ChainChomp, wireMesh } from './captures.js';

// Sundial Sands: a desert canyon kingdom 300m west of the dev room. A stepped pyramid
// stands in the middle of a sandy basin ringed by red mesas; to the north a sinkhole of
// sinking sand swallows anyone who misses a jump, and a great sundial casts its shadow
// in the west. A plaza pipe leads here.
//
// Layout is in local coordinates (lx, lz) with the sand at y = 0:
// south (+z) is where the pipe arrives, north (-z) the sinkhole and the high plateau.

export const DX = -300;
export const DESERT = 'Sundial Sands';

export function buildDesert(G) {
  const { X, V, slab, cliff, ridge, water, anim } = terrain(G, DX, LOOKS.desert);

  // ---------- ground: sand all round, with holes for the sinkhole and the oasis ----------
  const floor = { noCam: true };
  cliff(-62, 24, -30, 62, -8, 0, floor);
  cliff(24, 40, -30, 14, -8, 0, floor);
  cliff(24, 40, 28, 62, -8, 0, floor);
  cliff(40, 62, -30, 62, -8, 0, floor);
  cliff(-62, -16, -62, -30, -8, 0, floor);
  cliff(16, 62, -62, -30, -8, 0, floor);
  cliff(-16, 16, -62, -56, -8, 0, floor);

  // ---------- boundary mesas ----------
  ridge(-66, 66, -66, -62, [22, 20, 24, 21, 23, 22, 25]);          // north
  ridge(-66, 66, 62, 66, [11, 13, 10, 12, 11, 13, 10, 12]);        // south
  ridge(62, 66, -62, 62, [14, 12, 15, 13, 16, 12, 14]);            // east
  ridge(-66, -62, -62, -48, [20, 22]);                             // west, beside the plateau
  ridge(-66, -58, -48, 28.4, [12, 14, 11, 13, 12]);                // west
  ridge(-66, -58, 31.6, 62, [11, 13, 12]);
  cliff(-66, -61.5, 28.4, 31.6, -8, 11, { noLedge: true });         // back of the tomb
  cliff(-61.5, -58, 28.4, 31.6, 2.8, 11, { noLedge: true });        // and its low lintel

  // ---------- arrival ----------
  zone(G, X(0), 46, 14, 10, C.yellow);
  const pipe = new Pipe(G, X(0), 0, 50, 1.3);
  pipe.facing = PI;
  const spawn = { pos: V(0, 0, 47.5), facing: PI };
  G.kingdoms.push({ name: DESERT, x: DX, spawn, fog: new THREE.Color(0xf0dcbc) });
  pipe.onArrive = (G2) => { G2.spawn = spawn; G2.spawnFlag = null; };
  if (G.desertPipe) { pipe.link = G.desertPipe; G.desertPipe.link = pipe; }
  new Checkpoint(G, X(5.5), 0, 48, 'Sand Gate', PI);
  new Sign(G, X(-4), 0, 45.5, 0, 'SUNDIAL SANDS', ['12 Power Moons hide in the', 'sand. Mind the sinkhole!'], '#f0b35a');
  new Sign(G, X(-9), 0, 50, PI / 5, 'TREASURE MAP', ['X marks the spot, out in', 'the western dunes...'], '#ff6b6b');
  coinLine(G, [X(0), 0.8, 41], [X(0), 0.8, 33], 5);

  // ---------- the great pyramid (Grand Moon), with a passage into its base ----------
  // Tier 1 is split so a covered passage runs in from the east face.
  slab(-15, 15, -15, -1.5, 0, 2.5, C.sand);
  slab(-15, 15, 1.5, 15, 0, 2.5, C.sand);
  slab(-15, 6, -1.5, 1.5, 0, 2.5, C.sand);
  slab(-12, 12, -12, 12, 2.5, 5, C.sand);
  slab(-9, 9, -9, 9, 5, 7.5, C.sand);
  slab(-6, 6, -6, 6, 7.5, 10, C.sand);
  slab(-2, 2, -2, 2, 10, 15, C.pale);
  const trimM = themeMat('stone', 0xe9c48e);
  for (const [r, y] of [[15, 2.5], [12, 5], [9, 7.5], [6, 10], [2, 15]]) {
    const t = new THREE.Mesh(worldUV(new THREE.BoxGeometry(r * 2 + 0.3, 0.35, r * 2 + 0.3), X(0), y - 0.2, 0), trimM);
    t.position.set(X(0), y - 0.2, 0); t.castShadow = true; G.scene.add(t);
  }
  new Spring(G, X(4), 10, 0, 21);
  const grand = new Moon(G, X(0), 16.7, 0, 'Pyramid Peak', { color: 0xffe066 });
  grand.group.scale.setScalar(1.6); grand.grand = true;
  for (const [y, z] of [[2.5, 13.5], [5, 10.5], [7.5, 7.5]]) new Coin(G, X(-5), y + 0.9, z);
  coinRing(G, X(0), 11, 0, 4.2, 8);
  new Moon(G, X(7.6), 1.3, 0, 'Pyramid Passage', { color: MOON.orange });
  coinLine(G, [X(14), 0.8, 0], [X(9.5), 0.8, 0], 3);
  new Sign(G, X(-4), 0, 19, 0, 'THE GREAT PYRAMID', ['Grab each ledge to climb.', 'A spring waits near the top.'], '#f0b35a');
  new Checkpoint(G, X(4), 0, 19.5, 'Pyramid Steps', PI);

  // ---------- north: the sinkhole of sinking sand ----------
  const sinkTex = themeTex('sand').clone(); sinkTex.needsUpdate = true; sinkTex.repeat.set(16, 13);
  const sink = new THREE.Mesh(new THREE.PlaneGeometry(32, 26), new THREE.MeshStandardMaterial({ map: sinkTex, color: 0xbb9462, roughness: 1 }));
  sink.rotation.x = -PI / 2; sink.position.set(X(0), -3.6, -43); G.scene.add(sink);
  anim.surfs.push({ tex: sinkTex, sx: 0.01, sz: 0.06 });
  new Checkpoint(G, X(4), 0, -26, 'Sinkhole Rim', PI);
  new Sign(G, X(-3.5), 0, -27, 0, 'SINKHOLE', ['Sinking sand! Ride the', 'platforms to the ruins.'], '#c49bff');
  // Platforms out to a ruined island, then on to a pillar with the moon.
  new Mover(G, V(0, -0.25, -31.6), V(0, -0.25, -37), { x: 3, y: 0.5, z: 3 }, 3.2, C.yellow);
  slab(-2.5, 2.5, -44.5, -39.5, -22, 1, C.sand);
  new Mover(G, V(5, 0.75, -42), V(10, 0.75, -42), { x: 3, y: 0.5, z: 3 }, 3.6, C.yellow, 0.5);
  slab(12.5, 15.5, -43.5, -40.5, -22, 2, C.sand);
  new Moon(G, X(14), 3.3, -42, 'Floating Ruins', { color: MOON.purple });
  const stone = std(0xe6cfa6, { roughness: 0.95 });
  for (const [cx, cz, h] of [[-1.6, -43.6, 2.4], [1.6, -40.4, 1.2], [-1.6, -40.4, 0.7]]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, h, 12), stone); col.position.set(X(cx), 1 + h / 2, cz); col.castShadow = true; G.scene.add(col);
    G.world.cyl(X(cx), cz, 0.45, 1, 1 + h, { noLedge: true });
  }
  // A P switch builds a bridge across the west side of the sinkhole, for a few seconds.
  const bridge = [];
  for (let i = 0; i < 8; i++) bridge.push([X(-10), -0.25, -30.65 - i * 1.75, 2, 0.5, 1.3]);
  new PSwitch(G, X(-10), 0, -26.5, bridge, 5);
  slab(-11.5, -8.5, -47, -44, -22, 0, C.sand);
  new Moon(G, X(-10), 1.3, -45.5, 'Blue Bridge', { color: MOON.cyan });
  new Sign(G, X(-14), 0, -24.5, PI / 6, 'P SWITCH', ['5 seconds to cross the', 'sinkhole. Run!'], '#7fc4ff');

  // ---------- north-west: spark pylon up to the plateau ----------
  cliff(-62, -30, -62, -48, -8, 16);
  const a = V(-40, 2.6, -34), b = V(-40, 18.6, -53);
  const wire = new THREE.CatmullRomCurve3([a, V(-40, 12, -40), V(-40, 19, -47), b]);
  wireMesh(G, wire);
  new Pylon(G, X(-40), 0, -34, wire, PI);
  new Pylon(G, X(-40), 16, -53, new THREE.CatmullRomCurve3(wire.points.slice().reverse()), 0);
  new Moon(G, X(-52), 17.4, -57, 'Canyon Zip', { color: MOON.purple });
  new Sign(G, X(-36.5), 0, -31.5, -PI / 5, 'SPARK PYLON', ['Cap the pylon to zip', 'up to the plateau.'], '#7fc4ff');

  // ---------- west: the great sundial, whose gnomon is a wall-jump chimney ----------
  const dialM = themeMat('stone', 0xf3e2c0);
  const dial = new THREE.Mesh(new THREE.CylinderGeometry(8, 8.3, 0.4, 48), dialM); dial.position.set(X(-36), 0.2, -6); dial.receiveShadow = true; G.scene.add(dial);
  G.world.cyl(X(-36), -6, 8, 0, 0.4, { noLedge: true });
  const markM = std(0x9a7a52, { roughness: 0.9 });
  for (let i = 0; i < 12; i++) {
    const ang = i / 12 * TAU, mk = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.06, i % 3 ? 0.9 : 1.6), markM);
    mk.position.set(X(-36) + Math.sin(ang) * 6.9, 0.43, -6 + Math.cos(ang) * 6.9); mk.rotation.y = ang; G.scene.add(mk);
  }
  const shade = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 7.5), new THREE.MeshBasicMaterial({ color: 0x6b5236, transparent: true, opacity: 0.28, depthWrite: false }));
  shade.rotation.x = -PI / 2; shade.rotation.z = -0.9; shade.position.set(X(-32.6), 0.42, -1.6); G.scene.add(shade);
  slab(-39.1, -37.7, -9.5, -2.5, 0.4, 12.4, C.sand);
  slab(-34.3, -32.9, -9.5, -2.5, 0.4, 12.4, C.sand);
  new Moon(G, X(-36), 12.8, -6, 'Gnomon Climb', { color: MOON.gold });
  coinLine(G, [X(-36), 3.5, -6], [X(-36), 9.5, -6], 4);
  new Sign(G, X(-27), 0, 3, -PI / 3, 'THE SUNDIAL', ['Wall jump up between the', 'two halves of the gnomon.'], '#ff9a52');
  new Checkpoint(G, X(-25), 0, -1, 'Sundial', -PI / 2);

  // ---------- west: a spring up to a sunny ledge ----------
  cliff(-62, -55, 8, 16, -8, 7);
  new Spring(G, X(-51.5), 0, 12, 21);
  new Moon(G, X(-58.5), 8.3, 12, 'Sun Ledge', { color: MOON.orange });
  coinLine(G, [X(-51.5), 2.5, 12], [X(-51.5), 6, 12], 3);

  // ---------- south-west: Chain Chomp and the sealed tomb ----------
  zone(G, X(-47), 30, 16, 12, C.grey);
  new ChainChomp(G, X(-45.5), 30, 5.5);
  new Boulder(G, X(-57), 30, 2.6);
  new Moon(G, X(-60), 1.3, 30, 'Sealed Tomb', { color: MOON.red });
  new Sign(G, X(-40), 0, 24.5, -PI / 4, 'SEALED TOMB', ['Something glints inside.', 'That Chomp looks strong...'], '#aab2c0');

  // ---------- X marks the spot ----------
  const xMoon = new Moon(G, X(-28), 1.4, 46, 'X Marks the Spot', { hidden: true, color: MOON.red });
  const xTex = canvasTex(128, 128, (g) => {
    g.strokeStyle = 'rgba(200,58,40,0.85)'; g.lineWidth = 16; g.lineCap = 'round';
    g.beginPath(); g.moveTo(22, 22); g.lineTo(106, 106); g.moveTo(106, 22); g.lineTo(22, 106); g.stroke();
  });
  const xMark = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8), new THREE.MeshStandardMaterial({ map: xTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }));
  xMark.rotation.x = -PI / 2; xMark.position.set(X(-28), 0.012, 46); G.scene.add(xMark);
  G.world.box(X(-28), 0.005, 46, 1.8, 0.01, 1.8, { noLedge: true, noWall: true, onPound: (G2) => {
    if (!xMark.visible) return null;
    xMark.visible = false; G2.camRig.addShake(0.25); G2.fx.dust(X(-28), 0, 46, 14, 3, 0.3);
    xMoon.reveal(G2, V(-28, 0.2, 46));
    return null;
  } });

  // ---------- east: mesa hop (long jumps) ----------
  cliff(28, 34, -22, -14, -8, 3);
  cliff(29, 33, -14, -12, -8, 1.5);
  cliff(40, 45, -21, -15, -8, 3);
  cliff(51.5, 57, -21, -15, -8, 3);
  new Moon(G, X(54.25), 4.3, -18, 'Mesa Hop', { color: MOON.green });
  coinArc(G, [X(34), 4, -18], [X(40), 4, -18], 3, 1.2);
  coinArc(G, [X(45), 4, -18], [X(51.5), 4, -18], 3, 1.2);
  new Sign(G, X(27), 0, -8, -PI / 4, 'MESA HOP', ['Run, Crouch, Jump:', 'long jump mesa to mesa.'], '#8fdc7a');

  // ---------- south-east: the oasis ----------
  cliff(24, 40, 14, 28, -8, -5, { top: 'stone', damp: true });
  water(24, 40, 14, 28, -5, -0.4);
  new Moon(G, X(32), -4, 21, 'Oasis Dive', { color: MOON.cyan });
  coinRing(G, X(32), -3.6, 21, 2.6, 8);
  for (const [x, z, s] of [[22, 12, 1.1], [42, 16, 1], [43, 25.5, 1.2], [22, 30, 0.95], [31, 30.5, 1.05], [37.5, 11.5, 0.9]]) palm(G, X(x), z, s);
  new Sign(G, X(21), 0, 24, -PI / 2.5, 'OASIS', ['Cool water at last.', 'Dive to the bottom!'], '#7fc4ff');

  // ---------- the obelisk (backflip) ----------
  slab(12.9, 15.1, 33.9, 36.1, 0, 4.6, C.pale);
  new Moon(G, X(14), 5.8, 35, 'Obelisk Top', { color: MOON.purple });
  new Sign(G, X(14), 0, 39, 0, 'OBELISK · 4.6m', ['Stand still, hold Crouch,', 'then Jump: backflip!'], '#a78bfa');

  // ---------- dressing ----------
  for (const [x, z, s] of [[-20, 40, 1.1], [-34, 52, 1.3], [-48, 46, 1], [-50, 4, 1.2], [-22, -20, 1], [24, -36, 1.2], [46, -46, 1.1], [50, 6, 1.3],
    [56, 40, 1], [46, 52, 1.2], [18, 52, 0.9], [-12, 56, 1.1], [26, 2, 1], [-26, 20, 0.9], [-46, -24, 1.1], [36, -50, 1]]) cactus(G, X(x), z, s);
  for (const [x, z, sx, sz, h] of [[-38, 46, 7, 4, 1.4], [-18, 54, 6, 3.5, 1.1], [44, 46, 8, 5, 1.6], [52, -2, 6, 4, 1.2], [-48, -8, 5, 3, 0.9],
    [22, -46, 7, 4, 1.3], [-28, -38, 6, 4, 1.1], [50, -40, 6, 5, 1.4], [10, 56, 7, 3.5, 1]]) dune(G, X(x), z, sx, sz, h);
  for (const [x, z, s] of [[-16, 30, 0.9], [20, 44, 0.7], [-30, 12, 1], [46, -6, 0.8], [-6, -24, 0.7], [54, 30, 1.1], [-52, -36, 0.9]]) rock(G, X(x), z, s);

  // ---------- far scenery: flat-topped mesas beyond the rim ----------
  const mesaGeo = new THREE.CylinderGeometry(1, 1.2, 1, 9);
  const nearMesa = std(0xd9a06e, { roughness: 1 }), farMesa = std(0xe8c7a4, { roughness: 1 });
  // Close and tall enough to stand in front of the painted (green) hills on the horizon.
  for (let i = 0; i < 30; i++) {
    const ang = i / 30 * TAU + rand(-0.06, 0.06), d = rand(88, 118), r = rand(16, 26), h = rand(38, 54);
    const m = new THREE.Mesh(mesaGeo, i % 2 ? farMesa : nearMesa);
    m.position.set(X(0) + Math.cos(ang) * d, h / 2 - 8, Math.sin(ang) * d); m.scale.set(r, h, r * rand(0.7, 1.2)); m.rotation.y = rand(0, TAU);
    G.scene.add(m);
  }
  for (let i = 0; i < 10; i++) new Cloud(G, X(-110 + i * 24), rand(34, 50), rand(-100, 100), rand(4, 7), DX);

  // Tag the moons for the Moons tab, and add warps (each with a time trial).
  for (const m of G.moons) if (Math.abs(m.base.x - DX) < 150) m.kingdom = DESERT;
  G.stations.push(...[
    ['Sand Gate', 0, 0, 44, PI], ['Great pyramid', -4, 0, 21, PI, 'Pyramid Peak'], ['Pyramid passage', 19, 0, 0, -PI / 2, 'Pyramid Passage'],
    ['Sinkhole', 0, 0, -27.5, PI, 'Floating Ruins'], ['Blue bridge', -10, 0, -24, PI, 'Blue Bridge'], ['Spark pylon', -40, 0, -30, PI, 'Canyon Zip'],
    ['Sundial', -27, 0, -6, -PI / 2, 'Gnomon Climb'], ['Sun ledge', -48, 0, 12, -PI / 2, 'Sun Ledge'], ['Sealed tomb', -40, 0, 30, -PI / 2],
    ['Mesa hop', 31, 0, -9, PI, 'Mesa Hop'], ['Oasis', 32, 0, 32, PI, 'Oasis Dive'], ['Obelisk', 14, 0, 38, PI, 'Obelisk Top'],
  ].map(([name, x, y, z, f, moon]) => ({ name, pos: V(x, y, z), facing: f, moon, group: DESERT })));
}

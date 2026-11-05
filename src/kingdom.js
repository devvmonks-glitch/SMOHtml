import * as THREE from 'three';
import { std } from './character.js';
import { canvasTex, themeMat, worldUV } from './materials.js';
import { terrain } from './terrain.js';
import { PI, TAU } from './util.js';
import { groundBelow } from './world.js';
import { C, MOON, coinLine, coinRing, coinArc, zone } from './level.js';
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

export function buildKingdom(G) {
  const { X, V, slab, cliff, ridge, water, stream, waterfall, anim } = terrain(G, KX);

  // ---------- ground ----------
  const floor = { noCam: true }, wet = { top: 'stone', damp: true };
  cliff(-62, 40, -8, 60, -8, 0, floor);                 // the meadow and valley floor
  cliff(-62, -14, -30, -8, -8, 0, floor);               // west of the pool
  cliff(-14, 14, -22, -8, -8, -6, wet);                 // deep plunge pool bed
  cliff(14, 39, -22, -8, -8, -3, wet);                  // shallower river bed
  cliff(39, 40.6, -22, -8, -8, 0.3, { top: 'stone', noLedge: true }); // weir the river spills over
  cliff(-4, 4, -27, -22, -8, 0, { top: 'stone' });      // floor of the cave behind the falls
  water(-14, 39, -22, -8, -6, -0.4);

  // ---------- the plateau, the falls and the cave behind them ----------
  cliff(-44, 40, -62, -30, -8, 16);
  cliff(-44, -4, -30, -22, -8, 16);
  cliff(4, 40, -30, -22, -8, 16);
  cliff(-4, 4, -30, -27, -8, 4, { top: 'stone', damp: true });   // back of the cave
  cliff(-4, 4, -30, -22, 4, 16, { top: 'stone', damp: true });   // lintel the river pours over
  // The river on top, running south to the lip.
  stream(0, -42, 6, 40, 16.03);
  for (const s of [-1, 1]) for (let i = 0; i < 9; i++) rock(G, X(s * rand(3.4, 4.2)), -60 + i * 4.3, rand(0.5, 0.8), 16);
  waterfall(X(0), -21.2, 7.8, 16.1, -0.4, 0); // clear of the rock's bumps
  G.world.camBlock(X(-4), X(4), -6, 4, -21.6, -21); // keep the camera in the cave with you
  new Moon(G, X(0), 1.3, -25.4, 'Behind the Falls', { color: MOON.cyan });
  coinLine(G, [X(-2.5), 0.8, -24.2], [X(2.5), 0.8, -24.2], 3);
  new Moon(G, X(0), 17.4, -25.5, 'Top of the Falls', { color: MOON.gold });
  new Moon(G, X(6), -5.0, -15, 'Plunge Pool Dive', { color: MOON.green });
  coinRing(G, X(6), -4.6, -15, 2.6, 8);
  // The river tumbles off the east edge into the clouds.
  waterfall(X(40.7), -15, 13.6, 0.3, -45, PI / 2, false);
  new Sign(G, X(-12), 0, -5.5, 0, 'PLUNGE POOL', ['Dive deep, and peek', 'behind the waterfall...'], '#7fc4ff');

  // ---------- boundary cliffs ----------
  ridge(-66, -62, -66, -8, [21, 19, 23, 20, 22]);                     // west, behind the terraces
  ridge(-66, -58, -8, 28.4, [12, 10.5, 13, 11]);                      // west, by the meadow
  ridge(-66, -58, 31.6, 64, [11, 13.5, 10, 12]);
  cliff(-66, -61.5, 28.4, 31.6, -8, 11, { noLedge: true, tufts: false });  // back of the Chomp's cave
  cliff(-61.5, -58, 28.4, 31.6, 2.8, 11, { noLedge: true, tufts: false }); // and its low roof
  ridge(-66, 40, 60, 64, [10, 12.5, 11, 13, 10.5, 12, 9.5, 11.5]);   // south
  ridge(-66, 40, -66, -62, [22, 25, 21, 24, 23, 26, 22]);            // north

  // ---------- arrival meadow ----------
  zone(G, X(0), 44, 14, 10, C.yellow);
  const pipe = new Pipe(G, X(0), 0, 46, 1.3);
  pipe.facing = PI;
  const spawn = { pos: V(0, 0, 43.5), facing: PI };
  G.kingdoms.push({ name: KINGDOM, x: KX, spawn });
  pipe.onArrive = (G2) => { G2.spawn = spawn; G2.spawnFlag = null; };
  if (G.fallsPipe) { pipe.link = G.fallsPipe; G.fallsPipe.link = pipe; }
  new Checkpoint(G, X(5.5), 0, 44, 'Falls Gate', PI);
  new Sign(G, X(-4), 0, 41.5, 0, 'TUMBLE FALLS', ['12 Power Moons hide in this', 'valley. Look high and low!'], '#5fd3c4');
  coinLine(G, [X(0), 0.8, 38], [X(0), 0.8, 30], 5);
  new QBlock(G, X(-7), 3.5, 36, 1); new QBlock(G, X(-6), 3.5, 36, 3); new QBlock(G, X(-5), 3.5, 36, 1);

  // ---------- the ancient spire (Grand Moon) ----------
  slab(1, 4, 16, 19, -8, 1.2, C.wall);
  slab(4, 7, 16, 19, -8, 2.4, C.wall);
  slab(7, 21, 7, 21, -8, 4.2, C.wall);
  slab(10, 18, 10, 18, 4.2, 10.5, C.wall);
  slab(14.25, 17.75, 10.25, 13.75, 10.5, 17, C.wall);
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
  for (const [z0, z1, y] of steps) cliff(-62, -44, z0, z1, -8, y);
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
  cliff(-32, -28, -18, -14, -8, 6.5);
  new Moon(G, X(-30), 7.7, -16, 'Frog Pillar', { color: MOON.green });

  // ---------- blue staircase over the pool (P switch) ----------
  const blue = [];
  for (let i = 0; i < 11; i++) { const t = 1.05 * (i + 1); blue.push([X(-8), t - 0.25, 10 - i * 1.75, 2, 0.5, 1.3]); }
  new PSwitch(G, X(-8), 0, 13, blue, 14);
  cliff(-9.3, -6.7, -11.3, -8.7, -8, 12.6, { top: 'stone', damp: true });
  new Moon(G, X(-8), 13.8, -10, 'Blue Stair Dash', { color: MOON.cyan });
  new Sign(G, X(-11.5), 0, 14, PI / 6, 'P SWITCH', ['14 seconds to climb', 'the blue stairs!'], '#7fc4ff');

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
  slab(24, 28, 45, 48, -8, 3, C.pink);
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
  cliff(47, 53, 20, 26, -3, 0);
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

  // ---------- hint coins ----------
  // Kept last: coins are saved by build order, so adding them here leaves earlier ids alone.
  coinLine(G, [X(-50.5), 0.8, 30], [X(-54), 0.8, 30], 3);  // from the Chomp toward the boulder
  new Coin(G, X(-22), 2.9, 40);                             // up on the ruined bricks
  coinArc(G, [X(-36), 0.8, 46], [X(-44), 2.2, 52], 4, 0.8); // into the flowers, over the post
  coinLine(G, [X(26), 1.2, 43.6], [X(26), 3.6, 43.6], 3);   // a Goomba tower's height

  // Tag the moons for the Moons tab, and add warps (each with a time trial).
  for (const m of G.moons) if (m.base.x > KX - 100) m.kingdom = KINGDOM;
  G.stations.push(...[
    ['Falls Gate', 0, 0, 42, PI], ['Plunge pool', 0, 0, -5, PI, 'Behind the Falls'], ['Old spire', 2, 0, 25, PI * 0.8, 'Spire Summit'],
    ['Cliff terraces', -50, 0, -12, PI, 'Top of the Falls'], ['Spark pylon', 30, 0, 6, PI, 'Live Wire Lift'], ['Blue stairs', -8, 0, 16, PI, 'Blue Stair Dash'],
    ['Frog pillar', -20, 0, 2, -PI * 0.75, 'Frog Pillar'], ['Sealed cave', -40, 0, 30, -PI / 2], ['The edge', 30, 0, 23, PI / 2, 'Over the Edge'],
  ].map(([name, x, y, z, f, moon]) => ({ name, pos: V(x, y, z), facing: f, moon, group: KINGDOM })));
}

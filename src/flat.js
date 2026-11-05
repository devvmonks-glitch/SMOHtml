import * as THREE from 'three';
import { canvasTex, themeMat } from './materials.js';
import { Moon } from './objects.js';

// The 8-bit wall: walk into the pipe at the foot of a wall and you become a pixel
// sprite running along a 2D course painted on it, like Odyssey's wall sections.
// 2D space: u runs along the wall (left to right on screen), v is height, both in metres.

const T = 0.5;            // metres per tile
const PX = 16;            // pixels per tile
const WALL_X = -63;       // the wall's face plane (facing +x)
const Z_LEFT = 28;        // u = 0 at this z; u grows toward -z

// 48 x 18 tiles, built from a platform list so every jump is reachable: the sprite clears
// about 3.5 tiles up and 6 across. # brick, = block, o coin, M moon, [ entry, ] exit.
const ROWS = 18, COLS = 48;
const MAP = (() => {
  const m = Array.from({ length: ROWS }, () => Array(COLS).fill('.'));
  const fill = (c0, c1, r, ch) => { for (let c = c0; c <= c1; c++) m[r][c] = ch; };
  for (const r of [16, 17]) fill(0, COLS - 1, r, '#');
  for (const r of [16, 17]) { fill(14, 15, r, '.'); fill(24, 26, r, '.'); }   // pits
  fill(19, 20, 15, '#');                                                      // a bump
  // [first col, last col, row]: up a staircase to the moon, then back down to the exit.
  const plats = [[6, 9, 13], [11, 14, 10], [17, 20, 7], [23, 26, 5], [29, 32, 3], [35, 38, 6], [40, 42, 10], [43, 45, 13]];
  for (const [c0, c1, r] of plats) { fill(c0, c1, r, '='); fill(c0 + 1, c1 - 1, r - 1, 'o'); }
  fill(30, 31, 2, '.'); m[2][31] = 'M';
  fill(2, 4, 15, 'o'); fill(27, 29, 15, 'o');
  for (const r of [14, 15]) { m[r][1] = '['; m[r][COLS - 1] = ']'; }
  return m.map((row) => row.join(''));
})();

const SPRITE = {
  stand: [
    '.....YYYYYY.....', '....YYYYYYYY....', '...YYYYYYYYYY...', '..YYRRRRRRRRYY..', '.YYYYYYYYYYYYYY.', '....TTTTTTTT....',
    '...TTWWTTWWTT...', '...TTWKTTWKTT...', '...TTTTPPTTTT...', '...TTTTTTTTTT...', '....TTTTTTTT....', '.....TTTTTT.....',
    '...TTTTTTTTTT...', '..WTTTTTTTTTTW..', '..WTTMMMMMMTTW..', '...TTTTGGTTTT...', '....TTTTTTTT....', '....TTT..TTT....',
    '....TTT..TTT....', '...NNNN..NNNN...'],
  walk: [
    '.....YYYYYY.....', '....YYYYYYYY....', '...YYYYYYYYYY...', '..YYRRRRRRRRYY..', '.YYYYYYYYYYYYYY.', '....TTTTTTTT....',
    '...TTWWTTWWTT...', '...TTWKTTWKTT...', '...TTTTPPTTTT...', '...TTTTTTTTTT...', '....TTTTTTTT....', '.....TTTTTT.....',
    '..WTTTTTTTTTT...', '...TTTTTTTTTTW..', '...TTMMMMMMTT...', '...TTTTGGTTTT...', '...TTTTTTTTT....', '..TTT....TTT....',
    '.NNN......TTT...', '.........NNNN...'],
  jump: [
    '.....YYYYYY...W.', '....YYYYYYYY.WT.', '...YYYYYYYYYYT..', '..YYRRRRRRRRYY..', '.YYYYYYYYYYYYYY.', '....TTTTTTTT....',
    '...TTWWTTWWTT...', '...TTWKTTWKTT...', '...TTTTPPTTTT...', '...TTTTTTTTTT...', '..W.TTTTTTTT....', '..TT.TTTTTT.....',
    '...TTTTTTTTTT...', '....TTTTTTTTT...', '....TMMMMMMT....', '...TTTTGGTTTT...', '..TTTTT..TTTT...', '.NNTT.....TTT...',
    '.NN.......NNNN..', '................'],
};
const PAL = { Y: '#ffcf3f', R: '#e0565b', T: '#22b8a4', W: '#ffffff', K: '#14203a', P: '#ff7a93', M: '#1f2d55', G: '#ffc93a', N: '#2b3a67' };

function spriteTex(rows) {
  return canvasTex(16, 20, (g) => {
    rows.forEach((row, y) => [...row].forEach((ch, x) => { if (PAL[ch]) { g.fillStyle = PAL[ch]; g.fillRect(x, y, 1, 1); } }));
  });
}
const nearest = (t) => { t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; return t; };

export function createFlat(G) {
  const grid = MAP.map((r) => [...r]);
  const tile = (c, r) => (c < 0 || c >= COLS || r < 0 || r >= ROWS ? '.' : grid[r][c]);
  // Rows are stored top-down; v (height) counts up from the bottom row.
  const at = (u, v) => tile(Math.floor(u / T), ROWS - 1 - Math.floor(v / T));
  const solid = (u, v) => '#='.includes(at(u, v));

  // ---------- 3D wall, pipes and the painted course ----------
  const wall = G.world.box(WALL_X - 0.5, 4.5, Z_LEFT - COLS * T / 2, 1, 9, COLS * T, { noLedge: true });
  const stone = themeMat('stone', 0xe6dccb);
  const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 9, COLS * T), stone);
  wallMesh.position.set(WALL_X - 0.5, 4.5, Z_LEFT - COLS * T / 2); wallMesh.castShadow = wallMesh.receiveShadow = true; G.scene.add(wallMesh);
  wall.mesh = wallMesh;

  // The real moon behind the pixel one: counted and saved like any other, never shown in 3D.
  const moon = new Moon(G, WALL_X + 1, 8, Z_LEFT - 31 * T, 'Pixel Pioneer', { hidden: true, color: 0xffd23f });

  const W = COLS * PX, H = ROWS * PX;
  const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
  const g = canvas.getContext('2d');
  const tex = nearest(new THREE.CanvasTexture(canvas)); tex.colorSpace = THREE.SRGBColorSpace;
  function paint() {
    g.clearRect(0, 0, W, H);
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const ch = grid[r][c], x = c * PX, y = r * PX;
      if (ch === '#' || ch === '=') {
        g.fillStyle = ch === '#' ? '#c8642c' : '#e08a3c'; g.fillRect(x, y, PX, PX);
        g.fillStyle = '#5a2a10'; g.fillRect(x, y + PX - 2, PX, 2); g.fillRect(x + (r % 2 ? 0 : PX / 2), y, 2, PX);
        g.fillStyle = 'rgba(255,220,170,.45)'; g.fillRect(x + 2, y + 2, PX - 6, 2);
      } else if (ch === 'o') {
        g.fillStyle = '#5a3a00'; g.fillRect(x + 4, y + 2, 8, 12); g.fillStyle = '#ffc93a'; g.fillRect(x + 5, y + 3, 6, 10); g.fillStyle = '#fff2a8'; g.fillRect(x + 6, y + 4, 2, 6);
      } else if (ch === 'M' && !moon.got) {
        g.fillStyle = '#ffd23f'; g.fillRect(x + 2, y, 10, 16); g.fillStyle = '#00000000'; g.clearRect(x + 7, y + 3, 6, 10); g.fillStyle = '#fff2a8'; g.fillRect(x + 3, y + 2, 2, 8);
      } else if (ch === '[' || ch === ']') {
        g.fillStyle = '#1f8a3a'; g.fillRect(x, y, PX, PX); g.fillStyle = '#3fc45a'; g.fillRect(x + 2, y + 1, 4, PX - 2); g.fillStyle = '#0b3a18'; g.fillRect(x, y, PX, 2);
      }
    }
    tex.needsUpdate = true;
  }
  paint();
  const course = new THREE.Mesh(new THREE.PlaneGeometry(COLS * T, ROWS * T), new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.5 }));
  course.position.set(WALL_X + 0.01, ROWS * T / 2, Z_LEFT - COLS * T / 2); course.rotation.y = Math.PI / 2; course.userData.noPaint = true;
  G.scene.add(course);

  const pipeMat = new THREE.MeshStandardMaterial({ color: 0x29b34a, roughness: 0.35 });
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x05170a });
  const entryZ = Z_LEFT - 1.5 * T, exitZ = Z_LEFT - (COLS - 0.5) * T;
  for (const z of [entryZ, exitZ]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.9, 24), pipeMat); p.rotation.z = Math.PI / 2; p.position.set(WALL_X + 0.4, 0.62, z); p.castShadow = true; G.scene.add(p);
    const hole = new THREE.Mesh(new THREE.CircleGeometry(0.5, 20), holeMat); hole.rotation.y = Math.PI / 2; hole.position.set(WALL_X + 0.86, 0.62, z); G.scene.add(hole);
  }


  // Sprite frames.
  const frames = { stand: nearest(spriteTex(SPRITE.stand)), walk: nearest(spriteTex(SPRITE.walk)), jump: nearest(spriteTex(SPRITE.jump)) };
  const sprite = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.0), new THREE.MeshBasicMaterial({ map: frames.stand, transparent: true, alphaTest: 0.5 }));
  sprite.rotation.y = Math.PI / 2; sprite.visible = false; sprite.userData.noPaint = true; G.scene.add(sprite);

  const S = { u: 0, v: 0, vu: 0, vv: 0, ground: false, coyote: 0, face: 1, walkT: 0, safe: { u: 1, v: 1 } };
  const w = 0.32, hgt = 0.9; // collision box in metres

  function enter() {
    const P = G.P;
    G.player.setState('flat'); P.vel.set(0, 0, 0);
    S.u = 1.5 * T; S.v = 2 * T; S.vu = 0; S.vv = 0; S.face = 1; S.safe = { u: S.u, v: S.v };
    sprite.visible = true; G.sfx.pipe(); G.hud.toast('8-bit!');
    G.flatMode = true;
  }
  function exit(toExitPipe) {
    if (!G.flatMode) return;
    G.flatMode = false; sprite.visible = false;
    if (toExitPipe) {
      const P = G.P;
      P.pos.set(WALL_X + 1.3, 0, exitZ); P.vel.set(5, 8, 0); P.facing = Math.PI / 2;
      G.player.setState('air'); G.sfx.pipe(); G.camRig.snap(-Math.PI / 2);
    }
  }
  function tryEnter() {
    const P = G.P;
    if (G.flatMode || !G.W || G.W.x > -0.5 || P.pos.y > 0.6) return false;
    if (P.pos.x > WALL_X + 1.5 || Math.abs(P.pos.z - entryZ) > 0.7) return false;
    enter();
    return true;
  }

  function step(h) {
    const P = G.P, inp = G.input.st;
    const ix = Math.abs(inp.mx) > 0.2 ? Math.sign(inp.mx) : 0;
    S.vu += (ix * 5 - S.vu) * Math.min(1, h * (S.ground ? 14 : 6));
    if (ix) S.face = ix;
    S.coyote -= h;
    if (P.jumpBuf > 0 && (S.ground || S.coyote > 0)) { P.jumpBuf = 0; S.vv = 10.5; S.ground = false; S.coyote = 0; G.sfx.jump(1); }
    S.vv -= (S.vv > 0 && !inp.jump ? 62 : 30) * h;
    if (S.vv < -14) S.vv = -14;
    // Horizontal then vertical tile collision.
    S.u += S.vu * h;
    for (const vy of [S.v + 0.05, S.v + hgt / 2, S.v + hgt - 0.05]) {
      if (S.vu > 0 && solid(S.u + w, vy)) { S.u = Math.floor((S.u + w) / T) * T - w - 1e-3; S.vu = 0; }
      if (S.vu < 0 && solid(S.u - w, vy)) { S.u = Math.floor((S.u - w) / T + 1) * T + w + 1e-3; S.vu = 0; }
    }
    S.u = Math.max(w, S.u);
    S.v += S.vv * h;
    const wasGround = S.ground; S.ground = false;
    for (const ux of [S.u - w + 0.02, S.u + w - 0.02]) {
      if (S.vv <= 0 && solid(ux, S.v)) { S.v = Math.floor(S.v / T + 1) * T; S.vv = 0; S.ground = true; }
      if (S.vv > 0 && solid(ux, S.v + hgt)) { S.v = Math.floor((S.v + hgt) / T) * T - hgt - 1e-3; S.vv = 0; }
    }
    if (wasGround && !S.ground) S.coyote = 0.08;
    if (S.ground) S.safe = { u: S.u, v: S.v };
    if (S.v < -1.5) { S.u = S.safe.u - S.face * 0.6; S.v = S.safe.v + 0.5; S.vu = S.vv = 0; G.sfx.ouch(); }
    // Pick-ups and the way out.
    for (const [du, dv] of [[0, 0.2], [0, 0.7]]) {
      const c = Math.floor((S.u + du) / T), r = ROWS - 1 - Math.floor((S.v + dv) / T), ch = tile(c, r);
      if (ch === 'o') { grid[r][c] = '.'; paint(); G.addCoins(1); G.sfx.coin(); }
      if (ch === 'M' && !moon.got) { moon.got = true; G.onMoon(moon, true); paint(); }
      if (ch === ']') { exit(true); return; }
    }
    S.walkT += Math.abs(S.vu) * h;
    // Keep the 3D body (and so the camera) on the sprite.
    P.pos.set(WALL_X + 0.6, S.v, Z_LEFT - S.u); P.hs = Math.abs(S.vu); P.vel.set(0, S.vv, -S.vu);
  }

  function render() {
    if (!G.flatMode) return;
    sprite.position.set(WALL_X + 0.03, S.v + 0.5, Z_LEFT - S.u);
    sprite.material.map = !S.ground ? frames.jump : Math.abs(S.vu) > 0.5 && Math.floor(S.walkT * 3) % 2 ? frames.walk : frames.stand;
    sprite.scale.x = S.face;
  }
  G.objects.push({ render });

  return { tryEnter, step, exit, paint, entry: { x: WALL_X + 3, z: entryZ } };
}

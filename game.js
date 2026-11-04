(() => {
const PI = Math.PI, TAU = PI * 2, DT = 1 / 60;
const RUN = 8.5, ACC = 45, DEC = 35, AIRACC = 20, G = 32, R = 0.35, H = 1.5, JB = 0.13;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const angDiff = (a, b) => { let d = (a - b) % TAU; if (d > PI) d -= TAU; if (d < -PI) d += TAU; return d; };
const dirOf = a => ({ x: Math.sin(a), z: Math.cos(a) });

// ---------- scene ----------
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const SKY = 0x8fd3ff;
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, 45, 110);
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300);
scene.add(new THREE.HemisphereLight(0xffffff, 0x5d8a4e, 0.85));
const sun = new THREE.DirectionalLight(0xfff4e0, 0.75);
sun.position.set(12, 30, 8); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 80 });
scene.add(sun);

function checker(a, b) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = a; g.fillRect(0, 0, 64, 64);
  g.fillStyle = b; g.fillRect(0, 0, 32, 32); g.fillRect(32, 32, 32, 32);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.NearestFilter;
  return t;
}
const boxes = [];
const edgeMat = new THREE.LineBasicMaterial({ color: 0x1d2a44, transparent: true, opacity: 0.2 });
function box(x, y, z, sx, sy, sz, color, map) {
  const mat = new THREE.MeshLambertMaterial({ color, map: map || null });
  const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
  m.position.set(x, y, z); m.castShadow = !map; m.receiveShadow = true; scene.add(m);
  if (!map) { const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), edgeMat); m.add(e); }
  boxes.push({ min: { x: x - sx / 2, y: y - sy / 2, z: z - sz / 2 }, max: { x: x + sx / 2, y: y + sy / 2, z: z + sz / 2 } });
}
const gt = checker('#7cd65f', '#71c955'); gt.repeat.set(45, 45);
box(0, -1, 0, 90, 2, 90, 0xffffff, gt);
// warm-up stairs
box(5, 0.5, -2, 2.5, 1, 2.5, 0xfff3d6); box(7.5, 1, -4.5, 2.5, 2, 2.5, 0xfff3d6); box(10, 1.5, -7, 2.5, 3, 2.5, 0xfff3d6);
// triple jump plateau
box(-6, 1.6, -6, 7, 3.2, 5, 0xff8a65);
// backflip pillar
box(3, 1.95, -12, 2.2, 3.9, 2.2, 0x9b7bff);
// wall jump chimney
box(-16.2, 5, 4, 1.4, 10, 7, 0xf2a65a); box(-12.4, 5, 4, 1.4, 10, 7, 0xf2a65a);
// long jump gap
box(12, 1, 3.5, 3, 2, 2, 0xffd166); box(12, 2, 6, 3, 4, 3, 0xffd166); box(12, 2, 16.5, 3, 4, 3, 0xffd166);
// cap jump float
box(-4, 1.25, 10, 4, 2.5, 4, 0xff6fb1); box(-4, 4.7, 16, 3.5, 0.6, 3.5, 0xff6fb1);

// ---------- character ----------
const root = new THREE.Group(); scene.add(root);
const body = new THREE.Group(); body.position.y = 0.8; root.add(body);
const inner = new THREE.Group(); inner.position.y = -0.8; body.add(inner);
const mat = c => new THREE.MeshLambertMaterial({ color: c });
const skin = mat(0x22b8a4), white = mat(0xffffff), black = mat(0x1d2a44);
function part(geo, m, x, y, z, parent) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; (parent || inner).add(o); return o; }
part(new THREE.SphereGeometry(0.36, 20, 14), skin, 0, 0.42, 0);
part(new THREE.CylinderGeometry(0.36, 0.36, 0.56, 20), skin, 0, 0.7, 0);
part(new THREE.SphereGeometry(0.36, 20, 14), skin, 0, 0.98, 0);
for (const s of [-1, 1]) {
  part(new THREE.SphereGeometry(0.09, 12, 10), white, s * 0.13, 1.06, 0.29);
  part(new THREE.SphereGeometry(0.045, 10, 8), black, s * 0.13, 1.07, 0.37);
  part(new THREE.SphereGeometry(0.13, 12, 10), black, s * 0.16, 0.1, 0.06).scale.set(1, 0.7, 1.4);
}
function makeHat() {
  const g = new THREE.Group(), yel = mat(0xffcf3f);
  part(new THREE.CylinderGeometry(0.46, 0.46, 0.06, 24), yel, 0, 0, 0, g);
  part(new THREE.CylinderGeometry(0.27, 0.3, 0.32, 20), yel, 0, 0.18, 0, g);
  part(new THREE.CylinderGeometry(0.305, 0.305, 0.07, 20), mat(0xe0565b), 0, 0.06, 0, g);
  return g;
}
const headHat = makeHat(); headHat.position.y = 1.3; inner.add(headHat);
const capMesh = makeHat(); capMesh.visible = false; scene.add(capMesh);
const blob = new THREE.Mesh(new THREE.CircleGeometry(0.45, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false }));
blob.rotation.x = -PI / 2; scene.add(blob);

// ---------- gems ----------
const gemGeo = new THREE.OctahedronGeometry(0.42);
const gemMat = new THREE.MeshLambertMaterial({ color: 0x5ee7ff, emissive: 0x1b6f88 });
const gems = [[-6, 4.0, -6], [3, 4.7, -12], [-14.3, 9.3, 4], [12, 4.8, 16.5], [-4, 5.8, 16]].map(p => {
  const m = new THREE.Mesh(gemGeo, gemMat); m.position.set(p[0], p[1], p[2]); m.castShadow = true; scene.add(m);
  return { m, y: p[1], got: false };
});
let gemTotal = 0;

// ---------- toast ----------
const toastEl = document.getElementById('toast');
function toast(text) {
  toastEl.textContent = text;
  toastEl.classList.remove('show'); void toastEl.offsetWidth; toastEl.classList.add('show');
}

// ---------- player state ----------
const GROUND = new Set(['ground', 'crouch', 'skid', 'gpLand', 'roll', 'diveSlide']);
const WALL_IN = new Set(['air', 'longjump', 'backflip', 'sideflip', 'capbounce', 'gpjump']);
const BOUNCE = new Set(['air', 'longjump', 'backflip', 'sideflip', 'dive', 'gpjump', 'capbounce']);
const P = { pos: new THREE.Vector3(0, 0, 4), vel: new THREE.Vector3(), facing: PI, state: 'air', t: 0, flipT: 0, g: G,
  onGround: false, coyote: 0, chain: 0, jumpCount: 0, lastJump: '', anim: '', variable: false,
  capThrown: false, capBounced: false, diveUsed: false, wallN: null, skidDir: 0, rollSpeed: 0, squash: 0 };
const cap = { active: false, phase: 'out', t: 0, dx: 0, dz: 0, pos: new THREE.Vector3() };
const input = { jump: false, crouch: false, cap: false };
let jumpBuf = 0, crouchBuf = 0, capBuf = 0, W = null;

function setState(s) { P.state = s; P.t = 0; }
function accelTo(tx, tz, rate) {
  const dx = tx - P.vel.x, dz = tz - P.vel.z, d = Math.hypot(dx, dz), m = rate * DT;
  if (d <= m) { P.vel.x = tx; P.vel.z = tz; } else { P.vel.x += dx / d * m; P.vel.z += dz / d * m; }
}
function turnToward(target, rate) {
  const d = angDiff(target, P.facing), m = rate * DT;
  P.facing += Math.abs(d) < m ? d : Math.sign(d) * m;
}
function doJump(vy, state, name, variable, tag) {
  P.vel.y = vy; setState(state); P.flipT = 0; P.onGround = false; P.coyote = 0;
  jumpBuf = 0; crouchBuf = 0; P.variable = variable; P.lastJump = tag || ''; P.anim = ''; P.squash = -0.3;
  if (name) toast(name);
}
function dive() {
  if (W) P.facing = Math.atan2(W.x, W.z);
  const f = dirOf(P.facing);
  P.vel.set(f.x * 12.5, 6.5, f.z * 12.5);
  setState('dive'); P.diveUsed = true; P.variable = false; P.anim = '';
  toast('Dive');
}
function throwCap() {
  if (cap.active) return false;
  const f = dirOf(P.facing);
  Object.assign(cap, { active: true, phase: 'out', t: 0, dx: f.x, dz: f.z });
  cap.pos.set(P.pos.x + f.x * 0.6, P.pos.y + 1.0, P.pos.z + f.z * 0.6);
  headHat.visible = false; capMesh.visible = true;
  return true;
}
function respawn() {
  P.pos.set(0, 0, 4); P.vel.set(0, 0, 0); P.facing = PI; setState('air');
  cap.active = false; capMesh.visible = false; headHat.visible = true;
}

function groundLogic(hs) {
  P.coyote = 0.1; P.g = G; crouchBuf = 0;
  const w = W, s = P.state;
  if (s === 'gpLand') {
    accelTo(0, 0, 80);
    if (jumpBuf > 0) { doJump(16, 'gpjump', 'Ground pound jump', false); return; }
    if (P.t > 0.22) setState(input.crouch ? 'crouch' : 'ground');
    return;
  }
  if (s === 'diveSlide') {
    accelTo(0, 0, 14);
    if (jumpBuf > 0) { const f = dirOf(P.facing), sp = Math.max(hs, 4); P.vel.x = f.x * sp; P.vel.z = f.z * sp; doJump(9, 'air', 'Roll out', false); return; }
    if (hs < 1.2) setState('ground');
    return;
  }
  if (s === 'roll') {
    if (capBuf > 0) { capBuf = 0; P.rollSpeed = Math.min(P.rollSpeed + 5, 19); P.t = 0; toast('Roll boost'); }
    if (w) turnToward(Math.atan2(w.x, w.z), 3);
    P.rollSpeed = Math.max(0, P.rollSpeed - 5 * DT);
    const f = dirOf(P.facing); P.vel.x = f.x * P.rollSpeed; P.vel.z = f.z * P.rollSpeed;
    if (jumpBuf > 0) { doJump(10.5, 'air', 'Roll jump', true); return; }
    if ((P.t > 0.6 && !input.crouch) || P.rollSpeed < 3) setState(input.crouch ? 'crouch' : 'ground');
    return;
  }
  if (s === 'skid') {
    accelTo(0, 0, 55);
    if (jumpBuf > 0) {
      P.facing = P.skidDir; const f = dirOf(P.facing); P.vel.x = f.x * 4; P.vel.z = f.z * 4;
      doJump(15.5, 'sideflip', 'Side flip', false); return;
    }
    if (P.t > 0.3 || hs < 0.4) { P.facing = P.skidDir; setState('ground'); }
    return;
  }
  if (input.crouch) {
    if (s !== 'crouch') setState('crouch');
    const tx = w ? w.x * 2.5 * w.mag : 0, tz = w ? w.z * 2.5 * w.mag : 0;
    accelTo(tx, tz, hs > 3 ? 14 : 30);
    if (w && hs < 3) turnToward(Math.atan2(w.x, w.z), 10);
    if (jumpBuf > 0) {
      const f = dirOf(P.facing);
      if (hs > 3.5) { P.vel.x = f.x * 13.5; P.vel.z = f.z * 13.5; doJump(7.5, 'longjump', 'Long jump', false); }
      else { P.vel.x = -f.x * 2.5; P.vel.z = -f.z * 2.5; doJump(16.5, 'backflip', 'Backflip', false); }
      return;
    }
    if (capBuf > 0) { capBuf = 0; P.rollSpeed = Math.max(hs, 12); setState('roll'); toast('Roll'); }
    return;
  }
  if (s === 'crouch') setState('ground');
  if (w && hs > 5.5) {
    const d = (P.vel.x * w.x + P.vel.z * w.z) / hs;
    if (d < -0.6) { P.skidDir = Math.atan2(w.x, w.z); setState('skid'); return; }
  }
  if (w) {
    turnToward(Math.atan2(w.x, w.z), hs > 6 ? 8 : 18);
    const f = dirOf(P.facing), target = RUN * w.mag;
    let sp = hs < target ? Math.min(target, hs + ACC * DT) : Math.max(target, hs - DEC * DT);
    P.vel.x = f.x * sp; P.vel.z = f.z * sp;
  } else accelTo(0, 0, DEC);
  if (jumpBuf > 0) {
    let n = (P.chain > 0 && hs > 3) ? P.jumpCount + 1 : 1;
    if (n > 3) n = 1;
    if (n === 3 && hs < 5) n = 2;
    P.jumpCount = n;
    doJump([0, 10.5, 12.5, 15.5][n], 'air', ['', '', 'Double jump', 'Triple jump'][n], true, n === 3 ? 'triple' : 'chain');
    P.anim = n === 3 ? 'triple' : '';
    return;
  }
  if (capBuf > 0 && throwCap()) capBuf = 0;
}

function airLogic(hs) {
  const w = W, s = P.state; P.g = G;
  if (s === 'gpWind') {
    P.vel.set(0, 0, 0); P.g = 0;
    if (capBuf > 0 && !P.diveUsed) { capBuf = 0; dive(); return; }
    if (P.t >= 0.24) { setState('gpFall'); P.vel.y = -30; }
    return;
  }
  if (s === 'gpFall') {
    P.vel.x = 0; P.vel.z = 0; P.g = 0; P.vel.y = -30;
    if (capBuf > 0 && !P.diveUsed) { capBuf = 0; dive(); }
    return;
  }
  if (s === 'wall') {
    const n = P.wallN; P.g = G * 0.45;
    if (P.vel.y < -3.5) P.vel.y = -3.5;
    P.vel.x = -n.x * 1.5; P.vel.z = -n.z * 1.5;
    if (jumpBuf > 0) {
      P.facing = Math.atan2(n.x, n.z); P.vel.x = n.x * 7.5; P.vel.z = n.z * 7.5;
      doJump(13, 'air', 'Wall jump', false); P.jumpCount = 0; P.diveUsed = false; return;
    }
    if (crouchBuf > 0 || (w && (w.x * n.x + w.z * n.z) > 0.5)) {
      crouchBuf = 0; setState('air'); P.vel.x = n.x * 2; P.vel.z = n.z * 2; P.variable = false;
    }
    return;
  }
  let ctrl = AIRACC;
  if (s === 'longjump') { ctrl = 6; P.g = 24; }
  else if (s === 'dive') { ctrl = 5; P.g = 28; }
  else if (s === 'backflip' || s === 'sideflip') ctrl = 12;
  if (P.variable && P.vel.y > 0 && !input.jump) P.g = G * 2.6;
  if (w) { const ms = Math.max(RUN, hs) * w.mag; accelTo(w.x * ms, w.z * ms, ctrl); }
  else if (s === 'air' || s === 'capbounce' || s === 'gpjump') accelTo(0, 0, 3);
  const nhs = Math.hypot(P.vel.x, P.vel.z);
  if (s === 'longjump' || s === 'dive') { if (nhs > 1) P.facing = Math.atan2(P.vel.x, P.vel.z); }
  else if (s !== 'backflip' && w) turnToward(Math.atan2(w.x, w.z), 7);
  if (s === 'air' && P.coyote > 0 && jumpBuf > 0 && P.vel.y <= 0) { doJump(10.5, 'air', '', true, 'chain'); P.jumpCount = 1; return; }
  if (crouchBuf > 0 && s !== 'dive') { crouchBuf = 0; setState('gpWind'); P.vel.set(0, 0, 0); P.variable = false; toast('Ground pound'); return; }
  if (capBuf > 0 && !P.capThrown && s !== 'dive' && throwCap()) { capBuf = 0; P.capThrown = true; if (P.vel.y < 1.5) P.vel.y = 1.5; }
}

function moveAxis(a, d) {
  if (d === 0) return null;
  P.pos[a] += d;
  let hit = null;
  for (const b of boxes) {
    if (P.pos.x + R > b.min.x && P.pos.x - R < b.max.x && P.pos.z + R > b.min.z && P.pos.z - R < b.max.z &&
        P.pos.y + H > b.min.y && P.pos.y < b.max.y) {
      if (a === 'y') {
        if (d < 0) { P.pos.y = b.max.y; P.onGround = true; } else P.pos.y = b.min.y - H;
        P.vel.y = 0; hit = { b };
      } else {
        if (d > 0) { P.pos[a] = b.min[a] - R - 1e-4; hit = { n: -1, b }; }
        else { P.pos[a] = b.max[a] + R + 1e-4; hit = { n: 1, b }; }
        P.vel[a] = 0;
      }
    }
  }
  return hit;
}

function land() {
  const s = P.state;
  P.capThrown = false; P.capBounced = false; P.diveUsed = false;
  if (s === 'gpFall') { setState('gpLand'); P.squash = 0.55; }
  else if (s === 'dive') { setState('diveSlide'); P.squash = 0.2; }
  else {
    P.chain = P.lastJump === 'chain' ? 0.2 : 0;
    if (P.lastJump !== 'chain') P.jumpCount = 0;
    P.squash = s === 'longjump' ? 0.2 : 0.35;
    setState(input.crouch ? 'crouch' : 'ground');
  }
  P.lastJump = ''; P.anim = '';
}

function updateCap() {
  if (!cap.active) return;
  cap.t += DT;
  if (cap.phase === 'out') {
    const sp = 24 * Math.max(0, 1 - cap.t / 0.3);
    cap.pos.x += cap.dx * sp * DT; cap.pos.z += cap.dz * sp * DT;
    if (cap.t >= 0.3) { cap.phase = 'hover'; cap.t = 0; }
  } else if (cap.phase === 'hover') {
    if (cap.t > (input.cap ? 1.4 : 0.75)) { cap.phase = 'back'; cap.t = 0; }
  } else {
    const dx = P.pos.x - cap.pos.x, dy = P.pos.y + 1.2 - cap.pos.y, dz = P.pos.z - cap.pos.z, d = Math.hypot(dx, dy, dz);
    if (d < 0.7) { cap.active = false; headHat.visible = true; capMesh.visible = false; return; }
    const sp = Math.min(30, 6 + cap.t * 60) * DT;
    cap.pos.x += dx / d * sp; cap.pos.y += dy / d * sp; cap.pos.z += dz / d * sp;
  }
  const live = cap.phase === 'hover' || (cap.phase === 'out' && cap.t > 0.08);
  if (live && !P.onGround && !P.capBounced && BOUNCE.has(P.state) &&
      Math.hypot(P.pos.x - cap.pos.x, P.pos.y + 0.75 - cap.pos.y, P.pos.z - cap.pos.z) < 1.05) {
    P.vel.y = 12.5; setState('capbounce'); P.flipT = 0; P.variable = false;
    P.capBounced = true; P.diveUsed = false; P.capThrown = false; P.squash = -0.3;
    cap.phase = 'back'; cap.t = 0; toast('Cap jump');
  }
}

function updateGems() {
  for (const g of gems) {
    if (g.got) continue;
    const p = g.m.position;
    const near = Math.hypot(P.pos.x - p.x, P.pos.y + 0.75 - p.y, P.pos.z - p.z) < 1.1 ||
      (cap.active && cap.pos.distanceTo(p) < 0.9);
    if (near) {
      g.got = true; g.m.visible = false; gemTotal++;
      document.getElementById('gemCount').textContent = gemTotal + ' / 5';
      toast(gemTotal === 5 ? 'All gems found!' : 'Gem ' + gemTotal + ' of 5');
    }
  }
}

let camYaw = 0, camPitch = 0.32, lastManual = -1e9;
function step() {
  const k = c => keys.has(c) ? 1 : 0;
  let ix = k('KeyD') + k('ArrowRight') - k('KeyA') - k('ArrowLeft') + tc.x;
  let iy = k('KeyW') + k('ArrowUp') - k('KeyS') - k('ArrowDown') + tc.y;
  let m = Math.hypot(ix, iy); if (m > 1) { ix /= m; iy /= m; m = 1; }
  input.jump = kb.jump || tc.jump; input.crouch = kb.crouch || tc.crouch; input.cap = kb.cap || tc.cap;
  const fx = -Math.sin(camYaw), fz = -Math.cos(camYaw), rx = Math.cos(camYaw), rz = -Math.sin(camYaw);
  const wx = rx * ix + fx * iy, wz = rz * ix + fz * iy;
  W = m > 0.15 ? { x: wx / m, z: wz / m, mag: m } : null;

  P.t += DT; P.flipT += DT; P.chain -= DT; P.coyote -= DT;
  const hs = Math.hypot(P.vel.x, P.vel.z);
  if (GROUND.has(P.state)) groundLogic(hs); else airLogic(hs);
  jumpBuf = Math.max(0, jumpBuf - DT); crouchBuf = Math.max(0, crouchBuf - DT); capBuf = Math.max(0, capBuf - DT);

  P.vel.y -= P.g * DT; if (P.vel.y < -30) P.vel.y = -30;
  const wasGround = GROUND.has(P.state);
  P.onGround = false;
  const hx = moveAxis('x', P.vel.x * DT), hz = moveAxis('z', P.vel.z * DT);
  moveAxis('y', P.vel.y * DT);
  const wall = hx ? { x: hx.n, z: 0, b: hx.b } : hz ? { x: 0, z: hz.n, b: hz.b } : null;

  if (P.state === 'wall') {
    if (!wall && !P.onGround) { setState('air'); P.variable = false; }
  } else if (wall && WALL_IN.has(P.state) && !P.onGround && P.vel.y < 4 && W &&
             (W.x * -wall.x + W.z * -wall.z) > 0.35 && wall.b.max.y - P.pos.y > 1.2) {
    setState('wall'); P.wallN = { x: wall.x, z: wall.z };
    P.facing = Math.atan2(-wall.x, -wall.z); if (P.vel.y < 0) P.vel.y *= 0.3;
  }
  if (P.onGround && !wasGround) land();
  else if (!P.onGround && wasGround) { setState('air'); P.variable = false; P.lastJump = ''; P.anim = ''; }

  updateCap(); updateGems();
  if (P.pos.y < -30) respawn();
}

// ---------- render ----------
const camT = new THREE.Vector3(0, 1.4, 4), prev = new THREE.Vector3(), rp = new THREE.Vector3();
let runPhase = 0, rollVis = 0;
function groundBelow(p) {
  let best = -100;
  for (const b of boxes) if (p.x >= b.min.x && p.x <= b.max.x && p.z >= b.min.z && p.z <= b.max.z && b.max.y <= p.y + 0.05) best = Math.max(best, b.max.y);
  return best;
}
function render(dt, now) {
  root.position.copy(rp); root.rotation.y = P.facing;
  const s = P.state, hs = Math.hypot(P.vel.x, P.vel.z);
  let rx = 0, ry = 0, sy = 1, by = 0.8;
  if (s === 'backflip') rx = -Math.min(1, P.flipT / 0.7) * TAU;
  else if (s === 'air' && P.anim === 'triple') rx = Math.min(1, P.flipT / 0.65) * TAU;
  else if (s === 'sideflip') ry = Math.min(1, P.flipT / 0.55) * TAU;
  else if (s === 'capbounce') ry = Math.min(1, P.flipT / 0.45) * TAU;
  else if (s === 'gpWind') rx = Math.min(1, P.t / 0.22) * TAU;
  else if (s === 'longjump') rx = 0.85;
  else if (s === 'dive') rx = 1.45;
  else if (s === 'diveSlide') { rx = 1.5; by = 0.42; }
  else if (s === 'roll') { rollVis += P.rollSpeed * dt * 1.8; rx = rollVis; by = 0.5; sy = 0.85; }
  else if (s === 'wall') rx = -0.25;
  else if (s === 'skid') rx = -0.35;
  if (s === 'crouch' || s === 'gpLand') sy = 0.72;
  if ((s === 'ground') && hs > 0.5) { runPhase += hs * dt * 1.5; by += Math.abs(Math.sin(runPhase)) * 0.1; }
  body.rotation.set(rx, ry, 0); body.position.y = by;
  P.squash *= Math.exp(-12 * dt);
  const q = P.squash; body.scale.set(1 + q * 0.5, sy * (1 - q), 1 + q * 0.5);

  const gy = groundBelow(rp);
  blob.visible = gy > -50;
  const kk = Math.max(0.35, 1 - (rp.y - gy) * 0.06);
  blob.position.set(rp.x, gy + 0.02, rp.z); blob.scale.set(kk, kk, kk);

  if (cap.active) { capMesh.position.copy(cap.pos); capMesh.rotation.y += 25 * dt; capMesh.rotation.x = 0.15; }
  for (const g of gems) if (!g.got) { g.m.rotation.y += dt * 2; g.m.position.y = g.y + Math.sin(now / 400 + g.y) * 0.12; }

  const a = 1 - Math.exp(-9 * dt), ay = 1 - Math.exp(-4 * dt);
  camT.x += (rp.x - camT.x) * a; camT.z += (rp.z - camT.z) * a; camT.y += (rp.y + 1.4 - camT.y) * ay;
  if (now - lastManual > 1500 && hs > 4 && s !== 'wall' && s !== 'backflip')
    camYaw += angDiff(P.facing + PI, camYaw) * (1 - Math.exp(-1.0 * dt));
  const D = camera.aspect < 1 ? 12.5 : 10;
  camera.position.set(camT.x + Math.sin(camYaw) * Math.cos(camPitch) * D, camT.y + Math.sin(camPitch) * D, camT.z + Math.cos(camYaw) * Math.cos(camPitch) * D);
  camera.lookAt(camT);
  renderer.render(scene, camera);
}

let acc = 0, lastT = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - lastT) / 1000); lastT = now; acc += dt;
  while (acc >= DT) { prev.copy(P.pos); step(); acc -= DT; }
  rp.lerpVectors(prev, P.pos, acc / DT);
  render(dt, now);
  requestAnimationFrame(frame);
}
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 70 : 60; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

// ---------- input ----------
const kb = { jump: false, crouch: false, cap: false }, tc = { x: 0, y: 0, jump: false, crouch: false, cap: false };
const keys = new Set();
const JUMPK = ['Space'], CROUCHK = ['ShiftLeft', 'ShiftRight', 'KeyC'], CAPK = ['KeyE', 'KeyJ', 'KeyF'];
function press(n) { if (n === 'jump') jumpBuf = JB; if (n === 'crouch') crouchBuf = 0.1; if (n === 'cap') capBuf = 0.1; }
addEventListener('keydown', e => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.repeat) return;
  keys.add(e.code);
  if (JUMPK.includes(e.code)) { kb.jump = true; press('jump'); }
  if (CROUCHK.includes(e.code)) { kb.crouch = true; press('crouch'); }
  if (CAPK.includes(e.code)) { kb.cap = true; press('cap'); }
  if (e.code === 'KeyR') respawn();
});
addEventListener('keyup', e => {
  keys.delete(e.code);
  if (JUMPK.includes(e.code)) kb.jump = false;
  if (CROUCHK.includes(e.code)) kb.crouch = false;
  if (CAPK.includes(e.code)) kb.cap = false;
});
addEventListener('blur', () => { keys.clear(); kb.jump = kb.crouch = kb.cap = false; });

function bindBtn(id, name) {
  const el = document.getElementById(id);
  el.addEventListener('pointerdown', e => { e.preventDefault(); el.setPointerCapture(e.pointerId); tc[name] = true; el.classList.add('on'); press(name); });
  const up = () => { tc[name] = false; el.classList.remove('on'); };
  el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  el.addEventListener('contextmenu', e => e.preventDefault());
}
bindBtn('bJump', 'jump'); bindBtn('bCrouch', 'crouch'); bindBtn('bCap', 'cap');

const zone = document.getElementById('stickZone'), stick = document.getElementById('stick'), knob = document.getElementById('knob'), hint = document.getElementById('stickHint');
let stickId = null, sx = 0, sy = 0;
function moveStick(e) {
  let dx = e.clientX - sx, dy = e.clientY - sy; const d = Math.hypot(dx, dy), RAD = 50;
  if (d > RAD) { dx *= RAD / d; dy *= RAD / d; }
  knob.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
  tc.x = dx / RAD; tc.y = -dy / RAD;
}
zone.addEventListener('pointerdown', e => {
  if (stickId !== null) return;
  stickId = e.pointerId; zone.setPointerCapture(e.pointerId);
  sx = e.clientX; sy = e.clientY; stick.style.left = sx + 'px'; stick.style.top = sy + 'px'; stick.style.display = 'block';
  hint.style.display = 'none'; moveStick(e);
});
zone.addEventListener('pointermove', e => { if (e.pointerId === stickId) moveStick(e); });
const endStick = e => { if (e.pointerId !== stickId) return; stickId = null; tc.x = tc.y = 0; stick.style.display = 'none'; knob.style.transform = ''; };
zone.addEventListener('pointerup', endStick); zone.addEventListener('pointercancel', endStick);

let dragId = null, lx = 0, ly = 0;
canvas.addEventListener('pointerdown', e => { if (dragId !== null) return; dragId = e.pointerId; canvas.setPointerCapture(e.pointerId); lx = e.clientX; ly = e.clientY; });
canvas.addEventListener('pointermove', e => {
  if (e.pointerId !== dragId) return;
  camYaw -= (e.clientX - lx) * 0.006; camPitch = clamp(camPitch + (e.clientY - ly) * 0.004, 0.05, 1.15);
  lx = e.clientX; ly = e.clientY; lastManual = performance.now();
});
const endDrag = e => { if (e.pointerId === dragId) dragId = null; };
canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);

if (matchMedia('(pointer: coarse)').matches) document.body.classList.add('touch');
addEventListener('touchstart', () => document.body.classList.add('touch'), { once: true, passive: true });

const help = document.getElementById('help');
document.getElementById('play').addEventListener('click', () => { help.hidden = true; });
document.getElementById('helpBtn').addEventListener('click', () => { help.hidden = false; document.getElementById('play').focus(); });

requestAnimationFrame(frame);
})();

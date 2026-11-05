import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PI } from './util.js';
import { World, groundBelow } from './world.js';
import { FX } from './fx.js';
import { sfx, initAudio, isMuted, setMuted } from './audio.js';
import { createHud } from './hud.js';
import { createInput } from './input.js';
import { Character, makeHat } from './character.js';
import { createPlayer, createPlayerSystem } from './player.js';
import { createCap } from './cap.js';
import { CameraRig } from './camera.js';
import { PopCoins } from './objects.js';
import { buildLevel } from './level.js';
import { canvasTex } from './materials.js';
import { loadModels } from './models.js';

const SPAWN = { pos: new THREE.Vector3(0, 0, 10), facing: PI };
const STEP = 1 / 120;

async function start() {
  if (!document.createElement('canvas').getContext('webgl2')) throw new Error('This browser doesn’t support WebGL 2, which the game needs.');
  try { await Promise.race([document.fonts.load('700 40px Fredoka'), new Promise(r => setTimeout(r, 1500))]); } catch { /* fonts optional */ }
  await loadModels();

  const canvas = document.getElementById('c');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = canvasTex(2, 256, (g) => {
    const gr = g.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, '#4ea8f5'); gr.addColorStop(0.55, '#9fd4ff'); gr.addColorStop(1, '#e4f4ff');
    g.fillStyle = gr; g.fillRect(0, 0, 2, 256);
  });
  scene.fog = new THREE.Fog(0xcfe9ff, 70, 190);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.45;
  scene.add(new THREE.HemisphereLight(0xe3f3ff, 0x9a8f7a, 1.1));
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  Object.assign(sun.shadow.camera, { left: -28, right: 28, top: 28, bottom: -28, near: 1, far: 120 });
  scene.add(sun, sun.target);
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);

  const G = {
    scene, world: new World(), fx: new FX(scene), sfx, hud: createHud(), objects: [], captures: [], moons: [], checkpoints: [],
    spawn: SPAWN, spawnFlag: null, coins: 0, moonsGot: 0, time: 0, paused: true, W: null,
  };
  G.input = createInput(G, canvas, onPress);
  G.P = createPlayer(SPAWN.pos, SPAWN.facing);
  G.char = new Character(); scene.add(G.char.root);
  G.capMesh = makeHat(true); G.capMesh.visible = false; scene.add(G.capMesh);
  G.cap = createCap(G);
  G.camRig = new CameraRig(camera, G);
  G.player = createPlayerSystem(G);
  G.popCoins = new PopCoins(G);
  G.addCoins = n => { G.coins += n; G.hud.setCoins(G.coins); };
  G.onMoon = (moon) => {
    if (G.P.capture) G.player.endCapture(true);
    G.moonsGot++; G.player.moonGet(moon);
    G.hud.setMoons(G.moonsGot, G.moons.length); G.hud.banner(moon.name); sfx.moon();
    const p = moon.group.position; G.fx.sparkle(p.x, p.y, p.z, 30, 0xfff3a0);
    if (G.moonsGot === G.moons.length) setTimeout(() => G.hud.toast('Every moon found! Nice moves.'), 2600);
  };
  buildLevel(G);
  G.hud.setMoons(0, G.moons.length);

  // Footsteps and running dust.
  G.char.onStep = (run) => { sfx.step(); if (run > 0.75) G.fx.dust(G.P.pos.x, G.P.pos.y, G.P.pos.z, 1, 0.6, 0.14); };

  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.45, 32), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
  blob.rotation.x = -PI / 2; scene.add(blob);

  // ---------- menu ----------
  const help = document.getElementById('help'), lockHint = document.getElementById('lockHint');
  const isTouch = () => document.body.classList.contains('touch');
  function setPaused(p) {
    G.paused = p; help.hidden = !p;
    if (p) { if (document.pointerLockElement) document.exitPointerLock(); document.getElementById('play').focus(); }
    else { G.P.jumpBuf = G.P.crouchBuf = G.P.capBuf = 0; lockHint.hidden = isTouch() || G.input.st.locked; }
  }
  function onPress(n) {
    if (n === 'menu') { setPaused(!G.paused); return; }
    if (G.paused) return;
    if (n === 'restart') { G.player.respawn(); return; }
    if (n === 'mute') { toggleMute(); return; }
    G.player.press(n);
  }
  G.onLockChange = (locked) => { lockHint.hidden = locked || G.paused || isTouch(); };
  const muteBtn = document.getElementById('muteBtn');
  function toggleMute() { setMuted(!isMuted()); muteBtn.setAttribute('aria-pressed', String(isMuted())); muteBtn.classList.toggle('muted', isMuted()); }
  muteBtn.classList.toggle('muted', isMuted()); muteBtn.setAttribute('aria-pressed', String(isMuted()));
  muteBtn.addEventListener('click', () => { initAudio(); toggleMute(); muteBtn.blur(); });
  document.getElementById('helpBtn').addEventListener('click', () => setPaused(true));
  document.getElementById('play').addEventListener('click', () => {
    initAudio(); setPaused(false);
    if (!isTouch() && canvas.requestPointerLock) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch { /* not allowed */ } }
  });
  for (const tab of document.querySelectorAll('[data-tab]')) {
    tab.addEventListener('click', () => {
      for (const t of document.querySelectorAll('[data-tab]')) t.setAttribute('aria-selected', String(t === tab));
      for (const p of document.querySelectorAll('[data-panel]')) p.hidden = p.dataset.panel !== tab.dataset.tab;
    });
  }
  const warpList = document.getElementById('warpList');
  for (const s of G.stations) {
    const b = document.createElement('button'); b.className = 'warp'; b.textContent = s.name;
    b.addEventListener('click', () => { G.player.respawn(s); setPaused(false); });
    warpList.appendChild(b);
  }
  if (matchMedia('(pointer: coarse)').matches) document.body.classList.add('touch');
  addEventListener('touchstart', () => document.body.classList.add('touch'), { once: true, passive: true });

  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  // ---------- loop ----------
  const P = G.P;
  let last = performance.now(), dustT = 0;
  function computeW() {
    const inp = G.input.st, yaw = G.camRig.yaw;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    const m = Math.hypot(inp.mx, inp.my), wx = rx * inp.mx + fx * inp.my, wz = rz * inp.mx + fz * inp.my;
    G.W = m > 0.15 ? { x: wx / m, z: wz / m, mag: Math.min(1, m) } : null;
  }
  function prompt() {
    const s = P.state;
    if (s === 'capture') return P.capture.canRelease ? 'Crouch to release' : '';
    if (s === 'ledge') return 'Jump to climb · Crouch to let go';
    if (s === 'crouch') return P.hs > 3.5 ? 'Jump: long jump · Cap: roll' : 'Jump: backflip · Cap: roll';
    if (s === 'roll') return 'Cap to speed up · Jump to roll jump';
    if (P.onGround && P.ground && P.ground.pipe) return 'Crouch or ground pound to enter the pipe';
    if (s === 'ground' || s === 'air') {
      for (const c of G.captures) if (c.canCapture() && c.pos.distanceTo(P.pos) < 4.5) return 'Throw your cap to capture';
    }
    return '';
  }
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    G.time += dt;
    G.input.poll(dt);
    G.camRig.applyInput(dt, now);
    computeW();
    if (!G.paused) {
      const n = Math.max(1, Math.ceil(dt / STEP - 1e-6)), h = dt / n;
      for (let i = 0; i < n; i++) {
        for (const o of G.objects) if (o.update) o.update(h, G);
        for (const c of G.captures) c.update(h, G);
        G.player.step(h);
        G.cap.update(h);
      }
    }
    const rdt = G.paused ? 0 : dt;
    const C = G.char;
    C.root.position.copy(P.pos);
    C.root.visible = P.state !== 'capture' && !(P.invuln > 0 && Math.sin(G.time * 40) > 0);
    C.hat.visible = !G.cap.active && P.state !== 'capture';
    C.animate(P, rdt, G.time, G.camRig.yaw);
    G.cap.render(G.capMesh, rdt, G.time);
    for (const o of G.objects) if (o.render) o.render(rdt, G.time, G);
    for (const c of G.captures) c.render(rdt, G.time, G);

    dustT -= rdt;
    if (dustT <= 0 && ['skid', 'diveSlide', 'roll'].includes(P.state) && P.hs > 2) { dustT = 0.05; G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 1, 1, 0.2); }
    if (dustT <= 0 && (P.state === 'twirl' || P.state === 'spinjump')) {
      dustT = 0.03; const a = G.time * 20;
      G.fx.spawn(P.pos.x + Math.sin(a) * 0.8, P.pos.y + 0.9, P.pos.z + Math.cos(a) * 0.8, 0, -0.5, 0, 0.35, 0.1, 0, 0xbff4ff, 0, 1);
    }
    if (dustT <= 0 && P.state === 'wall') { dustT = 0.08; G.fx.dust(P.pos.x - P.wallN.x * 0.35, P.pos.y + 1.2, P.pos.z - P.wallN.z * 0.35, 1, 0.4, 0.12); }
    G.fx.update(rdt);

    const gb = groundBelow(G.world, P.pos.x, P.pos.y + 0.05, P.pos.z, 0);
    blob.visible = !!gb && P.state !== 'pipe' && P.state !== 'capture';
    if (gb) { const k = Math.max(0.3, 1 - (P.pos.y - gb.y) * 0.07); blob.position.set(P.pos.x, gb.y + 0.03, P.pos.z); blob.scale.setScalar(k); }

    G.camRig.update(dt, now);
    const t = G.camRig.target;
    sun.position.set(Math.round(t.x) + 20, t.y + 36, Math.round(t.z) + 12); sun.target.position.set(Math.round(t.x), t.y, Math.round(t.z));
    G.hud.prompt(G.paused ? '' : prompt());
    renderer.render(scene, camera);
  }
  G.camRig.snap(SPAWN.facing + PI);
  document.getElementById('loading').remove();
  setPaused(true);
  requestAnimationFrame(frame);
  if (new URLSearchParams(location.search).has('debug')) {
    // Debug hook used for automated playtesting: ?debug exposes the game context.
    G.renderNow = (dt = 1 / 60) => { G.char.animate(P, dt, G.time, G.camRig.yaw); G.camRig.update(dt, performance.now()); renderer.render(scene, camera); };
    window.HL = G;
  }
}

start().catch((e) => {
  console.error(e);
  if (window.hoplabFail) window.hoplabFail(e && e.message ? e.message : String(e));
});

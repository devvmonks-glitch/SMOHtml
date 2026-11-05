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
import { loadModels, loadedParts } from './models.js';
import { paintScene, paintedSky, paperDataURL, paintUniforms } from './paint.js';
import { Footprints } from './decor.js';
import { save, setting, setSetting } from './save.js';
import { updateMusic, setMusic, musicOn } from './music.js';
import { createTrials } from './trial.js';
import { createFlat } from './flat.js';
import { buildKingdom } from './kingdom.js';
import { buildDesert } from './desert.js';

const SPAWN = { pos: new THREE.Vector3(0, 0, 10), facing: PI };
const STEP = 1 / 120;

async function start() {
  if (!document.createElement('canvas').getContext('webgl2')) throw new Error('This browser doesn’t support WebGL 2, which the game needs.');
  try { await Promise.race([document.fonts.load('700 40px Fredoka'), new Promise(r => setTimeout(r, 1500))]); } catch { /* fonts optional */ }
  await loadModels();

  const canvas = document.getElementById('c');
  // No preserveDrawingBuffer: the photo button draws a frame right before reading it back.
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  // Graphics: High (sharp, shadows) or Low (for slower devices). Touch devices start on Low.
  const gfx = setting('gfx', matchMedia('(pointer: coarse)').matches ? 'low' : 'high');
  const low = gfx === 'low';
  renderer.setPixelRatio(low ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)); // 2x screens shade 4x the pixels
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = !low; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  // Painted sky and a soft lilac haze, like aerial perspective in a painting.
  scene.background = paintedSky();
  scene.fog = new THREE.Fog(0xcdd6f0, 55, 175);
  document.getElementById('paper').style.backgroundImage = `url(${paperDataURL()})`;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.35;
  scene.add(new THREE.HemisphereLight(0xcadcff, 0xa48f6c, 1.15));
  const sun = new THREE.DirectionalLight(0xffdfae, 2.6);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  Object.assign(sun.shadow.camera, { left: -28, right: 28, top: 28, bottom: -28, near: 1, far: 120 });
  scene.add(sun, sun.target);
  // A cool light from behind picks out silhouettes so characters don't melt into the floor.
  const rim = new THREE.DirectionalLight(0xb8c4ff, 0.9);
  scene.add(rim, rim.target);
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);
  const draw = () => renderer.render(scene, camera);

  const G = {
    scene, world: new World(), fx: new FX(scene), sfx, hud: createHud(), objects: [], captures: [], moons: [], checkpoints: [],
    spawn: SPAWN, spawnFlag: null, coins: 0, moonsGot: 0, time: 0, paused: true, W: null, coinList: [], zones: [], low, kingdoms: [],
  };
  G.input = createInput(G, canvas, onPress);
  G.P = createPlayer(SPAWN.pos, SPAWN.facing);
  G.char = new Character(); scene.add(G.char.root);
  G.capMesh = makeHat(true); G.capMesh.visible = false; scene.add(G.capMesh);
  G.cap = createCap(G);
  G.camRig = new CameraRig(camera, G);
  G.player = createPlayerSystem(G);
  G.popCoins = new PopCoins(G);
  G.addCoins = (n, coin) => {
    G.coins += n; G.hud.setCoins(G.coins);
    if (coin && coin.id !== undefined) save.add('coins', coin.id); else save.addExtra(n);
  };
  // noPose: award without the celebration pose (used inside the 8-bit wall).
  G.onMoon = (moon, noPose) => {
    if (G.P.capture) G.player.endCapture(true);
    G.moonsGot++; save.add('moons', moon.name); G.trials.finish(moon);
    if (!noPose) G.player.moonGet(moon);
    G.hud.setMoons(G.moonsGot, G.moons.length); G.hud.banner(moon.name); sfx.moon();
    const p = moon.group.position; if (!noPose) G.fx.sparkle(p.x, p.y, p.z, 30, 0xfff3a0);
    if (moon.grand) G.hud.toast('A Grand Moon!');
    if (G.moonsGot === G.moons.length) setTimeout(() => G.hud.toast('Every moon found! Nice moves.'), 2600);
  };
  // Each place is built into its own group, and only the one you're in is drawn: the
  // others are 300m away, lost in the haze, but would still cost a draw call per mesh.
  const place = (build) => {
    const before = new Set(scene.children); build();
    const root = new THREE.Group();
    for (const o of scene.children.slice()) if (!before.has(o)) root.add(o);
    scene.add(root);
    return root;
  };
  const lab = place(() => { buildLevel(G); G.flat = createFlat(G); });
  for (const build of [buildKingdom, buildDesert]) { const root = place(() => build(G)); G.kingdoms[G.kingdoms.length - 1].root = root; }
  const prints = new Footprints(G);
  G.trials = createTrials(G);
  paintScene(scene);
  // Restore progress from earlier visits.
  for (const m of G.moons) if (save.has('moons', m.name)) { m.got = true; m.group.visible = false; G.moonsGot++; }
  for (const c of G.coinList) if (save.has('coins', c.id)) { c.got = true; c.mesh.visible = false; }
  G.flat.paint();
  G.coins = save.data.coins.length + save.data.extra;
  G.hud.setMoons(G.moonsGot, G.moons.length); G.hud.setCoins(G.coins);

  // Footsteps and running dust.
  G.char.onStep = (run) => {
    sfx.step();
    if (run > 0.75) G.fx.dust(G.P.pos.x, G.P.pos.y, G.P.pos.z, 1, 0.6, 0.14);
    const gr = G.P.ground;
    if (G.P.pos.y < 0.05 && gr && gr.max && gr.max.y === 0 && prints) prints.stamp(G.P.pos.x, G.P.pos.z, G.P.facing);
  };

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
    if (n === 'photo') { setPhoto(!G.photo); return; }
    if (G.photo) return;
    if (n === 'menu') { setPaused(!G.paused); return; }
    if (n === 'music') { toggleMusic(); return; }
    if (G.paused) return;
    if (n === 'restart') {
      if (G.trials.active()) { const st = G.trials.station(); G.player.respawn(st); G.trials.start(st); } else G.player.respawn();
      return;
    }
    if (n === 'mute') { toggleMute(); return; }
    G.player.press(n);
  }
  G.onLockChange = (locked) => { lockHint.hidden = locked || G.paused || isTouch(); };
  // ---------- music ----------
  const musicBtn = document.getElementById('musicBtn');
  setMusic(setting('music', 'on') === 'on');
  function toggleMusic() { setMusic(!musicOn()); setSetting('music', musicOn() ? 'on' : 'off'); musicBtn.setAttribute('aria-pressed', String(musicOn())); musicBtn.textContent = musicOn() ? 'Music: on' : 'Music: off'; }
  musicBtn.setAttribute('aria-pressed', String(musicOn())); musicBtn.textContent = musicOn() ? 'Music: on' : 'Music: off';
  musicBtn.addEventListener('click', () => { initAudio(); toggleMusic(); });

  // ---------- photo mode ----------
  // Freezes time, hides the HUD and frees the camera. Filters are CSS on the canvas (and
  // baked into the saved PNG); "Watercolor" also pushes the shader's brushwork.
  const FILTERS = {
    painted: ['', 1], watercolor: ['saturate(1.12) contrast(0.95) brightness(1.03)', 1.9], ink: ['grayscale(1) contrast(1.4) brightness(1.06)', 1.3],
    sepia: ['sepia(0.85) contrast(1.05)', 1], vivid: ['saturate(1.5) contrast(1.08)', 1], dusk: ['sepia(0.35) hue-rotate(-25deg) saturate(1.35) brightness(0.9)', 1.1],
  };
  const photoBar = document.getElementById('photoBar');
  let photoFilter = 'painted', wasPaused = false;
  function applyFilter(name) {
    photoFilter = name; canvas.style.filter = FILTERS[name][0]; paintUniforms.uPaint.value = FILTERS[name][1];
    for (const b of photoBar.querySelectorAll('[data-filter]')) b.setAttribute('aria-pressed', String(b.dataset.filter === name));
  }
  function setPhoto(on) {
    if (on === !!G.photo) return;
    G.photo = on;
    document.body.classList.toggle('photo', on);
    photoBar.hidden = !on;
    if (on) { wasPaused = G.paused; help.hidden = true; G.paused = true; G.camRig.lastManual = performance.now() + 1e9; }
    else { applyFilter('painted'); G.camRig.zoom = 1; G.camRig.lastManual = performance.now(); setPaused(wasPaused); }
  }
  for (const b of photoBar.querySelectorAll('[data-filter]')) b.addEventListener('click', () => applyFilter(b.dataset.filter));
  document.getElementById('zoomIn').addEventListener('click', () => { G.camRig.zoom = Math.max(0.25, G.camRig.zoom / 1.25); });
  document.getElementById('zoomOut').addEventListener('click', () => { G.camRig.zoom = Math.min(3, G.camRig.zoom * 1.25); });
  canvas.addEventListener('wheel', (e) => { if (!G.photo) return; e.preventDefault(); G.camRig.zoom = Math.min(3, Math.max(0.25, G.camRig.zoom * (e.deltaY > 0 ? 1.1 : 0.9))); }, { passive: false });
  document.getElementById('photoExit').addEventListener('click', () => setPhoto(false));
  document.getElementById('photoBtn').addEventListener('click', () => { setPaused(false); setPhoto(true); });
  document.getElementById('photoSave').addEventListener('click', () => {
    draw();
    const out = document.createElement('canvas'); out.width = canvas.width; out.height = canvas.height;
    const g = out.getContext('2d'); g.filter = FILTERS[photoFilter][0] || 'none'; g.drawImage(canvas, 0, 0);
    const a = document.createElement('a'); a.href = out.toDataURL('image/png'); a.download = 'hop-lab-photo.png'; a.click();
  });

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
  // Moons tab: what's been found so far, and a way to start over.
  const moonList = document.getElementById('moonList');
  function refreshMoons() {
    moonList.innerHTML = '';
    for (const place of ['Hop Lab', ...G.kingdoms.map((k) => k.name)]) {
      const list = G.moons.filter((m) => (m.kingdom || 'Hop Lab') === place);
      const head = document.createElement('li'); head.className = 'head';
      head.textContent = `${place} · ${list.filter((m) => m.got).length} / ${list.length}`;
      moonList.appendChild(head);
      for (const m of list) {
        const li = document.createElement('li');
        li.className = m.got ? 'got' : '';
        li.textContent = (m.got ? '● ' : '○ ') + m.name;
        moonList.appendChild(li);
      }
    }
    document.getElementById('moonTally').textContent = `${G.moonsGot} of ${G.moons.length} moons · ${G.coins} coins`;
  }
  document.querySelector('[data-tab="moons"]').addEventListener('click', refreshMoons);
  document.getElementById('resetBtn').addEventListener('click', () => { if (confirm('Forget all collected moons and coins?')) save.reset(); });
  for (const b of document.querySelectorAll('[data-gfx]')) {
    b.setAttribute('aria-pressed', String(b.dataset.gfx === gfx));
    b.addEventListener('click', () => { if (b.dataset.gfx !== gfx) { setSetting('gfx', b.dataset.gfx); location.reload(); } });
  }
  const warpList = document.getElementById('warpList');
  let warpGroup = null;
  for (const s of G.stations) {
    if ((s.group || 'Hop Lab') !== warpGroup) {
      warpGroup = s.group || 'Hop Lab';
      const h = document.createElement('div'); h.className = 'head'; h.textContent = warpGroup; warpList.appendChild(h);
    }
    const b = document.createElement('button'); b.className = 'warp'; b.textContent = s.name;
    if (s.moon) b.title = 'Time trial: ' + s.moon;
    b.addEventListener('click', () => { G.player.respawn(s); setPaused(false); G.trials.start(s); });
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
  const HAZE = scene.fog.color.clone();
  const kingdomAt = (x) => G.kingdoms.find((k) => Math.abs(x - k.x) < 150) || null;
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
        for (const c of G.captures) if (Math.abs(c.pos.x - P.pos.x) < 150) c.update(h, G);
        G.player.step(h);
        G.cap.update(h);
        G.trials.update(h);
      }
    }
    const rdt = G.paused ? 0 : dt;
    const C = G.char;
    // The nearest moon, capture, coin or Cappy within a few metres catches the hero's eye.
    let best = null, bestD = 7;
    const consider = (p, range, w = 1) => { const d = p.distanceTo(P.pos) / w; if (d < bestD && d < range) { bestD = d; best = p; } };
    if (G.cap.active) consider(G.cap.pos, 12, 2);
    for (const m of G.moons) if (!m.got && !m.hidden) consider(m.group.position, 10, 1.6);
    for (const c of G.captures) if (!c.captured && !c.stacked) consider(c.pos, 6, 1.2);
    for (const c of G.coinList) if (!c.got) consider(c.pos, 4);
    P.lookAt = best;
    C.root.position.copy(P.pos);
    C.root.visible = P.state !== 'capture' && P.state !== 'flat' && !(P.invuln > 0 && Math.sin(G.time * 40) > 0);
    C.hat.visible = !G.cap.active && P.state !== 'capture';
    C.animate(P, rdt, G.time, G.camRig.yaw);
    G.cap.render(G.capMesh, rdt, G.time);
    for (const o of G.objects) if (o.render) o.render(rdt, G.time, G);
    G.trials.render(rdt);
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
    blob.visible = !!gb && P.state !== 'pipe' && P.state !== 'capture' && P.state !== 'flat';
    if (gb) { const k = Math.max(0.3, 1 - (P.pos.y - gb.y) * 0.07); blob.position.set(P.pos.x, gb.y + 0.03, P.pos.z); blob.scale.setScalar(k); }

    paintUniforms.uTime.value = G.time; paintUniforms.uPlayer.value.copy(P.pos);
    const camPos = G.camRig.cam.position;
    document.body.classList.toggle('underwater', !!G.world.waterAt(camPos.x, camPos.y, camPos.z));
    G.camRig.update(dt, now);
    const t = G.camRig.target;
    sun.position.set(Math.round(t.x) + 20, t.y + 36, Math.round(t.z) + 12); sun.target.position.set(Math.round(t.x), t.y, Math.round(t.z));
    rim.position.set(t.x - 18, t.y + 14, t.z - 22); rim.target.position.copy(t);
    G.hud.prompt(G.paused ? '' : prompt());
    // Which place you're in: the music changes, and arriving shows a title card.
    const kingdom = kingdomAt(P.pos.x), region = kingdom ? kingdom.name : 'Hop Lab';
    if (region !== G.region) {
      if (G.region) {
        const list = G.moons.filter((m) => (m.kingdom || 'Hop Lab') === region), got = list.filter((m) => m.got).length;
        G.hud.kingdom(kingdom ? 'Kingdom of' : 'Back to the', region, `${got} of ${list.length} Power Moons`);
      }
      G.region = region;
      lab.visible = !kingdom;
      for (const k of G.kingdoms) k.root.visible = k === kingdom;
      // Falling or pressing R brings you back somewhere in the place you're in.
      if (kingdomAt(G.spawn.pos.x) !== kingdom) { G.spawn = kingdom ? kingdom.spawn : SPAWN; G.spawnFlag = null; }
    }
    // Each place has its own haze.
    scene.fog.color.lerp(kingdom && kingdom.fog ? kingdom.fog : HAZE, Math.min(1, dt * 2));
    updateMusic(G, dt);
    // Falling off the sky island puts you back on it rather than dropping you into the room.
    if (!G.paused && P.pos.z < -100 && P.pos.y < 28) G.player.respawn(G.spawnFlag && G.spawnFlag.island ? G.spawn : G.islandStart);
    draw();
  }
  G.camRig.snap(SPAWN.facing + PI);
  // Compile every shader, then draw everything once with culling off (uploading every
  // mesh and texture, and the shadow shaders too), behind the loading screen, so the game
  // doesn't stall the first time you see each place. All places are visible until the
  // first frame picks a region.
  try {
    await renderer.compileAsync(scene, camera);
    const culled = [];
    scene.traverse((o) => { if (o.frustumCulled) { o.frustumCulled = false; culled.push(o); } });
    draw();
    for (const o of culled) o.frustumCulled = true;
  } catch { /* things just compile on first sight instead */ }
  document.getElementById('loading').remove();
  setPaused(true);
  requestAnimationFrame(frame);
  if (new URLSearchParams(location.search).has('debug')) {
    // Debug hook used for automated playtesting: ?debug exposes the game context.
    G.renderNow = (dt = 1 / 60) => { G.char.animate(P, dt, G.time, G.camRig.yaw); G.camRig.update(dt, performance.now()); draw(); };
    G.parts = loadedParts;
    window.HL = G;
  }
}

start().catch((e) => {
  console.error(e);
  if (window.hoplabFail) window.hoplabFail(e && e.message ? e.message : String(e));
});

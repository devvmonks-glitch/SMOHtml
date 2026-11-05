import { initAudio } from './audio.js';

const JUMPK = ['Space'], CROUCHK = ['ShiftLeft', 'ShiftRight', 'KeyC'], CAPK = ['KeyE', 'KeyJ', 'KeyF'];
const dz = (v, d = 0.18) => Math.abs(v) < d ? 0 : (v - Math.sign(v) * d) / (1 - d);

// Keyboard + mouse, gamepad and touch merged into one input state.
// Button presses also fire onPress(name) so moves can be buffered.
export function createInput(G, canvas, onPress) {
  const st = { mx: 0, my: 0, camDX: 0, camDY: 0, padRX: 0, padRY: 0, jump: false, crouch: false, cap: false, locked: false };
  const keys = new Set(), kb = { jump: false, crouch: false, cap: false }, tc = { x: 0, y: 0, jump: false, crouch: false, cap: false };
  const padPrev = {};
  let mouseCap = false;
  // Spinning the stick (or rolling through WASD) fires 'spin' for spin jumps, twirls and spin throws.
  let spinAcc = 0, lastAng = null, spinCD = 0;
  const fire = n => { initAudio(); onPress(n); };

  addEventListener('keydown', e => {
    if (e.code === 'KeyP' && !e.repeat) { fire('photo'); return; }
    if (G.photo && (e.code === 'Escape' || e.code === 'KeyH')) { if (!e.repeat) fire('photo'); return; }
    if (e.code === 'KeyH' || e.code === 'Slash' || (e.code === 'Escape' && !st.locked)) { if (!e.repeat) fire('menu'); return; }
    if (G.paused) return;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    if (e.repeat) return;
    keys.add(e.code);
    if (JUMPK.includes(e.code)) { kb.jump = true; fire('jump'); }
    if (CROUCHK.includes(e.code)) { kb.crouch = true; fire('crouch'); }
    if (CAPK.includes(e.code)) { kb.cap = true; fire('cap'); }
    if (e.code === 'KeyQ') fire('spin');
    if (e.code === 'KeyR') fire('restart');
    if (e.code === 'KeyM') fire('mute');
    if (e.code === 'KeyN') fire('music');
  });
  addEventListener('keyup', e => {
    keys.delete(e.code);
    if (JUMPK.includes(e.code)) kb.jump = false;
    if (CROUCHK.includes(e.code)) kb.crouch = false;
    if (CAPK.includes(e.code)) kb.cap = false;
  });
  addEventListener('blur', () => { keys.clear(); kb.jump = kb.crouch = kb.cap = false; mouseCap = false; });

  // Mouse: click to lock the pointer for mouse-look; click again (while locked) to throw the cap.
  // If pointer lock is unavailable, dragging turns the camera instead.
  let dragId = null, lx = 0, ly = 0;
  canvas.addEventListener('pointerdown', e => {
    initAudio();
    if (G.paused) return;
    if (e.pointerType === 'mouse') {
      if (st.locked) { if (e.button === 0) { mouseCap = true; fire('cap'); } return; }
      if (canvas.requestPointerLock) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch { /* not allowed here */ } }
    }
    if (dragId !== null) return;
    dragId = e.pointerId; canvas.setPointerCapture(e.pointerId); lx = e.clientX; ly = e.clientY;
  });
  canvas.addEventListener('pointermove', e => {
    if (e.pointerId !== dragId || st.locked) return;
    const k = e.pointerType === 'touch' ? 1.6 : 1;
    st.camDX += (e.clientX - lx) * k; st.camDY += (e.clientY - ly) * k; lx = e.clientX; ly = e.clientY;
  });
  const endDrag = e => { if (e.pointerId === dragId) dragId = null; if (e.button === 0) mouseCap = false; };
  canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);
  addEventListener('mouseup', e => { if (e.button === 0) mouseCap = false; });
  addEventListener('mousemove', e => { if (st.locked) { st.camDX += e.movementX; st.camDY += e.movementY; } });
  document.addEventListener('pointerlockchange', () => { st.locked = document.pointerLockElement === canvas; G.onLockChange && G.onLockChange(st.locked); });
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // Touch: virtual stick on the left, buttons on the right.
  function bindBtn(id, name) {
    const el = document.getElementById(id);
    el.addEventListener('pointerdown', e => { e.preventDefault(); el.setPointerCapture(e.pointerId); tc[name] = true; el.classList.add('on'); fire(name); });
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
    initAudio();
    if (stickId !== null) return;
    stickId = e.pointerId; zone.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY; stick.style.left = sx + 'px'; stick.style.top = sy + 'px'; stick.style.display = 'block';
    hint.style.display = 'none'; moveStick(e);
  });
  zone.addEventListener('pointermove', e => { if (e.pointerId === stickId) moveStick(e); });
  const endStick = e => { if (e.pointerId !== stickId) return; stickId = null; tc.x = tc.y = 0; stick.style.display = 'none'; knob.style.transform = ''; };
  zone.addEventListener('pointerup', endStick); zone.addEventListener('pointercancel', endStick);

  function poll(dt = 1 / 60) {
    let px = 0, py = 0, pj = false, pc = false, pk = false;
    st.padRX = st.padRY = 0;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gp = null;
    for (const p of pads) if (p && p.connected) { gp = p; break; }
    if (gp) {
      const b = i => !!(gp.buttons[i] && gp.buttons[i].pressed);
      px = dz(gp.axes[0] || 0); py = -dz(gp.axes[1] || 0);
      st.padRX = dz(gp.axes[2] || 0); st.padRY = dz(gp.axes[3] || 0);
      if (b(12)) py = 1; if (b(13)) py = -1; if (b(14)) px = -1; if (b(15)) px = 1;
      pj = b(0) || b(1); pk = b(2) || b(3); pc = b(4) || b(5) || b(6) || b(7);
      const edges = { jump: pj, cap: pk, crouch: pc, restart: b(8), menu: b(9), spin: b(10) || b(11) };
      for (const n in edges) {
        if (edges[n] && !padPrev[n]) {
          if (G.paused) { if (n === 'menu' || n === 'jump') fire('menu'); } else fire(n);
        }
        padPrev[n] = edges[n];
      }
    }
    const k = c => keys.has(c) ? 1 : 0;
    let ix = k('KeyD') + k('ArrowRight') - k('KeyA') - k('ArrowLeft') + tc.x + px;
    let iy = k('KeyW') + k('ArrowUp') - k('KeyS') - k('ArrowDown') + tc.y + py;
    const m = Math.hypot(ix, iy);
    if (m > 1) { ix /= m; iy /= m; }
    st.mx = ix; st.my = iy;

    if (Math.hypot(ix, iy) > 0.6) {
      const a = Math.atan2(ix, iy);
      if (lastAng !== null) {
        let d = a - lastAng;
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        if (d && Math.sign(d) !== Math.sign(spinAcc) && Math.abs(spinAcc) > 0.5) spinAcc *= 0.3;
        spinAcc += d;
      }
      lastAng = a;
    } else lastAng = null;
    spinAcc *= Math.exp(-1.0 * dt); spinCD -= dt;
    if (Math.abs(spinAcc) > 4.8 && spinCD <= 0) { spinAcc = 0; spinCD = 0.5; if (!G.paused) fire('spin'); }
    st.jump = kb.jump || tc.jump || pj;
    st.crouch = kb.crouch || tc.crouch || pc;
    st.cap = kb.cap || tc.cap || pk || mouseCap;
  }

  return { st, poll, keys };
}

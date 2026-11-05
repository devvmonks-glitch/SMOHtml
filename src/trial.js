import * as THREE from 'three';
import { Character } from './character.js';
import { cloneHeroRig } from './models.js';
import { save } from './save.js';

// Station time trials. Warping to a station from the menu starts one; the clock runs
// from the first step until that station's moon is touched. The best run's route is
// saved and replayed next time as a translucent ghost.

const STATES = ['ground', 'crouch', 'skid', 'gpLand', 'roll', 'diveSlide', 'air', 'longjump', 'backflip', 'sideflip', 'gpWind',
  'gpFall', 'gpjump', 'dive', 'capbounce', 'launch', 'wall', 'ledge', 'climb', 'hurt', 'twirl', 'spinjump', 'capture', 'pipe',
  'moonGet', 'swim', 'underwater', 'flat'];
const REC_DT = 1 / 30;
const fmt = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, '0')}`;

function loadGhost(moon) {
  try { const raw = localStorage.getItem('hoplab-ghost-' + moon); return raw ? JSON.parse(raw) : null; } catch { return null; }
}
function storeGhost(moon, rec) {
  try { localStorage.setItem('hoplab-ghost-' + moon, JSON.stringify(rec.map((f) => f.map((v) => Math.round(v * 100) / 100)))); } catch { /* storage unavailable */ }
}

export function createTrials(G) {
  const el = document.getElementById('runTimer');
  let trial = null, ghost = null, ghostChar = null, showUntil = 0;

  function makeGhostChar() {
    const rig = cloneHeroRig();
    const c = new Character({ rig });
    const mat = new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.32, depthWrite: false });
    c.root.traverse((o) => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.userData.noPaint = true; } });
    c.root.visible = false;
    G.scene.add(c.root);
    return c;
  }

  function start(station) {
    cancel();
    const moon = station.moon && G.moons.find((m) => m.name === station.moon);
    if (!moon || moon.hidden) return;
    trial = { station, moon, started: false, t: 0, acc: 0, rec: [], from: G.P.pos.clone() };
    if (moon.got) { moon.trial = true; moon.setGhostly(true); moon.group.visible = true; moon.flyT = 0; moon.group.position.copy(moon.base); }
    ghost = loadGhost(moon.name);
    if (ghost && !ghostChar) ghostChar = makeGhostChar();
    if (ghostChar) ghostChar.root.visible = false;
    el.hidden = false; el.textContent = `${moon.name} · ready`;
  }

  function cancel() {
    if (!trial) return;
    const m = trial.moon;
    if (m.trial) { m.trial = false; m.setGhostly(false); m.group.visible = false; }
    trial = null;
    if (ghostChar) ghostChar.root.visible = false;
    el.hidden = true;
  }

  function finish(moon) {
    if (!trial || trial.moon !== moon) return;
    const t = trial.t, best = save.best(moon.name);
    if (!best || t < best) {
      save.setBest(moon.name, t); storeGhost(moon.name, trial.rec);
      el.textContent = `${moon.name} · ${fmt(t)} · new best!`;
      G.hud.toast(best ? 'New best time!' : 'Time recorded!');
    } else el.textContent = `${moon.name} · ${fmt(t)} · best ${fmt(best)}`;
    if (moon.trial) { moon.trial = false; moon.setGhostly(false); }
    trial = null; showUntil = performance.now() + 4000;
    if (ghostChar) ghostChar.root.visible = false;
  }

  function update(h) {
    if (!trial) return;
    const P = G.P;
    if (!trial.started) {
      if (P.pos.distanceTo(trial.from) > 0.6 || P.state !== 'ground') trial.started = true;
      else return;
    }
    trial.t += h; trial.acc += h;
    while (trial.acc >= REC_DT) {
      trial.acc -= REC_DT;
      trial.rec.push([P.pos.x, P.pos.y, P.pos.z, P.facing, STATES.indexOf(P.state), P.hs, P.vel.y, P.flipT, P.t]);
      if (trial.rec.length > 30 * 120) trial.rec.shift(); // cap at two minutes
    }
  }

  const fakeP = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), state: 'ground', t: 0, flipT: 0, hs: 0, facing: 0, jumpCount: 0, anim: '',
    turnRate: 0, landT: 9, throwT: 9, squash: 0, spinBuf: 0, sideDir: 1, shimmy: 0, rollSpeed: 0, invuln: 0, lookAt: null, onGround: true };

  function render(dt) {
    if (trial) el.textContent = `${trial.moon.name} · ${fmt(trial.t)}` + (save.best(trial.moon.name) ? ` · best ${fmt(save.best(trial.moon.name))}` : '');
    else if (showUntil && performance.now() > showUntil) { el.hidden = true; showUntil = 0; }
    if (!trial || !trial.started || !ghost || !ghostChar) return;
    const i = Math.min(ghost.length - 1, Math.floor(trial.t / REC_DT));
    const f = ghost[i];
    ghostChar.root.visible = i < ghost.length - 1 && STATES[f[4]] !== 'capture' && STATES[f[4]] !== 'flat';
    Object.assign(fakeP, { state: STATES[f[4]] || 'ground', facing: f[3], hs: f[5], flipT: f[7], t: f[8], rollSpeed: f[5] });
    fakeP.pos.set(f[0], f[1], f[2]); fakeP.vel.set(0, f[6], 0);
    ghostChar.root.position.copy(fakeP.pos);
    ghostChar.animate(fakeP, dt, G.time, 0);
  }

  return { start, cancel, finish, update, render, active: () => !!trial, station: () => trial && trial.station };
}


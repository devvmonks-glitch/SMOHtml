import * as THREE from 'three';
import { PI, clamp, angDiff, dirOf, smooth } from './util.js';
import { moveBody, overlaps } from './world.js';

export const PHYS = { G: 34, FALL: 34, RUN: 9.5, ACC: 40, DEC: 44, R: 0.36, H: 1.6, JB: 0.14 };
const JUMP_VY = [0, 11.5, 13.5, 17];

const GROUND = new Set(['ground', 'crouch', 'skid', 'gpLand', 'roll', 'diveSlide']);
const WALL_IN = new Set(['air', 'longjump', 'backflip', 'sideflip', 'capbounce', 'gpjump', 'launch']);
const LEDGE_IN = new Set(['air', 'backflip', 'sideflip', 'capbounce', 'gpjump', 'launch', 'longjump']);
export const BOUNCE = new Set(['air', 'longjump', 'backflip', 'sideflip', 'dive', 'gpjump', 'capbounce', 'launch']);
const SPECIAL = new Set(['capture', 'pipe', 'moonGet', 'ledge', 'climb']);
export const isGround = s => GROUND.has(s);

export function createPlayer(pos, facing) {
  return {
    pos: pos.clone(), vel: new THREE.Vector3(), facing, state: 'air', t: 0, flipT: 0, g: PHYS.G, R: PHYS.R, H: PHYS.H,
    onGround: false, ground: null, groundN: null, coyote: 0, chain: 0, jumpCount: 0, lastJump: '', anim: '', variable: false,
    capThrown: false, capBounced: false, diveUsed: false, wallN: null, skidDir: 0, sideDir: 1, rollSpeed: 0, squash: 0,
    ledge: null, ledgeCD: 0, climb: null, capture: null, captureCD: 0, invuln: 0, throwT: 9, hs: 0, turnRate: 0, landT: 9,
    jumpBuf: 0, crouchBuf: 0, capBuf: 0, pipe: null, shimmy: 0, airT: 0,
  };
}

// All of the player's movement rules. `G` is the shared game context.
export function createPlayerSystem(G) {
  const P = G.P, inp = G.input.st;

  const setState = s => { P.state = s; P.t = 0; };
  function accelTo(tx, tz, rate, h) {
    const dx = tx - P.vel.x, dz = tz - P.vel.z, d = Math.hypot(dx, dz), m = rate * h;
    if (d <= m) { P.vel.x = tx; P.vel.z = tz; } else { P.vel.x += dx / d * m; P.vel.z += dz / d * m; }
  }
  function turnToward(target, rate, h) {
    const d = angDiff(target, P.facing), m = rate * h;
    P.facing += Math.abs(d) < m ? d : Math.sign(d) * m;
  }

  function press(n) {
    if (n === 'jump') P.jumpBuf = PHYS.JB;
    if (n === 'crouch') P.crouchBuf = 0.12;
    if (n === 'cap') P.capBuf = 0.12;
  }

  function doJump(vy, state, name, variable, tag) {
    P.vel.y = vy; setState(state); P.flipT = 0; P.onGround = false; P.ground = null; P.coyote = 0;
    P.jumpBuf = 0; P.crouchBuf = 0; P.variable = variable; P.lastJump = tag || ''; P.anim = ''; P.squash -= 0.28;
    if (name) G.hud.toast(name);
    G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 5, 1.6, 0.2);
  }

  function launch(vy) {
    P.vel.y = vy; setState('launch'); P.flipT = 0; P.variable = false; P.onGround = false; P.ground = null; P.coyote = 0;
    P.capThrown = false; P.capBounced = false; P.diveUsed = false; P.jumpCount = 0; P.lastJump = ''; P.anim = '';
    P.jumpBuf = 0; P.squash -= 0.35;
  }

  function bounceOff(vy) {
    P.vel.y = vy; setState('air'); P.flipT = 0; P.variable = true; P.onGround = false; P.ground = null;
    P.capThrown = false; P.diveUsed = false; P.lastJump = ''; P.anim = ''; P.jumpCount = 1; P.squash -= 0.25;
  }

  function capBounce() {
    P.vel.y = 13.5; setState('capbounce'); P.flipT = 0; P.variable = false;
    P.capBounced = true; P.diveUsed = false; P.capThrown = false; P.squash -= 0.3;
    G.hud.toast('Cap jump'); G.sfx.capBounce();
    G.fx.sparkle(P.pos.x, P.pos.y + 0.6, P.pos.z, 12, 0xfff2a8);
  }

  function dive() {
    if (G.W) P.facing = Math.atan2(G.W.x, G.W.z);
    const f = dirOf(P.facing);
    P.vel.set(f.x * 13, 7, f.z * 13);
    setState('dive'); P.diveUsed = true; P.variable = false; P.anim = '';
    G.hud.toast('Dive'); G.sfx.dive();
  }

  function hurt(x, z) {
    if (P.invuln > 0 || SPECIAL.has(P.state) || P.state === 'hurt') return;
    let dx = P.pos.x - x, dz = P.pos.z - z; const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
    P.vel.set(dx * 7, 8, dz * 7); P.facing = Math.atan2(-dx, -dz);
    setState('hurt'); P.invuln = 1.6; P.onGround = false; P.ground = null; P.variable = false;
    G.sfx.ouch(); G.camRig.addShake(0.25); G.hud.toast('Ouch!');
  }

  function respawn(to) {
    if (P.capture) endCapture(true);
    const s = to || G.spawn;
    P.pos.copy(s.pos); P.vel.set(0, 0, 0); P.facing = s.facing; setState('air');
    P.R = PHYS.R; P.H = PHYS.H; P.ledge = null; P.pipe = null; P.invuln = 0;
    G.cap.reset(); G.camRig.snap(s.facing + PI);
  }

  function moonGet() {
    setState('moonGet'); P.vel.set(0, 0, 0); P.facing = G.camRig.yaw;
    P.ledge = null; P.climb = null;
  }

  // ---------- captures ----------
  function startCapture(c) {
    if (P.captureCD > 0 || SPECIAL.has(P.state)) return false;
    setState('capture'); P.capture = c; P.pos.copy(c.pos); P.vel.set(0, 0, 0); P.facing = c.facing;
    P.R = c.R; P.H = c.H; P.onGround = false; P.ground = null; P.ledge = null;
    G.cap.reset(); c.onCapture(G);
    G.fx.burst(c.pos.x, c.pos.y + c.H * 0.6, c.pos.z, 26, 5, 0xffe27a, 0.11, 0.6, 3);
    G.sfx.capture(); G.hud.toast(c.name);
    return true;
  }
  function endCapture(silent) {
    const c = P.capture;
    if (!c) return;
    P.capture = null;
    const lift = c.release(G) || 0;
    P.R = PHYS.R; P.H = PHYS.H; setState('air'); P.variable = false; P.onGround = false; P.ground = null;
    P.pos.y += lift;
    const f = dirOf(P.facing);
    if (c.releaseVel) P.vel.copy(c.releaseVel); else P.vel.set(-f.x * 3, 10, -f.z * 3);
    P.captureCD = 0.8; P.capThrown = false; P.diveUsed = false; P.jumpCount = 0;
    if (!silent) { G.sfx.release(); G.fx.burst(P.pos.x, P.pos.y + 0.8, P.pos.z, 16, 4, 0xffe27a, 0.1, 0.5, 3); }
  }

  // ---------- ground ----------
  function groundLogic(h) {
    const crouchTap = P.crouchBuf > 0;
    P.coyote = 0.1; P.g = PHYS.G; P.crouchBuf = 0; P.airT = 0;
    const W = G.W, s = P.state, hs = P.hs, gn = P.groundN;

    if (s === 'gpLand') {
      accelTo(0, 0, 80, h);
      if (P.jumpBuf > 0) { doJump(18, 'gpjump', 'Ground pound jump', false); G.sfx.bigJump(); return; }
      if (P.t > 0.25) setState(inp.crouch ? 'crouch' : 'ground');
      return;
    }
    if (s === 'diveSlide') {
      accelTo(0, 0, 12, h);
      if (P.jumpBuf > 0 || P.capBuf > 0) {
        P.capBuf = 0;
        const f = dirOf(P.facing), sp = Math.max(hs, 5);
        P.vel.x = f.x * sp; P.vel.z = f.z * sp;
        doJump(10, 'air', 'Roll out', false); G.sfx.jump(1);
        return;
      }
      if (hs < 1 && P.t > 0.3) setState('ground');
      return;
    }
    if (s === 'roll') {
      if (P.capBuf > 0) {
        P.capBuf = 0; P.rollSpeed = Math.min(P.rollSpeed + 5, 22); P.t = 0;
        G.hud.toast('Roll boost'); G.sfx.spin(); G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 8, 3, 0.25);
      }
      if (W) turnToward(Math.atan2(W.x, W.z), 3.2, h);
      let decel = 5;
      if (gn) {
        const f = dirOf(P.facing), downhill = f.x * gn.x + f.z * gn.z;
        P.rollSpeed += downhill * 60 * h;
        if (downhill > 0.05) decel = 0;
      }
      P.rollSpeed = clamp(P.rollSpeed - decel * h, 0, 26);
      const f = dirOf(P.facing);
      P.vel.x = f.x * P.rollSpeed; P.vel.z = f.z * P.rollSpeed;
      if (P.jumpBuf > 0) { doJump(10.5, 'air', 'Roll jump', true); G.sfx.jump(2); return; }
      if ((P.t > 0.6 && !inp.crouch) || P.rollSpeed < 3) setState(inp.crouch ? 'crouch' : 'ground');
      return;
    }
    if (s === 'skid') {
      accelTo(0, 0, 55, h);
      if (P.jumpBuf > 0) {
        P.sideDir = angDiff(P.skidDir, P.facing) > 0 ? 1 : -1;
        P.facing = P.skidDir; const f = dirOf(P.facing);
        P.vel.x = f.x * 4.5; P.vel.z = f.z * 4.5;
        doJump(17, 'sideflip', 'Side flip', false); G.sfx.jump(3);
        return;
      }
      if (P.t > 0.32 || hs < 0.5) { P.facing = P.skidDir; setState('ground'); }
      return;
    }

    // Warp pipes: crouch on top of one.
    const pipe = P.ground && P.ground.pipe;
    if (crouchTap && pipe && pipe.link && Math.hypot(P.pos.x - pipe.x, P.pos.z - pipe.z) < 0.9) { enterPipe(pipe); return; }

    if (inp.crouch) {
      if (s !== 'crouch') setState('crouch');
      const tx = W ? W.x * 2.8 * W.mag : 0, tz = W ? W.z * 2.8 * W.mag : 0;
      accelTo(tx, tz, hs > 3 ? 14 : 30, h);
      if (W && hs < 3) turnToward(Math.atan2(W.x, W.z), 10, h);
      if (P.jumpBuf > 0) {
        const f = dirOf(P.facing);
        if (hs > 3.5) {
          const sp = clamp(hs * 1.3, 14, 17);
          P.vel.x = f.x * sp; P.vel.z = f.z * sp;
          doJump(8.5, 'longjump', 'Long jump', false); G.sfx.jump(2);
        } else {
          P.vel.x = -f.x * 2.8; P.vel.z = -f.z * 2.8;
          doJump(18.5, 'backflip', 'Backflip', false); G.sfx.jump(3);
        }
        return;
      }
      if (P.capBuf > 0) {
        P.capBuf = 0; P.rollSpeed = Math.max(hs, 13); setState('roll');
        G.hud.toast('Roll'); G.sfx.spin(); G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 6, 2.5, 0.22);
      }
      return;
    }
    if (s === 'crouch') setState('ground');

    if (W && hs > 5.5) {
      const d = (P.vel.x * W.x + P.vel.z * W.z) / hs;
      if (d < -0.6) { P.skidDir = Math.atan2(W.x, W.z); setState('skid'); G.sfx.skid(); return; }
    }
    if (W) {
      turnToward(Math.atan2(W.x, W.z), hs > 7 ? 7.5 : hs > 3 ? 13 : 24, h);
      const f = dirOf(P.facing);
      let target = PHYS.RUN * W.mag;
      if (gn) target *= 1 - Math.max(0, -(f.x * gn.x + f.z * gn.z)) * 0.8;
      const acc = hs < 3 ? 70 : PHYS.ACC;
      const sp = hs < target ? Math.min(target, hs + acc * h) : Math.max(target, hs - PHYS.DEC * h);
      P.vel.x = f.x * sp; P.vel.z = f.z * sp;
    } else accelTo(0, 0, PHYS.DEC, h);

    if (P.jumpBuf > 0) {
      let n = (P.chain > 0 && hs > 3) ? P.jumpCount + 1 : 1;
      if (n > 3) n = 1;
      if (n === 3 && hs < 6) n = 2;
      P.jumpCount = n;
      doJump(JUMP_VY[n] + hs * 0.08, 'air', ['', '', 'Double jump', 'Triple jump'][n], true, n === 3 ? 'triple' : 'chain');
      P.anim = n === 3 ? 'triple' : '';
      G.sfx.jump(n);
      return;
    }
    if (P.capBuf > 0 && G.cap.throw()) { P.capBuf = 0; P.throwT = 0; }
  }

  // ---------- air ----------
  function airLogic(h) {
    const W = G.W, s = P.state, hs = P.hs;
    P.g = PHYS.G; P.airT += h;
    if (s === 'gpWind') {
      P.vel.set(0, 0, 0); P.g = 0;
      if (P.capBuf > 0 && !P.diveUsed) { P.capBuf = 0; dive(); return; }
      if (P.t >= 0.26) { setState('gpFall'); P.vel.y = -32; G.sfx.pound(); }
      return;
    }
    if (s === 'gpFall') {
      P.vel.x = 0; P.vel.z = 0; P.g = 0; P.vel.y = -32;
      if (P.capBuf > 0 && !P.diveUsed) { P.capBuf = 0; dive(); }
      return;
    }
    if (s === 'hurt') { accelTo(0, 0, 4, h); return; }
    if (s === 'wall') {
      const n = P.wallN; P.g = PHYS.G * 0.45;
      if (P.vel.y < -4) P.vel.y = -4;
      P.vel.x = -n.x * 1.5; P.vel.z = -n.z * 1.5;
      if (P.jumpBuf > 0) {
        P.facing = Math.atan2(n.x, n.z); P.vel.x = n.x * 8; P.vel.z = n.z * 8;
        doJump(14, 'air', 'Wall jump', false); P.jumpCount = 0; P.diveUsed = false; P.capThrown = false;
        G.sfx.wallJump(); G.fx.dust(P.pos.x - n.x * 0.3, P.pos.y + 0.8, P.pos.z - n.z * 0.3, 6, 2, 0.2);
        return;
      }
      if (P.crouchBuf > 0 || (W && (W.x * n.x + W.z * n.z) > 0.5)) {
        P.crouchBuf = 0; setState('air'); P.vel.x = n.x * 2; P.vel.z = n.z * 2; P.variable = false;
      }
      return;
    }

    let ctrl = 22;
    if (s === 'longjump') { ctrl = 6; P.g = 26; }
    else if (s === 'dive') { ctrl = 5; P.g = 28; }
    else if (s === 'backflip' || s === 'sideflip') ctrl = 12;
    else if (s === 'launch') ctrl = 16;
    if (P.variable && P.vel.y > 0 && !inp.jump) P.g = PHYS.G * 2.5;
    else if ((s === 'air' || s === 'launch' || s === 'capbounce') && Math.abs(P.vel.y) < 2.5) P.g = PHYS.G * 0.7; // hang at the apex

    if (W) { const ms = Math.max(PHYS.RUN, hs) * W.mag; accelTo(W.x * ms, W.z * ms, ctrl, h); }
    else if (s === 'air' || s === 'capbounce' || s === 'gpjump' || s === 'launch') accelTo(0, 0, 3, h);
    const nhs = Math.hypot(P.vel.x, P.vel.z);
    if (s === 'longjump' || s === 'dive') { if (nhs > 1) P.facing = Math.atan2(P.vel.x, P.vel.z); }
    else if (s !== 'backflip' && W) turnToward(Math.atan2(W.x, W.z), 7, h);

    if (s === 'air' && P.coyote > 0 && P.jumpBuf > 0 && P.vel.y <= 0) {
      doJump(JUMP_VY[1], 'air', '', true, 'chain'); P.jumpCount = 1; G.sfx.jump(1); return;
    }
    if (P.crouchBuf > 0 && s !== 'dive') {
      P.crouchBuf = 0; setState('gpWind'); P.vel.set(0, 0, 0); P.variable = false;
      G.hud.toast('Ground pound'); G.sfx.spin(); return;
    }
    if (P.capBuf > 0 && !P.capThrown && s !== 'dive' && G.cap.throw()) {
      P.capBuf = 0; P.capThrown = true; P.throwT = 0;
      if (P.vel.y < 1.5) P.vel.y = 1.5;
    }
  }

  // ---------- ledges ----------
  function tryLedge(w) {
    const s = w.s;
    if (s.type !== 'box' || s.noLedge || s.delta) return false;
    if (!G.W || (G.W.x * -w.x + G.W.z * -w.z) < 0.3) return false;
    const top = s.max.y, hands = P.pos.y + 1.6;
    if (hands < top || hands - top > 0.55) return false;
    const ix = P.pos.x - w.x * (P.R * 2 + 0.25), iz = P.pos.z - w.z * (P.R * 2 + 0.25);
    for (const o of G.world.solids) if (overlaps(o, ix, top + 0.02, iz, P.R, P.H)) return false;
    setState('ledge'); P.ledge = { s, n: { x: w.x, z: w.z }, top };
    P.pos.y = top - 1.6; P.vel.set(0, 0, 0); P.facing = Math.atan2(-w.x, -w.z);
    P.capThrown = false; P.diveUsed = false; P.jumpCount = 0; P.squash += 0.12;
    G.sfx.grab();
    return true;
  }

  function ledgeLogic(h) {
    const L = P.ledge, n = L.n, W = G.W;
    P.vel.set(0, 0, 0); P.shimmy = 0;
    if (!L.s.on) { setState('air'); return; }
    if (P.t < 0.12) return;
    if (P.jumpBuf > 0) {
      P.jumpBuf = 0; setState('climb');
      const d = P.R * 2 + 0.2;
      P.climb = { x0: P.pos.x, z0: P.pos.z, y0: P.pos.y, x1: P.pos.x - n.x * d, z1: P.pos.z - n.z * d, y1: L.top };
      G.sfx.jump(1);
      return;
    }
    if (P.crouchBuf > 0 || (W && (W.x * n.x + W.z * n.z) > 0.6)) {
      P.crouchBuf = 0; setState('air'); P.vel.set(n.x * 2, 0, n.z * 2); P.ledgeCD = 0.4; P.variable = false;
      return;
    }
    if (W) {
      const tx = -n.z, tz = n.x, a = W.x * tx + W.z * tz;
      if (Math.abs(a) > 0.35) {
        const st = 2.8 * Math.sign(a) * h, nx = P.pos.x + tx * st, nz = P.pos.z + tz * st, s = L.s;
        const inside = Math.abs(tx) > 0.5 ? nx > s.min.x + 0.1 && nx < s.max.x - 0.1 : nz > s.min.z + 0.1 && nz < s.max.z - 0.1;
        if (inside) { P.pos.x = nx; P.pos.z = nz; P.shimmy = Math.sign(a); }
      }
    }
  }

  function climbLogic() {
    const c = P.climb, k = Math.min(1, P.t / 0.3);
    const up = smooth(k / 0.7), fwd = smooth((k - 0.4) / 0.6);
    P.pos.y = c.y0 + (c.y1 - c.y0) * up;
    P.pos.x = c.x0 + (c.x1 - c.x0) * fwd; P.pos.z = c.z0 + (c.z1 - c.z0) * fwd;
    if (k >= 1) {
      P.pos.y = c.y1; setState('ground'); P.onGround = true; P.ground = P.ledge.s; P.vel.set(0, 0, 0);
      P.ledge = null; P.climb = null; P.landT = 0; P.squash += 0.15;
    }
  }

  // ---------- pipes ----------
  function enterPipe(pipe) {
    setState('pipe'); P.pipe = { from: pipe, to: pipe.link, phase: 'down' };
    P.pos.x = pipe.x; P.pos.z = pipe.z; P.vel.set(0, 0, 0);
    G.sfx.pipe();
  }
  function pipeLogic() {
    const pp = P.pipe;
    if (pp.phase === 'down') {
      P.pos.y = pp.from.top - smooth(P.t / 0.55) * 1.9;
      if (P.t >= 0.75) {
        P.pos.set(pp.to.x, pp.to.top - 1.9, pp.to.z); pp.phase = 'up'; P.t = 0;
        G.camRig.snap(P.facing + PI); G.sfx.pipe();
      }
    } else {
      P.pos.y = pp.to.top - 1.9 + smooth(P.t / 0.45) * 1.9;
      if (P.t >= 0.45) {
        P.pos.y = pp.to.top; P.pipe = null; setState('air'); P.variable = false; P.ground = null;
        const f = dirOf(P.facing); P.vel.set(f.x * 1.5, 10, f.z * 1.5);
      }
    }
  }

  // ---------- integration ----------
  function land(impact) {
    const s = P.state, gs = P.ground;
    P.capThrown = false; P.capBounced = false; P.diveUsed = false; P.landT = 0;
    if (s === 'gpFall') {
      if (gs && gs.onPound && gs.onPound(G, P) === 'break') {
        setState('gpFall'); P.onGround = false; P.ground = null; P.vel.y = -32; return;
      }
      setState('gpLand'); P.squash += 0.6;
      G.fx.ring(P.pos.x, P.pos.y, P.pos.z, 3.4, 0xffffff, 0.5);
      G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 14, 5, 0.32);
      G.camRig.addShake(0.35); G.sfx.poundLand();
    } else if (s === 'dive') {
      setState('diveSlide'); P.squash += 0.2;
      G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 8, 2.5, 0.24); G.sfx.land(0.6);
    } else {
      P.chain = P.lastJump === 'chain' ? 0.2 : 0;
      if (P.lastJump !== 'chain') P.jumpCount = 0;
      const k = clamp(impact / 34, 0, 1);
      P.squash += 0.12 + k * 0.4;
      setState(inp.crouch ? 'crouch' : 'ground');
      if (impact > 6) G.fx.dust(P.pos.x, P.pos.y, P.pos.z, Math.round(4 + k * 8), 1.5 + k * 3, 0.22);
      G.sfx.land(k);
    }
    P.lastJump = ''; P.anim = '';
    if (gs && gs.onLand) gs.onLand(G, P, s);
  }

  function carry(s) {
    if (s.delta) { P.pos.x += s.delta.x; P.pos.y += s.delta.y; P.pos.z += s.delta.z; }
    if (s.rotDelta) {
      const a = s.rotDelta, c = Math.cos(a), sn = Math.sin(a), dx = P.pos.x - s.x, dz = P.pos.z - s.z;
      P.pos.x = s.x + dx * c + dz * sn; P.pos.z = s.z - dx * sn + dz * c;
      P.facing += a;
    }
  }

  function integrate(h) {
    P.vel.y -= P.g * h;
    if (P.vel.y < -PHYS.FALL) P.vel.y = -PHYS.FALL;
    const wasGround = GROUND.has(P.state), vy0 = P.vel.y;
    const res = moveBody(P, G.world, h, wasGround);
    if (res.head && res.head.onBump) res.head.onBump(G, P);
    if (!P.onGround && res.wall && LEDGE_IN.has(P.state) && P.vel.y <= 0 && P.ledgeCD <= 0 && tryLedge(res.wall)) return;
    if (P.state === 'wall') {
      if (!res.wall && !P.onGround) { setState('air'); P.variable = false; }
    } else if (res.wall && WALL_IN.has(P.state) && !P.onGround && P.vel.y < 4 && G.W &&
               (G.W.x * -res.wall.x + G.W.z * -res.wall.z) > 0.35 && res.wall.s.max.y - P.pos.y > 1.2 && !res.wall.s.noWall) {
      setState('wall'); P.wallN = { x: res.wall.x, z: res.wall.z };
      P.facing = Math.atan2(-res.wall.x, -res.wall.z);
      if (P.vel.y < 0) P.vel.y *= 0.3;
      G.sfx.grab();
    }
    if (P.onGround && !wasGround) land(-vy0);
    else if (!P.onGround && wasGround) { setState('air'); P.variable = false; P.lastJump = ''; P.anim = ''; }
    if (P.onGround && P.ground && P.ground.onStand) P.ground.onStand(G, P);
  }

  function step(h) {
    P.t += h; P.flipT += h; P.chain -= h; P.coyote -= h; P.invuln -= h; P.throwT += h; P.landT += h;
    P.captureCD -= h; P.ledgeCD -= h;
    if (P.ground && (P.onGround || P.state === 'capture')) carry(P.ground);
    P.hs = Math.hypot(P.vel.x, P.vel.z);
    const f0 = P.facing;
    switch (P.state) {
      case 'capture':
        if (P.crouchBuf > 0 && P.capture.canRelease) { P.crouchBuf = 0; endCapture(); }
        else P.capture.control(G, h);
        break;
      case 'pipe': pipeLogic(); break;
      case 'moonGet': if (P.t > 2.1) setState(P.onGround ? 'ground' : 'air'); break;
      case 'ledge': ledgeLogic(h); break;
      case 'climb': climbLogic(); break;
      default:
        if (GROUND.has(P.state)) groundLogic(h); else airLogic(h);
        if (!SPECIAL.has(P.state)) integrate(h);
    }
    P.jumpBuf = Math.max(0, P.jumpBuf - h); P.crouchBuf = Math.max(0, P.crouchBuf - h); P.capBuf = Math.max(0, P.capBuf - h);
    P.turnRate += (angDiff(P.facing, f0) / h - P.turnRate) * 0.15;
    if (P.pos.y < -20) respawn();
  }

  return { press, step, respawn, launch, bounceOff, capBounce, hurt, moonGet, startCapture, endCapture, setState };
}

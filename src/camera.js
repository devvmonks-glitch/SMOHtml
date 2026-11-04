import * as THREE from 'three';
import { PI, clamp, angDiff, damp } from './util.js';
import { rayCast } from './world.js';

const NO_AUTO = new Set(['wall', 'backflip', 'ledge', 'climb', 'moonGet', 'pipe', 'skid']);
const STEADY = new Set(['ledge', 'wall', 'climb', 'pipe', 'moonGet']);

// Third-person orbit camera. It holds its height through jumps (like SMO) instead of
// bobbing with every hop, swings behind you while running, and pulls in when a wall
// gets between it and the player.
export class CameraRig {
  constructor(camera, G) {
    this.cam = camera; this.G = G;
    this.yaw = 0; this.pitch = 0.3; this.cur = 10; this.lastManual = -1e9;
    this.target = new THREE.Vector3(); this.look = new THREE.Vector3(); this.groundY = 0;
    this.shakeAmt = 0; this.fovK = 0; this.snapNext = true; this._d = new THREE.Vector3();
  }
  snap(yaw) { this.snapNext = true; if (yaw !== undefined) this.yaw = yaw; }
  addShake(a) { this.shakeAmt = Math.max(this.shakeAmt, a); }

  applyInput(dt, now) {
    const inp = this.G.input.st;
    if (inp.camDX || inp.camDY) {
      this.yaw -= inp.camDX * 0.0026; this.pitch = clamp(this.pitch + inp.camDY * 0.0022, -0.25, 1.25);
      inp.camDX = inp.camDY = 0; this.lastManual = now;
    }
    if (inp.padRX || inp.padRY) {
      this.yaw -= inp.padRX * 2.8 * dt; this.pitch = clamp(this.pitch + inp.padRY * 1.8 * dt, -0.25, 1.25);
      this.lastManual = now;
    }
  }

  update(dt, now) {
    const P = this.G.P, hs = P.hs;
    if (now - this.lastManual > 1400 && hs > 3 && !NO_AUTO.has(P.state))
      this.yaw += angDiff(P.facing + PI, this.yaw) * damp(0.9 * clamp(hs / 9, 0, 1.4), dt);

    // Vertical framing: follow the ground, not the jump arc.
    if (P.onGround || STEADY.has(P.state) || (P.state === 'capture' && P.onGround)) this.groundY = P.pos.y;
    else if (P.pos.y < this.groundY) this.groundY = P.pos.y;
    else if (P.pos.y > this.groundY + 3.2) this.groundY = P.pos.y - 3.2;
    const ty = this.groundY + 1.5;

    const k = damp(2.5, dt);
    this.look.x += (P.vel.x * 0.16 - this.look.x) * k; this.look.z += (P.vel.z * 0.16 - this.look.z) * k;
    if (this.snapNext) {
      this.groundY = P.pos.y; this.target.set(P.pos.x, P.pos.y + 1.5, P.pos.z); this.look.set(0, 0, 0);
    } else {
      const a = damp(9, dt);
      this.target.x += (P.pos.x + this.look.x - this.target.x) * a;
      this.target.z += (P.pos.z + this.look.z - this.target.z) * a;
      this.target.y += (ty - this.target.y) * damp(P.vel.y < -14 ? 9 : 4.5, dt);
    }

    const base = (this.cam.aspect < 1 ? 12.5 : 10.5) + clamp(hs - 10, 0, 12) * 0.15;
    const d = this._d.set(Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), Math.cos(this.yaw) * Math.cos(this.pitch));
    const hit = rayCast(this.G.world, this.target, d, base + 0.5);
    const want = Math.max(1.6, Math.min(base, hit - 0.45));
    if (this.snapNext) this.cur = want;
    else this.cur += (want - this.cur) * damp(want < this.cur ? 22 : 3, dt);
    this.snapNext = false;

    const c = this.cam;
    c.position.copy(this.target).addScaledVector(d, this.cur);
    if (c.position.y < 0.35) c.position.y = 0.35;
    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt * 0.6;
      c.position.x += (Math.random() - 0.5) * s; c.position.y += (Math.random() - 0.5) * s; c.position.z += (Math.random() - 0.5) * s;
      this.shakeAmt *= Math.exp(-8 * dt);
    }
    c.lookAt(this.target);

    const baseFov = c.aspect < 1 ? 70 : 58;
    this.fovK += (clamp((hs - 10) * 0.7, 0, 10) - this.fovK) * damp(3, dt);
    const fov = baseFov + this.fovK;
    if (Math.abs(c.fov - fov) > 0.01) { c.fov = fov; c.updateProjectionMatrix(); }
  }
}

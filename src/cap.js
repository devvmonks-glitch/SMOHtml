import * as THREE from 'three';
import { dirOf, damp, clamp, angDiff } from './util.js';
import { overlaps } from './world.js';
import { BOUNCE } from './player.js';

const OUT_T = 0.2;        // seconds to reach full throw distance
const ORBIT_T = 0.55;     // spin-throw duration

// The thrown cap. Normal throw: whips out (eased, carrying some of your momentum), hovers
// (longer while Cap is held), then curves back to your head. Spin throw: circles around you.
export function createCap(G) {
  const blocked = p => G.world.solids.some(s => !s.capPass && overlaps(s, p.x, p.y - 0.15, p.z, 0.25, 0.3));
  const cap = {
    active: false, mode: 'normal', phase: 'out', t: 0, pos: new THREE.Vector3(), vel: new THREE.Vector3(),
    start: new THREE.Vector3(), dir: { x: 0, z: 1 }, dist: 5, orbitA: 0, squash: 0, spin: 0, bonk: 0,

    throw(kind = 'normal') {
      const P = G.P;
      if (this.active) return false;
      const f = dirOf(P.facing);
      this.active = true; this.mode = kind; this.t = 0; this.squash = 1;
      if (kind === 'spin') {
        this.phase = 'orbit'; this.orbitA = P.facing;
        this.pos.set(P.pos.x + f.x * 0.5, P.pos.y + 0.9, P.pos.z + f.z * 0.5);
      } else {
        this.phase = 'out'; this.dir = f;
        // Running throws go further, like flicking it with your momentum.
        this.dist = 4.6 + clamp(P.vel.x * f.x + P.vel.z * f.z, 0, 15) * 0.12;
        this.start.set(P.pos.x + f.x * 0.55, P.pos.y + 1.0, P.pos.z + f.z * 0.55);
        this.pos.copy(this.start);
      }
      G.sfx.capThrow();
      G.fx.burst(this.pos.x, this.pos.y, this.pos.z, 6, 3, 0xffffff, 0.07, 0.25, 0);
      return true;
    },

    reset() { this.active = false; },

    goBack() {
      this.phase = 'back'; this.t = 0;
      // A sideways kick makes the return curve instead of flying in a straight line.
      const P = G.P, dx = P.pos.x - this.pos.x, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dz) || 1;
      const side = Math.random() < 0.5 ? -1 : 1;
      this.vel.set(-dz / d * 5 * side, 3.5, dx / d * 5 * side);
    },

    update(h) {
      if (!this.active) return;
      const P = G.P;
      this.t += h;
      if (this.phase === 'out') {
        const k = Math.min(1, this.t / OUT_T), e = 1 - Math.pow(1 - k, 3);
        const nx = this.start.x + this.dir.x * this.dist * e, nz = this.start.z + this.dir.z * this.dist * e;
        const prev = this.pos.clone();
        this.pos.x = nx; this.pos.z = nz;
        if (blocked(this.pos)) {
          this.pos.copy(prev); this.bonk = 1; this.phase = 'hover'; this.t = 0.25;
          G.sfx.block(); G.fx.burst(this.pos.x, this.pos.y, this.pos.z, 8, 3, 0xfff2a8, 0.08, 0.3, 0);
        } else if (k >= 1) { this.phase = 'hover'; this.t = 0; }
      } else if (this.phase === 'hover') {
        if (this.t > (G.input.st.cap ? 1.5 : 0.55)) this.goBack();
      } else if (this.phase === 'orbit') {
        const r = Math.min(1, this.t / 0.12) * 2.3;
        this.orbitA += h * 15;
        this.pos.set(P.pos.x + Math.sin(this.orbitA) * r, P.pos.y + 0.9, P.pos.z + Math.cos(this.orbitA) * r);
        if (this.t > ORBIT_T) this.goBack();
      } else {
        const tx = P.pos.x - this.pos.x, ty = P.pos.y + P.H * 0.8 - this.pos.y, tz = P.pos.z - this.pos.z, d = Math.hypot(tx, ty, tz);
        if (d < 0.75) { this.active = false; G.sfx.capCatch(); G.char.hatPop = 1; G.fx.sparkle(P.pos.x, P.pos.y + P.H, P.pos.z, 6, 0xffffff); return; }
        const sp = Math.min(42, 12 + this.t * 90);
        const k = damp(9 + this.t * 20, h);
        this.vel.x += (tx / d * sp - this.vel.x) * k; this.vel.y += (ty / d * sp - this.vel.y) * k; this.vel.z += (tz / d * sp - this.vel.z) * k;
        this.pos.addScaledVector(this.vel, h);
      }

      if (this.phase !== 'back') {
        for (const c of G.captures) {
          if (c.canCapture() && c.capDist(this.pos) < c.R + 0.55 && G.player.startCapture(c)) return;
        }
      }
      for (const o of G.objects) if (o.capHit) o.capHit(G, this.pos);

      const live = this.phase === 'hover' || (this.phase === 'out' && this.t > 0.06);
      if (live && !P.onGround && !P.capBounced && BOUNCE.has(P.state) &&
          Math.hypot(P.pos.x - this.pos.x, P.pos.y + 0.75 - this.pos.y, P.pos.z - this.pos.z) < 1.25) {
        G.player.capBounce();
        this.squash = 1.2; this.goBack();
      }
    },

    // Spin, wobble, bob and squash: called every rendered frame.
    render(mesh, dt, time) {
      mesh.visible = this.active;
      if (!this.active) return;
      if (this.phase === 'hover' && this.t > 0.12) {
        // Settle and glance back at the player, with a little curious wobble.
        const P = G.P, want = Math.atan2(P.pos.x - this.pos.x, P.pos.z - this.pos.z) + Math.sin(time * 3) * 0.35;
        this.spin += angDiff(want, this.spin) * damp(10, dt);
      } else this.spin += (this.phase === 'orbit' ? 34 : this.phase === 'hover' ? 16 : 30) * dt;
      this.squash = Math.max(0, this.squash - dt * 4); this.bonk = Math.max(0, this.bonk - dt * 4);
      const sq = Math.sin(this.squash * Math.PI * 2.5) * this.squash * 0.35;
      mesh.position.copy(this.pos);
      if (this.phase === 'hover') mesh.position.y += Math.sin(time * 7) * 0.07;
      mesh.rotation.set(Math.sin(time * 9) * (this.phase === 'hover' ? 0.18 : 0.08) + this.bonk * 0.5, this.spin, Math.cos(time * 7) * 0.1);
      const s = 0.8; // match the hat on the character's head
      mesh.scale.set(s * (1 + sq), s * (1 - sq * 1.2), s * (1 + sq));
      // Sparkle trail while moving.
      this.trailT = (this.trailT || 0) - dt;
      if (this.trailT <= 0 && this.phase !== 'hover') {
        this.trailT = 0.025;
        G.fx.spawn(this.pos.x, this.pos.y, this.pos.z, 0, 0.3, 0, 0.28, 0.1, 0, 0xfff6c8, 0, 2);
      }
    },
  };
  return cap;
}

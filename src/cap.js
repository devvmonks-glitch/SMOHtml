import * as THREE from 'three';
import { dirOf } from './util.js';
import { overlaps } from './world.js';
import { BOUNCE } from './player.js';

// The thrown cap: flies out, hovers (longer while the button is held), then homes back.
export function createCap(G) {
  const cap = {
    active: false, phase: 'out', t: 0, dx: 0, dz: 0, pos: new THREE.Vector3(),

    throw() {
      const P = G.P;
      if (this.active) return false;
      const f = dirOf(P.facing);
      Object.assign(this, { active: true, phase: 'out', t: 0, dx: f.x, dz: f.z });
      this.pos.set(P.pos.x + f.x * 0.6, P.pos.y + 1.0, P.pos.z + f.z * 0.6);
      G.sfx.capThrow();
      return true;
    },

    reset() { this.active = false; },

    update(h) {
      if (!this.active) return;
      const P = G.P;
      this.t += h;
      if (this.phase === 'out') {
        const sp = 26 * Math.max(0, 1 - this.t / 0.32);
        this.pos.x += this.dx * sp * h; this.pos.z += this.dz * sp * h;
        for (const s of G.world.solids) {
          if (!s.capPass && overlaps(s, this.pos.x, this.pos.y - 0.15, this.pos.z, 0.25, 0.3)) {
            this.pos.x -= this.dx * sp * h; this.pos.z -= this.dz * sp * h;
            this.phase = 'hover'; this.t = 0;
            break;
          }
        }
        if (this.phase === 'out' && this.t >= 0.32) { this.phase = 'hover'; this.t = 0; }
      } else if (this.phase === 'hover') {
        if (this.t > (G.input.st.cap ? 1.5 : 0.7)) { this.phase = 'back'; this.t = 0; }
      } else {
        const dx = P.pos.x - this.pos.x, dy = P.pos.y + P.H * 0.75 - this.pos.y, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dy, dz);
        if (d < 0.7) { this.active = false; G.sfx.capCatch(); return; }
        const sp = Math.min(32, 6 + this.t * 60) * h;
        this.pos.x += dx / d * sp; this.pos.y += dy / d * sp; this.pos.z += dz / d * sp;
      }

      if (this.phase !== 'back') {
        for (const c of G.captures) {
          if (c.canCapture() && c.capDist(this.pos) < c.R + 0.55 && G.player.startCapture(c)) return;
        }
      }
      for (const o of G.objects) if (o.capHit) o.capHit(G, this.pos);

      const live = this.phase === 'hover' || (this.phase === 'out' && this.t > 0.08);
      if (live && !P.onGround && !P.capBounced && BOUNCE.has(P.state) &&
          Math.hypot(P.pos.x - this.pos.x, P.pos.y + 0.75 - this.pos.y, P.pos.z - this.pos.z) < 1.25) {
        G.player.capBounce();
        this.phase = 'back'; this.t = 0;
      }
    },
  };
  return cap;
}

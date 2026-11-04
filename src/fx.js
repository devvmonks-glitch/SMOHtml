import * as THREE from 'three';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _c = new THREE.Color();

// Pooled particles (one instanced mesh) plus expanding shockwave rings.
export class FX {
  constructor(scene) {
    this.max = 700;
    this.mesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshLambertMaterial({ color: 0xffffff }), this.max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    _m.makeScale(0, 0, 0);
    for (let i = 0; i < this.max; i++) { this.mesh.setMatrixAt(i, _m); this.mesh.setColorAt(i, _c.set(0xffffff)); }
    scene.add(this.mesh);
    this.ps = Array.from({ length: this.max }, () => ({ life: 0, max: 1, pos: new THREE.Vector3(), vel: new THREE.Vector3(), s0: 0, s1: 0, grav: 0, drag: 0 }));
    this.next = 0;

    const rg = new THREE.RingGeometry(0.8, 1, 56); rg.rotateX(-Math.PI / 2);
    this.rings = [];
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
      m.visible = false; scene.add(m);
      this.rings.push({ m, life: 0, max: 1, size: 1 });
    }
    this.ri = 0;
  }

  spawn(x, y, z, vx, vy, vz, life, s0, s1, color, grav = 0, drag = 2) {
    const i = this.next; this.next = (i + 1) % this.max;
    const p = this.ps[i];
    p.pos.set(x, y, z); p.vel.set(vx, vy, vz); p.life = p.max = life; p.s0 = s0; p.s1 = s1; p.grav = grav; p.drag = drag;
    this.mesh.setColorAt(i, _c.set(color));
    this.mesh.instanceColor.needsUpdate = true;
  }

  dust(x, y, z, n = 6, speed = 2, size = 0.22, color = 0xf4efe6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = speed * (0.5 + Math.random() * 0.7);
      this.spawn(x + Math.cos(a) * 0.2, y + 0.08, z + Math.sin(a) * 0.2, Math.cos(a) * sp, 0.5 + Math.random() * 1.2, Math.sin(a) * sp,
        0.45 + Math.random() * 0.3, size * (0.7 + Math.random() * 0.6), 0, color, -1.5, 3);
    }
  }

  burst(x, y, z, n, speed, color, size = 0.12, life = 0.6, grav = 6) {
    for (let i = 0; i < n; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u), sp = speed * (0.4 + Math.random() * 0.8);
      this.spawn(x, y, z, Math.cos(a) * r * sp, u * sp + speed * 0.3, Math.sin(a) * r * sp, life * (0.6 + Math.random() * 0.6), size, 0, color, grav, 1.5);
    }
  }

  sparkle(x, y, z, n = 10, color = 0xffe066) { this.burst(x, y, z, n, 4, color, 0.09, 0.5, 2); }

  debris(x, y, z, n, color) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 4;
      this.spawn(x + (Math.random() - 0.5) * 0.8, y + (Math.random() - 0.5) * 0.8, z + (Math.random() - 0.5) * 0.8,
        Math.cos(a) * sp, 4 + Math.random() * 6, Math.sin(a) * sp, 0.8 + Math.random() * 0.4, 0.17, 0.12, color, 26, 0.5);
    }
  }

  ring(x, y, z, size = 3, color = 0xffffff, life = 0.45) {
    const r = this.rings[this.ri]; this.ri = (this.ri + 1) % this.rings.length;
    r.m.position.set(x, y + 0.06, z); r.m.material.color.set(color);
    r.life = r.max = life; r.size = size; r.m.visible = true;
  }

  update(dt) {
    for (let i = 0; i < this.max; i++) {
      const p = this.ps[i];
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { _m.makeScale(0, 0, 0); this.mesh.setMatrixAt(i, _m); continue; }
      p.vel.y -= p.grav * dt;
      p.vel.multiplyScalar(Math.exp(-p.drag * dt));
      p.pos.addScaledVector(p.vel, dt);
      const t = 1 - p.life / p.max;
      const sc = Math.max(1e-4, (p.s0 + (p.s1 - p.s0) * t) * Math.sin(Math.min(1, t * 5) * Math.PI / 2));
      _m.compose(p.pos, _q, _s.set(sc, sc, sc));
      this.mesh.setMatrixAt(i, _m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      const t = 1 - Math.max(0, r.life) / r.max, e = 1 - (1 - t) * (1 - t);
      r.m.scale.setScalar(r.size * (0.25 + 0.75 * e));
      r.m.material.opacity = (1 - t) * 0.85;
      if (r.life <= 0) r.m.visible = false;
    }
  }
}

import * as THREE from 'three';
import { std, makeHat } from './character.js';
import { moveBody } from './world.js';
import { PI, TAU, clamp, angDiff, dirOf, damp, rand } from './util.js';

const part = (geo, mat, parent, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m;
};
function eye(parent, x, y, z, r = 0.12, look = 0.6) {
  const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g);
  part(new THREE.SphereGeometry(r, 16, 12), std(0xffffff, { roughness: 0.2 }), g).scale.set(0.8, 1.15, 0.7);
  part(new THREE.SphereGeometry(r * 0.5, 12, 10), std(0x14203a, { roughness: 0.2 }), g, 0, 0, r * look);
  return g;
}

// Something the cap can possess. While captured, the player body (G.P) *is* the
// creature: its control() moves G.P and the creature's mesh follows it.
class Capturable {
  constructor(G, x, y, z, name) {
    this.pos = new THREE.Vector3(x, y, z); this.home = this.pos.clone(); this.vel = new THREE.Vector3();
    this.facing = rand(0, TAU); this.R = 0.5; this.H = 1; this.name = name;
    this.captured = false; this.stun = 0; this.canRelease = true;
    this.onGround = false; this.ground = null; this.groundN = null;
    this.group = new THREE.Group(); G.scene.add(this.group);
    this.sq = 0; this.sqv = 0;
    G.captures.push(this);
  }
  addHat(y, s = 0.75) { this.hat = makeHat(true); this.hat.position.y = y; this.hat.scale.setScalar(s); this.hat.visible = false; this.group.add(this.hat); }
  canCapture() { return !this.captured && this.stun <= 0; }
  capDist(p) { return Math.hypot(p.x - this.pos.x, p.y - (this.pos.y + this.H * 0.55), p.z - this.pos.z); }
  onCapture() { this.captured = true; if (this.hat) this.hat.visible = true; }
  release(G) {
    this.captured = false; if (this.hat) this.hat.visible = false;
    this.pos.copy(G.P.pos); this.facing = G.P.facing; this.vel.set(0, 0, 0); this.stun = 1.2;
    return this.H * 0.4;
  }
  spring(dt) {
    this.sqv += (-240 * this.sq - 14 * this.sqv) * dt;
    this.sq = clamp(this.sq + this.sqv * dt, -0.4, 0.5);
  }
  freeFall(h, G) {
    this.vel.y -= 32 * h;
    if (this.vel.y < -30) this.vel.y = -30;
    const was = this.onGround;
    moveBody(this, G.world, h, was);
    if (this.onGround && !was) this.sqv += 2.5;
  }
}

// Shared "drive the player body" helper for walking captures.
function drive(G, h, speed, accG, accA, gravity) {
  const P = G.P, W = G.W;
  const tx = W ? W.x * speed * W.mag : 0, tz = W ? W.z * speed * W.mag : 0, k = damp(P.onGround ? accG : accA, h);
  P.vel.x += (tx - P.vel.x) * k; P.vel.z += (tz - P.vel.z) * k;
  if (W) P.facing += angDiff(Math.atan2(W.x, W.z), P.facing) * damp(14, h);
  P.vel.y -= gravity * h;
  if (P.vel.y < -32) P.vel.y = -32;
  const was = P.onGround, vy0 = P.vel.y;
  moveBody(P, G.world, h, was);
  P.hs = Math.hypot(P.vel.x, P.vel.z);
  return { landed: P.onGround && !was, vy0 };
}

// ---------- frog ----------
export class Frog extends Capturable {
  constructor(G, x, y, z) {
    super(G, x, y, z, 'Captured: Frog');
    this.R = 0.48; this.H = 0.95; this.hopT = rand(1, 3);
    const green = std(0x49c45a, { roughness: 0.5 }), pale = std(0xe9f7a8, { roughness: 0.6 }), dark = std(0x2f8a3d, { roughness: 0.6 });
    this.body = new THREE.Group(); this.group.add(this.body);
    part(new THREE.SphereGeometry(0.5, 28, 20), green, this.body, 0, 0.42, 0).scale.set(1, 0.72, 1.12);
    part(new THREE.SphereGeometry(0.38, 20, 14), pale, this.body, 0, 0.36, 0.2).scale.set(1, 0.7, 0.9);
    for (const s of [-1, 1]) {
      part(new THREE.SphereGeometry(0.17, 16, 12), green, this.body, s * 0.22, 0.78, 0.18);
      eye(this.body, s * 0.22, 0.82, 0.26, 0.12, 0.7);
      const leg = part(new THREE.SphereGeometry(0.22, 14, 10), dark, this.body, s * 0.4, 0.2, -0.25); leg.scale.set(0.7, 0.6, 1.4);
      part(new THREE.SphereGeometry(0.1, 10, 8), dark, this.body, s * 0.26, 0.08, 0.38).scale.set(1.3, 0.5, 1);
    }
    this.legs = this.body.children.filter((c, i) => i > 0 && c.position.z === -0.25);
    this.addHat(0.92, 0.7);
    this.croakT = rand(2, 6);
  }
  update(h, G) {
    if (this.captured) return;
    this.stun -= h;
    if (this.onGround) {
      this.vel.x *= Math.exp(-8 * h); this.vel.z *= Math.exp(-8 * h);
      this.hopT -= h;
      if (this.hopT <= 0) {
        this.hopT = rand(1.2, 3.2);
        const dx = this.home.x - this.pos.x, dz = this.home.z - this.pos.z;
        this.facing = Math.hypot(dx, dz) > 3 ? Math.atan2(dx, dz) : this.facing + rand(-1.4, 1.4);
        const f = dirOf(this.facing);
        this.vel.set(f.x * 2.4, 6, f.z * 2.4); this.sqv -= 3;
      }
    }
    this.croakT -= h;
    if (this.croakT < 0) { this.croakT = rand(4, 9); if (this.pos.distanceTo(G.P.pos) < 10) G.sfx.croak(); }
    this.freeFall(h, G);
  }
  control(G, h) {
    const P = G.P, inp = G.input.st;
    if (P.onGround && P.jumpBuf > 0) {
      P.jumpBuf = 0; P.vel.y = 21.5; P.onGround = false; this.sqv -= 6; this.bigJump = true;
      G.sfx.bigJump(); G.sfx.croak(); G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 10, 3, 0.25); G.hud.toast('Frog jump');
    } else if (P.onGround && G.W) {
      P.vel.y = 5.2; this.sqv -= 2; this.bigJump = false; G.sfx.hop();
    }
    let g = 32;
    if (this.bigJump && P.vel.y > 0 && !inp.jump) g = 60;
    const r = drive(G, h, 7, 10, 7, g);
    if (r.landed) { this.sqv += 2 + clamp(-r.vy0 / 10, 0, 3); G.sfx.land(0.3); if (-r.vy0 > 10) G.fx.dust(P.pos.x, P.pos.y, P.pos.z, 8, 2.5, 0.25); }
    this.pos.copy(P.pos); this.facing = P.facing; this.onGround = P.onGround;
  }
  render(dt, time, G) {
    const P = G.P, pos = this.captured ? P.pos : this.pos, vy = this.captured ? P.vel.y : this.vel.y, grounded = this.captured ? P.onGround : this.onGround;
    this.group.position.copy(pos); this.group.rotation.y = this.captured ? G.char.yaw : this.facing;
    this.spring(dt);
    this.body.scale.set(1 + this.sq * 0.4, 1 - this.sq, 1 + this.sq * 0.4);
    const stretch = grounded ? 0 : clamp(vy / 15, -1, 1);
    this.body.rotation.x = -stretch * 0.25;
    for (const l of this.legs) { l.scale.z = 1.4 + Math.max(0, stretch) * 1.4; l.position.y = 0.2 - Math.max(0, stretch) * 0.12; }
  }
}

// ---------- goomba ----------
function buildGoomba(group, bow = false) {
  const brown = std(0x9b5a2f, { roughness: 0.6 }), tan = std(0xf1d2a0, { roughness: 0.7 }), dark = std(0x4b2a16, { roughness: 0.6 }), ink = std(0x1d1208);
  const body = new THREE.Group(); group.add(body);
  part(new THREE.CylinderGeometry(0.22, 0.27, 0.32, 18), tan, body, 0, 0.24, 0);
  part(new THREE.SphereGeometry(0.5, 28, 18), brown, body, 0, 0.58, 0).scale.set(1.05, 0.72, 1.05);
  part(new THREE.SphereGeometry(0.42, 24, 14, 0, TAU, PI / 2, PI / 2), tan, body, 0, 0.56, 0.02).scale.set(1.08, 0.5, 1.08);
  for (const s of [-1, 1]) {
    eye(body, s * 0.15, 0.6, 0.39, 0.11, 0.6);
    const brow = part(new THREE.BoxGeometry(0.2, 0.05, 0.05), ink, body, s * 0.16, 0.76, 0.42); brow.rotation.z = bow ? s * 0.25 : -s * 0.35;
    part(new THREE.ConeGeometry(0.035, 0.08, 6), std(0xffffff), body, s * 0.1, 0.42, 0.42).rotation.x = PI;
  }
  const feet = [];
  for (const s of [-1, 1]) { const f = part(new THREE.SphereGeometry(0.16, 14, 10), dark, group, s * 0.17, 0.08, 0.04); f.scale.set(1, 0.55, 1.4); feet.push(f); }
  if (bow) {
    const pink = std(0xff5fa2, { roughness: 0.4 });
    for (const s of [-1, 1]) part(new THREE.ConeGeometry(0.14, 0.26, 12), pink, body, s * 0.13, 0.98, -0.05).rotation.z = s * PI / 2;
    part(new THREE.SphereGeometry(0.07, 10, 8), pink, body, 0, 0.98, -0.05);
  }
  return { body, feet };
}

export class Goomba extends Capturable {
  constructor(G, x, y, z, pen) {
    super(G, x, y, z, 'Captured: Goomba');
    this.R = 0.45; this.H = 0.9; this.pen = pen; this.stack = []; this.stacked = false; this.squished = 0;
    this.walk = Math.random() * TAU; this.target = null; this.retarget = 0; this.sway = new THREE.Vector2();
    const m = buildGoomba(this.group); this.body = m.body; this.feet = m.feet;
    this.addHat(0.98, 0.72);
  }
  canCapture() { return super.canCapture() && !this.stacked && this.squished <= 0; }
  update(h, G) {
    if (this.captured || this.stacked) return;
    if (this.squished > 0) {
      this.squished -= h;
      if (this.squished <= 0) {
        this.pos.copy(this.home); this.vel.set(0, 0, 0); this.group.visible = true; this.group.scale.set(1, 1, 1);
        G.fx.sparkle(this.pos.x, this.pos.y + 0.5, this.pos.z, 10, 0xffffff);
      }
      return;
    }
    this.stun -= h;
    const P = G.P, dx = P.pos.x - this.pos.x, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    const friendly = P.capture instanceof Goomba;
    let tx, tz, sp = 1.5;
    if (!friendly && P.state !== 'capture' && P.state !== 'moonGet' && d < 7 && d > 0.01 && this.stun <= 0 && Math.abs(P.pos.y - this.pos.y) < 2) {
      tx = dx / d; tz = dz / d; sp = 3.3;
    } else {
      this.retarget -= h;
      if (!this.target || this.retarget <= 0) {
        const a = rand(0, TAU), r = Math.sqrt(Math.random()) * this.pen.r;
        this.target = { x: this.pen.x + Math.cos(a) * r, z: this.pen.z + Math.sin(a) * r }; this.retarget = rand(2.5, 5);
      }
      const ex = this.target.x - this.pos.x, ez = this.target.z - this.pos.z, ed = Math.hypot(ex, ez);
      if (ed < 0.5) { tx = 0; tz = 0; } else { tx = ex / ed; tz = ez / ed; }
    }
    if (Math.hypot(this.pos.x - this.pen.x, this.pos.z - this.pen.z) > this.pen.r + 2) {
      const hx = this.pen.x - this.pos.x, hz = this.pen.z - this.pos.z, hd = Math.hypot(hx, hz); tx = hx / hd; tz = hz / hd; sp = 2.2;
    }
    if (tx || tz) this.facing += angDiff(Math.atan2(tx, tz), this.facing) * damp(6, h);
    const k = damp(this.onGround ? 8 : 2, h);
    this.vel.x += (tx * sp - this.vel.x) * k; this.vel.z += (tz * sp - this.vel.z) * k;
    this.freeFall(h, G);
    this.walk += Math.hypot(this.vel.x, this.vel.z) * h * 4;

    if (P.state !== 'capture' && this.stun <= 0 && P.state !== 'moonGet') {
      const hd = Math.hypot(P.pos.x - this.pos.x, P.pos.z - this.pos.z);
      if (hd < this.R + P.R + 0.05 && P.pos.y < this.pos.y + this.H && P.pos.y + P.H > this.pos.y) {
        if (P.vel.y < -1 && P.pos.y > this.pos.y + this.H * 0.45) this.stomp(G);
        else if (['roll', 'dive', 'diveSlide', 'gpFall'].includes(P.state)) this.stomp(G, true);
        else G.player.hurt(this.pos.x, this.pos.z);
      }
    }
  }
  stomp(G, knock) {
    this.squished = 5; G.sfx.stomp();
    G.fx.dust(this.pos.x, this.pos.y, this.pos.z, 8, 2.5, 0.25);
    G.popCoins.pop(this.pos.x, this.pos.y + 0.6, this.pos.z);
    if (!knock) G.player.bounceOff(G.input.st.jump ? 15 : 11);
  }
  control(G, h) {
    const P = G.P, inp = G.input.st;
    if (P.onGround && P.jumpBuf > 0) { P.jumpBuf = 0; P.vel.y = 10.5; P.onGround = false; this.sqv -= 3; G.sfx.hop(); }
    const g = P.vel.y > 0 && !inp.jump ? 60 : 32;
    const r = drive(G, h, 5.5 - this.stack.length * 0.3, 12, 6, g);
    if (r.vy0 < 0) {
      for (const o of G.captures) {
        if (!(o instanceof Goomba) || o === this || o.captured || o.stacked || o.squished > 0) continue;
        const top = o.pos.y + o.H;
        if (P.pos.y <= top + 0.15 && P.pos.y >= top - 0.55 && Math.hypot(P.pos.x - o.pos.x, P.pos.z - o.pos.z) < 0.9) { this.addToStack(o, G); break; }
      }
    }
    if (r.landed) { this.sqv += 2; G.sfx.land(0.25); }
    this.walk += P.hs * h * 4;
    this.pos.copy(P.pos); this.facing = P.facing;
  }
  addToStack(o, G) {
    const P = G.P;
    o.stacked = true; this.stack.push(o);
    P.pos.y = o.pos.y; P.pos.x = o.pos.x; P.pos.z = o.pos.z;
    P.H = 0.9 * (1 + this.stack.length); P.vel.y = 7;
    G.sfx.stack(); G.hud.toast('Goomba tower ×' + (this.stack.length + 1));
    G.fx.sparkle(P.pos.x, P.pos.y + P.H, P.pos.z, 10, 0xfff2a8);
  }
  release(G) {
    const P = G.P, n = this.stack.length;
    this.stack.forEach((o, i) => {
      const lvl = n - 1 - i;
      o.stacked = false; o.stun = 1.5;
      o.pos.set(P.pos.x + rand(-0.3, 0.3), P.pos.y + 0.9 * lvl, P.pos.z + rand(-0.3, 0.3));
      const a = rand(0, TAU); o.vel.set(Math.cos(a) * 3, 3, Math.sin(a) * 3);
    });
    this.stack = [];
    super.release(G);
    this.pos.y = P.pos.y + 0.9 * n;
    return 0.9 * n + 0.5;
  }
  render(dt, time, G) {
    if (this.squished > 0) {
      this.group.scale.y = Math.max(0.15, this.group.scale.y - dt * 12);
      if (this.squished < 4.4) this.group.visible = false;
      return;
    }
    if (this.stacked) return; // drawn by the goomba on top
    const P = G.P, cap = this.captured;
    const base = cap ? P.pos : this.pos, hs = cap ? P.hs : Math.hypot(this.vel.x, this.vel.z);
    this.spring(dt);
    const n = cap ? this.stack.length : 0;
    // Lag each level of the tower behind the motion so it sways.
    const vx = cap ? P.vel.x : 0, vz = cap ? P.vel.z : 0;
    this.sway.x += (-vx * 0.02 - this.sway.x) * damp(5, dt); this.sway.y += (-vz * 0.02 - this.sway.y) * damp(5, dt);
    const yaw = cap ? G.char.yaw : this.facing;
    this.stack.forEach((o, i) => {
      const lvl = n - 1 - i;
      o.group.position.set(base.x + this.sway.x * lvl * lvl * 0.5, base.y + 0.9 * lvl, base.z + this.sway.y * lvl * lvl * 0.5);
      o.group.rotation.set(0, yaw, 0); o.group.visible = true;
      o.walkAnim(this.walk + lvl, hs);
    });
    this.group.position.set(base.x + this.sway.x * n * n * 0.5, base.y + 0.9 * n, base.z + this.sway.y * n * n * 0.5);
    this.group.rotation.y = yaw;
    this.body.scale.set(1 + this.sq * 0.4, 1 - this.sq, 1 + this.sq * 0.4);
    this.walkAnim(this.walk, hs);
  }
  walkAnim(w, hs) {
    const a = clamp(hs / 4, 0, 1);
    this.feet[0].position.z = 0.04 + Math.sin(w) * 0.16 * a; this.feet[1].position.z = 0.04 - Math.sin(w) * 0.16 * a;
    this.feet[0].position.y = 0.08 + Math.max(0, Math.cos(w)) * 0.08 * a; this.feet[1].position.y = 0.08 + Math.max(0, -Math.cos(w)) * 0.08 * a;
    this.body.rotation.z = Math.sin(w) * 0.08 * a;
  }
}

export class Goombette {
  constructor(G, x, y, z, moon, facing = 0) {
    this.pos = new THREE.Vector3(x, y, z); this.moon = moon; this.done = false; this.facing = facing; this.hintT = 0;
    this.group = new THREE.Group(); this.group.position.copy(this.pos); this.group.rotation.y = facing; G.scene.add(this.group);
    this.m = buildGoomba(this.group, true);
    G.objects.push(this);
  }
  update(h, G) {
    if (this.done) return;
    const P = G.P, hd = Math.hypot(P.pos.x - this.pos.x, P.pos.z - this.pos.z);
    if (P.capture instanceof Goomba && hd < 1.5 && P.pos.y + P.H >= this.pos.y + 0.4 && P.pos.y < this.pos.y + 1) {
      this.done = true; G.sfx.love();
      for (let i = 0; i < 3; i++) G.fx.burst(this.pos.x, this.pos.y + 1.2, this.pos.z, 10, 3, 0xff5fa2, 0.14, 1.0, -1);
      G.hud.toast('Goombette is smitten!');
      this.moon.reveal(G, this.pos.clone().add(new THREE.Vector3(0, 1.4, 0)));
    }
  }
  render(dt, time, G) {
    const P = G.P;
    const want = Math.atan2(P.pos.x - this.pos.x, P.pos.z - this.pos.z);
    this.facing += angDiff(want, this.facing) * damp(3, dt);
    this.group.rotation.y = this.facing;
    this.m.body.position.y = Math.abs(Math.sin(time * (this.done ? 9 : 2))) * (this.done ? 0.15 : 0.03);
  }
}

// ---------- spark pylon ----------
export class Pylon extends Capturable {
  constructor(G, x, y, z, curve, endFacing) {
    super(G, x, y, z, 'Captured: Spark pylon');
    this.R = 0.6; this.H = 2.6; this.canRelease = false; this.curve = curve; this.len = curve.getLength(); this.endFacing = endFacing;
    const stripeTex = (() => {
      const c = document.createElement('canvas'); c.width = 16; c.height = 128; const g = c.getContext('2d');
      for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#1d2a44' : '#ffcf3f'; g.fillRect(0, i * 16, 16, 16); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    })();
    part(new THREE.CylinderGeometry(0.55, 0.65, 0.3, 20), std(0x5b6578), this.group, 0, 0.15, 0);
    part(new THREE.CylinderGeometry(0.16, 0.2, 2.1, 14), new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.5 }), this.group, 0, 1.3, 0);
    this.orbMat = new THREE.MeshStandardMaterial({ color: 0x8ee8ff, emissive: 0x3ac8ff, emissiveIntensity: 1.2, roughness: 0.2 });
    this.orb = part(new THREE.SphereGeometry(0.42, 24, 16), this.orbMat, this.group, 0, 2.6, 0);
    for (let i = 0; i < 3; i++) { const r = part(new THREE.TorusGeometry(0.55, 0.03, 8, 32), std(0xffcf3f, { metalness: 0.6, roughness: 0.3 }), this.group, 0, 2.6, 0); r.rotation.x = i * PI / 3; }
    this.addHat(3.05, 0.6);
    this.group.position.copy(this.pos);
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(0.5, 20, 14), new THREE.MeshBasicMaterial({ color: 0xbff4ff }));
    this.ball.visible = false; G.scene.add(this.ball);
    G.world.cyl(x, z, 0.3, y, y + 2.2, { noLedge: true, noWall: true });
    this.s = 0; this.zapT = 0;
  }
  // The whole pole counts, not just the orb, since the cap flies at waist height.
  capDist(p) {
    const dy = p.y - Math.min(Math.max(p.y, this.pos.y + 0.4), this.pos.y + 2.9);
    return Math.hypot(p.x - this.pos.x, dy, p.z - this.pos.z);
  }
  onCapture(G) { super.onCapture(); this.s = 0; G.sfx.zap(); this.ball.visible = true; }
  release(G) {
    this.captured = false; this.hat.visible = false; this.stun = 1.5; this.ball.visible = false;
    const f = dirOf(this.endFacing); this.releaseVel = new THREE.Vector3(f.x * 2, 11, f.z * 2);
    G.P.facing = this.endFacing;
    return 0;
  }
  update(h) { if (!this.captured) this.stun -= h; }
  control(G, h) {
    const P = G.P;
    this.s += 30 * h;
    const u = Math.min(1, this.s / this.len), p = this.curve.getPointAt(u), t = this.curve.getTangentAt(u);
    P.pos.copy(p); P.vel.set(t.x * 30, t.y * 30, t.z * 30); P.hs = 30; P.facing = Math.atan2(t.x, t.z);
    this.zapT -= h;
    if (this.zapT <= 0) { this.zapT = 0.03; G.fx.burst(p.x, p.y, p.z, 2, 3, 0x9ff0ff, 0.08, 0.3, 0); }
    if (u >= 1) { G.sfx.zap(); G.player.endCapture(); }
  }
  render(dt, time, G) {
    this.orbMat.emissiveIntensity = 1 + Math.sin(time * 8) * 0.3;
    if (this.captured) { this.ball.position.copy(G.P.pos); this.ball.scale.setScalar(0.9 + Math.sin(time * 40) * 0.15); }
  }
}

export function wireMesh(G, curve) {
  const geo = new THREE.TubeGeometry(curve, 80, 0.05, 6, false);
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x2b3a67, emissive: 0x3ac8ff, emissiveIntensity: 0.25, roughness: 0.4 }));
  G.scene.add(m);
  return m;
}

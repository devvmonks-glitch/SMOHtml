import * as THREE from 'three';
import { std } from './character.js';
import { themeMat, worldUV, canvasTex, labelTex } from './materials.js';
import { PI, TAU, smooth, damp } from './util.js';
import { model } from './models.js';

const gold = () => new THREE.MeshStandardMaterial({ color: 0xffcc33, metalness: 0.45, roughness: 0.28, emissive: 0xb07800, emissiveIntensity: 0.45 });
const shadowed = m => { m.castShadow = true; m.receiveShadow = true; return m; };

// ---------- coins ----------
let coinGeo = null, coinMat = null;
function coinMesh() {
  const mm = model('coin');
  if (mm) return mm;
  if (!coinGeo) {
    coinGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.08, 28); coinGeo.rotateX(PI / 2);
    coinMat = gold();
  }
  const m = new THREE.Mesh(coinGeo, coinMat); m.castShadow = true;
  return m;
}

export class Coin {
  constructor(G, x, y, z) {
    this.mesh = coinMesh(); this.mesh.position.set(x, y, z); G.scene.add(this.mesh);
    this.pos = this.mesh.position; this.got = false; this.phase = Math.random() * TAU;
    G.objects.push(this);
  }
  update(h, G) {
    if (this.got) return;
    const P = G.P, dx = P.pos.x - this.pos.x, dy = P.pos.y + P.H * 0.5 - this.pos.y, dz = P.pos.z - this.pos.z;
    if (dx * dx + dz * dz < 0.8 && Math.abs(dy) < P.H * 0.5 + 0.35) this.collect(G);
  }
  capHit(G, p) { if (!this.got && p.distanceToSquared(this.pos) < 0.85) this.collect(G); }
  collect(G) {
    this.got = true; this.mesh.visible = false;
    G.addCoins(1); G.sfx.coin(); G.fx.sparkle(this.pos.x, this.pos.y, this.pos.z, 10);
  }
  render(dt, time) { if (!this.got) this.mesh.rotation.y = time * 3.2 + this.phase; }
}

// Coins that pop out of blocks or enemies and count themselves.
export class PopCoins {
  constructor(G) { this.G = G; this.list = []; G.objects.push(this); }
  pop(x, y, z) {
    const m = coinMesh(); m.position.set(x, y, z); this.G.scene.add(m);
    this.list.push({ m, vy: 11, t: 0 });
    this.G.addCoins(1); this.G.sfx.coin();
  }
  render(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const c = this.list[i];
      c.t += dt; c.vy -= 30 * dt; c.m.position.y += c.vy * dt; c.m.rotation.y += dt * 20;
      if (c.t > 0.55) {
        this.G.fx.sparkle(c.m.position.x, c.m.position.y, c.m.position.z, 8);
        this.G.scene.remove(c.m); this.list.splice(i, 1);
      }
    }
  }
}

// ---------- power moons ----------
let moonGeo = null, glowTex = null;
function makeMoonGeo() {
  const s = new THREE.Shape(), R = 0.5, a0 = 0.35 * PI, a1 = 1.65 * PI;
  for (let i = 0; i <= 32; i++) { const a = a0 + (a1 - a0) * i / 32; const x = Math.cos(a) * R, y = Math.sin(a) * R; i ? s.lineTo(x, y) : s.moveTo(x, y); }
  const cx = 0.2667, r = 0.4467, b0 = 264.9 * PI / 180, b1 = 95.1 * PI / 180;
  for (let i = 0; i <= 32; i++) { const a = b0 + (b1 - b0) * i / 32; s.lineTo(cx + Math.cos(a) * r, Math.sin(a) * r); }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.07, bevelSize: 0.05, bevelSegments: 4, curveSegments: 24 });
  g.center();
  return g;
}
function glowTexture() {
  return glowTex || (glowTex = canvasTex(128, 128, (g) => {
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  }));
}

export class Moon {
  constructor(G, x, y, z, name, opts = {}) {
    const color = opts.color || 0xffd23f;
    this.group = new THREE.Group(); this.group.position.set(x, y, z);
    const moonMat = new THREE.MeshStandardMaterial({ color, metalness: 0.55, roughness: 0.25, emissive: color, emissiveIntensity: 0.28 });
    let m = model('moon');
    if (m) m.traverse((o) => { if (o.isMesh) o.material = moonMat; });
    else { moonGeo = moonGeo || makeMoonGeo(); m = new THREE.Mesh(moonGeo, moonMat); m.castShadow = true; }
    m.scale.setScalar(1.5); m.rotation.z = -0.35;
    this.spinner = new THREE.Group(); this.spinner.add(m); this.group.add(this.spinner);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.75 }));
    glow.scale.setScalar(2.6); this.group.add(glow);
    G.scene.add(this.group);
    this.base = new THREE.Vector3(x, y, z); this.name = name; this.got = false;
    this.hidden = !!opts.hidden; this.group.visible = !this.hidden;
    this.appear = 0; this.from = null; this.flyT = 0;
    G.moons.push(this); G.objects.push(this);
  }
  reveal(G, from) {
    if (!this.hidden) return;
    this.hidden = false; this.group.visible = true; this.appear = 1e-4;
    this.from = (from || this.base).clone();
    G.sfx.moonAppear(); G.hud.toast('A Power Moon appeared!');
    G.fx.sparkle(this.from.x, this.from.y, this.from.z, 20, 0xfff3a0);
  }
  update(h, G) {
    if (this.got || this.hidden || (this.appear > 0 && this.appear < 1)) return;
    const P = G.P, p = this.group.position;
    if (Math.hypot(P.pos.x - p.x, P.pos.y + P.H * 0.5 - p.y, P.pos.z - p.z) < 1.3 && P.state !== 'pipe') {
      this.got = true; this.flyT = 0;
      G.onMoon(this);
    }
  }
  render(dt, time, G) {
    if (this.hidden || !this.group.visible) return;
    const p = this.group.position;
    if (this.got) {
      this.flyT += dt;
      const P = G.P, k = damp(10, dt);
      p.x += (P.pos.x - p.x) * k; p.y += (P.pos.y + 2.5 + Math.sin(this.flyT * 6) * 0.08 - p.y) * k; p.z += (P.pos.z - p.z) * k;
      this.spinner.rotation.y += dt * (6 + this.flyT * 10);
      if (this.flyT > 1.85) {
        G.fx.sparkle(p.x, p.y, p.z, 24, 0xfff3a0);
        this.group.visible = false;
      }
      return;
    }
    if (this.appear > 0 && this.appear < 1) {
      this.appear = Math.min(1, this.appear + dt / 0.9);
      const k = smooth(this.appear);
      p.lerpVectors(this.from, this.base, k); p.y += Math.sin(k * PI) * 2;
      this.spinner.rotation.y += dt * 12;
      return;
    }
    p.set(this.base.x, this.base.y + Math.sin(time * 2 + this.base.x) * 0.12, this.base.z);
    this.spinner.rotation.y = time * 1.6;
  }
}

// ---------- jump flower / spring ----------
export class Flower {
  constructor(G, x, y, z, opts = {}) {
    this.power = opts.power || 21;
    const top = y + 0.4, r = 1.15;
    this.solid = G.world.cyl(x, z, r, y + 0.1, top, { noWall: true, noLedge: true,
      onLand: (G2, P, prev) => this.bounce(G2, P, prev), onStand: (G2, P) => this.bounce(G2, P, 'ground') });
    this.group = new THREE.Group(); this.group.position.set(x, y, z); G.scene.add(this.group);
    const stem = std(0x3fae54, { roughness: 0.7 }), petal = std(opts.color || 0xff7bc2, { roughness: 0.55 }), core = std(0xffe14d, { roughness: 0.5 });
    const stemMesh = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.2, 14), stem)); stemMesh.position.y = 0.1; this.group.add(stemMesh);
    for (let i = 0; i < 3; i++) {
      const leaf = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 8), stem));
      const a = i / 3 * TAU + 0.4; leaf.position.set(Math.cos(a) * 0.55, 0.1, Math.sin(a) * 0.55); leaf.scale.set(1.3, 0.25, 0.7); leaf.rotation.y = -a;
      this.group.add(leaf);
    }
    this.head = new THREE.Group(); this.head.position.y = 0.15; this.group.add(this.head);
    const coreM = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.25, 28), core)); coreM.position.y = 0.12; this.head.add(coreM);
    for (let i = 0; i < 9; i++) {
      const a = i / 9 * TAU, pm = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 10), petal));
      pm.position.set(Math.cos(a) * 0.85, 0.08, Math.sin(a) * 0.85); pm.scale.set(1.25, 0.28, 0.7); pm.rotation.y = -a;
      this.head.add(pm);
    }
    this.squish = 0; this.phase = Math.random() * TAU;
    G.objects.push(this);
  }
  bounce(G, P, prev) {
    const boosted = prev === 'gpFall' || P.jumpBuf > 0 || G.input.st.jump;
    G.player.launch(this.power + (prev === 'gpFall' ? 5 : boosted ? 3 : 0));
    this.squish = 1; G.sfx.boing();
    G.fx.burst(this.solid.x, this.solid.max.y, this.solid.z, 12, 4, 0xff9fd2, 0.11, 0.6, 6);
  }
  render(dt, time) {
    this.squish = Math.max(0, this.squish - dt * 2.2);
    const k = this.squish, w = Math.sin((1 - k) * PI * 4) * k * 0.45;
    this.head.scale.set(1 + w * 0.5, 1 - w, 1 + w * 0.5);
    this.head.rotation.y = Math.sin(time * 0.7 + this.phase) * 0.15;
  }
}

export class Spring {
  constructor(G, x, y, z, power = 21) {
    this.power = power;
    // Low enough to walk onto (see STEP in world.js).
    this.solid = G.world.cyl(x, z, 0.75, y, y + 0.41, { noWall: true, noLedge: true,
      onLand: (G2, P, prev) => this.bounce(G2, P, prev), onStand: (G2, P) => this.bounce(G2, P, 'ground') });
    this.group = new THREE.Group(); this.group.position.set(x, y, z); this.group.scale.y = 0.55; G.scene.add(this.group);
    const red = std(0xe8474c, { roughness: 0.4 }), metal = std(0xc8ced8, { metalness: 0.8, roughness: 0.3 });
    const base = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.8, 0.2, 28), red)); base.position.y = 0.1; this.group.add(base);
    this.coil = new THREE.Group(); this.coil.position.y = 0.2; this.group.add(this.coil);
    for (let i = 0; i < 4; i++) { const t = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.06, 8, 24), metal)); t.rotation.x = PI / 2; t.position.y = 0.08 + i * 0.11; this.coil.add(t); }
    this.top = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.16, 28), red)); this.top.position.y = 0.67; this.group.add(this.top);
    this.squish = 0;
    G.objects.push(this);
  }
  bounce(G, P, prev) {
    G.player.launch(this.power + (prev === 'gpFall' ? 5 : (P.jumpBuf > 0 || G.input.st.jump) ? 3 : 0));
    this.squish = 1; G.sfx.boing();
  }
  render(dt) {
    this.squish = Math.max(0, this.squish - dt * 2.5);
    const w = Math.sin((1 - this.squish) * PI * 5) * this.squish * 0.5;
    this.coil.scale.y = 1 - w; this.top.position.y = 0.2 + 0.47 * (1 - w);
  }
}

// ---------- blocks ----------
function blockTex(kind) {
  return canvasTex(128, 128, (g) => {
    if (kind === 'brick') {
      g.fillStyle = '#c4622d'; g.fillRect(0, 0, 128, 128);
      g.fillStyle = '#7a3416';
      for (let r = 0; r < 4; r++) { g.fillRect(0, r * 32, 128, 3); const off = r % 2 ? 0 : 32; for (let c = off; c < 128; c += 64) g.fillRect(c, r * 32, 3, 32); }
      g.strokeStyle = '#7a3416'; g.lineWidth = 6; g.strokeRect(0, 0, 128, 128);
      return;
    }
    const used = kind === 'used';
    g.fillStyle = used ? '#9b6a3c' : '#ffbf1f'; g.fillRect(0, 0, 128, 128);
    g.strokeStyle = used ? '#5c3a1d' : '#b86e00'; g.lineWidth = 8; g.strokeRect(4, 4, 120, 120);
    g.fillStyle = used ? '#5c3a1d' : '#b86e00';
    for (const [x, y] of [[16, 16], [112, 16], [16, 112], [112, 112]]) { g.beginPath(); g.arc(x, y, 6, 0, TAU); g.fill(); }
    if (!used) {
      g.font = '700 84px Fredoka, "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = '#b86e00'; g.fillText('?', 68, 70); g.fillStyle = '#ffffff'; g.fillText('?', 64, 66);
    }
  });
}
let blockMats = null;
const getBlockMats = () => blockMats || (blockMats = {
  q: new THREE.MeshStandardMaterial({ map: blockTex('q'), roughness: 0.45, emissive: 0x332200, emissiveIntensity: 0.25 }),
  used: new THREE.MeshStandardMaterial({ map: blockTex('used'), roughness: 0.7 }),
  brick: new THREE.MeshStandardMaterial({ map: blockTex('brick'), roughness: 0.8 }),
});

export class QBlock {
  constructor(G, x, y, z, coins = 1) {
    this.solid = G.world.box(x, y, z, 1, 1, 1, { noLedge: true, onBump: (G2) => this.hit(G2) });
    this.mesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), getBlockMats().q));
    this.mesh.position.set(x, y, z); G.scene.add(this.mesh);
    this.y = y; this.coins = coins; this.bump = 0; this.cd = 0;
    G.objects.push(this);
  }
  hit(G) {
    if (this.cd > 0) return;
    this.cd = 0.2; this.bump = 1; G.sfx.block();
    if (this.coins <= 0) return;
    this.coins--;
    G.popCoins.pop(this.mesh.position.x, this.y + 0.8, this.mesh.position.z);
    if (this.coins === 0) this.mesh.material = getBlockMats().used;
  }
  update(h) { this.cd -= h; }
  render(dt) { this.bump = Math.max(0, this.bump - dt * 6); this.mesh.position.y = this.y + Math.sin(this.bump * PI) * 0.28; }
}

export class Brick {
  constructor(G, x, y, z, moon = null) {
    this.solid = G.world.box(x, y, z, 1, 1, 1, { noLedge: true, onBump: (G2) => this.smash(G2), onPound: (G2) => this.smash(G2) });
    this.mesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), getBlockMats().brick));
    this.mesh.position.set(x, y, z); G.scene.add(this.mesh);
    this.moon = moon;
  }
  smash(G) {
    if (!this.solid.on) return null;
    this.solid.on = false; this.mesh.visible = false;
    const p = this.mesh.position;
    G.fx.debris(p.x, p.y, p.z, 14, 0xc4622d); G.sfx.brick(); G.camRig.addShake(0.12);
    if (this.moon) this.moon.reveal(G, p);
    return 'break';
  }
}

// Ground-pound post: pound it flat to reveal a moon.
export class Stake {
  constructor(G, x, y, z, moon) {
    this.solid = G.world.cyl(x, z, 0.42, y - 0.2, y + 1.1, { noLedge: true, noWall: true, onPound: (G2) => this.pound(G2) });
    this.group = new THREE.Group(); this.group.position.set(x, y, z); G.scene.add(this.group);
    const wood = std(0xb07a45, { roughness: 0.8 }), metal = std(0x9aa3b2, { metalness: 0.7, roughness: 0.35 });
    const post = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.42, 1.3, 20), wood)); post.position.y = 0.45; this.group.add(post);
    const capM = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.16, 20), metal)); capM.position.y = 1.08; this.group.add(capM);
    const ring = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.1, 24), std(0x6b4a2a, { roughness: 0.9 }))); ring.position.y = 0.05;
    G.scene.add(ring); ring.position.set(x, y + 0.05, z);
    this.y0 = y; this.moon = moon; this.done = false; this.sink = 0;
    G.objects.push(this);
  }
  pound(G) {
    if (this.done) return null;
    this.done = true; G.camRig.addShake(0.3);
    G.fx.dust(this.solid.x, this.y0, this.solid.z, 10, 3, 0.3);
    if (this.moon) this.moon.reveal(G, new THREE.Vector3(this.solid.x, this.y0 + 1.2, this.solid.z));
    return null;
  }
  update(h, G) {
    if (!this.done || this.sink >= 1) return;
    const prev = this.sink; this.sink = Math.min(1, this.sink + h / 0.2);
    G.world.moveSolid(this.solid, 0, -(this.sink - prev) * 1.0, 0, h);
  }
  render() { this.group.position.y = this.y0 - this.sink * 1.0; }
}

// P switch: temporary blocks for a few seconds.
export class PSwitch {
  constructor(G, x, y, z, blocks, duration = 10) {
    this.G = G; this.duration = duration; this.timer = 0; this.active = false; this.lastTick = 0;
    G.world.box(x, y + 0.08, z, 1.4, 0.16, 1.4, { noLedge: true });
    this.button = G.world.box(x, y + 0.16 + 0.15, z, 1, 0.3, 1, { noLedge: true, noWall: true, onStand: () => this.press(), onLand: () => this.press() });
    const tex = canvasTex(128, 128, (g) => {
      g.fillStyle = '#2f6bff'; g.fillRect(0, 0, 128, 128);
      g.font = '700 92px Fredoka, "Segoe UI", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#ffffff'; g.fillText('P', 64, 68);
    });
    const base = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.16, 1.4), std(0x9aa3b2, { metalness: 0.6, roughness: 0.4 })));
    base.position.set(x, y + 0.08, z); G.scene.add(base);
    this.btnMesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1, 0.3, 1), [
      std(0x2f6bff), std(0x2f6bff), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.4 }), std(0x2f6bff), std(0x2f6bff), std(0x2f6bff)]));
    this.btnMesh.position.set(x, y + 0.31, z); G.scene.add(this.btnMesh);
    this.btnY = y + 0.31;
    const mat = new THREE.MeshStandardMaterial({ color: 0x4f8bff, roughness: 0.3, transparent: true, opacity: 0.85, emissive: 0x1a3a99, emissiveIntensity: 0.4 });
    this.mat = mat;
    this.blocks = blocks.map(([bx, by, bz, sx, sy, sz]) => {
      const s = G.world.box(bx, by, bz, sx, sy, sz, { on: false });
      const m = shadowed(new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat)); m.position.set(bx, by, bz); m.visible = false; G.scene.add(m);
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })); m.add(e);
      return { s, m };
    });
    G.objects.push(this);
  }
  press() {
    if (this.active) return;
    this.active = true; this.timer = this.duration; this.lastTick = Math.ceil(this.duration);
    this.button.max.y = this.button.min.y + 0.08;
    for (const b of this.blocks) { b.s.on = true; b.m.visible = true; }
    this.G.sfx.block(); this.G.sfx.moonAppear(); this.G.hud.toast('Go go go!');
  }
  update(h, G) {
    if (!this.active) return;
    this.timer -= h;
    const sec = Math.ceil(this.timer);
    if (sec < this.lastTick && sec > 0) { this.lastTick = sec; G.sfx.tick(sec <= 3); }
    if (this.timer <= 0) {
      this.active = false; this.button.max.y = this.button.min.y + 0.3;
      for (const b of this.blocks) { b.s.on = false; b.m.visible = false; }
      G.hud.timer(null);
    } else G.hud.timer(this.timer);
  }
  render(dt, time) {
    this.btnMesh.scale.y = this.active ? 0.3 : 1;
    this.btnMesh.position.y = this.btnY - (this.active ? 0.1 : 0);
    if (this.active) {
      const blink = this.timer < 3 && Math.sin(time * 24) > 0;
      for (const b of this.blocks) b.m.visible = !blink;
    }
  }
}

// ---------- checkpoint flag ----------
export class Checkpoint {
  constructor(G, x, y, z, name, facing) {
    this.pos = new THREE.Vector3(x, y, z); this.name = name; this.facing = facing; this.on = false;
    this.group = new THREE.Group(); this.group.position.set(x, y, z); G.scene.add(this.group);
    const pole = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3, 10), std(0xdde3ea, { metalness: 0.6, roughness: 0.3 })));
    pole.position.y = 1.5; this.group.add(pole);
    const knob = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 10), std(0xffcf3f, { metalness: 0.6, roughness: 0.3 }))); knob.position.y = 3.05; this.group.add(knob);
    const base = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.2, 20), std(0x5b6578))); base.position.y = 0.1; this.group.add(base);
    this.flagMat = std(0x8f99ab, { roughness: 0.6, side: THREE.DoubleSide });
    const fg = new THREE.PlaneGeometry(1.1, 0.7, 8, 1); fg.translate(0.55, 0, 0);
    this.flag = new THREE.Mesh(fg, this.flagMat); this.flag.castShadow = true; this.flag.position.set(0.06, 1.0, 0); this.group.add(this.flag);
    this.flagY = 1.0; this.fp = fg.attributes.position.array.slice();
    G.checkpoints.push(this); G.objects.push(this);
  }
  activate(G) {
    G.spawn = { pos: this.pos.clone().add(new THREE.Vector3(Math.sin(this.facing) * 1.4, 0, Math.cos(this.facing) * 1.4)), facing: this.facing };
    if (this.on) return;
    this.on = true; this.flagMat.color.set(0xffcf3f);
    G.sfx.checkpoint(); G.hud.toast('Checkpoint: ' + this.name);
    G.fx.sparkle(this.pos.x, this.pos.y + 2.6, this.pos.z, 16);
  }
  update(h, G) {
    const P = G.P;
    if (Math.hypot(P.pos.x - this.pos.x, P.pos.z - this.pos.z) < 0.9 && Math.abs(P.pos.y - this.pos.y) < 2.5) {
      if (!this.on || G.spawnFlag !== this) { this.activate(G); G.spawnFlag = this; }
    }
  }
  capHit(G, p) {
    if (Math.hypot(p.x - this.pos.x, p.z - this.pos.z) < 0.8 && p.y > this.pos.y && p.y < this.pos.y + 3.2 && (!this.on || G.spawnFlag !== this)) { this.activate(G); G.spawnFlag = this; }
  }
  render(dt, time) {
    this.flagY += ((this.on ? 2.6 : 1.0) - this.flagY) * damp(4, dt);
    this.flag.position.y = this.flagY;
    const a = this.flag.geometry.attributes.position;
    for (let i = 0; i < a.count; i++) { const x = this.fp[i * 3]; a.setZ(i, Math.sin(time * 6 - x * 4) * 0.1 * x); }
    a.needsUpdate = true;
  }
}

// ---------- warp pipe ----------
export class Pipe {
  constructor(G, x, y, z, h = 1.3) {
    this.x = x; this.z = z; this.top = y + h; this.link = null;
    this.solid = G.world.cyl(x, z, 0.98, y, this.top, { pipe: this, noLedge: true });
    const green = std(0x29b34a, { roughness: 0.35 }), dark = new THREE.MeshBasicMaterial({ color: 0x05170a });
    const body = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.86, h - 0.35, 28), green)); body.position.set(x, y + (h - 0.35) / 2, z);
    const lip = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.38, 28), green)); lip.position.set(x, this.top - 0.19, z);
    const hole = new THREE.Mesh(new THREE.CircleGeometry(0.78, 28), dark); hole.rotation.x = -PI / 2; hole.position.set(x, this.top + 0.005, z);
    G.scene.add(body, lip, hole);
  }
}

// ---------- moving platforms ----------
export class Mover {
  constructor(G, a, b, size, period, color = 0x7fd1ff, phase = 0) {
    this.a = a.clone(); this.b = b.clone(); this.period = period; this.time = phase * period; this.c = a.clone();
    this.solid = G.world.box(a.x, a.y, a.z, size.x, size.y, size.z, { noLedge: true });
    const geo = worldUV(new THREE.BoxGeometry(size.x, size.y, size.z), 0, 0, 0);
    const tint = new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.45).getHex();
    this.mesh = shadowed(new THREE.Mesh(geo, themeMat('wood', tint))); this.mesh.position.copy(a); G.scene.add(this.mesh);
    G.objects.push(this);
    this.update(0, G);
  }
  update(h, G) {
    this.time += h;
    const k = (1 - Math.cos(this.time / this.period * TAU)) / 2;
    const nx = this.a.x + (this.b.x - this.a.x) * k, ny = this.a.y + (this.b.y - this.a.y) * k, nz = this.a.z + (this.b.z - this.a.z) * k;
    G.world.moveSolid(this.solid, nx - this.c.x, ny - this.c.y, nz - this.c.z, h);
    this.c.set(nx, ny, nz);
  }
  render() { this.mesh.position.copy(this.c); }
}

export class Spinner {
  constructor(G, x, y, z, r, speed) {
    this.speed = speed; this.angle = 0;
    this.solid = G.world.cyl(x, z, r, y - 0.5, y, { noLedge: true });
    this.group = new THREE.Group(); this.group.position.set(x, y, z); G.scene.add(this.group);
    const discGeo = new THREE.CylinderGeometry(r, r, 0.5, 40); discGeo.rotateX(0);
    const disc = shadowed(new THREE.Mesh(worldUV(discGeo, 0, 0, 0), themeMat('wood', 0xffc890))); disc.position.y = -0.25; this.group.add(disc);
    for (let i = 0; i < 4; i++) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(r * 2 - 0.2, 0.02, 0.3), std(0xfff3d6)); s.position.y = 0.005; s.rotation.y = i * PI / 4; s.receiveShadow = true; this.group.add(s);
    }
    const hub = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 20), std(0x1d2a44))); hub.position.y = 0.04; this.group.add(hub);
    const pole = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, y - 0.5, 14), std(0x9aa3b2, { metalness: 0.6, roughness: 0.4 })));
    pole.position.set(x, (y - 0.5) / 2, z); G.scene.add(pole);
    G.world.cyl(x, z, 0.25, 0, y - 0.5, { noLedge: true });
    G.objects.push(this);
  }
  update(h) { this.solid.rotDelta = this.speed * h; this.angle += this.solid.rotDelta; }
  render() { this.group.rotation.y = this.angle; }
}

// ---------- signs ----------
export class Sign {
  constructor(G, x, y, z, rotY, title, lines = [], accent) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; G.scene.add(g);
    const wood = std(0x7a5232, { roughness: 0.85 });
    for (const sx of [-1.05, 1.05]) { const p = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.6, 10), wood)); p.position.set(sx, 0.8, -0.03); g.add(p); }
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.46), new THREE.MeshStandardMaterial({ map: labelTex(title, lines, accent), roughness: 0.6 }));
    // No shadow: seen through the gap under the board it reads as a floating black box.
    board.position.y = 1.85; g.add(board);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.46), std(0x8a5f38, { roughness: 0.9 })); back.rotation.y = PI; back.position.set(0, 1.85, -0.01); g.add(back);
  }
}

// Decorative cloud puffs that drift slowly.
export class Cloud {
  constructor(G, x, y, z, s) {
    this.g = new THREE.Group(); this.g.position.set(x, y, z); this.speed = 0.4 + Math.random() * 0.4; G.scene.add(this.g);
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, emissive: 0xffffff, emissiveIntensity: 0.25 });
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(s * (0.6 + Math.random() * 0.5), 16, 12), m);
      b.position.set((i - 2) * s * 0.8, Math.random() * s * 0.4, (Math.random() - 0.5) * s * 0.6); b.scale.y = 0.65; this.g.add(b);
    }
    G.objects.push(this);
  }
  render(dt) { this.g.position.x += this.speed * dt; if (this.g.position.x > 120) this.g.position.x = -120; }
}

import * as THREE from 'three';
import { PI, TAU, clamp, damp, smooth, angDiff, lerp } from './util.js';
import { model, swapIn, heroRig } from './models.js';

const _e = new THREE.Euler(), _q = new THREE.Quaternion();

// A jointed character posed procedurally. Each frame we build a target pose from the
// player's state and ease every joint toward it, so moves blend into each other.

const PIV = 0.82;   // rotation centre for flips, roughly the centre of mass
const KEYS = ['pitch', 'roll', 'y', 'spine', 'headX', 'headY', 'lArmX', 'lArmZ', 'lElbow', 'rArmX', 'rArmZ', 'rElbow',
  'lLegX', 'lLegZ', 'lKnee', 'rLegX', 'rLegZ', 'rKnee'];
const REST = { pitch: 0, roll: 0, y: 0, spine: 0, headX: 0, headY: 0, lArmX: 0.05, lArmZ: 0.14, lElbow: 0.3,
  rArmX: 0.05, rArmZ: 0.14, rElbow: 0.3, lLegX: 0, lLegZ: 0.03, lKnee: 0.08, rLegX: 0, rLegZ: 0.03, rKnee: 0.08 };

export const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0, ...o });

function part(geo, mat, parent, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.castShadow = true;
  parent.add(m);
  return m;
}

export function makeHat(eyes = true) {
  const m = eyes && model('hat');
  if (m) return m;
  const g = new THREE.Group(), yel = std(0xffcf3f, { roughness: 0.42 }), band = std(0xe0565b, { roughness: 0.5 });
  part(new THREE.CylinderGeometry(0.47, 0.49, 0.06, 36), yel, g);
  part(new THREE.CylinderGeometry(0.28, 0.31, 0.32, 32), yel, g, 0, 0.18, 0);
  part(new THREE.SphereGeometry(0.28, 32, 12, 0, TAU, 0, PI / 2), yel, g, 0, 0.34, 0).scale.y = 0.6;
  part(new THREE.CylinderGeometry(0.316, 0.316, 0.08, 32), band, g, 0, 0.07, 0);
  if (eyes) {
    const white = std(0xffffff, { roughness: 0.2 }), ink = std(0x14203a, { roughness: 0.2 });
    for (const s of [-1, 1]) {
      const e = part(new THREE.SphereGeometry(0.07, 16, 12), white, g, s * 0.1, 0.22, 0.27);
      e.scale.set(0.85, 1.3, 0.5);
      part(new THREE.SphereGeometry(0.035, 10, 8), ink, e, 0, -0.01, 0.07).scale.set(1, 1, 0.6);
    }
  }
  return g;
}

export class Character {
  constructor(opts = {}) {
    const suit = std(0x22b8a4, { roughness: 0.62 }), belly = std(0xc6f5ea, { roughness: 0.65 });
    const glove = std(0xffffff, { roughness: 0.4 }), shoe = std(0x2b3a67, { roughness: 0.32 });
    const white = std(0xffffff, { roughness: 0.18 }), ink = std(0x14203a, { roughness: 0.2 }), cheek = std(0xff8fa3, { roughness: 0.8 });

    this.root = new THREE.Group();
    this.squashG = new THREE.Group(); this.root.add(this.squashG);
    this.pivot = new THREE.Group(); this.pivot.position.y = PIV; this.pivot.rotation.order = 'YXZ'; this.squashG.add(this.pivot);
    const body = new THREE.Group(); body.position.y = -PIV; this.pivot.add(body);

    const hips = this.hips = new THREE.Group(); hips.position.y = 0.69; body.add(hips);
    part(new THREE.SphereGeometry(0.24, 24, 16), suit, hips, 0, 0.02, 0).scale.set(1.08, 0.85, 0.95);
    const spine = this.spine = new THREE.Group(); hips.add(spine);
    part(new THREE.CapsuleGeometry(0.255, 0.22, 8, 20), suit, spine, 0, 0.25, 0);
    part(new THREE.SphereGeometry(0.2, 20, 14), belly, spine, 0, 0.2, 0.1).scale.set(1, 1.1, 0.72);

    const head = this.head = new THREE.Group(); head.position.y = 0.5; spine.add(head);
    part(new THREE.SphereGeometry(0.31, 32, 22), suit, head, 0, 0.22, 0);
    this.eyes = [];
    for (const s of [-1, 1]) {
      const eg = new THREE.Group(); eg.position.set(s * 0.11, 0.27, 0.255); eg.rotation.y = s * 0.25; head.add(eg);
      part(new THREE.SphereGeometry(0.085, 18, 14), white, eg).scale.set(0.8, 1.3, 0.55);
      part(new THREE.SphereGeometry(0.046, 14, 10), ink, eg, 0, -0.005, 0.04).scale.set(0.9, 1.3, 0.6);
      part(new THREE.SphereGeometry(0.014, 8, 6), white, eg, s * 0.012, 0.03, 0.07);
      this.eyes.push(eg);
      part(new THREE.SphereGeometry(0.06, 12, 8), cheek, head, s * 0.2, 0.13, 0.22).scale.set(1, 0.6, 0.4);
    }
    this.hat = makeHat(true);
    this.hat.position.set(0, 0.38, -0.02); this.hat.rotation.x = -0.14; this.hat.scale.setScalar(0.78);
    head.add(this.hat);

    this.arms = {}; this.legs = {};
    for (const [k, s] of [['l', 1], ['r', -1]]) {
      const sh = new THREE.Group(); sh.position.set(s * 0.3, 0.4, 0); sh.rotation.order = 'XYZ'; // spread outward first, then swing forward spine.add(sh);
      part(new THREE.CapsuleGeometry(0.072, 0.15, 6, 12), suit, sh, 0, -0.11, 0);
      const el = new THREE.Group(); el.position.y = -0.23; sh.add(el);
      part(new THREE.CapsuleGeometry(0.066, 0.12, 6, 12), suit, el, 0, -0.09, 0);
      part(new THREE.SphereGeometry(0.105, 16, 12), glove, el, 0, -0.21, 0.01).scale.set(1, 1.05, 0.9);
      this.arms[k] = { sh, el };

      const hip = new THREE.Group(); hip.position.set(s * 0.13, -0.03, 0); hip.rotation.order = 'XYZ'; hips.add(hip);
      part(new THREE.CapsuleGeometry(0.088, 0.15, 6, 12), suit, hip, 0, -0.13, 0);
      const kn = new THREE.Group(); kn.position.y = -0.28; hip.add(kn);
      part(new THREE.CapsuleGeometry(0.08, 0.13, 6, 12), suit, kn, 0, -0.11, 0);
      const ft = new THREE.Group(); ft.position.y = -0.27; kn.add(ft);
      part(new THREE.SphereGeometry(0.13, 18, 12), shoe, ft, 0, -0.03, 0.07).scale.set(0.95, 0.62, 1.45);
      this.legs[k] = { hip, kn, ft };
    }

    // Swap in the Blender-made parts where they loaded (see tools/blender/build_models.py).
    swapIn(hips, 'pelvis'); swapIn(spine, 'torso'); swapIn(head, 'head');
    for (const eg of this.eyes) swapIn(eg, 'eye');
    for (const k of ['l', 'r']) {
      swapIn(this.arms[k].sh, 'upperArm'); swapIn(this.arms[k].el, 'foreArm');
      swapIn(this.legs[k].hip, 'thigh'); swapIn(this.legs[k].kn, 'shin'); swapIn(this.legs[k].ft, 'shoe');
    }

    const rig = opts.rig || heroRig();
    if (rig) this.useRig(rig, body, hips, head);

    this.cur = { ...REST }; this.tgt = { ...REST };
    this.fp = 0; this.fy = 0; this.phase = 0; this.stepSign = true; this.rollVis = 0;
    this.sq = 0; this.sqv = 0; this.yaw = 0; this.blinkT = 2; this.blink = 0; this.spinA = 0; this.hatPop = 0;
    this.onStep = null;
  }

  // Swap the jointed primitive body for the skinned Blender body. The bones get the same
  // rotations the joint groups would have, converted into each bone's own rest frame.
  useRig(rig, body, hips, head) {
    const names = ['hips', 'spine', 'neck', 'shoulderL', 'elbowL', 'shoulderR', 'elbowR',
      'thighL', 'kneeL', 'footL', 'thighR', 'kneeR', 'footR'];
    if (names.some((n) => !rig.getObjectByName(n))) return;
    body.remove(hips);
    rig.position.set(0, 0, 0);
    body.add(rig);
    this.root.updateMatrixWorld(true);
    this.bones = {};
    for (const n of names) {
      const b = rig.getObjectByName(n), qp = b.parent.getWorldQuaternion(new THREE.Quaternion());
      this.bones[n] = { b, rest: b.quaternion.clone(), qp, qpInv: qp.clone().invert() };
    }
    rig.traverse((o) => { if (o.isSkinnedMesh) { o.frustumCulled = false; o.castShadow = true; } });
    // Head, eyes and hat ride on a frame that lines up with the world at rest.
    const hb = this.bones.neck.b, frame = new THREE.Object3D();
    frame.quaternion.copy(hb.getWorldQuaternion(new THREE.Quaternion()).invert());
    hb.add(frame);
    head.parent.remove(head); head.position.set(0, 0, 0); head.rotation.set(0, 0, 0);
    frame.add(head);
  }

  // Rotate a bone by an Euler given in the world-aligned joint frame.
  pose(name, x, y, z, order = 'XYZ') {
    const B = this.bones[name];
    _q.setFromEuler(_e.set(x, y, z, order));
    B.b.quaternion.copy(B.qpInv).multiply(_q).multiply(B.qp).multiply(B.rest);
  }

  apply() {
    const c = this.cur, A = this.arms, L = this.legs;
    this.pivot.position.y = PIV + c.y;
    this.pivot.rotation.set(c.pitch + this.fp, this.fy, c.roll);
    const s = this.sq;
    this.squashG.scale.set(1 + s * 0.45, 1 - s, 1 + s * 0.45);
    if (this.bones) {
      this.pose('spine', c.spine, 0, 0);
      this.pose('neck', c.headX + (this.look ? this.look.x : 0), c.headY + (this.look ? this.look.y : 0), 0);
      this.pose('shoulderL', -c.lArmX, 0, c.lArmZ); this.pose('elbowL', -c.lElbow, 0, 0);
      this.pose('shoulderR', -c.rArmX, 0, -c.rArmZ); this.pose('elbowR', -c.rElbow, 0, 0);
      this.pose('thighL', -c.lLegX, 0, c.lLegZ); this.pose('kneeL', c.lKnee, 0, 0); this.pose('footL', (c.lLegX - c.lKnee) * 0.8, 0, 0);
      this.pose('thighR', -c.rLegX, 0, -c.rLegZ); this.pose('kneeR', c.rKnee, 0, 0); this.pose('footR', (c.rLegX - c.rKnee) * 0.8, 0, 0);
      return;
    }
    this.spine.rotation.x = c.spine;
    this.head.rotation.set(c.headX + (this.look ? this.look.x : 0), c.headY + (this.look ? this.look.y : 0), 0);
    A.l.sh.rotation.set(-c.lArmX, 0, c.lArmZ); A.l.el.rotation.x = -c.lElbow;
    A.r.sh.rotation.set(-c.rArmX, 0, -c.rArmZ); A.r.el.rotation.x = -c.rElbow;
    L.l.hip.rotation.set(-c.lLegX, 0, c.lLegZ); L.l.kn.rotation.x = c.lKnee; L.l.ft.rotation.x = (c.lLegX - c.lKnee) * 0.8;
    L.r.hip.rotation.set(-c.rLegX, 0, -c.rLegZ); L.r.kn.rotation.x = c.rKnee; L.r.ft.rotation.x = (c.rLegX - c.rKnee) * 0.8;
  }

  animate(P, dt, time, camYaw) {
    const T = this.tgt;
    Object.assign(T, REST);
    let rate = 14, flipP = null, flipY = null;
    const s = P.state, hs = P.hs, vy = P.vel.y, run = clamp(hs / 9.5, 0, 1);
    const tuck = (k = 1) => {
      T.lLegX = T.rLegX = 1.5 * k; T.lKnee = T.rKnee = 2.3 * k; T.lArmX = T.rArmX = 1.0 * k;
      T.lElbow = T.rElbow = 2.0 * k; T.lArmZ = T.rArmZ = 0.35; T.spine = 0.5 * k; T.headX = 0.3 * k;
    };
    const crouchPose = (k = 1) => {
      T.y = -0.3 * k; T.lLegX = T.rLegX = 1.1 * k; T.lKnee = T.rKnee = 2.0 * k; T.pitch = 0.22 * k; T.spine = 0.25 * k;
      T.lArmX = T.rArmX = 0.5 * k; T.lElbow = T.rElbow = 1.2 * k; T.headX = -0.2 * k;
    };
    const spread = () => {
      T.lArmZ = T.rArmZ = 1.35; T.lArmX = T.rArmX = 0.35; T.lElbow = T.rElbow = 0.25;
      T.lLegZ = T.rLegZ = 0.35; T.lLegX = 0.3; T.rLegX = -0.2; T.lKnee = 0.5; T.rKnee = 0.4; T.headX = -0.15;
    };
    const fallPose = () => {
      const f = Math.sin(time * 13) * 0.12;
      T.lArmZ = 0.95 + f; T.rArmZ = 0.95 - f; T.lArmX = T.rArmX = 0.5; T.lElbow = T.rElbow = 0.6;
      T.lLegX = 0.4; T.lKnee = 0.7; T.rLegX = -0.1; T.rKnee = 0.45; T.headX = 0.15;
    };

    switch (s) {
      case 'ground': {
        if (hs > 0.4) {
          const stride = 0.95 + run * 0.85;
          this.phase += hs * dt / stride * PI;
          const sn = Math.sin(this.phase), cs = Math.cos(this.phase), amp = 0.35 + 0.75 * run;
          T.lLegX = sn * amp; T.rLegX = -sn * amp;
          T.lKnee = 0.15 + Math.max(0, cs) * (0.5 + run); T.rKnee = 0.15 + Math.max(0, -cs) * (0.5 + run);
          T.lArmX = -sn * amp * 0.85; T.rArmX = sn * amp * 0.85;
          T.lElbow = T.rElbow = 0.5 + 0.7 * run; T.lArmZ = T.rArmZ = 0.18;
          T.pitch = 0.08 + 0.2 * run; T.spine = 0.05 * run; T.headX = -0.12 * run;
          T.y = (Math.abs(cs) * 0.07 - 0.035) * (0.4 + run);
          T.roll = clamp(-P.turnRate * 0.05 * run, -0.4, 0.4);
          T.headY = clamp(P.turnRate * 0.05, -0.5, 0.5);
          const sign = sn >= 0;
          if (sign !== this.stepSign) { this.stepSign = sign; if (this.onStep) this.onStep(run); }
          rate = 20;
        } else {
          const b = Math.sin(time * 2.4);
          T.y = b * 0.008; T.spine = 0.03 + b * 0.02; T.lArmZ = T.rArmZ = 0.16 + b * 0.03;
          T.headY = Math.sin(time * 0.6) * 0.28; T.headX = Math.sin(time * 0.37) * 0.07;
          T.lLegZ = T.rLegZ = 0.06; rate = 10;
        }
        if (P.spinBuf > 0) {
          flipY = smooth(1 - P.spinBuf / 0.45) * TAU;
          T.lArmZ = T.rArmZ = 1.2; T.lArmX = T.rArmX = 0.2;
        }
        if (P.landT < 0.16) {
          const k = 1 - P.landT / 0.16;
          T.lKnee += 0.9 * k; T.rKnee += 0.9 * k; T.lLegX += 0.45 * k; T.rLegX += 0.45 * k;
          T.y -= 0.13 * k; T.lArmZ += 0.45 * k; T.rArmZ += 0.45 * k; rate = 30;
        }
        break;
      }
      case 'crouch': {
        crouchPose(1);
        if (hs > 0.3) { this.phase += hs * dt * 3; const sn = Math.sin(this.phase); T.lLegX += sn * 0.3; T.rLegX -= sn * 0.3; }
        rate = 18;
        break;
      }
      case 'skid': {
        const w = Math.sin(time * 28) * 0.25;
        T.pitch = -0.42; T.y = -0.08; T.lLegX = 0.75; T.lKnee = 0.25; T.rLegX = 0.35; T.rKnee = 0.55;
        T.lArmX = 1.1 + w; T.rArmX = 1.1 - w; T.lArmZ = T.rArmZ = 0.75; T.headX = 0.2; rate = 22;
        break;
      }
      case 'air': case 'launch': case 'gpjump': case 'capbounce': {
        rate = 12;
        if (s === 'launch') {
          flipY = smooth(P.flipT / 0.7) * TAU * 2;
          T.lArmX = T.rArmX = 2.6; T.lArmZ = T.rArmZ = 0.75; T.lElbow = T.rElbow = 0.2;
          T.lLegX = 0.2; T.rLegX = -0.1; T.lKnee = T.rKnee = 0.35;
          if (vy < -2) fallPose();
        } else if (s === 'capbounce') {
          flipY = smooth(P.flipT / 0.5) * TAU;
          spread(); T.lArmX = T.rArmX = 1.2;
        } else if (s === 'gpjump') {
          flipY = smooth(P.flipT / 0.55) * TAU;
          T.lArmX = T.rArmX = 2.85; T.lArmZ = T.rArmZ = 0.45; T.lElbow = T.rElbow = 0.08;
          T.lLegX = T.rLegX = 0.05; T.lKnee = T.rKnee = 0.1; T.headX = -0.2;
          if (vy < -4) fallPose();
        } else if (P.anim === 'triple') {
          const k = P.flipT / 0.62;
          if (k < 1) { tuck(1); flipP = smooth(k) * TAU; rate = 24; } else { spread(); if (vy < -6) fallPose(); }
        } else if (vy > 1) {
          if (P.jumpCount === 2) {
            spread(); T.lArmX = T.rArmX = 0.7; T.lLegX = 0.8; T.lKnee = 1.0; T.rLegX = -0.45; T.rKnee = 0.7; T.spine = -0.1;
          } else {
            T.rArmX = 2.65; T.rArmZ = 0.5; T.rElbow = 0.3; T.lArmX = -0.5; T.lArmZ = 0.45; T.lElbow = 0.5;
            T.lLegX = 0.95; T.lKnee = 1.45; T.rLegX = -0.25; T.rKnee = 0.5; T.pitch = 0.06; T.headX = -0.15;
          }
        } else fallPose();
        break;
      }
      case 'twirl': case 'spinjump': {
        // Fast spin with arms flung out; the twirl spins faster than the spin jump.
        this.spinA += dt * TAU * (s === 'twirl' ? 3.4 : 2.4);
        flipY = this.spinA;
        T.lArmZ = T.rArmZ = 1.45; T.lArmX = T.rArmX = 0.25; T.lElbow = T.rElbow = 0.15;
        T.lLegX = 0.2; T.rLegX = 0.05; T.lKnee = 0.35; T.rKnee = 0.2; T.lLegZ = T.rLegZ = 0.02;
        T.headX = -0.1; T.y = 0.04; rate = 20;
        break;
      }
      case 'swim': {
        // Front crawl at the surface: alternating arms, fluttering legs, head up.
        this.swimPh = (this.swimPh || 0) + dt * (4 + hs * 0.8);
        const a = Math.sin(this.swimPh), b = Math.cos(this.swimPh);
        T.pitch = 1.1; T.y = -0.05; T.headX = -1.0; T.spine = -0.1;
        T.lArmX = 1.6 + a * 1.4; T.rArmX = 1.6 - a * 1.4; T.lArmZ = T.rArmZ = 0.35; T.lElbow = T.rElbow = 0.5 + Math.max(0, b) * 0.6;
        T.lLegX = -0.1 + a * 0.35; T.rLegX = -0.1 - a * 0.35; T.lKnee = T.rKnee = 0.3; rate = 14;
        break;
      }
      case 'underwater': {
        // Breaststroke: sweep the arms out and back, frog-kick the legs.
        const k = clamp((P.strokeT || 0) / 0.7, 0, 1), sweep = Math.sin(k * PI);
        T.pitch = 0.5 + clamp(-P.vel.y * 0.12, -0.5, 0.6); T.headX = -0.5;
        T.lArmX = T.rArmX = lerp(2.6, 0.6, k); T.lArmZ = T.rArmZ = 0.3 + sweep * 1.1; T.lElbow = T.rElbow = 0.3 + sweep * 0.5;
        T.lLegX = T.rLegX = 0.6 * (1 - sweep); T.lKnee = T.rKnee = 1.4 * (1 - sweep) + 0.2; T.lLegZ = T.rLegZ = 0.25 * sweep; rate = 12;
        break;
      }
      case 'longjump':
        T.pitch = 1.2; T.y = 0.1; T.lArmX = T.rArmX = 2.9; T.lArmZ = T.rArmZ = 0.25; T.lElbow = T.rElbow = 0.15;
        T.lLegX = -0.2; T.rLegX = -0.45; T.lKnee = 0.55; T.rKnee = 0.3; T.headX = -0.9; rate = 16;
        break;
      case 'dive':
        T.pitch = 1.45; T.lArmX = T.rArmX = 3.0; T.lArmZ = T.rArmZ = 0.18; T.lElbow = T.rElbow = 0.05;
        T.lLegX = T.rLegX = -0.3; T.lKnee = T.rKnee = 0.2; T.lLegZ = T.rLegZ = 0.12; T.headX = -1.0; rate = 18;
        break;
      case 'diveSlide':
        T.pitch = 1.52; T.y = -0.52; T.lArmX = T.rArmX = 3.0; T.lArmZ = T.rArmZ = 0.3; T.lElbow = T.rElbow = 0.1;
        T.lLegX = T.rLegX = -0.25; T.lKnee = 0.6; T.rKnee = 0.3; T.headX = -1.1; rate = 18;
        break;
      case 'backflip': {
        const k = P.flipT / 0.72;
        if (k < 1) { tuck(0.9); flipP = -smooth(k) * TAU; rate = 22; } else { spread(); if (vy < -4) fallPose(); }
        break;
      }
      case 'sideflip': {
        const k = P.flipT / 0.62;
        flipY = smooth(k) * TAU * P.sideDir;
        spread(); T.lArmX = T.rArmX = 0.2; T.lLegZ = 0.55; T.rLegX = 0.7; T.rKnee = 1.3; T.roll = 0.15 * P.sideDir;
        if (k > 1 && vy < -4) fallPose();
        rate = 18;
        break;
      }
      case 'gpWind': {
        tuck(1); flipP = smooth(P.t / 0.24) * TAU; rate = 30;
        break;
      }
      case 'gpFall':
        tuck(0.85); T.spine = 0.2; T.lArmX = T.rArmX = 0.2; T.lArmZ = T.rArmZ = 0.75; T.lElbow = T.rElbow = 1.6;
        T.lKnee = T.rKnee = 2.2; rate = 26;
        break;
      case 'gpLand':
        crouchPose(1.1); T.lArmZ = T.rArmZ = 1.3; T.lArmX = T.rArmX = 0.2; T.lElbow = T.rElbow = 0.3; rate = 26;
        break;
      case 'roll':
        tuck(1); T.y = -0.36; this.rollVis += P.rollSpeed * dt * 2.6; flipP = this.rollVis; rate = 30;
        break;
      case 'wall':
        T.pitch = -0.1; T.rArmX = 2.6; T.rArmZ = 0.3; T.rElbow = 0.5; T.lArmX = 0.4; T.lArmZ = 0.95; T.lElbow = 0.4;
        T.lLegX = 0.6; T.lKnee = 1.0; T.rLegX = 0.1; T.rKnee = 0.3; T.headX = 0.25; rate = 18;
        break;
      case 'ledge': {
        const w = P.shimmy ? Math.sin(time * 12) * 0.18 : 0;
        T.lArmX = 2.95 + w; T.rArmX = 2.95 - w; T.lArmZ = T.rArmZ = 0.22; T.lElbow = T.rElbow = 0.25;
        T.lLegX = 0.2 - w; T.lKnee = 0.35; T.rLegX = -0.05 + w; T.rKnee = 0.2; T.pitch = 0.05; T.headX = -0.3;
        T.y = Math.sin(time * 3) * 0.01; rate = 18;
        break;
      }
      case 'climb': {
        const k = clamp(P.t / 0.3, 0, 1);
        T.lArmX = T.rArmX = lerp(2.9, 0.4, k); T.lElbow = T.rElbow = lerp(0.3, 1.2, Math.sin(k * PI));
        T.lLegX = 1.4 * Math.sin(k * PI); T.lKnee = 1.8 * Math.sin(k * PI); T.rLegX = 0.3; T.rKnee = 0.6;
        T.pitch = 0.5 * Math.sin(k * PI); rate = 26;
        break;
      }
      case 'hurt': {
        const w = Math.sin(time * 22) * 0.35;
        T.pitch = -0.55; T.lArmZ = 1.2 + w; T.rArmZ = 1.2 - w; T.lArmX = T.rArmX = 1.4; T.lLegX = 0.6; T.lKnee = 0.9;
        T.rLegX = 0.3; T.rKnee = 0.6; T.headX = -0.3; rate = 18;
        break;
      }
      case 'moonGet': {
        const k = P.t;
        if (k < 0.45) flipY = smooth(k / 0.45) * TAU;
        T.lArmX = T.rArmX = 2.5; T.lArmZ = T.rArmZ = 0.95; T.lElbow = T.rElbow = 0.15;
        T.lLegZ = T.rLegZ = 0.18; T.headX = -0.3; T.spine = -0.12; T.y = 0.03; rate = 16;
        break;
      }
      default: break;
    }

    // Cap throw: right arm swings through; in the air the whole body spins.
    if (P.throwT < 0.22 && ['ground', 'air', 'crouch', 'launch', 'sideflip', 'capbounce'].includes(s)) {
      const k = P.throwT / 0.22;
      T.rArmX = lerp(-1.1, 1.9, smooth(k)); T.rArmZ = lerp(1.0, 0.4, k); T.rElbow = 0.25;
      T.spine += Math.sin(k * PI) * 0.15;
      if (s !== 'ground' && s !== 'crouch' && flipY === null) flipY = smooth(k) * TAU;
      rate = Math.max(rate, 28);
    }

    const a = damp(rate, dt);
    for (const key of KEYS) this.cur[key] += (T[key] - this.cur[key]) * a;
    if (flipP !== null) this.fp = flipP; else { this.fp = angDiff(this.fp, 0); this.fp *= 1 - damp(16, dt); }
    if (flipY !== null) this.fy = flipY; else { this.fy = angDiff(this.fy, 0); this.fy *= 1 - damp(16, dt); }

    // Springy squash and stretch.
    if (P.squash) { this.sqv += P.squash * 9; P.squash = 0; }
    this.sqv += (-260 * this.sq - 15 * this.sqv) * dt;
    this.sq = clamp(this.sq + this.sqv * dt, -0.35, 0.55);

    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 0.13; this.blinkT = 2 + Math.random() * 3.5; }
    this.blink -= dt;
    const ey = this.blink > 0 ? 0.12 : 1;
    for (const e of this.eyes) e.scale.y = ey;

    // Hat pops when Cappy lands back on your head.
    this.hatPop = Math.max(0, this.hatPop - dt * 3.5);
    const hp = this.hatPop;
    this.hat.scale.set(0.78 * (1 + Math.sin(hp * PI * 3) * hp * 0.35), 0.78 * (1 - Math.sin(hp * PI * 3) * hp * 0.3), 0.78 * (1 + Math.sin(hp * PI * 3) * hp * 0.35));

    // Glance at whatever is interesting nearby (main.js sets P.lookAt).
    let lookY = 0, lookX = 0;
    if (P.lookAt && ['ground', 'crouch', 'air', 'launch', 'ledge', 'wall'].includes(s)) {
      const dx = P.lookAt.x - P.pos.x, dz = P.lookAt.z - P.pos.z, dy = P.lookAt.y - (P.pos.y + 1.3);
      lookY = clamp(angDiff(Math.atan2(dx, dz), this.yaw), -1.1, 1.1);
      lookX = clamp(-Math.atan2(dy, Math.hypot(dx, dz)), -0.6, 0.5);
      if (Math.abs(angDiff(Math.atan2(dx, dz), this.yaw)) > 2.2) lookY = lookX = 0; // behind us: ignore
    }
    this.look = this.look || { y: 0, x: 0 };
    this.look.y += (lookY * 0.75 - this.look.y) * damp(6, dt); this.look.x += (lookX * 0.6 - this.look.x) * damp(6, dt);
    this.eyes.forEach((e, i) => { e.rotation.y = (i ? 0.25 : -0.25) + this.look.y * 0.35; e.rotation.x = this.look.x * 0.4; });

    this.yaw += angDiff(P.facing, this.yaw) * damp(s === 'ground' ? 26 : 40, dt);
    this.root.rotation.y = this.yaw;
    this.apply();
  }
}

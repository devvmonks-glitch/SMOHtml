// Collision world: axis-aligned boxes, vertical cylinders and ramps.
// Bodies are upright cylinders approximated as boxes of half-width R and height H,
// with pos at the feet.

export const STEP = 0.42;   // ledges this high are stepped onto automatically
export const SNAP = 0.45;   // how far down we stick to the ground when walking off slopes/steps

export class World {
  constructor() { this.solids = []; this.ramps = []; this.waters = []; }

  // A box of water; `surface` is its top.
  water(x0, x1, y0, y1, z0, z1) {
    const w = { min: { x: x0, y: y0, z: z0 }, max: { x: x1, y: y1, z: z1 }, surface: y1 };
    this.waters.push(w);
    return w;
  }
  waterAt(x, y, z) {
    for (const w of this.waters) if (x > w.min.x && x < w.max.x && z > w.min.z && z < w.max.z && y > w.min.y && y < w.max.y) return w;
    return null;
  }

  box(cx, cy, cz, sx, sy, sz, opts = {}) {
    const s = Object.assign({
      type: 'box', on: true, vy: 0, delta: null, rotDelta: 0,
      min: { x: cx - sx / 2, y: cy - sy / 2, z: cz - sz / 2 },
      max: { x: cx + sx / 2, y: cy + sy / 2, z: cz + sz / 2 },
    }, opts);
    this.solids.push(s);
    return s;
  }

  cyl(x, z, r, y0, y1, opts = {}) {
    const s = Object.assign({
      type: 'cyl', on: true, vy: 0, delta: null, rotDelta: 0, x, z, r,
      min: { x: x - r, y: y0, z: z - r }, max: { x: x + r, y: y1, z: z + r },
    }, opts);
    this.solids.push(s);
    return s;
  }

  // A walkable slope over a rectangle. Height rises from lo to hi along `axis`
  // (dir +1: rises toward the max edge, -1: toward the min edge).
  ramp(x0, x1, z0, z1, axis, dir, lo, hi) {
    const len = axis === 'x' ? x1 - x0 : z1 - z0, slope = (hi - lo) / len, nl = Math.hypot(slope, 1);
    const n = { x: 0, y: 1 / nl, z: 0 };
    n[axis] = -dir * slope / nl;
    const r = { type: 'ramp', on: true, x0, x1, z0, z1, axis, dir, lo, hi, n };
    this.ramps.push(r);
    return r;
  }

  moveSolid(s, dx, dy, dz, h) {
    s.min.x += dx; s.max.x += dx; s.min.y += dy; s.max.y += dy; s.min.z += dz; s.max.z += dz;
    if (s.type === 'cyl') { s.x += dx; s.z += dz; }
    s.delta = { x: dx, y: dy, z: dz };
    s.vy = h ? dy / h : 0;
  }
}

export function overlaps(s, px, py, pz, R, H) {
  if (!s.on || py + H <= s.min.y || py >= s.max.y) return false;
  if (s.type === 'box') return px + R > s.min.x && px - R < s.max.x && pz + R > s.min.z && pz - R < s.max.z;
  const dx = px - s.x, dz = pz - s.z, rr = s.r + R;
  return dx * dx + dz * dz < rr * rr;
}

export function rampHeight(r, x, z) {
  if (x < r.x0 || x > r.x1 || z < r.z0 || z > r.z1) return null;
  const c = r.axis === 'x' ? x : z, c0 = r.axis === 'x' ? r.x0 : r.z0, c1 = r.axis === 'x' ? r.x1 : r.z1;
  let t = (c - c0) / (c1 - c0);
  if (r.dir < 0) t = 1 - t;
  return r.lo + (r.hi - r.lo) * t;
}

function freeAt(world, b, y) {
  for (const s of world.solids) if (overlaps(s, b.pos.x, y + 0.001, b.pos.z, b.R, b.H)) return false;
  return true;
}

function axisMove(b, world, a, d, wasGround, res) {
  b.pos[a] += d;
  for (const s of world.solids) {
    if (s.type !== 'box' || !overlaps(s, b.pos.x, b.pos.y, b.pos.z, b.R, b.H)) continue;
    const rise = s.max.y - b.pos.y;
    if (wasGround && rise > 0 && rise <= STEP && freeAt(world, b, s.max.y)) { b.pos.y = s.max.y; continue; }
    let dir = Math.sign(d);
    if (dir === 0) dir = b.pos[a] < (s.min[a] + s.max[a]) / 2 ? 1 : -1;
    b.pos[a] = dir > 0 ? s.min[a] - b.R - 1e-4 : s.max[a] + b.R + 1e-4;
    if (Math.sign(b.vel[a]) === dir) b.vel[a] = 0;
    res.wall = { x: a === 'x' ? -dir : 0, z: a === 'z' ? -dir : 0, s };
  }
}

function cylPush(b, world, wasGround, res) {
  for (const s of world.solids) {
    if (s.type !== 'cyl' || !overlaps(s, b.pos.x, b.pos.y, b.pos.z, b.R, b.H)) continue;
    const rise = s.max.y - b.pos.y;
    if (wasGround && rise > 0 && rise <= STEP && freeAt(world, b, s.max.y)) { b.pos.y = s.max.y; continue; }
    let dx = b.pos.x - s.x, dz = b.pos.z - s.z, d = Math.hypot(dx, dz);
    if (d < 1e-5) { dx = 1; dz = 0; d = 1; }
    const nx = dx / d, nz = dz / d, rr = s.r + b.R + 1e-4;
    b.pos.x = s.x + nx * rr; b.pos.z = s.z + nz * rr;
    const vn = b.vel.x * nx + b.vel.z * nz;
    if (vn < 0) { b.vel.x -= nx * vn; b.vel.z -= nz * vn; }
    res.wall = { x: nx, z: nz, s };
  }
}

function verticalMove(b, world, d, res) {
  const prev = b.pos.y;
  b.pos.y += d;
  for (const s of world.solids) {
    if (!overlaps(s, b.pos.x, b.pos.y, b.pos.z, b.R, b.H)) continue;
    if (prev + b.H * 0.5 >= (s.min.y + s.max.y) / 2 || prev >= s.max.y - 0.05) {
      b.pos.y = s.max.y;
      if (b.vel.y <= s.vy + 0.01) { b.onGround = true; b.ground = s; b.groundN = null; b.vel.y = 0; }
    } else {
      b.pos.y = s.min.y - b.H;
      if (b.vel.y > 0) b.vel.y = 0;
      res.head = s;
    }
  }
  for (const r of world.ramps) {
    const y = rampHeight(r, b.pos.x, b.pos.z);
    if (y !== null && b.pos.y <= y && b.pos.y > y - 1.2 && b.vel.y <= 0.01) {
      b.pos.y = y; b.onGround = true; b.ground = r; b.groundN = r.n; b.vel.y = 0;
    }
  }
}

export function groundBelow(world, x, y, z, R = 0) {
  let best = null;
  for (const s of world.solids) {
    if (!s.on || s.max.y > y + 0.01) continue;
    let inside;
    if (s.type === 'box') inside = x + R > s.min.x && x - R < s.max.x && z + R > s.min.z && z - R < s.max.z;
    else { const dx = x - s.x, dz = z - s.z, rr = s.r + R; inside = dx * dx + dz * dz < rr * rr; }
    if (inside && (!best || s.max.y > best.y)) best = { y: s.max.y, s, n: null };
  }
  for (const r of world.ramps) {
    const h = rampHeight(r, x, z);
    if (h !== null && h <= y + 0.05 && (!best || h > best.y)) best = { y: h, s: r, n: r.n };
  }
  return best;
}

// Moves a body by its velocity and resolves collisions.
// Sets b.onGround / b.ground / b.groundN and returns the wall and ceiling it touched.
export function moveBody(b, world, h, wasGround) {
  const res = { wall: null, head: null };
  const ox = b.pos.x, oz = b.pos.z;
  b.onGround = false; b.ground = null; b.groundN = null;
  axisMove(b, world, 'x', b.vel.x * h, wasGround, res);
  axisMove(b, world, 'z', b.vel.z * h, wasGround, res);
  cylPush(b, world, wasGround, res);
  for (const r of world.ramps) {
    const y = rampHeight(r, b.pos.x, b.pos.z);
    if (y === null) continue;
    if (b.pos.y < y - STEP - 0.05) {
      // Walked into the tall side of the wedge: treat it as a wall.
      const py = rampHeight(r, ox, oz);
      if (b.pos.y + b.H > r.lo + 0.05 && (py === null || b.pos.y < py - STEP - 0.05)) {
        b.pos.x = ox; b.pos.z = oz; b.vel.x = 0; b.vel.z = 0;
      }
    } else if (b.pos.y < y && wasGround) b.pos.y = y;
  }
  verticalMove(b, world, b.vel.y * h, res);
  if (!b.onGround && wasGround && b.vel.y <= 0.01) {
    const g = groundBelow(world, b.pos.x, b.pos.y, b.pos.z, b.R * 0.6);
    if (g && b.pos.y - g.y < SNAP) { b.pos.y = g.y; b.onGround = true; b.ground = g.s; b.groundN = g.n; b.vel.y = 0; }
  }
  return res;
}

// Distance along a ray to the first solid (used to keep the camera out of walls).
export function rayCast(world, o, d, max) {
  let best = max;
  for (const s of world.solids) {
    if (!s.on || s.noCam) continue;
    let t0 = 0, t1 = best, hit = true;
    for (const a of ['x', 'y', 'z']) {
      if (Math.abs(d[a]) < 1e-9) { if (o[a] < s.min[a] || o[a] > s.max[a]) { hit = false; break; } continue; }
      let ta = (s.min[a] - o[a]) / d[a], tb = (s.max[a] - o[a]) / d[a];
      if (ta > tb) { const tmp = ta; ta = tb; tb = tmp; }
      if (ta > t0) t0 = ta;
      if (tb < t1) t1 = tb;
      if (t0 > t1) { hit = false; break; }
    }
    if (hit && t0 > 0 && t0 < best) best = t0;
  }
  return best;
}

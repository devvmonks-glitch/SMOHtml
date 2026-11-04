export const PI = Math.PI, TAU = PI * 2;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
// Frame-rate independent smoothing factor for exponential approach.
export const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
export const smooth = t => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
export const rand = (a, b) => a + Math.random() * (b - a);
export const angDiff = (a, b) => { let d = (a - b) % TAU; if (d > PI) d -= TAU; if (d < -PI) d += TAU; return d; };
export const dirOf = a => ({ x: Math.sin(a), z: Math.cos(a) });

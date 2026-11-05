// Every sound is synthesised with Web Audio, so there are no audio files to ship.
let ctx = null, master = null, noiseBuf = null, muted = false;
try { muted = localStorage.getItem('hoplab-muted') === '1'; } catch { /* storage unavailable */ }

export function initAudio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.5;
    const comp = ctx.createDynamicsCompressor();
    master.connect(comp); comp.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === 'suspended') ctx.resume();
}
export const isMuted = () => muted;
export function setMuted(m) {
  muted = m;
  if (master) master.gain.value = m ? 0 : 0.5;
  try { localStorage.setItem('hoplab-muted', m ? '1' : '0'); } catch { /* storage unavailable */ }
}

function tone(f0, f1, dur, type = 'triangle', vol = 0.15, delay = 0) {
  if (!ctx || muted) return;
  const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, f0, f1, vol = 0.2, q = 1, delay = 0, type = 'bandpass') {
  if (!ctx || muted) return;
  const t = ctx.currentTime + delay, src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  src.buffer = noiseBuf; f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t);
  if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(master); src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
}

let lastStep = 0;
export const sfx = {
  jump(n = 1) {
    const b = [0, 300, 370, 440][n] || 300;
    tone(b, b * 2.1, 0.14, 'square', 0.04); tone(b * 1.5, b * 3, 0.12, 'triangle', 0.08);
    if (n === 3) tone(b * 2, b * 4, 0.22, 'triangle', 0.06, 0.06);
  },
  bigJump() { tone(220, 880, 0.3, 'triangle', 0.12); noise(0.25, 800, 3000, 0.05, 1); },
  land(i = 0.5) { noise(0.07 + i * 0.07, 420, 120, 0.1 + i * 0.25, 0.8, 0, 'lowpass'); },
  step() {
    const n = performance.now();
    if (n - lastStep < 90) return;
    lastStep = n; noise(0.04, 900 + Math.random() * 300, 300, 0.05, 1.2);
  },
  skid() { noise(0.28, 2600, 900, 0.07, 3); },
  spin() { noise(0.25, 600, 2600, 0.08, 2); },
  spinJump() { tone(330, 990, 0.25, 'triangle', 0.09); noise(0.4, 500, 3500, 0.07, 3); [1319, 1568, 1976].forEach((f, i) => tone(f, f, 0.08, 'sine', 0.03, 0.08 + i * 0.06)); },
  twirl() { noise(0.5, 1800, 700, 0.08, 4); tone(880, 660, 0.3, 'sine', 0.04); },
  pound() { tone(700, 150, 0.22, 'triangle', 0.08); },
  poundLand() { noise(0.35, 300, 60, 0.6, 0.7, 0, 'lowpass'); tone(110, 45, 0.3, 'sine', 0.35); },
  dive() { noise(0.18, 1200, 3000, 0.06, 1.5); tone(500, 300, 0.12, 'triangle', 0.05); },
  capThrow() { noise(0.3, 900, 3000, 0.07, 4); tone(900, 1300, 0.08, 'sine', 0.04); },
  capCatch() { tone(1200, 1600, 0.06, 'sine', 0.05); },
  capBounce() { tone(400, 1100, 0.16, 'square', 0.04); tone(800, 1800, 0.12, 'triangle', 0.06, 0.03); },
  wallJump() { tone(350, 800, 0.12, 'square', 0.04); noise(0.08, 2000, 800, 0.08, 1); },
  grab() { noise(0.06, 1500, 600, 0.1, 1.5); },
  coin() { tone(988, 988, 0.07, 'square', 0.05); tone(1319, 1319, 0.35, 'square', 0.05, 0.07); },
  boing() { tone(180, 720, 0.35, 'sine', 0.2); tone(360, 1440, 0.25, 'triangle', 0.06); },
  block() { tone(160, 120, 0.1, 'square', 0.07); noise(0.08, 500, 200, 0.15, 1); },
  brick() { noise(0.3, 1500, 300, 0.35, 0.8); tone(200, 80, 0.15, 'square', 0.05); },
  capture() { [523, 659, 784, 1047].forEach((f, i) => tone(f, f * 1.01, 0.12, 'triangle', 0.08, i * 0.05)); noise(0.4, 400, 3000, 0.05, 2); },
  release() { tone(800, 300, 0.18, 'triangle', 0.08); },
  ouch() { tone(500, 200, 0.25, 'square', 0.06); },
  stomp() { tone(300, 600, 0.08, 'square', 0.05); noise(0.1, 600, 200, 0.2, 1); },
  checkpoint() { [659, 784, 988, 1319].forEach((f, i) => tone(f, f, 0.14, 'square', 0.04, i * 0.08)); },
  pipe() { [0, 1, 2].forEach(i => tone(420 - i * 80, 320 - i * 70, 0.08, 'square', 0.05, i * 0.09)); },
  moon() {
    [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => { tone(f, f, 0.22, 'triangle', 0.1, i * 0.11); tone(f * 2, f * 2, 0.18, 'sine', 0.035, i * 0.11); });
  },
  moonAppear() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, f, 0.12, 'sine', 0.08, i * 0.06)); },
  tick(hi) { const f = hi ? 1400 : 1000; tone(f, f, 0.05, 'square', 0.04); },
  zap() { noise(0.25, 3000, 6000, 0.06, 5); tone(80, 160, 0.3, 'sawtooth', 0.04); },
  stack() { tone(600, 900, 0.1, 'square', 0.05); },
  hop() { tone(250, 500, 0.08, 'triangle', 0.06); },
  croak() { tone(150, 90, 0.18, 'sawtooth', 0.05); },
  love() { [880, 1109, 1319].forEach((f, i) => tone(f, f, 0.18, 'sine', 0.08, i * 0.1)); },
};

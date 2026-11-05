import { audioCtx } from './audio.js';

// A small synthesised soundtrack: a I-vi-IV-V loop with four layers (pad, bass,
// arpeggio, drums). Notes are scheduled slightly ahead on the audio clock; the arpeggio
// and drums swell with how fast you're moving, captures shift the mood, and moon
// fanfares duck it.

const BPM = 98, SIXTEENTH = 60 / BPM / 4;
const PROG = [[0, 4, 7], [-3, 0, 4], [-7, -3, 0], [-5, -1, 2]]; // C, Am, F, G (semitones from C4)
const CAPTURE_PROG = [[-3, 0, 3], [-7, -4, 0], [-5, -2, 2], [-8, -5, -1]]; // Am, Fm-ish, Gm, E-ish
const hz = (semi, oct = 0) => 261.63 * Math.pow(2, semi / 12 + oct);

let ctx = null, out = null, layers = null, noise = null;
let next = 0, step = 0, enabled = true, intensity = 0, mood = 0, duck = 1;

function voice(type, freq, t, dur, gainNode, vol, attack = 0.005, cutoff = 0) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  let node = o;
  if (cutoff) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff; o.connect(f); node = f; }
  node.connect(g); g.connect(gainNode);
  o.start(t); o.stop(t + dur + 0.05);
}
function hit(t, f0, f1, dur, gainNode, vol, type) {
  const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  src.buffer = noise; f.type = type; f.frequency.setValueAtTime(f0, t); if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(gainNode); src.start(t, Math.random()); src.stop(t + dur + 0.02);
}

function setup() {
  const a = audioCtx();
  if (!a) return false;
  ctx = a.ctx; noise = a.noise;
  out = ctx.createGain(); out.gain.value = 0.32; out.connect(a.master);
  const mk = () => { const g = ctx.createGain(); g.connect(out); return g; };
  layers = { pad: mk(), bass: mk(), arp: mk(), drums: mk() };
  layers.tone = ctx.createBiquadFilter(); layers.tone.type = 'lowpass'; layers.tone.frequency.value = 8000;
  out.disconnect(); out.connect(layers.tone); layers.tone.connect(a.master);
  next = ctx.currentTime + 0.1;
  return true;
}

function schedule(t) {
  const bar = Math.floor(step / 16) % 4, s = step % 16, chord = (mood > 0.5 ? CAPTURE_PROG : PROG)[bar];
  if (s === 0) for (const n of chord) voice('triangle', hz(n), t, SIXTEENTH * 16, layers.pad, 0.05, 0.35, 1400);
  if (s % 4 === 0) voice('sine', hz(chord[0], -2), t, SIXTEENTH * 3, layers.bass, 0.16, 0.01);
  if (s % 4 === 2) voice('sine', hz(chord[0], -1), t, SIXTEENTH * 1.5, layers.bass, 0.06, 0.01);
  // Arpeggio climbs through the chord over two octaves.
  const notes = [...chord, ...chord.map((n) => n + 12)], n = notes[(s * (mood > 0.5 ? 3 : 1)) % notes.length];
  voice(mood > 0.5 ? 'sawtooth' : 'square', hz(n, 1), t, SIXTEENTH * 0.9, layers.arp, 0.025, 0.004, 2600);
  if (s === 0 || s === 8 || s === 11) voice('sine', 110, t, 0.18, layers.drums, 0.3, 0.002);
  if (s === 4 || s === 12) hit(t, 1800, 900, 0.14, layers.drums, 0.12, 'bandpass');
  if (s % 2 === 1) hit(t, 7000, 0, 0.04, layers.drums, 0.04, 'highpass');
}

export function setMusic(on) { enabled = on; if (out) out.gain.value = on ? 0.32 : 0; }
export const musicOn = () => enabled;

export function updateMusic(G, dt) {
  if (!ctx && !setup()) return;
  if (!enabled || ctx.state !== 'running') { next = ctx.currentTime + 0.1; return; }
  const P = G.P, moving = G.paused ? 0 : Math.min(1, P.hs / 9.5 + (P.onGround ? 0 : 0.35));
  intensity += (moving - intensity) * Math.min(1, dt * 1.5);
  mood += ((P.state === 'capture' ? 1 : 0) - mood) * Math.min(1, dt * 2);
  duck += ((P.state === 'moonGet' ? 0.15 : G.paused ? 0.5 : 1) - duck) * Math.min(1, dt * 4);
  const now = ctx.currentTime;
  layers.pad.gain.setTargetAtTime(duck, now, 0.1);
  layers.bass.gain.setTargetAtTime(duck * (0.6 + intensity * 0.4), now, 0.1);
  layers.arp.gain.setTargetAtTime(duck * intensity, now, 0.2);
  layers.drums.gain.setTargetAtTime(duck * Math.pow(intensity, 1.4), now, 0.2);
  layers.tone.frequency.setTargetAtTime(mood > 0.5 ? 1500 : 8000, now, 0.3);
  if (next < now) next = now + 0.05;
  while (next < now + 0.15) { schedule(next); next += SIXTEENTH; step++; }
}

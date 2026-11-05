// Progress kept in this browser's localStorage: collected moons and coins, extra coins
// from blocks and enemies, and best station times. Everything still works if storage
// is unavailable (private windows, blocked site data); progress just isn't kept.

const KEY = 'hoplab-save-v1';
const data = { moons: [], coins: [], extra: 0, best: {} };
try {
  const raw = localStorage.getItem(KEY);
  if (raw) Object.assign(data, JSON.parse(raw));
} catch { /* storage unavailable */ }

let pending = 0;
function flush() {
  clearTimeout(pending);
  pending = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* storage unavailable */ } }, 250);
}

export const save = {
  data,
  has: (kind, id) => data[kind].includes(id),
  add(kind, id) { if (!data[kind].includes(id)) { data[kind].push(id); flush(); } },
  addExtra(n) { data.extra += n; flush(); },
  best: (id) => data.best[id],
  setBest(id, ms) { data.best[id] = ms; flush(); },
  reset() {
    try { localStorage.removeItem(KEY); } catch { /* storage unavailable */ }
    location.reload();
  },
};

// Settings live separately so resetting progress keeps them.
export function setting(name, fallback) {
  try { const v = localStorage.getItem('hoplab-' + name); return v === null ? fallback : v; } catch { return fallback; }
}
export function setSetting(name, value) {
  try { localStorage.setItem('hoplab-' + name, value); } catch { /* storage unavailable */ }
}

export function createHud() {
  const $ = id => document.getElementById(id);
  const toastEl = $('toast'), banner = $('banner'), bannerName = $('bannerName'), promptEl = $('prompt'), timerEl = $('timer');
  let promptText = null, timerShown = null, bannerTO = 0;
  const bump = el => { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); };
  return {
    toast(text) {
      toastEl.textContent = text;
      toastEl.classList.remove('show'); void toastEl.offsetWidth; toastEl.classList.add('show');
    },
    setMoons(n, total) { $('moonCount').textContent = n + ' / ' + total; if (n) bump($('moonPill')); },
    setCoins(n) { $('coinCount').textContent = n; bump($('coinPill')); },
    banner(name) {
      bannerName.textContent = name; banner.hidden = false;
      banner.classList.remove('show'); void banner.offsetWidth; banner.classList.add('show');
      clearTimeout(bannerTO); bannerTO = setTimeout(() => { banner.hidden = true; }, 2700);
    },
    // A title card when you arrive somewhere new.
    kingdom(kicker, name, sub) {
      const el = $('kingdomCard');
      $('kcKicker').textContent = kicker; $('kcName').textContent = name; $('kcSub').textContent = sub;
      el.hidden = false; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
      clearTimeout(this.kTO); this.kTO = setTimeout(() => { el.hidden = true; }, 4300);
    },
    prompt(text) {
      if (text === promptText) return;
      promptText = text; promptEl.hidden = !text; promptEl.textContent = text || '';
    },
    timer(sec) {
      const v = sec == null ? null : Math.ceil(sec);
      if (v === timerShown) return;
      timerShown = v; timerEl.hidden = v === null;
      if (v !== null) { timerEl.textContent = v; timerEl.classList.toggle('warn', v <= 3); bump(timerEl); }
    },
  };
}

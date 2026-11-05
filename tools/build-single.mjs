// Inline style.css and game.js into one self-contained hop-lab.html.
// Run after esbuild (npm run build does both).
import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('style.css', 'utf8');
const js = readFileSync('game.js', 'utf8')
  .replace(/\n\/\/# sourceMappingURL=.*\s*$/, '\n')
  .replace(/<\/script/gi, '<\\/script');

let out = html;
const swap = (re, text) => {
  if (!re.test(out)) throw new Error('build-single: could not find ' + re);
  out = out.replace(re, () => text);
};
swap(/<link rel="stylesheet" href="style\.css[^"]*">/, `<style>\n${css}</style>`);
swap(/<script src="game\.js[^"]*"><\/script>/, `<script>\n${js}</script>`);

writeFileSync('hop-lab.html', out);
console.log(`hop-lab.html: ${(Buffer.byteLength(out) / 1048576).toFixed(2)} MB`);

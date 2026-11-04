# SMOHtml — Hop Lab

A small browser prototype of Super Mario Odyssey–style 3D platforming movement, built with [three.js](https://threejs.org/) (r128). There's no build step: plain HTML, CSS and JavaScript.

You play a little round character with a throwable cap in a sandbox course. There are 5 gems to collect, and each one needs a different move to reach.

**Play it in your browser:** https://&lt;your-github-username&gt;.github.io/SMOHtml/

## Controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Move | WASD / arrow keys | Drag on the left half of the screen |
| Jump | Space | **Jump** button |
| Crouch | Shift or C | **Crouch** button |
| Cap throw | E, J or F | **Cap** button |
| Turn camera | Drag with the mouse | Drag on the screen |
| Restart | R | — |

Press **?** in the top-right corner to bring up the move list in-game.

## Moves

| Move | How |
| --- | --- |
| Jump chain | Jump again right as you land, while running, for a double and then a triple jump |
| Long jump | Run, hold Crouch, then Jump |
| Backflip | Stand still, hold Crouch, then Jump |
| Side flip | Run, reverse direction, and Jump during the skid |
| Ground pound | Crouch in the air. Jump right as you land to bounce high |
| Dive | Press Cap during a ground pound |
| Cap throw / cap jump | Throw your cap, then jump or dive into it to bounce off it |
| Wall jump | Fall against a wall while holding toward it, then Jump |
| Roll | Hold Crouch and press Cap. Press Cap again to speed up |

## Playing locally

The game pulls three.js and the Fredoka font from CDNs, so you need an internet connection the first time.

**Easiest:** open `index.html` directly in a browser.

**With a local server** (recommended, and closer to how GitHub Pages serves it):

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

Any static server works, for example `npx serve`.

## Download

Every [release](../../releases) has a zip of the game attached. Unzip it and open `index.html`.

## Project layout

```
index.html   page markup, HUD, touch controls and help card
style.css    all styles
game.js      scene, character, movement state machine, input and render loop
```

## License

[MIT](LICENSE)

This is a fan-made movement prototype. It isn't affiliated with or endorsed by Nintendo, and it contains no Nintendo assets.

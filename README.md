# SMOHtml — Hop Lab

A browser prototype of Super Mario Odyssey–style 3D platforming, built with [three.js](https://threejs.org/). You play a little character with a throwable cap in a **dev room**: a grid-textured test level with 15 stations. Each station shows off one move, object or capture, and each one hides a Power Moon.

**Play it in your browser:** https://devvmonks-glitch.github.io/SMOHtml/

## What's in the dev room

| Station | What it tests |
| --- | --- |
| Jump chain tiers | Single, double and triple jump heights (1.6m / 2.5m / 4.2m) |
| Long jump gap | A 7.5m gap you can only clear with a long jump |
| Backflip pillar | A 4.6m pillar |
| Wall jump chimney | Two 14m walls to climb by wall jumping |
| Ledge ladder | Grab, shimmy and climb three ledges |
| Jump flowers | Flowers that launch you, higher if you jump or pound as you land |
| Platform course | A spring, a moving platform, a spinning disc and a lift |
| Cap jump float | A platform you can only reach by bouncing off your cap |
| ? blocks and bricks | Coin blocks, plus a brick pile you pound through to find a moon |
| Ground-pound post | Pound it flat to reveal a moon |
| P switch | A staircase that only exists for 9 seconds |
| Warp pipe | Takes you to the top of a 20m lookout tower |
| Frog capture | Capture the frog to leap a 6.5m cliff |
| Goomba tower | Capture a Goomba, stack the others, and reach Goombette |
| Spark pylon | Capture it to zip along the wire to a far tower |
| Roll ramp | Roll down a slope to build speed |

Checkpoint flags are scattered around: touch one (or hit it with your cap) and **R** respawns you there. The menu's **Warp** tab jumps straight to any station.

## Moves

| Move | How |
| --- | --- |
| Jump chain | Jump again right as you land, while running, for a double and then a triple jump |
| Long jump | Run, hold Crouch, then Jump |
| Backflip | Stand still, hold Crouch, then Jump |
| Side flip | Run, reverse direction, and Jump during the skid |
| Ground pound | Crouch in the air. Jump right as you land for a high ground-pound jump |
| Dive | Press Cap during a ground pound. Jump when you land to roll out |
| Cap throw / cap jump | Throw your cap (hold to keep it hovering), then jump or dive into it to bounce |
| Wall jump | Fall against a wall while holding toward it, then Jump |
| Ledge grab | Jump at a ledge while holding toward it. Jump to climb up, move sideways to shimmy, Crouch to drop |
| Roll | Hold Crouch and press Cap. Press Cap again to speed up. You go faster downhill |
| Capture | Hit a frog, Goomba or spark pylon with your cap. Crouch to let go |

## Controls

| Action | Keyboard / mouse | Gamepad | Touch |
| --- | --- | --- | --- |
| Move | WASD / arrow keys | Left stick | Drag on the left half |
| Camera | Mouse (click to lock the pointer) | Right stick | Drag on the right half |
| Jump | Space | A / B | **Jump** |
| Crouch | Shift or C | Bumpers / triggers | **Crouch** |
| Cap | E, F, J or left click | X / Y | **Cap** |
| Restart at checkpoint | R | Select | — |
| Menu | H or Esc | Start | **?** |
| Mute | M | — | Speaker button |

## How it feels the way it does

- Physics runs in fixed 120 Hz substeps, with coyote time, jump buffering, variable jump height and a short hang at the top of each jump.
- Collision handles boxes, cylinders and ramps. Small ledges are stepped onto, you stick to slopes and stairs when walking down, and moving or spinning platforms carry you.
- The character is a jointed rig, posed procedurally. Every move has its own pose, the joints blend between poses, and landings and jumps get springy squash and stretch.
- The camera holds its height through jumps instead of bobbing, swings behind you as you run, and pulls in when a wall gets in the way.
- All sound effects are synthesised with Web Audio, so there are no audio files.

## Playing locally

Download the zip from the latest [release](https://github.com/devvmonks-glitch/SMOHtml/releases), unzip it and open `index.html`. three.js is bundled into `game.js`, so it works offline (only the font comes from the web).

Or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Developing

The source lives in `src/` as ES modules and is bundled into `game.js` with esbuild. The built `game.js` is committed, so GitHub Pages and the download work without a build step.

```bash
npm install
npm run watch   # rebuild game.js on every change
npm run build   # minified build before committing
```

Add `?debug` to the URL to expose the game state as `window.HL` in the console.

```
index.html        page, HUD, menu and touch controls
style.css         all styles
game.js           built bundle (don't edit by hand)
src/main.js       renderer, lighting, menu wiring and the game loop
src/player.js     movement state machine: every move lives here
src/world.js      collision world (boxes, cylinders, ramps) and body movement
src/character.js  jointed character and procedural animation
src/camera.js     follow camera
src/cap.js        cap throw, hover, return and cap jumps
src/captures.js   frog, Goomba (with stacking), Goombette and spark pylon
src/objects.js    coins, moons, flowers, springs, blocks, pipes, platforms, signs…
src/level.js      the dev-room layout
src/input.js      keyboard, mouse, gamepad and touch
src/audio.js      synthesised sound effects
src/fx.js         particles and shockwave rings
src/hud.js        on-screen counters, toasts and banners
```

## License

[MIT](LICENSE)

This is a fan-made movement prototype. It isn't affiliated with or endorsed by Nintendo, and it contains no Nintendo assets: every model, texture and sound is made in code.

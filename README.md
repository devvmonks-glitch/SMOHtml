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
| Warp pipe | Crouch on it or ground pound onto it to reach the top of a 20m lookout tower |
| Frog capture | Capture the frog to leap a 6.5m cliff |
| Goomba tower | Capture a Goomba, stack the others, and reach Goombette. Towers stay stacked when you let go |
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
| Roll | Crouch + Cap, a quick tap of Crouch then Cap, or Cap as a ground pound lands. Press Cap again to speed up. You go faster downhill |
| Spin jump | Spin the stick (or press Q), then Jump. A higher jump with a slow, spinning fall |
| Twirl | Spin the stick (or press Q) in the air. You spin and float down slowly, once per jump |
| Spin throw | Spin the stick (or press Q), then press Cap. Cappy circles around you, grabbing coins and captures |
| Capture | Hit a frog, Goomba or spark pylon with your cap. Crouch to let go |

## Controls

| Action | Keyboard / mouse | Gamepad | Touch |
| --- | --- | --- | --- |
| Move | WASD / arrow keys | Left stick | Drag on the left half |
| Camera | Mouse (click to lock the pointer) | Right stick | Drag on the right half |
| Jump | Space | A / B | **Jump** |
| Crouch | Shift or C | Bumpers / triggers | **Crouch** |
| Cap | E, F, J or left click | X / Y | **Cap** |
| Spin | Q, or roll through WASD | Spin the stick, or click a stick | Spin the stick |
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

**Single file:** download `hop-lab.html` (from the repo or the latest [release](https://github.com/devvmonks-glitch/SMOHtml/releases)) and open it. Everything (code, styles, models) is inside that one file, so it works offline (only the font comes from the web).

**Or** download the zip from the latest release, unzip it and open `index.html`.

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
npm run build   # minified game.js plus the single-file hop-lab.html
```

Graphics: desktop browsers get ambient occlusion; touch devices skip it. Add `?lq` to the URL to turn it off anywhere.

Add `?debug` to the URL to expose the game state as `window.HL` in the console.

### Models

The character, Cappy, Goombas, the frog, Power Moons and coins are modeled in Blender by a script, so they can be rebuilt or tweaked:

```bash
blender --background --factory-startup --python tools/blender/build_models.py
npm run build
```

That writes `assets/models.glb` (embedded into `game.js` at build time) and `tools/blender/models.blend`, which you can open in Blender.

The hero is one skinned body on a 13-bone skeleton (`heroRig`), built by fusing simple shapes with a voxel remesh and weighting each vertex to its nearest bones. The bones sit on the same joints `src/character.js` animates, and the code converts each procedural joint rotation into the bone's own rest frame. The head, eyes and Cappy are rigid models riding on the neck bone. If the models ever fail to load, the game falls back to simple built-in shapes.

```
index.html        page, HUD, menu and touch controls
style.css         all styles
game.js           built bundle (don't edit by hand)
hop-lab.html      the whole game in one file (built)
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
src/models.js     loads the Blender models and swaps them into the rig
assets/models.glb exported models
tools/blender/    Blender modeling script and .blend file
tools/build-single.mjs  inlines everything into hop-lab.html
```

## License

[MIT](LICENSE)

This is a fan-made movement prototype. It isn't affiliated with or endorsed by Nintendo, and it contains no Nintendo assets: every model, texture and sound is made in code (the models by a Blender script).

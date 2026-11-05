# SMOHtml — Hop Lab

A browser prototype of Super Mario Odyssey–style 3D platforming, built with [three.js](https://threejs.org/), with a hand-painted look. You play a little character with a throwable cap in a **dev room** dressed as a garden: 19 stations on paved pads among grass, trees and stone walls, plus a short course on a sky island. Each station shows off one move, object or capture, and each one hides a Power Moon.

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
| Swimming pool | Swim at the surface, dive and stroke down to a moon on the bottom |
| Chain Chomp | Capture it, pull back against its chain, and launch it to smash a boulder |
| 8-bit wall | Walk into the pipe at its foot to become pixel art and run a 2D course along the wall |
| Sky island | A plaza pipe leads to a floating course that uses everything, with a Grand Moon at the top |

Checkpoint flags are scattered around: touch one (or hit it with your cap) and **R** respawns you there. The menu's **Warp** tab jumps straight to any station.

**Time trials:** warping to a station starts a timer that stops when you grab its moon (a collected moon comes back see-through for the trial). Your best time and route are saved, and next time a ghost of that run races you. **R** restarts the trial.

**Saved progress:** moons, coins and best times are kept in your browser. The menu's **Moons** tab lists what you've found and can reset it.

**Photo mode:** press **P** to freeze time, orbit and zoom the camera, try filters (painted, watercolor, ink, sepia, vivid, dusk) and save a picture.

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
| Capture | Hit a frog, Goomba, spark pylon or Chain Chomp with your cap. Crouch to let go |
| Swim | Jump into water. At the surface, Jump to climb out and Crouch to dive; underwater, Jump to stroke and hold Crouch to sink |

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
| Mute / music | M / N | — | Speaker button / menu |
| Photo mode | P | — | Menu |

## How it feels the way it does

- Physics runs in fixed 120 Hz substeps, with coyote time, jump buffering, variable jump height and a short hang at the top of each jump.
- Collision handles boxes, cylinders and ramps. Small ledges are stepped onto, you stick to slopes and stairs when walking down, and moving or spinning platforms carry you.
- The character is a jointed rig, posed procedurally. Every move has its own pose, the joints blend between poses, and landings and jumps get springy squash and stretch.
- The camera holds its height through jumps instead of bobbing, swings behind you as you run, and pulls in when a wall gets in the way.
- All sound effects and the music are synthesised with Web Audio, so there are no audio files. The soundtrack has four layers: the arpeggio and drums swell as you speed up, captures shift its mood, and it ducks for moon fanfares.
- Grass, flowers and trees sway in the wind, grass tufts bend away as you walk through them, and running leaves footprints.
- The hero glances at nearby coins, moons and creatures, Cappy looks back at you while hovering, and Goombas look up when you jump over them.
- The painted look is done in the material shaders (`src/paint.js`): light falls off in soft bands that wobble along brush strokes, shadows lean cool lilac and highlights warm, pigment varies across surfaces, and edges darken softly. The sky, world textures and paper grain are painted on canvases at startup, so there are no image files either.

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

Graphics: the menu's Controls tab switches between High and Low (no shadows, fewer grass tufts, 1x resolution). Touch devices start on Low.


Add `?debug` to the URL to expose the game state as `window.HL` in the console.

### Models

The character, Cappy, Goombas, the frog, Power Moons and coins are modeled in Blender by a script, so they can be rebuilt or tweaked:

```bash
npm run models   # Blender (must be on your PATH), then meshopt compression
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
src/paint.js      painterly shading, painted sky and paper grain
src/decor.js      trees, bushes, flowers, rocks, lamps, fences, hills, grass tufts and footprints
src/flat.js       the 8-bit wall section
src/trial.js      time trials and ghost replays
src/music.js      the synthesised soundtrack
src/save.js       saved progress and settings
src/hud.js        on-screen counters, toasts and banners
src/models.js     loads the Blender models and swaps them into the rig
assets/models.glb exported models
tools/blender/    Blender modeling script and .blend file
tools/build-single.mjs  inlines everything into hop-lab.html
```

## License

[MIT](LICENSE)

This is a fan-made movement prototype. It isn't affiliated with or endorsed by Nintendo, and it contains no Nintendo assets: every model, texture and sound is made in code (the models by a Blender script).

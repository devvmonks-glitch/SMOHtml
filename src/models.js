import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
// Built by tools/blender/build_models.py and embedded into game.js by esbuild,
// so the game still works offline and from file://.
import glb from '../assets/models.glb';

const parts = {};
export const loadedParts = parts; // for ?debug

export async function loadModels() {
  try {
    const buf = glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength);
    // The GLB is meshopt-compressed (npm run models), about a quarter of its raw size.
    const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(buf, '');
    gltf.scene.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      // Gold reads flat without a little glow; match the look of the old coins.
      if (o.material.name === 'gold' || o.material.name === 'coinMark') {
        o.material.emissive = new THREE.Color(0xb07800);
        o.material.emissiveIntensity = 0.4;
      }
    });
    // Compression (KHR_mesh_quantization) stores each model's dequantization as its node's
    // own position and scale, so wrap every model: callers move and scale the wrapper and
    // never overwrite that transform. The rig is used as-is (its skin carries the scale).
    for (const c of gltf.scene.children.slice()) {
      if (c.name === 'heroRig') { parts[c.name] = c; continue; }
      const wrap = new THREE.Group();
      wrap.name = c.name; wrap.add(c);
      parts[wrap.name] = wrap;
    }
    // Remember the bind pose so copies of the rig can start from it, not from a live pose.
    if (parts.heroRig) parts.heroRig.traverse((o) => { if (o.isBone) o.userData.rest = o.quaternion.toArray(); });
  } catch (e) {
    console.warn('Models failed to load; using simple shapes instead.', e);
  }
}

// The hero's skinned body and skeleton (there is only one, so it isn't cloned).
export const heroRig = () => parts.heroRig || null;
// An independent copy of the rig (bones and all), e.g. for the time-trial ghost.
export function cloneHeroRig() {
  if (!parts.heroRig) return null;
  const c = cloneSkinned(parts.heroRig);
  c.traverse((o) => { if (o.isBone && o.userData.rest) o.quaternion.fromArray(o.userData.rest); });
  c.position.set(0, 0, 0);
  return c;
}

// A fresh instance of a named model (geometry and materials are shared), or null.
export function model(name) {
  const m = parts[name];
  if (!m) return null;
  const c = m.clone();
  c.position.set(0, 0, 0); c.rotation.set(0, 0, 0); c.scale.set(1, 1, 1);
  return c;
}

// Replace a joint's own primitive meshes (not its child joints) with a model.
export function swapIn(group, name) {
  const m = model(name);
  if (!m) return false;
  for (const c of group.children.slice()) if (c.isMesh) group.remove(c);
  group.add(m);
  return true;
}

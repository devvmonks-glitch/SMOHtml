import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// Built by tools/blender/build_models.py and embedded into game.js by esbuild,
// so the game still works offline and from file://.
import glb from '../assets/models.glb';

const parts = {};
export const loadedParts = parts; // for ?debug

export async function loadModels() {
  try {
    const buf = glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength);
    const gltf = await new GLTFLoader().parseAsync(buf, '');
    gltf.scene.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      // Gold reads flat without a little glow; match the look of the old coins.
      if (o.material.name === 'gold' || o.material.name === 'coinMark') {
        o.material.emissive = new THREE.Color(0xb07800);
        o.material.emissiveIntensity = 0.4;
      }
    });
    for (const c of gltf.scene.children) parts[c.name] = c;
  } catch (e) {
    console.warn('Models failed to load; using simple shapes instead.', e);
  }
}

// The hero's skinned body and skeleton (there is only one, so it isn't cloned).
export const heroRig = () => parts.heroRig || null;

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

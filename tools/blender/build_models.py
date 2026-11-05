"""Builds every model in the game and exports them as one GLB.

Run headless from the project root:
    blender --background --factory-startup --python tools/blender/build_models.py

Outputs assets/models.glb (bundled into game.js) and tools/blender/models.blend.

Everything is authored in three.js coordinates (Y up, +Z forward) and converted to
Blender's Z-up space at the end of each part, so numbers here line up with the code
in src/. Each character part is its own object with its origin at the joint it hangs
from, which is how src/character.js poses it.
"""
import math
import os
import sys

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT_GLB = os.path.join(ROOT, 'assets', 'models.glb')
OUT_BLEND = os.path.join(ROOT, 'tools', 'blender', 'models.blend')

# three.js (x, y, z) -> Blender (x, -z, y); the glTF exporter converts it back.
TO_BLENDER = Matrix(((1, 0, 0, 0), (0, 0, -1, 0), (0, 1, 0, 0), (0, 0, 0, 1)))

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene


# ---------- materials ----------
def srgb_to_linear(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


MATS = {}


def mat(name, hexcol, rough=0.5, metal=0.0, emit=0.0):
    if name in MATS:
        return MATS[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes.get('Principled BSDF')
    rgb = [srgb_to_linear(((hexcol >> s) & 255) / 255) for s in (16, 8, 0)]
    bsdf.inputs['Base Color'].default_value = (*rgb, 1)
    bsdf.inputs['Roughness'].default_value = rough
    bsdf.inputs['Metallic'].default_value = metal
    if emit:
        bsdf.inputs['Emission Color'].default_value = (*rgb, 1)
        bsdf.inputs['Emission Strength'].default_value = emit
    MATS[name] = m
    return m


SUIT = lambda: mat('suit', 0x22b8a4, 0.62)
SHORTS = lambda: mat('shorts', 0x13897a, 0.7)
BELLY = lambda: mat('belly', 0xc6f5ea, 0.65)
GLOVE = lambda: mat('glove', 0xffffff, 0.4)
SHOE = lambda: mat('shoe', 0x2b3a67, 0.3)
SOLE = lambda: mat('sole', 0xe9edf5, 0.6)
WHITE = lambda: mat('eyeWhite', 0xffffff, 0.15)
INK = lambda: mat('ink', 0x14203a, 0.2)
IRIS = lambda: mat('iris', 0x2f6fe0, 0.2)
GLINT = lambda: mat('glint', 0xffffff, 0.1, emit=1.5)
CHEEK = lambda: mat('cheek', 0xff8fa3, 0.8)
GOLD = lambda: mat('gold', 0xffc93a, 0.3, 0.6)
HAT = lambda: mat('hat', 0xffcf3f, 0.42)
BAND = lambda: mat('band', 0xe0565b, 0.5)


# ---------- shape builders (three.js space) ----------
def mesh_from_bm(bm, name='shape'):
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    return me


def sphere(r, segs=28, rings=18):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=rings, radius=r)
    return mesh_from_bm(bm)


def lathe(profile, segs=36, closed=False):
    """Revolve [(radius, y), ...] around the Y axis. Points with radius 0 become poles."""
    bm = bmesh.new()
    rings = []
    for r, y in profile:
        if r <= 1e-6:
            rings.append([bm.verts.new((0, y, 0))])
        else:
            rings.append([bm.verts.new((r * math.cos(a), y, r * math.sin(a)))
                          for a in (i / segs * math.tau for i in range(segs))])
    pairs = list(zip(rings, rings[1:]))
    if closed:
        pairs.append((rings[-1], rings[0]))
    for a, b in pairs:
        if len(a) == 1 and len(b) == 1:
            continue
        for i in range(segs):
            j = (i + 1) % segs
            if len(a) == 1:
                bm.faces.new((a[0], b[j], b[i]))
            elif len(b) == 1:
                bm.faces.new((a[i], a[j], b[0]))
            else:
                bm.faces.new((a[i], a[j], b[j], b[i]))
    return mesh_from_bm(bm)


def capsule(r, length, segs=20, rings=6):
    """Capsule hanging down from the origin along -Y."""
    prof = [(0, r)]
    for i in range(1, rings + 1):
        a = math.pi / 2 * (1 - i / rings)
        prof.append((r * math.cos(a), r * math.sin(a)))
    for i in range(0, rings + 1):
        a = math.pi / 2 * i / rings
        prof.append((r * math.cos(a), -length - r * math.sin(a)))
    prof[-1] = (0, -length - r)
    return lathe(prof, segs)


def ring(r, y, tube, segs=36, tsegs=10):
    return lathe([(r + math.cos(a) * tube, y + math.sin(a) * tube)
                  for a in (i / tsegs * math.tau for i in range(tsegs))], segs, closed=True)


def roundbox(sx, sy, sz, level=2):
    """A soft rounded box: a cube smoothed with subdivision surface."""
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1)
    bmesh.ops.scale(bm, vec=(sx, sy, sz), verts=bm.verts)
    me = mesh_from_bm(bm)
    ob = bpy.data.objects.new('tmp', me)
    scene.collection.objects.link(ob)
    mod = ob.modifiers.new('ss', 'SUBSURF')
    mod.levels = mod.render_levels = level
    ev = ob.evaluated_get(bpy.context.evaluated_depsgraph_get())
    out = bpy.data.meshes.new_from_object(ev)
    bpy.data.objects.remove(ob)
    bpy.data.meshes.remove(me)
    return out


def crescent(depth=0.14, bevel=0.06):
    """The Power Moon shape: a bevelled, extruded crescent in the XY plane facing +Z."""
    cu = bpy.data.curves.new('crescentCurve', 'CURVE')
    cu.dimensions = '2D'
    cu.fill_mode = 'BOTH'
    cu.extrude = depth / 2
    cu.bevel_depth = bevel
    cu.bevel_resolution = 4
    pts = []
    a0, a1 = 0.35 * math.pi, 1.65 * math.pi
    for i in range(33):
        a = a0 + (a1 - a0) * i / 32
        pts.append((math.cos(a) * 0.5, math.sin(a) * 0.5))
    cx, r, b0, b1 = 0.2667, 0.4467, math.radians(264.9), math.radians(95.1)
    for i in range(1, 32):
        a = b0 + (b1 - b0) * i / 32
        pts.append((cx + math.cos(a) * r, math.sin(a) * r))
    sp = cu.splines.new('POLY')
    sp.points.add(len(pts) - 1)
    for p, (x, y) in zip(sp.points, pts):
        p.co = (x, y, 0, 1)
    sp.use_cyclic_u = True
    ob = bpy.data.objects.new('tmp', cu)
    scene.collection.objects.link(ob)
    ev = ob.evaluated_get(bpy.context.evaluated_depsgraph_get())
    out = bpy.data.meshes.new_from_object(ev)
    bpy.data.objects.remove(ob)
    bpy.data.curves.remove(cu)
    return out  # curve space XY == three.js XY, depth along +Z


def xf(t=(0, 0, 0), r=(0, 0, 0), s=(1, 1, 1)):
    """Translation @ rotation (three.js XYZ Euler) @ scale, in three.js space."""
    if isinstance(s, (int, float)):
        s = (s, s, s)
    rot = Euler(r, 'XYZ').to_matrix().to_4x4()
    return Matrix.Translation(t) @ rot @ Matrix.Diagonal((*s, 1))


class Part:
    """Collects shapes (each with a material) into one exported object."""

    def __init__(self, name):
        self.name, self.bm, self.mats = name, bmesh.new(), []

    def add(self, me, material, m=Matrix()):
        if material not in self.mats:
            self.mats.append(material)
        idx = self.mats.index(material)
        tmp = bmesh.new()
        tmp.from_mesh(me)
        bmesh.ops.transform(tmp, matrix=TO_BLENDER @ m, verts=tmp.verts)
        for f in tmp.faces:
            f.material_index = idx
            f.smooth = True
        out = bpy.data.meshes.new('tmp')
        tmp.to_mesh(out)
        tmp.free()
        self.bm.from_mesh(out)
        bpy.data.meshes.remove(out)
        return self

    def build(self):
        me = bpy.data.meshes.new(self.name)
        self.bm.to_mesh(me)
        self.bm.free()
        for m in self.mats:
            me.materials.append(m)
        ob = bpy.data.objects.new(self.name, me)
        scene.collection.objects.link(ob)
        return ob


# ---------- the player character ----------
def eye_shapes(p, at=(0, 0, 0), white_r=0.1, iris=True, rot=(0, 0, 0)):
    base = xf(at, rot)
    p.add(sphere(white_r, 24, 16), WHITE(), base @ xf(s=(0.8, 1.3, 0.55)))
    if iris:
        p.add(sphere(white_r * 0.6, 20, 14), IRIS(), base @ xf((0, -0.006, white_r * 0.36), s=(0.85, 1.25, 0.45)))
    p.add(sphere(white_r * 0.36, 16, 12), INK(), base @ xf((0, -0.008, white_r * 0.5), s=(0.85, 1.25, 0.45)))
    p.add(sphere(white_r * 0.15, 10, 8), GLINT(), base @ xf((white_r * 0.15, white_r * 0.38, white_r * 0.58)))


def build_character():
    # Pelvis (shorts), origin at the hips joint.
    Part('pelvis').add(lathe([(0, -0.17), (0.13, -0.165), (0.21, -0.11), (0.25, -0.02), (0.25, 0.06),
                              (0.22, 0.12), (0.16, 0.15), (0, 0.155)]), SHORTS(), xf(s=(1.08, 1, 0.95))).build()

    # Torso, origin at the hips.
    t = Part('torso')
    t.add(lathe([(0, 0.02), (0.19, 0.04), (0.25, 0.11), (0.272, 0.22), (0.262, 0.34), (0.225, 0.44),
                 (0.15, 0.51), (0.06, 0.535), (0, 0.537)]), SUIT(), xf(s=(1, 1, 0.94)))
    t.add(sphere(0.2), BELLY(), xf((0, 0.21, 0.1), s=(1, 1.1, 0.62)))
    t.add(ring(0.245, 0.07, 0.035), SHORTS(), xf(s=(1, 1, 0.94)))
    t.add(roundbox(0.09, 0.07, 0.04), GOLD(), xf((0, 0.07, 0.262)))
    t.build()

    # Head, origin at the neck. Eyes are separate so they can blink.
    h = Part('head')
    h.add(sphere(0.31, 36, 24), SUIT(), xf((0, 0.22, 0), s=(1, 0.97, 0.98)))
    h.add(sphere(0.052, 16, 12), CHEEK(), xf((0, 0.16, 0.305), s=(1.15, 0.9, 0.9)))
    # A small smile: a thin crescent of dark red under the nose.
    h.add(ring(0.05, 0, 0.014, 20, 8), mat('mouth', 0x8a2a3a, 0.6), xf((0, 0.1, 0.286), (1.25, 0, 0), s=(1.2, 1, 0.55)))
    for sx in (-1, 1):
        h.add(sphere(0.062, 14, 10), CHEEK(), xf((sx * 0.2, 0.13, 0.22), s=(1, 0.6, 0.4)))
        h.add(sphere(0.09, 16, 12), SUIT(), xf((sx * 0.3, 0.22, -0.01), s=(0.45, 0.7, 0.62)))
        h.add(roundbox(0.1, 0.022, 0.03, 2), SHORTS(), xf((sx * 0.125, 0.43, 0.215), (0, 0, -sx * 0.18)))
    h.build()

    e = Part('eye')
    eye_shapes(e)
    e.build()

    # Arms: upper arm from the shoulder, forearm + mitten from the elbow.
    Part('upperArm').add(sphere(0.085, 20, 14), SUIT()).add(capsule(0.073, 0.15), SUIT(), xf((0, -0.04, 0))).build()
    f = Part('foreArm')
    f.add(capsule(0.066, 0.1), SUIT())
    f.add(lathe([(0.07, -0.12), (0.092, -0.125), (0.098, -0.16), (0.08, -0.165)], 28, closed=True), GLOVE())
    f.add(sphere(0.105, 24, 16), GLOVE(), xf((0, -0.22, 0.005), s=(1, 1.05, 0.88)))
    f.add(capsule(0.036, 0.04, 14, 4), GLOVE(), xf((0, -0.17, 0.075), (-0.9, 0, 0)))
    f.build()

    # Legs: shorts cuff + thigh from the hip, shin from the knee, shoe from the ankle.
    Part('thigh').add(capsule(0.09, 0.19), SUIT(), xf((0, -0.02, 0))).add(
        lathe([(0, 0.03), (0.105, 0.025), (0.118, -0.06), (0.11, -0.12), (0, -0.12)], 28), SHORTS()).build()
    Part('shin').add(sphere(0.088, 18, 12), SUIT()).add(capsule(0.081, 0.15), SUIT()).build()
    s = Part('shoe')
    s.add(roundbox(0.25, 0.15, 0.36), SHOE(), xf((0, -0.03, 0.07)))
    s.add(roundbox(0.27, 0.05, 0.39), SOLE(), xf((0, -0.095, 0.07)))
    s.add(roundbox(0.15, 0.03, 0.12), SOLE(), xf((0, 0.035, 0.12), (0.35, 0, 0)))
    s.build()


def build_hat():
    """Cappy: a rounded top hat with a curled brim, a red band and big eyes."""
    p = Part('hat')
    p.add(lathe([(0, 0.47), (0.13, 0.465), (0.23, 0.43), (0.285, 0.36), (0.305, 0.24), (0.315, 0.11),
                 (0.322, 0.05), (0.42, 0.04), (0.48, 0.055), (0.505, 0.078), (0.512, 0.052), (0.49, 0.016),
                 (0.42, 0.0), (0.3, 0.012), (0, 0.022)], 44), HAT())
    p.add(lathe([(0.309, 0.055), (0.327, 0.058), (0.329, 0.135), (0.311, 0.14)], 44, closed=True), BAND())
    for sx in (-1, 1):
        eye_shapes(p, (sx * 0.1, 0.25, 0.268), 0.075, iris=False, rot=(0, sx * 0.3, 0))
    p.build()


# ---------- creatures ----------
def build_goomba():
    brown, tan, dark = mat('gBrown', 0x9b5a2f, 0.6), mat('gTan', 0xf1d2a0, 0.7), mat('gDark', 0x4b2a16, 0.6)
    p = Part('goomba')
    p.add(lathe([(0, 0.06), (0.19, 0.08), (0.26, 0.18), (0.255, 0.32), (0.2, 0.4), (0, 0.42)], 28), tan)
    p.add(lathe([(0, 0.99), (0.2, 0.97), (0.38, 0.89), (0.5, 0.76), (0.555, 0.62), (0.54, 0.52), (0.46, 0.45),
                 (0.3, 0.42), (0, 0.42)], 40), brown)
    p.add(sphere(0.4, 30, 18), tan, xf((0, 0.54, 0.11), s=(1.05, 0.55, 0.95)))
    for sx in (-1, 1):
        # Eyes sit on the front of the cap, just above the tan face.
        p.add(sphere(0.13, 22, 16), WHITE(), xf((sx * 0.15, 0.64, 0.5), (0, sx * 0.28, 0), s=(0.75, 1.15, 0.45)))
        p.add(sphere(0.065, 16, 12), INK(), xf((sx * 0.14, 0.62, 0.545), (0, sx * 0.28, 0), s=(0.85, 1.2, 0.45)))
        p.add(sphere(0.018, 8, 6), GLINT(), xf((sx * 0.125, 0.66, 0.565)))
        p.add(roundbox(0.22, 0.055, 0.06), dark, xf((sx * 0.16, 0.8, 0.47), (0.35, 0, -sx * 0.4)))
        p.add(lathe([(0.04, 0.0), (0, -0.09)], 12), WHITE(), xf((sx * 0.11, 0.47, 0.44)))
    p.add(sphere(0.12, 18, 12), INK(), xf((0, 0.47, 0.425), s=(1.4, 0.4, 0.35)))
    p.build()
    Part('goombaFoot').add(roundbox(0.3, 0.16, 0.44), dark).build()
    pink = mat('bow', 0xff5fa2, 0.4)
    b = Part('goombaBow')
    for sx in (-1, 1):
        b.add(sphere(0.13, 18, 12), pink, xf((sx * 0.14, 0, 0), (0, 0, sx * 0.3), s=(1.2, 0.85, 0.55)))
    b.add(sphere(0.07, 14, 10), pink)
    b.build()


def build_frog():
    green, pale, dark = mat('frog', 0x49c45a, 0.45), mat('frogBelly', 0xe9f7a8, 0.6), mat('frogDark', 0x2f8a3d, 0.55)
    p = Part('frogBody')
    p.add(sphere(0.5, 36, 22), green, xf((0, 0.42, 0), s=(1, 0.72, 1.12)))
    p.add(sphere(0.38, 28, 18), pale, xf((0, 0.34, 0.22), s=(1, 0.66, 0.85)))
    p.add(sphere(0.1, 16, 10), INK(), xf((0, 0.47, 0.5), s=(3.2, 0.14, 0.5)))
    for sx in (-1, 1):
        p.add(sphere(0.18, 22, 14), green, xf((sx * 0.22, 0.78, 0.18)))
        p.add(sphere(0.12, 20, 14), WHITE(), xf((sx * 0.22, 0.82, 0.27), s=(0.85, 1.05, 0.7)))
        p.add(sphere(0.06, 14, 10), INK(), xf((sx * 0.22, 0.82, 0.35), s=(0.9, 1.1, 0.5)))
        p.add(sphere(0.018, 8, 6), GLINT(), xf((sx * 0.2, 0.86, 0.37)))
        p.add(roundbox(0.2, 0.07, 0.2), dark, xf((sx * 0.27, 0.05, 0.38)))
        p.add(sphere(0.05, 10, 8), CHEEK(), xf((sx * 0.3, 0.55, 0.42), s=(1, 0.6, 0.4)))
    p.build()
    leg = Part('frogLeg')
    leg.add(sphere(0.22, 22, 14), dark, xf(s=(0.72, 0.62, 1.4)))
    leg.add(roundbox(0.18, 0.06, 0.3), dark, xf((0, -0.15, -0.12)))
    leg.build()


# ---------- collectibles ----------
def build_moon():
    Part('moon').add(crescent(), GOLD(), xf()).build()


def build_coin():
    p = Part('coin')
    prof = [(0, 0.045), (0.24, 0.045), (0.27, 0.03), (0.295, 0.058), (0.34, 0.05), (0.348, 0.0),
            (0.34, -0.05), (0.295, -0.058), (0.27, -0.03), (0.24, -0.045), (0, -0.045)]
    # Lathed around Y, then stood up so its faces point along Z like the old cylinder.
    p.add(lathe(prof, 40), GOLD(), xf(r=(math.pi / 2, 0, 0)))
    p.add(roundbox(0.08, 0.3, 0.12), mat('coinMark', 0xf5a800, 0.3, 0.6))
    p.build()


build_character()
build_hat()
build_goomba()
build_frog()
build_moon()
build_coin()

os.makedirs(os.path.dirname(OUT_GLB), exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=OUT_BLEND)
bpy.ops.export_scene.gltf(filepath=OUT_GLB, export_format='GLB', export_yup=True, export_apply=True,
                          export_animations=False, export_cameras=False, export_lights=False)
print('MODELS', [o.name for o in scene.objects], 'tris', sum(len(o.data.polygons) for o in scene.objects))
sys.stdout.flush()

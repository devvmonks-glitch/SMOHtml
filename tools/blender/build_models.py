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
def lid_cap(r, cut):
    """The top of a sphere above y = cut * r: used for eyelids."""
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=24, v_segments=16, radius=r)
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if v.co.y < cut * r], context='VERTS')
    return mesh_from_bm(bm)


def eye_shapes(p, at=(0, 0, 0), white_r=0.1, iris=True, rot=(0, 0, 0), lid=None, lid_cut=0.35):
    base = xf(at, rot)
    p.add(sphere(white_r, 24, 16), WHITE(), base @ xf(s=(0.8, 1.3, 0.55)))
    if iris:
        p.add(sphere(white_r * 0.62, 20, 14), IRIS(), base @ xf((0, -0.01, white_r * 0.36), s=(0.85, 1.22, 0.45)))
    p.add(sphere(white_r * 0.38, 16, 12), INK(), base @ xf((0, -0.012, white_r * 0.5), s=(0.85, 1.22, 0.45)))
    p.add(sphere(white_r * 0.15, 10, 8), GLINT(), base @ xf((white_r * 0.16, white_r * 0.34, white_r * 0.6)))
    if lid is not None:
        # A heavy upper lid gives the face a look instead of a blank stare.
        p.add(lid_cap(white_r * 1.07, lid_cut), lid, base @ xf((0, 0, 0.004), (0.12, 0, 0), s=(0.8, 1.3, 0.58)))


# ---------- the hero: one skinned body on a skeleton ----------
def bm_append(bm, me, m):
    tmp = bmesh.new()
    tmp.from_mesh(me)
    bmesh.ops.transform(tmp, matrix=m, verts=tmp.verts)
    out = bpy.data.meshes.new('tmp')
    tmp.to_mesh(out)
    tmp.free()
    bm.from_mesh(out)
    bpy.data.meshes.remove(out)


def evaluated(me, mods):
    """Run a mesh through a list of (type, settings) modifiers and return the result."""
    ob = bpy.data.objects.new('tmp', me)
    scene.collection.objects.link(ob)
    for kind, opts in mods:
        mod = ob.modifiers.new(kind, kind)
        for k, v in opts.items():
            setattr(mod, k, v)
    ev = ob.evaluated_get(bpy.context.evaluated_depsgraph_get())
    out = bpy.data.meshes.new_from_object(ev)
    bpy.data.objects.remove(ob)
    return out


def seg_dist(p, a, b):
    ab = b - a
    t = max(0.0, min(1.0, (p - a).dot(ab) / ab.length_squared))
    return (a + ab * t - p).length


AX = 0.34  # shoulder / arm x offset


def build_hero():
    """A single smooth body skinned to the same joints src/character.js animates."""
    V = Vector
    bones = [('hips', (0, .69, 0), (0, .82, 0), None), ('spine', (0, .69, 0), (0, 1.19, 0), 'hips'),
             ('neck', (0, 1.19, 0), (0, 1.5, 0), 'spine')]  # not 'head': that name is the head model
    for sx, n in ((1, 'L'), (-1, 'R')):
        # Arms sit a little wide of the torso so the skin only joins at the shoulder.
        bones += [('shoulder' + n, (sx * AX, 1.09, 0), (sx * AX, .86, 0), 'spine'),
                  ('elbow' + n, (sx * AX, .86, 0), (sx * AX, .64, 0), 'shoulder' + n),
                  ('thigh' + n, (sx * .13, .66, 0), (sx * .13, .38, 0), 'hips'),
                  ('knee' + n, (sx * .13, .38, 0), (sx * .13, .11, 0), 'thigh' + n),
                  ('foot' + n, (sx * .13, .11, 0), (sx * .13, .06, .2), 'knee' + n)]
    arm = bpy.data.armatures.new('heroRig')
    rig = bpy.data.objects.new('heroRig', arm)
    scene.collection.objects.link(rig)
    bpy.context.view_layer.objects.active = rig
    rig.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    for name, h, t, par in bones:
        b = arm.edit_bones.new(name)
        b.head = (TO_BLENDER @ V(h).to_4d()).to_3d()
        b.tail = (TO_BLENDER @ V(t).to_4d()).to_3d()
        b.use_connect = False
        if par:
            b.parent = arm.edit_bones[par]
    bpy.ops.object.mode_set(mode='OBJECT')

    # Skin: overlapping shapes fused by a voxel remesh, smoothed, then reduced.
    bm = bmesh.new()
    bm_append(bm, sphere(1, 32, 20), xf((0, .93, 0), s=(.235, .25, .21)))
    bm_append(bm, sphere(1, 32, 20), xf((0, .81, .02), s=(.24, .2, .225)))
    bm_append(bm, sphere(1, 32, 20), xf((0, .67, 0), s=(.23, .15, .2)))
    bm_append(bm, capsule(.085, .08), xf((0, 1.22, 0)))
    for sx in (1, -1):
        bm_append(bm, sphere(.09, 20, 14), xf((sx * (AX - .02), 1.065, 0)))
        bm_append(bm, capsule(.074, .2), xf((sx * AX, 1.07, 0)))
        bm_append(bm, capsule(.067, .16), xf((sx * AX, .86, 0)))
        bm_append(bm, capsule(.095, .25), xf((sx * .13, .66, 0)))
        bm_append(bm, capsule(.082, .24), xf((sx * .13, .39, 0)))
    raw = bpy.data.meshes.new('raw')
    bm.to_mesh(raw)
    bm.free()
    fused = evaluated(raw, [('REMESH', {'mode': 'VOXEL', 'voxel_size': 0.011}), ('SMOOTH', {'factor': 0.6, 'iterations': 4})])
    skin = evaluated(fused, [('DECIMATE', {'ratio': min(1.0, 7000 / max(1, len(fused.polygons)))})])

    bm = bmesh.new()
    bm.from_mesh(skin)
    # Clean cuts where the shorts start and end, so the colour edges are straight.
    for y in (0.775, 0.53):
        geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
        bmesh.ops.bisect_plane(bm, geom=geom, plane_co=(0, y, 0), plane_no=(0, 1, 0))
    mats = [SUIT(), SHORTS(), BELLY(), GLOVE(), SHOE(), SOLE(), mat('belt', 0x1f2d55, 0.5), GOLD()]
    for f in bm.faces:
        c = f.calc_center_median()
        f.material_index = 1 if (0.53 < c.y < 0.775 and abs(c.x) < 0.25) else 0
        f.smooth = True
    body_count = len(bm.verts)

    rigid = []  # (first vertex, last vertex, bone)

    def piece(me, material, m, bone):
        first = len(bm.verts)
        idx = mats.index(material)
        tmp = bmesh.new()
        tmp.from_mesh(me)
        bmesh.ops.transform(tmp, matrix=m, verts=tmp.verts)
        for f in tmp.faces:
            f.material_index = idx
            f.smooth = True
        out = bpy.data.meshes.new('tmp')
        tmp.to_mesh(out)
        tmp.free()
        bm.from_mesh(out)
        bpy.data.meshes.remove(out)
        bm.verts.ensure_lookup_table()
        rigid.append((first, len(bm.verts), bone))

    piece(sphere(.2, 28, 18), BELLY(), xf((0, .95, .115), s=(1, 1.1, .55)), 'spine')
    piece(ring(.12, 1.135, .03, 32, 10), GLOVE(), xf(s=(1, 1, .9)), 'spine')
    piece(ring(.25, .775, .03, 44, 10), mats[6], xf(s=(1, 1, .9)), 'hips')
    piece(roundbox(.1, .075, .04), GOLD(), xf((0, .775, .235)), 'hips')
    for sx, n in ((1, 'L'), (-1, 'R')):
        x = sx * AX
        piece(sphere(.105, 24, 16), GLOVE(), xf((x, .645, .01), s=(.92, 1.05, .86)), 'elbow' + n)
        piece(lathe([(.07, .745), (.095, .74), (.102, .7), (.082, .695)], 28, closed=True), GLOVE(), xf((x, 0, 0)), 'elbow' + n)
        piece(capsule(.036, .05, 14, 4), GLOVE(), xf((x - sx * .02, .71, .07), (-.9, 0, 0)), 'elbow' + n)
        for dx in (-.05, 0, .05):
            piece(sphere(.043, 14, 10), GLOVE(), xf((x + dx, .568, .045), s=(1, 1.2, 1)), 'elbow' + n)
        fx = sx * .13
        piece(roundbox(.24, .16, .34), SHOE(), xf((fx, .085, .06)), 'foot' + n)
        piece(roundbox(.23, .12, .14), SOLE(), xf((fx, .062, .19)), 'foot' + n)
        piece(roundbox(.27, .05, .4), SOLE(), xf((fx, .015, .06)), 'foot' + n)
        piece(roundbox(.12, .08, .06), SHOE(), xf((fx, .17, .03), (-.3, 0, 0)), 'foot' + n)
        for i in range(2):
            piece(roundbox(.11, .02, .025), SOLE(), xf((fx, .158 - i * .012, .085 + i * .05), (.45, 0, 0)), 'foot' + n)

    # Weights: each skin vertex blends its two nearest bones within its body region.
    segs = {'hips': ((0, .55, 0), (0, .78, 0)), 'spine': ((0, .8, 0), (0, 1.12, 0)), 'neck': ((0, 1.2, 0), (0, 1.3, 0))}
    for sx, n in ((1, 'L'), (-1, 'R')):
        segs['shoulder' + n] = ((sx * AX, 1.06, 0), (sx * AX, .88, 0))
        segs['elbow' + n] = ((sx * AX, .84, 0), (sx * AX, .62, 0))
        segs['thigh' + n] = ((sx * .13, .62, 0), (sx * .13, .4, 0))
        segs['knee' + n] = ((sx * .13, .36, 0), (sx * .13, .1, 0))
    segs = {k: (V(a), V(b)) for k, (a, b) in segs.items()}
    bm.verts.ensure_lookup_table()
    weights = []
    for i in range(body_count):
        p = bm.verts[i].co.copy()
        n = 'L' if p.x >= 0 else 'R'
        arm_d = min(seg_dist(p, *segs['shoulder' + n]), seg_dist(p, *segs['elbow' + n]))
        if arm_d < 0.105 and abs(p.x) > .25 and p.y > .6:
            cands = ['shoulder' + n, 'elbow' + n] + (['spine'] if p.y > 1.02 else [])
        elif p.y < .6:
            cands = ['thigh' + n, 'knee' + n, 'hips']
        else:
            cands = ['hips', 'spine', 'neck'] + (['shoulder' + n] if abs(p.x) > .22 and p.y > 1.03 else []) + \
                    (['thigh' + n] if p.y < .66 else [])
        ws = sorted(((1 / (seg_dist(p, *segs[c]) ** 2 + 1e-4) ** 3, c) for c in cands), reverse=True)[:2]
        tot = sum(w for w, _ in ws)
        weights.append([(c, w / tot) for w, c in ws])
    for first, last, bone in rigid:
        for i in range(first, last):
            weights.append([(bone, 1.0)])

    bmesh.ops.transform(bm, matrix=TO_BLENDER, verts=bm.verts)
    me = bpy.data.meshes.new('heroBody')
    bm.to_mesh(me)
    bm.free()
    for m in mats:
        me.materials.append(m)
    ob = bpy.data.objects.new('heroBody', me)
    scene.collection.objects.link(ob)
    groups = {name: ob.vertex_groups.new(name=name) for name, *_ in bones}
    for i, ws in enumerate(weights):
        for name, w in ws:
            groups[name].add([i], w, 'REPLACE')
    ob.parent = rig
    ob.modifiers.new('Armature', 'ARMATURE').object = rig


def build_character():
    build_hero()

    # Head, origin at the neck: a bean head with a pale muzzle. Eyes are separate so they can blink.
    h = Part('head')
    h.add(sphere(0.31, 36, 24), SUIT(), xf((0, 0.23, -0.01), s=(1, 0.98, 0.97)))
    h.add(sphere(0.17, 28, 18), BELLY(), xf((0, 0.12, 0.17), s=(1.3, 0.78, 0.8)))
    h.add(sphere(0.055, 18, 12), mat('nose', 0xff7a93, 0.45), xf((0, 0.165, 0.315), s=(1.15, 0.9, 0.9)))
    h.add(ring(0.05, 0, 0.013, 20, 8), mat('mouth', 0x8a2a3a, 0.6), xf((0, 0.085, 0.29), (1.35, 0, 0), s=(1.25, 1, 0.55)))
    for sx in (-1, 1):
        h.add(sphere(0.06, 14, 10), CHEEK(), xf((sx * 0.2, 0.12, 0.225), s=(1, 0.6, 0.4)))
        h.add(sphere(0.09, 16, 12), SUIT(), xf((sx * 0.3, 0.22, -0.02), s=(0.45, 0.72, 0.62)))
        h.add(roundbox(0.11, 0.024, 0.032, 2), SHORTS(), xf((sx * 0.125, 0.45, 0.225), (0, 0, -sx * 0.22)))
    for dx, a in ((-0.07, -0.5), (0, 0), (0.07, 0.5)):
        h.add(lathe([(0.05, 0), (0, 0.13)], 14), SHORTS(), xf((dx, 0.33, -0.27), (-1.1, 0, a)))
    h.build()

    e = Part('eye')
    eye_shapes(e, lid=SUIT())
    e.build()


def build_hat():
    """Cappy: a rounded top hat with a thick, upturned brim, a red band and heavy-lidded eyes."""
    p = Part('hat')
    p.add(lathe([(0, 0.47), (0.12, 0.466), (0.22, 0.44), (0.28, 0.375), (0.3, 0.27), (0.31, 0.15),
                 (0.322, 0.06), (0.4, 0.05), (0.46, 0.062), (0.5, 0.09), (0.522, 0.095), (0.528, 0.06),
                 (0.505, 0.02), (0.44, 0.0), (0.33, 0.0), (0, 0.015)], 48), HAT())
    p.add(lathe([(0.307, 0.06), (0.326, 0.064), (0.328, 0.145), (0.309, 0.15)], 48, closed=True), BAND())
    p.add(ring(0.327, 0.104, 0.006, 48, 6), mat('stitch', 0xffe9a8, 0.6))
    for sx in (-1, 1):
        eye_shapes(p, (sx * 0.1, 0.26, 0.262), 0.078, iris=False, rot=(0, sx * 0.3, 0), lid=HAT(), lid_cut=0.42)
    p.build()


# ---------- creatures ----------
def build_goomba():
    brown, tan, dark = mat('gBrown', 0x9b5a2f, 0.6), mat('gTan', 0xf1d2a0, 0.7), mat('gDark', 0x4b2a16, 0.6)
    under = mat('gUnder', 0x6e3c1c, 0.7)
    p = Part('goomba')
    p.add(lathe([(0, 0.06), (0.19, 0.08), (0.26, 0.18), (0.255, 0.32), (0.2, 0.42), (0, 0.44)], 28), tan)
    # A flared mushroom cap with a darker rim underneath.
    p.add(lathe([(0, 1.0), (0.22, 0.98), (0.4, 0.9), (0.52, 0.78), (0.58, 0.65), (0.592, 0.56), (0.57, 0.5),
                 (0.5, 0.465), (0.3, 0.46), (0, 0.46)], 44), brown)
    p.add(ring(0.5, 0.485, 0.045, 44, 8), under)
    p.add(sphere(0.42, 30, 18), tan, xf((0, 0.5, 0.12), s=(1.0, 0.45, 0.85)))
    for sx in (-1, 1):
        p.add(sphere(0.14, 22, 16), WHITE(), xf((sx * 0.16, 0.66, 0.52), (0, sx * 0.3, 0), s=(0.72, 1.15, 0.45)))
        p.add(sphere(0.07, 16, 12), INK(), xf((sx * 0.145, 0.635, 0.57), (0, sx * 0.3, 0), s=(0.85, 1.2, 0.45)))
        p.add(sphere(0.02, 8, 6), GLINT(), xf((sx * 0.13, 0.675, 0.59)))
        p.add(roundbox(0.25, 0.065, 0.07), INK(), xf((sx * 0.17, 0.83, 0.49), (0.35, 0, -sx * 0.42)))
        p.add(lathe([(0.045, 0.0), (0, -0.1)], 12), WHITE(), xf((sx * 0.12, 0.45, 0.47)))
    p.add(sphere(0.13, 18, 12), INK(), xf((0, 0.455, 0.455), s=(1.5, 0.38, 0.35)))
    p.build()
    Part('goombaFoot').add(roundbox(0.34, 0.18, 0.48), dark).build()
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
    p.add(ring(0.17, 0.47, 0.012, 30, 6), INK(), xf((0, 0, 0.36), s=(1.6, 1, 0.9)))
    for sx in (-1, 1):
        p.add(sphere(0.18, 22, 14), green, xf((sx * 0.22, 0.78, 0.18)))
        eye_shapes(p, (sx * 0.22, 0.82, 0.29), 0.12, iris=False, rot=(0, sx * 0.25, 0), lid=green, lid_cut=0.3)
        p.add(roundbox(0.2, 0.07, 0.2), dark, xf((sx * 0.27, 0.05, 0.38)))
        for dx in (-0.06, 0, 0.06):
            p.add(sphere(0.035, 10, 8), dark, xf((sx * 0.27 + dx, 0.04, 0.49)))
        p.add(sphere(0.05, 10, 8), CHEEK(), xf((sx * 0.3, 0.55, 0.42), s=(1, 0.6, 0.4)))
    p.build()
    leg = Part('frogLeg')
    leg.add(sphere(0.22, 22, 14), dark, xf(s=(0.72, 0.62, 1.4)))
    leg.add(roundbox(0.18, 0.06, 0.3), dark, xf((0, -0.15, -0.12)))
    for dx in (-0.06, 0, 0.06):
        leg.add(sphere(0.035, 10, 8), dark, xf((dx, -0.16, -0.28)))
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
print('MODELS', [o.name for o in scene.objects], 'tris', sum(len(o.data.polygons) for o in scene.objects if o.type == 'MESH'))
sys.stdout.flush()

import {
  Ce,
  Ct,
  D,
  Rt,
  S
} from "./chunk-IGCQYSSS.js";
import "./chunk-RWZP6UPE.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  inject,
  mergeProps,
  nextTick,
  normalizeProps,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  readonly,
  ref,
  renderList,
  renderSlot,
  shallowReactive,
  shallowRef,
  toRef,
  unref,
  useSlots,
  watch,
  watchEffect,
  withAsyncContext
} from "./chunk-LZPJ5JBW.js";
import {
  AmbientLight,
  AnimationClip,
  AnimationMixer,
  Bone,
  Box3,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  ClampToEdgeWrapping,
  Color,
  CubeReflectionMapping,
  CubeTextureLoader,
  Curve,
  CylinderGeometry,
  DataTextureLoader,
  DataUtils,
  DirectionalLight,
  DoubleSide,
  EquirectangularReflectionMapping,
  Euler,
  EventDispatcher,
  ExtrudeGeometry,
  FileLoader,
  Float32BufferAttribute,
  FloatType,
  FrontSide,
  Group,
  HalfFloatType,
  ImageBitmapLoader,
  InstancedMesh,
  InterleavedBuffer,
  InterleavedBufferAttribute,
  Interpolant,
  InterpolateDiscrete,
  InterpolateLinear,
  Line,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  LinearEncoding,
  LinearFilter,
  LinearMipmapLinearFilter,
  LinearMipmapNearestFilter,
  Loader,
  LoaderUtils,
  MOUSE,
  Material,
  MathUtils,
  Matrix3,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MirroredRepeatWrapping,
  NearestFilter,
  NearestMipmapLinearFilter,
  NearestMipmapNearestFilter,
  NumberKeyframeTrack,
  Object3D,
  OctahedronGeometry,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  PointsMaterial,
  PropertyBinding,
  QuadraticBezierCurve3,
  Quaternion,
  QuaternionKeyframeTrack,
  Raycaster,
  RepeatWrapping,
  SRGBColorSpace,
  ShapePath,
  Skeleton,
  SkinnedMesh,
  Sphere,
  SphereGeometry,
  Spherical,
  SpotLight,
  TOUCH,
  Texture,
  TextureLoader,
  TorusGeometry,
  TriangleFanDrawMode,
  TriangleStripDrawMode,
  TrianglesDrawMode,
  Uint16BufferAttribute,
  Vector2,
  Vector3,
  Vector4,
  VectorKeyframeTrack,
  sRGBEncoding
} from "./chunk-AQJLOSUF.js";
import "./chunk-4EOJPDL2.js";

// node_modules/.pnpm/@tresjs+cientos@2.0.0-rc.1_@tresjs+core@2.0.0-beta.10_three@0.151.3_vue@3.2.47/node_modules/@tresjs/cientos/dist/trescientos.js
var Wc = Object.defineProperty;
var Jc = (f, i, r) => i in f ? Wc(f, i, { enumerable: true, configurable: true, writable: true, value: r }) : f[i] = r;
var Qr = (f, i, r) => (Jc(f, typeof i != "symbol" ? i + "" : i, r), r);
function qu(f, i) {
  for (var r = 0; r < i.length; r++) {
    const s = i[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in f)) {
          const c = Object.getOwnPropertyDescriptor(s, o);
          c && Object.defineProperty(f, o, c.get ? c : {
            enumerable: true,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
function is(f) {
  return is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, is(f);
}
function Qu(f, i) {
  if (is(f) !== "object" || f === null)
    return f;
  var r = f[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(f, i || "default");
    if (is(s) !== "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(f);
}
function Zu(f) {
  var i = Qu(f, "string");
  return is(i) === "symbol" ? i : String(i);
}
function P(f, i, r) {
  return i = Zu(i), i in f ? Object.defineProperty(f, i, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : f[i] = r, f;
}
function ha(f, i) {
  if (i === TrianglesDrawMode)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), f;
  if (i === TriangleFanDrawMode || i === TriangleStripDrawMode) {
    let r = f.getIndex();
    if (r === null) {
      const p = [], h = f.getAttribute("position");
      if (h !== void 0) {
        for (let m = 0; m < h.count; m++)
          p.push(m);
        f.setIndex(p), r = f.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), f;
    }
    const s = r.count - 2, o = [];
    if (r)
      if (i === TriangleFanDrawMode)
        for (let p = 1; p <= s; p++)
          o.push(r.getX(0)), o.push(r.getX(p)), o.push(r.getX(p + 1));
      else
        for (let p = 0; p < s; p++)
          p % 2 === 0 ? (o.push(r.getX(p)), o.push(r.getX(p + 1)), o.push(r.getX(p + 2))) : (o.push(r.getX(p + 2)), o.push(r.getX(p + 1)), o.push(r.getX(p)));
    o.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const c = f.clone();
    return c.setIndex(o), c.clearGroups(), c;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", i), f;
}
var ft = Uint8Array;
var cn = Uint16Array;
var fo = Uint32Array;
var Ua = new ft([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var Ga = new ft([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var Wu = new ft([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var Ha = function(f, i) {
  for (var r = new cn(31), s = 0; s < 31; ++s)
    r[s] = i += 1 << f[s - 1];
  for (var o = new fo(r[30]), s = 1; s < 30; ++s)
    for (var c = r[s]; c < r[s + 1]; ++c)
      o[c] = c - r[s] << 5 | s;
  return [r, o];
};
var Ka = Ha(Ua, 2);
var $a = Ka[0];
var Ju = Ka[1];
$a[28] = 258, Ju[258] = 28;
var ep = Ha(Ga, 0);
var tp = ep[0];
var vo = new cn(32768);
for (Pe = 0; Pe < 32768; ++Pe) {
  nn = (Pe & 43690) >>> 1 | (Pe & 21845) << 1;
  nn = (nn & 52428) >>> 2 | (nn & 13107) << 2, nn = (nn & 61680) >>> 4 | (nn & 3855) << 4, vo[Pe] = ((nn & 65280) >>> 8 | (nn & 255) << 8) >>> 1;
}
var nn;
var Pe;
var Ji = function(f, i, r) {
  for (var s = f.length, o = 0, c = new cn(i); o < s; ++o)
    ++c[f[o] - 1];
  var p = new cn(i);
  for (o = 0; o < i; ++o)
    p[o] = p[o - 1] + c[o - 1] << 1;
  var h;
  if (r) {
    h = new cn(1 << i);
    var m = 15 - i;
    for (o = 0; o < s; ++o)
      if (f[o])
        for (var g = o << 4 | f[o], _ = i - f[o], w = p[f[o] - 1]++ << _, y = w | (1 << _) - 1; w <= y; ++w)
          h[vo[w] >>> m] = g;
  } else
    for (h = new cn(s), o = 0; o < s; ++o)
      f[o] && (h[o] = vo[p[f[o] - 1]++] >>> 15 - f[o]);
  return h;
};
var os = new ft(288);
for (Pe = 0; Pe < 144; ++Pe)
  os[Pe] = 8;
var Pe;
for (Pe = 144; Pe < 256; ++Pe)
  os[Pe] = 9;
var Pe;
for (Pe = 256; Pe < 280; ++Pe)
  os[Pe] = 7;
var Pe;
for (Pe = 280; Pe < 288; ++Pe)
  os[Pe] = 8;
var Pe;
var Xa = new ft(32);
for (Pe = 0; Pe < 32; ++Pe)
  Xa[Pe] = 5;
var Pe;
var np = Ji(os, 9, 1);
var ip = Ji(Xa, 5, 1);
var eo = function(f) {
  for (var i = f[0], r = 1; r < f.length; ++r)
    f[r] > i && (i = f[r]);
  return i;
};
var xt = function(f, i, r) {
  var s = i / 8 | 0;
  return (f[s] | f[s + 1] << 8) >> (i & 7) & r;
};
var to = function(f, i) {
  var r = i / 8 | 0;
  return (f[r] | f[r + 1] << 8 | f[r + 2] << 16) >> (i & 7);
};
var sp = function(f) {
  return (f / 8 | 0) + (f & 7 && 1);
};
var rp = function(f, i, r) {
  (i == null || i < 0) && (i = 0), (r == null || r > f.length) && (r = f.length);
  var s = new (f instanceof cn ? cn : f instanceof fo ? fo : ft)(r - i);
  return s.set(f.subarray(i, r)), s;
};
var op = function(f, i, r) {
  var s = f.length;
  if (!s || r && !r.l && s < 5)
    return i || new ft(0);
  var o = !i || r, c = !r || r.i;
  r || (r = {}), i || (i = new ft(s * 3));
  var p = function(Ne) {
    var je = i.length;
    if (Ne > je) {
      var xe = new ft(Math.max(je * 2, Ne));
      xe.set(i), i = xe;
    }
  }, h = r.f || 0, m = r.p || 0, g = r.b || 0, _ = r.l, w = r.d, y = r.m, C = r.n, L = s * 8;
  do {
    if (!_) {
      r.f = h = xt(f, m, 1);
      var S2 = xt(f, m + 1, 3);
      if (m += 3, S2)
        if (S2 == 1)
          _ = np, w = ip, y = 9, C = 5;
        else if (S2 == 2) {
          var I = xt(f, m, 31) + 257, D2 = xt(f, m + 10, 15) + 4, Y = I + xt(f, m + 5, 31) + 1;
          m += 14;
          for (var G = new ft(Y), F = new ft(19), B = 0; B < D2; ++B)
            F[Wu[B]] = xt(f, m + B * 3, 7);
          m += D2 * 3;
          for (var H = eo(F), K = (1 << H) - 1, q = Ji(F, H, 1), B = 0; B < Y; ) {
            var pe = q[xt(f, m, K)];
            m += pe & 15;
            var R = pe >>> 4;
            if (R < 16)
              G[B++] = R;
            else {
              var _e = 0, ce = 0;
              for (R == 16 ? (ce = 3 + xt(f, m, 3), m += 2, _e = G[B - 1]) : R == 17 ? (ce = 3 + xt(f, m, 7), m += 3) : R == 18 && (ce = 11 + xt(f, m, 127), m += 7); ce--; )
                G[B++] = _e;
            }
          }
          var me = G.subarray(0, I), he = G.subarray(I);
          y = eo(me), C = eo(he), _ = Ji(me, y, 1), w = Ji(he, C, 1);
        } else
          throw "invalid block type";
      else {
        var R = sp(m) + 4, O = f[R - 4] | f[R - 3] << 8, N = R + O;
        if (N > s) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        o && p(g + O), i.set(f.subarray(R, N), g), r.b = g += O, r.p = m = N * 8;
        continue;
      }
      if (m > L) {
        if (c)
          throw "unexpected EOF";
        break;
      }
    }
    o && p(g + 131072);
    for (var ee = (1 << y) - 1, X = (1 << C) - 1, Me = m; ; Me = m) {
      var _e = _[to(f, m) & ee], fe = _e >>> 4;
      if (m += _e & 15, m > L) {
        if (c)
          throw "unexpected EOF";
        break;
      }
      if (!_e)
        throw "invalid length/literal";
      if (fe < 256)
        i[g++] = fe;
      else if (fe == 256) {
        Me = m, _ = null;
        break;
      } else {
        var oe = fe - 254;
        if (fe > 264) {
          var B = fe - 257, ne = Ua[B];
          oe = xt(f, m, (1 << ne) - 1) + $a[B], m += ne;
        }
        var ge = w[to(f, m) & X], A = ge >>> 4;
        if (!ge)
          throw "invalid distance";
        m += ge & 15;
        var he = tp[A];
        if (A > 3) {
          var ne = Ga[A];
          he += to(f, m) & (1 << ne) - 1, m += ne;
        }
        if (m > L) {
          if (c)
            throw "unexpected EOF";
          break;
        }
        o && p(g + 131072);
        for (var ae = g + oe; g < ae; g += 4)
          i[g] = i[g - he], i[g + 1] = i[g + 1 - he], i[g + 2] = i[g + 2 - he], i[g + 3] = i[g + 3 - he];
        g = ae;
      }
    }
    r.l = _, r.p = Me, r.b = g, _ && (h = 1, r.m = y, r.d = w, r.n = C);
  } while (!h);
  return g == i.length ? i : rp(i, 0, g);
};
var ap = new ft(0);
var lp = function(f) {
  if ((f[0] & 15) != 8 || f[0] >>> 4 > 7 || (f[0] << 8 | f[1]) % 31)
    throw "invalid zlib data";
  if (f[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function cp(f, i) {
  return op((lp(f), f.subarray(2, -4)), i);
}
var up = typeof TextDecoder < "u" && new TextDecoder();
var pp = 0;
try {
  up.decode(ap, { stream: true }), pp = 1;
} catch {
}
var hp = class extends Object3D {
  // events
  constructor(i, r) {
    super(), P(this, "isTransformControls", true), P(this, "visible", false), P(this, "domElement", void 0), P(this, "raycaster", new Raycaster()), P(this, "gizmo", void 0), P(this, "plane", void 0), P(this, "tempVector", new Vector3()), P(this, "tempVector2", new Vector3()), P(this, "tempQuaternion", new Quaternion()), P(this, "unit", {
      X: new Vector3(1, 0, 0),
      Y: new Vector3(0, 1, 0),
      Z: new Vector3(0, 0, 1)
    }), P(this, "pointStart", new Vector3()), P(this, "pointEnd", new Vector3()), P(this, "offset", new Vector3()), P(this, "rotationAxis", new Vector3()), P(this, "startNorm", new Vector3()), P(this, "endNorm", new Vector3()), P(this, "rotationAngle", 0), P(this, "cameraPosition", new Vector3()), P(this, "cameraQuaternion", new Quaternion()), P(this, "cameraScale", new Vector3()), P(this, "parentPosition", new Vector3()), P(this, "parentQuaternion", new Quaternion()), P(this, "parentQuaternionInv", new Quaternion()), P(this, "parentScale", new Vector3()), P(this, "worldPositionStart", new Vector3()), P(this, "worldQuaternionStart", new Quaternion()), P(this, "worldScaleStart", new Vector3()), P(this, "worldPosition", new Vector3()), P(this, "worldQuaternion", new Quaternion()), P(this, "worldQuaternionInv", new Quaternion()), P(this, "worldScale", new Vector3()), P(this, "eye", new Vector3()), P(this, "positionStart", new Vector3()), P(this, "quaternionStart", new Quaternion()), P(this, "scaleStart", new Vector3()), P(this, "camera", void 0), P(this, "object", void 0), P(this, "enabled", true), P(this, "axis", null), P(this, "mode", "translate"), P(this, "translationSnap", null), P(this, "rotationSnap", null), P(this, "scaleSnap", null), P(this, "space", "world"), P(this, "size", 1), P(this, "dragging", false), P(this, "showX", true), P(this, "showY", true), P(this, "showZ", true), P(this, "changeEvent", {
      type: "change"
    }), P(this, "mouseDownEvent", {
      type: "mouseDown",
      mode: this.mode
    }), P(this, "mouseUpEvent", {
      type: "mouseUp",
      mode: this.mode
    }), P(this, "objectChangeEvent", {
      type: "objectChange"
    }), P(this, "intersectObjectWithRay", (o, c, p) => {
      const h = c.intersectObject(o, true);
      for (let m = 0; m < h.length; m++)
        if (h[m].object.visible || p)
          return h[m];
      return false;
    }), P(this, "attach", (o) => (this.object = o, this.visible = true, this)), P(this, "detach", () => (this.object = void 0, this.visible = false, this.axis = null, this)), P(this, "reset", () => this.enabled ? (this.dragging && this.object !== void 0 && (this.object.position.copy(this.positionStart), this.object.quaternion.copy(this.quaternionStart), this.object.scale.copy(this.scaleStart), this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent), this.pointStart.copy(this.pointEnd)), this) : this), P(this, "updateMatrixWorld", () => {
      this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale), this.parentQuaternionInv.copy(this.parentQuaternion).invert(), this.worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld();
    }), P(this, "pointerHover", (o) => {
      if (this.object === void 0 || this.dragging === true)
        return;
      this.raycaster.setFromCamera(o, this.camera);
      const c = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
      c ? this.axis = c.object.name : this.axis = null;
    }), P(this, "pointerDown", (o) => {
      if (!(this.object === void 0 || this.dragging === true || o.button !== 0) && this.axis !== null) {
        this.raycaster.setFromCamera(o, this.camera);
        const c = this.intersectObjectWithRay(this.plane, this.raycaster, true);
        if (c) {
          let p = this.space;
          if (this.mode === "scale" ? p = "local" : (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") && (p = "world"), p === "local" && this.mode === "rotate") {
            const h = this.rotationSnap;
            this.axis === "X" && h && (this.object.rotation.x = Math.round(this.object.rotation.x / h) * h), this.axis === "Y" && h && (this.object.rotation.y = Math.round(this.object.rotation.y / h) * h), this.axis === "Z" && h && (this.object.rotation.z = Math.round(this.object.rotation.z / h) * h);
          }
          this.object.updateMatrixWorld(), this.object.parent && this.object.parent.updateMatrixWorld(), this.positionStart.copy(this.object.position), this.quaternionStart.copy(this.object.quaternion), this.scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart), this.pointStart.copy(c.point).sub(this.worldPositionStart);
        }
        this.dragging = true, this.mouseDownEvent.mode = this.mode, this.dispatchEvent(this.mouseDownEvent);
      }
    }), P(this, "pointerMove", (o) => {
      const c = this.axis, p = this.mode, h = this.object;
      let m = this.space;
      if (p === "scale" ? m = "local" : (c === "E" || c === "XYZE" || c === "XYZ") && (m = "world"), h === void 0 || c === null || this.dragging === false || o.button !== -1)
        return;
      this.raycaster.setFromCamera(o, this.camera);
      const g = this.intersectObjectWithRay(this.plane, this.raycaster, true);
      if (g) {
        if (this.pointEnd.copy(g.point).sub(this.worldPositionStart), p === "translate")
          this.offset.copy(this.pointEnd).sub(this.pointStart), m === "local" && c !== "XYZ" && this.offset.applyQuaternion(this.worldQuaternionInv), c.indexOf("X") === -1 && (this.offset.x = 0), c.indexOf("Y") === -1 && (this.offset.y = 0), c.indexOf("Z") === -1 && (this.offset.z = 0), m === "local" && c !== "XYZ" ? this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale) : this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale), h.position.copy(this.offset).add(this.positionStart), this.translationSnap && (m === "local" && (h.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()), c.search("X") !== -1 && (h.position.x = Math.round(h.position.x / this.translationSnap) * this.translationSnap), c.search("Y") !== -1 && (h.position.y = Math.round(h.position.y / this.translationSnap) * this.translationSnap), c.search("Z") !== -1 && (h.position.z = Math.round(h.position.z / this.translationSnap) * this.translationSnap), h.position.applyQuaternion(this.quaternionStart)), m === "world" && (h.parent && h.position.add(this.tempVector.setFromMatrixPosition(h.parent.matrixWorld)), c.search("X") !== -1 && (h.position.x = Math.round(h.position.x / this.translationSnap) * this.translationSnap), c.search("Y") !== -1 && (h.position.y = Math.round(h.position.y / this.translationSnap) * this.translationSnap), c.search("Z") !== -1 && (h.position.z = Math.round(h.position.z / this.translationSnap) * this.translationSnap), h.parent && h.position.sub(this.tempVector.setFromMatrixPosition(h.parent.matrixWorld))));
        else if (p === "scale") {
          if (c.search("XYZ") !== -1) {
            let _ = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (_ *= -1), this.tempVector2.set(_, _, _);
          } else
            this.tempVector.copy(this.pointStart), this.tempVector2.copy(this.pointEnd), this.tempVector.applyQuaternion(this.worldQuaternionInv), this.tempVector2.applyQuaternion(this.worldQuaternionInv), this.tempVector2.divide(this.tempVector), c.search("X") === -1 && (this.tempVector2.x = 1), c.search("Y") === -1 && (this.tempVector2.y = 1), c.search("Z") === -1 && (this.tempVector2.z = 1);
          h.scale.copy(this.scaleStart).multiply(this.tempVector2), this.scaleSnap && this.object && (c.search("X") !== -1 && (this.object.scale.x = Math.round(h.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), c.search("Y") !== -1 && (h.scale.y = Math.round(h.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), c.search("Z") !== -1 && (h.scale.z = Math.round(h.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
        } else if (p === "rotate") {
          this.offset.copy(this.pointEnd).sub(this.pointStart);
          const _ = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
          c === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this.startNorm.copy(this.pointStart).normalize(), this.endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1) : c === "XYZE" ? (this.rotationAxis.copy(this.offset).cross(this.eye).normalize(), this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * _) : (c === "X" || c === "Y" || c === "Z") && (this.rotationAxis.copy(this.unit[c]), this.tempVector.copy(this.unit[c]), m === "local" && this.tempVector.applyQuaternion(this.worldQuaternion), this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * _), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), m === "local" && c !== "E" && c !== "XYZE" ? (h.quaternion.copy(this.quaternionStart), h.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this.parentQuaternionInv), h.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), h.quaternion.multiply(this.quaternionStart).normalize());
        }
        this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent);
      }
    }), P(this, "pointerUp", (o) => {
      o.button === 0 && (this.dragging && this.axis !== null && (this.mouseUpEvent.mode = this.mode, this.dispatchEvent(this.mouseUpEvent)), this.dragging = false, this.axis = null);
    }), P(this, "getPointer", (o) => {
      var c;
      if (this.domElement && (c = this.domElement.ownerDocument) !== null && c !== void 0 && c.pointerLockElement)
        return {
          x: 0,
          y: 0,
          button: o.button
        };
      {
        var p;
        const h = o.changedTouches ? o.changedTouches[0] : o, m = (p = this.domElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
        return {
          x: (h.clientX - m.left) / m.width * 2 - 1,
          y: -(h.clientY - m.top) / m.height * 2 + 1,
          button: o.button
        };
      }
    }), P(this, "onPointerHover", (o) => {
      if (this.enabled)
        switch (o.pointerType) {
          case "mouse":
          case "pen":
            this.pointerHover(this.getPointer(o));
            break;
        }
    }), P(this, "onPointerDown", (o) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "none", this.domElement.ownerDocument.addEventListener("pointermove", this.onPointerMove), this.pointerHover(this.getPointer(o)), this.pointerDown(this.getPointer(o)));
    }), P(this, "onPointerMove", (o) => {
      this.enabled && this.pointerMove(this.getPointer(o));
    }), P(this, "onPointerUp", (o) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "", this.domElement.ownerDocument.removeEventListener("pointermove", this.onPointerMove), this.pointerUp(this.getPointer(o)));
    }), P(this, "getMode", () => this.mode), P(this, "setMode", (o) => {
      this.mode = o;
    }), P(this, "setTranslationSnap", (o) => {
      this.translationSnap = o;
    }), P(this, "setRotationSnap", (o) => {
      this.rotationSnap = o;
    }), P(this, "setScaleSnap", (o) => {
      this.scaleSnap = o;
    }), P(this, "setSize", (o) => {
      this.size = o;
    }), P(this, "setSpace", (o) => {
      this.space = o;
    }), P(this, "update", () => {
      console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
    }), P(this, "connect", (o) => {
      o === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.domElement = o, this.domElement.addEventListener("pointerdown", this.onPointerDown), this.domElement.addEventListener("pointermove", this.onPointerHover), this.domElement.ownerDocument.addEventListener("pointerup", this.onPointerUp);
    }), P(this, "dispose", () => {
      var o, c, p, h, m, g;
      (o = this.domElement) === null || o === void 0 || o.removeEventListener("pointerdown", this.onPointerDown), (c = this.domElement) === null || c === void 0 || c.removeEventListener("pointermove", this.onPointerHover), (p = this.domElement) === null || p === void 0 || (h = p.ownerDocument) === null || h === void 0 || h.removeEventListener("pointermove", this.onPointerMove), (m = this.domElement) === null || m === void 0 || (g = m.ownerDocument) === null || g === void 0 || g.removeEventListener("pointerup", this.onPointerUp), this.traverse((_) => {
        const w = _;
        w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
      });
    }), this.domElement = r, this.camera = i, this.gizmo = new dp(), this.add(this.gizmo), this.plane = new mp(), this.add(this.plane);
    const s = (o, c) => {
      let p = c;
      Object.defineProperty(this, o, {
        get: function() {
          return p !== void 0 ? p : c;
        },
        set: function(h) {
          p !== h && (p = h, this.plane[o] = h, this.gizmo[o] = h, this.dispatchEvent({
            type: o + "-changed",
            value: h
          }), this.dispatchEvent(this.changeEvent));
        }
      }), this[o] = c, this.plane[o] = c, this.gizmo[o] = c;
    };
    s("camera", this.camera), s("object", this.object), s("enabled", this.enabled), s("axis", this.axis), s("mode", this.mode), s("translationSnap", this.translationSnap), s("rotationSnap", this.rotationSnap), s("scaleSnap", this.scaleSnap), s("space", this.space), s("size", this.size), s("dragging", this.dragging), s("showX", this.showX), s("showY", this.showY), s("showZ", this.showZ), s("worldPosition", this.worldPosition), s("worldPositionStart", this.worldPositionStart), s("worldQuaternion", this.worldQuaternion), s("worldQuaternionStart", this.worldQuaternionStart), s("cameraPosition", this.cameraPosition), s("cameraQuaternion", this.cameraQuaternion), s("pointStart", this.pointStart), s("pointEnd", this.pointEnd), s("rotationAxis", this.rotationAxis), s("rotationAngle", this.rotationAngle), s("eye", this.eye), r !== void 0 && this.connect(r);
  }
};
var dp = class extends Object3D {
  // these are set from parent class TransformControls
  constructor() {
    super(), P(this, "isTransformControlsGizmo", true), P(this, "type", "TransformControlsGizmo"), P(this, "tempVector", new Vector3(0, 0, 0)), P(this, "tempEuler", new Euler()), P(this, "alignVector", new Vector3(0, 1, 0)), P(this, "zeroVector", new Vector3(0, 0, 0)), P(this, "lookAtMatrix", new Matrix4()), P(this, "tempQuaternion", new Quaternion()), P(this, "tempQuaternion2", new Quaternion()), P(this, "identityQuaternion", new Quaternion()), P(this, "unitX", new Vector3(1, 0, 0)), P(this, "unitY", new Vector3(0, 1, 0)), P(this, "unitZ", new Vector3(0, 0, 1)), P(this, "gizmo", void 0), P(this, "picker", void 0), P(this, "helper", void 0), P(this, "rotationAxis", new Vector3()), P(this, "cameraPosition", new Vector3()), P(this, "worldPositionStart", new Vector3()), P(this, "worldQuaternionStart", new Quaternion()), P(this, "worldPosition", new Vector3()), P(this, "worldQuaternion", new Quaternion()), P(this, "eye", new Vector3()), P(this, "camera", null), P(this, "enabled", true), P(this, "axis", null), P(this, "mode", "translate"), P(this, "space", "world"), P(this, "size", 1), P(this, "dragging", false), P(this, "showX", true), P(this, "showY", true), P(this, "showZ", true), P(this, "updateMatrixWorld", () => {
      let fe = this.space;
      this.mode === "scale" && (fe = "local");
      const oe = fe === "local" ? this.worldQuaternion : this.identityQuaternion;
      this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
      let ne = [];
      ne = ne.concat(this.picker[this.mode].children), ne = ne.concat(this.gizmo[this.mode].children), ne = ne.concat(this.helper[this.mode].children);
      for (let ge = 0; ge < ne.length; ge++) {
        const A = ne[ge];
        A.visible = true, A.rotation.set(0, 0, 0), A.position.copy(this.worldPosition);
        let ae;
        if (this.camera.isOrthographicCamera ? ae = (this.camera.top - this.camera.bottom) / this.camera.zoom : ae = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), A.scale.set(1, 1, 1).multiplyScalar(ae * this.size / 7), A.tag === "helper") {
          A.visible = false, A.name === "AXIS" ? (A.position.copy(this.worldPositionStart), A.visible = !!this.axis, this.axis === "X" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0)), A.quaternion.copy(oe).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(oe).dot(this.eye)) > 0.9 && (A.visible = false)), this.axis === "Y" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2)), A.quaternion.copy(oe).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(oe).dot(this.eye)) > 0.9 && (A.visible = false)), this.axis === "Z" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), A.quaternion.copy(oe).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(oe).dot(this.eye)) > 0.9 && (A.visible = false)), this.axis === "XYZE" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), this.alignVector.copy(this.rotationAxis), A.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY)), A.quaternion.multiply(this.tempQuaternion), A.visible = this.dragging), this.axis === "E" && (A.visible = false)) : A.name === "START" ? (A.position.copy(this.worldPositionStart), A.visible = this.dragging) : A.name === "END" ? (A.position.copy(this.worldPosition), A.visible = this.dragging) : A.name === "DELTA" ? (A.position.copy(this.worldPositionStart), A.quaternion.copy(this.worldQuaternionStart), this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()), A.scale.copy(this.tempVector), A.visible = this.dragging) : (A.quaternion.copy(oe), this.dragging ? A.position.copy(this.worldPositionStart) : A.position.copy(this.worldPosition), this.axis && (A.visible = this.axis.search(A.name) !== -1));
          continue;
        }
        A.quaternion.copy(oe), this.mode === "translate" || this.mode === "scale" ? ((A.name === "X" || A.name === "XYZX") && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(oe).dot(this.eye)) > 0.99 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), (A.name === "Y" || A.name === "XYZY") && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(oe).dot(this.eye)) > 0.99 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), (A.name === "Z" || A.name === "XYZZ") && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(oe).dot(this.eye)) > 0.99 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), A.name === "XY" && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(oe).dot(this.eye)) < 0.2 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), A.name === "YZ" && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(oe).dot(this.eye)) < 0.2 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), A.name === "XZ" && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(oe).dot(this.eye)) < 0.2 && (A.scale.set(1e-10, 1e-10, 1e-10), A.visible = false), A.name.search("X") !== -1 && (this.alignVector.copy(this.unitX).applyQuaternion(oe).dot(this.eye) < 0 ? A.tag === "fwd" ? A.visible = false : A.scale.x *= -1 : A.tag === "bwd" && (A.visible = false)), A.name.search("Y") !== -1 && (this.alignVector.copy(this.unitY).applyQuaternion(oe).dot(this.eye) < 0 ? A.tag === "fwd" ? A.visible = false : A.scale.y *= -1 : A.tag === "bwd" && (A.visible = false)), A.name.search("Z") !== -1 && (this.alignVector.copy(this.unitZ).applyQuaternion(oe).dot(this.eye) < 0 ? A.tag === "fwd" ? A.visible = false : A.scale.z *= -1 : A.tag === "bwd" && (A.visible = false))) : this.mode === "rotate" && (this.tempQuaternion2.copy(oe), this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(oe).invert()), A.name.search("E") !== -1 && A.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY)), A.name === "X" && (this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), A.quaternion.copy(this.tempQuaternion)), A.name === "Y" && (this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), A.quaternion.copy(this.tempQuaternion)), A.name === "Z" && (this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), A.quaternion.copy(this.tempQuaternion))), A.visible = A.visible && (A.name.indexOf("X") === -1 || this.showX), A.visible = A.visible && (A.name.indexOf("Y") === -1 || this.showY), A.visible = A.visible && (A.name.indexOf("Z") === -1 || this.showZ), A.visible = A.visible && (A.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), A.material.tempOpacity = A.material.tempOpacity || A.material.opacity, A.material.tempColor = A.material.tempColor || A.material.color.clone(), A.material.color.copy(A.material.tempColor), A.material.opacity = A.material.tempOpacity, this.enabled ? this.axis && (A.name === this.axis ? (A.material.opacity = 1, A.material.color.lerp(new Color(1, 1, 1), 0.5)) : this.axis.split("").some(function(Ne) {
          return A.name === Ne;
        }) ? (A.material.opacity = 1, A.material.color.lerp(new Color(1, 1, 1), 0.5)) : (A.material.opacity *= 0.25, A.material.color.lerp(new Color(1, 1, 1), 0.5))) : (A.material.opacity *= 0.5, A.material.color.lerp(new Color(1, 1, 1), 0.5));
      }
      super.updateMatrixWorld();
    });
    const i = new MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      side: DoubleSide,
      fog: false,
      toneMapped: false
    }), r = new LineBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      linewidth: 1,
      fog: false,
      toneMapped: false
    }), s = i.clone();
    s.opacity = 0.15;
    const o = i.clone();
    o.opacity = 0.33;
    const c = i.clone();
    c.color.set(16711680);
    const p = i.clone();
    p.color.set(65280);
    const h = i.clone();
    h.color.set(255);
    const m = i.clone();
    m.opacity = 0.25;
    const g = m.clone();
    g.color.set(16776960);
    const _ = m.clone();
    _.color.set(65535);
    const w = m.clone();
    w.color.set(16711935), i.clone().color.set(16776960);
    const C = r.clone();
    C.color.set(16711680);
    const L = r.clone();
    L.color.set(65280);
    const S2 = r.clone();
    S2.color.set(255);
    const R = r.clone();
    R.color.set(65535);
    const O = r.clone();
    O.color.set(16711935);
    const N = r.clone();
    N.color.set(16776960);
    const I = r.clone();
    I.color.set(7895160);
    const D2 = N.clone();
    D2.opacity = 0.25;
    const Y = new CylinderGeometry(0, 0.05, 0.2, 12, 1, false), G = new BoxGeometry(0.125, 0.125, 0.125), F = new BufferGeometry();
    F.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    const B = (fe, oe) => {
      const ne = new BufferGeometry(), ge = [];
      for (let A = 0; A <= 64 * oe; ++A)
        ge.push(0, Math.cos(A / 32 * Math.PI) * fe, Math.sin(A / 32 * Math.PI) * fe);
      return ne.setAttribute("position", new Float32BufferAttribute(ge, 3)), ne;
    }, H = () => {
      const fe = new BufferGeometry();
      return fe.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3)), fe;
    }, K = {
      X: [[new Mesh(Y, c), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"], [new Mesh(Y, c), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"], [new Line(F, C)]],
      Y: [[new Mesh(Y, p), [0, 1, 0], null, null, "fwd"], [new Mesh(Y, p), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"], [new Line(F, L), null, [0, 0, Math.PI / 2]]],
      Z: [[new Mesh(Y, h), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"], [new Mesh(Y, h), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"], [new Line(F, S2), null, [0, -Math.PI / 2, 0]]],
      XYZ: [[new Mesh(new OctahedronGeometry(0.1, 0), m.clone()), [0, 0, 0], [0, 0, 0]]],
      XY: [[new Mesh(new PlaneGeometry(0.295, 0.295), g.clone()), [0.15, 0.15, 0]], [new Line(F, N), [0.18, 0.3, 0], null, [0.125, 1, 1]], [new Line(F, N), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]],
      YZ: [[new Mesh(new PlaneGeometry(0.295, 0.295), _.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]], [new Line(F, R), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new Line(F, R), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XZ: [[new Mesh(new PlaneGeometry(0.295, 0.295), w.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]], [new Line(F, O), [0.18, 0, 0.3], null, [0.125, 1, 1]], [new Line(F, O), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]]
    }, q = {
      X: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), s), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), s), [0, 0.6, 0]]],
      Z: [[new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), s), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new Mesh(new OctahedronGeometry(0.2, 0), s)]],
      XY: [[new Mesh(new PlaneGeometry(0.4, 0.4), s), [0.2, 0.2, 0]]],
      YZ: [[new Mesh(new PlaneGeometry(0.4, 0.4), s), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
      XZ: [[new Mesh(new PlaneGeometry(0.4, 0.4), s), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
    }, pe = {
      START: [[new Mesh(new OctahedronGeometry(0.01, 2), o), null, null, null, "helper"]],
      END: [[new Mesh(new OctahedronGeometry(0.01, 2), o), null, null, null, "helper"]],
      DELTA: [[new Line(H(), o), null, null, null, "helper"]],
      X: [[new Line(F, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new Line(F, o.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new Line(F, o.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    }, _e = {
      X: [[new Line(B(1, 0.5), C)], [new Mesh(new OctahedronGeometry(0.04, 0), c), [0, 0, 0.99], null, [1, 3, 1]]],
      Y: [[new Line(B(1, 0.5), L), null, [0, 0, -Math.PI / 2]], [new Mesh(new OctahedronGeometry(0.04, 0), p), [0, 0, 0.99], null, [3, 1, 1]]],
      Z: [[new Line(B(1, 0.5), S2), null, [0, Math.PI / 2, 0]], [new Mesh(new OctahedronGeometry(0.04, 0), h), [0.99, 0, 0], null, [1, 3, 1]]],
      E: [[new Line(B(1.25, 1), D2), null, [0, Math.PI / 2, 0]], [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), D2), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 1e-3]], [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), D2), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 1e-3]], [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), D2), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 1e-3]], [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), D2), [0, 1.17, 0], [0, 0, 0], [1, 1, 1e-3]]],
      XYZE: [[new Line(B(1, 1), I), null, [0, Math.PI / 2, 0]]]
    }, ce = {
      AXIS: [[new Line(F, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]]
    }, me = {
      X: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), s), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
      Y: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), s), [0, 0, 0], [Math.PI / 2, 0, 0]]],
      Z: [[new Mesh(new TorusGeometry(1, 0.1, 4, 24), s), [0, 0, 0], [0, 0, -Math.PI / 2]]],
      E: [[new Mesh(new TorusGeometry(1.25, 0.1, 2, 24), s)]],
      XYZE: [[new Mesh(new SphereGeometry(0.7, 10, 8), s)]]
    }, he = {
      X: [[new Mesh(G, c), [0.8, 0, 0], [0, 0, -Math.PI / 2]], [new Line(F, C), null, null, [0.8, 1, 1]]],
      Y: [[new Mesh(G, p), [0, 0.8, 0]], [new Line(F, L), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]],
      Z: [[new Mesh(G, h), [0, 0, 0.8], [Math.PI / 2, 0, 0]], [new Line(F, S2), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]],
      XY: [[new Mesh(G, g), [0.85, 0.85, 0], null, [2, 2, 0.2]], [new Line(F, N), [0.855, 0.98, 0], null, [0.125, 1, 1]], [new Line(F, N), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]],
      YZ: [[new Mesh(G, _), [0, 0.85, 0.85], null, [0.2, 2, 2]], [new Line(F, R), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new Line(F, R), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XZ: [[new Mesh(G, w), [0.85, 0, 0.85], null, [2, 0.2, 2]], [new Line(F, O), [0.855, 0, 0.98], null, [0.125, 1, 1]], [new Line(F, O), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XYZX: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), m.clone()), [1.1, 0, 0]]],
      XYZY: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), m.clone()), [0, 1.1, 0]]],
      XYZZ: [[new Mesh(new BoxGeometry(0.125, 0.125, 0.125), m.clone()), [0, 0, 1.1]]]
    }, ee = {
      X: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), s), [0.5, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), s), [0, 0.5, 0]]],
      Z: [[new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), s), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
      XY: [[new Mesh(G, s), [0.85, 0.85, 0], null, [3, 3, 0.2]]],
      YZ: [[new Mesh(G, s), [0, 0.85, 0.85], null, [0.2, 3, 3]]],
      XZ: [[new Mesh(G, s), [0.85, 0, 0.85], null, [3, 0.2, 3]]],
      XYZX: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), s), [1.1, 0, 0]]],
      XYZY: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), s), [0, 1.1, 0]]],
      XYZZ: [[new Mesh(new BoxGeometry(0.2, 0.2, 0.2), s), [0, 0, 1.1]]]
    }, X = {
      X: [[new Line(F, o.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new Line(F, o.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new Line(F, o.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    }, Me = (fe) => {
      const oe = new Object3D();
      for (let ne in fe)
        for (let ge = fe[ne].length; ge--; ) {
          const A = fe[ne][ge][0].clone(), ae = fe[ne][ge][1], Ne = fe[ne][ge][2], je = fe[ne][ge][3], xe = fe[ne][ge][4];
          A.name = ne, A.tag = xe, ae && A.position.set(ae[0], ae[1], ae[2]), Ne && A.rotation.set(Ne[0], Ne[1], Ne[2]), je && A.scale.set(je[0], je[1], je[2]), A.updateMatrix();
          const rt = A.geometry.clone();
          rt.applyMatrix4(A.matrix), A.geometry = rt, A.renderOrder = 1 / 0, A.position.set(0, 0, 0), A.rotation.set(0, 0, 0), A.scale.set(1, 1, 1), oe.add(A);
        }
      return oe;
    };
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = Me(K)), this.add(this.gizmo.rotate = Me(_e)), this.add(this.gizmo.scale = Me(he)), this.add(this.picker.translate = Me(q)), this.add(this.picker.rotate = Me(me)), this.add(this.picker.scale = Me(ee)), this.add(this.helper.translate = Me(pe)), this.add(this.helper.rotate = Me(ce)), this.add(this.helper.scale = Me(X)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
  // updateMatrixWorld will update transformations and appearance of individual handles
};
var mp = class extends Mesh {
  constructor() {
    super(new PlaneGeometry(1e5, 1e5, 2, 2), new MeshBasicMaterial({
      visible: false,
      wireframe: true,
      side: DoubleSide,
      transparent: true,
      opacity: 0.1,
      toneMapped: false
    })), P(this, "isTransformControlsPlane", true), P(this, "type", "TransformControlsPlane"), P(this, "unitX", new Vector3(1, 0, 0)), P(this, "unitY", new Vector3(0, 1, 0)), P(this, "unitZ", new Vector3(0, 0, 1)), P(this, "tempVector", new Vector3()), P(this, "dirVector", new Vector3()), P(this, "alignVector", new Vector3()), P(this, "tempMatrix", new Matrix4()), P(this, "identityQuaternion", new Quaternion()), P(this, "cameraQuaternion", new Quaternion()), P(this, "worldPosition", new Vector3()), P(this, "worldQuaternion", new Quaternion()), P(this, "eye", new Vector3()), P(this, "axis", null), P(this, "mode", "translate"), P(this, "space", "world"), P(this, "updateMatrixWorld", () => {
      let i = this.space;
      switch (this.position.copy(this.worldPosition), this.mode === "scale" && (i = "local"), this.unitX.set(1, 0, 0).applyQuaternion(i === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitY.set(0, 1, 0).applyQuaternion(i === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitZ.set(0, 0, 1).applyQuaternion(i === "local" ? this.worldQuaternion : this.identityQuaternion), this.alignVector.copy(this.unitY), this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              this.alignVector.copy(this.eye).cross(this.unitX), this.dirVector.copy(this.unitX).cross(this.alignVector);
              break;
            case "Y":
              this.alignVector.copy(this.eye).cross(this.unitY), this.dirVector.copy(this.unitY).cross(this.alignVector);
              break;
            case "Z":
              this.alignVector.copy(this.eye).cross(this.unitZ), this.dirVector.copy(this.unitZ).cross(this.alignVector);
              break;
            case "XY":
              this.dirVector.copy(this.unitZ);
              break;
            case "YZ":
              this.dirVector.copy(this.unitX);
              break;
            case "XZ":
              this.alignVector.copy(this.unitZ), this.dirVector.copy(this.unitY);
              break;
            case "XYZ":
            case "E":
              this.dirVector.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          this.dirVector.set(0, 0, 0);
      }
      this.dirVector.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector), this.quaternion.setFromRotationMatrix(this.tempMatrix)), super.updateMatrixWorld();
    });
  }
};
var ui = new Euler(0, 0, 0, "YXZ");
var pi = new Vector3();
var fp = {
  type: "change"
};
var vp = {
  type: "lock"
};
var bp = {
  type: "unlock"
};
var da = Math.PI / 2;
var gp = class extends EventDispatcher {
  constructor(i, r) {
    super(), P(this, "camera", void 0), P(this, "domElement", void 0), P(this, "isLocked", void 0), P(this, "minPolarAngle", void 0), P(this, "maxPolarAngle", void 0), P(this, "pointerSpeed", void 0), P(this, "onMouseMove", (s) => {
      if (!this.domElement || this.isLocked === false)
        return;
      const o = s.movementX || s.mozMovementX || s.webkitMovementX || 0, c = s.movementY || s.mozMovementY || s.webkitMovementY || 0;
      ui.setFromQuaternion(this.camera.quaternion), ui.y -= o * 2e-3 * this.pointerSpeed, ui.x -= c * 2e-3 * this.pointerSpeed, ui.x = Math.max(da - this.maxPolarAngle, Math.min(da - this.minPolarAngle, ui.x)), this.camera.quaternion.setFromEuler(ui), this.dispatchEvent(fp);
    }), P(this, "onPointerlockChange", () => {
      this.domElement && (this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(vp), this.isLocked = true) : (this.dispatchEvent(bp), this.isLocked = false));
    }), P(this, "onPointerlockError", () => {
      console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
    }), P(this, "connect", (s) => {
      this.domElement = s || this.domElement, this.domElement && (this.domElement.ownerDocument.addEventListener("mousemove", this.onMouseMove), this.domElement.ownerDocument.addEventListener("pointerlockchange", this.onPointerlockChange), this.domElement.ownerDocument.addEventListener("pointerlockerror", this.onPointerlockError));
    }), P(this, "disconnect", () => {
      this.domElement && (this.domElement.ownerDocument.removeEventListener("mousemove", this.onMouseMove), this.domElement.ownerDocument.removeEventListener("pointerlockchange", this.onPointerlockChange), this.domElement.ownerDocument.removeEventListener("pointerlockerror", this.onPointerlockError));
    }), P(this, "dispose", () => {
      this.disconnect();
    }), P(this, "getObject", () => this.camera), P(this, "direction", new Vector3(0, 0, -1)), P(this, "getDirection", (s) => s.copy(this.direction).applyQuaternion(this.camera.quaternion)), P(this, "moveForward", (s) => {
      pi.setFromMatrixColumn(this.camera.matrix, 0), pi.crossVectors(this.camera.up, pi), this.camera.position.addScaledVector(pi, s);
    }), P(this, "moveRight", (s) => {
      pi.setFromMatrixColumn(this.camera.matrix, 0), this.camera.position.addScaledVector(pi, s);
    }), P(this, "lock", () => {
      this.domElement && this.domElement.requestPointerLock();
    }), P(this, "unlock", () => {
      this.domElement && this.domElement.ownerDocument.exitPointerLock();
    }), this.camera = i, this.domElement = r, this.isLocked = false, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, r && this.connect(r);
  }
};
var ma = (f, i) => (f % i + i) % i;
var Ya = class extends EventDispatcher {
  // Set to false to disable this control
  // "target" sets the location of focus, where the object orbits around
  // How far you can dolly in and out ( PerspectiveCamera only )
  // How far you can zoom in and out ( OrthographicCamera only )
  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  // radians
  // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
  // radians
  // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  // Set to false to disable rotating
  // Set to false to disable panning
  // if false, pan orthogonal to world-space direction camera.up
  // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  // 30 seconds per orbit when fps is 60
  // true if you want to reverse the orbit to mouse drag from left to right = orbits left
  // The four arrow keys
  // Mouse buttons
  // Touch fingers
  // the target DOM element for key events
  constructor(i, r) {
    super(), P(this, "object", void 0), P(this, "domElement", void 0), P(this, "enabled", true), P(this, "target", new Vector3()), P(this, "minDistance", 0), P(this, "maxDistance", 1 / 0), P(this, "minZoom", 0), P(this, "maxZoom", 1 / 0), P(this, "minPolarAngle", 0), P(this, "maxPolarAngle", Math.PI), P(this, "minAzimuthAngle", -1 / 0), P(this, "maxAzimuthAngle", 1 / 0), P(this, "enableDamping", false), P(this, "dampingFactor", 0.05), P(this, "enableZoom", true), P(this, "zoomSpeed", 1), P(this, "enableRotate", true), P(this, "rotateSpeed", 1), P(this, "enablePan", true), P(this, "panSpeed", 1), P(this, "screenSpacePanning", true), P(this, "keyPanSpeed", 7), P(this, "autoRotate", false), P(this, "autoRotateSpeed", 2), P(this, "reverseOrbit", false), P(this, "keys", {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown"
    }), P(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    }), P(this, "touches", {
      ONE: TOUCH.ROTATE,
      TWO: TOUCH.DOLLY_PAN
    }), P(this, "target0", void 0), P(this, "position0", void 0), P(this, "zoom0", void 0), P(this, "_domElementKeyEvents", null), P(this, "getPolarAngle", void 0), P(this, "getAzimuthalAngle", void 0), P(this, "setPolarAngle", void 0), P(this, "setAzimuthalAngle", void 0), P(this, "getDistance", void 0), P(this, "listenToKeyEvents", void 0), P(this, "saveState", void 0), P(this, "reset", void 0), P(this, "update", void 0), P(this, "connect", void 0), P(this, "dispose", void 0), this.object = i, this.domElement = r, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object instanceof PerspectiveCamera ? this.object.zoom : 1, this.getPolarAngle = () => _.phi, this.getAzimuthalAngle = () => _.theta, this.setPolarAngle = (M) => {
      let U = ma(M, 2 * Math.PI), W = _.phi;
      W < 0 && (W += 2 * Math.PI), U < 0 && (U += 2 * Math.PI);
      let ie = Math.abs(U - W);
      2 * Math.PI - ie < ie && (U < W ? U += 2 * Math.PI : W += 2 * Math.PI), w.phi = U - W, s.update();
    }, this.setAzimuthalAngle = (M) => {
      let U = ma(M, 2 * Math.PI), W = _.theta;
      W < 0 && (W += 2 * Math.PI), U < 0 && (U += 2 * Math.PI);
      let ie = Math.abs(U - W);
      2 * Math.PI - ie < ie && (U < W ? U += 2 * Math.PI : W += 2 * Math.PI), w.theta = U - W, s.update();
    }, this.getDistance = () => s.object.position.distanceTo(s.target), this.listenToKeyEvents = (M) => {
      M.addEventListener("keydown", Ct2), this._domElementKeyEvents = M;
    }, this.saveState = () => {
      s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object instanceof PerspectiveCamera ? s.object.zoom : 1;
    }, this.reset = () => {
      s.target.copy(s.target0), s.object.position.copy(s.position0), s.object instanceof PerspectiveCamera && (s.object.zoom = s.zoom0, s.object.updateProjectionMatrix()), s.dispatchEvent(o), s.update(), m = h.NONE;
    }, this.update = (() => {
      const M = new Vector3(), U = new Quaternion().setFromUnitVectors(i.up, new Vector3(0, 1, 0)), W = U.clone().invert(), ie = new Vector3(), Ee = new Quaternion(), Fe = 2 * Math.PI;
      return function() {
        const fn = s.object.position;
        M.copy(fn).sub(s.target), M.applyQuaternion(U), _.setFromVector3(M), s.autoRotate && m === h.NONE && pe(K()), s.enableDamping ? (_.theta += w.theta * s.dampingFactor, _.phi += w.phi * s.dampingFactor) : (_.theta += w.theta, _.phi += w.phi);
        let $e = s.minAzimuthAngle, Xe = s.maxAzimuthAngle;
        return isFinite($e) && isFinite(Xe) && ($e < -Math.PI ? $e += Fe : $e > Math.PI && ($e -= Fe), Xe < -Math.PI ? Xe += Fe : Xe > Math.PI && (Xe -= Fe), $e <= Xe ? _.theta = Math.max($e, Math.min(Xe, _.theta)) : _.theta = _.theta > ($e + Xe) / 2 ? Math.max($e, _.theta) : Math.min(Xe, _.theta)), _.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, _.phi)), _.makeSafe(), _.radius *= y, _.radius = Math.max(s.minDistance, Math.min(s.maxDistance, _.radius)), s.enableDamping === true ? s.target.addScaledVector(C, s.dampingFactor) : s.target.add(C), M.setFromSpherical(_), M.applyQuaternion(W), fn.copy(s.target).add(M), s.object.lookAt(s.target), s.enableDamping === true ? (w.theta *= 1 - s.dampingFactor, w.phi *= 1 - s.dampingFactor, C.multiplyScalar(1 - s.dampingFactor)) : (w.set(0, 0, 0), C.set(0, 0, 0)), y = 1, L || ie.distanceToSquared(s.object.position) > g || 8 * (1 - Ee.dot(s.object.quaternion)) > g ? (s.dispatchEvent(o), ie.copy(s.object.position), Ee.copy(s.object.quaternion), L = false, true) : false;
      };
    })(), this.connect = (M) => {
      M === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), s.domElement = M, s.domElement.style.touchAction = "none", s.domElement.addEventListener("contextmenu", mn), s.domElement.addEventListener("pointerdown", ot), s.domElement.addEventListener("pointercancel", Hn), s.domElement.addEventListener("wheel", $n);
    }, this.dispose = () => {
      var M, U, W, ie, Ee, Fe;
      (M = s.domElement) === null || M === void 0 || M.removeEventListener("contextmenu", mn), (U = s.domElement) === null || U === void 0 || U.removeEventListener("pointerdown", ot), (W = s.domElement) === null || W === void 0 || W.removeEventListener("pointercancel", Hn), (ie = s.domElement) === null || ie === void 0 || ie.removeEventListener("wheel", $n), (Ee = s.domElement) === null || Ee === void 0 || Ee.ownerDocument.removeEventListener("pointermove", dn), (Fe = s.domElement) === null || Fe === void 0 || Fe.ownerDocument.removeEventListener("pointerup", bt), s._domElementKeyEvents !== null && s._domElementKeyEvents.removeEventListener("keydown", Ct2);
    };
    const s = this, o = {
      type: "change"
    }, c = {
      type: "start"
    }, p = {
      type: "end"
    }, h = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let m = h.NONE;
    const g = 1e-6, _ = new Spherical(), w = new Spherical();
    let y = 1;
    const C = new Vector3();
    let L = false;
    const S2 = new Vector2(), R = new Vector2(), O = new Vector2(), N = new Vector2(), I = new Vector2(), D2 = new Vector2(), Y = new Vector2(), G = new Vector2(), F = new Vector2(), B = [], H = {};
    function K() {
      return 2 * Math.PI / 60 / 60 * s.autoRotateSpeed;
    }
    function q() {
      return Math.pow(0.95, s.zoomSpeed);
    }
    function pe(M) {
      s.reverseOrbit ? w.theta += M : w.theta -= M;
    }
    function _e(M) {
      s.reverseOrbit ? w.phi += M : w.phi -= M;
    }
    const ce = (() => {
      const M = new Vector3();
      return function(W, ie) {
        M.setFromMatrixColumn(ie, 0), M.multiplyScalar(-W), C.add(M);
      };
    })(), me = (() => {
      const M = new Vector3();
      return function(W, ie) {
        s.screenSpacePanning === true ? M.setFromMatrixColumn(ie, 1) : (M.setFromMatrixColumn(ie, 0), M.crossVectors(s.object.up, M)), M.multiplyScalar(W), C.add(M);
      };
    })(), he = (() => {
      const M = new Vector3();
      return function(W, ie) {
        const Ee = s.domElement;
        if (Ee && s.object instanceof PerspectiveCamera && s.object.isPerspectiveCamera) {
          const Fe = s.object.position;
          M.copy(Fe).sub(s.target);
          let Gt = M.length();
          Gt *= Math.tan(s.object.fov / 2 * Math.PI / 180), ce(2 * W * Gt / Ee.clientHeight, s.object.matrix), me(2 * ie * Gt / Ee.clientHeight, s.object.matrix);
        } else
          Ee && s.object instanceof OrthographicCamera && s.object.isOrthographicCamera ? (ce(W * (s.object.right - s.object.left) / s.object.zoom / Ee.clientWidth, s.object.matrix), me(ie * (s.object.top - s.object.bottom) / s.object.zoom / Ee.clientHeight, s.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = false);
      };
    })();
    function ee(M) {
      s.object instanceof PerspectiveCamera && s.object.isPerspectiveCamera ? y /= M : s.object instanceof OrthographicCamera && s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom * M)), s.object.updateProjectionMatrix(), L = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = false);
    }
    function X(M) {
      s.object instanceof PerspectiveCamera && s.object.isPerspectiveCamera ? y *= M : s.object instanceof OrthographicCamera && s.object.isOrthographicCamera ? (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / M)), s.object.updateProjectionMatrix(), L = true) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = false);
    }
    function Me(M) {
      S2.set(M.clientX, M.clientY);
    }
    function fe(M) {
      Y.set(M.clientX, M.clientY);
    }
    function oe(M) {
      N.set(M.clientX, M.clientY);
    }
    function ne(M) {
      R.set(M.clientX, M.clientY), O.subVectors(R, S2).multiplyScalar(s.rotateSpeed);
      const U = s.domElement;
      U && (pe(2 * Math.PI * O.x / U.clientHeight), _e(2 * Math.PI * O.y / U.clientHeight)), S2.copy(R), s.update();
    }
    function ge(M) {
      G.set(M.clientX, M.clientY), F.subVectors(G, Y), F.y > 0 ? ee(q()) : F.y < 0 && X(q()), Y.copy(G), s.update();
    }
    function A(M) {
      I.set(M.clientX, M.clientY), D2.subVectors(I, N).multiplyScalar(s.panSpeed), he(D2.x, D2.y), N.copy(I), s.update();
    }
    function ae(M) {
      M.deltaY < 0 ? X(q()) : M.deltaY > 0 && ee(q()), s.update();
    }
    function Ne(M) {
      let U = false;
      switch (M.code) {
        case s.keys.UP:
          he(0, s.keyPanSpeed), U = true;
          break;
        case s.keys.BOTTOM:
          he(0, -s.keyPanSpeed), U = true;
          break;
        case s.keys.LEFT:
          he(s.keyPanSpeed, 0), U = true;
          break;
        case s.keys.RIGHT:
          he(-s.keyPanSpeed, 0), U = true;
          break;
      }
      U && (M.preventDefault(), s.update());
    }
    function je() {
      if (B.length == 1)
        S2.set(B[0].pageX, B[0].pageY);
      else {
        const M = 0.5 * (B[0].pageX + B[1].pageX), U = 0.5 * (B[0].pageY + B[1].pageY);
        S2.set(M, U);
      }
    }
    function xe() {
      if (B.length == 1)
        N.set(B[0].pageX, B[0].pageY);
      else {
        const M = 0.5 * (B[0].pageX + B[1].pageX), U = 0.5 * (B[0].pageY + B[1].pageY);
        N.set(M, U);
      }
    }
    function rt() {
      const M = B[0].pageX - B[1].pageX, U = B[0].pageY - B[1].pageY, W = Math.sqrt(M * M + U * U);
      Y.set(0, W);
    }
    function Un() {
      s.enableZoom && rt(), s.enablePan && xe();
    }
    function Qe() {
      s.enableZoom && rt(), s.enableRotate && je();
    }
    function Gn(M) {
      if (B.length == 1)
        R.set(M.pageX, M.pageY);
      else {
        const W = Lt(M), ie = 0.5 * (M.pageX + W.x), Ee = 0.5 * (M.pageY + W.y);
        R.set(ie, Ee);
      }
      O.subVectors(R, S2).multiplyScalar(s.rotateSpeed);
      const U = s.domElement;
      U && (pe(2 * Math.PI * O.x / U.clientHeight), _e(2 * Math.PI * O.y / U.clientHeight)), S2.copy(R);
    }
    function hn(M) {
      if (B.length == 1)
        I.set(M.pageX, M.pageY);
      else {
        const U = Lt(M), W = 0.5 * (M.pageX + U.x), ie = 0.5 * (M.pageY + U.y);
        I.set(W, ie);
      }
      D2.subVectors(I, N).multiplyScalar(s.panSpeed), he(D2.x, D2.y), N.copy(I);
    }
    function vt(M) {
      const U = Lt(M), W = M.pageX - U.x, ie = M.pageY - U.y, Ee = Math.sqrt(W * W + ie * ie);
      G.set(0, Ee), F.set(0, Math.pow(G.y / Y.y, s.zoomSpeed)), ee(F.y), Y.copy(G);
    }
    function Mt(M) {
      s.enableZoom && vt(M), s.enablePan && hn(M);
    }
    function Ke(M) {
      s.enableZoom && vt(M), s.enableRotate && Gn(M);
    }
    function ot(M) {
      if (s.enabled !== false) {
        if (B.length === 0) {
          var U, W;
          (U = s.domElement) === null || U === void 0 || U.ownerDocument.addEventListener("pointermove", dn), (W = s.domElement) === null || W === void 0 || W.ownerDocument.addEventListener("pointerup", bt);
        }
        Yn(M), M.pointerType === "touch" ? St(M) : bi(M);
      }
    }
    function dn(M) {
      s.enabled !== false && (M.pointerType === "touch" ? Xn(M) : Kn(M));
    }
    function bt(M) {
      if (Pt(M), B.length === 0) {
        var U, W, ie;
        (U = s.domElement) === null || U === void 0 || U.releasePointerCapture(M.pointerId), (W = s.domElement) === null || W === void 0 || W.ownerDocument.removeEventListener("pointermove", dn), (ie = s.domElement) === null || ie === void 0 || ie.ownerDocument.removeEventListener("pointerup", bt);
      }
      s.dispatchEvent(p), m = h.NONE;
    }
    function Hn(M) {
      Pt(M);
    }
    function bi(M) {
      let U;
      switch (M.button) {
        case 0:
          U = s.mouseButtons.LEFT;
          break;
        case 1:
          U = s.mouseButtons.MIDDLE;
          break;
        case 2:
          U = s.mouseButtons.RIGHT;
          break;
        default:
          U = -1;
      }
      switch (U) {
        case MOUSE.DOLLY:
          if (s.enableZoom === false)
            return;
          fe(M), m = h.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (s.enablePan === false)
              return;
            oe(M), m = h.PAN;
          } else {
            if (s.enableRotate === false)
              return;
            Me(M), m = h.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (s.enableRotate === false)
              return;
            Me(M), m = h.ROTATE;
          } else {
            if (s.enablePan === false)
              return;
            oe(M), m = h.PAN;
          }
          break;
        default:
          m = h.NONE;
      }
      m !== h.NONE && s.dispatchEvent(c);
    }
    function Kn(M) {
      if (s.enabled !== false)
        switch (m) {
          case h.ROTATE:
            if (s.enableRotate === false)
              return;
            ne(M);
            break;
          case h.DOLLY:
            if (s.enableZoom === false)
              return;
            ge(M);
            break;
          case h.PAN:
            if (s.enablePan === false)
              return;
            A(M);
            break;
        }
    }
    function $n(M) {
      s.enabled === false || s.enableZoom === false || m !== h.NONE && m !== h.ROTATE || (M.preventDefault(), s.dispatchEvent(c), ae(M), s.dispatchEvent(p));
    }
    function Ct2(M) {
      s.enabled === false || s.enablePan === false || Ne(M);
    }
    function St(M) {
      switch (gt(M), B.length) {
        case 1:
          switch (s.touches.ONE) {
            case TOUCH.ROTATE:
              if (s.enableRotate === false)
                return;
              je(), m = h.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (s.enablePan === false)
                return;
              xe(), m = h.TOUCH_PAN;
              break;
            default:
              m = h.NONE;
          }
          break;
        case 2:
          switch (s.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (s.enableZoom === false && s.enablePan === false)
                return;
              Un(), m = h.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (s.enableZoom === false && s.enableRotate === false)
                return;
              Qe(), m = h.TOUCH_DOLLY_ROTATE;
              break;
            default:
              m = h.NONE;
          }
          break;
        default:
          m = h.NONE;
      }
      m !== h.NONE && s.dispatchEvent(c);
    }
    function Xn(M) {
      switch (gt(M), m) {
        case h.TOUCH_ROTATE:
          if (s.enableRotate === false)
            return;
          Gn(M), s.update();
          break;
        case h.TOUCH_PAN:
          if (s.enablePan === false)
            return;
          hn(M), s.update();
          break;
        case h.TOUCH_DOLLY_PAN:
          if (s.enableZoom === false && s.enablePan === false)
            return;
          Mt(M), s.update();
          break;
        case h.TOUCH_DOLLY_ROTATE:
          if (s.enableZoom === false && s.enableRotate === false)
            return;
          Ke(M), s.update();
          break;
        default:
          m = h.NONE;
      }
    }
    function mn(M) {
      s.enabled !== false && M.preventDefault();
    }
    function Yn(M) {
      B.push(M);
    }
    function Pt(M) {
      delete H[M.pointerId];
      for (let U = 0; U < B.length; U++)
        if (B[U].pointerId == M.pointerId) {
          B.splice(U, 1);
          return;
        }
    }
    function gt(M) {
      let U = H[M.pointerId];
      U === void 0 && (U = new Vector2(), H[M.pointerId] = U), U.set(M.pageX, M.pageY);
    }
    function Lt(M) {
      const U = M.pointerId === B[0].pointerId ? B[1] : B[0];
      return H[U.pointerId];
    }
    r !== void 0 && this.connect(r), this.update();
  }
};
var _p = class extends Ya {
  constructor(i, r) {
    super(i, r), this.screenSpacePanning = false, this.mouseButtons.LEFT = MOUSE.PAN, this.mouseButtons.RIGHT = MOUSE.ROTATE, this.touches.ONE = TOUCH.PAN, this.touches.TWO = TOUCH.DOLLY_ROTATE;
  }
};
var wp = class extends Loader {
  constructor(i) {
    super(i), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(r) {
      return new Pp(r);
    }), this.register(function(r) {
      return new Rp(r);
    }), this.register(function(r) {
      return new Vp(r);
    }), this.register(function(r) {
      return new Ip(r);
    }), this.register(function(r) {
      return new kp(r);
    }), this.register(function(r) {
      return new Ap(r);
    }), this.register(function(r) {
      return new Mp(r);
    }), this.register(function(r) {
      return new Sp(r);
    }), this.register(function(r) {
      return new Cp(r);
    }), this.register(function(r) {
      return new Lp(r);
    }), this.register(function(r) {
      return new Tp(r);
    }), this.register(function(r) {
      return new xp(r);
    }), this.register(function(r) {
      return new Dp(r);
    }), this.register(function(r) {
      return new Op(r);
    });
  }
  load(i, r, s, o) {
    const c = this;
    let p;
    this.resourcePath !== "" ? p = this.resourcePath : this.path !== "" ? p = this.path : p = LoaderUtils.extractUrlBase(i), this.manager.itemStart(i);
    const h = function(g) {
      o ? o(g) : console.error(g), c.manager.itemError(i), c.manager.itemEnd(i);
    }, m = new FileLoader(this.manager);
    m.setPath(this.path), m.setResponseType("arraybuffer"), m.setRequestHeader(this.requestHeader), m.setWithCredentials(this.withCredentials), m.load(i, function(g) {
      try {
        c.parse(g, p, function(_) {
          r(_), c.manager.itemEnd(i);
        }, h);
      } catch (_) {
        h(_);
      }
    }, s, h);
  }
  setDRACOLoader(i) {
    return this.dracoLoader = i, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(i) {
    return this.ktx2Loader = i, this;
  }
  setMeshoptDecoder(i) {
    return this.meshoptDecoder = i, this;
  }
  register(i) {
    return this.pluginCallbacks.indexOf(i) === -1 && this.pluginCallbacks.push(i), this;
  }
  unregister(i) {
    return this.pluginCallbacks.indexOf(i) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(i), 1), this;
  }
  parse(i, r, s, o) {
    let c;
    const p = {}, h = {}, m = new TextDecoder();
    if (typeof i == "string")
      c = JSON.parse(i);
    else if (i instanceof ArrayBuffer)
      if (m.decode(new Uint8Array(i, 0, 4)) === qa) {
        try {
          p[le.KHR_BINARY_GLTF] = new Np(i);
        } catch (w) {
          o && o(w);
          return;
        }
        c = JSON.parse(p[le.KHR_BINARY_GLTF].content);
      } else
        c = JSON.parse(m.decode(i));
    else
      c = i;
    if (c.asset === void 0 || c.asset.version[0] < 2) {
      o && o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const g = new Qp(c, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    g.fileLoader.setRequestHeader(this.requestHeader);
    for (let _ = 0; _ < this.pluginCallbacks.length; _++) {
      const w = this.pluginCallbacks[_](g);
      h[w.name] = w, p[w.name] = true;
    }
    if (c.extensionsUsed)
      for (let _ = 0; _ < c.extensionsUsed.length; ++_) {
        const w = c.extensionsUsed[_], y = c.extensionsRequired || [];
        switch (w) {
          case le.KHR_MATERIALS_UNLIT:
            p[w] = new Ep();
            break;
          case le.KHR_DRACO_MESH_COMPRESSION:
            p[w] = new Bp(c, this.dracoLoader);
            break;
          case le.KHR_TEXTURE_TRANSFORM:
            p[w] = new Fp();
            break;
          case le.KHR_MESH_QUANTIZATION:
            p[w] = new zp();
            break;
          default:
            y.indexOf(w) >= 0 && h[w] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + w + '".');
        }
      }
    g.setExtensions(p), g.setPlugins(h), g.parse(s, o);
  }
  parseAsync(i, r) {
    const s = this;
    return new Promise(function(o, c) {
      s.parse(i, r, o, c);
    });
  }
};
function yp() {
  let f = {};
  return {
    get: function(i) {
      return f[i];
    },
    add: function(i, r) {
      f[i] = r;
    },
    remove: function(i) {
      delete f[i];
    },
    removeAll: function() {
      f = {};
    }
  };
}
var le = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
var xp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_LIGHTS_PUNCTUAL, this.cache = {
      refs: {},
      uses: {}
    };
  }
  _markDefs() {
    const i = this.parser, r = this.parser.json.nodes || [];
    for (let s = 0, o = r.length; s < o; s++) {
      const c = r[s];
      c.extensions && c.extensions[this.name] && c.extensions[this.name].light !== void 0 && i._addNodeRef(this.cache, c.extensions[this.name].light);
    }
  }
  _loadLight(i) {
    const r = this.parser, s = "light:" + i;
    let o = r.cache.get(s);
    if (o)
      return o;
    const c = r.json, m = ((c.extensions && c.extensions[this.name] || {}).lights || [])[i];
    let g;
    const _ = new Color(16777215);
    m.color !== void 0 && _.fromArray(m.color);
    const w = m.range !== void 0 ? m.range : 0;
    switch (m.type) {
      case "directional":
        g = new DirectionalLight(_), g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      case "point":
        g = new PointLight(_), g.distance = w;
        break;
      case "spot":
        g = new SpotLight(_), g.distance = w, m.spot = m.spot || {}, m.spot.innerConeAngle = m.spot.innerConeAngle !== void 0 ? m.spot.innerConeAngle : 0, m.spot.outerConeAngle = m.spot.outerConeAngle !== void 0 ? m.spot.outerConeAngle : Math.PI / 4, g.angle = m.spot.outerConeAngle, g.penumbra = 1 - m.spot.innerConeAngle / m.spot.outerConeAngle, g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + m.type);
    }
    return g.position.set(0, 0, 0), g.decay = 2, ln(g, m), m.intensity !== void 0 && (g.intensity = m.intensity), g.name = r.createUniqueName(m.name || "light_" + i), o = Promise.resolve(g), r.cache.add(s, o), o;
  }
  getDependency(i, r) {
    if (i === "light")
      return this._loadLight(r);
  }
  createNodeAttachment(i) {
    const r = this, s = this.parser, c = s.json.nodes[i], h = (c.extensions && c.extensions[this.name] || {}).light;
    return h === void 0 ? null : this._loadLight(h).then(function(m) {
      return s._getNodeRef(r.cache, h, m);
    });
  }
};
var Ep = class {
  constructor() {
    this.name = le.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(i, r, s) {
    const o = [];
    i.color = new Color(1, 1, 1), i.opacity = 1;
    const c = r.pbrMetallicRoughness;
    if (c) {
      if (Array.isArray(c.baseColorFactor)) {
        const p = c.baseColorFactor;
        i.color.fromArray(p), i.opacity = p[3];
      }
      c.baseColorTexture !== void 0 && o.push(s.assignTexture(i, "map", c.baseColorTexture, sRGBEncoding));
    }
    return Promise.all(o);
  }
};
var Cp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(i, r) {
    const o = this.parser.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = o.extensions[this.name].emissiveStrength;
    return c !== void 0 && (r.emissiveIntensity = c), Promise.resolve();
  }
};
var Pp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [], p = o.extensions[this.name];
    if (p.clearcoatFactor !== void 0 && (r.clearcoat = p.clearcoatFactor), p.clearcoatTexture !== void 0 && c.push(s.assignTexture(r, "clearcoatMap", p.clearcoatTexture)), p.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = p.clearcoatRoughnessFactor), p.clearcoatRoughnessTexture !== void 0 && c.push(s.assignTexture(r, "clearcoatRoughnessMap", p.clearcoatRoughnessTexture)), p.clearcoatNormalTexture !== void 0 && (c.push(s.assignTexture(r, "clearcoatNormalMap", p.clearcoatNormalTexture)), p.clearcoatNormalTexture.scale !== void 0)) {
      const h = p.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new Vector2(h, h);
    }
    return Promise.all(c);
  }
};
var Tp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [], p = o.extensions[this.name];
    return p.iridescenceFactor !== void 0 && (r.iridescence = p.iridescenceFactor), p.iridescenceTexture !== void 0 && c.push(s.assignTexture(r, "iridescenceMap", p.iridescenceTexture)), p.iridescenceIor !== void 0 && (r.iridescenceIOR = p.iridescenceIor), r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]), p.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = p.iridescenceThicknessMinimum), p.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = p.iridescenceThicknessMaximum), p.iridescenceThicknessTexture !== void 0 && c.push(s.assignTexture(r, "iridescenceThicknessMap", p.iridescenceThicknessTexture)), Promise.all(c);
  }
};
var kp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [];
    r.sheenColor = new Color(0, 0, 0), r.sheenRoughness = 0, r.sheen = 1;
    const p = o.extensions[this.name];
    return p.sheenColorFactor !== void 0 && r.sheenColor.fromArray(p.sheenColorFactor), p.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = p.sheenRoughnessFactor), p.sheenColorTexture !== void 0 && c.push(s.assignTexture(r, "sheenColorMap", p.sheenColorTexture, sRGBEncoding)), p.sheenRoughnessTexture !== void 0 && c.push(s.assignTexture(r, "sheenRoughnessMap", p.sheenRoughnessTexture)), Promise.all(c);
  }
};
var Ap = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [], p = o.extensions[this.name];
    return p.transmissionFactor !== void 0 && (r.transmission = p.transmissionFactor), p.transmissionTexture !== void 0 && c.push(s.assignTexture(r, "transmissionMap", p.transmissionTexture)), Promise.all(c);
  }
};
var Mp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [], p = o.extensions[this.name];
    r.thickness = p.thicknessFactor !== void 0 ? p.thicknessFactor : 0, p.thicknessTexture !== void 0 && c.push(s.assignTexture(r, "thicknessMap", p.thicknessTexture)), r.attenuationDistance = p.attenuationDistance || 1 / 0;
    const h = p.attenuationColor || [1, 1, 1];
    return r.attenuationColor = new Color(h[0], h[1], h[2]), Promise.all(c);
  }
};
var Sp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_IOR;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const o = this.parser.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = o.extensions[this.name];
    return r.ior = c.ior !== void 0 ? c.ior : 1.5, Promise.resolve();
  }
};
var Lp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(i) {
    const s = this.parser.json.materials[i];
    return !s.extensions || !s.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(i, r) {
    const s = this.parser, o = s.json.materials[i];
    if (!o.extensions || !o.extensions[this.name])
      return Promise.resolve();
    const c = [], p = o.extensions[this.name];
    r.specularIntensity = p.specularFactor !== void 0 ? p.specularFactor : 1, p.specularTexture !== void 0 && c.push(s.assignTexture(r, "specularIntensityMap", p.specularTexture));
    const h = p.specularColorFactor || [1, 1, 1];
    return r.specularColor = new Color(h[0], h[1], h[2]), p.specularColorTexture !== void 0 && c.push(s.assignTexture(r, "specularColorMap", p.specularColorTexture, sRGBEncoding)), Promise.all(c);
  }
};
var Rp = class {
  constructor(i) {
    this.parser = i, this.name = le.KHR_TEXTURE_BASISU;
  }
  loadTexture(i) {
    const r = this.parser, s = r.json, o = s.textures[i];
    if (!o.extensions || !o.extensions[this.name])
      return null;
    const c = o.extensions[this.name], p = r.options.ktx2Loader;
    if (!p) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(i, c.source, p);
  }
};
var Vp = class {
  constructor(i) {
    this.parser = i, this.name = le.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(i) {
    const r = this.name, s = this.parser, o = s.json, c = o.textures[i];
    if (!c.extensions || !c.extensions[r])
      return null;
    const p = c.extensions[r], h = o.images[p.source];
    let m = s.textureLoader;
    if (h.uri) {
      const g = s.options.manager.getHandler(h.uri);
      g !== null && (m = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return s.loadTextureImage(i, p.source, m);
      if (o.extensionsRequired && o.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return s.loadTexture(i);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(i) {
      const r = new Image();
      r.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", r.onload = r.onerror = function() {
        i(r.height === 1);
      };
    })), this.isSupported;
  }
};
var Ip = class {
  constructor(i) {
    this.parser = i, this.name = le.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(i) {
    const r = this.name, s = this.parser, o = s.json, c = o.textures[i];
    if (!c.extensions || !c.extensions[r])
      return null;
    const p = c.extensions[r], h = o.images[p.source];
    let m = s.textureLoader;
    if (h.uri) {
      const g = s.options.manager.getHandler(h.uri);
      g !== null && (m = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return s.loadTextureImage(i, p.source, m);
      if (o.extensionsRequired && o.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return s.loadTexture(i);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(i) {
      const r = new Image();
      r.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", r.onload = r.onerror = function() {
        i(r.height === 1);
      };
    })), this.isSupported;
  }
};
var Dp = class {
  constructor(i) {
    this.name = le.EXT_MESHOPT_COMPRESSION, this.parser = i;
  }
  loadBufferView(i) {
    const r = this.parser.json, s = r.bufferViews[i];
    if (s.extensions && s.extensions[this.name]) {
      const o = s.extensions[this.name], c = this.parser.getDependency("buffer", o.buffer), p = this.parser.options.meshoptDecoder;
      if (!p || !p.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return c.then(function(h) {
        const m = o.byteOffset || 0, g = o.byteLength || 0, _ = o.count, w = o.byteStride, y = new Uint8Array(h, m, g);
        return p.decodeGltfBufferAsync ? p.decodeGltfBufferAsync(_, w, y, o.mode, o.filter).then(function(C) {
          return C.buffer;
        }) : p.ready.then(function() {
          const C = new ArrayBuffer(_ * w);
          return p.decodeGltfBuffer(new Uint8Array(C), _, w, y, o.mode, o.filter), C;
        });
      });
    } else
      return null;
  }
};
var Op = class {
  constructor(i) {
    this.name = le.EXT_MESH_GPU_INSTANCING, this.parser = i;
  }
  createNodeMesh(i) {
    const r = this.parser.json, s = r.nodes[i];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const o = r.meshes[s.mesh];
    for (const g of o.primitives)
      if (g.mode !== dt.TRIANGLES && g.mode !== dt.TRIANGLE_STRIP && g.mode !== dt.TRIANGLE_FAN && g.mode !== void 0)
        return null;
    const p = s.extensions[this.name].attributes, h = [], m = {};
    for (const g in p)
      h.push(this.parser.getDependency("accessor", p[g]).then((_) => (m[g] = _, m[g])));
    return h.length < 1 ? null : (h.push(this.parser.createNodeMesh(i)), Promise.all(h).then((g) => {
      const _ = g.pop(), w = _.isGroup ? _.children : [_], y = g[0].count, C = [];
      for (const L of w) {
        const S2 = new Matrix4(), R = new Vector3(), O = new Quaternion(), N = new Vector3(1, 1, 1), I = new InstancedMesh(L.geometry, L.material, y);
        for (let D2 = 0; D2 < y; D2++)
          m.TRANSLATION && R.fromBufferAttribute(m.TRANSLATION, D2), m.ROTATION && O.fromBufferAttribute(m.ROTATION, D2), m.SCALE && N.fromBufferAttribute(m.SCALE, D2), I.setMatrixAt(D2, S2.compose(R, O, N));
        for (const D2 in m)
          D2 !== "TRANSLATION" && D2 !== "ROTATION" && D2 !== "SCALE" && L.geometry.setAttribute(D2, m[D2]);
        Object3D.prototype.copy.call(I, L), this.parser.assignFinalMaterial(I), C.push(I);
      }
      return _.isGroup ? (_.clear(), _.add(...C), _) : C[0];
    }));
  }
};
var qa = "glTF";
var Yi = 12;
var fa = {
  JSON: 1313821514,
  BIN: 5130562
};
var Np = class {
  constructor(i) {
    this.name = le.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const r = new DataView(i, 0, Yi), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(i.slice(0, 4))),
      version: r.getUint32(4, true),
      length: r.getUint32(8, true)
    }, this.header.magic !== qa)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const o = this.header.length - Yi, c = new DataView(i, Yi);
    let p = 0;
    for (; p < o; ) {
      const h = c.getUint32(p, true);
      p += 4;
      const m = c.getUint32(p, true);
      if (p += 4, m === fa.JSON) {
        const g = new Uint8Array(i, Yi + p, h);
        this.content = s.decode(g);
      } else if (m === fa.BIN) {
        const g = Yi + p;
        this.body = i.slice(g, g + h);
      }
      p += h;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
};
var Bp = class {
  constructor(i, r) {
    if (!r)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = le.KHR_DRACO_MESH_COMPRESSION, this.json = i, this.dracoLoader = r, this.dracoLoader.preload();
  }
  decodePrimitive(i, r) {
    const s = this.json, o = this.dracoLoader, c = i.extensions[this.name].bufferView, p = i.extensions[this.name].attributes, h = {}, m = {}, g = {};
    for (const _ in p) {
      const w = bo[_] || _.toLowerCase();
      h[w] = p[_];
    }
    for (const _ in i.attributes) {
      const w = bo[_] || _.toLowerCase();
      if (p[_] !== void 0) {
        const y = s.accessors[i.attributes[_]], C = di[y.componentType];
        g[w] = C.name, m[w] = y.normalized === true;
      }
    }
    return r.getDependency("bufferView", c).then(function(_) {
      return new Promise(function(w) {
        o.decodeDracoFile(_, function(y) {
          for (const C in y.attributes) {
            const L = y.attributes[C], S2 = m[C];
            S2 !== void 0 && (L.normalized = S2);
          }
          w(y);
        }, h, g);
      });
    });
  }
};
var Fp = class {
  constructor() {
    this.name = le.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(i, r) {
    return (r.texCoord === void 0 || r.texCoord === i.channel) && r.offset === void 0 && r.rotation === void 0 && r.scale === void 0 || (i = i.clone(), r.texCoord !== void 0 && (i.channel = r.texCoord), r.offset !== void 0 && i.offset.fromArray(r.offset), r.rotation !== void 0 && (i.rotation = r.rotation), r.scale !== void 0 && i.repeat.fromArray(r.scale), i.needsUpdate = true), i;
  }
};
var zp = class {
  constructor() {
    this.name = le.KHR_MESH_QUANTIZATION;
  }
};
var Qa = class extends Interpolant {
  constructor(i, r, s, o) {
    super(i, r, s, o);
  }
  copySampleValue_(i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, c = i * o * 3 + o;
    for (let p = 0; p !== o; p++)
      r[p] = s[c + p];
    return r;
  }
  interpolate_(i, r, s, o) {
    const c = this.resultBuffer, p = this.sampleValues, h = this.valueSize, m = h * 2, g = h * 3, _ = o - r, w = (s - r) / _, y = w * w, C = y * w, L = i * g, S2 = L - g, R = -2 * C + 3 * y, O = C - y, N = 1 - R, I = O - y + w;
    for (let D2 = 0; D2 !== h; D2++) {
      const Y = p[S2 + D2 + h], G = p[S2 + D2 + m] * _, F = p[L + D2 + h], B = p[L + D2] * _;
      c[D2] = N * Y + I * G + R * F + O * B;
    }
    return c;
  }
};
var jp = new Quaternion();
var Up = class extends Qa {
  interpolate_(i, r, s, o) {
    const c = super.interpolate_(i, r, s, o);
    return jp.fromArray(c).normalize().toArray(c), c;
  }
};
var dt = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
};
var di = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
var va = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
};
var ba = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
};
var no = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
var bo = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
var sn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
var Gp = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
};
var io = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Hp(f) {
  return f.DefaultMaterial === void 0 && (f.DefaultMaterial = new MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: FrontSide
  })), f.DefaultMaterial;
}
function qi(f, i, r) {
  for (const s in r.extensions)
    f[s] === void 0 && (i.userData.gltfExtensions = i.userData.gltfExtensions || {}, i.userData.gltfExtensions[s] = r.extensions[s]);
}
function ln(f, i) {
  i.extras !== void 0 && (typeof i.extras == "object" ? Object.assign(f.userData, i.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + i.extras));
}
function Kp(f, i, r) {
  let s = false, o = false, c = false;
  for (let g = 0, _ = i.length; g < _; g++) {
    const w = i[g];
    if (w.POSITION !== void 0 && (s = true), w.NORMAL !== void 0 && (o = true), w.COLOR_0 !== void 0 && (c = true), s && o && c)
      break;
  }
  if (!s && !o && !c)
    return Promise.resolve(f);
  const p = [], h = [], m = [];
  for (let g = 0, _ = i.length; g < _; g++) {
    const w = i[g];
    if (s) {
      const y = w.POSITION !== void 0 ? r.getDependency("accessor", w.POSITION) : f.attributes.position;
      p.push(y);
    }
    if (o) {
      const y = w.NORMAL !== void 0 ? r.getDependency("accessor", w.NORMAL) : f.attributes.normal;
      h.push(y);
    }
    if (c) {
      const y = w.COLOR_0 !== void 0 ? r.getDependency("accessor", w.COLOR_0) : f.attributes.color;
      m.push(y);
    }
  }
  return Promise.all([Promise.all(p), Promise.all(h), Promise.all(m)]).then(function(g) {
    const _ = g[0], w = g[1], y = g[2];
    return s && (f.morphAttributes.position = _), o && (f.morphAttributes.normal = w), c && (f.morphAttributes.color = y), f.morphTargetsRelative = true, f;
  });
}
function $p(f, i) {
  if (f.updateMorphTargets(), i.weights !== void 0)
    for (let r = 0, s = i.weights.length; r < s; r++)
      f.morphTargetInfluences[r] = i.weights[r];
  if (i.extras && Array.isArray(i.extras.targetNames)) {
    const r = i.extras.targetNames;
    if (f.morphTargetInfluences.length === r.length) {
      f.morphTargetDictionary = {};
      for (let s = 0, o = r.length; s < o; s++)
        f.morphTargetDictionary[r[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Xp(f) {
  const i = f.extensions && f.extensions[le.KHR_DRACO_MESH_COMPRESSION];
  let r;
  return i ? r = "draco:" + i.bufferView + ":" + i.indices + ":" + ga(i.attributes) : r = f.indices + ":" + ga(f.attributes) + ":" + f.mode, r;
}
function ga(f) {
  let i = "";
  const r = Object.keys(f).sort();
  for (let s = 0, o = r.length; s < o; s++)
    i += r[s] + ":" + f[r[s]] + ";";
  return i;
}
function go(f) {
  switch (f) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Yp(f) {
  return f.search(/\.jpe?g($|\?)/i) > 0 || f.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : f.search(/\.webp($|\?)/i) > 0 || f.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
var qp = new Matrix4();
var Qp = class {
  constructor(i = {}, r = {}) {
    this.json = i, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new yp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
      refs: {},
      uses: {}
    }, this.cameraCache = {
      refs: {},
      uses: {}
    }, this.lightCache = {
      refs: {},
      uses: {}
    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = false, o = false, c = -1;
    typeof navigator < "u" && (s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, o = navigator.userAgent.indexOf("Firefox") > -1, c = o ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || s || o && c < 98 ? this.textureLoader = new TextureLoader(this.options.manager) : this.textureLoader = new ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(i) {
    this.extensions = i;
  }
  setPlugins(i) {
    this.plugins = i;
  }
  parse(i, r) {
    const s = this, o = this.json, c = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(p) {
      return p._markDefs && p._markDefs();
    }), Promise.all(this._invokeAll(function(p) {
      return p.beforeRoot && p.beforeRoot();
    })).then(function() {
      return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")]);
    }).then(function(p) {
      const h = {
        scene: p[0][o.scene || 0],
        scenes: p[0],
        animations: p[1],
        cameras: p[2],
        asset: o.asset,
        parser: s,
        userData: {}
      };
      qi(c, h, o), ln(h, o), Promise.all(s._invokeAll(function(m) {
        return m.afterRoot && m.afterRoot(h);
      })).then(function() {
        i(h);
      });
    }).catch(r);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const i = this.json.nodes || [], r = this.json.skins || [], s = this.json.meshes || [];
    for (let o = 0, c = r.length; o < c; o++) {
      const p = r[o].joints;
      for (let h = 0, m = p.length; h < m; h++)
        i[p[h]].isBone = true;
    }
    for (let o = 0, c = i.length; o < c; o++) {
      const p = i[o];
      p.mesh !== void 0 && (this._addNodeRef(this.meshCache, p.mesh), p.skin !== void 0 && (s[p.mesh].isSkinnedMesh = true)), p.camera !== void 0 && this._addNodeRef(this.cameraCache, p.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(i, r) {
    r !== void 0 && (i.refs[r] === void 0 && (i.refs[r] = i.uses[r] = 0), i.refs[r]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(i, r, s) {
    if (i.refs[r] <= 1)
      return s;
    const o = s.clone(), c = (p, h) => {
      const m = this.associations.get(p);
      m != null && this.associations.set(h, m);
      for (const [g, _] of p.children.entries())
        c(_, h.children[g]);
    };
    return c(s, o), o.name += "_instance_" + i.uses[r]++, o;
  }
  _invokeOne(i) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let s = 0; s < r.length; s++) {
      const o = i(r[s]);
      if (o)
        return o;
    }
    return null;
  }
  _invokeAll(i) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const s = [];
    for (let o = 0; o < r.length; o++) {
      const c = i(r[o]);
      c && s.push(c);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(i, r) {
    const s = i + ":" + r;
    let o = this.cache.get(s);
    if (!o) {
      switch (i) {
        case "scene":
          o = this.loadScene(r);
          break;
        case "node":
          o = this._invokeOne(function(c) {
            return c.loadNode && c.loadNode(r);
          });
          break;
        case "mesh":
          o = this._invokeOne(function(c) {
            return c.loadMesh && c.loadMesh(r);
          });
          break;
        case "accessor":
          o = this.loadAccessor(r);
          break;
        case "bufferView":
          o = this._invokeOne(function(c) {
            return c.loadBufferView && c.loadBufferView(r);
          });
          break;
        case "buffer":
          o = this.loadBuffer(r);
          break;
        case "material":
          o = this._invokeOne(function(c) {
            return c.loadMaterial && c.loadMaterial(r);
          });
          break;
        case "texture":
          o = this._invokeOne(function(c) {
            return c.loadTexture && c.loadTexture(r);
          });
          break;
        case "skin":
          o = this.loadSkin(r);
          break;
        case "animation":
          o = this._invokeOne(function(c) {
            return c.loadAnimation && c.loadAnimation(r);
          });
          break;
        case "camera":
          o = this.loadCamera(r);
          break;
        default:
          if (o = this._invokeOne(function(c) {
            return c != this && c.getDependency && c.getDependency(i, r);
          }), !o)
            throw new Error("Unknown type: " + i);
          break;
      }
      this.cache.add(s, o);
    }
    return o;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(i) {
    let r = this.cache.get(i);
    if (!r) {
      const s = this, o = this.json[i + (i === "mesh" ? "es" : "s")] || [];
      r = Promise.all(o.map(function(c, p) {
        return s.getDependency(i, p);
      })), this.cache.add(i, r);
    }
    return r;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(i) {
    const r = this.json.buffers[i], s = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && i === 0)
      return Promise.resolve(this.extensions[le.KHR_BINARY_GLTF].body);
    const o = this.options;
    return new Promise(function(c, p) {
      s.load(LoaderUtils.resolveURL(r.uri, o.path), c, void 0, function() {
        p(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(i) {
    const r = this.json.bufferViews[i];
    return this.getDependency("buffer", r.buffer).then(function(s) {
      const o = r.byteLength || 0, c = r.byteOffset || 0;
      return s.slice(c, c + o);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(i) {
    const r = this, s = this.json, o = this.json.accessors[i];
    if (o.bufferView === void 0 && o.sparse === void 0) {
      const p = no[o.type], h = di[o.componentType], m = o.normalized === true, g = new h(o.count * p);
      return Promise.resolve(new BufferAttribute(g, p, m));
    }
    const c = [];
    return o.bufferView !== void 0 ? c.push(this.getDependency("bufferView", o.bufferView)) : c.push(null), o.sparse !== void 0 && (c.push(this.getDependency("bufferView", o.sparse.indices.bufferView)), c.push(this.getDependency("bufferView", o.sparse.values.bufferView))), Promise.all(c).then(function(p) {
      const h = p[0], m = no[o.type], g = di[o.componentType], _ = g.BYTES_PER_ELEMENT, w = _ * m, y = o.byteOffset || 0, C = o.bufferView !== void 0 ? s.bufferViews[o.bufferView].byteStride : void 0, L = o.normalized === true;
      let S2, R;
      if (C && C !== w) {
        const O = Math.floor(y / C), N = "InterleavedBuffer:" + o.bufferView + ":" + o.componentType + ":" + O + ":" + o.count;
        let I = r.cache.get(N);
        I || (S2 = new g(h, O * C, o.count * C / _), I = new InterleavedBuffer(S2, C / _), r.cache.add(N, I)), R = new InterleavedBufferAttribute(I, m, y % C / _, L);
      } else
        h === null ? S2 = new g(o.count * m) : S2 = new g(h, y, o.count * m), R = new BufferAttribute(S2, m, L);
      if (o.sparse !== void 0) {
        const O = no.SCALAR, N = di[o.sparse.indices.componentType], I = o.sparse.indices.byteOffset || 0, D2 = o.sparse.values.byteOffset || 0, Y = new N(p[1], I, o.sparse.count * O), G = new g(p[2], D2, o.sparse.count * m);
        h !== null && (R = new BufferAttribute(R.array.slice(), R.itemSize, R.normalized));
        for (let F = 0, B = Y.length; F < B; F++) {
          const H = Y[F];
          if (R.setX(H, G[F * m]), m >= 2 && R.setY(H, G[F * m + 1]), m >= 3 && R.setZ(H, G[F * m + 2]), m >= 4 && R.setW(H, G[F * m + 3]), m >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return R;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(i) {
    const r = this.json, s = this.options, c = r.textures[i].source, p = r.images[c];
    let h = this.textureLoader;
    if (p.uri) {
      const m = s.manager.getHandler(p.uri);
      m !== null && (h = m);
    }
    return this.loadTextureImage(i, c, h);
  }
  loadTextureImage(i, r, s) {
    const o = this, c = this.json, p = c.textures[i], h = c.images[r], m = (h.uri || h.bufferView) + ":" + p.sampler;
    if (this.textureCache[m])
      return this.textureCache[m];
    const g = this.loadImageSource(r, s).then(function(_) {
      _.flipY = false, _.name = p.name || h.name || "", _.name === "" && typeof h.uri == "string" && h.uri.startsWith("data:image/") === false && (_.name = h.uri);
      const y = (c.samplers || {})[p.sampler] || {};
      return _.magFilter = va[y.magFilter] || LinearFilter, _.minFilter = va[y.minFilter] || LinearMipmapLinearFilter, _.wrapS = ba[y.wrapS] || RepeatWrapping, _.wrapT = ba[y.wrapT] || RepeatWrapping, o.associations.set(_, {
        textures: i
      }), _;
    }).catch(function() {
      return null;
    });
    return this.textureCache[m] = g, g;
  }
  loadImageSource(i, r) {
    const s = this, o = this.json, c = this.options;
    if (this.sourceCache[i] !== void 0)
      return this.sourceCache[i].then((w) => w.clone());
    const p = o.images[i], h = self.URL || self.webkitURL;
    let m = p.uri || "", g = false;
    if (p.bufferView !== void 0)
      m = s.getDependency("bufferView", p.bufferView).then(function(w) {
        g = true;
        const y = new Blob([w], {
          type: p.mimeType
        });
        return m = h.createObjectURL(y), m;
      });
    else if (p.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + i + " is missing URI and bufferView");
    const _ = Promise.resolve(m).then(function(w) {
      return new Promise(function(y, C) {
        let L = y;
        r.isImageBitmapLoader === true && (L = function(S2) {
          const R = new Texture(S2);
          R.needsUpdate = true, y(R);
        }), r.load(LoaderUtils.resolveURL(w, c.path), L, void 0, C);
      });
    }).then(function(w) {
      return g === true && h.revokeObjectURL(m), w.userData.mimeType = p.mimeType || Yp(p.uri), w;
    }).catch(function(w) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", m), w;
    });
    return this.sourceCache[i] = _, _;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(i, r, s, o) {
    const c = this;
    return this.getDependency("texture", s.index).then(function(p) {
      if (!p)
        return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (p = p.clone(), p.channel = s.texCoord), c.extensions[le.KHR_TEXTURE_TRANSFORM]) {
        const h = s.extensions !== void 0 ? s.extensions[le.KHR_TEXTURE_TRANSFORM] : void 0;
        if (h) {
          const m = c.associations.get(p);
          p = c.extensions[le.KHR_TEXTURE_TRANSFORM].extendTexture(p, h), c.associations.set(p, m);
        }
      }
      return o !== void 0 && (p.encoding = o), i[r] = p, p;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(i) {
    const r = i.geometry;
    let s = i.material;
    const o = r.attributes.tangent === void 0, c = r.attributes.color !== void 0, p = r.attributes.normal === void 0;
    if (i.isPoints) {
      const h = "PointsMaterial:" + s.uuid;
      let m = this.cache.get(h);
      m || (m = new PointsMaterial(), Material.prototype.copy.call(m, s), m.color.copy(s.color), m.map = s.map, m.sizeAttenuation = false, this.cache.add(h, m)), s = m;
    } else if (i.isLine) {
      const h = "LineBasicMaterial:" + s.uuid;
      let m = this.cache.get(h);
      m || (m = new LineBasicMaterial(), Material.prototype.copy.call(m, s), m.color.copy(s.color), m.map = s.map, this.cache.add(h, m)), s = m;
    }
    if (o || c || p) {
      let h = "ClonedMaterial:" + s.uuid + ":";
      o && (h += "derivative-tangents:"), c && (h += "vertex-colors:"), p && (h += "flat-shading:");
      let m = this.cache.get(h);
      m || (m = s.clone(), c && (m.vertexColors = true), p && (m.flatShading = true), o && (m.normalScale && (m.normalScale.y *= -1), m.clearcoatNormalScale && (m.clearcoatNormalScale.y *= -1)), this.cache.add(h, m), this.associations.set(m, this.associations.get(s))), s = m;
    }
    i.material = s;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(i) {
    const r = this, s = this.json, o = this.extensions, c = s.materials[i];
    let p;
    const h = {}, m = c.extensions || {}, g = [];
    if (m[le.KHR_MATERIALS_UNLIT]) {
      const w = o[le.KHR_MATERIALS_UNLIT];
      p = w.getMaterialType(), g.push(w.extendParams(h, c, r));
    } else {
      const w = c.pbrMetallicRoughness || {};
      if (h.color = new Color(1, 1, 1), h.opacity = 1, Array.isArray(w.baseColorFactor)) {
        const y = w.baseColorFactor;
        h.color.fromArray(y), h.opacity = y[3];
      }
      w.baseColorTexture !== void 0 && g.push(r.assignTexture(h, "map", w.baseColorTexture, sRGBEncoding)), h.metalness = w.metallicFactor !== void 0 ? w.metallicFactor : 1, h.roughness = w.roughnessFactor !== void 0 ? w.roughnessFactor : 1, w.metallicRoughnessTexture !== void 0 && (g.push(r.assignTexture(h, "metalnessMap", w.metallicRoughnessTexture)), g.push(r.assignTexture(h, "roughnessMap", w.metallicRoughnessTexture))), p = this._invokeOne(function(y) {
        return y.getMaterialType && y.getMaterialType(i);
      }), g.push(Promise.all(this._invokeAll(function(y) {
        return y.extendMaterialParams && y.extendMaterialParams(i, h);
      })));
    }
    c.doubleSided === true && (h.side = DoubleSide);
    const _ = c.alphaMode || io.OPAQUE;
    if (_ === io.BLEND ? (h.transparent = true, h.depthWrite = false) : (h.transparent = false, _ === io.MASK && (h.alphaTest = c.alphaCutoff !== void 0 ? c.alphaCutoff : 0.5)), c.normalTexture !== void 0 && p !== MeshBasicMaterial && (g.push(r.assignTexture(h, "normalMap", c.normalTexture)), h.normalScale = new Vector2(1, 1), c.normalTexture.scale !== void 0)) {
      const w = c.normalTexture.scale;
      h.normalScale.set(w, w);
    }
    return c.occlusionTexture !== void 0 && p !== MeshBasicMaterial && (g.push(r.assignTexture(h, "aoMap", c.occlusionTexture)), c.occlusionTexture.strength !== void 0 && (h.aoMapIntensity = c.occlusionTexture.strength)), c.emissiveFactor !== void 0 && p !== MeshBasicMaterial && (h.emissive = new Color().fromArray(c.emissiveFactor)), c.emissiveTexture !== void 0 && p !== MeshBasicMaterial && g.push(r.assignTexture(h, "emissiveMap", c.emissiveTexture, sRGBEncoding)), Promise.all(g).then(function() {
      const w = new p(h);
      return c.name && (w.name = c.name), ln(w, c), r.associations.set(w, {
        materials: i
      }), c.extensions && qi(o, w, c), w;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(i) {
    const r = PropertyBinding.sanitizeNodeName(i || "");
    let s = r;
    for (let o = 1; this.nodeNamesUsed[s]; ++o)
      s = r + "_" + o;
    return this.nodeNamesUsed[s] = true, s;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(i) {
    const r = this, s = this.extensions, o = this.primitiveCache;
    function c(h) {
      return s[le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h, r).then(function(m) {
        return _a(m, h, r);
      });
    }
    const p = [];
    for (let h = 0, m = i.length; h < m; h++) {
      const g = i[h], _ = Xp(g), w = o[_];
      if (w)
        p.push(w.promise);
      else {
        let y;
        g.extensions && g.extensions[le.KHR_DRACO_MESH_COMPRESSION] ? y = c(g) : y = _a(new BufferGeometry(), g, r), o[_] = {
          primitive: g,
          promise: y
        }, p.push(y);
      }
    }
    return Promise.all(p);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(i) {
    const r = this, s = this.json, o = this.extensions, c = s.meshes[i], p = c.primitives, h = [];
    for (let m = 0, g = p.length; m < g; m++) {
      const _ = p[m].material === void 0 ? Hp(this.cache) : this.getDependency("material", p[m].material);
      h.push(_);
    }
    return h.push(r.loadGeometries(p)), Promise.all(h).then(function(m) {
      const g = m.slice(0, m.length - 1), _ = m[m.length - 1], w = [];
      for (let C = 0, L = _.length; C < L; C++) {
        const S2 = _[C], R = p[C];
        let O;
        const N = g[C];
        if (R.mode === dt.TRIANGLES || R.mode === dt.TRIANGLE_STRIP || R.mode === dt.TRIANGLE_FAN || R.mode === void 0)
          O = c.isSkinnedMesh === true ? new SkinnedMesh(S2, N) : new Mesh(S2, N), O.isSkinnedMesh === true && O.normalizeSkinWeights(), R.mode === dt.TRIANGLE_STRIP ? O.geometry = ha(O.geometry, TriangleStripDrawMode) : R.mode === dt.TRIANGLE_FAN && (O.geometry = ha(O.geometry, TriangleFanDrawMode));
        else if (R.mode === dt.LINES)
          O = new LineSegments(S2, N);
        else if (R.mode === dt.LINE_STRIP)
          O = new Line(S2, N);
        else if (R.mode === dt.LINE_LOOP)
          O = new LineLoop(S2, N);
        else if (R.mode === dt.POINTS)
          O = new Points(S2, N);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + R.mode);
        Object.keys(O.geometry.morphAttributes).length > 0 && $p(O, c), O.name = r.createUniqueName(c.name || "mesh_" + i), ln(O, c), R.extensions && qi(o, O, R), r.assignFinalMaterial(O), w.push(O);
      }
      for (let C = 0, L = w.length; C < L; C++)
        r.associations.set(w[C], {
          meshes: i,
          primitives: C
        });
      if (w.length === 1)
        return w[0];
      const y = new Group();
      r.associations.set(y, {
        meshes: i
      });
      for (let C = 0, L = w.length; C < L; C++)
        y.add(w[C]);
      return y;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(i) {
    let r;
    const s = this.json.cameras[i], o = s[s.type];
    if (!o) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? r = new PerspectiveCamera(MathUtils.radToDeg(o.yfov), o.aspectRatio || 1, o.znear || 1, o.zfar || 2e6) : s.type === "orthographic" && (r = new OrthographicCamera(-o.xmag, o.xmag, o.ymag, -o.ymag, o.znear, o.zfar)), s.name && (r.name = this.createUniqueName(s.name)), ln(r, s), Promise.resolve(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(i) {
    const r = this.json.skins[i], s = [];
    for (let o = 0, c = r.joints.length; o < c; o++)
      s.push(this._loadNodeShallow(r.joints[o]));
    return r.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", r.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(o) {
      const c = o.pop(), p = o, h = [], m = [];
      for (let g = 0, _ = p.length; g < _; g++) {
        const w = p[g];
        if (w) {
          h.push(w);
          const y = new Matrix4();
          c !== null && y.fromArray(c.array, g * 16), m.push(y);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[g]);
      }
      return new Skeleton(h, m);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(i) {
    const s = this.json.animations[i], o = s.name ? s.name : "animation_" + i, c = [], p = [], h = [], m = [], g = [];
    for (let _ = 0, w = s.channels.length; _ < w; _++) {
      const y = s.channels[_], C = s.samplers[y.sampler], L = y.target, S2 = L.node, R = s.parameters !== void 0 ? s.parameters[C.input] : C.input, O = s.parameters !== void 0 ? s.parameters[C.output] : C.output;
      L.node !== void 0 && (c.push(this.getDependency("node", S2)), p.push(this.getDependency("accessor", R)), h.push(this.getDependency("accessor", O)), m.push(C), g.push(L));
    }
    return Promise.all([Promise.all(c), Promise.all(p), Promise.all(h), Promise.all(m), Promise.all(g)]).then(function(_) {
      const w = _[0], y = _[1], C = _[2], L = _[3], S2 = _[4], R = [];
      for (let O = 0, N = w.length; O < N; O++) {
        const I = w[O], D2 = y[O], Y = C[O], G = L[O], F = S2[O];
        if (I === void 0)
          continue;
        I.updateMatrix();
        let B;
        switch (sn[F.path]) {
          case sn.weights:
            B = NumberKeyframeTrack;
            break;
          case sn.rotation:
            B = QuaternionKeyframeTrack;
            break;
          case sn.position:
          case sn.scale:
          default:
            B = VectorKeyframeTrack;
            break;
        }
        const H = I.name ? I.name : I.uuid, K = G.interpolation !== void 0 ? Gp[G.interpolation] : InterpolateLinear, q = [];
        sn[F.path] === sn.weights ? I.traverse(function(_e) {
          _e.morphTargetInfluences && q.push(_e.name ? _e.name : _e.uuid);
        }) : q.push(H);
        let pe = Y.array;
        if (Y.normalized) {
          const _e = go(pe.constructor), ce = new Float32Array(pe.length);
          for (let me = 0, he = pe.length; me < he; me++)
            ce[me] = pe[me] * _e;
          pe = ce;
        }
        for (let _e = 0, ce = q.length; _e < ce; _e++) {
          const me = new B(q[_e] + "." + sn[F.path], D2.array, pe, K);
          G.interpolation === "CUBICSPLINE" && (me.createInterpolant = function(ee) {
            const X = this instanceof QuaternionKeyframeTrack ? Up : Qa;
            return new X(this.times, this.values, this.getValueSize() / 3, ee);
          }, me.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true), R.push(me);
        }
      }
      return new AnimationClip(o, void 0, R);
    });
  }
  createNodeMesh(i) {
    const r = this.json, s = this, o = r.nodes[i];
    return o.mesh === void 0 ? null : s.getDependency("mesh", o.mesh).then(function(c) {
      const p = s._getNodeRef(s.meshCache, o.mesh, c);
      return o.weights !== void 0 && p.traverse(function(h) {
        if (h.isMesh)
          for (let m = 0, g = o.weights.length; m < g; m++)
            h.morphTargetInfluences[m] = o.weights[m];
      }), p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(i) {
    const r = this.json, s = this, o = r.nodes[i], c = s._loadNodeShallow(i), p = [], h = o.children || [];
    for (let g = 0, _ = h.length; g < _; g++)
      p.push(s.getDependency("node", h[g]));
    const m = o.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", o.skin);
    return Promise.all([c, Promise.all(p), m]).then(function(g) {
      const _ = g[0], w = g[1], y = g[2];
      y !== null && _.traverse(function(C) {
        C.isSkinnedMesh && C.bind(y, qp);
      });
      for (let C = 0, L = w.length; C < L; C++)
        _.add(w[C]);
      return _;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(i) {
    const r = this.json, s = this.extensions, o = this;
    if (this.nodeCache[i] !== void 0)
      return this.nodeCache[i];
    const c = r.nodes[i], p = c.name ? o.createUniqueName(c.name) : "", h = [], m = o._invokeOne(function(g) {
      return g.createNodeMesh && g.createNodeMesh(i);
    });
    return m && h.push(m), c.camera !== void 0 && h.push(o.getDependency("camera", c.camera).then(function(g) {
      return o._getNodeRef(o.cameraCache, c.camera, g);
    })), o._invokeAll(function(g) {
      return g.createNodeAttachment && g.createNodeAttachment(i);
    }).forEach(function(g) {
      h.push(g);
    }), this.nodeCache[i] = Promise.all(h).then(function(g) {
      let _;
      if (c.isBone === true ? _ = new Bone() : g.length > 1 ? _ = new Group() : g.length === 1 ? _ = g[0] : _ = new Object3D(), _ !== g[0])
        for (let w = 0, y = g.length; w < y; w++)
          _.add(g[w]);
      if (c.name && (_.userData.name = c.name, _.name = p), ln(_, c), c.extensions && qi(s, _, c), c.matrix !== void 0) {
        const w = new Matrix4();
        w.fromArray(c.matrix), _.applyMatrix4(w);
      } else
        c.translation !== void 0 && _.position.fromArray(c.translation), c.rotation !== void 0 && _.quaternion.fromArray(c.rotation), c.scale !== void 0 && _.scale.fromArray(c.scale);
      return o.associations.has(_) || o.associations.set(_, {}), o.associations.get(_).nodes = i, _;
    }), this.nodeCache[i];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(i) {
    const r = this.extensions, s = this.json.scenes[i], o = this, c = new Group();
    s.name && (c.name = o.createUniqueName(s.name)), ln(c, s), s.extensions && qi(r, c, s);
    const p = s.nodes || [], h = [];
    for (let m = 0, g = p.length; m < g; m++)
      h.push(o.getDependency("node", p[m]));
    return Promise.all(h).then(function(m) {
      for (let _ = 0, w = m.length; _ < w; _++)
        c.add(m[_]);
      const g = (_) => {
        const w = /* @__PURE__ */ new Map();
        for (const [y, C] of o.associations)
          (y instanceof Material || y instanceof Texture) && w.set(y, C);
        return _.traverse((y) => {
          const C = o.associations.get(y);
          C != null && w.set(y, C);
        }), w;
      };
      return o.associations = g(c), c;
    });
  }
};
function Zp(f, i, r) {
  const s = i.attributes, o = new Box3();
  if (s.POSITION !== void 0) {
    const h = r.json.accessors[s.POSITION], m = h.min, g = h.max;
    if (m !== void 0 && g !== void 0) {
      if (o.set(new Vector3(m[0], m[1], m[2]), new Vector3(g[0], g[1], g[2])), h.normalized) {
        const _ = go(di[h.componentType]);
        o.min.multiplyScalar(_), o.max.multiplyScalar(_);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const c = i.targets;
  if (c !== void 0) {
    const h = new Vector3(), m = new Vector3();
    for (let g = 0, _ = c.length; g < _; g++) {
      const w = c[g];
      if (w.POSITION !== void 0) {
        const y = r.json.accessors[w.POSITION], C = y.min, L = y.max;
        if (C !== void 0 && L !== void 0) {
          if (m.setX(Math.max(Math.abs(C[0]), Math.abs(L[0]))), m.setY(Math.max(Math.abs(C[1]), Math.abs(L[1]))), m.setZ(Math.max(Math.abs(C[2]), Math.abs(L[2]))), y.normalized) {
            const S2 = go(di[y.componentType]);
            m.multiplyScalar(S2);
          }
          h.max(m);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    o.expandByVector(h);
  }
  f.boundingBox = o;
  const p = new Sphere();
  o.getCenter(p.center), p.radius = o.min.distanceTo(o.max) / 2, f.boundingSphere = p;
}
function _a(f, i, r) {
  const s = i.attributes, o = [];
  function c(p, h) {
    return r.getDependency("accessor", p).then(function(m) {
      f.setAttribute(h, m);
    });
  }
  for (const p in s) {
    const h = bo[p] || p.toLowerCase();
    h in f.attributes || o.push(c(s[p], h));
  }
  if (i.indices !== void 0 && !f.index) {
    const p = r.getDependency("accessor", i.indices).then(function(h) {
      f.setIndex(h);
    });
    o.push(p);
  }
  return ln(f, i), Zp(f, i, r), Promise.all(o).then(function() {
    return i.targets !== void 0 ? Kp(f, i.targets, r) : f;
  });
}
var wa = class extends ExtrudeGeometry {
  constructor(i, r = {}) {
    const {
      bevelEnabled: s = false,
      bevelSize: o = 8,
      bevelThickness: c = 10,
      font: p,
      height: h = 50,
      size: m = 100,
      lineHeight: g = 1,
      letterSpacing: _ = 0,
      ...w
    } = r;
    if (p === void 0)
      super();
    else {
      const y = p.generateShapes(i, m, {
        lineHeight: g,
        letterSpacing: _
      });
      super(y, {
        ...w,
        bevelEnabled: s,
        bevelSize: o,
        bevelThickness: c,
        depth: h
      });
    }
    this.type = "TextGeometry";
  }
};
function Za(f, i, r) {
  const s = r.length - f - 1;
  if (i >= r[s])
    return s - 1;
  if (i <= r[f])
    return f;
  let o = f, c = s, p = Math.floor((o + c) / 2);
  for (; i < r[p] || i >= r[p + 1]; )
    i < r[p] ? c = p : o = p, p = Math.floor((o + c) / 2);
  return p;
}
function Wp(f, i, r, s) {
  const o = [], c = [], p = [];
  o[0] = 1;
  for (let h = 1; h <= r; ++h) {
    c[h] = i - s[f + 1 - h], p[h] = s[f + h] - i;
    let m = 0;
    for (let g = 0; g < h; ++g) {
      const _ = p[g + 1], w = c[h - g], y = o[g] / (_ + w);
      o[g] = m + _ * y, m = w * y;
    }
    o[h] = m;
  }
  return o;
}
function Jp(f, i, r, s) {
  const o = Za(f, s, i), c = Wp(o, s, f, i), p = new Vector4(0, 0, 0, 0);
  for (let h = 0; h <= f; ++h) {
    const m = r[o - f + h], g = c[h], _ = m.w * g;
    p.x += m.x * _, p.y += m.y * _, p.z += m.z * _, p.w += m.w * g;
  }
  return p;
}
function eh(f, i, r, s, o) {
  const c = [];
  for (let y = 0; y <= r; ++y)
    c[y] = 0;
  const p = [];
  for (let y = 0; y <= s; ++y)
    p[y] = c.slice(0);
  const h = [];
  for (let y = 0; y <= r; ++y)
    h[y] = c.slice(0);
  h[0][0] = 1;
  const m = c.slice(0), g = c.slice(0);
  for (let y = 1; y <= r; ++y) {
    m[y] = i - o[f + 1 - y], g[y] = o[f + y] - i;
    let C = 0;
    for (let L = 0; L < y; ++L) {
      const S2 = g[L + 1], R = m[y - L];
      h[y][L] = S2 + R;
      const O = h[L][y - 1] / h[y][L];
      h[L][y] = C + S2 * O, C = R * O;
    }
    h[y][y] = C;
  }
  for (let y = 0; y <= r; ++y)
    p[0][y] = h[y][r];
  for (let y = 0; y <= r; ++y) {
    let C = 0, L = 1;
    const S2 = [];
    for (let R = 0; R <= r; ++R)
      S2[R] = c.slice(0);
    S2[0][0] = 1;
    for (let R = 1; R <= s; ++R) {
      let O = 0;
      const N = y - R, I = r - R;
      y >= R && (S2[L][0] = S2[C][0] / h[I + 1][N], O = S2[L][0] * h[N][I]);
      const D2 = N >= -1 ? 1 : -N, Y = y - 1 <= I ? R - 1 : r - y;
      for (let G = D2; G <= Y; ++G)
        S2[L][G] = (S2[C][G] - S2[C][G - 1]) / h[I + 1][N + G], O += S2[L][G] * h[N + G][I];
      y <= I && (S2[L][R] = -S2[C][R - 1] / h[I + 1][y], O += S2[L][R] * h[y][I]), p[R][y] = O;
      var _ = C;
      C = L, L = _;
    }
  }
  var w = r;
  for (let y = 1; y <= s; ++y) {
    for (let C = 0; C <= r; ++C)
      p[y][C] *= w;
    w *= r - y;
  }
  return p;
}
function th(f, i, r, s, o) {
  const c = o < f ? o : f, p = [], h = Za(f, s, i), m = eh(h, s, f, c, i), g = [];
  for (let w = 0; w < r.length; ++w) {
    var _ = r[w].clone();
    const y = _.w;
    _.x *= y, _.y *= y, _.z *= y, g[w] = _;
  }
  for (let w = 0; w <= c; ++w) {
    var _ = g[h - f].clone().multiplyScalar(m[w][0]);
    for (let C = 1; C <= f; ++C)
      _.add(g[h - f + C].clone().multiplyScalar(m[w][C]));
    p[w] = _;
  }
  for (let w = c + 1; w <= o + 1; ++w)
    p[w] = new Vector4(0, 0, 0);
  return p;
}
function nh(f, i) {
  let r = 1;
  for (let o = 2; o <= f; ++o)
    r *= o;
  let s = 1;
  for (let o = 2; o <= i; ++o)
    s *= o;
  for (let o = 2; o <= f - i; ++o)
    s *= o;
  return r / s;
}
function ih(f) {
  const i = f.length, r = [], s = [];
  for (let c = 0; c < i; ++c) {
    const p = f[c];
    r[c] = new Vector3(p.x, p.y, p.z), s[c] = p.w;
  }
  const o = [];
  for (let c = 0; c < i; ++c) {
    const p = r[c].clone();
    for (let h = 1; h <= c; ++h)
      p.sub(o[c - h].clone().multiplyScalar(nh(c, h) * s[h]));
    o[c] = p.divideScalar(s[0]);
  }
  return o;
}
function sh(f, i, r, s, o) {
  const c = th(f, i, r, s, o);
  return ih(c);
}
var ya = class extends Curve {
  constructor(i, r, s, o, c) {
    super(), this.degree = i, this.knots = r, this.controlPoints = [], this.startKnot = o || 0, this.endKnot = c || this.knots.length - 1;
    for (let p = 0; p < s.length; ++p) {
      const h = s[p];
      this.controlPoints[p] = new Vector4(h.x, h.y, h.z, h.w);
    }
  }
  getPoint(i, r) {
    const s = r || new Vector3(), o = this.knots[this.startKnot] + i * (this.knots[this.endKnot] - this.knots[this.startKnot]), c = Jp(this.degree, this.knots, this.controlPoints, o);
    return c.w != 1 && c.divideScalar(c.w), s.set(c.x, c.y, c.z);
  }
  getTangent(i, r) {
    const s = r || new Vector3(), o = this.knots[0] + i * (this.knots[this.knots.length - 1] - this.knots[0]), c = sh(this.degree, this.knots, this.controlPoints, o, 1);
    return s.copy(c[1]).normalize(), s;
  }
};
var se;
var Ve;
var tt;
var rh = class extends Loader {
  constructor(i) {
    super(i);
  }
  load(i, r, s, o) {
    const c = this, p = c.path === "" ? LoaderUtils.extractUrlBase(i) : c.path, h = new FileLoader(this.manager);
    h.setPath(c.path), h.setResponseType("arraybuffer"), h.setRequestHeader(c.requestHeader), h.setWithCredentials(c.withCredentials), h.load(i, function(m) {
      try {
        r(c.parse(m, p));
      } catch (g) {
        o ? o(g) : console.error(g), c.manager.itemError(i);
      }
    }, s, o);
  }
  parse(i, r) {
    if (ph(i))
      se = new uh().parse(i);
    else {
      const o = tl(i);
      if (!hh(o))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Ea(o) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Ea(o));
      se = new ch().parse(o);
    }
    const s = new TextureLoader(this.manager).setPath(this.resourcePath || r).setCrossOrigin(this.crossOrigin);
    return new oh(s, this.manager).parse(se);
  }
};
var oh = class {
  constructor(i, r) {
    this.textureLoader = i, this.manager = r;
  }
  parse() {
    Ve = this.parseConnections();
    const i = this.parseImages(), r = this.parseTextures(i), s = this.parseMaterials(r), o = this.parseDeformers(), c = new ah().parse(o);
    return this.parseScene(o, c, s), tt;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const i = /* @__PURE__ */ new Map();
    return "Connections" in se && se.Connections.connections.forEach(function(s) {
      const o = s[0], c = s[1], p = s[2];
      i.has(o) || i.set(o, {
        parents: [],
        children: []
      });
      const h = {
        ID: c,
        relationship: p
      };
      i.get(o).parents.push(h), i.has(c) || i.set(c, {
        parents: [],
        children: []
      });
      const m = {
        ID: o,
        relationship: p
      };
      i.get(c).children.push(m);
    }), i;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const i = {}, r = {};
    if ("Video" in se.Objects) {
      const s = se.Objects.Video;
      for (const o in s) {
        const c = s[o], p = parseInt(o);
        if (i[p] = c.RelativeFilename || c.Filename, "Content" in c) {
          const h = c.Content instanceof ArrayBuffer && c.Content.byteLength > 0, m = typeof c.Content == "string" && c.Content !== "";
          if (h || m) {
            const g = this.parseImage(s[o]);
            r[c.RelativeFilename || c.Filename] = g;
          }
        }
      }
    }
    for (const s in i) {
      const o = i[s];
      r[o] !== void 0 ? i[s] = r[o] : i[s] = i[s].split("\\").pop();
    }
    return i;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(i) {
    const r = i.Content, s = i.RelativeFilename || i.Filename, o = s.slice(s.lastIndexOf(".") + 1).toLowerCase();
    let c;
    switch (o) {
      case "bmp":
        c = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        c = "image/jpeg";
        break;
      case "png":
        c = "image/png";
        break;
      case "tif":
        c = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", s), c = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + o + '" is not supported.');
        return;
    }
    if (typeof r == "string")
      return "data:" + c + ";base64," + r;
    {
      const p = new Uint8Array(r);
      return window.URL.createObjectURL(new Blob([p], {
        type: c
      }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(i) {
    const r = /* @__PURE__ */ new Map();
    if ("Texture" in se.Objects) {
      const s = se.Objects.Texture;
      for (const o in s) {
        const c = this.parseTexture(s[o], i);
        r.set(parseInt(o), c);
      }
    }
    return r;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(i, r) {
    const s = this.loadTexture(i, r);
    s.ID = i.id, s.name = i.attrName;
    const o = i.WrapModeU, c = i.WrapModeV, p = o !== void 0 ? o.value : 0, h = c !== void 0 ? c.value : 0;
    if (s.wrapS = p === 0 ? RepeatWrapping : ClampToEdgeWrapping, s.wrapT = h === 0 ? RepeatWrapping : ClampToEdgeWrapping, "Scaling" in i) {
      const m = i.Scaling.value;
      s.repeat.x = m[0], s.repeat.y = m[1];
    }
    return s;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(i, r) {
    let s;
    const o = this.textureLoader.path, c = Ve.get(i.id).children;
    c !== void 0 && c.length > 0 && r[c[0].ID] !== void 0 && (s = r[c[0].ID], (s.indexOf("blob:") === 0 || s.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let p;
    const h = i.FileName.slice(-3).toLowerCase();
    if (h === "tga") {
      const m = this.manager.getHandler(".tga");
      m === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", i.RelativeFilename), p = new Texture()) : (m.setPath(this.textureLoader.path), p = m.load(s));
    } else
      h === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", i.RelativeFilename), p = new Texture()) : p = this.textureLoader.load(s);
    return this.textureLoader.setPath(o), p;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(i) {
    const r = /* @__PURE__ */ new Map();
    if ("Material" in se.Objects) {
      const s = se.Objects.Material;
      for (const o in s) {
        const c = this.parseMaterial(s[o], i);
        c !== null && r.set(parseInt(o), c);
      }
    }
    return r;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(i, r) {
    const s = i.id, o = i.attrName;
    let c = i.ShadingModel;
    if (typeof c == "object" && (c = c.value), !Ve.has(s))
      return null;
    const p = this.parseParameters(i, r, s);
    let h;
    switch (c.toLowerCase()) {
      case "phong":
        h = new MeshPhongMaterial();
        break;
      case "lambert":
        h = new MeshLambertMaterial();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', c), h = new MeshPhongMaterial();
        break;
    }
    return h.setValues(p), h.name = o, h;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(i, r, s) {
    const o = {};
    i.BumpFactor && (o.bumpScale = i.BumpFactor.value), i.Diffuse ? o.color = new Color().fromArray(i.Diffuse.value) : i.DiffuseColor && (i.DiffuseColor.type === "Color" || i.DiffuseColor.type === "ColorRGB") && (o.color = new Color().fromArray(i.DiffuseColor.value)), i.DisplacementFactor && (o.displacementScale = i.DisplacementFactor.value), i.Emissive ? o.emissive = new Color().fromArray(i.Emissive.value) : i.EmissiveColor && (i.EmissiveColor.type === "Color" || i.EmissiveColor.type === "ColorRGB") && (o.emissive = new Color().fromArray(i.EmissiveColor.value)), i.EmissiveFactor && (o.emissiveIntensity = parseFloat(i.EmissiveFactor.value)), i.Opacity && (o.opacity = parseFloat(i.Opacity.value)), o.opacity < 1 && (o.transparent = true), i.ReflectionFactor && (o.reflectivity = i.ReflectionFactor.value), i.Shininess && (o.shininess = i.Shininess.value), i.Specular ? o.specular = new Color().fromArray(i.Specular.value) : i.SpecularColor && i.SpecularColor.type === "Color" && (o.specular = new Color().fromArray(i.SpecularColor.value));
    const c = this;
    return Ve.get(s).children.forEach(function(p) {
      const h = p.relationship;
      switch (h) {
        case "Bump":
          o.bumpMap = c.getTexture(r, p.ID);
          break;
        case "Maya|TEX_ao_map":
          o.aoMap = c.getTexture(r, p.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          o.map = c.getTexture(r, p.ID), o.map !== void 0 && (o.map.encoding = sRGBEncoding);
          break;
        case "DisplacementColor":
          o.displacementMap = c.getTexture(r, p.ID);
          break;
        case "EmissiveColor":
          o.emissiveMap = c.getTexture(r, p.ID), o.emissiveMap !== void 0 && (o.emissiveMap.encoding = sRGBEncoding);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          o.normalMap = c.getTexture(r, p.ID);
          break;
        case "ReflectionColor":
          o.envMap = c.getTexture(r, p.ID), o.envMap !== void 0 && (o.envMap.mapping = EquirectangularReflectionMapping, o.envMap.encoding = sRGBEncoding);
          break;
        case "SpecularColor":
          o.specularMap = c.getTexture(r, p.ID), o.specularMap !== void 0 && (o.specularMap.encoding = sRGBEncoding);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          o.alphaMap = c.getTexture(r, p.ID), o.transparent = true;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", h);
          break;
      }
    }), o;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(i, r) {
    return "LayeredTexture" in se.Objects && r in se.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), r = Ve.get(r).children[0].ID), i.get(r);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const i = {}, r = {};
    if ("Deformer" in se.Objects) {
      const s = se.Objects.Deformer;
      for (const o in s) {
        const c = s[o], p = Ve.get(parseInt(o));
        if (c.attrType === "Skin") {
          const h = this.parseSkeleton(p, s);
          h.ID = o, p.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), h.geometryID = p.parents[0].ID, i[o] = h;
        } else if (c.attrType === "BlendShape") {
          const h = {
            id: o
          };
          h.rawTargets = this.parseMorphTargets(p, s), h.id = o, p.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), r[o] = h;
        }
      }
    }
    return {
      skeletons: i,
      morphTargets: r
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(i, r) {
    const s = [];
    return i.children.forEach(function(o) {
      const c = r[o.ID];
      if (c.attrType !== "Cluster")
        return;
      const p = {
        ID: o.ID,
        indices: [],
        weights: [],
        transformLink: new Matrix4().fromArray(c.TransformLink.a)
        // transform: new Matrix4().fromArray( boneNode.Transform.a ),
        // linkMode: boneNode.Mode,
      };
      "Indexes" in c && (p.indices = c.Indexes.a, p.weights = c.Weights.a), s.push(p);
    }), {
      rawBones: s,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(i, r) {
    const s = [];
    for (let o = 0; o < i.children.length; o++) {
      const c = i.children[o], p = r[c.ID], h = {
        name: p.attrName,
        initialWeight: p.DeformPercent,
        id: p.id,
        fullWeights: p.FullWeights.a
      };
      if (p.attrType !== "BlendShapeChannel")
        return;
      h.geoID = Ve.get(parseInt(c.ID)).children.filter(function(m) {
        return m.relationship === void 0;
      })[0].ID, s.push(h);
    }
    return s;
  }
  // create the main Group() to be returned by the loader
  parseScene(i, r, s) {
    tt = new Group();
    const o = this.parseModels(i.skeletons, r, s), c = se.Objects.Model, p = this;
    o.forEach(function(m) {
      const g = c[m.ID];
      p.setLookAtProperties(m, g), Ve.get(m.ID).parents.forEach(function(w) {
        const y = o.get(w.ID);
        y !== void 0 && y.add(m);
      }), m.parent === null && tt.add(m);
    }), this.bindSkeleton(i.skeletons, r, o), this.createAmbientLight(), tt.traverse(function(m) {
      if (m.userData.transformData) {
        m.parent && (m.userData.transformData.parentMatrix = m.parent.matrix, m.userData.transformData.parentMatrixWorld = m.parent.matrixWorld);
        const g = Ja(m.userData.transformData);
        m.applyMatrix4(g), m.updateWorldMatrix();
      }
    });
    const h = new lh().parse();
    tt.children.length === 1 && tt.children[0].isGroup && (tt.children[0].animations = h, tt = tt.children[0]), tt.animations = h;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(i, r, s) {
    const o = /* @__PURE__ */ new Map(), c = se.Objects.Model;
    for (const p in c) {
      const h = parseInt(p), m = c[p], g = Ve.get(h);
      let _ = this.buildSkeleton(g, i, h, m.attrName);
      if (!_) {
        switch (m.attrType) {
          case "Camera":
            _ = this.createCamera(g);
            break;
          case "Light":
            _ = this.createLight(g);
            break;
          case "Mesh":
            _ = this.createMesh(g, r, s);
            break;
          case "NurbsCurve":
            _ = this.createCurve(g, r);
            break;
          case "LimbNode":
          case "Root":
            _ = new Bone();
            break;
          case "Null":
          default:
            _ = new Group();
            break;
        }
        _.name = m.attrName ? PropertyBinding.sanitizeNodeName(m.attrName) : "", _.ID = h;
      }
      this.getTransformData(_, m), o.set(h, _);
    }
    return o;
  }
  buildSkeleton(i, r, s, o) {
    let c = null;
    return i.parents.forEach(function(p) {
      for (const h in r) {
        const m = r[h];
        m.rawBones.forEach(function(g, _) {
          if (g.ID === p.ID) {
            const w = c;
            c = new Bone(), c.matrixWorld.copy(g.transformLink), c.name = o ? PropertyBinding.sanitizeNodeName(o) : "", c.ID = s, m.bones[_] = c, w !== null && c.add(w);
          }
        });
      }
    }), c;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(i) {
    let r, s;
    if (i.children.forEach(function(o) {
      const c = se.Objects.NodeAttribute[o.ID];
      c !== void 0 && (s = c);
    }), s === void 0)
      r = new Object3D();
    else {
      let o = 0;
      s.CameraProjectionType !== void 0 && s.CameraProjectionType.value === 1 && (o = 1);
      let c = 1;
      s.NearPlane !== void 0 && (c = s.NearPlane.value / 1e3);
      let p = 1e3;
      s.FarPlane !== void 0 && (p = s.FarPlane.value / 1e3);
      let h = window.innerWidth, m = window.innerHeight;
      s.AspectWidth !== void 0 && s.AspectHeight !== void 0 && (h = s.AspectWidth.value, m = s.AspectHeight.value);
      const g = h / m;
      let _ = 45;
      s.FieldOfView !== void 0 && (_ = s.FieldOfView.value);
      const w = s.FocalLength ? s.FocalLength.value : null;
      switch (o) {
        case 0:
          r = new PerspectiveCamera(_, g, c, p), w !== null && r.setFocalLength(w);
          break;
        case 1:
          r = new OrthographicCamera(-h / 2, h / 2, m / 2, -m / 2, c, p);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + o + "."), r = new Object3D();
          break;
      }
    }
    return r;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(i) {
    let r, s;
    if (i.children.forEach(function(o) {
      const c = se.Objects.NodeAttribute[o.ID];
      c !== void 0 && (s = c);
    }), s === void 0)
      r = new Object3D();
    else {
      let o;
      s.LightType === void 0 ? o = 0 : o = s.LightType.value;
      let c = 16777215;
      s.Color !== void 0 && (c = new Color().fromArray(s.Color.value));
      let p = s.Intensity === void 0 ? 1 : s.Intensity.value / 100;
      s.CastLightOnObject !== void 0 && s.CastLightOnObject.value === 0 && (p = 0);
      let h = 0;
      s.FarAttenuationEnd !== void 0 && (s.EnableFarAttenuation !== void 0 && s.EnableFarAttenuation.value === 0 ? h = 0 : h = s.FarAttenuationEnd.value);
      const m = 1;
      switch (o) {
        case 0:
          r = new PointLight(c, p, h, m);
          break;
        case 1:
          r = new DirectionalLight(c, p);
          break;
        case 2:
          let g = Math.PI / 3;
          s.InnerAngle !== void 0 && (g = MathUtils.degToRad(s.InnerAngle.value));
          let _ = 0;
          s.OuterAngle !== void 0 && (_ = MathUtils.degToRad(s.OuterAngle.value), _ = Math.max(_, 1)), r = new SpotLight(c, p, h, g, _, m);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + s.LightType.value + ", defaulting to a PointLight."), r = new PointLight(c, p);
          break;
      }
      s.CastShadows !== void 0 && s.CastShadows.value === 1 && (r.castShadow = true);
    }
    return r;
  }
  createMesh(i, r, s) {
    let o, c = null, p = null;
    const h = [];
    return i.children.forEach(function(m) {
      r.has(m.ID) && (c = r.get(m.ID)), s.has(m.ID) && h.push(s.get(m.ID));
    }), h.length > 1 ? p = h : h.length > 0 ? p = h[0] : (p = new MeshPhongMaterial({
      color: 13421772
    }), h.push(p)), "color" in c.attributes && h.forEach(function(m) {
      m.vertexColors = true;
    }), c.FBX_Deformer ? (o = new SkinnedMesh(c, p), o.normalizeSkinWeights()) : o = new Mesh(c, p), o;
  }
  createCurve(i, r) {
    const s = i.children.reduce(function(c, p) {
      return r.has(p.ID) && (c = r.get(p.ID)), c;
    }, null), o = new LineBasicMaterial({
      color: 3342591,
      linewidth: 1
    });
    return new Line(s, o);
  }
  // parse the model node for transform data
  getTransformData(i, r) {
    const s = {};
    "InheritType" in r && (s.inheritType = parseInt(r.InheritType.value)), "RotationOrder" in r ? s.eulerOrder = el(r.RotationOrder.value) : s.eulerOrder = "ZYX", "Lcl_Translation" in r && (s.translation = r.Lcl_Translation.value), "PreRotation" in r && (s.preRotation = r.PreRotation.value), "Lcl_Rotation" in r && (s.rotation = r.Lcl_Rotation.value), "PostRotation" in r && (s.postRotation = r.PostRotation.value), "Lcl_Scaling" in r && (s.scale = r.Lcl_Scaling.value), "ScalingOffset" in r && (s.scalingOffset = r.ScalingOffset.value), "ScalingPivot" in r && (s.scalingPivot = r.ScalingPivot.value), "RotationOffset" in r && (s.rotationOffset = r.RotationOffset.value), "RotationPivot" in r && (s.rotationPivot = r.RotationPivot.value), i.userData.transformData = s;
  }
  setLookAtProperties(i, r) {
    "LookAtProperty" in r && Ve.get(i.ID).children.forEach(function(o) {
      if (o.relationship === "LookAtProperty") {
        const c = se.Objects.Model[o.ID];
        if ("Lcl_Translation" in c) {
          const p = c.Lcl_Translation.value;
          i.target !== void 0 ? (i.target.position.fromArray(p), tt.add(i.target)) : i.lookAt(new Vector3().fromArray(p));
        }
      }
    });
  }
  bindSkeleton(i, r, s) {
    const o = this.parsePoseNodes();
    for (const c in i) {
      const p = i[c];
      Ve.get(parseInt(p.ID)).parents.forEach(function(m) {
        if (r.has(m.ID)) {
          const g = m.ID;
          Ve.get(g).parents.forEach(function(w) {
            s.has(w.ID) && s.get(w.ID).bind(new Skeleton(p.bones), o[w.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const i = {};
    if ("Pose" in se.Objects) {
      const r = se.Objects.Pose;
      for (const s in r)
        if (r[s].attrType === "BindPose" && r[s].NbPoseNodes > 0) {
          const o = r[s].PoseNode;
          Array.isArray(o) ? o.forEach(function(c) {
            i[c.Node] = new Matrix4().fromArray(c.Matrix.a);
          }) : i[o.Node] = new Matrix4().fromArray(o.Matrix.a);
        }
    }
    return i;
  }
  // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
  createAmbientLight() {
    if ("GlobalSettings" in se && "AmbientColor" in se.GlobalSettings) {
      const i = se.GlobalSettings.AmbientColor.value, r = i[0], s = i[1], o = i[2];
      if (r !== 0 || s !== 0 || o !== 0) {
        const c = new Color(r, s, o);
        tt.add(new AmbientLight(c, 1));
      }
    }
  }
};
var ah = class {
  // Parse nodes in FBXTree.Objects.Geometry
  parse(i) {
    const r = /* @__PURE__ */ new Map();
    if ("Geometry" in se.Objects) {
      const s = se.Objects.Geometry;
      for (const o in s) {
        const c = Ve.get(parseInt(o)), p = this.parseGeometry(c, s[o], i);
        r.set(parseInt(o), p);
      }
    }
    return r;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(i, r, s) {
    switch (r.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(i, r, s);
      case "NurbsCurve":
        return this.parseNurbsGeometry(r);
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(i, r, s) {
    const o = s.skeletons, c = [], p = i.parents.map(function(w) {
      return se.Objects.Model[w.ID];
    });
    if (p.length === 0)
      return;
    const h = i.children.reduce(function(w, y) {
      return o[y.ID] !== void 0 && (w = o[y.ID]), w;
    }, null);
    i.children.forEach(function(w) {
      s.morphTargets[w.ID] !== void 0 && c.push(s.morphTargets[w.ID]);
    });
    const m = p[0], g = {};
    "RotationOrder" in m && (g.eulerOrder = el(m.RotationOrder.value)), "InheritType" in m && (g.inheritType = parseInt(m.InheritType.value)), "GeometricTranslation" in m && (g.translation = m.GeometricTranslation.value), "GeometricRotation" in m && (g.rotation = m.GeometricRotation.value), "GeometricScaling" in m && (g.scale = m.GeometricScaling.value);
    const _ = Ja(g);
    return this.genGeometry(r, h, c, _);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(i, r, s, o) {
    const c = new BufferGeometry();
    i.attrName && (c.name = i.attrName);
    const p = this.parseGeoNode(i, r), h = this.genBuffers(p), m = new Float32BufferAttribute(h.vertex, 3);
    if (m.applyMatrix4(o), c.setAttribute("position", m), h.colors.length > 0 && c.setAttribute("color", new Float32BufferAttribute(h.colors, 3)), r && (c.setAttribute("skinIndex", new Uint16BufferAttribute(h.weightsIndices, 4)), c.setAttribute("skinWeight", new Float32BufferAttribute(h.vertexWeights, 4)), c.FBX_Deformer = r), h.normal.length > 0) {
      const g = new Matrix3().getNormalMatrix(o), _ = new Float32BufferAttribute(h.normal, 3);
      _.applyNormalMatrix(g), c.setAttribute("normal", _);
    }
    if (h.uvs.forEach(function(g, _) {
      let w = "uv" + (_ + 1).toString();
      _ === 0 && (w = "uv"), c.setAttribute(w, new Float32BufferAttribute(h.uvs[_], 2));
    }), p.material && p.material.mappingType !== "AllSame") {
      let g = h.materialIndex[0], _ = 0;
      if (h.materialIndex.forEach(function(w, y) {
        w !== g && (c.addGroup(_, y - _, g), g = w, _ = y);
      }), c.groups.length > 0) {
        const w = c.groups[c.groups.length - 1], y = w.start + w.count;
        y !== h.materialIndex.length && c.addGroup(y, h.materialIndex.length - y, g);
      }
      c.groups.length === 0 && c.addGroup(0, h.materialIndex.length, h.materialIndex[0]);
    }
    return this.addMorphTargets(c, i, s, o), c;
  }
  parseGeoNode(i, r) {
    const s = {};
    if (s.vertexPositions = i.Vertices !== void 0 ? i.Vertices.a : [], s.vertexIndices = i.PolygonVertexIndex !== void 0 ? i.PolygonVertexIndex.a : [], i.LayerElementColor && (s.color = this.parseVertexColors(i.LayerElementColor[0])), i.LayerElementMaterial && (s.material = this.parseMaterialIndices(i.LayerElementMaterial[0])), i.LayerElementNormal && (s.normal = this.parseNormals(i.LayerElementNormal[0])), i.LayerElementUV) {
      s.uv = [];
      let o = 0;
      for (; i.LayerElementUV[o]; )
        i.LayerElementUV[o].UV && s.uv.push(this.parseUVs(i.LayerElementUV[o])), o++;
    }
    return s.weightTable = {}, r !== null && (s.skeleton = r, r.rawBones.forEach(function(o, c) {
      o.indices.forEach(function(p, h) {
        s.weightTable[p] === void 0 && (s.weightTable[p] = []), s.weightTable[p].push({
          id: c,
          weight: o.weights[h]
        });
      });
    })), s;
  }
  genBuffers(i) {
    const r = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let s = 0, o = 0, c = false, p = [], h = [], m = [], g = [], _ = [], w = [];
    const y = this;
    return i.vertexIndices.forEach(function(C, L) {
      let S2, R = false;
      C < 0 && (C = C ^ -1, R = true);
      let O = [], N = [];
      if (p.push(C * 3, C * 3 + 1, C * 3 + 2), i.color) {
        const I = zs(L, s, C, i.color);
        m.push(I[0], I[1], I[2]);
      }
      if (i.skeleton) {
        if (i.weightTable[C] !== void 0 && i.weightTable[C].forEach(function(I) {
          N.push(I.weight), O.push(I.id);
        }), N.length > 4) {
          c || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), c = true);
          const I = [0, 0, 0, 0], D2 = [0, 0, 0, 0];
          N.forEach(function(Y, G) {
            let F = Y, B = O[G];
            D2.forEach(function(H, K, q) {
              if (F > H) {
                q[K] = F, F = H;
                const pe = I[K];
                I[K] = B, B = pe;
              }
            });
          }), O = I, N = D2;
        }
        for (; N.length < 4; )
          N.push(0), O.push(0);
        for (let I = 0; I < 4; ++I)
          _.push(N[I]), w.push(O[I]);
      }
      if (i.normal) {
        const I = zs(L, s, C, i.normal);
        h.push(I[0], I[1], I[2]);
      }
      i.material && i.material.mappingType !== "AllSame" && (S2 = zs(L, s, C, i.material)[0]), i.uv && i.uv.forEach(function(I, D2) {
        const Y = zs(L, s, C, I);
        g[D2] === void 0 && (g[D2] = []), g[D2].push(Y[0]), g[D2].push(Y[1]);
      }), o++, R && (y.genFace(r, i, p, S2, h, m, g, _, w, o), s++, o = 0, p = [], h = [], m = [], g = [], _ = [], w = []);
    }), r;
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(i, r, s, o, c, p, h, m, g, _) {
    for (let w = 2; w < _; w++)
      i.vertex.push(r.vertexPositions[s[0]]), i.vertex.push(r.vertexPositions[s[1]]), i.vertex.push(r.vertexPositions[s[2]]), i.vertex.push(r.vertexPositions[s[(w - 1) * 3]]), i.vertex.push(r.vertexPositions[s[(w - 1) * 3 + 1]]), i.vertex.push(r.vertexPositions[s[(w - 1) * 3 + 2]]), i.vertex.push(r.vertexPositions[s[w * 3]]), i.vertex.push(r.vertexPositions[s[w * 3 + 1]]), i.vertex.push(r.vertexPositions[s[w * 3 + 2]]), r.skeleton && (i.vertexWeights.push(m[0]), i.vertexWeights.push(m[1]), i.vertexWeights.push(m[2]), i.vertexWeights.push(m[3]), i.vertexWeights.push(m[(w - 1) * 4]), i.vertexWeights.push(m[(w - 1) * 4 + 1]), i.vertexWeights.push(m[(w - 1) * 4 + 2]), i.vertexWeights.push(m[(w - 1) * 4 + 3]), i.vertexWeights.push(m[w * 4]), i.vertexWeights.push(m[w * 4 + 1]), i.vertexWeights.push(m[w * 4 + 2]), i.vertexWeights.push(m[w * 4 + 3]), i.weightsIndices.push(g[0]), i.weightsIndices.push(g[1]), i.weightsIndices.push(g[2]), i.weightsIndices.push(g[3]), i.weightsIndices.push(g[(w - 1) * 4]), i.weightsIndices.push(g[(w - 1) * 4 + 1]), i.weightsIndices.push(g[(w - 1) * 4 + 2]), i.weightsIndices.push(g[(w - 1) * 4 + 3]), i.weightsIndices.push(g[w * 4]), i.weightsIndices.push(g[w * 4 + 1]), i.weightsIndices.push(g[w * 4 + 2]), i.weightsIndices.push(g[w * 4 + 3])), r.color && (i.colors.push(p[0]), i.colors.push(p[1]), i.colors.push(p[2]), i.colors.push(p[(w - 1) * 3]), i.colors.push(p[(w - 1) * 3 + 1]), i.colors.push(p[(w - 1) * 3 + 2]), i.colors.push(p[w * 3]), i.colors.push(p[w * 3 + 1]), i.colors.push(p[w * 3 + 2])), r.material && r.material.mappingType !== "AllSame" && (i.materialIndex.push(o), i.materialIndex.push(o), i.materialIndex.push(o)), r.normal && (i.normal.push(c[0]), i.normal.push(c[1]), i.normal.push(c[2]), i.normal.push(c[(w - 1) * 3]), i.normal.push(c[(w - 1) * 3 + 1]), i.normal.push(c[(w - 1) * 3 + 2]), i.normal.push(c[w * 3]), i.normal.push(c[w * 3 + 1]), i.normal.push(c[w * 3 + 2])), r.uv && r.uv.forEach(function(y, C) {
        i.uvs[C] === void 0 && (i.uvs[C] = []), i.uvs[C].push(h[C][0]), i.uvs[C].push(h[C][1]), i.uvs[C].push(h[C][(w - 1) * 2]), i.uvs[C].push(h[C][(w - 1) * 2 + 1]), i.uvs[C].push(h[C][w * 2]), i.uvs[C].push(h[C][w * 2 + 1]);
      });
  }
  addMorphTargets(i, r, s, o) {
    if (s.length === 0)
      return;
    i.morphTargetsRelative = true, i.morphAttributes.position = [];
    const c = this;
    s.forEach(function(p) {
      p.rawTargets.forEach(function(h) {
        const m = se.Objects.Geometry[h.geoID];
        m !== void 0 && c.genMorphGeometry(i, r, m, o, h.name);
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(i, r, s, o, c) {
    const p = r.PolygonVertexIndex !== void 0 ? r.PolygonVertexIndex.a : [], h = s.Vertices !== void 0 ? s.Vertices.a : [], m = s.Indexes !== void 0 ? s.Indexes.a : [], g = i.attributes.position.count * 3, _ = new Float32Array(g);
    for (let L = 0; L < m.length; L++) {
      const S2 = m[L] * 3;
      _[S2] = h[L * 3], _[S2 + 1] = h[L * 3 + 1], _[S2 + 2] = h[L * 3 + 2];
    }
    const w = {
      vertexIndices: p,
      vertexPositions: _
    }, y = this.genBuffers(w), C = new Float32BufferAttribute(y.vertex, 3);
    C.name = c || s.attrName, C.applyMatrix4(o), i.morphAttributes.position.push(C);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(i) {
    const r = i.MappingInformationType, s = i.ReferenceInformationType, o = i.Normals.a;
    let c = [];
    return s === "IndexToDirect" && ("NormalIndex" in i ? c = i.NormalIndex.a : "NormalsIndex" in i && (c = i.NormalsIndex.a)), {
      dataSize: 3,
      buffer: o,
      indices: c,
      mappingType: r,
      referenceType: s
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(i) {
    const r = i.MappingInformationType, s = i.ReferenceInformationType, o = i.UV.a;
    let c = [];
    return s === "IndexToDirect" && (c = i.UVIndex.a), {
      dataSize: 2,
      buffer: o,
      indices: c,
      mappingType: r,
      referenceType: s
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(i) {
    const r = i.MappingInformationType, s = i.ReferenceInformationType, o = i.Colors.a;
    let c = [];
    return s === "IndexToDirect" && (c = i.ColorIndex.a), {
      dataSize: 4,
      buffer: o,
      indices: c,
      mappingType: r,
      referenceType: s
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(i) {
    const r = i.MappingInformationType, s = i.ReferenceInformationType;
    if (r === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: s
      };
    const o = i.Materials.a, c = [];
    for (let p = 0; p < o.length; ++p)
      c.push(p);
    return {
      dataSize: 1,
      buffer: o,
      indices: c,
      mappingType: r,
      referenceType: s
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(i) {
    if (ya === void 0)
      return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new BufferGeometry();
    const r = parseInt(i.Order);
    if (isNaN(r))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", i.Order, i.id), new BufferGeometry();
    const s = r - 1, o = i.KnotVector.a, c = [], p = i.Points.a;
    for (let w = 0, y = p.length; w < y; w += 4)
      c.push(new Vector4().fromArray(p, w));
    let h, m;
    if (i.Form === "Closed")
      c.push(c[0]);
    else if (i.Form === "Periodic") {
      h = s, m = o.length - 1 - h;
      for (let w = 0; w < s; ++w)
        c.push(c[w]);
    }
    const _ = new ya(s, o, c, h, m).getPoints(c.length * 12);
    return new BufferGeometry().setFromPoints(_);
  }
};
var lh = class {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const i = [], r = this.parseClips();
    if (r !== void 0)
      for (const s in r) {
        const o = r[s], c = this.addClip(o);
        i.push(c);
      }
    return i;
  }
  parseClips() {
    if (se.Objects.AnimationCurve === void 0)
      return;
    const i = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(i);
    const r = this.parseAnimationLayers(i);
    return this.parseAnimStacks(r);
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const i = se.Objects.AnimationCurveNode, r = /* @__PURE__ */ new Map();
    for (const s in i) {
      const o = i[s];
      if (o.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const c = {
          id: o.id,
          attr: o.attrName,
          curves: {}
        };
        r.set(c.id, c);
      }
    }
    return r;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(i) {
    const r = se.Objects.AnimationCurve;
    for (const s in r) {
      const o = {
        id: r[s].id,
        times: r[s].KeyTime.a.map(dh),
        values: r[s].KeyValueFloat.a
      }, c = Ve.get(o.id);
      if (c !== void 0) {
        const p = c.parents[0].ID, h = c.parents[0].relationship;
        h.match(/X/) ? i.get(p).curves.x = o : h.match(/Y/) ? i.get(p).curves.y = o : h.match(/Z/) ? i.get(p).curves.z = o : h.match(/d|DeformPercent/) && i.has(p) && (i.get(p).curves.morph = o);
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(i) {
    const r = se.Objects.AnimationLayer, s = /* @__PURE__ */ new Map();
    for (const o in r) {
      const c = [], p = Ve.get(parseInt(o));
      p !== void 0 && (p.children.forEach(function(m, g) {
        if (i.has(m.ID)) {
          const _ = i.get(m.ID);
          if (_.curves.x !== void 0 || _.curves.y !== void 0 || _.curves.z !== void 0) {
            if (c[g] === void 0) {
              const w = Ve.get(m.ID).parents.filter(function(y) {
                return y.relationship !== void 0;
              })[0].ID;
              if (w !== void 0) {
                const y = se.Objects.Model[w.toString()];
                if (y === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", m);
                  return;
                }
                const C = {
                  modelName: y.attrName ? PropertyBinding.sanitizeNodeName(y.attrName) : "",
                  ID: y.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                tt.traverse(function(L) {
                  L.ID === y.id && (C.transform = L.matrix, L.userData.transformData && (C.eulerOrder = L.userData.transformData.eulerOrder));
                }), C.transform || (C.transform = new Matrix4()), "PreRotation" in y && (C.preRotation = y.PreRotation.value), "PostRotation" in y && (C.postRotation = y.PostRotation.value), c[g] = C;
              }
            }
            c[g] && (c[g][_.attr] = _);
          } else if (_.curves.morph !== void 0) {
            if (c[g] === void 0) {
              const w = Ve.get(m.ID).parents.filter(function(O) {
                return O.relationship !== void 0;
              })[0].ID, y = Ve.get(w).parents[0].ID, C = Ve.get(y).parents[0].ID, L = Ve.get(C).parents[0].ID, S2 = se.Objects.Model[L], R = {
                modelName: S2.attrName ? PropertyBinding.sanitizeNodeName(S2.attrName) : "",
                morphName: se.Objects.Deformer[w].attrName
              };
              c[g] = R;
            }
            c[g][_.attr] = _;
          }
        }
      }), s.set(parseInt(o), c));
    }
    return s;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create a AnimationClip
  parseAnimStacks(i) {
    const r = se.Objects.AnimationStack, s = {};
    for (const o in r) {
      const c = Ve.get(parseInt(o)).children;
      c.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const p = i.get(c[0].ID);
      s[o] = {
        name: r[o].attrName,
        layer: p
      };
    }
    return s;
  }
  addClip(i) {
    let r = [];
    const s = this;
    return i.layer.forEach(function(o) {
      r = r.concat(s.generateTracks(o));
    }), new AnimationClip(i.name, -1, r);
  }
  generateTracks(i) {
    const r = [];
    let s = new Vector3(), o = new Quaternion(), c = new Vector3();
    if (i.transform && i.transform.decompose(s, o, c), s = s.toArray(), o = new Euler().setFromQuaternion(o, i.eulerOrder).toArray(), c = c.toArray(), i.T !== void 0 && Object.keys(i.T.curves).length > 0) {
      const p = this.generateVectorTrack(i.modelName, i.T.curves, s, "position");
      p !== void 0 && r.push(p);
    }
    if (i.R !== void 0 && Object.keys(i.R.curves).length > 0) {
      const p = this.generateRotationTrack(i.modelName, i.R.curves, o, i.preRotation, i.postRotation, i.eulerOrder);
      p !== void 0 && r.push(p);
    }
    if (i.S !== void 0 && Object.keys(i.S.curves).length > 0) {
      const p = this.generateVectorTrack(i.modelName, i.S.curves, c, "scale");
      p !== void 0 && r.push(p);
    }
    if (i.DeformPercent !== void 0) {
      const p = this.generateMorphTrack(i);
      p !== void 0 && r.push(p);
    }
    return r;
  }
  generateVectorTrack(i, r, s, o) {
    const c = this.getTimesForAllAxes(r), p = this.getKeyframeTrackValues(c, r, s);
    return new VectorKeyframeTrack(i + "." + o, c, p);
  }
  generateRotationTrack(i, r, s, o, c, p) {
    r.x !== void 0 && (this.interpolateRotations(r.x), r.x.values = r.x.values.map(MathUtils.degToRad)), r.y !== void 0 && (this.interpolateRotations(r.y), r.y.values = r.y.values.map(MathUtils.degToRad)), r.z !== void 0 && (this.interpolateRotations(r.z), r.z.values = r.z.values.map(MathUtils.degToRad));
    const h = this.getTimesForAllAxes(r), m = this.getKeyframeTrackValues(h, r, s);
    o !== void 0 && (o = o.map(MathUtils.degToRad), o.push(p), o = new Euler().fromArray(o), o = new Quaternion().setFromEuler(o)), c !== void 0 && (c = c.map(MathUtils.degToRad), c.push(p), c = new Euler().fromArray(c), c = new Quaternion().setFromEuler(c).invert());
    const g = new Quaternion(), _ = new Euler(), w = [];
    for (let y = 0; y < m.length; y += 3)
      _.set(m[y], m[y + 1], m[y + 2], p), g.setFromEuler(_), o !== void 0 && g.premultiply(o), c !== void 0 && g.multiply(c), g.toArray(w, y / 3 * 4);
    return new QuaternionKeyframeTrack(i + ".quaternion", h, w);
  }
  generateMorphTrack(i) {
    const r = i.DeformPercent.curves.morph, s = r.values.map(function(c) {
      return c / 100;
    }), o = tt.getObjectByName(i.modelName).morphTargetDictionary[i.morphName];
    return new NumberKeyframeTrack(i.modelName + ".morphTargetInfluences[" + o + "]", r.times, s);
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(i) {
    let r = [];
    if (i.x !== void 0 && (r = r.concat(i.x.times)), i.y !== void 0 && (r = r.concat(i.y.times)), i.z !== void 0 && (r = r.concat(i.z.times)), r = r.sort(function(s, o) {
      return s - o;
    }), r.length > 1) {
      let s = 1, o = r[0];
      for (let c = 1; c < r.length; c++) {
        const p = r[c];
        p !== o && (r[s] = p, o = p, s++);
      }
      r = r.slice(0, s);
    }
    return r;
  }
  getKeyframeTrackValues(i, r, s) {
    const o = s, c = [];
    let p = -1, h = -1, m = -1;
    return i.forEach(function(g) {
      if (r.x && (p = r.x.times.indexOf(g)), r.y && (h = r.y.times.indexOf(g)), r.z && (m = r.z.times.indexOf(g)), p !== -1) {
        const _ = r.x.values[p];
        c.push(_), o[0] = _;
      } else
        c.push(o[0]);
      if (h !== -1) {
        const _ = r.y.values[h];
        c.push(_), o[1] = _;
      } else
        c.push(o[1]);
      if (m !== -1) {
        const _ = r.z.values[m];
        c.push(_), o[2] = _;
      } else
        c.push(o[2]);
    }), c;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(i) {
    for (let r = 1; r < i.values.length; r++) {
      const s = i.values[r - 1], o = i.values[r] - s, c = Math.abs(o);
      if (c >= 180) {
        const p = c / 180, h = o / p;
        let m = s + h;
        const g = i.times[r - 1], w = (i.times[r] - g) / p;
        let y = g + w;
        const C = [], L = [];
        for (; y < i.times[r]; )
          C.push(y), y += w, L.push(m), m += h;
        i.times = Ca(i.times, r, C), i.values = Ca(i.values, r, L);
      }
    }
  }
};
var ch = class {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(i) {
    this.nodeStack.push(i), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(i, r) {
    this.currentProp = i, this.currentPropName = r;
  }
  parse(i) {
    this.currentIndent = 0, this.allNodes = new Wa(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const r = this, s = i.split(/[\r\n]+/);
    return s.forEach(function(o, c) {
      const p = o.match(/^[\s\t]*;/), h = o.match(/^[\s\t]*$/);
      if (p || h)
        return;
      const m = o.match("^\\t{" + r.currentIndent + "}(\\w+):(.*){", ""), g = o.match("^\\t{" + r.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), _ = o.match("^\\t{" + (r.currentIndent - 1) + "}}");
      m ? r.parseNodeBegin(o, m) : g ? r.parseNodeProperty(o, g, s[++c]) : _ ? r.popStack() : o.match(/^[^\s\t}]/) && r.parseNodePropertyContinued(o);
    }), this.allNodes;
  }
  parseNodeBegin(i, r) {
    const s = r[1].trim().replace(/^"/, "").replace(/"$/, ""), o = r[2].split(",").map(function(m) {
      return m.trim().replace(/^"/, "").replace(/"$/, "");
    }), c = {
      name: s
    }, p = this.parseNodeAttr(o), h = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(s, c) : s in h ? (s === "PoseNode" ? h.PoseNode.push(c) : h[s].id !== void 0 && (h[s] = {}, h[s][h[s].id] = h[s]), p.id !== "" && (h[s][p.id] = c)) : typeof p.id == "number" ? (h[s] = {}, h[s][p.id] = c) : s !== "Properties70" && (s === "PoseNode" ? h[s] = [c] : h[s] = c), typeof p.id == "number" && (c.id = p.id), p.name !== "" && (c.attrName = p.name), p.type !== "" && (c.attrType = p.type), this.pushStack(c);
  }
  parseNodeAttr(i) {
    let r = i[0];
    i[0] !== "" && (r = parseInt(i[0]), isNaN(r) && (r = i[0]));
    let s = "", o = "";
    return i.length > 1 && (s = i[1].replace(/^(\w+)::/, ""), o = i[2]), {
      id: r,
      name: s,
      type: o
    };
  }
  parseNodeProperty(i, r, s) {
    let o = r[1].replace(/^"/, "").replace(/"$/, "").trim(), c = r[2].replace(/^"/, "").replace(/"$/, "").trim();
    o === "Content" && c === "," && (c = s.replace(/"/g, "").replace(/,$/, "").trim());
    const p = this.getCurrentNode();
    if (p.name === "Properties70") {
      this.parseNodeSpecialProperty(i, o, c);
      return;
    }
    if (o === "C") {
      const m = c.split(",").slice(1), g = parseInt(m[0]), _ = parseInt(m[1]);
      let w = c.split(",").slice(3);
      w = w.map(function(y) {
        return y.trim().replace(/^"/, "");
      }), o = "connections", c = [g, _], fh(c, w), p[o] === void 0 && (p[o] = []);
    }
    o === "Node" && (p.id = c), o in p && Array.isArray(p[o]) ? p[o].push(c) : o !== "a" ? p[o] = c : p.a = c, this.setCurrentProp(p, o), o === "a" && c.slice(-1) !== "," && (p.a = ro(c));
  }
  parseNodePropertyContinued(i) {
    const r = this.getCurrentNode();
    r.a += i, i.slice(-1) !== "," && (r.a = ro(r.a));
  }
  // parse "Property70"
  parseNodeSpecialProperty(i, r, s) {
    const o = s.split('",').map(function(_) {
      return _.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), c = o[0], p = o[1], h = o[2], m = o[3];
    let g = o[4];
    switch (p) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        g = parseFloat(g);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        g = ro(g);
        break;
    }
    this.getPrevNode()[c] = {
      type: p,
      type2: h,
      flag: m,
      value: g
    }, this.setCurrentProp(this.getPrevNode(), c);
  }
};
var uh = class {
  parse(i) {
    const r = new xa(i);
    r.skip(23);
    const s = r.getUint32();
    if (s < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + s);
    const o = new Wa();
    for (; !this.endOfContent(r); ) {
      const c = this.parseNode(r, s);
      c !== null && o.add(c.name, c);
    }
    return o;
  }
  // Check if reader has reached the end of content.
  endOfContent(i) {
    return i.size() % 16 === 0 ? (i.getOffset() + 160 + 16 & -16) >= i.size() : i.getOffset() + 160 + 16 >= i.size();
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(i, r) {
    const s = {}, o = r >= 7500 ? i.getUint64() : i.getUint32(), c = r >= 7500 ? i.getUint64() : i.getUint32();
    r >= 7500 ? i.getUint64() : i.getUint32();
    const p = i.getUint8(), h = i.getString(p);
    if (o === 0)
      return null;
    const m = [];
    for (let y = 0; y < c; y++)
      m.push(this.parseProperty(i));
    const g = m.length > 0 ? m[0] : "", _ = m.length > 1 ? m[1] : "", w = m.length > 2 ? m[2] : "";
    for (s.singleProperty = c === 1 && i.getOffset() === o; o > i.getOffset(); ) {
      const y = this.parseNode(i, r);
      y !== null && this.parseSubNode(h, s, y);
    }
    return s.propertyList = m, typeof g == "number" && (s.id = g), _ !== "" && (s.attrName = _), w !== "" && (s.attrType = w), h !== "" && (s.name = h), s;
  }
  parseSubNode(i, r, s) {
    if (s.singleProperty === true) {
      const o = s.propertyList[0];
      Array.isArray(o) ? (r[s.name] = s, s.a = o) : r[s.name] = o;
    } else if (i === "Connections" && s.name === "C") {
      const o = [];
      s.propertyList.forEach(function(c, p) {
        p !== 0 && o.push(c);
      }), r.connections === void 0 && (r.connections = []), r.connections.push(o);
    } else if (s.name === "Properties70")
      Object.keys(s).forEach(function(c) {
        r[c] = s[c];
      });
    else if (i === "Properties70" && s.name === "P") {
      let o = s.propertyList[0], c = s.propertyList[1];
      const p = s.propertyList[2], h = s.propertyList[3];
      let m;
      o.indexOf("Lcl ") === 0 && (o = o.replace("Lcl ", "Lcl_")), c.indexOf("Lcl ") === 0 && (c = c.replace("Lcl ", "Lcl_")), c === "Color" || c === "ColorRGB" || c === "Vector" || c === "Vector3D" || c.indexOf("Lcl_") === 0 ? m = [s.propertyList[4], s.propertyList[5], s.propertyList[6]] : m = s.propertyList[4], r[o] = {
        type: c,
        type2: p,
        flag: h,
        value: m
      };
    } else
      r[s.name] === void 0 ? typeof s.id == "number" ? (r[s.name] = {}, r[s.name][s.id] = s) : r[s.name] = s : s.name === "PoseNode" ? (Array.isArray(r[s.name]) || (r[s.name] = [r[s.name]]), r[s.name].push(s)) : r[s.name][s.id] === void 0 && (r[s.name][s.id] = s);
  }
  parseProperty(i) {
    const r = i.getString(1);
    let s;
    switch (r) {
      case "C":
        return i.getBoolean();
      case "D":
        return i.getFloat64();
      case "F":
        return i.getFloat32();
      case "I":
        return i.getInt32();
      case "L":
        return i.getInt64();
      case "R":
        return s = i.getUint32(), i.getArrayBuffer(s);
      case "S":
        return s = i.getUint32(), i.getString(s);
      case "Y":
        return i.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const o = i.getUint32(), c = i.getUint32(), p = i.getUint32();
        if (c === 0)
          switch (r) {
            case "b":
            case "c":
              return i.getBooleanArray(o);
            case "d":
              return i.getFloat64Array(o);
            case "f":
              return i.getFloat32Array(o);
            case "i":
              return i.getInt32Array(o);
            case "l":
              return i.getInt64Array(o);
          }
        const h = cp(new Uint8Array(i.getArrayBuffer(p))), m = new xa(h.buffer);
        switch (r) {
          case "b":
          case "c":
            return m.getBooleanArray(o);
          case "d":
            return m.getFloat64Array(o);
          case "f":
            return m.getFloat32Array(o);
          case "i":
            return m.getInt32Array(o);
          case "l":
            return m.getInt64Array(o);
        }
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + r);
    }
  }
};
var xa = class {
  constructor(i, r) {
    this.dv = new DataView(i), this.offset = 0, this.littleEndian = r !== void 0 ? r : true;
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(i) {
    this.offset += i;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(i) {
    const r = [];
    for (let s = 0; s < i; s++)
      r.push(this.getBoolean());
    return r;
  }
  getUint8() {
    const i = this.dv.getUint8(this.offset);
    return this.offset += 1, i;
  }
  getInt16() {
    const i = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, i;
  }
  getInt32() {
    const i = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, i;
  }
  getInt32Array(i) {
    const r = [];
    for (let s = 0; s < i; s++)
      r.push(this.getInt32());
    return r;
  }
  getUint32() {
    const i = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, i;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let i, r;
    return this.littleEndian ? (i = this.getUint32(), r = this.getUint32()) : (r = this.getUint32(), i = this.getUint32()), r & 2147483648 ? (r = ~r & 4294967295, i = ~i & 4294967295, i === 4294967295 && (r = r + 1 & 4294967295), i = i + 1 & 4294967295, -(r * 4294967296 + i)) : r * 4294967296 + i;
  }
  getInt64Array(i) {
    const r = [];
    for (let s = 0; s < i; s++)
      r.push(this.getInt64());
    return r;
  }
  // Note: see getInt64() comment
  getUint64() {
    let i, r;
    return this.littleEndian ? (i = this.getUint32(), r = this.getUint32()) : (r = this.getUint32(), i = this.getUint32()), r * 4294967296 + i;
  }
  getFloat32() {
    const i = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, i;
  }
  getFloat32Array(i) {
    const r = [];
    for (let s = 0; s < i; s++)
      r.push(this.getFloat32());
    return r;
  }
  getFloat64() {
    const i = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, i;
  }
  getFloat64Array(i) {
    const r = [];
    for (let s = 0; s < i; s++)
      r.push(this.getFloat64());
    return r;
  }
  getArrayBuffer(i) {
    const r = this.dv.buffer.slice(this.offset, this.offset + i);
    return this.offset += i, r;
  }
  getString(i) {
    let r = [];
    for (let o = 0; o < i; o++)
      r[o] = this.getUint8();
    const s = r.indexOf(0);
    return s >= 0 && (r = r.slice(0, s)), LoaderUtils.decodeText(new Uint8Array(r));
  }
};
var Wa = class {
  add(i, r) {
    this[i] = r;
  }
};
function ph(f) {
  const i = "Kaydara FBX Binary  \0";
  return f.byteLength >= i.length && i === tl(f, 0, i.length);
}
function hh(f) {
  const i = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let r = 0;
  function s(o) {
    const c = f[o - 1];
    return f = f.slice(r + o), r++, c;
  }
  for (let o = 0; o < i.length; ++o)
    if (s(1) === i[o])
      return false;
  return true;
}
function Ea(f) {
  const i = /FBXVersion: (\d+)/, r = f.match(i);
  if (r)
    return parseInt(r[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function dh(f) {
  return f / 46186158e3;
}
var mh = [];
function zs(f, i, r, s) {
  let o;
  switch (s.mappingType) {
    case "ByPolygonVertex":
      o = f;
      break;
    case "ByPolygon":
      o = i;
      break;
    case "ByVertice":
      o = r;
      break;
    case "AllSame":
      o = s.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + s.mappingType);
  }
  s.referenceType === "IndexToDirect" && (o = s.indices[o]);
  const c = o * s.dataSize, p = c + s.dataSize;
  return vh(mh, s.buffer, c, p);
}
var so = new Euler();
var hi = new Vector3();
function Ja(f) {
  const i = new Matrix4(), r = new Matrix4(), s = new Matrix4(), o = new Matrix4(), c = new Matrix4(), p = new Matrix4(), h = new Matrix4(), m = new Matrix4(), g = new Matrix4(), _ = new Matrix4(), w = new Matrix4(), y = new Matrix4(), C = f.inheritType ? f.inheritType : 0;
  if (f.translation && i.setPosition(hi.fromArray(f.translation)), f.preRotation) {
    const K = f.preRotation.map(MathUtils.degToRad);
    K.push(f.eulerOrder), r.makeRotationFromEuler(so.fromArray(K));
  }
  if (f.rotation) {
    const K = f.rotation.map(MathUtils.degToRad);
    K.push(f.eulerOrder), s.makeRotationFromEuler(so.fromArray(K));
  }
  if (f.postRotation) {
    const K = f.postRotation.map(MathUtils.degToRad);
    K.push(f.eulerOrder), o.makeRotationFromEuler(so.fromArray(K)), o.invert();
  }
  f.scale && c.scale(hi.fromArray(f.scale)), f.scalingOffset && h.setPosition(hi.fromArray(f.scalingOffset)), f.scalingPivot && p.setPosition(hi.fromArray(f.scalingPivot)), f.rotationOffset && m.setPosition(hi.fromArray(f.rotationOffset)), f.rotationPivot && g.setPosition(hi.fromArray(f.rotationPivot)), f.parentMatrixWorld && (w.copy(f.parentMatrix), _.copy(f.parentMatrixWorld));
  const L = r.clone().multiply(s).multiply(o), S2 = new Matrix4();
  S2.extractRotation(_);
  const R = new Matrix4();
  R.copyPosition(_);
  const O = R.clone().invert().multiply(_), N = S2.clone().invert().multiply(O), I = c, D2 = new Matrix4();
  if (C === 0)
    D2.copy(S2).multiply(L).multiply(N).multiply(I);
  else if (C === 1)
    D2.copy(S2).multiply(N).multiply(L).multiply(I);
  else {
    const q = new Matrix4().scale(new Vector3().setFromMatrixScale(w)).clone().invert(), pe = N.clone().multiply(q);
    D2.copy(S2).multiply(L).multiply(pe).multiply(I);
  }
  const Y = g.clone().invert(), G = p.clone().invert();
  let F = i.clone().multiply(m).multiply(g).multiply(r).multiply(s).multiply(o).multiply(Y).multiply(h).multiply(p).multiply(c).multiply(G);
  const B = new Matrix4().copyPosition(F), H = _.clone().multiply(B);
  return y.copyPosition(H), F = y.clone().multiply(D2), F.premultiply(_.invert()), F;
}
function el(f) {
  f = f || 0;
  const i = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  return f === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), i[0]) : i[f];
}
function ro(f) {
  return f.split(",").map(function(r) {
    return parseFloat(r);
  });
}
function tl(f, i, r) {
  return i === void 0 && (i = 0), r === void 0 && (r = f.byteLength), LoaderUtils.decodeText(new Uint8Array(f, i, r));
}
function fh(f, i) {
  for (let r = 0, s = f.length, o = i.length; r < o; r++, s++)
    f[s] = i[r];
}
function vh(f, i, r, s) {
  for (let o = r, c = 0; o < s; o++, c++)
    f[c] = i[o];
  return f;
}
function Ca(f, i, r) {
  return f.slice(0, i).concat(r).concat(f.slice(i));
}
var bh = class extends Loader {
  constructor(i) {
    super(i);
  }
  load(i, r, s, o) {
    const c = new FileLoader(this.manager);
    c.setPath(this.path), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(i, (p) => {
      if (typeof p != "string")
        throw new Error("unsupported data type");
      const h = JSON.parse(p), m = this.parse(h);
      r && r(m);
    }, s, o);
  }
  parse(i) {
    return new To(i);
  }
};
var To = class {
  constructor(i) {
    P(this, "data", void 0), this.data = i;
  }
  generateShapes(i, r = 100, s) {
    const o = [], c = {
      letterSpacing: 0,
      lineHeight: 1,
      ...s
    }, p = gh(i, r, this.data, c);
    for (let h = 0, m = p.length; h < m; h++)
      Array.prototype.push.apply(o, p[h].toShapes(false));
    return o;
  }
};
P(To, "isFont", void 0);
P(To, "type", void 0);
function gh(f, i, r, s) {
  const o = Array.from(f), c = i / r.resolution, p = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * c, h = [];
  let m = 0, g = 0;
  for (let _ = 0; _ < o.length; _++) {
    const w = o[_];
    if (w === `
`)
      m = 0, g -= p * s.lineHeight;
    else {
      const y = _h(w, c, m, g, r);
      y && (m += y.offsetX + s.letterSpacing, h.push(y.path));
    }
  }
  return h;
}
function _h(f, i, r, s, o) {
  const c = o.glyphs[f] || o.glyphs["?"];
  if (!c) {
    console.error('THREE.Font: character "' + f + '" does not exists in font family ' + o.familyName + ".");
    return;
  }
  const p = new ShapePath();
  let h, m, g, _, w, y, C, L;
  if (c.o) {
    const S2 = c._cachedOutline || (c._cachedOutline = c.o.split(" "));
    for (let R = 0, O = S2.length; R < O; )
      switch (S2[R++]) {
        case "m":
          h = parseInt(S2[R++]) * i + r, m = parseInt(S2[R++]) * i + s, p.moveTo(h, m);
          break;
        case "l":
          h = parseInt(S2[R++]) * i + r, m = parseInt(S2[R++]) * i + s, p.lineTo(h, m);
          break;
        case "q":
          g = parseInt(S2[R++]) * i + r, _ = parseInt(S2[R++]) * i + s, w = parseInt(S2[R++]) * i + r, y = parseInt(S2[R++]) * i + s, p.quadraticCurveTo(w, y, g, _);
          break;
        case "b":
          g = parseInt(S2[R++]) * i + r, _ = parseInt(S2[R++]) * i + s, w = parseInt(S2[R++]) * i + r, y = parseInt(S2[R++]) * i + s, C = parseInt(S2[R++]) * i + r, L = parseInt(S2[R++]) * i + s, p.bezierCurveTo(w, y, C, L, g, _);
          break;
      }
  }
  return {
    offsetX: c.ha * i,
    path: p
  };
}
var nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var yh = class extends DataTextureLoader {
  constructor(i) {
    super(i), this.type = HalfFloatType;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(i) {
    const h = function(I, D2) {
      switch (I) {
        case 1:
          console.error("THREE.RGBELoader Read Error: " + (D2 || ""));
          break;
        case 2:
          console.error("THREE.RGBELoader Write Error: " + (D2 || ""));
          break;
        case 3:
          console.error("THREE.RGBELoader Bad File Format: " + (D2 || ""));
          break;
        default:
        case 4:
          console.error("THREE.RGBELoader: Error: " + (D2 || ""));
      }
      return -1;
    }, w = `
`, y = function(I, D2, Y) {
      D2 = D2 || 1024;
      let F = I.pos, B = -1, H = 0, K = "", q = String.fromCharCode.apply(null, new Uint16Array(I.subarray(F, F + 128)));
      for (; 0 > (B = q.indexOf(w)) && H < D2 && F < I.byteLength; )
        K += q, H += q.length, F += 128, q += String.fromCharCode.apply(null, new Uint16Array(I.subarray(F, F + 128)));
      return -1 < B ? (Y !== false && (I.pos += H + B + 1), K + q.slice(0, B)) : false;
    }, C = function(I) {
      const D2 = /^#\?(\S+)/, Y = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, G = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, F = /^\s*FORMAT=(\S+)\s*$/, B = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, H = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let K, q;
      if (I.pos >= I.byteLength || !(K = y(I)))
        return h(1, "no header found");
      if (!(q = K.match(D2)))
        return h(3, "bad initial token");
      for (H.valid |= 1, H.programtype = q[1], H.string += K + `
`; K = y(I), K !== false; ) {
        if (H.string += K + `
`, K.charAt(0) === "#") {
          H.comments += K + `
`;
          continue;
        }
        if ((q = K.match(Y)) && (H.gamma = parseFloat(q[1])), (q = K.match(G)) && (H.exposure = parseFloat(q[1])), (q = K.match(F)) && (H.valid |= 2, H.format = q[1]), (q = K.match(B)) && (H.valid |= 4, H.height = parseInt(q[1], 10), H.width = parseInt(q[2], 10)), H.valid & 2 && H.valid & 4)
          break;
      }
      return H.valid & 2 ? H.valid & 4 ? H : h(3, "missing image size specifier") : h(3, "missing format specifier");
    }, L = function(I, D2, Y) {
      const G = D2;
      if (
        // run length encoding is not allowed so read flat
        G < 8 || G > 32767 || // this file is not run length encoded
        I[0] !== 2 || I[1] !== 2 || I[2] & 128
      )
        return new Uint8Array(I);
      if (G !== (I[2] << 8 | I[3]))
        return h(3, "wrong scanline width");
      const F = new Uint8Array(4 * D2 * Y);
      if (!F.length)
        return h(4, "unable to allocate buffer space");
      let B = 0, H = 0;
      const K = 4 * G, q = new Uint8Array(4), pe = new Uint8Array(K);
      let _e = Y;
      for (; _e > 0 && H < I.byteLength; ) {
        if (H + 4 > I.byteLength)
          return h(1);
        if (q[0] = I[H++], q[1] = I[H++], q[2] = I[H++], q[3] = I[H++], q[0] != 2 || q[1] != 2 || (q[2] << 8 | q[3]) != G)
          return h(3, "bad rgbe scanline format");
        let ce = 0, me;
        for (; ce < K && H < I.byteLength; ) {
          me = I[H++];
          const ee = me > 128;
          if (ee && (me -= 128), me === 0 || ce + me > K)
            return h(3, "bad scanline data");
          if (ee) {
            const X = I[H++];
            for (let Me = 0; Me < me; Me++)
              pe[ce++] = X;
          } else
            pe.set(I.subarray(H, H + me), ce), ce += me, H += me;
        }
        const he = G;
        for (let ee = 0; ee < he; ee++) {
          let X = 0;
          F[B] = pe[ee + X], X += G, F[B + 1] = pe[ee + X], X += G, F[B + 2] = pe[ee + X], X += G, F[B + 3] = pe[ee + X], B += 4;
        }
        _e--;
      }
      return F;
    }, S2 = function(I, D2, Y, G) {
      const F = I[D2 + 3], B = Math.pow(2, F - 128) / 255;
      Y[G + 0] = I[D2 + 0] * B, Y[G + 1] = I[D2 + 1] * B, Y[G + 2] = I[D2 + 2] * B, Y[G + 3] = 1;
    }, R = function(I, D2, Y, G) {
      const F = I[D2 + 3], B = Math.pow(2, F - 128) / 255;
      Y[G + 0] = DataUtils.toHalfFloat(Math.min(I[D2 + 0] * B, 65504)), Y[G + 1] = DataUtils.toHalfFloat(Math.min(I[D2 + 1] * B, 65504)), Y[G + 2] = DataUtils.toHalfFloat(Math.min(I[D2 + 2] * B, 65504)), Y[G + 3] = DataUtils.toHalfFloat(1);
    }, O = new Uint8Array(i);
    O.pos = 0;
    const N = C(O);
    if (N !== -1) {
      const I = N.width, D2 = N.height, Y = L(O.subarray(O.pos), I, D2);
      if (Y !== -1) {
        let G, F, B;
        switch (this.type) {
          case FloatType:
            B = Y.length / 4;
            const H = new Float32Array(B * 4);
            for (let q = 0; q < B; q++)
              S2(Y, q * 4, H, q * 4);
            G = H, F = FloatType;
            break;
          case HalfFloatType:
            B = Y.length / 4;
            const K = new Uint16Array(B * 4);
            for (let q = 0; q < B; q++)
              R(Y, q * 4, K, q * 4);
            G = K, F = HalfFloatType;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: I,
          height: D2,
          data: G,
          header: N.string,
          gamma: N.gamma,
          exposure: N.exposure,
          type: F
        };
      }
    }
    return null;
  }
  setDataType(i) {
    return this.type = i, this;
  }
  load(i, r, s, o) {
    function c(p, h) {
      switch (p.type) {
        case FloatType:
        case HalfFloatType:
          p.encoding = LinearEncoding, p.minFilter = LinearFilter, p.magFilter = LinearFilter, p.generateMipmaps = false, p.flipY = true;
          break;
      }
      r && r(p, h);
    }
    return super.load(i, c, s, o);
  }
};
var oo = /* @__PURE__ */ new WeakMap();
var xh = class extends Loader {
  constructor(i) {
    super(i), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(i) {
    return this.decoderPath = i, this;
  }
  setDecoderConfig(i) {
    return this.decoderConfig = i, this;
  }
  setWorkerLimit(i) {
    return this.workerLimit = i, this;
  }
  load(i, r, s, o) {
    const c = new FileLoader(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(i, (p) => {
      const h = {
        attributeIDs: this.defaultAttributeIDs,
        attributeTypes: this.defaultAttributeTypes,
        useUniqueIDs: false
      };
      this.decodeGeometry(p, h).then(r).catch(o);
    }, s, o);
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(i, r, s, o) {
    const c = {
      attributeIDs: s || this.defaultAttributeIDs,
      attributeTypes: o || this.defaultAttributeTypes,
      useUniqueIDs: !!s
    };
    this.decodeGeometry(i, c).then(r);
  }
  decodeGeometry(i, r) {
    for (const m in r.attributeTypes) {
      const g = r.attributeTypes[m];
      g.BYTES_PER_ELEMENT !== void 0 && (r.attributeTypes[m] = g.name);
    }
    const s = JSON.stringify(r);
    if (oo.has(i)) {
      const m = oo.get(i);
      if (m.key === s)
        return m.promise;
      if (i.byteLength === 0)
        throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
    }
    let o;
    const c = this.workerNextTaskID++, p = i.byteLength, h = this._getWorker(c, p).then((m) => (o = m, new Promise((g, _) => {
      o._callbacks[c] = {
        resolve: g,
        reject: _
      }, o.postMessage({
        type: "decode",
        id: c,
        taskConfig: r,
        buffer: i
      }, [i]);
    }))).then((m) => this._createGeometry(m.geometry));
    return h.catch(() => true).then(() => {
      o && c && this._releaseTask(o, c);
    }), oo.set(i, {
      key: s,
      promise: h
    }), h;
  }
  _createGeometry(i) {
    const r = new BufferGeometry();
    i.index && r.setIndex(new BufferAttribute(i.index.array, 1));
    for (let s = 0; s < i.attributes.length; s++) {
      const o = i.attributes[s], c = o.name, p = o.array, h = o.itemSize;
      r.setAttribute(c, new BufferAttribute(p, h));
    }
    return r;
  }
  _loadLibrary(i, r) {
    const s = new FileLoader(this.manager);
    return s.setPath(this.decoderPath), s.setResponseType(r), s.setWithCredentials(this.withCredentials), new Promise((o, c) => {
      s.load(i, o, void 0, c);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const i = typeof WebAssembly != "object" || this.decoderConfig.type === "js", r = [];
    return i ? r.push(this._loadLibrary("draco_decoder.js", "text")) : (r.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), r.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(r).then((s) => {
      const o = s[0];
      i || (this.decoderConfig.wasmBinary = s[1]);
      const c = Eh.toString(), p = ["/* draco decoder */", o, "", "/* worker */", c.substring(c.indexOf("{") + 1, c.lastIndexOf("}"))].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([p]));
    }), this.decoderPending;
  }
  _getWorker(i, r) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const o = new Worker(this.workerSourceURL);
        o._callbacks = {}, o._taskCosts = {}, o._taskLoad = 0, o.postMessage({
          type: "init",
          decoderConfig: this.decoderConfig
        }), o.onmessage = function(c) {
          const p = c.data;
          switch (p.type) {
            case "decode":
              o._callbacks[p.id].resolve(p);
              break;
            case "error":
              o._callbacks[p.id].reject(p);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + p.type + '"');
          }
        }, this.workerPool.push(o);
      } else
        this.workerPool.sort(function(o, c) {
          return o._taskLoad > c._taskLoad ? -1 : 1;
        });
      const s = this.workerPool[this.workerPool.length - 1];
      return s._taskCosts[i] = r, s._taskLoad += r, s;
    });
  }
  _releaseTask(i, r) {
    i._taskLoad -= i._taskCosts[r], delete i._callbacks[r], delete i._taskCosts[r];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((i) => i._taskLoad));
  }
  dispose() {
    for (let i = 0; i < this.workerPool.length; ++i)
      this.workerPool[i].terminate();
    return this.workerPool.length = 0, this;
  }
};
function Eh() {
  let f, i;
  onmessage = function(p) {
    const h = p.data;
    switch (h.type) {
      case "init":
        f = h.decoderConfig, i = new Promise(function(_) {
          f.onModuleLoaded = function(w) {
            _({
              draco: w
            });
          }, DracoDecoderModule(f);
        });
        break;
      case "decode":
        const m = h.buffer, g = h.taskConfig;
        i.then((_) => {
          const w = _.draco, y = new w.Decoder(), C = new w.DecoderBuffer();
          C.Init(new Int8Array(m), m.byteLength);
          try {
            const L = r(w, y, C, g), S2 = L.attributes.map((R) => R.array.buffer);
            L.index && S2.push(L.index.array.buffer), self.postMessage({
              type: "decode",
              id: h.id,
              geometry: L
            }, S2);
          } catch (L) {
            console.error(L), self.postMessage({
              type: "error",
              id: h.id,
              error: L.message
            });
          } finally {
            w.destroy(C), w.destroy(y);
          }
        });
        break;
    }
  };
  function r(p, h, m, g) {
    const _ = g.attributeIDs, w = g.attributeTypes;
    let y, C;
    const L = h.GetEncodedGeometryType(m);
    if (L === p.TRIANGULAR_MESH)
      y = new p.Mesh(), C = h.DecodeBufferToMesh(m, y);
    else if (L === p.POINT_CLOUD)
      y = new p.PointCloud(), C = h.DecodeBufferToPointCloud(m, y);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!C.ok() || y.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + C.error_msg());
    const S2 = {
      index: null,
      attributes: []
    };
    for (const R in _) {
      const O = self[w[R]];
      let N, I;
      if (g.useUniqueIDs)
        I = _[R], N = h.GetAttributeByUniqueId(y, I);
      else {
        if (I = h.GetAttributeId(y, p[_[R]]), I === -1)
          continue;
        N = h.GetAttribute(y, I);
      }
      S2.attributes.push(o(p, h, y, R, O, N));
    }
    return L === p.TRIANGULAR_MESH && (S2.index = s(p, h, y)), p.destroy(y), S2;
  }
  function s(p, h, m) {
    const _ = m.num_faces() * 3, w = _ * 4, y = p._malloc(w);
    h.GetTrianglesUInt32Array(m, w, y);
    const C = new Uint32Array(p.HEAPF32.buffer, y, _).slice();
    return p._free(y), {
      array: C,
      itemSize: 1
    };
  }
  function o(p, h, m, g, _, w) {
    const y = w.num_components(), L = m.num_points() * y, S2 = L * _.BYTES_PER_ELEMENT, R = c(p, _), O = p._malloc(S2);
    h.GetAttributeDataArrayForAllPoints(m, w, R, S2, O);
    const N = new _(p.HEAPF32.buffer, O, L).slice();
    return p._free(O), {
      name: g,
      array: N,
      itemSize: y
    };
  }
  function c(p, h) {
    switch (h) {
      case Float32Array:
        return p.DT_FLOAT32;
      case Int8Array:
        return p.DT_INT8;
      case Int16Array:
        return p.DT_INT16;
      case Int32Array:
        return p.DT_INT32;
      case Uint8Array:
        return p.DT_UINT8;
      case Uint16Array:
        return p.DT_UINT16;
      case Uint32Array:
        return p.DT_UINT32;
    }
  }
}
function Et() {
  const { state: f, setState: i } = inject("useTres", S()), r = inject("extend") || (() => {
  });
  return {
    state: f,
    setState: i,
    extend: r
  };
}
var Ch = ["args"];
var Vd = defineComponent({
  __name: "OrbitControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: null,
    domElement: null,
    target: null,
    enableDamping: { type: Boolean }
  },
  setup(f) {
    const i = f, { state: r, setState: s, extend: o } = Et(), c = ref(null);
    return o({ OrbitControls: Ya }), watch(c, (p) => {
      p && i.makeDefault ? s("controls", p) : s("controls", null);
    }), (p, h) => {
      var m;
      return unref(r).camera && unref(r).renderer ? (openBlock(), createElementBlock("TresOrbitControls", {
        key: 0,
        ref_key: "controls",
        ref: c,
        args: [unref(r).camera || f.camera, ((m = unref(r).renderer) == null ? void 0 : m.domElement) || f.domElement]
      }, null, 8, Ch)) : createCommentVNode("", true);
    };
  }
});
var Ph = ["args"];
var Id = defineComponent({
  __name: "MapControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: null,
    domElement: null
  },
  setup(f) {
    const i = f, { state: r, setState: s, extend: o } = Et(), c = ref(null);
    return o({ MapControls: _p }), watch(c, (p) => {
      p && i.makeDefault ? s("controls", p) : s("controls", null);
    }), (p, h) => {
      var m;
      return unref(r).camera && unref(r).renderer ? (openBlock(), createElementBlock("TresMapControls", {
        key: 0,
        ref_key: "controls",
        ref: c,
        args: [unref(r).camera || f.camera, ((m = unref(r).renderer) == null ? void 0 : m.domElement) || f.domElement]
      }, null, 8, Ph)) : createCommentVNode("", true);
    };
  }
});
function il(f) {
  return getCurrentScope() ? (onScopeDispose(f), true) : false;
}
function sl(f) {
  return typeof f == "function" ? f() : unref(f);
}
var Th = typeof window < "u";
var rl = () => {
};
function kh(...f) {
  if (f.length !== 1)
    return toRef(...f);
  const i = f[0];
  return typeof i == "function" ? readonly(customRef(() => ({ get: i, set: rl }))) : ref(i);
}
function Ah(f, i = true) {
  getCurrentInstance() ? onMounted(f) : i ? f() : nextTick(f);
}
function Mh(f) {
  var i;
  const r = sl(f);
  return (i = r == null ? void 0 : r.$el) != null ? i : r;
}
var Xs = Th ? window : void 0;
function Bn(...f) {
  let i, r, s, o;
  if (typeof f[0] == "string" || Array.isArray(f[0]) ? ([r, s, o] = f, i = Xs) : [i, r, s, o] = f, !i)
    return rl;
  Array.isArray(r) || (r = [r]), Array.isArray(s) || (s = [s]);
  const c = [], p = () => {
    c.forEach((_) => _()), c.length = 0;
  }, h = (_, w, y, C) => (_.addEventListener(w, y, C), () => _.removeEventListener(w, y, C)), m = watch(
    () => [Mh(i), sl(o)],
    ([_, w]) => {
      p(), _ && c.push(
        ...r.flatMap((y) => s.map((C) => h(_, y, C, w)))
      );
    },
    { immediate: true, flush: "post" }
  ), g = () => {
    m(), p();
  };
  return il(g), g;
}
function Sh() {
  const f = ref(false);
  return getCurrentInstance() && onMounted(() => {
    f.value = true;
  }), f;
}
function Lh(f) {
  const i = Sh();
  return computed(() => (i.value, !!f()));
}
function Rh(f, i = {}) {
  const { window: r = Xs } = i, s = Lh(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let o;
  const c = ref(false), p = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", h) : o.removeListener(h));
  }, h = () => {
    s.value && (p(), o = r.matchMedia(kh(f).value), c.value = !!(o != null && o.matches), o && ("addEventListener" in o ? o.addEventListener("change", h) : o.addListener(h)));
  };
  return watchEffect(h), il(() => p()), c;
}
var Vh = {
  page: (f) => [f.pageX, f.pageY],
  client: (f) => [f.clientX, f.clientY],
  screen: (f) => [f.screenX, f.screenY],
  movement: (f) => f instanceof Touch ? null : [f.movementX, f.movementY]
};
function Ih(f = {}) {
  const {
    type: i = "page",
    touch: r = true,
    resetOnTouchEnds: s = false,
    initialValue: o = { x: 0, y: 0 },
    window: c = Xs,
    target: p = c,
    eventFilter: h
  } = f, m = ref(o.x), g = ref(o.y), _ = ref(null), w = typeof i == "function" ? i : Vh[i], y = (O) => {
    const N = w(O);
    N && ([m.value, g.value] = N, _.value = "mouse");
  }, C = (O) => {
    if (O.touches.length > 0) {
      const N = w(O.touches[0]);
      N && ([m.value, g.value] = N, _.value = "touch");
    }
  }, L = () => {
    m.value = o.x, g.value = o.y;
  }, S2 = h ? (O) => h(() => y(O), {}) : (O) => y(O), R = h ? (O) => h(() => C(O), {}) : (O) => C(O);
  return p && (Bn(p, "mousemove", S2, { passive: true }), Bn(p, "dragover", S2, { passive: true }), r && i !== "movement" && (Bn(p, "touchstart", R, { passive: true }), Bn(p, "touchmove", R, { passive: true }), s && Bn(p, "touchend", L, { passive: true }))), {
    x: m,
    y: g,
    sourceType: _
  };
}
function Dh(f = {}) {
  const {
    window: i = Xs,
    initialWidth: r = 1 / 0,
    initialHeight: s = 1 / 0,
    listenOrientation: o = true,
    includeScrollbar: c = true
  } = f, p = ref(r), h = ref(s), m = () => {
    i && (c ? (p.value = i.innerWidth, h.value = i.innerHeight) : (p.value = i.document.documentElement.clientWidth, h.value = i.document.documentElement.clientHeight));
  };
  if (m(), Ah(m), Bn("resize", m, { passive: true }), o) {
    const g = Rh("(orientation: portrait)");
    watch(g, () => m());
  }
  return { width: p, height: h };
}
var Oh = ["args"];
var Dd = defineComponent({
  __name: "PointerLockControls",
  props: {
    makeDefault: { type: Boolean, default: false },
    camera: null,
    domElement: null,
    selector: null
  },
  setup(f, { expose: i }) {
    const r = f, { state: s, setState: o, extend: c } = Et(), p = ref(null);
    let h;
    return c({ PointerLockControls: gp }), watch(p, (m) => {
      var _;
      m && r.makeDefault ? o("controls", m) : o("controls", null);
      const g = document.getElementById(r.selector || "");
      h = g || ((_ = s.renderer) == null ? void 0 : _.domElement), Bn(h, "click", () => {
        var w;
        (w = p.value) == null || w.lock();
      });
    }), i({
      value: p
    }), (m, g) => {
      var _;
      return unref(s).camera && unref(s).renderer ? (openBlock(), createElementBlock("TresPointerLockControls", {
        key: 0,
        ref_key: "controls",
        ref: p,
        args: [unref(s).camera || f.camera, ((_ = unref(s).renderer) == null ? void 0 : _.domElement) || f.domElement]
      }, null, 8, Oh)) : createCommentVNode("", true);
    };
  }
});
function Nh(f, i) {
  const r = {};
  for (const s of i)
    Object.prototype.hasOwnProperty.call(f, s) && (r[s] = f[s]);
  return r;
}
function Bh(f, i) {
  const r = `set${i[0].toUpperCase()}${i.slice(1)}`;
  return f[r] !== void 0;
}
var Od = defineComponent({
  __name: "TransformControls",
  props: {
    object: null,
    mode: null,
    enabled: { type: Boolean, default: true },
    axis: null,
    translationSnap: null,
    rotationSnap: null,
    scaleSnap: null,
    space: null,
    size: null,
    showX: { type: Boolean },
    showY: { type: Boolean },
    showZ: { type: Boolean }
  },
  emits: ["dragging", "change", "mouseDown", "mouseUp", "objectChange"],
  setup(f, { emit: i }) {
    const r = f;
    let s = shallowRef();
    const { state: o } = Et(), c = computed(
      () => Nh(r, [
        "enabled",
        "axis",
        "mode",
        "translationSnap",
        "rotationSnap",
        "scaleSnap",
        "space",
        "size",
        "showX",
        "showY",
        "showZ"
      ])
    ), p = () => i("change", s.value), h = () => i("mouseDown", s.value), m = () => i("mouseUp", s.value), g = () => i("objectChange", s.value), _ = (y) => {
      o.controls && (o.controls.enabled = !y.value), i("dragging", y.value);
    };
    function w(y) {
      y.addEventListener("dragging-changed", _), y.addEventListener("change", p), y.addEventListener("mouseDown", h), y.addEventListener("mouseUp", m), y.addEventListener("objectChange", g);
    }
    return watchEffect(() => {
      o.camera && o.renderer && o.scene && r.object && (s.value = new hp(o.camera, o.renderer.domElement), s.value.attach(r.object), o.scene.add(s.value), w(s.value));
    }), watch(
      [c, s],
      // TODO: properly type this
      ([y, C]) => {
        if (y && C)
          for (const L in y)
            if (!Bh(C, L))
              C[L] = y[L];
            else {
              const S2 = `set${L[0].toUpperCase()}${L.slice(1)}`;
              typeof C[S2] == "function" && y[L] !== void 0 && C[S2](y[L]);
            }
      },
      {
        immediate: true
      }
    ), onUnmounted(() => {
      s.value && (s.value.removeEventListener("dragging-changed", _), s.value.removeEventListener("change", p), s.value.removeEventListener("mouseDown", h), s.value.removeEventListener("mouseUp", m), s.value.removeEventListener("objectChange", g));
    }), (y, C) => renderSlot(y.$slots, "default");
  }
});
function Fh(f = false, i = 5, r) {
  const { x: s, y: o } = Ih(), { logWarning: c } = D(), { width: p, height: h } = Dh(), m = computed(() => (s.value / p.value - 0.5) * i), g = computed(() => -(o.value / h.value - 0.5) * i);
  if (r) {
    const { x: _, y: w } = r.position;
    watchEffect(() => {
      f || r && (r.position.x = _ + m.value, r.position.y = w + g.value);
    });
  } else
    c("Scene must contain a Camera component to use this composable");
}
var Nd = defineComponent({
  name: "PamCameraMouse",
  props: ["disabled", "factor"],
  setup(f) {
    const { state: i } = Et();
    return watchEffect(() => {
      if (i != null && i.camera) {
        const r = i == null ? void 0 : i.camera;
        Fh(f.disabled, f.factor, r);
      }
    }), () => {
    };
  }
});
var _o = { exports: {} };
(function(f, i) {
  (function(r, s) {
    s(i);
  })(nl, function(r) {
    class s {
      /**
       * @hidden
       */
      constructor(e) {
        const [t, l] = e.split("-"), b = t.split(".");
        this.major = parseInt(b[0], 10), this.minor = parseInt(b[1], 10), this.patch = parseInt(b[2], 10), this.prerelease = l ?? null;
      }
      toString() {
        const e = [this.major, this.minor, this.patch].join(".");
        return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
      }
    }
    class o {
      constructor(e) {
        this.controller_ = e;
      }
      get element() {
        return this.controller_.view.element;
      }
      get disabled() {
        return this.controller_.viewProps.get("disabled");
      }
      set disabled(e) {
        this.controller_.viewProps.set("disabled", e);
      }
      get hidden() {
        return this.controller_.viewProps.get("hidden");
      }
      set hidden(e) {
        this.controller_.viewProps.set("hidden", e);
      }
      dispose() {
        this.controller_.viewProps.set("disposed", true);
      }
    }
    class c {
      constructor(e) {
        this.target = e;
      }
    }
    class p extends c {
      constructor(e, t, l, b) {
        super(e), this.value = t, this.presetKey = l, this.last = b ?? true;
      }
    }
    class h extends c {
      constructor(e, t, l) {
        super(e), this.value = t, this.presetKey = l;
      }
    }
    class m extends c {
      constructor(e, t) {
        super(e), this.expanded = t;
      }
    }
    class g extends c {
      constructor(e, t) {
        super(e), this.index = t;
      }
    }
    function _(n) {
      return n;
    }
    function w(n) {
      return n == null;
    }
    function y(n, e) {
      if (n.length !== e.length)
        return false;
      for (let t = 0; t < n.length; t++)
        if (n[t] !== e[t])
          return false;
      return true;
    }
    function C(n, e) {
      let t = n;
      do {
        const l = Object.getOwnPropertyDescriptor(t, e);
        if (l && (l.set !== void 0 || l.writable === true))
          return true;
        t = Object.getPrototypeOf(t);
      } while (t !== null);
      return false;
    }
    const L = {
      alreadydisposed: () => "View has been already disposed",
      invalidparams: (n) => `Invalid parameters for '${n.name}'`,
      nomatchingcontroller: (n) => `No matching controller for '${n.key}'`,
      nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`,
      notbindable: () => "Value is not bindable",
      propertynotfound: (n) => `Property '${n.name}' not found`,
      shouldneverhappen: () => "This error should never happen"
    };
    class S2 {
      static alreadyDisposed() {
        return new S2({ type: "alreadydisposed" });
      }
      static notBindable() {
        return new S2({
          type: "notbindable"
        });
      }
      static propertyNotFound(e) {
        return new S2({
          type: "propertynotfound",
          context: {
            name: e
          }
        });
      }
      static shouldNeverHappen() {
        return new S2({ type: "shouldneverhappen" });
      }
      constructor(e) {
        var t;
        this.message = (t = L[e.type](e.context)) !== null && t !== void 0 ? t : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
      }
    }
    class R {
      constructor(e, t, l) {
        this.obj_ = e, this.key_ = t, this.presetKey_ = l ?? t;
      }
      static isBindable(e) {
        return !(e === null || typeof e != "object" && typeof e != "function");
      }
      get key() {
        return this.key_;
      }
      get presetKey() {
        return this.presetKey_;
      }
      read() {
        return this.obj_[this.key_];
      }
      write(e) {
        this.obj_[this.key_] = e;
      }
      writeProperty(e, t) {
        const l = this.read();
        if (!R.isBindable(l))
          throw S2.notBindable();
        if (!(e in l))
          throw S2.propertyNotFound(e);
        l[e] = t;
      }
    }
    class O extends o {
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      get title() {
        var e;
        return (e = this.controller_.valueController.props.get("title")) !== null && e !== void 0 ? e : "";
      }
      set title(e) {
        this.controller_.valueController.props.set("title", e);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.controller_.valueController.emitter.on(e, () => {
          l(new c(this));
        }), this;
      }
    }
    class N {
      constructor() {
        this.observers_ = {};
      }
      on(e, t) {
        let l = this.observers_[e];
        return l || (l = this.observers_[e] = []), l.push({
          handler: t
        }), this;
      }
      off(e, t) {
        const l = this.observers_[e];
        return l && (this.observers_[e] = l.filter((b) => b.handler !== t)), this;
      }
      emit(e, t) {
        const l = this.observers_[e];
        l && l.forEach((b) => {
          b.handler(t);
        });
      }
    }
    const I = "tp";
    function D2(n) {
      return (t, l) => [
        I,
        "-",
        n,
        "v",
        t ? `_${t}` : "",
        l ? `-${l}` : ""
      ].join("");
    }
    function Y(n, e) {
      return (t) => e(n(t));
    }
    function G(n) {
      return n.rawValue;
    }
    function F(n, e) {
      n.emitter.on("change", Y(G, e)), e(n.rawValue);
    }
    function B(n, e, t) {
      F(n.value(e), t);
    }
    function H(n, e, t) {
      t ? n.classList.add(e) : n.classList.remove(e);
    }
    function K(n, e) {
      return (t) => {
        H(n, e, t);
      };
    }
    function q(n, e) {
      F(n, (t) => {
        e.textContent = t ?? "";
      });
    }
    const pe = D2("btn");
    class _e {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(pe()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("button");
        l.classList.add(pe("b")), t.viewProps.bindDisabled(l), this.element.appendChild(l), this.buttonElement = l;
        const b = e.createElement("div");
        b.classList.add(pe("t")), q(t.props.value("title"), b), this.buttonElement.appendChild(b);
      }
    }
    class ce {
      constructor(e, t) {
        this.emitter = new N(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new _e(e, {
          props: this.props,
          viewProps: this.viewProps
        }), this.view.buttonElement.addEventListener("click", this.onClick_);
      }
      onClick_() {
        this.emitter.emit("click", {
          sender: this
        });
      }
    }
    class me {
      constructor(e, t) {
        var l;
        this.constraint_ = t == null ? void 0 : t.constraint, this.equals_ = (l = t == null ? void 0 : t.equals) !== null && l !== void 0 ? l : (b, E) => b === E, this.emitter = new N(), this.rawValue_ = e;
      }
      get constraint() {
        return this.constraint_;
      }
      get rawValue() {
        return this.rawValue_;
      }
      set rawValue(e) {
        this.setRawValue(e, {
          forceEmit: false,
          last: true
        });
      }
      setRawValue(e, t) {
        const l = t ?? {
          forceEmit: false,
          last: true
        }, b = this.constraint_ ? this.constraint_.constrain(e) : e, E = this.rawValue_;
        this.equals_(E, b) && !l.forceEmit || (this.emitter.emit("beforechange", {
          sender: this
        }), this.rawValue_ = b, this.emitter.emit("change", {
          options: l,
          previousRawValue: E,
          rawValue: b,
          sender: this
        }));
      }
    }
    class he {
      constructor(e) {
        this.emitter = new N(), this.value_ = e;
      }
      get rawValue() {
        return this.value_;
      }
      set rawValue(e) {
        this.setRawValue(e, {
          forceEmit: false,
          last: true
        });
      }
      setRawValue(e, t) {
        const l = t ?? {
          forceEmit: false,
          last: true
        }, b = this.value_;
        b === e && !l.forceEmit || (this.emitter.emit("beforechange", {
          sender: this
        }), this.value_ = e, this.emitter.emit("change", {
          options: l,
          previousRawValue: b,
          rawValue: this.value_,
          sender: this
        }));
      }
    }
    function ee(n, e) {
      const t = e == null ? void 0 : e.constraint, l = e == null ? void 0 : e.equals;
      return !t && !l ? new he(n) : new me(n, e);
    }
    class X {
      constructor(e) {
        this.emitter = new N(), this.valMap_ = e;
        for (const t in this.valMap_)
          this.valMap_[t].emitter.on("change", () => {
            this.emitter.emit("change", {
              key: t,
              sender: this
            });
          });
      }
      static createCore(e) {
        return Object.keys(e).reduce((l, b) => Object.assign(l, {
          [b]: ee(e[b])
        }), {});
      }
      static fromObject(e) {
        const t = this.createCore(e);
        return new X(t);
      }
      get(e) {
        return this.valMap_[e].rawValue;
      }
      set(e, t) {
        this.valMap_[e].rawValue = t;
      }
      value(e) {
        return this.valMap_[e];
      }
    }
    function Me(n, e) {
      const l = Object.keys(e).reduce((b, E) => {
        if (b === void 0)
          return;
        const k = e[E], z = k(n[E]);
        return z.succeeded ? Object.assign(Object.assign({}, b), { [E]: z.value }) : void 0;
      }, {});
      return l;
    }
    function fe(n, e) {
      return n.reduce((t, l) => {
        if (t === void 0)
          return;
        const b = e(l);
        if (!(!b.succeeded || b.value === void 0))
          return [...t, b.value];
      }, []);
    }
    function oe(n) {
      return n === null ? false : typeof n == "object";
    }
    function ne(n) {
      return (e) => (t) => {
        if (!e && t === void 0)
          return {
            succeeded: false,
            value: void 0
          };
        if (e && t === void 0)
          return {
            succeeded: true,
            value: void 0
          };
        const l = n(t);
        return l !== void 0 ? {
          succeeded: true,
          value: l
        } : {
          succeeded: false,
          value: void 0
        };
      };
    }
    function ge(n) {
      return {
        custom: (e) => ne(e)(n),
        boolean: ne((e) => typeof e == "boolean" ? e : void 0)(n),
        number: ne((e) => typeof e == "number" ? e : void 0)(n),
        string: ne((e) => typeof e == "string" ? e : void 0)(n),
        function: ne((e) => typeof e == "function" ? e : void 0)(n),
        constant: (e) => ne((t) => t === e ? e : void 0)(n),
        raw: ne((e) => e)(n),
        object: (e) => ne((t) => {
          if (oe(t))
            return Me(t, e);
        })(n),
        array: (e) => ne((t) => {
          if (Array.isArray(t))
            return fe(t, e);
        })(n)
      };
    }
    const A = {
      optional: ge(true),
      required: ge(false)
    };
    function ae(n, e) {
      const t = A.required.object(e)(n);
      return t.succeeded ? t.value : void 0;
    }
    function Ne(n) {
      console.warn([
        `Missing '${n.key}' of ${n.target} in ${n.place}.`,
        "Please rebuild plugins with the latest core package."
      ].join(" "));
    }
    function je(n) {
      return n && n.parentElement && n.parentElement.removeChild(n), null;
    }
    class xe {
      constructor(e) {
        this.value_ = e;
      }
      static create(e) {
        return [
          new xe(e),
          (t, l) => {
            e.setRawValue(t, l);
          }
        ];
      }
      get emitter() {
        return this.value_.emitter;
      }
      get rawValue() {
        return this.value_.rawValue;
      }
    }
    const rt = D2("");
    function Un(n, e) {
      return K(n, rt(void 0, e));
    }
    class Qe extends X {
      constructor(e) {
        var t;
        super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = xe.create(ee(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
      }
      static create(e) {
        var t, l, b;
        const E = e ?? {};
        return new Qe(X.createCore({
          disabled: (t = E.disabled) !== null && t !== void 0 ? t : false,
          disposed: false,
          hidden: (l = E.hidden) !== null && l !== void 0 ? l : false,
          parent: (b = E.parent) !== null && b !== void 0 ? b : null
        }));
      }
      get globalDisabled() {
        return this.globalDisabled_;
      }
      bindClassModifiers(e) {
        F(this.globalDisabled_, Un(e, "disabled")), B(this, "hidden", Un(e, "hidden"));
      }
      bindDisabled(e) {
        F(this.globalDisabled_, (t) => {
          e.disabled = t;
        });
      }
      bindTabIndex(e) {
        F(this.globalDisabled_, (t) => {
          e.tabIndex = t ? -1 : 0;
        });
      }
      handleDispose(e) {
        this.value("disposed").emitter.on("change", (t) => {
          t && e();
        });
      }
      getGlobalDisabled_() {
        const e = this.get("parent");
        return (e ? e.globalDisabled.rawValue : false) || this.get("disabled");
      }
      updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
      }
      onDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentChange_(e) {
        var t;
        const l = e.previousRawValue;
        l == null || l.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (t = this.get("parent")) === null || t === void 0 || t.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
      }
    }
    function Gn() {
      return ["veryfirst", "first", "last", "verylast"];
    }
    const hn = D2(""), vt = {
      veryfirst: "vfst",
      first: "fst",
      last: "lst",
      verylast: "vlst"
    };
    class Mt {
      constructor(e) {
        this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
        const t = this.view.element;
        this.blade.value("positions").emitter.on("change", () => {
          Gn().forEach((l) => {
            t.classList.remove(hn(void 0, vt[l]));
          }), this.blade.get("positions").forEach((l) => {
            t.classList.add(hn(void 0, vt[l]));
          });
        }), this.viewProps.handleDispose(() => {
          je(t);
        });
      }
      get parent() {
        return this.parent_;
      }
      set parent(e) {
        if (this.parent_ = e, !("parent" in this.viewProps.valMap_)) {
          Ne({
            key: "parent",
            target: Qe.name,
            place: "BladeController.parent"
          });
          return;
        }
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
      }
    }
    const Ke = "http://www.w3.org/2000/svg";
    function ot(n) {
      n.offsetHeight;
    }
    function dn(n, e) {
      const t = n.style.transition;
      n.style.transition = "none", e(), n.style.transition = t;
    }
    function bt(n) {
      return n.ontouchstart !== void 0;
    }
    function Hn() {
      return globalThis;
    }
    function bi() {
      return Hn().document;
    }
    function Kn(n) {
      const e = n.ownerDocument.defaultView;
      return e && "document" in e ? n.getContext("2d", {
        willReadFrequently: true
      }) : null;
    }
    const $n = {
      check: '<path d="M2 8l4 4l8 -8"/>',
      dropdown: '<path d="M5 7h6l-3 3 z"/>',
      p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
    };
    function Ct2(n, e) {
      const t = n.createElementNS(Ke, "svg");
      return t.innerHTML = $n[e], t;
    }
    function St(n, e, t) {
      n.insertBefore(e, n.children[t]);
    }
    function Xn(n) {
      n.parentElement && n.parentElement.removeChild(n);
    }
    function mn(n) {
      for (; n.children.length > 0; )
        n.removeChild(n.children[0]);
    }
    function Yn(n) {
      for (; n.childNodes.length > 0; )
        n.removeChild(n.childNodes[0]);
    }
    function Pt(n) {
      return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
    }
    const gt = D2("lbl");
    function Lt(n, e) {
      const t = n.createDocumentFragment();
      return e.split(`
`).map((b) => n.createTextNode(b)).forEach((b, E) => {
        E > 0 && t.appendChild(n.createElement("br")), t.appendChild(b);
      }), t;
    }
    class M {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(gt()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(gt("l")), B(t.props, "label", (E) => {
          w(E) ? this.element.classList.add(gt(void 0, "nol")) : (this.element.classList.remove(gt(void 0, "nol")), Yn(l), l.appendChild(Lt(e, E)));
        }), this.element.appendChild(l), this.labelElement = l;
        const b = e.createElement("div");
        b.classList.add(gt("v")), this.element.appendChild(b), this.valueElement = b;
      }
    }
    class U extends Mt {
      constructor(e, t) {
        const l = t.valueController.viewProps;
        super(Object.assign(Object.assign({}, t), { view: new M(e, {
          props: t.props,
          viewProps: l
        }), viewProps: l })), this.props = t.props, this.valueController = t.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    const W = {
      id: "button",
      type: "blade",
      accept(n) {
        const e = A, t = ae(n, {
          title: e.required.string,
          view: e.required.constant("button"),
          label: e.optional.string
        });
        return t ? { params: t } : null;
      },
      controller(n) {
        return new U(n.document, {
          blade: n.blade,
          props: X.fromObject({
            label: n.params.label
          }),
          valueController: new ce(n.document, {
            props: X.fromObject({
              title: n.params.title
            }),
            viewProps: n.viewProps
          })
        });
      },
      api(n) {
        return !(n.controller instanceof U) || !(n.controller.valueController instanceof ce) ? null : new O(n.controller);
      }
    };
    class ie extends Mt {
      constructor(e) {
        super(e), this.value = e.value;
      }
    }
    function Ee() {
      return new X({
        positions: ee([], {
          equals: y
        })
      });
    }
    class Fe extends X {
      constructor(e) {
        super(e);
      }
      static create(e) {
        const t = {
          completed: true,
          expanded: e,
          expandedHeight: null,
          shouldFixHeight: false,
          temporaryExpanded: null
        }, l = X.createCore(t);
        return new Fe(l);
      }
      get styleExpanded() {
        var e;
        return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
      }
      get styleHeight() {
        if (!this.styleExpanded)
          return "0";
        const e = this.get("expandedHeight");
        return this.get("shouldFixHeight") && !w(e) ? `${e}px` : "auto";
      }
      bindExpandedClass(e, t) {
        const l = () => {
          this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
        };
        B(this, "expanded", l), B(this, "temporaryExpanded", l);
      }
      cleanUpTransition() {
        this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
      }
    }
    function Gt(n, e) {
      let t = 0;
      return dn(e, () => {
        n.set("expandedHeight", null), n.set("temporaryExpanded", true), ot(e), t = e.clientHeight, n.set("temporaryExpanded", null), ot(e);
      }), t;
    }
    function fn(n, e) {
      e.style.height = n.styleHeight;
    }
    function $e(n, e) {
      n.value("expanded").emitter.on("beforechange", () => {
        if (n.set("completed", false), w(n.get("expandedHeight"))) {
          const t = Gt(n, e);
          t > 0 && n.set("expandedHeight", t);
        }
        n.set("shouldFixHeight", true), ot(e);
      }), n.emitter.on("change", () => {
        fn(n, e);
      }), fn(n, e), e.addEventListener("transitionend", (t) => {
        t.propertyName === "height" && n.cleanUpTransition();
      });
    }
    class Xe extends o {
      constructor(e, t) {
        super(e), this.rackApi_ = t;
      }
    }
    function Ys(n, e) {
      return n.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
    }
    function qs(n, e) {
      return n.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
    }
    function Qs(n, e) {
      const t = e ?? {};
      return n.addBlade(Object.assign(Object.assign({}, t), { view: "separator" }));
    }
    function gi(n, e) {
      return n.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
    }
    class Rt2 {
      constructor(e) {
        this.emitter = new N(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
      }
      get items() {
        return this.items_;
      }
      allItems() {
        return Array.from(this.cache_);
      }
      find(e) {
        for (const t of this.allItems())
          if (e(t))
            return t;
        return null;
      }
      includes(e) {
        return this.cache_.has(e);
      }
      add(e, t) {
        if (this.includes(e))
          throw S2.shouldNeverHappen();
        const l = t !== void 0 ? t : this.items_.length;
        this.items_.splice(l, 0, e), this.cache_.add(e);
        const b = this.extract_(e);
        b && (b.emitter.on("add", this.onSubListAdd_), b.emitter.on("remove", this.onSubListRemove_), b.allItems().forEach((E) => {
          this.cache_.add(E);
        })), this.emitter.emit("add", {
          index: l,
          item: e,
          root: this,
          target: this
        });
      }
      remove(e) {
        const t = this.items_.indexOf(e);
        if (t < 0)
          return;
        this.items_.splice(t, 1), this.cache_.delete(e);
        const l = this.extract_(e);
        l && (l.emitter.off("add", this.onSubListAdd_), l.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", {
          index: t,
          item: e,
          root: this,
          target: this
        });
      }
      onSubListAdd_(e) {
        this.cache_.add(e.item), this.emitter.emit("add", {
          index: e.index,
          item: e.item,
          root: this,
          target: e.target
        });
      }
      onSubListRemove_(e) {
        this.cache_.delete(e.item), this.emitter.emit("remove", {
          index: e.index,
          item: e.item,
          root: this,
          target: e.target
        });
      }
    }
    class _i extends o {
      constructor(e) {
        super(e), this.onBindingChange_ = this.onBindingChange_.bind(this), this.emitter_ = new N(), this.controller_.binding.emitter.on("change", this.onBindingChange_);
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
      refresh() {
        this.controller_.binding.read();
      }
      onBindingChange_(e) {
        const t = e.sender.target.read();
        this.emitter_.emit("change", {
          event: new p(this, t, this.controller_.binding.target.presetKey, e.options.last)
        });
      }
    }
    class Ue extends U {
      constructor(e, t) {
        super(e, t), this.binding = t.binding;
      }
    }
    class wi extends o {
      constructor(e) {
        super(e), this.onBindingUpdate_ = this.onBindingUpdate_.bind(this), this.emitter_ = new N(), this.controller_.binding.emitter.on("update", this.onBindingUpdate_);
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
      refresh() {
        this.controller_.binding.read();
      }
      onBindingUpdate_(e) {
        const t = e.sender.target.read();
        this.emitter_.emit("update", {
          event: new h(this, t, this.controller_.binding.target.presetKey)
        });
      }
    }
    class at extends U {
      constructor(e, t) {
        super(e, t), this.binding = t.binding, this.viewProps.bindDisabled(this.binding.ticker), this.viewProps.handleDispose(() => {
          this.binding.dispose();
        });
      }
    }
    function as(n) {
      return n instanceof qn ? n.apiSet_ : n instanceof Xe ? n.rackApi_.apiSet_ : null;
    }
    function vn(n, e) {
      const t = n.find((l) => l.controller_ === e);
      if (!t)
        throw S2.shouldNeverHappen();
      return t;
    }
    function ls(n, e, t) {
      if (!R.isBindable(n))
        throw S2.notBindable();
      return new R(n, e, t);
    }
    class qn extends o {
      constructor(e, t) {
        super(e), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.onRackInputChange_ = this.onRackInputChange_.bind(this), this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this), this.emitter_ = new N(), this.apiSet_ = new Rt2(as), this.pool_ = t;
        const l = this.controller_.rack;
        l.emitter.on("add", this.onRackAdd_), l.emitter.on("remove", this.onRackRemove_), l.emitter.on("inputchange", this.onRackInputChange_), l.emitter.on("monitorupdate", this.onRackMonitorUpdate_), l.children.forEach((b) => {
          this.setUpApi_(b);
        });
      }
      get children() {
        return this.controller_.rack.children.map((e) => vn(this.apiSet_, e));
      }
      addInput(e, t, l) {
        const b = l ?? {}, E = this.controller_.view.element.ownerDocument, k = this.pool_.createInput(E, ls(e, t, b.presetKey), b), z = new _i(k);
        return this.add(z, b.index);
      }
      addMonitor(e, t, l) {
        const b = l ?? {}, E = this.controller_.view.element.ownerDocument, k = this.pool_.createMonitor(E, ls(e, t), b), z = new wi(k);
        return this.add(z, b.index);
      }
      addFolder(e) {
        return qs(this, e);
      }
      addButton(e) {
        return Ys(this, e);
      }
      addSeparator(e) {
        return Qs(this, e);
      }
      addTab(e) {
        return gi(this, e);
      }
      add(e, t) {
        this.controller_.rack.add(e.controller_, t);
        const l = this.apiSet_.find((b) => b.controller_ === e.controller_);
        return l && this.apiSet_.remove(l), this.apiSet_.add(e), e;
      }
      remove(e) {
        this.controller_.rack.remove(e.controller_);
      }
      addBlade(e) {
        const t = this.controller_.view.element.ownerDocument, l = this.pool_.createBlade(t, e), b = this.pool_.createBladeApi(l);
        return this.add(b, e.index);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
      setUpApi_(e) {
        this.apiSet_.find((l) => l.controller_ === e) || this.apiSet_.add(this.pool_.createBladeApi(e));
      }
      onRackAdd_(e) {
        this.setUpApi_(e.bladeController);
      }
      onRackRemove_(e) {
        if (e.isRoot) {
          const t = vn(this.apiSet_, e.bladeController);
          this.apiSet_.remove(t);
        }
      }
      onRackInputChange_(e) {
        const t = e.bladeController;
        if (t instanceof Ue) {
          const l = vn(this.apiSet_, t), b = t.binding;
          this.emitter_.emit("change", {
            event: new p(l, b.target.read(), b.target.presetKey, e.options.last)
          });
        } else if (t instanceof ie) {
          const l = vn(this.apiSet_, t);
          this.emitter_.emit("change", {
            event: new p(l, t.value.rawValue, void 0, e.options.last)
          });
        }
      }
      onRackMonitorUpdate_(e) {
        if (!(e.bladeController instanceof at))
          throw S2.shouldNeverHappen();
        const t = vn(this.apiSet_, e.bladeController), l = e.bladeController.binding;
        this.emitter_.emit("update", {
          event: new h(t, l.target.read(), l.target.presetKey)
        });
      }
    }
    class yi extends Xe {
      constructor(e, t) {
        super(e, new qn(e.rackController, t)), this.emitter_ = new N(), this.controller_.foldable.value("expanded").emitter.on("change", (l) => {
          this.emitter_.emit("fold", {
            event: new m(this, l.sender.rawValue)
          });
        }), this.rackApi_.on("change", (l) => {
          this.emitter_.emit("change", {
            event: l
          });
        }), this.rackApi_.on("update", (l) => {
          this.emitter_.emit("update", {
            event: l
          });
        });
      }
      get expanded() {
        return this.controller_.foldable.get("expanded");
      }
      set expanded(e) {
        this.controller_.foldable.set("expanded", e);
      }
      get title() {
        return this.controller_.props.get("title");
      }
      set title(e) {
        this.controller_.props.set("title", e);
      }
      get children() {
        return this.rackApi_.children;
      }
      addInput(e, t, l) {
        return this.rackApi_.addInput(e, t, l);
      }
      addMonitor(e, t, l) {
        return this.rackApi_.addMonitor(e, t, l);
      }
      addFolder(e) {
        return this.rackApi_.addFolder(e);
      }
      addButton(e) {
        return this.rackApi_.addButton(e);
      }
      addSeparator(e) {
        return this.rackApi_.addSeparator(e);
      }
      addTab(e) {
        return this.rackApi_.addTab(e);
      }
      add(e, t) {
        return this.rackApi_.add(e, t);
      }
      remove(e) {
        this.rackApi_.remove(e);
      }
      addBlade(e) {
        return this.rackApi_.addBlade(e);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
    }
    class xi extends Mt {
      constructor(e) {
        super({
          blade: e.blade,
          view: e.view,
          viewProps: e.rackController.viewProps
        }), this.rackController = e.rackController;
      }
    }
    class Zs {
      constructor(e, t) {
        const l = D2(t.viewName);
        this.element = e.createElement("div"), this.element.classList.add(l()), t.viewProps.bindClassModifiers(this.element);
      }
    }
    function Ws(n, e) {
      for (let t = 0; t < n.length; t++) {
        const l = n[t];
        if (l instanceof Ue && l.binding === e)
          return l;
      }
      return null;
    }
    function Js(n, e) {
      for (let t = 0; t < n.length; t++) {
        const l = n[t];
        if (l instanceof at && l.binding === e)
          return l;
      }
      return null;
    }
    function er(n, e) {
      for (let t = 0; t < n.length; t++) {
        const l = n[t];
        if (l instanceof ie && l.value === e)
          return l;
      }
      return null;
    }
    function Ei(n) {
      return n instanceof bn ? n.rack : n instanceof xi ? n.rackController.rack : null;
    }
    function tr(n) {
      const e = Ei(n);
      return e ? e.bcSet_ : null;
    }
    class nr {
      constructor(e) {
        var t, l;
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildInputChange_ = this.onChildInputChange_.bind(this), this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onDescendantLayout_ = this.onDescendantLayout_.bind(this), this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this), this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this), this.emitter = new N(), this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null, (l = this.blade_) === null || l === void 0 || l.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Rt2(tr), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
      }
      get children() {
        return this.bcSet_.items;
      }
      add(e, t) {
        var l;
        (l = e.parent) === null || l === void 0 || l.remove(e), C(e, "parent") ? e.parent = this : (e.parent_ = this, Ne({
          key: "parent",
          target: "BladeController",
          place: "BladeRack.add"
        })), this.bcSet_.add(e, t);
      }
      remove(e) {
        C(e, "parent") ? e.parent = null : (e.parent_ = null, Ne({
          key: "parent",
          target: "BladeController",
          place: "BladeRack.remove"
        })), this.bcSet_.remove(e);
      }
      find(e) {
        return this.bcSet_.allItems().filter((t) => t instanceof e);
      }
      onSetAdd_(e) {
        this.updatePositions_();
        const t = e.target === e.root;
        if (this.emitter.emit("add", {
          bladeController: e.item,
          index: e.index,
          isRoot: t,
          sender: this
        }), !t)
          return;
        const l = e.item;
        if (l.viewProps.emitter.on("change", this.onChildViewPropsChange_), l.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), l.viewProps.handleDispose(this.onChildDispose_), l instanceof Ue)
          l.binding.emitter.on("change", this.onChildInputChange_);
        else if (l instanceof at)
          l.binding.emitter.on("update", this.onChildMonitorUpdate_);
        else if (l instanceof ie)
          l.value.emitter.on("change", this.onChildValueChange_);
        else {
          const b = Ei(l);
          if (b) {
            const E = b.emitter;
            E.on("layout", this.onDescendantLayout_), E.on("inputchange", this.onDescendantInputChange_), E.on("monitorupdate", this.onDescendantMonitorUpdate_);
          }
        }
      }
      onSetRemove_(e) {
        this.updatePositions_();
        const t = e.target === e.root;
        if (this.emitter.emit("remove", {
          bladeController: e.item,
          isRoot: t,
          sender: this
        }), !t)
          return;
        const l = e.item;
        if (l instanceof Ue)
          l.binding.emitter.off("change", this.onChildInputChange_);
        else if (l instanceof at)
          l.binding.emitter.off("update", this.onChildMonitorUpdate_);
        else if (l instanceof ie)
          l.value.emitter.off("change", this.onChildValueChange_);
        else {
          const b = Ei(l);
          if (b) {
            const E = b.emitter;
            E.off("layout", this.onDescendantLayout_), E.off("inputchange", this.onDescendantInputChange_), E.off("monitorupdate", this.onDescendantMonitorUpdate_);
          }
        }
      }
      updatePositions_() {
        const e = this.bcSet_.items.filter((b) => !b.viewProps.get("hidden")), t = e[0], l = e[e.length - 1];
        this.bcSet_.items.forEach((b) => {
          const E = [];
          b === t && (E.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && E.push("veryfirst")), b === l && (E.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && E.push("verylast")), b.blade.set("positions", E);
        });
      }
      onChildPositionsChange_() {
        this.updatePositions_(), this.emitter.emit("layout", {
          sender: this
        });
      }
      onChildViewPropsChange_(e) {
        this.updatePositions_(), this.emitter.emit("layout", {
          sender: this
        });
      }
      onChildDispose_() {
        this.bcSet_.items.filter((t) => t.viewProps.get("disposed")).forEach((t) => {
          this.bcSet_.remove(t);
        });
      }
      onChildInputChange_(e) {
        const t = Ws(this.find(Ue), e.sender);
        if (!t)
          throw S2.alreadyDisposed();
        this.emitter.emit("inputchange", {
          bladeController: t,
          options: e.options,
          sender: this
        });
      }
      onChildMonitorUpdate_(e) {
        const t = Js(this.find(at), e.sender);
        if (!t)
          throw S2.alreadyDisposed();
        this.emitter.emit("monitorupdate", {
          bladeController: t,
          sender: this
        });
      }
      onChildValueChange_(e) {
        const t = er(this.find(ie), e.sender);
        if (!t)
          throw S2.alreadyDisposed();
        this.emitter.emit("inputchange", {
          bladeController: t,
          options: e.options,
          sender: this
        });
      }
      onDescendantLayout_(e) {
        this.updatePositions_(), this.emitter.emit("layout", {
          sender: this
        });
      }
      onDescendantInputChange_(e) {
        this.emitter.emit("inputchange", {
          bladeController: e.bladeController,
          options: e.options,
          sender: this
        });
      }
      onDescendantMonitorUpdate_(e) {
        this.emitter.emit("monitorupdate", {
          bladeController: e.bladeController,
          sender: this
        });
      }
      onBladePositionsChange_() {
        this.updatePositions_();
      }
    }
    class bn extends Mt {
      constructor(e, t) {
        super(Object.assign(Object.assign({}, t), { view: new Zs(e, {
          viewName: "brk",
          viewProps: t.viewProps
        }) })), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
        const l = new nr({
          blade: t.root ? void 0 : t.blade,
          viewProps: t.viewProps
        });
        l.emitter.on("add", this.onRackAdd_), l.emitter.on("remove", this.onRackRemove_), this.rack = l, this.viewProps.handleDispose(() => {
          for (let b = this.rack.children.length - 1; b >= 0; b--)
            this.rack.children[b].viewProps.set("disposed", true);
        });
      }
      onRackAdd_(e) {
        e.isRoot && St(this.view.element, e.bladeController.view.element, e.index);
      }
      onRackRemove_(e) {
        e.isRoot && Xn(e.bladeController.view.element);
      }
    }
    const cs = D2("cnt");
    class ir {
      constructor(e, t) {
        var l;
        this.className_ = D2((l = t.viewName) !== null && l !== void 0 ? l : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), cs()), t.viewProps.bindClassModifiers(this.element), this.foldable_ = t.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), B(this.foldable_, "completed", K(this.element, this.className_(void 0, "cpl")));
        const b = e.createElement("button");
        b.classList.add(this.className_("b")), B(t.props, "title", (J) => {
          w(J) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
        }), t.viewProps.bindDisabled(b), this.element.appendChild(b), this.buttonElement = b;
        const E = e.createElement("div");
        E.classList.add(this.className_("i")), this.element.appendChild(E);
        const k = e.createElement("div");
        k.classList.add(this.className_("t")), q(t.props.value("title"), k), this.buttonElement.appendChild(k), this.titleElement = k;
        const z = e.createElement("div");
        z.classList.add(this.className_("m")), this.buttonElement.appendChild(z);
        const Q = t.containerElement;
        Q.classList.add(this.className_("c")), this.element.appendChild(Q), this.containerElement = Q;
      }
    }
    class Qn extends xi {
      constructor(e, t) {
        var l;
        const b = Fe.create((l = t.expanded) !== null && l !== void 0 ? l : true), E = new bn(e, {
          blade: t.blade,
          root: t.root,
          viewProps: t.viewProps
        });
        super(Object.assign(Object.assign({}, t), { rackController: E, view: new ir(e, {
          containerElement: E.view.element,
          foldable: b,
          props: t.props,
          viewName: t.root ? "rot" : void 0,
          viewProps: t.viewProps
        }) })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = t.props, this.foldable = b, $e(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
          this.foldable.cleanUpTransition();
        }), this.rackController.rack.emitter.on("remove", () => {
          this.foldable.cleanUpTransition();
        }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
      }
      get document() {
        return this.view.element.ownerDocument;
      }
      onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"));
      }
    }
    const sr = {
      id: "folder",
      type: "blade",
      accept(n) {
        const e = A, t = ae(n, {
          title: e.required.string,
          view: e.required.constant("folder"),
          expanded: e.optional.boolean
        });
        return t ? { params: t } : null;
      },
      controller(n) {
        return new Qn(n.document, {
          blade: n.blade,
          expanded: n.params.expanded,
          props: X.fromObject({
            title: n.params.title
          }),
          viewProps: n.viewProps
        });
      },
      api(n) {
        return n.controller instanceof Qn ? new yi(n.controller, n.pool) : null;
      }
    };
    class Ht extends ie {
      constructor(e, t) {
        const l = t.valueController.viewProps;
        super(Object.assign(Object.assign({}, t), { value: t.valueController.value, view: new M(e, {
          props: t.props,
          viewProps: l
        }), viewProps: l })), this.props = t.props, this.valueController = t.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    class us extends o {
    }
    const Ci = D2("spr");
    class rr {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(Ci()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("hr");
        l.classList.add(Ci("r")), this.element.appendChild(l);
      }
    }
    class gn extends Mt {
      constructor(e, t) {
        super(Object.assign(Object.assign({}, t), { view: new rr(e, {
          viewProps: t.viewProps
        }) }));
      }
    }
    const or = {
      id: "separator",
      type: "blade",
      accept(n) {
        const t = ae(n, {
          view: A.required.constant("separator")
        });
        return t ? { params: t } : null;
      },
      controller(n) {
        return new gn(n.document, {
          blade: n.blade,
          viewProps: n.viewProps
        });
      },
      api(n) {
        return n.controller instanceof gn ? new us(n.controller) : null;
      }
    }, Ie = D2("tbi");
    class ar {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(Ie()), t.viewProps.bindClassModifiers(this.element), B(t.props, "selected", (E) => {
          E ? this.element.classList.add(Ie(void 0, "sel")) : this.element.classList.remove(Ie(void 0, "sel"));
        });
        const l = e.createElement("button");
        l.classList.add(Ie("b")), t.viewProps.bindDisabled(l), this.element.appendChild(l), this.buttonElement = l;
        const b = e.createElement("div");
        b.classList.add(Ie("t")), q(t.props.value("title"), b), this.buttonElement.appendChild(b), this.titleElement = b;
      }
    }
    class Zn {
      constructor(e, t) {
        this.emitter = new N(), this.onClick_ = this.onClick_.bind(this), this.props = t.props, this.viewProps = t.viewProps, this.view = new ar(e, {
          props: t.props,
          viewProps: t.viewProps
        }), this.view.buttonElement.addEventListener("click", this.onClick_);
      }
      onClick_() {
        this.emitter.emit("click", {
          sender: this
        });
      }
    }
    class ps {
      constructor(e, t) {
        this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new Zn(e, {
          props: t.itemProps,
          viewProps: Qe.create()
        }), this.ic_.emitter.on("click", this.onItemClick_), this.cc_ = new bn(e, {
          blade: Ee(),
          viewProps: Qe.create()
        }), this.props = t.props, B(this.props, "selected", (l) => {
          this.itemController.props.set("selected", l), this.contentController.viewProps.set("hidden", !l);
        });
      }
      get itemController() {
        return this.ic_;
      }
      get contentController() {
        return this.cc_;
      }
      onItemClick_() {
        this.props.set("selected", true);
      }
    }
    class Pi {
      constructor(e, t) {
        this.controller_ = e, this.rackApi_ = t;
      }
      get title() {
        var e;
        return (e = this.controller_.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
      }
      set title(e) {
        this.controller_.itemController.props.set("title", e);
      }
      get selected() {
        return this.controller_.props.get("selected");
      }
      set selected(e) {
        this.controller_.props.set("selected", e);
      }
      get children() {
        return this.rackApi_.children;
      }
      addButton(e) {
        return this.rackApi_.addButton(e);
      }
      addFolder(e) {
        return this.rackApi_.addFolder(e);
      }
      addSeparator(e) {
        return this.rackApi_.addSeparator(e);
      }
      addTab(e) {
        return this.rackApi_.addTab(e);
      }
      add(e, t) {
        this.rackApi_.add(e, t);
      }
      remove(e) {
        this.rackApi_.remove(e);
      }
      addInput(e, t, l) {
        return this.rackApi_.addInput(e, t, l);
      }
      addMonitor(e, t, l) {
        return this.rackApi_.addMonitor(e, t, l);
      }
      addBlade(e) {
        return this.rackApi_.addBlade(e);
      }
    }
    class hs extends Xe {
      constructor(e, t) {
        super(e, new qn(e.rackController, t)), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.onSelect_ = this.onSelect_.bind(this), this.emitter_ = new N(), this.pageApiMap_ = /* @__PURE__ */ new Map(), this.rackApi_.on("change", (l) => {
          this.emitter_.emit("change", {
            event: l
          });
        }), this.rackApi_.on("update", (l) => {
          this.emitter_.emit("update", {
            event: l
          });
        }), this.controller_.tab.selectedIndex.emitter.on("change", this.onSelect_), this.controller_.pageSet.emitter.on("add", this.onPageAdd_), this.controller_.pageSet.emitter.on("remove", this.onPageRemove_), this.controller_.pageSet.items.forEach((l) => {
          this.setUpPageApi_(l);
        });
      }
      get pages() {
        return this.controller_.pageSet.items.map((e) => {
          const t = this.pageApiMap_.get(e);
          if (!t)
            throw S2.shouldNeverHappen();
          return t;
        });
      }
      addPage(e) {
        const t = this.controller_.view.element.ownerDocument, l = new ps(t, {
          itemProps: X.fromObject({
            selected: false,
            title: e.title
          }),
          props: X.fromObject({
            selected: false
          })
        });
        this.controller_.add(l, e.index);
        const b = this.pageApiMap_.get(l);
        if (!b)
          throw S2.shouldNeverHappen();
        return b;
      }
      removePage(e) {
        this.controller_.remove(e);
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
      setUpPageApi_(e) {
        const t = this.rackApi_.apiSet_.find((b) => b.controller_ === e.contentController);
        if (!t)
          throw S2.shouldNeverHappen();
        const l = new Pi(e, t);
        this.pageApiMap_.set(e, l);
      }
      onPageAdd_(e) {
        this.setUpPageApi_(e.item);
      }
      onPageRemove_(e) {
        if (!this.pageApiMap_.get(e.item))
          throw S2.shouldNeverHappen();
        this.pageApiMap_.delete(e.item);
      }
      onSelect_(e) {
        this.emitter_.emit("select", {
          event: new g(this, e.rawValue)
        });
      }
    }
    const ds = -1;
    class lr {
      constructor() {
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = ee(true), this.selectedIndex = ee(ds), this.items_ = [];
      }
      add(e, t) {
        const l = t ?? this.items_.length;
        this.items_.splice(l, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
      }
      remove(e) {
        const t = this.items_.indexOf(e);
        t < 0 || (this.items_.splice(t, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
      }
      keepSelection_() {
        if (this.items_.length === 0) {
          this.selectedIndex.rawValue = ds, this.empty.rawValue = true;
          return;
        }
        const e = this.items_.findIndex((t) => t.rawValue);
        e < 0 ? (this.items_.forEach((t, l) => {
          t.rawValue = l === 0;
        }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((t, l) => {
          t.rawValue = l === e;
        }), this.selectedIndex.rawValue = e), this.empty.rawValue = false;
      }
      onItemSelectedChange_(e) {
        if (e.rawValue) {
          const t = this.items_.findIndex((l) => l === e.sender);
          this.items_.forEach((l, b) => {
            l.rawValue = b === t;
          }), this.selectedIndex.rawValue = t;
        } else
          this.keepSelection_();
      }
    }
    const Kt = D2("tab");
    class $t {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(Kt(), cs()), t.viewProps.bindClassModifiers(this.element), F(t.empty, K(this.element, Kt(void 0, "nop")));
        const l = e.createElement("div");
        l.classList.add(Kt("t")), this.element.appendChild(l), this.itemsElement = l;
        const b = e.createElement("div");
        b.classList.add(Kt("i")), this.element.appendChild(b);
        const E = t.contentsElement;
        E.classList.add(Kt("c")), this.element.appendChild(E), this.contentsElement = E;
      }
    }
    class _n extends xi {
      constructor(e, t) {
        const l = new bn(e, {
          blade: t.blade,
          viewProps: t.viewProps
        }), b = new lr();
        super({
          blade: t.blade,
          rackController: l,
          view: new $t(e, {
            contentsElement: l.view.element,
            empty: b.empty,
            viewProps: t.viewProps
          })
        }), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.pageSet_ = new Rt2(() => null), this.pageSet_.emitter.on("add", this.onPageAdd_), this.pageSet_.emitter.on("remove", this.onPageRemove_), this.tab = b;
      }
      get pageSet() {
        return this.pageSet_;
      }
      add(e, t) {
        this.pageSet_.add(e, t);
      }
      remove(e) {
        this.pageSet_.remove(this.pageSet_.items[e]);
      }
      onPageAdd_(e) {
        const t = e.item;
        St(this.view.itemsElement, t.itemController.view.element, e.index), t.itemController.viewProps.set("parent", this.viewProps), this.rackController.rack.add(t.contentController, e.index), this.tab.add(t.props.value("selected"));
      }
      onPageRemove_(e) {
        const t = e.item;
        Xn(t.itemController.view.element), t.itemController.viewProps.set("parent", null), this.rackController.rack.remove(t.contentController), this.tab.remove(t.props.value("selected"));
      }
    }
    const Ti = {
      id: "tab",
      type: "blade",
      accept(n) {
        const e = A, t = ae(n, {
          pages: e.required.array(e.required.object({ title: e.required.string })),
          view: e.required.constant("tab")
        });
        return !t || t.pages.length === 0 ? null : { params: t };
      },
      controller(n) {
        const e = new _n(n.document, {
          blade: n.blade,
          viewProps: n.viewProps
        });
        return n.params.pages.forEach((t) => {
          const l = new ps(n.document, {
            itemProps: X.fromObject({
              selected: false,
              title: t.title
            }),
            props: X.fromObject({
              selected: false
            })
          });
          e.add(l);
        }), e;
      },
      api(n) {
        return n.controller instanceof _n ? new hs(n.controller, n.pool) : null;
      }
    };
    function cr(n, e) {
      const t = n.accept(e.params);
      if (!t)
        return null;
      const l = A.optional.boolean(e.params.disabled).value, b = A.optional.boolean(e.params.hidden).value;
      return n.controller({
        blade: Ee(),
        document: e.document,
        params: Object.assign(Object.assign({}, t.params), { disabled: l, hidden: b }),
        viewProps: Qe.create({
          disabled: l,
          hidden: b
        })
      });
    }
    class ms {
      constructor() {
        this.disabled = false, this.emitter = new N();
      }
      dispose() {
      }
      tick() {
        this.disabled || this.emitter.emit("tick", {
          sender: this
        });
      }
    }
    class ki {
      constructor(e, t) {
        this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = e, this.emitter = new N(), this.interval_ = t, this.setTimer_();
      }
      get disabled() {
        return this.disabled_;
      }
      set disabled(e) {
        this.disabled_ = e, this.disabled_ ? this.clearTimer_() : this.setTimer_();
      }
      dispose() {
        this.clearTimer_();
      }
      clearTimer_() {
        if (this.timerId_ === null)
          return;
        const e = this.doc_.defaultView;
        e && e.clearInterval(this.timerId_), this.timerId_ = null;
      }
      setTimer_() {
        if (this.clearTimer_(), this.interval_ <= 0)
          return;
        const e = this.doc_.defaultView;
        e && (this.timerId_ = e.setInterval(this.onTick_, this.interval_));
      }
      onTick_() {
        this.disabled_ || this.emitter.emit("tick", {
          sender: this
        });
      }
    }
    class Wn {
      constructor(e) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.reader = e.reader, this.writer = e.writer, this.emitter = new N(), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.target = e.target, this.read();
      }
      read() {
        const e = this.target.read();
        e !== void 0 && (this.value.rawValue = this.reader(e));
      }
      write_(e) {
        this.writer(this.target, e);
      }
      onValueChange_(e) {
        this.write_(e.rawValue), this.emitter.emit("change", {
          options: e.options,
          rawValue: e.rawValue,
          sender: this
        });
      }
    }
    function Le(n, e) {
      for (; n.length < e; )
        n.push(void 0);
    }
    function fs(n) {
      const e = [];
      return Le(e, n), ee(e);
    }
    function Xt(n) {
      const e = n.indexOf(void 0);
      return e < 0 ? n : n.slice(0, e);
    }
    function Ze(n, e) {
      const t = [...Xt(n), e];
      return t.length > n.length ? t.splice(0, t.length - n.length) : Le(t, n.length), t;
    }
    class ur {
      constructor(e) {
        this.onTick_ = this.onTick_.bind(this), this.reader_ = e.reader, this.target = e.target, this.emitter = new N(), this.value = e.value, this.ticker = e.ticker, this.ticker.emitter.on("tick", this.onTick_), this.read();
      }
      dispose() {
        this.ticker.dispose();
      }
      read() {
        const e = this.target.read();
        if (e === void 0)
          return;
        const t = this.value.rawValue, l = this.reader_(e);
        this.value.rawValue = Ze(t, l), this.emitter.emit("update", {
          rawValue: l,
          sender: this
        });
      }
      onTick_(e) {
        this.read();
      }
    }
    class wn {
      constructor(e) {
        this.constraints = e;
      }
      constrain(e) {
        return this.constraints.reduce((t, l) => l.constrain(t), e);
      }
    }
    function it(n, e) {
      if (n instanceof e)
        return n;
      if (n instanceof wn) {
        const t = n.constraints.reduce((l, b) => l || (b instanceof e ? b : null), null);
        if (t)
          return t;
      }
      return null;
    }
    class Yt {
      constructor(e) {
        this.values = X.fromObject({
          max: e.max,
          min: e.min
        });
      }
      constrain(e) {
        const t = this.values.get("max"), l = this.values.get("min");
        return Math.min(Math.max(e, l), t);
      }
    }
    class yn {
      constructor(e) {
        this.values = X.fromObject({
          options: e
        });
      }
      get options() {
        return this.values.get("options");
      }
      constrain(e) {
        const t = this.values.get("options");
        return t.length === 0 || t.filter((b) => b.value === e).length > 0 ? e : t[0].value;
      }
    }
    class Ai {
      constructor(e) {
        this.values = X.fromObject({
          max: e.max,
          min: e.min
        });
      }
      get maxValue() {
        return this.values.get("max");
      }
      get minValue() {
        return this.values.get("min");
      }
      constrain(e) {
        const t = this.values.get("max"), l = this.values.get("min");
        let b = e;
        return w(l) || (b = Math.max(b, l)), w(t) || (b = Math.min(b, t)), b;
      }
    }
    class Jn {
      constructor(e, t = 0) {
        this.step = e, this.origin = t;
      }
      constrain(e) {
        const t = this.origin % this.step, l = Math.round((e - t) / this.step);
        return t + l * this.step;
      }
    }
    const qt = D2("lst");
    class vs {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = t.props, this.element = e.createElement("div"), this.element.classList.add(qt()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("select");
        l.classList.add(qt("s")), B(this.props_, "options", (E) => {
          mn(l), E.forEach((k, z) => {
            const Q = e.createElement("option");
            Q.dataset.index = String(z), Q.textContent = k.text, Q.value = String(k.value), l.appendChild(Q);
          });
        }), t.viewProps.bindDisabled(l), this.element.appendChild(l), this.selectElement = l;
        const b = e.createElement("div");
        b.classList.add(qt("m")), b.appendChild(Ct2(e, "dropdown")), this.element.appendChild(b), t.value.emitter.on("change", this.onValueChange_), this.value_ = t.value, this.update_();
      }
      update_() {
        this.selectElement.value = String(this.value_.rawValue);
      }
      onValueChange_() {
        this.update_();
      }
    }
    class xn {
      constructor(e, t) {
        this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new vs(e, {
          props: this.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
      }
      onSelectChange_(e) {
        const l = e.currentTarget.selectedOptions.item(0);
        if (!l)
          return;
        const b = Number(l.dataset.index);
        this.value.rawValue = this.props.get("options")[b].value;
      }
    }
    const bs = D2("pop");
    class pr {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(bs()), t.viewProps.bindClassModifiers(this.element), F(t.shows, K(this.element, bs(void 0, "v")));
      }
    }
    class gs {
      constructor(e, t) {
        this.shows = ee(false), this.viewProps = t.viewProps, this.view = new pr(e, {
          shows: this.shows,
          viewProps: this.viewProps
        });
      }
    }
    const _s = D2("txt");
    class hr {
      constructor(e, t) {
        this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(_s()), t.viewProps.bindClassModifiers(this.element), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_);
        const l = e.createElement("input");
        l.classList.add(_s("i")), l.type = "text", t.viewProps.bindDisabled(l), this.element.appendChild(l), this.inputElement = l, t.value.emitter.on("change", this.onChange_), this.value_ = t.value, this.refresh();
      }
      refresh() {
        const e = this.props_.get("formatter");
        this.inputElement.value = e(this.value_.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class ei {
      constructor(e, t) {
        this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = t.parser, this.props = t.props, this.value = t.value, this.viewProps = t.viewProps, this.view = new hr(e, {
          props: t.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.inputElement.addEventListener("change", this.onInputChange_);
      }
      onInputChange_(e) {
        const l = e.currentTarget.value, b = this.parser_(l);
        w(b) || (this.value.rawValue = b), this.view.refresh();
      }
    }
    function dr(n) {
      return String(n);
    }
    function ws(n) {
      return n === "false" ? false : !!n;
    }
    function ys(n) {
      return dr(n);
    }
    class mr {
      constructor(e) {
        this.text = e;
      }
      evaluate() {
        return Number(this.text);
      }
      toString() {
        return this.text;
      }
    }
    const fr = {
      "**": (n, e) => Math.pow(n, e),
      "*": (n, e) => n * e,
      "/": (n, e) => n / e,
      "%": (n, e) => n % e,
      "+": (n, e) => n + e,
      "-": (n, e) => n - e,
      "<<": (n, e) => n << e,
      ">>": (n, e) => n >> e,
      ">>>": (n, e) => n >>> e,
      "&": (n, e) => n & e,
      "^": (n, e) => n ^ e,
      "|": (n, e) => n | e
    };
    class vr {
      constructor(e, t, l) {
        this.left = t, this.operator = e, this.right = l;
      }
      evaluate() {
        const e = fr[this.operator];
        if (!e)
          throw new Error(`unexpected binary operator: '${this.operator}`);
        return e(this.left.evaluate(), this.right.evaluate());
      }
      toString() {
        return [
          "b(",
          this.left.toString(),
          this.operator,
          this.right.toString(),
          ")"
        ].join(" ");
      }
    }
    const xs = {
      "+": (n) => n,
      "-": (n) => -n,
      "~": (n) => ~n
    };
    class br {
      constructor(e, t) {
        this.operator = e, this.expression = t;
      }
      evaluate() {
        const e = xs[this.operator];
        if (!e)
          throw new Error(`unexpected unary operator: '${this.operator}`);
        return e(this.expression.evaluate());
      }
      toString() {
        return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
      }
    }
    function Mi(n) {
      return (e, t) => {
        for (let l = 0; l < n.length; l++) {
          const b = n[l](e, t);
          if (b !== "")
            return b;
        }
        return "";
      };
    }
    function Vt(n, e) {
      var t;
      const l = n.substr(e).match(/^\s+/);
      return (t = l && l[0]) !== null && t !== void 0 ? t : "";
    }
    function gr(n, e) {
      const t = n.substr(e, 1);
      return t.match(/^[1-9]$/) ? t : "";
    }
    function En(n, e) {
      var t;
      const l = n.substr(e).match(/^[0-9]+/);
      return (t = l && l[0]) !== null && t !== void 0 ? t : "";
    }
    function _r(n, e) {
      const t = En(n, e);
      if (t !== "")
        return t;
      const l = n.substr(e, 1);
      if (e += 1, l !== "-" && l !== "+")
        return "";
      const b = En(n, e);
      return b === "" ? "" : l + b;
    }
    function lt(n, e) {
      const t = n.substr(e, 1);
      if (e += 1, t.toLowerCase() !== "e")
        return "";
      const l = _r(n, e);
      return l === "" ? "" : t + l;
    }
    function Es(n, e) {
      const t = n.substr(e, 1);
      if (t === "0")
        return t;
      const l = gr(n, e);
      return e += l.length, l === "" ? "" : l + En(n, e);
    }
    function wr(n, e) {
      const t = Es(n, e);
      if (e += t.length, t === "")
        return "";
      const l = n.substr(e, 1);
      if (e += l.length, l !== ".")
        return "";
      const b = En(n, e);
      return e += b.length, t + l + b + lt(n, e);
    }
    function Cs(n, e) {
      const t = n.substr(e, 1);
      if (e += t.length, t !== ".")
        return "";
      const l = En(n, e);
      return e += l.length, l === "" ? "" : t + l + lt(n, e);
    }
    function yr(n, e) {
      const t = Es(n, e);
      return e += t.length, t === "" ? "" : t + lt(n, e);
    }
    const Ps = Mi([
      wr,
      Cs,
      yr
    ]);
    function Si(n, e) {
      var t;
      const l = n.substr(e).match(/^[01]+/);
      return (t = l && l[0]) !== null && t !== void 0 ? t : "";
    }
    function xr(n, e) {
      const t = n.substr(e, 2);
      if (e += t.length, t.toLowerCase() !== "0b")
        return "";
      const l = Si(n, e);
      return l === "" ? "" : t + l;
    }
    function Ts(n, e) {
      var t;
      const l = n.substr(e).match(/^[0-7]+/);
      return (t = l && l[0]) !== null && t !== void 0 ? t : "";
    }
    function We(n, e) {
      const t = n.substr(e, 2);
      if (e += t.length, t.toLowerCase() !== "0o")
        return "";
      const l = Ts(n, e);
      return l === "" ? "" : t + l;
    }
    function Er(n, e) {
      var t;
      const l = n.substr(e).match(/^[0-9a-f]+/i);
      return (t = l && l[0]) !== null && t !== void 0 ? t : "";
    }
    function Cr(n, e) {
      const t = n.substr(e, 2);
      if (e += t.length, t.toLowerCase() !== "0x")
        return "";
      const l = Er(n, e);
      return l === "" ? "" : t + l;
    }
    const Li = Mi([
      xr,
      We,
      Cr
    ]), Pr = Mi([
      Li,
      Ps
    ]);
    function Tt(n, e) {
      const t = Pr(n, e);
      return e += t.length, t === "" ? null : {
        evaluable: new mr(t),
        cursor: e
      };
    }
    function Ri(n, e) {
      const t = n.substr(e, 1);
      if (e += t.length, t !== "(")
        return null;
      const l = ti(n, e);
      if (!l)
        return null;
      e = l.cursor, e += Vt(n, e).length;
      const b = n.substr(e, 1);
      return e += b.length, b !== ")" ? null : {
        evaluable: l.evaluable,
        cursor: e
      };
    }
    function Tr(n, e) {
      var t;
      return (t = Tt(n, e)) !== null && t !== void 0 ? t : Ri(n, e);
    }
    function Vi(n, e) {
      const t = Tr(n, e);
      if (t)
        return t;
      const l = n.substr(e, 1);
      if (e += l.length, l !== "+" && l !== "-" && l !== "~")
        return null;
      const b = Vi(n, e);
      return b ? (e = b.cursor, {
        cursor: e,
        evaluable: new br(l, b.evaluable)
      }) : null;
    }
    function kr(n, e, t) {
      t += Vt(e, t).length;
      const l = n.filter((b) => e.startsWith(b, t))[0];
      return l ? (t += l.length, t += Vt(e, t).length, {
        cursor: t,
        operator: l
      }) : null;
    }
    function It(n, e) {
      return (t, l) => {
        const b = n(t, l);
        if (!b)
          return null;
        l = b.cursor;
        let E = b.evaluable;
        for (; ; ) {
          const k = kr(e, t, l);
          if (!k)
            break;
          l = k.cursor;
          const z = n(t, l);
          if (!z)
            return null;
          l = z.cursor, E = new vr(k.operator, E, z.evaluable);
        }
        return E ? {
          cursor: l,
          evaluable: E
        } : null;
      };
    }
    const ks = [
      ["**"],
      ["*", "/", "%"],
      ["+", "-"],
      ["<<", ">>>", ">>"],
      ["&"],
      ["^"],
      ["|"]
    ].reduce((n, e) => It(n, e), Vi);
    function ti(n, e) {
      return e += Vt(n, e).length, ks(n, e);
    }
    function As(n) {
      const e = ti(n, 0);
      return !e || e.cursor + Vt(n, e.cursor).length !== n.length ? null : e.evaluable;
    }
    function ct(n) {
      var e;
      const t = As(n);
      return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0 ? e : null;
    }
    function _t(n) {
      if (typeof n == "number")
        return n;
      if (typeof n == "string") {
        const e = ct(n);
        if (!w(e))
          return e;
      }
      return 0;
    }
    function Ar(n) {
      return String(n);
    }
    function De(n) {
      return (e) => e.toFixed(Math.max(Math.min(n, 20), 0));
    }
    const Ms = De(0);
    function Cn(n) {
      return Ms(n) + "%";
    }
    function Ii(n) {
      return String(n);
    }
    function kt(n) {
      return n;
    }
    function Qt({ primary: n, secondary: e, forward: t, backward: l }) {
      let b = false;
      function E(k) {
        b || (b = true, k(), b = false);
      }
      n.emitter.on("change", (k) => {
        E(() => {
          e.setRawValue(t(n, e), k.options);
        });
      }), e.emitter.on("change", (k) => {
        E(() => {
          n.setRawValue(l(n, e), k.options);
        }), E(() => {
          e.setRawValue(t(n, e), k.options);
        });
      }), E(() => {
        e.setRawValue(t(n, e), {
          forceEmit: false,
          last: true
        });
      });
    }
    function ze(n, e) {
      const t = n * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
      return e.upKey ? +t : e.downKey ? -t : 0;
    }
    function Pn(n) {
      return {
        altKey: n.altKey,
        downKey: n.key === "ArrowDown",
        shiftKey: n.shiftKey,
        upKey: n.key === "ArrowUp"
      };
    }
    function ut(n) {
      return {
        altKey: n.altKey,
        downKey: n.key === "ArrowLeft",
        shiftKey: n.shiftKey,
        upKey: n.key === "ArrowRight"
      };
    }
    function Ss(n) {
      return n === "ArrowUp" || n === "ArrowDown";
    }
    function ni(n) {
      return Ss(n) || n === "ArrowLeft" || n === "ArrowRight";
    }
    function Di(n, e) {
      var t, l;
      const b = e.ownerDocument.defaultView, E = e.getBoundingClientRect();
      return {
        x: n.pageX - (((t = b && b.scrollX) !== null && t !== void 0 ? t : 0) + E.left),
        y: n.pageY - (((l = b && b.scrollY) !== null && l !== void 0 ? l : 0) + E.top)
      };
    }
    class Dt {
      constructor(e) {
        this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new N(), e.addEventListener("touchstart", this.onTouchStart_, {
          passive: false
        }), e.addEventListener("touchmove", this.onTouchMove_, {
          passive: true
        }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
      }
      computePosition_(e) {
        const t = this.elem_.getBoundingClientRect();
        return {
          bounds: {
            width: t.width,
            height: t.height
          },
          point: e ? {
            x: e.x,
            y: e.y
          } : null
        };
      }
      onMouseDown_(e) {
        var t;
        e.preventDefault(), (t = e.currentTarget) === null || t === void 0 || t.focus();
        const l = this.elem_.ownerDocument;
        l.addEventListener("mousemove", this.onDocumentMouseMove_), l.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
          altKey: e.altKey,
          data: this.computePosition_(Di(e, this.elem_)),
          sender: this,
          shiftKey: e.shiftKey
        });
      }
      onDocumentMouseMove_(e) {
        this.emitter.emit("move", {
          altKey: e.altKey,
          data: this.computePosition_(Di(e, this.elem_)),
          sender: this,
          shiftKey: e.shiftKey
        });
      }
      onDocumentMouseUp_(e) {
        const t = this.elem_.ownerDocument;
        t.removeEventListener("mousemove", this.onDocumentMouseMove_), t.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
          altKey: e.altKey,
          data: this.computePosition_(Di(e, this.elem_)),
          sender: this,
          shiftKey: e.shiftKey
        });
      }
      onTouchStart_(e) {
        e.preventDefault();
        const t = e.targetTouches.item(0), l = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
          altKey: e.altKey,
          data: this.computePosition_(t ? {
            x: t.clientX - l.left,
            y: t.clientY - l.top
          } : void 0),
          sender: this,
          shiftKey: e.shiftKey
        }), this.lastTouch_ = t;
      }
      onTouchMove_(e) {
        const t = e.targetTouches.item(0), l = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
          altKey: e.altKey,
          data: this.computePosition_(t ? {
            x: t.clientX - l.left,
            y: t.clientY - l.top
          } : void 0),
          sender: this,
          shiftKey: e.shiftKey
        }), this.lastTouch_ = t;
      }
      onTouchEnd_(e) {
        var t;
        const l = (t = e.targetTouches.item(0)) !== null && t !== void 0 ? t : this.lastTouch_, b = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
          altKey: e.altKey,
          data: this.computePosition_(l ? {
            x: l.clientX - b.left,
            y: l.clientY - b.top
          } : void 0),
          sender: this,
          shiftKey: e.shiftKey
        });
      }
    }
    function we(n, e, t, l, b) {
      const E = (n - e) / (t - e);
      return l + E * (b - l);
    }
    function Oi(n) {
      return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
    }
    function Re(n, e, t) {
      return Math.min(Math.max(n, e), t);
    }
    function Zt(n, e) {
      return (n % e + e) % e;
    }
    const Ye = D2("txt");
    class Ni {
      constructor(e, t) {
        this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(Ye(), Ye(void 0, "num")), t.arrayPosition && this.element.classList.add(Ye(void 0, t.arrayPosition)), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("input");
        l.classList.add(Ye("i")), l.type = "text", t.viewProps.bindDisabled(l), this.element.appendChild(l), this.inputElement = l, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = t.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(Ye()), this.inputElement.classList.add(Ye("i"));
        const b = e.createElement("div");
        b.classList.add(Ye("k")), this.element.appendChild(b), this.knobElement = b;
        const E = e.createElementNS(Ke, "svg");
        E.classList.add(Ye("g")), this.knobElement.appendChild(E);
        const k = e.createElementNS(Ke, "path");
        k.classList.add(Ye("gb")), E.appendChild(k), this.guideBodyElem_ = k;
        const z = e.createElementNS(Ke, "path");
        z.classList.add(Ye("gh")), E.appendChild(z), this.guideHeadElem_ = z;
        const Q = e.createElement("div");
        Q.classList.add(D2("tt")()), this.knobElement.appendChild(Q), this.tooltipElem_ = Q, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.refresh();
      }
      onDraggingChange_(e) {
        if (e.rawValue === null) {
          this.element.classList.remove(Ye(void 0, "drg"));
          return;
        }
        this.element.classList.add(Ye(void 0, "drg"));
        const t = e.rawValue / this.props_.get("draggingScale"), l = t + (t > 0 ? -1 : t < 0 ? 1 : 0), b = Re(-l, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [`M ${l + b},0 L${l},4 L${l + b},8`, `M ${t},-1 L${t},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
        const E = this.props_.get("formatter");
        this.tooltipElem_.textContent = E(this.value.rawValue), this.tooltipElem_.style.left = `${t}px`;
      }
      refresh() {
        const e = this.props_.get("formatter");
        this.inputElement.value = e(this.value.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class Tn {
      constructor(e, t) {
        var l;
        this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = t.baseStep, this.parser_ = t.parser, this.props = t.props, this.sliderProps_ = (l = t.sliderProps) !== null && l !== void 0 ? l : null, this.value = t.value, this.viewProps = t.viewProps, this.dragging_ = ee(null), this.view = new Ni(e, {
          arrayPosition: t.arrayPosition,
          dragging: this.dragging_,
          props: this.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const b = new Dt(this.view.knobElement);
        b.emitter.on("down", this.onPointerDown_), b.emitter.on("move", this.onPointerMove_), b.emitter.on("up", this.onPointerUp_);
      }
      constrainValue_(e) {
        var t, l;
        const b = (t = this.sliderProps_) === null || t === void 0 ? void 0 : t.get("minValue"), E = (l = this.sliderProps_) === null || l === void 0 ? void 0 : l.get("maxValue");
        let k = e;
        return b !== void 0 && (k = Math.max(k, b)), E !== void 0 && (k = Math.min(k, E)), k;
      }
      onInputChange_(e) {
        const l = e.currentTarget.value, b = this.parser_(l);
        w(b) || (this.value.rawValue = this.constrainValue_(b)), this.view.refresh();
      }
      onInputKeyDown_(e) {
        const t = ze(this.baseStep_, Pn(e));
        t !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), {
          forceEmit: false,
          last: false
        });
      }
      onInputKeyUp_(e) {
        ze(this.baseStep_, Pn(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
      onPointerDown_() {
        this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
      }
      computeDraggingValue_(e) {
        if (!e.point)
          return null;
        const t = e.point.x - e.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + t * this.props.get("draggingScale"));
      }
      onPointerMove_(e) {
        const t = this.computeDraggingValue_(e.data);
        t !== null && (this.value.setRawValue(t, {
          forceEmit: false,
          last: false
        }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
      }
      onPointerUp_(e) {
        const t = this.computeDraggingValue_(e.data);
        t !== null && (this.value.setRawValue(t, {
          forceEmit: true,
          last: true
        }), this.dragging_.rawValue = null);
      }
    }
    const Bi = D2("sld");
    class qe {
      constructor(e, t) {
        this.onChange_ = this.onChange_.bind(this), this.props_ = t.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(Bi()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(Bi("t")), t.viewProps.bindTabIndex(l), this.element.appendChild(l), this.trackElement = l;
        const b = e.createElement("div");
        b.classList.add(Bi("k")), this.trackElement.appendChild(b), this.knobElement = b, t.value.emitter.on("change", this.onChange_), this.value = t.value, this.update_();
      }
      update_() {
        const e = Re(we(this.value.rawValue, this.props_.get("minValue"), this.props_.get("maxValue"), 0, 100), 0, 100);
        this.knobElement.style.width = `${e}%`;
      }
      onChange_() {
        this.update_();
      }
    }
    class Fi {
      constructor(e, t) {
        this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = t.baseStep, this.value = t.value, this.viewProps = t.viewProps, this.props = t.props, this.view = new qe(e, {
          props: this.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.ptHandler_ = new Dt(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(e, t) {
        e.point && this.value.setRawValue(we(Re(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("minValue"), this.props.get("maxValue")), t);
      }
      onPointerDownOrMove_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: true,
          last: true
        });
      }
      onKeyDown_(e) {
        const t = ze(this.baseStep_, ut(e));
        t !== 0 && this.value.setRawValue(this.value.rawValue + t, {
          forceEmit: false,
          last: false
        });
      }
      onKeyUp_(e) {
        ze(this.baseStep_, ut(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    const kn = D2("sldtxt");
    class zi {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(kn());
        const l = e.createElement("div");
        l.classList.add(kn("s")), this.sliderView_ = t.sliderView, l.appendChild(this.sliderView_.element), this.element.appendChild(l);
        const b = e.createElement("div");
        b.classList.add(kn("t")), this.textView_ = t.textView, b.appendChild(this.textView_.element), this.element.appendChild(b);
      }
    }
    class ii {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.sliderC_ = new Fi(e, {
          baseStep: t.baseStep,
          props: t.sliderProps,
          value: t.value,
          viewProps: this.viewProps
        }), this.textC_ = new Tn(e, {
          baseStep: t.baseStep,
          parser: t.parser,
          props: t.textProps,
          sliderProps: t.sliderProps,
          value: t.value,
          viewProps: t.viewProps
        }), this.view = new zi(e, {
          sliderView: this.sliderC_.view,
          textView: this.textC_.view
        });
      }
      get sliderController() {
        return this.sliderC_;
      }
      get textController() {
        return this.textC_;
      }
    }
    function st(n, e) {
      n.write(e);
    }
    function An(n) {
      const e = A;
      if (Array.isArray(n))
        return e.required.array(e.required.object({
          text: e.required.string,
          value: e.required.raw
        }))(n).value;
      if (typeof n == "object")
        return e.required.raw(n).value;
    }
    function ji(n) {
      if (n === "inline" || n === "popup")
        return n;
    }
    function wt(n) {
      const e = A;
      return e.required.object({
        max: e.optional.number,
        min: e.optional.number,
        step: e.optional.number
      })(n).value;
    }
    function Ls(n) {
      if (Array.isArray(n))
        return n;
      const e = [];
      return Object.keys(n).forEach((t) => {
        e.push({ text: t, value: n[t] });
      }), e;
    }
    function Ui(n) {
      return w(n) ? null : new yn(Ls(n));
    }
    function Mr(n) {
      const e = n ? it(n, Jn) : null;
      return e ? e.step : null;
    }
    function si(n, e) {
      const t = n && it(n, Jn);
      return t ? Oi(t.step) : Math.max(Oi(e), 2);
    }
    function Ot(n) {
      const e = Mr(n);
      return e ?? 1;
    }
    function Nt(n, e) {
      var t;
      const l = n && it(n, Jn), b = Math.abs((t = l == null ? void 0 : l.step) !== null && t !== void 0 ? t : e);
      return b === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(b)) - 1);
    }
    const Mn = D2("ckb");
    class Sn {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Mn()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("label");
        l.classList.add(Mn("l")), this.element.appendChild(l);
        const b = e.createElement("input");
        b.classList.add(Mn("i")), b.type = "checkbox", l.appendChild(b), this.inputElement = b, t.viewProps.bindDisabled(this.inputElement);
        const E = e.createElement("div");
        E.classList.add(Mn("w")), l.appendChild(E);
        const k = Ct2(e, "check");
        E.appendChild(k), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
      }
      update_() {
        this.inputElement.checked = this.value.rawValue;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Rs {
      constructor(e, t) {
        this.onInputChange_ = this.onInputChange_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new Sn(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.view.inputElement.addEventListener("change", this.onInputChange_);
      }
      onInputChange_(e) {
        const t = e.currentTarget;
        this.value.rawValue = t.checked;
      }
    }
    function Vs(n) {
      const e = [], t = Ui(n.options);
      return t && e.push(t), new wn(e);
    }
    const ri = {
      id: "input-bool",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "boolean")
          return null;
        const l = ae(e, {
          options: A.optional.custom(An)
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => ws,
        constraint: (n) => Vs(n.params),
        writer: (n) => st
      },
      controller: (n) => {
        const e = n.document, t = n.value, l = n.constraint, b = l && it(l, yn);
        return b ? new xn(e, {
          props: new X({
            options: b.values.value("options")
          }),
          value: t,
          viewProps: n.viewProps
        }) : new Rs(e, {
          value: t,
          viewProps: n.viewProps
        });
      }
    }, Bt = D2("col");
    class Gi {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(Bt()), t.foldable.bindExpandedClass(this.element, Bt(void 0, "expanded")), B(t.foldable, "completed", K(this.element, Bt(void 0, "cpl")));
        const l = e.createElement("div");
        l.classList.add(Bt("h")), this.element.appendChild(l);
        const b = e.createElement("div");
        b.classList.add(Bt("s")), l.appendChild(b), this.swatchElement = b;
        const E = e.createElement("div");
        if (E.classList.add(Bt("t")), l.appendChild(E), this.textElement = E, t.pickerLayout === "inline") {
          const k = e.createElement("div");
          k.classList.add(Bt("p")), this.element.appendChild(k), this.pickerElement = k;
        } else
          this.pickerElement = null;
      }
    }
    function Sr(n, e, t) {
      const l = Re(n / 255, 0, 1), b = Re(e / 255, 0, 1), E = Re(t / 255, 0, 1), k = Math.max(l, b, E), z = Math.min(l, b, E), Q = k - z;
      let J = 0, de = 0;
      const ve = (z + k) / 2;
      return Q !== 0 && (de = Q / (1 - Math.abs(k + z - 1)), l === k ? J = (b - E) / Q : b === k ? J = 2 + (E - l) / Q : J = 4 + (l - b) / Q, J = J / 6 + (J < 0 ? 1 : 0)), [J * 360, de * 100, ve * 100];
    }
    function Lr(n, e, t) {
      const l = (n % 360 + 360) % 360, b = Re(e / 100, 0, 1), E = Re(t / 100, 0, 1), k = (1 - Math.abs(2 * E - 1)) * b, z = k * (1 - Math.abs(l / 60 % 2 - 1)), Q = E - k / 2;
      let J, de, ve;
      return l >= 0 && l < 60 ? [J, de, ve] = [k, z, 0] : l >= 60 && l < 120 ? [J, de, ve] = [z, k, 0] : l >= 120 && l < 180 ? [J, de, ve] = [0, k, z] : l >= 180 && l < 240 ? [J, de, ve] = [0, z, k] : l >= 240 && l < 300 ? [J, de, ve] = [z, 0, k] : [J, de, ve] = [k, 0, z], [(J + Q) * 255, (de + Q) * 255, (ve + Q) * 255];
    }
    function Rr(n, e, t) {
      const l = Re(n / 255, 0, 1), b = Re(e / 255, 0, 1), E = Re(t / 255, 0, 1), k = Math.max(l, b, E), z = Math.min(l, b, E), Q = k - z;
      let J;
      Q === 0 ? J = 0 : k === l ? J = 60 * (((b - E) / Q % 6 + 6) % 6) : k === b ? J = 60 * ((E - l) / Q + 2) : J = 60 * ((l - b) / Q + 4);
      const de = k === 0 ? 0 : Q / k, ve = k;
      return [J, de * 100, ve * 100];
    }
    function Is(n, e, t) {
      const l = Zt(n, 360), b = Re(e / 100, 0, 1), E = Re(t / 100, 0, 1), k = E * b, z = k * (1 - Math.abs(l / 60 % 2 - 1)), Q = E - k;
      let J, de, ve;
      return l >= 0 && l < 60 ? [J, de, ve] = [k, z, 0] : l >= 60 && l < 120 ? [J, de, ve] = [z, k, 0] : l >= 120 && l < 180 ? [J, de, ve] = [0, k, z] : l >= 180 && l < 240 ? [J, de, ve] = [0, z, k] : l >= 240 && l < 300 ? [J, de, ve] = [z, 0, k] : [J, de, ve] = [k, 0, z], [(J + Q) * 255, (de + Q) * 255, (ve + Q) * 255];
    }
    function d(n, e, t) {
      const l = t + e * (100 - Math.abs(2 * t - 100)) / 200;
      return [
        n,
        l !== 0 ? e * (100 - Math.abs(2 * t - 100)) / l : 0,
        t + e * (100 - Math.abs(2 * t - 100)) / (2 * 100)
      ];
    }
    function a(n, e, t) {
      const l = 100 - Math.abs(t * (200 - e) / 100 - 100);
      return [n, l !== 0 ? e * t / l : 0, t * (200 - e) / (2 * 100)];
    }
    function u(n) {
      return [n[0], n[1], n[2]];
    }
    function v(n, e) {
      return [n[0], n[1], n[2], e];
    }
    const x = {
      hsl: {
        hsl: (n, e, t) => [n, e, t],
        hsv: d,
        rgb: Lr
      },
      hsv: {
        hsl: a,
        hsv: (n, e, t) => [n, e, t],
        rgb: Is
      },
      rgb: {
        hsl: Sr,
        hsv: Rr,
        rgb: (n, e, t) => [n, e, t]
      }
    };
    function T(n, e) {
      return [
        e === "float" ? 1 : n === "rgb" ? 255 : 360,
        e === "float" ? 1 : n === "rgb" ? 255 : 100,
        e === "float" ? 1 : n === "rgb" ? 255 : 100
      ];
    }
    function V(n, e) {
      return n === e ? e : Zt(n, e);
    }
    function j(n, e, t) {
      var l;
      const b = T(e, t);
      return [
        e === "rgb" ? Re(n[0], 0, b[0]) : V(n[0], b[0]),
        Re(n[1], 0, b[1]),
        Re(n[2], 0, b[2]),
        Re((l = n[3]) !== null && l !== void 0 ? l : 1, 0, 1)
      ];
    }
    function re(n, e, t, l) {
      const b = T(e, t), E = T(e, l);
      return n.map((k, z) => k / b[z] * E[z]);
    }
    function Je(n, e, t) {
      const l = re(n, e.mode, e.type, "int"), b = x[e.mode][t.mode](...l);
      return re(b, t.mode, "int", t.type);
    }
    function et(n, e) {
      return typeof n != "object" || w(n) ? false : e in n && typeof n[e] == "number";
    }
    class te {
      static black(e = "int") {
        return new te([0, 0, 0], "rgb", e);
      }
      static fromObject(e, t = "int") {
        const l = "a" in e ? [e.r, e.g, e.b, e.a] : [e.r, e.g, e.b];
        return new te(l, "rgb", t);
      }
      static toRgbaObject(e, t = "int") {
        return e.toRgbaObject(t);
      }
      static isRgbColorObject(e) {
        return et(e, "r") && et(e, "g") && et(e, "b");
      }
      static isRgbaColorObject(e) {
        return this.isRgbColorObject(e) && et(e, "a");
      }
      static isColorObject(e) {
        return this.isRgbColorObject(e);
      }
      static equals(e, t) {
        if (e.mode !== t.mode)
          return false;
        const l = e.comps_, b = t.comps_;
        for (let E = 0; E < l.length; E++)
          if (l[E] !== b[E])
            return false;
        return true;
      }
      constructor(e, t, l = "int") {
        this.mode = t, this.type = l, this.comps_ = j(e, t, l);
      }
      getComponents(e, t = "int") {
        return v(Je(u(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: t }), this.comps_[3]);
      }
      toRgbaObject(e = "int") {
        const t = this.getComponents("rgb", e);
        return {
          r: t[0],
          g: t[1],
          b: t[2],
          a: t[3]
        };
      }
    }
    const At = D2("colp");
    class Vr {
      constructor(e, t) {
        this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(At()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(At("hsv"));
        const b = e.createElement("div");
        b.classList.add(At("sv")), this.svPaletteView_ = t.svPaletteView, b.appendChild(this.svPaletteView_.element), l.appendChild(b);
        const E = e.createElement("div");
        E.classList.add(At("h")), this.hPaletteView_ = t.hPaletteView, E.appendChild(this.hPaletteView_.element), l.appendChild(E), this.element.appendChild(l);
        const k = e.createElement("div");
        if (k.classList.add(At("rgb")), this.textView_ = t.textView, k.appendChild(this.textView_.element), this.element.appendChild(k), t.alphaViews) {
          this.alphaViews_ = {
            palette: t.alphaViews.palette,
            text: t.alphaViews.text
          };
          const z = e.createElement("div");
          z.classList.add(At("a"));
          const Q = e.createElement("div");
          Q.classList.add(At("ap")), Q.appendChild(this.alphaViews_.palette.element), z.appendChild(Q);
          const J = e.createElement("div");
          J.classList.add(At("at")), J.appendChild(this.alphaViews_.text.element), z.appendChild(J), this.element.appendChild(z);
        }
      }
      get allFocusableElements() {
        const e = [
          this.svPaletteView_.element,
          this.hPaletteView_.element,
          this.textView_.modeSelectElement,
          ...this.textView_.textViews.map((t) => t.inputElement)
        ];
        return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
      }
    }
    function al(n) {
      return n === "int" ? "int" : n === "float" ? "float" : void 0;
    }
    function Ir(n) {
      const e = A;
      return ae(n, {
        alpha: e.optional.boolean,
        color: e.optional.object({
          alpha: e.optional.boolean,
          type: e.optional.custom(al)
        }),
        expanded: e.optional.boolean,
        picker: e.optional.custom(ji)
      });
    }
    function Ln(n) {
      return n ? 0.1 : 1;
    }
    function Rn(n) {
      var e;
      return (e = n.color) === null || e === void 0 ? void 0 : e.type;
    }
    function ll(n, e) {
      return n.alpha === e.alpha && n.mode === e.mode && n.notation === e.notation && n.type === e.type;
    }
    function pt(n, e) {
      const t = n.match(/^(.+)%$/);
      return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(n), e);
    }
    const cl = {
      deg: (n) => n,
      grad: (n) => n * 360 / 400,
      rad: (n) => n * 360 / (2 * Math.PI),
      turn: (n) => n * 360
    };
    function ko(n) {
      const e = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
      if (!e)
        return parseFloat(n);
      const t = parseFloat(e[1]), l = e[2];
      return cl[l](t);
    }
    function Ao(n) {
      const e = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
      if (!e)
        return null;
      const t = [
        pt(e[1], 255),
        pt(e[2], 255),
        pt(e[3], 255)
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
    }
    function Mo(n) {
      return (e) => {
        const t = Ao(e);
        return t ? new te(t, "rgb", n) : null;
      };
    }
    function So(n) {
      const e = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
      if (!e)
        return null;
      const t = [
        pt(e[1], 255),
        pt(e[2], 255),
        pt(e[3], 255),
        pt(e[4], 1)
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
    }
    function Lo(n) {
      return (e) => {
        const t = So(e);
        return t ? new te(t, "rgb", n) : null;
      };
    }
    function Ro(n) {
      const e = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
      if (!e)
        return null;
      const t = [
        ko(e[1]),
        pt(e[2], 100),
        pt(e[3], 100)
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
    }
    function Vo(n) {
      return (e) => {
        const t = Ro(e);
        return t ? new te(t, "hsl", n) : null;
      };
    }
    function Io(n) {
      const e = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
      if (!e)
        return null;
      const t = [
        ko(e[1]),
        pt(e[2], 100),
        pt(e[3], 100),
        pt(e[4], 1)
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
    }
    function Do(n) {
      return (e) => {
        const t = Io(e);
        return t ? new te(t, "hsl", n) : null;
      };
    }
    function Oo(n) {
      const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
      if (e)
        return [
          parseInt(e[1] + e[1], 16),
          parseInt(e[2] + e[2], 16),
          parseInt(e[3] + e[3], 16)
        ];
      const t = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
      return t ? [
        parseInt(t[1], 16),
        parseInt(t[2], 16),
        parseInt(t[3], 16)
      ] : null;
    }
    function ul(n) {
      const e = Oo(n);
      return e ? new te(e, "rgb", "int") : null;
    }
    function No(n) {
      const e = n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
      if (e)
        return [
          parseInt(e[1] + e[1], 16),
          parseInt(e[2] + e[2], 16),
          parseInt(e[3] + e[3], 16),
          we(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)
        ];
      const t = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
      return t ? [
        parseInt(t[1], 16),
        parseInt(t[2], 16),
        parseInt(t[3], 16),
        we(parseInt(t[4], 16), 0, 255, 0, 1)
      ] : null;
    }
    function pl(n) {
      const e = No(n);
      return e ? new te(e, "rgb", "int") : null;
    }
    function Bo(n) {
      const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
      if (!e)
        return null;
      const t = [
        parseFloat(e[1]),
        parseFloat(e[2]),
        parseFloat(e[3])
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
    }
    function Fo(n) {
      return (e) => {
        const t = Bo(e);
        return t ? new te(t, "rgb", n) : null;
      };
    }
    function zo(n) {
      const e = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
      if (!e)
        return null;
      const t = [
        parseFloat(e[1]),
        parseFloat(e[2]),
        parseFloat(e[3]),
        parseFloat(e[4])
      ];
      return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
    }
    function jo(n) {
      return (e) => {
        const t = zo(e);
        return t ? new te(t, "rgb", n) : null;
      };
    }
    const hl = [
      {
        parser: Oo,
        result: {
          alpha: false,
          mode: "rgb",
          notation: "hex"
        }
      },
      {
        parser: No,
        result: {
          alpha: true,
          mode: "rgb",
          notation: "hex"
        }
      },
      {
        parser: Ao,
        result: {
          alpha: false,
          mode: "rgb",
          notation: "func"
        }
      },
      {
        parser: So,
        result: {
          alpha: true,
          mode: "rgb",
          notation: "func"
        }
      },
      {
        parser: Ro,
        result: {
          alpha: false,
          mode: "hsl",
          notation: "func"
        }
      },
      {
        parser: Io,
        result: {
          alpha: true,
          mode: "hsl",
          notation: "func"
        }
      },
      {
        parser: Bo,
        result: {
          alpha: false,
          mode: "rgb",
          notation: "object"
        }
      },
      {
        parser: zo,
        result: {
          alpha: true,
          mode: "rgb",
          notation: "object"
        }
      }
    ];
    function dl(n) {
      return hl.reduce((e, { parser: t, result: l }) => e || (t(n) ? l : null), null);
    }
    function Dr(n, e = "int") {
      const t = dl(n);
      return t ? t.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, t), { type: "int" }) : t.notation === "func" ? Object.assign(Object.assign({}, t), { type: e }) : null : null;
    }
    const Uo = {
      int: [
        ul,
        pl,
        Mo("int"),
        Lo("int"),
        Vo("int"),
        Do("int"),
        Fo("int"),
        jo("int")
      ],
      float: [
        Mo("float"),
        Lo("float"),
        Vo("float"),
        Do("float"),
        Fo("float"),
        jo("float")
      ]
    };
    function ml(n) {
      const e = Uo[n];
      return (t) => {
        if (typeof t != "string")
          return te.black(n);
        const l = e.reduce((b, E) => b || E(t), null);
        return l ?? te.black(n);
      };
    }
    function Or(n) {
      const e = Uo[n];
      return (t) => e.reduce((l, b) => l || b(t), null);
    }
    function Go(n) {
      const e = Re(Math.floor(n), 0, 255).toString(16);
      return e.length === 1 ? `0${e}` : e;
    }
    function Ho(n, e = "#") {
      const t = u(n.getComponents("rgb")).map(Go).join("");
      return `${e}${t}`;
    }
    function Nr(n, e = "#") {
      const t = n.getComponents("rgb"), l = [t[0], t[1], t[2], t[3] * 255].map(Go).join("");
      return `${e}${l}`;
    }
    function Ko(n, e) {
      const t = De(e === "float" ? 2 : 0);
      return `rgb(${u(n.getComponents("rgb", e)).map((b) => t(b)).join(", ")})`;
    }
    function fl(n) {
      return (e) => Ko(e, n);
    }
    function Ds(n, e) {
      const t = De(2), l = De(e === "float" ? 2 : 0);
      return `rgba(${n.getComponents("rgb", e).map((E, k) => (k === 3 ? t : l)(E)).join(", ")})`;
    }
    function vl(n) {
      return (e) => Ds(e, n);
    }
    function bl(n) {
      const e = [
        De(0),
        Cn,
        Cn
      ];
      return `hsl(${u(n.getComponents("hsl")).map((l, b) => e[b](l)).join(", ")})`;
    }
    function gl(n) {
      const e = [
        De(0),
        Cn,
        Cn,
        De(2)
      ];
      return `hsla(${n.getComponents("hsl").map((l, b) => e[b](l)).join(", ")})`;
    }
    function $o(n, e) {
      const t = De(e === "float" ? 2 : 0), l = ["r", "g", "b"];
      return `{${u(n.getComponents("rgb", e)).map((E, k) => `${l[k]}: ${t(E)}`).join(", ")}}`;
    }
    function _l(n) {
      return (e) => $o(e, n);
    }
    function Xo(n, e) {
      const t = De(2), l = De(e === "float" ? 2 : 0), b = ["r", "g", "b", "a"];
      return `{${n.getComponents("rgb", e).map((k, z) => {
        const Q = z === 3 ? t : l;
        return `${b[z]}: ${Q(k)}`;
      }).join(", ")}}`;
    }
    function wl(n) {
      return (e) => Xo(e, n);
    }
    const yl = [
      {
        format: {
          alpha: false,
          mode: "rgb",
          notation: "hex",
          type: "int"
        },
        stringifier: Ho
      },
      {
        format: {
          alpha: true,
          mode: "rgb",
          notation: "hex",
          type: "int"
        },
        stringifier: Nr
      },
      {
        format: {
          alpha: false,
          mode: "hsl",
          notation: "func",
          type: "int"
        },
        stringifier: bl
      },
      {
        format: {
          alpha: true,
          mode: "hsl",
          notation: "func",
          type: "int"
        },
        stringifier: gl
      },
      ...["int", "float"].reduce((n, e) => [
        ...n,
        {
          format: {
            alpha: false,
            mode: "rgb",
            notation: "func",
            type: e
          },
          stringifier: fl(e)
        },
        {
          format: {
            alpha: true,
            mode: "rgb",
            notation: "func",
            type: e
          },
          stringifier: vl(e)
        },
        {
          format: {
            alpha: false,
            mode: "rgb",
            notation: "object",
            type: e
          },
          stringifier: _l(e)
        },
        {
          format: {
            alpha: true,
            mode: "rgb",
            notation: "object",
            type: e
          },
          stringifier: wl(e)
        }
      ], [])
    ];
    function Br(n) {
      return yl.reduce((e, t) => e || (ll(t.format, n) ? t.stringifier : null), null);
    }
    const Hi = D2("apl");
    class xl {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Hi()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
        const l = e.createElement("div");
        l.classList.add(Hi("b")), this.element.appendChild(l);
        const b = e.createElement("div");
        b.classList.add(Hi("c")), l.appendChild(b), this.colorElem_ = b;
        const E = e.createElement("div");
        E.classList.add(Hi("m")), this.element.appendChild(E), this.markerElem_ = E;
        const k = e.createElement("div");
        k.classList.add(Hi("p")), this.markerElem_.appendChild(k), this.previewElem_ = k, this.update_();
      }
      update_() {
        const e = this.value.rawValue, t = e.getComponents("rgb"), l = new te([t[0], t[1], t[2], 0], "rgb"), b = new te([t[0], t[1], t[2], 255], "rgb"), E = [
          "to right",
          Ds(l),
          Ds(b)
        ];
        this.colorElem_.style.background = `linear-gradient(${E.join(",")})`, this.previewElem_.style.backgroundColor = Ds(e);
        const k = we(t[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${k}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class El {
      constructor(e, t) {
        this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new xl(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.ptHandler_ = new Dt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(e, t) {
        if (!e.point)
          return;
        const l = e.point.x / e.bounds.width, b = this.value.rawValue, [E, k, z] = b.getComponents("hsv");
        this.value.setRawValue(new te([E, k, z, l], "hsv"), t);
      }
      onPointerDown_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerMove_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: true,
          last: true
        });
      }
      onKeyDown_(e) {
        const t = ze(Ln(true), ut(e));
        if (t === 0)
          return;
        const l = this.value.rawValue, [b, E, k, z] = l.getComponents("hsv");
        this.value.setRawValue(new te([b, E, k, z + t], "hsv"), {
          forceEmit: false,
          last: false
        });
      }
      onKeyUp_(e) {
        ze(Ln(true), ut(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    const oi = D2("coltxt");
    function Cl(n) {
      const e = n.createElement("select"), t = [
        { text: "RGB", value: "rgb" },
        { text: "HSL", value: "hsl" },
        { text: "HSV", value: "hsv" }
      ];
      return e.appendChild(t.reduce((l, b) => {
        const E = n.createElement("option");
        return E.textContent = b.text, E.value = b.value, l.appendChild(E), l;
      }, n.createDocumentFragment())), e;
    }
    class Pl {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(oi()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(oi("m")), this.modeElem_ = Cl(e), this.modeElem_.classList.add(oi("ms")), l.appendChild(this.modeSelectElement), t.viewProps.bindDisabled(this.modeElem_);
        const b = e.createElement("div");
        b.classList.add(oi("mm")), b.appendChild(Ct2(e, "dropdown")), l.appendChild(b), this.element.appendChild(l);
        const E = e.createElement("div");
        E.classList.add(oi("w")), this.element.appendChild(E), this.textsElem_ = E, this.textViews_ = t.textViews, this.applyTextViews_(), F(t.colorMode, (k) => {
          this.modeElem_.value = k;
        });
      }
      get modeSelectElement() {
        return this.modeElem_;
      }
      get textViews() {
        return this.textViews_;
      }
      set textViews(e) {
        this.textViews_ = e, this.applyTextViews_();
      }
      applyTextViews_() {
        mn(this.textsElem_);
        const e = this.element.ownerDocument;
        this.textViews_.forEach((t) => {
          const l = e.createElement("div");
          l.classList.add(oi("c")), l.appendChild(t.element), this.textsElem_.appendChild(l);
        });
      }
    }
    function Tl(n) {
      return De(n === "float" ? 2 : 0);
    }
    function kl(n, e, t) {
      const l = T(n, e)[t];
      return new Yt({
        min: 0,
        max: l
      });
    }
    function Fr(n, e, t) {
      return new Tn(n, {
        arrayPosition: t === 0 ? "fst" : t === 3 - 1 ? "lst" : "mid",
        baseStep: Ln(false),
        parser: e.parser,
        props: X.fromObject({
          draggingScale: e.colorType === "float" ? 0.01 : 1,
          formatter: Tl(e.colorType)
        }),
        value: ee(0, {
          constraint: kl(e.colorMode, e.colorType, t)
        }),
        viewProps: e.viewProps
      });
    }
    class Al {
      constructor(e, t) {
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = t.colorType, this.parser_ = t.parser, this.value = t.value, this.viewProps = t.viewProps, this.colorMode = ee(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new Pl(e, {
          colorMode: this.colorMode,
          textViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
          viewProps: this.viewProps
        }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
      }
      createComponentControllers_(e) {
        const t = {
          colorMode: this.colorMode.rawValue,
          colorType: this.colorType_,
          parser: this.parser_,
          viewProps: this.viewProps
        }, l = [
          Fr(e, t, 0),
          Fr(e, t, 1),
          Fr(e, t, 2)
        ];
        return l.forEach((b, E) => {
          Qt({
            primary: this.value,
            secondary: b.value,
            forward: (k) => k.rawValue.getComponents(this.colorMode.rawValue, this.colorType_)[E],
            backward: (k, z) => {
              const Q = this.colorMode.rawValue, J = k.rawValue.getComponents(Q, this.colorType_);
              return J[E] = z.rawValue, new te(v(u(J), J[3]), Q, this.colorType_);
            }
          });
        }), l;
      }
      onModeSelectChange_(e) {
        const t = e.currentTarget;
        this.colorMode.rawValue = t.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.textViews = [
          this.ccs_[0].view,
          this.ccs_[1].view,
          this.ccs_[2].view
        ];
      }
    }
    const zr = D2("hpl");
    class Ml {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(zr()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
        const l = e.createElement("div");
        l.classList.add(zr("c")), this.element.appendChild(l);
        const b = e.createElement("div");
        b.classList.add(zr("m")), this.element.appendChild(b), this.markerElem_ = b, this.update_();
      }
      update_() {
        const e = this.value.rawValue, [t] = e.getComponents("hsv");
        this.markerElem_.style.backgroundColor = Ko(new te([t, 100, 100], "hsv"));
        const l = we(t, 0, 360, 0, 100);
        this.markerElem_.style.left = `${l}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Sl {
      constructor(e, t) {
        this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new Ml(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.ptHandler_ = new Dt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(e, t) {
        if (!e.point)
          return;
        const l = we(Re(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), b = this.value.rawValue, [, E, k, z] = b.getComponents("hsv");
        this.value.setRawValue(new te([l, E, k, z], "hsv"), t);
      }
      onPointerDown_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerMove_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: true,
          last: true
        });
      }
      onKeyDown_(e) {
        const t = ze(Ln(false), ut(e));
        if (t === 0)
          return;
        const l = this.value.rawValue, [b, E, k, z] = l.getComponents("hsv");
        this.value.setRawValue(new te([b + t, E, k, z], "hsv"), {
          forceEmit: false,
          last: false
        });
      }
      onKeyUp_(e) {
        ze(Ln(false), ut(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    const jr = D2("svp"), Yo = 64;
    class Ll {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), this.value = t.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(jr()), t.viewProps.bindClassModifiers(this.element), t.viewProps.bindTabIndex(this.element);
        const l = e.createElement("canvas");
        l.height = Yo, l.width = Yo, l.classList.add(jr("c")), this.element.appendChild(l), this.canvasElement = l;
        const b = e.createElement("div");
        b.classList.add(jr("m")), this.element.appendChild(b), this.markerElem_ = b, this.update_();
      }
      update_() {
        const e = Kn(this.canvasElement);
        if (!e)
          return;
        const l = this.value.rawValue.getComponents("hsv"), b = this.canvasElement.width, E = this.canvasElement.height, k = e.getImageData(0, 0, b, E), z = k.data;
        for (let de = 0; de < E; de++)
          for (let ve = 0; ve < b; ve++) {
            const Vn = we(ve, 0, b, 0, 100), $i = we(de, 0, E, 100, 0), Xi = Is(l[0], Vn, $i), Os = (de * b + ve) * 4;
            z[Os] = Xi[0], z[Os + 1] = Xi[1], z[Os + 2] = Xi[2], z[Os + 3] = 255;
          }
        e.putImageData(k, 0, 0);
        const Q = we(l[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${Q}%`;
        const J = we(l[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${J}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Rl {
      constructor(e, t) {
        this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.view = new Ll(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.ptHandler_ = new Dt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(e, t) {
        if (!e.point)
          return;
        const l = we(e.point.x, 0, e.bounds.width, 0, 100), b = we(e.point.y, 0, e.bounds.height, 100, 0), [E, , , k] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new te([E, l, b, k], "hsv"), t);
      }
      onPointerDown_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerMove_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: true,
          last: true
        });
      }
      onKeyDown_(e) {
        ni(e.key) && e.preventDefault();
        const [t, l, b, E] = this.value.rawValue.getComponents("hsv"), k = Ln(false), z = ze(k, ut(e)), Q = ze(k, Pn(e));
        z === 0 && Q === 0 || this.value.setRawValue(new te([t, l + z, b + Q, E], "hsv"), {
          forceEmit: false,
          last: false
        });
      }
      onKeyUp_(e) {
        const t = Ln(false), l = ze(t, ut(e)), b = ze(t, Pn(e));
        l === 0 && b === 0 || this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    class Vl {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.hPaletteC_ = new Sl(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.svPaletteC_ = new Rl(e, {
          value: this.value,
          viewProps: this.viewProps
        }), this.alphaIcs_ = t.supportsAlpha ? {
          palette: new El(e, {
            value: this.value,
            viewProps: this.viewProps
          }),
          text: new Tn(e, {
            parser: ct,
            baseStep: 0.1,
            props: X.fromObject({
              draggingScale: 0.01,
              formatter: De(2)
            }),
            value: ee(0, {
              constraint: new Yt({ min: 0, max: 1 })
            }),
            viewProps: this.viewProps
          })
        } : null, this.alphaIcs_ && Qt({
          primary: this.value,
          secondary: this.alphaIcs_.text.value,
          forward: (l) => l.rawValue.getComponents()[3],
          backward: (l, b) => {
            const E = l.rawValue.getComponents();
            return E[3] = b.rawValue, new te(E, l.rawValue.mode);
          }
        }), this.textC_ = new Al(e, {
          colorType: t.colorType,
          parser: ct,
          value: this.value,
          viewProps: this.viewProps
        }), this.view = new Vr(e, {
          alphaViews: this.alphaIcs_ ? {
            palette: this.alphaIcs_.palette.view,
            text: this.alphaIcs_.text.view
          } : null,
          hPaletteView: this.hPaletteC_.view,
          supportsAlpha: t.supportsAlpha,
          svPaletteView: this.svPaletteC_.view,
          textView: this.textC_.view,
          viewProps: this.viewProps
        });
      }
      get textController() {
        return this.textC_;
      }
    }
    const Ur = D2("colsw");
    class Il {
      constructor(e, t) {
        this.onValueChange_ = this.onValueChange_.bind(this), t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.element = e.createElement("div"), this.element.classList.add(Ur()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(Ur("sw")), this.element.appendChild(l), this.swatchElem_ = l;
        const b = e.createElement("button");
        b.classList.add(Ur("b")), t.viewProps.bindDisabled(b), this.element.appendChild(b), this.buttonElement = b, this.update_();
      }
      update_() {
        const e = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = Nr(e);
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Dl {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.view = new Il(e, {
          value: this.value,
          viewProps: this.viewProps
        });
      }
    }
    class Gr {
      constructor(e, t) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Fe.create(t.expanded), this.swatchC_ = new Dl(e, {
          value: this.value,
          viewProps: this.viewProps
        });
        const l = this.swatchC_.view.buttonElement;
        l.addEventListener("blur", this.onButtonBlur_), l.addEventListener("click", this.onButtonClick_), this.textC_ = new ei(e, {
          parser: t.parser,
          props: X.fromObject({
            formatter: t.formatter
          }),
          value: this.value,
          viewProps: this.viewProps
        }), this.view = new Gi(e, {
          foldable: this.foldable_,
          pickerLayout: t.pickerLayout
        }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = t.pickerLayout === "popup" ? new gs(e, {
          viewProps: this.viewProps
        }) : null;
        const b = new Vl(e, {
          colorType: t.colorType,
          supportsAlpha: t.supportsAlpha,
          value: this.value,
          viewProps: this.viewProps
        });
        b.view.allFocusableElements.forEach((E) => {
          E.addEventListener("blur", this.onPopupChildBlur_), E.addEventListener("keydown", this.onPopupChildKeydown_);
        }), this.pickerC_ = b, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(b.view.element), Qt({
          primary: this.foldable_.value("expanded"),
          secondary: this.popC_.shows,
          forward: (E) => E.rawValue,
          backward: (E, k) => k.rawValue
        })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), $e(this.foldable_, this.view.pickerElement));
      }
      get textController() {
        return this.textC_;
      }
      onButtonBlur_(e) {
        if (!this.popC_)
          return;
        const t = this.view.element, l = e.relatedTarget;
        (!l || !t.contains(l)) && (this.popC_.shows.rawValue = false);
      }
      onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
      }
      onPopupChildBlur_(e) {
        if (!this.popC_)
          return;
        const t = this.popC_.view.element, l = Pt(e);
        l && t.contains(l) || l && l === this.swatchC_.view.buttonElement && !bt(t.ownerDocument) || (this.popC_.shows.rawValue = false);
      }
      onPopupChildKeydown_(e) {
        this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
      }
    }
    function Ol(n, e) {
      return te.isColorObject(n) ? te.fromObject(n, e) : te.black(e);
    }
    function Nl(n) {
      return u(n.getComponents("rgb")).reduce((e, t) => e << 8 | Math.floor(t) & 255, 0);
    }
    function Bl(n) {
      return n.getComponents("rgb").reduce((e, t, l) => {
        const b = Math.floor(l === 3 ? t * 255 : t) & 255;
        return e << 8 | b;
      }, 0) >>> 0;
    }
    function Fl(n) {
      return new te([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
    }
    function zl(n) {
      return new te([
        n >> 24 & 255,
        n >> 16 & 255,
        n >> 8 & 255,
        we(n & 255, 0, 255, 0, 1)
      ], "rgb");
    }
    function jl(n) {
      return typeof n != "number" ? te.black() : Fl(n);
    }
    function Ul(n) {
      return typeof n != "number" ? te.black() : zl(n);
    }
    function Gl(n) {
      const e = Br(n);
      return e ? (t, l) => {
        st(t, e(l));
      } : null;
    }
    function Hl(n) {
      const e = n ? Bl : Nl;
      return (t, l) => {
        st(t, e(l));
      };
    }
    function Kl(n, e, t) {
      const l = e.toRgbaObject(t);
      n.writeProperty("r", l.r), n.writeProperty("g", l.g), n.writeProperty("b", l.b), n.writeProperty("a", l.a);
    }
    function $l(n, e, t) {
      const l = e.toRgbaObject(t);
      n.writeProperty("r", l.r), n.writeProperty("g", l.g), n.writeProperty("b", l.b);
    }
    function Xl(n, e) {
      return (t, l) => {
        n ? Kl(t, l, e) : $l(t, l, e);
      };
    }
    function Hr(n) {
      var e;
      return !!(n != null && n.alpha || !((e = n == null ? void 0 : n.color) === null || e === void 0) && e.alpha);
    }
    function Yl(n) {
      return n ? (e) => Nr(e, "0x") : (e) => Ho(e, "0x");
    }
    function ql(n) {
      return "color" in n || "view" in n && n.view === "color";
    }
    const Ql = {
      id: "input-color-number",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "number" || !ql(e))
          return null;
        const t = Ir(e);
        return t ? {
          initialValue: n,
          params: t
        } : null;
      },
      binding: {
        reader: (n) => Hr(n.params) ? Ul : jl,
        equals: te.equals,
        writer: (n) => Hl(Hr(n.params))
      },
      controller: (n) => {
        const e = Hr(n.params), t = "expanded" in n.params ? n.params.expanded : void 0, l = "picker" in n.params ? n.params.picker : void 0;
        return new Gr(n.document, {
          colorType: "int",
          expanded: t ?? false,
          formatter: Yl(e),
          parser: Or("int"),
          pickerLayout: l ?? "popup",
          supportsAlpha: e,
          value: n.value,
          viewProps: n.viewProps
        });
      }
    };
    function Zl(n) {
      return te.isRgbaColorObject(n);
    }
    function Wl(n) {
      return (e) => Ol(e, n);
    }
    function Jl(n, e) {
      return (t) => n ? Xo(t, e) : $o(t, e);
    }
    const ec = {
      id: "input-color-object",
      type: "input",
      accept: (n, e) => {
        if (!te.isColorObject(n))
          return null;
        const t = Ir(e);
        return t ? {
          initialValue: n,
          params: t
        } : null;
      },
      binding: {
        reader: (n) => Wl(Rn(n.params)),
        equals: te.equals,
        writer: (n) => Xl(Zl(n.initialValue), Rn(n.params))
      },
      controller: (n) => {
        var e;
        const t = te.isRgbaColorObject(n.initialValue), l = "expanded" in n.params ? n.params.expanded : void 0, b = "picker" in n.params ? n.params.picker : void 0, E = (e = Rn(n.params)) !== null && e !== void 0 ? e : "int";
        return new Gr(n.document, {
          colorType: E,
          expanded: l ?? false,
          formatter: Jl(t, E),
          parser: Or(E),
          pickerLayout: b ?? "popup",
          supportsAlpha: t,
          value: n.value,
          viewProps: n.viewProps
        });
      }
    }, tc = {
      id: "input-color-string",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "string" || "view" in e && e.view === "text")
          return null;
        const t = Dr(n, Rn(e));
        if (!t || !Br(t))
          return null;
        const b = Ir(e);
        return b ? {
          initialValue: n,
          params: b
        } : null;
      },
      binding: {
        reader: (n) => {
          var e;
          return ml((e = Rn(n.params)) !== null && e !== void 0 ? e : "int");
        },
        equals: te.equals,
        writer: (n) => {
          const e = Dr(n.initialValue, Rn(n.params));
          if (!e)
            throw S2.shouldNeverHappen();
          const t = Gl(e);
          if (!t)
            throw S2.notBindable();
          return t;
        }
      },
      controller: (n) => {
        const e = Dr(n.initialValue, Rn(n.params));
        if (!e)
          throw S2.shouldNeverHappen();
        const t = Br(e);
        if (!t)
          throw S2.shouldNeverHappen();
        const l = "expanded" in n.params ? n.params.expanded : void 0, b = "picker" in n.params ? n.params.picker : void 0;
        return new Gr(n.document, {
          colorType: e.type,
          expanded: l ?? false,
          formatter: t,
          parser: Or(e.type),
          pickerLayout: b ?? "popup",
          supportsAlpha: e.alpha,
          value: n.value,
          viewProps: n.viewProps
        });
      }
    };
    class Wt {
      constructor(e) {
        this.components = e.components, this.asm_ = e.assembly;
      }
      constrain(e) {
        const t = this.asm_.toComponents(e).map((l, b) => {
          var E, k;
          return (k = (E = this.components[b]) === null || E === void 0 ? void 0 : E.constrain(l)) !== null && k !== void 0 ? k : l;
        });
        return this.asm_.fromComponents(t);
      }
    }
    const qo = D2("pndtxt");
    class nc {
      constructor(e, t) {
        this.textViews = t.textViews, this.element = e.createElement("div"), this.element.classList.add(qo()), this.textViews.forEach((l) => {
          const b = e.createElement("div");
          b.classList.add(qo("a")), b.appendChild(l.element), this.element.appendChild(b);
        });
      }
    }
    function ic(n, e, t) {
      return new Tn(n, {
        arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid",
        baseStep: e.axes[t].baseStep,
        parser: e.parser,
        props: e.axes[t].textProps,
        value: ee(0, {
          constraint: e.axes[t].constraint
        }),
        viewProps: e.viewProps
      });
    }
    class Kr {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.acs_ = t.axes.map((l, b) => ic(e, t, b)), this.acs_.forEach((l, b) => {
          Qt({
            primary: this.value,
            secondary: l.value,
            forward: (E) => t.assembly.toComponents(E.rawValue)[b],
            backward: (E, k) => {
              const z = t.assembly.toComponents(E.rawValue);
              return z[b] = k.rawValue, t.assembly.fromComponents(z);
            }
          });
        }), this.view = new nc(e, {
          textViews: this.acs_.map((l) => l.view)
        });
      }
    }
    function Qo(n, e) {
      return "step" in n && !w(n.step) ? new Jn(n.step, e) : null;
    }
    function Zo(n) {
      return !w(n.max) && !w(n.min) ? new Yt({
        max: n.max,
        min: n.min
      }) : !w(n.max) || !w(n.min) ? new Ai({
        max: n.max,
        min: n.min
      }) : null;
    }
    function sc(n) {
      const e = it(n, Yt);
      if (e)
        return [e.values.get("min"), e.values.get("max")];
      const t = it(n, Ai);
      return t ? [t.minValue, t.maxValue] : [void 0, void 0];
    }
    function rc(n, e) {
      const t = [], l = Qo(n, e);
      l && t.push(l);
      const b = Zo(n);
      b && t.push(b);
      const E = Ui(n.options);
      return E && t.push(E), new wn(t);
    }
    const oc = {
      id: "input-number",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "number")
          return null;
        const t = A, l = ae(e, {
          format: t.optional.function,
          max: t.optional.number,
          min: t.optional.number,
          options: t.optional.custom(An),
          step: t.optional.number
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => _t,
        constraint: (n) => rc(n.params, n.initialValue),
        writer: (n) => st
      },
      controller: (n) => {
        var e;
        const t = n.value, l = n.constraint, b = l && it(l, yn);
        if (b)
          return new xn(n.document, {
            props: new X({
              options: b.values.value("options")
            }),
            value: t,
            viewProps: n.viewProps
          });
        const E = (e = "format" in n.params ? n.params.format : void 0) !== null && e !== void 0 ? e : De(si(l, t.rawValue)), k = l && it(l, Yt);
        return k ? new ii(n.document, {
          baseStep: Ot(l),
          parser: ct,
          sliderProps: new X({
            maxValue: k.values.value("max"),
            minValue: k.values.value("min")
          }),
          textProps: X.fromObject({
            draggingScale: Nt(l, t.rawValue),
            formatter: E
          }),
          value: t,
          viewProps: n.viewProps
        }) : new Tn(n.document, {
          baseStep: Ot(l),
          parser: ct,
          props: X.fromObject({
            draggingScale: Nt(l, t.rawValue),
            formatter: E
          }),
          value: t,
          viewProps: n.viewProps
        });
      }
    };
    class Jt {
      constructor(e = 0, t = 0) {
        this.x = e, this.y = t;
      }
      getComponents() {
        return [this.x, this.y];
      }
      static isObject(e) {
        if (w(e))
          return false;
        const t = e.x, l = e.y;
        return !(typeof t != "number" || typeof l != "number");
      }
      static equals(e, t) {
        return e.x === t.x && e.y === t.y;
      }
      toObject() {
        return {
          x: this.x,
          y: this.y
        };
      }
    }
    const Wo = {
      toComponents: (n) => n.getComponents(),
      fromComponents: (n) => new Jt(...n)
    }, ai = D2("p2d");
    class ac {
      constructor(e, t) {
        this.element = e.createElement("div"), this.element.classList.add(ai()), t.viewProps.bindClassModifiers(this.element), F(t.expanded, K(this.element, ai(void 0, "expanded")));
        const l = e.createElement("div");
        l.classList.add(ai("h")), this.element.appendChild(l);
        const b = e.createElement("button");
        b.classList.add(ai("b")), b.appendChild(Ct2(e, "p2dpad")), t.viewProps.bindDisabled(b), l.appendChild(b), this.buttonElement = b;
        const E = e.createElement("div");
        if (E.classList.add(ai("t")), l.appendChild(E), this.textElement = E, t.pickerLayout === "inline") {
          const k = e.createElement("div");
          k.classList.add(ai("p")), this.element.appendChild(k), this.pickerElement = k;
        } else
          this.pickerElement = null;
      }
    }
    const en = D2("p2dp");
    class lc {
      constructor(e, t) {
        this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.invertsY_ = t.invertsY, this.maxValue_ = t.maxValue, this.element = e.createElement("div"), this.element.classList.add(en()), t.layout === "popup" && this.element.classList.add(en(void 0, "p")), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("div");
        l.classList.add(en("p")), t.viewProps.bindTabIndex(l), this.element.appendChild(l), this.padElement = l;
        const b = e.createElementNS(Ke, "svg");
        b.classList.add(en("g")), this.padElement.appendChild(b), this.svgElem_ = b;
        const E = e.createElementNS(Ke, "line");
        E.classList.add(en("ax")), E.setAttributeNS(null, "x1", "0"), E.setAttributeNS(null, "y1", "50%"), E.setAttributeNS(null, "x2", "100%"), E.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(E);
        const k = e.createElementNS(Ke, "line");
        k.classList.add(en("ax")), k.setAttributeNS(null, "x1", "50%"), k.setAttributeNS(null, "y1", "0"), k.setAttributeNS(null, "x2", "50%"), k.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(k);
        const z = e.createElementNS(Ke, "line");
        z.classList.add(en("l")), z.setAttributeNS(null, "x1", "50%"), z.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(z), this.lineElem_ = z;
        const Q = e.createElement("div");
        Q.classList.add(en("m")), this.padElement.appendChild(Q), this.markerElem_ = Q, t.value.emitter.on("change", this.onValueChange_), this.value = t.value, this.update_();
      }
      get allFocusableElements() {
        return [this.padElement];
      }
      update_() {
        const [e, t] = this.value.rawValue.getComponents(), l = this.maxValue_, b = we(e, -l, +l, 0, 100), E = we(t, -l, +l, 0, 100), k = this.invertsY_ ? 100 - E : E;
        this.lineElem_.setAttributeNS(null, "x2", `${b}%`), this.lineElem_.setAttributeNS(null, "y2", `${k}%`), this.markerElem_.style.left = `${b}%`, this.markerElem_.style.top = `${k}%`;
      }
      onValueChange_() {
        this.update_();
      }
      onFoldableChange_() {
        this.update_();
      }
    }
    function Jo(n, e, t) {
      return [
        ze(e[0], ut(n)),
        ze(e[1], Pn(n)) * (t ? 1 : -1)
      ];
    }
    class cc {
      constructor(e, t) {
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.baseSteps_ = t.baseSteps, this.maxValue_ = t.maxValue, this.invertsY_ = t.invertsY, this.view = new lc(e, {
          invertsY: this.invertsY_,
          layout: t.layout,
          maxValue: this.maxValue_,
          value: this.value,
          viewProps: this.viewProps
        }), this.ptHandler_ = new Dt(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
      }
      handlePointerEvent_(e, t) {
        if (!e.point)
          return;
        const l = this.maxValue_, b = we(e.point.x, 0, e.bounds.width, -l, +l), E = we(this.invertsY_ ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -l, +l);
        this.value.setRawValue(new Jt(b, E), t);
      }
      onPointerDown_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerMove_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(e) {
        this.handlePointerEvent_(e.data, {
          forceEmit: true,
          last: true
        });
      }
      onPadKeyDown_(e) {
        ni(e.key) && e.preventDefault();
        const [t, l] = Jo(e, this.baseSteps_, this.invertsY_);
        t === 0 && l === 0 || this.value.setRawValue(new Jt(this.value.rawValue.x + t, this.value.rawValue.y + l), {
          forceEmit: false,
          last: false
        });
      }
      onPadKeyUp_(e) {
        const [t, l] = Jo(e, this.baseSteps_, this.invertsY_);
        t === 0 && l === 0 || this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    class uc {
      constructor(e, t) {
        var l, b;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = t.value, this.viewProps = t.viewProps, this.foldable_ = Fe.create(t.expanded), this.popC_ = t.pickerLayout === "popup" ? new gs(e, {
          viewProps: this.viewProps
        }) : null;
        const E = new cc(e, {
          baseSteps: [t.axes[0].baseStep, t.axes[1].baseStep],
          invertsY: t.invertsY,
          layout: t.pickerLayout,
          maxValue: t.maxValue,
          value: this.value,
          viewProps: this.viewProps
        });
        E.view.allFocusableElements.forEach((k) => {
          k.addEventListener("blur", this.onPopupChildBlur_), k.addEventListener("keydown", this.onPopupChildKeydown_);
        }), this.pickerC_ = E, this.textC_ = new Kr(e, {
          assembly: Wo,
          axes: t.axes,
          parser: t.parser,
          value: this.value,
          viewProps: this.viewProps
        }), this.view = new ac(e, {
          expanded: this.foldable_.value("expanded"),
          pickerLayout: t.pickerLayout,
          viewProps: this.viewProps
        }), this.view.textElement.appendChild(this.textC_.view.element), (l = this.view.buttonElement) === null || l === void 0 || l.addEventListener("blur", this.onPadButtonBlur_), (b = this.view.buttonElement) === null || b === void 0 || b.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), Qt({
          primary: this.foldable_.value("expanded"),
          secondary: this.popC_.shows,
          forward: (k) => k.rawValue,
          backward: (k, z) => z.rawValue
        })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), $e(this.foldable_, this.view.pickerElement));
      }
      onPadButtonBlur_(e) {
        if (!this.popC_)
          return;
        const t = this.view.element, l = e.relatedTarget;
        (!l || !t.contains(l)) && (this.popC_.shows.rawValue = false);
      }
      onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
      }
      onPopupChildBlur_(e) {
        if (!this.popC_)
          return;
        const t = this.popC_.view.element, l = Pt(e);
        l && t.contains(l) || l && l === this.view.buttonElement && !bt(t.ownerDocument) || (this.popC_.shows.rawValue = false);
      }
      onPopupChildKeydown_(e) {
        this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
      }
    }
    class li {
      constructor(e = 0, t = 0, l = 0) {
        this.x = e, this.y = t, this.z = l;
      }
      getComponents() {
        return [this.x, this.y, this.z];
      }
      static isObject(e) {
        if (w(e))
          return false;
        const t = e.x, l = e.y, b = e.z;
        return !(typeof t != "number" || typeof l != "number" || typeof b != "number");
      }
      static equals(e, t) {
        return e.x === t.x && e.y === t.y && e.z === t.z;
      }
      toObject() {
        return {
          x: this.x,
          y: this.y,
          z: this.z
        };
      }
    }
    const ea = {
      toComponents: (n) => n.getComponents(),
      fromComponents: (n) => new li(...n)
    };
    function pc(n) {
      return li.isObject(n) ? new li(n.x, n.y, n.z) : new li();
    }
    function hc(n, e) {
      n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z);
    }
    function dc(n, e) {
      return new Wt({
        assembly: ea,
        components: [
          Ft("x" in n ? n.x : void 0, e.x),
          Ft("y" in n ? n.y : void 0, e.y),
          Ft("z" in n ? n.z : void 0, e.z)
        ]
      });
    }
    function $r(n, e) {
      return {
        baseStep: Ot(e),
        constraint: e,
        textProps: X.fromObject({
          draggingScale: Nt(e, n),
          formatter: De(si(e, n))
        })
      };
    }
    const mc = {
      id: "input-point3d",
      type: "input",
      accept: (n, e) => {
        if (!li.isObject(n))
          return null;
        const t = A, l = ae(e, {
          x: t.optional.custom(wt),
          y: t.optional.custom(wt),
          z: t.optional.custom(wt)
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => pc,
        constraint: (n) => dc(n.params, n.initialValue),
        equals: li.equals,
        writer: (n) => hc
      },
      controller: (n) => {
        const e = n.value, t = n.constraint;
        if (!(t instanceof Wt))
          throw S2.shouldNeverHappen();
        return new Kr(n.document, {
          assembly: ea,
          axes: [
            $r(e.rawValue.x, t.components[0]),
            $r(e.rawValue.y, t.components[1]),
            $r(e.rawValue.z, t.components[2])
          ],
          parser: ct,
          value: e,
          viewProps: n.viewProps
        });
      }
    };
    class ci {
      constructor(e = 0, t = 0, l = 0, b = 0) {
        this.x = e, this.y = t, this.z = l, this.w = b;
      }
      getComponents() {
        return [this.x, this.y, this.z, this.w];
      }
      static isObject(e) {
        if (w(e))
          return false;
        const t = e.x, l = e.y, b = e.z, E = e.w;
        return !(typeof t != "number" || typeof l != "number" || typeof b != "number" || typeof E != "number");
      }
      static equals(e, t) {
        return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
      }
      toObject() {
        return {
          x: this.x,
          y: this.y,
          z: this.z,
          w: this.w
        };
      }
    }
    const ta = {
      toComponents: (n) => n.getComponents(),
      fromComponents: (n) => new ci(...n)
    };
    function fc(n) {
      return ci.isObject(n) ? new ci(n.x, n.y, n.z, n.w) : new ci();
    }
    function vc(n, e) {
      n.writeProperty("x", e.x), n.writeProperty("y", e.y), n.writeProperty("z", e.z), n.writeProperty("w", e.w);
    }
    function bc(n, e) {
      return new Wt({
        assembly: ta,
        components: [
          Ft("x" in n ? n.x : void 0, e.x),
          Ft("y" in n ? n.y : void 0, e.y),
          Ft("z" in n ? n.z : void 0, e.z),
          Ft("w" in n ? n.w : void 0, e.w)
        ]
      });
    }
    function gc(n, e) {
      return {
        baseStep: Ot(e),
        constraint: e,
        textProps: X.fromObject({
          draggingScale: Nt(e, n),
          formatter: De(si(e, n))
        })
      };
    }
    const _c = {
      id: "input-point4d",
      type: "input",
      accept: (n, e) => {
        if (!ci.isObject(n))
          return null;
        const t = A, l = ae(e, {
          x: t.optional.custom(wt),
          y: t.optional.custom(wt),
          z: t.optional.custom(wt),
          w: t.optional.custom(wt)
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => fc,
        constraint: (n) => bc(n.params, n.initialValue),
        equals: ci.equals,
        writer: (n) => vc
      },
      controller: (n) => {
        const e = n.value, t = n.constraint;
        if (!(t instanceof Wt))
          throw S2.shouldNeverHappen();
        return new Kr(n.document, {
          assembly: ta,
          axes: e.rawValue.getComponents().map((l, b) => gc(l, t.components[b])),
          parser: ct,
          value: e,
          viewProps: n.viewProps
        });
      }
    };
    function wc(n) {
      const e = [], t = Ui(n.options);
      return t && e.push(t), new wn(e);
    }
    const yc = {
      id: "input-string",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "string")
          return null;
        const l = ae(e, {
          options: A.optional.custom(An)
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => Ii,
        constraint: (n) => wc(n.params),
        writer: (n) => st
      },
      controller: (n) => {
        const e = n.document, t = n.value, l = n.constraint, b = l && it(l, yn);
        return b ? new xn(e, {
          props: new X({
            options: b.values.value("options")
          }),
          value: t,
          viewProps: n.viewProps
        }) : new ei(e, {
          parser: (E) => E,
          props: X.fromObject({
            formatter: kt
          }),
          value: t,
          viewProps: n.viewProps
        });
      }
    }, Ki = {
      monitor: {
        defaultInterval: 200,
        defaultLineCount: 3
      }
    }, na = D2("mll");
    class xc {
      constructor(e, t) {
        this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(na()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("textarea");
        l.classList.add(na("i")), l.style.height = `calc(var(--bld-us) * ${t.lineCount})`, l.readOnly = true, t.viewProps.bindDisabled(l), this.element.appendChild(l), this.textareaElem_ = l, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
      }
      update_() {
        const e = this.textareaElem_, t = e.scrollTop === e.scrollHeight - e.clientHeight, l = [];
        this.value.rawValue.forEach((b) => {
          b !== void 0 && l.push(this.formatter_(b));
        }), e.textContent = l.join(`
`), t && (e.scrollTop = e.scrollHeight);
      }
      onValueUpdate_() {
        this.update_();
      }
    }
    class Xr {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.view = new xc(e, {
          formatter: t.formatter,
          lineCount: t.lineCount,
          value: this.value,
          viewProps: this.viewProps
        });
      }
    }
    const ia = D2("sgl");
    class Ec {
      constructor(e, t) {
        this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = t.formatter, this.element = e.createElement("div"), this.element.classList.add(ia()), t.viewProps.bindClassModifiers(this.element);
        const l = e.createElement("input");
        l.classList.add(ia("i")), l.readOnly = true, l.type = "text", t.viewProps.bindDisabled(l), this.element.appendChild(l), this.inputElement = l, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
      }
      update_() {
        const e = this.value.rawValue, t = e[e.length - 1];
        this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
      }
      onValueUpdate_() {
        this.update_();
      }
    }
    class Yr {
      constructor(e, t) {
        this.value = t.value, this.viewProps = t.viewProps, this.view = new Ec(e, {
          formatter: t.formatter,
          value: this.value,
          viewProps: this.viewProps
        });
      }
    }
    const Cc = {
      id: "monitor-bool",
      type: "monitor",
      accept: (n, e) => {
        if (typeof n != "boolean")
          return null;
        const l = ae(e, {
          lineCount: A.optional.number
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => ws
      },
      controller: (n) => {
        var e;
        return n.value.rawValue.length === 1 ? new Yr(n.document, {
          formatter: ys,
          value: n.value,
          viewProps: n.viewProps
        }) : new Xr(n.document, {
          formatter: ys,
          lineCount: (e = n.params.lineCount) !== null && e !== void 0 ? e : Ki.monitor.defaultLineCount,
          value: n.value,
          viewProps: n.viewProps
        });
      }
    }, tn = D2("grl");
    class Pc {
      constructor(e, t) {
        this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(tn()), t.viewProps.bindClassModifiers(this.element), this.formatter_ = t.formatter, this.props_ = t.props, this.cursor_ = t.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
        const l = e.createElementNS(Ke, "svg");
        l.classList.add(tn("g")), l.style.height = `calc(var(--bld-us) * ${t.lineCount})`, this.element.appendChild(l), this.svgElem_ = l;
        const b = e.createElementNS(Ke, "polyline");
        this.svgElem_.appendChild(b), this.lineElem_ = b;
        const E = e.createElement("div");
        E.classList.add(tn("t"), D2("tt")()), this.element.appendChild(E), this.tooltipElem_ = E, t.value.emitter.on("change", this.onValueUpdate_), this.value = t.value, this.update_();
      }
      get graphElement() {
        return this.svgElem_;
      }
      update_() {
        const e = this.svgElem_.getBoundingClientRect(), t = this.value.rawValue.length - 1, l = this.props_.get("minValue"), b = this.props_.get("maxValue"), E = [];
        this.value.rawValue.forEach((de, ve) => {
          if (de === void 0)
            return;
          const Vn = we(ve, 0, t, 0, e.width), $i = we(de, l, b, e.height, 0);
          E.push([Vn, $i].join(","));
        }), this.lineElem_.setAttributeNS(null, "points", E.join(" "));
        const k = this.tooltipElem_, z = this.value.rawValue[this.cursor_.rawValue];
        if (z === void 0) {
          k.classList.remove(tn("t", "a"));
          return;
        }
        const Q = we(this.cursor_.rawValue, 0, t, 0, e.width), J = we(z, l, b, e.height, 0);
        k.style.left = `${Q}px`, k.style.top = `${J}px`, k.textContent = `${this.formatter_(z)}`, k.classList.contains(tn("t", "a")) || (k.classList.add(tn("t", "a"), tn("t", "in")), ot(k), k.classList.remove(tn("t", "in")));
      }
      onValueUpdate_() {
        this.update_();
      }
      onCursorChange_() {
        this.update_();
      }
    }
    class Tc {
      constructor(e, t) {
        if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props_ = t.props, this.value = t.value, this.viewProps = t.viewProps, this.cursor_ = ee(-1), this.view = new Pc(e, {
          cursor: this.cursor_,
          formatter: t.formatter,
          lineCount: t.lineCount,
          props: this.props_,
          value: this.value,
          viewProps: this.viewProps
        }), !bt(e))
          this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        else {
          const l = new Dt(this.view.element);
          l.emitter.on("down", this.onGraphPointerDown_), l.emitter.on("move", this.onGraphPointerMove_), l.emitter.on("up", this.onGraphPointerUp_);
        }
      }
      onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
      }
      onGraphMouseMove_(e) {
        const t = this.view.element.getBoundingClientRect();
        this.cursor_.rawValue = Math.floor(we(e.offsetX, 0, t.width, 0, this.value.rawValue.length));
      }
      onGraphPointerDown_(e) {
        this.onGraphPointerMove_(e);
      }
      onGraphPointerMove_(e) {
        if (!e.data.point) {
          this.cursor_.rawValue = -1;
          return;
        }
        this.cursor_.rawValue = Math.floor(we(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
      }
      onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
      }
    }
    function qr(n) {
      return "format" in n && !w(n.format) ? n.format : De(2);
    }
    function kc(n) {
      var e;
      return n.value.rawValue.length === 1 ? new Yr(n.document, {
        formatter: qr(n.params),
        value: n.value,
        viewProps: n.viewProps
      }) : new Xr(n.document, {
        formatter: qr(n.params),
        lineCount: (e = n.params.lineCount) !== null && e !== void 0 ? e : Ki.monitor.defaultLineCount,
        value: n.value,
        viewProps: n.viewProps
      });
    }
    function Ac(n) {
      var e, t, l;
      return new Tc(n.document, {
        formatter: qr(n.params),
        lineCount: (e = n.params.lineCount) !== null && e !== void 0 ? e : Ki.monitor.defaultLineCount,
        props: X.fromObject({
          maxValue: (t = "max" in n.params ? n.params.max : null) !== null && t !== void 0 ? t : 100,
          minValue: (l = "min" in n.params ? n.params.min : null) !== null && l !== void 0 ? l : 0
        }),
        value: n.value,
        viewProps: n.viewProps
      });
    }
    function sa(n) {
      return "view" in n && n.view === "graph";
    }
    const Mc = {
      id: "monitor-number",
      type: "monitor",
      accept: (n, e) => {
        if (typeof n != "number")
          return null;
        const t = A, l = ae(e, {
          format: t.optional.function,
          lineCount: t.optional.number,
          max: t.optional.number,
          min: t.optional.number,
          view: t.optional.string
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        defaultBufferSize: (n) => sa(n) ? 64 : 1,
        reader: (n) => _t
      },
      controller: (n) => sa(n.params) ? Ac(n) : kc(n)
    }, Sc = {
      id: "monitor-string",
      type: "monitor",
      accept: (n, e) => {
        if (typeof n != "string")
          return null;
        const t = A, l = ae(e, {
          lineCount: t.optional.number,
          multiline: t.optional.boolean
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => Ii
      },
      controller: (n) => {
        var e;
        const t = n.value;
        return t.rawValue.length > 1 || "multiline" in n.params && n.params.multiline ? new Xr(n.document, {
          formatter: kt,
          lineCount: (e = n.params.lineCount) !== null && e !== void 0 ? e : Ki.monitor.defaultLineCount,
          value: t,
          viewProps: n.viewProps
        }) : new Yr(n.document, {
          formatter: kt,
          value: t,
          viewProps: n.viewProps
        });
      }
    };
    function Lc(n, e) {
      var t;
      const l = n.accept(e.target.read(), e.params);
      if (w(l))
        return null;
      const b = A, E = {
        target: e.target,
        initialValue: l.initialValue,
        params: l.params
      }, k = n.binding.reader(E), z = n.binding.constraint ? n.binding.constraint(E) : void 0, Q = ee(k(l.initialValue), {
        constraint: z,
        equals: n.binding.equals
      }), J = new Wn({
        reader: k,
        target: e.target,
        value: Q,
        writer: n.binding.writer(E)
      }), de = b.optional.boolean(e.params.disabled).value, ve = b.optional.boolean(e.params.hidden).value, Vn = n.controller({
        constraint: z,
        document: e.document,
        initialValue: l.initialValue,
        params: l.params,
        value: J.value,
        viewProps: Qe.create({
          disabled: de,
          hidden: ve
        })
      });
      return new Ue(e.document, {
        binding: J,
        blade: Ee(),
        props: X.fromObject({
          label: "label" in e.params ? (t = b.optional.string(e.params.label).value) !== null && t !== void 0 ? t : null : e.target.key
        }),
        valueController: Vn
      });
    }
    function Rc(n, e) {
      return e === 0 ? new ms() : new ki(n, e ?? Ki.monitor.defaultInterval);
    }
    function Vc(n, e) {
      var t, l, b;
      const E = A, k = n.accept(e.target.read(), e.params);
      if (w(k))
        return null;
      const z = {
        target: e.target,
        initialValue: k.initialValue,
        params: k.params
      }, Q = n.binding.reader(z), J = (l = (t = E.optional.number(e.params.bufferSize).value) !== null && t !== void 0 ? t : n.binding.defaultBufferSize && n.binding.defaultBufferSize(k.params)) !== null && l !== void 0 ? l : 1, de = E.optional.number(e.params.interval).value, ve = new ur({
        reader: Q,
        target: e.target,
        ticker: Rc(e.document, de),
        value: fs(J)
      }), Vn = E.optional.boolean(e.params.disabled).value, $i = E.optional.boolean(e.params.hidden).value, Xi = n.controller({
        document: e.document,
        params: k.params,
        value: ve.value,
        viewProps: Qe.create({
          disabled: Vn,
          hidden: $i
        })
      });
      return new at(e.document, {
        binding: ve,
        blade: Ee(),
        props: X.fromObject({
          label: "label" in e.params ? (b = E.optional.string(e.params.label).value) !== null && b !== void 0 ? b : null : e.target.key
        }),
        valueController: Xi
      });
    }
    class Ic {
      constructor() {
        this.pluginsMap_ = {
          blades: [],
          inputs: [],
          monitors: []
        };
      }
      getAll() {
        return [
          ...this.pluginsMap_.blades,
          ...this.pluginsMap_.inputs,
          ...this.pluginsMap_.monitors
        ];
      }
      register(e) {
        e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e);
      }
      createInput(e, t, l) {
        const b = t.read();
        if (w(b))
          throw new S2({
            context: {
              key: t.key
            },
            type: "nomatchingcontroller"
          });
        const E = this.pluginsMap_.inputs.reduce((k, z) => k ?? Lc(z, {
          document: e,
          target: t,
          params: l
        }), null);
        if (E)
          return E;
        throw new S2({
          context: {
            key: t.key
          },
          type: "nomatchingcontroller"
        });
      }
      createMonitor(e, t, l) {
        const b = this.pluginsMap_.monitors.reduce((E, k) => E ?? Vc(k, {
          document: e,
          params: l,
          target: t
        }), null);
        if (b)
          return b;
        throw new S2({
          context: {
            key: t.key
          },
          type: "nomatchingcontroller"
        });
      }
      createBlade(e, t) {
        const l = this.pluginsMap_.blades.reduce((b, E) => b ?? cr(E, {
          document: e,
          params: t
        }), null);
        if (!l)
          throw new S2({
            type: "nomatchingview",
            context: {
              params: t
            }
          });
        return l;
      }
      createBladeApi(e) {
        if (e instanceof Ue)
          return new _i(e);
        if (e instanceof at)
          return new wi(e);
        if (e instanceof bn)
          return new qn(e, this);
        const t = this.pluginsMap_.blades.reduce((l, b) => l ?? b.api({
          controller: e,
          pool: this
        }), null);
        if (!t)
          throw S2.shouldNeverHappen();
        return t;
      }
    }
    function Dc() {
      const n = new Ic();
      return [
        jc,
        mc,
        _c,
        yc,
        oc,
        tc,
        ec,
        Ql,
        ri,
        Cc,
        Sc,
        Mc,
        W,
        sr,
        or,
        Ti
      ].forEach((e) => {
        n.register(e);
      }), n;
    }
    function Oc(n) {
      return Jt.isObject(n) ? new Jt(n.x, n.y) : new Jt();
    }
    function Nc(n, e) {
      n.writeProperty("x", e.x), n.writeProperty("y", e.y);
    }
    function Ft(n, e) {
      if (!n)
        return;
      const t = [], l = Qo(n, e);
      l && t.push(l);
      const b = Zo(n);
      return b && t.push(b), new wn(t);
    }
    function Bc(n, e) {
      return new Wt({
        assembly: Wo,
        components: [
          Ft("x" in n ? n.x : void 0, e.x),
          Ft("y" in n ? n.y : void 0, e.y)
        ]
      });
    }
    function ra(n, e) {
      const [t, l] = n ? sc(n) : [];
      if (!w(t) || !w(l))
        return Math.max(Math.abs(t ?? 0), Math.abs(l ?? 0));
      const b = Ot(n);
      return Math.max(Math.abs(b) * 10, Math.abs(e) * 10);
    }
    function Fc(n, e) {
      const t = e instanceof Wt ? e.components[0] : void 0, l = e instanceof Wt ? e.components[1] : void 0, b = ra(t, n.x), E = ra(l, n.y);
      return Math.max(b, E);
    }
    function oa(n, e) {
      return {
        baseStep: Ot(e),
        constraint: e,
        textProps: X.fromObject({
          draggingScale: Nt(e, n),
          formatter: De(si(e, n))
        })
      };
    }
    function zc(n) {
      if (!("y" in n))
        return false;
      const e = n.y;
      return e && "inverted" in e ? !!e.inverted : false;
    }
    const jc = {
      id: "input-point2d",
      type: "input",
      accept: (n, e) => {
        if (!Jt.isObject(n))
          return null;
        const t = A, l = ae(e, {
          expanded: t.optional.boolean,
          picker: t.optional.custom(ji),
          x: t.optional.custom(wt),
          y: t.optional.object({
            inverted: t.optional.boolean,
            max: t.optional.number,
            min: t.optional.number,
            step: t.optional.number
          })
        });
        return l ? {
          initialValue: n,
          params: l
        } : null;
      },
      binding: {
        reader: (n) => Oc,
        constraint: (n) => Bc(n.params, n.initialValue),
        equals: Jt.equals,
        writer: (n) => Nc
      },
      controller: (n) => {
        const e = n.document, t = n.value, l = n.constraint;
        if (!(l instanceof Wt))
          throw S2.shouldNeverHappen();
        const b = "expanded" in n.params ? n.params.expanded : void 0, E = "picker" in n.params ? n.params.picker : void 0;
        return new uc(e, {
          axes: [
            oa(t.rawValue.x, l.components[0]),
            oa(t.rawValue.y, l.components[1])
          ],
          expanded: b ?? false,
          invertsY: zc(n.params),
          maxValue: Fc(t.rawValue, l),
          parser: ct,
          pickerLayout: E ?? "popup",
          value: t,
          viewProps: n.viewProps
        });
      }
    };
    class aa extends o {
      constructor(e) {
        super(e), this.emitter_ = new N(), this.controller_.valueController.value.emitter.on("change", (t) => {
          this.emitter_.emit("change", {
            event: new p(this, t.rawValue)
          });
        });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      get options() {
        return this.controller_.valueController.props.get("options");
      }
      set options(e) {
        this.controller_.valueController.props.set("options", e);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(e) {
        this.controller_.valueController.value.rawValue = e;
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
    }
    class la extends o {
      constructor(e) {
        super(e), this.emitter_ = new N(), this.controller_.valueController.value.emitter.on("change", (t) => {
          this.emitter_.emit("change", {
            event: new p(this, t.rawValue)
          });
        });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      get maxValue() {
        return this.controller_.valueController.sliderController.props.get("maxValue");
      }
      set maxValue(e) {
        this.controller_.valueController.sliderController.props.set("maxValue", e);
      }
      get minValue() {
        return this.controller_.valueController.sliderController.props.get("minValue");
      }
      set minValue(e) {
        this.controller_.valueController.sliderController.props.set("minValue", e);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(e) {
        this.controller_.valueController.value.rawValue = e;
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
    }
    class ca extends o {
      constructor(e) {
        super(e), this.emitter_ = new N(), this.controller_.valueController.value.emitter.on("change", (t) => {
          this.emitter_.emit("change", {
            event: new p(this, t.rawValue)
          });
        });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(e) {
        this.controller_.props.set("label", e);
      }
      get formatter() {
        return this.controller_.valueController.props.get("formatter");
      }
      set formatter(e) {
        this.controller_.valueController.props.set("formatter", e);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(e) {
        this.controller_.valueController.value.rawValue = e;
      }
      on(e, t) {
        const l = t.bind(this);
        return this.emitter_.on(e, (b) => {
          l(b.event);
        }), this;
      }
    }
    const Uc = function() {
      return {
        id: "list",
        type: "blade",
        accept(n) {
          const e = A, t = ae(n, {
            options: e.required.custom(An),
            value: e.required.raw,
            view: e.required.constant("list"),
            label: e.optional.string
          });
          return t ? { params: t } : null;
        },
        controller(n) {
          const e = new yn(Ls(n.params.options)), t = ee(n.params.value, {
            constraint: e
          }), l = new xn(n.document, {
            props: new X({
              options: e.values.value("options")
            }),
            value: t,
            viewProps: n.viewProps
          });
          return new Ht(n.document, {
            blade: n.blade,
            props: X.fromObject({
              label: n.params.label
            }),
            valueController: l
          });
        },
        api(n) {
          return !(n.controller instanceof Ht) || !(n.controller.valueController instanceof xn) ? null : new aa(n.controller);
        }
      };
    }();
    function Gc(n) {
      return n.reduce((e, t) => Object.assign(e, {
        [t.presetKey]: t.read()
      }), {});
    }
    function Hc(n, e) {
      n.forEach((t) => {
        const l = e[t.target.presetKey];
        l !== void 0 && t.writer(t.target, t.reader(l));
      });
    }
    class Kc extends yi {
      /**
       * @hidden
       */
      constructor(e, t) {
        super(e, t);
      }
      get element() {
        return this.controller_.view.element;
      }
      /**
       * Imports a preset of all inputs.
       * @param preset The preset object to import.
       */
      importPreset(e) {
        const t = this.controller_.rackController.rack.find(Ue).map((l) => l.binding);
        Hc(t, e), this.refresh();
      }
      /**
       * Exports a preset of all inputs.
       * @return An exported preset object.
       */
      exportPreset() {
        const e = this.controller_.rackController.rack.find(Ue).map((t) => t.binding.target);
        return Gc(e);
      }
      /**
       * Refreshes all bindings of the pane.
       */
      refresh() {
        this.controller_.rackController.rack.find(Ue).forEach((e) => {
          e.binding.read();
        }), this.controller_.rackController.rack.find(at).forEach((e) => {
          e.binding.read();
        });
      }
    }
    class $c extends Qn {
      constructor(e, t) {
        super(e, {
          expanded: t.expanded,
          blade: t.blade,
          props: t.props,
          root: true,
          viewProps: t.viewProps
        });
      }
    }
    const Xc = {
      id: "slider",
      type: "blade",
      accept(n) {
        const e = A, t = ae(n, {
          max: e.required.number,
          min: e.required.number,
          view: e.required.constant("slider"),
          format: e.optional.function,
          label: e.optional.string,
          value: e.optional.number
        });
        return t ? { params: t } : null;
      },
      controller(n) {
        var e, t;
        const l = (e = n.params.value) !== null && e !== void 0 ? e : 0, b = new Yt({
          max: n.params.max,
          min: n.params.min
        }), E = new ii(n.document, {
          baseStep: 1,
          parser: ct,
          sliderProps: new X({
            maxValue: b.values.value("max"),
            minValue: b.values.value("min")
          }),
          textProps: X.fromObject({
            draggingScale: Nt(void 0, l),
            formatter: (t = n.params.format) !== null && t !== void 0 ? t : Ar
          }),
          value: ee(l, {
            constraint: b
          }),
          viewProps: n.viewProps
        });
        return new Ht(n.document, {
          blade: n.blade,
          props: X.fromObject({
            label: n.params.label
          }),
          valueController: E
        });
      },
      api(n) {
        return !(n.controller instanceof Ht) || !(n.controller.valueController instanceof ii) ? null : new la(n.controller);
      }
    }, Yc = function() {
      return {
        id: "text",
        type: "blade",
        accept(n) {
          const e = A, t = ae(n, {
            parse: e.required.function,
            value: e.required.raw,
            view: e.required.constant("text"),
            format: e.optional.function,
            label: e.optional.string
          });
          return t ? { params: t } : null;
        },
        controller(n) {
          var e;
          const t = new ei(n.document, {
            parser: n.params.parse,
            props: X.fromObject({
              formatter: (e = n.params.format) !== null && e !== void 0 ? e : (l) => String(l)
            }),
            value: ee(n.params.value),
            viewProps: n.viewProps
          });
          return new Ht(n.document, {
            blade: n.blade,
            props: X.fromObject({
              label: n.params.label
            }),
            valueController: t
          });
        },
        api(n) {
          return !(n.controller instanceof Ht) || !(n.controller.valueController instanceof ei) ? null : new ca(n.controller);
        }
      };
    }();
    function qc(n) {
      const e = n.createElement("div");
      return e.classList.add(D2("dfw")()), n.body && n.body.appendChild(e), e;
    }
    function ua(n, e, t) {
      if (n.querySelector(`style[data-tp-style=${e}]`))
        return;
      const l = n.createElement("style");
      l.dataset.tpStyle = e, l.textContent = t, n.head.appendChild(l);
    }
    class Qc extends Kc {
      constructor(e) {
        var t, l;
        const b = e ?? {}, E = (t = b.document) !== null && t !== void 0 ? t : bi(), k = Dc(), z = new $c(E, {
          expanded: b.expanded,
          blade: Ee(),
          props: X.fromObject({
            title: b.title
          }),
          viewProps: Qe.create()
        });
        super(z, k), this.pool_ = k, this.containerElem_ = (l = b.container) !== null && l !== void 0 ? l : qc(E), this.containerElem_.appendChild(this.element), this.doc_ = E, this.usesDefaultWrapper_ = !b.container, this.setUpDefaultPlugins_();
      }
      get document() {
        if (!this.doc_)
          throw S2.alreadyDisposed();
        return this.doc_;
      }
      dispose() {
        const e = this.containerElem_;
        if (!e)
          throw S2.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
          const t = e.parentElement;
          t && t.removeChild(e);
        }
        this.containerElem_ = null, this.doc_ = null, super.dispose();
      }
      registerPlugin(e) {
        ("plugin" in e ? [e.plugin] : "plugins" in e ? e.plugins : []).forEach((l) => {
          this.pool_.register(l), this.embedPluginStyle_(l);
        });
      }
      embedPluginStyle_(e) {
        e.css && ua(this.document, `plugin-${e.id}`, e.css);
      }
      setUpDefaultPlugins_() {
        ua(this.document, "default", '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'), this.pool_.getAll().forEach((e) => {
          this.embedPluginStyle_(e);
        }), this.registerPlugin({
          plugins: [
            Xc,
            Uc,
            Ti,
            Yc
          ]
        });
      }
    }
    const Zc = new s("3.1.9");
    r.BladeApi = o, r.ButtonApi = O, r.FolderApi = yi, r.InputBindingApi = _i, r.ListApi = aa, r.MonitorBindingApi = wi, r.Pane = Qc, r.SeparatorApi = us, r.SliderApi = la, r.TabApi = hs, r.TabPageApi = Pi, r.TextApi = ca, r.TpChangeEvent = p, r.VERSION = Zc, Object.defineProperty(r, "__esModule", { value: true });
  });
})(_o, _o.exports);
var zh = _o.exports;
var wo = { exports: {} };
(function(f, i) {
  (function(r, s) {
    s(i);
  })(nl, function(r) {
    class s {
      constructor(a) {
        this.controller_ = a;
      }
      get element() {
        return this.controller_.view.element;
      }
      get disabled() {
        return this.controller_.viewProps.get("disabled");
      }
      set disabled(a) {
        this.controller_.viewProps.set("disabled", a);
      }
      get hidden() {
        return this.controller_.viewProps.get("hidden");
      }
      set hidden(a) {
        this.controller_.viewProps.set("hidden", a);
      }
      dispose() {
        this.controller_.viewProps.set("disposed", true);
      }
    }
    class o {
      constructor(a) {
        this.target = a;
      }
    }
    class c extends o {
      constructor(a, u, v, x) {
        super(a), this.value = u, this.presetKey = v, this.last = x ?? true;
      }
    }
    function p(d) {
      return d;
    }
    function h(d) {
      return d == null;
    }
    const m = {
      alreadydisposed: () => "View has been already disposed",
      invalidparams: (d) => `Invalid parameters for '${d.name}'`,
      nomatchingcontroller: (d) => `No matching controller for '${d.key}'`,
      nomatchingview: (d) => `No matching view for '${JSON.stringify(d.params)}'`,
      notbindable: () => "Value is not bindable",
      propertynotfound: (d) => `Property '${d.name}' not found`,
      shouldneverhappen: () => "This error should never happen"
    };
    class g {
      constructor(a) {
        var u;
        this.message = (u = m[a.type](a.context)) !== null && u !== void 0 ? u : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = a.type;
      }
      static alreadyDisposed() {
        return new g({ type: "alreadydisposed" });
      }
      static notBindable() {
        return new g({
          type: "notbindable"
        });
      }
      static propertyNotFound(a) {
        return new g({
          type: "propertynotfound",
          context: {
            name: a
          }
        });
      }
      static shouldNeverHappen() {
        return new g({ type: "shouldneverhappen" });
      }
    }
    class _ {
      constructor() {
        this.observers_ = {};
      }
      on(a, u) {
        let v = this.observers_[a];
        return v || (v = this.observers_[a] = []), v.push({
          handler: u
        }), this;
      }
      off(a, u) {
        const v = this.observers_[a];
        return v && (this.observers_[a] = v.filter((x) => x.handler !== u)), this;
      }
      emit(a, u) {
        const v = this.observers_[a];
        v && v.forEach((x) => {
          x.handler(u);
        });
      }
    }
    const w = "tp";
    function y(d) {
      return (u, v) => [
        w,
        "-",
        d,
        "v",
        u ? `_${u}` : "",
        v ? `-${v}` : ""
      ].join("");
    }
    function C(d, a) {
      return (u) => a(d(u));
    }
    function L(d) {
      return d.rawValue;
    }
    function S2(d, a) {
      d.emitter.on("change", C(L, a)), a(d.rawValue);
    }
    function R(d, a, u) {
      S2(d.value(a), u);
    }
    function O(d, a, u) {
      u ? d.classList.add(a) : d.classList.remove(a);
    }
    function N(d, a) {
      return (u) => {
        O(d, a, u);
      };
    }
    function I(d, a) {
      S2(d, (u) => {
        a.textContent = u ?? "";
      });
    }
    const D2 = y("btn");
    class Y {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(D2()), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElement("button");
        v.classList.add(D2("b")), u.viewProps.bindDisabled(v), this.element.appendChild(v), this.buttonElement = v;
        const x = a.createElement("div");
        x.classList.add(D2("t")), I(u.props.value("title"), x), this.buttonElement.appendChild(x);
      }
    }
    class G {
      constructor(a, u) {
        this.emitter = new _(), this.onClick_ = this.onClick_.bind(this), this.props = u.props, this.viewProps = u.viewProps, this.view = new Y(a, {
          props: this.props,
          viewProps: this.viewProps
        }), this.view.buttonElement.addEventListener("click", this.onClick_);
      }
      onClick_() {
        this.emitter.emit("click", {
          sender: this
        });
      }
    }
    class F {
      constructor(a, u) {
        var v;
        this.constraint_ = u == null ? void 0 : u.constraint, this.equals_ = (v = u == null ? void 0 : u.equals) !== null && v !== void 0 ? v : (x, T) => x === T, this.emitter = new _(), this.rawValue_ = a;
      }
      get constraint() {
        return this.constraint_;
      }
      get rawValue() {
        return this.rawValue_;
      }
      set rawValue(a) {
        this.setRawValue(a, {
          forceEmit: false,
          last: true
        });
      }
      setRawValue(a, u) {
        const v = u ?? {
          forceEmit: false,
          last: true
        }, x = this.constraint_ ? this.constraint_.constrain(a) : a, T = this.rawValue_;
        this.equals_(T, x) && !v.forceEmit || (this.emitter.emit("beforechange", {
          sender: this
        }), this.rawValue_ = x, this.emitter.emit("change", {
          options: v,
          previousRawValue: T,
          rawValue: x,
          sender: this
        }));
      }
    }
    class B {
      constructor(a) {
        this.emitter = new _(), this.value_ = a;
      }
      get rawValue() {
        return this.value_;
      }
      set rawValue(a) {
        this.setRawValue(a, {
          forceEmit: false,
          last: true
        });
      }
      setRawValue(a, u) {
        const v = u ?? {
          forceEmit: false,
          last: true
        }, x = this.value_;
        x === a && !v.forceEmit || (this.emitter.emit("beforechange", {
          sender: this
        }), this.value_ = a, this.emitter.emit("change", {
          options: v,
          previousRawValue: x,
          rawValue: this.value_,
          sender: this
        }));
      }
    }
    function H(d, a) {
      const u = a == null ? void 0 : a.constraint, v = a == null ? void 0 : a.equals;
      return !u && !v ? new B(d) : new F(d, a);
    }
    class K {
      constructor(a) {
        this.emitter = new _(), this.valMap_ = a;
        for (const u in this.valMap_)
          this.valMap_[u].emitter.on("change", () => {
            this.emitter.emit("change", {
              key: u,
              sender: this
            });
          });
      }
      static createCore(a) {
        return Object.keys(a).reduce((v, x) => Object.assign(v, {
          [x]: H(a[x])
        }), {});
      }
      static fromObject(a) {
        const u = this.createCore(a);
        return new K(u);
      }
      get(a) {
        return this.valMap_[a].rawValue;
      }
      set(a, u) {
        this.valMap_[a].rawValue = u;
      }
      value(a) {
        return this.valMap_[a];
      }
    }
    function q(d, a) {
      const v = Object.keys(a).reduce((x, T) => {
        if (x === void 0)
          return;
        const V = a[T], j = V(d[T]);
        return j.succeeded ? Object.assign(Object.assign({}, x), { [T]: j.value }) : void 0;
      }, {});
      return v;
    }
    function pe(d, a) {
      return d.reduce((u, v) => {
        if (u === void 0)
          return;
        const x = a(v);
        if (!(!x.succeeded || x.value === void 0))
          return [...u, x.value];
      }, []);
    }
    function _e(d) {
      return d === null ? false : typeof d == "object";
    }
    function ce(d) {
      return (a) => (u) => {
        if (!a && u === void 0)
          return {
            succeeded: false,
            value: void 0
          };
        if (a && u === void 0)
          return {
            succeeded: true,
            value: void 0
          };
        const v = d(u);
        return v !== void 0 ? {
          succeeded: true,
          value: v
        } : {
          succeeded: false,
          value: void 0
        };
      };
    }
    function me(d) {
      return {
        custom: (a) => ce(a)(d),
        boolean: ce((a) => typeof a == "boolean" ? a : void 0)(d),
        number: ce((a) => typeof a == "number" ? a : void 0)(d),
        string: ce((a) => typeof a == "string" ? a : void 0)(d),
        function: ce((a) => typeof a == "function" ? a : void 0)(d),
        constant: (a) => ce((u) => u === a ? a : void 0)(d),
        raw: ce((a) => a)(d),
        object: (a) => ce((u) => {
          if (_e(u))
            return q(u, a);
        })(d),
        array: (a) => ce((u) => {
          if (Array.isArray(u))
            return pe(u, a);
        })(d)
      };
    }
    const he = {
      optional: me(true),
      required: me(false)
    };
    function ee(d, a) {
      const u = he.required.object(a)(d);
      return u.succeeded ? u.value : void 0;
    }
    function X(d) {
      console.warn([
        `Missing '${d.key}' of ${d.target} in ${d.place}.`,
        "Please rebuild plugins with the latest core package."
      ].join(" "));
    }
    function Me(d) {
      return d && d.parentElement && d.parentElement.removeChild(d), null;
    }
    class fe {
      constructor(a) {
        this.value_ = a;
      }
      static create(a) {
        return [
          new fe(a),
          (u, v) => {
            a.setRawValue(u, v);
          }
        ];
      }
      get emitter() {
        return this.value_.emitter;
      }
      get rawValue() {
        return this.value_.rawValue;
      }
    }
    const oe = y("");
    function ne(d, a) {
      return N(d, oe(void 0, a));
    }
    class ge extends K {
      constructor(a) {
        var u;
        super(a), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = fe.create(H(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (u = this.get("parent")) === null || u === void 0 || u.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
      }
      static create(a) {
        var u, v, x;
        const T = a ?? {};
        return new ge(K.createCore({
          disabled: (u = T.disabled) !== null && u !== void 0 ? u : false,
          disposed: false,
          hidden: (v = T.hidden) !== null && v !== void 0 ? v : false,
          parent: (x = T.parent) !== null && x !== void 0 ? x : null
        }));
      }
      get globalDisabled() {
        return this.globalDisabled_;
      }
      bindClassModifiers(a) {
        S2(this.globalDisabled_, ne(a, "disabled")), R(this, "hidden", ne(a, "hidden"));
      }
      bindDisabled(a) {
        S2(this.globalDisabled_, (u) => {
          a.disabled = u;
        });
      }
      bindTabIndex(a) {
        S2(this.globalDisabled_, (u) => {
          a.tabIndex = u ? -1 : 0;
        });
      }
      handleDispose(a) {
        this.value("disposed").emitter.on("change", (u) => {
          u && a();
        });
      }
      getGlobalDisabled_() {
        const a = this.get("parent");
        return (a ? a.globalDisabled.rawValue : false) || this.get("disabled");
      }
      updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
      }
      onDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentChange_(a) {
        var u;
        const v = a.previousRawValue;
        v == null || v.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (u = this.get("parent")) === null || u === void 0 || u.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
      }
    }
    function A() {
      return ["veryfirst", "first", "last", "verylast"];
    }
    const ae = y(""), Ne = {
      veryfirst: "vfst",
      first: "fst",
      last: "lst",
      verylast: "vlst"
    };
    class je {
      constructor(a) {
        this.parent_ = null, this.blade = a.blade, this.view = a.view, this.viewProps = a.viewProps;
        const u = this.view.element;
        this.blade.value("positions").emitter.on("change", () => {
          A().forEach((v) => {
            u.classList.remove(ae(void 0, Ne[v]));
          }), this.blade.get("positions").forEach((v) => {
            u.classList.add(ae(void 0, Ne[v]));
          });
        }), this.viewProps.handleDispose(() => {
          Me(u);
        });
      }
      get parent() {
        return this.parent_;
      }
      set parent(a) {
        if (this.parent_ = a, !("parent" in this.viewProps.valMap_)) {
          X({
            key: "parent",
            target: ge.name,
            place: "BladeController.parent"
          });
          return;
        }
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
      }
    }
    const xe = "http://www.w3.org/2000/svg";
    function rt(d) {
      d.offsetHeight;
    }
    function Un(d, a) {
      const u = d.style.transition;
      d.style.transition = "none", a(), d.style.transition = u;
    }
    function Qe(d) {
      return d.ontouchstart !== void 0;
    }
    function Gn(d) {
      for (; d.childNodes.length > 0; )
        d.removeChild(d.childNodes[0]);
    }
    function hn(d) {
      return d.relatedTarget ? d.relatedTarget : "explicitOriginalTarget" in d ? d.explicitOriginalTarget : null;
    }
    const vt = y("lbl");
    function Mt(d, a) {
      const u = d.createDocumentFragment();
      return a.split(`
`).map((x) => d.createTextNode(x)).forEach((x, T) => {
        T > 0 && u.appendChild(d.createElement("br")), u.appendChild(x);
      }), u;
    }
    class Ke {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(vt()), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElement("div");
        v.classList.add(vt("l")), R(u.props, "label", (T) => {
          h(T) ? this.element.classList.add(vt(void 0, "nol")) : (this.element.classList.remove(vt(void 0, "nol")), Gn(v), v.appendChild(Mt(a, T)));
        }), this.element.appendChild(v), this.labelElement = v;
        const x = a.createElement("div");
        x.classList.add(vt("v")), this.element.appendChild(x), this.valueElement = x;
      }
    }
    class ot extends je {
      constructor(a, u) {
        const v = u.valueController.viewProps;
        super(Object.assign(Object.assign({}, u), { view: new Ke(a, {
          props: u.props,
          viewProps: v
        }), viewProps: v })), this.props = u.props, this.valueController = u.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    class dn extends je {
      constructor(a) {
        super(a), this.value = a.value;
      }
    }
    class bt extends K {
      constructor(a) {
        super(a);
      }
      static create(a) {
        const u = {
          completed: true,
          expanded: a,
          expandedHeight: null,
          shouldFixHeight: false,
          temporaryExpanded: null
        }, v = K.createCore(u);
        return new bt(v);
      }
      get styleExpanded() {
        var a;
        return (a = this.get("temporaryExpanded")) !== null && a !== void 0 ? a : this.get("expanded");
      }
      get styleHeight() {
        if (!this.styleExpanded)
          return "0";
        const a = this.get("expandedHeight");
        return this.get("shouldFixHeight") && !h(a) ? `${a}px` : "auto";
      }
      bindExpandedClass(a, u) {
        const v = () => {
          this.styleExpanded ? a.classList.add(u) : a.classList.remove(u);
        };
        R(this, "expanded", v), R(this, "temporaryExpanded", v);
      }
      cleanUpTransition() {
        this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
      }
    }
    function Hn(d) {
      return bt.create(d);
    }
    function bi(d, a) {
      let u = 0;
      return Un(a, () => {
        d.set("expandedHeight", null), d.set("temporaryExpanded", true), rt(a), u = a.clientHeight, d.set("temporaryExpanded", null), rt(a);
      }), u;
    }
    function Kn(d, a) {
      a.style.height = d.styleHeight;
    }
    function $n(d, a) {
      d.value("expanded").emitter.on("beforechange", () => {
        d.set("completed", false), h(d.get("expandedHeight")) && d.set("expandedHeight", bi(d, a)), d.set("shouldFixHeight", true), rt(a);
      }), d.emitter.on("change", () => {
        Kn(d, a);
      }), Kn(d, a), a.addEventListener("transitionend", (u) => {
        u.propertyName === "height" && d.cleanUpTransition();
      });
    }
    class Ct2 {
      constructor(a, u) {
        const v = y(u.viewName);
        this.element = a.createElement("div"), this.element.classList.add(v()), u.viewProps.bindClassModifiers(this.element);
      }
    }
    class St extends dn {
      constructor(a, u) {
        const v = u.valueController.viewProps;
        super(Object.assign(Object.assign({}, u), { value: u.valueController.value, view: new Ke(a, {
          props: u.props,
          viewProps: v
        }), viewProps: v })), this.props = u.props, this.valueController = u.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    class Xn {
      constructor() {
        this.disabled = false, this.emitter = new _();
      }
      dispose() {
      }
      tick() {
        this.disabled || this.emitter.emit("tick", {
          sender: this
        });
      }
    }
    class mn {
      constructor(a, u) {
        this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = a, this.emitter = new _(), this.interval_ = u, this.setTimer_();
      }
      get disabled() {
        return this.disabled_;
      }
      set disabled(a) {
        this.disabled_ = a, this.disabled_ ? this.clearTimer_() : this.setTimer_();
      }
      dispose() {
        this.clearTimer_();
      }
      clearTimer_() {
        if (this.timerId_ === null)
          return;
        const a = this.doc_.defaultView;
        a && a.clearInterval(this.timerId_), this.timerId_ = null;
      }
      setTimer_() {
        if (this.clearTimer_(), this.interval_ <= 0)
          return;
        const a = this.doc_.defaultView;
        a && (this.timerId_ = a.setInterval(this.onTick_, this.interval_));
      }
      onTick_() {
        this.disabled_ || this.emitter.emit("tick", {
          sender: this
        });
      }
    }
    class Yn {
      constructor(a) {
        this.constraints = a;
      }
      constrain(a) {
        return this.constraints.reduce((u, v) => v.constrain(u), a);
      }
    }
    function Pt(d, a) {
      if (d instanceof a)
        return d;
      if (d instanceof Yn) {
        const u = d.constraints.reduce((v, x) => v || (x instanceof a ? x : null), null);
        if (u)
          return u;
      }
      return null;
    }
    class gt {
      constructor(a) {
        this.values = K.fromObject({
          max: a.max,
          min: a.min
        });
      }
      constrain(a) {
        const u = this.values.get("max"), v = this.values.get("min");
        return Math.min(Math.max(a, v), u);
      }
    }
    class Lt {
      constructor(a) {
        this.values = K.fromObject({
          max: a.max,
          min: a.min
        });
      }
      get maxValue() {
        return this.values.get("max");
      }
      get minValue() {
        return this.values.get("min");
      }
      constrain(a) {
        const u = this.values.get("max"), v = this.values.get("min");
        let x = a;
        return h(v) || (x = Math.max(x, v)), h(u) || (x = Math.min(x, u)), x;
      }
    }
    class M {
      constructor(a, u = 0) {
        this.step = a, this.origin = u;
      }
      constrain(a) {
        const u = this.origin % this.step, v = Math.round((a - u) / this.step);
        return u + v * this.step;
      }
    }
    const U = y("pop");
    class W {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(U()), u.viewProps.bindClassModifiers(this.element), S2(u.shows, N(this.element, U(void 0, "v")));
      }
    }
    class ie {
      constructor(a, u) {
        this.shows = H(false), this.viewProps = u.viewProps, this.view = new W(a, {
          shows: this.shows,
          viewProps: this.viewProps
        });
      }
    }
    const Ee = y("txt");
    class Fe {
      constructor(a, u) {
        this.onChange_ = this.onChange_.bind(this), this.element = a.createElement("div"), this.element.classList.add(Ee()), u.viewProps.bindClassModifiers(this.element), this.props_ = u.props, this.props_.emitter.on("change", this.onChange_);
        const v = a.createElement("input");
        v.classList.add(Ee("i")), v.type = "text", u.viewProps.bindDisabled(v), this.element.appendChild(v), this.inputElement = v, u.value.emitter.on("change", this.onChange_), this.value_ = u.value, this.refresh();
      }
      refresh() {
        const a = this.props_.get("formatter");
        this.inputElement.value = a(this.value_.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class Gt {
      constructor(a, u) {
        this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = u.parser, this.props = u.props, this.value = u.value, this.viewProps = u.viewProps, this.view = new Fe(a, {
          props: u.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.inputElement.addEventListener("change", this.onInputChange_);
      }
      onInputChange_(a) {
        const v = a.currentTarget.value, x = this.parser_(v);
        h(x) || (this.value.rawValue = x), this.view.refresh();
      }
    }
    function fn(d) {
      return d === "false" ? false : !!d;
    }
    class $e {
      constructor(a) {
        this.text = a;
      }
      evaluate() {
        return Number(this.text);
      }
      toString() {
        return this.text;
      }
    }
    const Xe = {
      "**": (d, a) => Math.pow(d, a),
      "*": (d, a) => d * a,
      "/": (d, a) => d / a,
      "%": (d, a) => d % a,
      "+": (d, a) => d + a,
      "-": (d, a) => d - a,
      "<<": (d, a) => d << a,
      ">>": (d, a) => d >> a,
      ">>>": (d, a) => d >>> a,
      "&": (d, a) => d & a,
      "^": (d, a) => d ^ a,
      "|": (d, a) => d | a
    };
    class Ys {
      constructor(a, u, v) {
        this.left = u, this.operator = a, this.right = v;
      }
      evaluate() {
        const a = Xe[this.operator];
        if (!a)
          throw new Error(`unexpected binary operator: '${this.operator}`);
        return a(this.left.evaluate(), this.right.evaluate());
      }
      toString() {
        return [
          "b(",
          this.left.toString(),
          this.operator,
          this.right.toString(),
          ")"
        ].join(" ");
      }
    }
    const qs = {
      "+": (d) => d,
      "-": (d) => -d,
      "~": (d) => ~d
    };
    class Qs {
      constructor(a, u) {
        this.operator = a, this.expression = u;
      }
      evaluate() {
        const a = qs[this.operator];
        if (!a)
          throw new Error(`unexpected unary operator: '${this.operator}`);
        return a(this.expression.evaluate());
      }
      toString() {
        return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
      }
    }
    function gi(d) {
      return (a, u) => {
        for (let v = 0; v < d.length; v++) {
          const x = d[v](a, u);
          if (x !== "")
            return x;
        }
        return "";
      };
    }
    function Rt2(d, a) {
      var u;
      const v = d.substr(a).match(/^\s+/);
      return (u = v && v[0]) !== null && u !== void 0 ? u : "";
    }
    function _i(d, a) {
      const u = d.substr(a, 1);
      return u.match(/^[1-9]$/) ? u : "";
    }
    function Ue(d, a) {
      var u;
      const v = d.substr(a).match(/^[0-9]+/);
      return (u = v && v[0]) !== null && u !== void 0 ? u : "";
    }
    function wi(d, a) {
      const u = Ue(d, a);
      if (u !== "")
        return u;
      const v = d.substr(a, 1);
      if (a += 1, v !== "-" && v !== "+")
        return "";
      const x = Ue(d, a);
      return x === "" ? "" : v + x;
    }
    function at(d, a) {
      const u = d.substr(a, 1);
      if (a += 1, u.toLowerCase() !== "e")
        return "";
      const v = wi(d, a);
      return v === "" ? "" : u + v;
    }
    function as(d, a) {
      const u = d.substr(a, 1);
      if (u === "0")
        return u;
      const v = _i(d, a);
      return a += v.length, v === "" ? "" : v + Ue(d, a);
    }
    function vn(d, a) {
      const u = as(d, a);
      if (a += u.length, u === "")
        return "";
      const v = d.substr(a, 1);
      if (a += v.length, v !== ".")
        return "";
      const x = Ue(d, a);
      return a += x.length, u + v + x + at(d, a);
    }
    function ls(d, a) {
      const u = d.substr(a, 1);
      if (a += u.length, u !== ".")
        return "";
      const v = Ue(d, a);
      return a += v.length, v === "" ? "" : u + v + at(d, a);
    }
    function qn(d, a) {
      const u = as(d, a);
      return a += u.length, u === "" ? "" : u + at(d, a);
    }
    const yi = gi([
      vn,
      ls,
      qn
    ]);
    function xi(d, a) {
      var u;
      const v = d.substr(a).match(/^[01]+/);
      return (u = v && v[0]) !== null && u !== void 0 ? u : "";
    }
    function Zs(d, a) {
      const u = d.substr(a, 2);
      if (a += u.length, u.toLowerCase() !== "0b")
        return "";
      const v = xi(d, a);
      return v === "" ? "" : u + v;
    }
    function Ws(d, a) {
      var u;
      const v = d.substr(a).match(/^[0-7]+/);
      return (u = v && v[0]) !== null && u !== void 0 ? u : "";
    }
    function Js(d, a) {
      const u = d.substr(a, 2);
      if (a += u.length, u.toLowerCase() !== "0o")
        return "";
      const v = Ws(d, a);
      return v === "" ? "" : u + v;
    }
    function er(d, a) {
      var u;
      const v = d.substr(a).match(/^[0-9a-f]+/i);
      return (u = v && v[0]) !== null && u !== void 0 ? u : "";
    }
    function Ei(d, a) {
      const u = d.substr(a, 2);
      if (a += u.length, u.toLowerCase() !== "0x")
        return "";
      const v = er(d, a);
      return v === "" ? "" : u + v;
    }
    const tr = gi([
      Zs,
      Js,
      Ei
    ]), nr = gi([
      tr,
      yi
    ]);
    function bn(d, a) {
      const u = nr(d, a);
      return a += u.length, u === "" ? null : {
        evaluable: new $e(u),
        cursor: a
      };
    }
    function cs(d, a) {
      const u = d.substr(a, 1);
      if (a += u.length, u !== "(")
        return null;
      const v = Ci(d, a);
      if (!v)
        return null;
      a = v.cursor, a += Rt2(d, a).length;
      const x = d.substr(a, 1);
      return a += x.length, x !== ")" ? null : {
        evaluable: v.evaluable,
        cursor: a
      };
    }
    function ir(d, a) {
      var u;
      return (u = bn(d, a)) !== null && u !== void 0 ? u : cs(d, a);
    }
    function Qn(d, a) {
      const u = ir(d, a);
      if (u)
        return u;
      const v = d.substr(a, 1);
      if (a += v.length, v !== "+" && v !== "-" && v !== "~")
        return null;
      const x = Qn(d, a);
      return x ? (a = x.cursor, {
        cursor: a,
        evaluable: new Qs(v, x.evaluable)
      }) : null;
    }
    function sr(d, a, u) {
      u += Rt2(a, u).length;
      const v = d.filter((x) => a.startsWith(x, u))[0];
      return v ? (u += v.length, u += Rt2(a, u).length, {
        cursor: u,
        operator: v
      }) : null;
    }
    function Ht(d, a) {
      return (u, v) => {
        const x = d(u, v);
        if (!x)
          return null;
        v = x.cursor;
        let T = x.evaluable;
        for (; ; ) {
          const V = sr(a, u, v);
          if (!V)
            break;
          v = V.cursor;
          const j = d(u, v);
          if (!j)
            return null;
          v = j.cursor, T = new Ys(V.operator, T, j.evaluable);
        }
        return T ? {
          cursor: v,
          evaluable: T
        } : null;
      };
    }
    const us = [
      ["**"],
      ["*", "/", "%"],
      ["+", "-"],
      ["<<", ">>>", ">>"],
      ["&"],
      ["^"],
      ["|"]
    ].reduce((d, a) => Ht(d, a), Qn);
    function Ci(d, a) {
      return a += Rt2(d, a).length, us(d, a);
    }
    function rr(d) {
      const a = Ci(d, 0);
      return !a || a.cursor + Rt2(d, a.cursor).length !== d.length ? null : a.evaluable;
    }
    function gn(d) {
      var a;
      const u = rr(d);
      return (a = u == null ? void 0 : u.evaluate()) !== null && a !== void 0 ? a : null;
    }
    function or(d) {
      if (typeof d == "number")
        return d;
      if (typeof d == "string") {
        const a = gn(d);
        if (!h(a))
          return a;
      }
      return 0;
    }
    function Ie(d) {
      return (a) => a.toFixed(Math.max(Math.min(d, 20), 0));
    }
    const ar = Ie(0);
    function Zn(d) {
      return ar(d) + "%";
    }
    function ps(d) {
      return String(d);
    }
    function Pi(d, a) {
      for (; d.length < a; )
        d.push(void 0);
    }
    function hs(d) {
      const a = [];
      return Pi(a, d), H(a);
    }
    function ds(d) {
      const a = d.indexOf(void 0);
      return a < 0 ? d : d.slice(0, a);
    }
    function lr(d, a) {
      const u = [...ds(d), a];
      return u.length > d.length ? u.splice(0, u.length - d.length) : Pi(u, d.length), u;
    }
    function Kt({ primary: d, secondary: a, forward: u, backward: v }) {
      let x = false;
      function T(V) {
        x || (x = true, V(), x = false);
      }
      d.emitter.on("change", (V) => {
        T(() => {
          a.setRawValue(u(d, a), V.options);
        });
      }), a.emitter.on("change", (V) => {
        T(() => {
          d.setRawValue(v(d, a), V.options);
        }), T(() => {
          a.setRawValue(u(d, a), V.options);
        });
      }), T(() => {
        a.setRawValue(u(d, a), {
          forceEmit: false,
          last: true
        });
      });
    }
    function $t(d, a) {
      const u = d * (a.altKey ? 0.1 : 1) * (a.shiftKey ? 10 : 1);
      return a.upKey ? +u : a.downKey ? -u : 0;
    }
    function _n(d) {
      return {
        altKey: d.altKey,
        downKey: d.key === "ArrowDown",
        shiftKey: d.shiftKey,
        upKey: d.key === "ArrowUp"
      };
    }
    function Ti(d) {
      return {
        altKey: d.altKey,
        downKey: d.key === "ArrowLeft",
        shiftKey: d.shiftKey,
        upKey: d.key === "ArrowRight"
      };
    }
    function cr(d) {
      return d === "ArrowUp" || d === "ArrowDown";
    }
    function ms(d) {
      return cr(d) || d === "ArrowLeft" || d === "ArrowRight";
    }
    function ki(d, a) {
      var u, v;
      const x = a.ownerDocument.defaultView, T = a.getBoundingClientRect();
      return {
        x: d.pageX - (((u = x && x.scrollX) !== null && u !== void 0 ? u : 0) + T.left),
        y: d.pageY - (((v = x && x.scrollY) !== null && v !== void 0 ? v : 0) + T.top)
      };
    }
    class Wn {
      constructor(a) {
        this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = a, this.emitter = new _(), a.addEventListener("touchstart", this.onTouchStart_, {
          passive: false
        }), a.addEventListener("touchmove", this.onTouchMove_, {
          passive: true
        }), a.addEventListener("touchend", this.onTouchEnd_), a.addEventListener("mousedown", this.onMouseDown_);
      }
      computePosition_(a) {
        const u = this.elem_.getBoundingClientRect();
        return {
          bounds: {
            width: u.width,
            height: u.height
          },
          point: a ? {
            x: a.x,
            y: a.y
          } : null
        };
      }
      onMouseDown_(a) {
        var u;
        a.preventDefault(), (u = a.currentTarget) === null || u === void 0 || u.focus();
        const v = this.elem_.ownerDocument;
        v.addEventListener("mousemove", this.onDocumentMouseMove_), v.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
          altKey: a.altKey,
          data: this.computePosition_(ki(a, this.elem_)),
          sender: this,
          shiftKey: a.shiftKey
        });
      }
      onDocumentMouseMove_(a) {
        this.emitter.emit("move", {
          altKey: a.altKey,
          data: this.computePosition_(ki(a, this.elem_)),
          sender: this,
          shiftKey: a.shiftKey
        });
      }
      onDocumentMouseUp_(a) {
        const u = this.elem_.ownerDocument;
        u.removeEventListener("mousemove", this.onDocumentMouseMove_), u.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
          altKey: a.altKey,
          data: this.computePosition_(ki(a, this.elem_)),
          sender: this,
          shiftKey: a.shiftKey
        });
      }
      onTouchStart_(a) {
        a.preventDefault();
        const u = a.targetTouches.item(0), v = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
          altKey: a.altKey,
          data: this.computePosition_(u ? {
            x: u.clientX - v.left,
            y: u.clientY - v.top
          } : void 0),
          sender: this,
          shiftKey: a.shiftKey
        }), this.lastTouch_ = u;
      }
      onTouchMove_(a) {
        const u = a.targetTouches.item(0), v = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
          altKey: a.altKey,
          data: this.computePosition_(u ? {
            x: u.clientX - v.left,
            y: u.clientY - v.top
          } : void 0),
          sender: this,
          shiftKey: a.shiftKey
        }), this.lastTouch_ = u;
      }
      onTouchEnd_(a) {
        var u;
        const v = (u = a.targetTouches.item(0)) !== null && u !== void 0 ? u : this.lastTouch_, x = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
          altKey: a.altKey,
          data: this.computePosition_(v ? {
            x: v.clientX - x.left,
            y: v.clientY - x.top
          } : void 0),
          sender: this,
          shiftKey: a.shiftKey
        });
      }
    }
    function Le(d, a, u, v, x) {
      const T = (d - a) / (u - a);
      return v + T * (x - v);
    }
    function fs(d) {
      return String(d.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
    }
    function Xt(d, a, u) {
      return Math.min(Math.max(d, a), u);
    }
    const Ze = y("txt");
    class ur {
      constructor(a, u) {
        this.onChange_ = this.onChange_.bind(this), this.props_ = u.props, this.props_.emitter.on("change", this.onChange_), this.element = a.createElement("div"), this.element.classList.add(Ze(), Ze(void 0, "num")), u.arrayPosition && this.element.classList.add(Ze(void 0, u.arrayPosition)), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElement("input");
        v.classList.add(Ze("i")), v.type = "text", u.viewProps.bindDisabled(v), this.element.appendChild(v), this.inputElement = v, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = u.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(Ze()), this.inputElement.classList.add(Ze("i"));
        const x = a.createElement("div");
        x.classList.add(Ze("k")), this.element.appendChild(x), this.knobElement = x;
        const T = a.createElementNS(xe, "svg");
        T.classList.add(Ze("g")), this.knobElement.appendChild(T);
        const V = a.createElementNS(xe, "path");
        V.classList.add(Ze("gb")), T.appendChild(V), this.guideBodyElem_ = V;
        const j = a.createElementNS(xe, "path");
        j.classList.add(Ze("gh")), T.appendChild(j), this.guideHeadElem_ = j;
        const re = a.createElement("div");
        re.classList.add(y("tt")()), this.knobElement.appendChild(re), this.tooltipElem_ = re, u.value.emitter.on("change", this.onChange_), this.value = u.value, this.refresh();
      }
      onDraggingChange_(a) {
        if (a.rawValue === null) {
          this.element.classList.remove(Ze(void 0, "drg"));
          return;
        }
        this.element.classList.add(Ze(void 0, "drg"));
        const u = a.rawValue / this.props_.get("draggingScale"), v = u + (u > 0 ? -1 : u < 0 ? 1 : 0), x = Xt(-v, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [`M ${v + x},0 L${v},4 L${v + x},8`, `M ${u},-1 L${u},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${u},4`);
        const T = this.props_.get("formatter");
        this.tooltipElem_.textContent = T(this.value.rawValue), this.tooltipElem_.style.left = `${u}px`;
      }
      refresh() {
        const a = this.props_.get("formatter");
        this.inputElement.value = a(this.value.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class wn {
      constructor(a, u) {
        var v;
        this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = u.baseStep, this.parser_ = u.parser, this.props = u.props, this.sliderProps_ = (v = u.sliderProps) !== null && v !== void 0 ? v : null, this.value = u.value, this.viewProps = u.viewProps, this.dragging_ = H(null), this.view = new ur(a, {
          arrayPosition: u.arrayPosition,
          dragging: this.dragging_,
          props: this.props,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const x = new Wn(this.view.knobElement);
        x.emitter.on("down", this.onPointerDown_), x.emitter.on("move", this.onPointerMove_), x.emitter.on("up", this.onPointerUp_);
      }
      constrainValue_(a) {
        var u, v;
        const x = (u = this.sliderProps_) === null || u === void 0 ? void 0 : u.get("minValue"), T = (v = this.sliderProps_) === null || v === void 0 ? void 0 : v.get("maxValue");
        let V = a;
        return x !== void 0 && (V = Math.max(V, x)), T !== void 0 && (V = Math.min(V, T)), V;
      }
      onInputChange_(a) {
        const v = a.currentTarget.value, x = this.parser_(v);
        h(x) || (this.value.rawValue = this.constrainValue_(x)), this.view.refresh();
      }
      onInputKeyDown_(a) {
        const u = $t(this.baseStep_, _n(a));
        u !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + u), {
          forceEmit: false,
          last: false
        });
      }
      onInputKeyUp_(a) {
        $t(this.baseStep_, _n(a)) !== 0 && this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
      onPointerDown_() {
        this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
      }
      computeDraggingValue_(a) {
        if (!a.point)
          return null;
        const u = a.point.x - a.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + u * this.props.get("draggingScale"));
      }
      onPointerMove_(a) {
        const u = this.computeDraggingValue_(a.data);
        u !== null && (this.value.setRawValue(u, {
          forceEmit: false,
          last: false
        }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
      }
      onPointerUp_(a) {
        const u = this.computeDraggingValue_(a.data);
        u !== null && (this.value.setRawValue(u, {
          forceEmit: true,
          last: true
        }), this.dragging_.rawValue = null);
      }
    }
    function it(d, a) {
      d.write(a);
    }
    function Yt(d) {
      const a = d ? Pt(d, M) : null;
      return a ? a.step : null;
    }
    function yn(d, a) {
      const u = d && Pt(d, M);
      return u ? fs(u.step) : Math.max(fs(a), 2);
    }
    function Ai(d) {
      const a = Yt(d);
      return a ?? 1;
    }
    function Jn(d, a) {
      var u;
      const v = d && Pt(d, M), x = Math.abs((u = v == null ? void 0 : v.step) !== null && u !== void 0 ? u : a);
      return x === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(x)) - 1);
    }
    function qt(d) {
      return [d[0], d[1], d[2]];
    }
    function vs(d) {
      const a = Xt(Math.floor(d), 0, 255).toString(16);
      return a.length === 1 ? `0${a}` : a;
    }
    function xn(d, a = "#") {
      const u = qt(d.getComponents("rgb")).map(vs).join("");
      return `${a}${u}`;
    }
    function bs(d, a = "#") {
      const u = d.getComponents("rgb"), v = [u[0], u[1], u[2], u[3] * 255].map(vs).join("");
      return `${a}${v}`;
    }
    function pr(d, a) {
      const u = Ie(a === "float" ? 2 : 0);
      return `rgb(${qt(d.getComponents("rgb", a)).map((x) => u(x)).join(", ")})`;
    }
    function gs(d) {
      return (a) => pr(a, d);
    }
    function _s(d, a) {
      const u = Ie(2), v = Ie(a === "float" ? 2 : 0);
      return `rgba(${d.getComponents("rgb", a).map((T, V) => (V === 3 ? u : v)(T)).join(", ")})`;
    }
    function hr(d) {
      return (a) => _s(a, d);
    }
    function ei(d) {
      const a = [
        Ie(0),
        Zn,
        Zn
      ];
      return `hsl(${qt(d.getComponents("hsl")).map((v, x) => a[x](v)).join(", ")})`;
    }
    function dr(d) {
      const a = [
        Ie(0),
        Zn,
        Zn,
        Ie(2)
      ];
      return `hsla(${d.getComponents("hsl").map((v, x) => a[x](v)).join(", ")})`;
    }
    function ws(d, a) {
      const u = Ie(a === "float" ? 2 : 0), v = ["r", "g", "b"];
      return `{${qt(d.getComponents("rgb", a)).map((T, V) => `${v[V]}: ${u(T)}`).join(", ")}}`;
    }
    function ys(d) {
      return (a) => ws(a, d);
    }
    function mr(d, a) {
      const u = Ie(2), v = Ie(a === "float" ? 2 : 0), x = ["r", "g", "b", "a"];
      return `{${d.getComponents("rgb", a).map((V, j) => {
        const re = j === 3 ? u : v;
        return `${x[j]}: ${re(V)}`;
      }).join(", ")}}`;
    }
    function fr(d) {
      return (a) => mr(a, d);
    }
    [
      ...["int", "float"].reduce((d, a) => [
        ...d,
        {
          format: {
            alpha: false,
            mode: "rgb",
            notation: "func",
            type: a
          },
          stringifier: gs(a)
        },
        {
          format: {
            alpha: true,
            mode: "rgb",
            notation: "func",
            type: a
          },
          stringifier: hr(a)
        },
        {
          format: {
            alpha: false,
            mode: "rgb",
            notation: "object",
            type: a
          },
          stringifier: ys(a)
        },
        {
          format: {
            alpha: true,
            mode: "rgb",
            notation: "object",
            type: a
          },
          stringifier: fr(a)
        }
      ], [])
    ];
    class vr {
      constructor(a) {
        this.components = a.components, this.asm_ = a.assembly;
      }
      constrain(a) {
        const u = this.asm_.toComponents(a).map((v, x) => {
          var T, V;
          return (V = (T = this.components[x]) === null || T === void 0 ? void 0 : T.constrain(v)) !== null && V !== void 0 ? V : v;
        });
        return this.asm_.fromComponents(u);
      }
    }
    const xs = y("pndtxt");
    class br {
      constructor(a, u) {
        this.textViews = u.textViews, this.element = a.createElement("div"), this.element.classList.add(xs()), this.textViews.forEach((v) => {
          const x = a.createElement("div");
          x.classList.add(xs("a")), x.appendChild(v.element), this.element.appendChild(x);
        });
      }
    }
    function Mi(d, a, u) {
      return new wn(d, {
        arrayPosition: u === 0 ? "fst" : u === a.axes.length - 1 ? "lst" : "mid",
        baseStep: a.axes[u].baseStep,
        parser: a.parser,
        props: a.axes[u].textProps,
        value: H(0, {
          constraint: a.axes[u].constraint
        }),
        viewProps: a.viewProps
      });
    }
    class Vt {
      constructor(a, u) {
        this.value = u.value, this.viewProps = u.viewProps, this.acs_ = u.axes.map((v, x) => Mi(a, u, x)), this.acs_.forEach((v, x) => {
          Kt({
            primary: this.value,
            secondary: v.value,
            forward: (T) => u.assembly.toComponents(T.rawValue)[x],
            backward: (T, V) => {
              const j = u.assembly.toComponents(T.rawValue);
              return j[x] = V.rawValue, u.assembly.fromComponents(j);
            }
          });
        }), this.view = new br(a, {
          textViews: this.acs_.map((v) => v.view)
        });
      }
    }
    function gr(d, a) {
      return "step" in d && !h(d.step) ? new M(d.step, a) : null;
    }
    function En(d) {
      return !h(d.max) && !h(d.min) ? new gt({
        max: d.max,
        min: d.min
      }) : !h(d.max) || !h(d.min) ? new Lt({
        max: d.max,
        min: d.min
      }) : null;
    }
    const _r = {
      monitor: {
        defaultInterval: 200,
        defaultLineCount: 3
      }
    }, lt = y("grl");
    class Es {
      constructor(a, u) {
        this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = a.createElement("div"), this.element.classList.add(lt()), u.viewProps.bindClassModifiers(this.element), this.formatter_ = u.formatter, this.props_ = u.props, this.cursor_ = u.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
        const v = a.createElementNS(xe, "svg");
        v.classList.add(lt("g")), v.style.height = `calc(var(--bld-us) * ${u.lineCount})`, this.element.appendChild(v), this.svgElem_ = v;
        const x = a.createElementNS(xe, "polyline");
        this.svgElem_.appendChild(x), this.lineElem_ = x;
        const T = a.createElement("div");
        T.classList.add(lt("t"), y("tt")()), this.element.appendChild(T), this.tooltipElem_ = T, u.value.emitter.on("change", this.onValueUpdate_), this.value = u.value, this.update_();
      }
      get graphElement() {
        return this.svgElem_;
      }
      update_() {
        const a = this.svgElem_.getBoundingClientRect(), u = this.value.rawValue.length - 1, v = this.props_.get("minValue"), x = this.props_.get("maxValue"), T = [];
        this.value.rawValue.forEach((et, te) => {
          if (et === void 0)
            return;
          const At = Le(te, 0, u, 0, a.width), Vr = Le(et, v, x, a.height, 0);
          T.push([At, Vr].join(","));
        }), this.lineElem_.setAttributeNS(null, "points", T.join(" "));
        const V = this.tooltipElem_, j = this.value.rawValue[this.cursor_.rawValue];
        if (j === void 0) {
          V.classList.remove(lt("t", "a"));
          return;
        }
        const re = Le(this.cursor_.rawValue, 0, u, 0, a.width), Je = Le(j, v, x, a.height, 0);
        V.style.left = `${re}px`, V.style.top = `${Je}px`, V.textContent = `${this.formatter_(j)}`, V.classList.contains(lt("t", "a")) || (V.classList.add(lt("t", "a"), lt("t", "in")), rt(V), V.classList.remove(lt("t", "in")));
      }
      onValueUpdate_() {
        this.update_();
      }
      onCursorChange_() {
        this.update_();
      }
    }
    class wr {
      constructor(a, u) {
        if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props_ = u.props, this.value = u.value, this.viewProps = u.viewProps, this.cursor_ = H(-1), this.view = new Es(a, {
          cursor: this.cursor_,
          formatter: u.formatter,
          lineCount: u.lineCount,
          props: this.props_,
          value: this.value,
          viewProps: this.viewProps
        }), !Qe(a))
          this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        else {
          const v = new Wn(this.view.element);
          v.emitter.on("down", this.onGraphPointerDown_), v.emitter.on("move", this.onGraphPointerMove_), v.emitter.on("up", this.onGraphPointerUp_);
        }
      }
      onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
      }
      onGraphMouseMove_(a) {
        const u = this.view.element.getBoundingClientRect();
        this.cursor_.rawValue = Math.floor(Le(a.offsetX, 0, u.width, 0, this.value.rawValue.length));
      }
      onGraphPointerDown_(a) {
        this.onGraphPointerMove_(a);
      }
      onGraphPointerMove_(a) {
        if (!a.data.point) {
          this.cursor_.rawValue = -1;
          return;
        }
        this.cursor_.rawValue = Math.floor(Le(a.data.point.x, 0, a.data.bounds.width, 0, this.value.rawValue.length));
      }
      onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
      }
    }
    class Cs {
      constructor(a) {
        this.controller_ = a;
      }
      get disabled() {
        return this.controller_.viewProps.get("disabled");
      }
      set disabled(a) {
        this.controller_.viewProps.set("disabled", a);
      }
      get title() {
        var a;
        return (a = this.controller_.props.get("title")) !== null && a !== void 0 ? a : "";
      }
      set title(a) {
        this.controller_.props.set("title", a);
      }
      on(a, u) {
        const v = u.bind(this);
        return this.controller_.emitter.on(a, () => {
          v(new o(this));
        }), this;
      }
    }
    class yr extends o {
      constructor(a, u, v) {
        super(a), this.cell = u, this.index = v;
      }
    }
    class Ps extends s {
      constructor(a) {
        super(a), this.cellToApiMap_ = /* @__PURE__ */ new Map(), this.emitter_ = new _();
        const u = this.controller_.valueController;
        u.cellControllers.forEach((v, x) => {
          const T = new Cs(v);
          this.cellToApiMap_.set(v, T), v.emitter.on("click", () => {
            const V = x % u.size[0], j = Math.floor(x / u.size[0]);
            this.emitter_.emit("click", {
              event: new yr(this, T, [V, j])
            });
          });
        });
      }
      cell(a, u) {
        const v = this.controller_.valueController, x = v.cellControllers[u * v.size[0] + a];
        return this.cellToApiMap_.get(x);
      }
      on(a, u) {
        const v = u.bind(this);
        return this.emitter_.on(a, (x) => {
          v(x.event);
        }), this;
      }
    }
    class Si {
      constructor(a, u) {
        this.size = u.size;
        const [v, x] = this.size, T = [];
        for (let V = 0; V < x; V++)
          for (let j = 0; j < v; j++) {
            const re = new G(a, {
              props: K.fromObject(Object.assign({}, u.cellConfig(j, V))),
              viewProps: ge.create()
            });
            T.push(re);
          }
        this.cellCs_ = T, this.viewProps = ge.create(), this.viewProps.handleDispose(() => {
          this.cellCs_.forEach((V) => {
            V.viewProps.set("disposed", true);
          });
        }), this.view = new Ct2(a, {
          viewProps: this.viewProps,
          viewName: "btngrid"
        }), this.view.element.style.gridTemplateColumns = `repeat(${v}, 1fr)`, this.cellCs_.forEach((V) => {
          this.view.element.appendChild(V.view.element);
        });
      }
      get cellControllers() {
        return this.cellCs_;
      }
    }
    const xr = {
      id: "buttongrid",
      type: "blade",
      // TODO:
      css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
      accept(d) {
        const a = he, u = ee(d, {
          cells: a.required.function,
          size: a.required.array(a.required.number),
          view: a.required.constant("buttongrid"),
          label: a.optional.string
        });
        return u ? { params: u } : null;
      },
      controller(d) {
        return new ot(d.document, {
          blade: d.blade,
          props: K.fromObject({
            label: d.params.label
          }),
          valueController: new Si(d.document, {
            cellConfig: d.params.cells,
            size: d.params.size
          })
        });
      },
      api(d) {
        return !(d.controller instanceof ot) || !(d.controller.valueController instanceof Si) ? null : new Ps(d.controller);
      }
    };
    class Ts extends s {
      get label() {
        return this.controller_.props.get("label");
      }
      set label(a) {
        this.controller_.props.set("label", a);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(a) {
        this.controller_.valueController.value.rawValue = a;
      }
      on(a, u) {
        const v = u.bind(this);
        return this.controller_.valueController.value.emitter.on(a, (x) => {
          v(new c(this, x.rawValue, void 0, x.options.last));
        }), this;
      }
    }
    function We(d, a, u) {
      return d * (1 - u) + a * u;
    }
    const Er = 20, Cr = 1e-3, Li = 100;
    function Pr(d, a) {
      let u = 0.25, v = 0.5, x = -1;
      for (let T = 0; T < Er; T++) {
        const [V, j] = d.curve(v);
        if (v += u * (V < a ? 1 : -1), x = j, u *= 0.5, Math.abs(a - V) < Cr)
          break;
      }
      return x;
    }
    class Tt {
      constructor(a = 0, u = 0, v = 1, x = 1) {
        this.cache_ = [], this.comps_ = [a, u, v, x];
      }
      get x1() {
        return this.comps_[0];
      }
      get y1() {
        return this.comps_[1];
      }
      get x2() {
        return this.comps_[2];
      }
      get y2() {
        return this.comps_[3];
      }
      static isObject(a) {
        return h(a) || !Array.isArray(a) ? false : typeof a[0] == "number" && typeof a[1] == "number" && typeof a[2] == "number" && typeof a[3] == "number";
      }
      static equals(a, u) {
        return a.x1 === u.x1 && a.y1 === u.y1 && a.x2 === u.x2 && a.y2 === u.y2;
      }
      curve(a) {
        const u = We(0, this.x1, a), v = We(0, this.y1, a), x = We(this.x1, this.x2, a), T = We(this.y1, this.y2, a), V = We(this.x2, 1, a), j = We(this.y2, 1, a), re = We(u, x, a), Je = We(v, T, a), et = We(x, V, a), te = We(T, j, a);
        return [We(re, et, a), We(Je, te, a)];
      }
      y(a) {
        if (this.cache_.length === 0) {
          const u = [];
          for (let v = 0; v < Li; v++)
            u.push(Pr(this, Le(v, 0, Li - 1, 0, 1)));
          this.cache_ = u;
        }
        return this.cache_[Math.round(Le(Xt(a, 0, 1), 0, 1, 0, Li - 1))];
      }
      toObject() {
        return [this.comps_[0], this.comps_[1], this.comps_[2], this.comps_[3]];
      }
    }
    const Ri = {
      toComponents: (d) => d.toObject(),
      fromComponents: (d) => new Tt(...d)
    };
    function Tr(d) {
      const a = Ie(2);
      return `cubic-bezier(${d.toObject().map((v) => a(v)).join(", ")})`;
    }
    const Vi = [0, 0.5, 0.5, 1];
    function kr(d) {
      const a = d.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);
      if (!a)
        return new Tt(...Vi);
      const u = [a[1], a[2], a[3], a[4]].reduce((v, x) => {
        if (!v)
          return null;
        const T = Number(x);
        return isNaN(T) ? null : [...v, T];
      }, []);
      return new Tt(...u ?? Vi);
    }
    const It = y("cbz");
    class ks {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(It()), u.viewProps.bindClassModifiers(this.element), u.foldable.bindExpandedClass(this.element, It(void 0, "expanded")), R(u.foldable, "completed", N(this.element, It(void 0, "cpl")));
        const v = a.createElement("div");
        v.classList.add(It("h")), this.element.appendChild(v);
        const x = a.createElement("button");
        x.classList.add(It("b")), u.viewProps.bindDisabled(x);
        const T = a.createElementNS(xe, "svg");
        T.innerHTML = '<path d="M2 13C8 13 8 3 14 3"/>', x.appendChild(T), v.appendChild(x), this.buttonElement = x;
        const V = a.createElement("div");
        if (V.classList.add(It("t")), v.appendChild(V), this.textElement = V, u.pickerLayout === "inline") {
          const j = a.createElement("div");
          j.classList.add(It("p")), this.element.appendChild(j), this.pickerElement = j;
        } else
          this.pickerElement = null;
      }
    }
    const ti = y("cbzp");
    class As {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(ti()), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElement("div");
        v.classList.add(ti("g")), this.element.appendChild(v), this.graphElement = v;
        const x = a.createElement("div");
        x.classList.add(ti("t")), this.element.appendChild(x), this.textElement = x;
      }
    }
    function ct(d, a) {
      const u = new MutationObserver((x) => {
        for (const T of x)
          T.type === "childList" && T.addedNodes.forEach((V) => {
            V.contains(V) && (a(), u.disconnect());
          });
      }), v = d.ownerDocument;
      u.observe(v.body, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
    const _t = y("cbzg");
    function Ar(d, a) {
      return (u) => a(d(u));
    }
    class De {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(_t()), u.viewProps.bindClassModifiers(this.element), u.viewProps.bindTabIndex(this.element);
        const v = a.createElement("div");
        v.classList.add(_t("p")), this.element.appendChild(v), this.previewElement = v;
        const x = a.createElementNS(xe, "svg");
        x.classList.add(_t("g")), this.element.appendChild(x), this.svgElem_ = x;
        const T = a.createElementNS(xe, "path");
        T.classList.add(_t("u")), this.svgElem_.appendChild(T), this.guideElem_ = T;
        const V = a.createElementNS(xe, "polyline");
        V.classList.add(_t("l")), this.svgElem_.appendChild(V), this.lineElem_ = V, this.handleElems_ = [a.createElement("div"), a.createElement("div")], this.handleElems_.forEach((j) => {
          j.classList.add(_t("h")), this.element.appendChild(j);
        }), this.vectorElems_ = [
          a.createElementNS(xe, "line"),
          a.createElementNS(xe, "line")
        ], this.vectorElems_.forEach((j) => {
          j.classList.add(_t("v")), this.svgElem_.appendChild(j);
        }), this.value_ = u.value, this.value_.emitter.on("change", this.onValueChange_.bind(this)), this.sel_ = u.selection, this.handleElems_.forEach((j, re) => {
          S2(this.sel_, Ar((Je) => Je === re, N(j, _t("h", "sel"))));
        }), ct(this.element, () => {
          this.refresh();
        });
      }
      getVertMargin_(a) {
        return a * 0.25;
      }
      valueToPosition(a, u) {
        const v = this.element.getBoundingClientRect(), x = v.width, T = v.height, V = this.getVertMargin_(T);
        return {
          x: Le(a, 0, 1, 0, x),
          y: Le(u, 0, 1, T - V, V)
        };
      }
      positionToValue(a, u) {
        const v = this.element.getBoundingClientRect(), x = v.width, T = v.height, V = this.getVertMargin_(T);
        return {
          x: Xt(Le(a, 0, x, 0, 1), 0, 1),
          y: Le(u, T - V, V, 0, 1)
        };
      }
      refresh() {
        this.guideElem_.setAttributeNS(null, "d", [0, 1].map((T) => {
          const V = this.valueToPosition(0, T), j = this.valueToPosition(1, T);
          return [`M ${V.x},${V.y}`, `L ${j.x},${j.y}`].join(" ");
        }).join(" "));
        const a = this.value_.rawValue, u = [];
        let v = 0;
        for (; ; ) {
          const T = this.valueToPosition(...a.curve(v));
          if (u.push([T.x, T.y].join(",")), v >= 1)
            break;
          v = Math.min(v + 0.05, 1);
        }
        this.lineElem_.setAttributeNS(null, "points", u.join(" "));
        const x = a.toObject();
        [0, 1].forEach((T) => {
          const V = this.valueToPosition(T, T), j = this.valueToPosition(x[T * 2], x[T * 2 + 1]), re = this.vectorElems_[T];
          re.setAttributeNS(null, "x1", String(V.x)), re.setAttributeNS(null, "y1", String(V.y)), re.setAttributeNS(null, "x2", String(j.x)), re.setAttributeNS(null, "y2", String(j.y));
          const Je = this.handleElems_[T];
          Je.style.left = `${j.x}px`, Je.style.top = `${j.y}px`;
        });
      }
      onValueChange_() {
        this.refresh();
      }
    }
    const Ms = 24, Cn = 400, Ii = 1e3, kt = y("cbzprv");
    class Qt {
      constructor(a, u) {
        this.stopped_ = true, this.startTime_ = -1, this.onDispose_ = this.onDispose_.bind(this), this.onTimer_ = this.onTimer_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.element = a.createElement("div"), this.element.classList.add(kt()), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElementNS(xe, "svg");
        v.classList.add(kt("g")), this.element.appendChild(v), this.svgElem_ = v;
        const x = a.createElementNS(xe, "path");
        x.classList.add(kt("t")), this.svgElem_.appendChild(x), this.ticksElem_ = x;
        const T = a.createElement("div");
        T.classList.add(kt("m")), this.element.appendChild(T), this.markerElem_ = T, this.value_ = u.value, this.value_.emitter.on("change", this.onValueChange_), u.viewProps.handleDispose(this.onDispose_), ct(this.element, () => {
          this.refresh();
        });
      }
      play() {
        this.stop(), this.updateMarker_(0), this.markerElem_.classList.add(kt("m", "a")), this.startTime_ = (/* @__PURE__ */ new Date()).getTime() + Cn, this.stopped_ = false, requestAnimationFrame(this.onTimer_);
      }
      stop() {
        this.stopped_ = true, this.markerElem_.classList.remove(kt("m", "a"));
      }
      onDispose_() {
        this.stop();
      }
      updateMarker_(a) {
        const u = this.value_.rawValue.y(Xt(a, 0, 1));
        this.markerElem_.style.left = `${u * 100}%`;
      }
      refresh() {
        const a = this.svgElem_.getBoundingClientRect(), u = a.width, v = a.height, x = [], T = this.value_.rawValue;
        for (let V = 0; V < Ms; V++) {
          const j = Le(V, 0, Ms - 1, 0, 1), re = Le(T.y(j), 0, 1, 0, u);
          x.push(`M ${re},0 v${v}`);
        }
        this.ticksElem_.setAttributeNS(null, "d", x.join(" "));
      }
      onTimer_() {
        if (this.startTime_ === null)
          return;
        const a = (/* @__PURE__ */ new Date()).getTime() - this.startTime_, u = a / Ii;
        this.updateMarker_(u), a > Ii + Cn && this.stop(), this.stopped_ || requestAnimationFrame(this.onTimer_);
      }
      onValueChange_() {
        this.refresh(), this.play();
      }
    }
    function ze(d, a, u, v) {
      const x = u - d, T = v - a;
      return Math.sqrt(x * x + T * T);
    }
    function Pn(d, a, u, v) {
      const x = ze(d, a, u, v), T = Math.atan2(v - a, u - d), V = Math.round(T / (Math.PI / 4)) * Math.PI / 4;
      return {
        x: d + Math.cos(V) * x,
        y: a + Math.sin(V) * x
      };
    }
    class ut {
      constructor(a, u) {
        this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = u.baseStep, this.value = u.value, this.sel_ = H(0), this.viewProps = u.viewProps, this.view = new De(a, {
          selection: this.sel_,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_), this.prevView_ = new Qt(a, {
          value: this.value,
          viewProps: this.viewProps
        }), this.prevView_.element.addEventListener("mousedown", (x) => {
          x.stopImmediatePropagation(), x.preventDefault(), this.prevView_.play();
        }), this.view.previewElement.appendChild(this.prevView_.element);
        const v = new Wn(this.view.element);
        v.emitter.on("down", this.onPointerDown_), v.emitter.on("move", this.onPointerMove_), v.emitter.on("up", this.onPointerUp_);
      }
      refresh() {
        this.view.refresh(), this.prevView_.refresh(), this.prevView_.play();
      }
      updateValue_(a, u, v) {
        const x = this.sel_.rawValue, T = this.value.rawValue.toObject(), V = this.view.positionToValue(a.x, a.y), j = u ? Pn(x, x, V.x, V.y) : V;
        T[x * 2] = j.x, T[x * 2 + 1] = j.y, this.value.setRawValue(new Tt(...T), v);
      }
      onPointerDown_(a) {
        const u = a.data;
        if (!u.point)
          return;
        const v = this.value.rawValue, x = this.view.valueToPosition(v.x1, v.y1), T = ze(u.point.x, u.point.y, x.x, x.y), V = this.view.valueToPosition(v.x2, v.y2), j = ze(u.point.x, u.point.y, V.x, V.y);
        this.sel_.rawValue = T <= j ? 0 : 1, this.updateValue_(u.point, a.shiftKey, {
          forceEmit: false,
          last: false
        });
      }
      onPointerMove_(a) {
        const u = a.data;
        u.point && this.updateValue_(u.point, a.shiftKey, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(a) {
        const u = a.data;
        u.point && this.updateValue_(u.point, a.shiftKey, {
          forceEmit: true,
          last: true
        });
      }
      onKeyDown_(a) {
        ms(a.key) && a.preventDefault();
        const u = this.sel_.rawValue, v = this.value.rawValue.toObject();
        v[u * 2] += $t(this.baseStep_, Ti(a)), v[u * 2 + 1] += $t(this.baseStep_, _n(a)), this.value.setRawValue(new Tt(...v), {
          forceEmit: false,
          last: false
        });
      }
      onKeyUp_(a) {
        ms(a.key) && a.preventDefault();
        const u = $t(this.baseStep_, Ti(a)), v = $t(this.baseStep_, _n(a));
        u === 0 && v === 0 || this.value.setRawValue(this.value.rawValue, {
          forceEmit: true,
          last: true
        });
      }
    }
    class Ss {
      constructor(a, u) {
        this.value = u.value, this.viewProps = u.viewProps, this.view = new As(a, {
          viewProps: this.viewProps
        }), this.gc_ = new ut(a, {
          baseStep: u.axis.baseStep,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.graphElement.appendChild(this.gc_.view.element);
        const v = Object.assign(Object.assign({}, u.axis), { constraint: new Lt({ max: 1, min: 0 }) }), x = Object.assign(Object.assign({}, u.axis), { constraint: void 0 });
        this.tc_ = new Vt(a, {
          assembly: Ri,
          axes: [v, x, v, x],
          parser: gn,
          value: this.value,
          viewProps: this.viewProps
        }), this.view.textElement.appendChild(this.tc_.view.element);
      }
      get allFocusableElements() {
        return [
          this.gc_.view.element,
          ...this.tc_.view.textViews.map((a) => a.inputElement)
        ];
      }
      refresh() {
        this.gc_.refresh();
      }
    }
    class ni {
      constructor(a, u) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = u.value, this.viewProps = u.viewProps, this.foldable_ = Hn(u.expanded), this.view = new ks(a, {
          foldable: this.foldable_,
          pickerLayout: u.pickerLayout,
          viewProps: this.viewProps
        }), this.view.buttonElement.addEventListener("blur", this.onButtonBlur_), this.view.buttonElement.addEventListener("click", this.onButtonClick_), this.tc_ = new Gt(a, {
          parser: kr,
          props: K.fromObject({
            formatter: Tr
          }),
          value: this.value,
          viewProps: this.viewProps
        }), this.view.textElement.appendChild(this.tc_.view.element), this.popC_ = u.pickerLayout === "popup" ? new ie(a, {
          viewProps: this.viewProps
        }) : null;
        const v = new Ss(a, {
          axis: u.axis,
          value: this.value,
          viewProps: this.viewProps
        });
        v.allFocusableElements.forEach((x) => {
          x.addEventListener("blur", this.onPopupChildBlur_), x.addEventListener("keydown", this.onPopupChildKeydown_);
        }), this.pickerC_ = v, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), S2(this.popC_.shows, (x) => {
          x && v.refresh();
        }), Kt({
          primary: this.foldable_.value("expanded"),
          secondary: this.popC_.shows,
          forward: (x) => x.rawValue,
          backward: (x, T) => T.rawValue
        })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), $n(this.foldable_, this.view.pickerElement));
      }
      onButtonBlur_(a) {
        if (!this.popC_)
          return;
        const u = a.relatedTarget;
        (!u || !this.popC_.view.element.contains(u)) && (this.popC_.shows.rawValue = false);
      }
      onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.allFocusableElements[0].focus();
      }
      onPopupChildBlur_(a) {
        if (!this.popC_)
          return;
        const u = this.popC_.view.element, v = hn(a);
        v && u.contains(v) || v && v === this.view.buttonElement && !Qe(u.ownerDocument) || (this.popC_.shows.rawValue = false);
      }
      onPopupChildKeydown_(a) {
        this.popC_ && a.key === "Escape" && (this.popC_.shows.rawValue = false);
      }
    }
    function Di() {
      return new vr({
        assembly: Ri,
        components: [0, 1, 2, 3].map((d) => d % 2 === 0 ? new Lt({
          min: 0,
          max: 1
        }) : void 0)
      });
    }
    const Dt = {
      id: "cubic-bezier",
      type: "blade",
      css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
      accept(d) {
        const a = he, u = ee(d, {
          value: a.required.array(a.required.number),
          view: a.required.constant("cubicbezier"),
          expanded: a.optional.boolean,
          label: a.optional.string,
          picker: a.optional.custom((v) => v === "inline" || v === "popup" ? v : void 0)
        });
        return u ? { params: u } : null;
      },
      controller(d) {
        var a, u;
        const v = new Tt(...d.params.value), x = H(v, {
          constraint: Di(),
          equals: Tt.equals
        }), T = new ni(d.document, {
          axis: {
            baseStep: 0.1,
            textProps: K.fromObject({
              draggingScale: 0.01,
              formatter: Ie(2)
            })
          },
          expanded: (a = d.params.expanded) !== null && a !== void 0 ? a : false,
          pickerLayout: (u = d.params.picker) !== null && u !== void 0 ? u : "popup",
          value: x,
          viewProps: d.viewProps
        });
        return new St(d.document, {
          blade: d.blade,
          props: K.fromObject({
            label: d.params.label
          }),
          valueController: T
        });
      },
      api(d) {
        return !(d.controller instanceof St) || !(d.controller.valueController instanceof ni) ? null : new Ts(d.controller);
      }
    };
    class we extends s {
      begin() {
        this.controller_.valueController.begin();
      }
      end() {
        this.controller_.valueController.end();
      }
    }
    const Oi = 20;
    class Re {
      constructor() {
        this.start_ = null, this.duration_ = 0, this.fps_ = null, this.frameCount_ = 0, this.timestamps_ = [];
      }
      get duration() {
        return this.duration_;
      }
      get fps() {
        return this.fps_;
      }
      begin(a) {
        this.start_ = a.getTime();
      }
      calculateFps_(a) {
        if (this.timestamps_.length === 0)
          return null;
        const u = this.timestamps_[0];
        return 1e3 * (this.frameCount_ - u.frameCount) / (a - u.time);
      }
      compactTimestamps_() {
        if (this.timestamps_.length <= Oi)
          return;
        const a = this.timestamps_.length - Oi;
        this.timestamps_.splice(0, a);
        const u = this.timestamps_[0].frameCount;
        this.timestamps_.forEach((v) => {
          v.frameCount -= u;
        }), this.frameCount_ -= u;
      }
      end(a) {
        if (this.start_ === null)
          return;
        const u = a.getTime();
        this.duration_ = u - this.start_, this.start_ = null, this.fps_ = this.calculateFps_(u), this.timestamps_.push({
          frameCount: this.frameCount_,
          time: u
        }), ++this.frameCount_, this.compactTimestamps_();
      }
    }
    const Zt = y("fps");
    class Ye {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(Zt()), u.viewProps.bindClassModifiers(this.element), this.graphElement = a.createElement("div"), this.graphElement.classList.add(Zt("g")), this.element.appendChild(this.graphElement);
        const v = a.createElement("div");
        v.classList.add(Zt("l")), this.element.appendChild(v);
        const x = a.createElement("span");
        x.classList.add(Zt("v")), x.textContent = "--", v.appendChild(x), this.valueElement = x;
        const T = a.createElement("span");
        T.classList.add(Zt("u")), T.textContent = "FPS", v.appendChild(T);
      }
    }
    class Ni {
      constructor(a, u) {
        this.stopwatch_ = new Re(), this.onTick_ = this.onTick_.bind(this), this.ticker_ = u.ticker, this.ticker_.emitter.on("tick", this.onTick_), this.value_ = u.value, this.viewProps = u.viewProps, this.view = new Ye(a, {
          viewProps: this.viewProps
        }), this.graphC_ = new wr(a, {
          formatter: Ie(0),
          lineCount: u.lineCount,
          props: K.fromObject({
            maxValue: u.maxValue,
            minValue: u.minValue
          }),
          value: this.value_,
          viewProps: this.viewProps
        }), this.view.graphElement.appendChild(this.graphC_.view.element), this.viewProps.handleDispose(() => {
          this.graphC_.viewProps.set("disposed", true), this.ticker_.dispose();
        });
      }
      begin() {
        this.stopwatch_.begin(/* @__PURE__ */ new Date());
      }
      end() {
        this.stopwatch_.end(/* @__PURE__ */ new Date());
      }
      onTick_() {
        const a = this.stopwatch_.fps;
        if (a !== null) {
          const u = this.value_.rawValue;
          this.value_.rawValue = lr(u, a), this.view.valueElement.textContent = a.toFixed(0);
        }
      }
    }
    function Tn(d, a) {
      return a === 0 ? new Xn() : new mn(d, a ?? _r.monitor.defaultInterval);
    }
    const Bi = {
      id: "fpsgraph",
      type: "blade",
      accept(d) {
        const a = he, u = ee(d, {
          view: a.required.constant("fpsgraph"),
          interval: a.optional.number,
          label: a.optional.string,
          lineCount: a.optional.number,
          max: a.optional.number,
          min: a.optional.number
        });
        return u ? { params: u } : null;
      },
      controller(d) {
        var a, u, v, x;
        const T = (a = d.params.interval) !== null && a !== void 0 ? a : 500;
        return new ot(d.document, {
          blade: d.blade,
          props: K.fromObject({
            label: d.params.label
          }),
          valueController: new Ni(d.document, {
            lineCount: (u = d.params.lineCount) !== null && u !== void 0 ? u : 2,
            maxValue: (v = d.params.max) !== null && v !== void 0 ? v : 90,
            minValue: (x = d.params.min) !== null && x !== void 0 ? x : 0,
            ticker: Tn(d.document, T),
            value: hs(80),
            viewProps: d.viewProps
          })
        });
      },
      api(d) {
        return !(d.controller instanceof ot) || !(d.controller.valueController instanceof Ni) ? null : new we(d.controller);
      }
    };
    class qe {
      constructor(a, u) {
        this.min = a, this.max = u;
      }
      static isObject(a) {
        if (typeof a != "object" || a === null)
          return false;
        const u = a.min, v = a.max;
        return !(typeof u != "number" || typeof v != "number");
      }
      static equals(a, u) {
        return a.min === u.min && a.max === u.max;
      }
      get length() {
        return this.max - this.min;
      }
      toObject() {
        return {
          min: this.min,
          max: this.max
        };
      }
    }
    const Fi = {
      fromComponents: (d) => new qe(d[0], d[1]),
      toComponents: (d) => [d.min, d.max]
    };
    class kn {
      constructor(a) {
        this.edge = a;
      }
      constrain(a) {
        var u, v, x, T, V, j, re, Je;
        if (a.min <= a.max)
          return new qe((v = (u = this.edge) === null || u === void 0 ? void 0 : u.constrain(a.min)) !== null && v !== void 0 ? v : a.min, (T = (x = this.edge) === null || x === void 0 ? void 0 : x.constrain(a.max)) !== null && T !== void 0 ? T : a.max);
        const et = (a.min + a.max) / 2;
        return new qe((j = (V = this.edge) === null || V === void 0 ? void 0 : V.constrain(et)) !== null && j !== void 0 ? j : et, (Je = (re = this.edge) === null || re === void 0 ? void 0 : re.constrain(et)) !== null && Je !== void 0 ? Je : et);
      }
    }
    const zi = y("rsltxt");
    class ii {
      constructor(a, u) {
        this.sliderView_ = u.sliderView, this.textView_ = u.textView, this.element = a.createElement("div"), this.element.classList.add(zi());
        const v = a.createElement("div");
        v.classList.add(zi("s")), v.appendChild(this.sliderView_.element), this.element.appendChild(v);
        const x = a.createElement("div");
        x.classList.add(zi("t")), x.appendChild(this.textView_.element), this.element.appendChild(x);
      }
    }
    const st = y("rsl");
    class An {
      constructor(a, u) {
        this.onSliderPropsChange_ = this.onSliderPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.sliderProps_ = u.sliderProps, this.sliderProps_.emitter.on("change", this.onSliderPropsChange_), this.element = a.createElement("div"), this.element.classList.add(st()), u.viewProps.bindClassModifiers(this.element), this.value_ = u.value, this.value_.emitter.on("change", this.onValueChange_);
        const v = a.createElement("div");
        v.classList.add(st("t")), this.element.appendChild(v), this.trackElement = v;
        const x = a.createElement("div");
        x.classList.add(st("b")), v.appendChild(x), this.barElement = x;
        const T = ["min", "max"].map((V) => {
          const j = a.createElement("div");
          return j.classList.add(st("k"), st("k", V)), v.appendChild(j), j;
        });
        this.knobElements = [T[0], T[1]], this.update_();
      }
      valueToX_(a) {
        const u = this.sliderProps_.get("minValue"), v = this.sliderProps_.get("maxValue");
        return Xt(Le(a, u, v, 0, 1), 0, 1) * 100;
      }
      update_() {
        const a = this.value_.rawValue;
        a.length === 0 ? this.element.classList.add(st(void 0, "zero")) : this.element.classList.remove(st(void 0, "zero"));
        const u = [this.valueToX_(a.min), this.valueToX_(a.max)];
        this.barElement.style.left = `${u[0]}%`, this.barElement.style.right = `${100 - u[1]}%`, this.knobElements.forEach((v, x) => {
          v.style.left = `${u[x]}%`;
        });
      }
      onSliderPropsChange_() {
        this.update_();
      }
      onValueChange_() {
        this.update_();
      }
    }
    class ji {
      constructor(a, u) {
        this.grabbing_ = null, this.grabOffset_ = 0, this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.sliderProps = u.sliderProps, this.viewProps = u.viewProps, this.value = u.value, this.view = new An(a, {
          sliderProps: this.sliderProps,
          value: this.value,
          viewProps: u.viewProps
        });
        const v = new Wn(this.view.trackElement);
        v.emitter.on("down", this.onPointerDown_), v.emitter.on("move", this.onPointerMove_), v.emitter.on("up", this.onPointerUp_);
      }
      ofs_() {
        return this.grabbing_ === "min" ? this.view.knobElements[0].getBoundingClientRect().width / 2 : this.grabbing_ === "max" ? -this.view.knobElements[1].getBoundingClientRect().width / 2 : 0;
      }
      valueFromData_(a) {
        if (!a.point)
          return null;
        const u = (a.point.x + this.ofs_()) / a.bounds.width, v = this.sliderProps.get("minValue"), x = this.sliderProps.get("maxValue");
        return Le(u, 0, 1, v, x);
      }
      onPointerDown_(a) {
        if (!a.data.point)
          return;
        const u = a.data.point.x / a.data.bounds.width, v = this.value.rawValue, x = this.sliderProps.get("minValue"), T = this.sliderProps.get("maxValue"), V = Le(v.min, x, T, 0, 1), j = Le(v.max, x, T, 0, 1);
        Math.abs(j - u) <= 0.025 ? this.grabbing_ = "max" : Math.abs(V - u) <= 0.025 ? this.grabbing_ = "min" : u >= V && u <= j ? (this.grabbing_ = "length", this.grabOffset_ = Le(u - V, 0, 1, 0, T - x)) : u < V ? (this.grabbing_ = "min", this.onPointerMove_(a)) : u > j && (this.grabbing_ = "max", this.onPointerMove_(a));
      }
      applyPointToValue_(a, u) {
        const v = this.valueFromData_(a);
        if (v === null)
          return;
        const x = this.sliderProps.get("minValue"), T = this.sliderProps.get("maxValue");
        if (this.grabbing_ === "min")
          this.value.setRawValue(new qe(v, this.value.rawValue.max), u);
        else if (this.grabbing_ === "max")
          this.value.setRawValue(new qe(this.value.rawValue.min, v), u);
        else if (this.grabbing_ === "length") {
          const V = this.value.rawValue.length;
          let j = v - this.grabOffset_, re = j + V;
          j < x ? (j = x, re = x + V) : re > T && (j = T - V, re = T), this.value.setRawValue(new qe(j, re), u);
        }
      }
      onPointerMove_(a) {
        this.applyPointToValue_(a.data, {
          forceEmit: false,
          last: false
        });
      }
      onPointerUp_(a) {
        this.applyPointToValue_(a.data, {
          forceEmit: true,
          last: true
        }), this.grabbing_ = null;
      }
    }
    class wt {
      constructor(a, u) {
        this.value = u.value, this.viewProps = u.viewProps, this.sc_ = new ji(a, u);
        const v = {
          baseStep: u.baseStep,
          constraint: u.constraint,
          textProps: K.fromObject({
            draggingScale: u.draggingScale,
            formatter: u.formatter
          })
        };
        this.tc_ = new Vt(a, {
          assembly: Fi,
          axes: [v, v],
          parser: u.parser,
          value: this.value,
          viewProps: u.viewProps
        }), this.view = new ii(a, {
          sliderView: this.sc_.view,
          textView: this.tc_.view
        });
      }
      get textController() {
        return this.tc_;
      }
    }
    function Ls(d) {
      return qe.isObject(d) ? new qe(d.min, d.max) : new qe(0, 0);
    }
    function Ui(d, a) {
      d.writeProperty("max", a.max), d.writeProperty("min", a.min);
    }
    function Mr(d) {
      const a = [], u = En(d);
      u && a.push(u);
      const v = gr(d);
      return v && a.push(v), new kn(new Yn(a));
    }
    const si = {
      id: "input-interval",
      type: "input",
      css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
      accept: (d, a) => {
        if (!qe.isObject(d))
          return null;
        const u = he, v = ee(a, {
          format: u.optional.function,
          max: u.optional.number,
          min: u.optional.number,
          step: u.optional.number
        });
        return v ? {
          initialValue: new qe(d.min, d.max),
          params: v
        } : null;
      },
      binding: {
        reader: (d) => Ls,
        constraint: (d) => Mr(d.params),
        equals: qe.equals,
        writer: (d) => Ui
      },
      controller(d) {
        var a;
        const u = d.value, v = d.constraint;
        if (!(v instanceof kn))
          throw g.shouldNeverHappen();
        const x = (u.rawValue.min + u.rawValue.max) / 2, T = (a = d.params.format) !== null && a !== void 0 ? a : Ie(yn(v.edge, x)), V = v.edge && Pt(v.edge, gt);
        if (V)
          return new wt(d.document, {
            baseStep: Ai(v.edge),
            constraint: v.edge,
            draggingScale: Jn(v.edge, x),
            formatter: T,
            parser: gn,
            sliderProps: new K({
              maxValue: V.values.value("max"),
              minValue: V.values.value("min")
            }),
            value: u,
            viewProps: d.viewProps
          });
        const j = {
          baseStep: Ai(v.edge),
          constraint: v.edge,
          textProps: K.fromObject({
            draggingScale: x,
            formatter: T
          })
        };
        return new Vt(d.document, {
          assembly: Fi,
          axes: [j, j],
          parser: gn,
          value: u,
          viewProps: d.viewProps
        });
      }
    };
    class Ot {
      constructor(a) {
        this.controller_ = a;
      }
      get disabled() {
        return this.controller_.viewProps.get("disabled");
      }
      set disabled(a) {
        this.controller_.viewProps.set("disabled", a);
      }
      get title() {
        var a;
        return (a = this.controller_.props.get("title")) !== null && a !== void 0 ? a : "";
      }
      set title(a) {
        this.controller_.props.set("title", a);
      }
    }
    class Nt extends c {
      constructor(a, u, v, x, T) {
        super(a, x, T), this.cell = u, this.index = v;
      }
    }
    class Mn extends s {
      constructor(a) {
        super(a), this.cellToApiMap_ = /* @__PURE__ */ new Map(), this.controller_.valueController.cellControllers.forEach((v) => {
          const x = new Ot(v);
          this.cellToApiMap_.set(v, x);
        });
      }
      get value() {
        return this.controller_.value;
      }
      cell(a, u) {
        const v = this.controller_.valueController, x = v.cellControllers[u * v.size[0] + a];
        return this.cellToApiMap_.get(x);
      }
      on(a, u) {
        const v = u.bind(this);
        this.controller_.value.emitter.on(a, (x) => {
          const T = this.controller_.valueController, V = T.findCellByValue(x.rawValue);
          if (!V)
            return;
          const j = this.cellToApiMap_.get(V);
          if (!j)
            return;
          const re = T.cellControllers.indexOf(V);
          v(new Nt(this, j, [re % T.size[0], Math.floor(re / T.size[0])], x.rawValue, void 0));
        });
      }
    }
    const Sn = y("rad");
    class Rs {
      constructor(a, u) {
        this.element = a.createElement("div"), this.element.classList.add(Sn()), u.viewProps.bindClassModifiers(this.element);
        const v = a.createElement("label");
        v.classList.add(Sn("l")), this.element.appendChild(v);
        const x = a.createElement("input");
        x.classList.add(Sn("i")), x.name = u.name, x.type = "radio", u.viewProps.bindDisabled(x), v.appendChild(x), this.inputElement = x;
        const T = a.createElement("div");
        T.classList.add(Sn("b")), v.appendChild(T);
        const V = a.createElement("div");
        V.classList.add(Sn("t")), T.appendChild(V), R(u.props, "title", (j) => {
          V.textContent = j;
        });
      }
    }
    class Vs {
      constructor(a, u) {
        this.props = u.props, this.viewProps = u.viewProps, this.view = new Rs(a, {
          name: u.name,
          props: this.props,
          viewProps: this.viewProps
        });
      }
    }
    class ri {
      constructor(a, u) {
        this.cellCs_ = [], this.cellValues_ = [], this.onCellInputChange_ = this.onCellInputChange_.bind(this), this.size = u.size;
        const [v, x] = this.size;
        for (let T = 0; T < x; T++)
          for (let V = 0; V < v; V++) {
            const j = new Vs(a, {
              name: u.groupName,
              props: K.fromObject(Object.assign({}, u.cellConfig(V, T))),
              viewProps: ge.create()
            });
            this.cellCs_.push(j), this.cellValues_.push(u.cellConfig(V, T).value);
          }
        this.value = u.value, S2(this.value, (T) => {
          const V = this.findCellByValue(T);
          V && (V.view.inputElement.checked = true);
        }), this.viewProps = ge.create(), this.view = new Ct2(a, {
          viewProps: this.viewProps,
          viewName: "radgrid"
        }), this.view.element.style.gridTemplateColumns = `repeat(${v}, 1fr)`, this.cellCs_.forEach((T) => {
          T.view.inputElement.addEventListener("change", this.onCellInputChange_), this.view.element.appendChild(T.view.element);
        });
      }
      get cellControllers() {
        return this.cellCs_;
      }
      findCellByValue(a) {
        const u = this.cellValues_.findIndex((v) => v === a);
        return u < 0 ? null : this.cellCs_[u];
      }
      onCellInputChange_(a) {
        const u = a.currentTarget, v = this.cellCs_.findIndex((x) => x.view.inputElement === u);
        v < 0 || (this.value.rawValue = this.cellValues_[v]);
      }
    }
    const Bt = function() {
      return {
        id: "radiogrid",
        type: "blade",
        accept(d) {
          const a = he, u = ee(d, {
            cells: a.required.function,
            groupName: a.required.string,
            size: a.required.array(a.required.number),
            value: a.required.raw,
            view: a.required.constant("radiogrid"),
            label: a.optional.string
          });
          return u ? { params: u } : null;
        },
        controller(d) {
          return new St(d.document, {
            blade: d.blade,
            props: K.fromObject({
              label: d.params.label
            }),
            valueController: new ri(d.document, {
              groupName: d.params.groupName,
              cellConfig: d.params.cells,
              size: d.params.size,
              value: H(d.params.value)
            })
          });
        },
        api(d) {
          return !(d.controller instanceof St) || !(d.controller.valueController instanceof ri) ? null : new Mn(d.controller);
        }
      };
    }();
    function Gi(d) {
      return {
        id: "input-radiogrid",
        type: "input",
        accept(a, u) {
          if (!d.isType(a))
            return null;
          const v = he, x = ee(u, {
            cells: v.required.function,
            groupName: v.required.string,
            size: v.required.array(v.required.number),
            view: v.required.constant("radiogrid")
          });
          return x ? {
            initialValue: a,
            params: x
          } : null;
        },
        binding: d.binding,
        controller: (a) => new ri(a.document, {
          cellConfig: a.params.cells,
          groupName: a.params.groupName,
          size: a.params.size,
          value: a.value
        })
      };
    }
    const Sr = Gi({
      isType: (d) => typeof d == "number",
      binding: {
        reader: (d) => or,
        writer: (d) => it
      }
    }), Lr = Gi({
      isType: (d) => typeof d == "string",
      binding: {
        reader: (d) => ps,
        writer: (d) => it
      }
    }), Rr = Gi({
      isType: (d) => typeof d == "boolean",
      binding: {
        reader: (d) => fn,
        writer: (d) => it
      }
    }), Is = [
      xr,
      Dt,
      Bi,
      si,
      Bt,
      Rr,
      Sr,
      Lr
    ];
    r.ButtonCellApi = Cs, r.ButtonGridApi = Ps, r.ButtonGridController = Si, r.CubicBezier = Tt, r.CubicBezierApi = Ts, r.CubicBezierAssembly = Ri, r.CubicBezierController = ni, r.CubicBezierGraphController = ut, r.CubicBezierGraphView = De, r.CubicBezierPickerController = Ss, r.CubicBezierPickerView = As, r.CubicBezierPreviewView = Qt, r.CubicBezierView = ks, r.FpsGraphBladeApi = we, r.FpsGraphController = Ni, r.FpsView = Ye, r.Fpswatch = Re, r.Interval = qe, r.IntervalAssembly = Fi, r.IntervalConstraint = kn, r.RadioCellApi = Ot, r.RadioController = Vs, r.RadioGridApi = Mn, r.RadioGridController = ri, r.RadioView = Rs, r.RangeSliderController = ji, r.RangeSliderTextController = wt, r.RangeSliderTextView = ii, r.RangeSliderView = An, r.TpRadioGridChangeEvent = Nt, r.plugins = Is, Object.defineProperty(r, "__esModule", { value: true });
  });
})(wo, wo.exports);
var ol = wo.exports;
var jh = wh(ol);
var Uh = qu({
  __proto__: null,
  default: jh
}, [ol]);
var On;
var js;
var Bd = (f = "tres-container") => {
  On || (On = new zh.Pane({
    container: document.querySelector(f) || void 0
  }), On.registerPlugin(Uh), js = On.addBlade({
    view: "fpsgraph",
    label: "fpsgraph"
  }));
  function i() {
    On && On.dispose();
  }
  return onMounted(() => {
    const { onBeforeLoop: r, onAfterLoop: s, resume: o } = Ce();
    o(), r(() => js.begin()), s(() => js.end());
  }), onUnmounted(() => {
    i();
  }), { pane: On, fpsGraph: js, disposeTweakPane: i };
};
function Fd(f, i) {
  const r = ref(i), s = new AnimationMixer(r.value), o = shallowReactive({});
  f.forEach((p) => {
    const h = s.clipAction(p, r.value);
    o[p.name] = h;
  });
  const { onLoop: c } = Ce();
  return c(({ delta: p }) => {
    s.update(p);
  }), {
    actions: o,
    mixer: s
  };
}
var Us = null;
function Gh(f, i) {
  return (r) => {
    i && i(r), f.draco && (Us || (Us = new xh()), Us.setDecoderPath(f.decoderPath || "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"), r.setDRACOLoader(Us));
  };
}
async function Hh(f, i = {
  draco: false
}, r) {
  return await Ct(wp, f, Gh(i, r));
}
var zd = defineComponent({
  name: "GLTFModel",
  props: ["path", "draco", "decoderPath"],
  async setup(f, { expose: i }) {
    const { state: r } = Et(), s = ref();
    i({ model: s });
    const { scene: o } = await Hh(f.path, { draco: f.draco, decoderPath: f.decoderPath });
    return s.value = o, r.scene && r.scene.add(o), () => {
    };
  }
});
async function Kh(f) {
  return await Ct(rh, f);
}
var jd = defineComponent({
  name: "FBXModel",
  props: ["path"],
  async setup(f, { expose: i }) {
    const { state: r } = Et();
    let s = null;
    function o() {
      return s;
    }
    return i({ getModel: o }), s = await Kh(f.path), r.scene && s.isObject3D && r.scene.add(s), () => {
    };
  }
});
var $h = ["position", "a-scale"];
var Ud = defineComponent({
  __name: "Stars",
  props: {
    size: { default: 0.1 },
    sizeAttenuation: { type: Boolean, default: true },
    transparent: { type: Boolean, default: true },
    alphaTest: { default: 0.01 },
    count: { default: 5e3 },
    depth: { default: 50 },
    radius: { default: 100 },
    factor: { default: 4 },
    alphaMap: { default: null }
  },
  setup(f, { expose: i }) {
    const r = f;
    let s = r.radius + r.depth;
    const o = r.depth / r.count, c = [], p = Array.from({ length: r.count }, () => (0.5 + 0.5 * Math.random()) * r.factor), h = (y) => new Vector3().setFromSpherical(new Spherical(y, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
    for (let y = 0; y < r.count; y++)
      s -= o * Math.random(), c.push(...h(s).toArray());
    const m = new Float32Array(c), g = new Float32Array(p), _ = computed(() => ({
      size: r.size,
      sizeAttenuation: r.sizeAttenuation,
      transparent: r.transparent,
      alphaTest: r.alphaTest,
      alphaMap: r.alphaMap
    })), w = shallowRef();
    return i({
      value: w
    }), (y, C) => (openBlock(), createElementBlock("TresPoints", {
      ref_key: "starsRef",
      ref: w
    }, [
      createBaseVNode("TresBufferGeometry", {
        position: [unref(m), 3],
        "a-scale": [unref(g), 1]
      }, null, 8, $h),
      createBaseVNode("TresPointsMaterial", normalizeProps(guardReactiveProps(unref(_))), null, 16)
    ], 512));
  }
});
var Xh = ["args", "center"];
var Gd = defineComponent({
  __name: "Text3D",
  props: {
    font: null,
    text: null,
    size: { default: 0.5 },
    height: { default: 0.2 },
    curveSegments: { default: 5 },
    bevelEnabled: { type: Boolean, default: true },
    bevelThickness: { default: 0.05 },
    bevelSize: { default: 0.02 },
    bevelOffset: { default: 0 },
    bevelSegments: { default: 4 },
    center: { type: Boolean, default: false },
    needUpdates: { type: Boolean, default: false }
  },
  async setup(f, { expose: i }) {
    let r, s;
    const o = f, { extend: c } = Et();
    c({ TextGeometry: wa });
    const p = new bh(), h = useSlots(), m = computed(() => {
      var y;
      return o.text ? o.text : h.default ? (y = h.default()[0].children) == null ? void 0 : y.trim() : o.needUpdates ? "" : "TresJS";
    }), g = shallowRef();
    i({
      value: g
    });
    const _ = ([r, s] = withAsyncContext(() => new Promise((y, C) => {
      try {
        typeof o.font == "string" ? p.load(o.font, (L) => {
          y(L);
        }) : y(o.font);
      } catch (L) {
        C(console.error("cientos", L));
      }
    })), r = await r, s(), r), w = computed(() => ({
      font: _,
      size: o.size,
      height: o.height,
      curveSegments: o.curveSegments,
      bevelEnabled: o.bevelEnabled,
      bevelThickness: o.bevelThickness,
      bevelSize: o.bevelSize,
      bevelOffset: o.bevelOffset,
      bevelSegments: o.bevelSegments
    }));
    return watchEffect(() => {
      g.value && o.needUpdates && (g.value.geometry.dispose(), g.value.geometry = new wa(m.value, w.value), o.center && g.value.geometry.center());
    }), (y, C) => unref(_) ? (openBlock(), createElementBlock("TresMesh", {
      key: 0,
      ref_key: "text3DRef",
      ref: g
    }, [
      unref(m) ? (openBlock(), createElementBlock("TresTextGeometry", {
        key: 0,
        args: [unref(m), unref(w)],
        center: f.center
      }, null, 8, Xh)) : createCommentVNode("", true),
      renderSlot(y.$slots, "default")
    ], 512)) : createCommentVNode("", true);
  }
});
var Yh = ["rotation"];
var qh = ["args"];
var Qh = ["color"];
var Hd = defineComponent({
  __name: "Plane",
  props: {
    args: { default: () => [1, 1] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "planeRef",
      ref: r,
      rotation: [-Math.PI / 2, 0, 0]
    }, s.$attrs), [
      createBaseVNode("TresPlaneGeometry", { args: f.args }, null, 8, qh),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, Qh)
      ])
    ], 16, Yh));
  }
});
var Zh = ["args"];
var Wh = ["color"];
var Kd = defineComponent({
  __name: "Box",
  props: {
    args: { default: () => [1, 1, 1] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "boxRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresBoxGeometry", { args: f.args }, null, 8, Zh),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, Wh)
      ])
    ], 16));
  }
});
var Jh = ["args"];
var ed = ["color"];
var $d = defineComponent({
  __name: "Sphere",
  props: {
    args: { default: () => [2, 32, 16] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "sphereRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresSphereGeometry", { args: f.args }, null, 8, Jh),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, ed)
      ])
    ], 16));
  }
});
var td = ["args"];
var nd = ["color"];
var Xd = defineComponent({
  __name: "Torus",
  props: {
    args: { default: () => [1, 1, 16, 80] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "torusRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresTorusGeometry", { args: f.args }, null, 8, td),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, nd)
      ])
    ], 16));
  }
});
var id = ["args"];
var sd = ["color"];
var Yd = defineComponent({
  __name: "TorusKnot",
  props: {
    args: { default: () => [1, 0.4, 64, 8] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "torusKnotRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresTorusKnotGeometry", { args: f.args }, null, 8, id),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, sd)
      ])
    ], 16));
  }
});
var rd = ["args"];
var od = ["color"];
var qd = defineComponent({
  __name: "Circle",
  props: {
    args: { default: () => [1, 32, 0, Math.PI * 2] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "circleRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresCircleGeometry", { args: f.args }, null, 8, rd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, od)
      ])
    ], 16));
  }
});
var ad = ["args"];
var ld = ["color"];
var Qd = defineComponent({
  __name: "Cone",
  props: {
    args: { default: () => [1, 1, 12, false, 0, Math.PI * 2] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "coneRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresConeGeometry", { args: f.args }, null, 8, ad),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, ld)
      ])
    ], 16));
  }
});
var cd = ["args"];
var ud = ["color"];
var Zd = defineComponent({
  __name: "Tube",
  props: {
    args: { default: () => [
      new QuadraticBezierCurve3(new Vector3(-1, 0, 0), new Vector3(0, 1, 0), new Vector3(1, 0, 0)),
      20,
      0.2,
      8,
      false
    ] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "tubeRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresTubeGeometry", { args: f.args }, null, 8, cd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, ud)
      ])
    ], 16));
  }
});
var pd = ["args"];
var hd = ["color"];
var Wd = defineComponent({
  __name: "Ring",
  props: {
    args: { default: () => [0.5, 1, 32] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "ringRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresRingGeometry", { args: f.args }, null, 8, pd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, hd)
      ])
    ], 16));
  }
});
var dd = ["rotation"];
var md = ["args"];
var fd = ["color"];
var Jd = defineComponent({
  __name: "Tetrahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "tetrahedronRef",
      ref: r,
      rotation: [-Math.PI / 2, 0, 0]
    }, s.$attrs), [
      createBaseVNode("TresTetrahedronGeometry", { args: f.args }, null, 8, md),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, fd)
      ])
    ], 16, dd));
  }
});
var vd = ["args"];
var bd = ["color"];
var em = defineComponent({
  __name: "Icosahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "icosahedronRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresIcosahedronGeometry", { args: f.args }, null, 8, vd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, bd)
      ])
    ], 16));
  }
});
var gd = ["args"];
var _d = ["color"];
var tm = defineComponent({
  __name: "Octahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "octahedronRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresOctahedronGeometry", { args: f.args }, null, 8, gd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, _d)
      ])
    ], 16));
  }
});
var wd = ["args"];
var yd = ["color"];
var nm = defineComponent({
  __name: "Dodecahedron",
  props: {
    args: { default: () => [1, 0] },
    color: { default: "0xffffff" }
  },
  setup(f, { expose: i }) {
    const r = shallowRef();
    return i({
      value: r
    }), (s, o) => (openBlock(), createElementBlock("TresMesh", mergeProps({
      ref_key: "dodecahedronRef",
      ref: r
    }, s.$attrs), [
      createBaseVNode("TresDodecahedronGeometry", { args: f.args }, null, 8, wd),
      renderSlot(s.$slots, "default", {}, () => [
        createBaseVNode("TresMeshBasicMaterial", { color: f.color }, null, 8, yd)
      ])
    ], 16));
  }
});
var ao = {
  sunset: "venice/venice_sunset_4k.hdr"
};
async function xd({
  files: f = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"],
  blur: i = 0,
  background: r = false,
  path: s = "/",
  preset: o = void 0,
  colorSpace: c = void 0
}) {
  const { state: p } = Et();
  if (o) {
    if (!(o in ao))
      throw new Error("Preset must be one of: " + Object.keys(ao).join(", "));
    f = ao[o], s = "https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";
  }
  const h = Array.isArray(f), g = await Ct(
    h ? CubeTextureLoader : yh,
    h ? [f] : f,
    (w) => {
      s && w.setPath(s), c && (w.colorSpace = c);
    }
  ), _ = h ? g[0] : g;
  return _ && (_.mapping = h ? CubeReflectionMapping : EquirectangularReflectionMapping, _.colorSpace = c ?? h ? SRGBColorSpace : LinearEncoding), p.scene && (p.scene.environment = _, r !== void 0 && (p.scene.background = _), i && (p.scene.backgroundBlurriness = i | 0)), _;
}
var im = defineComponent({
  name: "Environment",
  props: ["background", "blur", "files", "encoding", "path", "preset"],
  async setup(f, { expose: i }) {
    let r = null;
    return i({ getTexture: () => r }), r = await xd(f), () => {
    };
  }
});
var Ed = ["position"];
var Cd = ["position"];
var Pd = ["scale"];
var Td = ["map", "map-encoding", "depth-test", "color", "opacity"];
var sm = defineComponent({
  __name: "Smoke",
  props: {
    color: { default: "#ffffff" },
    opacity: { default: 0.5 },
    speed: { default: 0.4 },
    width: { default: 10 },
    depth: { default: 1.5 },
    segments: { default: 20 },
    texture: { default: "https://raw.githubusercontent.com/Tresjs/assets/main/textures/clouds/defaultCloud.png" },
    depthTest: { type: Boolean, default: true }
  },
  async setup(f, { expose: i }) {
    let r, s;
    const o = f, c = shallowRef(), p = shallowRef();
    i({
      value: c
    });
    const h = [...new Array(o.segments)].map((C, L) => ({
      x: o.width / 2 - Math.random() * o.width,
      y: o.width / 2 - Math.random() * o.width,
      scale: 0.4 + Math.sin((L + 1) / o.segments * Math.PI) * ((0.2 + Math.random()) * 10),
      density: Math.max(0.2, Math.random()),
      rotation: Math.max(2e-3, 5e-3 * Math.random()) * o.speed
    })), m = (C, L) => C / 6 * L * o.opacity, { map: g } = ([r, s] = withAsyncContext(() => Rt({ map: o.texture })), r = await r, s(), r), { state: _ } = Et(), w = computed(() => {
      var C;
      return (C = _.renderer) == null ? void 0 : C.outputColorSpace;
    }), { onLoop: y } = Ce();
    return y(() => {
      var C, L;
      c.value && _.camera && p.value && ((C = p.value) == null || C.children.forEach((S2, R) => {
        S2.rotation.z += h[R].rotation;
      }), c.value.lookAt((L = _.camera) == null ? void 0 : L.position));
    }), (C, L) => (openBlock(), createElementBlock("TresGroup", mergeProps({
      ref_key: "smokeRef",
      ref: c
    }, C.$attrs), [
      createBaseVNode("TresGroup", {
        ref_key: "groupRef",
        ref: p,
        position: [0, 0, f.segments / 2 * f.depth]
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(h), ({ scale: S2, x: R, y: O, density: N }, I) => (openBlock(), createElementBlock("TresMesh", {
          key: I,
          position: [R, O, -I * f.depth]
        }, [
          createBaseVNode("TresPlaneGeometry", {
            scale: [S2, S2, S2],
            rotation: [0, 0, 0]
          }, null, 8, Pd),
          createBaseVNode("TresMeshStandardMaterial", {
            map: unref(g),
            "map-encoding": unref(w),
            "depth-test": f.depthTest,
            color: f.color,
            "depth-write": false,
            transparent: "",
            opacity: m(S2, N)
          }, null, 8, Td)
        ], 8, Cd))), 128))
      ], 8, Ed)
    ], 16));
  }
});
var rm = defineComponent({
  __name: "Levioso",
  props: {
    speed: { default: 1 },
    rotationFactor: { default: 1 },
    floatFactor: { default: 1 },
    range: { default: () => [-0.1, 0.1] }
  },
  setup(f, { expose: i }) {
    const r = f, s = shallowRef();
    i({
      value: s
    });
    const { onLoop: o } = Ce(), c = ref(Math.random() * 1e4);
    return o(({ elapsed: p }) => {
      var g, _;
      if (!s.value)
        return;
      const h = c.value + p;
      s.value.rotation.x = Math.cos(h / 4 * r.speed) / 8 * r.rotationFactor, s.value.rotation.y = Math.sin(h / 4 * r.speed) / 8 * r.rotationFactor, s.value.rotation.z = Math.sin(h / 4 * r.speed) / 20 * r.rotationFactor;
      let m = Math.sin(h / 4 * r.speed) / 10;
      m = MathUtils.mapLinear(m, -0.1, 0.1, ((g = r.range) == null ? void 0 : g[0]) ?? -0.1, ((_ = r.range) == null ? void 0 : _[1]) ?? 0.1), s.value.position.y = m * r.floatFactor;
    }), (p, h) => (openBlock(), createElementBlock("TresGroup", mergeProps(p.$attrs, {
      ref_key: "groupRef",
      ref: s
    }), [
      renderSlot(p.$slots, "default")
    ], 16));
  }
});
var kd = class extends MeshStandardMaterial {
  constructor(r = {}) {
    super(r);
    Qr(this, "_time");
    Qr(this, "_factor");
    this.setValues(r), this._time = { value: 0 }, this._factor = { value: 1 };
  }
  onBeforeCompile(r) {
    r.uniforms || (r.uniforms = {}), r.uniforms.time = this._time, r.uniforms.factor = this._factor, r.vertexShader = `
        uniform float time;
        uniform float factor;
        ${r.vertexShader}
      `, r.vertexShader = r.vertexShader.replace(
      "#include <begin_vertex>",
      `float theta = sin( time + position.y ) / 2.0 * factor;
          float c = cos( theta );
          float s = sin( theta );
          mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
          vec3 transformed = vec3( position ) * m;
          vNormal = vNormal * m;`
    );
  }
  get time() {
    return this._time.value;
  }
  set time(r) {
    this._time.value = r;
  }
  get factor() {
    return this._factor.value;
  }
  set factor(r) {
    this._factor.value = r;
  }
};
var Ad = ["factor"];
var om = defineComponent({
  __name: "index",
  props: {
    speed: { default: 1 },
    factor: { default: 1 }
  },
  setup(f) {
    const i = f, r = shallowRef(), { extend: s } = Et();
    s({ MeshWobbleMaterial: kd });
    const { onLoop: o } = Ce();
    return o(({ elapsed: c }) => {
      r.value && (r.value.time = c * (i == null ? void 0 : i.speed));
    }), (c, p) => (openBlock(), createElementBlock("TresMeshWobbleMaterial", mergeProps({
      ref_key: "materialRef",
      ref: r,
      factor: f.factor
    }, c.$attrs), null, 16, Ad));
  }
});
export {
  Kd as Box,
  qd as Circle,
  Qd as Cone,
  nm as Dodecahedron,
  im as Environment,
  jd as FBXModel,
  zd as GLTFModel,
  em as Icosahedron,
  rm as Levioso,
  Id as MapControls,
  om as MeshWobbleMaterial,
  tm as Octahedron,
  Vd as OrbitControls,
  Nd as PamCameraMouse,
  Hd as Plane,
  Dd as PointerLockControls,
  Wd as Ring,
  sm as Smoke,
  $d as Sphere,
  Ud as Stars,
  Jd as Tetrahedron,
  Gd as Text3D,
  Xd as Torus,
  Yd as TorusKnot,
  Od as TransformControls,
  Zd as Tube,
  Fd as useAnimations,
  xd as useEnvironment,
  Kh as useFBX,
  Hh as useGLTF,
  Fh as usePamCameraMouse,
  Bd as useTweakPane
};
/*! Bundled license information:

@tresjs/cientos/dist/trescientos.js:
  (*! Tweakpane 3.1.9 (c) 2016 cocopon, licensed under the MIT license. *)
*/
//# sourceMappingURL=@tresjs_cientos.js.map

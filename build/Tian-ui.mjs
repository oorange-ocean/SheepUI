import { defineComponent as E, computed as A, createVNode as d, toRefs as L, Fragment as X, reactive as Tt, ref as T, unref as kt, inject as V, mergeProps as K, onMounted as Ae, provide as q, createTextVNode as G, watch as ee, onUnmounted as ct, nextTick as ut, withDirectives as xe, vModelCheckbox as Se } from "vue";
const At = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  plain: {
    type: Boolean,
    default: !1
  },
  circle: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  iconSvg: {
    type: String,
    default: ""
  }
}, Ft = {
  name: {
    type: String,
    default: ""
  },
  prefix: {
    type: String,
    default: "icon"
  },
  size: {
    type: [String, Number],
    default: "inherit"
  },
  color: {
    type: String,
    default: "inherit"
  },
  component: {
    type: String,
    default: null
  }
};
window._iconfont_svg_string_1281272 = '<svg><symbol id="icon-angular" viewBox="0 0 1024 1024"><path d="M512 125.952L139.552 261.376 206.4 762.88 512 932.64l305.6-169.824 66.848-501.44L512 125.952z m0 68.096l302.176 109.888-55.808 418.56L512 859.36l-246.4-136.864-55.776-418.56L512 194.048zM512 256l-192 448h64l41.28-96h173.44L640 704h64L512 256z m0 145.6l0.64 1.92 22.4 56L571.2 544h-118.4l36.16-84.48 22.4-56 0.64-1.92z"  ></path></symbol><symbol id="icon-react" viewBox="0 0 1024 1024"><path d="M836.8 353.6c-11.2-3.2-20.8-6.4-32-9.6 1.6-8 3.2-14.4 4.8-22.4 24-118.4 8-214.4-46.4-246.4-52.8-30.4-139.2 1.6-225.6 76.8-8 8-17.6 14.4-25.6 22.4-4.8-4.8-11.2-9.6-16-16-91.2-81.6-182.4-115.2-236.8-83.2-52.8 30.4-68.8 120-46.4 233.6 1.6 11.2 4.8 22.4 8 33.6-12.8 3.2-25.6 8-36.8 11.2C76.8 392 0 451.2 0 510.4c0 62.4 81.6 124.8 192 163.2 9.6 3.2 17.6 6.4 27.2 8-3.2 12.8-6.4 24-8 36.8-20.8 110.4-4.8 198.4 48 228.8 54.4 32 145.6 0 233.6-78.4 6.4-6.4 14.4-12.8 20.8-19.2 8 8 17.6 16 27.2 24 84.8 73.6 169.6 104 222.4 73.6 54.4-32 72-126.4 48-241.6-1.6-8-3.2-17.6-6.4-27.2 6.4-1.6 12.8-3.2 19.2-6.4C940.8 636.8 1024 574.4 1024 510.4c0-59.2-78.4-118.4-187.2-156.8zM566.4 184c75.2-65.6 144-89.6 176-72 33.6 19.2 46.4 97.6 25.6 201.6-1.6 6.4-3.2 12.8-4.8 20.8-44.8-9.6-89.6-17.6-134.4-20.8-25.6-36.8-54.4-73.6-84.8-105.6 6.4-9.6 14.4-16 22.4-24zM334.4 614.4c9.6 17.6 20.8 35.2 32 51.2-32-3.2-62.4-8-92.8-14.4 8-28.8 19.2-59.2 32-89.6 9.6 19.2 19.2 36.8 28.8 52.8z m-60.8-240c28.8-6.4 59.2-11.2 91.2-16-11.2 16-20.8 33.6-30.4 51.2-9.6 17.6-19.2 33.6-28.8 52.8-12.8-30.4-22.4-59.2-32-88z m54.4 137.6c12.8-27.2 27.2-54.4 43.2-81.6s32-52.8 48-78.4c30.4-1.6 60.8-3.2 91.2-3.2s62.4 1.6 91.2 3.2c17.6 25.6 33.6 51.2 48 76.8s30.4 52.8 43.2 81.6c-12.8 27.2-27.2 54.4-43.2 81.6-16 27.2-32 52.8-48 78.4-30.4 1.6-60.8 3.2-92.8 3.2s-62.4-1.6-91.2-3.2C400 644.8 384 619.2 368 592s-25.6-52.8-40-80z m361.6 102.4l28.8-52.8c12.8 28.8 24 59.2 33.6 88-30.4 6.4-62.4 12.8-94.4 16 11.2-16 22.4-33.6 32-51.2z m28.8-153.6l-28.8-52.8c-9.6-17.6-20.8-33.6-30.4-49.6 32 4.8 62.4 9.6 91.2 16-8 30.4-19.2 59.2-32 86.4zM512 236.8c20.8 22.4 40 46.4 59.2 72-40-1.6-80-1.6-118.4 0 19.2-27.2 40-51.2 59.2-72zM280 113.6c33.6-19.2 108.8 8 187.2 78.4 4.8 4.8 9.6 9.6 16 14.4-30.4 33.6-59.2 68.8-86.4 105.6-44.8 4.8-89.6 11.2-134.4 20.8-3.2-9.6-4.8-20.8-6.4-30.4-19.2-97.6-6.4-169.6 24-188.8z m-48 528c-8-3.2-16-4.8-25.6-8-43.2-12.8-91.2-35.2-126.4-62.4-20.8-14.4-33.6-35.2-38.4-59.2 0-36.8 64-83.2 155.2-115.2 11.2-4.8 22.4-8 35.2-11.2 14.4 43.2 30.4 86.4 49.6 128-19.2 40-36.8 83.2-49.6 128zM464 836.8c-33.6 30.4-72 54.4-113.6 70.4-22.4 11.2-48 11.2-70.4 3.2-32-19.2-44.8-89.6-27.2-184 1.6-11.2 4.8-22.4 8-33.6 44.8 9.6 89.6 16 136 19.2 25.6 36.8 56 73.6 86.4 107.2-6.4 6.4-12.8 12.8-19.2 17.6z m49.6-48c-20.8-22.4-40-46.4-60.8-72 19.2 0 38.4 1.6 59.2 1.6 20.8 0 41.6 0 60.8-1.6-19.2 24-38.4 48-59.2 72zM774.4 848c-1.6 24-14.4 48-33.6 62.4-32 19.2-99.2-4.8-172.8-68.8-8-8-16-14.4-25.6-22.4 30.4-33.6 59.2-68.8 84.8-107.2 46.4-3.2 91.2-11.2 136-20.8l4.8 24c11.2 43.2 12.8 89.6 6.4 132.8z m36.8-214.4c-4.8 1.6-11.2 3.2-17.6 4.8-14.4-43.2-32-86.4-51.2-128 19.2-40 35.2-83.2 49.6-126.4 11.2 3.2 20.8 6.4 30.4 9.6 92.8 32 158.4 80 158.4 116.8 0 40-68.8 89.6-169.6 123.2zM512 603.2c51.2 0 91.2-41.6 91.2-91.2s-41.6-91.2-91.2-91.2-91.2 41.6-91.2 91.2 40 91.2 91.2 91.2z"  ></path></symbol><symbol id="icon-vuejs" viewBox="0 0 1024 1024"><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z"  ></path></symbol></svg>', function(t) {
  var n = (n = document.getElementsByTagName("script"))[n.length - 1], e = n.getAttribute("data-injectcss"), n = n.getAttribute("data-disable-injectsvg");
  if (!n) {
    var r, a, i, l, o, s = function(u, g) {
      g.parentNode.insertBefore(u, g);
    };
    if (e && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;
      try {
        document.write(
          "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
        );
      } catch (u) {
        console && console.log(u);
      }
    }
    r = function() {
      var u, g = document.createElement("div");
      g.innerHTML = t._iconfont_svg_string_1281272, (g = g.getElementsByTagName("svg")[0]) && (g.setAttribute("aria-hidden", "true"), g.style.position = "absolute", g.style.width = 0, g.style.height = 0, g.style.overflow = "hidden", g = g, (u = document.body).firstChild ? s(g, u.firstChild) : u.appendChild(g));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(r, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, !1), r();
    }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (i = r, l = t.document, o = !1, f(), l.onreadystatechange = function() {
      l.readyState == "complete" && (l.onreadystatechange = null, c());
    });
  }
  function c() {
    o || (o = !0, i());
  }
  function f() {
    try {
      l.documentElement.doScroll("left");
    } catch {
      return void setTimeout(f, 50);
    }
    c();
  }
}(window);
const fe = E({
  name: "SIcon",
  props: Ft,
  setup(t) {
    const e = A(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = d("img", {
      src: t.name,
      style: {
        width: e.value,
        verticalAlign: "middle"
      }
    }, null), r = d("span", {
      class: [t.prefix, t.prefix + "-" + t.name],
      style: {
        fontSize: e.value,
        color: t.color
      }
    }, null), a = d("svg", {
      style: {
        width: e.value,
        height: e.value
      }
    }, [d("use", {
      "xlink:href": `#${t.prefix}-${t.component}`,
      fill: t.color
    }, null)]), i = t.component ? a : /http|https/.test(t.name) ? n : r;
    return () => i;
  }
}), Lt = (t) => {
  const e = t.size ? typeof t.size == "number" ? `${t.size}px` : t.size : void 0, n = t.color ? t.color : "black";
  return d("svg", {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-arrow-down",
    style: {
      width: e,
      height: e,
      fill: n,
      stroke: n
    }
  }, [d("path", {
    d: "m11.27 27.728 12.727 12.728 12.728-12.728M24 5v34.295"
  }, null)]);
}, Nt = {
  install(t) {
    t.component(fe.name, fe), t.component("ArrowDownIcon", Lt);
  }
};
const Be = E({
  name: "SButton",
  props: At,
  setup(t, {
    slots: e
  }) {
    const {
      type: n,
      size: r,
      disabled: a,
      block: i,
      round: l,
      plain: o,
      circle: s,
      icon: c,
      iconSvg: f
    } = L(t), u = i.value ? "s-btn--block" : "", g = l.value ? "s-btn--round" : "", x = o.value ? "s-btn--plain" : "", S = s.value ? "s-btn--circle" : "", p = r.value === "mini" ? "18" : r.value === "small" ? "22" : r.value === "medium" ? "26" : "30";
    return () => d("button", {
      disabled: a.value,
      class: `s-btn s-btn--${n.value} s-btn--${r.value} ${u} ${g} ${x} ${S}`
    }, [e.default && c.value || e.default && f.value ? d(X, null, [d(fe, {
      name: c.value,
      component: f.value,
      size: p
    }, null), e.default()]) : e.default ? d(X, null, [e.icon && e.icon(), e.default()]) : c.value || f.value ? d(fe, {
      name: c.value,
      component: f.value,
      size: p
    }, null) : "按钮"]);
  }
}), Rt = {
  install(t) {
    t.component(Be.name, Be);
  }
};
function Fe(t, e = 0, n = []) {
  return e++, t.reduce((r, a) => {
    const i = { ...a };
    i.level = e, n.length > 0 && n[n.length - 1].level >= e && n.pop(), n.push(i);
    const l = n[n.length - 2];
    if (l && (i.parentId = l.id), i.children) {
      const o = Fe(i.children, e, n);
      return delete i.children, r.concat(i, o);
    } else
      return i.isLeaf === void 0 && (i.isLeaf = !0), r.concat(i);
  }, []);
}
function It(t, { getChildren: e, getParent: n }, { emit: r }) {
  const a = (l) => {
    l.checked = !l.checked, e(l).forEach((u) => {
      u.checked = l.checked, u.inChecked = e(l, !0).every(
        (g) => g.inChecked
      );
    }), l.inChecked = !1, i(l);
    const o = t.value.map((u) => {
      if (u.checked)
        return u.id;
    }).filter(Boolean), s = t.value.map((u) => {
      if (u.checked)
        return u;
    }).filter(Boolean), c = t.value.map((u) => {
      if (u.inChecked)
        return u.id;
    }).filter(Boolean), f = t.value.map((u) => {
      if (u.inChecked)
        return u;
    }).filter(Boolean);
    r(
      "check",
      l,
      o,
      s,
      c,
      f
    );
  }, i = (l) => {
    const o = n(l);
    if (!o)
      return;
    const s = e(o, !0), c = s.every((u) => u.checked);
    o.checked = c;
    const f = s.some((u) => u.checked);
    c ? o.inChecked = !1 : f ? o.inChecked = !0 : o.inChecked = !1, o.parentId && i(o);
  };
  return {
    toggleCheckNode: a
  };
}
function Bt(t) {
  const e = A(() => {
    let o = [];
    const s = [];
    for (const c of t.value)
      o.map((f) => f.id).includes(c.id) || (c.expanded !== !0 && (o = n(c)), s.push(c));
    return s;
  }), n = (o, s = !0) => {
    const c = [], f = t.value.findIndex((u) => u.id === o.id);
    for (let u = f + 1; u < t.value.length && o.level < t.value[u].level; u++)
      (s || o.level === t.value[u].level - 1) && c.push(t.value[u]);
    return c;
  }, r = (o, s = []) => {
    const c = n(o, !1);
    return s.push(...c), c.forEach((f) => {
      f.expanded && r(f, s);
    }), s;
  };
  return {
    expandedTree: e,
    getChildren: n,
    getChildrenExpanded: r,
    getIndex: (o) => o ? t.value.findIndex((s) => s.id === o.id) : -1,
    getNode: (o) => t.value.find((s) => s.id === o.id),
    getParent: (o) => t.value.find((s) => s.id === o.parentId)
  };
}
const be = {
  dropPrev: "s-tree__node--drop-prev",
  dropNext: "s-tree__node--drop-next",
  dropInner: "s-tree__node--drop-inner"
};
function Dt(t, e, { getChildren: n, getParent: r }) {
  const a = Tt({
    dropType: void 0,
    draggingNode: null,
    draggingTreeNode: null
  }), i = A(
    () => e.value.reduce(
      (p, v) => ({
        ...p,
        [v.id]: v
      }),
      {}
    )
  ), l = (p) => {
    p == null || p.classList.remove(...Object.values(be));
  }, o = (p, v) => {
    var b;
    const m = (b = i.value[p]) == null ? void 0 : b.parentId;
    return m === v ? !0 : m !== void 0 ? o(m, v) : !1;
  }, s = () => {
    a.dropType = void 0, a.draggingNode = null, a.draggingTreeNode = null;
  }, c = (p, v) => {
    var m;
    p.stopPropagation(), a.draggingNode = p.target, a.draggingTreeNode = v, (m = p.dataTransfer) == null || m.setData("dragNodeId", v.id);
  }, f = (p) => {
    if (p.preventDefault(), p.stopPropagation(), !!a.draggingNode && t) {
      if (p.dataTransfer && (p.dataTransfer.dropEffect = "move"), !e)
        return;
      let v = {};
      typeof t == "object" ? v = t : t === !0 && (v = { dropInner: !0 });
      const { dropPrev: m, dropNext: b, dropInner: h } = v;
      let w;
      const y = m ? h ? 0.25 : b ? 0.45 : 1 : -1, P = b ? h ? 0.75 : m ? 0.55 : 0 : 1, C = p.currentTarget, O = C == null ? void 0 : C.getBoundingClientRect(), N = p.clientY - ((O == null ? void 0 : O.top) || 0);
      if (N < ((O == null ? void 0 : O.height) || 0) * y ? w = "dropPrev" : N > ((O == null ? void 0 : O.height) || 0) * P ? w = "dropNext" : h ? w = "dropInner" : w = void 0, w) {
        const R = C == null ? void 0 : C.classList;
        R && (R.contains(be[w]) || (l(C), R.add(be[w])));
      } else
        l(C);
      a.dropType = w;
    }
  }, u = (p) => {
    p.stopPropagation(), a.draggingNode && l(p.currentTarget);
  }, g = (p, v) => {
    var b;
    if (p.preventDefault(), p.stopPropagation(), l(p.currentTarget), !a.draggingNode || !t)
      return;
    const m = (b = p.dataTransfer) == null ? void 0 : b.getData("dragNodeId");
    if (m) {
      const h = o(v.id, m);
      if (m === v.id || h)
        return;
      a.dropType && x(m, v), s();
    }
  };
  function x(p, v) {
    const m = e.value.find((b) => b.id === p);
    if (m) {
      let b;
      const h = n(m), w = r(m);
      if (a.dropType === "dropInner") {
        b = {
          ...m,
          parentId: v.id,
          level: v.level + 1
        };
        const y = e.value.indexOf(v);
        e.value.splice(y + 1, 0, b), v.isLeaf = void 0;
        const P = e.value.indexOf(m);
        e.value.splice(P, 1);
      } else if (a.dropType === "dropNext") {
        b = {
          ...m,
          parentId: v.parentId,
          level: v.level
        };
        const y = e.value.indexOf(v), P = n(v, !0).length;
        e.value.splice(
          y + P + 1,
          0,
          b
        );
        const C = e.value.indexOf(m);
        e.value.splice(C, 1);
      } else if (a.dropType === "dropPrev") {
        b = {
          ...m,
          parentId: v.parentId,
          level: v.level
        };
        const y = e.value.indexOf(v);
        e.value.splice(y, 0, b);
        const P = e.value.indexOf(m);
        e.value.splice(P, 1);
      }
      a.dropType = "dropInner", h.forEach((y) => x(y.id, b)), w && n(w).length === 0 && (w.isLeaf = !0);
    }
  }
  return {
    onDragstart: c,
    onDragover: f,
    onDragleave: u,
    onDrop: g,
    onDragend: (p) => {
      p.preventDefault(), p.stopPropagation(), s();
    }
  };
}
function Vt(t, { getNode: e, getIndex: n, getChildren: r }, { emit: a }) {
  const i = (c) => {
    const f = e(c);
    f && f.isLeaf === !1 && !f.childNodeCount && (f.loading = !0, a("lazy-load", c, l));
  }, l = (c) => {
    const f = e(c.node);
    if (f) {
      f.loading = !1;
      const u = T(
        Fe(c.treeItems, f.level)
      );
      o(f, u), s(f, u);
      const g = r(f);
      f.childNodeCount = g.length;
    }
  }, o = (c, f) => {
    f.value.forEach((u) => {
      u.level - 1 === c.level && !u.parentId && (u.parentId = c.id);
    });
  }, s = (c, f) => {
    const u = n(c);
    u && t.value.splice(u + 1, 0, ...f.value);
  };
  return {
    lazyLoadNodes: i
  };
}
function dt(t = 8) {
  const e = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let r = 0; r < t; r++)
    n += e[parseInt((Math.random() * e.length).toString())];
  return n;
}
function qt(t, { getChildren: e, getIndex: n }) {
  return {
    append: (i, l) => {
      const o = e(i, !1), s = o[o.length - 1];
      let c = n(i) + 1;
      s && (c = n(s) + 1), i.expanded = !0, i.isLeaf = !1;
      const f = T({
        ...l,
        level: i.level + 1,
        parentId: i.id,
        isLeaf: !0
      });
      f.value.id === void 0 && (f.value.id = dt()), t.value.splice(c, 0, f.value);
    },
    remove: (i) => {
      const l = e(i).map((o) => o.id);
      t.value = t.value.filter(
        (o) => o.id !== i.id && !l.includes(o.id)
      );
    }
  };
}
function Mt(t, e, n, r) {
  const { lazyLoadNodes: a } = r;
  return {
    toggleNode: (l, o, s = !1) => {
      if (l.stopPropagation(), s)
        t.value.forEach((c) => {
          c.level <= o.level ? (c.level === o.level && c.id !== o.id && (c.expanded = !1), c.id === o.id && (c.expanded = !c.expanded), c.expanded && a(c)) : c.expanded = !1;
        });
      else {
        const c = t.value.find((f) => f.id === o.id);
        c && (c.expanded = !c.expanded, c.expanded && a(c));
      }
    }
  };
}
function jt(t, e, n) {
  const r = kt(t), a = T(Fe(r)), i = Bt(a), l = [Mt, It, qt], o = Vt(a, i, n), s = Dt(e.draggable, a, i);
  return {
    ...l.reduce((f, u) => ({ ...f, ...u(a, i, n, o) }), {}),
    ...i,
    ...s,
    treeData: a
  };
}
const ft = {
  data: {
    type: Object,
    required: !0
  },
  lineable: {
    type: Boolean,
    default: !1
  },
  checkable: {
    type: Boolean,
    default: !1
  },
  operable: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: [Boolean, Object],
    default: !1
  },
  height: {
    type: Number
  },
  itemHeight: {
    type: Number,
    default: 30
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  props: {
    type: Object,
    default: {
      label: "label",
      children: "children"
    }
  }
}, Le = {
  onClick: {
    type: Function,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  marginRight: {
    type: Number,
    default: 8
  }
};
var Pe = {}, zt = {
  get exports() {
    return Pe;
  },
  set exports(t) {
    Pe = t;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var l = typeof i;
          if (l === "string" || l === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var o = n.apply(null, i);
              o && r.push(o);
            }
          } else if (l === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var s in i)
              e.call(i, s) && i[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(zt);
const z = Pe, $t = E({
  name: "SBaseSelectAll",
  props: Le,
  setup(t) {
    return () => d("label", {
      class: z("s-base-select-all", "is-checked", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [d("span", {
      class: z("s-base-select-all__input", "is-checked", {
        "is-disabled": t.disabled
      })
    }, [d("span", {
      class: "s-base-select-all__inner"
    }, null), d("input", {
      type: "checkbox",
      disabled: t.disabled,
      "aria-hidden": "false",
      class: "s-base-select-all__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
});
const Ht = E({
  name: "SBaseSelectionBox",
  props: Le,
  setup(t) {
    return () => d("label", {
      class: z("s-base-selection-box", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [d("span", {
      class: z("s-base-selection-box__input", {
        "is-disabled": t.disabled
      })
    }, [d("span", {
      class: "s-base-selection-box__inner"
    }, null), d("input", {
      type: "checkbox",
      disabled: t.disabled,
      "aria-hidden": "false",
      class: "s-base-selection-box__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
});
const Wt = E({
  name: "SBaseSemiSelection",
  props: Le,
  setup(t) {
    return () => d("label", {
      class: z("s-base-semi-selection", {
        "is-disabled": t.disabled
      }),
      style: {
        marginRight: t.marginRight + "px"
      }
    }, [d("span", {
      class: z("s-base-semi-selection__input", "is-indeterminate", {
        "is-disabled": t.disabled
      }),
      tabindex: "0",
      role: "checkbox",
      "aria-checked": "mixed"
    }, [d("span", {
      class: "s-base-semi-selection__inner"
    }, null), d("input", {
      type: "checkbox",
      "aria-hidden": "true",
      disabled: t.disabled,
      class: "s-base-semi-selection__original",
      value: "",
      tabindex: "-1",
      onClick: () => {
        t.onClick();
      }
    }, null)])]);
  }
}), Ut = {
  ...ft,
  treeNode: {
    type: Object,
    required: !0
  }
}, De = 34, Ve = 24, Gt = E({
  name: "STreeNode",
  props: Ut,
  setup(t, {
    slots: e
  }) {
    const {
      lineable: n,
      checkable: r,
      treeNode: a,
      operable: i,
      draggable: l,
      props: o
    } = L(t), {
      toggleCheckNode: s,
      getChildrenExpanded: c,
      append: f,
      remove: u,
      onDragend: g,
      onDragleave: x,
      onDragover: S,
      onDragstart: p,
      onDrop: v
    } = V("TREE_UTILS");
    console.log("defaultProps", o);
    const m = T(!1), b = () => {
      m.value ? m.value = !1 : m.value = !0;
    };
    let h = {};
    l.value && (h = {
      draggable: !0,
      onDragend: (y) => g(y),
      onDragleave: (y) => x(y),
      onDragover: (y) => S(y),
      onDragstart: (y) => p(y, a.value),
      onDrop: (y) => v(y, a.value)
    });
    const w = () => d(X, null, [a.value.inChecked ? d(Wt, {
      onClick: () => s(a.value),
      disabled: a.value.disabled
    }, null) : a.value.checked ? d($t, {
      onClick: () => s(a.value),
      disabled: a.value.disabled
    }, null) : d(Ht, {
      onClick: () => s(a.value),
      disabled: a.value.disabled
    }, null)]);
    return () => {
      var y, P, C;
      return d("div", {
        class: "s-tree__node hover:bg-slate-300 relative leading-8",
        style: {
          paddingLeft: `${Ve * (a.value.level - 1)}px`
        },
        onMouseenter: b,
        onMouseleave: b
      }, [!a.value.isLeaf && a.value.expanded && n.value && d("span", {
        class: "s-tree-node__vline absolute w-px bg-slate-300",
        style: {
          height: `${De * c(a.value).length}px`,
          left: `${Ve * (a.value.level - 1) + 9}px`,
          top: `${De}px`
        }
      }, null), d("div", K({
        class: "s-tree__node--content"
      }, h), [a.value.isLeaf ? d("span", {
        style: {
          display: "inline-block",
          width: "18px"
        }
      }, null) : (y = e.icon) == null ? void 0 : y.call(e), r.value && w(), (P = e.content) == null ? void 0 : P.call(e), i.value && m.value && d("span", {
        class: "inline-flex ml-1"
      }, [d("svg", {
        onClick: () => {
          f(a.value, {
            label: "新节点"
          });
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer"
      }, [d("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)]), d("svg", {
        onClick: () => {
          u(a.value);
        },
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14",
        class: "cursor-pointer ml-1"
      }, [d("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])]), a.value.loading && ((C = e.loading) == null ? void 0 : C.call(e))])]);
    };
  }
}), Yt = (t, {
  emit: e
}) => d("svg", {
  style: {
    width: "18px",
    height: "18px",
    display: "inline-block",
    transform: t.expanded ? "rotate(90deg)" : ""
  },
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: () => e("onClick")
}, [d("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null)]);
const Xt = {
  data: {
    type: Array,
    default: []
  },
  itemHeight: {
    type: Number,
    default: 22
  },
  component: {
    type: String,
    default: "div"
  }
};
const Kt = E({
  name: "SVirtualList",
  props: Xt,
  setup(t, {
    slots: e
  }) {
    const {
      data: n,
      itemHeight: r,
      component: a
    } = L(t), i = T(), l = T(0), o = T(0), s = T(0), c = A(() => Math.ceil(l.value / r.value)), f = A(() => n.value.slice(s.value, Math.min(s.value + c.value, n.value.length)));
    Ae(() => {
      var g;
      l.value = (g = i.value) == null ? void 0 : g.clientHeight;
    });
    const u = (g) => {
      const {
        scrollTop: x
      } = g.target;
      s.value = Math.floor(x / r.value), o.value = x - x % r.value;
    };
    return () => d(a.value, {
      class: "s-virtual-list__container",
      ref: i,
      onScroll: u
    }, {
      default: () => [d("div", {
        class: "s-virtual-list__blank",
        style: {
          height: `${n.value.length * r.value}px`
        }
      }, null), d("div", {
        class: "s-virtual-list",
        style: {
          transform: `translate3d(0, ${o.value}px, 0)`
        }
      }, [f.value.map((g, x) => {
        var S;
        return (S = e.default) == null ? void 0 : S.call(e, {
          item: g,
          index: x
        });
      })])]
    });
  }
}), qe = E({
  name: "STree",
  props: ft,
  emits: ["lazy-load", "check"],
  setup(t, e) {
    const {
      data: n,
      height: r,
      itemHeight: a,
      accordion: i,
      props: l
    } = L(t), {
      slots: o
    } = e, s = jt(n, t, e);
    return q("TREE_UTILS", s), () => {
      const c = (f) => d(Gt, K(t, {
        treeNode: f,
        onClick: i.value ? (u) => s.toggleNode(u, f, i.value) : ""
      }), {
        content: () => o.content ? o.content(f) : l.value.label == "label" ? f.label : f[l.value.label],
        icon: () => o.icon ? o.icon({
          nodeData: f,
          toggleNode: s.toggleNode
        }) : d(Yt, {
          expanded: !!f.expanded,
          onClick: (u) => s.toggleNode(u, f, i.value)
        }, null),
        loading: () => o.loading ? o.loading({
          nodeData: s
        }) : d("span", {
          class: "ml-1"
        }, [G("loading...")])
      });
      return d("div", {
        class: "s-tree"
      }, [r != null && r.value ? d("div", {
        style: {
          height: `${r.value}px`
        }
      }, [d(Kt, {
        data: s.expandedTree.value,
        itemHeight: a.value
      }, {
        default: ({
          item: f
        }) => c(f)
      })]) : s.expandedTree.value.map((f) => c(f))]);
    };
  }
}), Zt = {
  install(t) {
    t.component(qe.name, qe);
  }
}, pt = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pagerCount: {
    type: Number,
    default: 5
  },
  modelValue: {
    type: Number,
    default: 1
  },
  hideOnSinglePage: {
    type: Boolean,
    default: !0
  }
};
function Jt(t = 1) {
  const e = T(t), n = (l) => {
    e.value = l;
  }, r = (l) => {
    e.value += l;
  };
  return {
    pageIndex: e,
    setPageIndex: n,
    jumpPage: r,
    prevPage: () => r(-1),
    nextPage: () => r(1)
  };
}
const Qt = (t, e, n) => {
  console.log(t, e, n);
  const r = Array.from(Array(t).keys());
  if (t <= n)
    return r.slice(2, t);
  {
    const a = Math.ceil(n / 2);
    return e <= a ? r.slice(2, n) : e >= t - a + 1 ? r.slice(t - n + 2, t) : r.slice(e - a + 2, e + a - 1);
  }
}, en = pt, _e = E({
  name: "SPager",
  props: en,
  setup(t) {
    const {
      total: e,
      pageSize: n,
      pagerCount: r,
      hideOnSinglePage: a
    } = L(t), i = A(() => Math.ceil(e.value / n.value)), {
      pageIndex: l,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: f
    } = Jt(), u = A(() => Qt(i.value, l.value, r.value));
    return {
      totalPage: i,
      pageIndex: l,
      setPageIndex: o,
      jumpPage: s,
      prevPage: c,
      nextPage: f,
      centerPages: u,
      hideOnSinglePage: a
    };
  },
  render() {
    const {
      pagerCount: t,
      totalPage: e,
      pageIndex: n,
      setPageIndex: r,
      jumpPage: a,
      centerPages: i,
      hideOnSinglePage: l
    } = this;
    return d(X, null, [l && i.length >= 0 && d("ul", {
      class: "s-pager"
    }, [d("li", {
      onClick: () => r(1),
      class: {
        current: n === 1
      }
    }, [G("1")]), e > t && n > Math.ceil(t / 2) && d("li", {
      class: "more left",
      onClick: () => a(-5)
    }, [G("...")]), i.map((o) => d("li", {
      onClick: () => r(o),
      class: {
        current: n === o
      }
    }, [o])), e > t && n < e - Math.ceil(t / 2) + 1 && d("li", {
      class: "more right",
      onClick: () => a(5)
    }, [G("...")]), e > 1 && d("li", {
      onClick: () => r(e),
      class: {
        current: n === e
      }
    }, [e])])]);
  }
}), Me = E({
  name: "SPagination",
  props: pt,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = T(), r = A(() => n.value ? n.value.pageIndex < 2 : !0), a = A(() => n.value ? n.value.pageIndex > n.value.totalPage - 1 : !0);
    return Ae(() => {
      ee(() => n.value.pageIndex, (i) => {
        e("update:modelValue", i);
      }), ee(() => t.modelValue, (i) => {
        n.value.pageIndex = i;
      });
    }), () => d("div", {
      class: "s-pagination"
    }, [d("button", {
      disabled: r.value,
      onClick: () => n.value.prevPage()
    }, [G("上一页")]), d(_e, K(t, {
      ref: n
    }), null), d("button", {
      disabled: a.value,
      onClick: () => n.value.nextPage()
    }, [G("下一页")])]);
  }
}), tn = {
  install(t) {
    t.component(Me.name, Me), t.component(_e.name, _e);
  }
}, mt = Symbol("formContextToken"), nn = {
  model: {
    type: Object,
    required: !0
  },
  layout: {
    type: String,
    default: "horizontal"
  },
  labelSize: {
    type: String,
    default: "md"
  },
  labelAlign: {
    type: String,
    default: "start"
  },
  rules: {
    type: Object
  }
};
const je = E({
  name: "SForm",
  props: nn,
  emits: ["submit"],
  setup(t, {
    slots: e,
    emit: n,
    expose: r
  }) {
    const a = A(() => ({
      layout: t.layout,
      labelSize: t.labelSize,
      labelAlign: t.labelAlign
    }));
    q("LABEL_DATA", a);
    const i = /* @__PURE__ */ new Set(), l = (f) => i.add(f), o = (f) => i.delete(f);
    q(mt, {
      model: t.model,
      rules: t.rules,
      addItem: l,
      removeItem: o
    });
    const s = (f) => {
      f.preventDefault(), n("submit");
    };
    return r({
      validate: (f) => {
        const u = [];
        i.forEach((g) => u.push(g.validate())), Promise.all(u).then(() => f(!0)).catch(() => f(!1));
      }
    }), () => {
      var f;
      return d("form", {
        class: "s-form",
        onSubmit: s
      }, [(f = e.default) == null ? void 0 : f.call(e)]);
    };
  }
}), rn = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  error: {
    type: String,
    default: ""
  },
  hidden: {
    type: Boolean,
    default: !1
  }
};
function U() {
  return U = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, U.apply(this, arguments);
}
function an(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ae(t, e);
}
function Ce(t) {
  return Ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ce(t);
}
function ae(t, e) {
  return ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ae(t, e);
}
function on() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function de(t, e, n) {
  return on() ? de = Reflect.construct.bind() : de = function(a, i, l) {
    var o = [null];
    o.push.apply(o, i);
    var s = Function.bind.apply(a, o), c = new s();
    return l && ae(c, l.prototype), c;
  }, de.apply(null, arguments);
}
function ln(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Oe(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Oe = function(r) {
    if (r === null || !ln(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r))
        return e.get(r);
      e.set(r, a);
    }
    function a() {
      return de(r, arguments, Ce(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ae(a, r);
  }, Oe(t);
}
var sn = /%[sdj%]/g, gt = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (gt = function(e, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(e, n);
});
function Ee(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(n) {
    var r = n.field;
    e[r] = e[r] || [], e[r].push(n);
  }), e;
}
function F(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var a = 0, i = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(sn, function(o) {
      if (o === "%%")
        return "%";
      if (a >= i)
        return o;
      switch (o) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return o;
      }
    });
    return l;
  }
  return t;
}
function cn(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function k(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || cn(e) && typeof t == "string" && !t);
}
function un(t, e, n) {
  var r = [], a = 0, i = t.length;
  function l(o) {
    r.push.apply(r, o || []), a++, a === i && n(r);
  }
  t.forEach(function(o) {
    e(o, l);
  });
}
function ze(t, e, n) {
  var r = 0, a = t.length;
  function i(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var o = r;
    r = r + 1, o < a ? e(t[o], i) : n([]);
  }
  i([]);
}
function dn(t) {
  var e = [];
  return Object.keys(t).forEach(function(n) {
    e.push.apply(e, t[n] || []);
  }), e;
}
var $e = /* @__PURE__ */ function(t) {
  an(e, t);
  function e(n, r) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return e;
}(/* @__PURE__ */ Oe(Error));
function fn(t, e, n, r, a) {
  if (e.first) {
    var i = new Promise(function(g, x) {
      var S = function(m) {
        return r(m), m.length ? x(new $e(m, Ee(m))) : g(a);
      }, p = dn(t);
      ze(p, n, S);
    });
    return i.catch(function(g) {
      return g;
    }), i;
  }
  var l = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], o = Object.keys(t), s = o.length, c = 0, f = [], u = new Promise(function(g, x) {
    var S = function(v) {
      if (f.push.apply(f, v), c++, c === s)
        return r(f), f.length ? x(new $e(f, Ee(f))) : g(a);
    };
    o.length || (r(f), g(a)), o.forEach(function(p) {
      var v = t[p];
      l.indexOf(p) !== -1 ? ze(v, n, S) : un(v, n, S);
    });
  });
  return u.catch(function(g) {
    return g;
  }), u;
}
function pn(t) {
  return !!(t && t.message !== void 0);
}
function mn(t, e) {
  for (var n = t, r = 0; r < e.length; r++) {
    if (n == null)
      return n;
    n = n[e[r]];
  }
  return n;
}
function He(t, e) {
  return function(n) {
    var r;
    return t.fullFields ? r = mn(e, t.fullFields) : r = e[n.field || t.fullField], pn(n) ? (n.field = n.field || t.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || t.fullField
    };
  };
}
function We(t, e) {
  if (e) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        typeof r == "object" && typeof t[n] == "object" ? t[n] = U({}, t[n], r) : t[n] = r;
      }
  }
  return t;
}
var vt = function(e, n, r, a, i, l) {
  e.required && (!r.hasOwnProperty(e.field) || k(n, l || e.type)) && a.push(F(i.messages.required, e.fullField));
}, gn = function(e, n, r, a, i) {
  (/^\s+$/.test(n) || n === "") && a.push(F(i.messages.whitespace, e.fullField));
}, ce, vn = function() {
  if (ce)
    return ce;
  var t = "[a-fA-F\\d:]", e = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), l = new RegExp("^" + n + "$"), o = new RegExp("^" + a + "$"), s = function(w) {
    return w && w.exact ? i : new RegExp("(?:" + e(w) + n + e(w) + ")|(?:" + e(w) + a + e(w) + ")", "g");
  };
  s.v4 = function(h) {
    return h && h.exact ? l : new RegExp("" + e(h) + n + e(h), "g");
  }, s.v6 = function(h) {
    return h && h.exact ? o : new RegExp("" + e(h) + a + e(h), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, g = s.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", S = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', b = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + u + "|" + g + "|" + x + S + p + ")" + v + m;
  return ce = new RegExp("(?:^" + b + "$)", "i"), ce;
}, Ue = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, te = {
  integer: function(e) {
    return te.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return te.number(e) && !te.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !te.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Ue.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(vn());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Ue.hex);
  }
}, hn = function(e, n, r, a, i) {
  if (e.required && n === void 0) {
    vt(e, n, r, a, i);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  l.indexOf(o) > -1 ? te[o](n) || a.push(F(i.messages.types[o], e.fullField, e.type)) : o && typeof n !== e.type && a.push(F(i.messages.types[o], e.fullField, e.type));
}, yn = function(e, n, r, a, i) {
  var l = typeof e.len == "number", o = typeof e.min == "number", s = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, u = null, g = typeof n == "number", x = typeof n == "string", S = Array.isArray(n);
  if (g ? u = "number" : x ? u = "string" : S && (u = "array"), !u)
    return !1;
  S && (f = n.length), x && (f = n.replace(c, "_").length), l ? f !== e.len && a.push(F(i.messages[u].len, e.fullField, e.len)) : o && !s && f < e.min ? a.push(F(i.messages[u].min, e.fullField, e.min)) : s && !o && f > e.max ? a.push(F(i.messages[u].max, e.fullField, e.max)) : o && s && (f < e.min || f > e.max) && a.push(F(i.messages[u].range, e.fullField, e.min, e.max));
}, J = "enum", bn = function(e, n, r, a, i) {
  e[J] = Array.isArray(e[J]) ? e[J] : [], e[J].indexOf(n) === -1 && a.push(F(i.messages[J], e.fullField, e[J].join(", ")));
}, wn = function(e, n, r, a, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(n) || a.push(F(i.messages.pattern.mismatch, e.fullField, n, e.pattern));
    else if (typeof e.pattern == "string") {
      var l = new RegExp(e.pattern);
      l.test(n) || a.push(F(i.messages.pattern.mismatch, e.fullField, n, e.pattern));
    }
  }
}, _ = {
  required: vt,
  whitespace: gn,
  type: hn,
  range: yn,
  enum: bn,
  pattern: wn
}, xn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n, "string") && !e.required)
      return r();
    _.required(e, n, a, l, i, "string"), k(n, "string") || (_.type(e, n, a, l, i), _.range(e, n, a, l, i), _.pattern(e, n, a, l, i), e.whitespace === !0 && _.whitespace(e, n, a, l, i));
  }
  r(l);
}, Sn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && _.type(e, n, a, l, i);
  }
  r(l);
}, Pn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (n === "" && (n = void 0), k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && (_.type(e, n, a, l, i), _.range(e, n, a, l, i));
  }
  r(l);
}, _n = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && _.type(e, n, a, l, i);
  }
  r(l);
}, Cn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), k(n) || _.type(e, n, a, l, i);
  }
  r(l);
}, On = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && (_.type(e, n, a, l, i), _.range(e, n, a, l, i));
  }
  r(l);
}, En = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && (_.type(e, n, a, l, i), _.range(e, n, a, l, i));
  }
  r(l);
}, Tn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (n == null && !e.required)
      return r();
    _.required(e, n, a, l, i, "array"), n != null && (_.type(e, n, a, l, i), _.range(e, n, a, l, i));
  }
  r(l);
}, kn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && _.type(e, n, a, l, i);
  }
  r(l);
}, An = "enum", Fn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i), n !== void 0 && _[An](e, n, a, l, i);
  }
  r(l);
}, Ln = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n, "string") && !e.required)
      return r();
    _.required(e, n, a, l, i), k(n, "string") || _.pattern(e, n, a, l, i);
  }
  r(l);
}, Nn = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n, "date") && !e.required)
      return r();
    if (_.required(e, n, a, l, i), !k(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), _.type(e, s, a, l, i), s && _.range(e, s.getTime(), a, l, i);
    }
  }
  r(l);
}, Rn = function(e, n, r, a, i) {
  var l = [], o = Array.isArray(n) ? "array" : typeof n;
  _.required(e, n, a, l, i, o), r(l);
}, we = function(e, n, r, a, i) {
  var l = e.type, o = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (k(n, l) && !e.required)
      return r();
    _.required(e, n, a, o, i, l), k(n, l) || _.type(e, n, a, o, i);
  }
  r(o);
}, In = function(e, n, r, a, i) {
  var l = [], o = e.required || !e.required && a.hasOwnProperty(e.field);
  if (o) {
    if (k(n) && !e.required)
      return r();
    _.required(e, n, a, l, i);
  }
  r(l);
}, ne = {
  string: xn,
  method: Sn,
  number: Pn,
  boolean: _n,
  regexp: Cn,
  integer: On,
  float: En,
  array: Tn,
  object: kn,
  enum: Fn,
  pattern: Ln,
  date: Nn,
  url: we,
  hex: we,
  email: we,
  required: Rn,
  any: In
};
function Te() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var ke = Te(), le = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = ke, this.define(n);
  }
  var e = t.prototype;
  return e.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var l = r[i];
      a.rules[i] = Array.isArray(l) ? l : [l];
    });
  }, e.messages = function(r) {
    return r && (this._messages = We(Te(), r)), this._messages;
  }, e.validate = function(r, a, i) {
    var l = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var o = r, s = a, c = i;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, o), Promise.resolve(o);
    function f(p) {
      var v = [], m = {};
      function b(w) {
        if (Array.isArray(w)) {
          var y;
          v = (y = v).concat.apply(y, w);
        } else
          v.push(w);
      }
      for (var h = 0; h < p.length; h++)
        b(p[h]);
      v.length ? (m = Ee(v), c(v, m)) : c(null, o);
    }
    if (s.messages) {
      var u = this.messages();
      u === ke && (u = Te()), We(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var g = {}, x = s.keys || Object.keys(this.rules);
    x.forEach(function(p) {
      var v = l.rules[p], m = o[p];
      v.forEach(function(b) {
        var h = b;
        typeof h.transform == "function" && (o === r && (o = U({}, o)), m = o[p] = h.transform(m)), typeof h == "function" ? h = {
          validator: h
        } : h = U({}, h), h.validator = l.getValidationMethod(h), h.validator && (h.field = p, h.fullField = h.fullField || p, h.type = l.getType(h), g[p] = g[p] || [], g[p].push({
          rule: h,
          value: m,
          source: o,
          field: p
        }));
      });
    });
    var S = {};
    return fn(g, s, function(p, v) {
      var m = p.rule, b = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      b = b && (m.required || !m.required && p.value), m.field = p.field;
      function h(P, C) {
        return U({}, C, {
          fullField: m.fullField + "." + P,
          fullFields: m.fullFields ? [].concat(m.fullFields, [P]) : [P]
        });
      }
      function w(P) {
        P === void 0 && (P = []);
        var C = Array.isArray(P) ? P : [P];
        !s.suppressWarning && C.length && t.warning("async-validator:", C), C.length && m.message !== void 0 && (C = [].concat(m.message));
        var O = C.map(He(m, o));
        if (s.first && O.length)
          return S[m.field] = 1, v(O);
        if (!b)
          v(O);
        else {
          if (m.required && !p.value)
            return m.message !== void 0 ? O = [].concat(m.message).map(He(m, o)) : s.error && (O = [s.error(m, F(s.messages.required, m.field))]), v(O);
          var N = {};
          m.defaultField && Object.keys(p.value).map(function(B) {
            N[B] = m.defaultField;
          }), N = U({}, N, p.rule.fields);
          var R = {};
          Object.keys(N).forEach(function(B) {
            var D = N[B], Et = Array.isArray(D) ? D : [D];
            R[B] = Et.map(h.bind(null, B));
          });
          var Z = new t(R);
          Z.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), Z.validate(p.value, p.rule.options || s, function(B) {
            var D = [];
            O && O.length && D.push.apply(D, O), B && B.length && D.push.apply(D, B), v(D.length ? D : null);
          });
        }
      }
      var y;
      if (m.asyncValidator)
        y = m.asyncValidator(m, p.value, w, p.source, s);
      else if (m.validator) {
        try {
          y = m.validator(m, p.value, w, p.source, s);
        } catch (P) {
          console.error == null || console.error(P), s.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), w(P.message);
        }
        y === !0 ? w() : y === !1 ? w(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : y instanceof Array ? w(y) : y instanceof Error && w(y.message);
      }
      y && y.then && y.then(function() {
        return w();
      }, function(P) {
        return w(P);
      });
    }, function(p) {
      f(p);
    }, o);
  }, e.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ne.hasOwnProperty(r.type))
      throw new Error(F("Unknown rule type %s", r.type));
    return r.type || "string";
  }, e.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? ne.required : ne[this.getType(r)] || void 0;
  }, t;
}();
le.register = function(e, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ne[e] = n;
};
le.warning = gt;
le.messages = ke;
le.validators = ne;
const Ge = E({
  name: "SFormItem",
  props: rn,
  setup(t, {
    slots: e
  }) {
    const {
      error: n,
      hidden: r
    } = L(t), a = V("LABEL_DATA"), i = A(() => ({
      "s-form__item": !0,
      "s-form__item--hidden": r.value,
      "s-form__item--horizontal": a.value.layout === "horizontal",
      "s-form__item--vertical": a.value.layout === "vertical"
    })), l = A(() => ({
      "s-form__label": !0,
      "s-form__label--vertical": a.value.layout === "vertical",
      [`s-form__label--${a.value.labelAlign}`]: a.value.layout === "horizontal",
      [`s-form__label--${a.value.labelSize}`]: a.value.layout === "horizontal"
    })), o = V(mt), s = T(!1), c = T(""), u = {
      validate: () => {
        if (!o)
          return console.warn("请在Form中使用FormItem"), Promise.reject("请在Form中使用FormItem");
        if (!o.rules)
          return Promise.resolve({
            result: !0
          });
        if (!t.prop)
          return console.warn("如果要校验当前项，请设置prop字段"), Promise.reject("如果要校验当前项，请设置prop字段");
        const g = o.rules[t.prop] || void 0;
        if (!g)
          return Promise.resolve({
            result: !0
          });
        const x = o.model[t.prop];
        return new le({
          [t.prop]: g
        }).validate({
          [t.prop]: x
        }, (p) => {
          p ? (s.value = !0, c.value = p[0].message || "校验错误") : (s.value = !1, c.value = "");
        });
      }
    };
    return q("FORM_ITEM_CTX", u), Ae(() => {
      t.prop && (o == null || o.addItem(u));
    }), ct(() => {
      t.prop && (o == null || o.removeItem(u));
    }), () => {
      var g;
      return d("div", {
        class: i.value
      }, [d("span", {
        class: l.value
      }, [t.label]), d("div", null, [(g = e.default) == null ? void 0 : g.call(e)]), n.value && d("div", {
        class: "error-message"
      }, [n.value]), s.value && d("div", {
        class: "error-message"
      }, [c.value])]);
    };
  }
}), Bn = {
  install(t) {
    t.component(je.name, je), t.component(Ge.name, Ge);
  }
}, Dn = {
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  }
};
const Ye = E({
  name: "SInput",
  props: Dn,
  emits: ["update:modelValue"],
  setup(t, {
    emit: e
  }) {
    const n = V("FORM_ITEM_CTX"), r = (a) => {
      const i = a.target.value;
      e("update:modelValue", i), n.validate();
    };
    return () => d("div", {
      class: "s-input"
    }, [d("input", {
      class: "s-input__input",
      value: t.modelValue,
      onInput: r,
      type: t.type
    }, null)]);
  }
}), Vn = {
  install(t) {
    t.component(Ye.name, Ye);
  }
}, qn = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    default: ""
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  width: {
    type: String,
    default: "30%"
  },
  center: {
    type: Boolean,
    default: !1
  },
  alignCenter: {
    type: Boolean,
    default: !1
  },
  backgroundColor: {
    type: String,
    default: ""
  },
  top: {
    type: [String, Number],
    default: "15vh"
  }
};
const Mn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
const jn = E({
  name: "SBaseModal",
  props: Mn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r
    } = L(t);
    return () => {
      var a;
      return d("div", null, [r.value && d("div", {
        class: "s-base-modal"
      }, [d("div", {
        class: "s-base-modal__mask",
        onClick: () => {
          n("update:modelValue", !1);
        }
      }, null), (a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), Xe = E({
  name: "SModal",
  props: qn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      modelValue: r,
      title: a,
      showClose: i,
      width: l,
      center: o,
      alignCenter: s,
      backgroundColor: c,
      top: f
    } = L(t), u = s.value ? {
      marginTop: 0,
      top: "50%",
      transform: "translateY(-50%)"
    } : null, g = A(() => typeof f.value == "number" ? `${f.value}px` : f.value);
    return () => d(jn, {
      class: "s-modal",
      modelValue: r.value,
      "onUpdate:modelValue": () => {
        n("update:modelValue");
      }
    }, {
      default: () => {
        var x, S, p;
        return [d("div", {
          class: "s-modal__container",
          style: {
            width: l.value,
            ...u,
            marginTop: g.value,
            backgroundColor: c.value
          }
        }, [e.header ? (x = e.header) == null ? void 0 : x.call(e, {
          close: () => {
            n("update:modelValue", !1);
          }
        }) : d("div", {
          class: "s-modal__header",
          style: {
            textAlign: o.value ? "center" : "left"
          }
        }, [a.value, i.value && d("svg", {
          onClick: () => {
            n("update:modelValue", !1);
          },
          class: "s-modal__close",
          viewBox: "0 0 1024 1024",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }, [d("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        }, null)])]), d("div", {
          className: "s-modal__body"
        }, [(S = e.default) == null ? void 0 : S.call(e)]), d("div", {
          className: "s-modal__footer"
        }, [(p = e.footer) == null ? void 0 : p.call(e)])])];
      }
    });
  }
}), zn = {
  install(t) {
    t.component(Xe.name, Xe);
  }
}, $n = {
  modelValue: {
    type: String,
    default: ""
  },
  closable: {
    type: Boolean,
    default: !1
  },
  addable: {
    type: Boolean,
    default: !1
  }
};
const Ke = E({
  name: "STabs",
  props: $n,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const n = T([]);
    q("active-data", n);
    const r = T(t.modelValue);
    q("active-tab", r);
    const a = (o) => {
      r.value = o;
    }, i = (o, s) => {
      const c = n.value.findIndex((f) => f.id === s);
      n.value.splice(c, 1), o.stopPropagation(), n.value.length === c ? a(n.value[c - 1].id) : a(n.value[c].id);
    }, l = () => {
      const o = dt();
      n.value.push({
        id: o,
        type: "random",
        title: `Tab${o}`,
        content: `Tab${o} Content`
      }), r.value = o;
    };
    return () => {
      var o;
      return d("div", {
        class: "s-tabs"
      }, [d("ul", {
        class: "s-tabs__nav"
      }, [n.value.map((s) => d("li", {
        onClick: () => a(s.id),
        class: s.id === r.value ? "active" : ""
      }, [s.title, t.closable && d("svg", {
        onClick: (c) => i(c, s.id),
        style: "margin-left: 8px;",
        viewBox: "0 0 1024 1024",
        width: "12",
        height: "12"
      }, [d("path", {
        d: "M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"
      }, null)])])), t.addable && d("li", null, [d("svg", {
        onClick: l,
        viewBox: "0 0 1024 1024",
        width: "14",
        height: "14"
      }, [d("path", {
        d: "M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"
      }, null)])])]), (o = e.default) == null ? void 0 : o.call(e), n.value.filter((s) => s.type === "random").map((s) => d("div", {
        class: "s-tab"
      }, [s.id === r.value && s.content]))]);
    };
  }
}), Hn = {
  id: {
    type: String,
    required: !0
  },
  title: {
    type: String,
    required: !0
  }
};
const Ze = E({
  name: "STab",
  props: Hn,
  setup(t, {
    slots: e
  }) {
    const n = V("active-tab");
    return V("active-data").value.push({
      id: t.id,
      title: t.title
    }), () => {
      var a;
      return d(X, null, [t.id === n.value && d("div", {
        class: "s-tab"
      }, [(a = e.default) == null ? void 0 : a.call(e)])]);
    };
  }
}), Wn = {
  install(t) {
    t.component(Ke.name, Ke), t.component(Ze.name, Ze);
  }
}, Un = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  title: {
    type: String,
    default: ""
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
const Gn = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  host: {
    type: Object,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: !1
  },
  placement: {
    type: String,
    default: "bottom"
  }
};
function Y(t) {
  return t.split("-")[1];
}
function Ne(t) {
  return t === "y" ? "height" : "width";
}
function se(t) {
  return t.split("-")[0];
}
function ve(t) {
  return ["top", "bottom"].includes(se(t)) ? "x" : "y";
}
function Je(t, e, n) {
  let {
    reference: r,
    floating: a
  } = t;
  const i = r.x + r.width / 2 - a.width / 2, l = r.y + r.height / 2 - a.height / 2, o = ve(e), s = Ne(o), c = r[s] / 2 - a[s] / 2, f = se(e), u = o === "x";
  let g;
  switch (f) {
    case "top":
      g = {
        x: i,
        y: r.y - a.height
      };
      break;
    case "bottom":
      g = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: l
      };
      break;
    case "left":
      g = {
        x: r.x - a.width,
        y: l
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Y(e)) {
    case "start":
      g[o] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      g[o] += c * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Yn = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: l
  } = n, o = i.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(e));
  if (process.env.NODE_ENV !== "production") {
    if (l == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), o.filter((p) => {
      let {
        name: v
      } = p;
      return v === "autoPlacement" || v === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!t || !e) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: a
  }), {
    x: f,
    y: u
  } = Je(c, r, s), g = r, x = {}, S = 0;
  for (let p = 0; p < o.length; p++) {
    const {
      name: v,
      fn: m
    } = o[p], {
      x: b,
      y: h,
      data: w,
      reset: y
    } = await m({
      x: f,
      y: u,
      initialPlacement: r,
      placement: g,
      strategy: a,
      middlewareData: x,
      rects: c,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (f = b ?? f, u = h ?? u, x = {
      ...x,
      [v]: {
        ...x[v],
        ...w
      }
    }, process.env.NODE_ENV !== "production" && S > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), y && S <= 50) {
      S++, typeof y == "object" && (y.placement && (g = y.placement), y.rects && (c = y.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: a
      }) : y.rects), {
        x: f,
        y: u
      } = Je(c, g, s)), p = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: g,
    strategy: a,
    middlewareData: x
  };
};
function Xn(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ht(t) {
  return typeof t != "number" ? Xn(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function pe(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Kn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: a,
    platform: i,
    rects: l,
    elements: o,
    strategy: s
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: x = 0
  } = e, S = ht(x), v = o[g ? u === "floating" ? "reference" : "floating" : u], m = pe(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: s
  })), b = u === "floating" ? {
    ...l.floating,
    x: r,
    y: a
  } : l.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), w = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = pe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: h,
    strategy: s
  }) : b);
  return process.env.NODE_ENV, {
    top: (m.top - y.top + S.top) / w.y,
    bottom: (y.bottom - m.bottom + S.bottom) / w.y,
    left: (m.left - y.left + S.left) / w.x,
    right: (y.right - m.right + S.right) / w.x
  };
}
const Zn = Math.min, Jn = Math.max;
function Qn(t, e, n) {
  return Jn(t, Zn(e, n));
}
const er = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: r = 0
    } = t || {}, {
      x: a,
      y: i,
      placement: l,
      rects: o,
      platform: s
    } = e;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const c = ht(r), f = {
      x: a,
      y: i
    }, u = ve(l), g = Ne(u), x = await s.getDimensions(n), S = u === "y" ? "top" : "left", p = u === "y" ? "bottom" : "right", v = o.reference[g] + o.reference[u] - f[u] - o.floating[g], m = f[u] - o.reference[u], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(n));
    let h = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0;
    h === 0 && (h = o.floating[g]);
    const w = v / 2 - m / 2, y = c[S], P = h - x[g] - c[p], C = h / 2 - x[g] / 2 + w, O = Qn(y, C, P), R = Y(l) != null && C != O && o.reference[g] / 2 - (C < y ? c[S] : c[p]) - x[g] / 2 < 0 ? C < y ? y - C : P - C : 0;
    return {
      [u]: f[u] - R,
      data: {
        [u]: O,
        centerOffset: C - O
      }
    };
  }
}), tr = ["top", "right", "bottom", "left"], Qe = /* @__PURE__ */ tr.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []), nr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function et(t) {
  return t.replace(/left|right|bottom|top/g, (e) => nr[e]);
}
function rr(t, e, n) {
  n === void 0 && (n = !1);
  const r = Y(t), a = ve(t), i = Ne(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (l = et(l)), {
    main: l,
    cross: et(l)
  };
}
const ar = {
  start: "end",
  end: "start"
};
function ir(t) {
  return t.replace(/start|end/g, (e) => ar[e]);
}
function or(t, e, n) {
  return (t ? [...n.filter((a) => Y(a) === t), ...n.filter((a) => Y(a) !== t)] : n.filter((a) => se(a) === a)).filter((a) => t ? Y(a) === t || (e ? ir(a) !== a : !1) : !0);
}
const lr = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, a;
      const {
        rects: i,
        middlewareData: l,
        placement: o,
        platform: s,
        elements: c
      } = e, {
        alignment: f,
        allowedPlacements: u = Qe,
        autoAlignment: g = !0,
        ...x
      } = t, S = f !== void 0 || u === Qe ? or(f || null, g, u) : u, p = await Kn(e, x), v = ((n = l.autoPlacement) == null ? void 0 : n.index) || 0, m = S[v];
      if (m == null)
        return {};
      const {
        main: b,
        cross: h
      } = rr(m, i, await (s.isRTL == null ? void 0 : s.isRTL(c.floating)));
      if (o !== m)
        return {
          reset: {
            placement: S[0]
          }
        };
      const w = [p[se(m)], p[b], p[h]], y = [...((r = l.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: m,
        overflows: w
      }], P = S[v + 1];
      if (P)
        return {
          data: {
            index: v + 1,
            overflows: y
          },
          reset: {
            placement: P
          }
        };
      const C = y.slice().sort((R, Z) => R.overflows[0] - Z.overflows[0]), N = ((a = C.find((R) => {
        let {
          overflows: Z
        } = R;
        return Z.every((B) => B <= 0);
      })) == null ? void 0 : a.placement) || C[0].placement;
      return N !== o ? {
        data: {
          index: v + 1,
          overflows: y
        },
        reset: {
          placement: N
        }
      } : {};
    }
  };
};
async function sr(t, e) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = se(n), o = Y(n), s = ve(n) === "x", c = ["left", "top"].includes(l) ? -1 : 1, f = i && s ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: g,
    crossAxis: x,
    alignmentAxis: S
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return o && typeof S == "number" && (x = o === "end" ? S * -1 : S), s ? {
    x: x * f,
    y: g * c
  } : {
    x: g * c,
    y: x * f
  };
}
const cr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, a = await sr(e, t);
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
};
function I(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function M(t) {
  return I(t).getComputedStyle(t);
}
function $(t) {
  return bt(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ue;
function yt() {
  if (ue)
    return ue;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ue = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ue) : navigator.userAgent;
}
function j(t) {
  return t instanceof I(t).HTMLElement;
}
function H(t) {
  return t instanceof I(t).Element;
}
function bt(t) {
  return t instanceof I(t).Node;
}
function tt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = I(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function he(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: a
  } = M(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(a);
}
function ur(t) {
  return ["table", "td", "th"].includes($(t));
}
function Re(t) {
  const e = /firefox/i.test(yt()), n = M(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some(
    (a) => {
      const i = n.contain;
      return i != null ? i.includes(a) : !1;
    }
  );
}
function wt() {
  return !/^((?!chrome|android).)*safari/i.test(yt());
}
function Ie(t) {
  return ["html", "body", "#document"].includes($(t));
}
const nt = Math.min, re = Math.max, me = Math.round;
function xt(t) {
  const e = M(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const a = t.offsetWidth, i = t.offsetHeight, l = me(n) !== a || me(r) !== i;
  return l && (n = a, r = i), {
    width: n,
    height: r,
    fallback: l
  };
}
function St(t) {
  return H(t) ? t : t.contextElement;
}
const Pt = {
  x: 1,
  y: 1
};
function Q(t) {
  const e = St(t);
  if (!j(e))
    return Pt;
  const n = e.getBoundingClientRect(), {
    width: r,
    height: a,
    fallback: i
  } = xt(e);
  let l = (i ? me(n.width) : n.width) / r, o = (i ? me(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: l,
    y: o
  };
}
function ie(t, e, n, r) {
  var a, i;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const l = t.getBoundingClientRect(), o = St(t);
  let s = Pt;
  e && (r ? H(r) && (s = Q(r)) : s = Q(t));
  const c = o ? I(o) : window, f = !wt() && n;
  let u = (l.left + (f && ((a = c.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / s.x, g = (l.top + (f && ((i = c.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / s.y, x = l.width / s.x, S = l.height / s.y;
  if (o) {
    const p = I(o), v = r && H(r) ? I(r) : r;
    let m = p.frameElement;
    for (; m && r && v !== p; ) {
      const b = Q(m), h = m.getBoundingClientRect(), w = getComputedStyle(m);
      h.x += (m.clientLeft + parseFloat(w.paddingLeft)) * b.x, h.y += (m.clientTop + parseFloat(w.paddingTop)) * b.y, u *= b.x, g *= b.y, x *= b.x, S *= b.y, u += h.x, g += h.y, m = I(m).frameElement;
    }
  }
  return {
    width: x,
    height: S,
    top: g,
    right: u + x,
    bottom: g + S,
    left: u,
    x: u,
    y: g
  };
}
function W(t) {
  return ((bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ye(t) {
  return H(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function _t(t) {
  return ie(W(t)).left + ye(t).scrollLeft;
}
function dr(t, e, n) {
  const r = j(e), a = W(e), i = ie(t, !0, n === "fixed", e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if (($(e) !== "body" || he(a)) && (l = ye(e)), j(e)) {
      const s = ie(e, !0);
      o.x = s.x + e.clientLeft, o.y = s.y + e.clientTop;
    } else
      a && (o.x = _t(a));
  return {
    x: i.left + l.scrollLeft - o.x,
    y: i.top + l.scrollTop - o.y,
    width: i.width,
    height: i.height
  };
}
function oe(t) {
  if ($(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (tt(t) ? t.host : null) || W(t);
  return tt(e) ? e.host : e;
}
function rt(t) {
  return !j(t) || M(t).position === "fixed" ? null : t.offsetParent;
}
function fr(t) {
  let e = oe(t);
  for (; j(e) && !Ie(e); ) {
    if (Re(e))
      return e;
    e = oe(e);
  }
  return null;
}
function at(t) {
  const e = I(t);
  let n = rt(t);
  for (; n && ur(n) && M(n).position === "static"; )
    n = rt(n);
  return n && ($(n) === "html" || $(n) === "body" && M(n).position === "static" && !Re(n)) ? e : n || fr(t) || e;
}
function pr(t) {
  return xt(t);
}
function mr(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const a = j(n), i = W(n);
  if (n === i)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, o = {
    x: 1,
    y: 1
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((a || !a && r !== "fixed") && (($(n) !== "body" || he(i)) && (l = ye(n)), j(n))) {
    const c = ie(n);
    o = Q(n), s.x = c.x + n.clientLeft, s.y = c.y + n.clientTop;
  }
  return {
    width: e.width * o.x,
    height: e.height * o.y,
    x: e.x * o.x - l.scrollLeft * o.x + s.x,
    y: e.y * o.y - l.scrollTop * o.y + s.y
  };
}
function gr(t, e) {
  const n = I(t), r = W(t), a = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, o = 0, s = 0;
  if (a) {
    i = a.width, l = a.height;
    const c = wt();
    (c || !c && e === "fixed") && (o = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: o,
    y: s
  };
}
function vr(t) {
  var e;
  const n = W(t), r = ye(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, i = re(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = re(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
  let o = -r.scrollLeft + _t(t);
  const s = -r.scrollTop;
  return M(a || n).direction === "rtl" && (o += re(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: o,
    y: s
  };
}
function Ct(t) {
  const e = oe(t);
  return Ie(e) ? t.ownerDocument.body : j(e) && he(e) ? e : Ct(e);
}
function Ot(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = Ct(t), a = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = I(r);
  return a ? e.concat(i, i.visualViewport || [], he(r) ? r : []) : e.concat(r, Ot(r));
}
function hr(t, e) {
  const n = ie(t, !0, e === "fixed"), r = n.top + t.clientTop, a = n.left + t.clientLeft, i = j(t) ? Q(t) : {
    x: 1,
    y: 1
  }, l = t.clientWidth * i.x, o = t.clientHeight * i.y, s = a * i.x, c = r * i.y;
  return {
    top: c,
    left: s,
    right: s + l,
    bottom: c + o,
    x: s,
    y: c,
    width: l,
    height: o
  };
}
function it(t, e, n) {
  return e === "viewport" ? pe(gr(t, n)) : H(e) ? hr(e, n) : pe(vr(W(t)));
}
function yr(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Ot(t).filter((o) => H(o) && $(o) !== "body"), a = null;
  const i = M(t).position === "fixed";
  let l = i ? oe(t) : t;
  for (; H(l) && !Ie(l); ) {
    const o = M(l), s = Re(l);
    (i ? !s && !a : !s && o.position === "static" && !!a && ["absolute", "fixed"].includes(a.position)) ? r = r.filter((f) => f !== l) : a = o, l = oe(l);
  }
  return e.set(t, r), r;
}
function br(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = t;
  const l = [...n === "clippingAncestors" ? yr(e, this._c) : [].concat(n), r], o = l[0], s = l.reduce((c, f) => {
    const u = it(e, f, a);
    return c.top = re(u.top, c.top), c.right = nt(u.right, c.right), c.bottom = nt(u.bottom, c.bottom), c.left = re(u.left, c.left), c;
  }, it(e, o, a));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
const wr = {
  getClippingRect: br,
  convertOffsetParentRelativeRectToViewportRelativeRect: mr,
  isElement: H,
  getDimensions: pr,
  getOffsetParent: at,
  getDocumentElement: W,
  getScale: Q,
  async getElementRects(t) {
    let {
      reference: e,
      floating: n,
      strategy: r
    } = t;
    const a = this.getOffsetParent || at, i = this.getDimensions;
    return {
      reference: dr(e, await a(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await i(n)
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => M(t).direction === "rtl"
}, xr = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: wr,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return Yn(t, e, {
    ...a,
    platform: i
  });
};
const Sr = E({
  name: "SBasePopover",
  props: Gn,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e,
    attrs: n
  }) {
    const {
      host: r,
      modelValue: a,
      showArrow: i,
      placement: l
    } = L(t), o = T(), s = T(), c = () => {
      const u = [];
      i.value && (u.push(cr(8)), u.push(er({
        element: o.value
      }))), l.value || u.push(lr()), xr(r.value, s.value, {
        middleware: u,
        placement: l.value || "bottom"
      }).then(({
        x: g,
        y: x,
        middlewareData: S,
        placement: p
      }) => {
        if (Object.assign(s.value.style, {
          left: `${g}px`,
          top: `${x}px`
        }), i.value) {
          const {
            x: v,
            y: m
          } = S.arrow, b = p.split("-")[0], h = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[b], w = ["top", "right", "bottom", "left"], y = w.indexOf(b) - 1, P = w[y < 0 ? y + 4 : y];
          Object.assign(o.value.style, {
            left: `${v}px`,
            top: `${m}px`,
            [h]: "-4px",
            [`border-${b}-color`]: "transparent",
            [`border-${P}-color`]: "transparent"
          });
        }
      });
    }, f = new MutationObserver(() => c());
    return ee(a, (u) => {
      u ? (ut(c), r.value && f.observe(r.value, {
        attributes: !0
      }), window.addEventListener("resize", c), window.addEventListener("scroll", c)) : (f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c));
    }, {
      immediate: !0
    }), ct(() => {
      f.disconnect(), window.removeEventListener("resize", c), window.removeEventListener("scroll", c);
    }), () => {
      var u;
      return d(X, null, [a.value && d("div", K({
        ref: s,
        class: "s-base-popover"
      }, n), [(u = e.default) == null ? void 0 : u.call(e), i.value && d("div", {
        class: "s-base-popover__arrow",
        ref: o
      }, null)])]);
    };
  }
}), ot = E({
  name: "SPopover",
  props: Un,
  emits: ["update:modelValue"],
  setup(t, {
    slots: e
  }) {
    const {
      modelValue: n,
      title: r
    } = L(t);
    return () => d(X, null, [n.value && d(Sr, K({
      class: "s-popover"
    }, t), {
      default: () => {
        var a;
        return [d("h4", {
          class: "s-popover__title"
        }, [r.value]), (a = e.default) == null ? void 0 : a.call(e)];
      }
    })]);
  }
}), Pr = {
  install(t) {
    t.component(ot.name, ot);
  }
}, _r = {
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: []
  },
  border: {
    type: Boolean,
    default: !1
  },
  stripe: { type: Boolean, default: !1 },
  showSummary: { type: Boolean, default: !1 },
  headerCellStyle: {
    type: [Object, Function],
    default: {}
  },
  showHeader: {
    type: Boolean,
    default: !0
  },
  headerRowClassName: {
    type: [Object, Function],
    default: {}
  }
}, Cr = {
  prop: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  }
};
const ge = E({
  name: "STableColumn",
  props: Cr,
  setup(t) {
    const {
      prop: e,
      title: n,
      type: r
    } = L(t);
    V("column-data").value.push({
      prop: e.value,
      title: n.value,
      type: r.value
    });
    const i = V("all-checked"), l = V("is-indeterminate"), o = T();
    ut(() => {
      o.value && (o.value.indeterminate = l.value);
    }), ee(l, () => {
      o.value && (o.value.indeterminate = l.value);
    }, {
      immediate: !0
    });
    const s = V("is-table-thead-styles");
    return () => s.isStyles == !1 ? s.columnData.map((c, f) => d("th", {
      class: "s-table-column",
      style: s.headerCellStyle({
        row: s.columnData,
        column: c,
        rowIndex: 1,
        columnIndex: f
      })
    }, [r.value === "selection" ? xe(d("input", {
      ref: o,
      type: "checkbox",
      "onUpdate:modelValue": (u) => i.value = u
    }, null), [[Se, i.value]]) : n.value])) : d("th", {
      class: "s-table-column"
    }, [r.value === "selection" ? xe(d("input", {
      ref: o,
      type: "checkbox",
      "onUpdate:modelValue": (c) => i.value = c
    }, null), [[Se, i.value]]) : n.value]);
  }
});
const lt = E({
  name: "STable",
  props: _r,
  emits: ["selection-change"],
  setup(t, {
    slots: e,
    emit: n
  }) {
    const {
      data: r,
      border: a,
      stripe: i,
      columns: l,
      showSummary: o,
      headerCellStyle: s,
      showHeader: c
    } = L(t), f = T([]);
    q("column-data", f), ee(r, (p) => {
      const v = p.filter((m) => m.checked);
      v.length === r.value.length ? (u.value = !0, g.value = !1) : v.length === 0 ? (u.value = !1, g.value = !1) : g.value = !0, n("selection-change", v);
    }, {
      deep: !0
    });
    const u = T(r.value.every((p) => p.checked));
    q("all-checked", u), ee(u, (p) => {
      r.value.forEach((v) => {
        v.checked = p;
      });
    });
    const g = T(r.value.some((p) => p.checked) && !u.value);
    q("is-indeterminate", g);
    const x = A(() => typeof s.value == "object");
    q("is-table-thead-styles", {
      isStyles: x.value,
      headerCellStyle: s.value
    });
    const S = (p, v = 0) => p.map((m, b) => m.children ? (v++, p(m.children, v)) : typeof s.value == "function" ? d(ge, K(m, {
      key: b,
      style: s.value({
        row: p,
        column: m,
        rowIndex: v,
        columnIndex: b
      })
    }), null) : d(ge, K(m, {
      key: b
    }), null));
    return () => {
      var p;
      return d("table", {
        class: z("s-table", {
          "s-table--border": a.value,
          "s-table--striped": i.value
        })
      }, [e.title ? d("div", {
        class: "table-title"
      }, [e.title()]) : null, d("thead", {
        style: c.value ? "" : "display:none"
      }, [d("tr", {
        style: x.value ? s.value : {}
      }, [l.value.length > 0 ? S(l.value) : (p = e.default) == null ? void 0 : p.call(e)])]), d("tbody", null, [r.value.length > 0 ? r.value.map((v, m) => d("tr", {
        class: z({
          "s-table__row--striped": m % 2 == 1 && i.value
        })
      }, [f.value.map((b, h) => {
        var y, P, C;
        const w = (y = e.default) == null ? void 0 : y.call(e)[h];
        return w != null && w.children ? d("td", null, [(C = (P = w == null ? void 0 : w.children).default) == null ? void 0 : C.call(P, v)]) : d("td", null, [b.prop ? v[b.prop] : b.type === "selection" ? xe(d("input", {
          type: "checkbox",
          "onUpdate:modelValue": (O) => v.checked = O
        }, null), [[Se, v.checked]]) : ""]);
      })])) : d("tr", {
        class: "s-table-placeholder"
      }, [d("td", {
        colspan: 3
      }, [d("div", {
        class: "ant-empty-description"
      }, [e.empty ? e.empty() : "暂无数据"])])])]), e.footer ? d("div", {
        class: "table-footer"
      }, [e.footer()]) : null, o.value ? d("div", {
        class: "table-summary"
      }, [G("总结")]) : null]);
    };
  }
}), Or = {
  install(t) {
    t.component(lt.name, lt), t.component(ge.name, ge);
  }
}, Er = {
  image: String,
  imageSize: Number,
  description: String
};
const st = E({
  name: "SEmpty",
  props: Er,
  setup(t, {
    slots: e
  }) {
    const {
      image: n,
      imageSize: r,
      description: a
    } = L(t);
    return () => {
      var i;
      return d("div", {
        class: "s-empty"
      }, [d("div", {
        class: "s-empty-image",
        style: `width:${r == null ? void 0 : r.value}px`
      }, [e.image ? e.image() : n.value ? d("img", {
        src: n.value
      }, null) : d("svg", {
        viewBox: "0 0 79 86",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [d("defs", null, [d("linearGradient", {
        id: "linearGradient-1-el-id-8321-17",
        x1: "38.8503086%",
        y1: "0%",
        x2: "61.1496914%",
        y2: "100%"
      }, [d("stop", {
        "stop-color": "#fcfcfd",
        offset: "0%"
      }, null), d("stop", {
        "stop-color": "#eeeff3",
        offset: "100%"
      }, null)]), d("linearGradient", {
        id: "linearGradient-2-el-id-8321-17",
        x1: "0%",
        y1: "9.5%",
        x2: "100%",
        y2: "90.5%"
      }, [d("stop", {
        "stop-color": "#fcfcfd",
        offset: "0%"
      }, null), d("stop", {
        "stop-color": "#e9ebef",
        offset: "100%"
      }, null)]), d("rect", {
        id: "path-3-el-id-8321-17",
        x: "0",
        y: "0",
        width: "17",
        height: "36"
      }, null)]), d("g", {
        id: "Illustrations",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, [d("g", {
        id: "B-type",
        transform: "translate(-1268.000000, -535.000000)"
      }, [d("g", {
        id: "Group-2",
        transform: "translate(1268.000000, 535.000000)"
      }, [d("path", {
        id: "Oval-Copy-2",
        d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
        fill: "#f7f8fc"
      }, null), d("polygon", {
        id: "Rectangle-Copy-14",
        fill: "#e5e7e9",
        transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
        points: "13 58 53 58 42 45 2 45"
      }, null), d("g", {
        id: "Group-Copy",
        transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"
      }, [d("polygon", {
        id: "Rectangle-Copy-10",
        fill: "#e5e7e9",
        transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
        points: "2.84078316e-14 3 18 3 23 7 5 7"
      }, null), d("polygon", {
        id: "Rectangle-Copy-11",
        fill: "#edeef2",
        points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
      }, null), d("rect", {
        id: "Rectangle-Copy-12",
        fill: "url(#linearGradient-1-el-id-8321-17)",
        transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
        x: "38",
        y: "7",
        width: "17",
        height: "36"
      }, null), d("polygon", {
        id: "Rectangle-Copy-13",
        fill: "#f8f9fb",
        transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
        points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
      }, null)]), d("rect", {
        id: "Rectangle-Copy-15",
        fill: "url(#linearGradient-2-el-id-8321-17)",
        x: "13",
        y: "45",
        width: "40",
        height: "36"
      }, null), d("g", {
        id: "Rectangle-Copy-17",
        transform: "translate(53.000000, 45.000000)"
      }, [d("use", {
        id: "Mask",
        fill: "#e0e3e9",
        transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000)",
        "xlink:href": "#path-3-el-id-8321-17"
      }, null), d("polygon", {
        id: "Rectangle-Copy",
        fill: "#d5d7de",
        mask: "url(#mask-4-el-id-8321-17)",
        transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
        points: "7 0 24 0 20 18 7 16.5"
      }, null)]), d("polygon", {
        id: "Rectangle-Copy-18",
        fill: "#f8f9fb",
        transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
        points: "62 45 79 45 70 58 53 58"
      }, null)])])])])]), d("div", {
        class: "s-empty-description"
      }, [e.description ? e.description() : a.value ? a.value : "暂无数据"]), d("div", {
        class: "s-empty-footer"
      }, [(i = e.default) == null ? void 0 : i.call(e)])]);
    };
  }
}), Tr = {
  install(t) {
    t.component(st.name, st);
  }
}, kr = [
  Rt,
  Zt,
  tn,
  Bn,
  Vn,
  zn,
  Nt,
  Wn,
  Pr,
  Or,
  Tr
], Fr = {
  version: "0.0.1",
  install(t) {
    kr.forEach((e) => t.use(e));
  }
};
export {
  Be as Button,
  st as Empty,
  je as Form,
  fe as Icon,
  Ye as Input,
  Xe as Modal,
  Me as Pagination,
  ot as Popover,
  Ze as Tab,
  lt as Table,
  ge as TableColumn,
  Ke as Tabs,
  qe as Tree,
  Fr as default
};

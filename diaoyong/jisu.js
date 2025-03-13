function OutWord() {
    var e;
    e = (Words),
        document.write(e)
}
function checkIsFreeCommit(e) {
    return 1 == freeGames[e] ? 1 : 0
}
function logMessage(e) {
    console.log(e)
}
function checkPhone(e) {
    return !! /^1(3|4|5|7|8)\d{9}$/.test(e)
}
function checkAuthcode(e) {
    return "" != e && void 0 != e && !!new RegExp("^[0-9]*$").test(e)
}
function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
function errorAPI(e, t) {} !
    function(e, t) {
        function a(e) {
            var t = e.length,
                a = ce.type(e);
            return ! ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === a || "function" !== a && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
        }
        function n(e) {
            var t = he[e] = {};
            return ce.each(e.match(de) || [],
                function(e, a) {
                    t[a] = !0
                }),
                t
        }
        function i(e, a, n, i) {
            if (ce.acceptData(e)) {
                var s, r, o = ce.expando,
                    c = "string" == typeof a,
                    l = e.nodeType,
                    d = l ? ce.cache: e,
                    u = l ? e[o] : e[o] && o;
                if (u && d[u] && (i || d[u].data) || !c || n !== t) return u || (l ? e[o] = u = Z.pop() || ce.guid++:u = o),
                d[u] || (d[u] = {},
                l || (d[u].toJSON = ce.noop)),
                ("object" == typeof a || "function" == typeof a) && (i ? d[u] = ce.extend(d[u], a) : d[u].data = ce.extend(d[u].data, a)),
                    s = d[u],
                i || (s.data || (s.data = {}), s = s.data),
                n !== t && (s[ce.camelCase(a)] = n),
                    c ? null == (r = s[a]) && (r = s[ce.camelCase(a)]) : r = s,
                    r
            }
        }
        function s(e, t, a) {
            if (ce.acceptData(e)) {
                var n, i, s, r = e.nodeType,
                    c = r ? ce.cache: e,
                    l = r ? e[ce.expando] : ce.expando;
                if (c[l]) {
                    if (t && (s = a ? c[l] : c[l].data)) {
                        ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in s ? t = [t] : (t = ce.camelCase(t), t = t in s ? [t] : t.split(" "));
                        for (n = 0, i = t.length; i > n; n++) delete s[t[n]];
                        if (! (a ? o: ce.isEmptyObject)(s)) return
                    } (a || (delete c[l].data, o(c[l]))) && (r ? ce.cleanData([e], !0) : ce.support.deleteExpando || c != c.window ? delete c[l] : c[l] = null)
                }
            }
        }
        function r(e, a, n) {
            if (n === t && 1 === e.nodeType) {
                var i = "data-" + a.replace(Ae, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: me.test(n) ? ce.parseJSON(n) : n)
                    } catch(e) {}
                    ce.data(e, a, n)
                } else n = t
            }
            return n
        }
        function o(e) {
            var t;
            for (t in e) if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
            return ! 0
        }
        function c() {
            return ! 0
        }
        function l() {
            return ! 1
        }
        function d(e, t) {
            do {
                e = e[t]
            } while ( e && 1 !== e . nodeType );
            return e
        }
        function u(e, t, a) {
            if (t = t || 0, ce.isFunction(t)) return ce.grep(e,
                function(e, n) {
                    return !! t.call(e, n, e) === a
                });
            if (t.nodeType) return ce.grep(e,
                function(e) {
                    return e === t === a
                });
            if ("string" == typeof t) {
                var n = ce.grep(e,
                    function(e) {
                        return 1 === e.nodeType
                    });
                if (Pe.test(t)) return ce.filter(t, n, !a);
                t = ce.filter(t, n)
            }
            return ce.grep(e,
                function(e) {
                    return ce.inArray(e, t) >= 0 === a
                })
        }
        function v(e) {
            var t = Le.split("|"),
                a = e.createDocumentFragment();
            if (a.createElement) for (; t.length;) a.createElement(t.pop());
            return a
        }
        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function p(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type,
                e
        }
        function D(e) {
            var t = Ke.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
                e
        }
        function C(e, t) {
            for (var a, n = 0; null != (a = e[n]); n++) ce._data(a, "globalEval", !t || ce._data(t[n], "globalEval"))
        }
        function h(e, t) {
            if (1 === t.nodeType && ce.hasData(e)) {
                var a, n, i, s = ce._data(e),
                    r = ce._data(t, s),
                    o = s.events;
                if (o) {
                    delete r.handle,
                        r.events = {};
                    for (a in o) for (n = 0, i = o[a].length; i > n; n++) ce.event.add(t, a, o[a][n])
                }
                r.data && (r.data = ce.extend({},
                    r.data))
            }
        }
        function m(e, t) {
            var a, n, i;
            if (1 === t.nodeType) {
                if (a = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
                    i = ce._data(t);
                    for (n in i.events) ce.removeEvent(t, n, i.handle);
                    t.removeAttribute(ce.expando)
                }
                "script" === a && t.text !== e.text ? (p(t).text = e.text, D(t)) : "object" === a ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === a && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === a ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === a || "textarea" === a) && (t.defaultValue = e.defaultValue)
            }
        }
        function A(e, a) {
            var n, i, s = 0,
                r = typeof e.getElementsByTagName !== z ? e.getElementsByTagName(a || "*") : typeof e.querySelectorAll !== z ? e.querySelectorAll(a || "*") : t;
            if (!r) for (r = [], n = e.childNodes || e; null != (i = n[s]); s++) ! a || ce.nodeName(i, a) ? r.push(i) : ce.merge(r, A(i, a));
            return a === t || a && ce.nodeName(e, a) ? ce.merge([e], r) : r
        }
        function E(e) {
            ze.test(e.type) && (e.defaultChecked = e.checked)
        }
        function g(e, t) {
            if (t in e) return t;
            for (var a = t.charAt(0).toUpperCase() + t.slice(1), n = t, i = Dt.length; i--;) if ((t = Dt[i] + a) in e) return t;
            return n
        }
        function b(e, t) {
            return e = t || e,
            "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
        }
        function y(e, t) {
            for (var a, n, i, s = [], r = 0, o = e.length; o > r; r++) n = e[r],
            n.style && (s[r] = ce._data(n, "olddisplay"), a = n.style.display, t ? (s[r] || "none" !== a || (n.style.display = ""), "" === n.style.display && b(n) && (s[r] = ce._data(n, "olddisplay", I(n.nodeName)))) : s[r] || (i = b(n), (a && "none" !== a || !i) && ce._data(n, "olddisplay", i ? a: ce.css(n, "display"))));
            for (r = 0; o > r; r++) n = e[r],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "": "none"));
            return e
        }
        function _(e, t, a) {
            var n = ct.exec(t);
            return n ? Math.max(0, n[1] - (a || 0)) + (n[2] || "px") : t
        }
        function k(e, t, a, n, i) {
            for (var s = a === (n ? "border": "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2)"margin" === a && (r += ce.css(e, a + pt[s], !0, i)),
                n ? ("content" === a && (r -= ce.css(e, "padding" + pt[s], !0, i)), "margin" !== a && (r -= ce.css(e, "border" + pt[s] + "Width", !0, i))) : (r += ce.css(e, "padding" + pt[s], !0, i), "padding" !== a && (r += ce.css(e, "border" + pt[s] + "Width", !0, i)));
            return r
        }
        function x(e, t, a) {
            var n = !0,
                i = "width" === t ? e.offsetWidth: e.offsetHeight,
                s = tt(e),
                r = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, s);
            if (0 >= i || null == i) {
                if (i = at(e, t, s), (0 > i || null == i) && (i = e.style[t]), lt.test(i)) return i;
                n = r && (ce.support.boxSizingReliable || i === e.style[t]),
                    i = parseFloat(i) || 0
            }
            return i + k(e, t, a || (r ? "border": "content"), n, s) + "px"
        }
        function I(e) {
            var t = V,
                a = ut[e];
            return a || (a = w(e, t), "none" !== a && a || (et = (et || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (et[0].contentWindow || et[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), a = w(e, t), et.detach()), ut[e] = a),
                a
        }
        function w(e, t) {
            var a = ce(t.createElement(e)).appendTo(t.body),
                n = ce.css(a[0], "display");
            return a.remove(),
                n
        }
        function B(e, t, a, n) {
            var i;
            if (ce.isArray(t)) ce.each(t,
                function(t, i) {
                    a || Ct.test(e) ? n(e, i) : B(e + "[" + ("object" == typeof i ? t: "") + "]", i, a, n)
                });
            else if (a || "object" !== ce.type(t)) n(e, t);
            else for (i in t) B(e + "[" + i + "]", t[i], a, n)
        }
        function T(e) {
            return function(t, a) {
                "string" != typeof t && (a = t, t = "*");
                var n, i = 0,
                    s = t.toLowerCase().match(de) || [];
                if (ce.isFunction(a)) for (; n = s[i++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(a)) : (e[n] = e[n] || []).push(a)
            }
        }
        function S(e, a, n, i) {
            function s(c) {
                var l;
                return r[c] = !0,
                    ce.each(e[c] || [],
                        function(e, c) {
                            var d = c(a, n, i);
                            return "string" != typeof d || o || r[d] ? o ? !(l = d) : t: (a.dataTypes.unshift(d), s(d), !1)
                        }),
                    l
            }
            var r = {},
                o = e === Tt;
            return s(a.dataTypes[0]) || !r["*"] && s("*")
        }
        function F(e, a) {
            var n, i, s = ce.ajaxSettings.flatOptions || {};
            for (i in a) a[i] !== t && ((s[i] ? e: n || (n = {}))[i] = a[i]);
            return n && ce.extend(!0, e, n),
                e
        }
        function j(e, a, n) {
            var i, s, r, o, c = e.contents,
                l = e.dataTypes,
                d = e.responseFields;
            for (o in d) o in n && (a[d[o]] = n[o]);
            for (;
                "*" === l[0];) l.shift(),
            s === t && (s = e.mimeType || a.getResponseHeader("Content-Type"));
            if (s) for (o in c) if (c[o] && c[o].test(s)) {
                l.unshift(o);
                break
            }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    i || (i = o)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : t
        }
        function N(e, t) {
            var a, n, i, s, r = {},
                o = 0,
                c = e.dataTypes.slice(),
                l = c[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1]) for (i in e.converters) r[i.toLowerCase()] = e.converters[i];
            for (; n = c[++o];) if ("*" !== n) {
                if ("*" !== l && l !== n) {
                    if (! (i = r[l + " " + n] || r["* " + n])) for (a in r) if (s = a.split(" "), s[1] === n && (i = r[l + " " + s[0]] || r["* " + s[0]])) { ! 0 === i ? i = r[a] : !0 !== r[a] && (n = s[0], c.splice(o--, 0, n));
                        break
                    }
                    if (!0 !== i) if (i && e.throws) t = i(t);
                    else try {
                            t = i(t)
                        } catch(e) {
                            return {
                                state: "parsererror",
                                error: i ? e: "No conversion from " + l + " to " + n
                            }
                        }
                }
                l = n
            }
            return {
                state: "success",
                data: t
            }
        }
        function $() {
            try {
                return new e.XMLHttpRequest
            } catch(e) {}
        }
        function P() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch(e) {}
        }
        function M() {
            return setTimeout(function() {
                Ot = t
            }),
                Ot = ce.now()
        }
        function O(e, t) {
            ce.each(t,
                function(t, a) {
                    for (var n = (qt[t] || []).concat(qt["*"]), i = 0, s = n.length; s > i; i++) if (n[i].call(e, t, a)) return
                })
        }
        function L(e, t, a) {
            var n, i, s = 0,
                r = Gt.length,
                o = ce.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (i) return ! 1;
                    for (var t = Ot || M(), a = Math.max(0, l.startTime + l.duration - t), n = a / l.duration || 0, s = 1 - n, r = 0, c = l.tweens.length; c > r; r++) l.tweens[r].run(s);
                    return o.notifyWith(e, [l, s, a]),
                        1 > s && c ? a: (o.resolveWith(e, [l]), !1)
                },
                l = o.promise({
                    elem: e,
                    props: ce.extend({},
                        t),
                    opts: ce.extend(!0, {
                            specialEasing: {}
                        },
                        a),
                    originalProperties: t,
                    originalOptions: a,
                    startTime: Ot || M(),
                    duration: a.duration,
                    tweens: [],
                    createTween: function(t, a) {
                        var n = ce.Tween(e, l.opts, t, a, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(n),
                            n
                    },
                    stop: function(t) {
                        var a = 0,
                            n = t ? l.tweens.length: 0;
                        if (i) return this;
                        for (i = !0; n > a; a++) l.tweens[a].run(1);
                        return t ? o.resolveWith(e, [l, t]) : o.rejectWith(e, [l, t]),
                            this
                    }
                }),
                d = l.props;
            for (R(d, l.opts.specialEasing); r > s; s++) if (n = Gt[s].call(l, e, d, l.opts)) return n;
            return O(l, d),
            ce.isFunction(l.opts.start) && l.opts.start.call(e, l),
                ce.fx.timer(ce.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function R(e, t) {
            var a, n, i, s, r;
            for (i in e) if (n = ce.camelCase(i), s = t[n], a = e[i], ce.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = ce.cssHooks[n]) && "expand" in r) {
                a = r.expand(a),
                    delete e[n];
                for (i in a) i in e || (e[i] = a[i], t[i] = s)
            } else t[n] = s
        }
        function U(e, t, a) {
            var n, i, s, r, o, c, l, d, u, v = this,
                f = e.style,
                p = {},
                D = [],
                C = e.nodeType && b(e);
            a.queue || (d = ce._queueHooks(e, "fx"), null == d.unqueued && (d.unqueued = 0, u = d.empty.fire, d.empty.fire = function() {
                d.unqueued || u()
            }), d.unqueued++, v.always(function() {
                v.always(function() {
                    d.unqueued--,
                    ce.queue(e, "fx").length || d.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (a.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== I(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
            a.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || v.always(function() {
                f.overflow = a.overflow[0],
                    f.overflowX = a.overflow[1],
                    f.overflowY = a.overflow[2]
            }));
            for (i in t) if (r = t[i], Rt.exec(r)) {
                if (delete t[i], c = c || "toggle" === r, r === (C ? "hide": "show")) continue;
                D.push(i)
            }
            if (s = D.length) {
                o = ce._data(e, "fxshow") || ce._data(e, "fxshow", {}),
                "hidden" in o && (C = o.hidden),
                c && (o.hidden = !C),
                    C ? ce(e).show() : v.done(function() {
                        ce(e).hide()
                    }),
                    v.done(function() {
                        var t;
                        ce._removeData(e, "fxshow");
                        for (t in p) ce.style(e, t, p[t])
                    });
                for (i = 0; s > i; i++) n = D[i],
                    l = v.createTween(n, C ? o[n] : 0),
                    p[n] = o[n] || ce.style(e, n),
                n in o || (o[n] = l.start, C && (l.end = l.start, l.start = "width" === n || "height" === n ? 1 : 0))
            }
        }
        function H(e, t, a, n, i) {
            return new H.prototype.init(e, t, a, n, i)
        }
        function G(e, t) {
            var a, n = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) a = pt[i],
                n["margin" + a] = n["padding" + a] = e;
            return t && (n.opacity = n.width = e),
                n
        }
        function q(e) {
            return ce.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var W, X, z = typeof t,
            V = e.document,
            J = e.location,
            K = e.jQuery,
            Y = e.$,
            Q = {},
            Z = [],
            ee = "1.9.1",
            te = Z.concat,
            ae = Z.push,
            ne = Z.slice,
            ie = Z.indexOf,
            se = Q.toString,
            re = Q.hasOwnProperty,
            oe = ee.trim,
            ce = function(e, t) {
                return new ce.fn.init(e, t, X)
            },
            le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            de = /\S+/g,
            ue = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^[\],:{}\s]*$/,
            pe = function(e, t) {
                return t.toUpperCase()
            },
            De = function(e) { (V.addEventListener || "load" === e.type || "complete" === V.readyState) && (Ce(), ce.ready())
            },
            Ce = function() {
                V.addEventListener ? (V.removeEventListener("DOMContentLoaded", De, !1), e.removeEventListener("load", De, !1)) : (V.detachEvent("onreadystatechange", De), e.detachEvent("onload", De))
            };
        ce.fn = ce.prototype = {
            jquery: ee,
            constructor: ce,
            init: function(e, a, n) {
                var i, s;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (! (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ue.exec(e)) || !i[1] && a) return ! a || a.jquery ? (a || n).find(e) : this.constructor(a).find(e);
                    if (i[1]) {
                        if (a = a instanceof ce ? a[0] : a, ce.merge(this, ce.parseHTML(i[1], a && a.nodeType ? a.ownerDocument || a: V, !0)), ve.test(i[1]) && ce.isPlainObject(a)) for (i in a) ce.isFunction(this[i]) ? this[i](a[i]) : this.attr(i, a[i]);
                        return this
                    }
                    if ((s = V.getElementById(i[2])) && s.parentNode) {
                        if (s.id !== i[2]) return n.find(e);
                        this.length = 1,
                            this[0] = s
                    }
                    return this.context = V,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ne.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ce.merge(this.constructor(), e);
                return t.prevObject = this,
                    t.context = this.context,
                    t
            },
            each: function(e, t) {
                return ce.each(this, e, t)
            },
            ready: function(e) {
                return ce.ready.promise().done(e),
                    this
            },
            slice: function() {
                return this.pushStack(ne.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                    a = +e + (0 > e ? t: 0);
                return this.pushStack(a >= 0 && t > a ? [this[a]] : [])
            },
            map: function(e) {
                return this.pushStack(ce.map(this,
                    function(t, a) {
                        return e.call(t, a, t)
                    }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ae,
            sort: [].sort,
            splice: [].splice
        },
            ce.fn.init.prototype = ce.fn,
            ce.extend = ce.fn.extend = function() {
                var e, a, n, i, s, r, o = arguments[0] || {},
                    c = 1,
                    l = arguments.length,
                    d = !1;
                for ("boolean" == typeof o && (d = o, o = arguments[1] || {},
                    c = 2), "object" == typeof o || ce.isFunction(o) || (o = {}), l === c && (o = this, --c); l > c; c++) if (null != (s = arguments[c])) for (i in s) e = o[i],
                    n = s[i],
                o !== n && (d && n && (ce.isPlainObject(n) || (a = ce.isArray(n))) ? (a ? (a = !1, r = e && ce.isArray(e) ? e: []) : r = e && ce.isPlainObject(e) ? e: {},
                    o[i] = ce.extend(d, r, n)) : n !== t && (o[i] = n));
                return o
            },
            ce.extend({
                noConflict: function(t) {
                    return e.$ === ce && (e.$ = Y),
                    t && e.jQuery === ce && (e.jQuery = K),
                        ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ce.readyWait++:ce.ready(!0)
                },
                ready: function(e) {
                    if (!0 === e ? !--ce.readyWait: !ce.isReady) {
                        if (!V.body) return setTimeout(ce.ready);
                        ce.isReady = !0,
                        !0 !== e && --ce.readyWait > 0 || (W.resolveWith(V, [ce]), ce.fn.trigger && ce(V).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ce.type(e)
                },
                isArray: Array.isArray ||
                function(e) {
                    return "array" === ce.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return ! isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? Q[se.call(e)] || "object": typeof e
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return ! 1;
                    try {
                        if (e.constructor && !re.call(e, "constructor") && !re.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(e) {
                        return ! 1
                    }
                    var a;
                    for (a in e);
                    return a === t || re.call(e, a)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return ! 1;
                    return ! 0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, a) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (a = t, t = !1),
                        t = t || V;
                    var n = ve.exec(e),
                        i = !a && [];
                    return n ? [t.createElement(n[1])] : (n = ce.buildFragment([e], t, i), i && ce(i).remove(), ce.merge([], n.childNodes))
                },
                parseJSON: function(a) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(a) : null === a ? a: "string" == typeof a && (a = ce.trim(a)) && fe.test(a.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? Function("return " + a)() : (ce.error("Invalid JSON: " + a), t)
                },
                parseXML: function(a) {
                    var n, i;
                    if (!a || "string" != typeof a) return null;
                    try {
                        e.DOMParser ? (i = new DOMParser, n = i.parseFromString(a, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(a))
                    } catch(e) {
                        n = t
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + a),
                        n
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ce.trim(t) && (e.execScript ||
                        function(t) {
                            e.eval.call(e, t)
                        })(t)
                },
                camelCase: function(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, pe)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var i = 0,
                        s = e.length,
                        r = a(e);
                    if (n) {
                        if (r) for (; s > i && !1 !== t.apply(e[i], n); i++);
                        else for (i in e) if (!1 === t.apply(e[i], n)) break
                    } else if (r) for (; s > i && !1 !== t.call(e[i], i, e[i]); i++);
                    else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: oe && !oe.call("\ufeff ") ?
                    function(e) {
                        return null == e ? "": oe.call(e)
                    }: function(e) {
                        return null == e ? "": (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (a(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)),
                        n
                },
                inArray: function(e, t, a) {
                    var n;
                    if (t) {
                        if (ie) return ie.call(t, e, a);
                        for (n = t.length, a = a ? 0 > a ? Math.max(0, n + a) : a: 0; n > a; a++) if (a in t && t[a] === e) return a
                    }
                    return - 1
                },
                merge: function(e, a) {
                    var n = a.length,
                        i = e.length,
                        s = 0;
                    if ("number" == typeof n) for (; n > s; s++) e[i++] = a[s];
                    else for (; a[s] !== t;) e[i++] = a[s++];
                    return e.length = i,
                        e
                },
                grep: function(e, t, a) {
                    var n, i = [],
                        s = 0,
                        r = e.length;
                    for (a = !!a; r > s; s++) n = !!t(e[s], s),
                    a !== n && i.push(e[s]);
                    return i
                },
                map: function(e, t, n) {
                    var i, s = 0,
                        r = e.length,
                        o = a(e),
                        c = [];
                    if (o) for (; r > s; s++) null != (i = t(e[s], s, n)) && (c[c.length] = i);
                    else for (s in e) null != (i = t(e[s], s, n)) && (c[c.length] = i);
                    return te.apply([], c)
                },
                guid: 1,
                proxy: function(e, a) {
                    var n, i, s;
                    return "string" == typeof a && (s = e[a], a = e, e = s),
                        ce.isFunction(e) ? (n = ne.call(arguments, 2), i = function() {
                            return e.apply(a || this, n.concat(ne.call(arguments)))
                        },
                            i.guid = e.guid = e.guid || ce.guid++, i) : t
                },
                access: function(e, a, n, i, s, r, o) {
                    var c = 0,
                        l = e.length,
                        d = null == n;
                    if ("object" === ce.type(n)) {
                        s = !0;
                        for (c in n) ce.access(e, a, c, n[c], !0, r, o)
                    } else if (i !== t && (s = !0, ce.isFunction(i) || (o = !0), d && (o ? (a.call(e, i), a = null) : (d = a, a = function(e, t, a) {
                            return d.call(ce(e), a)
                        })), a)) for (; l > c; c++) a(e[c], n, o ? i: i.call(e[c], c, a(e[c], n)));
                    return s ? e: d ? a.call(e) : l ? a(e[0], n) : r
                },
                now: function() {
                    return (new Date).getTime()
                }
            }),
            ce.ready.promise = function(t) {
                if (!W) if (W = ce.Deferred(), "complete" === V.readyState) setTimeout(ce.ready);
                else if (V.addEventListener) V.addEventListener("DOMContentLoaded", De, !1),
                    e.addEventListener("load", De, !1);
                else {
                    V.attachEvent("onreadystatechange", De),
                        e.attachEvent("onload", De);
                    var a = !1;
                    try {
                        a = null == e.frameElement && V.documentElement
                    } catch(e) {}
                    a && a.doScroll &&
                    function e() {
                        if (!ce.isReady) {
                            try {
                                a.doScroll("left")
                            } catch(t) {
                                return setTimeout(e, 50)
                            }
                            Ce(),
                                ce.ready()
                        }
                    } ()
                }
                return W.promise(t)
            },
            ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                function(e, t) {
                    Q["[object " + t + "]"] = t.toLowerCase()
                }),
            X = ce(V);
        var he = {};
        ce.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || n(e) : ce.extend({},
                e);
            var a, i, s, r, o, c, l = [],
                d = !e.once && [],
                u = function(t) {
                    for (i = e.memory && t, s = !0, o = c || 0, c = 0, r = l.length, a = !0; l && r > o; o++) if (!1 === l[o].apply(t[0], t[1]) && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                    a = !1,
                    l && (d ? d.length && u(d.shift()) : i ? l = [] : v.disable())
                },
                v = {
                    add: function() {
                        if (l) {
                            var t = l.length; (function t(a) {
                                ce.each(a,
                                    function(a, n) {
                                        var i = ce.type(n);
                                        "function" === i ? e.unique && v.has(n) || l.push(n) : n && n.length && "string" !== i && t(n)
                                    })
                            })(arguments),
                                a ? r = l.length: i && (c = t, u(i))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ce.each(arguments,
                            function(e, t) {
                                for (var n; (n = ce.inArray(t, l, n)) > -1;) l.splice(n, 1),
                                a && (r >= n && r--, o >= n && o--)
                            }),
                            this
                    },
                    has: function(e) {
                        return e ? ce.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [],
                            this
                    },
                    disable: function() {
                        return l = d = i = t,
                            this
                    },
                    disabled: function() {
                        return ! l
                    },
                    lock: function() {
                        return d = t,
                        i || v.disable(),
                            this
                    },
                    locked: function() {
                        return ! d
                    },
                    fireWith: function(e, t) {
                        return t = t || [],
                            t = [e, t.slice ? t.slice() : t],
                        !l || s && !d || (a ? d.push(t) : u(t)),
                            this
                    },
                    fire: function() {
                        return v.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !! s
                    }
                };
            return v
        },
            ce.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]],
                        a = "pending",
                        n = {
                            state: function() {
                                return a
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments),
                                    this
                            },
                            then: function() {
                                var e = arguments;
                                return ce.Deferred(function(a) {
                                    ce.each(t,
                                        function(t, s) {
                                            var r = s[0],
                                                o = ce.isFunction(e[t]) && e[t];
                                            i[s[1]](function() {
                                                var e = o && o.apply(this, arguments);
                                                e && ce.isFunction(e.promise) ? e.promise().done(a.resolve).fail(a.reject).progress(a.notify) : a[r + "With"](this === n ? a.promise() : this, o ? [e] : arguments)
                                            })
                                        }),
                                        e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? ce.extend(e, n) : n
                            }
                        },
                        i = {};
                    return n.pipe = n.then,
                        ce.each(t,
                            function(e, s) {
                                var r = s[2],
                                    o = s[3];
                                n[s[1]] = r.add,
                                o && r.add(function() {
                                        a = o
                                    },
                                    t[1 ^ e][2].disable, t[2][2].lock),
                                    i[s[0]] = function() {
                                        return i[s[0] + "With"](this === i ? n: this, arguments),
                                            this
                                    },
                                    i[s[0] + "With"] = r.fireWith
                            }),
                        n.promise(i),
                    e && e.call(i, i),
                        i
                },
                when: function(e) {
                    var t, a, n, i = 0,
                        s = ne.call(arguments),
                        r = s.length,
                        o = 1 !== r || e && ce.isFunction(e.promise) ? r: 0,
                        c = 1 === o ? e: ce.Deferred(),
                        l = function(e, a, n) {
                            return function(i) {
                                a[e] = this,
                                    n[e] = arguments.length > 1 ? ne.call(arguments) : i,
                                    n === t ? c.notifyWith(a, n) : --o || c.resolveWith(a, n)
                            }
                        };
                    if (r > 1) for (t = Array(r), a = Array(r), n = Array(r); r > i; i++) s[i] && ce.isFunction(s[i].promise) ? s[i].promise().done(l(i, n, s)).fail(c.reject).progress(l(i, a, t)) : --o;
                    return o || c.resolveWith(n, s),
                        c.promise()
                }
            }),
            ce.support = function() {
                var t, a, n, i, s, r, o, c, l, d, u = V.createElement("div");
                if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = u.getElementsByTagName("*"), n = u.getElementsByTagName("a")[0], !a || !n || !a.length) return {};
                s = V.createElement("select"),
                    o = s.appendChild(V.createElement("option")),
                    i = u.getElementsByTagName("input")[0],
                    n.style.cssText = "top:1px;float:left;opacity:.5",
                    t = {
                        getSetAttribute: "t" !== u.className,
                        leadingWhitespace: 3 === u.firstChild.nodeType,
                        tbody: !u.getElementsByTagName("tbody").length,
                        htmlSerialize: !!u.getElementsByTagName("link").length,
                        style: /top/.test(n.getAttribute("style")),
                        hrefNormalized: "/a" === n.getAttribute("href"),
                        opacity: /^0.5/.test(n.style.opacity),
                        cssFloat: !!n.style.cssFloat,
                        checkOn: !!i.value,
                        optSelected: o.selected,
                        enctype: !!V.createElement("form").enctype,
                        html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
                        boxModel: "CSS1Compat" === V.compatMode,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0,
                        boxSizingReliable: !0,
                        pixelPosition: !1
                    },
                    i.checked = !0,
                    t.noCloneChecked = i.cloneNode(!0).checked,
                    s.disabled = !0,
                    t.optDisabled = !o.disabled;
                try {
                    delete u.test
                } catch(e) {
                    t.deleteExpando = !1
                }
                i = V.createElement("input"),
                    i.setAttribute("value", ""),
                    t.input = "" === i.getAttribute("value"),
                    i.value = "t",
                    i.setAttribute("type", "radio"),
                    t.radioValue = "t" === i.value,
                    i.setAttribute("checked", "t"),
                    i.setAttribute("name", "t"),
                    r = V.createDocumentFragment(),
                    r.appendChild(i),
                    t.appendChecked = i.checked,
                    t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked,
                u.attachEvent && (u.attachEvent("onclick",
                    function() {
                        t.noCloneEvent = !1
                    }), u.cloneNode(!0).click());
                for (d in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) u.setAttribute(c = "on" + d, "t"),
                    t[d + "Bubbles"] = c in e || !1 === u.attributes[c].expando;
                return u.style.backgroundClip = "content-box",
                    u.cloneNode(!0).style.backgroundClip = "",
                    t.clearCloneStyle = "content-box" === u.style.backgroundClip,
                    ce(function() {
                        var a, n, i, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                            r = V.getElementsByTagName("body")[0];
                        r && (a = V.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(a).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = u.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === u.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(u, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(u, null) || {
                            width: "4px"
                        }).width, n = u.appendChild(V.createElement("div")), n.style.cssText = u.style.cssText = s, n.style.marginRight = n.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof u.style.zoom !== z && (u.innerHTML = "", u.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(a), a = u = i = n = null)
                    }),
                    a = s = r = o = n = i = null,
                    t
            } ();
        var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ae = /([A-Z])/g;
        ce.extend({
            cache: {},
            expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return !! (e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando]) && !o(e)
            },
            data: function(e, t, a) {
                return i(e, t, a)
            },
            removeData: function(e, t) {
                return s(e, t)
            },
            _data: function(e, t, a) {
                return i(e, t, a, !0)
            },
            _removeData: function(e, t) {
                return s(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
                var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
                return ! t || !0 !== t && e.getAttribute("classid") === t
            }
        }),
            ce.fn.extend({
                data: function(e, a) {
                    var n, i, s = this[0],
                        o = 0,
                        c = null;
                    if (e === t) {
                        if (this.length && (c = ce.data(s), 1 === s.nodeType && !ce._data(s, "parsedAttrs"))) {
                            for (n = s.attributes; n.length > o; o++) i = n[o].name,
                            i.indexOf("data-") || (i = ce.camelCase(i.slice(5)), r(s, i, c[i]));
                            ce._data(s, "parsedAttrs", !0)
                        }
                        return c
                    }
                    return "object" == typeof e ? this.each(function() {
                        ce.data(this, e)
                    }) : ce.access(this,
                        function(a) {
                            return a === t ? s ? r(s, e, ce.data(s, e)) : null: (this.each(function() {
                                ce.data(this, e, a)
                            }), t)
                        },
                        null, a, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        ce.removeData(this, e)
                    })
                }
            }),
            ce.extend({
                queue: function(e, a, n) {
                    var i;
                    return e ? (a = (a || "fx") + "queue", i = ce._data(e, a), n && (!i || ce.isArray(n) ? i = ce._data(e, a, ce.makeArray(n)) : i.push(n)), i || []) : t
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var a = ce.queue(e, t),
                        n = a.length,
                        i = a.shift(),
                        s = ce._queueHooks(e, t),
                        r = function() {
                            ce.dequeue(e, t)
                        };
                    "inprogress" === i && (i = a.shift(), n--),
                        s.cur = i,
                    i && ("fx" === t && a.unshift("inprogress"), delete s.stop, i.call(e, r, s)),
                    !n && s && s.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var a = t + "queueHooks";
                    return ce._data(e, a) || ce._data(e, a, {
                        empty: ce.Callbacks("once memory").add(function() {
                            ce._removeData(e, t + "queue"),
                                ce._removeData(e, a)
                        })
                    })
                }
            }),
            ce.fn.extend({
                queue: function(e, a) {
                    var n = 2;
                    return "string" != typeof e && (a = e, e = "fx", n--),
                        n > arguments.length ? ce.queue(this[0], e) : a === t ? this: this.each(function() {
                            var t = ce.queue(this, e, a);
                            ce._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
                        })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ce.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = ce.fx ? ce.fx.speeds[e] || e: e,
                        t = t || "fx",
                        this.queue(t,
                            function(t, a) {
                                var n = setTimeout(t, e);
                                a.stop = function() {
                                    clearTimeout(n)
                                }
                            })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, a) {
                    var n, i = 1,
                        s = ce.Deferred(),
                        r = this,
                        o = this.length,
                        c = function() {--i || s.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (a = e, e = t), e = e || "fx"; o--;)(n = ce._data(r[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(c));
                    return c(),
                        s.promise(a)
                }
            });
        var Ee, ge, be = /[\t\r\n]/g,
            ye = /^(?:input|select|textarea|button|object)$/i,
            _e = /^(?:a|area)$/i,
            ke = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            xe = /^(?:checked|selected)$/i,
            Ie = ce.support.getSetAttribute,
            we = ce.support.input;
        ce.fn.extend({
            attr: function(e, t) {
                return ce.access(this, ce.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ce.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ce.access(this, ce.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ce.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch(e) {}
                    })
            },
            addClass: function(e) {
                var t, a, n, i, s, r = 0,
                    o = this.length,
                    c = "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).addClass(e.call(this, t, this.className))
                });
                if (c) for (t = (e || "").match(de) || []; o > r; r++) if (a = this[r], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(be, " ") : " ")) {
                    for (s = 0; i = t[s++];) 0 > n.indexOf(" " + i + " ") && (n += i + " ");
                    a.className = ce.trim(n)
                }
                return this
            },
            removeClass: function(e) {
                var t, a, n, i, s, r = 0,
                    o = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (ce.isFunction(e)) return this.each(function(t) {
                    ce(this).removeClass(e.call(this, t, this.className))
                });
                if (c) for (t = (e || "").match(de) || []; o > r; r++) if (a = this[r], n = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(be, " ") : "")) {
                    for (s = 0; i = t[s++];) for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                    a.className = e ? ce.trim(n) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var a = typeof e,
                    n = "boolean" == typeof t;
                return ce.isFunction(e) ? this.each(function(a) {
                    ce(this).toggleClass(e.call(this, a, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === a) for (var i, s = 0,
                                                 r = ce(this), o = t, c = e.match(de) || []; i = c[s++];) o = n ? o: !r.hasClass(i),
                        r[o ? "addClass": "removeClass"](i);
                    else(a === z || "boolean" === a) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "": ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ",
                         a = 0,
                         n = this.length; n > a; a++) if (1 === this[a].nodeType && (" " + this[a].className + " ").replace(be, " ").indexOf(t) >= 0) return ! 0;
                return ! 1
            },
            val: function(e) {
                var a, n, i, s = this[0];
                return arguments.length ? (i = ce.isFunction(e), this.each(function(a) {
                    var s, r = ce(this);
                    1 === this.nodeType && (s = i ? e.call(this, a, r.val()) : e, null == s ? s = "": "number" == typeof s ? s += "": ce.isArray(s) && (s = ce.map(s,
                        function(e) {
                            return null == e ? "": e + ""
                        })), (n = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
                })) : s ? (n = ce.valHooks[s.type] || ce.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (a = n.get(s, "value")) !== t ? a: (a = s.value, "string" == typeof a ? a.replace(/\r/g, "") : null == a ? "": a)) : void 0
            }
        }),
            ce.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return ! t || t.specified ? e.value: e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, a, n = e.options,
                                     i = e.selectedIndex,
                                     s = "select-one" === e.type || 0 > i,
                                     r = s ? null: [], o = s ? i + 1 : n.length, c = 0 > i ? o: s ? i: 0; o > c; c++) if (a = n[c], !(!a.selected && c !== i || (ce.support.optDisabled ? a.disabled: null !== a.getAttribute("disabled")) || a.parentNode.disabled && ce.nodeName(a.parentNode, "optgroup"))) {
                                if (t = ce(a).val(), s) return t;
                                r.push(t)
                            }
                            return r
                        },
                        set: function(e, t) {
                            var a = ce.makeArray(t);
                            return ce(e).find("option").each(function() {
                                this.selected = ce.inArray(ce(this).val(), a) >= 0
                            }),
                            a.length || (e.selectedIndex = -1),
                                a
                        }
                    }
                },
                attr: function(e, a, n) {
                    var i, s, r, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === z ? ce.prop(e, a, n) : (s = 1 !== o || !ce.isXMLDoc(e), s && (a = a.toLowerCase(), i = ce.attrHooks[a] || (ke.test(a) ? ge: Ee)), n === t ? i && s && "get" in i && null !== (r = i.get(e, a)) ? r: (typeof e.getAttribute !== z && (r = e.getAttribute(a)), null == r ? t: r) : null !== n ? i && s && "set" in i && (r = i.set(e, n, a)) !== t ? r: (e.setAttribute(a, n + ""), n) : (ce.removeAttr(e, a), t))
                },
                removeAttr: function(e, t) {
                    var a, n, i = 0,
                        s = t && t.match(de);
                    if (s && 1 === e.nodeType) for (; a = s[i++];) n = ce.propFix[a] || a,
                        ke.test(a) ? !Ie && xe.test(a) ? e[ce.camelCase("default-" + a)] = e[n] = !1 : e[n] = !1 : ce.attr(e, a, ""),
                        e.removeAttribute(Ie ? a: n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                                var a = e.value;
                                return e.setAttribute("type", t),
                                a && (e.value = a),
                                    t
                            }
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, a, n) {
                    var i, s, r, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !ce.isXMLDoc(e),
                    r && (a = ce.propFix[a] || a, s = ce.propHooks[a]),
                        n !== t ? s && "set" in s && (i = s.set(e, n, a)) !== t ? i: e[a] = n: s && "get" in s && null !== (i = s.get(e, a)) ? i: e[a]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var a = e.getAttributeNode("tabindex");
                            return a && a.specified ? parseInt(a.value, 10) : ye.test(e.nodeName) || _e.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }),
            ge = {
                get: function(e, a) {
                    var n = ce.prop(e, a),
                        i = "boolean" == typeof n && e.getAttribute(a),
                        s = "boolean" == typeof n ? we && Ie ? null != i: xe.test(a) ? e[ce.camelCase("default-" + a)] : !!i: e.getAttributeNode(a);
                    return s && !1 !== s.value ? a.toLowerCase() : t
                },
                set: function(e, t, a) {
                    return ! 1 === t ? ce.removeAttr(e, a) : we && Ie || !xe.test(a) ? e.setAttribute(!Ie && ce.propFix[a] || a, a) : e[ce.camelCase("default-" + a)] = e[a] = !0,
                        a
                }
            },
        we && Ie || (ce.attrHooks.value = {
            get: function(e, a) {
                var n = e.getAttributeNode(a);
                return ce.nodeName(e, "input") ? e.defaultValue: n && n.specified ? n.value: t
            },
            set: function(e, a, n) {
                return ce.nodeName(e, "input") ? (e.defaultValue = a, t) : Ee && Ee.set(e, a, n)
            }
        }),
        Ie || (Ee = ce.valHooks.button = {
            get: function(e, a) {
                var n = e.getAttributeNode(a);
                return n && ("id" === a || "name" === a || "coords" === a ? "" !== n.value: n.specified) ? n.value: t
            },
            set: function(e, a, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                    i.value = a += "",
                    "value" === n || a === e.getAttribute(n) ? a: t
            }
        },
            ce.attrHooks.contenteditable = {
                get: Ee.get,
                set: function(e, t, a) {
                    Ee.set(e, "" !== t && t, a)
                }
            },
            ce.each(["width", "height"],
                function(e, a) {
                    ce.attrHooks[a] = ce.extend(ce.attrHooks[a], {
                        set: function(e, n) {
                            return "" === n ? (e.setAttribute(a, "auto"), n) : t
                        }
                    })
                })),
        ce.support.hrefNormalized || (ce.each(["href", "src", "width", "height"],
            function(e, a) {
                ce.attrHooks[a] = ce.extend(ce.attrHooks[a], {
                    get: function(e) {
                        var n = e.getAttribute(a, 2);
                        return null == n ? t: n
                    }
                })
            }), ce.each(["href", "src"],
            function(e, t) {
                ce.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })),
        ce.support.style || (ce.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        ce.support.optSelected || (ce.propHooks.selected = ce.extend(ce.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        ce.support.enctype || (ce.propFix.enctype = "encoding"),
        ce.support.checkOn || ce.each(["radio", "checkbox"],
            function() {
                ce.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on": e.value
                    }
                }
            }),
            ce.each(["radio", "checkbox"],
                function() {
                    ce.valHooks[this] = ce.extend(ce.valHooks[this], {
                        set: function(e, a) {
                            return ce.isArray(a) ? e.checked = ce.inArray(ce(e).val(), a) >= 0 : t
                        }
                    })
                });
        var Be = /^(?:input|select|textarea)$/i,
            Te = /^key/,
            Se = /^(?:mouse|contextmenu)|click/,
            Fe = /^(?:focusinfocus|focusoutblur)$/,
            je = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(e, a, n, i, s) {
                var r, o, c, l, d, u, v, f, p, D, C, h = ce._data(e);
                if (h) {
                    for (n.handler && (l = n, n = l.handler, s = l.selector), n.guid || (n.guid = ce.guid++), (o = h.events) || (o = h.events = {}), (u = h.handle) || (u = h.handle = function(e) {
                        return typeof ce === z || e && ce.event.triggered === e.type ? t: ce.event.dispatch.apply(u.elem, arguments)
                    },
                        u.elem = e), a = (a || "").match(de) || [""], c = a.length; c--;) r = je.exec(a[c]) || [],
                        p = C = r[1],
                        D = (r[2] || "").split(".").sort(),
                        d = ce.event.special[p] || {},
                        p = (s ? d.delegateType: d.bindType) || p,
                        d = ce.event.special[p] || {},
                        v = ce.extend({
                                type: p,
                                origType: C,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: s,
                                needsContext: s && ce.expr.match.needsContext.test(s),
                                namespace: D.join(".")
                            },
                            l),
                    (f = o[p]) || (f = o[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, D, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))),
                    d.add && (d.add.call(e, v), v.handler.guid || (v.handler.guid = n.guid)),
                        s ? f.splice(f.delegateCount++, 0, v) : f.push(v),
                        ce.event.global[p] = !0;
                    e = null
                }
            },
            remove: function(e, t, a, n, i) {
                var s, r, o, c, l, d, u, v, f, p, D, C = ce.hasData(e) && ce._data(e);
                if (C && (d = C.events)) {
                    for (t = (t || "").match(de) || [""], l = t.length; l--;) if (o = je.exec(t[l]) || [], f = D = o[1], p = (o[2] || "").split(".").sort(), f) {
                        for (u = ce.event.special[f] || {},
                                 f = (n ? u.delegateType: u.bindType) || f, v = d[f] || [], o = o[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = s = v.length; s--;) r = v[s],
                        !i && D !== r.origType || a && a.guid !== r.guid || o && !o.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (v.splice(s, 1), r.selector && v.delegateCount--, u.remove && u.remove.call(e, r));
                        c && !v.length && (u.teardown && !1 !== u.teardown.call(e, p, C.handle) || ce.removeEvent(e, f, C.handle), delete d[f])
                    } else for (f in d) ce.event.remove(e, f + t[l], a, n, !0);
                    ce.isEmptyObject(d) && (delete C.handle, ce._removeData(e, "events"))
                }
            },
            trigger: function(a, n, i, s) {
                var r, o, c, l, d, u, v, f = [i || V],
                    p = re.call(a, "type") ? a.type: a,
                    D = re.call(a, "namespace") ? a.namespace.split(".") : [];
                if (c = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Fe.test(p + ce.event.triggered) && (p.indexOf(".") >= 0 && (D = p.split("."), p = D.shift(), D.sort()), o = 0 > p.indexOf(":") && "on" + p, a = a[ce.expando] ? a: new ce.Event(p, "object" == typeof a && a), a.isTrigger = !0, a.namespace = D.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = t, a.target || (a.target = i), n = null == n ? [a] : ce.makeArray(n, [a]), d = ce.event.special[p] || {},
                    s || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!s && !d.noBubble && !ce.isWindow(i)) {
                        for (l = d.delegateType || p, Fe.test(l + p) || (c = c.parentNode); c; c = c.parentNode) f.push(c),
                            u = c;
                        u === (i.ownerDocument || V) && f.push(u.defaultView || u.parentWindow || e)
                    }
                    for (v = 0; (c = f[v++]) && !a.isPropagationStopped();) a.type = v > 1 ? l: d.bindType || p,
                        r = (ce._data(c, "events") || {})[a.type] && ce._data(c, "handle"),
                    r && r.apply(c, n),
                    (r = o && c[o]) && ce.acceptData(c) && r.apply && !1 === r.apply(c, n) && a.preventDefault();
                    if (a.type = p, !(s || a.isDefaultPrevented() || d._default && !1 !== d._default.apply(i.ownerDocument, n) || "click" === p && ce.nodeName(i, "a") || !ce.acceptData(i) || !o || !i[p] || ce.isWindow(i))) {
                        u = i[o],
                        u && (i[o] = null),
                            ce.event.triggered = p;
                        try {
                            i[p]()
                        } catch(e) {}
                        ce.event.triggered = t,
                        u && (i[o] = u)
                    }
                    return a.result
                }
            },
            dispatch: function(e) {
                e = ce.event.fix(e);
                var a, n, i, s, r, o = [],
                    c = ne.call(arguments),
                    l = (ce._data(this, "events") || {})[e.type] || [],
                    d = ce.event.special[e.type] || {};
                if (c[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                    for (o = ce.event.handlers.call(this, e, l), a = 0; (s = o[a++]) && !e.isPropagationStopped();) for (e.currentTarget = s.elem, r = 0; (i = s.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, (n = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, c)) !== t && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, e),
                        e.result
                }
            },
            handlers: function(e, a) {
                var n, i, s, r, o = [],
                    c = a.delegateCount,
                    l = e.target;
                if (c && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                    for (s = [], r = 0; c > r; r++) i = a[r],
                        n = i.selector + " ",
                    s[n] === t && (s[n] = i.needsContext ? ce(n, this).index(l) >= 0 : ce.find(n, this, null, [l]).length),
                    s[n] && s.push(i);
                    s.length && o.push({
                        elem: l,
                        handlers: s
                    })
                }
                return a.length > c && o.push({
                    elem: this,
                    handlers: a.slice(c)
                }),
                    o
            },
            fix: function(e) {
                if (e[ce.expando]) return e;
                var t, a, n, i = e.type,
                    s = e,
                    r = this.fixHooks[i];
                for (r || (this.fixHooks[i] = r = Se.test(i) ? this.mouseHooks: Te.test(i) ? this.keyHooks: {}), n = r.props ? this.props.concat(r.props) : this.props, e = new ce.Event(s), t = n.length; t--;) a = n[t],
                    e[a] = s[a];
                return e.target || (e.target = s.srcElement || V),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    r.filter ? r.filter(e, s) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, a) {
                    var n, i, s, r = a.button,
                        o = a.fromElement;
                    return null == e.pageX && null != a.clientX && (i = e.target.ownerDocument || V, s = i.documentElement, n = i.body, e.pageX = a.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = a.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && o && (e.relatedTarget = o === e.target ? a.toElement: o),
                    e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== V.activeElement && this.focus) try {
                            return this.focus(),
                                !1
                        } catch(e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, a, n) {
                var i = ce.extend(new ce.Event, a, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? ce.event.trigger(i, null, t) : ce.event.dispatch.call(t, i),
                i.isDefaultPrevented() && a.preventDefault()
            }
        },
            ce.removeEvent = V.removeEventListener ?
                function(e, t, a) {
                    e.removeEventListener && e.removeEventListener(t, a, !1)
                }: function(e, t, a) {
                    var n = "on" + t;
                    e.detachEvent && (typeof e[n] === z && (e[n] = null), e.detachEvent(n, a))
                },
            ce.Event = function(e, a) {
                return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? c: l) : this.type = e, a && ce.extend(this, a), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0, t) : new ce.Event(e, a)
            },
            ce.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = c,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = c,
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = c,
                        this.stopPropagation()
                }
            },
            ce.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                function(e, t) {
                    ce.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var a, n = this,
                                i = e.relatedTarget,
                                s = e.handleObj;
                            return (!i || i !== n && !ce.contains(n, i)) && (e.type = s.origType, a = s.handler.apply(this, arguments), e.type = t),
                                a
                        }
                    }
                }),
        ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ! ce.nodeName(this, "form") && (ce.event.add(this, "click._submit keypress._submit",
                    function(e) {
                        var a = e.target,
                            n = ce.nodeName(a, "input") || ce.nodeName(a, "button") ? a.form: t;
                        n && !ce._data(n, "submitBubbles") && (ce.event.add(n, "submit._submit",
                            function(e) {
                                e._submit_bubble = !0
                            }), ce._data(n, "submitBubbles", !0))
                    }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ! ce.nodeName(this, "form") && (ce.event.remove(this, "._submit"), t)
            }
        }),
        ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return Be.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change",
                    function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), ce.event.add(this, "click._change",
                    function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            ce.event.simulate("change", this, e, !0)
                    })), !1) : (ce.event.add(this, "beforeactivate._change",
                    function(e) {
                        var t = e.target;
                        Be.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change",
                            function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                            }), ce._data(t, "changeBubbles", !0))
                    }), t)
            },
            handle: function(e) {
                var a = e.target;
                return this !== a || e.isSimulated || e.isTrigger || "radio" !== a.type && "checkbox" !== a.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ce.event.remove(this, "._change"),
                    !Be.test(this.nodeName)
            }
        }),
        ce.support.focusinBubbles || ce.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                var a = 0,
                    n = function(e) {
                        ce.event.simulate(t, e.target, ce.event.fix(e), !0)
                    };
                ce.event.special[t] = {
                    setup: function() {
                        0 == a++&&V.addEventListener(e, n, !0)
                    },
                    teardown: function() {
                        0 == --a && V.removeEventListener(e, n, !0)
                    }
                }
            }),
            ce.fn.extend({
                on: function(e, a, n, i, s) {
                    var r, o;
                    if ("object" == typeof e) {
                        "string" != typeof a && (n = n || a, a = t);
                        for (r in e) this.on(r, a, n, e[r], s);
                        return this
                    }
                    if (null == n && null == i ? (i = a, n = a = t) : null == i && ("string" == typeof a ? (i = n, n = t) : (i = n, n = a, a = t)), !1 === i) i = l;
                    else if (!i) return this;
                    return 1 === s && (o = i, i = function(e) {
                        return ce().off(e),
                            o.apply(this, arguments)
                    },
                        i.guid = o.guid || (o.guid = ce.guid++)),
                        this.each(function() {
                            ce.event.add(this, e, i, n, a)
                        })
                },
                one: function(e, t, a, n) {
                    return this.on(e, t, a, n, 1)
                },
                off: function(e, a, n) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                        ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (s in e) this.off(s, a, e[s]);
                        return this
                    }
                    return (!1 === a || "function" == typeof a) && (n = a, a = t),
                    !1 === n && (n = l),
                        this.each(function() {
                            ce.event.remove(this, e, n, a)
                        })
                },
                bind: function(e, t, a) {
                    return this.on(e, null, t, a)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, a, n) {
                    return this.on(t, e, a, n)
                },
                undelegate: function(e, t, a) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        ce.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, a) {
                    var n = this[0];
                    return n ? ce.event.trigger(e, a, n, !0) : t
                }
            }),
            function(e, t) {
                function a(e) {
                    return ue.test(e + "")
                }
                function n() {
                    var e, t = [];
                    return e = function(a, n) {
                        return t.push(a += " ") > b.cacheLength && delete e[t.shift()],
                            e[a] = n
                    }
                }
                function i(e) {
                    return e[M] = !0,
                        e
                }
                function s(e) {
                    var t = B.createElement("div");
                    try {
                        return e(t)
                    } catch(e) {
                        return ! 1
                    } finally {
                        t = null
                    }
                }
                function r(e, t, a, n) {
                    var i, s, r, o, c, u, v, f, p, D;
                    if ((t ? t.ownerDocument || t: O) !== B && w(t), t = t || B, a = a || [], !e || "string" != typeof e) return a;
                    if (1 !== (o = t.nodeType) && 9 !== o) return [];
                    if (!S && !n) {
                        if (i = ve.exec(e)) if (r = i[1]) {
                            if (9 === o) {
                                if (! (s = t.getElementById(r)) || !s.parentNode) return a;
                                if (s.id === r) return a.push(s),
                                    a
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && $(t, s) && s.id === r) return a.push(s),
                                a
                        } else {
                            if (i[2]) return J.apply(a, K.call(t.getElementsByTagName(e), 0)),
                                a;
                            if ((r = i[3]) && L.getByClassName && t.getElementsByClassName) return J.apply(a, K.call(t.getElementsByClassName(r), 0)),
                                a
                        }
                        if (L.qsa && !F.test(e)) {
                            if (v = !0, f = M, p = t, D = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                                for (u = l(e), (v = t.getAttribute("id")) ? f = v.replace(De, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = u.length; c--;) u[c] = f + d(u[c]);
                                p = de.test(e) && t.parentNode || t,
                                    D = u.join(",")
                            }
                            if (D) try {
                                return J.apply(a, K.call(p.querySelectorAll(D), 0)),
                                    a
                            } catch(e) {} finally {
                                v || t.removeAttribute("id")
                            }
                        }
                    }
                    return m(e.replace(ne, "$1"), t, a, n)
                }
                function o(e, t) {
                    var a = t && e,
                        n = a && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (n) return n;
                    if (a) for (; a = a.nextSibling;) if (a === t) return - 1;
                    return e ? 1 : -1
                }
                function c(e) {
                    return i(function(t) {
                        return t = +t,
                            i(function(a, n) {
                                for (var i, s = e([], a.length, t), r = s.length; r--;) a[i = s[r]] && (a[i] = !(n[i] = a[i]))
                            })
                    })
                }
                function l(e, t) {
                    var a, n, i, s, o, c, l, d = G[e + " "];
                    if (d) return t ? 0 : d.slice(0);
                    for (o = e, c = [], l = b.preFilter; o;) { (!a || (n = ie.exec(o))) && (n && (o = o.slice(n[0].length) || o), c.push(i = [])),
                        a = !1,
                    (n = se.exec(o)) && (a = n.shift(), i.push({
                        value: a,
                        type: n[0].replace(ne, " ")
                    }), o = o.slice(a.length));
                        for (s in b.filter) ! (n = le[s].exec(o)) || l[s] && !(n = l[s](n)) || (a = n.shift(), i.push({
                            value: a,
                            type: s,
                            matches: n
                        }), o = o.slice(a.length));
                        if (!a) break
                    }
                    return t ? o.length: o ? r.error(e) : G(e, c).slice(0)
                }
                function d(e) {
                    for (var t = 0,
                             a = e.length,
                             n = ""; a > t; t++) n += e[t].value;
                    return n
                }
                function u(e, t, a) {
                    var n = t.dir,
                        i = a && "parentNode" === n,
                        s = U++;
                    return t.first ?
                        function(t, a, s) {
                            for (; t = t[n];) if (1 === t.nodeType || i) return e(t, a, s)
                        }: function(t, a, r) {
                            var o, c, l, d = R + " " + s;
                            if (r) {
                                for (; t = t[n];) if ((1 === t.nodeType || i) && e(t, a, r)) return ! 0
                            } else for (; t = t[n];) if (1 === t.nodeType || i) if (l = t[M] || (t[M] = {}), (c = l[n]) && c[0] === d) {
                                if (!0 === (o = c[1]) || o === g) return ! 0 === o
                            } else if (c = l[n] = [d], c[1] = e(t, a, r) || g, !0 === c[1]) return ! 0
                        }
                }
                function v(e) {
                    return e.length > 1 ?
                        function(t, a, n) {
                            for (var i = e.length; i--;) if (!e[i](t, a, n)) return ! 1;
                            return ! 0
                        }: e[0]
                }
                function f(e, t, a, n, i) {
                    for (var s, r = [], o = 0, c = e.length, l = null != t; c > o; o++)(s = e[o]) && (!a || a(s, n, i)) && (r.push(s), l && t.push(o));
                    return r
                }
                function p(e, t, a, n, s, r) {
                    return n && !n[M] && (n = p(n)),
                    s && !s[M] && (s = p(s, r)),
                        i(function(i, r, o, c) {
                            var l, d, u, v = [],
                                p = [],
                                D = r.length,
                                C = i || h(t || "*", o.nodeType ? [o] : o, []),
                                m = !e || !i && t ? C: f(C, v, e, o, c),
                                A = a ? s || (i ? e: D || n) ? [] : r: m;
                            if (a && a(m, A, o, c), n) for (l = f(A, p), n(l, [], o, c), d = l.length; d--;)(u = l[d]) && (A[p[d]] = !(m[p[d]] = u));
                            if (i) {
                                if (s || e) {
                                    if (s) {
                                        for (l = [], d = A.length; d--;)(u = A[d]) && l.push(m[d] = u);
                                        s(null, A = [], l, c)
                                    }
                                    for (d = A.length; d--;)(u = A[d]) && (l = s ? Y.call(i, u) : v[d]) > -1 && (i[l] = !(r[l] = u))
                                }
                            } else A = f(A === r ? A.splice(D, A.length) : A),
                                s ? s(null, r, A, c) : J.apply(r, A)
                        })
                }
                function D(e) {
                    for (var t, a, n, i = e.length,
                             s = b.relative[e[0].type], r = s || b.relative[" "], o = s ? 1 : 0, c = u(function(e) {
                                return e === t
                            },
                            r, !0), l = u(function(e) {
                                return Y.call(t, e) > -1
                            },
                            r, !0), f = [function(e, a, n) {
                            return ! s && (n || a !== I) || ((t = a).nodeType ? c(e, a, n) : l(e, a, n))
                        }]; i > o; o++) if (a = b.relative[e[o].type]) f = [u(v(f), a)];
                    else {
                        if (a = b.filter[e[o].type].apply(null, e[o].matches), a[M]) {
                            for (n = ++o; i > n && !b.relative[e[n].type]; n++);
                            return p(o > 1 && v(f), o > 1 && d(e.slice(0, o - 1)).replace(ne, "$1"), a, n > o && D(e.slice(o, n)), i > n && D(e = e.slice(n)), i > n && d(e))
                        }
                        f.push(a)
                    }
                    return v(f)
                }
                function C(e, t) {
                    var a = 0,
                        n = t.length > 0,
                        s = e.length > 0,
                        o = function(i, o, c, l, d) {
                            var u, v, p, D = [],
                                C = 0,
                                h = "0",
                                m = i && [],
                                A = null != d,
                                E = I,
                                y = i || s && b.find.TAG("*", d && o.parentNode || o),
                                _ = R += null == E ? 1 : Math.random() || .1;
                            for (A && (I = o !== B && o, g = a); null != (u = y[h]); h++) {
                                if (s && u) {
                                    for (v = 0; p = e[v++];) if (p(u, o, c)) {
                                        l.push(u);
                                        break
                                    }
                                    A && (R = _, g = ++a)
                                }
                                n && ((u = !p && u) && C--, i && m.push(u))
                            }
                            if (C += h, n && h !== C) {
                                for (v = 0; p = t[v++];) p(m, D, o, c);
                                if (i) {
                                    if (C > 0) for (; h--;) m[h] || D[h] || (D[h] = V.call(l));
                                    D = f(D)
                                }
                                J.apply(l, D),
                                A && !i && D.length > 0 && C + t.length > 1 && r.uniqueSort(l)
                            }
                            return A && (R = _, I = E),
                                m
                        };
                    return n ? i(o) : o
                }
                function h(e, t, a) {
                    for (var n = 0,
                             i = t.length; i > n; n++) r(e, t[n], a);
                    return a
                }
                function m(e, t, a, n) {
                    var i, s, r, o, c, u = l(e);
                    if (!n && 1 === u.length) {
                        if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && 9 === t.nodeType && !S && b.relative[s[1].type]) {
                            if (! (t = b.find.ID(r.matches[0].replace(Ce, he), t)[0])) return a;
                            e = e.slice(s.shift().value.length)
                        }
                        for (i = le.needsContext.test(e) ? 0 : s.length; i--&&(r = s[i], !b.relative[o = r.type]);) if ((c = b.find[o]) && (n = c(r.matches[0].replace(Ce, he), de.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(i, 1), !(e = n.length && d(s))) return J.apply(a, K.call(n, 0)),
                                a;
                            break
                        }
                    }
                    return k(e, u)(n, t, S, a, de.test(e)),
                        a
                }
                function A() {}
                var E, g, b, y, _, k, x, I, w, B, T, S, F, j, N, $, P, M = "sizzle" + -new Date,
                    O = e.document,
                    L = {},
                    R = 0,
                    U = 0,
                    H = n(),
                    G = n(),
                    q = n(),
                    W = typeof t,
                    X = 1 << 31,
                    z = [],
                    V = z.pop,
                    J = z.push,
                    K = z.slice,
                    Y = z.indexOf ||
                        function(e) {
                            for (var t = 0,
                                     a = this.length; a > t; t++) if (this[t] === e) return t;
                            return - 1
                        },
                    Q = "[\\x20\\t\\r\\n\\f]",
                    Z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ee = Z.replace("w", "w#"),
                    te = "\\[" + Q + "*(" + Z + ")" + Q + "*(?:([*^$|!~]?=)" + Q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + Q + "*\\]",
                    ae = ":(" + Z + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)",
                    ne = RegExp("^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$", "g"),
                    ie = RegExp("^" + Q + "*," + Q + "*"),
                    se = RegExp("^" + Q + "*([\\x20\\t\\r\\n\\f>+~])" + Q + "*"),
                    re = RegExp(ae),
                    oe = RegExp("^" + ee + "$"),
                    le = {
                        ID: RegExp("^#(" + Z + ")"),
                        CLASS: RegExp("^\\.(" + Z + ")"),
                        NAME: RegExp("^\\[name=['\"]?(" + Z + ")['\"]?\\]"),
                        TAG: RegExp("^(" + Z.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + te),
                        PSEUDO: RegExp("^" + ae),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)", "i"),
                        needsContext: RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)", "i")
                    },
                    de = /[\x20\t\r\n\f]*[+~]/,
                    ue = /^[^{]+\{\s*\[native code/,
                    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    fe = /^(?:input|select|textarea|button)$/i,
                    pe = /^h\d$/i,
                    De = /'|\\/g,
                    Ce = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    he = function(e, t) {
                        var a = "0x" + t - 65536;
                        return a !== a ? t: 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    };
                try {
                    K.call(O.documentElement.childNodes, 0)[0].nodeType
                } catch(e) {
                    K = function(e) {
                        for (var t, a = []; t = this[e++];) a.push(t);
                        return a
                    }
                }
                _ = r.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !! t && "HTML" !== t.nodeName
                },
                    w = r.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e: O;
                        return n !== B && 9 === n.nodeType && n.documentElement ? (B = n, T = n.documentElement, S = _(n), L.tagNameNoComments = s(function(e) {
                            return e.appendChild(n.createComment("")),
                                !e.getElementsByTagName("*").length
                        }), L.attributes = s(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }), L.getByClassName = s(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                            !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
                        }), L.getByName = s(function(e) {
                            e.id = M + 0,
                                e.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>",
                                T.insertBefore(e, T.firstChild);
                            var t = n.getElementsByName && n.getElementsByName(M).length === 2 + n.getElementsByName(M + 0).length;
                            return L.getIdNotName = !n.getElementById(M),
                                T.removeChild(e),
                                t
                        }), b.attrHandle = s(function(e) {
                            return e.innerHTML = "<a href='#'></a>",
                            e.firstChild && typeof e.firstChild.getAttribute !== W && "#" === e.firstChild.getAttribute("href")
                        }) ? {}: {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                            L.getIdNotName ? (b.find.ID = function(e, t) {
                                if (typeof t.getElementById !== W && !S) {
                                    var a = t.getElementById(e);
                                    return a && a.parentNode ? [a] : []
                                }
                            },
                                b.filter.ID = function(e) {
                                    var t = e.replace(Ce, he);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }) : (b.find.ID = function(e, a) {
                                if (typeof a.getElementById !== W && !S) {
                                    var n = a.getElementById(e);
                                    return n ? n.id === e || typeof n.getAttributeNode !== W && n.getAttributeNode("id").value === e ? [n] : t: []
                                }
                            },
                                b.filter.ID = function(e) {
                                    var t = e.replace(Ce, he);
                                    return function(e) {
                                        var a = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                                        return a && a.value === t
                                    }
                                }), b.find.TAG = L.tagNameNoComments ?
                            function(e, a) {
                                return typeof a.getElementsByTagName !== W ? a.getElementsByTagName(e) : t
                            }: function(e, t) {
                                var a, n = [],
                                    i = 0,
                                    s = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; a = s[i++];) 1 === a.nodeType && n.push(a);
                                    return n
                                }
                                return s
                            },
                            b.find.NAME = L.getByName &&
                                function(e, a) {
                                    return typeof a.getElementsByName !== W ? a.getElementsByName(name) : t
                                },
                            b.find.CLASS = L.getByClassName &&
                                function(e, a) {
                                    return typeof a.getElementsByClassName === W || S ? t: a.getElementsByClassName(e)
                                },
                            j = [], F = [":focus"], (L.qsa = a(n.querySelectorAll)) && (s(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>",
                            e.querySelectorAll("[selected]").length || F.push("\\[" + Q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                            e.querySelectorAll(":checked").length || F.push(":checked")
                        }), s(function(e) {
                            e.innerHTML = "<input type='hidden' i=''/>",
                            e.querySelectorAll("[i^='']").length && F.push("[*^$]=" + Q + "*(?:\"\"|'')"),
                            e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                F.push(",.*:")
                        })), (L.matchesSelector = a(N = T.matchesSelector || T.mozMatchesSelector || T.webkitMatchesSelector || T.oMatchesSelector || T.msMatchesSelector)) && s(function(e) {
                            L.disconnectedMatch = N.call(e, "div"),
                                N.call(e, "[s!='']:x"),
                                j.push("!=", ae)
                        }), F = RegExp(F.join("|")), j = RegExp(j.join("|")), $ = a(T.contains) || T.compareDocumentPosition ?
                            function(e, t) {
                                var a = 9 === e.nodeType ? e.documentElement: e,
                                    n = t && t.parentNode;
                                return e === n || !(!n || 1 !== n.nodeType || !(a.contains ? a.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                            }: function(e, t) {
                                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                                return ! 1
                            },
                            P = T.compareDocumentPosition ?
                                function(e, t) {
                                    var a;
                                    return e === t ? (x = !0, 0) : (a = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & a || e.parentNode && 11 === e.parentNode.nodeType ? e === n || $(O, e) ? -1 : t === n || $(O, t) ? 1 : 0 : 4 & a ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                                }: function(e, t) {
                                    var a, i = 0,
                                        s = e.parentNode,
                                        r = t.parentNode,
                                        c = [e],
                                        l = [t];
                                    if (e === t) return x = !0,
                                        0;
                                    if (!s || !r) return e === n ? -1 : t === n ? 1 : s ? -1 : r ? 1 : 0;
                                    if (s === r) return o(e, t);
                                    for (a = e; a = a.parentNode;) c.unshift(a);
                                    for (a = t; a = a.parentNode;) l.unshift(a);
                                    for (; c[i] === l[i];) i++;
                                    return i ? o(c[i], l[i]) : c[i] === O ? -1 : l[i] === O ? 1 : 0
                                },
                            x = !1, [0, 0].sort(P), L.detectDuplicates = x, B) : B
                    },
                    r.matches = function(e, t) {
                        return r(e, null, null, t)
                    },
                    r.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== B && w(e), t = t.replace(/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "='$1']"), !(!L.matchesSelector || S || j && j.test(t) || F.test(t))) try {
                            var a = N.call(e, t);
                            if (a || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                        } catch(e) {}
                        return r(t, B, null, [e]).length > 0
                    },
                    r.contains = function(e, t) {
                        return (e.ownerDocument || e) !== B && w(e),
                            $(e, t)
                    },
                    r.attr = function(e, t) {
                        var a;
                        return (e.ownerDocument || e) !== B && w(e),
                        S || (t = t.toLowerCase()),
                            (a = b.attrHandle[t]) ? a(e) : S || L.attributes ? e.getAttribute(t) : ((a = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t: a && a.specified ? a.value: null
                    },
                    r.error = function(e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    },
                    r.uniqueSort = function(e) {
                        var t, a = [],
                            n = 1,
                            i = 0;
                        if (x = !L.detectDuplicates, e.sort(P), x) {
                            for (; t = e[n]; n++) t === e[n - 1] && (i = a.push(n));
                            for (; i--;) e.splice(a[i], 1)
                        }
                        return e
                    },
                    y = r.getText = function(e) {
                        var t, a = "",
                            n = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) a += y(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else for (; t = e[n]; n++) a += y(t);
                        return a
                    },
                    b = r.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: le,
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Ce, he),
                                    e[3] = (e[4] || e[5] || "").replace(Ce, he),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]),
                                    e
                            },
                            PSEUDO: function(e) {
                                var t, a = !e[5] && e[2];
                                return le.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : a && re.test(a) && (t = l(a, !0)) && (t = a.indexOf(")", a.length - t) - a.length) && (e[0] = e[0].slice(0, t), e[2] = a.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                return "*" === e ?
                                    function() {
                                        return ! 0
                                    }: (e = e.replace(Ce, he).toLowerCase(),
                                        function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        })
                            },
                            CLASS: function(e) {
                                var t = H[e + " "];
                                return t || (t = RegExp("(^|" + Q + ")" + e + "(" + Q + "|$)")) && H(e,
                                    function(e) {
                                        return t.test(e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                                    })
                            },
                            ATTR: function(e, t, a) {
                                return function(n) {
                                    var i = r.attr(n, e);
                                    return null == i ? "!=" === t: !t || (i += "", "=" === t ? i === a: "!=" === t ? i !== a: "^=" === t ? a && 0 === i.indexOf(a) : "*=" === t ? a && i.indexOf(a) > -1 : "$=" === t ? a && i.slice( - a.length) === a: "~=" === t ? (" " + i + " ").indexOf(a) > -1 : "|=" === t && (i === a || i.slice(0, a.length + 1) === a + "-"))
                                }
                            },
                            CHILD: function(e, t, a, n, i) {
                                var s = "nth" !== e.slice(0, 3),
                                    r = "last" !== e.slice( - 4),
                                    o = "of-type" === t;
                                return 1 === n && 0 === i ?
                                    function(e) {
                                        return !! e.parentNode
                                    }: function(t, a, c) {
                                        var l, d, u, v, f, p, D = s !== r ? "nextSibling": "previousSibling",
                                            C = t.parentNode,
                                            h = o && t.nodeName.toLowerCase(),
                                            m = !c && !o;
                                        if (C) {
                                            if (s) {
                                                for (; D;) {
                                                    for (u = t; u = u[D];) if (o ? u.nodeName.toLowerCase() === h: 1 === u.nodeType) return ! 1;
                                                    p = D = "only" === e && !p && "nextSibling"
                                                }
                                                return ! 0
                                            }
                                            if (p = [r ? C.firstChild: C.lastChild], r && m) {
                                                for (d = C[M] || (C[M] = {}), l = d[e] || [], f = l[0] === R && l[1], v = l[0] === R && l[2], u = f && C.childNodes[f]; u = ++f && u && u[D] || (v = f = 0) || p.pop();) if (1 === u.nodeType && ++v && u === t) {
                                                    d[e] = [R, f, v];
                                                    break
                                                }
                                            } else if (m && (l = (t[M] || (t[M] = {}))[e]) && l[0] === R) v = l[1];
                                            else for (; (u = ++f && u && u[D] || (v = f = 0) || p.pop()) && ((o ? u.nodeName.toLowerCase() !== h: 1 !== u.nodeType) || !++v || (m && ((u[M] || (u[M] = {}))[e] = [R, v]), u !== t)););
                                            return (v -= i) === n || 0 == v % n && v / n >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(e, t) {
                                var a, n = b.pseudos[e] || b.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
                                return n[M] ? n(t) : n.length > 1 ? (a = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, a) {
                                    for (var i, s = n(e, t), r = s.length; r--;) i = Y.call(e, s[r]),
                                        e[i] = !(a[i] = s[r])
                                }) : function(e) {
                                    return n(e, 0, a)
                                }) : n
                            }
                        },
                        pseudos: {
                            not: i(function(e) {
                                var t = [],
                                    a = [],
                                    n = k(e.replace(ne, "$1"));
                                return n[M] ? i(function(e, t, a, i) {
                                    for (var s, r = n(e, null, i, []), o = e.length; o--;)(s = r[o]) && (e[o] = !(t[o] = s))
                                }) : function(e, i, s) {
                                    return t[0] = e,
                                        n(t, null, s, a),
                                        !a.pop()
                                }
                            }),
                            has: i(function(e) {
                                return function(t) {
                                    return r(e, t).length > 0
                                }
                            }),
                            contains: i(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || y(t)).indexOf(e) > -1
                                }
                            }),
                            lang: i(function(e) {
                                return oe.test(e || "") || r.error("unsupported lang: " + e),
                                    e = e.replace(Ce, he).toLowerCase(),
                                    function(t) {
                                        var a;
                                        do {
                                            if (a = S ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-")
                                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                                        return ! 1
                                    }
                            }),
                            target: function(t) {
                                var a = e.location && e.location.hash;
                                return a && a.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === T
                            },
                            focus: function(e) {
                                return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return ! 1 === e.disabled
                            },
                            disabled: function(e) {
                                return ! 0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                                return ! 0
                            },
                            parent: function(e) {
                                return ! b.pseudos.empty(e)
                            },
                            header: function(e) {
                                return pe.test(e.nodeName)
                            },
                            input: function(e) {
                                return fe.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: c(function() {
                                return [0]
                            }),
                            last: c(function(e, t) {
                                return [t - 1]
                            }),
                            eq: c(function(e, t, a) {
                                return [0 > a ? a + t: a]
                            }),
                            even: c(function(e, t) {
                                for (var a = 0; t > a; a += 2) e.push(a);
                                return e
                            }),
                            odd: c(function(e, t) {
                                for (var a = 1; t > a; a += 2) e.push(a);
                                return e
                            }),
                            lt: c(function(e, t, a) {
                                for (var n = 0 > a ? a + t: a; --n >= 0;) e.push(n);
                                return e
                            }),
                            gt: c(function(e, t, a) {
                                for (var n = 0 > a ? a + t: a; t > ++n;) e.push(n);
                                return e
                            })
                        }
                    };
                for (E in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[E] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                } (E);
                for (E in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[E] = function(e) {
                    return function(t) {
                        var a = t.nodeName.toLowerCase();
                        return ("input" === a || "button" === a) && t.type === e
                    }
                } (E);
                k = r.compile = function(e, t) {
                    var a, n = [],
                        i = [],
                        s = q[e + " "];
                    if (!s) {
                        for (t || (t = l(e)), a = t.length; a--;) s = D(t[a]),
                            s[M] ? n.push(s) : i.push(s);
                        s = q(e, C(i, n))
                    }
                    return s
                },
                    b.pseudos.nth = b.pseudos.eq,
                    b.filters = A.prototype = b.pseudos,
                    b.setFilters = new A,
                    w(),
                    r.attr = ce.attr,
                    ce.find = r,
                    ce.expr = r.selectors,
                    ce.expr[":"] = ce.expr.pseudos,
                    ce.unique = r.uniqueSort,
                    ce.text = r.getText,
                    ce.isXMLDoc = r.isXML,
                    ce.contains = r.contains
            } (e);
        var Ne = /Until$/,
            $e = /^(?:parents|prev(?:Until|All))/,
            Pe = /^.[^:#\[\.,]*$/,
            Me = ce.expr.match.needsContext,
            Oe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(e) {
                var t, a, n, i = this.length;
                if ("string" != typeof e) return n = this,
                    this.pushStack(ce(e).filter(function() {
                        for (t = 0; i > t; t++) if (ce.contains(n[t], this)) return ! 0
                    }));
                for (a = [], t = 0; i > t; t++) ce.find(e, this[t], a);
                return a = this.pushStack(i > 1 ? ce.unique(a) : a),
                    a.selector = (this.selector ? this.selector + " ": "") + e,
                    a
            },
            has: function(e) {
                var t, a = ce(e, this),
                    n = a.length;
                return this.filter(function() {
                    for (t = 0; n > t; t++) if (ce.contains(this, a[t])) return ! 0
                })
            },
            not: function(e) {
                return this.pushStack(u(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(u(this, e, !0))
            },
            is: function(e) {
                return !! e && ("string" == typeof e ? Me.test(e) ? ce(e, this.context).index(this[0]) >= 0 : ce.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var a, n = 0,
                         i = this.length,
                         s = [], r = Me.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; i > n; n++) for (a = this[n]; a && a.ownerDocument && a !== t && 11 !== a.nodeType;) {
                    if (r ? r.index(a) > -1 : ce.find.matchesSelector(a, e)) {
                        s.push(a);
                        break
                    }
                    a = a.parentNode
                }
                return this.pushStack(s.length > 1 ? ce.unique(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                var a = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
                    n = ce.merge(this.get(), a);
                return this.pushStack(ce.unique(n))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
            ce.fn.andSelf = ce.fn.addBack,
            ce.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t: null
                    },
                    parents: function(e) {
                        return ce.dir(e, "parentNode")
                    },
                    parentsUntil: function(e, t, a) {
                        return ce.dir(e, "parentNode", a)
                    },
                    next: function(e) {
                        return d(e, "nextSibling")
                    },
                    prev: function(e) {
                        return d(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return ce.dir(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return ce.dir(e, "previousSibling")
                    },
                    nextUntil: function(e, t, a) {
                        return ce.dir(e, "nextSibling", a)
                    },
                    prevUntil: function(e, t, a) {
                        return ce.dir(e, "previousSibling", a)
                    },
                    siblings: function(e) {
                        return ce.sibling((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return ce.sibling(e.firstChild)
                    },
                    contents: function(e) {
                        return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ce.merge([], e.childNodes)
                    }
                },
                function(e, t) {
                    ce.fn[e] = function(a, n) {
                        var i = ce.map(this, t, a);
                        return Ne.test(e) || (n = a),
                        n && "string" == typeof n && (i = ce.filter(n, i)),
                            i = this.length > 1 && !Oe[e] ? ce.unique(i) : i,
                        this.length > 1 && $e.test(e) && (i = i.reverse()),
                            this.pushStack(i)
                    }
                }),
            ce.extend({
                filter: function(e, t, a) {
                    return a && (e = ":not(" + e + ")"),
                        1 === t.length ? ce.find.matchesSelector(t[0], e) ? [t[0]] : [] : ce.find.matches(e, t)
                },
                dir: function(e, a, n) {
                    for (var i = [], s = e[a]; s && 9 !== s.nodeType && (n === t || 1 !== s.nodeType || !ce(s).is(n));) 1 === s.nodeType && i.push(s),
                        s = s[a];
                    return i
                },
                sibling: function(e, t) {
                    for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
                    return a
                }
            });
        var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Re = RegExp("<(?:" + Le + ")[\\s/>]", "i"),
            Ue = /^\s+/,
            He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ge = /<([\w:]+)/,
            qe = /<tbody/i,
            We = /<|&#?\w+;/,
            Xe = /<(?:script|style|link)/i,
            ze = /^(?:checkbox|radio)$/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Je = /^$|\/(?:java|ecma)script/i,
            Ke = /^true\/(.*)/,
            Ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = v(V),
            Ze = Qe.appendChild(V.createElement("div"));
        Ye.optgroup = Ye.option,
            Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
            Ye.th = Ye.td,
            ce.fn.extend({
                text: function(e) {
                    return ce.access(this,
                        function(e) {
                            return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
                        },
                        null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (ce.isFunction(e)) return this.each(function(t) {
                        ce(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                return e
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return ce.isFunction(e) ? this.each(function(t) {
                        ce(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = ce(this),
                            a = t.contents();
                        a.length ? a.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = ce.isFunction(e);
                    return this.each(function(a) {
                        ce(this).wrapAll(t ? e.call(this, a) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0,
                        function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                        })
                },
                prepend: function() {
                    return this.domManip(arguments, !0,
                        function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                        })
                },
                before: function() {
                    return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                },
                after: function() {
                    return this.domManip(arguments, !1,
                        function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                },
                remove: function(e, t) {
                    for (var a, n = 0; null != (a = this[n]); n++)(!e || ce.filter(e, [a]).length > 0) && (t || 1 !== a.nodeType || ce.cleanData(A(a)), a.parentNode && (t && ce.contains(a.ownerDocument, a) && C(A(a, "script")), a.parentNode.removeChild(a)));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ce.cleanData(A(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && ce.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                        t = null == t ? e: t,
                        this.map(function() {
                            return ce.clone(this, e, t)
                        })
                },
                html: function(e) {
                    return ce.access(this,
                        function(e) {
                            var a = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (e === t) return 1 === a.nodeType ? a.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : t;
                            if (! ("string" != typeof e || Xe.test(e) || !ce.support.htmlSerialize && Re.test(e) || !ce.support.leadingWhitespace && Ue.test(e) || Ye[(Ge.exec(e) || ["", ""])[1].toLowerCase()])) {
                                e = e.replace(He, "<$1></$2>");
                                try {
                                    for (; i > n; n++) a = this[n] || {},
                                    1 === a.nodeType && (ce.cleanData(A(a, !1)), a.innerHTML = e);
                                    a = 0
                                } catch(e) {}
                            }
                            a && this.empty().append(e)
                        },
                        null, e, arguments.length)
                },
                replaceWith: function(e) {
                    return ce.isFunction(e) || "string" == typeof e || (e = ce(e).not(this).detach()),
                        this.domManip([e], !0,
                            function(e) {
                                var t = this.nextSibling,
                                    a = this.parentNode;
                                a && (ce(this).remove(), a.insertBefore(e, t))
                            })
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, a, n) {
                    e = te.apply([], e);
                    var i, s, r, o, c, l, d = 0,
                        u = this.length,
                        v = this,
                        C = u - 1,
                        h = e[0],
                        m = ce.isFunction(h);
                    if (m || !(1 >= u || "string" != typeof h || ce.support.checkClone) && Ve.test(h)) return this.each(function(i) {
                        var s = v.eq(i);
                        m && (e[0] = h.call(this, i, a ? s.html() : t)),
                            s.domManip(e, a, n)
                    });
                    if (u && (l = ce.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                        for (a = a && ce.nodeName(i, "tr"), o = ce.map(A(l, "script"), p), r = o.length; u > d; d++) s = l,
                        d !== C && (s = ce.clone(s, !0, !0), r && ce.merge(o, A(s, "script"))),
                            n.call(a && ce.nodeName(this[d], "table") ? f(this[d], "tbody") : this[d], s, d);
                        if (r) for (c = o[o.length - 1].ownerDocument, ce.map(o, D), d = 0; r > d; d++) s = o[d],
                        Je.test(s.type || "") && !ce._data(s, "globalEval") && ce.contains(c, s) && (s.src ? ce.ajax({
                            url: s.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : ce.globalEval((s.text || s.textContent || s.innerHTML || "").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")));
                        l = i = null
                    }
                    return this
                }
            }),
            ce.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                },
                function(e, t) {
                    ce.fn[e] = function(e) {
                        for (var a, n = 0,
                                 i = [], s = ce(e), r = s.length - 1; r >= n; n++) a = n === r ? this: this.clone(!0),
                            ce(s[n])[t](a),
                            ae.apply(i, a.get());
                        return this.pushStack(i)
                    }
                }),
            ce.extend({
                clone: function(e, t, a) {
                    var n, i, s, r, o, c = ce.contains(e.ownerDocument, e);
                    if (ce.support.html5Clone || ce.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ze.innerHTML = e.outerHTML, Ze.removeChild(s = Ze.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (n = A(s), o = A(e), r = 0; null != (i = o[r]); ++r) n[r] && m(i, n[r]);
                    if (t) if (a) for (o = o || A(e), n = n || A(s), r = 0; null != (i = o[r]); r++) h(i, n[r]);
                    else h(e, s);
                    return n = A(s, "script"),
                    n.length > 0 && C(n, !c && A(e, "script")),
                        n = o = i = null,
                        s
                },
                buildFragment: function(e, t, a, n) {
                    for (var i, s, r, o, c, l, d, u = e.length,
                             f = v(t), p = [], D = 0; u > D; D++) if ((s = e[D]) || 0 === s) if ("object" === ce.type(s)) ce.merge(p, s.nodeType ? [s] : s);
                    else if (We.test(s)) {
                        for (o = o || f.appendChild(t.createElement("div")), c = (Ge.exec(s) || ["", ""])[1].toLowerCase(), d = Ye[c] || Ye._default, o.innerHTML = d[1] + s.replace(He, "<$1></$2>") + d[2], i = d[0]; i--;) o = o.lastChild;
                        if (!ce.support.leadingWhitespace && Ue.test(s) && p.push(t.createTextNode(Ue.exec(s)[0])), !ce.support.tbody) for (s = "table" !== c || qe.test(s) ? "<table>" !== d[1] || qe.test(s) ? 0 : o: o.firstChild, i = s && s.childNodes.length; i--;) ce.nodeName(l = s.childNodes[i], "tbody") && !l.childNodes.length && s.removeChild(l);
                        for (ce.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                        o = f.lastChild
                    } else p.push(t.createTextNode(s));
                    for (o && f.removeChild(o), ce.support.appendChecked || ce.grep(A(p, "input"), E), D = 0; s = p[D++];) if ((!n || -1 === ce.inArray(s, n)) && (r = ce.contains(s.ownerDocument, s), o = A(f.appendChild(s), "script"), r && C(o), a)) for (i = 0; s = o[i++];) Je.test(s.type || "") && a.push(s);
                    return o = null,
                        f
                },
                cleanData: function(e, t) {
                    for (var a, n, i, s, r = 0,
                             o = ce.expando,
                             c = ce.cache,
                             l = ce.support.deleteExpando,
                             d = ce.event.special; null != (a = e[r]); r++) if ((t || ce.acceptData(a)) && (i = a[o], s = i && c[i])) {
                        if (s.events) for (n in s.events) d[n] ? ce.event.remove(a, n) : ce.removeEvent(a, n, s.handle);
                        c[i] && (delete c[i], l ? delete a[o] : typeof a.removeAttribute !== z ? a.removeAttribute(o) : a[o] = null, Z.push(i))
                    }
                }
            });
        var et, tt, at, nt = /alpha\([^)]*\)/i,
            it = /opacity\s*=\s*([^)]*)/,
            st = /^(top|right|bottom|left)$/,
            rt = /^(none|table(?!-c[ea]).+)/,
            ot = /^margin/,
            ct = RegExp("^(" + le + ")(.*)$", "i"),
            lt = RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"),
            dt = RegExp("^([+-])=(" + le + ")", "i"),
            ut = {
                BODY: "block"
            },
            vt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ft = {
                letterSpacing: 0,
                fontWeight: 400
            },
            pt = ["Top", "Right", "Bottom", "Left"],
            Dt = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(e, a) {
                return ce.access(this,
                    function(e, a, n) {
                        var i, s, r = {},
                            o = 0;
                        if (ce.isArray(a)) {
                            for (s = tt(e), i = a.length; i > o; o++) r[a[o]] = ce.css(e, a[o], !1, s);
                            return r
                        }
                        return n !== t ? ce.style(e, a, n) : ce.css(e, a)
                    },
                    e, a, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() { (t ? e: b(this)) ? ce(this).show() : ce(this).hide()
                })
            }
        }),
            ce.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var a = at(e, "opacity");
                                return "" === a ? "1": a
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: ce.support.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(e, a, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var s, r, o, c = ce.camelCase(a),
                            l = e.style;
                        if (a = ce.cssProps[c] || (ce.cssProps[c] = g(l, c)), o = ce.cssHooks[a] || ce.cssHooks[c], n === t) return o && "get" in o && (s = o.get(e, !1, i)) !== t ? s: l[a];
                        if (r = typeof n, "string" === r && (s = dt.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(ce.css(e, a)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || ce.cssNumber[c] || (n += "px"), ce.support.clearCloneStyle || "" !== n || 0 !== a.indexOf("background") || (l[a] = "inherit"), o && "set" in o && (n = o.set(e, n, i)) === t))) try {
                            l[a] = n
                        } catch(e) {}
                    }
                },
                css: function(e, a, n, i) {
                    var s, r, o, c = ce.camelCase(a);
                    return a = ce.cssProps[c] || (ce.cssProps[c] = g(e.style, c)),
                        o = ce.cssHooks[a] || ce.cssHooks[c],
                    o && "get" in o && (r = o.get(e, !0, n)),
                    r === t && (r = at(e, a, i)),
                    "normal" === r && a in ft && (r = ft[a]),
                        "" === n || n ? (s = parseFloat(r), !0 === n || ce.isNumeric(s) ? s || 0 : r) : r
                },
                swap: function(e, t, a, n) {
                    var i, s, r = {};
                    for (s in t) r[s] = e.style[s],
                        e.style[s] = t[s];
                    i = a.apply(e, n || []);
                    for (s in t) e.style[s] = r[s];
                    return i
                }
            }),
            e.getComputedStyle ? (tt = function(t) {
                return e.getComputedStyle(t, null)
            },
                at = function(e, a, n) {
                    var i, s, r, o = n || tt(e),
                        c = o ? o.getPropertyValue(a) || o[a] : t,
                        l = e.style;
                    return o && ("" !== c || ce.contains(e.ownerDocument, e) || (c = ce.style(e, a)), lt.test(c) && ot.test(a) && (i = l.width, s = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = o.width, l.width = i, l.minWidth = s, l.maxWidth = r)),
                        c
                }) : V.documentElement.currentStyle && (tt = function(e) {
                return e.currentStyle
            },
                at = function(e, a, n) {
                    var i, s, r, o = n || tt(e),
                        c = o ? o[a] : t,
                        l = e.style;
                    return null == c && l && l[a] && (c = l[a]),
                    lt.test(c) && !st.test(a) && (i = l.left, s = e.runtimeStyle, r = s && s.left, r && (s.left = e.currentStyle.left), l.left = "fontSize" === a ? "1em": c, c = l.pixelLeft + "px", l.left = i, r && (s.left = r)),
                        "" === c ? "auto": c
                }),
            ce.each(["height", "width"],
                function(e, a) {
                    ce.cssHooks[a] = {
                        get: function(e, n, i) {
                            return n ? 0 === e.offsetWidth && rt.test(ce.css(e, "display")) ? ce.swap(e, vt,
                                function() {
                                    return x(e, a, i)
                                }) : x(e, a, i) : t
                        },
                        set: function(e, t, n) {
                            var i = n && tt(e);
                            return _(e, t, n ? k(e, a, n, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, i), i) : 0)
                        }
                    }
                }),
        ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(e, t) {
                return it.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
            },
            set: function(e, t) {
                var a = e.style,
                    n = e.currentStyle,
                    i = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                    s = n && n.filter || a.filter || "";
                a.zoom = 1,
                (t >= 1 || "" === t) && "" === ce.trim(s.replace(nt, "")) && a.removeAttribute && (a.removeAttribute("filter"), "" === t || n && !n.filter) || (a.filter = nt.test(s) ? s.replace(nt, i) : s + " " + i)
            }
        }),
            ce(function() {
                ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                    get: function(e, a) {
                        return a ? ce.swap(e, {
                                display: "inline-block"
                            },
                            at, [e, "marginRight"]) : t
                    }
                }),
                !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"],
                    function(e, a) {
                        ce.cssHooks[a] = {
                            get: function(e, n) {
                                return n ? (n = at(e, a), lt.test(n) ? ce(e).position()[a] + "px": n) : t
                            }
                        }
                    })
            }),
        ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
        },
            ce.expr.filters.visible = function(e) {
                return ! ce.expr.filters.hidden(e)
            }),
            ce.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                },
                function(e, t) {
                    ce.cssHooks[e + t] = {
                        expand: function(a) {
                            for (var n = 0,
                                     i = {},
                                     s = "string" == typeof a ? a.split(" ") : [a]; 4 > n; n++) i[e + pt[n] + t] = s[n] || s[n - 2] || s[0];
                            return i
                        }
                    },
                    ot.test(e) || (ce.cssHooks[e + t].set = _)
                });
        var Ct = /\[\]$/,
            ht = /^(?:submit|button|image|reset|file)$/i,
            mt = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ce(this).is(":disabled") && mt.test(this.nodeName) && !ht.test(e) && (this.checked || !ze.test(e))
                }).map(function(e, t) {
                    var a = ce(this).val();
                    return null == a ? null: ce.isArray(a) ? ce.map(a,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(/\r?\n/g, "\r\n")
                            }
                        }) : {
                        name: t.name,
                        value: a.replace(/\r?\n/g, "\r\n")
                    }
                }).get()
            }
        }),
            ce.param = function(e, a) {
                var n, i = [],
                    s = function(e, t) {
                        t = ce.isFunction(t) ? t() : null == t ? "": t,
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (a === t && (a = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e,
                    function() {
                        s(this.name, this.value)
                    });
                else for (n in e) B(n, e[n], a, s);
                return i.join("&").replace(/%20/g, "+")
            },
            ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function(e, t) {
                    ce.fn[t] = function(e, a) {
                        return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t)
                    }
                }),
            ce.fn.hover = function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            };
        var At, Et, gt = ce.now(),
            bt = /\?/,
            yt = /([?&])_=[^&]*/,
            _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            xt = /^(?:GET|HEAD)$/,
            It = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            wt = ce.fn.load,
            Bt = {},
            Tt = {},
            St = "*/".concat("*");
        try {
            Et = J.href
        } catch(e) {
            Et = V.createElement("a"),
                Et.href = "",
                Et = Et.href
        }
        At = It.exec(Et.toLowerCase()) || [],
            ce.fn.load = function(e, a, n) {
                if ("string" != typeof e && wt) return wt.apply(this, arguments);
                var i, s, r, o = this,
                    c = e.indexOf(" ");
                return c >= 0 && (i = e.slice(c, e.length), e = e.slice(0, c)),
                    ce.isFunction(a) ? (n = a, a = t) : a && "object" == typeof a && (r = "POST"),
                o.length > 0 && ce.ajax({
                    url: e,
                    type: r,
                    dataType: "html",
                    data: a
                }).done(function(e) {
                    s = arguments,
                        o.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
                }).complete(n &&
                    function(e, t) {
                        o.each(n, s || [e.responseText, t, e])
                    }),
                    this
            },
            ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                function(e, t) {
                    ce.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }),
            ce.each(["get", "post"],
                function(e, a) {
                    ce[a] = function(e, n, i, s) {
                        return ce.isFunction(n) && (s = s || i, i = n, n = t),
                            ce.ajax({
                                url: e,
                                type: a,
                                dataType: s,
                                data: n,
                                success: i
                            })
                    }
                }),
            ce.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Et,
                    type: "GET",
                    isLocal: kt.test(At[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": St,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": ce.parseJSON,
                        "text xml": ce.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? F(F(e, ce.ajaxSettings), t) : F(ce.ajaxSettings, e)
                },
                ajaxPrefilter: T(Bt),
                ajaxTransport: T(Tt),
                ajax: function(e, a) {
                    function n(e, a, n, i) {
                        var s, u, m, A, g, y = a;
                        2 !== E && (E = 2, c && clearTimeout(c), d = t, o = i || "", b.readyState = e > 0 ? 4 : 0, n && (A = j(v, b, n)), e >= 200 && 300 > e || 304 === e ? (v.ifModified && (g = b.getResponseHeader("Last-Modified"), g && (ce.lastModified[r] = g), (g = b.getResponseHeader("etag")) && (ce.etag[r] = g)), 204 === e ? (s = !0, y = "nocontent") : 304 === e ? (s = !0, y = "notmodified") : (s = N(v, A), y = s.state, u = s.data, m = s.error, s = !m)) : (m = y, (e || !y) && (y = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (a || y) + "", s ? D.resolveWith(f, [u, y, b]) : D.rejectWith(f, [b, y, m]), b.statusCode(h), h = t, l && p.trigger(s ? "ajaxSuccess": "ajaxError", [b, v, s ? u: m]), C.fireWith(f, [b, y]), l && (p.trigger("ajaxComplete", [b, v]), --ce.active || ce.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (a = e, e = t),
                        a = a || {};
                    var i, s, r, o, c, l, d, u, v = ce.ajaxSetup({},
                        a),
                        f = v.context || v,
                        p = v.context && (f.nodeType || f.jquery) ? ce(f) : ce.event,
                        D = ce.Deferred(),
                        C = ce.Callbacks("once memory"),
                        h = v.statusCode || {},
                        m = {},
                        A = {},
                        E = 0,
                        g = "canceled",
                        b = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === E) {
                                    if (!u) for (u = {}; t = _t.exec(o);) u[t[1].toLowerCase()] = t[2];
                                    t = u[e.toLowerCase()]
                                }
                                return null == t ? null: t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === E ? o: null
                            },
                            setRequestHeader: function(e, t) {
                                var a = e.toLowerCase();
                                return E || (e = A[a] = A[a] || e, m[e] = t),
                                    this
                            },
                            overrideMimeType: function(e) {
                                return E || (v.mimeType = e),
                                    this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e) if (2 > E) for (t in e) h[t] = [h[t], e[t]];
                                else b.always(e[b.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || g;
                                return d && d.abort(t),
                                    n(0, t),
                                    this
                            }
                        };
                    if (D.promise(b).complete = C.add, b.success = b.done, b.error = b.fail, v.url = ((e || v.url || Et) + "").replace(/#.*$/, "").replace(/^\/\//, At[1] + "//"), v.type = a.method || a.type || v.method || v.type, v.dataTypes = ce.trim(v.dataType || "*").toLowerCase().match(de) || [""], null == v.crossDomain && (i = It.exec(v.url.toLowerCase()), v.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (At[3] || ("http:" === At[1] ? 80 : 443)))), v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), S(Bt, v, a, b), 2 === E) return b;
                    l = v.global,
                    l && 0 == ce.active++&&ce.event.trigger("ajaxStart"),
                        v.type = v.type.toUpperCase(),
                        v.hasContent = !xt.test(v.type),
                        r = v.url,
                    v.hasContent || (v.data && (r = v.url += (bt.test(r) ? "&": "?") + v.data, delete v.data), !1 === v.cache && (v.url = yt.test(r) ? r.replace(yt, "$1_=" + gt++) : r + (bt.test(r) ? "&": "?") + "_=" + gt++)),
                    v.ifModified && (ce.lastModified[r] && b.setRequestHeader("If-Modified-Since", ce.lastModified[r]), ce.etag[r] && b.setRequestHeader("If-None-Match", ce.etag[r])),
                    (v.data && v.hasContent && !1 !== v.contentType || a.contentType) && b.setRequestHeader("Content-Type", v.contentType),
                        b.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + St + "; q=0.01": "") : v.accepts["*"]);
                    for (s in v.headers) b.setRequestHeader(s, v.headers[s]);
                    if (v.beforeSend && (!1 === v.beforeSend.call(f, b, v) || 2 === E)) return b.abort();
                    g = "abort";
                    for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[s](v[s]);
                    if (d = S(Tt, v, a, b)) {
                        b.readyState = 1,
                        l && p.trigger("ajaxSend", [b, v]),
                        v.async && v.timeout > 0 && (c = setTimeout(function() {
                                b.abort("timeout")
                            },
                            v.timeout));
                        try {
                            E = 1,
                                d.send(m, n)
                        } catch(e) {
                            if (! (2 > E)) throw e;
                            n( - 1, e)
                        }
                    } else n( - 1, "No Transport");
                    return b
                },
                getScript: function(e, a) {
                    return ce.get(e, t, a, "script")
                },
                getJSON: function(e, t, a) {
                    return ce.get(e, t, a, "json")
                }
            }),
            ce.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return ce.globalEval(e),
                            e
                    }
                }
            }),
            ce.ajaxPrefilter("script",
                function(e) {
                    e.cache === t && (e.cache = !1),
                    e.crossDomain && (e.type = "GET", e.global = !1)
                }),
            ce.ajaxTransport("script",
                function(e) {
                    if (e.crossDomain) {
                        var a, n = V.head || ce("head")[0] || V.documentElement;
                        return {
                            send: function(t, i) {
                                a = V.createElement("script"),
                                    a.async = !0,
                                e.scriptCharset && (a.charset = e.scriptCharset),
                                    a.src = e.url,
                                    a.onload = a.onreadystatechange = function(e, t) { (t || !a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, t || i(200, "success"))
                                    },
                                    n.insertBefore(a, n.firstChild)
                            },
                            abort: function() {
                                a && a.onload(t, !0)
                            }
                        }
                    }
                });
        var Ft = [],
            jt = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ft.pop() || ce.expando + "_" + gt++;
                return this[e] = !0,
                    e
            }
        }),
            ce.ajaxPrefilter("json jsonp",
                function(a, n, i) {
                    var s, r, o, c = !1 !== a.jsonp && (jt.test(a.url) ? "url": "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(a.data) && "data");
                    return c || "jsonp" === a.dataTypes[0] ? (s = a.jsonpCallback = ce.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, c ? a[c] = a[c].replace(jt, "$1" + s) : !1 !== a.jsonp && (a.url += (bt.test(a.url) ? "&": "?") + a.jsonp + "=" + s), a.converters["script json"] = function() {
                        return o || ce.error(s + " was not called"),
                            o[0]
                    },
                        a.dataTypes[0] = "json", r = e[s], e[s] = function() {
                        o = arguments
                    },
                        i.always(function() {
                            e[s] = r,
                            a[s] && (a.jsonpCallback = n.jsonpCallback, Ft.push(s)),
                            o && ce.isFunction(r) && r(o[0]),
                                o = r = t
                        }), "script") : t
                });
        var Nt, $t, Pt = 0,
            Mt = e.ActiveXObject &&
                function() {
                    var e;
                    for (e in Nt) Nt[e](t, !0)
                };
        ce.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return ! this.isLocal && $() || P()
            }: $,
            $t = ce.ajaxSettings.xhr(),
            ce.support.cors = !!$t && "withCredentials" in $t,
        ($t = ce.support.ajax = !!$t) && ce.ajaxTransport(function(a) {
            if (!a.crossDomain || ce.support.cors) {
                var n;
                return {
                    send: function(i, s) {
                        var r, o, c = a.xhr();
                        if (a.username ? c.open(a.type, a.url, a.async, a.username, a.password) : c.open(a.type, a.url, a.async), a.xhrFields) for (o in a.xhrFields) c[o] = a.xhrFields[o];
                        a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType),
                        a.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (o in i) c.setRequestHeader(o, i[o])
                        } catch(e) {}
                        c.send(a.hasContent && a.data || null),
                            n = function(e, i) {
                                var o, l, d, u;
                                try {
                                    if (n && (i || 4 === c.readyState)) if (n = t, r && (c.onreadystatechange = ce.noop, Mt && delete Nt[r]), i) 4 !== c.readyState && c.abort();
                                    else {
                                        u = {},
                                            o = c.status,
                                            l = c.getAllResponseHeaders(),
                                        "string" == typeof c.responseText && (u.text = c.responseText);
                                        try {
                                            d = c.statusText
                                        } catch(e) {
                                            d = ""
                                        }
                                        o || !a.isLocal || a.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                                    }
                                } catch(e) {
                                    i || s( - 1, e)
                                }
                                u && s(o, d, u, l)
                            },
                            a.async ? 4 === c.readyState ? setTimeout(n) : (r = ++Pt, Mt && (Nt || (Nt = {},
                                ce(e).unload(Mt)), Nt[r] = n), c.onreadystatechange = n) : n()
                    },
                    abort: function() {
                        n && n(t, !0)
                    }
                }
            }
        });
        var Ot, Lt, Rt = /^(?:toggle|show|hide)$/,
            Ut = RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
            Ht = /queueHooks$/,
            Gt = [U],
            qt = {
                "*": [function(e, t) {
                    var a, n, i = this.createTween(e, t),
                        s = Ut.exec(t),
                        r = i.cur(),
                        o = +r || 0,
                        c = 1,
                        l = 20;
                    if (s) {
                        if (a = +s[2], "px" !== (n = s[3] || (ce.cssNumber[e] ? "": "px")) && o) {
                            o = ce.css(i.elem, e, !0) || a || 1;
                            do {
                                c = c || ".5", o /= c, ce.style(i.elem, e, o + n)
                            } while ( c !== ( c = i . cur () / r) && 1 !== c && --l)
                        }
                        i.unit = n,
                            i.start = o,
                            i.end = s[1] ? o + (s[1] + 1) * a: a
                    }
                    return i
                }]
            };
        ce.Animation = ce.extend(L, {
            tweener: function(e, t) {
                ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var a, n = 0,
                         i = e.length; i > n; n++) a = e[n],
                    qt[a] = qt[a] || [],
                    qt[a].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Gt.unshift(e) : Gt.push(e)
            }
        }),
            ce.Tween = H,
            H.prototype = {
                constructor: H,
                init: function(e, t, a, n, i, s) {
                    this.elem = e,
                        this.prop = a,
                        this.easing = i || "swing",
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = n,
                        this.unit = s || (ce.cssNumber[a] ? "": "px")
                },
                cur: function() {
                    var e = H.propHooks[this.prop];
                    return e && e.get ? e.get(this) : H.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, a = H.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                        this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        a && a.set ? a.set(this) : H.propHooks._default.set(this),
                        this
                }
            },
            H.prototype.init.prototype = H.prototype,
            H.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            ce.each(["toggle", "show", "hide"],
                function(e, t) {
                    var a = ce.fn[t];
                    ce.fn[t] = function(e, n, i) {
                        return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(G(t, !0), e, n, i)
                    }
                }),
            ce.fn.extend({
                fadeTo: function(e, t, a, n) {
                    return this.filter(b).css("opacity", 0).show().end().animate({
                            opacity: t
                        },
                        e, a, n)
                },
                animate: function(e, t, a, n) {
                    var i = ce.isEmptyObject(e),
                        s = ce.speed(t, a, n),
                        r = function() {
                            var t = L(this, ce.extend({},
                                e), s);
                            r.finish = function() {
                                t.stop(!0)
                            },
                            (i || ce._data(this, "finish")) && t.stop(!0)
                        };
                    return r.finish = r,
                        i || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(e, a, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                            t(n)
                    };
                    return "string" != typeof e && (n = a, a = e, e = t),
                    a && !1 !== e && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0,
                                a = null != e && e + "queueHooks",
                                s = ce.timers,
                                r = ce._data(this);
                            if (a) r[a] && r[a].stop && i(r[a]);
                            else for (a in r) r[a] && r[a].stop && Ht.test(a) && i(r[a]);
                            for (a = s.length; a--;) s[a].elem !== this || null != e && s[a].queue !== e || (s[a].anim.stop(n), t = !1, s.splice(a, 1)); (t || !n) && ce.dequeue(this, e)
                        })
                },
                finish: function(e) {
                    return ! 1 !== e && (e = e || "fx"),
                        this.each(function() {
                            var t, a = ce._data(this),
                                n = a[e + "queue"],
                                i = a[e + "queueHooks"],
                                s = ce.timers,
                                r = n ? n.length: 0;
                            for (a.finish = !0, ce.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete a.finish
                        })
                }
            }),
            ce.each({
                    slideDown: G("show"),
                    slideUp: G("hide"),
                    slideToggle: G("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                },
                function(e, t) {
                    ce.fn[e] = function(e, a, n) {
                        return this.animate(t, e, a, n)
                    }
                }),
            ce.speed = function(e, t, a) {
                var n = e && "object" == typeof e ? ce.extend({},
                    e) : {
                    complete: a || !a && t || ce.isFunction(e) && e,
                    duration: e,
                    easing: a && t || t && !ce.isFunction(t) && t
                };
                return n.duration = ce.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in ce.fx.speeds ? ce.fx.speeds[n.duration] : ce.fx.speeds._default,
                (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
                    n.old = n.complete,
                    n.complete = function() {
                        ce.isFunction(n.old) && n.old.call(this),
                        n.queue && ce.dequeue(this, n.queue)
                    },
                    n
            },
            ce.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return.5 - Math.cos(e * Math.PI) / 2
                }
            },
            ce.timers = [],
            ce.fx = H.prototype.init,
            ce.fx.tick = function() {
                var e, a = ce.timers,
                    n = 0;
                for (Ot = ce.now(); a.length > n; n++)(e = a[n])() || a[n] !== e || a.splice(n--, 1);
                a.length || ce.fx.stop(),
                    Ot = t
            },
            ce.fx.timer = function(e) {
                e() && ce.timers.push(e) && ce.fx.start()
            },
            ce.fx.interval = 13,
            ce.fx.start = function() {
                Lt || (Lt = setInterval(ce.fx.tick, ce.fx.interval))
            },
            ce.fx.stop = function() {
                clearInterval(Lt),
                    Lt = null
            },
            ce.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ce.fx.step = {},
        ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(e) {
            return ce.grep(ce.timers,
                function(t) {
                    return e === t.elem
                }).length
        }),
            ce.fn.offset = function(e) {
                if (arguments.length) return e === t ? this: this.each(function(t) {
                    ce.offset.setOffset(this, e, t)
                });
                var a, n, i = {
                        top: 0,
                        left: 0
                    },
                    s = this[0],
                    r = s && s.ownerDocument;
                return r ? (a = r.documentElement, ce.contains(a, s) ? (typeof s.getBoundingClientRect !== z && (i = s.getBoundingClientRect()), n = q(r), {
                    top: i.top + (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                    left: i.left + (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
                }) : i) : void 0
            },
            ce.offset = {
                setOffset: function(e, t, a) {
                    var n = ce.css(e, "position");
                    "static" === n && (e.style.position = "relative");
                    var i, s, r = ce(e),
                        o = r.offset(),
                        c = ce.css(e, "top"),
                        l = ce.css(e, "left"),
                        d = ("absolute" === n || "fixed" === n) && ce.inArray("auto", [c, l]) > -1,
                        u = {},
                        v = {};
                    d ? (v = r.position(), i = v.top, s = v.left) : (i = parseFloat(c) || 0, s = parseFloat(l) || 0),
                    ce.isFunction(t) && (t = t.call(e, a, o)),
                    null != t.top && (u.top = t.top - o.top + i),
                    null != t.left && (u.left = t.left - o.left + s),
                        "using" in t ? t.using.call(e, u) : r.css(u)
                }
            },
            ce.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, a = {
                                top: 0,
                                left: 0
                            },
                            n = this[0];
                        return "fixed" === ce.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (a = e.offset()), a.top += ce.css(e[0], "borderTopWidth", !0), a.left += ce.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - a.top - ce.css(n, "marginTop", !0),
                                left: t.left - a.left - ce.css(n, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || V.documentElement; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                        return e || V.documentElement
                    })
                }
            }),
            ce.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                },
                function(e, a) {
                    var n = /Y/.test(a);
                    ce.fn[e] = function(i) {
                        return ce.access(this,
                            function(e, i, s) {
                                var r = q(e);
                                return s === t ? r ? a in r ? r[a] : r.document.documentElement[i] : e[i] : (r ? r.scrollTo(n ? ce(r).scrollLeft() : s, n ? s: ce(r).scrollTop()) : e[i] = s, t)
                            },
                            e, i, arguments.length, null)
                    }
                }),
            ce.each({
                    Height: "height",
                    Width: "width"
                },
                function(e, a) {
                    ce.each({
                            padding: "inner" + e,
                            content: a,
                            "": "outer" + e
                        },
                        function(n, i) {
                            ce.fn[i] = function(i, s) {
                                var r = arguments.length && (n || "boolean" != typeof i),
                                    o = n || (!0 === i || !0 === s ? "margin": "border");
                                return ce.access(this,
                                    function(a, n, i) {
                                        var s;
                                        return ce.isWindow(a) ? a.document.documentElement["client" + e] : 9 === a.nodeType ? (s = a.documentElement, Math.max(a.body["scroll" + e], s["scroll" + e], a.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? ce.css(a, n, o) : ce.style(a, n, i, o)
                                    },
                                    a, r ? i: t, r, null)
                            }
                        })
                }),
            e.jQuery = e.$ = ce,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
            function() {
                return ce
            })
    } (window),
    function(e) {
        e.fn.marquee = function(t) {
            return this.each(function() {
                var a, n, i, s, r, o = e.extend({},
                    e.fn.marquee.defaults, t),
                    c = e(this),
                    l = 3,
                    d = "animation-play-state",
                    u = !1,
                    v = function(e, t, a) {
                        for (var n = ["webkit", "moz", "MS", "o", ""], i = 0; i < n.length; i++) n[i] || (t = t.toLowerCase()),
                            e.addEventListener(n[i] + t, a, !1)
                    },
                    f = function(e) {
                        var t, a = [];
                        for (t in e) e.hasOwnProperty(t) && a.push(t + ":" + e[t]);
                        return a.push(),
                        "{" + a.join(",") + "}"
                    },
                    p = {
                        pause: function() {
                            u && o.allowCss3Support ? a.css(d, "paused") : e.fn.pause && a.pause(),
                                c.data("runningStatus", "paused"),
                                c.trigger("paused")
                        },
                        resume: function() {
                            u && o.allowCss3Support ? a.css(d, "running") : e.fn.resume && a.resume(),
                                c.data("runningStatus", "resumed"),
                                c.trigger("resumed")
                        },
                        toggle: function() {
                            p["resumed" == c.data("runningStatus") ? "pause": "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(c.timer),
                                c.find("*").andSelf().unbind(),
                                c.html(c.find(".js-marquee:first").html())
                        }
                    };
                if ("string" == typeof t) e.isFunction(p[t]) && (a || (a = c.find(".js-marquee-wrapper")), !0 === c.data("css3AnimationIsSupported") && (u = !0), p[t]());
                else {
                    var D;
                    e.each(o,
                        function(e, t) {
                            if (void 0 !== (D = c.attr("data-" + e))) {
                                switch (D) {
                                    case "true":
                                        D = !0;
                                        break;
                                    case "false":
                                        D = !1
                                }
                                o[e] = D
                            }
                        }),
                    o.speed && (o.duration = o.speed * parseInt(c.width(), 10)),
                        s = "up" == o.direction || "down" == o.direction,
                        o.gap = o.duplicated ? parseInt(o.gap) : 0,
                        c.wrapInner('<div class="js-marquee"></div>');
                    var C = c.find(".js-marquee").css({
                        "margin-right": o.gap,
                        float: "left"
                    });
                    if (o.duplicated && C.clone(!0).appendTo(c), c.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), a = c.find(".js-marquee-wrapper"), s) {
                        var h = c.height();
                        a.removeAttr("style"),
                            c.height(h),
                            c.find(".js-marquee").css({
                                float: "none",
                                "margin-bottom": o.gap,
                                "margin-right": 0
                            }),
                        o.duplicated && c.find(".js-marquee:last").css({
                            "margin-bottom": 0
                        });
                        var m = c.find(".js-marquee:first").height() + o.gap;
                        o.startVisible && !o.duplicated ? (o._completeDuration = (parseInt(m, 10) + parseInt(h, 10)) / parseInt(h, 10) * o.duration, o.duration *= parseInt(m, 10) / parseInt(h, 10)) : o.duration *= (parseInt(m, 10) + parseInt(h, 10)) / parseInt(h, 10)
                    } else r = c.find(".js-marquee:first").width() + o.gap,
                        n = c.width(),
                        o.startVisible && !o.duplicated ? (o._completeDuration = (parseInt(r, 10) + parseInt(n, 10)) / parseInt(n, 10) * o.duration, o.duration *= parseInt(r, 10) / parseInt(n, 10)) : o.duration *= (parseInt(r, 10) + parseInt(n, 10)) / parseInt(n, 10);
                    if (o.duplicated && (o.duration /= 2), o.allowCss3Support) {
                        var C = document.body || document.createElement("div"),
                            A = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                            E = ["Webkit", "Moz", "O", "ms", "Khtml"],
                            g = "animation",
                            b = "",
                            y = "";
                        if (C.style.animation && (y = "@keyframes " + A + " ", u = !0), !1 === u) for (var _ = 0; _ < E.length; _++) if (void 0 !== C.style[E[_] + "AnimationName"]) {
                            C = "-" + E[_].toLowerCase() + "-",
                                g = C + g,
                                d = C + d,
                                y = "@" + C + "keyframes " + A + " ",
                                u = !0;
                            break
                        }
                        u && (b = A + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing, c.data("css3AnimationIsSupported", !0))
                    }
                    var k = function() {
                            a.css("margin-top", "up" == o.direction ? h + "px": "-" + m + "px")
                        },
                        x = function() {
                            a.css("margin-left", "left" == o.direction ? n + "px": "-" + r + "px")
                        };
                    o.duplicated ? (s ? o.startVisible ? a.css("margin-top", 0) : a.css("margin-top", "up" == o.direction ? h + "px": "-" + (2 * m - o.gap) + "px") : o.startVisible ? a.css("margin-left", 0) : a.css("margin-left", "left" == o.direction ? n + "px": "-" + (2 * r - o.gap) + "px"), o.startVisible || (l = 1)) : o.startVisible ? l = 2 : s ? k() : x();
                    var I = function() {
                        if (o.duplicated && (1 === l ? (o._originalDuration = o.duration, o.duration = s ? "up" == o.direction ? o.duration + h / (m / o.duration) : 2 * o.duration: "left" == o.direction ? o.duration + n / (r / o.duration) : 2 * o.duration, b && (b = A + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing), l++) : 2 === l && (o.duration = o._originalDuration, b && (A += "0", y = e.trim(y) + "0 ", b = A + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing), l++)), s ? o.duplicated ? (2 < l && a.css("margin-top", "up" == o.direction ? 0 : "-" + m + "px"), i = {
                                "margin-top": "up" == o.direction ? "-" + m + "px": 0
                            }) : o.startVisible ? 2 === l ? (b && (b = A + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing), i = {
                                "margin-top": "up" == o.direction ? "-" + m + "px": h + "px"
                            },
                                l++) : 3 === l && (o.duration = o._completeDuration, b && (A += "0", y = e.trim(y) + "0 ", b = A + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing), k()) : (k(), i = {
                                "margin-top": "up" == o.direction ? "-" + a.height() + "px": h + "px"
                            }) : o.duplicated ? (2 < l && a.css("margin-left", "left" == o.direction ? 0 : "-" + r + "px"), i = {
                                "margin-left": "left" == o.direction ? "-" + r + "px": 0
                            }) : o.startVisible ? 2 === l ? (b && (b = A + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing), i = {
                                "margin-left": "left" == o.direction ? "-" + r + "px": n + "px"
                            },
                                l++) : 3 === l && (o.duration = o._completeDuration, b && (A += "0", y = e.trim(y) + "0 ", b = A + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing), x()) : (x(), i = {
                                "margin-left": "left" == o.direction ? "-" + r + "px": n + "px"
                            }), c.trigger("beforeStarting"), u) {
                            a.css(g, b);
                            var t = y + " { 100%  " + f(i) + "}",
                                d = a.find("style");
                            0 !== d.length ? d.filter(":last").html(t) : a.append("<style>" + t + "</style>"),
                                v(a[0], "AnimationIteration",
                                    function() {
                                        c.trigger("finished")
                                    }),
                                v(a[0], "AnimationEnd",
                                    function() {
                                        I(),
                                            c.trigger("finished")
                                    })
                        } else a.animate(i, o.duration, o.easing,
                            function() {
                                c.trigger("finished"),
                                    o.pauseOnCycle ? c.timer = setTimeout(I, o.delayBeforeStart) : I()
                            });
                        c.data("runningStatus", "resumed")
                    };
                    c.bind("pause", p.pause),
                        c.bind("resume", p.resume),
                    o.pauseOnHover && c.bind("mouseenter mouseleave", p.toggle),
                        u && o.allowCss3Support ? I() : c.timer = setTimeout(I, o.delayBeforeStart)
                }
            })
        },
            e.fn.marquee.defaults = {
                allowCss3Support: !0,
                css3easing: "linear",
                easing: "linear",
                delayBeforeStart: 1e3,
                direction: "left",
                duplicated: !1,
                duration: 5e3,
                gap: 20,
                pauseOnCycle: !1,
                pauseOnHover: !1,
                startVisible: !1
            }
    } (jQuery),
    function(e) {
        "use strict";
        var t, a = e.Base64;
        if ("undefined" != typeof module && module.exports) try {
            t = require("buffer").Buffer
        } catch(e) {}
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            i = function(e) {
                for (var t = {},
                         a = 0,
                         n = e.length; a < n; a++) t[e.charAt(a)] = a;
                return t
            } (n),
            s = String.fromCharCode,
            r = function(e) {
                if (e.length < 2) {
                    var t = e.charCodeAt(0);
                    return t < 128 ? e: t < 2048 ? s(192 | t >>> 6) + s(128 | 63 & t) : s(224 | t >>> 12 & 15) + s(128 | t >>> 6 & 63) + s(128 | 63 & t)
                }
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return s(240 | t >>> 18 & 7) + s(128 | t >>> 12 & 63) + s(128 | t >>> 6 & 63) + s(128 | 63 & t)
            },
            o = function(e) {
                return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, r)
            },
            c = function(e) {
                var t = [0, 2, 1][e.length % 3],
                    a = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                return [n.charAt(a >>> 18), n.charAt(a >>> 12 & 63), t >= 2 ? "=": n.charAt(a >>> 6 & 63), t >= 1 ? "=": n.charAt(63 & a)].join("")
            },
            l = e.btoa ?
                function(t) {
                    return e.btoa(t)
                }: function(e) {
                    return e.replace(/[\s\S]{1,3}/g, c)
                },
            d = t ?
                function(e) {
                    return (e.constructor === t.constructor ? e: new t(e)).toString("base64")
                }: function(e) {
                    return l(o(e))
                },
            u = function(e, t) {
                return t ? d(String(e)).replace(/[+\/]/g,
                    function(e) {
                        return "+" == e ? "-": "_"
                    }).replace(/=/g, "") : d(String(e))
            },
            v = function(e) {
                return u(e, !0)
            },
            f = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
            p = function(e) {
                switch (e.length) {
                    case 4:
                        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                            a = t - 65536;
                        return s(55296 + (a >>> 10)) + s(56320 + (1023 & a));
                    case 3:
                        return s((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return s((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                }
            },
            D = function(e) {
                return e.replace(f, p)
            },
            C = function(e) {
                var t = e.length,
                    a = t % 4,
                    n = (t > 0 ? i[e.charAt(0)] << 18 : 0) | (t > 1 ? i[e.charAt(1)] << 12 : 0) | (t > 2 ? i[e.charAt(2)] << 6 : 0) | (t > 3 ? i[e.charAt(3)] : 0),
                    r = [s(n >>> 16), s(n >>> 8 & 255), s(255 & n)];
                return r.length -= [0, 0, 2, 1][a],
                    r.join("")
            },
            h = e.atob ?
                function(t) {
                    return e.atob(t)
                }: function(e) {
                    return e.replace(/[\s\S]{1,4}/g, C)
                },
            m = t ?
                function(e) {
                    return (e.constructor === t.constructor ? e: new t(e, "base64")).toString()
                }: function(e) {
                    return D(h(e))
                },
            A = function(e) {
                return m(String(e).replace(/[-_]/g,
                    function(e) {
                        return "-" == e ? "+": "/"
                    }).replace(/[^A-Za-z0-9\+\/]/g, ""))
            },
            E = function() {
                var t = e.Base64;
                return e.Base64 = a,
                    t
            };
        if (e.Base64 = {
                VERSION: "2.1.9",
                atob: h,
                btoa: l,
                fromBase64: A,
                toBase64: u,
                utob: o,
                encode: u,
                encodeURI: v,
                btou: D,
                decode: A,
                noConflict: E
            },
            "function" == typeof Object.defineProperty) {
            var g = function(e) {
                return {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            };
            e.Base64.extendString = function() {
                Object.defineProperty(String.prototype, "fromBase64", g(function() {
                    return A(this)
                })),
                    Object.defineProperty(String.prototype, "toBase64", g(function(e) {
                        return u(this, e)
                    })),
                    Object.defineProperty(String.prototype, "toBase64URI", g(function() {
                        return u(this, !0)
                    }))
            }
        }
        e.Meteor && (Base64 = e.Base64)
    } (this),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
    } (this,
        function() {
            "use strict";
            function e(e) {
                return null == e ? "": "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
            }
            function t(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e: t
            }
            function a(e, t) {
                for (var a = Object.create(null), n = e.split(","), i = 0; i < n.length; i++) a[n[i]] = !0;
                return t ?
                    function(e) {
                        return a[e.toLowerCase()]
                    }: function(e) {
                        return a[e]
                    }
            }
            function n(e, t) {
                if (e.length) {
                    var a = e.indexOf(t);
                    if (a > -1) return e.splice(a, 1)
                }
            }
            function i(e, t) {
                return gi.call(e, t)
            }
            function s(e) {
                return "string" == typeof e || "number" == typeof e
            }
            function r(e) {
                var t = Object.create(null);
                return function(a) {
                    return t[a] || (t[a] = e(a))
                }
            }
            function o(e, t) {
                function a(a) {
                    var n = arguments.length;
                    return n ? n > 1 ? e.apply(t, arguments) : e.call(t, a) : e.call(t)
                }
                return a._length = e.length,
                    a
            }
            function c(e, t) {
                t = t || 0;
                for (var a = e.length - t,
                         n = new Array(a); a--;) n[a] = e[a + t];
                return n
            }
            function l(e, t) {
                for (var a in t) e[a] = t[a];
                return e
            }
            function d(e) {
                return null !== e && "object" == typeof e
            }
            function u(e) {
                return ki.call(e) === xi
            }
            function v(e) {
                for (var t = {},
                         a = 0; a < e.length; a++) e[a] && l(t, e[a]);
                return t
            }
            function f() {}
            function p(e, t) {
                var a = d(e),
                    n = d(t);
                if (!a || !n) return ! a && !n && String(e) === String(t);
                try {
                    return JSON.stringify(e) === JSON.stringify(t)
                } catch(a) {
                    return e === t
                }
            }
            function D(e, t) {
                for (var a = 0; a < e.length; a++) if (p(e[a], t)) return a;
                return - 1
            }
            function C(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e())
                }
            }
            function h(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t
            }
            function m(e, t, a, n) {
                Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !!n,
                    writable: !0,
                    configurable: !0
                })
            }
            function A(e) {
                if (!Si.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var a = 0; a < t.length; a++) {
                            if (!e) return;
                            e = e[t[a]]
                        }
                        return e
                    }
                }
            }
            function E(e) {
                return /native code/.test(e.toString())
            }
            function g(e) {
                zi.target && Vi.push(zi.target),
                    zi.target = e
            }
            function b() {
                zi.target = Vi.pop()
            }
            function y(e, t) {
                e.__proto__ = t
            }
            function _(e, t, a) {
                for (var n = 0,
                         i = a.length; n < i; n++) {
                    var s = a[n];
                    m(e, s, t[s])
                }
            }
            function k(e, t) {
                if (d(e)) {
                    var a;
                    return i(e, "__ob__") && e.__ob__ instanceof Zi ? a = e.__ob__: Qi.shouldConvert && !Ui() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (a = new Zi(e)),
                    t && a && a.vmCount++,
                        a
                }
            }
            function x(e, t, a, n) {
                var i = new zi,
                    s = Object.getOwnPropertyDescriptor(e, t);
                if (!s || !1 !== s.configurable) {
                    var r = s && s.get,
                        o = s && s.set,
                        c = k(a);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = r ? r.call(e) : a;
                            return zi.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && B(t)),
                                t
                        },
                        set: function(t) {
                            var n = r ? r.call(e) : a;
                            t === n || t !== t && n !== n || (o ? o.call(e, t) : a = t, c = k(t), i.notify())
                        }
                    })
                }
            }
            function I(e, t, a) {
                if (Array.isArray(e) && "number" == typeof t) return e.length = Math.max(e.length, t),
                    e.splice(t, 1, a),
                    a;
                if (i(e, t)) return e[t] = a,
                    a;
                var n = e.__ob__;
                return e._isVue || n && n.vmCount ? a: n ? (x(n.value, t, a), n.dep.notify(), a) : (e[t] = a, a)
            }
            function w(e, t) {
                if (Array.isArray(e) && "number" == typeof t) return void e.splice(t, 1);
                var a = e.__ob__;
                e._isVue || a && a.vmCount || i(e, t) && (delete e[t], a && a.dep.notify())
            }
            function B(e) {
                for (var t = void 0,
                         a = 0,
                         n = e.length; a < n; a++) t = e[a],
                t && t.__ob__ && t.__ob__.dep.depend(),
                Array.isArray(t) && B(t)
            }
            function T(e, t) {
                if (!t) return e;
                for (var a, n, s, r = Object.keys(t), o = 0; o < r.length; o++) a = r[o],
                    n = e[a],
                    s = t[a],
                    i(e, a) ? u(n) && u(s) && T(n, s) : I(e, a, s);
                return e
            }
            function S(e, t) {
                return t ? e ? e.concat(t) : Array.isArray(t) ? t: [t] : e
            }
            function F(e, t) {
                var a = Object.create(e || null);
                return t ? l(a, t) : a
            }
            function j(e) {
                var t = e.props;
                if (t) {
                    var a, n, i, s = {};
                    if (Array.isArray(t)) for (a = t.length; a--;)"string" == typeof(n = t[a]) && (i = bi(n), s[i] = {
                        type: null
                    });
                    else if (u(t)) for (var r in t) n = t[r],
                        i = bi(r),
                        s[i] = u(n) ? n: {
                            type: n
                        };
                    e.props = s
                }
            }
            function N(e) {
                var t = e.directives;
                if (t) for (var a in t) {
                    var n = t[a];
                    "function" == typeof n && (t[a] = {
                        bind: n,
                        update: n
                    })
                }
            }
            function $(e, t, a) {
                function n(n) {
                    var i = es[n] || ts;
                    d[n] = i(e[n], t[n], a, n)
                }
                j(t),
                    N(t);
                var s = t.extends;
                if (s && (e = "function" == typeof s ? $(e, s.options, a) : $(e, s, a)), t.mixins) for (var r = 0,
                                                                                                            o = t.mixins.length; r < o; r++) {
                    var c = t.mixins[r];
                    c.prototype instanceof at && (c = c.options),
                        e = $(e, c, a)
                }
                var l, d = {};
                for (l in e) n(l);
                for (l in t) i(e, l) || n(l);
                return d
            }
            function P(e, t, a, n) {
                if ("string" == typeof a) {
                    var s = e[t];
                    if (i(s, a)) return s[a];
                    var r = bi(a);
                    if (i(s, r)) return s[r];
                    var o = yi(r);
                    if (i(s, o)) return s[o];
                    return s[a] || s[r] || s[o]
                }
            }
            function M(e, t, a, n) {
                var s = t[e],
                    r = !i(a, e),
                    o = a[e];
                if (R(Boolean, s.type) && (r && !i(s, "default") ? o = !1 : R(String, s.type) || "" !== o && o !== _i(e) || (o = !0)), void 0 === o) {
                    o = O(n, s, e);
                    var c = Qi.shouldConvert;
                    Qi.shouldConvert = !0,
                        k(o),
                        Qi.shouldConvert = c
                }
                return o
            }
            function O(e, t, a) {
                if (i(t, "default")) {
                    var n = t.
                        default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" == typeof n && "Function" !== L(t.type) ? n.call(e) : n
                }
            }
            function L(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t && t[1]
            }
            function R(e, t) {
                if (!Array.isArray(t)) return L(t) === L(e);
                for (var a = 0,
                         n = t.length; a < n; a++) if (L(t[a]) === L(e)) return ! 0;
                return ! 1
            }
            function U(e, t, a) {
                if (Bi.errorHandler) Bi.errorHandler.call(null, e, t, a);
                else {
                    if (!ji || "undefined" == typeof console) throw e;
                    console.error(e)
                }
            }
            function H(e) {
                return new as(void 0, void 0, void 0, String(e))
            }
            function G(e) {
                var t = new as(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
                return t.ns = e.ns,
                    t.isStatic = e.isStatic,
                    t.key = e.key,
                    t.isCloned = !0,
                    t
            }
            function q(e) {
                for (var t = e.length,
                         a = new Array(t), n = 0; n < t; n++) a[n] = G(e[n]);
                return a
            }
            function W(e) {
                function t() {
                    var e = arguments,
                        a = t.fns;
                    if (!Array.isArray(a)) return a.apply(null, arguments);
                    for (var n = 0; n < a.length; n++) a[n].apply(null, e)
                }
                return t.fns = e,
                    t
            }
            function X(e, t, a, n, i) {
                var s, r, o, c;
                for (s in e) r = e[s],
                    o = t[s],
                    c = rs(s),
                r && (o ? r !== o && (o.fns = r, e[s] = o) : (r.fns || (r = e[s] = W(r)), a(c.name, r, c.once, c.capture)));
                for (s in t) e[s] || (c = rs(s), n(c.name, t[s], c.capture))
            }
            function z(e, t, a) {
                function i() {
                    a.apply(this, arguments),
                        n(s.fns, i)
                }
                var s, r = e[t];
                r ? r.fns && r.merged ? (s = r, s.fns.push(i)) : s = W([r, i]) : s = W([i]),
                    s.merged = !0,
                    e[t] = s
            }
            function V(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e
            }
            function J(e) {
                return s(e) ? [H(e)] : Array.isArray(e) ? K(e) : void 0
            }
            function K(e, t) {
                var a, n, i, r = [];
                for (a = 0; a < e.length; a++) null != (n = e[a]) && "boolean" != typeof n && (i = r[r.length - 1], Array.isArray(n) ? r.push.apply(r, K(n, (t || "") + "_" + a)) : s(n) ? i && i.text ? i.text += String(n) : "" !== n && r.push(H(n)) : n.text && i && i.text ? r[r.length - 1] = H(i.text + n.text) : (n.tag && null == n.key && null != t && (n.key = "__vlist" + t + "_" + a + "__"), r.push(n)));
                return r
            }
            function Y(e) {
                return e && e.filter(function(e) {
                    return e && e.componentOptions
                })[0]
            }
            function Q(e) {
                e._events = Object.create(null),
                    e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && te(e, t)
            }
            function Z(e, t, a) {
                a ? is.$once(e, t) : is.$on(e, t)
            }
            function ee(e, t) {
                is.$off(e, t)
            }
            function te(e, t, a) {
                is = e,
                    X(t, a || {},
                        Z, ee, e)
            }
            function ae(e, t) {
                var a = {};
                if (!e) return a;
                for (var n, i, s = [], r = 0, o = e.length; r < o; r++) if (i = e[r], (i.context === t || i.functionalContext === t) && i.data && (n = i.data.slot)) {
                    var c = a[n] || (a[n] = []);
                    "template" === i.tag ? c.push.apply(c, i.children) : c.push(i)
                } else s.push(i);
                return s.every(ne) || (a.
                    default = s),
                    a
            }
            function ne(e) {
                return e.isComment || " " === e.text
            }
            function ie(e) {
                for (var t = {},
                         a = 0; a < e.length; a++) t[e[a][0]] = e[a][1];
                return t
            }
            function se(e) {
                var t = e.$options,
                    a = t.parent;
                if (a && !t.abstract) {
                    for (; a.$options.abstract && a.$parent;) a = a.$parent;
                    a.$children.push(e)
                }
                e.$parent = a,
                    e.$root = a ? a.$root: e,
                    e.$children = [],
                    e.$refs = {},
                    e._watcher = null,
                    e._inactive = null,
                    e._directInactive = !1,
                    e._isMounted = !1,
                    e._isDestroyed = !1,
                    e._isBeingDestroyed = !1
            }
            function re(e, t, a) {
                e.$el = t,
                e.$options.render || (e.$options.render = ss),
                    ue(e, "beforeMount");
                var n;
                return n = function() {
                    e._update(e._render(), a)
                },
                    e._watcher = new ps(e, n, f),
                    a = !1,
                null == e.$vnode && (e._isMounted = !0, ue(e, "mounted")),
                    e
            }
            function oe(e, t, a, n, i) {
                var s = !!(i || e.$options._renderChildren || n.data.scopedSlots || e.$scopedSlots !== Ti);
                if (e.$options._parentVnode = n, e.$vnode = n, e._vnode && (e._vnode.parent = n), e.$options._renderChildren = i, t && e.$options.props) {
                    Qi.shouldConvert = !1;
                    for (var r = e._props,
                             o = e.$options._propKeys || [], c = 0; c < o.length; c++) {
                        var l = o[c];
                        r[l] = M(l, e.$options.props, t, e)
                    }
                    Qi.shouldConvert = !0,
                        e.$options.propsData = t
                }
                if (a) {
                    var d = e.$options._parentListeners;
                    e.$options._parentListeners = a,
                        te(e, a, d)
                }
                s && (e.$slots = ae(i, n.context), e.$forceUpdate())
            }
            function ce(e) {
                for (; e && (e = e.$parent);) if (e._inactive) return ! 0;
                return ! 1
            }
            function le(e, t) {
                if (t) {
                    if (e._directInactive = !1, ce(e)) return
                } else if (e._directInactive) return;
                if (e._inactive || null == e._inactive) {
                    e._inactive = !1;
                    for (var a = 0; a < e.$children.length; a++) le(e.$children[a]);
                    ue(e, "activated")
                }
            }
            function de(e, t) {
                if (! (t && (e._directInactive = !0, ce(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var a = 0; a < e.$children.length; a++) de(e.$children[a]);
                    ue(e, "deactivated")
                }
            }
            function ue(e, t) {
                var a = e.$options[t];
                if (a) for (var n = 0,
                                i = a.length; n < i; n++) try {
                    a[n].call(e)
                } catch(a) {
                    U(a, e, t + " hook")
                }
                e._hasHookEvent && e.$emit("hook:" + t)
            }
            function ve() {
                cs.length = 0,
                    ls = {},
                    ds = us = !1
            }
            function fe() {
                us = !0;
                var e, t, a;
                for (cs.sort(function(e, t) {
                    return e.id - t.id
                }), vs = 0; vs < cs.length; vs++) e = cs[vs],
                    t = e.id,
                    ls[t] = null,
                    e.run();
                var n = cs.slice();
                for (ve(), vs = n.length; vs--;) e = n[vs],
                    a = e.vm,
                a._watcher === e && a._isMounted && ue(a, "updated");
                Hi && Bi.devtools && Hi.emit("flush")
            }
            function pe(e) {
                var t = e.id;
                if (null == ls[t]) {
                    if (ls[t] = !0, us) {
                        for (var a = cs.length - 1; a >= 0 && cs[a].id > e.id;) a--;
                        cs.splice(Math.max(a, vs) + 1, 0, e)
                    } else cs.push(e);
                    ds || (ds = !0, qi(fe))
                }
            }
            function De(e) {
                Ds.clear(),
                    Ce(e, Ds)
            }
            function Ce(e, t) {
                var a, n, i = Array.isArray(e);
                if ((i || d(e)) && Object.isExtensible(e)) {
                    if (e.__ob__) {
                        var s = e.__ob__.dep.id;
                        if (t.has(s)) return;
                        t.add(s)
                    }
                    if (i) for (a = e.length; a--;) Ce(e[a], t);
                    else for (n = Object.keys(e), a = n.length; a--;) Ce(e[n[a]], t)
                }
            }
            function he(e, t, a) {
                Cs.get = function() {
                    return this[t][a]
                },
                    Cs.set = function(e) {
                        this[t][a] = e
                    },
                    Object.defineProperty(e, a, Cs)
            }
            function me(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && Ae(e, t.props),
                t.methods && ke(e, t.methods),
                    t.data ? Ee(e) : k(e._data = {},
                        !0),
                t.computed && be(e, t.computed),
                t.watch && xe(e, t.watch)
            }
            function Ae(e, t) {
                var a = e.$options.propsData || {},
                    n = e._props = {},
                    i = e.$options._propKeys = [],
                    s = !e.$parent;
                Qi.shouldConvert = s;
                for (var r in t) !
                    function(s) {
                        i.push(s);
                        var r = M(s, t, a, e);
                        x(n, s, r),
                        s in e || he(e, "_props", s)
                    } (r);
                Qi.shouldConvert = !0
            }
            function Ee(e) {
                var t = e.$options.data;
                t = e._data = "function" == typeof t ? ge(t, e) : t || {},
                u(t) || (t = {});
                for (var a = Object.keys(t), n = e.$options.props, s = a.length; s--;) n && i(n, a[s]) || h(a[s]) || he(e, "_data", a[s]);
                k(t, !0)
            }
            function ge(e, t) {
                try {
                    return e.call(t)
                } catch(e) {
                    return U(e, t, "data()"),
                        {}
                }
            }
            function be(e, t) {
                var a = e._computedWatchers = Object.create(null);
                for (var n in t) {
                    var i = t[n],
                        s = "function" == typeof i ? i: i.get;
                    a[n] = new ps(e, s, f, hs),
                    n in e || ye(e, n, i)
                }
            }
            function ye(e, t, a) {
                "function" == typeof a ? (Cs.get = _e(t), Cs.set = f) : (Cs.get = a.get ? !1 !== a.cache ? _e(t) : a.get: f, Cs.set = a.set ? a.set: f),
                    Object.defineProperty(e, t, Cs)
            }
            function _e(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(),
                    zi.target && t.depend(),
                        t.value
                }
            }
            function ke(e, t) {
                e.$options.props;
                for (var a in t) e[a] = null == t[a] ? f: o(t[a], e)
            }
            function xe(e, t) {
                for (var a in t) {
                    var n = t[a];
                    if (Array.isArray(n)) for (var i = 0; i < n.length; i++) Ie(e, a, n[i]);
                    else Ie(e, a, n)
                }
            }
            function Ie(e, t, a) {
                var n;
                u(a) && (n = a, a = a.handler),
                "string" == typeof a && (a = e[a]),
                    e.$watch(t, a, n)
            }
            function we(e, t, a, n, i) {
                if (e) {
                    var s = a.$options._base;
                    if (d(e) && (e = s.extend(e)), "function" == typeof e) {
                        if (!e.cid) if (e.resolved) e = e.resolved;
                        else if (! (e = Se(e, s,
                                function() {
                                    a.$forceUpdate()
                                }))) return;
                        Ze(e),
                            t = t || {},
                        t.model && Pe(e.options, t);
                        var r = Fe(t, e, i);
                        if (e.options.functional) return Be(e, r, t, a, n);
                        var o = t.on;
                        t.on = t.nativeOn,
                        e.options.abstract && (t = {}),
                            Ne(t);
                        var c = e.options.name || i;
                        return new as("vue-component-" + e.cid + (c ? "-" + c: ""), t, void 0, void 0, void 0, a, {
                            Ctor: e,
                            propsData: r,
                            listeners: o,
                            tag: i,
                            children: n
                        })
                    }
                }
            }
            function Be(e, t, a, n, i) {
                var s = {},
                    r = e.options.props;
                if (r) for (var o in r) s[o] = M(o, r, t);
                var c = Object.create(n),
                    l = function(e, t, a, n) {
                        return Me(c, e, t, a, n, !0)
                    },
                    d = e.options.render.call(null, l, {
                        props: s,
                        data: a,
                        parent: n,
                        children: i,
                        slots: function() {
                            return ae(i, n)
                        }
                    });
                return d instanceof as && (d.functionalContext = n, a.slot && ((d.data || (d.data = {})).slot = a.slot)),
                    d
            }
            function Te(e, t, a, n) {
                var i = e.componentOptions,
                    s = {
                        _isComponent: !0,
                        parent: t,
                        propsData: i.propsData,
                        _componentTag: i.tag,
                        _parentVnode: e,
                        _parentListeners: i.listeners,
                        _renderChildren: i.children,
                        _parentElm: a || null,
                        _refElm: n || null
                    },
                    r = e.data.inlineTemplate;
                return r && (s.render = r.render, s.staticRenderFns = r.staticRenderFns),
                    new i.Ctor(s)
            }
            function Se(e, t, a) {
                if (!e.requested) {
                    e.requested = !0;
                    var n = e.pendingCallbacks = [a],
                        i = !0,
                        s = function(a) {
                            if (d(a) && (a = t.extend(a)), e.resolved = a, !i) for (var s = 0,
                                                                                        r = n.length; s < r; s++) n[s](a)
                        },
                        r = function(e) {},
                        o = e(s, r);
                    return o && "function" == typeof o.then && !e.resolved && o.then(s, r),
                        i = !1,
                        e.resolved
                }
                e.pendingCallbacks.push(a)
            }
            function Fe(e, t, a) {
                var n = t.options.props;
                if (n) {
                    var i = {},
                        s = e.attrs,
                        r = e.props,
                        o = e.domProps;
                    if (s || r || o) for (var c in n) {
                        var l = _i(c);
                        je(i, r, c, l, !0) || je(i, s, c, l) || je(i, o, c, l)
                    }
                    return i
                }
            }
            function je(e, t, a, n, s) {
                if (t) {
                    if (i(t, a)) return e[a] = t[a],
                    s || delete t[a],
                        !0;
                    if (i(t, n)) return e[a] = t[n],
                    s || delete t[n],
                        !0
                }
                return ! 1
            }
            function Ne(e) {
                e.hook || (e.hook = {});
                for (var t = 0; t < As.length; t++) {
                    var a = As[t],
                        n = e.hook[a],
                        i = ms[a];
                    e.hook[a] = n ? $e(i, n) : i
                }
            }
            function $e(e, t) {
                return function(a, n, i, s) {
                    e(a, n, i, s),
                        t(a, n, i, s)
                }
            }
            function Pe(e, t) {
                var a = e.model && e.model.prop || "value",
                    n = e.model && e.model.event || "input"; (t.props || (t.props = {}))[a] = t.model.value;
                var i = t.on || (t.on = {});
                i[n] ? i[n] = [t.model.callback].concat(i[n]) : i[n] = t.model.callback
            }
            function Me(e, t, a, n, i, r) {
                return (Array.isArray(a) || s(a)) && (i = n, n = a, a = void 0),
                r && (i = gs),
                    Oe(e, t, a, n, i)
            }
            function Oe(e, t, a, n, i) {
                if (a && a.__ob__) return ss();
                if (!t) return ss();
                Array.isArray(n) && "function" == typeof n[0] && (a = a || {},
                    a.scopedSlots = {
                        default:
                            n[0]
                    },
                    n.length = 0),
                    i === gs ? n = J(n) : i === Es && (n = V(n));
                var s, r;
                if ("string" == typeof t) {
                    var o;
                    r = Bi.getTagNamespace(t),
                        s = Bi.isReservedTag(t) ? new as(Bi.parsePlatformTagName(t), a, n, void 0, void 0, e) : (o = P(e.$options, "components", t)) ? we(o, a, e, n, t) : new as(t, a, n, void 0, void 0, e)
                } else s = we(t, a, e, n);
                return s ? (r && Le(s, r), s) : ss()
            }
            function Le(e, t) {
                if (e.ns = t, "foreignObject" !== e.tag && e.children) for (var a = 0,
                                                                                n = e.children.length; a < n; a++) {
                    var i = e.children[a];
                    i.tag && !i.ns && Le(i, t)
                }
            }
            function Re(e, t) {
                var a, n, i, s, r;
                if (Array.isArray(e) || "string" == typeof e) for (a = new Array(e.length), n = 0, i = e.length; n < i; n++) a[n] = t(e[n], n);
                else if ("number" == typeof e) for (a = new Array(e), n = 0; n < e; n++) a[n] = t(n + 1, n);
                else if (d(e)) for (s = Object.keys(e), a = new Array(s.length), n = 0, i = s.length; n < i; n++) r = s[n],
                    a[n] = t(e[r], r, n);
                return a
            }
            function Ue(e, t, a, n) {
                var i = this.$scopedSlots[e];
                return i ? (a = a || {},
                n && l(a, n), i(a) || t) : this.$slots[e] || t
            }
            function He(e) {
                return P(this.$options, "filters", e, !0) || wi
            }
            function Ge(e, t, a) {
                var n = Bi.keyCodes[t] || a;
                return Array.isArray(n) ? -1 === n.indexOf(e) : n !== e
            }
            function qe(e, t, a, n) {
                if (a && d(a)) {
                    Array.isArray(a) && (a = v(a));
                    var i;
                    for (var s in a) {
                        if ("class" === s || "style" === s) i = e;
                        else {
                            var r = e.attrs && e.attrs.type;
                            i = n || Bi.mustUseProp(t, r, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        s in i || (i[s] = a[s])
                    }
                }
                return e
            }
            function We(e, t) {
                var a = this._staticTrees[e];
                return a && !t ? Array.isArray(a) ? q(a) : G(a) : (a = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), ze(a, "__static__" + e, !1), a)
            }
            function Xe(e, t, a) {
                return ze(e, "__once__" + t + (a ? "_" + a: ""), !0),
                    e
            }
            function ze(e, t, a) {
                if (Array.isArray(e)) for (var n = 0; n < e.length; n++) e[n] && "string" != typeof e[n] && Ve(e[n], t + "_" + n, a);
                else Ve(e, t, a)
            }
            function Ve(e, t, a) {
                e.isStatic = !0,
                    e.key = t,
                    e.isOnce = a
            }
            function Je(e) {
                e.$vnode = null,
                    e._vnode = null,
                    e._staticTrees = null;
                var t = e.$options._parentVnode,
                    a = t && t.context;
                e.$slots = ae(e.$options._renderChildren, a),
                    e.$scopedSlots = Ti,
                    e._c = function(t, a, n, i) {
                        return Me(e, t, a, n, i, !1)
                    },
                    e.$createElement = function(t, a, n, i) {
                        return Me(e, t, a, n, i, !0)
                    }
            }
            function Ke(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }
            function Ye(e) {
                var t = e.$options.inject;
                if (t) for (var a = Array.isArray(t), n = a ? t: Gi ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < n.length; i++) !
                    function(i) {
                        for (var s = n[i], r = a ? s: t[s], o = e; o;) {
                            if (o._provided && r in o._provided) {
                                x(e, s, o._provided[r]);
                                break
                            }
                            o = o.$parent
                        }
                    } (i)
            }
            function Qe(e, t) {
                var a = e.$options = Object.create(e.constructor.options);
                a.parent = t.parent,
                    a.propsData = t.propsData,
                    a._parentVnode = t._parentVnode,
                    a._parentListeners = t._parentListeners,
                    a._renderChildren = t._renderChildren,
                    a._componentTag = t._componentTag,
                    a._parentElm = t._parentElm,
                    a._refElm = t._refElm,
                t.render && (a.render = t.render, a.staticRenderFns = t.staticRenderFns)
            }
            function Ze(e) {
                var t = e.options;
                if (e.super) {
                    var a = Ze(e.super);
                    if (a !== e.superOptions) {
                        e.superOptions = a;
                        var n = et(e);
                        n && l(e.extendOptions, n),
                            t = e.options = $(a, e.extendOptions),
                        t.name && (t.components[t.name] = e)
                    }
                }
                return t
            }
            function et(e) {
                var t, a = e.options,
                    n = e.sealedOptions;
                for (var i in a) a[i] !== n[i] && (t || (t = {}), t[i] = tt(a[i], n[i]));
                return t
            }
            function tt(e, t) {
                if (Array.isArray(e)) {
                    var a = [];
                    t = Array.isArray(t) ? t: [t];
                    for (var n = 0; n < e.length; n++) t.indexOf(e[n]) < 0 && a.push(e[n]);
                    return a
                }
                return e
            }
            function at(e) {
                this._init(e)
            }
            function nt(e) {
                e.use = function(e) {
                    if (!e.installed) {
                        var t = c(arguments, 1);
                        return t.unshift(this),
                            "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t),
                            e.installed = !0,
                            this
                    }
                }
            }
            function it(e) {
                e.mixin = function(e) {
                    this.options = $(this.options, e)
                }
            }
            function st(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var a = this,
                        n = a.cid,
                        i = e._Ctor || (e._Ctor = {});
                    if (i[n]) return i[n];
                    var s = e.name || a.options.name,
                        r = function(e) {
                            this._init(e)
                        };
                    return r.prototype = Object.create(a.prototype),
                        r.prototype.constructor = r,
                        r.cid = t++,
                        r.options = $(a.options, e),
                        r.super = a,
                    r.options.props && rt(r),
                    r.options.computed && ot(r),
                        r.extend = a.extend,
                        r.mixin = a.mixin,
                        r.use = a.use,
                        Bi._assetTypes.forEach(function(e) {
                            r[e] = a[e]
                        }),
                    s && (r.options.components[s] = r),
                        r.superOptions = a.options,
                        r.extendOptions = e,
                        r.sealedOptions = l({},
                            r.options),
                        i[n] = r,
                        r
                }
            }
            function rt(e) {
                var t = e.options.props;
                for (var a in t) he(e.prototype, "_props", a)
            }
            function ot(e) {
                var t = e.options.computed;
                for (var a in t) ye(e.prototype, a, t[a])
            }
            function ct(e) {
                Bi._assetTypes.forEach(function(t) {
                    e[t] = function(e, a) {
                        return a ? ("component" === t && u(a) && (a.name = a.name || e, a = this.options._base.extend(a)), "directive" === t && "function" == typeof a && (a = {
                            bind: a,
                            update: a
                        }), this.options[t + "s"][e] = a, a) : this.options[t + "s"][e]
                    }
                })
            }
            function lt(e) {
                return e && (e.Ctor.options.name || e.tag)
            }
            function dt(e, t) {
                return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e instanceof RegExp && e.test(t)
            }
            function ut(e, t) {
                for (var a in e) {
                    var n = e[a];
                    if (n) {
                        var i = lt(n.componentOptions);
                        i && !t(i) && (vt(n), e[a] = null)
                    }
                }
            }
            function vt(e) {
                e && (e.componentInstance._inactive || ue(e.componentInstance, "deactivated"), e.componentInstance.$destroy())
            }
            function ft(e) {
                for (var t = e.data,
                         a = e,
                         n = e; n.componentInstance;) n = n.componentInstance._vnode,
                n.data && (t = pt(n.data, t));
                for (; a = a.parent;) a.data && (t = pt(t, a.data));
                return Dt(t)
            }
            function pt(e, t) {
                return {
                    staticClass: Ct(e.staticClass, t.staticClass),
                    class: e.class ? [e.class, t.class] : t.class
                }
            }
            function Dt(e) {
                var t = e.class,
                    a = e.staticClass;
                return a || t ? Ct(a, ht(t)) : ""
            }
            function Ct(e, t) {
                return e ? t ? e + " " + t: e: t || ""
            }
            function ht(e) {
                var t = "";
                if (!e) return t;
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    for (var a, n = 0,
                             i = e.length; n < i; n++) e[n] && (a = ht(e[n])) && (t += a + " ");
                    return t.slice(0, -1)
                }
                if (d(e)) {
                    for (var s in e) e[s] && (t += s + " ");
                    return t.slice(0, -1)
                }
                return t
            }
            function mt(e) {
                return Ws(e) ? "svg": "math" === e ? "math": void 0
            }
            function At(e) {
                if (!ji) return ! 0;
                if (zs(e)) return ! 1;
                if (e = e.toLowerCase(), null != Vs[e]) return Vs[e];
                var t = document.createElement(e);
                return e.indexOf("-") > -1 ? Vs[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement: Vs[e] = /HTMLUnknownElement/.test(t.toString())
            }
            function Et(e) {
                if ("string" == typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div")
                }
                return e
            }
            function gt(e, t) {
                var a = document.createElement(e);
                return "select" !== e ? a: (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && a.setAttribute("multiple", "multiple"), a)
            }
            function bt(e, t) {
                return document.createElementNS(Gs[e], t)
            }
            function yt(e) {
                return document.createTextNode(e)
            }
            function _t(e) {
                return document.createComment(e)
            }
            function kt(e, t, a) {
                e.insertBefore(t, a)
            }
            function xt(e, t) {
                e.removeChild(t)
            }
            function It(e, t) {
                e.appendChild(t)
            }
            function wt(e) {
                return e.parentNode
            }
            function Bt(e) {
                return e.nextSibling
            }
            function Tt(e) {
                return e.tagName
            }
            function St(e, t) {
                e.textContent = t
            }
            function Ft(e, t, a) {
                e.setAttribute(t, a)
            }
            function jt(e, t) {
                var a = e.data.ref;
                if (a) {
                    var i = e.context,
                        s = e.componentInstance || e.elm,
                        r = i.$refs;
                    t ? Array.isArray(r[a]) ? n(r[a], s) : r[a] === s && (r[a] = void 0) : e.data.refInFor ? Array.isArray(r[a]) && r[a].indexOf(s) < 0 ? r[a].push(s) : r[a] = [s] : r[a] = s
                }
            }
            function Nt(e) {
                return void 0 === e || null === e
            }
            function $t(e) {
                return void 0 !== e && null !== e
            }
            function Pt(e) {
                return ! 0 === e
            }
            function Mt(e, t) {
                return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && $t(e.data) === $t(t.data) && Ot(e, t)
            }
            function Ot(e, t) {
                if ("input" !== e.tag) return ! 0;
                var a;
                return ($t(a = e.data) && $t(a = a.attrs) && a.type) === ($t(a = t.data) && $t(a = a.attrs) && a.type)
            }
            function Lt(e, t, a) {
                var n, i, s = {};
                for (n = t; n <= a; ++n) i = e[n].key,
                $t(i) && (s[i] = n);
                return s
            }
            function Rt(e, t) { (e.data.directives || t.data.directives) && Ut(e, t)
            }
            function Ut(e, t) {
                var a, n, i, s = e === Ys,
                    r = t === Ys,
                    o = Ht(e.data.directives, e.context),
                    c = Ht(t.data.directives, t.context),
                    l = [],
                    d = [];
                for (a in c) n = o[a],
                    i = c[a],
                    n ? (i.oldValue = n.value, qt(i, "update", t, e), i.def && i.def.componentUpdated && d.push(i)) : (qt(i, "bind", t, e), i.def && i.def.inserted && l.push(i));
                if (l.length) {
                    var u = function() {
                        for (var a = 0; a < l.length; a++) qt(l[a], "inserted", t, e)
                    };
                    s ? z(t.data.hook || (t.data.hook = {}), "insert", u) : u()
                }
                if (d.length && z(t.data.hook || (t.data.hook = {}), "postpatch",
                        function() {
                            for (var a = 0; a < d.length; a++) qt(d[a], "componentUpdated", t, e)
                        }), !s) for (a in o) c[a] || qt(o[a], "unbind", e, e, r)
            }
            function Ht(e, t) {
                var a = Object.create(null);
                if (!e) return a;
                var n, i;
                for (n = 0; n < e.length; n++) i = e[n],
                i.modifiers || (i.modifiers = er),
                    a[Gt(i)] = i,
                    i.def = P(t.$options, "directives", i.name, !0);
                return a
            }
            function Gt(e) {
                return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
            }
            function qt(e, t, a, n, i) {
                var s = e.def && e.def[t];
                s && s(a.elm, e, a, n, i)
            }
            function Wt(e, t) {
                if (e.data.attrs || t.data.attrs) {
                    var a, n, i = t.elm,
                        s = e.data.attrs || {},
                        r = t.data.attrs || {};
                    r.__ob__ && (r = t.data.attrs = l({},
                        r));
                    for (a in r) n = r[a],
                    s[a] !== n && Xt(i, a, n);
                    Pi && r.value !== s.value && Xt(i, "value", r.value);
                    for (a in s) null == r[a] && (Rs(a) ? i.removeAttributeNS(Ls, Us(a)) : Ms(a) || i.removeAttribute(a))
                }
            }
            function Xt(e, t, a) {
                Os(t) ? Hs(a) ? e.removeAttribute(t) : e.setAttribute(t, t) : Ms(t) ? e.setAttribute(t, Hs(a) || "false" === a ? "false": "true") : Rs(t) ? Hs(a) ? e.removeAttributeNS(Ls, Us(t)) : e.setAttributeNS(Ls, t, a) : Hs(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
            }
            function zt(e, t) {
                var a = t.elm,
                    n = t.data,
                    i = e.data;
                if (n.staticClass || n.class || i && (i.staticClass || i.class)) {
                    var s = ft(t),
                        r = a._transitionClasses;
                    r && (s = Ct(s, ht(r))),
                    s !== a._prevClass && (a.setAttribute("class", s), a._prevClass = s)
                }
            }
            function Vt(e) {
                function t() { (r || (r = [])).push(e.slice(p, i).trim()),
                    p = i + 1
                }
                var a, n, i, s, r, o = !1,
                    c = !1,
                    l = !1,
                    d = !1,
                    u = 0,
                    v = 0,
                    f = 0,
                    p = 0;
                for (i = 0; i < e.length; i++) if (n = a, a = e.charCodeAt(i), o) 39 === a && 92 !== n && (o = !1);
                else if (c) 34 === a && 92 !== n && (c = !1);
                else if (l) 96 === a && 92 !== n && (l = !1);
                else if (d) 47 === a && 92 !== n && (d = !1);
                else if (124 !== a || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || u || v || f) {
                    switch (a) {
                        case 34:
                            c = !0;
                            break;
                        case 39:
                            o = !0;
                            break;
                        case 96:
                            l = !0;
                            break;
                        case 40:
                            f++;
                            break;
                        case 41:
                            f--;
                            break;
                        case 91:
                            v++;
                            break;
                        case 93:
                            v--;
                            break;
                        case 123:
                            u++;
                            break;
                        case 125:
                            u--
                    }
                    if (47 === a) {
                        for (var D = i - 1,
                                 C = void 0; D >= 0 && " " === (C = e.charAt(D)); D--);
                        C && ir.test(C) || (d = !0)
                    }
                } else void 0 === s ? (p = i + 1, s = e.slice(0, i).trim()) : t();
                if (void 0 === s ? s = e.slice(0, i).trim() : 0 !== p && t(), r) for (i = 0; i < r.length; i++) s = Jt(s, r[i]);
                return s
            }
            function Jt(e, t) {
                var a = t.indexOf("(");
                return a < 0 ? '_f("' + t + '")(' + e + ")": '_f("' + t.slice(0, a) + '")(' + e + "," + t.slice(a + 1)
            }
            function Kt(e) {
                console.error("[Vue compiler]: " + e)
            }
            function Yt(e, t) {
                return e ? e.map(function(e) {
                    return e[t]
                }).filter(function(e) {
                    return e
                }) : []
            }
            function Qt(e, t, a) { (e.props || (e.props = [])).push({
                name: t,
                value: a
            })
            }
            function Zt(e, t, a) { (e.attrs || (e.attrs = [])).push({
                name: t,
                value: a
            })
            }
            function ea(e, t, a, n, i, s) { (e.directives || (e.directives = [])).push({
                name: t,
                rawName: a,
                value: n,
                arg: i,
                modifiers: s
            })
            }
            function ta(e, t, a, n, i) {
                n && n.capture && (delete n.capture, t = "!" + t),
                n && n.once && (delete n.once, t = "~" + t);
                var s;
                n && n.native ? (delete n.native, s = e.nativeEvents || (e.nativeEvents = {})) : s = e.events || (e.events = {});
                var r = {
                        value: a,
                        modifiers: n
                    },
                    o = s[t];
                Array.isArray(o) ? i ? o.unshift(r) : o.push(r) : s[t] = o ? i ? [r, o] : [o, r] : r
            }
            function aa(e, t, a) {
                var n = na(e, ":" + t) || na(e, "v-bind:" + t);
                if (null != n) return Vt(n);
                if (!1 !== a) {
                    var i = na(e, t);
                    if (null != i) return JSON.stringify(i)
                }
            }
            function na(e, t) {
                var a;
                if (null != (a = e.attrsMap[t])) for (var n = e.attrsList,
                                                          i = 0,
                                                          s = n.length; i < s; i++) if (n[i].name === t) {
                    n.splice(i, 1);
                    break
                }
                return a
            }
            function ia(e, t, a) {
                var n = a || {},
                    i = n.number,
                    s = n.trim,
                    r = "$$v";
                s && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
                i && (r = "_n(" + r + ")");
                var o = sa(t, r);
                e.model = {
                    value: "(" + t + ")",
                    expression: '"' + t + '"',
                    callback: "function ($$v) {" + o + "}"
                }
            }
            function sa(e, t) {
                var a = ra(e);
                return null === a.idx ? e + "=" + t: "var $$exp = " + a.exp + ", $$idx = " + a.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}"
            }
            function ra(e) {
                if (Is = e, xs = Is.length, Bs = Ts = Ss = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < xs - 1) return {
                    exp: e,
                    idx: null
                };
                for (; ! ca();) ws = oa(),
                    la(ws) ? ua(ws) : 91 === ws && da(ws);
                return {
                    exp: e.substring(0, Ts),
                    idx: e.substring(Ts + 1, Ss)
                }
            }
            function oa() {
                return Is.charCodeAt(++Bs)
            }
            function ca() {
                return Bs >= xs
            }
            function la(e) {
                return 34 === e || 39 === e
            }
            function da(e) {
                var t = 1;
                for (Ts = Bs; ! ca();) if (e = oa(), la(e)) ua(e);
                else if (91 === e && t++, 93 === e && t--, 0 === t) {
                    Ss = Bs;
                    break
                }
            }
            function ua(e) {
                for (var t = e; ! ca() && (e = oa()) !== t;);
            }
            function va(e, t, a) {
                Fs = a;
                var n = t.value,
                    i = t.modifiers,
                    s = e.tag,
                    r = e.attrsMap.type;
                if ("select" === s) Da(e, n, i);
                else if ("input" === s && "checkbox" === r) fa(e, n, i);
                else if ("input" === s && "radio" === r) pa(e, n, i);
                else if ("input" === s || "textarea" === s) Ca(e, n, i);
                else if (!Bi.isReservedTag(s)) return ia(e, n, i),
                    !1;
                return ! 0
            }
            function fa(e, t, a) {
                var n = a && a.number,
                    i = aa(e, "value") || "null",
                    s = aa(e, "true-value") || "true",
                    r = aa(e, "false-value") || "false";
                Qt(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === s ? ":(" + t + ")": ":_q(" + t + "," + s + ")")),
                    ta(e, rr, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + s + "):(" + r + ");if(Array.isArray($$a)){var $$v=" + (n ? "_n(" + i + ")": i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0)
            }
            function pa(e, t, a) {
                var n = a && a.number,
                    i = aa(e, "value") || "null";
                i = n ? "_n(" + i + ")": i,
                    Qt(e, "checked", "_q(" + t + "," + i + ")"),
                    ta(e, rr, sa(t, i), null, !0)
            }
            function Da(e, t, a) {
                var n = a && a.number,
                    i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n ? "_n(val)": "val") + "})",
                    s = "var $$selectedVal = " + i + ";";
                s = s + " " + sa(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),
                    ta(e, "change", s, null, !0)
            }
            function Ca(e, t, a) {
                var n = e.attrsMap.type,
                    i = a || {},
                    s = i.lazy,
                    r = i.number,
                    o = i.trim,
                    c = !s && "range" !== n,
                    l = s ? "change": "range" === n ? sr: "input",
                    d = "$event.target.value";
                o && (d = "$event.target.value.trim()"),
                r && (d = "_n(" + d + ")");
                var u = sa(t, d);
                c && (u = "if($event.target.composing)return;" + u),
                    Qt(e, "value", "(" + t + ")"),
                    ta(e, l, u, null, !0),
                (o || r || "number" === n) && ta(e, "blur", "$forceUpdate()")
            }
            function ha(e) {
                var t;
                e[sr] && (t = $i ? "change": "input", e[t] = [].concat(e[sr], e[t] || []), delete e[sr]),
                e[rr] && (t = Ri ? "click": "change", e[t] = [].concat(e[rr], e[t] || []), delete e[rr])
            }
            function ma(e, t, a, n) {
                if (a) {
                    var i = t,
                        s = js;
                    t = function(a) {
                        null !== (1 === arguments.length ? i(a) : i.apply(null, arguments)) && Aa(e, t, n, s)
                    }
                }
                js.addEventListener(e, t, n)
            }
            function Aa(e, t, a, n) { (n || js).removeEventListener(e, t, a)
            }
            function Ea(e, t) {
                if (e.data.on || t.data.on) {
                    var a = t.data.on || {},
                        n = e.data.on || {};
                    js = t.elm,
                        ha(a),
                        X(a, n, ma, Aa, t.context)
                }
            }
            function ga(e, t) {
                if (e.data.domProps || t.data.domProps) {
                    var a, n, i = t.elm,
                        s = e.data.domProps || {},
                        r = t.data.domProps || {};
                    r.__ob__ && (r = t.data.domProps = l({},
                        r));
                    for (a in s) null == r[a] && (i[a] = "");
                    for (a in r) if (n = r[a], "textContent" !== a && "innerHTML" !== a || (t.children && (t.children.length = 0), n !== s[a])) if ("value" === a) {
                        i._value = n;
                        var o = null == n ? "": String(n);
                        ba(i, t, o) && (i.value = o)
                    } else i[a] = n
                }
            }
            function ba(e, t, a) {
                return ! e.composing && ("option" === t.tag || ya(e, a) || _a(e, a))
            }
            function ya(e, t) {
                return document.activeElement !== e && e.value !== t
            }
            function _a(e, a) {
                var n = e.value,
                    i = e._vModifiers;
                return i && i.number || "number" === e.type ? t(n) !== t(a) : i && i.trim ? n.trim() !== a.trim() : n !== a
            }
            function ka(e) {
                var t = xa(e.style);
                return e.staticStyle ? l(e.staticStyle, t) : t
            }
            function xa(e) {
                return Array.isArray(e) ? v(e) : "string" == typeof e ? lr(e) : e
            }
            function Ia(e, t) {
                var a, n = {};
                if (t) for (var i = e; i.componentInstance;) i = i.componentInstance._vnode,
                i.data && (a = ka(i.data)) && l(n, a); (a = ka(e.data)) && l(n, a);
                for (var s = e; s = s.parent;) s.data && (a = ka(s.data)) && l(n, a);
                return n
            }
            function wa(e, t) {
                var a = t.data,
                    n = e.data;
                if (a.staticStyle || a.style || n.staticStyle || n.style) {
                    var i, s, r = t.elm,
                        o = e.data.staticStyle,
                        c = e.data.style || {},
                        d = o || c,
                        u = xa(t.data.style) || {};
                    t.data.style = u.__ob__ ? l({},
                        u) : u;
                    var v = Ia(t, !0);
                    for (s in d) null == v[s] && vr(r, s, "");
                    for (s in v)(i = v[s]) !== d[s] && vr(r, s, null == i ? "": i)
                }
            }
            function Ba(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var a = " " + (e.getAttribute("class") || "") + " ";
                    a.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (a + t).trim())
                }
            }
            function Ta(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t);
                else {
                    for (var a = " " + (e.getAttribute("class") || "") + " ", n = " " + t + " "; a.indexOf(n) >= 0;) a = a.replace(n, " ");
                    e.setAttribute("class", a.trim())
                }
            }
            function Sa(e) {
                if (e) {
                    if ("object" == typeof e) {
                        var t = {};
                        return ! 1 !== e.css && l(t, Cr(e.name || "v")),
                            l(t, e),
                            t
                    }
                    return "string" == typeof e ? Cr(e) : void 0
                }
            }
            function Fa(e) {
                _r(function() {
                    _r(e)
                })
            }
            function ja(e, t) { (e._transitionClasses || (e._transitionClasses = [])).push(t),
                Ba(e, t)
            }
            function Na(e, t) {
                e._transitionClasses && n(e._transitionClasses, t),
                    Ta(e, t)
            }
            function $a(e, t, a) {
                var n = Pa(e, t),
                    i = n.type,
                    s = n.timeout,
                    r = n.propCount;
                if (!i) return a();
                var o = i === mr ? gr: yr,
                    c = 0,
                    l = function() {
                        e.removeEventListener(o, d),
                            a()
                    },
                    d = function(t) {
                        t.target === e && ++c >= r && l()
                    };
                setTimeout(function() {
                        c < r && l()
                    },
                    s + 1),
                    e.addEventListener(o, d)
            }
            function Pa(e, t) {
                var a, n = window.getComputedStyle(e),
                    i = n[Er + "Delay"].split(", "),
                    s = n[Er + "Duration"].split(", "),
                    r = Ma(i, s),
                    o = n[br + "Delay"].split(", "),
                    c = n[br + "Duration"].split(", "),
                    l = Ma(o, c),
                    d = 0,
                    u = 0;
                return t === mr ? r > 0 && (a = mr, d = r, u = s.length) : t === Ar ? l > 0 && (a = Ar, d = l, u = c.length) : (d = Math.max(r, l), a = d > 0 ? r > l ? mr: Ar: null, u = a ? a === mr ? s.length: c.length: 0),
                    {
                        type: a,
                        timeout: d,
                        propCount: u,
                        hasTransform: a === mr && kr.test(n[Er + "Property"])
                    }
            }
            function Ma(e, t) {
                for (; e.length < t.length;) e = e.concat(e);
                return Math.max.apply(null, t.map(function(t, a) {
                    return Oa(t) + Oa(e[a])
                }))
            }
            function Oa(e) {
                return 1e3 * Number(e.slice(0, -1))
            }
            function La(e, a) {
                var n = e.elm;
                n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());
                var i = Sa(e.data.transition);
                if (i && !n._enterCb && 1 === n.nodeType) {
                    for (var s = i.css,
                             r = i.type,
                             o = i.enterClass,
                             c = i.enterToClass,
                             l = i.enterActiveClass,
                             u = i.appearClass,
                             v = i.appearToClass,
                             f = i.appearActiveClass,
                             p = i.beforeEnter,
                             D = i.enter,
                             h = i.afterEnter,
                             m = i.enterCancelled,
                             A = i.beforeAppear,
                             E = i.appear,
                             g = i.afterAppear,
                             b = i.appearCancelled,
                             y = i.duration,
                             _ = os,
                             k = os.$vnode; k && k.parent;) k = k.parent,
                        _ = k.context;
                    var x = !_._isMounted || !e.isRootInsert;
                    if (!x || E || "" === E) {
                        var I = x && u ? u: o,
                            w = x && f ? f: l,
                            B = x && v ? v: c,
                            T = x ? A || p: p,
                            S = x && "function" == typeof E ? E: D,
                            F = x ? g || h: h,
                            j = x ? b || m: m,
                            N = t(d(y) ? y.enter: y),
                            $ = !1 !== s && !Pi,
                            P = Ha(S),
                            M = n._enterCb = C(function() {
                                $ && (Na(n, B), Na(n, w)),
                                    M.cancelled ? ($ && Na(n, I), j && j(n)) : F && F(n),
                                    n._enterCb = null
                            });
                        e.data.show || z(e.data.hook || (e.data.hook = {}), "insert",
                            function() {
                                var t = n.parentNode,
                                    a = t && t._pending && t._pending[e.key];
                                a && a.tag === e.tag && a.elm._leaveCb && a.elm._leaveCb(),
                                S && S(n, M)
                            }),
                        T && T(n),
                        $ && (ja(n, I), ja(n, w), Fa(function() {
                            ja(n, B),
                                Na(n, I),
                            M.cancelled || P || (Ua(N) ? setTimeout(M, N) : $a(n, r, M))
                        })),
                        e.data.show && (a && a(), S && S(n, M)),
                        $ || P || M()
                    }
                }
            }
            function Ra(e, a) {
                function n() {
                    b.cancelled || (e.data.show || ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), v && v(i), A && (ja(i, c), ja(i, u), Fa(function() {
                        ja(i, l),
                            Na(i, c),
                        b.cancelled || E || (Ua(g) ? setTimeout(b, g) : $a(i, o, b))
                    })), f && f(i, b), A || E || b())
                }
                var i = e.elm;
                i._enterCb && (i._enterCb.cancelled = !0, i._enterCb());
                var s = Sa(e.data.transition);
                if (!s) return a();
                if (!i._leaveCb && 1 === i.nodeType) {
                    var r = s.css,
                        o = s.type,
                        c = s.leaveClass,
                        l = s.leaveToClass,
                        u = s.leaveActiveClass,
                        v = s.beforeLeave,
                        f = s.leave,
                        p = s.afterLeave,
                        D = s.leaveCancelled,
                        h = s.delayLeave,
                        m = s.duration,
                        A = !1 !== r && !Pi,
                        E = Ha(f),
                        g = t(d(m) ? m.leave: m),
                        b = i._leaveCb = C(function() {
                            i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null),
                            A && (Na(i, l), Na(i, u)),
                                b.cancelled ? (A && Na(i, c), D && D(i)) : (a(), p && p(i)),
                                i._leaveCb = null
                        });
                    h ? h(n) : n()
                }
            }
            function Ua(e) {
                return "number" == typeof e && !isNaN(e)
            }
            function Ha(e) {
                if (!e) return ! 1;
                var t = e.fns;
                return t ? Ha(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
            }
            function Ga(e, t) {
                t.data.show || La(t)
            }
            function qa(e, t, a) {
                var n = t.value,
                    i = e.multiple;
                if (!i || Array.isArray(n)) {
                    for (var s, r, o = 0,
                             c = e.options.length; o < c; o++) if (r = e.options[o], i) s = D(n, Xa(r)) > -1,
                    r.selected !== s && (r.selected = s);
                    else if (p(Xa(r), n)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
                    i || (e.selectedIndex = -1)
                }
            }
            function Wa(e, t) {
                for (var a = 0,
                         n = t.length; a < n; a++) if (p(Xa(t[a]), e)) return ! 1;
                return ! 0
            }
            function Xa(e) {
                return "_value" in e ? e._value: e.value
            }
            function za(e) {
                e.target.composing = !0
            }
            function Va(e) {
                e.target.composing = !1,
                    Ja(e.target, "input")
            }
            function Ja(e, t) {
                var a = document.createEvent("HTMLEvents");
                a.initEvent(t, !0, !0),
                    e.dispatchEvent(a)
            }
            function Ka(e) {
                return ! e.componentInstance || e.data && e.data.transition ? e: Ka(e.componentInstance._vnode)
            }
            function Ya(e) {
                var t = e && e.componentOptions;
                return t && t.Ctor.options.abstract ? Ya(Y(t.children)) : e
            }
            function Qa(e) {
                var t = {},
                    a = e.$options;
                for (var n in a.propsData) t[n] = e[n];
                var i = a._parentListeners;
                for (var s in i) t[bi(s)] = i[s];
                return t
            }
            function Za(e, t) {
                return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
            }
            function en(e) {
                for (; e = e.parent;) if (e.data.transition) return ! 0
            }
            function tn(e, t) {
                return t.key === e.key && t.tag === e.tag
            }
            function an(e) {
                e.elm._moveCb && e.elm._moveCb(),
                e.elm._enterCb && e.elm._enterCb()
            }
            function nn(e) {
                e.data.newPos = e.elm.getBoundingClientRect()
            }
            function sn(e) {
                var t = e.data.pos,
                    a = e.data.newPos,
                    n = t.left - a.left,
                    i = t.top - a.top;
                if (n || i) {
                    e.data.moved = !0;
                    var s = e.elm.style;
                    s.transform = s.WebkitTransform = "translate(" + n + "px," + i + "px)",
                        s.transitionDuration = "0s"
                }
            }
            function rn(e) {
                return Or = Or || document.createElement("div"),
                    Or.innerHTML = e,
                    Or.textContent
            }
            function on(e, t) {
                var a = t ? bo: go;
                return e.replace(a,
                    function(e) {
                        return Eo[e]
                    })
            }
            function cn(e, t) {
                function a(t) {
                    d += t,
                        e = e.substring(t)
                }
                function n(e, a, n) {
                    var i, o;
                    if (null == a && (a = d), null == n && (n = d), e && (o = e.toLowerCase()), e) for (i = r.length - 1; i >= 0 && r[i].lowerCasedTag !== o; i--);
                    else i = 0;
                    if (i >= 0) {
                        for (var c = r.length - 1; c >= i; c--) t.end && t.end(r[c].tag, a, n);
                        r.length = i,
                            s = i && r[i - 1].tag
                    } else "br" === o ? t.start && t.start(e, [], !0, a, n) : "p" === o && (t.start && t.start(e, [], !1, a, n), t.end && t.end(e, a, n))
                }
                for (var i, s, r = [], o = t.expectHTML, c = t.isUnaryTag || Ii, l = t.canBeLeftOpenTag || Ii, d = 0; e;) {
                    if (i = e, s && mo(s)) {
                        var u = s.toLowerCase(),
                            v = Ao[u] || (Ao[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                            f = 0,
                            p = e.replace(v,
                                function(e, a, n) {
                                    return f = n.length,
                                    mo(u) || "noscript" === u || (a = a.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                                    t.chars && t.chars(a),
                                        ""
                                });
                        d += e.length - p.length,
                            e = p,
                            n(u, d - f, d)
                    } else {
                        var D = e.indexOf("<");
                        if (0 === D) {
                            if (Kr.test(e)) {
                                var C = e.indexOf("--\x3e");
                                if (C >= 0) {
                                    a(C + 3);
                                    continue
                                }
                            }
                            if (Yr.test(e)) {
                                var h = e.indexOf("]>");
                                if (h >= 0) {
                                    a(h + 2);
                                    continue
                                }
                            }
                            var m = e.match(Jr);
                            if (m) {
                                a(m[0].length);
                                continue
                            }
                            var A = e.match(Vr);
                            if (A) {
                                var E = d;
                                a(A[0].length),
                                    n(A[1], E, d);
                                continue
                            }
                            var g = function() {
                                var t = e.match(Xr);
                                if (t) {
                                    var n = {
                                        tagName: t[1],
                                        attrs: [],
                                        start: d
                                    };
                                    a(t[0].length);
                                    for (var i, s; ! (i = e.match(zr)) && (s = e.match(qr));) a(s[0].length),
                                        n.attrs.push(s);
                                    if (i) return n.unarySlash = i[1],
                                        a(i[0].length),
                                        n.end = d,
                                        n
                                }
                            } ();
                            if (g) { !
                                function(e) {
                                    var a = e.tagName,
                                        i = e.unarySlash;
                                    o && ("p" === s && Hr(a) && n(s), l(a) && s === a && n(a));
                                    for (var d = c(a) || "html" === a && "head" === s || !!i, u = e.attrs.length, v = new Array(u), f = 0; f < u; f++) {
                                        var p = e.attrs[f];
                                        Qr && -1 === p[0].indexOf('""') && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                                        var D = p[3] || p[4] || p[5] || "";
                                        v[f] = {
                                            name: p[1],
                                            value: on(D, t.shouldDecodeNewlines)
                                        }
                                    }
                                    d || (r.push({
                                        tag: a,
                                        lowerCasedTag: a.toLowerCase(),
                                        attrs: v
                                    }), s = a),
                                    t.start && t.start(a, v, d, e.start, e.end)
                                } (g);
                                continue
                            }
                        }
                        var b = void 0,
                            y = void 0,
                            _ = void 0;
                        if (D >= 0) {
                            for (y = e.slice(D); ! (Vr.test(y) || Xr.test(y) || Kr.test(y) || Yr.test(y) || (_ = y.indexOf("<", 1)) < 0);) D += _,
                                y = e.slice(D);
                            b = e.substring(0, D),
                                a(D)
                        }
                        D < 0 && (b = e, e = ""),
                        t.chars && b && t.chars(b)
                    }
                    if (e === i) {
                        t.chars && t.chars(e);
                        break
                    }
                }
                n()
            }
            function ln(e, t) {
                var a = t ? _o(t) : yo;
                if (a.test(e)) {
                    for (var n, i, s = [], r = a.lastIndex = 0; n = a.exec(e);) { (i = n.index) > r && s.push(JSON.stringify(e.slice(r, i)));
                        var o = Vt(n[1].trim());
                        s.push("_s(" + o + ")"),
                            r = i + n[0].length
                    }
                    return r < e.length && s.push(JSON.stringify(e.slice(r))),
                        s.join("+")
                }
            }
            function dn(e, t) {
                function a(e) {
                    e.pre && (o = !1),
                    io(e.tag) && (c = !1)
                }
                Zr = t.warn || Kt,
                    ro = t.getTagNamespace || Ii,
                    so = t.mustUseProp || Ii,
                    io = t.isPreTag || Ii,
                    ao = Yt(t.modules, "preTransformNode"),
                    to = Yt(t.modules, "transformNode"),
                    no = Yt(t.modules, "postTransformNode"),
                    eo = t.delimiters;
                var n, i, s = [],
                    r = !1 !== t.preserveWhitespace,
                    o = !1,
                    c = !1;
                return cn(e, {
                    warn: Zr,
                    expectHTML: t.expectHTML,
                    isUnaryTag: t.isUnaryTag,
                    canBeLeftOpenTag: t.canBeLeftOpenTag,
                    shouldDecodeNewlines: t.shouldDecodeNewlines,
                    start: function(e, r, l) {
                        var d = i && i.ns || ro(e);
                        $i && "svg" === d && (r = wn(r));
                        var u = {
                            type: 1,
                            tag: e,
                            attrsList: r,
                            attrsMap: xn(r),
                            parent: i,
                            children: []
                        };
                        d && (u.ns = d),
                        In(u) && !Ui() && (u.forbidden = !0);
                        for (var v = 0; v < ao.length; v++) ao[v](u, t);
                        if (o || (un(u), u.pre && (o = !0)), io(u.tag) && (c = !0), o) vn(u);
                        else {
                            Dn(u),
                                Cn(u),
                                En(u),
                                fn(u),
                                u.plain = !u.key && !r.length,
                                pn(u),
                                gn(u),
                                bn(u);
                            for (var f = 0; f < to.length; f++) to[f](u, t);
                            yn(u)
                        }
                        if (n ? s.length || n.
                                if && (u.elseif || u.
                                else) && An(n, {
                                exp: u.elseif,
                                block: u
                            }) : n = u, i && !u.forbidden) if (u.elseif || u.
                                else) hn(u, i);
                        else if (u.slotScope) {
                            i.plain = !1;
                            var p = u.slotTarget || '"default"'; (i.scopedSlots || (i.scopedSlots = {}))[p] = u
                        } else i.children.push(u),
                            u.parent = i;
                        l ? a(u) : (i = u, s.push(u));
                        for (var D = 0; D < no.length; D++) no[D](u, t)
                    },
                    end: function() {
                        var e = s[s.length - 1],
                            t = e.children[e.children.length - 1];
                        t && 3 === t.type && " " === t.text && !c && e.children.pop(),
                            s.length -= 1,
                            i = s[s.length - 1],
                            a(e)
                    },
                    chars: function(e) {
                        if (i && (!$i || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
                            var t = i.children;
                            if (e = c || e.trim() ? Fo(e) : r && t.length ? " ": "") {
                                var a; ! o && " " !== e && (a = ln(e, eo)) ? t.push({
                                    type: 2,
                                    expression: a,
                                    text: e
                                }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({
                                    type: 3,
                                    text: e
                                })
                            }
                        }
                    }
                }),
                    n
            }
            function un(e) {
                null != na(e, "v-pre") && (e.pre = !0)
            }
            function vn(e) {
                var t = e.attrsList.length;
                if (t) for (var a = e.attrs = new Array(t), n = 0; n < t; n++) a[n] = {
                    name: e.attrsList[n].name,
                    value: JSON.stringify(e.attrsList[n].value)
                };
                else e.pre || (e.plain = !0)
            }
            function fn(e) {
                var t = aa(e, "key");
                t && (e.key = t)
            }
            function pn(e) {
                var t = aa(e, "ref");
                t && (e.ref = t, e.refInFor = _n(e))
            }
            function Dn(e) {
                var t;
                if (t = na(e, "v-for")) {
                    var a = t.match(Io);
                    if (!a) return;
                    e.
                        for = a[2].trim();
                    var n = a[1].trim(),
                        i = n.match(wo);
                    i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = n
                }
            }
            function Cn(e) {
                var t = na(e, "v-if");
                if (t) e.
                    if = t,
                    An(e, {
                        exp: t,
                        block: e
                    });
                else {
                    null != na(e, "v-else") && (e.
                        else = !0);
                    var a = na(e, "v-else-if");
                    a && (e.elseif = a)
                }
            }
            function hn(e, t) {
                var a = mn(t.children);
                a && a.
                    if && An(a, {
                    exp: e.elseif,
                    block: e
                })
            }
            function mn(e) {
                for (var t = e.length; t--;) {
                    if (1 === e[t].type) return e[t];
                    e.pop()
                }
            }
            function An(e, t) {
                e.ifConditions || (e.ifConditions = []),
                    e.ifConditions.push(t)
            }
            function En(e) {
                null != na(e, "v-once") && (e.once = !0)
            }
            function gn(e) {
                if ("slot" === e.tag) e.slotName = aa(e, "name");
                else {
                    var t = aa(e, "slot");
                    t && (e.slotTarget = '""' === t ? '"default"': t),
                    "template" === e.tag && (e.slotScope = na(e, "scope"))
                }
            }
            function bn(e) {
                var t; (t = aa(e, "is")) && (e.component = t),
                null != na(e, "inline-template") && (e.inlineTemplate = !0)
            }
            function yn(e) {
                var t, a, n, i, s, r, o, c = e.attrsList;
                for (t = 0, a = c.length; t < a; t++) if (n = i = c[t].name, s = c[t].value, xo.test(n)) if (e.hasBindings = !0, r = kn(n), r && (n = n.replace(So, "")), To.test(n)) n = n.replace(To, ""),
                    s = Vt(s),
                    o = !1,
                r && (r.prop && (o = !0, "innerHtml" === (n = bi(n)) && (n = "innerHTML")), r.camel && (n = bi(n))),
                    o || so(e.tag, e.attrsMap.type, n) ? Qt(e, n, s) : Zt(e, n, s);
                else if (ko.test(n)) n = n.replace(ko, ""),
                    ta(e, n, s, r);
                else {
                    n = n.replace(xo, "");
                    var l = n.match(Bo),
                        d = l && l[1];
                    d && (n = n.slice(0, -(d.length + 1))),
                        ea(e, n, i, s, d, r)
                } else Zt(e, n, JSON.stringify(s))
            }
            function _n(e) {
                for (var t = e; t;) {
                    if (void 0 !== t.
                            for) return ! 0;
                    t = t.parent
                }
                return ! 1
            }
            function kn(e) {
                var t = e.match(So);
                if (t) {
                    var a = {};
                    return t.forEach(function(e) {
                        a[e.slice(1)] = !0
                    }),
                        a
                }
            }
            function xn(e) {
                for (var t = {},
                         a = 0,
                         n = e.length; a < n; a++) t[e[a].name] = e[a].value;
                return t
            }
            function In(e) {
                return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
            }
            function wn(e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e[a];
                    jo.test(n.name) || (n.name = n.name.replace(No, ""), t.push(n))
                }
                return t
            }
            function Bn(e, t) {
                e && (oo = $o(t.staticKeys || ""), co = t.isReservedTag || Ii, Sn(e), Fn(e, !1))
            }
            function Tn(e) {
                return a("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e: ""))
            }
            function Sn(e) {
                if (e.static = Nn(e), 1 === e.type) {
                    if (!co(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                    for (var t = 0,
                             a = e.children.length; t < a; t++) {
                        var n = e.children[t];
                        Sn(n),
                        n.static || (e.static = !1)
                    }
                }
            }
            function Fn(e, t) {
                if (1 === e.type) {
                    if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                    if (e.staticRoot = !1, e.children) for (var a = 0,
                                                                n = e.children.length; a < n; a++) Fn(e.children[a], t || !!e.
                        for);
                    e.ifConditions && jn(e.ifConditions, t)
                }
            }
            function jn(e, t) {
                for (var a = 1,
                         n = e.length; a < n; a++) Fn(e[a].block, t)
            }
            function Nn(e) {
                return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.
                    if || e.
                    for || Ei(e.tag) || !co(e.tag) || $n(e) || !Object.keys(e).every(oo))))
            }
            function $n(e) {
                for (; e.parent;) {
                    if (e = e.parent, "template" !== e.tag) return ! 1;
                    if (e.
                            for) return ! 0
                }
                return ! 1
            }
            function Pn(e, t) {
                var a = t ? "nativeOn:{": "on:{";
                for (var n in e) a += '"' + n + '":' + Mn(n, e[n]) + ",";
                return a.slice(0, -1) + "}"
            }
            function Mn(e, t) {
                if (!t) return "function(){}";
                if (Array.isArray(t)) return "[" + t.map(function(t) {
                    return Mn(e, t)
                }).join(",") + "]";
                var a = Mo.test(t.value),
                    n = Po.test(t.value);
                if (t.modifiers) {
                    var i = "",
                        s = "",
                        r = [];
                    for (var o in t.modifiers) Ro[o] ? (s += Ro[o], Oo[o] && r.push(o)) : r.push(o);
                    return r.length && (i += On(r)),
                    s && (i += s),
                    "function($event){" + i + (a ? t.value + "($event)": n ? "(" + t.value + ")($event)": t.value) + "}"
                }
                return a || n ? t.value: "function($event){" + t.value + "}"
            }
            function On(e) {
                return "if(!('button' in $event)&&" + e.map(Ln).join("&&") + ")return null;"
            }
            function Ln(e) {
                var t = parseInt(e, 10);
                if (t) return "$event.keyCode!==" + t;
                var a = Oo[e];
                return "_k($event.keyCode," + JSON.stringify(e) + (a ? "," + JSON.stringify(a) : "") + ")"
            }
            function Rn(e, t) {
                e.wrapData = function(a) {
                    return "_b(" + a + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true": "") + ")"
                }
            }
            function Un(e, t) {
                var a = Do,
                    n = Do = [],
                    i = Co;
                Co = 0,
                    ho = t,
                    lo = t.warn || Kt,
                    uo = Yt(t.modules, "transformCode"),
                    vo = Yt(t.modules, "genData"),
                    fo = t.directives || {},
                    po = t.isReservedTag || Ii;
                var s = e ? Hn(e) : '_c("div")';
                return Do = a,
                    Co = i,
                    {
                        render: "with(this){return " + s + "}",
                        staticRenderFns: n
                    }
            }
            function Hn(e) {
                if (e.staticRoot && !e.staticProcessed) return Gn(e);
                if (e.once && !e.onceProcessed) return qn(e);
                if (e.
                        for && !e.forProcessed) return zn(e);
                if (e.
                        if && !e.ifProcessed) return Wn(e);
                if ("template" !== e.tag || e.slotTarget) {
                    if ("slot" === e.tag) return si(e);
                    var t;
                    if (e.component) t = ri(e.component, e);
                    else {
                        var a = e.plain ? void 0 : Vn(e),
                            n = e.inlineTemplate ? null: Zn(e, !0);
                        t = "_c('" + e.tag + "'" + (a ? "," + a: "") + (n ? "," + n: "") + ")"
                    }
                    for (var i = 0; i < uo.length; i++) t = uo[i](e, t);
                    return t
                }
                return Zn(e) || "void 0"
            }
            function Gn(e) {
                return e.staticProcessed = !0,
                    Do.push("with(this){return " + Hn(e) + "}"),
                "_m(" + (Do.length - 1) + (e.staticInFor ? ",true": "") + ")"
            }
            function qn(e) {
                if (e.onceProcessed = !0, e.
                        if && !e.ifProcessed) return Wn(e);
                if (e.staticInFor) {
                    for (var t = "",
                             a = e.parent; a;) {
                        if (a.
                                for) {
                            t = a.key;
                            break
                        }
                        a = a.parent
                    }
                    return t ? "_o(" + Hn(e) + "," + Co+++(t ? "," + t: "") + ")": Hn(e)
                }
                return Gn(e)
            }
            function Wn(e) {
                return e.ifProcessed = !0,
                    Xn(e.ifConditions.slice())
            }
            function Xn(e) {
                function t(e) {
                    return e.once ? qn(e) : Hn(e)
                }
                if (!e.length) return "_e()";
                var a = e.shift();
                return a.exp ? "(" + a.exp + ")?" + t(a.block) + ":" + Xn(e) : "" + t(a.block)
            }
            function zn(e) {
                var t = e.
                        for,
                    a = e.alias,
                    n = e.iterator1 ? "," + e.iterator1: "",
                    i = e.iterator2 ? "," + e.iterator2: "";
                return e.forProcessed = !0,
                "_l((" + t + "),function(" + a + n + i + "){return " + Hn(e) + "})"
            }
            function Vn(e) {
                var t = "{",
                    a = Jn(e);
                a && (t += a + ","),
                e.key && (t += "key:" + e.key + ","),
                e.ref && (t += "ref:" + e.ref + ","),
                e.refInFor && (t += "refInFor:true,"),
                e.pre && (t += "pre:true,"),
                e.component && (t += 'tag:"' + e.tag + '",');
                for (var n = 0; n < vo.length; n++) t += vo[n](e);
                if (e.attrs && (t += "attrs:{" + oi(e.attrs) + "},"), e.props && (t += "domProps:{" + oi(e.props) + "},"), e.events && (t += Pn(e.events) + ","), e.nativeEvents && (t += Pn(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += Yn(e.scopedSlots) + ","), e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                    var i = Kn(e);
                    i && (t += i + ",")
                }
                return t = t.replace(/,$/, "") + "}",
                e.wrapData && (t = e.wrapData(t)),
                    t
            }
            function Jn(e) {
                var t = e.directives;
                if (t) {
                    var a, n, i, s, r = "directives:[",
                        o = !1;
                    for (a = 0, n = t.length; a < n; a++) {
                        i = t[a],
                            s = !0;
                        var c = fo[i.name] || Uo[i.name];
                        c && (s = !!c(e, i, lo)),
                        s && (o = !0, r += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"': "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                    }
                    return o ? r.slice(0, -1) + "]": void 0
                }
            }
            function Kn(e) {
                var t = e.children[0];
                if (1 === t.type) {
                    var a = Un(t, ho);
                    return "inlineTemplate:{render:function(){" + a.render + "},staticRenderFns:[" + a.staticRenderFns.map(function(e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }
            function Yn(e) {
                return "scopedSlots:_u([" + Object.keys(e).map(function(t) {
                    return Qn(t, e[t])
                }).join(",") + "])"
            }
            function Qn(e, t) {
                return "[" + e + ",function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? Zn(t) || "void 0": Hn(t)) + "}]"
            }
            function Zn(e, t) {
                var a = e.children;
                if (a.length) {
                    var n = a[0];
                    if (1 === a.length && n.
                            for && "template" !== n.tag && "slot" !== n.tag) return Hn(n);
                    var i = t ? ei(a) : 0;
                    return "[" + a.map(ni).join(",") + "]" + (i ? "," + i: "")
                }
            }
            function ei(e) {
                for (var t = 0,
                         a = 0; a < e.length; a++) {
                    var n = e[a];
                    if (1 === n.type) {
                        if (ti(n) || n.ifConditions && n.ifConditions.some(function(e) {
                                return ti(e.block)
                            })) {
                            t = 2;
                            break
                        } (ai(n) || n.ifConditions && n.ifConditions.some(function(e) {
                            return ai(e.block)
                        })) && (t = 1)
                    }
                }
                return t
            }
            function ti(e) {
                return void 0 !== e.
                    for || "template" === e.tag || "slot" === e.tag
            }
            function ai(e) {
                return ! po(e.tag)
            }
            function ni(e) {
                return 1 === e.type ? Hn(e) : ii(e)
            }
            function ii(e) {
                return "_v(" + (2 === e.type ? e.expression: ci(JSON.stringify(e.text))) + ")"
            }
            function si(e) {
                var t = e.slotName || '"default"',
                    a = Zn(e),
                    n = "_t(" + t + (a ? "," + a: ""),
                    i = e.attrs && "{" + e.attrs.map(function(e) {
                        return bi(e.name) + ":" + e.value
                    }).join(",") + "}",
                    s = e.attrsMap["v-bind"];
                return ! i && !s || a || (n += ",null"),
                i && (n += "," + i),
                s && (n += (i ? "": ",null") + "," + s),
                n + ")"
            }
            function ri(e, t) {
                var a = t.inlineTemplate ? null: Zn(t, !0);
                return "_c(" + e + "," + Vn(t) + (a ? "," + a: "") + ")"
            }
            function oi(e) {
                for (var t = "",
                         a = 0; a < e.length; a++) {
                    var n = e[a];
                    t += '"' + n.name + '":' + ci(n.value) + ","
                }
                return t.slice(0, -1)
            }
            function ci(e) {
                return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            function li(e, t) {
                var a = dn(e.trim(), t);
                Bn(a, t);
                var n = Un(a, t);
                return {
                    ast: a,
                    render: n.render,
                    staticRenderFns: n.staticRenderFns
                }
            }
            function di(e, t) {
                try {
                    return new Function(e)
                } catch(a) {
                    return t.push({
                        err: a,
                        code: e
                    }),
                        f
                }
            }
            function ui(e, t) {
                var a = (t.warn, na(e, "class"));
                a && (e.staticClass = JSON.stringify(a));
                var n = aa(e, "class", !1);
                n && (e.classBinding = n)
            }
            function vi(e) {
                var t = "";
                return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
                e.classBinding && (t += "class:" + e.classBinding + ","),
                    t
            }
            function fi(e, t) {
                var a = (t.warn, na(e, "style"));
                a && (e.staticStyle = JSON.stringify(lr(a)));
                var n = aa(e, "style", !1);
                n && (e.styleBinding = n)
            }
            function pi(e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","),
                e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
                    t
            }
            function Di(e, t) {
                t.value && Qt(e, "textContent", "_s(" + t.value + ")")
            }
            function Ci(e, t) {
                t.value && Qt(e, "innerHTML", "_s(" + t.value + ")")
            }
            function hi(e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)),
                    t.innerHTML
            }
            var mi, Ai, Ei = a("slot,component", !0),
                gi = Object.prototype.hasOwnProperty,
                bi = r(function(e) {
                    return e.replace(/-(\w)/g,
                        function(e, t) {
                            return t ? t.toUpperCase() : ""
                        })
                }),
                yi = r(function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }),
                _i = r(function(e) {
                    return e.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase()
                }),
                ki = Object.prototype.toString,
                xi = "[object Object]",
                Ii = function() {
                    return ! 1
                },
                wi = function(e) {
                    return e
                },
                Bi = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: Ii,
                    isUnknownElement: Ii,
                    getTagNamespace: f,
                    parsePlatformTagName: wi,
                    mustUseProp: Ii,
                    _assetTypes: ["component", "directive", "filter"],
                    _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                    _maxUpdateCount: 100
                },
                Ti = Object.freeze({}),
                Si = /[^\w.$]/,
                Fi = "__proto__" in {},
                ji = "undefined" != typeof window,
                Ni = ji && window.navigator.userAgent.toLowerCase(),
                $i = Ni && /msie|trident/.test(Ni),
                Pi = Ni && Ni.indexOf("msie 9.0") > 0,
                Mi = Ni && Ni.indexOf("edge/") > 0,
                Oi = Ni && Ni.indexOf("android") > 0,
                Li = Ni && /iphone|ipad|ipod|ios/.test(Ni),
                Ri = Ni && /chrome\/\d+/.test(Ni) && !Mi,
                Ui = function() {
                    return void 0 === mi && (mi = !ji && "undefined" != typeof global && "server" === global.process.env.VUE_ENV),
                        mi
                },
                Hi = ji && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
                Gi = "undefined" != typeof Symbol && E(Symbol) && "undefined" != typeof Reflect && E(Reflect.ownKeys),
                qi = function() {
                    function e() {
                        n = !1;
                        var e = a.slice(0);
                        a.length = 0;
                        for (var t = 0; t < e.length; t++) e[t]()
                    }
                    var t, a = [],
                        n = !1;
                    if ("undefined" != typeof Promise && E(Promise)) {
                        var i = Promise.resolve(),
                            s = function(e) {
                                console.error(e)
                            };
                        t = function() {
                            i.then(e).
                            catch(s),
                            Li && setTimeout(f)
                        }
                    } else if ("undefined" == typeof MutationObserver || !E(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
                        setTimeout(e, 0)
                    };
                    else {
                        var r = 1,
                            o = new MutationObserver(e),
                            c = document.createTextNode(String(r));
                        o.observe(c, {
                            characterData: !0
                        }),
                            t = function() {
                                r = (r + 1) % 2,
                                    c.data = String(r)
                            }
                    }
                    return function(e, i) {
                        var s;
                        if (a.push(function() {
                                e && e.call(i),
                                s && s(i)
                            }), n || (n = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                            s = e
                        })
                    }
                } ();
            Ai = "undefined" != typeof Set && E(Set) ? Set: function() {
                function e() {
                    this.set = Object.create(null)
                }
                return e.prototype.has = function(e) {
                    return ! 0 === this.set[e]
                },
                    e.prototype.add = function(e) {
                        this.set[e] = !0
                    },
                    e.prototype.clear = function() {
                        this.set = Object.create(null)
                    },
                    e
            } ();
            var Wi = f,
                Xi = 0,
                zi = function() {
                    this.id = Xi++,
                        this.subs = []
                };
            zi.prototype.addSub = function(e) {
                this.subs.push(e)
            },
                zi.prototype.removeSub = function(e) {
                    n(this.subs, e)
                },
                zi.prototype.depend = function() {
                    zi.target && zi.target.addDep(this)
                },
                zi.prototype.notify = function() {
                    for (var e = this.subs.slice(), t = 0, a = e.length; t < a; t++) e[t].update()
                },
                zi.target = null;
            var Vi = [],
                Ji = Array.prototype,
                Ki = Object.create(Ji); ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
                var t = Ji[e];
                m(Ki, e,
                    function() {
                        for (var a = arguments,
                                 n = arguments.length,
                                 i = new Array(n); n--;) i[n] = a[n];
                        var s, r = t.apply(this, i),
                            o = this.__ob__;
                        switch (e) {
                            case "push":
                            case "unshift":
                                s = i;
                                break;
                            case "splice":
                                s = i.slice(2)
                        }
                        return s && o.observeArray(s),
                            o.dep.notify(),
                            r
                    })
            });
            var Yi = Object.getOwnPropertyNames(Ki),
                Qi = {
                    shouldConvert: !0,
                    isSettingProps: !1
                },
                Zi = function(e) {
                    this.value = e,
                        this.dep = new zi,
                        this.vmCount = 0,
                        m(e, "__ob__", this),
                        Array.isArray(e) ? ((Fi ? y: _)(e, Ki, Yi), this.observeArray(e)) : this.walk(e)
                };
            Zi.prototype.walk = function(e) {
                for (var t = Object.keys(e), a = 0; a < t.length; a++) x(e, t[a], e[t[a]])
            },
                Zi.prototype.observeArray = function(e) {
                    for (var t = 0,
                             a = e.length; t < a; t++) k(e[t])
                };
            var es = Bi.optionMergeStrategies;
            es.data = function(e, t, a) {
                return a ? e || t ?
                    function() {
                        var n = "function" == typeof t ? t.call(a) : t,
                            i = "function" == typeof e ? e.call(a) : void 0;
                        return n ? T(n, i) : i
                    }: void 0 : t ? "function" != typeof t ? e: e ?
                    function() {
                        return T(t.call(this), e.call(this))
                    }: t: e
            },
                Bi._lifecycleHooks.forEach(function(e) {
                    es[e] = S
                }),
                Bi._assetTypes.forEach(function(e) {
                    es[e + "s"] = F
                }),
                es.watch = function(e, t) {
                    if (!t) return Object.create(e || null);
                    if (!e) return t;
                    var a = {};
                    l(a, e);
                    for (var n in t) {
                        var i = a[n],
                            s = t[n];
                        i && !Array.isArray(i) && (i = [i]),
                            a[n] = i ? i.concat(s) : [s]
                    }
                    return a
                },
                es.props = es.methods = es.computed = function(e, t) {
                    if (!t) return Object.create(e || null);
                    if (!e) return t;
                    var a = Object.create(null);
                    return l(a, e),
                        l(a, t),
                        a
                };
            var ts = function(e, t) {
                    return void 0 === t ? e: t
                },
                as = function(e, t, a, n, i, s, r) {
                    this.tag = e,
                        this.data = t,
                        this.children = a,
                        this.text = n,
                        this.elm = i,
                        this.ns = void 0,
                        this.context = s,
                        this.functionalContext = void 0,
                        this.key = t && t.key,
                        this.componentOptions = r,
                        this.componentInstance = void 0,
                        this.parent = void 0,
                        this.raw = !1,
                        this.isStatic = !1,
                        this.isRootInsert = !0,
                        this.isComment = !1,
                        this.isCloned = !1,
                        this.isOnce = !1
                },
                ns = {
                    child: {}
                };
            ns.child.get = function() {
                return this.componentInstance
            },
                Object.defineProperties(as.prototype, ns);
            var is, ss = function() {
                    var e = new as;
                    return e.text = "",
                        e.isComment = !0,
                        e
                },
                rs = r(function(e) {
                    var t = "~" === e.charAt(0);
                    e = t ? e.slice(1) : e;
                    var a = "!" === e.charAt(0);
                    return e = a ? e.slice(1) : e,
                        {
                            name: e,
                            once: t,
                            capture: a
                        }
                }),
                os = null,
                cs = [],
                ls = {},
                ds = !1,
                us = !1,
                vs = 0,
                fs = 0,
                ps = function(e, t, a, n) {
                    this.vm = e,
                        e._watchers.push(this),
                        n ? (this.deep = !!n.deep, this.user = !!n.user, this.lazy = !!n.lazy, this.sync = !!n.sync) : this.deep = this.user = this.lazy = this.sync = !1,
                        this.cb = a,
                        this.id = ++fs,
                        this.active = !0,
                        this.dirty = this.lazy,
                        this.deps = [],
                        this.newDeps = [],
                        this.depIds = new Ai,
                        this.newDepIds = new Ai,
                        this.expression = "",
                        "function" == typeof t ? this.getter = t: (this.getter = A(t), this.getter || (this.getter = function() {})),
                        this.value = this.lazy ? void 0 : this.get()
                };
            ps.prototype.get = function() {
                g(this);
                var e, t = this.vm;
                if (this.user) try {
                    e = this.getter.call(t, t)
                } catch(e) {
                    U(e, t, 'getter for watcher "' + this.expression + '"')
                } else e = this.getter.call(t, t);
                return this.deep && De(e),
                    b(),
                    this.cleanupDeps(),
                    e
            },
                ps.prototype.addDep = function(e) {
                    var t = e.id;
                    this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
                },
                ps.prototype.cleanupDeps = function() {
                    for (var e = this,
                             t = this.deps.length; t--;) {
                        var a = e.deps[t];
                        e.newDepIds.has(a.id) || a.removeSub(e)
                    }
                    var n = this.depIds;
                    this.depIds = this.newDepIds,
                        this.newDepIds = n,
                        this.newDepIds.clear(),
                        n = this.deps,
                        this.deps = this.newDeps,
                        this.newDeps = n,
                        this.newDeps.length = 0
                },
                ps.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : pe(this)
                },
                ps.prototype.run = function() {
                    if (this.active) {
                        var e = this.get();
                        if (e !== this.value || d(e) || this.deep) {
                            var t = this.value;
                            if (this.value = e, this.user) try {
                                this.cb.call(this.vm, e, t)
                            } catch(e) {
                                U(e, this.vm, 'callback for watcher "' + this.expression + '"')
                            } else this.cb.call(this.vm, e, t)
                        }
                    }
                },
                ps.prototype.evaluate = function() {
                    this.value = this.get(),
                        this.dirty = !1
                },
                ps.prototype.depend = function() {
                    for (var e = this,
                             t = this.deps.length; t--;) e.deps[t].depend()
                },
                ps.prototype.teardown = function() {
                    var e = this;
                    if (this.active) {
                        this.vm._isBeingDestroyed || n(this.vm._watchers, this);
                        for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
                        this.active = !1
                    }
                };
            var Ds = new Ai,
                Cs = {
                    enumerable: !0,
                    configurable: !0,
                    get: f,
                    set: f
                },
                hs = {
                    lazy: !0
                },
                ms = {
                    init: function(e, t, a, n) {
                        if (!e.componentInstance || e.componentInstance._isDestroyed)(e.componentInstance = Te(e, os, a, n)).$mount(t ? e.elm: void 0, t);
                        else if (e.data.keepAlive) {
                            var i = e;
                            ms.prepatch(i, i)
                        }
                    },
                    prepatch: function(e, t) {
                        var a = t.componentOptions;
                        oe(t.componentInstance = e.componentInstance, a.propsData, a.listeners, t, a.children)
                    },
                    insert: function(e) {
                        e.componentInstance._isMounted || (e.componentInstance._isMounted = !0, ue(e.componentInstance, "mounted")),
                        e.data.keepAlive && le(e.componentInstance, !0)
                    },
                    destroy: function(e) {
                        e.componentInstance._isDestroyed || (e.data.keepAlive ? de(e.componentInstance, !0) : e.componentInstance.$destroy())
                    }
                },
                As = Object.keys(ms),
                Es = 1,
                gs = 2,
                bs = 0; !
                function(e) {
                    e.prototype._init = function(e) {
                        var t = this;
                        t._uid = bs++,
                            t._isVue = !0,
                            e && e._isComponent ? Qe(t, e) : t.$options = $(Ze(t.constructor), e || {},
                                t),
                            t._renderProxy = t,
                            t._self = t,
                            se(t),
                            Q(t),
                            Je(t),
                            ue(t, "beforeCreate"),
                            Ye(t),
                            me(t),
                            Ke(t),
                            ue(t, "created"),
                        t.$options.el && t.$mount(t.$options.el)
                    }
                } (at),
                function(e) {
                    var t = {};
                    t.get = function() {
                        return this._data
                    };
                    var a = {};
                    a.get = function() {
                        return this._props
                    },
                        Object.defineProperty(e.prototype, "$data", t),
                        Object.defineProperty(e.prototype, "$props", a),
                        e.prototype.$set = I,
                        e.prototype.$delete = w,
                        e.prototype.$watch = function(e, t, a) {
                            var n = this;
                            a = a || {},
                                a.user = !0;
                            var i = new ps(n, e, t, a);
                            return a.immediate && t.call(n, i.value),
                                function() {
                                    i.teardown()
                                }
                        }
                } (at),
                function(e) {
                    var t = /^hook:/;
                    e.prototype.$on = function(e, a) {
                        var n = this,
                            i = this;
                        if (Array.isArray(e)) for (var s = 0,
                                                       r = e.length; s < r; s++) n.$on(e[s], a);
                        else(i._events[e] || (i._events[e] = [])).push(a),
                        t.test(e) && (i._hasHookEvent = !0);
                        return i
                    },
                        e.prototype.$once = function(e, t) {
                            function a() {
                                n.$off(e, a),
                                    t.apply(n, arguments)
                            }
                            var n = this;
                            return a.fn = t,
                                n.$on(e, a),
                                n
                        },
                        e.prototype.$off = function(e, t) {
                            var a = this,
                                n = this;
                            if (!arguments.length) return n._events = Object.create(null),
                                n;
                            if (Array.isArray(e)) {
                                for (var i = 0,
                                         s = e.length; i < s; i++) a.$off(e[i], t);
                                return n
                            }
                            var r = n._events[e];
                            if (!r) return n;
                            if (1 === arguments.length) return n._events[e] = null,
                                n;
                            for (var o, c = r.length; c--;) if ((o = r[c]) === t || o.fn === t) {
                                r.splice(c, 1);
                                break
                            }
                            return n
                        },
                        e.prototype.$emit = function(e) {
                            var t = this,
                                a = t._events[e];
                            if (a) {
                                a = a.length > 1 ? c(a) : a;
                                for (var n = c(arguments, 1), i = 0, s = a.length; i < s; i++) a[i].apply(t, n)
                            }
                            return t
                        }
                } (at),
                function(e) {
                    e.prototype._update = function(e, t) {
                        var a = this;
                        a._isMounted && ue(a, "beforeUpdate");
                        var n = a.$el,
                            i = a._vnode,
                            s = os;
                        os = a,
                            a._vnode = e,
                            a.$el = i ? a.__patch__(i, e) : a.__patch__(a.$el, e, t, !1, a.$options._parentElm, a.$options._refElm),
                            os = s,
                        n && (n.__vue__ = null),
                        a.$el && (a.$el.__vue__ = a),
                        a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el)
                    },
                        e.prototype.$forceUpdate = function() {
                            var e = this;
                            e._watcher && e._watcher.update()
                        },
                        e.prototype.$destroy = function() {
                            var e = this;
                            if (!e._isBeingDestroyed) {
                                ue(e, "beforeDestroy"),
                                    e._isBeingDestroyed = !0;
                                var t = e.$parent; ! t || t._isBeingDestroyed || e.$options.abstract || n(t.$children, e),
                                e._watcher && e._watcher.teardown();
                                for (var a = e._watchers.length; a--;) e._watchers[a].teardown();
                                e._data.__ob__ && e._data.__ob__.vmCount--,
                                    e._isDestroyed = !0,
                                    e.__patch__(e._vnode, null),
                                    ue(e, "destroyed"),
                                    e.$off(),
                                e.$el && (e.$el.__vue__ = null),
                                    e.$options._parentElm = e.$options._refElm = null
                            }
                        }
                } (at),
                function(a) {
                    a.prototype.$nextTick = function(e) {
                        return qi(e, this)
                    },
                        a.prototype._render = function() {
                            var e = this,
                                t = e.$options,
                                a = t.render,
                                n = t.staticRenderFns,
                                i = t._parentVnode;
                            if (e._isMounted) for (var s in e.$slots) e.$slots[s] = q(e.$slots[s]);
                            e.$scopedSlots = i && i.data.scopedSlots || Ti,
                            n && !e._staticTrees && (e._staticTrees = []),
                                e.$vnode = i;
                            var r;
                            try {
                                r = a.call(e._renderProxy, e.$createElement)
                            } catch(t) {
                                U(t, e, "render function"),
                                    r = e._vnode
                            }
                            return r instanceof as || (r = ss()),
                                r.parent = i,
                                r
                        },
                        a.prototype._o = Xe,
                        a.prototype._n = t,
                        a.prototype._s = e,
                        a.prototype._l = Re,
                        a.prototype._t = Ue,
                        a.prototype._q = p,
                        a.prototype._i = D,
                        a.prototype._m = We,
                        a.prototype._f = He,
                        a.prototype._k = Ge,
                        a.prototype._b = qe,
                        a.prototype._v = H,
                        a.prototype._e = ss,
                        a.prototype._u = ie
                } (at);
            var ys = [String, RegExp],
                _s = {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: ys,
                        exclude: ys
                    },
                    created: function() {
                        this.cache = Object.create(null)
                    },
                    destroyed: function() {
                        var e = this;
                        for (var t in e.cache) vt(e.cache[t])
                    },
                    watch: {
                        include: function(e) {
                            ut(this.cache,
                                function(t) {
                                    return dt(e, t)
                                })
                        },
                        exclude: function(e) {
                            ut(this.cache,
                                function(t) {
                                    return ! dt(e, t)
                                })
                        }
                    },
                    render: function() {
                        var e = Y(this.$slots.
                                default),
                            t = e && e.componentOptions;
                        if (t) {
                            var a = lt(t);
                            if (a && (this.include && !dt(this.include, a) || this.exclude && dt(this.exclude, a))) return e;
                            var n = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag: "") : e.key;
                            this.cache[n] ? e.componentInstance = this.cache[n].componentInstance: this.cache[n] = e,
                                e.data.keepAlive = !0
                        }
                        return e
                    }
                },
                ks = {
                    KeepAlive: _s
                }; !
                function(e) {
                    var t = {};
                    t.get = function() {
                        return Bi
                    },
                        Object.defineProperty(e, "config", t),
                        e.util = {
                            warn: Wi,
                            extend: l,
                            mergeOptions: $,
                            defineReactive: x
                        },
                        e.set = I,
                        e.delete = w,
                        e.nextTick = qi,
                        e.options = Object.create(null),
                        Bi._assetTypes.forEach(function(t) {
                            e.options[t + "s"] = Object.create(null)
                        }),
                        e.options._base = e,
                        l(e.options.components, ks),
                        nt(e),
                        it(e),
                        st(e),
                        ct(e)
                } (at),
                Object.defineProperty(at.prototype, "$isServer", {
                    get: Ui
                }),
                at.version = "2.2.6";
            var xs, Is, ws, Bs, Ts, Ss, Fs, js, Ns, $s = a("input,textarea,option,select"),
                Ps = function(e, t, a) {
                    return "value" === a && $s(e) && "button" !== t || "selected" === a && "option" === e || "checked" === a && "input" === e || "muted" === a && "video" === e
                },
                Ms = a("contenteditable,draggable,spellcheck"),
                Os = a("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Ls = "http://www.w3.org/1999/xlink",
                Rs = function(e) {
                    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
                },
                Us = function(e) {
                    return Rs(e) ? e.slice(6, e.length) : ""
                },
                Hs = function(e) {
                    return null == e || !1 === e
                },
                Gs = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                qs = a("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
                Ws = a("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Xs = function(e) {
                    return "pre" === e
                },
                zs = function(e) {
                    return qs(e) || Ws(e)
                },
                Vs = Object.create(null),
                Js = Object.freeze({
                    createElement: gt,
                    createElementNS: bt,
                    createTextNode: yt,
                    createComment: _t,
                    insertBefore: kt,
                    removeChild: xt,
                    appendChild: It,
                    parentNode: wt,
                    nextSibling: Bt,
                    tagName: Tt,
                    setTextContent: St,
                    setAttribute: Ft
                }),
                Ks = {
                    create: function(e, t) {
                        jt(t)
                    },
                    update: function(e, t) {
                        e.data.ref !== t.data.ref && (jt(e, !0), jt(t))
                    },
                    destroy: function(e) {
                        jt(e, !0)
                    }
                },
                Ys = new as("", {},
                    []),
                Qs = ["create", "activate", "update", "remove", "destroy"],
                Zs = {
                    create: Rt,
                    update: Rt,
                    destroy: function(e) {
                        Rt(e, Ys)
                    }
                },
                er = Object.create(null),
                tr = [Ks, Zs],
                ar = {
                    create: Wt,
                    update: Wt
                },
                nr = {
                    create: zt,
                    update: zt
                },
                ir = /[\w).+\-_$\]]/,
                sr = "__r",
                rr = "__c",
                or = {
                    create: Ea,
                    update: Ea
                },
                cr = {
                    create: ga,
                    update: ga
                },
                lr = r(function(e) {
                    var t = {};
                    return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                        if (e) {
                            var a = e.split(/:(.+)/);
                            a.length > 1 && (t[a[0].trim()] = a[1].trim())
                        }
                    }),
                        t
                }),
                dr = /^--/,
                ur = /\s*!important$/,
                vr = function(e, t, a) {
                    dr.test(t) ? e.style.setProperty(t, a) : ur.test(a) ? e.style.setProperty(t, a.replace(ur, ""), "important") : e.style[pr(t)] = a
                },
                fr = ["Webkit", "Moz", "ms"],
                pr = r(function(e) {
                    if (Ns = Ns || document.createElement("div"), "filter" !== (e = bi(e)) && e in Ns.style) return e;
                    for (var t = e.charAt(0).toUpperCase() + e.slice(1), a = 0; a < fr.length; a++) {
                        var n = fr[a] + t;
                        if (n in Ns.style) return n
                    }
                }),
                Dr = {
                    create: wa,
                    update: wa
                },
                Cr = r(function(e) {
                    return {
                        enterClass: e + "-enter",
                        enterToClass: e + "-enter-to",
                        enterActiveClass: e + "-enter-active",
                        leaveClass: e + "-leave",
                        leaveToClass: e + "-leave-to",
                        leaveActiveClass: e + "-leave-active"
                    }
                }),
                hr = ji && !Pi,
                mr = "transition",
                Ar = "animation",
                Er = "transition",
                gr = "transitionend",
                br = "animation",
                yr = "animationend";
            hr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Er = "WebkitTransition", gr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (br = "WebkitAnimation", yr = "webkitAnimationEnd"));
            var _r = ji && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
                kr = /\b(transform|all)(,|$)/,
                xr = ji ? {
                    create: Ga,
                    activate: Ga,
                    remove: function(e, t) {
                        e.data.show ? t() : Ra(e, t)
                    }
                }: {},
                Ir = [ar, nr, or, cr, Dr, xr],
                wr = Ir.concat(tr),
                Br = function(e) {
                    function t(e) {
                        return new as(I.tagName(e).toLowerCase(), {},
                            [], void 0, e)
                    }
                    function n(e, t) {
                        function a() {
                            0 == --a.listeners && i(e)
                        }
                        return a.listeners = t,
                            a
                    }
                    function i(e) {
                        var t = I.parentNode(e);
                        $t(t) && I.removeChild(t, e)
                    }
                    function r(e, t, a, n, i) {
                        if (e.isRootInsert = !i, !o(e, t, a, n)) {
                            var s = e.data,
                                r = e.children,
                                c = e.tag;
                            $t(c) ? (e.elm = e.ns ? I.createElementNS(e.ns, c) : I.createElement(c, e), p(e), u(e, r, t), $t(s) && f(e, t), d(a, e.elm, n)) : Pt(e.isComment) ? (e.elm = I.createComment(e.text), d(a, e.elm, n)) : (e.elm = I.createTextNode(e.text), d(a, e.elm, n))
                        }
                    }
                    function o(e, t, a, n) {
                        var i = e.data;
                        if ($t(i)) {
                            var s = $t(e.componentInstance) && i.keepAlive;
                            if ($t(i = i.hook) && $t(i = i.init) && i(e, !1, a, n), $t(e.componentInstance)) return c(e, t),
                            Pt(s) && l(e, t, a, n),
                                !0
                        }
                    }
                    function c(e, t) {
                        $t(e.data.pendingInsert) && t.push.apply(t, e.data.pendingInsert),
                            e.elm = e.componentInstance.$el,
                            v(e) ? (f(e, t), p(e)) : (jt(e), t.push(e))
                    }
                    function l(e, t, a, n) {
                        for (var i, s = e; s.componentInstance;) if (s = s.componentInstance._vnode, $t(i = s.data) && $t(i = i.transition)) {
                            for (i = 0; i < k.activate.length; ++i) k.activate[i](Ys, s);
                            t.push(s);
                            break
                        }
                        d(a, e.elm, n)
                    }
                    function d(e, t, a) {
                        $t(e) && ($t(a) ? I.insertBefore(e, t, a) : I.appendChild(e, t))
                    }
                    function u(e, t, a) {
                        if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) r(t[n], a, e.elm, null, !0);
                        else s(e.text) && I.appendChild(e.elm, I.createTextNode(e.text))
                    }
                    function v(e) {
                        for (; e.componentInstance;) e = e.componentInstance._vnode;
                        return $t(e.tag)
                    }
                    function f(e, t) {
                        for (var a = 0; a < k.create.length; ++a) k.create[a](Ys, e);
                        y = e.data.hook,
                        $t(y) && ($t(y.create) && y.create(Ys, e), $t(y.insert) && t.push(e))
                    }
                    function p(e) {
                        for (var t, a = e; a;) $t(t = a.context) && $t(t = t.$options._scopeId) && I.setAttribute(e.elm, t, ""),
                            a = a.parent;
                        $t(t = os) && t !== e.context && $t(t = t.$options._scopeId) && I.setAttribute(e.elm, t, "")
                    }
                    function D(e, t, a, n, i, s) {
                        for (; n <= i; ++n) r(a[n], s, e, t)
                    }
                    function C(e) {
                        var t, a, n = e.data;
                        if ($t(n)) for ($t(t = n.hook) && $t(t = t.destroy) && t(e), t = 0; t < k.destroy.length; ++t) k.destroy[t](e);
                        if ($t(t = e.children)) for (a = 0; a < e.children.length; ++a) C(e.children[a])
                    }
                    function h(e, t, a, n) {
                        for (; a <= n; ++a) {
                            var s = t[a];
                            $t(s) && ($t(s.tag) ? (m(s), C(s)) : i(s.elm))
                        }
                    }
                    function m(e, t) {
                        if ($t(t) || $t(e.data)) {
                            var a = k.remove.length + 1;
                            for ($t(t) ? t.listeners += a: t = n(e.elm, a), $t(y = e.componentInstance) && $t(y = y._vnode) && $t(y.data) && m(y, t), y = 0; y < k.remove.length; ++y) k.remove[y](e, t);
                            $t(y = e.data.hook) && $t(y = y.remove) ? y(e, t) : t()
                        } else i(e.elm)
                    }
                    function A(e, t, a, n, i) {
                        for (var s, o, c, l, d = 0,
                                 u = 0,
                                 v = t.length - 1,
                                 f = t[0], p = t[v], C = a.length - 1, m = a[0], A = a[C], g = !i; d <= v && u <= C;) Nt(f) ? f = t[++d] : Nt(p) ? p = t[--v] : Mt(f, m) ? (E(f, m, n), f = t[++d], m = a[++u]) : Mt(p, A) ? (E(p, A, n), p = t[--v], A = a[--C]) : Mt(f, A) ? (E(f, A, n), g && I.insertBefore(e, f.elm, I.nextSibling(p.elm)), f = t[++d], A = a[--C]) : Mt(p, m) ? (E(p, m, n), g && I.insertBefore(e, p.elm, f.elm), p = t[--v], m = a[++u]) : (Nt(s) && (s = Lt(t, d, v)), o = $t(m.key) ? s[m.key] : null, Nt(o) ? (r(m, n, e, f.elm), m = a[++u]) : (c = t[o], Mt(c, m) ? (E(c, m, n), t[o] = void 0, g && I.insertBefore(e, m.elm, f.elm), m = a[++u]) : (r(m, n, e, f.elm), m = a[++u])));
                        d > v ? (l = Nt(a[C + 1]) ? null: a[C + 1].elm, D(e, l, a, u, C, n)) : u > C && h(e, t, d, v)
                    }
                    function E(e, t, a, n) {
                        if (e !== t) {
                            if (Pt(t.isStatic) && Pt(e.isStatic) && t.key === e.key && (Pt(t.isCloned) || Pt(t.isOnce))) return t.elm = e.elm,
                                void(t.componentInstance = e.componentInstance);
                            var i, s = t.data;
                            $t(s) && $t(i = s.hook) && $t(i = i.prepatch) && i(e, t);
                            var r = t.elm = e.elm,
                                o = e.children,
                                c = t.children;
                            if ($t(s) && v(t)) {
                                for (i = 0; i < k.update.length; ++i) k.update[i](e, t);
                                $t(i = s.hook) && $t(i = i.update) && i(e, t)
                            }
                            Nt(t.text) ? $t(o) && $t(c) ? o !== c && A(r, o, c, a, n) : $t(c) ? ($t(e.text) && I.setTextContent(r, ""), D(r, null, c, 0, c.length - 1, a)) : $t(o) ? h(r, o, 0, o.length - 1) : $t(e.text) && I.setTextContent(r, "") : e.text !== t.text && I.setTextContent(r, t.text),
                            $t(s) && $t(i = s.hook) && $t(i = i.postpatch) && i(e, t)
                        }
                    }
                    function g(e, t, a) {
                        if (Pt(a) && $t(e.parent)) e.parent.data.pendingInsert = t;
                        else for (var n = 0; n < t.length; ++n) t[n].data.hook.insert(t[n])
                    }
                    function b(e, t, a) {
                        t.elm = e;
                        var n = t.tag,
                            i = t.data,
                            s = t.children;
                        if ($t(i) && ($t(y = i.hook) && $t(y = y.init) && y(t, !0), $t(y = t.componentInstance))) return c(t, a),
                            !0;
                        if ($t(n)) {
                            if ($t(s)) if (e.hasChildNodes()) {
                                for (var r = !0,
                                         o = e.firstChild,
                                         l = 0; l < s.length; l++) {
                                    if (!o || !b(o, s[l], a)) {
                                        r = !1;
                                        break
                                    }
                                    o = o.nextSibling
                                }
                                if (!r || o) return ! 1
                            } else u(t, s, a);
                            if ($t(i)) for (var d in i) if (!w(d)) {
                                f(t, a);
                                break
                            }
                        } else e.data !== t.text && (e.data = t.text);
                        return ! 0
                    }
                    var y, _, k = {},
                        x = e.modules,
                        I = e.nodeOps;
                    for (y = 0; y < Qs.length; ++y) for (k[Qs[y]] = [], _ = 0; _ < x.length; ++_) $t(x[_][Qs[y]]) && k[Qs[y]].push(x[_][Qs[y]]);
                    var w = a("attrs,style,class,staticClass,staticStyle,key");
                    return function(e, a, n, i, s, o) {
                        if (Nt(a)) return void($t(e) && C(e));
                        var c = !1,
                            l = [];
                        if (Nt(e)) c = !0,
                            r(a, l, s, o);
                        else {
                            var d = $t(e.nodeType);
                            if (!d && Mt(e, a)) E(e, a, l, i);
                            else {
                                if (d) {
                                    if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), n = !0), Pt(n) && b(e, a, l)) return g(a, l, !0),
                                        e;
                                    e = t(e)
                                }
                                var u = e.elm,
                                    f = I.parentNode(u);
                                if (r(a, l, u._leaveCb ? null: f, I.nextSibling(u)), $t(a.parent)) {
                                    for (var p = a.parent; p;) p.elm = a.elm,
                                        p = p.parent;
                                    if (v(a)) for (var D = 0; D < k.create.length; ++D) k.create[D](Ys, a.parent)
                                }
                                $t(f) ? h(f, [e], 0, 0) : $t(e.tag) && C(e)
                            }
                        }
                        return g(a, l, c),
                            a.elm
                    }
                } ({
                    nodeOps: Js,
                    modules: wr
                });
            Pi && document.addEventListener("selectionchange",
                function() {
                    var e = document.activeElement;
                    e && e.vmodel && Ja(e, "input")
                });
            var Tr = {
                    inserted: function(e, t, a) {
                        if ("select" === a.tag) {
                            var n = function() {
                                qa(e, t, a.context)
                            };
                            n(),
                            ($i || Mi) && setTimeout(n, 0)
                        } else "textarea" !== a.tag && "text" !== e.type && "password" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (Oi || (e.addEventListener("compositionstart", za), e.addEventListener("compositionend", Va)), Pi && (e.vmodel = !0)))
                    },
                    componentUpdated: function(e, t, a) {
                        "select" === a.tag && (qa(e, t, a.context), (e.multiple ? t.value.some(function(t) {
                            return Wa(t, e.options)
                        }) : t.value !== t.oldValue && Wa(t.value, e.options)) && Ja(e, "change"))
                    }
                },
                Sr = {
                    bind: function(e, t, a) {
                        var n = t.value;
                        a = Ka(a);
                        var i = a.data && a.data.transition,
                            s = e.__vOriginalDisplay = "none" === e.style.display ? "": e.style.display;
                        n && i && !Pi ? (a.data.show = !0, La(a,
                            function() {
                                e.style.display = s
                            })) : e.style.display = n ? s: "none"
                    },
                    update: function(e, t, a) {
                        var n = t.value;
                        n !== t.oldValue && (a = Ka(a), a.data && a.data.transition && !Pi ? (a.data.show = !0, n ? La(a,
                            function() {
                                e.style.display = e.__vOriginalDisplay
                            }) : Ra(a,
                            function() {
                                e.style.display = "none"
                            })) : e.style.display = n ? e.__vOriginalDisplay: "none")
                    },
                    unbind: function(e, t, a, n, i) {
                        i || (e.style.display = e.__vOriginalDisplay)
                    }
                },
                Fr = {
                    model: Tr,
                    show: Sr
                },
                jr = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                },
                Nr = {
                    name: "transition",
                    props: jr,
                    abstract: !0,
                    render: function(e) {
                        var t = this,
                            a = this.$slots.
                                default;
                        if (a && (a = a.filter(function(e) {
                                return e.tag
                            }), a.length)) {
                            var n = this.mode,
                                i = a[0];
                            if (en(this.$vnode)) return i;
                            var r = Ya(i);
                            if (!r) return i;
                            if (this._leaving) return Za(e, i);
                            var o = "__transition-" + this._uid + "-";
                            r.key = null == r.key ? o + r.tag: s(r.key) ? 0 === String(r.key).indexOf(o) ? r.key: o + r.key: r.key;
                            var c = (r.data || (r.data = {})).transition = Qa(this),
                                d = this._vnode,
                                u = Ya(d);
                            if (r.data.directives && r.data.directives.some(function(e) {
                                    return "show" === e.name
                                }) && (r.data.show = !0), u && u.data && !tn(r, u)) {
                                var v = u && (u.data.transition = l({},
                                    c));
                                if ("out-in" === n) return this._leaving = !0,
                                    z(v, "afterLeave",
                                        function() {
                                            t._leaving = !1,
                                                t.$forceUpdate()
                                        }),
                                    Za(e, i);
                                if ("in-out" === n) {
                                    var f, p = function() {
                                        f()
                                    };
                                    z(c, "afterEnter", p),
                                        z(c, "enterCancelled", p),
                                        z(v, "delayLeave",
                                            function(e) {
                                                f = e
                                            })
                                }
                            }
                            return i
                        }
                    }
                },
                $r = l({
                        tag: String,
                        moveClass: String
                    },
                    jr);
            delete $r.mode;
            var Pr = {
                    props: $r,
                    render: function(e) {
                        for (var t = this.tag || this.$vnode.data.tag || "span",
                                 a = Object.create(null), n = this.prevChildren = this.children, i = this.$slots.
                                default || [], s = this.children = [], r = Qa(this), o = 0; o < i.length; o++) {
                            var c = i[o];
                            c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (s.push(c), a[c.key] = c, (c.data || (c.data = {})).transition = r)
                        }
                        if (n) {
                            for (var l = [], d = [], u = 0; u < n.length; u++) {
                                var v = n[u];
                                v.data.transition = r,
                                    v.data.pos = v.elm.getBoundingClientRect(),
                                    a[v.key] ? l.push(v) : d.push(v)
                            }
                            this.kept = e(t, null, l),
                                this.removed = d
                        }
                        return e(t, null, s)
                    },
                    beforeUpdate: function() {
                        this.__patch__(this._vnode, this.kept, !1, !0),
                            this._vnode = this.kept
                    },
                    updated: function() {
                        var e = this.prevChildren,
                            t = this.moveClass || (this.name || "v") + "-move";
                        if (e.length && this.hasMove(e[0].elm, t)) {
                            e.forEach(an),
                                e.forEach(nn),
                                e.forEach(sn);
                            document.body.offsetHeight,
                                e.forEach(function(e) {
                                    if (e.data.moved) {
                                        var a = e.elm,
                                            n = a.style;
                                        ja(a, t),
                                            n.transform = n.WebkitTransform = n.transitionDuration = "",
                                            a.addEventListener(gr, a._moveCb = function e(n) {
                                                n && !/transform$/.test(n.propertyName) || (a.removeEventListener(gr, e), a._moveCb = null, Na(a, t))
                                            })
                                    }
                                })
                        }
                    },
                    methods: {
                        hasMove: function(e, t) {
                            if (!hr) return ! 1;
                            if (null != this._hasMove) return this._hasMove;
                            var a = e.cloneNode();
                            e._transitionClasses && e._transitionClasses.forEach(function(e) {
                                Ta(a, e)
                            }),
                                Ba(a, t),
                                a.style.display = "none",
                                this.$el.appendChild(a);
                            var n = Pa(a);
                            return this.$el.removeChild(a),
                                this._hasMove = n.hasTransform
                        }
                    }
                },
                Mr = {
                    Transition: Nr,
                    TransitionGroup: Pr
                };
            at.config.mustUseProp = Ps,
                at.config.isReservedTag = zs,
                at.config.getTagNamespace = mt,
                at.config.isUnknownElement = At,
                l(at.options.directives, Fr),
                l(at.options.components, Mr),
                at.prototype.__patch__ = ji ? Br: f,
                at.prototype.$mount = function(e, t) {
                    return e = e && ji ? Et(e) : void 0,
                        re(this, e, t)
                },
                setTimeout(function() {
                        Bi.devtools && Hi && Hi.emit("init", at)
                    },
                    0);
            var Or, Lr = !!ji &&
                function(e, t) {
                    var a = document.createElement("div");
                    return a.innerHTML = '<div a="\n">',
                    a.innerHTML.indexOf("&#10;") > 0
                } (),
                Rr = a("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                Ur = a("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                Hr = a("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                Gr = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
                qr = new RegExp("^\\s*" + /([^\s"'<>\/=]+)/.source + "(?:\\s*(" + /(?:=)/.source + ")\\s*(?:" + Gr.join("|") + "))?"),
                Wr = "[a-zA-Z_][\\w\\-\\.]*",
                Xr = new RegExp("^<((?:" + Wr + "\\:)?" + Wr + ")"),
                zr = /^\s*(\/?)>/,
                Vr = new RegExp("^<\\/((?:" + Wr + "\\:)?" + Wr + ")[^>]*>"),
                Jr = /^<!DOCTYPE [^>]+>/i,
                Kr = /^<!--/,
                Yr = /^<!\[/,
                Qr = !1;
            "x".replace(/x(.)?/g,
                function(e, t) {
                    Qr = "" === t
                });
            var Zr, eo, to, ao, no, io, so, ro, oo, co, lo, uo, vo, fo, po, Do, Co, ho, mo = a("script,style,textarea", !0),
                Ao = {},
                Eo = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&amp;": "&",
                    "&#10;": "\n"
                },
                go = /&(?:lt|gt|quot|amp);/g,
                bo = /&(?:lt|gt|quot|amp|#10);/g,
                yo = /\{\{((?:.|\n)+?)\}\}/g,
                _o = r(function(e) {
                    var t = e[0].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&"),
                        a = e[1].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
                    return new RegExp(t + "((?:.|\\n)+?)" + a, "g")
                }),
                ko = /^@|^v-on:/,
                xo = /^v-|^@|^:/,
                Io = /(.*?)\s+(?:in|of)\s+(.*)/,
                wo = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
                Bo = /:(.*)$/,
                To = /^:|^v-bind:/,
                So = /\.[^.]+/g,
                Fo = r(rn),
                jo = /^xmlns:NS\d+/,
                No = /^NS\d+:/,
                $o = r(Tn),
                Po = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
                Mo = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
                Oo = {
                    esc: 27,
                    tab: 9,
                    enter: 13,
                    space: 32,
                    up: 38,
                    left: 37,
                    right: 39,
                    down: 40,
                    delete: [8, 46]
                },
                Lo = function(e) {
                    return "if(" + e + ")return null;"
                },
                Ro = {
                    stop: "$event.stopPropagation();",
                    prevent: "$event.preventDefault();",
                    self: Lo("$event.target !== $event.currentTarget"),
                    ctrl: Lo("!$event.ctrlKey"),
                    shift: Lo("!$event.shiftKey"),
                    alt: Lo("!$event.altKey"),
                    meta: Lo("!$event.metaKey"),
                    left: Lo("'button' in $event && $event.button !== 0"),
                    middle: Lo("'button' in $event && $event.button !== 1"),
                    right: Lo("'button' in $event && $event.button !== 2")
                },
                Uo = {
                    bind: Rn,
                    cloak: f
                },
                Ho = {
                    staticKeys: ["staticClass"],
                    transformNode: ui,
                    genData: vi
                },
                Go = {
                    staticKeys: ["staticStyle"],
                    transformNode: fi,
                    genData: pi
                },
                qo = [Ho, Go],
                Wo = {
                    model: va,
                    text: Di,
                    html: Ci
                },
                Xo = {
                    expectHTML: !0,
                    modules: qo,
                    directives: Wo,
                    isPreTag: Xs,
                    isUnaryTag: Rr,
                    mustUseProp: Ps,
                    canBeLeftOpenTag: Ur,
                    isReservedTag: zs,
                    getTagNamespace: mt,
                    staticKeys: function(e) {
                        return e.reduce(function(e, t) {
                                return e.concat(t.staticKeys || [])
                            },
                            []).join(",")
                    } (qo)
                },
                zo = function(e) {
                    function t(t, a) {
                        var n = Object.create(e),
                            i = [],
                            s = [];
                        if (n.warn = function(e, t) { (t ? s: i).push(e)
                            },
                                a) {
                            a.modules && (n.modules = (e.modules || []).concat(a.modules)),
                            a.directives && (n.directives = l(Object.create(e.directives), a.directives));
                            for (var r in a)"modules" !== r && "directives" !== r && (n[r] = a[r])
                        }
                        var o = li(t, n);
                        return o.errors = i,
                            o.tips = s,
                            o
                    }
                    function a(e, a, i) {
                        a = a || {};
                        var s = a.delimiters ? String(a.delimiters) + e: e;
                        if (n[s]) return n[s];
                        var r = t(e, a),
                            o = {},
                            c = [];
                        o.render = di(r.render, c);
                        var l = r.staticRenderFns.length;
                        o.staticRenderFns = new Array(l);
                        for (var d = 0; d < l; d++) o.staticRenderFns[d] = di(r.staticRenderFns[d], c);
                        return n[s] = o
                    }
                    var n = Object.create(null);
                    return {
                        compile: t,
                        compileToFunctions: a
                    }
                } (Xo),
                Vo = zo.compileToFunctions,
                Jo = r(function(e) {
                    var t = Et(e);
                    return t && t.innerHTML
                }),
                Ko = at.prototype.$mount;
            return at.prototype.$mount = function(e, t) {
                if ((e = e && Et(e)) === document.body || e === document.documentElement) return this;
                var a = this.$options;
                if (!a.render) {
                    var n = a.template;
                    if (n) if ("string" == typeof n)"#" === n.charAt(0) && (n = Jo(n));
                    else {
                        if (!n.nodeType) return this;
                        n = n.innerHTML
                    } else e && (n = hi(e));
                    if (n) {
                        var i = Vo(n, {
                                shouldDecodeNewlines: Lr,
                                delimiters: a.delimiters
                            },
                            this),
                            s = i.render,
                            r = i.staticRenderFns;
                        a.render = s,
                            a.staticRenderFns = r
                    }
                }
                return Ko.call(this, e, t)
            },
                at.compile = Vo,
                at
        }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.VueResource = t()
    } (this,
        function() {
            "use strict";
            function e(e) {
                this.state = U,
                    this.value = void 0,
                    this.deferred = [];
                var t = this;
                try {
                    e(function(e) {
                            t.resolve(e)
                        },
                        function(e) {
                            t.reject(e)
                        })
                } catch(e) {
                    t.reject(e)
                }
            }
            function t(e, t) {
                e instanceof Promise ? this.promise = e: this.promise = new Promise(e.bind(t)),
                    this.context = t
            }
            function a(e) {
                "undefined" != typeof console && J && console.warn("[VueResource warn]: " + e)
            }
            function n(e) {
                "undefined" != typeof console && console.error(e)
            }
            function i(e, t) {
                return q(e, t)
            }
            function s(e) {
                return e ? e.replace(/^\s*|\s*$/g, "") : ""
            }
            function r(e) {
                return e ? e.toLowerCase() : ""
            }
            function o(e) {
                return e ? e.toUpperCase() : ""
            }
            function c(e) {
                return "string" == typeof e
            }
            function l(e) {
                return "function" == typeof e
            }
            function d(e) {
                return null !== e && "object" == typeof e
            }
            function u(e) {
                return d(e) && Object.getPrototypeOf(e) == Object.prototype
            }
            function v(e) {
                return "undefined" != typeof Blob && e instanceof Blob
            }
            function f(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }
            function p(e, a, n) {
                var i = t.resolve(e);
                return arguments.length < 2 ? i: i.then(a, n)
            }
            function D(e, t, a) {
                return a = a || {},
                l(a) && (a = a.call(t)),
                    h(e.bind({
                        $vm: t,
                        $options: a
                    }), e, {
                        $options: a
                    })
            }
            function C(e, t) {
                var a, n;
                if (Q(e)) for (a = 0; a < e.length; a++) t.call(e[a], e[a], a);
                else if (d(e)) for (n in e) X.call(e, n) && t.call(e[n], e[n], n);
                return e
            }
            function h(e) {
                return V.call(arguments, 1).forEach(function(t) {
                    E(e, t, !0)
                }),
                    e
            }
            function m(e) {
                return V.call(arguments, 1).forEach(function(t) {
                    for (var a in t) void 0 === e[a] && (e[a] = t[a])
                }),
                    e
            }
            function A(e) {
                return V.call(arguments, 1).forEach(function(t) {
                    E(e, t)
                }),
                    e
            }
            function E(e, t, a) {
                for (var n in t) a && (u(t[n]) || Q(t[n])) ? (u(t[n]) && !u(e[n]) && (e[n] = {}), Q(t[n]) && !Q(e[n]) && (e[n] = []), E(e[n], t[n], a)) : void 0 !== t[n] && (e[n] = t[n])
            }
            function g(e, t, a) {
                var n = b(e),
                    i = n.expand(t);
                return a && a.push.apply(a, n.vars),
                    i
            }
            function b(e) {
                var t = ["+", "#", ".", "/", ";", "?", "&"],
                    a = [];
                return {
                    vars: a,
                    expand: function(n) {
                        return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,
                            function(e, i, s) {
                                if (i) {
                                    var r = null,
                                        o = [];
                                    if ( - 1 !== t.indexOf(i.charAt(0)) && (r = i.charAt(0), i = i.substr(1)), i.split(/,/g).forEach(function(e) {
                                            var t = /([^:\*]*)(?::(\d+)|(\*))?/.exec(e);
                                            o.push.apply(o, y(n, r, t[1], t[2] || t[3])),
                                                a.push(t[1])
                                        }), r && "+" !== r) {
                                        var c = ",";
                                        return "?" === r ? c = "&": "#" !== r && (c = r),
                                        (0 !== o.length ? r: "") + o.join(c)
                                    }
                                    return o.join(",")
                                }
                                return I(s)
                            })
                    }
                }
            }
            function y(e, t, a, n) {
                var i = e[a],
                    s = [];
                if (_(i) && "" !== i) if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i) i = i.toString(),
                n && "*" !== n && (i = i.substring(0, parseInt(n, 10))),
                    s.push(x(t, i, k(t) ? a: null));
                else if ("*" === n) Array.isArray(i) ? i.filter(_).forEach(function(e) {
                    s.push(x(t, e, k(t) ? a: null))
                }) : Object.keys(i).forEach(function(e) {
                    _(i[e]) && s.push(x(t, i[e], e))
                });
                else {
                    var r = [];
                    Array.isArray(i) ? i.filter(_).forEach(function(e) {
                        r.push(x(t, e))
                    }) : Object.keys(i).forEach(function(e) {
                        _(i[e]) && (r.push(encodeURIComponent(e)), r.push(x(t, i[e].toString())))
                    }),
                        k(t) ? s.push(encodeURIComponent(a) + "=" + r.join(",")) : 0 !== r.length && s.push(r.join(","))
                } else ";" === t ? s.push(encodeURIComponent(a)) : "" !== i || "&" !== t && "?" !== t ? "" === i && s.push("") : s.push(encodeURIComponent(a) + "=");
                return s
            }
            function _(e) {
                return void 0 !== e && null !== e
            }
            function k(e) {
                return ";" === e || "&" === e || "?" === e
            }
            function x(e, t, a) {
                return t = "+" === e || "#" === e ? I(t) : encodeURIComponent(t),
                    a ? encodeURIComponent(a) + "=" + t: t
            }
            function I(e) {
                return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
                    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e)),
                        e
                }).join("")
            }
            function w(e, t) {
                var a, n = this || {},
                    i = e;
                return c(e) && (i = {
                    url: e,
                    params: t
                }),
                    i = h({},
                        w.options, n.$options, i),
                    w.transforms.forEach(function(e) {
                        a = B(e, a, n.$vm)
                    }),
                    a(i)
            }
            function B(e, t, a) {
                return function(n) {
                    return e.call(a, n, t)
                }
            }
            function T(e, t, a) {
                var n, i = Q(t),
                    s = u(t);
                C(t,
                    function(t, r) {
                        n = d(t) || Q(t),
                        a && (r = a + "[" + (s || n ? r: "") + "]"),
                            !a && i ? e.add(t.name, t.value) : n ? T(e, t, r) : e.add(r, t)
                    })
            }
            function S(e) {
                var t = e.match(/^\[|^\{(?!\{)/),
                    a = {
                        "[": /]$/,
                        "{": /}$/
                    };
                return t && a[t[0]].test(e)
            }
            function F(e, t) {
                t((e.client || (K ? fe: pe))(e))
            }
            function j(e, t) {
                return Object.keys(e).reduce(function(e, a) {
                        return r(t) === r(a) ? a: e
                    },
                    null)
            }
            function N(e) {
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return s(e)
            }
            function $(e) {
                return new t(function(t) {
                    var a = new FileReader;
                    a.readAsText(e),
                        a.onload = function() {
                            t(a.result)
                        }
                })
            }
            function P(e) {
                return 0 === e.type.indexOf("text") || -1 !== e.type.indexOf("json")
            }
            function M(e) {
                var a = this || {},
                    i = De(a.$vm);
                return m(e || {},
                    a.$options, M.options),
                    M.interceptors.forEach(function(e) {
                        i.use(e)
                    }),
                    i(new me(e)).then(function(e) {
                            return e.ok ? e: t.reject(e)
                        },
                        function(e) {
                            return e instanceof Error && n(e),
                                t.reject(e)
                        })
            }
            function O(e, t, a, n) {
                var i = this || {},
                    s = {};
                return a = Z({},
                    O.actions, a),
                    C(a,
                        function(a, r) {
                            a = h({
                                    url: e,
                                    params: Z({},
                                        t)
                                },
                                n, a),
                                s[r] = function() {
                                    return (i.$http || M)(L(a, arguments))
                                }
                        }),
                    s
            }
            function L(e, t) {
                var a, n = Z({},
                    e),
                    i = {};
                switch (t.length) {
                    case 2:
                        i = t[0],
                            a = t[1];
                        break;
                    case 1:
                        /^(POST|PUT|PATCH)$/i.test(n.method) ? a = t[0] : i = t[0];
                        break;
                    case 0:
                        break;
                    default:
                        throw "Expected up to 2 arguments [params, body], got " + t.length + " arguments"
                }
                return n.body = a,
                    n.params = Z({},
                        n.params, i),
                    n
            }
            function R(e) {
                R.installed || (Y(e), e.url = w, e.http = M, e.resource = O, e.Promise = t, Object.defineProperties(e.prototype, {
                    $url: {
                        get: function() {
                            return D(e.url, this, this.$options.url)
                        }
                    },
                    $http: {
                        get: function() {
                            return D(e.http, this, this.$options.http)
                        }
                    },
                    $resource: {
                        get: function() {
                            return e.resource.bind(this)
                        }
                    },
                    $promise: {
                        get: function() {
                            var t = this;
                            return function(a) {
                                return new e.Promise(a, t)
                            }
                        }
                    }
                }))
            }
            var U = 2;
            e.reject = function(t) {
                return new e(function(e, a) {
                    a(t)
                })
            },
                e.resolve = function(t) {
                    return new e(function(e, a) {
                        e(t)
                    })
                },
                e.all = function(t) {
                    return new e(function(a, n) {
                        var i = 0,
                            s = [];
                        0 === t.length && a(s);
                        for (var r = 0; r < t.length; r += 1) e.resolve(t[r]).then(function(e) {
                            return function(n) {
                                s[e] = n,
                                (i += 1) === t.length && a(s)
                            }
                        } (r), n)
                    })
                },
                e.race = function(t) {
                    return new e(function(a, n) {
                        for (var i = 0; i < t.length; i += 1) e.resolve(t[i]).then(a, n)
                    })
                };
            var H = e.prototype;
            H.resolve = function(e) {
                var t = this;
                if (t.state === U) {
                    if (e === t) throw new TypeError("Promise settled with itself.");
                    var a = !1;
                    try {
                        var n = e && e.then;
                        if (null !== e && "object" == typeof e && "function" == typeof n) return void n.call(e,
                            function(e) {
                                a || t.resolve(e),
                                    a = !0
                            },
                            function(e) {
                                a || t.reject(e),
                                    a = !0
                            })
                    } catch(e) {
                        return void(a || t.reject(e))
                    }
                    t.state = 0,
                        t.value = e,
                        t.notify()
                }
            },
                H.reject = function(e) {
                    var t = this;
                    if (t.state === U) {
                        if (e === t) throw new TypeError("Promise settled with itself.");
                        t.state = 1,
                            t.value = e,
                            t.notify()
                    }
                },
                H.notify = function() {
                    var e = this;
                    i(function() {
                        if (e.state !== U) for (; e.deferred.length;) {
                            var t = e.deferred.shift(),
                                a = t[0],
                                n = t[1],
                                i = t[2],
                                s = t[3];
                            try {
                                0 === e.state ? i("function" == typeof a ? a.call(void 0, e.value) : e.value) : 1 === e.state && ("function" == typeof n ? i(n.call(void 0, e.value)) : s(e.value))
                            } catch(e) {
                                s(e)
                            }
                        }
                    })
                },
                H.then = function(t, a) {
                    var n = this;
                    return new e(function(e, i) {
                        n.deferred.push([t, a, e, i]),
                            n.notify()
                    })
                },
                H.
                    catch = function(e) {
                    return this.then(void 0, e)
                },
            "undefined" == typeof Promise && (window.Promise = e),
                t.all = function(e, a) {
                    return new t(Promise.all(e), a)
                },
                t.resolve = function(e, a) {
                    return new t(Promise.resolve(e), a)
                },
                t.reject = function(e, a) {
                    return new t(Promise.reject(e), a)
                },
                t.race = function(e, a) {
                    return new t(Promise.race(e), a)
                };
            var G = t.prototype;
            G.bind = function(e) {
                return this.context = e,
                    this
            },
                G.then = function(e, a) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                    a && a.bind && this.context && (a = a.bind(this.context)),
                        new t(this.promise.then(e, a), this.context)
                },
                G.
                    catch = function(e) {
                    return e && e.bind && this.context && (e = e.bind(this.context)),
                        new t(this.promise.
                        catch(e), this.context)
                },
                G.
                    finally = function(e) {
                    return this.then(function(t) {
                            return e.call(this),
                                t
                        },
                        function(t) {
                            return e.call(this),
                                Promise.reject(t)
                        })
                };
            var q, W = {},
                X = W.hasOwnProperty,
                z = [],
                V = z.slice,
                J = !1,
                K = "undefined" != typeof window,
                Y = function(e) {
                    var t = e.config,
                        a = e.nextTick;
                    q = a,
                        J = t.debug || !t.silent
                },
                Q = Array.isArray,
                Z = Object.assign || A,
                ee = function(e, t) {
                    var a = t(e);
                    return c(e.root) && !a.match(/^(https?:)?\//) && (a = e.root + "/" + a),
                        a
                },
                te = function(e, t) {
                    var a = Object.keys(w.options.params),
                        n = {},
                        i = t(e);
                    return C(e.params,
                        function(e, t) { - 1 === a.indexOf(t) && (n[t] = e)
                        }),
                        n = w.params(n),
                    n && (i += ( - 1 == i.indexOf("?") ? "?": "&") + n),
                        i
                },
                ae = function(e) {
                    var t = [],
                        a = g(e.url, e.params, t);
                    return t.forEach(function(t) {
                        delete e.params[t]
                    }),
                        a
                };
            w.options = {
                url: "",
                root: null,
                params: {}
            },
                w.transforms = [ae, te, ee],
                w.params = function(e) {
                    var t = [],
                        a = encodeURIComponent;
                    return t.add = function(e, t) {
                        l(t) && (t = t()),
                        null === t && (t = ""),
                            this.push(a(e) + "=" + a(t))
                    },
                        T(t, e),
                        t.join("&").replace(/%20/g, "+")
                },
                w.parse = function(e) {
                    var t = document.createElement("a");
                    return document.documentMode && (t.href = e, e = t.href),
                        t.href = e,
                        {
                            href: t.href,
                            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                            port: t.port,
                            host: t.host,
                            hostname: t.hostname,
                            pathname: "/" === t.pathname.charAt(0) ? t.pathname: "/" + t.pathname,
                            search: t.search ? t.search.replace(/^\?/, "") : "",
                            hash: t.hash ? t.hash.replace(/^#/, "") : ""
                        }
                };
            var ne = function(e) {
                    return new t(function(t) {
                        var a = new XDomainRequest,
                            n = function(n) {
                                var i = n.type,
                                    s = 0;
                                "load" === i ? s = 200 : "error" === i && (s = 500),
                                    t(e.respondWith(a.responseText, {
                                        status: s
                                    }))
                            };
                        e.abort = function() {
                            return a.abort()
                        },
                            a.open(e.method, e.getUrl()),
                        e.timeout && (a.timeout = e.timeout),
                            a.onload = n,
                            a.onabort = n,
                            a.onerror = n,
                            a.ontimeout = n,
                            a.onprogress = function() {},
                            a.send(e.getBody())
                    })
                },
                ie = K && "withCredentials" in new XMLHttpRequest,
                se = function(e, t) {
                    if (K) {
                        var a = w.parse(location.href),
                            n = w.parse(e.getUrl());
                        n.protocol === a.protocol && n.host === a.host || (e.crossOrigin = !0, e.emulateHTTP = !1, ie || (e.client = ne))
                    }
                    t()
                },
                re = function(e, t) {
                    f(e.body) ? e.headers.delete("Content-Type") : (d(e.body) || Q(e.body)) && (e.emulateJSON ? (e.body = w.params(e.body), e.headers.set("Content-Type", "application/x-www-form-urlencoded")) : e.body = JSON.stringify(e.body)),
                        t(function(e) {
                            return Object.defineProperty(e, "data", {
                                get: function() {
                                    return this.body
                                },
                                set: function(e) {
                                    this.body = e
                                }
                            }),
                                e.bodyText ? p(e.text(),
                                    function(t) {
                                        if (0 === (e.headers.get("Content-Type") || "").indexOf("application/json") || S(t)) try {
                                            e.body = JSON.parse(t)
                                        } catch(t) {
                                            e.body = null
                                        } else e.body = t;
                                        return e
                                    }) : e
                        })
                },
                oe = function(e) {
                    return new t(function(t) {
                        var a, n, i = e.jsonp || "callback",
                            s = e.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                            r = null;
                        a = function(a) {
                            var i = a.type,
                                o = 0;
                            "load" === i && null !== r ? o = 200 : "error" === i && (o = 500),
                            o && window[s] && (delete window[s], document.body.removeChild(n)),
                                t(e.respondWith(r, {
                                    status: o
                                }))
                        },
                            window[s] = function(e) {
                                r = JSON.stringify(e)
                            },
                            e.abort = function() {
                                a({
                                    type: "abort"
                                })
                            },
                            e.params[i] = s,
                        e.timeout && setTimeout(e.abort, e.timeout),
                            n = document.createElement("script"),
                            n.src = e.getUrl(),
                            n.type = "text/javascript",
                            n.async = !0,
                            n.onload = a,
                            n.onerror = a,
                            document.body.appendChild(n)
                    })
                },
                ce = function(e, t) {
                    "JSONP" == e.method && (e.client = oe),
                        t()
                },
                le = function(e, t) {
                    l(e.before) && e.before.call(this, e),
                        t()
                },
                de = function(e, t) {
                    e.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(e.method) && (e.headers.set("X-HTTP-Method-Override", e.method), e.method = "POST"),
                        t()
                },
                ue = function(e, t) {
                    C(Z({},
                        M.headers.common, e.crossOrigin ? {}: M.headers.custom, M.headers[r(e.method)]),
                        function(t, a) {
                            e.headers.has(a) || e.headers.set(a, t)
                        }),
                        t()
                },
                ve = "undefined" != typeof Blob && "undefined" != typeof FileReader,
                fe = function(e) {
                    return new t(function(t) {
                        var a = new XMLHttpRequest,
                            n = function(n) {
                                var i = e.respondWith("response" in a ? a.response: a.responseText, {
                                    status: 1223 === a.status ? 204 : a.status,
                                    statusText: 1223 === a.status ? "No Content": s(a.statusText)
                                });
                                C(s(a.getAllResponseHeaders()).split("\n"),
                                    function(e) {
                                        i.headers.append(e.slice(0, e.indexOf(":")), e.slice(e.indexOf(":") + 1))
                                    }),
                                    t(i)
                            };
                        e.abort = function() {
                            return a.abort()
                        },
                        e.progress && ("GET" === e.method ? a.addEventListener("progress", e.progress) : /^(POST|PUT)$/i.test(e.method) && a.upload.addEventListener("progress", e.progress)),
                            a.open(e.method, e.getUrl(), !0),
                        e.timeout && (a.timeout = e.timeout),
                        !0 === e.credentials && (a.withCredentials = !0),
                        e.crossOrigin || e.headers.set("X-Requested-With", "XMLHttpRequest"),
                        "responseType" in a && ve && (a.responseType = "blob"),
                            e.headers.forEach(function(e, t) {
                                a.setRequestHeader(t, e)
                            }),
                            a.onload = n,
                            a.onabort = n,
                            a.onerror = n,
                            a.ontimeout = n,
                            a.send(e.getBody())
                    })
                },
                pe = function(e) {
                    var a = require("got");
                    return new t(function(t) {
                        var n, i = e.getUrl(),
                            r = e.getBody(),
                            o = e.method,
                            c = {};
                        e.headers.forEach(function(e, t) {
                            c[t] = e
                        }),
                            a(i, {
                                body: r,
                                method: o,
                                headers: c
                            }).then(n = function(a) {
                                    var n = e.respondWith(a.body, {
                                        status: a.statusCode,
                                        statusText: s(a.statusMessage)
                                    });
                                    C(a.headers,
                                        function(e, t) {
                                            n.headers.set(t, e)
                                        }),
                                        t(n)
                                },
                                function(e) {
                                    return n(e.response)
                                })
                    })
                },
                De = function(e) {
                    function n(n) {
                        return new t(function(t) {
                                function o() {
                                    i = s.pop(),
                                        l(i) ? i.call(e, n, c) : (a("Invalid interceptor of type " + typeof i + ", must be a function"), c())
                                }
                                function c(a) {
                                    if (l(a)) r.unshift(a);
                                    else if (d(a)) return r.forEach(function(t) {
                                        a = p(a,
                                            function(a) {
                                                return t.call(e, a) || a
                                            })
                                    }),
                                        void p(a, t);
                                    o()
                                }
                                o()
                            },
                            e)
                    }
                    var i, s = [F],
                        r = [];
                    return d(e) || (e = null),
                        n.use = function(e) {
                            s.push(e)
                        },
                        n
                },
                Ce = function(e) {
                    var t = this;
                    this.map = {},
                        C(e,
                            function(e, a) {
                                return t.append(a, e)
                            })
                };
            Ce.prototype.has = function(e) {
                return null !== j(this.map, e)
            },
                Ce.prototype.get = function(e) {
                    var t = this.map[j(this.map, e)];
                    return t ? t.join() : null
                },
                Ce.prototype.getAll = function(e) {
                    return this.map[j(this.map, e)] || []
                },
                Ce.prototype.set = function(e, t) {
                    this.map[N(j(this.map, e) || e)] = [s(t)]
                },
                Ce.prototype.append = function(e, t) {
                    var a = this.map[j(this.map, e)];
                    a ? a.push(s(t)) : this.set(e, t)
                },
                Ce.prototype.delete = function(e) {
                    delete this.map[j(this.map, e)]
                },
                Ce.prototype.deleteAll = function() {
                    this.map = {}
                },
                Ce.prototype.forEach = function(e, t) {
                    var a = this;
                    C(this.map,
                        function(n, i) {
                            C(n,
                                function(n) {
                                    return e.call(t, n, i, a)
                                })
                        })
                };
            var he = function(e, t) {
                var a = t.url,
                    n = t.headers,
                    i = t.status,
                    s = t.statusText;
                this.url = a,
                    this.ok = i >= 200 && i < 300,
                    this.status = i || 0,
                    this.statusText = s || "",
                    this.headers = new Ce(n),
                    this.body = e,
                    c(e) ? this.bodyText = e: v(e) && (this.bodyBlob = e, P(e) && (this.bodyText = $(e)))
            };
            he.prototype.blob = function() {
                return p(this.bodyBlob)
            },
                he.prototype.text = function() {
                    return p(this.bodyText)
                },
                he.prototype.json = function() {
                    return p(this.text(),
                        function(e) {
                            return JSON.parse(e)
                        })
                };
            var me = function(e) {
                this.body = null,
                    this.params = {},
                    Z(this, e, {
                        method: o(e.method || "GET")
                    }),
                this.headers instanceof Ce || (this.headers = new Ce(this.headers))
            };
            me.prototype.getUrl = function() {
                return w(this)
            },
                me.prototype.getBody = function() {
                    return this.body
                },
                me.prototype.respondWith = function(e, t) {
                    return new he(e, Z(t || {},
                        {
                            url: this.getUrl()
                        }))
                };
            var Ae = {
                    Accept: "application/json, text/plain, */*"
                },
                Ee = {
                    "Content-Type": "application/json;charset=utf-8"
                };
            return M.options = {},
                M.headers = {
                    put: Ee,
                    post: Ee,
                    patch: Ee,
                    delete: Ee,
                    common: Ae,
                    custom: {}
                },
                M.interceptors = [le, de, re, ce, ue, se],
                ["get", "delete", "head", "jsonp"].forEach(function(e) {
                    M[e] = function(t, a) {
                        return this(Z(a || {},
                            {
                                url: t,
                                method: e
                            }))
                    }
                }),
                ["post", "put", "patch"].forEach(function(e) {
                    M[e] = function(t, a, n) {
                        return this(Z(n || {},
                            {
                                url: t,
                                method: e,
                                body: a
                            }))
                    }
                }),
                O.actions = {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET"
                    },
                    update: {
                        method: "PUT"
                    },
                    remove: {
                        method: "DELETE"
                    },
                    delete: {
                        method: "DELETE"
                    }
                },
            "undefined" != typeof window && window.Vue && window.Vue.use(R),
                R
        });
var Words = "<div class=\"main\" id=\"app-main\"  style=\"display: none;\">\t\n" +
    "\t\t<div class=\"backImg\"></div>\n" +
    "\t\t<div class=\"topImg\" v-on:click=\"goHomePage()\">\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/d_30/images/newhome/hpicon.png\" style=\"position: absolute;right: 6vw;top: 4vw;height: 10vw;width: 8vw;z-index: 9999;\" v-show=\"dealerNum!=22\">\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div style=\"position: fixed;top: 21vw;right: 0;width: 22vw;height: 8vw;z-index: 999;\" v-on:click=\"goHomePage()\" v-show=\"dealerNum==22\">\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/d_30/images/newhome/hpicon22.png\" style=\"position: absolute;width: 100%;height: 100%;\">\n" +
    "\t\t</div>\n" +
    "\t\t\n" +
    "\t\t<div class=\"user\" style=\"height: {{width*0.181}};\" v-on:click=\"goHomePage()\">\n" +
    "\t\t\t<img v-bind:src=\"userInfo.avatar\" id=\"userimg\" class=\"avatar\"  />\n" +
    "\t\t\t<div class=\"name\" id=\"nickname\">{{userInfo.name}}</div>\t\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"roomCard\" >\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/d_30/images/game/roomCard.png\" />\n" +
    "\t\t\t<div class=\"num\" id=\"fknum\" >{{userInfo.card}}张</div>\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"gameTitle\"></div>\n" +
    "\t\t<div class=\"game\">\n" +
    "\t\t\t<div class=\"img0 img\" v-on:click=\"showGame(1)\"></div>\n" +
    "\t\t\t<div class=\"img1 img\" v-on:click=\"showGame(2)\"></div>\n" +
    "\t\t\t<div class=\"img2 img\" v-on:click=\"showGame(3)\"></div>\n" +
    "\t\t\t<div class=\"img3 img\" v-on:click=\"showGame(4)\"></div>\n" +
    "\t\t\t<div class=\"img33 img\" v-on:click=\"showGame(5)\"></div>\n" +

    "\t\t\t<div class=\"img7 img\" v-on:click=\"send('gameserver',{id:6})\"></div>\n" +
    "\t\t\t<div class=\"img8 img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"img9 img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"img13 img\" v-on:click=\"send('gameserver',{id:26})\"></div>\n" +
    "\t\t\t<div class=\"img15 img\" v-on:click=\"send('gameserver',{id:35})\"></div>\n" +
    "\t\t\t<div class=\"img27 img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"free0 free\" v-on:click=\"showGame(1)\" v-show=\"freeGames[5]==1||freeGames[9]==1||freeGames[10]==1||freeGames[14]==1||freeGames[15]==1\"></div>\n" +
    "\t\t\t<div class=\"free1 free\" v-on:click=\"showGame(2)\" v-show=\"freeGames[1]==1||freeGames[16]==1\"></div>\n" +
    "\t\t\t<div class=\"free2 free\" v-on:click=\"showGame(3)\" v-show=\"freeGames[12]==1||freeGames[12]==1||freeGames[17]==1\"></div>\n" +
    "\t\t\t<div class=\"free7 free\" v-on:click=\"\" v-show=\"freeGames[11]==1\"></div>\n" +
    "\t\t\t<div class=\"free8 free\" v-on:click=\"\" v-show=\"freeGames[6]==1\"></div>\n" +
    "\t\t\t<div class=\"free9 free\" v-on:click=\"\" v-show=\"freeGames[2]==1\"></div>\n" +
    "\t\t\t<div class=\"free13 free\" v-on:click=\"\" v-show=\"freeGames[18]==1\"></div>\n" +
    "\t\t\t<div class=\"free14 free\" v-on:click=\"\" v-show=\"freeGames[19]==1\"></div>\n" +
    "\t\t\t<div class=\"free15 free\" v-on:click=\"\" v-show=\"freeGames[20]==1\"></div>\n" +

    "\t\t</div>\n" +
    "\t\t<div class=\"partBack partBack1\" v-on:click=\"hideGame(1)\"></div> \n" +
    "\t\t<div class=\"partBack partBack2\" v-on:click=\"hideGame(2)\"></div> \n" +
    "\t\t<div class=\"partBack partBack3\" v-on:click=\"hideGame(3)\"></div> \n" +
    "\t\t<div class=\"partBack partBack4\" v-on:click=\"hideGame(4)\"></div> \n" +
    "\t\t<div class=\"partBack partBack5\" v-on:click=\"hideGame(5)\"></div> \n" +

    "\t\t<div  class=\"bullPart part hide\">\n" +
    "\t\t\t<div class=\"hidePart\" v-on:click=\"hideGame(1)\"></div>\n" +
    "\t\t\t<div class=\"imgB img\" v-on:click=\"send('gameserver',{id:1})\"></div>\n" +
    "\t\t\t<div class=\"imgB9 img\" v-on:click=\"send('gameserver',{id:2})\"></div>\n" +
    "\t\t\t<div class=\"imgB98 img\" v-on:click=\"send('gameserver',{id:14})\"></div>\n" +
    "\t\t\t<div class=\"imgB12 img\" v-on:click=\"send('gameserver',{id:10})\"></div>\n" +
    "\t\t\t<div class=\"imgBf img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgBn img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgFb img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgBr img\" v-on:click=\"\"></div>\n" +

    "\t\t</div>\t\t\n" +
    "\t\t<div  class=\"flowerPart part hide\">\n" +
    "\t\t\t<div class=\"hidePart\" v-on:click=\"hideGame(2)\"></div>\n" +
    "\t\t\t<div class=\"imgF img\" v-on:click=\"send('gameserver',{id:5})\"></div>\n" +
    "\t\t\t<div class=\"imgF9 img\" v-on:click=\"send('gameserver',{id:16})\"></div>\n" +
    "\t\t\t<div class=\"imgBF img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgFF img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgSF img\" v-on:click=\"\"></div>\n" +
  "\t\t</div>\t\t\n" +
    "\t\t<div  class=\"sangongPart part hide\">\n" +
    "\t\t\t<div class=\"hidePart\" v-on:click=\"hideGame(3)\"></div>\n" +
    "\t\t\t<div class=\"imgSj img\" v-on:click=\"send('gameserver',{id:17})\"></div>\n" +
    "\t\t\t<div class=\"imgS img\" v-on:click=\"send('gameserver',{id:3})\"></div>\n" +
    "\t\t\t<div class=\"imgS9 img\" v-on:click=\"send('gameserver',{id:4})\"></div>\n" +
    "\t\t\t<div class=\"imgS1 img\" v-on:click=\"\"></div>\n" +
    "\t\t\t<div class=\"imgSgb img\" v-on:click=\"\"></div>\n" +
      
    "\t\t</div>\n" +
    "<div class=\"paijiuPart part hide\"><div class=\"hidePart\"></div> <div class=\"imgPj8 img\"></div> <div class=\"imgPj9 img\" v-on:click=\"send('gameserver',{id:27})\"></div></div>"+
    "\t\t\n" +
    "\t\t<div class=\"createRoom\" id=\"room\" v-show=\"createInfo.isShow>0\">\n" +
    "\t\t\t<div class=\"createRoomBack\"></div>\n" +
    "\t\t\t<div class=\"mainPart\" >\t\t\t\n" +
    "\t\t\t\t<div  class=\"createB\"></div>\n" +
    "\t\t\t\t<div class=\"createTitle\">\n" +
    "\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/createroom2.png\" />\n" +
    "\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/cancel.png\" class=\"cancelCreate\" v-on:click=\"cancelCreate()\" />\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==3\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull.banker_mode==3]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerMode(3)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull.banker3+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">牛牛<br>上庄</div>\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull.banker_mode==5]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerMode(5)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull.banker5+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">固定<br>庄家</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull.banker_mode==1]\" style=\"left: 18.45vh;\" v-on:click=\"selectBankerMode(1)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull.banker1+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull.banker_mode==2]\" style=\"left: 27vh;\" v-on:click=\"selectBankerMode(2)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull.banker2+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull.banker_mode==4]\" style=\"left: 35.55vh;\" v-on:click=\"selectBankerMode(4)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull.banker4+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">通比<br>牛牛</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==5\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9.banker_mode==3]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerMode9(3)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9.banker3+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">牛牛<br>上庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9.banker_mode==5]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerMode9(5)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9.banker5+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">固定<br>庄家</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9.banker_mode==1]\" style=\"left: 18.45vh;\" v-on:click=\"selectBankerMode9(1)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9.banker1+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9.banker_mode==2]\" style=\"left: 27vh;\" v-on:click=\"selectBankerMode9(2)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9.banker2+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9.banker_mode==4]\" style=\"left: 35.55vh;\" v-on:click=\"selectBankerMode9(4)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9.banker4+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">通比<br>牛牛</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==11\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9_8.banker_mode==3]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerMode9_8(3)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9_8.banker3+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">牛牛<br>上庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9_8.banker_mode==5]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerMode9_8(5)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9_8.banker5+'.png'\" >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">固定<br>庄家</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9_8.banker_mode==1]\" style=\"left: 18.45vh;\" v-on:click=\"selectBankerMode9_8(1)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9_8.banker1+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9_8.banker_mode==2]\" style=\"left: 27vh;\" v-on:click=\"selectBankerMode9_8(2)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9_8.banker2+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.bull9_8.banker_mode==4]\" style=\"left: 35.55vh;\" v-on:click=\"selectBankerMode9_8(4)\">\n" +
    "\t\t\t\t\t\t<img v-bind:src=\"'http://goss.fexteam.com/files/d_25/images/common/banker_'+createInfo.bull9_8.banker4+'.png'\"  >\n" +
    "\t\t\t\t\t\t<div  class=\"title\">通比<br>牛牛</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==7\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.scroll.banker_mode==1]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerModeS(1)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/banker_selected.png\"  v-if=\"createInfo.scroll.banker_mode==1\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/banker_unselected.png\"  v-if=\"createInfo.scroll.banker_mode!=1\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.scroll.banker_mode==2]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerModeS(2)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/banker_selected.png\"  v-if=\"createInfo.scroll.banker_mode==2\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_25/images/common/banker_unselected.png\"  v-if=\"createInfo.scroll.banker_mode!=2\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">固定<br>庄家</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==8\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong.banker_mode==1]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerModeSangong(1)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"   v-if=\"createInfo.sangong.banker_mode==1\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.sangong.banker_mode!=1\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong.banker_mode==4]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerModeSangong(4)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\" v-if=\"createInfo.sangong.banker_mode==4\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"   v-if=\"createInfo.sangong.banker_mode!=4\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">经典<br>三公</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong.banker_mode==2]\" style=\"left: 18.45vh;display: none;\" v-on:click=\"selectBankerModeSangong(2)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\" v-if=\"createInfo.sangong.banker_mode==2\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"   v-if=\"createInfo.sangong.banker_mode!=2\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==9\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong9.banker_mode==1]\" style=\"left: 1.35vh;\" v-on:click=\"selectBankerModeSangong9(1)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\" v-if=\"createInfo.sangong9.banker_mode==1\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.sangong9.banker_mode!=1\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong9.banker_mode==4]\" style=\"left: 9.9vh;\" v-on:click=\"selectBankerModeSangong9(4)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"  v-if=\"createInfo.sangong9.banker_mode==4\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.sangong9.banker_mode!=4\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">经典<br>三公</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.sangong9.banker_mode==2]\" style=\"left: 18.45vh;\" v-on:click=\"selectBankerModeSangong9(2)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"  v-if=\"createInfo.sangong9.banker_mode==2\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.sangong9.banker_mode!=2\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==13\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.jixiang.banker_mode==1]\" style=\"left:18.45vh;display: none;\" v-on:click=\"selectBankerModeJixiang(1)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\" v-if=\"createInfo.jixiang.banker_mode==1\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.jixiang.banker_mode!=1\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.jixiang.banker_mode==4]\" style=\"left: 9.9vh;display: none;\" v-on:click=\"selectBankerModeJixiang(4)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"  v-if=\"createInfo.jixiang.banker_mode==4\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.jixiang.banker_mode!=4\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">经典<br>三公</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.jixiang.banker_mode==2]\" style=\"left: 1.35vh\" v-on:click=\"selectBankerModeJixiang(2)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"  v-if=\"createInfo.jixiang.banker_mode==2\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.jixiang.banker_mode!=2\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectBankerMode\" v-if=\"createInfo.isShow==15\">\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.paijiu.banker_mode==1]\" style=\"left:9.9vh;\" v-on:click=\"selectBankerModePaijiu(1)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\" v-if=\"createInfo.paijiu.banker_mode==1\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.paijiu.banker_mode!=1\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">自由<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div v-bind:class=\"{true: 'bankerSelected', false: 'bankerUnSelected'}[createInfo.paijiu.banker_mode==2]\" style=\"left: 1.35vh\" v-on:click=\"selectBankerModePaijiu(2)\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_selected.png\"  v-if=\"createInfo.paijiu.banker_mode==2\">\n" +
    "\t\t\t\t\t\t<img src=\"http://goss.fexteam.com/files/d_26/images/common/banker_unselected.png\"  v-if=\"createInfo.paijiu.banker_mode!=2\">\n" +
    "\t\t\t\t\t\t<div  class=\"title\">明牌<br>抢庄</div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"blueBack\">\n" +
    "\t\t\t\t\t<div class=\"selectPartTop\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectTitleTop\">创建房间,游戏未进行,不消耗房卡</div>\n" +
    "\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"flowerRull\" v-if=\"createInfo.isShow==1\">\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(1,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.chip_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >2/4,4/8,8/16,10/20</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.chip_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >2/4,5/10,10/20,20/40</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.pkvalue1==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >100分以下不能比牌</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.pkvalue2==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >闷牌，全场禁止比牌</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.ticket_count==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[1]==0\">10局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[1]==1\">10局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.ticket_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[1]==0\">20局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[1]==1\">20局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">上限：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,0)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.upper_limit==0\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,500)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.upper_limit==500\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">500</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,1000)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"v-show=\"createInfo.flower.upper_limit==1000\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">1000</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,2000)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower.upper_limit==2000\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">2000</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[1]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"flower9Rull\" v-if=\"createInfo.isShow==12\">\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(1,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.chip_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >2/4,4/8,8/16,10/20</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.chip_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >2/4,5/10,10/20,20/40</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.pkvalue1==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >100分以下不能比牌</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.pkvalue2==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >闷牌，全场禁止比牌</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.ticket_count==2\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[16]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[16]==1\">12局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,4)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.ticket_count==4\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[16]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[16]==1\">24局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">上限：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,0)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.upper_limit==0\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,500)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.upper_limit==500\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">500</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,1000)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"v-show=\"createInfo.flower9.upper_limit==1000\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">1000</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(4,2000)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.flower9.upper_limit==2000\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">2000</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[16]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"landlordRull\" v-if=\"createInfo.isShow==2\">\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,5)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.base_score==5\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,10)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.base_score==10\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">10分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.ask_mode==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">轮流问地主</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t\t\t<div style=\"height: 4.5vh;\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.ask_mode==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">随机问地主</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.ticket_count==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[2]==0\">6局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[2]==1\">6局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.landlord.ticket_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[2]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[2]==1\">12局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[2]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"bullRull\" v-if=\"createInfo.isShow==3\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"createInfo.bull.banker_mode!=4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-show=\"createInfo.bull.banker_mode==4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,4)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">10分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,5)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.score_type==5\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">20分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x3牛九x2牛八x2</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x4牛九x3牛八x2牛七x2</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.is_cardfive==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛(5倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛(6倍)</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛(8倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[5]==0\">10局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[5]==1\">10局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[5]==0\">20局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[5]==1\">20局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.bull.banker_mode==5\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.banker_score==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >100</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"isShowBull6==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">倍数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,1)\" v-show=\"dealerNum!=16\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，2，4，5</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,4)\" v-show=\"dealerNum==16\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.bet_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，2，3，5</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，3，5，8</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull.bet_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >2，4，6，10</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[5]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"majiangRull\" v-if=\"createInfo.isShow==4\">\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">鬼牌：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(1,0)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.joker==0\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">无鬼牌</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.joker==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">翻牌当鬼</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.joker==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">红中当鬼</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">抓马：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,0)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==0\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">不跑马</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">2匹</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\t\t\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,4)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==4\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">4匹</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div>\t\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,6)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==6\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">6匹</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,8)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==8\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">8匹</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.horse_count==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"selectText\">爆炸马</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.qianggang==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">抢杠全包</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(5)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.chengbao==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">杠爆全包</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.ticket_count==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[6]==0\">8局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[6]==1\">8局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.majiang.ticket_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[6]==0\">16局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[6]==1\">16局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[6]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"bullRull\" v-if=\"createInfo.isShow==5\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"createInfo.bull9.banker_mode!=4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-show=\"createInfo.bull9.banker_mode==4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,4)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">10分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,5)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.score_type==5\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">20分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x3牛九x2牛八x2</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x4牛九x3牛八x2牛七x2</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.is_cardfive==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛(5倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛(6倍)</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛(8倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[9]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[9]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[9]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[9]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.bull9.banker_mode==5\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.banker_score==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1000</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"isShowBull9==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">倍数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,4)\" v-show=\"dealerNum==16\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.bet_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，2，3，5</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,1)\" v-show=\"dealerNum!=16\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，2，4，5</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，3，5，8</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9.bet_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >2，4，6，10</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[9]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"bullRull\" v-if=\"createInfo.isShow==6\">\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.rule_type==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x3牛九x2牛八x2</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x4牛九x3牛八x2牛七x2</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,4)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.is_cardfour==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >银花牛(5倍)</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.is_cardfive==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛(6倍)</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛(7倍)</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛(8倍)</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">锅底：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >100</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.banker_score==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >200</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullfight.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[10]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"scrollRull\" v-if=\"createInfo.isShow==7\">\t\t\t\n" +
    "\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-if=\"createInfo.scroll.banker_mode==2\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >500分</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >1000分</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div  style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >1500分</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,4)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.score_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >无限制</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-if=\"createInfo.scroll.banker_mode==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(3,1)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.chip_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >10,20,30,50</div>\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(3,2)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.chip_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >20,30,50,80</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div  style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(3,3)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.chip_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >30,50,80,100</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >无二八杠</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.rule_type==2\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >二八杠2倍</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,3)\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.rule_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" >二八杠3倍</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!-- <div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.ticket_count==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==0\">4局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==1\">4局</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t<div style=\"height: 4.5vh;\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" > </div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.scroll.ticket_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==0\">8局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==1\">8局</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div> -->\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.scroll.ticket_count==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==0\">4局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==1\">4局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.scroll.ticket_count==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==0\">8局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[11]==1\">8局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[11]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"sangongRull\" v-if=\"createInfo.isShow==8\">\t\t\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" v-show=\"createInfo.sangong.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" v-show=\"createInfo.sangong.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,4)\" v-show=\"createInfo.sangong.banker_mode==4&&0\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.score_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">10分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,5)\" v-show=\"createInfo.sangong.banker_mode==4&&0\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.score_type==5\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">20分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"0\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >七点1倍</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >七点2倍</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.is_cardjoker==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >天公x10,雷公x7,地公x5</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.is_cardbao9==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >暴玖x9</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[12]==0\">10局X1房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[12]==1\">10局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[12]==0\">20局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[12]==1\">20局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.sangong.banker_mode==5\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.banker_score==2\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >100</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[12]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t</div>\n" +
    "\t\n" +
    "\t\t\t\t\t<div class=\"sangongRull\" v-if=\"createInfo.isShow==9\">\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" v-show=\"createInfo.sangong9.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" v-show=\"createInfo.sangong9.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" v-show=\"createInfo.sangong9.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" v-show=\"createInfo.sangong9.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.sangong9.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.is_cardjoker==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >天公x10,雷公x7,地公x5</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.is_cardbao9==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >暴玖x9</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.ticket_type==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[13]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[13]==1\">12局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.sangong9.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[13]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[13]==1\">24局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.sangong9.banker_mode==5\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.sangong9.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.sangong9.banker_score==2\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >100</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.sangong9.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.sangong9.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[13]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"jixiangRull\" v-if=\"createInfo.isShow==13\">\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" v-show=\"createInfo.jixiang.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" v-show=\"createInfo.jixiang.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" v-show=\"createInfo.jixiang.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" v-show=\"createInfo.jixiang.banker_mode!=4||1\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.jixiang.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.is_cardbao9==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >暴玖x9</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.ticket_type==1\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[17]==0\">12局X3房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[17]==1\">12局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.jixiang.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[17]==0\">24局X6房卡</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[17]==1\">24局</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.jixiang.banker_mode==5\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.jixiang.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.jixiang.banker_score==2\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >100</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.jixiang.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.jixiang.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[17]==1\">\n" +
    "\t\t\t\t\t        <div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t        </div>\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<div class=\"bullRull\" v-if=\"createInfo.isShow==10\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" >\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">模式：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">明牌抢庄</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" >\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull12.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x3牛九x2牛八x2</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x4牛九x3牛八x2牛七x2</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull12.is_cardfive==1\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛(5倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛(6倍)</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛(8倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[14]==0\">12局X3房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[14]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bull12.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[14]==0\">24局X6房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[14]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"isShowBull12==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">倍数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull12.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，2，4，5</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull12.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1，3，5，8</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(6,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull12.bet_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >2，4，6，10</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[14]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"bullRull\" v-if=\"createInfo.isShow==11\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" v-show=\"createInfo.bull9_8.banker_mode!=4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-show=\"createInfo.bull9_8.banker_mode==4\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,4)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">10分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,5)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.score_type==5\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">20分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x3牛九x2牛八x2</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >牛牛x4牛九x3牛八x2牛七x2</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.is_cardfive==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛(5倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛(6倍)</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛(8倍)</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[15]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[15]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[15]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[15]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"createInfo.bull9_8.banker_mode==5\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上庄：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(5,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.banker_score==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >无</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.banker_score==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.banker_score==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" style=\"margin-left: 1.5vh;\" v-on:click=\"selectChange(5,4)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bull9_8.banker_score==4\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1000</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[15]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"fish\" v-if=\"createInfo.isShow==14\">\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" >\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\t\t\n" +
    "\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\"  style=\" width: 70%;\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\">5,10,20,50</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"selectText\">10,20,50,100</div>\n" +
    "\t\t\t\t\t\t\t</div>\t\n" +
    "\t\t\n" +
    "\t\t\t\t\t</div>\t\t\t\t\t\n" +
    "\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" >\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">上限：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.limit_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">100</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.limit_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">300</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(2,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.limit_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">500</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\" style=\"display: none;\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.rule_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >三个相同3倍，两个相同2倍</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.rule_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >三个相同5倍，两个相同3倍</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[18]==0\">12局X3房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[18]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.fish.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[18]==0\">24局X6房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[18]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[18]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"paijiu\" v-if=\"createInfo.isShow==15\">\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\" >\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">底分：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,1)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.score_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">1分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,6)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.score_type==6\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">2分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.paijiu.score_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">3分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,7)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.score_type==7\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">4分</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.score_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\">5分</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:18vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">规则：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(2,2)\">\n" +
    "\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >至尊10倍，双天双地双人8倍，对子6倍，天王地王5倍，天杠地杠天高九地高九4倍，九点3倍，八点2倍</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\">\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >丁三牌及二四牌可以互换使用</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[19]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[19]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.paijiu.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[19]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[19]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[19]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\t\t\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"blackjack\" v-if=\"createInfo.isShow==16\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(1,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.blackjack.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >10,20,50,100</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.blackjack.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >20,50,100,200</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.blackjack.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[20]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[20]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.blackjack.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[20]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[20]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[20]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"bullNew\" v-if=\"createInfo.isShow==17\">\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">筹码：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\" >\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(1,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.bet_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >300</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,2)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.bet_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >500</div>\n" +
    "\t\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\" v-on:click=\"selectChange(1,3)\" >\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.bet_type==3\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >1000</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:9vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">牌型：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.is_cardfive==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五花牛</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.is_cardbomb==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >炸弹牛</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(3,3)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\" v-show=\"createInfo.bullNew.is_cardtiny==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" >五小牛</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\t\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\">局数：</div>\n" +
    "\t\t\t\t\t<div class=\"selectList\">\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,1)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bullNew.ticket_type==1\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[21]==0\">12局X2房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[21]==1\">12局</div>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"selectItem\"  v-on:click=\"selectChange(4,2)\">\n" +
    "\t\t\t\t\t\t\t<div class=\"selectBox\" ></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"img\"  v-show=\"createInfo.bullNew.ticket_type==2\"></div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[21]==0\">24局X4房卡</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"selectText\" v-if=\"freeGames[21]==1\">24局</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"selectPart\" style=\"height:4.5vh;\" v-if=\"freeGames[21]==1\">\n" +
    "\t\t\t\t\t<div class=\"selectTitle\" style=\"width: 100%;left: 0;text-align: center;color: #d7291c;\">{{freeText}}</div>\n" +
    "\t\t\t\t</div>\t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div class=\"createCommit\" v-on:click=\"createCommit()\" v-show=\"isFreeCommit==0\">确定</div>\n" +
    "\t\t\t\t<div class=\"freeCreateCommit\" v-on:click=\"createCommit()\" v-show=\"isFreeCommit==1\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t<div class=\"alert\" v-show=\"isShowAlert\">\n" +
    "\t\t\t<div class=\"alertBack\"></div>\n" +
    "\t\t\t<div class=\"mainPart\">\n" +
    "\t\t\t\t<div class=\"backImg\">\n" +
    "\t\t\t\t\t<div class=\"blackImg\"></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"alertText\" >{{alertText}}</div>\n" +
    "\t\t\t\t<div v-show=\"alertType==1\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"closeAlert()\">确定</div>\n" +
    "\t\t\t\t</div>\t\t\t\n" +
    "\t\t\t\t<div v-show=\"alertType==2\">\n" +
    "\t\t\t\t\t<div class=\"buttonLeft\" v-on:click=\"home()\">返回首页</div>\n" +
    "\t\t\t\t\t<div class=\"buttonRight\" v-on:click=\"createRoom()\">创建房间</div>\n" +
    "\t\t\t\t</div>\t\t\t\n" +
    "\t\t\t\t<div v-show=\"alertType==3\">\n" +
    "\t\t\t\t\t<div class=\"buttonLeft\" v-on:click=\"home()\">返回首页</div>\n" +
    "\t\t\t\t\t<div class=\"buttonRight\" v-on:click=\"closeAlert()\">取消</div>\n" +
    "\t\t\t\t</div>\t\t\t\n" +
    "\t\t\t\t<div v-show=\"alertType==4\">\n" +
    "\t\t\t\t\t<div class=\"buttonLeft\" v-on:click=\"createRoom()\">创建房间</div>\n" +
    "\t\t\t\t\t<div class=\"buttonRight\" v-on:click=\"sitDown()\">加入游戏</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div v-show=\"alertType==5\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"getCards()\">领取</div>\n" +
    "\t\t\t\t</div>\t\t\t\t\n" +
    "\t\t\t\t<div v-show=\"alertType==6\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"closeAlert()\">确定</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div v-show=\"alertType==23\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"finishBindPhone()\">确定</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div v-show=\"alertType==31\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"reloadView()\">确定</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div v-show=\"alertType==41\">\n" +
    "\t\t\t\t\t<div class=\"buttonMiddle\" v-on:click=\"confirmMessage()\">确定</div>\n" +
    "\t\t\t\t</div>  \t\t\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div id=\"validePhone\" v-show=\"isAuthPhone==1\">\n" +
    "\t\t\t<div class=\"phoneMask\"  v-on:click=\"hideBindPhone()\"></div>\n" +
    "\t\t\t<div class=\"phoneFrame\" >\n" +
    "\t\t\t\t<div class=\"rest\"></div>\n" +
    "\t\t\t\t<div class=\"notyText\" >验证手机号，房卡可找回。</div>\n" +
    "\t\t\t\t<div class=\"rest\"></div>\n" +
    "\t\t\t\t<div class=\"box\">\n" +
    "\t\t\t\t\t<input  v-on:input=\"phoneChange()\" v-model=\"sPhone\" type=\"number\" name=\"phone\" placeholder=\"输入手机号\"  >\n" +
    "\t\t\t\t\t<div id=\"authcode\" v-on:click=\"getAuthcode()\">\n" +
    "\t\t\t\t\t\t{{authcodeText}}\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"smspwd\" >\n" +
    "\t\t\t\t\t<input  v-model=\"sAuthcode\" type=\"number\" name=\"phone1\" placeholder=\"输入验证码\" >\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"rest\"></div>\n" +
    "\t\t\t\t<div class=\"commitButton\"  v-on:click=\"bindPhone()\">\n" +
    "\t\t\t\t\t<div class=\"inner\">立即绑定</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div style=\"height: 4vw;\"></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"waiting\" v-show=\"is_operation\">\n" +
    "\t\t\t<div class=\"waitingBack\"></div>\n" +
    "\t\t\t<div class=\"load4\">\n" +
    "\t\t\t\t<div class=\"loader\">Loading...</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div style=\"position: fixed;top: 0;left: 0;position: absolute;width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.4);z-index: 99998\" v-on:click=\"hideDogRP()\" v-show=\"isShowDogRP==1\">\n" +
    "\t\t</div>\n" +
    "\t\t<div style=\"position: fixed;top: 45%;left: 50%;width: 70vw;height: 105vw;margin-top: -55vw;margin-left: -35vw;z-index: 99999;backface-visibility:inherit;-webkit-backface-visibility:inherit;\" v-show=\"isShowDogRP==1\">\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/images/activity/dogrp_bg_get2.png\" style=\"position: absolute;width: 100%;height: 100%;\" v-show=\"isGetDogRP==0\">\n" +
    "\t\t\t<img id=\"imgOpenRP\" src=\"http://goss.fexteam.com/files/images/activity/dogrp_get1.png\" style=\"position: absolute;top: 57%;left: 50%;margin-left: -10vw;margin-top: -10vw;width: 20vw;height: 20vw;backface-visibility:unset;-webkit-backface-visibility:unset;\" v-show=\"isGetDogRP==0\" v-on:click=\"getDogRP()\">\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/images/activity/dogrp_bg_isget1.png\" style=\"position: absolute;width: 100%;height: 100%;\" v-show=\"isGetDogRP==1\">\n" +
    "\t\t\t<img src=\"http://goss.fexteam.com/files/images/activity/dogrp_isget.png\" style=\"position: absolute;top: 57%;left: 50%;margin-left: -20vw;margin-top: -5vw;width: 40vw;height: 10vw;\" v-show=\"isGetDogRP==1\" v-on:click=\"hideDogRP()\">\n" +
    "\t\t\t<div style=\"position: absolute;top: 25vw;width: 100%;height: 20vw;line-height: 20vw;text-align: center;font-size: 3vh;color: #d0955a;\" v-show=\"isGetDogRP==1\">\n" +
    "\t\t\t\t{{dogRPText}}\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div v-show=\"isShowNoty&&isNewNoty==0\" class=\"noty\" style=\"width: 100vw;height: 12vw\">\n" +
    "\t\t\t<img  src=\"http://goss.fexteam.com/files/d_13/images/common/alert_icon.png\" style=\"left: 4vw;top: 3vw;width: 6vw;height: 6vw;\" />\n" +
    "\t\t</div>\n" +
    "\t\t<div v-if=\"isShowNoty&&isNewNoty==0\" id=\"marquee\" style=\"height: 12vw;line-height: 12vw;\">{{notyMsg}}</div>\n" +
    "\n" +
    "\t\t<div v-show=\"isShowNoty&&isNewNoty==1\" class=\"noty\" style=\"background-color: rgba(0,0,0,0);width: 100vw;height: 13.8vw\">\n" +
    "\t\t\t<img  src=\"http://goss.fexteam.com/files/images/common/gamenoty.png\" style=\"left: 0;top: 0;width: 104vw;height: 15vw\" />\n" +
    "\t\t</div>\n" +
    "\t\t<div v-if=\"isShowNoty&&isNewNoty==1\" id=\"marquee\" style=\"height: 10vw;line-height: 10vw;\">{{notyMsg}}</div>\t\n" +
    "    </div>";
OutWord();
var freeGames = {
    1 : 0,
    2 : 0,
    5 : 0,
    6 : 0,
    9 : 0,
    10 : 0,
    11 : 0,
    12 : 0,
    13 : 0,
    14 : 0,
    15 : 0,
    16 : 0,
    17 : 0,
    18 : 0,
    19 : 0,
    20 : 0,
    21 : 0
};
if (void 0 != globalData.freeGames) for (var i in globalData.freeGames) {
    var value = globalData.freeGames[i];
    freeGames[i] = value
}
var appData = {
        freeText: freeText,
        isFreeCommit: 1,
        isGetDogRP: 0,
        isShowDogRP: 0,
        canGetDogRP: 1,
        dogRPText: "",
        isNewNoty: globalData.isNewNoty,
        freeGames: freeGames,
        isShowBull6: isShowBull6,
        isShowBull9: isShowBull9,
        isShowBull12: isShowBull12,
        width: window.innerWidth,
        userInfo: {
            id: userData.accountId,
            name: userData.nickname,
            avatar: userData.avatar,
            card: globalData.card
        },
        socket: {
            flower: socketData.flower,
            flower9: socketData.flower9,
            landlord: socketData.landlord,
            bull: socketData.bull,
            majiang: socketData.majiang,
            bull9: socketData.bull9,
            bullfight: socketData.bullfight,
            scroll: socketData.scroll,
            sangong: socketData.sangong,
            sangong9: socketData.sangong9,
            bull12: socketData.bull12,
            bull9_8: socketData.bull9_8,
            jixiang: socketData.jixiang,
            paijiu: socketData.paijiu,
            fish: socketData.fish,
            blackjack: socketData.blackjack,
            bullNew: socketData.bullNew
        },
        isShowNewgame: globalData.isShowNewgame,
        dealerNum: globalData.dealerNum,
        socketStatus: 0,
        roomCardInfo: new Array,
        activity: new Array,
        isShowAlert: !1,
        alertType: 0,
        alertText: "",
        isAuthPhone: userData.isAuthPhone,
        authCardCount: userData.authCardCount,
        phone: userData.phone,
        sPhone: "",
        sAuthcode: "",
        authcodeType: 1,
        authcodeText: "发送验证码",
        authcodeTime: 60,
        phoneType: 1,
        phoneText: "绑定手机",
        isShowNoty: !1,
        notyMsg: "",
        is_operation: !1,
        socket_url: "",
        socket_type: "",
        createInfo: {
            isShow: 0,
            flower: {
                chip_type: 1,
                ticket_count: 1,
                pkvalue1: 0,
                pkvalue2: 0,
                upper_limit: 1e3
            },
            flower9: {
                chip_type: 1,
                ticket_count: 2,
                pkvalue1: 0,
                pkvalue2: 0,
                upper_limit: 1e3
            },
            landlord: {
                ticket_count: 1,
                base_score: 10,
                ask_mode: 1
            },
            majiang: {
                joker: 0,
                horse_count: 0,
                qianggang: 0,
                ticket_count: 1,
                chengbao: 0
            },
            bull: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0,
                banker_mode: 2,
                banker_score: 4,
                banker1: "unselected",
                banker2: "selected",
                banker3: "unselected",
                banker4: "unselected",
                banker5: "unselected",
                banker5: "unselected",
                bet_type: 1
            },
            bull9: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0,
                banker_mode: 2,
                banker_score: 4,
                banker1: "unselected",
                banker2: "selected",
                banker3: "unselected",
                banker4: "unselected",
                banker5: "unselected",
                bet_type: 1
            },
            bull9_8: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0,
                banker_mode: 2,
                banker_score: 4,
                banker1: "unselected",
                banker2: "selected",
                banker3: "unselected",
                banker4: "unselected",
                banker5: "unselected",
                bet_type: 1
            },
            bullfight: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0,
                is_cardfour: 0,
                banker_mode: 1,
                banker_score: 1
            },
            scroll: {
                ticket_count: 1,
                score_type: 3,
                chip_type: 3,
                banker_mode: 2,
                rule_type: 1
            },
            sangong: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                banker_mode: 1,
                banker_score: 1,
                is_cardjoker: 0,
                is_cardbao9: 0
            },
            sangong9: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                banker_mode: 2,
                banker_score: 1,
                is_cardjoker: 0,
                is_cardbao9: 0
            },
            jixiang: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                banker_mode: 2,
                banker_score: 1,
                is_cardjoker: 0,
                is_cardbao9: 0
            },
            paijiu: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 2,
                banker_mode: 2
            },
            fish: {
                ticket_type: 1,
                bet_type: 1,
                limit_type: 1,
                rule_type: 2
            },
            blackjack: {
                ticket_type: 1,
                bet_type: 1
            },
            bullNew: {
                ticket_type: 1,
                bet_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0
            },
            bull12: {
                ticket_type: 1,
                score_type: 3,
                rule_type: 1,
                is_cardfive: 0,
                is_cardbomb: 0,
                is_cardtiny: 0,
                banker_mode: 2,
                banker_score: 4,
                banker1: "unselected",
                banker2: "selected",
                banker3: "unselected",
                banker4: "unselected",
                banker5: "unselected",
                bet_type: 1
            }
        },
        select: 1,
        ticket_count: 20
    },
    httpModule = {
        getSFRP: function() {
            var e = {
                dealerNum: globalData.dealerNum,
                accountId: userData.accountId,
                s: globalData.session
            };
            Vue.http.post(globalData.rpUrl + "/sf/redPacket", e).then(function(e) {
                    var t = e.body;
                    setTimeout(function() {
                            $(".imgOpenRP").removeClass("transf"),
                                appData.canGetDogRP = 1,
                                0 == t.result ? (appData.isGetDogRP = 1, appData.userInfo.card = parseInt(appData.userInfo.card) + parseInt(t.data.ticket), appData.dogRPText = "房卡" + t.data.ticket + "张") : (appData.isGetDogRP = 1, appData.dogRPText = t.msg)
                        },
                        1e3)
                },
                function(e) {
                    appData.canGetDogRP = 1,
                        $(".imgOpenRP").removeClass("transf")
                })
        },
        checkPacket: function() {
            var e = {
                dealerNum: globalData.dealerNum,
                accountId: userData.accountId,
                s: globalData.session
            };
            Vue.http.post(globalData.rpUrl + "/sf/checkPacket", e).then(function(e) {
                    1 == e.body.data.hasPacket && (appData.isShowDogRP = 1)
                },
                function(e) {
                    console.log(e.body)
                })
        }
    };
httpModule.checkPacket(),
16 == appData.dealerNum && (appData.createInfo.bull.bet_type = 4, appData.createInfo.bull9.bet_type = 4),
    localStorage.createInfo ? (appData.createInfo = eval("(" + localStorage.createInfo + ")"), appData.createInfo.isShow = 0, void 0 === appData.createInfo.bull12 && (appData.createInfo.bull12 = {
        ticket_type: 1,
        score_type: 3,
        rule_type: 1,
        is_cardfive: 0,
        is_cardbomb: 0,
        is_cardtiny: 0,
        banker_mode: 2,
        banker_score: 4,
        banker1: "unselected",
        banker2: "selected",
        banker3: "unselected",
        banker4: "unselected",
        banker5: "unselected",
        bet_type: 1
    }), void 0 === appData.createInfo.bull9_8 && (appData.createInfo.bull9_8 = {
        ticket_type: 1,
        score_type: 3,
        rule_type: 1,
        is_cardfive: 0,
        is_cardbomb: 0,
        is_cardtiny: 0,
        banker_mode: 2,
        banker_score: 4,
        banker1: "unselected",
        banker2: "selected",
        banker3: "unselected",
        banker4: "unselected",
        banker5: "unselected",
        bet_type: 1
    }), void 0 === appData.createInfo.flower9 && (appData.createInfo.flower9 = {
        chip_type: 1,
        ticket_count: 2,
        pkvalue1: 0,
        pkvalue2: 0,
        upper_limit: 1e3
    }), void 0 === appData.createInfo.jixiang && (appData.createInfo.jixiang = {
        ticket_type: 1,
        score_type: 3,
        rule_type: 1,
        banker_mode: 2,
        banker_score: 1,
        is_cardjoker: 0,
        is_cardbao9: 0
    }), void 0 === appData.createInfo.paijiu && (appData.createInfo.paijiu = {
        ticket_type: 1,
        score_type: 3,
        rule_type: 2,
        banker_mode: 2
    }), void 0 === appData.createInfo.fish && (appData.createInfo.fish = {
        ticket_type: 1,
        bet_type: 1,
        limit_type: 1,
        rule_type: 2
    }), void 0 === appData.createInfo.blackjack && (appData.createInfo.blackjack = {
        ticket_type: 1,
        bet_type: 1
    }), void 0 === appData.createInfo.bullNew && (appData.createInfo.bullNew = {
        ticket_type: 1,
        bet_type: 1,
        is_cardfive: 0,
        is_cardbomb: 0,
        is_cardtiny: 0
    }), void 0 === appData.createInfo.bull.bet_type && (16 == globalData.dealerNum ? appData.createInfo.bull.bet_type = 4 : appData.createInfo.bull.bet_type = 1), void 0 === appData.createInfo.bull9.bet_type && (16 == globalData.dealerNum ? appData.createInfo.bull9.bet_type = 4 : appData.createInfo.bull9.bet_type = 1), void 0 === appData.createInfo.bull12.bet_type && (appData.createInfo.bull12.bet_type = 1)) : localStorage.createInfo = JSON.stringify(appData.createInfo);
var viewMethods = {
        hideDogRP: function() {
            1 == appData.isGetDogRP && (appData.isShowDogRP = 0)
        },
        getDogRP: function() {
            $("#imgOpenRP").addClass("transf"),
            1 == appData.canGetDogRP && (httpModule.getSFRP(), appData.canGetDogRP = 0, setTimeout(function() {
                    appData.canGetDogRP = 1,
                        $(".imgOpenRP").removeClass("transf")
                },
                5e3))
        },
        showGame: function(e) {
            1 == e ? ($(".bullPart").removeClass("hide"), $(".partBack1").show()) : 2 == e ? ($(".flowerPart").removeClass("hide"), $(".partBack2").show()) : 3 == e ? ($(".sangongPart").removeClass("hide"), $(".partBack3").show()) : 4 == e && ($(".paijiuPart").removeClass("hide"), $(".partBack4").show())
        },
        hideGame: function(e) {
            1 == e ? ($(".bullPart").addClass("hide"), $(".partBack1").hide()) : 2 == e ? ($(".flowerPart").addClass("hide"), $(".partBack2").hide()) : 3 == e ? ($(".sangongPart").addClass("hide"), $(".partBack3").hide()) : 4 == e && ($(".paijiuPart").addClass("hide"), $(".partBack4").hide())
        },
        initView: function() {
            FastClick.attach(document.body),
                $(".main").show(),
                $("#loading").hide();
            try {
                var data = eval("(" + appData.userInfo.roomCardInfo + ")");
                appData.roomCardInfo = data.concat();
                for (var i = 0; i < appData.roomCardInfo.length; i++) appData.roomCardInfo[i].num = i + 1,
                    appData.roomCardInfo[i].price = Math.ceil(appData.roomCardInfo[i].price);
                appData.roomCardInfo.length >= 1 && (appData.select = appData.roomCardInfo[0].goods_id)
            } catch(e) {}
        },
        waiting: function() {
            appData.is_operation = !0,
                setTimeout(function() {
                        appData.is_operation && (appData.is_operation = !1, viewMethods.showAlert(6, "创建房间失败，请重新创建"))
                    },
                    15e3)
        },
        finishBindPhone: function() {
            window.location.href = window.location.href + "&id=" + 1e4 * Math.random()
        },
        reloadView: function() {
            window.location.href = window.location.href + "&id=" + 1e4 * Math.random()
        },
        bindPhone: function() {
            var e = checkPhone(appData.sPhone),
                t = checkAuthcode(appData.sAuthcode);
            return 0 == e ? void setTimeout(function() {
                    viewMethods.showAlert(6, "手机号码有误，请重填")
                },
                0) : 0 == t ? void setTimeout(function() {
                    viewMethods.showAlert(6, "验证码有误，请重填")
                },
                0) : void viewMethods.bindPhoneHttp(appData.sPhone, appData.sAuthcode)
        },
        getAuthcode: function() {
            if (1 == appData.authcodeType) {
                if ("rgb(64, 112, 251)" == $("#authcode").css("background-color")) {
                    if (0 == checkPhone(appData.sPhone)) return void setTimeout(function() {
                            viewMethods.showAlert(6, "手机号码有误，请重填")
                        },
                        10);
                    viewMethods.getAuthcodeHttp(appData.sPhone)
                }
            }
        },
        confirmMessage: function() {
            appData.isShowAlert = !1,
                viewMethods.callbackMessageHttp()
        },
        callbackMessageHttp: function() {
            Vue.http.post(globalData.baseUrl + "game/callbackMessage", {
                account_id: userData.accountId,
                dealer_num: globalData.dealerNum,
                session: globalData.session
            }).then(function(e) {
                    console.log(data)
                },
                function(e) {
                    console.log(data)
                })
        },
        getAuthcodeHttp: function(e) {
            Vue.http.post(globalData.baseUrl + "account/getMobileSms", {
                phone: e,
                dealer_num: globalData.dealerNum,
                session: globalData.session
            }).then(function(e) {
                    logMessage(e.body),
                    0 == e.body.result && setTimeout(function() {
                            appData.authcodeTime = 60,
                                authcodeTimer(),
                                appData.authcodeType = 2
                        },
                        0)
                },
                function(e) {
                    logMessage(e.body)
                })
        },
        bindPhoneHttp: function(e, t) {
            Vue.http.post(globalData.baseUrl + "account/checkSmsCode", {
                phone: e,
                code: t,
                dealer_num: globalData.dealerNum,
                session: globalData.session
            }).then(function(e) {
                    logMessage(e.body);
                    var t = e.body;
                    0 == t.result ? setTimeout(function() {
                            appData.isAuthPhone = 0,
                                appData.phone = appData.sPhone,
                                t.data.account_id != appData.userInfo.id ? viewMethods.showAlert(23, t.result_message) : viewMethods.showAlert(6, t.result_message),
                                appData.userInfo.card = parseInt(appData.userInfo.card) + parseInt(t.data.card_count),
                                appData.sPhone = "",
                                appData.sAuthcode = ""
                        },
                        0) : setTimeout(function() {
                            viewMethods.showAlert(6, t.result_message)
                        },
                        0)
                },
                function(e) {
                    setTimeout(function() {
                            appData.authcodeTime = 0,
                                viewMethods.showAlert(6, "绑定失败")
                        },
                        0)
                })
        },
        phoneChange: function() {
            checkPhone(appData.sPhone) ? $("#authcode").css("background-color", "rgb(64,112,251)") : $("#authcode").css("background-color", "lightgray")
        },
        showAlert: function(e, t) {
            appData.alertType = e,
                appData.alertText = t,
                appData.isShowAlert = !0,
                $(".alertText").css("top", "90px"),
                setTimeout(function() {
                        var t = window.innerHeight,
                            a = $(".alertText").height(),
                            n = $(".alertText").height();
                        a < .15 * t && (a = .15 * t),
                        a > .8 * t && (a = .8 * t);
                        var i = a + .056 * t * 2 + .022 * t + .056 * t;
                        8 == e && (i = i - .022 * t - .056 * t);
                        var s = a + .034 * t * 2,
                            r = .022 * t + (s - n) / 2;
                        $(".alert .mainPart").css("height", i + "px"),
                            $(".alert .mainPart").css("margin-top", "-" + i / 2 + "px"),
                            $(".alert .mainPart .backImg .blackImg").css("height", s + "px"),
                            $(".alert .mainPart .alertText").css("top", r + "px")
                    },
                    0)
        },
        closeAlert: function() {
            1 == appData.alertType ? (appData.isShowAlert = !1, appData.is_connect || (appData.is_connect = !0)) : appData.isShowAlert = !1
        },
        createFlower: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(1),
                appData.createInfo.isShow = 1
        },
        createFlower9: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(16),
                appData.createInfo.isShow = 12
        },
        createLandlord: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(2),
                appData.createInfo.isShow = 2
        },
        createBull: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(5),
                appData.createInfo.isShow = 3
        },
        createBull9: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(9),
                appData.createInfo.isShow = 5
        },
        createBull9_8: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(15),
                appData.createInfo.isShow = 11
        },
        createMajiang: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(6),
                appData.createInfo.isShow = 4
        },
        createBullfight: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(10),
                appData.createInfo.isShow = 6
        },
        createScroll: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(11),
                appData.createInfo.isShow = 7
        },
        createSangong: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(12),
                appData.createInfo.isShow = 8
        },
        createSangong9: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(13),
                appData.createInfo.isShow = 9
        },
        createJixiang: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(17),
                appData.createInfo.isShow = 13
        },
        createPaijiu: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(19),
                appData.createInfo.isShow = 15
        },
        createFish: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(18),
                appData.createInfo.isShow = 14
        },
        createBlackjack: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(20),
                appData.createInfo.isShow = 16
        },
        createBullNew: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(21),
                appData.createInfo.isShow = 17
        },
        createBull12: function() {
            $(".createRoom .mainPart").css("height", ""),
                $(".createRoom .mainPart .blueBack").css("height", ""),
                appData.isFreeCommit = checkIsFreeCommit(14),
                appData.createInfo.isShow = 10
        },
        selectBankerModeSangong: function(e) {
            appData.createInfo.sangong.banker_mode = e
        },
        selectBankerModeSangong9: function(e) {
            appData.createInfo.sangong9.banker_mode = e
        },
        selectBankerModeJixiang: function(e) {
            appData.createInfo.jixiang.banker_mode = e
        },
        selectBankerModePaijiu: function(e) {
            appData.createInfo.paijiu.banker_mode = e
        },
        selectBankerMode: function(e) {
            1 == e ? (appData.createInfo.bull.score_type = 3, appData.createInfo.bull.banker1 = "selected", appData.createInfo.bull.banker2 = "unselected", appData.createInfo.bull.banker3 = "unselected", appData.createInfo.bull.banker4 = "unselected", appData.createInfo.bull.banker5 = "unselected") : 2 == e ? (appData.createInfo.bull.score_type = 3, appData.createInfo.bull.banker1 = "unselected", appData.createInfo.bull.banker2 = "selected", appData.createInfo.bull.banker3 = "unselected", appData.createInfo.bull.banker4 = "unselected", appData.createInfo.bull.banker5 = "unselected") : 3 == e ? (appData.createInfo.bull.score_type = 3, appData.createInfo.bull.banker1 = "unselected", appData.createInfo.bull.banker2 = "unselected", appData.createInfo.bull.banker3 = "selected", appData.createInfo.bull.banker4 = "unselected", appData.createInfo.bull.banker5 = "unselected") : 4 == e ? (appData.createInfo.bull.score_type = 4, appData.createInfo.bull.banker1 = "unselected", appData.createInfo.bull.banker2 = "unselected", appData.createInfo.bull.banker3 = "unselected", appData.createInfo.bull.banker4 = "selected", appData.createInfo.bull.banker5 = "unselected") : 5 == e && (appData.createInfo.bull.score_type = 3, appData.createInfo.bull.banker1 = "unselected", appData.createInfo.bull.banker2 = "unselected", appData.createInfo.bull.banker3 = "unselected", appData.createInfo.bull.banker4 = "unselected", appData.createInfo.bull.banker5 = "selected"),
                appData.createInfo.bull.banker_mode = e
        },
        selectBankerMode9: function(e) {
            1 == e ? (appData.createInfo.bull9.score_type = 3, appData.createInfo.bull9.banker1 = "selected", appData.createInfo.bull9.banker2 = "unselected", appData.createInfo.bull9.banker3 = "unselected", appData.createInfo.bull9.banker4 = "unselected", appData.createInfo.bull9.banker5 = "unselected") : 2 == e ? (appData.createInfo.bull9.score_type = 3, appData.createInfo.bull9.banker1 = "unselected", appData.createInfo.bull9.banker2 = "selected", appData.createInfo.bull9.banker3 = "unselected", appData.createInfo.bull9.banker4 = "unselected", appData.createInfo.bull9.banker5 = "unselected") : 3 == e ? (appData.createInfo.bull9.score_type = 3, appData.createInfo.bull9.banker1 = "unselected", appData.createInfo.bull9.banker2 = "unselected", appData.createInfo.bull9.banker3 = "selected", appData.createInfo.bull9.banker4 = "unselected", appData.createInfo.bull9.banker5 = "unselected") : 4 == e ? (appData.createInfo.bull9.score_type = 4, appData.createInfo.bull9.banker1 = "unselected", appData.createInfo.bull9.banker2 = "unselected", appData.createInfo.bull9.banker3 = "unselected", appData.createInfo.bull9.banker4 = "selected", appData.createInfo.bull9.banker5 = "unselected") : 5 == e && (appData.createInfo.bull9.score_type = 3, appData.createInfo.bull9.banker1 = "unselected", appData.createInfo.bull9.banker2 = "unselected", appData.createInfo.bull9.banker3 = "unselected", appData.createInfo.bull9.banker4 = "unselected", appData.createInfo.bull9.banker5 = "selected"),
                appData.createInfo.bull9.banker_mode = e
        },
        selectBankerMode9_8: function(e) {
            1 == e ? (appData.createInfo.bull9_8.score_type = 3, appData.createInfo.bull9_8.banker1 = "selected", appData.createInfo.bull9_8.banker2 = "unselected", appData.createInfo.bull9_8.banker3 = "unselected", appData.createInfo.bull9_8.banker4 = "unselected", appData.createInfo.bull9_8.banker5 = "unselected") : 2 == e ? (appData.createInfo.bull9_8.score_type = 3, appData.createInfo.bull9_8.banker1 = "unselected", appData.createInfo.bull9_8.banker2 = "selected", appData.createInfo.bull9_8.banker3 = "unselected", appData.createInfo.bull9_8.banker4 = "unselected", appData.createInfo.bull9_8.banker5 = "unselected") : 3 == e ? (appData.createInfo.bull9_8.score_type = 3, appData.createInfo.bull9_8.banker1 = "unselected", appData.createInfo.bull9_8.banker2 = "unselected", appData.createInfo.bull9_8.banker3 = "selected", appData.createInfo.bull9_8.banker4 = "unselected", appData.createInfo.bull9_8.banker5 = "unselected") : 4 == e ? (appData.createInfo.bull9_8.score_type = 4, appData.createInfo.bull9_8.banker1 = "unselected", appData.createInfo.bull9_8.banker2 = "unselected", appData.createInfo.bull9_8.banker3 = "unselected", appData.createInfo.bull9_8.banker4 = "selected", appData.createInfo.bull9_8.banker5 = "unselected") : 5 == e && (appData.createInfo.bull9_8.score_type = 3, appData.createInfo.bull9_8.banker1 = "unselected", appData.createInfo.bull9_8.banker2 = "unselected", appData.createInfo.bull9_8.banker3 = "unselected", appData.createInfo.bull9_8.banker4 = "unselected", appData.createInfo.bull9_8.banker5 = "selected"),
                appData.createInfo.bull9_8.banker_mode = e
        },
        selectBankerModeS: function(e) {
            appData.createInfo.scroll.banker_mode = e
        },
        selectChange: function(e, t) {
            1 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.flower.chip_type = t: 2 == e ? 1 == t ? 0 == appData.createInfo.flower.pkvalue1 ? appData.createInfo.flower.pkvalue1 = 1 : appData.createInfo.flower.pkvalue1 = 0 : 2 == t && (0 == appData.createInfo.flower.pkvalue2 ? appData.createInfo.flower.pkvalue2 = 1 : appData.createInfo.flower.pkvalue2 = 0) : 3 == e ? appData.createInfo.flower.ticket_count = t: 4 == e && (appData.createInfo.flower.upper_limit = t) : 2 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.landlord.base_score = t: 2 == e ? appData.createInfo.landlord.ask_mode = t: 3 == e && (appData.createInfo.landlord.ticket_count = t) : 3 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bull.score_type = t: 2 == e ? appData.createInfo.bull.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.bull.is_cardfive = (appData.createInfo.bull.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bull.is_cardbomb = (appData.createInfo.bull.is_cardbomb + 1) % 2 : 3 == t && (appData.createInfo.bull.is_cardtiny = (appData.createInfo.bull.is_cardtiny + 1) % 2) : 4 == e ? appData.createInfo.bull.ticket_type = t: 5 == e ? appData.createInfo.bull.banker_score = t: 6 == e && (appData.createInfo.bull.bet_type = t) : 4 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.majiang.joker = t: 2 == e ? appData.createInfo.majiang.horse_count = t: 3 == e ? appData.createInfo.majiang.qianggang = (appData.createInfo.majiang.qianggang + 1) % 2 : 4 == e ? appData.createInfo.majiang.ticket_count = t: 5 == e && (appData.createInfo.majiang.chengbao = (appData.createInfo.majiang.chengbao + 1) % 2) : 5 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bull9.score_type = t: 2 == e ? appData.createInfo.bull9.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.bull9.is_cardfive = (appData.createInfo.bull9.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bull9.is_cardbomb = (appData.createInfo.bull9.is_cardbomb + 1) % 2 : 3 == t && (appData.createInfo.bull9.is_cardtiny = (appData.createInfo.bull9.is_cardtiny + 1) % 2) : 4 == e ? appData.createInfo.bull9.ticket_type = t: 5 == e ? appData.createInfo.bull9.banker_score = t: 6 == e && (appData.createInfo.bull9.bet_type = t) : 11 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bull9_8.score_type = t: 2 == e ? appData.createInfo.bull9_8.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.bull9_8.is_cardfive = (appData.createInfo.bull9_8.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bull9_8.is_cardbomb = (appData.createInfo.bull9_8.is_cardbomb + 1) % 2 : 3 == t && (appData.createInfo.bull9_8.is_cardtiny = (appData.createInfo.bull9_8.is_cardtiny + 1) % 2) : 4 == e ? appData.createInfo.bull9_8.ticket_type = t: 5 == e && (appData.createInfo.bull9_8.banker_score = t) : 6 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bullfight.score_type = t: 2 == e ? appData.createInfo.bullfight.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.bullfight.is_cardfive = (appData.createInfo.bullfight.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bullfight.is_cardbomb = (appData.createInfo.bullfight.is_cardbomb + 1) % 2 : 3 == t ? appData.createInfo.bullfight.is_cardtiny = (appData.createInfo.bullfight.is_cardtiny + 1) % 2 : 4 == t && (appData.createInfo.bullfight.is_cardfour = (appData.createInfo.bullfight.is_cardfour + 1) % 2) : 4 == e ? appData.createInfo.bullfight.ticket_type = t: 5 == e && (appData.createInfo.bullfight.banker_score = t) : 7 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.scroll.score_type = t: 2 == e ? appData.createInfo.scroll.ticket_count = t: 3 == e ? appData.createInfo.scroll.chip_type = t: 4 == e && (appData.createInfo.scroll.rule_type = t) : 8 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.sangong.score_type = t: 2 == e ? appData.createInfo.sangong.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.sangong.is_cardjoker = (appData.createInfo.sangong.is_cardjoker + 1) % 2 : 2 == t && (appData.createInfo.sangong.is_cardbao9 = (appData.createInfo.sangong.is_cardbao9 + 1) % 2) : 4 == e ? appData.createInfo.sangong.ticket_type = t: 5 == e && (appData.createInfo.sangong.banker_score = t) : 9 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.sangong9.score_type = t: 2 == e ? appData.createInfo.sangong9.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.sangong9.is_cardjoker = (appData.createInfo.sangong9.is_cardjoker + 1) % 2 : 2 == t && (appData.createInfo.sangong9.is_cardbao9 = (appData.createInfo.sangong9.is_cardbao9 + 1) % 2) : 4 == e ? appData.createInfo.sangong9.ticket_type = t: 5 == e && (appData.createInfo.sangong9.banker_score = t) : 13 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.jixiang.score_type = t: 2 == e ? appData.createInfo.jixiang.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.jixiang.is_cardjoker = (appData.createInfo.jixiang.is_cardjoker + 1) % 2 : 2 == t && (appData.createInfo.jixiang.is_cardbao9 = (appData.createInfo.jixiang.is_cardbao9 + 1) % 2) : 4 == e ? appData.createInfo.jixiang.ticket_type = t: 5 == e && (appData.createInfo.jixiang.banker_score = t) : 15 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.paijiu.score_type = t: 2 == e ? appData.createInfo.paijiu.rule_type = t: 4 == e && (appData.createInfo.paijiu.ticket_type = t) : 14 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.fish.bet_type = t: 2 == e ? appData.createInfo.fish.limit_type = t: 3 == e ? appData.createInfo.fish.rule_type = t: 4 == e && (appData.createInfo.fish.ticket_type = t) : 16 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.blackjack.bet_type = t: 4 == e && (appData.createInfo.blackjack.ticket_type = t) : 17 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bullNew.bet_type = t: 4 == e ? appData.createInfo.bullNew.ticket_type = t: 3 == e && (1 == t ? appData.createInfo.bullNew.is_cardfive = (appData.createInfo.bullNew.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bullNew.is_cardbomb = (appData.createInfo.bullNew.is_cardbomb + 1) % 2 : 3 == t && (appData.createInfo.bullNew.is_cardtiny = (appData.createInfo.bullNew.is_cardtiny + 1) % 2)) : 10 == appData.createInfo.isShow ? 1 == e ? appData.createInfo.bull12.score_type = t: 2 == e ? appData.createInfo.bull12.rule_type = t: 3 == e ? 1 == t ? appData.createInfo.bull12.is_cardfive = (appData.createInfo.bull12.is_cardfive + 1) % 2 : 2 == t ? appData.createInfo.bull12.is_cardbomb = (appData.createInfo.bull12.is_cardbomb + 1) % 2 : 3 == t && (appData.createInfo.bull12.is_cardtiny = (appData.createInfo.bull12.is_cardtiny + 1) % 2) : 4 == e ? appData.createInfo.bull12.ticket_type = t: 5 == e ? appData.createInfo.bull12.banker_score = t: 6 == e && (appData.createInfo.bull12.bet_type = t) : 12 == appData.createInfo.isShow && (1 == e ? appData.createInfo.flower9.chip_type = t: 2 == e ? 1 == t ? 0 == appData.createInfo.flower9.pkvalue1 ? appData.createInfo.flower9.pkvalue1 = 1 : appData.createInfo.flower9.pkvalue1 = 0 : 2 == t && (0 == appData.createInfo.flower9.pkvalue2 ? appData.createInfo.flower9.pkvalue2 = 1 : appData.createInfo.flower9.pkvalue2 = 0) : 3 == e ? appData.createInfo.flower9.ticket_count = t: 4 == e && (appData.createInfo.flower9.upper_limit = t))
        },
        createCommit: function() {
            if (appData.is_operation) return 0;
            viewMethods.waiting(),
                1 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.flower), viewMethods.connectSocket(appData.socket.flower, 1)) : 2 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.landlord), viewMethods.connectSocket(appData.socket.landlord, 2)) : 3 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.bull), viewMethods.connectSocket(appData.socket.bull, 3)) : 4 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.majiang), viewMethods.connectSocket(appData.socket.majiang, 4)) : 5 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.bull9), viewMethods.connectSocket(appData.socket.bull9, 5)) : 11 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.bull9_8), viewMethods.connectSocket(appData.socket.bull9_8, 11)) : 6 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.bullfight), viewMethods.connectSocket(appData.socket.bullfight, 6)) : 7 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.scroll), viewMethods.connectSocket(appData.socket.scroll, 7)) : 8 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.sangong), viewMethods.connectSocket(appData.socket.sangong, 8)) : 9 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.sangong9), viewMethods.connectSocket(appData.socket.sangong9, 9)) : 13 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.jixiang), viewMethods.connectSocket(appData.socket.jixiang, 13)) : 15 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.paijiu), viewMethods.connectSocket(appData.socket.paijiu, 15)) : 10 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.bull12), viewMethods.connectSocket(appData.socket.bull12, 10)) : 12 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.flower9), viewMethods.connectSocket(appData.socket.flower9, 12)) : 14 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.fish), viewMethods.connectSocket(appData.socket.fish, 14)) : 16 == appData.createInfo.isShow ? (errorAPI("startConnect", appData.socket.blackjack), viewMethods.connectSocket(appData.socket.blackjack, 16)) : 17 == appData.createInfo.isShow && (errorAPI("startConnect", appData.socket.bullNew), viewMethods.connectSocket(appData.socket.bullNew, 17))
        },
        cancelCreate: function() {
            appData.createInfo.isShow = 0
        },
        connectSocket: function(socket, type) {
            appData.socket_url = socket,
                appData.socket_type = type;
            var ws = new WebSocket(socket);
            ws.onopen = function() {
                appData.is_operation = !0;
                setInterval(function() {
                        appData.socketStatus = appData.socketStatus + 1,
                            ws.send("@"),
                        (appData.socketStatus > 3 || appData.socketStatus > 3) && window.location.reload()
                    },
                    4e3);
                console.log("socketOpen"),
                    localStorage.createInfo = JSON.stringify(appData.createInfo),
                    1 == type ? ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            chip_type: appData.createInfo.flower.chip_type,
                            ticket_count: appData.createInfo.flower.ticket_count,
                            disable_pk_100: appData.createInfo.flower.pkvalue1,
                            disable_pk_men: appData.createInfo.flower.pkvalue2,
                            upper_limit: appData.createInfo.flower.upper_limit
                        }
                    })) : 2 == type ? ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_count: appData.createInfo.landlord.ticket_count,
                            base_score: appData.createInfo.landlord.base_score,
                            ask_mode: appData.createInfo.landlord.ask_mode
                        }
                    })) : 3 == type ? (console.log(appData.createInfo.bull), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bull.ticket_type,
                            score_type: appData.createInfo.bull.score_type,
                            rule_type: appData.createInfo.bull.rule_type,
                            is_cardfive: appData.createInfo.bull.is_cardfive,
                            is_cardbomb: appData.createInfo.bull.is_cardbomb,
                            is_cardtiny: appData.createInfo.bull.is_cardtiny,
                            banker_mode: appData.createInfo.bull.banker_mode,
                            banker_score_type: appData.createInfo.bull.banker_score,
                            bet_type: appData.createInfo.bull.bet_type
                        }
                    }))) : 4 == type ? ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            joker: appData.createInfo.majiang.joker,
                            horse_count: appData.createInfo.majiang.horse_count,
                            qianggang: appData.createInfo.majiang.qianggang,
                            chengbao: appData.createInfo.majiang.chengbao,
                            ticket_count: appData.createInfo.majiang.ticket_count
                        }
                    })) : 5 == type ? (console.log(appData.createInfo.bull9), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bull9.ticket_type,
                            score_type: appData.createInfo.bull9.score_type,
                            rule_type: appData.createInfo.bull9.rule_type,
                            is_cardfive: appData.createInfo.bull9.is_cardfive,
                            is_cardbomb: appData.createInfo.bull9.is_cardbomb,
                            is_cardtiny: appData.createInfo.bull9.is_cardtiny,
                            banker_mode: appData.createInfo.bull9.banker_mode,
                            banker_score_type: appData.createInfo.bull9.banker_score,
                            bet_type: appData.createInfo.bull9.bet_type
                        }
                    }))) : 11 == type ? (console.log(appData.createInfo.bull9_8), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bull9_8.ticket_type,
                            score_type: appData.createInfo.bull9_8.score_type,
                            rule_type: appData.createInfo.bull9_8.rule_type,
                            is_cardfive: appData.createInfo.bull9_8.is_cardfive,
                            is_cardbomb: appData.createInfo.bull9_8.is_cardbomb,
                            is_cardtiny: appData.createInfo.bull9_8.is_cardtiny,
                            banker_mode: appData.createInfo.bull9_8.banker_mode,
                            banker_score_type: appData.createInfo.bull9_8.banker_score
                        }
                    }))) : 6 == type ? (console.log(appData.createInfo.bullfight), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bullfight.ticket_type,
                            score_type: appData.createInfo.bullfight.score_type,
                            rule_type: appData.createInfo.bullfight.rule_type,
                            is_cardfive: appData.createInfo.bullfight.is_cardfive,
                            is_cardbomb: appData.createInfo.bullfight.is_cardbomb,
                            is_cardtiny: appData.createInfo.bullfight.is_cardtiny,
                            is_cardfour: appData.createInfo.bullfight.is_cardfour,
                            banker_mode: appData.createInfo.bullfight.banker_mode,
                            banker_score_type: appData.createInfo.bullfight.banker_score
                        }
                    }))) : 7 == type ? (console.log(appData.createInfo.scroll), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_count: appData.createInfo.scroll.ticket_count,
                            banker_score_type: appData.createInfo.scroll.score_type,
                            banker_mode: appData.createInfo.scroll.banker_mode,
                            chip_type: appData.createInfo.scroll.chip_type,
                            rule_type: appData.createInfo.scroll.rule_type
                        }
                    }))) : 8 == type ? (console.log(appData.createInfo.sangong), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.sangong.ticket_type,
                            score_type: appData.createInfo.sangong.score_type,
                            rule_type: appData.createInfo.sangong.rule_type,
                            banker_mode: appData.createInfo.sangong.banker_mode,
                            banker_score_type: appData.createInfo.sangong.banker_score,
                            is_cardjoker: appData.createInfo.sangong.is_cardjoker,
                            is_cardbao9: appData.createInfo.sangong.is_cardbao9
                        }
                    }))) : 9 == type ? (console.log(appData.createInfo.sangong9), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.sangong9.ticket_type,
                            score_type: appData.createInfo.sangong9.score_type,
                            rule_type: appData.createInfo.sangong9.rule_type,
                            banker_mode: appData.createInfo.sangong9.banker_mode,
                            banker_score_type: appData.createInfo.sangong9.banker_score,
                            is_cardjoker: appData.createInfo.sangong9.is_cardjoker,
                            is_cardbao9: appData.createInfo.sangong9.is_cardbao9
                        }
                    }))) : 10 == type ? (console.log(appData.createInfo.bull12), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bull12.ticket_type,
                            score_type: appData.createInfo.bull12.score_type,
                            rule_type: appData.createInfo.bull12.rule_type,
                            is_cardfive: appData.createInfo.bull12.is_cardfive,
                            is_cardbomb: appData.createInfo.bull12.is_cardbomb,
                            is_cardtiny: appData.createInfo.bull12.is_cardtiny,
                            banker_mode: appData.createInfo.bull12.banker_mode,
                            banker_score_type: appData.createInfo.bull12.banker_score,
                            bet_type: appData.createInfo.bull12.bet_type
                        }
                    }))) : 12 == type ? ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            chip_type: appData.createInfo.flower9.chip_type,
                            ticket_count: appData.createInfo.flower9.ticket_count,
                            disable_pk_100: appData.createInfo.flower9.pkvalue1,
                            disable_pk_men: appData.createInfo.flower9.pkvalue2,
                            upper_limit: appData.createInfo.flower9.upper_limit
                        }
                    })) : 13 == type ? (console.log(appData.createInfo.jixiang), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.jixiang.ticket_type,
                            score_type: appData.createInfo.jixiang.score_type,
                            rule_type: appData.createInfo.jixiang.rule_type,
                            banker_mode: appData.createInfo.jixiang.banker_mode,
                            banker_score_type: appData.createInfo.jixiang.banker_score,
                            is_cardjoker: appData.createInfo.jixiang.is_cardjoker,
                            is_cardbao9: appData.createInfo.jixiang.is_cardbao9
                        }
                    }))) : 15 == type ? (console.log(appData.createInfo.paijiu), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.paijiu.ticket_type,
                            score_type: appData.createInfo.paijiu.score_type,
                            rule_type: appData.createInfo.paijiu.rule_type,
                            banker_mode: appData.createInfo.paijiu.banker_mode
                        }
                    }))) : 14 == type ? (console.log(appData.createInfo.fish), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.fish.ticket_type,
                            bet_type: appData.createInfo.fish.bet_type,
                            limit_type: appData.createInfo.fish.limit_type,
                            rule_type: appData.createInfo.fish.rule_type,
                            banker_mode: 1
                        }
                    }))) : 16 == type ? (console.log(appData.createInfo.blackjack), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.blackjack.ticket_type,
                            bet_type: appData.createInfo.blackjack.bet_type,
                            banker_mode: 2,
                            score_type: 1,
                            rule_type: 1
                        }
                    }))) : 17 == type && (console.log(appData.createInfo.bullNew), ws.send(JSON.stringify({
                        operation: "CreateRoom",
                        account_id: userData.accountId,
                        session: globalData.session,
                        dealer_num: globalData.dealerNum,
                        data: {
                            data_key: Date.parse(new Date) + randomString(5),
                            ticket_type: appData.createInfo.bullNew.ticket_type,
                            bet_type: appData.createInfo.bullNew.bet_type,
                            banker_mode: 6,
                            score_type: 1,
                            rule_type: 1,
                            is_cardfive: appData.createInfo.bullNew.is_cardfive,
                            is_cardbomb: appData.createInfo.bullNew.is_cardbomb,
                            is_cardtiny: appData.createInfo.bullNew.is_cardtiny
                        }
                    })))
            },
                ws.onmessage = function(evt) {
                    if ("@" == evt.data) return socketStatus = 0,
                        0;
                    var obj = eval("(" + evt.data + ")");
                    if (1 == obj.result) appData.is_operation = !1,
                        viewMethods.showAlert(1, obj.result_message);
                    else if (0 == obj.result) {
                        var url = "",
                            enurl = "";
                        1 == type ? 1 == globalData.roomUrls.tf || 2 == globalData.roomUrls.tf ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.f + enurl) : 3 == globalData.roomUrls.tf ? (enurl = obj.data.room_code, url = globalData.roomUrls.f + enurl) : url = globalData.baseUrl + "game/main?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 2 == type ? 1 == globalData.roomUrls.tl || 2 == globalData.roomUrls.tl ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.l + enurl) : 3 == globalData.roomUrls.tl ? (enurl = obj.data.room_code, url = globalData.roomUrls.l + enurl) : url = globalData.baseUrl + "game/landlord?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 3 == type ? 1 == globalData.roomUrls.tb6 || 2 == globalData.roomUrls.tb6 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.b6 + enurl) : 3 == globalData.roomUrls.tb6 ? (enurl = obj.data.room_code, url = globalData.roomUrls.b6 + enurl) : url = globalData.baseUrl + "game/tableBull?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 4 == type ? 1 == globalData.roomUrls.tm || 2 == globalData.roomUrls.tm ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.m + enurl) : 3 == globalData.roomUrls.tm ? (enurl = obj.data.room_code, url = globalData.roomUrls.m + enurl) : url = globalData.baseUrl + "game/majiang?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 5 == type ? 1 == globalData.roomUrls.tb9 || 2 == globalData.roomUrls.tb9 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.b9 + enurl) : 3 == globalData.roomUrls.tb9 ? (enurl = obj.data.room_code, url = globalData.roomUrls.b9 + enurl) : url = globalData.baseUrl + "game/bull9?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 11 == type ? 1 == globalData.roomUrls.tb98 || 2 == globalData.roomUrls.tb98 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.b98 + enurl) : 3 == globalData.roomUrls.tb98 ? (enurl = obj.data.room_code, url = globalData.roomUrls.b98 + enurl) : url = globalData.baseUrl + "game/bull9_8?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 6 == type ? 1 == globalData.roomUrls.tbf || 2 == globalData.roomUrls.tbf ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.bf + enurl) : 3 == globalData.roomUrls.tbf ? (enurl = obj.data.room_code, url = globalData.roomUrls.bf + enurl) : url = globalData.baseUrl + "game/bullfight?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 7 == type ? 1 == globalData.roomUrls.ts || 2 == globalData.roomUrls.ts ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.s + enurl) : 3 == globalData.roomUrls.ts ? (enurl = obj.data.room_code, url = globalData.roomUrls.s + enurl) : url = globalData.baseUrl + "game/scroll?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 8 == type ? 1 == globalData.roomUrls.tsg || 2 == globalData.roomUrls.tsg ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.sg + enurl) : 3 == globalData.roomUrls.tsg ? (enurl = obj.data.room_code, url = globalData.roomUrls.sg + enurl) : url = globalData.baseUrl + "game/sangong?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 9 == type ? 1 == globalData.roomUrls.tsg9 || 2 == globalData.roomUrls.tsg9 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.sg9 + enurl) : 3 == globalData.roomUrls.tsg9 ? (enurl = obj.data.room_code, url = globalData.roomUrls.sg9 + enurl) : url = globalData.baseUrl + "game/sangong9?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 10 == type && (1 == globalData.roomUrls.tb12 || 2 == globalData.roomUrls.tb12 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.b12 + enurl) : 3 == globalData.roomUrls.tb12 ? (enurl = obj.data.room_code, url = globalData.roomUrls.b12 + enurl) : url = globalData.baseUrl + "game/bull12?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum),
                            12 == type ? 1 == globalData.roomUrls.tf9 || 2 == globalData.roomUrls.tf9 ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.f9 + enurl) : 3 == globalData.roomUrls.tf9 ? (enurl = obj.data.room_code, url = globalData.roomUrls.f9 + enurl) : url = globalData.baseUrl + "game/main9?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 13 == type ? 1 == globalData.roomUrls.tsgf || 2 == globalData.roomUrls.tsgf ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.sgf + enurl) : 3 == globalData.roomUrls.tsgf ? (enurl = obj.data.room_code, url = globalData.roomUrls.sgf + enurl) : url = globalData.baseUrl + "game/jixiang?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 15 == type ? 1 == globalData.roomUrls.tpg || 2 == globalData.roomUrls.tpg ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.pg + enurl) : 3 == globalData.roomUrls.tpg ? (enurl = obj.data.room_code, url = globalData.roomUrls.pg + enurl) : url = globalData.baseUrl + "game/paijiu?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 16 == type ? 1 == globalData.roomUrls.tbj || 2 == globalData.roomUrls.tbj ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.bj + enurl) : 3 == globalData.roomUrls.tbj ? (enurl = obj.data.room_code, url = globalData.roomUrls.bj + enurl) : url = globalData.baseUrl + "game/blackjack?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 17 == type ? 1 == globalData.roomUrls.tbsail || 2 == globalData.roomUrls.tbsail ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.bsail + enurl) : 3 == globalData.roomUrls.tbsail ? (enurl = obj.data.room_code, url = globalData.roomUrls.bsail + enurl) : url = globalData.baseUrl + "game/bullsail?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum: 14 == type && (1 == globalData.roomUrls.tfu || 2 == globalData.roomUrls.tfu ? (enurl = Base64.encode(globalData.dealerNum + "/" + obj.data.room_number), url = globalData.roomUrls.fu + enurl) : 3 == globalData.roomUrls.tfu ? (enurl = obj.data.room_code, url = globalData.roomUrls.fu + enurl) : url = globalData.baseUrl + "game/fcru?room_number=" + obj.data.room_number + "&dealer_num=" + globalData.dealerNum),
                            window.location.href = url
                    } else - 201 == obj.result ? (is_operation = !1, viewMethods.showAlert(31, obj.result_message)) : (appData.is_operation = !1, viewMethods.showAlert(6, obj.result_message))
                },
                ws.onclose = function(e) {
                    if (console.log("16500closed"), !appData.is_operation) return 0;
                    viewMethods.connectSocket(appData.socket_url, appData.socket_type)
                },
                ws.onerror = function(e) {
                    console.log("WebSocketError!")
                }
        },
        getCards: function() {
            Vue.http.post(globalData.baseUrl + "game/updateActivityOpt", {
                account_id: userData.accountId,
                activity_id: appData.activity[0].activity_id,
                dealer_num: globalData.dealerNum,
                session: globalData.session
            }).then(function(e) {
                    logMessage(e.body),
                    0 == e.body.result && (appData.userInfo.card = Math.ceil(appData.userInfo.card) + Math.ceil(appData.activity[0].ticket_count), appData.activity.splice(0, 1), 0 == appData.activity.length ? viewMethods.closeAlert() : viewMethods.showAlert(5, appData.activity[0].content))
                },
                function(e) {
                    logMessage(e.body)
                })
        },
        selectCard: function(e, t) {
            appData.select = e,
                appData.ticket_count = t
        },
        goHomePage: function() {
            window.location.href = '/portal/user/';
        }
    },
    authcodeTimer = function e() {
        if (appData.authcodeTime <= 0) return appData.authcodeText = "发送验证码",
            appData.authcodeTime = 60,
            void(appData.authcodeType = 1);
        appData.authcodeTime = appData.authcodeTime - 1,
            appData.authcodeText = appData.authcodeTime + "s",
            setTimeout(function() {
                    e()
                },
                1e3)
    },
    vueLife = {
        vmCreated: function() {
            logMessage("vmCreated"),
                viewMethods.initView()
        },
        vmUpdated: function() {
            logMessage("vmUpdated")
        },
        vmMounted: function() {
            if (logMessage("vmMounted"), void 0 != globalData.isAlertMsg && null != globalData.isAlertMsg) {
                if (1 == globalData.isAlertMsg) {
                    var e = Base64.decode(globalData.alertMsg);
                    viewMethods.showAlert(41, e)
                }
            } else globalData.isAlertMsg = 0;
            void 0 != globalData.isNotyMsg && null != globalData.isNotyMsg ? (appData.notyMsg = Base64.decode(globalData.notyMsg), 1 == globalData.isNotyMsg && (appData.isShowNoty = !0, setTimeout(function() {
                    appData.isShowNoty = !1
                },
                1e3 * globalData.notyTime))) : globalData.isNotyMsg = 0,
                setTimeout(function() {
                        $("#marquee").css("opacity", 1),
                            $("#marquee").marquee({
                                duration: globalData.notySpeed,
                                gap: 50,
                                delayBeforeStart: 0,
                                direction: "left",
                                duplicated: !0
                            })
                    },
                    100)
        },
        vmDestroyed: function() {
            logMessage("vmDestroyed")
        }
    },
    vm = new Vue({
        el: "#app-main",
        data: appData,
        methods: viewMethods,
        created: vueLife.vmCreated,
        updated: vueLife.vmUpdated,
        mounted: vueLife.vmMounted,
        destroyed: vueLife.vmDestroyed
    });
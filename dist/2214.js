"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [2214],
    {
        2214: (o, t, e) => {
            e.r(t), e.d(t, { default: () => _ });
            var n,
                u = e(6684);
            function l(o) {
                return (
                    (l =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (o) {
                                  return typeof o;
                              }
                            : function (o) {
                                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                              }),
                    l(o)
                );
            }
            function c(o, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(o, m(n.key), n);
                }
            }
            function m(o) {
                var t = (function (o) {
                    if ("object" != l(o) || !o) return o;
                    var t = o[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var e = t.call(o, "string");
                        if ("object" != l(e)) return e;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(o);
                })(o);
                return "symbol" == l(t) ? t : t + "";
            }
            function a() {
                try {
                    var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (o) {}
                return (a = function () {
                    return !!o;
                })();
            }
            function d(o) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          }),
                    d(o)
                );
            }
            function r(o, t) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (o, t) {
                              return (o.__proto__ = t), o;
                          }),
                    r(o, t)
                );
            }
            var i = (function (o) {
                function t() {
                    return (
                        (function (o, t) {
                            if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (o, t, e) {
                            return (
                                (t = d(t)),
                                (function (o, t) {
                                    if (t && ("object" == l(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (o) {
                                        if (void 0 === o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return o;
                                    })(o);
                                })(o, a() ? Reflect.construct(t, e || [], d(o).constructor) : t.apply(o, e))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (o, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (o.prototype = Object.create(t && t.prototype, { constructor: { value: o, writable: !0, configurable: !0 } })), Object.defineProperty(o, "prototype", { writable: !1 }), t && r(o, t);
                    })(t, o),
                    (e = t),
                    (m = [
                        {
                            key: "render",
                            value: function () {
                                return (0, u.qy)(n || ((o = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="demo-layout__column md-layout__column--expanded1 md-layout__column--medium1 md-layout__column--compact1">1/1/1</div>\n                    <div class="demo-layout__column md-layout__column--expanded11 md-layout__column--medium7 md-layout__column--compact3">11/7/3</div>\n                    <div class="demo-layout__column md-layout__column--expanded2 md-layout__column--medium2 md-layout__column--compact1">2/2/1</div>\n                    <div class="demo-layout__column md-layout__column--expanded10 md-layout__column--medium6 md-layout__column--compact3">10/6/3</div>\n                    <div class="demo-layout__column md-layout__column--expanded3 md-layout__column--medium3 md-layout__column--compact1">3/3/1</div>\n                    <div class="demo-layout__column md-layout__column--expanded9 md-layout__column--medium5 md-layout__column--compact3">9/5/3</div>\n                    <div class="demo-layout__column md-layout__column--expanded4 md-layout__column--medium2 md-layout__column--compact1">4/2/1</div>\n                    <div class="demo-layout__column md-layout__column--expanded8 md-layout__column--medium6 md-layout__column--compact3">8/6/3</div>\n                    <div class="demo-layout__column md-layout__column--expanded5 md-layout__column--medium3 md-layout__column--compact1">5/3/1</div>\n                    <div class="demo-layout__column md-layout__column--expanded7 md-layout__column--medium5 md-layout__column--compact3">7/5/3</div>\n                    <div class="demo-layout__column md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact2">6/4/2</div>\n                    <div class="demo-layout__column md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact2">6/4/2</div>\n                    <div class="demo-layout__column md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">12/8/4</div>\n                </div>\n            </div>\n        ']), t || (t = o.slice(0)), (n = Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(t) } })))));
                                var o, t;
                            },
                        },
                    ]),
                    m && c(e.prototype, m),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
                var e, m;
            })(e(5376).$);
            customElements.define("demo-layout-grid", i);
            const _ = document.createElement("demo-layout-grid");
        },
    },
]);

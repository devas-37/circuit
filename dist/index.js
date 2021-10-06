! function (t) {
    var n = {};

    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: i
        })
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(i, o, function (n) {
                return t[n]
            }.bind(null, o));
        return i
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 0)
}([function (t, n, e) {
    "use strict";
    var i, o, r, s, u;
    e.r(n),
        function (t) {
            t.KIRISH = "k", t.CHIQISH = "c", t.NEYTRAL = "n"
        }(i || (i = {})),
        function (t) {
            t[t.MANFIY = -1] = "MANFIY", t[t.MUSBAT = 1] = "MUSBAT"
        }(o || (o = {})),
        function (t) {
            t[t.YUQORI = 255] = "YUQORI", t[t.PAST = 0] = "PAST"
        }(r || (r = {})),
        function (t) {
            t[t.ON = 1] = "ON", t[t.OFF = 1] = "OFF"
        }(s || (s = {})),
        function (t) {
            t.XOR = "~", t.AND = "&", t.OR = "|", t.NOT = "!", t.NAND = "!&", t.NOR = "!|", t.BATTERY = "b", t.SEG7 = "s7", t.LED = "ld", t.RGBL = "rld"
        }(u || (u = {}));
    var p, c = function () {
        function t(t, n, e) {
            void 0 === n && (n = null), void 0 === e && (e = null), this.element = "", this.type = null, n && (this.type = n), this.element = t, e && (this.canvas = document.getElementById(e))
        }
        return t.prototype.render = function () { }, t.prototype.Fire = function () {
            console.log("Fire")
        }, t
    }(),
        a = function () {
            function t(t, n) {
                this.name = null, this.activePin = null, this.Pins = {}, this.PinType = i.NEYTRAL, this.Wires = [], this.state = r.PAST, this.Qutb = o.MANFIY, this.PinType = n, this.name = t
            }
            return t.prototype.Write = function (t) {
                for (var n in t ? this.Wires.forEach((function (t) {
                    t.setState(s.ON)
                })) : this.Wires.forEach((function (t) {
                    t.setState(s.OFF)
                })), this.state = t, this.Pins) this.Pins[n].pins.forEach((function (n) {
                    n.Write(t)
                })), this.Pins[n].komponent.Fire()
            }, t.prototype.addPin = function (t, n) {
                void 0 === t && (t = null), void 0 === n && (n = null);
                var e = t.element;
                this.Pins[e] ? this.Pins[e].pins.push(n) : this.Pins[e] = {
                    komponent: t,
                    pins: [n]
                }
            }, t.prototype.addWire = function (t) {
                void 0 === t && (t = null), this.Wires.push(t)
            }, t.prototype.removeWire = function (t) {
                this.Wires = this.Wires.filter((function (n) {
                    return n.name !== t
                }))
            }, t.prototype.getName = function () {
                return this.name
            }, t.prototype.getComponents = function () {
                var t = [];
                for (var n in this.Pins) t.push(this.Pins[n].komponent);
                return t
            }, t
        }(),
        f = (p = function (t, n) {
            return (p = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, n) {
                    t.__proto__ = n
                } || function (t, n) {
                    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                })(t, n)
        }, function (t, n) {
            function e() {
                this.constructor = t
            }
            p(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
        }),
        l = function (t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.Pins = {
                    OUT: new a("OUT", i.CHIQISH)
                }, n
            }
            return f(n, t), n.prototype.setState = function (t) {
                this.Pins.OUT.Write(t)
            }, n
        }(c),
        h = function () {
            var t = function (n, e) {
                return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                    instanceof Array && function (t, n) {
                        t.__proto__ = n
                    } || function (t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                    })(n, e)
            };
            return function (n, e) {
                function i() {
                    this.constructor = n
                }
                t(n, e), n.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
        }(),
        T = function () {
            function t(t) {
                this.q = "http://www.w3.org/2000/svg", this.element = document.createElementNS("http://www.w3.org/2000/svg", t), this.off()
            }
            return t.prototype.attr = function (t, n) {
                this.element.setAttributeNS(null, t, n)
            }, t.prototype.on = function () {
                this.element.setAttributeNS(null, "fill", "lime")
            }, t.prototype.off = function () {
                this.element.setAttributeNS(null, "fill", "#3c3c3b")
            }, t.prototype.instance = function () {
                return this.element
            }, t
        }(),
        y = function (t) {
            function n(n, e, o) {
                void 0 === e && (e = null);
                var r = t.call(this, n, e, o) || this;
                return r.nameSpace = "http://www.w3.org/2000/svg", r.NUMBER = 0, r.numbers = {
                    0: ["T", "RT", "RB", "B", "LB", "LT"],
                    1: ["RT", "RB"],
                    2: ["T", "RT", "M", "LB", "B"],
                    3: ["T", "RT", "RB", "M", "B"],
                    4: ["LT", "M", "RT", "RB"],
                    5: ["T", "LT", "M", "RB", "B"],
                    6: ["T", "LT", "LB", "M", "RB", "B"],
                    7: ["RT", "RB", "T"],
                    8: ["T", "LT", "LB", "M", "RB", "B", "RT"],
                    9: ["T", "LT", "M", "RB", "B", "RT"],
                    10: ["T", "LT", "LB", "M", "RB", "RT"],
                    11: ["LT", "LB", "RB", "RT"],
                    12: ["T", "LT", "LB", "M", "B"],
                    13: ["T", "LT", "LB", "RB", "B", "RT"],
                    14: ["T", "LT", "LB", "B", "M"],
                    15: ["T", "LT", "LB", "M"]
                }, r.Pins = {
                    A: new a("A", i.KIRISH),
                    B: new a("B", i.KIRISH),
                    C: new a("C", i.KIRISH),
                    D: new a("D", i.KIRISH)
                }, r.Seg = {
                    LB: new T("path"),
                    LT: new T("path"),
                    B: new T("path"),
                    T: new T("path"),
                    RT: new T("path"),
                    RB: new T("path"),
                    M: new T("polygon")
                }, r.parent = document.createElementNS(r.nameSpace, "svg"), r.setAttr(r.parent, {
                    x: 0,
                    y: 0,
                    viewBox: "0 0 18.24 25.48",
                    width: 54.72,
                    height: 76.44,
                    style: "background:#1e1e1e;"
                }), r.canvas.appendChild(r.parent), r.paint(), r
            }
            return h(n, t), n.prototype.setAttr = function (t, n) {
                for (var e in n) t.setAttributeNS(null, e, n[e])
            }, n.prototype.paint = function () {
                for (var t in this.Seg.LB.attr("d", "M4.8,14.12,4.65,15.3l-.8,6.16h0L2,23a2.22,2.22,0,0,1-.34-1l1.08-7.86,1.18-1Z"), this.Seg.B.attr("d", "M13.08,23.72a2.53,2.53,0,0,1-.81.33l-8.71-.11a2.27,2.27,0,0,1-1.19-.52l1.89-1.64h0l7.2.07Z"), this.Seg.RB.attr("d", "M15.13,14.21,14,22.26a2.12,2.12,0,0,1-.55,1.13l-1.57-1.82,1-7.29,1.29-1.12Z"), this.Seg.M.attr("points", "13.88 12.77 12.69 13.8 5.2 13.8 4.36 12.82 5.68 11.68 12.94 11.68 13.88 12.77"), this.Seg.RT.attr("d", "M16.59,3.48l-1.07,7.87h0l-1.24,1.07-.89-1,1-7.29,1.86-1.6A2,2,0,0,1,16.59,3.48Z"), this.Seg.T.attr("d", "M15.94,2.11,14.18,3.63H6.68L5.23,2A1.81,1.81,0,0,1,6,1.65h9A2,2,0,0,1,15.94,2.11Z"), this.Seg.LT.attr("d", "M6.35,4,5.24,11.37,4,12.43l-.86-1L4.28,3.3a2.64,2.64,0,0,1,.56-1Z"), this.Seg) this.parent.appendChild(this.Seg[t].instance());
                this.canvas.appendChild(this.parent)
            }, n.prototype.p = function (t) {
                return this.Pins[t].state == r.YUQORI ? 1 : 0
            }, n.prototype.Fire = function () {
                var t = this,
                    n = "" + this.p("D") + this.p("C") + this.p("B") + this.p("A"),
                    e = parseInt(n, 2);
                console.log(this.numbers[e].join(" ")), this.numbers[e].forEach((function (n) {
                    t.Seg[n].on()
                }))
            }, n
        }(c),
        d = function () {
            var t = function (n, e) {
                return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                    instanceof Array && function (t, n) {
                        t.__proto__ = n
                    } || function (t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                    })(n, e)
            };
            return function (n, e) {
                function i() {
                    this.constructor = n
                }
                t(n, e), n.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
        }(),
        B = function (t) {
            function n(n, e) {
                void 0 === e && (e = null);
                var o = t.call(this, n, e) || this;
                return o.Pins = {
                    A: new a("A", i.KIRISH),
                    B: new a("B", i.CHIQISH)
                }, o
            }
            return d(n, t), n.prototype.Fire = function () {
                this.Pins.B.Write(0 != this.Pins.A.state ? r.PAST : r.YUQORI)
            }, n
        }(c),
        P = new l("elementBattery", u.BATTERY),
        R = new y("sifr", u.SEG7, "root"),
        S = new B("EMAS", u.NOT);
    P.Pins.OUT.addPin(R, R.Pins.A), P.Pins.OUT.addPin(R, R.Pins.D), P.Pins.OUT.addPin(R, R.Pins.C), P.Pins.OUT.addPin(S, S.Pins.A), P.setState(r.YUQORI)
}]);
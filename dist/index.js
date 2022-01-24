/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Tools/And.ts":
/*!**************************!*\
  !*** ./src/Tools/And.ts ***!
  \**************************/
/*! exports provided: AND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AND", function() { return AND; });
/* harmony import */ var _components_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Enums */ "./src/components/Enums.ts");
/* harmony import */ var _components_Komponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Komponent */ "./src/components/Komponent.ts");
/* harmony import */ var _components_Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pin */ "./src/components/Pin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AND = /** @class */ (function (_super) {
    __extends(AND, _super);
    function AND(element, type, canvasEl) {
        if (type === void 0) { type = null; }
        var _this = _super.call(this, element, type) || this;
        _this.pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH),
        };
        var canvas = document.getElementById(canvasEl);
        _this.svgFile = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25.28 11.46\"><defs><style>.cls-1{fill:#66b32e;}.cls-1,.cls-2{stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}.cls-2{fill:none;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M6.13.25v11h8.64a5.29,5.29,0,0,0,4.65-5.48A5.24,5.24,0,0,0,14.86.25Z\"/><line class=\"cls-2\" x1=\"6.13\" y1=\"2.79\" x2=\"0.25\" y2=\"2.79\"/><line class=\"cls-2\" x1=\"0.25\" y1=\"8.67\" x2=\"6.13\" y2=\"8.67\"/><line class=\"cls-2\" x1=\"19.42\" y1=\"5.73\" x2=\"25.03\" y2=\"5.73\"/></g></g></svg>";
        var par = document.createElement("div");
        par.innerHTML = _this.svgFile;
        canvas.appendChild(par);
        return _this;
    }
    AND.prototype.Draw = function () {
        console.log(this.svgFile);
    };
    AND.prototype.Fire = function () {
        if (this.pins.A.state & this.pins.B.state) {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        }
    };
    return AND;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Battery.ts":
/*!******************************!*\
  !*** ./src/Tools/Battery.ts ***!
  \******************************/
/*! exports provided: Battery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return Battery; });
/* harmony import */ var _components_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Enums */ "./src/components/Enums.ts");
/* harmony import */ var _components_Komponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Komponent */ "./src/components/Komponent.ts");
/* harmony import */ var _components_Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pin */ "./src/components/Pin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Battery = /** @class */ (function (_super) {
    __extends(Battery, _super);
    function Battery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Pins = {
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('OUT', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH)
        };
        return _this;
    }
    Battery.prototype.setState = function (kuchlanish) {
        this.Pins.OUT.Write(kuchlanish);
    };
    return Battery;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Not.ts":
/*!**************************!*\
  !*** ./src/Tools/Not.ts ***!
  \**************************/
/*! exports provided: NOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT", function() { return NOT; });
/* harmony import */ var _components_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Enums */ "./src/components/Enums.ts");
/* harmony import */ var _components_Komponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Komponent */ "./src/components/Komponent.ts");
/* harmony import */ var _components_Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pin */ "./src/components/Pin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NOT = /** @class */ (function (_super) {
    __extends(NOT, _super);
    function NOT(element, type) {
        if (type === void 0) { type = null; }
        var _this = _super.call(this, element, type) || this;
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('A', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('B', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH)
        };
        return _this;
    }
    NOT.prototype.Fire = function () {
        this.Pins.B.Write(this.Pins.A.state != 0 ? _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST : _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
    };
    return NOT;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Segment7.ts":
/*!*******************************!*\
  !*** ./src/Tools/Segment7.ts ***!
  \*******************************/
/*! exports provided: SEGMENT7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEGMENT7", function() { return SEGMENT7; });
/* harmony import */ var _components_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Enums */ "./src/components/Enums.ts");
/* harmony import */ var _components_Komponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Komponent */ "./src/components/Komponent.ts");
/* harmony import */ var _components_Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Pin */ "./src/components/Pin.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SEGMENT = /** @class */ (function () {
    function SEGMENT(type) {
        this.q = "http://www.w3.org/2000/svg";
        this.element = document.createElementNS("http://www.w3.org/2000/svg", type);
        this.off();
    }
    SEGMENT.prototype.attr = function (attr, d) {
        this.element.setAttributeNS(null, attr, d);
    };
    SEGMENT.prototype.on = function () {
        this.element.setAttributeNS(null, "fill", "lime");
    };
    SEGMENT.prototype.off = function () {
        this.element.setAttributeNS(null, "fill", "#3c3c3b");
    };
    SEGMENT.prototype.instance = function () {
        return this.element;
    };
    return SEGMENT;
}());
var SEGMENT7 = /** @class */ (function (_super) {
    __extends(SEGMENT7, _super);
    function SEGMENT7(element, type, canvasEl) {
        if (type === void 0) { type = null; }
        var _this = _super.call(this, element, type, canvasEl) || this;
        _this.nameSpace = "http://www.w3.org/2000/svg";
        _this.NUMBER = 0;
        _this.numbers = {
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
            10: ["T", "LB", "M", "RB", "RT", "B"],
            11: ["LT", "LB", "RB", "RT", "B", "M"],
            12: ["T", "LT", "LB", "B"],
            13: ["LT", "LB", "RB", "B", "RT", "M"],
            14: ["T", "LT", "LB", "B", "M"],
            15: ["T", "LT", "LB", "M"],
        };
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            D: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("D", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
        };
        _this.Seg = {
            LB: new SEGMENT("path"),
            LT: new SEGMENT("path"),
            B: new SEGMENT("path"),
            T: new SEGMENT("path"),
            RT: new SEGMENT("path"),
            RB: new SEGMENT("path"),
            M: new SEGMENT("polygon"),
        };
        _this.parent = document.createElementNS(_this.nameSpace, "svg");
        _this.setAttr(_this.parent, {
            x: 0,
            y: 0,
            viewBox: "0 0 18.24 25.48",
            width: 54.72,
            height: 76.44,
            style: "background:#1e1e1e;",
        });
        _this.canvas.appendChild(_this.parent);
        _this.paint();
        return _this;
    }
    SEGMENT7.prototype.setAttr = function (el, val) {
        for (var m in val) {
            el.setAttributeNS(null, m, val[m]);
        }
    };
    SEGMENT7.prototype.paint = function () {
        this.Seg.LB.attr("d", "M4.8,14.12,4.65,15.3l-.8,6.16h0L2,23a2.22,2.22,0,0,1-.34-1l1.08-7.86,1.18-1Z");
        this.Seg.B.attr("d", "M13.08,23.72a2.53,2.53,0,0,1-.81.33l-8.71-.11a2.27,2.27,0,0,1-1.19-.52l1.89-1.64h0l7.2.07Z");
        this.Seg.RB.attr("d", "M15.13,14.21,14,22.26a2.12,2.12,0,0,1-.55,1.13l-1.57-1.82,1-7.29,1.29-1.12Z");
        this.Seg.M.attr("points", "13.88 12.77 12.69 13.8 5.2 13.8 4.36 12.82 5.68 11.68 12.94 11.68 13.88 12.77");
        this.Seg.RT.attr("d", "M16.59,3.48l-1.07,7.87h0l-1.24,1.07-.89-1,1-7.29,1.86-1.6A2,2,0,0,1,16.59,3.48Z");
        this.Seg.T.attr("d", "M15.94,2.11,14.18,3.63H6.68L5.23,2A1.81,1.81,0,0,1,6,1.65h9A2,2,0,0,1,15.94,2.11Z");
        this.Seg.LT.attr("d", "M6.35,4,5.24,11.37,4,12.43l-.86-1L4.28,3.3a2.64,2.64,0,0,1,.56-1Z");
        for (var m in this.Seg)
            this.parent.appendChild(this.Seg[m].instance());
        this.canvas.appendChild(this.parent);
    };
    SEGMENT7.prototype.p = function (name) {
        return this.Pins[name].state == _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI ? 1 : 0;
    };
    SEGMENT7.prototype.Fire = function () {
        var _this = this;
        var bin = "" + this.p("D") + this.p("C") + this.p("B") + this.p("A");
        var son = parseInt(bin, 2);
        console.log(son, bin);
        console.log(this.numbers[son].join(" "));
        this.numbers[son].forEach(function (e) {
            _this.Seg[e].on();
        });
    };
    return SEGMENT7;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/components/Enums.ts":
/*!*********************************!*\
  !*** ./src/components/Enums.ts ***!
  \*********************************/
/*! exports provided: PINTYPE, QUTB, KUCHLANISH, WIRESTATE, TOOLTYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINTYPE", function() { return PINTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUTB", function() { return QUTB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KUCHLANISH", function() { return KUCHLANISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIRESTATE", function() { return WIRESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTYPE", function() { return TOOLTYPE; });
var PINTYPE;
(function (PINTYPE) {
    PINTYPE["KIRISH"] = "k";
    PINTYPE["CHIQISH"] = "c";
    PINTYPE["NEYTRAL"] = "n";
})(PINTYPE || (PINTYPE = {}));
var QUTB;
(function (QUTB) {
    QUTB[QUTB["MANFIY"] = -1] = "MANFIY";
    QUTB[QUTB["MUSBAT"] = 1] = "MUSBAT";
})(QUTB || (QUTB = {}));
var KUCHLANISH;
(function (KUCHLANISH) {
    KUCHLANISH[KUCHLANISH["YUQORI"] = 255] = "YUQORI";
    KUCHLANISH[KUCHLANISH["PAST"] = 0] = "PAST";
})(KUCHLANISH || (KUCHLANISH = {}));
var WIRESTATE;
(function (WIRESTATE) {
    WIRESTATE[WIRESTATE["ON"] = 1] = "ON";
    WIRESTATE[WIRESTATE["OFF"] = 1] = "OFF";
})(WIRESTATE || (WIRESTATE = {}));
var TOOLTYPE;
(function (TOOLTYPE) {
    TOOLTYPE["XOR"] = "~";
    TOOLTYPE["AND"] = "&";
    TOOLTYPE["OR"] = "|";
    TOOLTYPE["NOT"] = "!";
    TOOLTYPE["NAND"] = "!&";
    TOOLTYPE["NOR"] = "!|";
    TOOLTYPE["BATTERY"] = "b";
    TOOLTYPE["SEG7"] = "s7";
    TOOLTYPE["LED"] = "ld";
    TOOLTYPE["RGBL"] = "rld";
})(TOOLTYPE || (TOOLTYPE = {}));


/***/ }),

/***/ "./src/components/Komponent.ts":
/*!*************************************!*\
  !*** ./src/components/Komponent.ts ***!
  \*************************************/
/*! exports provided: Komponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Komponent", function() { return Komponent; });
var Komponent = /** @class */ (function () {
    function Komponent(element, type, canvasEl) {
        if (type === void 0) { type = null; }
        if (canvasEl === void 0) { canvasEl = null; }
        this.element = '';
        this.type = null;
        if (type)
            this.type = type;
        this.element = element;
        if (canvasEl)
            this.canvas = document.getElementById(canvasEl);
    }
    Komponent.prototype.render = function () {
    };
    Komponent.prototype.Fire = function () {
        console.log("Fire on komponent bilan fires");
    };
    return Komponent;
}());



/***/ }),

/***/ "./src/components/Pin.ts":
/*!*******************************!*\
  !*** ./src/components/Pin.ts ***!
  \*******************************/
/*! exports provided: Pin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pin", function() { return Pin; });
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums */ "./src/components/Enums.ts");

var Pin = /** @class */ (function () {
    /**
     * Har bir elementga ulanuvchi Pin
     * @param name Pinni identifikatsiya qilish uchun
     * @param pinType Pinning kirish yoki chiqish ekanligini belgilash uchun
     */
    function Pin(name, pinType) {
        this.name = null;
        this.activePin = null;
        this.Pins = {}; // Shu pinga ulangan komponenta
        this.PinType = _Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].NEYTRAL;
        this.Wires = [];
        this.state = _Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST;
        this.Qutb = _Enums__WEBPACK_IMPORTED_MODULE_0__["QUTB"].MANFIY; //Hozircha zarur emas
        this.PinType = pinType;
        this.name = name;
    }
    Pin.prototype.Write = function (kuchlanish) {
        if (kuchlanish) {
            this.Wires.forEach(function (wire) {
                wire.setState(_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].ON);
            });
        }
        else {
            this.Wires.forEach(function (wire) {
                wire.setState(_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].OFF);
            });
        }
        this.state = kuchlanish;
        for (var key in this.Pins) {
            this.Pins[key].pins.forEach(function (e) {
                e.Write(kuchlanish);
            });
            this.Pins[key].komponent.Fire();
        }
    };
    Pin.prototype.addPin = function (komponent, pinName) {
        if (komponent === void 0) { komponent = null; }
        if (pinName === void 0) { pinName = null; }
        var a = komponent.element;
        if (this.Pins[a]) {
            this.Pins[a].pins.push(pinName);
        }
        else {
            this.Pins[a] = {
                komponent: komponent,
                pins: [pinName]
            };
        }
    };
    Pin.prototype.addWire = function (wire) {
        if (wire === void 0) { wire = null; }
        this.Wires.push(wire);
    };
    Pin.prototype.removeWire = function (name) {
        this.Wires = this.Wires.filter(function (wire) { return wire.name !== name; });
    };
    Pin.prototype.getName = function () {
        return this.name;
    };
    Pin.prototype.getComponents = function () {
        var buf = [];
        for (var key in this.Pins) {
            buf.push(this.Pins[key].komponent);
        }
        return buf;
    };
    return Pin;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Enums */ "./src/components/Enums.ts");
/* harmony import */ var _Tools_Battery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tools/Battery */ "./src/Tools/Battery.ts");
/* harmony import */ var _Tools_Segment7__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tools/Segment7 */ "./src/Tools/Segment7.ts");
/* harmony import */ var _Tools_Not__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tools/Not */ "./src/Tools/Not.ts");
/* harmony import */ var _Tools_And__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tools/And */ "./src/Tools/And.ts");
/* harmony import */ var _styles_main_style_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main-style.sass */ "./src/styles/main-style.sass");
/* harmony import */ var _styles_main_style_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_style_sass__WEBPACK_IMPORTED_MODULE_5__);






var and = new _Tools_And__WEBPACK_IMPORTED_MODULE_4__["AND"]("VaElementi", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].AND, "root");
var batt = new _Tools_Battery__WEBPACK_IMPORTED_MODULE_1__["Battery"]("elementBattery", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BATTERY);
var segment = new _Tools_Segment7__WEBPACK_IMPORTED_MODULE_2__["SEGMENT7"]("sifr", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SEG7, "root");
var emas = new _Tools_Not__WEBPACK_IMPORTED_MODULE_3__["NOT"]("EMAS", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].NOT);
batt.Pins.OUT.addPin(segment, segment.Pins.B);
batt.Pins.OUT.addPin(segment, segment.Pins.C);
batt.Pins.OUT.addPin(segment, segment.Pins.A);
batt.Pins.OUT.addPin(segment, segment.Pins.D);
batt.setState(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);


/***/ }),

/***/ "./src/styles/main-style.sass":
/*!************************************!*\
  !*** ./src/styles/main-style.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/style-loader/dist/cjs.js):\nTypeError: this.getOptions is not a function\n    at Object.loader (/home/allayor/Desktop/typescript-calculator/node_modules/style-loader/dist/index.js:19:24)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL0FuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvQmF0dGVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvTm90LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9TZWdtZW50Ny50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Lb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGluLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZvRTtBQUNoQjtBQUNaO0FBRXhDO0lBQXlC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RSxJQUFJLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDcEMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDcEIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3BDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQ3JDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3RDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUMxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUN0QyxF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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBLVUNITEFOSVNILCBQSU5UWVBFLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgQU5EIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgcHVibGljIHBpbnMgPSB7XG4gICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEI6IG5ldyBQaW4oXCJCXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBDOiBuZXcgUGluKFwiQ1wiLCBQSU5UWVBFLkNISVFJU0gpLFxuICB9O1xuICBzdmdGaWxlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgdHlwZTogVE9PTFRZUEUgPSBudWxsLCBjYW52YXNFbDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgdHlwZSk7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsKTtcblxuICAgIHRoaXMuc3ZnRmlsZSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1LjI4IDExLjQ2XCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2NmIzMmU7fS5jbHMtMSwuY2xzLTJ7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDowLjVweDt9LmNscy0ye2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPjxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTYuMTMuMjV2MTFoOC42NGE1LjI5LDUuMjksMCwwLDAsNC42NS01LjQ4QTUuMjQsNS4yNCwwLDAsMCwxNC44Ni4yNVpcIi8+PGxpbmUgY2xhc3M9XCJjbHMtMlwiIHgxPVwiNi4xM1wiIHkxPVwiMi43OVwiIHgyPVwiMC4yNVwiIHkyPVwiMi43OVwiLz48bGluZSBjbGFzcz1cImNscy0yXCIgeDE9XCIwLjI1XCIgeTE9XCI4LjY3XCIgeDI9XCI2LjEzXCIgeTI9XCI4LjY3XCIvPjxsaW5lIGNsYXNzPVwiY2xzLTJcIiB4MT1cIjE5LjQyXCIgeTE9XCI1LjczXCIgeDI9XCIyNS4wM1wiIHkyPVwiNS43M1wiLz48L2c+PC9nPjwvc3ZnPmA7XG4gICAgbGV0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFyLmlubmVySFRNTCA9IHRoaXMuc3ZnRmlsZTtcbiAgICBjYW52YXMuYXBwZW5kQ2hpbGQocGFyKTtcbiAgfVxuICBEcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3ZnRmlsZSk7XG4gIH1cbiAgRmlyZSgpIHtcbiAgICBpZiAodGhpcy5waW5zLkEuc3RhdGUgJiB0aGlzLnBpbnMuQi5zdGF0ZSkge1xuICAgICAgdGhpcy5waW5zLkMuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpbnMuQy5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgQmF0dGVyeSBleHRlbmRzIEtvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgUGlucyA9IHtcbiAgICAgICAgT1VUOiBuZXcgUGluKCdPVVQnLCBQSU5UWVBFLkNISVFJU0gpXG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKGt1Y2hsYW5pc2g6IEtVQ0hMQU5JU0gpIHtcbiAgICAgICAgdGhpcy5QaW5zLk9VVC5Xcml0ZShrdWNobGFuaXNoKVxuICAgIH1cbiAgIFxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgVE9PTFRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIE5PVCBleHRlbmRzIEtvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nLCB0eXBlOiBUT09MVFlQRSA9IG51bGwpe1xuICAgICAgICBzdXBlcihlbGVtZW50LHR5cGUpXG4gICAgfVxuICAgIHB1YmxpYyBQaW5zID0ge1xuICAgICAgICBBOiBuZXcgUGluKCdBJywgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgICBCOiBuZXcgUGluKCdCJywgUElOVFlQRS5DSElRSVNIKVxuICAgIH1cbiAgICBGaXJlKCkge1xuICAgICAgICB0aGlzLlBpbnMuQi5Xcml0ZSh0aGlzLlBpbnMuQS5zdGF0ZSAhPSAwID8gS1VDSExBTklTSC5QQVNUIDogS1VDSExBTklTSC5ZVVFPUkkpXG4gICAgfVxufSIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5jbGFzcyBTRUdNRU5UIHtcbiAgcHJpdmF0ZSBlbGVtZW50OiBTVkdFbGVtZW50O1xuICBwcml2YXRlIHE6IHN0cmluZyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdHlwZSk7XG4gICAgdGhpcy5vZmYoKTtcbiAgfVxuICBhdHRyKGF0dHI6IHN0cmluZywgZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIGF0dHIsIGQpO1xuICB9XG4gIG9uKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJsaW1lXCIpO1xuICB9XG4gIG9mZigpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwiIzNjM2MzYlwiKTtcbiAgfVxuICBpbnN0YW5jZSgpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50IGFzIFNWR0VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRUdNRU5UVkFSIHtcbiAgTEI/OiBTRUdNRU5UO1xuICBMVD86IFNFR01FTlQ7XG4gIFQ/OiBTRUdNRU5UO1xuICBCPzogU0VHTUVOVDtcbiAgUlQ/OiBTRUdNRU5UO1xuICBSQj86IFNFR01FTlQ7XG4gIE0/OiBTRUdNRU5UO1xufVxuZXhwb3J0IGNsYXNzIFNFR01FTlQ3IGV4dGVuZHMgS29tcG9uZW50IHtcbiAgcHJpdmF0ZSBuYW1lU3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIHB1YmxpYyBOVU1CRVIgPSAwO1xuICBwcml2YXRlIHBhcmVudDogU1ZHRWxlbWVudDtcbiAgcHJpdmF0ZSBudW1iZXJzID0ge1xuICAgIDA6IFtcIlRcIiwgXCJSVFwiLCBcIlJCXCIsIFwiQlwiLCBcIkxCXCIsIFwiTFRcIl0sXG4gICAgMTogW1wiUlRcIiwgXCJSQlwiXSxcbiAgICAyOiBbXCJUXCIsIFwiUlRcIiwgXCJNXCIsIFwiTEJcIiwgXCJCXCJdLFxuICAgIDM6IFtcIlRcIiwgXCJSVFwiLCBcIlJCXCIsIFwiTVwiLCBcIkJcIl0sXG4gICAgNDogW1wiTFRcIiwgXCJNXCIsIFwiUlRcIiwgXCJSQlwiXSxcbiAgICA1OiBbXCJUXCIsIFwiTFRcIiwgXCJNXCIsIFwiUkJcIiwgXCJCXCJdLFxuICAgIDY6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiTVwiLCBcIlJCXCIsIFwiQlwiXSxcbiAgICA3OiBbXCJSVFwiLCBcIlJCXCIsIFwiVFwiXSxcbiAgICA4OiBbXCJUXCIsIFwiTFRcIiwgXCJMQlwiLCBcIk1cIiwgXCJSQlwiLCBcIkJcIiwgXCJSVFwiXSxcbiAgICA5OiBbXCJUXCIsIFwiTFRcIiwgXCJNXCIsIFwiUkJcIiwgXCJCXCIsIFwiUlRcIl0sXG4gICAgMTA6IFtcIlRcIiwgXCJMQlwiLCBcIk1cIiwgXCJSQlwiLCBcIlJUXCIsIFwiQlwiXSxcbiAgICAxMTogW1wiTFRcIiwgXCJMQlwiLCBcIlJCXCIsIFwiUlRcIiwgXCJCXCIsIFwiTVwiXSxcbiAgICAxMjogW1wiVFwiLCBcIkxUXCIsIFwiTEJcIiwgXCJCXCJdLFxuICAgIDEzOiBbXCJMVFwiLCBcIkxCXCIsIFwiUkJcIiwgXCJCXCIsIFwiUlRcIiwgXCJNXCJdLFxuICAgIDE0OiBbXCJUXCIsIFwiTFRcIiwgXCJMQlwiLCBcIkJcIiwgXCJNXCJdLFxuICAgIDE1OiBbXCJUXCIsIFwiTFRcIiwgXCJMQlwiLCBcIk1cIl0sXG4gIH07XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgdHlwZTogVE9PTFRZUEUgPSBudWxsLCBjYW52YXNFbDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgdHlwZSwgY2FudmFzRWwpO1xuICAgIHRoaXMucGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZVNwYWNlLCBcInN2Z1wiKSBhcyBTVkdFbGVtZW50O1xuICAgIHRoaXMuc2V0QXR0cih0aGlzLnBhcmVudCwge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxOC4yNCAyNS40OFwiLFxuICAgICAgd2lkdGg6IDU0LjcyLFxuICAgICAgaGVpZ2h0OiA3Ni40NCxcbiAgICAgIHN0eWxlOiBcImJhY2tncm91bmQ6IzFlMWUxZTtcIixcbiAgICB9KTtcbiAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZCh0aGlzLnBhcmVudCk7XG4gICAgdGhpcy5wYWludCgpO1xuICB9XG5cbiAgcHVibGljIFBpbnMgPSB7XG4gICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEI6IG5ldyBQaW4oXCJCXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBDOiBuZXcgUGluKFwiQ1wiLCBQSU5UWVBFLktJUklTSCksXG4gICAgRDogbmV3IFBpbihcIkRcIiwgUElOVFlQRS5LSVJJU0gpLFxuICB9O1xuICBzZXRBdHRyKGVsOiBTVkdFbGVtZW50LCB2YWw6IG9iamVjdCkge1xuICAgIGZvciAoY29uc3QgbSBpbiB2YWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKG51bGwsIG0sIHZhbFttXSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBTZWc6IFNFR01FTlRWQVIgPSB7XG4gICAgTEI6IG5ldyBTRUdNRU5UKFwicGF0aFwiKSxcbiAgICBMVDogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIEI6IG5ldyBTRUdNRU5UKFwicGF0aFwiKSxcbiAgICBUOiBuZXcgU0VHTUVOVChcInBhdGhcIiksXG4gICAgUlQ6IG5ldyBTRUdNRU5UKFwicGF0aFwiKSxcbiAgICBSQjogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIE06IG5ldyBTRUdNRU5UKFwicG9seWdvblwiKSxcbiAgfTtcbiAgcHJpdmF0ZSBwYWludCgpIHtcbiAgICB0aGlzLlNlZy5MQi5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk00LjgsMTQuMTIsNC42NSwxNS4zbC0uOCw2LjE2aDBMMiwyM2EyLjIyLDIuMjIsMCwwLDEtLjM0LTFsMS4wOC03Ljg2LDEuMTgtMVpcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuQi5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xMy4wOCwyMy43MmEyLjUzLDIuNTMsMCwwLDEtLjgxLjMzbC04LjcxLS4xMWEyLjI3LDIuMjcsMCwwLDEtMS4xOS0uNTJsMS44OS0xLjY0aDBsNy4yLjA3WlwiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5SQi5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xNS4xMywxNC4yMSwxNCwyMi4yNmEyLjEyLDIuMTIsMCwwLDEtLjU1LDEuMTNsLTEuNTctMS44MiwxLTcuMjksMS4yOS0xLjEyWlwiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5NLmF0dHIoXG4gICAgICBcInBvaW50c1wiLFxuICAgICAgXCIxMy44OCAxMi43NyAxMi42OSAxMy44IDUuMiAxMy44IDQuMzYgMTIuODIgNS42OCAxMS42OCAxMi45NCAxMS42OCAxMy44OCAxMi43N1wiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5SVC5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xNi41OSwzLjQ4bC0xLjA3LDcuODdoMGwtMS4yNCwxLjA3LS44OS0xLDEtNy4yOSwxLjg2LTEuNkEyLDIsMCwwLDEsMTYuNTksMy40OFpcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuVC5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xNS45NCwyLjExLDE0LjE4LDMuNjNINi42OEw1LjIzLDJBMS44MSwxLjgxLDAsMCwxLDYsMS42NWg5QTIsMiwwLDAsMSwxNS45NCwyLjExWlwiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5MVC5hdHRyKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk02LjM1LDQsNS4yNCwxMS4zNyw0LDEyLjQzbC0uODYtMUw0LjI4LDMuM2EyLjY0LDIuNjQsMCwwLDEsLjU2LTFaXCJcbiAgICApO1xuICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLlNlZykgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5TZWdbbV0uaW5zdGFuY2UoKSk7XG5cbiAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZCh0aGlzLnBhcmVudCk7XG4gIH1cbiAgcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5QaW5zW25hbWVdLnN0YXRlID09IEtVQ0hMQU5JU0guWVVRT1JJID8gMSA6IDA7XG4gIH1cbiAgRmlyZSgpIHtcbiAgICBsZXQgYmluID0gYCR7dGhpcy5wKFwiRFwiKX0ke3RoaXMucChcIkNcIil9JHt0aGlzLnAoXCJCXCIpfSR7dGhpcy5wKFwiQVwiKX1gO1xuICAgIGxldCBzb24gPSBwYXJzZUludChiaW4sIDIpO1xuICAgIGNvbnNvbGUubG9nKHNvbiwgYmluKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm51bWJlcnNbc29uXS5qb2luKFwiIFwiKSk7XG4gICAgdGhpcy5udW1iZXJzW3Nvbl0uZm9yRWFjaCgoZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLlNlZ1tlXS5vbigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBQSU5UWVBFIHtcbiAgICBLSVJJU0ggPSAnaycsXG4gICAgQ0hJUUlTSCA9ICdjJyxcbiAgICBORVlUUkFMID0gJ24nXG59XG5leHBvcnQgZW51bSBRVVRCIHtcbiAgICBNQU5GSVkgPSAtMSxcbiAgICBNVVNCQVQgPSAxXG59XG5leHBvcnQgZW51bSBLVUNITEFOSVNIe1xuICAgIFlVUU9SST0yNTUsXG4gICAgUEFTVD0wXG59XG5leHBvcnQgZW51bSBXSVJFU1RBVEV7XG4gICAgT049MSxcbiAgICBPRkY9MVxufVxuXG5leHBvcnQgZW51bSBUT09MVFlQRXtcbiAgICBYT1I9J34nLFxuICAgIEFORD0nJicsXG4gICAgT1I9J3wnLFxuICAgIE5PVD0nIScsXG4gICAgTkFORD0nISYnLFxuICAgIE5PUj0nIXwnLFxuICAgIEJBVFRFUlk9J2InLFxuICAgIFNFRzc9J3M3JyxcbiAgICBMRUQ9J2xkJyxcbiAgICBSR0JMPSdybGQnXG5cbn0iLCJcbmltcG9ydCB7IFRPT0xUWVBFLCBQSU5UWVBFIH0gZnJvbSAnLi9FbnVtcydcbmltcG9ydCB7IFBpbiB9IGZyb20gJy4vUGluJ1xuZXhwb3J0IGNsYXNzIEtvbXBvbmVudCB7XG4gICAgZWxlbWVudDogc3RyaW5nID0gJydcbiAgICBwdWJsaWMgdHlwZTogVE9PTFRZUEUgPSBudWxsXG4gICAgcHVibGljIGNhbnZhczogSFRNTEVsZW1lbnRcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcsIHR5cGU6IFRPT0xUWVBFID0gbnVsbCwgY2FudmFzRWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGUpIHRoaXMudHlwZSA9IHR5cGVcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgICAgICBpZiAoY2FudmFzRWwpXG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICB9XG4gICAgRmlyZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlIG9uIGtvbXBvbmVudCBiaWxhbiBmaXJlc1wiKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tICcuL0tvbXBvbmVudCdcbmltcG9ydCB7IFBJTlRZUEUsIFFVVEIsIEtVQ0hMQU5JU0gsIFdJUkVTVEFURSwgVE9PTFRZUEUgfSBmcm9tICcuL0VudW1zJ1xuXG5pbXBvcnQgeyBXaXJlIH0gZnJvbSAnLi9XaXJlJ1xuaW1wb3J0IHsgWE9SIH0gZnJvbSAnLi4vVG9vbHMvWG9yJ1xuaW1wb3J0IHsgQU5EIH0gZnJvbSAnLi4vVG9vbHMvQW5kJ1xuaW1wb3J0IHsgT1IgfSBmcm9tICcuLi9Ub29scy9PcidcbmltcG9ydCB7IFNFR01FTlQ3IH0gZnJvbSAnLi4vVG9vbHMvU2VnbWVudDcnXG5pbnRlcmZhY2UgQ0hJTEQge1xuICAgIGtvbXBvbmVudDogS29tcG9uZW50LFxuICAgIHBpbnM6IEFycmF5PFBpbj5cbn1cbmludGVyZmFjZSBDSElMRFMge1xuICAgIFtuYW1lOiBzdHJpbmddOiBDSElMRFxufVxuZXhwb3J0IGNsYXNzIFBpbiB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSBudWxsXG4gICAgcHJpdmF0ZSBhY3RpdmVQaW46IHN0cmluZyA9IG51bGxcbiAgICBwdWJsaWMgUGluczogQ0hJTERTID0ge30vLyBTaHUgcGluZ2EgdWxhbmdhbiBrb21wb25lbnRhXG4gICAgcHVibGljIFBpblR5cGU6IFBJTlRZUEUgPSBQSU5UWVBFLk5FWVRSQUxcbiAgICBwdWJsaWMgV2lyZXM6IEFycmF5PFdpcmU+ID0gW11cbiAgICBwdWJsaWMgc3RhdGU6IEtVQ0hMQU5JU0ggPSBLVUNITEFOSVNILlBBU1RcbiAgICBwdWJsaWMgUXV0YjogUVVUQiA9IFFVVEIuTUFORklZIC8vSG96aXJjaGEgemFydXIgZW1hc1xuICAgIC8qKlxuICAgICAqIEhhciBiaXIgZWxlbWVudGdhIHVsYW51dmNoaSBQaW5cbiAgICAgKiBAcGFyYW0gbmFtZSBQaW5uaSBpZGVudGlmaWthdHNpeWEgcWlsaXNoIHVjaHVuXG4gICAgICogQHBhcmFtIHBpblR5cGUgUGlubmluZyBraXJpc2ggeW9raSBjaGlxaXNoIGVrYW5saWdpbmkgYmVsZ2lsYXNoIHVjaHVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwaW5UeXBlOiBQSU5UWVBFKSB7XG4gICAgICAgIHRoaXMuUGluVHlwZSA9IHBpblR5cGVcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuXG4gICAgV3JpdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgICAgICBpZiAoa3VjaGxhbmlzaCkge1xuICAgICAgICAgICAgdGhpcy5XaXJlcy5mb3JFYWNoKHdpcmUgPT4ge1xuICAgICAgICAgICAgICAgIHdpcmUuc2V0U3RhdGUoV0lSRVNUQVRFLk9OKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuV2lyZXMuZm9yRWFjaCh3aXJlID0+IHtcbiAgICAgICAgICAgICAgICB3aXJlLnNldFN0YXRlKFdJUkVTVEFURS5PRkYpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBrdWNobGFuaXNoXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuUGlucykge1xuICAgICAgICAgICAgdGhpcy5QaW5zW2tleV0ucGlucy5mb3JFYWNoKChlOiBQaW4pID0+IHtcbiAgICAgICAgICAgICAgICBlLldyaXRlKGt1Y2hsYW5pc2gpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5QaW5zW2tleV0ua29tcG9uZW50LkZpcmUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFBpbihrb21wb25lbnQ6IEtvbXBvbmVudCA9IG51bGwsIHBpbk5hbWU6IFBpbiA9IG51bGwpIHtcbiAgICAgICAgbGV0IGEgPSBrb21wb25lbnQuZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5QaW5zW2FdKSB7XG4gICAgICAgICAgICB0aGlzLlBpbnNbYV0ucGlucy5wdXNoKHBpbk5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlBpbnNbYV0gPSB7XG4gICAgICAgICAgICAgICAga29tcG9uZW50OiBrb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcGluczogW3Bpbk5hbWVdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkV2lyZSh3aXJlOiBXaXJlID0gbnVsbCkge1xuICAgICAgICB0aGlzLldpcmVzLnB1c2god2lyZSlcbiAgICB9XG4gICAgcmVtb3ZlV2lyZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5XaXJlcyA9IHRoaXMuV2lyZXMuZmlsdGVyKHdpcmUgPT4gd2lyZS5uYW1lICE9PSBuYW1lKVxuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIGdldENvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBidWYgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLlBpbnMpIHtcbiAgICAgICAgICAgIGJ1Zi5wdXNoKHRoaXMuUGluc1trZXldLmtvbXBvbmVudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVE9PTFRZUEUsIFBJTlRZUEUsIEtVQ0hMQU5JU0ggfSBmcm9tIFwiLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBCYXR0ZXJ5IH0gZnJvbSBcIi4vVG9vbHMvQmF0dGVyeVwiO1xuaW1wb3J0IHsgU0VHTUVOVDcgfSBmcm9tIFwiLi9Ub29scy9TZWdtZW50N1wiO1xuaW1wb3J0IHsgTk9UIH0gZnJvbSBcIi4vVG9vbHMvTm90XCI7XG5pbXBvcnQgeyBBTkQgfSBmcm9tIFwiLi9Ub29scy9BbmRcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21haW4tc3R5bGUuc2Fzc1wiO1xubGV0IGFuZCA9IG5ldyBBTkQoXCJWYUVsZW1lbnRpXCIsIFRPT0xUWVBFLkFORCwgXCJyb290XCIpO1xubGV0IGJhdHQgPSBuZXcgQmF0dGVyeShcImVsZW1lbnRCYXR0ZXJ5XCIsIFRPT0xUWVBFLkJBVFRFUlkpO1xubGV0IHNlZ21lbnQgPSBuZXcgU0VHTUVOVDcoXCJzaWZyXCIsIFRPT0xUWVBFLlNFRzcsIFwicm9vdFwiKTtcbmxldCBlbWFzID0gbmV3IE5PVChcIkVNQVNcIiwgVE9PTFRZUEUuTk9UKTtcbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsIHNlZ21lbnQuUGlucy5CKTtcbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsIHNlZ21lbnQuUGlucy5DKTtcbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsIHNlZ21lbnQuUGlucy5BKTtcbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsIHNlZ21lbnQuUGlucy5EKTtcbmJhdHQuc2V0U3RhdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
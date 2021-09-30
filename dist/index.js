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



class Battery extends _components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"] {
    constructor() {
        super(...arguments);
        this.Pins = {
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('OUT', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH)
        };
    }
    setState(kuchlanish) {
        this.Pins.OUT.Write(kuchlanish);
    }
}


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



class NOT extends _components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"] {
    constructor(element, type = null) {
        super(element, type);
        this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('A', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('B', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH)
        };
    }
    Fire() {
        this.Pins.B.Write(this.Pins.A.state != 0 ? _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST : _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
    }
}


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



class SEGMENT7 extends _components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"] {
    constructor() {
        super(...arguments);
        this.NUMBER = 0;
        this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('A', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('B', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('C', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            D: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]('D', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH)
        };
    }
    p(name) {
        return this.Pins[name].state == _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI ? 1 : 0;
    }
    Fire() {
        let bin = `${this.p('D')}${this.p('C')}${this.p('B')}${this.p('A')}`;
        this.NUMBER = parseInt(bin, 2);
    }
}


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
class Komponent {
    constructor(element, type = null) {
        this.element = '';
        this.type = null;
        if (type)
            this.type = type;
        this.element = element;
    }
    render() {
    }
}


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

class Pin {
    /**
     * Har bir elementga ulanuvchi Pin
     * @param name Pinni identifikatsiya qilish uchun
     * @param pinType Pinning kirish yoki chiqish ekanligini belgilash uchun
     */
    constructor(name, pinType) {
        this.name = null;
        this.activePin = null;
        this.Pins = []; // Shu pinga ulangan komponenta
        this.PinType = _Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].NEYTRAL;
        this.Wires = [];
        this.state = _Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST;
        this.Qutb = _Enums__WEBPACK_IMPORTED_MODULE_0__["QUTB"].MANFIY; //Hozircha zarur emas
        this.PinType = pinType;
        this.name = name;
    }
    Write(kuchlanish) {
        if (kuchlanish) {
            this.Wires.forEach(wire => {
                wire.setState(_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].ON);
            });
        }
        else {
            this.Wires.forEach(wire => {
                wire.setState(_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].OFF);
            });
        }
        console.log('This tool name:' + this.name);
        this.state = kuchlanish;
        this.Pins.forEach((el) => {
            switch (el.parent.type) {
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].XOR: {
                    let m = el.parent;
                    m.pins[el.pinName].Write(kuchlanish);
                    m.Fire();
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].AND: {
                    let m = el.parent;
                    m.pins[el.pinName].Write(kuchlanish);
                    m.Fire();
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].OR: {
                    let m = el.parent;
                    m.pins[el.pinName].Write(kuchlanish);
                    m.Fire();
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SEG7: {
                    let m = el.parent;
                    m.Pins[el.pinName].Write(kuchlanish);
                    m.Fire();
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].NOT: {
                    let m = el.parent;
                    m.Pins[el.pinName].Write(kuchlanish);
                    m.Fire();
                    break;
                }
            }
        });
    }
    addPin(komponent = null, pinName = null) {
        let komp;
        if (komponent) {
            komp = {
                parent: komponent,
                pinName: pinName.getName()
            };
            this.Pins.push(komp);
        }
    }
    addWire(wire = null) {
        this.Wires.push(wire);
    }
    removeWire(name) {
        this.Wires = this.Wires.filter(wire => wire.name !== name);
    }
    getName() {
        return this.name;
    }
}


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




let batt = new _Tools_Battery__WEBPACK_IMPORTED_MODULE_1__["Battery"]('elementBattery', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BATTERY);
let segment = new _Tools_Segment7__WEBPACK_IMPORTED_MODULE_2__["SEGMENT7"]('sifr', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SEG7);
let emas = new _Tools_Not__WEBPACK_IMPORTED_MODULE_3__["NOT"]('EMAS', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].NOT);
batt.Pins.OUT.addPin(segment, segment.Pins.A);
batt.Pins.OUT.addPin(segment, segment.Pins.B);
batt.Pins.OUT.addPin(segment, segment.Pins.C);
batt.Pins.OUT.addPin(emas, emas.Pins.A);
emas.Pins.B.addPin(segment, segment.Pins.D);
batt.setState(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
console.log(segment.NUMBER);
let root = document.getElementById('root');
root.innerText = segment.NUMBER.toString();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL0JhdHRlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL05vdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvU2VnbWVudDcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ047QUFDWjtBQUVqQyxNQUFNLE9BQVEsU0FBUSwrREFBUztJQUF0Qzs7UUFF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RUFBRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgQmF0dGVyeSBleHRlbmRzIEtvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgUGlucyA9IHtcbiAgICAgICAgT1VUOiBuZXcgUGluKCdPVVQnLCBQSU5UWVBFLkNISVFJU0gpXG4gICAgfVxuICAgIFxuICAgIHNldFN0YXRlKGt1Y2hsYW5pc2g6IEtVQ0hMQU5JU0gpIHtcbiAgICAgICAgdGhpcy5QaW5zLk9VVC5Xcml0ZShrdWNobGFuaXNoKVxuICAgIH1cbiAgIFxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgVE9PTFRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIE5PVCBleHRlbmRzIEtvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nLCB0eXBlOiBUT09MVFlQRSA9IG51bGwpe1xuICAgICAgICBzdXBlcihlbGVtZW50LHR5cGUpXG4gICAgfVxuICAgIHB1YmxpYyBQaW5zID0ge1xuICAgICAgICBBOiBuZXcgUGluKCdBJywgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgICBCOiBuZXcgUGluKCdCJywgUElOVFlQRS5DSElRSVNIKVxuICAgIH1cbiAgICBGaXJlKCkge1xuICAgICAgICB0aGlzLlBpbnMuQi5Xcml0ZSh0aGlzLlBpbnMuQS5zdGF0ZSAhPSAwID8gS1VDSExBTklTSC5QQVNUIDogS1VDSExBTklTSC5ZVVFPUkkpXG4gICAgfVxufSIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIFNFR01FTlQ3IGV4dGVuZHMgS29tcG9uZW50e1xuICAgIHB1YmxpYyBOVU1CRVI9MFxuICAgIHB1YmxpYyBQaW5zPXtcbiAgICAgICAgQTpuZXcgUGluKCdBJyxQSU5UWVBFLktJUklTSCksXG4gICAgICAgIEI6bmV3IFBpbignQicsUElOVFlQRS5LSVJJU0gpLFxuICAgICAgICBDOm5ldyBQaW4oJ0MnLFBJTlRZUEUuS0lSSVNIKSxcbiAgICAgICAgRDpuZXcgUGluKCdEJyxQSU5UWVBFLktJUklTSClcbiAgICB9XG4gICAgcChuYW1lOnN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLlBpbnNbbmFtZV0uc3RhdGU9PUtVQ0hMQU5JU0guWVVRT1JJPzE6MFxuICAgIH1cbiAgICBGaXJlKCl7XG4gICAgICAgIGxldCBiaW49YCR7dGhpcy5wKCdEJyl9JHt0aGlzLnAoJ0MnKX0ke3RoaXMucCgnQicpfSR7dGhpcy5wKCdBJyl9YFxuICAgICAgICB0aGlzLk5VTUJFUj1wYXJzZUludChiaW4sMilcbiAgICB9XG59IiwiZXhwb3J0IGVudW0gUElOVFlQRSB7XG4gICAgS0lSSVNIID0gJ2snLFxuICAgIENISVFJU0ggPSAnYycsXG4gICAgTkVZVFJBTCA9ICduJ1xufVxuZXhwb3J0IGVudW0gUVVUQiB7XG4gICAgTUFORklZID0gLTEsXG4gICAgTVVTQkFUID0gMVxufVxuZXhwb3J0IGVudW0gS1VDSExBTklTSHtcbiAgICBZVVFPUkk9MjU1LFxuICAgIFBBU1Q9MFxufVxuZXhwb3J0IGVudW0gV0lSRVNUQVRFe1xuICAgIE9OPTEsXG4gICAgT0ZGPTFcbn1cblxuZXhwb3J0IGVudW0gVE9PTFRZUEV7XG4gICAgWE9SPSd+JyxcbiAgICBBTkQ9JyYnLFxuICAgIE9SPSd8JyxcbiAgICBOT1Q9JyEnLFxuICAgIE5BTkQ9JyEmJyxcbiAgICBOT1I9JyF8JyxcbiAgICBCQVRURVJZPSdiJyxcbiAgICBTRUc3PSdzNycsXG4gICAgTEVEPSdsZCcsXG4gICAgUkdCTD0ncmxkJ1xuXG59IiwiXG5pbXBvcnQgeyBUT09MVFlQRSwgUElOVFlQRSB9IGZyb20gJy4vRW51bXMnXG5pbXBvcnQgeyBQaW4gfSBmcm9tICcuL1BpbidcbmV4cG9ydCBjbGFzcyBLb21wb25lbnQge1xuICAgIGVsZW1lbnQ6IHN0cmluZyA9ICcnXG4gICAgcHVibGljIHR5cGU6IFRPT0xUWVBFID0gbnVsbFxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgdHlwZTogVE9PTFRZUEUgPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlKSB0aGlzLnR5cGUgPSB0eXBlXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSAnLi9Lb21wb25lbnQnXG5pbXBvcnQgeyBQSU5UWVBFLCBRVVRCLCBLVUNITEFOSVNILCBXSVJFU1RBVEUsIFRPT0xUWVBFIH0gZnJvbSAnLi9FbnVtcydcbmltcG9ydCB7IENQSU4gfSBmcm9tICcuL0ludGVyZmFjZXMnXG5pbXBvcnQgeyBXaXJlIH0gZnJvbSAnLi9XaXJlJ1xuaW1wb3J0IHsgWE9SIH0gZnJvbSAnLi4vVG9vbHMvWG9yJ1xuaW1wb3J0IHsgQU5EIH0gZnJvbSAnLi4vVG9vbHMvQW5kJ1xuaW1wb3J0IHsgT1IgfSBmcm9tICcuLi9Ub29scy9PcidcbmltcG9ydCB7IFNFR01FTlQ3IH0gZnJvbSAnLi4vVG9vbHMvU2VnbWVudDcnXG5leHBvcnQgY2xhc3MgUGluIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZyA9IG51bGxcbiAgICBwcml2YXRlIGFjdGl2ZVBpbjogc3RyaW5nID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEhhciBiaXIgZWxlbWVudGdhIHVsYW51dmNoaSBQaW5cbiAgICAgKiBAcGFyYW0gbmFtZSBQaW5uaSBpZGVudGlmaWthdHNpeWEgcWlsaXNoIHVjaHVuXG4gICAgICogQHBhcmFtIHBpblR5cGUgUGlubmluZyBraXJpc2ggeW9raSBjaGlxaXNoIGVrYW5saWdpbmkgYmVsZ2lsYXNoIHVjaHVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwaW5UeXBlOiBQSU5UWVBFKSB7XG4gICAgICAgIHRoaXMuUGluVHlwZSA9IHBpblR5cGVcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBQaW5zOiBBcnJheTxPYmplY3Q+ID0gW10vLyBTaHUgcGluZ2EgdWxhbmdhbiBrb21wb25lbnRhXG4gICAgcHVibGljIFBpblR5cGU6IFBJTlRZUEUgPSBQSU5UWVBFLk5FWVRSQUxcbiAgICBwdWJsaWMgV2lyZXM6IEFycmF5PFdpcmU+ID0gW11cbiAgICBwdWJsaWMgc3RhdGU6IEtVQ0hMQU5JU0ggPSBLVUNITEFOSVNILlBBU1RcbiAgICBwdWJsaWMgUXV0YjogUVVUQiA9IFFVVEIuTUFORklZIC8vSG96aXJjaGEgemFydXIgZW1hc1xuXG4gICAgV3JpdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgICAgICBpZiAoa3VjaGxhbmlzaCkge1xuICAgICAgICAgICAgdGhpcy5XaXJlcy5mb3JFYWNoKHdpcmUgPT4ge1xuICAgICAgICAgICAgICAgIHdpcmUuc2V0U3RhdGUoV0lSRVNUQVRFLk9OKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuV2lyZXMuZm9yRWFjaCh3aXJlID0+IHtcbiAgICAgICAgICAgICAgICB3aXJlLnNldFN0YXRlKFdJUkVTVEFURS5PRkYpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHRvb2wgbmFtZTonICsgdGhpcy5uYW1lKVxuICAgICAgICB0aGlzLnN0YXRlID0ga3VjaGxhbmlzaFxuICAgICAgICB0aGlzLlBpbnMuZm9yRWFjaCgoZWw6Q1BJTikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlbC5wYXJlbnQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgVE9PTFRZUEUuWE9SOntcbiAgICAgICAgICAgICAgICAgICAgbGV0IG06IFhPUiA9IGVsLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICBtLnBpbnNbZWwucGluTmFtZV0uV3JpdGUoa3VjaGxhbmlzaClcbiAgICAgICAgICAgICAgICAgICAgbS5GaXJlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUT09MVFlQRS5BTkQ6e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbTpBTkQ9ZWwucGFyZW50XG4gICAgICAgICAgICAgICAgICAgIG0ucGluc1tlbC5waW5OYW1lXS5Xcml0ZShrdWNobGFuaXNoKVxuICAgICAgICAgICAgICAgICAgICBtLkZpcmUoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRPT0xUWVBFLk9SOntcbiAgICAgICAgICAgICAgICAgICAgbGV0IG06T1I9ZWwucGFyZW50XG4gICAgICAgICAgICAgICAgICAgIG0ucGluc1tlbC5waW5OYW1lXS5Xcml0ZShrdWNobGFuaXNoKVxuICAgICAgICAgICAgICAgICAgICBtLkZpcmUoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFRPT0xUWVBFLlNFRzc6e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbTpTRUdNRU5UNz1lbC5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgbS5QaW5zW2VsLnBpbk5hbWVdLldyaXRlKGt1Y2hsYW5pc2gpXG4gICAgICAgICAgICAgICAgICAgIG0uRmlyZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgVE9PTFRZUEUuTk9UOntcbiAgICAgICAgICAgICAgICAgICAgbGV0IG06U0VHTUVOVDc9ZWwucGFyZW50XG4gICAgICAgICAgICAgICAgICAgIG0uUGluc1tlbC5waW5OYW1lXS5Xcml0ZShrdWNobGFuaXNoKVxuICAgICAgICAgICAgICAgICAgICBtLkZpcmUoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRQaW4oa29tcG9uZW50OiBhbnkgPSBudWxsLCBwaW5OYW1lOiBQaW4gPSBudWxsKSB7XG4gICAgICAgIGxldCBrb21wOkNQSU5cbiAgICAgICAgaWYgKGtvbXBvbmVudCkge1xuICAgICAgICAgICAga29tcCA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGtvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwaW5OYW1lOiBwaW5OYW1lLmdldE5hbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5QaW5zLnB1c2goa29tcClcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRXaXJlKHdpcmU6IFdpcmUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuV2lyZXMucHVzaCh3aXJlKVxuICAgIH1cbiAgICByZW1vdmVXaXJlKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLldpcmVzID0gdGhpcy5XaXJlcy5maWx0ZXIod2lyZSA9PiB3aXJlLm5hbWUgIT09IG5hbWUpXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxufSIsIlxuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0tvbXBvbmVudCc7XG5pbXBvcnQgeyBUT09MVFlQRSwgUElOVFlQRSwgS1VDSExBTklTSCB9IGZyb20gJy4vY29tcG9uZW50cy9FbnVtcydcbmltcG9ydCB7IFhPUiB9IGZyb20gJy4vVG9vbHMvWG9yJztcbmltcG9ydCB7IEJhdHRlcnkgfSBmcm9tICcuL1Rvb2xzL0JhdHRlcnknO1xuaW1wb3J0IHsgT1IgfSBmcm9tICcuL1Rvb2xzL09yJztcbmltcG9ydCB7IEFORCB9IGZyb20gJy4vVG9vbHMvQW5kJztcbmltcG9ydCB7IFNFR01FTlQ3IH0gZnJvbSAnLi9Ub29scy9TZWdtZW50Nyc7XG5pbXBvcnQgeyBOT1QgfSBmcm9tICcuL1Rvb2xzL05vdCc7XG5sZXQgYmF0dCA9IG5ldyBCYXR0ZXJ5KCdlbGVtZW50QmF0dGVyeScsIFRPT0xUWVBFLkJBVFRFUlkpXG5sZXQgc2VnbWVudD1uZXcgU0VHTUVOVDcoJ3NpZnInLFRPT0xUWVBFLlNFRzcpXG5sZXQgZW1hcz1uZXcgTk9UKCdFTUFTJyxUT09MVFlQRS5OT1QpXG5cbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsc2VnbWVudC5QaW5zLkEpXG5iYXR0LlBpbnMuT1VULmFkZFBpbihzZWdtZW50LHNlZ21lbnQuUGlucy5CKVxuYmF0dC5QaW5zLk9VVC5hZGRQaW4oc2VnbWVudCxzZWdtZW50LlBpbnMuQylcbmJhdHQuUGlucy5PVVQuYWRkUGluKGVtYXMsZW1hcy5QaW5zLkEpXG5lbWFzLlBpbnMuQi5hZGRQaW4oc2VnbWVudCxzZWdtZW50LlBpbnMuRClcbmJhdHQuc2V0U3RhdGUoS1VDSExBTklTSC5QQVNUKVxuY29uc29sZS5sb2coc2VnbWVudC5OVU1CRVIpXG5cbmxldCByb290PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbnJvb3QuaW5uZXJUZXh0PXNlZ21lbnQuTlVNQkVSLnRvU3RyaW5nKClcbiJdLCJzb3VyY2VSb290IjoiIn0=
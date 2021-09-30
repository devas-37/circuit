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



let batt = new _Tools_Battery__WEBPACK_IMPORTED_MODULE_1__["Battery"]('elementBattery', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BATTERY);
let segment = new _Tools_Segment7__WEBPACK_IMPORTED_MODULE_2__["SEGMENT7"]('sifr', _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SEG7);
batt.Pins.OUT.addPin(segment, segment.Pins.A);
batt.Pins.OUT.addPin(segment, segment.Pins.B);
batt.Pins.OUT.addPin(segment, segment.Pins.C);
batt.Pins.OUT.addPin(segment, segment.Pins.D);
batt.setState(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
console.log(segment.NUMBER);
let root = document.getElementById('root');
root.innerText = segment.NUMBER.toString();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL0JhdHRlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL1NlZ21lbnQ3LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0tvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNOO0FBQ1o7QUFFakMsTUFBTSxPQUFRLFNBQVEsK0RBQVM7SUFBdEM7O1FBRVcsU0FBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksbURBQUcsQ0FBQyxLQUFLLEVBQUUseURBQU8sQ0FBQyxPQUFPLENBQUM7U0FDdkM7SUFNTCxDQUFDO0lBSkcsUUFBUSxDQUFDLFVBQXNCO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDbkMsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNOO0FBQ1o7QUFFakMsTUFBTSxRQUFTLFNBQVEsK0RBQVM7SUFBdkM7O1FBQ1csV0FBTSxHQUFDLENBQUM7UUFDUixTQUFJLEdBQUM7WUFDUixDQUFDLEVBQUMsSUFBSSxtREFBRyxDQUFDLEdBQUcsRUFBQyx5REFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixDQUFDLEVBQUMsSUFBSSxtREFBRyxDQUFDLEdBQUcsRUFBQyx5REFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixDQUFDLEVBQUMsSUFBSSxtREFBRyxDQUFDLEdBQUcsRUFBQyx5REFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixDQUFDLEVBQUMsSUFBSSxtREFBRyxDQUFDLEdBQUcsRUFBQyx5REFBTyxDQUFDLE1BQU0sQ0FBQztTQUNoQztJQVFMLENBQUM7SUFQRyxDQUFDLENBQUMsSUFBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUUsNERBQVUsQ0FBQyxNQUFNLEVBQUMsRUFBQyxFQUFDLEVBQUM7SUFDdkQsQ0FBQztJQUNELElBQUk7UUFDQSxJQUFJLEdBQUcsR0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2YsdUJBQVk7SUFDWix3QkFBYTtJQUNiLHdCQUFhO0FBQ2pCLENBQUMsRUFKVyxPQUFPLEtBQVAsT0FBTyxRQUlsQjtBQUNELElBQVksSUFHWDtBQUhELFdBQVksSUFBSTtJQUNaLG9DQUFXO0lBQ1gsbUNBQVU7QUFDZCxDQUFDLEVBSFcsSUFBSSxLQUFKLElBQUksUUFHZjtBQUNELElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNsQixpREFBVTtJQUNWLDJDQUFNO0FBQ1YsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBQ0QsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLHFDQUFJO0lBQ0osdUNBQUs7QUFDVCxDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFFRCxJQUFZLFFBWVg7QUFaRCxXQUFZLFFBQVE7SUFDaEIscUJBQU87SUFDUCxxQkFBTztJQUNQLG9CQUFNO0lBQ04scUJBQU87SUFDUCx1QkFBUztJQUNULHNCQUFRO0lBQ1IseUJBQVc7SUFDWCx1QkFBUztJQUNULHNCQUFRO0lBQ1Isd0JBQVU7QUFFZCxDQUFDLEVBWlcsUUFBUSxLQUFSLFFBQVEsUUFZbkI7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFPLE1BQU0sU0FBUztJQUdsQixZQUFZLE9BQWUsRUFBRSxPQUFpQixJQUFJO1FBRmxELFlBQU8sR0FBVyxFQUFFO1FBQ2IsU0FBSSxHQUFhLElBQUk7UUFFeEIsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztJQUUxQixDQUFDO0lBQ0QsTUFBTTtJQUVOLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUF3RTtBQU9qRSxNQUFNLEdBQUc7SUFHWjs7OztPQUlHO0lBQ0gsWUFBWSxJQUFZLEVBQUUsT0FBZ0I7UUFQbEMsU0FBSSxHQUFXLElBQUk7UUFDbkIsY0FBUyxHQUFXLElBQUk7UUFXekIsU0FBSSxHQUFrQixFQUFFLGlDQUErQjtRQUN2RCxZQUFPLEdBQVksOENBQU8sQ0FBQyxPQUFPO1FBQ2xDLFVBQUssR0FBZ0IsRUFBRTtRQUN2QixVQUFLLEdBQWUsaURBQVUsQ0FBQyxJQUFJO1FBQ25DLFNBQUksR0FBUywyQ0FBSSxDQUFDLE1BQU0sRUFBQyxxQkFBcUI7UUFSakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUNwQixDQUFDO0lBUUQsS0FBSyxDQUFDLFVBQXNCO1FBQ3hCLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0RBQVMsQ0FBQyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLGdEQUFTLENBQUMsR0FBRyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztTQUNMO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQVEsRUFBRSxFQUFFO1lBQzNCLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssK0NBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxDQUFDLEdBQVEsRUFBRSxDQUFDLE1BQU07b0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQ1IsTUFBSztpQkFDUjtnQkFDRCxLQUFLLCtDQUFRLENBQUMsR0FBRyxDQUFDO29CQUNkLElBQUksQ0FBQyxHQUFLLEVBQUUsQ0FBQyxNQUFNO29CQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUNwQyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUNSLE1BQUs7aUJBQ1I7Z0JBQ0QsS0FBSywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsR0FBSSxFQUFFLENBQUMsTUFBTTtvQkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLElBQUksRUFBRTtvQkFDUixNQUFLO2lCQUNSO2dCQUNELEtBQUssK0NBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEdBQVUsRUFBRSxDQUFDLE1BQU07b0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQ1IsTUFBSztpQkFDUjthQUVKO1FBQ0wsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFpQixJQUFJLEVBQUUsVUFBZSxJQUFJO1FBQzdDLElBQUksSUFBVTtRQUNkLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxHQUFHO2dCQUNILE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTthQUM3QjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFDRCxPQUFPLENBQUMsT0FBYSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzlELENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUNwQixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUN6RkQ7QUFBQTtBQUFBO0FBQUE7QUFBa0U7QUFFeEI7QUFHRTtBQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLHNEQUFPLENBQUMsZ0JBQWdCLEVBQUUsMERBQVEsQ0FBQyxPQUFPLENBQUM7QUFDMUQsSUFBSSxPQUFPLEdBQUMsSUFBSSx3REFBUSxDQUFDLE1BQU0sRUFBQywwREFBUSxDQUFDLElBQUksQ0FBQztBQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsNERBQVUsQ0FBQyxNQUFNLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksSUFBSSxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIEJhdHRlcnkgZXh0ZW5kcyBLb21wb25lbnQge1xuXG4gICAgcHVibGljIFBpbnMgPSB7XG4gICAgICAgIE9VVDogbmV3IFBpbignT1VUJywgUElOVFlQRS5DSElRSVNIKVxuICAgIH1cbiAgICBcbiAgICBzZXRTdGF0ZShrdWNobGFuaXNoOiBLVUNITEFOSVNIKSB7XG4gICAgICAgIHRoaXMuUGlucy5PVVQuV3JpdGUoa3VjaGxhbmlzaClcbiAgICB9XG4gICBcbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIFNFR01FTlQ3IGV4dGVuZHMgS29tcG9uZW50e1xuICAgIHB1YmxpYyBOVU1CRVI9MFxuICAgIHB1YmxpYyBQaW5zPXtcbiAgICAgICAgQTpuZXcgUGluKCdBJyxQSU5UWVBFLktJUklTSCksXG4gICAgICAgIEI6bmV3IFBpbignQicsUElOVFlQRS5LSVJJU0gpLFxuICAgICAgICBDOm5ldyBQaW4oJ0MnLFBJTlRZUEUuS0lSSVNIKSxcbiAgICAgICAgRDpuZXcgUGluKCdEJyxQSU5UWVBFLktJUklTSClcbiAgICB9XG4gICAgcChuYW1lOnN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLlBpbnNbbmFtZV0uc3RhdGU9PUtVQ0hMQU5JU0guWVVRT1JJPzE6MFxuICAgIH1cbiAgICBGaXJlKCl7XG4gICAgICAgIGxldCBiaW49YCR7dGhpcy5wKCdEJyl9JHt0aGlzLnAoJ0MnKX0ke3RoaXMucCgnQicpfSR7dGhpcy5wKCdBJyl9YFxuICAgICAgICB0aGlzLk5VTUJFUj1wYXJzZUludChiaW4sMilcbiAgICB9XG59IiwiZXhwb3J0IGVudW0gUElOVFlQRSB7XG4gICAgS0lSSVNIID0gJ2snLFxuICAgIENISVFJU0ggPSAnYycsXG4gICAgTkVZVFJBTCA9ICduJ1xufVxuZXhwb3J0IGVudW0gUVVUQiB7XG4gICAgTUFORklZID0gLTEsXG4gICAgTVVTQkFUID0gMVxufVxuZXhwb3J0IGVudW0gS1VDSExBTklTSHtcbiAgICBZVVFPUkk9MjU1LFxuICAgIFBBU1Q9MFxufVxuZXhwb3J0IGVudW0gV0lSRVNUQVRFe1xuICAgIE9OPTEsXG4gICAgT0ZGPTFcbn1cblxuZXhwb3J0IGVudW0gVE9PTFRZUEV7XG4gICAgWE9SPSd+JyxcbiAgICBBTkQ9JyYnLFxuICAgIE9SPSd8JyxcbiAgICBOT1Q9JyEnLFxuICAgIE5BTkQ9JyEmJyxcbiAgICBOT1I9JyF8JyxcbiAgICBCQVRURVJZPSdiJyxcbiAgICBTRUc3PSdzNycsXG4gICAgTEVEPSdsZCcsXG4gICAgUkdCTD0ncmxkJ1xuXG59IiwiXG5pbXBvcnQgeyBUT09MVFlQRSwgUElOVFlQRSB9IGZyb20gJy4vRW51bXMnXG5pbXBvcnQgeyBQaW4gfSBmcm9tICcuL1BpbidcbmV4cG9ydCBjbGFzcyBLb21wb25lbnQge1xuICAgIGVsZW1lbnQ6IHN0cmluZyA9ICcnXG4gICAgcHVibGljIHR5cGU6IFRPT0xUWVBFID0gbnVsbFxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgdHlwZTogVE9PTFRZUEUgPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlKSB0aGlzLnR5cGUgPSB0eXBlXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgICAgXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSAnLi9Lb21wb25lbnQnXG5pbXBvcnQgeyBQSU5UWVBFLCBRVVRCLCBLVUNITEFOSVNILCBXSVJFU1RBVEUsIFRPT0xUWVBFIH0gZnJvbSAnLi9FbnVtcydcbmltcG9ydCB7IENQSU4gfSBmcm9tICcuL0ludGVyZmFjZXMnXG5pbXBvcnQgeyBXaXJlIH0gZnJvbSAnLi9XaXJlJ1xuaW1wb3J0IHsgWE9SIH0gZnJvbSAnLi4vVG9vbHMvWG9yJ1xuaW1wb3J0IHsgQU5EIH0gZnJvbSAnLi4vVG9vbHMvQW5kJ1xuaW1wb3J0IHsgT1IgfSBmcm9tICcuLi9Ub29scy9PcidcbmltcG9ydCB7IFNFR01FTlQ3IH0gZnJvbSAnLi4vVG9vbHMvU2VnbWVudDcnXG5leHBvcnQgY2xhc3MgUGluIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZyA9IG51bGxcbiAgICBwcml2YXRlIGFjdGl2ZVBpbjogc3RyaW5nID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEhhciBiaXIgZWxlbWVudGdhIHVsYW51dmNoaSBQaW5cbiAgICAgKiBAcGFyYW0gbmFtZSBQaW5uaSBpZGVudGlmaWthdHNpeWEgcWlsaXNoIHVjaHVuXG4gICAgICogQHBhcmFtIHBpblR5cGUgUGlubmluZyBraXJpc2ggeW9raSBjaGlxaXNoIGVrYW5saWdpbmkgYmVsZ2lsYXNoIHVjaHVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwaW5UeXBlOiBQSU5UWVBFKSB7XG4gICAgICAgIHRoaXMuUGluVHlwZSA9IHBpblR5cGVcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIHB1YmxpYyBQaW5zOiBBcnJheTxPYmplY3Q+ID0gW10vLyBTaHUgcGluZ2EgdWxhbmdhbiBrb21wb25lbnRhXG4gICAgcHVibGljIFBpblR5cGU6IFBJTlRZUEUgPSBQSU5UWVBFLk5FWVRSQUxcbiAgICBwdWJsaWMgV2lyZXM6IEFycmF5PFdpcmU+ID0gW11cbiAgICBwdWJsaWMgc3RhdGU6IEtVQ0hMQU5JU0ggPSBLVUNITEFOSVNILlBBU1RcbiAgICBwdWJsaWMgUXV0YjogUVVUQiA9IFFVVEIuTUFORklZIC8vSG96aXJjaGEgemFydXIgZW1hc1xuXG4gICAgV3JpdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgICAgICBpZiAoa3VjaGxhbmlzaCkge1xuICAgICAgICAgICAgdGhpcy5XaXJlcy5mb3JFYWNoKHdpcmUgPT4ge1xuICAgICAgICAgICAgICAgIHdpcmUuc2V0U3RhdGUoV0lSRVNUQVRFLk9OKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuV2lyZXMuZm9yRWFjaCh3aXJlID0+IHtcbiAgICAgICAgICAgICAgICB3aXJlLnNldFN0YXRlKFdJUkVTVEFURS5PRkYpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHRvb2wgbmFtZTonICsgdGhpcy5uYW1lKVxuICAgICAgICB0aGlzLnN0YXRlID0ga3VjaGxhbmlzaFxuICAgICAgICB0aGlzLlBpbnMuZm9yRWFjaCgoZWw6IENQSU4pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZWwucGFyZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRPT0xUWVBFLlhPUjp7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtOiBYT1IgPSBlbC5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgbS5waW5zW2VsLnBpbk5hbWVdLldyaXRlKGt1Y2hsYW5pc2gpXG4gICAgICAgICAgICAgICAgICAgIG0uRmlyZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgVE9PTFRZUEUuQU5EOntcbiAgICAgICAgICAgICAgICAgICAgbGV0IG06QU5EPWVsLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICBtLnBpbnNbZWwucGluTmFtZV0uV3JpdGUoa3VjaGxhbmlzaClcbiAgICAgICAgICAgICAgICAgICAgbS5GaXJlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUT09MVFlQRS5PUjp7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtOk9SPWVsLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICBtLnBpbnNbZWwucGluTmFtZV0uV3JpdGUoa3VjaGxhbmlzaClcbiAgICAgICAgICAgICAgICAgICAgbS5GaXJlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUT09MVFlQRS5TRUc3OntcbiAgICAgICAgICAgICAgICAgICAgbGV0IG06U0VHTUVOVDc9ZWwucGFyZW50XG4gICAgICAgICAgICAgICAgICAgIG0uUGluc1tlbC5waW5OYW1lXS5Xcml0ZShrdWNobGFuaXNoKVxuICAgICAgICAgICAgICAgICAgICBtLkZpcmUoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRQaW4oa29tcG9uZW50OiBhbnkgPSBudWxsLCBwaW5OYW1lOiBQaW4gPSBudWxsKSB7XG4gICAgICAgIGxldCBrb21wOiBDUElOXG4gICAgICAgIGlmIChrb21wb25lbnQpIHtcbiAgICAgICAgICAgIGtvbXAgPSB7XG4gICAgICAgICAgICAgICAgcGFyZW50OiBrb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcGluTmFtZTogcGluTmFtZS5nZXROYW1lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuUGlucy5wdXNoKGtvbXApXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkV2lyZSh3aXJlOiBXaXJlID0gbnVsbCkge1xuICAgICAgICB0aGlzLldpcmVzLnB1c2god2lyZSlcbiAgICB9XG4gICAgcmVtb3ZlV2lyZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5XaXJlcyA9IHRoaXMuV2lyZXMuZmlsdGVyKHdpcmUgPT4gd2lyZS5uYW1lICE9PSBuYW1lKVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbn0iLCJcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9Lb21wb25lbnQnO1xuaW1wb3J0IHsgVE9PTFRZUEUsIFBJTlRZUEUsIEtVQ0hMQU5JU0ggfSBmcm9tICcuL2NvbXBvbmVudHMvRW51bXMnXG5pbXBvcnQgeyBYT1IgfSBmcm9tICcuL1Rvb2xzL1hvcic7XG5pbXBvcnQgeyBCYXR0ZXJ5IH0gZnJvbSAnLi9Ub29scy9CYXR0ZXJ5JztcbmltcG9ydCB7IE9SIH0gZnJvbSAnLi9Ub29scy9Pcic7XG5pbXBvcnQgeyBBTkQgfSBmcm9tICcuL1Rvb2xzL0FuZCc7XG5pbXBvcnQgeyBTRUdNRU5UNyB9IGZyb20gJy4vVG9vbHMvU2VnbWVudDcnO1xubGV0IGJhdHQgPSBuZXcgQmF0dGVyeSgnZWxlbWVudEJhdHRlcnknLCBUT09MVFlQRS5CQVRURVJZKVxubGV0IHNlZ21lbnQ9bmV3IFNFR01FTlQ3KCdzaWZyJyxUT09MVFlQRS5TRUc3KVxuYmF0dC5QaW5zLk9VVC5hZGRQaW4oc2VnbWVudCxzZWdtZW50LlBpbnMuQSlcbmJhdHQuUGlucy5PVVQuYWRkUGluKHNlZ21lbnQsc2VnbWVudC5QaW5zLkIpXG5iYXR0LlBpbnMuT1VULmFkZFBpbihzZWdtZW50LHNlZ21lbnQuUGlucy5DKVxuYmF0dC5QaW5zLk9VVC5hZGRQaW4oc2VnbWVudCxzZWdtZW50LlBpbnMuRClcbmJhdHQuc2V0U3RhdGUoS1VDSExBTklTSC5ZVVFPUkkpXG5jb25zb2xlLmxvZyhzZWdtZW50Lk5VTUJFUilcblxubGV0IHJvb3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxucm9vdC5pbm5lclRleHQ9c2VnbWVudC5OVU1CRVIudG9TdHJpbmcoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
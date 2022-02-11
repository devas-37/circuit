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

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

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
    function AND() {
        var _this = _super.call(this, "AND", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].AND) || this;
        _this.size = {
            width: 45,
            height: 32,
        };
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        return _this;
    }
    AND.prototype.Fire = function () {
        if (this.Pins.A.state & this.Pins.B.state) {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
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
        var _this = _super.call(this, "BATT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BATTERY) || this;
        _this.setPins({
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("OUT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        _this.setSize({ width: 60, height: 30 });
        return _this;
    }
    Battery.prototype.setState = function (kuchlanish) {
        this.Pins.OUT.Write(kuchlanish);
    };
    return Battery;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Buffer.ts":
/*!*****************************!*\
  !*** ./src/Tools/Buffer.ts ***!
  \*****************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return Buffer; });
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



var Buffer = /** @class */ (function (_super) {
    __extends(Buffer, _super);
    function Buffer() {
        var _this = _super.call(this, "BUFFER", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BUFFER) || this;
        _this.size = {
            width: 90,
            height: 32,
        };
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        return _this;
    }
    Buffer.prototype.Fire = function () {
        if (this.Pins.A.state & this.Pins.C.state) {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        }
    };
    return Buffer;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Button.ts":
/*!*****************************!*\
  !*** ./src/Tools/Button.ts ***!
  \*****************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
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



var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this, "", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].BUTTON) || this;
        _this.Size = {
            width: 37,
            height: 32,
        };
        _this.Location = {
            left: 150,
            top: 250,
        };
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        _this.setSize(_this.Size);
        var btn = _this.elt("div");
        btn.classList.add("buttonELBtn");
        _this.parent.style.left = _this.Location.left + "px";
        _this.parent.style.top = _this.Location.top + "px";
        _this.parent.appendChild(btn);
        var ref = function () {
            _this.Pins["A"].Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        };
        btn.onmousedown = function (e) {
            btn.addEventListener("mouseout", ref);
            _this.Pins["A"].Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        };
        btn.onmouseup = function () {
            btn.removeEventListener("mouseout", ref);
            _this.Pins["A"].Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        };
        btn.onmousemove = function () {
            btn.removeEventListener("mouseout", ref);
        };
        return _this;
    }
    return Button;
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
    function NOT() {
        var _this = _super.call(this, "NOT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].NOT) || this;
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        _this.setSize({ width: 60, height: 30 });
        return _this;
    }
    NOT.prototype.Fire = function () {
        this.Pins.B.Write(this.Pins.A.state != 0 ? _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST : _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
    };
    return NOT;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Or.ts":
/*!*************************!*\
  !*** ./src/Tools/Or.ts ***!
  \*************************/
/*! exports provided: OR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OR", function() { return OR; });
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



var OR = /** @class */ (function (_super) {
    __extends(OR, _super);
    function OR() {
        var _this = _super.call(this, "OR", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].OR) || this;
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        return _this;
    }
    OR.prototype.Fire = function () {
        if (this.Pins.A.state | this.Pins.B.state) {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        }
    };
    return OR;
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
        this.element.setAttributeNS(null, "fill", "white");
    };
    SEGMENT.prototype.off = function () {
        this.element.setAttributeNS(null, "fill", "#02607793");
    };
    SEGMENT.prototype.instance = function () {
        return this.element;
    };
    return SEGMENT;
}());
var SEGMENT7 = /** @class */ (function (_super) {
    __extends(SEGMENT7, _super);
    function SEGMENT7() {
        var _this = _super.call(this, "SEG7", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SEG7) || this;
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
            10: ["T", "LB", "M", "RB", "RT", "LT"],
            11: ["LT", "LB", "RB", "B", "M"],
            12: ["T", "LT", "LB", "B"],
            13: ["LB", "RB", "B", "RT", "M"],
            14: ["T", "LT", "LB", "B", "M"],
            15: ["T", "LT", "LB", "M"],
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
        _this.paren = document.createElementNS(_this.nameSpace, "svg");
        _this.setAttr(_this.paren, {
            x: 0,
            y: 0,
            viewBox: "0 0 18.24 25.48",
            width: 54.72,
            height: 76.44,
        });
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            D: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("D", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
        });
        _this.setSize({
            width: 60,
            height: 80,
        });
        _this.paint();
        _this.numbers[0].forEach(function (e) {
            _this.Seg[e].on();
        });
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
            this.paren.appendChild(this.Seg[m].instance());
        this.parent.removeChild(this.parent.querySelector("span"));
        this.parent.appendChild(this.paren);
    };
    SEGMENT7.prototype.p = function (name) {
        return this.Pins[name].state == _components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI ? 1 : 0;
    };
    SEGMENT7.prototype.Fire = function () {
        var _this = this;
        var bin = "" + this.p("D") + this.p("C") + this.p("B") + this.p("A");
        var son = parseInt(bin, 2);
        console.log(son);
        this.numbers["8"].forEach(function (e) {
            _this.Seg[e].off();
        });
        this.numbers[son].forEach(function (e) {
            _this.Seg[e].on();
        });
    };
    return SEGMENT7;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Switch.ts":
/*!*****************************!*\
  !*** ./src/Tools/Switch.ts ***!
  \*****************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
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



var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super.call(this, "", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].SWITCH) || this;
        _this.Size = {
            width: 40,
            height: 20,
        };
        _this.state = _components_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].OFF;
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        _this.setSize(_this.Size);
        var swContainer = _this.elt("div");
        swContainer.classList.add("actionBtn");
        var actionContainer = _this.elt("div");
        actionContainer.appendChild(swContainer);
        actionContainer.classList.add("actionContainer");
        _this.parent.appendChild(actionContainer);
        actionContainer.onclick = function () {
            if (_this.state == 1) {
                swContainer.classList.remove("actionON");
                swContainer.classList.add("actionOFF");
                _this.state = _components_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].OFF;
                _this.Pins.A.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
            }
            else {
                swContainer.classList.add("actionON");
                swContainer.classList.remove("actionOFF");
                _this.state = _components_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].ON;
                _this.Pins.A.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
            }
        };
        return _this;
    }
    return Switch;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/TriState.ts":
/*!*******************************!*\
  !*** ./src/Tools/TriState.ts ***!
  \*******************************/
/*! exports provided: TriState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriState", function() { return TriState; });
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



var TriState = /** @class */ (function (_super) {
    __extends(TriState, _super);
    function TriState() {
        var _this = _super.call(this, "TRISTATE", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].TRISTATE) || this;
        _this.setPins({
            IN: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("IN", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            IN1: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("IN", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].TOP),
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("OUT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        _this.setSize({ width: 80, height: 30 });
        return _this;
    }
    TriState.prototype.setState = function (kuchlanish) {
        this.Pins.OUT.Write(kuchlanish);
    };
    return TriState;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/Xor.ts":
/*!**************************!*\
  !*** ./src/Tools/Xor.ts ***!
  \**************************/
/*! exports provided: XOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XOR", function() { return XOR; });
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



var XOR = /** @class */ (function (_super) {
    __extends(XOR, _super);
    function XOR() {
        var _this = _super.call(this, "XOR", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["TOOLTYPE"].XOR) || this;
        _this.setPins({
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        });
        return _this;
    }
    XOR.prototype.Fire = function () {
        if (this.Pins.A.state !== this.Pins.B.state) {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.Pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
        }
    };
    return XOR;
}(_components_Komponent__WEBPACK_IMPORTED_MODULE_1__["Komponent"]));



/***/ }),

/***/ "./src/Tools/index.ts":
/*!****************************!*\
  !*** ./src/Tools/index.ts ***!
  \****************************/
/*! exports provided: OR, XOR, TriState, SEGMENT7, AND, NOT, Battery, Buffer, Button, Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Or__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Or */ "./src/Tools/Or.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OR", function() { return _Or__WEBPACK_IMPORTED_MODULE_0__["OR"]; });

/* harmony import */ var _Xor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Xor */ "./src/Tools/Xor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XOR", function() { return _Xor__WEBPACK_IMPORTED_MODULE_1__["XOR"]; });

/* harmony import */ var _Segment7__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Segment7 */ "./src/Tools/Segment7.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEGMENT7", function() { return _Segment7__WEBPACK_IMPORTED_MODULE_2__["SEGMENT7"]; });

/* harmony import */ var _And__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./And */ "./src/Tools/And.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AND", function() { return _And__WEBPACK_IMPORTED_MODULE_3__["AND"]; });

/* harmony import */ var _Not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Not */ "./src/Tools/Not.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT", function() { return _Not__WEBPACK_IMPORTED_MODULE_4__["NOT"]; });

/* harmony import */ var _Battery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Battery */ "./src/Tools/Battery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return _Battery__WEBPACK_IMPORTED_MODULE_5__["Battery"]; });

/* harmony import */ var _Buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buffer */ "./src/Tools/Buffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return _Buffer__WEBPACK_IMPORTED_MODULE_6__["Buffer"]; });

/* harmony import */ var _TriState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriState */ "./src/Tools/TriState.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriState", function() { return _TriState__WEBPACK_IMPORTED_MODULE_7__["TriState"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Switch */ "./src/Tools/Switch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_8__["Switch"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ "./src/Tools/Button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_9__["Button"]; });














/***/ }),

/***/ "./src/components/Enums.ts":
/*!*********************************!*\
  !*** ./src/components/Enums.ts ***!
  \*********************************/
/*! exports provided: PINTYPE, QUTB, POSITION, KUCHLANISH, WIRESTATE, STYLES, TOOLTYPE, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINTYPE", function() { return PINTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUTB", function() { return QUTB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KUCHLANISH", function() { return KUCHLANISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIRESTATE", function() { return WIRESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLES", function() { return STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTYPE", function() { return TOOLTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
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
var POSITION;
(function (POSITION) {
    POSITION[POSITION["TOP"] = 8] = "TOP";
    POSITION[POSITION["RIGHT"] = 6] = "RIGHT";
    POSITION[POSITION["BOTTOM"] = 2] = "BOTTOM";
    POSITION[POSITION["LEFT"] = 4] = "LEFT";
})(POSITION || (POSITION = {}));
var KUCHLANISH;
(function (KUCHLANISH) {
    KUCHLANISH[KUCHLANISH["YUQORI"] = 255] = "YUQORI";
    KUCHLANISH[KUCHLANISH["PAST"] = 0] = "PAST";
})(KUCHLANISH || (KUCHLANISH = {}));
var WIRESTATE;
(function (WIRESTATE) {
    WIRESTATE[WIRESTATE["ON"] = 1] = "ON";
    WIRESTATE[WIRESTATE["OFF"] = 0] = "OFF";
})(WIRESTATE || (WIRESTATE = {}));
var STYLES;
(function (STYLES) {
    STYLES["AND"] = "and-gate";
    STYLES["BORDER"] = "border";
    STYLES["FLEX"] = "flex";
})(STYLES || (STYLES = {}));
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
    TOOLTYPE["BUFFER"] = "buf";
    TOOLTYPE["TRISTATE"] = "3st";
    TOOLTYPE["BUTTON"] = "btn";
    TOOLTYPE["SWITCH"] = "sw";
})(TOOLTYPE || (TOOLTYPE = {}));
var COLORS;
(function (COLORS) {
    COLORS["BLUE"] = "007F9E";
    COLORS["BORDER"] = "1B4752";
})(COLORS || (COLORS = {}));


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
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums */ "./src/components/Enums.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var m = 5;
var Komponent = /** @class */ (function () {
    function Komponent(el, type) {
        if (type === void 0) { type = null; }
        this.element = "";
        this.type = null;
        this.move = false;
        this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        if (type)
            this.type = type;
        this.element = el;
        this.canvas = document.getElementById("root");
        this.parent = this.elt("div");
        this;
        this.parent.onmousedown = this.parentMouseDown.bind(this);
        this.parent.classList.add(_Enums__WEBPACK_IMPORTED_MODULE_0__["STYLES"].AND, _Enums__WEBPACK_IMPORTED_MODULE_0__["STYLES"].BORDER, _Enums__WEBPACK_IMPORTED_MODULE_0__["STYLES"].FLEX);
        var textNode = this.elt("span");
        textNode.innerHTML = this.element;
        this.parent.appendChild(textNode);
        this.leftPins = this.elt("div");
        this.rightPins = this.elt("div");
        this.topPins = this.elt("div");
        this.bottomPins = this.elt("div");
        this.topPins.classList.add("v-flex", "pinC", "pinCTop");
        this.rightPins.classList.add("v-flex", "pinC", "pinCRight");
        this.leftPins.classList.add("v-flex", "pinC", "pinCLeft");
        this.bottomPins.classList.add("v-flex", "pinC", "pinCBottom");
        this.parent.appendChild(this.leftPins);
        this.parent.appendChild(this.rightPins);
        this.parent.appendChild(this.bottomPins);
        this.parent.appendChild(this.topPins);
        this.canvas.appendChild(this.parent);
    }
    Komponent.prototype.parentMouseDown = function (e) {
        var _this = this;
        e.stopPropagation();
        this.point = {
            x: e.clientX + 250,
            y: e.clientY,
            left: this.parent.getBoundingClientRect().left,
            top: this.parent.getBoundingClientRect().top,
        };
        this.move = true;
        var ref = this.rootMouseMove.bind(this);
        document.addEventListener("mousemove", ref, true);
        document.onmouseup = function () {
            _this.move = false;
            document.removeEventListener("mousemove", ref, true);
        };
    };
    Komponent.prototype.rootMouseMove = function (e) {
        if (this.move) {
            this.parent.style.top =
                this.point.top + (e.clientY - this.point.y) + "px";
            this.parent.style.left =
                this.point.left + (e.clientX - this.point.x) + "px";
        }
    };
    Komponent.prototype.setPins = function (pins) {
        var _this = this;
        this.Pins = pins;
        Object.keys(pins).map(function (pin) {
            pins[pin].setParent(_this);
            switch (pins[pin].position) {
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].LEFT: {
                    _this.leftPins.appendChild(pins[pin].pinContainer);
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT: {
                    _this.rightPins.appendChild(pins[pin].pinContainer);
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].TOP: {
                    _this.topPins.appendChild(pins[pin].pinContainer);
                    break;
                }
                case _Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].BOTTOM: {
                    _this.bottomPins.appendChild(pins[pin].pinContainer);
                    break;
                }
            }
        });
    };
    Komponent.prototype.setSize = function (size) {
        this.parent.style.width = size.width + "px";
        this.parent.style.height = size.height + "px";
    };
    Komponent.prototype.elt = function (name, ns) {
        if (ns === void 0) { ns = false; }
        return ns
            ? document.createElementNS("http://www.w3.org/2000/svg", name)
            : document.createElement(name);
    };
    Komponent.prototype.render = function () { };
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var Pin = /** @class */ (function () {
    function Pin(name, pinType, position) {
        var _this = this;
        if (position === void 0) { position = _Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].LEFT; }
        this.name = null;
        this.activePin = null;
        this.Pins = {}; // Shu pinga ulangan komponenta
        this.PinType = _Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].NEYTRAL;
        this.Wires = [];
        this.state = _Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST;
        this.Qutb = _Enums__WEBPACK_IMPORTED_MODULE_0__["QUTB"].MANFIY; //Hozircha zarur emas
        this.pinId = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.PinType = pinType;
        this.name = name;
        this.parentElement;
        this.position = position;
        this.pinContainer = document.createElement("div");
        this.pinContainer.classList.add("elpin");
        this.pinContainer.onmousedown = function (e) {
            e.stopPropagation();
            _this.onBeginConnect(e, _this.name);
            var el = e.target;
            var refUp = function (e) {
                document.removeEventListener("mousemove", _this.onMoveConnect);
                document.removeEventListener("mouseup", refUp);
            };
            document.addEventListener("mousemove", _this.onMoveConnect);
            document.addEventListener("mouseup", refUp);
        };
        this.pinContainer.onmouseup = function (e) {
            _this.onEndConnect(e);
        };
    }
    Pin.prototype.getPos = function () {
        var pos = this.pinContainer.getBoundingClientRect();
        return {
            x: pos.left + pos.width / 2,
            y: pos.top + pos.height / 2,
        };
    };
    Pin.prototype.mouseMove = function (e) { };
    Pin.prototype.setParent = function (parent) {
        this.parentElement = parent;
    };
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
                pins: [pinName],
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
/* harmony import */ var _Tools_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools/index */ "./src/Tools/index.ts");

var and = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["AND"]();
var seg = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["SEGMENT7"]();
var sw = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["Switch"]();
var sw1 = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["Switch"]();
sw.Pins["A"].addPin(and, and.Pins.A);
sw1.Pins["A"].addPin(and, and.Pins.B);
and.Pins.C.addPin(seg, seg.Pins.A);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL0FuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvQmF0dGVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvQnVmZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL05vdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvT3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL1NlZ21lbnQ3LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9Td2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL1RyaVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9Yb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0tvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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VXVCO0FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksZ0RBQUcsRUFBRSxDQUFDO0FBQ3BCLElBQUksR0FBRyxHQUFHLElBQUkscURBQVEsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksbURBQU0sRUFBRSxDQUFDO0FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksbURBQU0sRUFBRSxDQUFDO0FBRXZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5JTCB9IGZyb20gJy4vbmlsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbGlkYXRlIH0gZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJzsiLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIHZhciBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZDU7IiwiZXhwb3J0IGRlZmF1bHQgJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCIvLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIHZhciBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1bX2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1bX2kyXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciBfdDIgPSAwOyBfdDIgPCA4MDsgKytfdDIpIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihfdDIgLyAyMCk7XG4gICAgICB2YXIgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW190Ml0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhMTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBzdHJpbmdpZnkoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmIChuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnN1YnN0cigxNCwgMSksIDE2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjsiLCJpbXBvcnQge1xuICBLVUNITEFOSVNILFxuICBQSU5UWVBFLFxuICBQT1NJVElPTixcbiAgU1RZTEVTLFxuICBUT09MVFlQRSxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBBTkQgZXh0ZW5kcyBLb21wb25lbnQge1xuICBzaXplID0ge1xuICAgIHdpZHRoOiA0NSxcbiAgICBoZWlnaHQ6IDMyLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQU5EXCIsIFRPT0xUWVBFLkFORCk7XG4gICAgdGhpcy5zZXRQaW5zKHtcbiAgICAgIEE6IG5ldyBQaW4oXCJBXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICAgIEI6IG5ldyBQaW4oXCJCXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICAgIEM6IG5ldyBQaW4oXCJDXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICAgIH0pO1xuICB9XG5cbiAgRmlyZSgpIHtcbiAgICBpZiAodGhpcy5QaW5zLkEuc3RhdGUgJiB0aGlzLlBpbnMuQi5zdGF0ZSkge1xuICAgICAgdGhpcy5QaW5zLkMuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLlBpbnMuQy5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgUE9TSVRJT04sIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgS29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJCQVRUXCIsIFRPT0xUWVBFLkJBVFRFUlkpO1xuICAgIHRoaXMuc2V0UGlucyh7XG4gICAgICBPVVQ6IG5ldyBQaW4oXCJPVVRcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTaXplKHsgd2lkdGg6IDYwLCBoZWlnaHQ6IDMwIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgIHRoaXMuUGlucy5PVVQuV3JpdGUoa3VjaGxhbmlzaCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgc2l6ZSA9IHtcbiAgICB3aWR0aDogOTAsXG4gICAgaGVpZ2h0OiAzMixcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJCVUZGRVJcIiwgVE9PTFRZUEUuQlVGRkVSKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQzogbmV3IFBpbihcIkNcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gIH1cblxuICBGaXJlKCkge1xuICAgIGlmICh0aGlzLlBpbnMuQS5zdGF0ZSAmIHRoaXMuUGlucy5DLnN0YXRlKSB7XG4gICAgICB0aGlzLlBpbnMuQy5Xcml0ZShLVUNITEFOSVNILllVUU9SSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuUGlucy5DLldyaXRlKEtVQ0hMQU5JU0guUEFTVCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBLVUNITEFOSVNILCBQSU5UWVBFLCBQT1NJVElPTiwgVE9PTFRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEtvbXBvbmVudCB7XG4gIFNpemUgPSB7XG4gICAgd2lkdGg6IDM3LFxuICAgIGhlaWdodDogMzIsXG4gIH07XG4gIExvY2F0aW9uID0ge1xuICAgIGxlZnQ6IDE1MCxcbiAgICB0b3A6IDI1MCxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJcIiwgVE9PTFRZUEUuQlVUVE9OKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTaXplKHRoaXMuU2l6ZSk7XG4gICAgbGV0IGJ0biA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRUxCdG5cIik7XG4gICAgdGhpcy5wYXJlbnQuc3R5bGUubGVmdCA9IHRoaXMuTG9jYXRpb24ubGVmdCArIFwicHhcIjtcbiAgICB0aGlzLnBhcmVudC5zdHlsZS50b3AgPSB0aGlzLkxvY2F0aW9uLnRvcCArIFwicHhcIjtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIGxldCByZWYgPSAoKSA9PiB7XG4gICAgICB0aGlzLlBpbnNbXCJBXCJdLldyaXRlKEtVQ0hMQU5JU0guUEFTVCk7XG4gICAgfTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgICAgdGhpcy5QaW5zW1wiQVwiXS5Xcml0ZShLVUNITEFOSVNILllVUU9SSSk7XG4gICAgfTtcbiAgICBidG4ub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgICAgdGhpcy5QaW5zW1wiQVwiXS5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH07XG4gICAgYnRuLm9ubW91c2Vtb3ZlID0gKCkgPT4ge1xuICAgICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgTk9UIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJOT1RcIiwgVE9PTFRZUEUuTk9UKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTaXplKHsgd2lkdGg6IDYwLCBoZWlnaHQ6IDMwIH0pO1xuICB9XG5cbiAgRmlyZSgpIHtcbiAgICB0aGlzLlBpbnMuQi5Xcml0ZShcbiAgICAgIHRoaXMuUGlucy5BLnN0YXRlICE9IDAgPyBLVUNITEFOSVNILlBBU1QgOiBLVUNITEFOSVNILllVUU9SSVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgT1IgZXh0ZW5kcyBLb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIk9SXCIsIFRPT0xUWVBFLk9SKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQzogbmV3IFBpbihcIkNcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gIH1cblxuICBGaXJlKCkge1xuICAgIGlmICh0aGlzLlBpbnMuQS5zdGF0ZSB8IHRoaXMuUGlucy5CLnN0YXRlKSB7XG4gICAgICB0aGlzLlBpbnMuQy5Xcml0ZShLVUNITEFOSVNILllVUU9SSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuUGlucy5DLldyaXRlKEtVQ0hMQU5JU0guUEFTVCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBLVUNITEFOSVNILCBQSU5UWVBFLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuY2xhc3MgU0VHTUVOVCB7XG4gIHByaXZhdGUgZWxlbWVudDogU1ZHRWxlbWVudDtcbiAgcHJpdmF0ZSBxOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdHlwZSk7XG4gICAgdGhpcy5vZmYoKTtcbiAgfVxuICBhdHRyKGF0dHI6IHN0cmluZywgZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIGF0dHIsIGQpO1xuICB9XG4gIG9uKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbiAgfVxuICBvZmYoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZmlsbFwiLCBcIiMwMjYwNzc5M1wiKTtcbiAgfVxuICBpbnN0YW5jZSgpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50IGFzIFNWR0VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRUdNRU5UVkFSIHtcbiAgTEI/OiBTRUdNRU5UO1xuICBMVD86IFNFR01FTlQ7XG4gIFQ/OiBTRUdNRU5UO1xuICBCPzogU0VHTUVOVDtcbiAgUlQ/OiBTRUdNRU5UO1xuICBSQj86IFNFR01FTlQ7XG4gIE0/OiBTRUdNRU5UO1xufVxuZXhwb3J0IGNsYXNzIFNFR01FTlQ3IGV4dGVuZHMgS29tcG9uZW50IHtcbiAgcHJpdmF0ZSBuYW1lU3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIHB1YmxpYyBOVU1CRVIgPSAwO1xuICBwcml2YXRlIHBhcmVuOiBTVkdFbGVtZW50O1xuICBwcml2YXRlIG51bWJlcnMgPSB7XG4gICAgMDogW1wiVFwiLCBcIlJUXCIsIFwiUkJcIiwgXCJCXCIsIFwiTEJcIiwgXCJMVFwiXSxcbiAgICAxOiBbXCJSVFwiLCBcIlJCXCJdLFxuICAgIDI6IFtcIlRcIiwgXCJSVFwiLCBcIk1cIiwgXCJMQlwiLCBcIkJcIl0sXG4gICAgMzogW1wiVFwiLCBcIlJUXCIsIFwiUkJcIiwgXCJNXCIsIFwiQlwiXSxcbiAgICA0OiBbXCJMVFwiLCBcIk1cIiwgXCJSVFwiLCBcIlJCXCJdLFxuICAgIDU6IFtcIlRcIiwgXCJMVFwiLCBcIk1cIiwgXCJSQlwiLCBcIkJcIl0sXG4gICAgNjogW1wiVFwiLCBcIkxUXCIsIFwiTEJcIiwgXCJNXCIsIFwiUkJcIiwgXCJCXCJdLFxuICAgIDc6IFtcIlJUXCIsIFwiUkJcIiwgXCJUXCJdLFxuICAgIDg6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiTVwiLCBcIlJCXCIsIFwiQlwiLCBcIlJUXCJdLFxuICAgIDk6IFtcIlRcIiwgXCJMVFwiLCBcIk1cIiwgXCJSQlwiLCBcIkJcIiwgXCJSVFwiXSxcbiAgICAxMDogW1wiVFwiLCBcIkxCXCIsIFwiTVwiLCBcIlJCXCIsIFwiUlRcIiwgXCJMVFwiXSxcbiAgICAxMTogW1wiTFRcIiwgXCJMQlwiLCBcIlJCXCIsIFwiQlwiLCBcIk1cIl0sXG4gICAgMTI6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiQlwiXSxcbiAgICAxMzogW1wiTEJcIiwgXCJSQlwiLCBcIkJcIiwgXCJSVFwiLCBcIk1cIl0sXG4gICAgMTQ6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiQlwiLCBcIk1cIl0sXG4gICAgMTU6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiTVwiXSxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTRUc3XCIsIFRPT0xUWVBFLlNFRzcpO1xuICAgIHRoaXMucGFyZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lU3BhY2UsIFwic3ZnXCIpIGFzIFNWR0VsZW1lbnQ7XG4gICAgdGhpcy5zZXRBdHRyKHRoaXMucGFyZW4sIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgdmlld0JveDogXCIwIDAgMTguMjQgMjUuNDhcIixcbiAgICAgIHdpZHRoOiA1NC43MixcbiAgICAgIGhlaWdodDogNzYuNDQsXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQzogbmV3IFBpbihcIkNcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgRDogbmV3IFBpbihcIkRcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTaXplKHtcbiAgICAgIHdpZHRoOiA2MCxcbiAgICAgIGhlaWdodDogODAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnBhaW50KCk7XG4gICAgdGhpcy5udW1iZXJzWzBdLmZvckVhY2goKGUpID0+IHtcbiAgICAgIHRoaXMuU2VnW2VdLm9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBdHRyKGVsOiBTVkdFbGVtZW50LCB2YWw6IG9iamVjdCkge1xuICAgIGZvciAoY29uc3QgbSBpbiB2YWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKG51bGwsIG0sIHZhbFttXSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIFNlZzogU0VHTUVOVFZBUiA9IHtcbiAgICBMQjogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIExUOiBuZXcgU0VHTUVOVChcInBhdGhcIiksXG4gICAgQjogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIFQ6IG5ldyBTRUdNRU5UKFwicGF0aFwiKSxcbiAgICBSVDogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIFJCOiBuZXcgU0VHTUVOVChcInBhdGhcIiksXG4gICAgTTogbmV3IFNFR01FTlQoXCJwb2x5Z29uXCIpLFxuICB9O1xuXG4gIHByaXZhdGUgcGFpbnQoKSB7XG4gICAgdGhpcy5TZWcuTEIuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNNC44LDE0LjEyLDQuNjUsMTUuM2wtLjgsNi4xNmgwTDIsMjNhMi4yMiwyLjIyLDAsMCwxLS4zNC0xbDEuMDgtNy44NiwxLjE4LTFaXCJcbiAgICApO1xuICAgIHRoaXMuU2VnLkIuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTMuMDgsMjMuNzJhMi41MywyLjUzLDAsMCwxLS44MS4zM2wtOC43MS0uMTFhMi4yNywyLjI3LDAsMCwxLTEuMTktLjUybDEuODktMS42NGgwbDcuMi4wN1pcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuUkIuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTUuMTMsMTQuMjEsMTQsMjIuMjZhMi4xMiwyLjEyLDAsMCwxLS41NSwxLjEzbC0xLjU3LTEuODIsMS03LjI5LDEuMjktMS4xMlpcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuTS5hdHRyKFxuICAgICAgXCJwb2ludHNcIixcbiAgICAgIFwiMTMuODggMTIuNzcgMTIuNjkgMTMuOCA1LjIgMTMuOCA0LjM2IDEyLjgyIDUuNjggMTEuNjggMTIuOTQgMTEuNjggMTMuODggMTIuNzdcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuUlQuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTYuNTksMy40OGwtMS4wNyw3Ljg3aDBsLTEuMjQsMS4wNy0uODktMSwxLTcuMjksMS44Ni0xLjZBMiwyLDAsMCwxLDE2LjU5LDMuNDhaXCJcbiAgICApO1xuICAgIHRoaXMuU2VnLlQuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTUuOTQsMi4xMSwxNC4xOCwzLjYzSDYuNjhMNS4yMywyQTEuODEsMS44MSwwLDAsMSw2LDEuNjVoOUEyLDIsMCwwLDEsMTUuOTQsMi4xMVpcIlxuICAgICk7XG4gICAgdGhpcy5TZWcuTFQuYXR0cihcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNNi4zNSw0LDUuMjQsMTEuMzcsNCwxMi40M2wtLjg2LTFMNC4yOCwzLjNhMi42NCwyLjY0LDAsMCwxLC41Ni0xWlwiXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5TZWcpIHRoaXMucGFyZW4uYXBwZW5kQ2hpbGQodGhpcy5TZWdbbV0uaW5zdGFuY2UoKSk7XG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIikpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucGFyZW4pO1xuICB9XG4gIHAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuUGluc1tuYW1lXS5zdGF0ZSA9PSBLVUNITEFOSVNILllVUU9SSSA/IDEgOiAwO1xuICB9XG4gIEZpcmUoKSB7XG4gICAgbGV0IGJpbiA9IGAke3RoaXMucChcIkRcIil9JHt0aGlzLnAoXCJDXCIpfSR7dGhpcy5wKFwiQlwiKX0ke3RoaXMucChcIkFcIil9YDtcbiAgICBsZXQgc29uID0gcGFyc2VJbnQoYmluLCAyKTtcbiAgICBjb25zb2xlLmxvZyhzb24pO1xuICAgIHRoaXMubnVtYmVyc1tcIjhcIl0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgdGhpcy5TZWdbZV0ub2ZmKCk7XG4gICAgfSk7XG4gICAgdGhpcy5udW1iZXJzW3Nvbl0uZm9yRWFjaCgoZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLlNlZ1tlXS5vbigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBLVUNITEFOSVNILFxuICBQSU5UWVBFLFxuICBQT1NJVElPTixcbiAgVE9PTFRZUEUsXG4gIFdJUkVTVEFURSxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBLb21wb25lbnQge1xuICBTaXplID0ge1xuICAgIHdpZHRoOiA0MCxcbiAgICBoZWlnaHQ6IDIwLFxuICB9O1xuICBzdGF0ZSA9IFdJUkVTVEFURS5PRkY7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiXCIsIFRPT0xUWVBFLlNXSVRDSCk7XG4gICAgdGhpcy5zZXRQaW5zKHtcbiAgICAgIEE6IG5ldyBQaW4oXCJBXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U2l6ZSh0aGlzLlNpemUpO1xuICAgIGxldCBzd0NvbnRhaW5lciA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIHN3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG4gICAgbGV0IGFjdGlvbkNvbnRhaW5lciA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIGFjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzd0NvbnRhaW5lcik7XG4gICAgYWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25Db250YWluZXJcIik7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoYWN0aW9uQ29udGFpbmVyKTtcbiAgICBhY3Rpb25Db250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09IDEpIHtcbiAgICAgICAgc3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGlvbk9OXCIpO1xuICAgICAgICBzd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uT0ZGXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gV0lSRVNUQVRFLk9GRjtcbiAgICAgICAgdGhpcy5QaW5zLkEuV3JpdGUoS1VDSExBTklTSC5QQVNUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25PTlwiKTtcbiAgICAgICAgc3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGlvbk9GRlwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFdJUkVTVEFURS5PTjtcbiAgICAgICAgdGhpcy5QaW5zLkEuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgVHJpU3RhdGUgZXh0ZW5kcyBLb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlRSSVNUQVRFXCIsIFRPT0xUWVBFLlRSSVNUQVRFKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgSU46IG5ldyBQaW4oXCJJTlwiLCBQSU5UWVBFLktJUklTSCksXG4gICAgICBJTjE6IG5ldyBQaW4oXCJJTlwiLCBQSU5UWVBFLktJUklTSCwgUE9TSVRJT04uVE9QKSxcbiAgICAgIE9VVDogbmV3IFBpbihcIk9VVFwiLCBQSU5UWVBFLkNISVFJU0gsIFBPU0lUSU9OLlJJR0hUKSxcbiAgICB9KTtcbiAgICB0aGlzLnNldFNpemUoeyB3aWR0aDogODAsIGhlaWdodDogMzAgfSk7XG4gIH1cbiAgc2V0U3RhdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgIHRoaXMuUGlucy5PVVQuV3JpdGUoa3VjaGxhbmlzaCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgWE9SIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJYT1JcIiwgVE9PTFRZUEUuWE9SKTtcbiAgICB0aGlzLnNldFBpbnMoe1xuICAgICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgICAgQzogbmV3IFBpbihcIkNcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gICAgfSk7XG4gIH1cblxuICBGaXJlKCkge1xuICAgIGlmICh0aGlzLlBpbnMuQS5zdGF0ZSAhPT0gdGhpcy5QaW5zLkIuc3RhdGUpIHtcbiAgICAgIHRoaXMuUGlucy5DLldyaXRlKEtVQ0hMQU5JU0guWVVRT1JJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5QaW5zLkMuV3JpdGUoS1VDSExBTklTSC5QQVNUKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE9SIH0gZnJvbSBcIi4vT3JcIjtcbmltcG9ydCB7IFhPUiB9IGZyb20gXCIuL1hvclwiO1xuaW1wb3J0IHsgU0VHTUVOVDcgfSBmcm9tIFwiLi9TZWdtZW50N1wiO1xuaW1wb3J0IHsgQU5EIH0gZnJvbSBcIi4vQW5kXCI7XG5pbXBvcnQgeyBOT1QgfSBmcm9tIFwiLi9Ob3RcIjtcbmltcG9ydCB7IEJhdHRlcnkgfSBmcm9tIFwiLi9CYXR0ZXJ5XCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiLi9CdWZmZXJcIjtcbmltcG9ydCB7IFRyaVN0YXRlIH0gZnJvbSBcIi4vVHJpU3RhdGVcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCIuL1N3aXRjaFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5leHBvcnQge1xuICBPUixcbiAgWE9SLFxuICBUcmlTdGF0ZSxcbiAgU0VHTUVOVDcsXG4gIEFORCxcbiAgTk9ULFxuICBCYXR0ZXJ5LFxuICBCdWZmZXIsXG4gIEJ1dHRvbixcbiAgU3dpdGNoLFxufTtcbiIsImV4cG9ydCBlbnVtIFBJTlRZUEUge1xuICBLSVJJU0ggPSBcImtcIixcbiAgQ0hJUUlTSCA9IFwiY1wiLFxuICBORVlUUkFMID0gXCJuXCIsXG59XG5leHBvcnQgZW51bSBRVVRCIHtcbiAgTUFORklZID0gLTEsXG4gIE1VU0JBVCA9IDEsXG59XG5leHBvcnQgZW51bSBQT1NJVElPTiB7XG4gIFRPUCA9IDgsXG4gIFJJR0hUID0gNixcbiAgQk9UVE9NID0gMixcbiAgTEVGVCA9IDQsXG59XG5leHBvcnQgZW51bSBLVUNITEFOSVNIIHtcbiAgWVVRT1JJID0gMjU1LFxuICBQQVNUID0gMCxcbn1cbmV4cG9ydCBlbnVtIFdJUkVTVEFURSB7XG4gIE9OID0gMSxcbiAgT0ZGID0gMCxcbn1cbmV4cG9ydCBlbnVtIFNUWUxFUyB7XG4gIEFORCA9IFwiYW5kLWdhdGVcIixcbiAgQk9SREVSID0gXCJib3JkZXJcIixcbiAgRkxFWCA9IFwiZmxleFwiLFxufVxuZXhwb3J0IGVudW0gVE9PTFRZUEUge1xuICBYT1IgPSBcIn5cIixcbiAgQU5EID0gXCImXCIsXG4gIE9SID0gXCJ8XCIsXG4gIE5PVCA9IFwiIVwiLFxuICBOQU5EID0gXCIhJlwiLFxuICBOT1IgPSBcIiF8XCIsXG4gIEJBVFRFUlkgPSBcImJcIixcbiAgU0VHNyA9IFwiczdcIixcbiAgTEVEID0gXCJsZFwiLFxuICBSR0JMID0gXCJybGRcIixcbiAgQlVGRkVSID0gXCJidWZcIixcbiAgVFJJU1RBVEUgPSBcIjNzdFwiLFxuICBCVVRUT04gPSBcImJ0blwiLFxuICBTV0lUQ0ggPSBcInN3XCIsXG59XG5cbmV4cG9ydCBlbnVtIENPTE9SUyB7XG4gIEJMVUUgPSBcIjAwN0Y5RVwiLFxuICBCT1JERVIgPSBcIjFCNDc1MlwiLFxufVxuIiwiaW1wb3J0IHsgVE9PTFRZUEUsIFBJTlRZUEUsIFBPU0lUSU9OLCBTVFlMRVMgfSBmcm9tIFwiLi9FbnVtc1wiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4vUGluXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbnR5cGUgRWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudDtcbmxldCBtID0gNTtcblxuZXhwb3J0IGNsYXNzIEtvbXBvbmVudCB7XG4gIGVsZW1lbnQ6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyB0eXBlOiBUT09MVFlQRSA9IG51bGw7XG4gIHB1YmxpYyBjYW52YXM6IEVsZW1lbnQ7XG4gIHB1YmxpYyBwYXJlbnQ6IEVsZW1lbnQ7XG4gIHB1YmxpYyBsZWZ0UGluczogRWxlbWVudDtcbiAgcHVibGljIHJpZ2h0UGluczogRWxlbWVudDtcbiAgcHVibGljIHRvcFBpbnM6IEVsZW1lbnQ7XG4gIHB1YmxpYyBib3R0b21QaW5zOiBFbGVtZW50O1xuICB1dWlkOiBzdHJpbmc7XG4gIG1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXIgfTtcblxuICBwdWJsaWMgUGluczogeyBba2V5OiBzdHJpbmddOiBQaW4gfTtcblxuICBjb25zdHJ1Y3RvcihlbDogc3RyaW5nLCB0eXBlOiBUT09MVFlQRSA9IG51bGwpIHtcbiAgICB0aGlzLnV1aWQgPSB1dWlkKCk7XG4gICAgaWYgKHR5cGUpIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWw7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4gICAgdGhpcy5wYXJlbnQgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzO1xuICAgIHRoaXMucGFyZW50Lm9ubW91c2Vkb3duID0gdGhpcy5wYXJlbnRNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmVudC5jbGFzc0xpc3QuYWRkKFNUWUxFUy5BTkQsIFNUWUxFUy5CT1JERVIsIFNUWUxFUy5GTEVYKTtcbiAgICBsZXQgdGV4dE5vZGUgPSB0aGlzLmVsdChcInNwYW5cIik7XG4gICAgdGV4dE5vZGUuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB0aGlzLmxlZnRQaW5zID0gdGhpcy5lbHQoXCJkaXZcIik7XG4gICAgdGhpcy5yaWdodFBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLnRvcFBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLmJvdHRvbVBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLnRvcFBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DVG9wXCIpO1xuICAgIHRoaXMucmlnaHRQaW5zLmNsYXNzTGlzdC5hZGQoXCJ2LWZsZXhcIiwgXCJwaW5DXCIsIFwicGluQ1JpZ2h0XCIpO1xuICAgIHRoaXMubGVmdFBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DTGVmdFwiKTtcbiAgICB0aGlzLmJvdHRvbVBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DQm90dG9tXCIpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMubGVmdFBpbnMpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmlnaHRQaW5zKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVBpbnMpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMudG9wUGlucyk7XG4gICAgdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgcGFyZW50TW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucG9pbnQgPSB7XG4gICAgICB4OiBlLmNsaWVudFggKyAyNTAsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgICBsZWZ0OiB0aGlzLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSB0cnVlO1xuICAgIGxldCByZWYgPSB0aGlzLnJvb3RNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlZiwgdHJ1ZSk7XG5cbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vdmUgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcmVmLCB0cnVlKTtcbiAgICB9O1xuICB9XG5cbiAgcm9vdE1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW92ZSkge1xuICAgICAgdGhpcy5wYXJlbnQuc3R5bGUudG9wID1cbiAgICAgICAgdGhpcy5wb2ludC50b3AgKyAoZS5jbGllbnRZIC0gdGhpcy5wb2ludC55KSArIFwicHhcIjtcbiAgICAgIHRoaXMucGFyZW50LnN0eWxlLmxlZnQgPVxuICAgICAgICB0aGlzLnBvaW50LmxlZnQgKyAoZS5jbGllbnRYIC0gdGhpcy5wb2ludC54KSArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICBzZXRQaW5zKHBpbnM6IHsgW2tleTogc3RyaW5nXTogUGluIH0pIHtcbiAgICB0aGlzLlBpbnMgPSBwaW5zO1xuICAgIE9iamVjdC5rZXlzKHBpbnMpLm1hcCgocGluKSA9PiB7XG4gICAgICBwaW5zW3Bpbl0uc2V0UGFyZW50KHRoaXMpO1xuICAgICAgc3dpdGNoIChwaW5zW3Bpbl0ucG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBQT1NJVElPTi5MRUZUOiB7XG4gICAgICAgICAgdGhpcy5sZWZ0UGlucy5hcHBlbmRDaGlsZChwaW5zW3Bpbl0ucGluQ29udGFpbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFBPU0lUSU9OLlJJR0hUOiB7XG4gICAgICAgICAgdGhpcy5yaWdodFBpbnMuYXBwZW5kQ2hpbGQocGluc1twaW5dLnBpbkNvbnRhaW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBQT1NJVElPTi5UT1A6IHtcbiAgICAgICAgICB0aGlzLnRvcFBpbnMuYXBwZW5kQ2hpbGQocGluc1twaW5dLnBpbkNvbnRhaW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBQT1NJVElPTi5CT1RUT006IHtcbiAgICAgICAgICB0aGlzLmJvdHRvbVBpbnMuYXBwZW5kQ2hpbGQocGluc1twaW5dLnBpbkNvbnRhaW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFNpemUoc2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgdGhpcy5wYXJlbnQuc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgXCJweFwiO1xuICAgIHRoaXMucGFyZW50LnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xuICB9XG5cbiAgZWx0KG5hbWU6IHN0cmluZywgbnM6IGJvb2xlYW4gPSBmYWxzZSk6IEVsZW1lbnQge1xuICAgIHJldHVybiBuc1xuICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBuYW1lKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge31cbiAgRmlyZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkZpcmUgb24ga29tcG9uZW50IGJpbGFuIGZpcmVzXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi9Lb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFBJTlRZUEUsXG4gIFFVVEIsXG4gIEtVQ0hMQU5JU0gsXG4gIFdJUkVTVEFURSxcbiAgVE9PTFRZUEUsXG4gIFBPU0lUSU9OLFxufSBmcm9tIFwiLi9FbnVtc1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBXaXJlIH0gZnJvbSBcIi4vV2lyZVwiO1xuaW1wb3J0IHsgWE9SIH0gZnJvbSBcIi4uL1Rvb2xzL1hvclwiO1xuaW1wb3J0IHsgQU5EIH0gZnJvbSBcIi4uL1Rvb2xzL0FuZFwiO1xuaW1wb3J0IHsgT1IgfSBmcm9tIFwiLi4vVG9vbHMvT3JcIjtcbmltcG9ydCB7IFNFR01FTlQ3IH0gZnJvbSBcIi4uL1Rvb2xzL1NlZ21lbnQ3XCI7XG5cbmludGVyZmFjZSBDSElMRCB7XG4gIGtvbXBvbmVudDogS29tcG9uZW50O1xuICBwaW5zOiBBcnJheTxQaW4+O1xufVxuaW50ZXJmYWNlIENISUxEUyB7XG4gIFtuYW1lOiBzdHJpbmddOiBDSElMRDtcbn1cblxuZXhwb3J0IGNsYXNzIFBpbiB7XG4gIHByaXZhdGUgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBhY3RpdmVQaW46IHN0cmluZyA9IG51bGw7XG4gIHB1YmxpYyBQaW5zOiBDSElMRFMgPSB7fTsgLy8gU2h1IHBpbmdhIHVsYW5nYW4ga29tcG9uZW50YVxuICBwdWJsaWMgUGluVHlwZTogUElOVFlQRSA9IFBJTlRZUEUuTkVZVFJBTDtcbiAgcHVibGljIFdpcmVzOiBBcnJheTxXaXJlPiA9IFtdO1xuICBwdWJsaWMgc3RhdGU6IEtVQ0hMQU5JU0ggPSBLVUNITEFOSVNILlBBU1Q7XG4gIHB1YmxpYyBRdXRiOiBRVVRCID0gUVVUQi5NQU5GSVk7IC8vSG96aXJjaGEgemFydXIgZW1hc1xuICBwdWJsaWMgcG9zaXRpb246IFBPU0lUSU9OO1xuICBwdWJsaWMgcGluQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHVibGljIHBhcmVudEVsZW1lbnQ6IEtvbXBvbmVudDtcbiAgcHVibGljIG9uQmVnaW5Db25uZWN0OiAoZTogTW91c2VFdmVudCwgYTogc3RyaW5nKSA9PiB7fSB8IHZvaWQ7XG4gIHB1YmxpYyBvbk1vdmVDb25uZWN0OiAoZTogTW91c2VFdmVudCkgPT4ge30gfCB2b2lkO1xuICBwdWJsaWMgb25FbmRDb25uZWN0OiAoZTogTW91c2VFdmVudCkgPT4ge30gfCB2b2lkO1xuICBwaW5JZDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGluVHlwZTogUElOVFlQRSxcbiAgICBwb3NpdGlvbjogUE9TSVRJT04gPSBQT1NJVElPTi5MRUZUXG4gICkge1xuICAgIHRoaXMucGluSWQgPSB1dWlkKCk7XG4gICAgdGhpcy5QaW5UeXBlID0gcGluVHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5waW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucGluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbHBpblwiKTtcbiAgICB0aGlzLnBpbkNvbnRhaW5lci5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vbkJlZ2luQ29ubmVjdChlLCB0aGlzLm5hbWUpO1xuICAgICAgbGV0IGVsID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICBsZXQgcmVmVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlQ29ubmVjdCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHJlZlVwKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3ZlQ29ubmVjdCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCByZWZVcCk7XG4gICAgfTtcbiAgICB0aGlzLnBpbkNvbnRhaW5lci5vbm1vdXNldXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vbkVuZENvbm5lY3QoZSk7XG4gICAgfTtcbiAgfVxuXG4gIGdldFBvcygpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5waW5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMixcbiAgICAgIHk6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMixcbiAgICB9O1xuICB9XG4gIG1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7fVxuICBzZXRQYXJlbnQocGFyZW50OiBLb21wb25lbnQpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnQ7XG4gIH1cbiAgV3JpdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgIGlmIChrdWNobGFuaXNoKSB7XG4gICAgICB0aGlzLldpcmVzLmZvckVhY2goKHdpcmUpID0+IHtcbiAgICAgICAgd2lyZS5zZXRTdGF0ZShXSVJFU1RBVEUuT04pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuV2lyZXMuZm9yRWFjaCgod2lyZSkgPT4ge1xuICAgICAgICB3aXJlLnNldFN0YXRlKFdJUkVTVEFURS5PRkYpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBrdWNobGFuaXNoO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuUGlucykge1xuICAgICAgdGhpcy5QaW5zW2tleV0ucGlucy5mb3JFYWNoKChlOiBQaW4pID0+IHtcbiAgICAgICAgZS5Xcml0ZShrdWNobGFuaXNoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5QaW5zW2tleV0ua29tcG9uZW50LkZpcmUoKTtcbiAgICB9XG4gIH1cbiAgYWRkUGluKGtvbXBvbmVudDogS29tcG9uZW50ID0gbnVsbCwgcGluTmFtZTogUGluID0gbnVsbCkge1xuICAgIGxldCBhID0ga29tcG9uZW50LmVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuUGluc1thXSkge1xuICAgICAgdGhpcy5QaW5zW2FdLnBpbnMucHVzaChwaW5OYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5QaW5zW2FdID0ge1xuICAgICAgICBrb21wb25lbnQ6IGtvbXBvbmVudCxcbiAgICAgICAgcGluczogW3Bpbk5hbWVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgYWRkV2lyZSh3aXJlOiBXaXJlID0gbnVsbCkge1xuICAgIHRoaXMuV2lyZXMucHVzaCh3aXJlKTtcbiAgfVxuICByZW1vdmVXaXJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuV2lyZXMgPSB0aGlzLldpcmVzLmZpbHRlcigod2lyZSkgPT4gd2lyZS5uYW1lICE9PSBuYW1lKTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgZ2V0Q29tcG9uZW50cygpIHtcbiAgICBsZXQgYnVmID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5QaW5zKSB7XG4gICAgICBidWYucHVzaCh0aGlzLlBpbnNba2V5XS5rb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUT09MVFlQRSwgUElOVFlQRSwgS1VDSExBTklTSCB9IGZyb20gXCIuL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7XG4gIE9SLFxuICBBTkQsXG4gIE5PVCxcbiAgQmF0dGVyeSxcbiAgU0VHTUVOVDcsXG4gIEJ1ZmZlcixcbiAgVHJpU3RhdGUsXG4gIEJ1dHRvbixcbiAgU3dpdGNoLFxufSBmcm9tIFwiLi9Ub29scy9pbmRleFwiO1xubGV0IGFuZCA9IG5ldyBBTkQoKTtcbmxldCBzZWcgPSBuZXcgU0VHTUVOVDcoKTtcbmxldCBzdyA9IG5ldyBTd2l0Y2goKTtcbmxldCBzdzEgPSBuZXcgU3dpdGNoKCk7XG5cbnN3LlBpbnNbXCJBXCJdLmFkZFBpbihhbmQsIGFuZC5QaW5zLkEpO1xuc3cxLlBpbnNbXCJBXCJdLmFkZFBpbihhbmQsIGFuZC5QaW5zLkIpO1xuYW5kLlBpbnMuQy5hZGRQaW4oc2VnLCBzZWcuUGlucy5BKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
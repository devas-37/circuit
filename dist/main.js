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
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.size = {
            width: 45,
            height: 32,
        };
        _this.setPins(_this.Pins);
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
        _this.Pins = {
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("OUT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.setPins(_this.Pins);
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
        _this.pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.size = {
            width: 90,
            height: 32,
        };
        _this.setPins(_this.pins);
        return _this;
    }
    Buffer.prototype.Fire = function () {
        if (this.pins.A.state & this.pins.C.state) {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
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
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.Size = {
            width: 37,
            height: 32,
        };
        _this.Location = {
            left: 150,
            top: 250,
        };
        _this.setPins(_this.Pins);
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
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.setPins(_this.Pins);
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
        _this.pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.setPins(_this.pins);
        return _this;
    }
    OR.prototype.Fire = function () {
        if (this.pins.A.state | this.pins.B.state) {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
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
            10: ["T", "LB", "M", "RB", "RT", "B"],
            11: ["LT", "LB", "RB", "RT", "B", "M"],
            12: ["T", "LT", "LB", "B"],
            13: ["LB", "RB", "B", "RT", "M"],
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
        _this.paren = document.createElementNS(_this.nameSpace, "svg");
        _this.setAttr(_this.paren, {
            x: 0,
            y: 0,
            viewBox: "0 0 18.24 25.48",
            width: 54.72,
            height: 76.44,
        });
        _this.setPins(_this.Pins);
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
        _this.Pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.Size = {
            width: 40,
            height: 20,
        };
        _this.state = _components_Enums__WEBPACK_IMPORTED_MODULE_0__["WIRESTATE"].OFF;
        _this.setPins(_this.Pins);
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
        _this.Pins = {
            IN: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("IN", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            IN1: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("IN", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].TOP),
            OUT: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("OUT", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.setPins(_this.Pins);
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
        _this.pins = {
            A: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("A", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            B: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("B", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].KIRISH),
            C: new _components_Pin__WEBPACK_IMPORTED_MODULE_2__["Pin"]("C", _components_Enums__WEBPACK_IMPORTED_MODULE_0__["PINTYPE"].CHIQISH, _components_Enums__WEBPACK_IMPORTED_MODULE_0__["POSITION"].RIGHT),
        };
        _this.setPins(_this.pins);
        return _this;
    }
    XOR.prototype.Fire = function () {
        if (this.pins.A.state !== this.pins.B.state) {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].YUQORI);
        }
        else {
            this.pins.C.Write(_components_Enums__WEBPACK_IMPORTED_MODULE_0__["KUCHLANISH"].PAST);
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
            x: e.clientX,
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
            var el = e.target;
            var ref = _this.mouseMove.bind(_this);
            var refUp = function (e) {
                console.log(e.target.className);
                if (e.target.className !== "elpin") {
                }
                document.removeEventListener("mousemove", ref);
                document.removeEventListener("mouseup", refUp);
            };
            document.addEventListener("mousemove", ref);
            document.addEventListener("mouseup", refUp);
        };
        this.pinContainer.onmouseup = function () { };
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

var btn = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["Button"]();
var seg = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["SEGMENT7"]();
var sw = new _Tools_index__WEBPACK_IMPORTED_MODULE_0__["Switch"]();
btn.Pins["A"].addPin(seg, seg.Pins.A);
sw.Pins["A"].addPin(seg, seg.Pins.B);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL0FuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvQmF0dGVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvQnVmZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL05vdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbHMvT3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL1NlZ21lbnQ3LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9Td2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL1RyaVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub29scy9Yb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rvb2xzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0tvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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WUFDOUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDcEMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFDcEIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3BDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQ3JDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3RDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUMxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQ2hDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDL0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1NBQzNCLENBQUM7UUFzQkssVUFBSSxHQUFHO1lBQ1osQ0FBQyxF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QUFDLElBQUksSUFBSyxXQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxxQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCwyQkFBYSxHQUFiO1FBQ0UsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hIRDtBQUFBO0FBVXVCO0FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksbURBQU0sRUFBRSxDQUFDO0FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUkscURBQVEsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksbURBQU0sRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdjEgfSBmcm9tICcuL3YxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjMgfSBmcm9tICcuL3YzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjQgfSBmcm9tICcuL3Y0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjUgfSBmcm9tICcuL3Y1LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTklMIH0gZnJvbSAnLi9uaWwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsaWRhdGUgfSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZSB9IGZyb20gJy4vcGFyc2UuanMnOyIsIi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJleHBvcnQgZGVmYXVsdCAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJzsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICB2YXIgdjtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZS5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdpZnkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbnZhciB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc3Vic3RyKDE0LCAxKSwgMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uOyIsImltcG9ydCB7XG4gIEtVQ0hMQU5JU0gsXG4gIFBJTlRZUEUsXG4gIFBPU0lUSU9OLFxuICBTVFlMRVMsXG4gIFRPT0xUWVBFLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcblxuZXhwb3J0IGNsYXNzIEFORCBleHRlbmRzIEtvbXBvbmVudCB7XG4gIFBpbnMgPSB7XG4gICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEI6IG5ldyBQaW4oXCJCXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBDOiBuZXcgUGluKFwiQ1wiLCBQSU5UWVBFLkNISVFJU0gsIFBPU0lUSU9OLlJJR0hUKSxcbiAgfTtcbiAgc2l6ZSA9IHtcbiAgICB3aWR0aDogNDUsXG4gICAgaGVpZ2h0OiAzMixcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkFORFwiLCBUT09MVFlQRS5BTkQpO1xuICAgIHRoaXMuc2V0UGlucyh0aGlzLlBpbnMpO1xuICB9XG5cbiAgRmlyZSgpIHtcbiAgICBpZiAodGhpcy5QaW5zLkEuc3RhdGUgJiB0aGlzLlBpbnMuQi5zdGF0ZSkge1xuICAgICAgdGhpcy5QaW5zLkMuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLlBpbnMuQy5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgUE9TSVRJT04sIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgS29tcG9uZW50IHtcbiAgcHVibGljIFBpbnMgPSB7XG4gICAgT1VUOiBuZXcgUGluKFwiT1VUXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJBVFRcIiwgVE9PTFRZUEUuQkFUVEVSWSk7XG4gICAgdGhpcy5zZXRQaW5zKHRoaXMuUGlucyk7XG4gICAgdGhpcy5zZXRTaXplKHsgd2lkdGg6IDYwLCBoZWlnaHQ6IDMwIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgIHRoaXMuUGlucy5PVVQuV3JpdGUoa3VjaGxhbmlzaCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgcHVibGljIHBpbnMgPSB7XG4gICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEM6IG5ldyBQaW4oXCJDXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICB9O1xuICBzaXplID0ge1xuICAgIHdpZHRoOiA5MCxcbiAgICBoZWlnaHQ6IDMyLFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJVRkZFUlwiLCBUT09MVFlQRS5CVUZGRVIpO1xuICAgIHRoaXMuc2V0UGlucyh0aGlzLnBpbnMpO1xuICB9XG5cbiAgRmlyZSgpIHtcbiAgICBpZiAodGhpcy5waW5zLkEuc3RhdGUgJiB0aGlzLnBpbnMuQy5zdGF0ZSkge1xuICAgICAgdGhpcy5waW5zLkMuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpbnMuQy5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgUE9TSVRJT04sIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBLb21wb25lbnQge1xuICBQaW5zID0ge1xuICAgIEE6IG5ldyBQaW4oXCJBXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICB9O1xuICBTaXplID0ge1xuICAgIHdpZHRoOiAzNyxcbiAgICBoZWlnaHQ6IDMyLFxuICB9O1xuICBMb2NhdGlvbiA9IHtcbiAgICBsZWZ0OiAxNTAsXG4gICAgdG9wOiAyNTAsXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiXCIsIFRPT0xUWVBFLkJVVFRPTik7XG4gICAgdGhpcy5zZXRQaW5zKHRoaXMuUGlucyk7XG4gICAgdGhpcy5zZXRTaXplKHRoaXMuU2l6ZSk7XG4gICAgbGV0IGJ0biA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRUxCdG5cIik7XG4gICAgdGhpcy5wYXJlbnQuc3R5bGUubGVmdCA9IHRoaXMuTG9jYXRpb24ubGVmdCArIFwicHhcIjtcbiAgICB0aGlzLnBhcmVudC5zdHlsZS50b3AgPSB0aGlzLkxvY2F0aW9uLnRvcCArIFwicHhcIjtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZChidG4pO1xuICAgIGxldCByZWYgPSAoKSA9PiB7XG4gICAgICB0aGlzLlBpbnNbXCJBXCJdLldyaXRlKEtVQ0hMQU5JU0guUEFTVCk7XG4gICAgfTtcbiAgICBidG4ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgICAgdGhpcy5QaW5zW1wiQVwiXS5Xcml0ZShLVUNITEFOSVNILllVUU9SSSk7XG4gICAgfTtcbiAgICBidG4ub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgICAgdGhpcy5QaW5zW1wiQVwiXS5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH07XG4gICAgYnRuLm9ubW91c2Vtb3ZlID0gKCkgPT4ge1xuICAgICAgYnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCByZWYpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgTk9UIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJOT1RcIiwgVE9PTFRZUEUuTk9UKTtcbiAgICB0aGlzLnNldFBpbnModGhpcy5QaW5zKTtcbiAgICB0aGlzLnNldFNpemUoeyB3aWR0aDogNjAsIGhlaWdodDogMzAgfSk7XG4gIH1cbiAgcHVibGljIFBpbnMgPSB7XG4gICAgQTogbmV3IFBpbihcIkFcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEI6IG5ldyBQaW4oXCJCXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICB9O1xuICBGaXJlKCkge1xuICAgIHRoaXMuUGlucy5CLldyaXRlKFxuICAgICAgdGhpcy5QaW5zLkEuc3RhdGUgIT0gMCA/IEtVQ0hMQU5JU0guUEFTVCA6IEtVQ0hMQU5JU0guWVVRT1JJXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgUE9TSVRJT04sIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBPUiBleHRlbmRzIEtvbXBvbmVudCB7XG4gIHB1YmxpYyBwaW5zID0ge1xuICAgIEE6IG5ldyBQaW4oXCJBXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBCOiBuZXcgUGluKFwiQlwiLCBQSU5UWVBFLktJUklTSCksXG4gICAgQzogbmV3IFBpbihcIkNcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiT1JcIiwgVE9PTFRZUEUuT1IpO1xuICAgIHRoaXMuc2V0UGlucyh0aGlzLnBpbnMpO1xuICB9XG5cbiAgRmlyZSgpIHtcbiAgICBpZiAodGhpcy5waW5zLkEuc3RhdGUgfCB0aGlzLnBpbnMuQi5zdGF0ZSkge1xuICAgICAgdGhpcy5waW5zLkMuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpbnMuQy5Xcml0ZShLVUNITEFOSVNILlBBU1QpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgVE9PTFRZUEUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FbnVtc1wiO1xuaW1wb3J0IHsgS29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS29tcG9uZW50XCI7XG5pbXBvcnQgeyBQaW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QaW5cIjtcbmNsYXNzIFNFR01FTlQge1xuICBwcml2YXRlIGVsZW1lbnQ6IFNWR0VsZW1lbnQ7XG4gIHByaXZhdGUgcTogc3RyaW5nID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHR5cGUpO1xuICAgIHRoaXMub2ZmKCk7XG4gIH1cbiAgYXR0cihhdHRyOiBzdHJpbmcsIGQ6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBhdHRyLCBkKTtcbiAgfVxuICBvbigpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwid2hpdGVcIik7XG4gIH1cbiAgb2ZmKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCIjMDI2MDc3OTNcIik7XG4gIH1cbiAgaW5zdGFuY2UoKTogU1ZHRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudCBhcyBTVkdFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0VHTUVOVFZBUiB7XG4gIExCPzogU0VHTUVOVDtcbiAgTFQ/OiBTRUdNRU5UO1xuICBUPzogU0VHTUVOVDtcbiAgQj86IFNFR01FTlQ7XG4gIFJUPzogU0VHTUVOVDtcbiAgUkI/OiBTRUdNRU5UO1xuICBNPzogU0VHTUVOVDtcbn1cbmV4cG9ydCBjbGFzcyBTRUdNRU5UNyBleHRlbmRzIEtvbXBvbmVudCB7XG4gIHByaXZhdGUgbmFtZVNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBwdWJsaWMgTlVNQkVSID0gMDtcbiAgcHJpdmF0ZSBwYXJlbjogU1ZHRWxlbWVudDtcbiAgcHJpdmF0ZSBudW1iZXJzID0ge1xuICAgIDA6IFtcIlRcIiwgXCJSVFwiLCBcIlJCXCIsIFwiQlwiLCBcIkxCXCIsIFwiTFRcIl0sXG4gICAgMTogW1wiUlRcIiwgXCJSQlwiXSxcbiAgICAyOiBbXCJUXCIsIFwiUlRcIiwgXCJNXCIsIFwiTEJcIiwgXCJCXCJdLFxuICAgIDM6IFtcIlRcIiwgXCJSVFwiLCBcIlJCXCIsIFwiTVwiLCBcIkJcIl0sXG4gICAgNDogW1wiTFRcIiwgXCJNXCIsIFwiUlRcIiwgXCJSQlwiXSxcbiAgICA1OiBbXCJUXCIsIFwiTFRcIiwgXCJNXCIsIFwiUkJcIiwgXCJCXCJdLFxuICAgIDY6IFtcIlRcIiwgXCJMVFwiLCBcIkxCXCIsIFwiTVwiLCBcIlJCXCIsIFwiQlwiXSxcbiAgICA3OiBbXCJSVFwiLCBcIlJCXCIsIFwiVFwiXSxcbiAgICA4OiBbXCJUXCIsIFwiTFRcIiwgXCJMQlwiLCBcIk1cIiwgXCJSQlwiLCBcIkJcIiwgXCJSVFwiXSxcbiAgICA5OiBbXCJUXCIsIFwiTFRcIiwgXCJNXCIsIFwiUkJcIiwgXCJCXCIsIFwiUlRcIl0sXG4gICAgMTA6IFtcIlRcIiwgXCJMQlwiLCBcIk1cIiwgXCJSQlwiLCBcIlJUXCIsIFwiQlwiXSxcbiAgICAxMTogW1wiTFRcIiwgXCJMQlwiLCBcIlJCXCIsIFwiUlRcIiwgXCJCXCIsIFwiTVwiXSxcbiAgICAxMjogW1wiVFwiLCBcIkxUXCIsIFwiTEJcIiwgXCJCXCJdLFxuICAgIDEzOiBbXCJMQlwiLCBcIlJCXCIsIFwiQlwiLCBcIlJUXCIsIFwiTVwiXSxcbiAgICAxNDogW1wiVFwiLCBcIkxUXCIsIFwiTEJcIiwgXCJCXCIsIFwiTVwiXSxcbiAgICAxNTogW1wiVFwiLCBcIkxUXCIsIFwiTEJcIiwgXCJNXCJdLFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlNFRzdcIiwgVE9PTFRZUEUuU0VHNyk7XG4gICAgdGhpcy5wYXJlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLm5hbWVTcGFjZSwgXCJzdmdcIikgYXMgU1ZHRWxlbWVudDtcbiAgICB0aGlzLnNldEF0dHIodGhpcy5wYXJlbiwge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxOC4yNCAyNS40OFwiLFxuICAgICAgd2lkdGg6IDU0LjcyLFxuICAgICAgaGVpZ2h0OiA3Ni40NCxcbiAgICB9KTtcbiAgICB0aGlzLnNldFBpbnModGhpcy5QaW5zKTtcbiAgICB0aGlzLnNldFNpemUoe1xuICAgICAgd2lkdGg6IDYwLFxuICAgICAgaGVpZ2h0OiA4MCxcbiAgICB9KTtcbiAgICB0aGlzLnBhaW50KCk7XG4gICAgdGhpcy5udW1iZXJzWzBdLmZvckVhY2goKGUpID0+IHtcbiAgICAgIHRoaXMuU2VnW2VdLm9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgUGlucyA9IHtcbiAgICBBOiBuZXcgUGluKFwiQVwiLCBQSU5UWVBFLktJUklTSCksXG4gICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEM6IG5ldyBQaW4oXCJDXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBEOiBuZXcgUGluKFwiRFwiLCBQSU5UWVBFLktJUklTSCksXG4gIH07XG4gIHNldEF0dHIoZWw6IFNWR0VsZW1lbnQsIHZhbDogb2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCBtIGluIHZhbCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlTlMobnVsbCwgbSwgdmFsW21dKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIFNlZzogU0VHTUVOVFZBUiA9IHtcbiAgICBMQjogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIExUOiBuZXcgU0VHTUVOVChcInBhdGhcIiksXG4gICAgQjogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIFQ6IG5ldyBTRUdNRU5UKFwicGF0aFwiKSxcbiAgICBSVDogbmV3IFNFR01FTlQoXCJwYXRoXCIpLFxuICAgIFJCOiBuZXcgU0VHTUVOVChcInBhdGhcIiksXG4gICAgTTogbmV3IFNFR01FTlQoXCJwb2x5Z29uXCIpLFxuICB9O1xuICBwcml2YXRlIHBhaW50KCkge1xuICAgIHRoaXMuU2VnLkxCLmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTQuOCwxNC4xMiw0LjY1LDE1LjNsLS44LDYuMTZoMEwyLDIzYTIuMjIsMi4yMiwwLDAsMS0uMzQtMWwxLjA4LTcuODYsMS4xOC0xWlwiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5CLmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTEzLjA4LDIzLjcyYTIuNTMsMi41MywwLDAsMS0uODEuMzNsLTguNzEtLjExYTIuMjcsMi4yNywwLDAsMS0xLjE5LS41MmwxLjg5LTEuNjRoMGw3LjIuMDdaXCJcbiAgICApO1xuICAgIHRoaXMuU2VnLlJCLmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTE1LjEzLDE0LjIxLDE0LDIyLjI2YTIuMTIsMi4xMiwwLDAsMS0uNTUsMS4xM2wtMS41Ny0xLjgyLDEtNy4yOSwxLjI5LTEuMTJaXCJcbiAgICApO1xuICAgIHRoaXMuU2VnLk0uYXR0cihcbiAgICAgIFwicG9pbnRzXCIsXG4gICAgICBcIjEzLjg4IDEyLjc3IDEyLjY5IDEzLjggNS4yIDEzLjggNC4zNiAxMi44MiA1LjY4IDExLjY4IDEyLjk0IDExLjY4IDEzLjg4IDEyLjc3XCJcbiAgICApO1xuICAgIHRoaXMuU2VnLlJULmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTE2LjU5LDMuNDhsLTEuMDcsNy44N2gwbC0xLjI0LDEuMDctLjg5LTEsMS03LjI5LDEuODYtMS42QTIsMiwwLDAsMSwxNi41OSwzLjQ4WlwiXG4gICAgKTtcbiAgICB0aGlzLlNlZy5ULmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTE1Ljk0LDIuMTEsMTQuMTgsMy42M0g2LjY4TDUuMjMsMkExLjgxLDEuODEsMCwwLDEsNiwxLjY1aDlBMiwyLDAsMCwxLDE1Ljk0LDIuMTFaXCJcbiAgICApO1xuICAgIHRoaXMuU2VnLkxULmF0dHIoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTYuMzUsNCw1LjI0LDExLjM3LDQsMTIuNDNsLS44Ni0xTDQuMjgsMy4zYTIuNjQsMi42NCwwLDAsMSwuNTYtMVpcIlxuICAgICk7XG4gICAgZm9yIChjb25zdCBtIGluIHRoaXMuU2VnKSB0aGlzLnBhcmVuLmFwcGVuZENoaWxkKHRoaXMuU2VnW21dLmluc3RhbmNlKCkpO1xuICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnBhcmVuKTtcbiAgfVxuICBwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLlBpbnNbbmFtZV0uc3RhdGUgPT0gS1VDSExBTklTSC5ZVVFPUkkgPyAxIDogMDtcbiAgfVxuICBGaXJlKCkge1xuICAgIGxldCBiaW4gPSBgJHt0aGlzLnAoXCJEXCIpfSR7dGhpcy5wKFwiQ1wiKX0ke3RoaXMucChcIkJcIil9JHt0aGlzLnAoXCJBXCIpfWA7XG4gICAgbGV0IHNvbiA9IHBhcnNlSW50KGJpbiwgMik7XG4gICAgY29uc29sZS5sb2coc29uKTtcbiAgICB0aGlzLm51bWJlcnNbXCI4XCJdLmZvckVhY2goKGUpID0+IHtcbiAgICAgIHRoaXMuU2VnW2VdLm9mZigpO1xuICAgIH0pO1xuICAgIHRoaXMubnVtYmVyc1tzb25dLmZvckVhY2goKGU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5TZWdbZV0ub24oKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgS1VDSExBTklTSCxcbiAgUElOVFlQRSxcbiAgUE9TSVRJT04sXG4gIFRPT0xUWVBFLFxuICBXSVJFU1RBVEUsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgS29tcG9uZW50IHtcbiAgUGlucyA9IHtcbiAgICBBOiBuZXcgUGluKFwiQVwiLCBQSU5UWVBFLkNISVFJU0gsIFBPU0lUSU9OLlJJR0hUKSxcbiAgfTtcbiAgU2l6ZSA9IHtcbiAgICB3aWR0aDogNDAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgfTtcbiAgc3RhdGUgPSBXSVJFU1RBVEUuT0ZGO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlwiLCBUT09MVFlQRS5TV0lUQ0gpO1xuICAgIHRoaXMuc2V0UGlucyh0aGlzLlBpbnMpO1xuICAgIHRoaXMuc2V0U2l6ZSh0aGlzLlNpemUpO1xuICAgIGxldCBzd0NvbnRhaW5lciA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIHN3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG4gICAgbGV0IGFjdGlvbkNvbnRhaW5lciA9IHRoaXMuZWx0KFwiZGl2XCIpO1xuICAgIGFjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzd0NvbnRhaW5lcik7XG4gICAgYWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25Db250YWluZXJcIik7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoYWN0aW9uQ29udGFpbmVyKTtcbiAgICBhY3Rpb25Db250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09IDEpIHtcbiAgICAgICAgc3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGlvbk9OXCIpO1xuICAgICAgICBzd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uT0ZGXCIpO1xuICAgICAgICB0aGlzLnN0YXRlID0gV0lSRVNUQVRFLk9GRjtcbiAgICAgICAgdGhpcy5QaW5zLkEuV3JpdGUoS1VDSExBTklTSC5QQVNUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25PTlwiKTtcbiAgICAgICAgc3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGlvbk9GRlwiKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFdJUkVTVEFURS5PTjtcbiAgICAgICAgdGhpcy5QaW5zLkEuV3JpdGUoS1VDSExBTklTSC5ZVVFPUkkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEtVQ0hMQU5JU0gsIFBJTlRZUEUsIFBPU0lUSU9OLCBUT09MVFlQRSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0VudW1zXCI7XG5pbXBvcnQgeyBLb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Lb21wb25lbnRcIjtcbmltcG9ydCB7IFBpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BpblwiO1xuXG5leHBvcnQgY2xhc3MgVHJpU3RhdGUgZXh0ZW5kcyBLb21wb25lbnQge1xuICBwdWJsaWMgUGlucyA9IHtcbiAgICBJTjogbmV3IFBpbihcIklOXCIsIFBJTlRZUEUuS0lSSVNIKSxcbiAgICBJTjE6IG5ldyBQaW4oXCJJTlwiLCBQSU5UWVBFLktJUklTSCwgUE9TSVRJT04uVE9QKSxcbiAgICBPVVQ6IG5ldyBQaW4oXCJPVVRcIiwgUElOVFlQRS5DSElRSVNILCBQT1NJVElPTi5SSUdIVCksXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiVFJJU1RBVEVcIiwgVE9PTFRZUEUuVFJJU1RBVEUpO1xuICAgIHRoaXMuc2V0UGlucyh0aGlzLlBpbnMpO1xuICAgIHRoaXMuc2V0U2l6ZSh7IHdpZHRoOiA4MCwgaGVpZ2h0OiAzMCB9KTtcbiAgfVxuICBzZXRTdGF0ZShrdWNobGFuaXNoOiBLVUNITEFOSVNIKSB7XG4gICAgdGhpcy5QaW5zLk9VVC5Xcml0ZShrdWNobGFuaXNoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgS1VDSExBTklTSCwgUElOVFlQRSwgUE9TSVRJT04sIFRPT0xUWVBFIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0tvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGluXCI7XG5cbmV4cG9ydCBjbGFzcyBYT1IgZXh0ZW5kcyBLb21wb25lbnQge1xuICBwdWJsaWMgcGlucyA9IHtcbiAgICBBOiBuZXcgUGluKFwiQVwiLCBQSU5UWVBFLktJUklTSCksXG4gICAgQjogbmV3IFBpbihcIkJcIiwgUElOVFlQRS5LSVJJU0gpLFxuICAgIEM6IG5ldyBQaW4oXCJDXCIsIFBJTlRZUEUuQ0hJUUlTSCwgUE9TSVRJT04uUklHSFQpLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiWE9SXCIsIFRPT0xUWVBFLlhPUik7XG4gICAgdGhpcy5zZXRQaW5zKHRoaXMucGlucyk7XG4gIH1cblxuICBGaXJlKCkge1xuICAgIGlmICh0aGlzLnBpbnMuQS5zdGF0ZSAhPT0gdGhpcy5waW5zLkIuc3RhdGUpIHtcbiAgICAgIHRoaXMucGlucy5DLldyaXRlKEtVQ0hMQU5JU0guWVVRT1JJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waW5zLkMuV3JpdGUoS1VDSExBTklTSC5QQVNUKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE9SIH0gZnJvbSBcIi4vT3JcIjtcbmltcG9ydCB7IFhPUiB9IGZyb20gXCIuL1hvclwiO1xuaW1wb3J0IHsgU0VHTUVOVDcgfSBmcm9tIFwiLi9TZWdtZW50N1wiO1xuaW1wb3J0IHsgQU5EIH0gZnJvbSBcIi4vQW5kXCI7XG5pbXBvcnQgeyBOT1QgfSBmcm9tIFwiLi9Ob3RcIjtcbmltcG9ydCB7IEJhdHRlcnkgfSBmcm9tIFwiLi9CYXR0ZXJ5XCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiLi9CdWZmZXJcIjtcbmltcG9ydCB7IFRyaVN0YXRlIH0gZnJvbSBcIi4vVHJpU3RhdGVcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCIuL1N3aXRjaFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5leHBvcnQge1xuICBPUixcbiAgWE9SLFxuICBUcmlTdGF0ZSxcbiAgU0VHTUVOVDcsXG4gIEFORCxcbiAgTk9ULFxuICBCYXR0ZXJ5LFxuICBCdWZmZXIsXG4gIEJ1dHRvbixcbiAgU3dpdGNoLFxufTtcbiIsImV4cG9ydCBlbnVtIFBJTlRZUEUge1xuICBLSVJJU0ggPSBcImtcIixcbiAgQ0hJUUlTSCA9IFwiY1wiLFxuICBORVlUUkFMID0gXCJuXCIsXG59XG5leHBvcnQgZW51bSBRVVRCIHtcbiAgTUFORklZID0gLTEsXG4gIE1VU0JBVCA9IDEsXG59XG5leHBvcnQgZW51bSBQT1NJVElPTiB7XG4gIFRPUCA9IDgsXG4gIFJJR0hUID0gNixcbiAgQk9UVE9NID0gMixcbiAgTEVGVCA9IDQsXG59XG5leHBvcnQgZW51bSBLVUNITEFOSVNIIHtcbiAgWVVRT1JJID0gMjU1LFxuICBQQVNUID0gMCxcbn1cbmV4cG9ydCBlbnVtIFdJUkVTVEFURSB7XG4gIE9OID0gMSxcbiAgT0ZGID0gMCxcbn1cbmV4cG9ydCBlbnVtIFNUWUxFUyB7XG4gIEFORCA9IFwiYW5kLWdhdGVcIixcbiAgQk9SREVSID0gXCJib3JkZXJcIixcbiAgRkxFWCA9IFwiZmxleFwiLFxufVxuZXhwb3J0IGVudW0gVE9PTFRZUEUge1xuICBYT1IgPSBcIn5cIixcbiAgQU5EID0gXCImXCIsXG4gIE9SID0gXCJ8XCIsXG4gIE5PVCA9IFwiIVwiLFxuICBOQU5EID0gXCIhJlwiLFxuICBOT1IgPSBcIiF8XCIsXG4gIEJBVFRFUlkgPSBcImJcIixcbiAgU0VHNyA9IFwiczdcIixcbiAgTEVEID0gXCJsZFwiLFxuICBSR0JMID0gXCJybGRcIixcbiAgQlVGRkVSID0gXCJidWZcIixcbiAgVFJJU1RBVEUgPSBcIjNzdFwiLFxuICBCVVRUT04gPSBcImJ0blwiLFxuICBTV0lUQ0ggPSBcInN3XCIsXG59XG5cbmV4cG9ydCBlbnVtIENPTE9SUyB7XG4gIEJMVUUgPSBcIjAwN0Y5RVwiLFxuICBCT1JERVIgPSBcIjFCNDc1MlwiLFxufVxuIiwiaW1wb3J0IHsgVE9PTFRZUEUsIFBJTlRZUEUsIFBPU0lUSU9OLCBTVFlMRVMgfSBmcm9tIFwiLi9FbnVtc1wiO1xuaW1wb3J0IHsgUGluIH0gZnJvbSBcIi4vUGluXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbnR5cGUgRWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudDtcbmxldCBtID0gNTtcblxuZXhwb3J0IGNsYXNzIEtvbXBvbmVudCB7XG4gIGVsZW1lbnQ6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyB0eXBlOiBUT09MVFlQRSA9IG51bGw7XG4gIHB1YmxpYyBjYW52YXM6IEVsZW1lbnQ7XG4gIHB1YmxpYyBwYXJlbnQ6IEVsZW1lbnQ7XG4gIHB1YmxpYyBsZWZ0UGluczogRWxlbWVudDtcbiAgcHVibGljIHJpZ2h0UGluczogRWxlbWVudDtcbiAgcHVibGljIHRvcFBpbnM6IEVsZW1lbnQ7XG4gIHB1YmxpYyBib3R0b21QaW5zOiBFbGVtZW50O1xuICB1dWlkOiBzdHJpbmc7XG4gIG1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXIgfTtcblxuICBjb25zdHJ1Y3RvcihlbDogc3RyaW5nLCB0eXBlOiBUT09MVFlQRSA9IG51bGwpIHtcbiAgICB0aGlzLnV1aWQgPSB1dWlkKCk7XG4gICAgaWYgKHR5cGUpIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWw7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4gICAgdGhpcy5wYXJlbnQgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzO1xuICAgIHRoaXMucGFyZW50Lm9ubW91c2Vkb3duID0gdGhpcy5wYXJlbnRNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmVudC5jbGFzc0xpc3QuYWRkKFNUWUxFUy5BTkQsIFNUWUxFUy5CT1JERVIsIFNUWUxFUy5GTEVYKTtcbiAgICBsZXQgdGV4dE5vZGUgPSB0aGlzLmVsdChcInNwYW5cIik7XG4gICAgdGV4dE5vZGUuaW5uZXJIVE1MID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB0aGlzLmxlZnRQaW5zID0gdGhpcy5lbHQoXCJkaXZcIik7XG4gICAgdGhpcy5yaWdodFBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLnRvcFBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLmJvdHRvbVBpbnMgPSB0aGlzLmVsdChcImRpdlwiKTtcbiAgICB0aGlzLnRvcFBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DVG9wXCIpO1xuICAgIHRoaXMucmlnaHRQaW5zLmNsYXNzTGlzdC5hZGQoXCJ2LWZsZXhcIiwgXCJwaW5DXCIsIFwicGluQ1JpZ2h0XCIpO1xuICAgIHRoaXMubGVmdFBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DTGVmdFwiKTtcbiAgICB0aGlzLmJvdHRvbVBpbnMuY2xhc3NMaXN0LmFkZChcInYtZmxleFwiLCBcInBpbkNcIiwgXCJwaW5DQm90dG9tXCIpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMubGVmdFBpbnMpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmlnaHRQaW5zKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbVBpbnMpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMudG9wUGlucyk7XG4gICAgdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgcGFyZW50TW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucG9pbnQgPSB7XG4gICAgICB4OiBlLmNsaWVudFgsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgICBsZWZ0OiB0aGlzLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSB0cnVlO1xuICAgIGxldCByZWYgPSB0aGlzLnJvb3RNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlZiwgdHJ1ZSk7XG5cbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1vdmUgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcmVmLCB0cnVlKTtcbiAgICB9O1xuICB9XG5cbiAgcm9vdE1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW92ZSkge1xuICAgICAgdGhpcy5wYXJlbnQuc3R5bGUudG9wID1cbiAgICAgICAgdGhpcy5wb2ludC50b3AgKyAoZS5jbGllbnRZIC0gdGhpcy5wb2ludC55KSArIFwicHhcIjtcbiAgICAgIHRoaXMucGFyZW50LnN0eWxlLmxlZnQgPVxuICAgICAgICB0aGlzLnBvaW50LmxlZnQgKyAoZS5jbGllbnRYIC0gdGhpcy5wb2ludC54KSArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICBzZXRQaW5zKHBpbnM6IHsgW2tleTogc3RyaW5nXTogUGluIH0pIHtcbiAgICBPYmplY3Qua2V5cyhwaW5zKS5tYXAoKHBpbikgPT4ge1xuICAgICAgcGluc1twaW5dLnNldFBhcmVudCh0aGlzKTtcbiAgICAgIHN3aXRjaCAocGluc1twaW5dLnBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgUE9TSVRJT04uTEVGVDoge1xuICAgICAgICAgIHRoaXMubGVmdFBpbnMuYXBwZW5kQ2hpbGQocGluc1twaW5dLnBpbkNvbnRhaW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBQT1NJVElPTi5SSUdIVDoge1xuICAgICAgICAgIHRoaXMucmlnaHRQaW5zLmFwcGVuZENoaWxkKHBpbnNbcGluXS5waW5Db250YWluZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgUE9TSVRJT04uVE9QOiB7XG4gICAgICAgICAgdGhpcy50b3BQaW5zLmFwcGVuZENoaWxkKHBpbnNbcGluXS5waW5Db250YWluZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgUE9TSVRJT04uQk9UVE9NOiB7XG4gICAgICAgICAgdGhpcy5ib3R0b21QaW5zLmFwcGVuZENoaWxkKHBpbnNbcGluXS5waW5Db250YWluZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRTaXplKHNpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIHRoaXMucGFyZW50LnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcbiAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArIFwicHhcIjtcbiAgfVxuICBlbHQobmFtZTogc3RyaW5nLCBuczogYm9vbGVhbiA9IGZhbHNlKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIG5zXG4gICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG5hbWUpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gIH1cblxuICByZW5kZXIoKSB7fVxuICBGaXJlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRmlyZSBvbiBrb21wb25lbnQgYmlsYW4gZmlyZXNcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtvbXBvbmVudCB9IGZyb20gXCIuL0tvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgUElOVFlQRSxcbiAgUVVUQixcbiAgS1VDSExBTklTSCxcbiAgV0lSRVNUQVRFLFxuICBUT09MVFlQRSxcbiAgUE9TSVRJT04sXG59IGZyb20gXCIuL0VudW1zXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IFdpcmUgfSBmcm9tIFwiLi9XaXJlXCI7XG5pbXBvcnQgeyBYT1IgfSBmcm9tIFwiLi4vVG9vbHMvWG9yXCI7XG5pbXBvcnQgeyBBTkQgfSBmcm9tIFwiLi4vVG9vbHMvQW5kXCI7XG5pbXBvcnQgeyBPUiB9IGZyb20gXCIuLi9Ub29scy9PclwiO1xuaW1wb3J0IHsgU0VHTUVOVDcgfSBmcm9tIFwiLi4vVG9vbHMvU2VnbWVudDdcIjtcblxuaW50ZXJmYWNlIENISUxEIHtcbiAga29tcG9uZW50OiBLb21wb25lbnQ7XG4gIHBpbnM6IEFycmF5PFBpbj47XG59XG5pbnRlcmZhY2UgQ0hJTERTIHtcbiAgW25hbWU6IHN0cmluZ106IENISUxEO1xufVxuXG5leHBvcnQgY2xhc3MgUGluIHtcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIGFjdGl2ZVBpbjogc3RyaW5nID0gbnVsbDtcbiAgcHVibGljIFBpbnM6IENISUxEUyA9IHt9OyAvLyBTaHUgcGluZ2EgdWxhbmdhbiBrb21wb25lbnRhXG4gIHB1YmxpYyBQaW5UeXBlOiBQSU5UWVBFID0gUElOVFlQRS5ORVlUUkFMO1xuICBwdWJsaWMgV2lyZXM6IEFycmF5PFdpcmU+ID0gW107XG4gIHB1YmxpYyBzdGF0ZTogS1VDSExBTklTSCA9IEtVQ0hMQU5JU0guUEFTVDtcbiAgcHVibGljIFF1dGI6IFFVVEIgPSBRVVRCLk1BTkZJWTsgLy9Ib3ppcmNoYSB6YXJ1ciBlbWFzXG4gIHB1YmxpYyBwb3NpdGlvbjogUE9TSVRJT047XG4gIHB1YmxpYyBwaW5Db250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgcGFyZW50RWxlbWVudDogS29tcG9uZW50O1xuICBwaW5JZDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGluVHlwZTogUElOVFlQRSxcbiAgICBwb3NpdGlvbjogUE9TSVRJT04gPSBQT1NJVElPTi5MRUZUXG4gICkge1xuICAgIHRoaXMucGluSWQgPSB1dWlkKCk7XG4gICAgdGhpcy5QaW5UeXBlID0gcGluVHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5waW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucGluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbHBpblwiKTtcbiAgICB0aGlzLnBpbkNvbnRhaW5lci5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbGV0IGVsID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICBsZXQgcmVmID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgIGxldCByZWZVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lICE9PSBcImVscGluXCIpIHtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlZik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHJlZlVwKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHJlZik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCByZWZVcCk7XG4gICAgfTtcbiAgICB0aGlzLnBpbkNvbnRhaW5lci5vbm1vdXNldXAgPSAoKSA9PiB7fTtcbiAgfVxuXG4gIGdldFBvcygpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5waW5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMixcbiAgICAgIHk6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMixcbiAgICB9O1xuICB9XG4gIG1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7fVxuICBzZXRQYXJlbnQocGFyZW50OiBLb21wb25lbnQpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnQ7XG4gIH1cbiAgV3JpdGUoa3VjaGxhbmlzaDogS1VDSExBTklTSCkge1xuICAgIGlmIChrdWNobGFuaXNoKSB7XG4gICAgICB0aGlzLldpcmVzLmZvckVhY2goKHdpcmUpID0+IHtcbiAgICAgICAgd2lyZS5zZXRTdGF0ZShXSVJFU1RBVEUuT04pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuV2lyZXMuZm9yRWFjaCgod2lyZSkgPT4ge1xuICAgICAgICB3aXJlLnNldFN0YXRlKFdJUkVTVEFURS5PRkYpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBrdWNobGFuaXNoO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuUGlucykge1xuICAgICAgdGhpcy5QaW5zW2tleV0ucGlucy5mb3JFYWNoKChlOiBQaW4pID0+IHtcbiAgICAgICAgZS5Xcml0ZShrdWNobGFuaXNoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5QaW5zW2tleV0ua29tcG9uZW50LkZpcmUoKTtcbiAgICB9XG4gIH1cbiAgYWRkUGluKGtvbXBvbmVudDogS29tcG9uZW50ID0gbnVsbCwgcGluTmFtZTogUGluID0gbnVsbCkge1xuICAgIGxldCBhID0ga29tcG9uZW50LmVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuUGluc1thXSkge1xuICAgICAgdGhpcy5QaW5zW2FdLnBpbnMucHVzaChwaW5OYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5QaW5zW2FdID0ge1xuICAgICAgICBrb21wb25lbnQ6IGtvbXBvbmVudCxcbiAgICAgICAgcGluczogW3Bpbk5hbWVdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgYWRkV2lyZSh3aXJlOiBXaXJlID0gbnVsbCkge1xuICAgIHRoaXMuV2lyZXMucHVzaCh3aXJlKTtcbiAgfVxuICByZW1vdmVXaXJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuV2lyZXMgPSB0aGlzLldpcmVzLmZpbHRlcigod2lyZSkgPT4gd2lyZS5uYW1lICE9PSBuYW1lKTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgZ2V0Q29tcG9uZW50cygpIHtcbiAgICBsZXQgYnVmID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5QaW5zKSB7XG4gICAgICBidWYucHVzaCh0aGlzLlBpbnNba2V5XS5rb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUT09MVFlQRSwgUElOVFlQRSwgS1VDSExBTklTSCB9IGZyb20gXCIuL2NvbXBvbmVudHMvRW51bXNcIjtcbmltcG9ydCB7XG4gIE9SLFxuICBBTkQsXG4gIE5PVCxcbiAgQmF0dGVyeSxcbiAgU0VHTUVOVDcsXG4gIEJ1ZmZlcixcbiAgVHJpU3RhdGUsXG4gIEJ1dHRvbixcbiAgU3dpdGNoLFxufSBmcm9tIFwiLi9Ub29scy9pbmRleFwiO1xubGV0IGJ0biA9IG5ldyBCdXR0b24oKTtcbmxldCBzZWcgPSBuZXcgU0VHTUVOVDcoKTtcbmxldCBzdyA9IG5ldyBTd2l0Y2goKTtcbmJ0bi5QaW5zW1wiQVwiXS5hZGRQaW4oc2VnLCBzZWcuUGlucy5BKTtcbnN3LlBpbnNbXCJBXCJdLmFkZFBpbihzZWcsIHNlZy5QaW5zLkIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
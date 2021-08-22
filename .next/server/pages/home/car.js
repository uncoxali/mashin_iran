module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0qLB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cars = [{
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19021/mclaren-765lt-spider-2022-thumb.jpg',
  model: 2021,
  km: 53,
  city: 'زنجان',
  price: '45,000,000',
  names: 'عبدی',
  car: ' McLaren 765LT spider',
  special: true,
  key: false,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/bmw.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19017/ferrari-sf90-stradale-by-novitec-2021-thumb.jpg',
  model: 2010,
  km: 100,
  city: 'بابل',
  price: '5,000,000',
  names: 'احمدی',
  car: ' Ferrari SF90 ',
  special: false,
  key: true,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/bentley.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18999/ferrari-f8-tributo-by-novitec-n-largo-2021-thumb.jpg',
  model: 2015,
  km: 5000,
  city: 'سهرورد',
  price: '85,000,000',
  names: 'محمدی',
  car: ' Ferrari F8',
  special: true,
  key: false,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/alfa-romeo.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19011/aston-martin-valhalla-2022-thumb.jpg',
  model: 2000,
  km: 300,
  city: 'تهران',
  price: '555,000,000',
  names: 'سید',
  car: 'Porsche',
  special: false,
  key: true,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/abarth.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18962/rml-short-wheelbase-2022-thumb.jpg',
  model: 2020,
  km: 565,
  city: 'مازندران',
  price: '412,000,000',
  names: 'رضای',
  car: 'RML Short Wheelbase',
  special: true,
  key: false,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/ferrari.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18961/porsche-911-992-gt3-with-touring-package-2021-thumb.jpg',
  model: 2022,
  km: 64185,
  city: 'رشت',
  price: '445,000,000',
  names: 'خلجی',
  car: 'Aston Martin Valhalla',
  special: true,
  key: true,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/volkswagen.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19043/hyundai-kona-n-usa-version-2022-thumb.jpg',
  model: 2018,
  km: 64185,
  city: 'تبریز',
  price: '445,000,885',
  names: 'رستمی',
  car: 'Aston Martin Valhalla',
  special: true,
  key: true,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/koenigsegg.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19046/ford-bronco-riptide-concept-2021-thumb.jpg',
  model: 2019,
  km: 64185,
  city: 'اصفحان',
  price: '445,475,000',
  names: 'آقای',
  car: 'Aston Martin Valhalla',
  special: false,
  key: false,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/mercedes-benz.jpg'
}, {
  img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19044/hyundai-santa-fe-xrt-usa-version-2022-thumb.jpg',
  model: 2014,
  km: 64185,
  city: 'تهران',
  price: '445,120,000',
  names: 'فاطمی',
  car: 'Aston Martin Valhalla',
  special: false,
  key: false,
  avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (cars);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0qLB");


/***/ })

/******/ });
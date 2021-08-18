module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/svg/close.svg":
/*!******************************!*\
  !*** ./assets/svg/close.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Close (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M12.3819 1.88626L7.02808 7.27442M1.67432 12.6626L7.02808 7.27442M7.02808 7.27442L1.67432 1.88626L12.3819 12.6626","stroke":"#FF5800","strokeWidth":"2.47514","strokeLinecap":"round"}));
}

Close.defaultProps = {"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none"};

module.exports = Close;

Close.default = Close;


/***/ }),

/***/ "./assets/svg/user-icon.svg":
/*!**********************************!*\
  !*** ./assets/svg/user-icon.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function UserIcon (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0)","key":0},React.createElement("path",{"d":"M14.4539 14.4147C13.1855 14.4147 12.5756 15.1282 10.494 15.1282C8.41238 15.1282 7.80691 14.4147 6.53408 14.4147C3.25479 14.4147 0.594238 17.0991 0.594238 20.4079V21.5494C0.594238 22.7311 1.54444 23.6898 2.71561 23.6898H18.2724C19.4435 23.6898 20.3937 22.7311 20.3937 21.5494V20.4079C20.3937 17.0991 17.7332 14.4147 14.4539 14.4147ZM18.2724 21.5494H2.71561V20.4079C2.71561 18.2853 4.43039 16.5551 6.53408 16.5551C7.17934 16.5551 8.22676 17.2686 10.494 17.2686C12.7789 17.2686 13.8042 16.5551 14.4539 16.5551C16.5576 16.5551 18.2724 18.2853 18.2724 20.4079V21.5494ZM10.494 13.7012C14.0075 13.7012 16.8581 10.825 16.8581 7.27996C16.8581 3.73489 14.0075 0.858704 10.494 0.858704C6.98046 0.858704 4.12986 3.73489 4.12986 7.27996C4.12986 10.825 6.98046 13.7012 10.494 13.7012ZM10.494 2.99912C12.8319 2.99912 14.7367 4.92104 14.7367 7.27996C14.7367 9.63888 12.8319 11.5608 10.494 11.5608C8.15605 11.5608 6.25124 9.63888 6.25124 7.27996C6.25124 4.92104 8.15605 2.99912 10.494 2.99912Z","fill":"white"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0"},React.createElement("rect",{"width":"19.7995","height":"22.8311","fill":"white","transform":"translate(0.594238 0.858704)"})))]);
}

UserIcon.defaultProps = {"width":"21","height":"24","viewBox":"0 0 21 24","fill":"none"};

module.exports = UserIcon;

UserIcon.default = UserIcon;


/***/ }),

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svg/user-icon.svg */ "./assets/svg/user-icon.svg");
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/svg/close.svg */ "./assets/svg/close.svg");
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_code_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-code-input */ "react-code-input");
/* harmony import */ var react_code_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_code_input__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\pages\\login\\index.tsx";






const Auth = () => {
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('l1');
  const {
    0: times,
    1: setTimer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // const time = new Date();
  // time.setSeconds(time.getSeconds() + 60);
  // const { seconds, minutes } = useTimer({
  //     expiryTimestamp: time,
  //     onExpire: () => console.warn('onExpire called'),
  // });

  const handleClick = () => {
    if (login == 'l1') {
      setLogin('l2');
    } else if (login == 'l2') {
      setLogin('l3');
    } else if (login == 'l3') {
      sessionStorage.setItem('name', 'login');
      router.push('/');
    } else {}
  };

  const handleBack = () => {
    if (login == 'l3') {
      setLogin('l2');
    } else if (login == 'l2') {
      setLogin('l1');
    } else {}
  };

  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleChange = e => {
    setColor(e);
  };

  console.log(color);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-screen bg-red-100 flex justify-center items-center outline-none",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "b flex justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "w-20 h-20 flex justify-center",
          src: "/images/logo.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mt-2 text-sm font-bold",
          children: "\u0645\u0627\u0634\u06CC\u0646 \u0627\u06CC\u0631\u0627\u0646"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white w-80 h-auto mt-2 rounded-xl shadow-2xl p-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-red-50 h-12 w-auto rounded-full ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-between px-3 ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-white text-xs mt-1 mr-2",
                children: "\u0648\u0631\u0648\u062F / \u0639\u0636\u0648\u06CC\u062A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white mt-3 rounded-full w-6 flex justify-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
                className: "mt-1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: ` ${login == 'l1' ? 'block' : 'hidden'} text-right mt-8 text-xs`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            dir: "ltr",
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-70  mt-5 text-brown-50 text-lg outline-none p-3",
            defaultValue: "09"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: ` ${login == 'l2' ? 'block' : 'hidden'} text-right mt-12 text-xs `,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center ml-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "",
              children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u06A9\u062F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mr-3 text-gren-50",
              children: "09104866595"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-5 flex justify-center",
            dir: "ltr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_code_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
              fields: 4,
              type: "tel",
              inputStyle: {
                textAlign: 'center',
                outline: 'none',
                margin: '4px',
                MozAppearance: 'textfield',
                width: '40px',
                borderRadius: '50%',
                font: 'bold',
                fontSize: '20px',
                height: '40px',
                backgroundColor: `${color}`,
                color: 'white',
                border: '2px solid #FF5800',
                fontWeight: 'bold'
              },
              pattern: "/^\\d+$/",
              name: 'code',
              inputMode: "numeric",
              onChange: e => handleChange(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center mt-3",
            children: ["\u0627\u0631\u0633\u0627\u0644 \u062F\u0648\u0628\u0627\u0631\u0647 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-gren-50 mr-5",
              children: "01:00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 42
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: ` ${login == 'l3' ? 'block' : 'hidden'} text-right mt-12 text-xs`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-70 mt-5 placeholder-brown-50 text-right text-xs outline-none p-3",
            placeholder: "\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between mt-6 text-xs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: handleClick,
            className: "bg-red-50 p-3 rounded-full text-white w-32 outline-none",
            style: {
              outline: 'none'
            },
            children: ["\u062A\u0627\u06CC\u06CC\u062F \u0648 \u0627\u062F\u0627\u0645\u0647", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: handleBack,
            className: "bg-white text-red-50 border border-red-50 p-3 rounded-full w-32 outline-none",
            style: {
              outline: 'none'
            },
            children: "\u0628\u0627\u0632\u06AF\u0634\u062A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-code-input":
/*!***********************************!*\
  !*** external "react-code-input" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-code-input");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy91c2VyLWljb24uc3ZnIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29kZS1pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkF1dGgiLCJsb2dpbiIsInNldExvZ2luIiwidXNlU3RhdGUiLCJ0aW1lcyIsInNldFRpbWVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiaGFuZGxlQmFjayIsImNvbG9yIiwic2V0Q29sb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsIm91dGxpbmUiLCJtYXJnaW4iLCJNb3pBcHBlYXJhbmNlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250IiwiZm9udFNpemUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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LEtBQUssSUFBSSxJQUFULEdBQWdCLE9BQWhCLEdBQTBCLFFBQzdCLDJCQUhMO0FBQUEsa0NBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosZUFNSTtBQUNJLGdCQUFJLEVBQUMsTUFEVDtBQUVJLHFCQUFTLEVBQUMsMkdBRmQ7QUFHSSx1QkFBVyxFQUFDO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpGSixlQThGSTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxrQ0FDSTtBQUNJLG1CQUFPLEVBQUVPLFdBRGI7QUFFSSxxQkFBUyxFQUFDLHlEQUZkO0FBR0ksaUJBQUssRUFBRTtBQUFFWSxxQkFBTyxFQUFFO0FBQVgsYUFIWDtBQUFBLCtGQUtrQixHQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFRSTtBQUNJLG1CQUFPLEVBQUVSLFVBRGI7QUFFSSxxQkFBUyxFQUFDLDhFQUZkO0FBR0ksaUJBQUssRUFBRTtBQUFFUSxxQkFBTyxFQUFFO0FBQVgsYUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEySEgsQ0FwS0Q7O0FBc0tlcEIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvS0Esd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luL2luZGV4LnRzeFwiKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIENsb3NlIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMTIuMzgxOSAxLjg4NjI2TDcuMDI4MDggNy4yNzQ0Mk0xLjY3NDMyIDEyLjY2MjZMNy4wMjgwOCA3LjI3NDQyTTcuMDI4MDggNy4yNzQ0MkwxLjY3NDMyIDEuODg2MjZMMTIuMzgxOSAxMi42NjI2XCIsXCJzdHJva2VcIjpcIiNGRjU4MDBcIixcInN0cm9rZVdpZHRoXCI6XCIyLjQ3NTE0XCIsXCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwifSkpO1xufVxuXG5DbG9zZS5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMTRcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAxNFwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9zZTtcblxuQ2xvc2UuZGVmYXVsdCA9IENsb3NlO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gVXNlckljb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJjbGlwUGF0aFwiOlwidXJsKCNjbGlwMClcIixcImtleVwiOjB9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTE0LjQ1MzkgMTQuNDE0N0MxMy4xODU1IDE0LjQxNDcgMTIuNTc1NiAxNS4xMjgyIDEwLjQ5NCAxNS4xMjgyQzguNDEyMzggMTUuMTI4MiA3LjgwNjkxIDE0LjQxNDcgNi41MzQwOCAxNC40MTQ3QzMuMjU0NzkgMTQuNDE0NyAwLjU5NDIzOCAxNy4wOTkxIDAuNTk0MjM4IDIwLjQwNzlWMjEuNTQ5NEMwLjU5NDIzOCAyMi43MzExIDEuNTQ0NDQgMjMuNjg5OCAyLjcxNTYxIDIzLjY4OThIMTguMjcyNEMxOS40NDM1IDIzLjY4OTggMjAuMzkzNyAyMi43MzExIDIwLjM5MzcgMjEuNTQ5NFYyMC40MDc5QzIwLjM5MzcgMTcuMDk5MSAxNy43MzMyIDE0LjQxNDcgMTQuNDUzOSAxNC40MTQ3Wk0xOC4yNzI0IDIxLjU0OTRIMi43MTU2MVYyMC40MDc5QzIuNzE1NjEgMTguMjg1MyA0LjQzMDM5IDE2LjU1NTEgNi41MzQwOCAxNi41NTUxQzcuMTc5MzQgMTYuNTU1MSA4LjIyNjc2IDE3LjI2ODYgMTAuNDk0IDE3LjI2ODZDMTIuNzc4OSAxNy4yNjg2IDEzLjgwNDIgMTYuNTU1MSAxNC40NTM5IDE2LjU1NTFDMTYuNTU3NiAxNi41NTUxIDE4LjI3MjQgMTguMjg1MyAxOC4yNzI0IDIwLjQwNzlWMjEuNTQ5NFpNMTAuNDk0IDEzLjcwMTJDMTQuMDA3NSAxMy43MDEyIDE2Ljg1ODEgMTAuODI1IDE2Ljg1ODEgNy4yNzk5NkMxNi44NTgxIDMuNzM0ODkgMTQuMDA3NSAwLjg1ODcwNCAxMC40OTQgMC44NTg3MDRDNi45ODA0NiAwLjg1ODcwNCA0LjEyOTg2IDMuNzM0ODkgNC4xMjk4NiA3LjI3OTk2QzQuMTI5ODYgMTAuODI1IDYuOTgwNDYgMTMuNzAxMiAxMC40OTQgMTMuNzAxMlpNMTAuNDk0IDIuOTk5MTJDMTIuODMxOSAyLjk5OTEyIDE0LjczNjcgNC45MjEwNCAxNC43MzY3IDcuMjc5OTZDMTQuNzM2NyA5LjYzODg4IDEyLjgzMTkgMTEuNTYwOCAxMC40OTQgMTEuNTYwOEM4LjE1NjA1IDExLjU2MDggNi4yNTEyNCA5LjYzODg4IDYuMjUxMjQgNy4yNzk5NkM2LjI1MTI0IDQuOTIxMDQgOC4xNTYwNSAyLjk5OTEyIDEwLjQ5NCAyLjk5OTEyWlwiLFwiZmlsbFwiOlwid2hpdGVcIn0pKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLHtcImtleVwiOjF9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjbGlwUGF0aFwiLHtcImlkXCI6XCJjbGlwMFwifSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLHtcIndpZHRoXCI6XCIxOS43OTk1XCIsXCJoZWlnaHRcIjpcIjIyLjgzMTFcIixcImZpbGxcIjpcIndoaXRlXCIsXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZSgwLjU5NDIzOCAwLjg1ODcwNClcIn0pKSldKTtcbn1cblxuVXNlckljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjIxXCIsXCJoZWlnaHRcIjpcIjI0XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjEgMjRcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckljb247XG5cblVzZXJJY29uLmRlZmF1bHQgPSBVc2VySWNvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gJ3JlYWN0LXRpbWVyLWhvb2snO1xyXG5cclxuaW1wb3J0IFVzZXJJY29uIGZyb20gJ0Bhc3NldHMvc3ZnL3VzZXItaWNvbi5zdmcnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQGFzc2V0cy9zdmcvY2xvc2Uuc3ZnJztcclxuXHJcbmltcG9ydCBSZWFjdENvZGVJbnB1dCBmcm9tICdyZWFjdC1jb2RlLWlucHV0JztcclxuXHJcbmNvbnN0IEF1dGg6IEZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdsMScpO1xyXG4gICAgY29uc3QgW3RpbWVzLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIC8vIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDYwKTtcclxuICAgIC8vIGNvbnN0IHsgc2Vjb25kcywgbWludXRlcyB9ID0gdXNlVGltZXIoe1xyXG4gICAgLy8gICAgIGV4cGlyeVRpbWVzdGFtcDogdGltZSxcclxuICAgIC8vICAgICBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dpbiA9PSAnbDEnKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9naW4gPT0gJ2wyJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDMnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvZ2luID09ICdsMycpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsICdsb2dpbicpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dpbiA9PSAnbDMnKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9naW4gPT0gJ2wyJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0Q29sb3IoZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLXJlZC0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgb3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgZmxleCBqdXN0aWZ5LWNlbnRlclwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSBmb250LWJvbGRcIj7Zhdin2LTbjNmGINin24zYsdin2YY8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy04MCBoLWF1dG8gbXQtMiByb3VuZGVkLXhsIHNoYWRvdy0yeGwgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgaC0xMiB3LWF1dG8gcm91bmRlZC1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTMgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhzIG10LTEgbXItMlwiPtmI2LHZiNivIC8g2LnYttmI24zYqjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG10LTMgcm91bmRlZC1mdWxsIHctNiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIGNsYXNzTmFtZT1cIm10LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke2xvZ2luID09ICdsMScgPyAnYmxvY2snIDogJ2hpZGRlbid9IHRleHQtcmlnaHQgbXQtOCB0ZXh0LXhzYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmI2KfYsdivINqp2LHYr9mGINi02YXYp9ix2Ycg2YfZhdix2KfZhzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI9XCJsdHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy03MCAgbXQtNSB0ZXh0LWJyb3duLTUwIHRleHQtbGcgb3V0bGluZS1ub25lIHAtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luID09ICdsMicgPyAnYmxvY2snIDogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB0ZXh0LXJpZ2h0IG10LTEyIHRleHQteHMgYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtbC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj7ZiNin2LHYryDaqdix2K/ZhiDaqdivPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMyB0ZXh0LWdyZW4tNTBcIj4wOTEwNDg2NjU5NTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBqdXN0aWZ5LWNlbnRlclwiIGRpcj1cImx0clwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q29kZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3pBcHBlYXJhbmNlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNGRjU4MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiL15cXGQrJC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eydjb2RlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTIgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC1yZWQtNTAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtcmVkLTUwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTIgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC1yZWQtNTAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2LHYs9in2YQg2K/ZiNio2KfYsdmHIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3Jlbi01MCBtci01XCI+MDE6MDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW4gPT0gJ2wzJyA/ICdibG9jaycgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHRleHQtcmlnaHQgbXQtMTIgdGV4dC14c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ZiNin2LHYryDaqdix2K/ZhiDZhtin2YUg2Ygg2YbYp9mFINiu2KfZhtmI2KfYr9qv24w8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy03MCBtdC01IHBsYWNlaG9sZGVyLWJyb3duLTUwIHRleHQtcmlnaHQgdGV4dC14cyBvdXRsaW5lLW5vbmUgcC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2YTYt9mB2Kcg2YbYp9mFINmIINmG2KfZhSDYrtin2YbZiNin2K/ar9uMINiu2YjYryDYsdinINmI2KfYsdivINqp2YbbjNivXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC02IHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAgcC0zIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHctMzIgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYqtin24zbjNivINmIINin2K/Yp9mF2Yd7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTUwIHAtMyByb3VuZGVkLWZ1bGwgdy0zMiBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINio2KfYstqv2LTYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb2RlLWlucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
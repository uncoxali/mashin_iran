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
                backgroundColor: `${color.length > 0 ? '#FF5800' : 'white'}`,
                color: '#blue',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy91c2VyLWljb24uc3ZnIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29kZS1pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkF1dGgiLCJsb2dpbiIsInNldExvZ2luIiwidXNlU3RhdGUiLCJ0aW1lcyIsInNldFRpbWVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiaGFuZGxlQmFjayIsImNvbG9yIiwic2V0Q29sb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsIm91dGxpbmUiLCJtYXJnaW4iLCJNb3pBcHBlYXJhbmNlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250IiwiZm9udFNpemUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJib3JkZXIiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJKLGVBaUZJO0FBQ0ksbUJBQVMsRUFBRyxJQUNSZixLQUFLLElBQUksSUFBVCxHQUFnQixPQUFoQixHQUEwQixRQUM3QiwyQkFITDtBQUFBLGtDQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBTUk7QUFDSSxnQkFBSSxFQUFDLE1BRFQ7QUFFSSxxQkFBUyxFQUFDLDJHQUZkO0FBR0ksdUJBQVcsRUFBQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqRkosZUE4Rkk7QUFBSyxtQkFBUyxFQUFDLG1DQUFmO0FBQUEsa0NBQ0k7QUFDSSxtQkFBTyxFQUFFTyxXQURiO0FBRUkscUJBQVMsRUFBQyx5REFGZDtBQUdJLGlCQUFLLEVBQUU7QUFBRVkscUJBQU8sRUFBRTtBQUFYLGFBSFg7QUFBQSwrRkFLa0IsR0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBUUk7QUFDSSxtQkFBTyxFQUFFUixVQURiO0FBRUkscUJBQVMsRUFBQyw4RUFGZDtBQUdJLGlCQUFLLEVBQUU7QUFBRVEscUJBQU8sRUFBRTtBQUFYLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkhILENBcEtEOztBQXNLZXBCLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDL0tBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi9pbmRleC50c3hcIik7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBDbG9zZSAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTEyLjM4MTkgMS44ODYyNkw3LjAyODA4IDcuMjc0NDJNMS42NzQzMiAxMi42NjI2TDcuMDI4MDggNy4yNzQ0Mk03LjAyODA4IDcuMjc0NDJMMS42NzQzMiAxLjg4NjI2TDEyLjM4MTkgMTIuNjYyNlwiLFwic3Ryb2tlXCI6XCIjRkY1ODAwXCIsXCJzdHJva2VXaWR0aFwiOlwiMi40NzUxNFwiLFwic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIn0pKTtcbn1cblxuQ2xvc2UuZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjE0XCIsXCJoZWlnaHRcIjpcIjE0XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTRcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvc2U7XG5cbkNsb3NlLmRlZmF1bHQgPSBDbG9zZTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIFVzZXJJY29uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wiY2xpcFBhdGhcIjpcInVybCgjY2xpcDApXCIsXCJrZXlcIjowfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk0xNC40NTM5IDE0LjQxNDdDMTMuMTg1NSAxNC40MTQ3IDEyLjU3NTYgMTUuMTI4MiAxMC40OTQgMTUuMTI4MkM4LjQxMjM4IDE1LjEyODIgNy44MDY5MSAxNC40MTQ3IDYuNTM0MDggMTQuNDE0N0MzLjI1NDc5IDE0LjQxNDcgMC41OTQyMzggMTcuMDk5MSAwLjU5NDIzOCAyMC40MDc5VjIxLjU0OTRDMC41OTQyMzggMjIuNzMxMSAxLjU0NDQ0IDIzLjY4OTggMi43MTU2MSAyMy42ODk4SDE4LjI3MjRDMTkuNDQzNSAyMy42ODk4IDIwLjM5MzcgMjIuNzMxMSAyMC4zOTM3IDIxLjU0OTRWMjAuNDA3OUMyMC4zOTM3IDE3LjA5OTEgMTcuNzMzMiAxNC40MTQ3IDE0LjQ1MzkgMTQuNDE0N1pNMTguMjcyNCAyMS41NDk0SDIuNzE1NjFWMjAuNDA3OUMyLjcxNTYxIDE4LjI4NTMgNC40MzAzOSAxNi41NTUxIDYuNTM0MDggMTYuNTU1MUM3LjE3OTM0IDE2LjU1NTEgOC4yMjY3NiAxNy4yNjg2IDEwLjQ5NCAxNy4yNjg2QzEyLjc3ODkgMTcuMjY4NiAxMy44MDQyIDE2LjU1NTEgMTQuNDUzOSAxNi41NTUxQzE2LjU1NzYgMTYuNTU1MSAxOC4yNzI0IDE4LjI4NTMgMTguMjcyNCAyMC40MDc5VjIxLjU0OTRaTTEwLjQ5NCAxMy43MDEyQzE0LjAwNzUgMTMuNzAxMiAxNi44NTgxIDEwLjgyNSAxNi44NTgxIDcuMjc5OTZDMTYuODU4MSAzLjczNDg5IDE0LjAwNzUgMC44NTg3MDQgMTAuNDk0IDAuODU4NzA0QzYuOTgwNDYgMC44NTg3MDQgNC4xMjk4NiAzLjczNDg5IDQuMTI5ODYgNy4yNzk5NkM0LjEyOTg2IDEwLjgyNSA2Ljk4MDQ2IDEzLjcwMTIgMTAuNDk0IDEzLjcwMTJaTTEwLjQ5NCAyLjk5OTEyQzEyLjgzMTkgMi45OTkxMiAxNC43MzY3IDQuOTIxMDQgMTQuNzM2NyA3LjI3OTk2QzE0LjczNjcgOS42Mzg4OCAxMi44MzE5IDExLjU2MDggMTAuNDk0IDExLjU2MDhDOC4xNTYwNSAxMS41NjA4IDYuMjUxMjQgOS42Mzg4OCA2LjI1MTI0IDcuMjc5OTZDNi4yNTEyNCA0LjkyMTA0IDguMTU2MDUgMi45OTkxMiAxMC40OTQgMi45OTkxMlpcIixcImZpbGxcIjpcIndoaXRlXCJ9KSksUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIix7XCJrZXlcIjoxfSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2xpcFBhdGhcIix7XCJpZFwiOlwiY2xpcDBcIn0sUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIix7XCJ3aWR0aFwiOlwiMTkuNzk5NVwiLFwiaGVpZ2h0XCI6XCIyMi44MzExXCIsXCJmaWxsXCI6XCJ3aGl0ZVwiLFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUoMC41OTQyMzggMC44NTg3MDQpXCJ9KSkpXSk7XG59XG5cblVzZXJJY29uLmRlZmF1bHRQcm9wcyA9IHtcIndpZHRoXCI6XCIyMVwiLFwiaGVpZ2h0XCI6XCIyNFwiLFwidmlld0JveFwiOlwiMCAwIDIxIDI0XCIsXCJmaWxsXCI6XCJub25lXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJY29uO1xuXG5Vc2VySWNvbi5kZWZhdWx0ID0gVXNlckljb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVGltZXIgfSBmcm9tICdyZWFjdC10aW1lci1ob29rJztcclxuXHJcbmltcG9ydCBVc2VySWNvbiBmcm9tICdAYXNzZXRzL3N2Zy91c2VyLWljb24uc3ZnJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0Bhc3NldHMvc3ZnL2Nsb3NlLnN2Zyc7XHJcblxyXG5pbXBvcnQgUmVhY3RDb2RlSW5wdXQgZnJvbSAncmVhY3QtY29kZS1pbnB1dCc7XHJcblxyXG5jb25zdCBBdXRoOiBGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGU8c3RyaW5nPignbDEnKTtcclxuICAgIGNvbnN0IFt0aW1lcywgc2V0VGltZXJdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyB0aW1lLnNldFNlY29uZHModGltZS5nZXRTZWNvbmRzKCkgKyA2MCk7XHJcbiAgICAvLyBjb25zdCB7IHNlY29uZHMsIG1pbnV0ZXMgfSA9IHVzZVRpbWVyKHtcclxuICAgIC8vICAgICBleHBpcnlUaW1lc3RhbXA6IHRpbWUsXHJcbiAgICAvLyAgICAgb25FeHBpcmU6ICgpID0+IGNvbnNvbGUud2Fybignb25FeHBpcmUgY2FsbGVkJyksXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAobG9naW4gPT0gJ2wxJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDInKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvZ2luID09ICdsMicpIHtcclxuICAgICAgICAgICAgc2V0TG9naW4oJ2wzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpbiA9PSAnbDMnKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCAnbG9naW4nKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgICBpZiAobG9naW4gPT0gJ2wzJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDInKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvZ2luID09ICdsMicpIHtcclxuICAgICAgICAgICAgc2V0TG9naW4oJ2wxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldENvbG9yKGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy1yZWQtMTAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGZsZXgganVzdGlmeS1jZW50ZXJcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gZm9udC1ib2xkXCI+2YXYp9i024zZhiDYp9uM2LHYp9mGPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctODAgaC1hdXRvIG10LTIgcm91bmRlZC14bCBzaGFkb3ctMnhsIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIGgtMTIgdy1hdXRvIHJvdW5kZWQtZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14cyBtdC0xIG1yLTJcIj7ZiNix2YjYryAvINi52LbZiNuM2Ko8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtdC0zIHJvdW5kZWQtZnVsbCB3LTYgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBjbGFzc05hbWU9XCJtdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtsb2dpbiA9PSAnbDEnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfSB0ZXh0LXJpZ2h0IG10LTggdGV4dC14c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ZiNin2LHYryDaqdix2K/ZhiDYtNmF2KfYsdmHINmH2YXYsdin2Yc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPVwibHRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctNzAgIG10LTUgdGV4dC1icm93bi01MCB0ZXh0LWxnIG91dGxpbmUtbm9uZSBwLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbiA9PSAnbDInID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGV4dC1yaWdodCBtdC0xMiB0ZXh0LXhzIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWwtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+2YjYp9ix2K8g2qnYsdiv2YYg2qnYrzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1ncmVuLTUwXCI+MDkxMDQ4NjY1OTU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXgganVzdGlmeS1jZW50ZXJcIiBkaXI9XCJsdHJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENvZGVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW96QXBwZWFyYW5jZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3IubGVuZ3RoID4gMCA/ICcjRkY1ODAwJyA6ICd3aGl0ZSd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjRkY1ODAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIi9eXFxkKyQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsnY29kZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtcmVkLTUwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTIgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC1yZWQtNTAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtcmVkLTUwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9ix2LPYp9mEINiv2YjYqNin2LHZhyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZW4tNTAgbXItNVwiPjAxOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luID09ICdsMycgPyAnYmxvY2snIDogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB0ZXh0LXJpZ2h0IG10LTEyIHRleHQteHNgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+2YjYp9ix2K8g2qnYsdiv2YYg2YbYp9mFINmIINmG2KfZhSDYrtin2YbZiNin2K/ar9uMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctNzAgbXQtNSBwbGFjZWhvbGRlci1icm93bi01MCB0ZXh0LXJpZ2h0IHRleHQteHMgb3V0bGluZS1ub25lIHAtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItmE2LfZgdinINmG2KfZhSDZiCDZhtin2YUg2K7Yp9mG2YjYp9iv2q/bjCDYrtmI2K8g2LHYpyDZiNin2LHYryDaqdmG24zYr1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNiB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwIHAtMyByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSB3LTMyIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYp9uM24zYryDZiCDYp9iv2KfZhdmHeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC01MCBwLTMgcm91bmRlZC1mdWxsIHctMzIgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYqNin2LLar9i02KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29kZS1pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
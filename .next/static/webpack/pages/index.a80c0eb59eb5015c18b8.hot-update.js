webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Filter/index.tsx":
/*!*************************************!*\
  !*** ./components/Filter/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./components/Filter/filter.js");
/* harmony import */ var _filterExhibition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterExhibition */ "./components/Filter/filterExhibition.js");
/* harmony import */ var _components_ui_MultiRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ui/MultiRange */ "./components/ui/MultiRange/index.tsx");




var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\components\\Filter\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var index = function index(_ref) {
  _s();

  var show = _ref.show;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      filters = _React$useState2[0],
      setFilters = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (router.pathname === '/') {
      setFilters(_filter__WEBPACK_IMPORTED_MODULE_4__["default"]);
    } else {
      setFilters(_filterExhibition__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: " ".concat(show ? 'transition-all duration-200 w-60 h-auto bg-white p-3' : 'transition-all duration-200  w-0  bg-white', " row-span-1 rounded-lg shadow-2xl"),
      children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: " row-span-1 rounded-lg ",
        children: filters === null || filters === void 0 ? void 0 : filters.map(function (filter, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "text-xs",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex mt-1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "mt-1",
                children: filter.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mr-1 mt-2",
                children: filter.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "".concat(filter.line ? "h-11 bg-red-50 w-full" : '', "   mt-3"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ui_MultiRange__WEBPACK_IMPORTED_MODULE_6__["default"], {
                min: 0,
                max: 1000,
                onChange: function onChange(_ref2) {
                  var min = _ref2.min,
                      max = _ref2.max;
                  return console.log("min = ".concat(min, ", max = ").concat(max));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mr-8 -mt-2",
                children: filter.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "-mt-1",
                children: [filter.arrow, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: " bg-watusi-250 w-full ",
              style: {
                height: '1px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "CfSFNo3ovDk+DZTpv3FHuksjA5A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ui/MultiRange/index.tsx":
/*!********************************************!*\
  !*** ./components/ui/MultiRange/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiRangeSlider.module.css */ "./components/ui/MultiRange/multiRangeSlider.module.css");
/* harmony import */ var _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\components\\ui\\MultiRange\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var MultiRangeSlider = function MultiRangeSlider(_ref) {
  _s();

  var min = _ref.min,
      max = _ref.max,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(min),
      minVal = _useState[0],
      setMinVal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(max),
      maxVal = _useState2[0],
      setMaxVal = _useState2[1];

  var minValRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(min);
  var maxValRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(max);
  var range = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null); // Convert to percentage

  var getPercent = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
    return Math.round((value - min) / (max - min) * 100);
  }, [min, max]); // Set width of the range to decrease from the left side

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var minPercent = getPercent(minVal);
    var maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = "".concat(minPercent, "%");
      range.current.style.width = "".concat(maxPercent - minPercent, "%");
    }
  }, [minVal, getPercent]); // Set width of the range to decrease from the right side

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var minPercent = getPercent(minValRef.current);
    var maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = "".concat(maxPercent - minPercent, "%");
    }
  }, [maxVal, getPercent]); // Get min and max values when their state changes

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onChange({
      min: minVal,
      max: maxVal
    });
  }, [minVal, maxVal, onChange]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    dir: "ltr",
    className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['container'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "range",
      min: min,
      max: max,
      value: minVal,
      onChange: function onChange(event) {
        var value = Math.min(Number(event.target.value), maxVal - 1);
        setMinVal(value);
        minValRef.current = value;
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.thumb, _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['thumb--left']),
      style: {
        zIndex: minVal > max - 100 ? 5 : 3
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "range",
      min: min,
      max: max,
      value: maxVal,
      onChange: function onChange(event) {
        var value = Math.max(Number(event.target.value), minVal + 1);
        setMaxVal(value);
        maxValRef.current = value;
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.thumb, _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['thumb--right'])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['slider'],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['slider__track']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: range,
        className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['slider__range']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['slider__left-value'],
        children: minVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _multiRangeSlider_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['slider__right-value'],
        children: maxVal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(MultiRangeSlider, "joEa1v1zaOhKGQUDNY+uJuhJ5cU=");

_c = MultiRangeSlider;
/* harmony default export */ __webpack_exports__["default"] = (MultiRangeSlider);

var _c;

$RefreshReg$(_c, "MultiRangeSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ui/MultiRange/multiRangeSlider.module.css":
/*!**************************************************************!*\
  !*** ./components/ui/MultiRange/multiRangeSlider.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./multiRangeSlider.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/MultiRange/multiRangeSlider.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./multiRangeSlider.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/MultiRange/multiRangeSlider.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./multiRangeSlider.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/MultiRange/multiRangeSlider.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/MultiRange/multiRangeSlider.module.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/ui/MultiRange/multiRangeSlider.module.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".multiRangeSlider_container__2gwlh {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.multiRangeSlider_slider__38kGe {\n  position: relative;\n  width: 200px;\n}\n\n.multiRangeSlider_slider__track__3lY3S,\r\n.multiRangeSlider_slider__range__wEKJv,\r\n.multiRangeSlider_slider__left-value__2xG2n,\r\n.multiRangeSlider_slider__right-value__2E0SH {\n  position: absolute;\n}\n\n.multiRangeSlider_slider__track__3lY3S,\r\n.multiRangeSlider_slider__range__wEKJv {\n  border-radius: 3px;\n  height: 5px;\n}\n\n.multiRangeSlider_slider__track__3lY3S {\n  background-color: #d8e0e7;\n  width: 100%;\n  z-index: 1;\n}\n\n.multiRangeSlider_slider__range__wEKJv {\n  background-color: #d0a951;\n  z-index: 1;\n}\n\n.multiRangeSlider_slider__left-value__2xG2n,\r\n.multiRangeSlider_slider__right-value__2E0SH {\n  color: #d0a951;\n  font-size: 12px;\n  margin-top: 20px;\n}\n\n.multiRangeSlider_slider__left-value__2xG2n {\n  left: 6px;\n}\n\n.multiRangeSlider_slider__right-value__2E0SH {\n  right: -4px;\n}\n\n/* Removing the default appearance */\n\n.multiRangeSlider_thumb__39y_S,\r\n.multiRangeSlider_thumb__39y_S::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.multiRangeSlider_thumb__39y_S {\n  pointer-events: none;\n  position: absolute;\n  height: 0;\n  width: 200px;\n  outline: none;\n}\n\n.multiRangeSlider_thumb--left__2Wcp8 {\n  z-index: 3;\n}\n\n.multiRangeSlider_thumb--right__7HQ35 {\n  z-index: 4;\n}\n\n/* For Chrome browsers */\n\n.multiRangeSlider_thumb__39y_S::-webkit-slider-thumb {\n  background-color: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 1px 1px #ced4da;\n  cursor: pointer;\n  height: 18px;\n  width: 18px;\n  margin-top: 4px;\n  pointer-events: all;\n  z-index: 100;\n  position: relative;\n}\n\n/* For Firefox browsers */\n\n.multiRangeSlider_thumb__39y_S::-moz-range-thumb {\n  background-color: #fff;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 1px 1px #ced4da;\n  cursor: pointer;\n  height: 18px;\n  width: 18px;\n  margin-top: 4px;\n  pointer-events: all;\n  position: relative;\n}\r\n", "",{"version":3,"sources":["webpack://components/ui/MultiRange/multiRangeSlider.module.css"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AAC3B;;AAEA;EACI,kBAAkB;EAClB,YAAY;AAChB;;AAEA;;;;EAII,kBAAkB;AACtB;;AAEA;;EAEI,kBAAkB;EAClB,WAAW;AACf;;AAEA;EACI,yBAAyB;EACzB,WAAW;EACX,UAAU;AACd;;AAEA;EACI,yBAAyB;EACzB,UAAU;AACd;;AAEA;;EAEI,cAAc;EACd,eAAe;EACf,gBAAgB;AACpB;;AAEA;EACI,SAAS;AACb;;AAEA;EACI,WAAW;AACf;;AAEA,oCAAoC;;AACpC;;EAEI,wBAAwB;EACxB,wCAAwC;AAC5C;;AAEA;EACI,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,aAAa;AACjB;;AAEA;EACI,UAAU;AACd;;AAEA;EACI,UAAU;AACd;;AAEA,wBAAwB;;AACxB;EACI,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACtB;;AAEA,yBAAyB;;AACzB;EACI,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;EACf,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACtB","sourcesContent":[".container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.slider {\r\n    position: relative;\r\n    width: 200px;\r\n}\r\n\r\n.slider__track,\r\n.slider__range,\r\n.slider__left-value,\r\n.slider__right-value {\r\n    position: absolute;\r\n}\r\n\r\n.slider__track,\r\n.slider__range {\r\n    border-radius: 3px;\r\n    height: 5px;\r\n}\r\n\r\n.slider__track {\r\n    background-color: #d8e0e7;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.slider__range {\r\n    background-color: #d0a951;\r\n    z-index: 1;\r\n}\r\n\r\n.slider__left-value,\r\n.slider__right-value {\r\n    color: #d0a951;\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.slider__left-value {\r\n    left: 6px;\r\n}\r\n\r\n.slider__right-value {\r\n    right: -4px;\r\n}\r\n\r\n/* Removing the default appearance */\r\n.thumb,\r\n.thumb::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.thumb {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    height: 0;\r\n    width: 200px;\r\n    outline: none;\r\n}\r\n\r\n.thumb--left {\r\n    z-index: 3;\r\n}\r\n\r\n.thumb--right {\r\n    z-index: 4;\r\n}\r\n\r\n/* For Chrome browsers */\r\n.thumb::-webkit-slider-thumb {\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 1px 1px #ced4da;\r\n    cursor: pointer;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin-top: 4px;\r\n    pointer-events: all;\r\n    z-index: 100;\r\n    position: relative;\r\n}\r\n\r\n/* For Firefox browsers */\r\n.thumb::-moz-range-thumb {\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 1px 1px #ced4da;\r\n    cursor: pointer;\r\n    height: 18px;\r\n    width: 18px;\r\n    margin-top: 4px;\r\n    pointer-events: all;\r\n    position: relative;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "multiRangeSlider_container__2gwlh",
	"slider": "multiRangeSlider_slider__38kGe",
	"slider__track": "multiRangeSlider_slider__track__3lY3S",
	"slider__range": "multiRangeSlider_slider__range__wEKJv",
	"slider__left-value": "multiRangeSlider_slider__left-value__2xG2n",
	"slider__right-value": "multiRangeSlider_slider__right-value__2E0SH",
	"thumb": "multiRangeSlider_thumb__39y_S",
	"thumb--left": "multiRangeSlider_thumb--left__2Wcp8",
	"thumb--right": "multiRangeSlider_thumb--right__7HQ35"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL011bHRpUmFuZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL011bHRpUmFuZ2UvbXVsdGlSYW5nZVNsaWRlci5tb2R1bGUuY3NzPzFkNDgiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL011bHRpUmFuZ2UvbXVsdGlSYW5nZVNsaWRlci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbImluZGV4Iiwic2hvdyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwiRmlsdGVyIiwiRmlsdGVyRXhoaWJpdGlvbiIsIm1hcCIsImZpbHRlciIsImljb24iLCJ0aXRsZSIsImxpbmUiLCJtaW4iLCJtYXgiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImFycm93IiwiaGVpZ2h0IiwiTXVsdGlSYW5nZVNsaWRlciIsIm9uQ2hhbmdlIiwibWluVmFsIiwic2V0TWluVmFsIiwibWF4VmFsIiwic2V0TWF4VmFsIiwibWluVmFsUmVmIiwidXNlUmVmIiwibWF4VmFsUmVmIiwicmFuZ2UiLCJnZXRQZXJjZW50IiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsIm1pblBlcmNlbnQiLCJtYXhQZXJjZW50IiwiY3VycmVudCIsInN0eWxlIiwibGVmdCIsIndpZHRoIiwicyIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwiY24iLCJ0aHVtYiIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1B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bmRleC5hODBjMGViNTllYjUwMTVjMThiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgRmlsdGVyRXhoaWJpdGlvbiBmcm9tICcuL2ZpbHRlckV4aGliaXRpb24nO1xyXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tICdAY29tcG9uZW50cy91aS9NdWx0aVJhbmdlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzaG93PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZDPFByb3BzPiA9ICh7IHNob3cgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8YW55PigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcnMoRmlsdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKEZpbHRlckV4aGliaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdy02MCBoLWF1dG8gYmctd2hpdGUgcC0zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgIHctMCAgYmctd2hpdGUnXHJcbiAgICAgICAgICAgICAgICB9IHJvdy1zcGFuLTEgcm91bmRlZC1sZyBzaGFkb3ctMnhsYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Agcm93LXNwYW4tMSByb3VuZGVkLWxnIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycz8ubWFwKChmaWx0ZXI6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+e2ZpbHRlci5pY29ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0xIG10LTJcIj57ZmlsdGVyLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/IGBoLTExIGJnLXJlZC01MCB3LWZ1bGxgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIG10LTNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpUmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBtaW4sIG1heCB9OiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW4gPSAke21pbn0sIG1heCA9ICR7bWF4fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci04IC1tdC0yXCI+e2ZpbHRlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLW10LTFcIj57ZmlsdGVyLmFycm93fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgYmctd2F0dXNpLTI1MCB3LWZ1bGwgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsImltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzIGZyb20gJy4vbXVsdGlSYW5nZVNsaWRlci5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBNdWx0aVJhbmdlU2xpZGVyUHJvcHMge1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxufVxyXG5cclxuY29uc3QgTXVsdGlSYW5nZVNsaWRlcjogRkM8TXVsdGlSYW5nZVNsaWRlclByb3BzPiA9ICh7IG1pbiwgbWF4LCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbbWluVmFsLCBzZXRNaW5WYWxdID0gdXNlU3RhdGUobWluKTtcclxuICAgIGNvbnN0IFttYXhWYWwsIHNldE1heFZhbF0gPSB1c2VTdGF0ZShtYXgpO1xyXG4gICAgY29uc3QgbWluVmFsUmVmID0gdXNlUmVmKG1pbik7XHJcbiAgICBjb25zdCBtYXhWYWxSZWYgPSB1c2VSZWYobWF4KTtcclxuICAgIGNvbnN0IHJhbmdlID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2VcclxuICAgIGNvbnN0IGdldFBlcmNlbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAodmFsdWU6IG51bWJlcikgPT4gTWF0aC5yb3VuZCgoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCksXHJcbiAgICAgICAgW21pbiwgbWF4XSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gU2V0IHdpZHRoIG9mIHRoZSByYW5nZSB0byBkZWNyZWFzZSBmcm9tIHRoZSBsZWZ0IHNpZGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWluUGVyY2VudCA9IGdldFBlcmNlbnQobWluVmFsKTtcclxuICAgICAgICBjb25zdCBtYXhQZXJjZW50ID0gZ2V0UGVyY2VudChtYXhWYWxSZWYuY3VycmVudCk7XHJcblxyXG4gICAgICAgIGlmIChyYW5nZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJhbmdlLmN1cnJlbnQuc3R5bGUubGVmdCA9IGAke21pblBlcmNlbnR9JWA7XHJcbiAgICAgICAgICAgIHJhbmdlLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHttYXhQZXJjZW50IC0gbWluUGVyY2VudH0lYDtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWluVmFsLCBnZXRQZXJjZW50XSk7XHJcblxyXG4gICAgLy8gU2V0IHdpZHRoIG9mIHRoZSByYW5nZSB0byBkZWNyZWFzZSBmcm9tIHRoZSByaWdodCBzaWRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1pblBlcmNlbnQgPSBnZXRQZXJjZW50KG1pblZhbFJlZi5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBtYXhQZXJjZW50ID0gZ2V0UGVyY2VudChtYXhWYWwpO1xyXG5cclxuICAgICAgICBpZiAocmFuZ2UuY3VycmVudCkge1xyXG4gICAgICAgICAgICByYW5nZS5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7bWF4UGVyY2VudCAtIG1pblBlcmNlbnR9JWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21heFZhbCwgZ2V0UGVyY2VudF0pO1xyXG5cclxuICAgIC8vIEdldCBtaW4gYW5kIG1heCB2YWx1ZXMgd2hlbiB0aGVpciBzdGF0ZSBjaGFuZ2VzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKHsgbWluOiBtaW5WYWwsIG1heDogbWF4VmFsIH0pO1xyXG4gICAgfSwgW21pblZhbCwgbWF4VmFsLCBvbkNoYW5nZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBkaXI9XCJsdHJcIiBjbGFzc05hbWU9e3NbJ2NvbnRhaW5lciddfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgICAgICBtYXg9e21heH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXttaW5WYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5taW4oTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksIG1heFZhbCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1pblZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsUmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHMudGh1bWIsIHNbJ3RodW1iLS1sZWZ0J10pfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBtaW5WYWwgPiBtYXggLSAxMDAgPyA1IDogMyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21heFZhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLm1heChOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSwgbWluVmFsICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF4VmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhWYWxSZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24ocy50aHVtYiwgc1sndGh1bWItLXJpZ2h0J10pfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NbJ3NsaWRlciddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzWydzbGlkZXJfX3RyYWNrJ119PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JhbmdlfSBjbGFzc05hbWU9e3NbJ3NsaWRlcl9fcmFuZ2UnXX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c1snc2xpZGVyX19sZWZ0LXZhbHVlJ119PnttaW5WYWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c1snc2xpZGVyX19yaWdodC12YWx1ZSddfT57bWF4VmFsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdWx0aVJhbmdlU2xpZGVyO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vbXVsdGlSYW5nZVNsaWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL211bHRpUmFuZ2VTbGlkZXIubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9tdWx0aVJhbmdlU2xpZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubXVsdGlSYW5nZVNsaWRlcl9jb250YWluZXJfXzJnd2xoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fMzhrR2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubXVsdGlSYW5nZVNsaWRlcl9zbGlkZXJfX3RyYWNrX18zbFkzUyxcXHJcXG4ubXVsdGlSYW5nZVNsaWRlcl9zbGlkZXJfX3JhbmdlX193RUtKdixcXHJcXG4ubXVsdGlSYW5nZVNsaWRlcl9zbGlkZXJfX2xlZnQtdmFsdWVfXzJ4RzJuLFxcclxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fcmlnaHQtdmFsdWVfXzJFMFNIIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfc2xpZGVyX190cmFja19fM2xZM1MsXFxyXFxuLm11bHRpUmFuZ2VTbGlkZXJfc2xpZGVyX19yYW5nZV9fd0VLSnYge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fdHJhY2tfXzNsWTNTIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGUwZTc7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fcmFuZ2VfX3dFS0p2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGE5NTE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubXVsdGlSYW5nZVNsaWRlcl9zbGlkZXJfX2xlZnQtdmFsdWVfXzJ4RzJuLFxcclxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fcmlnaHQtdmFsdWVfXzJFMFNIIHtcXG4gIGNvbG9yOiAjZDBhOTUxO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfc2xpZGVyX19sZWZ0LXZhbHVlX18yeEcybiB7XFxuICBsZWZ0OiA2cHg7XFxufVxcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fcmlnaHQtdmFsdWVfXzJFMFNIIHtcXG4gIHJpZ2h0OiAtNHB4O1xcbn1cXG5cXG4vKiBSZW1vdmluZyB0aGUgZGVmYXVsdCBhcHBlYXJhbmNlICovXFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfdGh1bWJfXzM5eV9TLFxcclxcbi5tdWx0aVJhbmdlU2xpZGVyX3RodW1iX18zOXlfUzo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfdGh1bWJfXzM5eV9TIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfdGh1bWItLWxlZnRfXzJXY3A4IHtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3RodW1iLS1yaWdodF9fN0hRMzUge1xcbiAgei1pbmRleDogNDtcXG59XFxuXFxuLyogRm9yIENocm9tZSBicm93c2VycyAqL1xcblxcbi5tdWx0aVJhbmdlU2xpZGVyX3RodW1iX18zOXlfUzo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjZWQ0ZGE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMThweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEZvciBGaXJlZm94IGJyb3dzZXJzICovXFxuXFxuLm11bHRpUmFuZ2VTbGlkZXJfdGh1bWJfXzM5eV9TOjotbW96LXJhbmdlLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjY2VkNGRhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy91aS9NdWx0aVJhbmdlL211bHRpUmFuZ2VTbGlkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7Ozs7RUFJSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7QUFDZjs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVTtBQUNkOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7QUFDZDs7QUFFQTs7RUFFSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLFNBQVM7QUFDYjs7QUFFQTtFQUNJLFdBQVc7QUFDZjs7QUFFQSxvQ0FBb0M7O0FBQ3BDOztFQUVJLHdCQUF3QjtFQUN4Qix3Q0FBd0M7QUFDNUM7O0FBRUE7RUFDSSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtBQUNqQjs7QUFFQTtFQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNJLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX190cmFjayxcXHJcXG4uc2xpZGVyX19yYW5nZSxcXHJcXG4uc2xpZGVyX19sZWZ0LXZhbHVlLFxcclxcbi5zbGlkZXJfX3JpZ2h0LXZhbHVlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX190cmFjayxcXHJcXG4uc2xpZGVyX19yYW5nZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX3RyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTBlNztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX3JhbmdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYTk1MTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcl9fbGVmdC12YWx1ZSxcXHJcXG4uc2xpZGVyX19yaWdodC12YWx1ZSB7XFxyXFxuICAgIGNvbG9yOiAjZDBhOTUxO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX2xlZnQtdmFsdWUge1xcclxcbiAgICBsZWZ0OiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX3JpZ2h0LXZhbHVlIHtcXHJcXG4gICAgcmlnaHQ6IC00cHg7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92aW5nIHRoZSBkZWZhdWx0IGFwcGVhcmFuY2UgKi9cXHJcXG4udGh1bWIsXFxyXFxuLnRodW1iOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1iIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aHVtYi0tbGVmdCB7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi50aHVtYi0tcmlnaHQge1xcclxcbiAgICB6LWluZGV4OiA0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3IgQ2hyb21lIGJyb3dzZXJzICovXFxyXFxuLnRodW1iOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjY2VkNGRhO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvciBGaXJlZm94IGJyb3dzZXJzICovXFxyXFxuLnRodW1iOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNjZWQ0ZGE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIm11bHRpUmFuZ2VTbGlkZXJfY29udGFpbmVyX18yZ3dsaFwiLFxuXHRcInNsaWRlclwiOiBcIm11bHRpUmFuZ2VTbGlkZXJfc2xpZGVyX18zOGtHZVwiLFxuXHRcInNsaWRlcl9fdHJhY2tcIjogXCJtdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fdHJhY2tfXzNsWTNTXCIsXG5cdFwic2xpZGVyX19yYW5nZVwiOiBcIm11bHRpUmFuZ2VTbGlkZXJfc2xpZGVyX19yYW5nZV9fd0VLSnZcIixcblx0XCJzbGlkZXJfX2xlZnQtdmFsdWVcIjogXCJtdWx0aVJhbmdlU2xpZGVyX3NsaWRlcl9fbGVmdC12YWx1ZV9fMnhHMm5cIixcblx0XCJzbGlkZXJfX3JpZ2h0LXZhbHVlXCI6IFwibXVsdGlSYW5nZVNsaWRlcl9zbGlkZXJfX3JpZ2h0LXZhbHVlX18yRTBTSFwiLFxuXHRcInRodW1iXCI6IFwibXVsdGlSYW5nZVNsaWRlcl90aHVtYl9fMzl5X1NcIixcblx0XCJ0aHVtYi0tbGVmdFwiOiBcIm11bHRpUmFuZ2VTbGlkZXJfdGh1bWItLWxlZnRfXzJXY3A4XCIsXG5cdFwidGh1bWItLXJpZ2h0XCI6IFwibXVsdGlSYW5nZVNsaWRlcl90aHVtYi0tcmlnaHRfXzdIUTM1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
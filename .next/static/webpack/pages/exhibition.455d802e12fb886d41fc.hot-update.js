webpackHotUpdate_N_E("pages/exhibition",{

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
      className: " ".concat(show ? 'transition-all duration-200 w-60 h-auto bg-white p-3' : 'transition-all duration-200  w-0  bg-white', " row-span-1 rounded-lg shadow-2xl h-auto"),
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
              className: "".concat(filter.line ? "h-11 bg-red-50 w-full" : '', "   mt-3")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, _this), filter.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "mt-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "flex justify-between",
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
                  lineNumber: 49,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 37
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mr-8 -mt-2",
                children: filter.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "-mt-1",
                children: [filter.arrow, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: " bg-watusi-250 w-full ",
              style: {
                height: '1px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4Iiwic2hvdyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwiRmlsdGVyIiwiRmlsdGVyRXhoaWJpdGlvbiIsIm1hcCIsImZpbHRlciIsImljb24iLCJ0aXRsZSIsImxpbmUiLCJwcmljZSIsIm1pbiIsIm1heCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYXJyb3ciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxLQUFnQixHQUFHLFNBQW5CQSxLQUFtQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1DLHdCQUdMQyw0Q0FBSyxDQUFDQyxRQUFOLEVBSEs7QUFBQTtBQUFBLE1BRzVCQyxPQUg0QjtBQUFBLE1BR25CQyxVQUhtQjs7QUFLbkNILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJTixNQUFNLENBQUNPLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJGLGdCQUFVLENBQUNHLCtDQUFELENBQVY7QUFDSCxLQUZELE1BRU87QUFDSEgsZ0JBQVUsQ0FBQ0kseURBQUQsQ0FBVjtBQUNIO0FBQ0osR0FORDtBQVFBLHNCQUNJO0FBQUEsMkJBQ0k7QUFDSSxlQUFTLGFBQ0xWLElBQUksR0FDRSxzREFERixHQUVFLDRDQUhELDZDQURiO0FBQUEsZ0JBT0tBLElBQUksZ0JBQ0Q7QUFBSyxpQkFBUywyQkFBZDtBQUFBLGtCQUNLSyxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRU0sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBY2IsS0FBZDtBQUFBLDhCQUNWO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUF1QmEsTUFBTSxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBRyx5QkFBUyxFQUFDLFdBQWI7QUFBQSwwQkFBMEJELE1BQU0sQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSTtBQUNJLHVCQUFTLFlBQ0xGLE1BQU0sQ0FBQ0csSUFBUCw2QkFBd0MsRUFEbkM7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLEVBVUtILE1BQU0sQ0FBQ0ksS0FBUCxnQkFDRztBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLHVDQUNJLHFFQUFDLGlFQUFEO0FBQ0kscUJBQUcsRUFBRSxDQURUO0FBRUkscUJBQUcsRUFBRSxJQUZUO0FBR0ksMEJBQVEsRUFBRTtBQUFBLHdCQUNOQyxHQURNLFNBQ05BLEdBRE07QUFBQSx3QkFFTkMsR0FGTSxTQUVOQSxHQUZNO0FBQUEsMkJBTUpDLE9BQU8sQ0FBQ0MsR0FBUixpQkFBcUJILEdBQXJCLHFCQUFtQ0MsR0FBbkMsRUFOSTtBQUFBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILEdBZ0JHLElBMUJSLGVBMkJJO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFBLHNDQUNJO0FBQUcseUJBQVMsRUFBQyxZQUFiO0FBQUEsMEJBQTJCTixNQUFNLENBQUNTO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFNLHlCQUFTLEVBQUMsT0FBaEI7QUFBQSwyQkFBeUJULE1BQU0sQ0FBQ1UsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkosZUErQkk7QUFDSSx1QkFBUywwQkFEYjtBQUVJLG1CQUFLLEVBQUU7QUFBRUMsc0JBQU0sRUFBRTtBQUFWO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQko7QUFBQSxhQUE4QnhCLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDLEdBeUNEO0FBaERSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXNESCxDQW5FRDs7R0FBTUEsSztVQUNhRyxxRDs7O0FBb0VKSCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGhpYml0aW9uLjQ1NWQ4MDJlMTJmYjg4NmQ0MWZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcic7XHJcbmltcG9ydCBGaWx0ZXJFeGhpYml0aW9uIGZyb20gJy4vZmlsdGVyRXhoaWJpdGlvbic7XHJcbmltcG9ydCBNdWx0aVJhbmdlU2xpZGVyIGZyb20gJ0Bjb21wb25lbnRzL3VpL011bHRpUmFuZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHNob3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbmRleDogRkM8UHJvcHM+ID0gKHsgc2hvdyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcclxuICAgICAgICAgICAgc2V0RmlsdGVycyhGaWx0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcnMoRmlsdGVyRXhoaWJpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCB3LTYwIGgtYXV0byBiZy13aGl0ZSBwLTMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAgdy0wICBiZy13aGl0ZSdcclxuICAgICAgICAgICAgICAgIH0gcm93LXNwYW4tMSByb3VuZGVkLWxnIHNoYWRvdy0yeGwgaC1hdXRvYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Agcm93LXNwYW4tMSByb3VuZGVkLWxnIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycz8ubWFwKChmaWx0ZXI6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+e2ZpbHRlci5pY29ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0xIG10LTJcIj57ZmlsdGVyLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/IGBoLTExIGJnLXJlZC01MCB3LWZ1bGxgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIG10LTNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLnByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlSYW5nZVNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IGNvbnNvbGUubG9nKGBtaW4gPSAke21pbn0sIG1heCA9ICR7bWF4fWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci04IC1tdC0yXCI+e2ZpbHRlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLW10LTFcIj57ZmlsdGVyLmFycm93fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgYmctd2F0dXNpLTI1MCB3LWZ1bGwgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
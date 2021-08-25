webpackHotUpdate_N_E("pages/exhibition",{

/***/ "./components/ui/Modal/index.tsx":
/*!***************************************!*\
  !*** ./components/ui/Modal/index.tsx ***!
  \***************************************/
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
/* harmony import */ var _components_Filter_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Filter/filter */ "./components/Filter/filter.js");
/* harmony import */ var _components_Filter_filterExhibition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Filter/filterExhibition */ "./components/Filter/filterExhibition.js");



var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\components\\ui\\Modal\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var index = function index(_ref) {
  _s();

  var show = _ref.show,
      handleClick = _ref.handleClick;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      filters = _React$useState2[0],
      setFilters = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (router.pathname === '/') {
      setFilters(_components_Filter_filter__WEBPACK_IMPORTED_MODULE_4__["default"]);
    } else {
      setFilters(_components_Filter_filterExhibition__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: " lg:hidden md:hidden block w-full h-screen top-0 fixed z-50",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full h-12 bg-white flex justify-end p-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            onClick: handleClick,
            className: "text-white bg-red-600 h-6 w-6 rounded-full flex justify-center items-center",
            children: "X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full h-screen bg-white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: " row-span-1 rounded-lg ",
            children: filters === null || filters === void 0 ? void 0 : filters.map(function (filter, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "text-xs",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "mt-1",
                    children: filter.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "mr-1 mt-2",
                    children: filter.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "".concat(filter.line ? "h-11 bg-red-50 w-full" : '', "   mt-3")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex justify-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "mr-8 -mt-2",
                    children: filter.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    className: "-mt-1",
                    children: filter.arrow
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: " bg-watusi-250 w-full ",
                  style: {
                    height: '1px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 41
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Nb2RhbC9pbmRleC50c3giXSwibmFtZXMiOlsiaW5kZXgiLCJzaG93IiwiaGFuZGxlQ2xpY2siLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsIkZpbHRlciIsIkZpbHRlckV4aGliaXRpb24iLCJtYXAiLCJmaWx0ZXIiLCJpY29uIiwidGl0bGUiLCJsaW5lIiwibmFtZSIsImFycm93IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxLQUFnQixHQUFHLFNBQW5CQSxLQUFtQixPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGdELHdCQUdsQkMsNENBQUssQ0FBQ0MsUUFBTixFQUhrQjtBQUFBO0FBQUEsTUFHekNDLE9BSHlDO0FBQUEsTUFHaENDLFVBSGdDOztBQUtoREgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixZQUFNO0FBQ2xCLFFBQUlOLE1BQU0sQ0FBQ08sUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUN6QkYsZ0JBQVUsQ0FBQ0csaUVBQUQsQ0FBVjtBQUNILEtBRkQsTUFFTztBQUNISCxnQkFBVSxDQUFDSSwyRUFBRCxDQUFWO0FBQ0g7QUFDSixHQU5EO0FBUUEsc0JBQ0k7QUFBQSxjQUNLWCxJQUFJLGdCQUNEO0FBQUssZUFBUywrREFBZDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsaUNBQ0k7QUFDSSxtQkFBTyxFQUFFQyxXQURiO0FBRUkscUJBQVMsRUFBQyw2RUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUk7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUywyQkFBZDtBQUFBLHNCQUNLSyxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRU0sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBY2QsS0FBZDtBQUFBLGtDQUNWO0FBQUsseUJBQVMsRUFBQyxTQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUF1QmMsTUFBTSxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBRyw2QkFBUyxFQUFDLFdBQWI7QUFBQSw4QkFBMEJELE1BQU0sQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFLSTtBQUNJLDJCQUFTLFlBQ0xGLE1BQU0sQ0FBQ0csSUFBUCw2QkFBd0MsRUFEbkM7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLGVBVUk7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEsMENBQ0k7QUFBRyw2QkFBUyxFQUFDLFlBQWI7QUFBQSw4QkFBMkJILE1BQU0sQ0FBQ0k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sNkJBQVMsRUFBQyxPQUFoQjtBQUFBLDhCQUF5QkosTUFBTSxDQUFDSztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWNJO0FBQ0ksMkJBQVMsMEJBRGI7QUFFSSx1QkFBSyxFQUFFO0FBQUVDLDBCQUFNLEVBQUU7QUFBVjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEo7QUFBQSxpQkFBOEJwQixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURVO0FBQUEsYUFBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxHQXVDRDtBQXhDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0Q0gsQ0F6REQ7O0dBQU1BLEs7VUFDYUkscUQ7OztBQTBESkosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhoaWJpdGlvbi45NTE3ZjkxNDUxNDZhMDMzNzYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJ0Bjb21wb25lbnRzL0ZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgRmlsdGVyRXhoaWJpdGlvbiBmcm9tICdAY29tcG9uZW50cy9GaWx0ZXIvZmlsdGVyRXhoaWJpdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICBoYW5kbGVDbGljaz86IGFueTtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZDPFByb3BzPiA9ICh7IHNob3csIGhhbmRsZUNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKEZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RmlsdGVycyhGaWx0ZXJFeGhpYml0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgbGc6aGlkZGVuIG1kOmhpZGRlbiBibG9jayB3LWZ1bGwgaC1zY3JlZW4gdG9wLTAgZml4ZWQgei01MGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWVuZCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaC02IHctNiByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCByb3ctc3Bhbi0xIHJvdW5kZWQtbGcgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcnM/Lm1hcCgoZmlsdGVyOiBhbnksIGluZGV4OiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj57ZmlsdGVyLmljb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMSBtdC0yXCI+e2ZpbHRlci50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/IGBoLTExIGJnLXJlZC01MCB3LWZ1bGxgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgbXQtM2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItOCAtbXQtMlwiPntmaWx0ZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLW10LTFcIj57ZmlsdGVyLmFycm93fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBiZy13YXR1c2ktMjUwIHctZnVsbCBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzFweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
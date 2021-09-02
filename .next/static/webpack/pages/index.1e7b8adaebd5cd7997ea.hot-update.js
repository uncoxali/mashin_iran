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
              className: "mt-5 h-20 mr-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ui_MultiRange__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  min: 0,
                  max: 2000,
                  onChange: function onChange(_ref2) {
                    var min = _ref2.min,
                        max = _ref2.max;
                    return console.log("min = ".concat(min, ", max = ").concat(max));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 37
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "flex justify-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mr-8 -mt-2",
                children: filter.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "-mt-1",
                children: [filter.arrow, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: " bg-watusi-250 w-full ",
              style: {
                height: '1px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4Iiwic2hvdyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwiRmlsdGVyIiwiRmlsdGVyRXhoaWJpdGlvbiIsIm1hcCIsImZpbHRlciIsImljb24iLCJ0aXRsZSIsImxpbmUiLCJwcmljZSIsIm1pbiIsIm1heCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYXJyb3ciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxLQUFnQixHQUFHLFNBQW5CQSxLQUFtQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1DLHdCQUdMQyw0Q0FBSyxDQUFDQyxRQUFOLEVBSEs7QUFBQTtBQUFBLE1BRzVCQyxPQUg0QjtBQUFBLE1BR25CQyxVQUhtQjs7QUFLbkNILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJTixNQUFNLENBQUNPLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJGLGdCQUFVLENBQUNHLCtDQUFELENBQVY7QUFDSCxLQUZELE1BRU87QUFDSEgsZ0JBQVUsQ0FBQ0kseURBQUQsQ0FBVjtBQUNIO0FBQ0osR0FORDtBQVFBLHNCQUNJO0FBQUEsMkJBQ0k7QUFDSSxlQUFTLGFBQ0xWLElBQUksR0FDRSxzREFERixHQUVFLDRDQUhELDZDQURiO0FBQUEsZ0JBT0tBLElBQUksZ0JBQ0Q7QUFBSyxpQkFBUywyQkFBZDtBQUFBLGtCQUNLSyxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRU0sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBY2IsS0FBZDtBQUFBLDhCQUNWO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUF1QmEsTUFBTSxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBRyx5QkFBUyxFQUFDLFdBQWI7QUFBQSwwQkFBMEJELE1BQU0sQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSTtBQUNJLHVCQUFTLFlBQ0xGLE1BQU0sQ0FBQ0csSUFBUCw2QkFBd0MsRUFEbkM7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLEVBV0tILE1BQU0sQ0FBQ0ksS0FBUCxnQkFDRztBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsc0JBQWY7QUFBQSx1Q0FDSSxxRUFBQyxpRUFBRDtBQUNJLHFCQUFHLEVBQUUsQ0FEVDtBQUVJLHFCQUFHLEVBQUUsSUFGVDtBQUdJLDBCQUFRLEVBQUU7QUFBQSx3QkFDTkMsR0FETSxTQUNOQSxHQURNO0FBQUEsd0JBRU5DLEdBRk0sU0FFTkEsR0FGTTtBQUFBLDJCQU1KQyxPQUFPLENBQUNDLEdBQVIsaUJBQXFCSCxHQUFyQixxQkFBbUNDLEdBQW5DLEVBTkk7QUFBQTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxHQWdCRyxJQTNCUixlQTZCSTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDSTtBQUFHLHlCQUFTLEVBQUMsWUFBYjtBQUFBLDBCQUEyQk4sTUFBTSxDQUFDUztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBTSx5QkFBUyxFQUFDLE9BQWhCO0FBQUEsMkJBQXlCVCxNQUFNLENBQUNVLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JKLGVBaUNJO0FBQ0ksdUJBQVMsMEJBRGI7QUFFSSxtQkFBSyxFQUFFO0FBQUVDLHNCQUFNLEVBQUU7QUFBVjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNKO0FBQUEsYUFBOEJ4QixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQTJDRDtBQWxEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF3REgsQ0FyRUQ7O0dBQU1BLEs7VUFDYUcscUQ7OztBQXNFSkgsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWU3YjhhZGFlYmQ1Y2Q3OTk3ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJztcclxuaW1wb3J0IEZpbHRlckV4aGliaXRpb24gZnJvbSAnLi9maWx0ZXJFeGhpYml0aW9uJztcclxuaW1wb3J0IE11bHRpUmFuZ2VTbGlkZXIgZnJvbSAnQGNvbXBvbmVudHMvdWkvTXVsdGlSYW5nZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgc2hvdz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4OiBGQzxQcm9wcz4gPSAoeyBzaG93IH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKEZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RmlsdGVycyhGaWx0ZXJFeGhpYml0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHctNjAgaC1hdXRvIGJnLXdoaXRlIHAtMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAndHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICB3LTAgIGJnLXdoaXRlJ1xyXG4gICAgICAgICAgICAgICAgfSByb3ctc3Bhbi0xIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBoLWF1dG9gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2hvdyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCByb3ctc3Bhbi0xIHJvdW5kZWQtbGcgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJzPy5tYXAoKGZpbHRlcjogYW55LCBpbmRleDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj57ZmlsdGVyLmljb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTEgbXQtMlwiPntmaWx0ZXIudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5saW5lID8gYGgtMTEgYmctcmVkLTUwIHctZnVsbGAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgbXQtM2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLnByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgaC0yMCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpUmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiBjb25zb2xlLmxvZyhgbWluID0gJHttaW59LCBtYXggPSAke21heH1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTggLW10LTJcIj57ZmlsdGVyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCItbXQtMVwiPntmaWx0ZXIuYXJyb3d9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBiZy13YXR1c2ktMjUwIHctZnVsbCBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
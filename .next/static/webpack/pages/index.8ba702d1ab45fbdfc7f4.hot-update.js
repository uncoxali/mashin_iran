webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _assets_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/svg/arrow.svg */ "./assets/svg/arrow.svg");
/* harmony import */ var _assets_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/svg/filter.svg */ "./assets/svg/filter.svg");
/* harmony import */ var _assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_7__);



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
      className: " lg:hidden md:hidden block w-full h-screen  overflow-y-auto top-0 fixed z-50 bg-white",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full h-12 bg-white flex justify-between p-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "".concat(show ? 'mr-0' : 'lg:mr-10 md:mr-10 ', " bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center"),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: " bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "text-white text-xs mr-2",
              children: "\u0641\u06CC\u0644\u062A\u0631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            onClick: handleClick,
            className: "bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_assets_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
              className: "".concat(show ? ' transform rotate-180 transition-all duration-1000' : '  transition-all duration-1000')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {
          className: "mt-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full bg-white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: " row-span-1 rounded-lg p-3 ",
            children: filters === null || filters === void 0 ? void 0 : filters.map(function (filter, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "text-xs",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex mt-1",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: filter.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "mr-1 mt-3",
                    children: filter.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "".concat(filter.line ? "h-11 bg-red-50 w-full" : '', "   mt-4")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex justify-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    className: "mr-8 -mt-2",
                    children: filter.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    className: "-mt-1",
                    children: filter.arrow
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: " ".concat(filter.line ? 'hidden' : 'block', " bg-watusi-250 w-full mt-1"),
                  style: {
                    height: '1px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 41
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Nb2RhbC9pbmRleC50c3giXSwibmFtZXMiOlsiaW5kZXgiLCJzaG93IiwiaGFuZGxlQ2xpY2siLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsIkZpbHRlciIsIkZpbHRlckV4aGliaXRpb24iLCJtYXAiLCJmaWx0ZXIiLCJpY29uIiwidGl0bGUiLCJsaW5lIiwibmFtZSIsImFycm93IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLEtBQWdCLEdBQUcsU0FBbkJBLEtBQW1CLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDaEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEZ0Qsd0JBR2xCQyw0Q0FBSyxDQUFDQyxRQUFOLEVBSGtCO0FBQUE7QUFBQSxNQUd6Q0MsT0FIeUM7QUFBQSxNQUdoQ0MsVUFIZ0M7O0FBS2hESCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDbEIsUUFBSU4sTUFBTSxDQUFDTyxRQUFQLEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCRixnQkFBVSxDQUFDRyxpRUFBRCxDQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0hILGdCQUFVLENBQUNJLDJFQUFELENBQVY7QUFDSDtBQUNKLEdBTkQ7QUFRQSxzQkFDSTtBQUFBLGNBQ0tYLElBQUksZ0JBQ0Q7QUFDSSxlQUFTLHlGQURiO0FBQUEsNkJBR0k7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsK0NBQWY7QUFBQSxrQ0FDSTtBQUNJLHFCQUFTLFlBQ0xBLElBQUksR0FBRyxNQUFILEdBQVksb0JBRFgsK0ZBRGI7QUFBQSxvQ0FLSTtBQUNJLHVCQUFTLDhGQURiO0FBQUEscUNBR0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFVSTtBQUFHLHVCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBYUk7QUFDSSxtQkFBTyxFQUFFQyxXQURiO0FBRUkscUJBQVMsRUFBQywyRkFGZDtBQUFBLG1DQUlJLHFFQUFDLDREQUFEO0FBQ0ksdUJBQVMsWUFDTEQsSUFBSSxHQUNFLG9EQURGLEdBRUUsZ0NBSEQ7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUEyQkk7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkosZUE0Qkk7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUywrQkFBZDtBQUFBLHNCQUNLTSxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRU0sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBY2QsS0FBZDtBQUFBLGtDQUNWO0FBQUsseUJBQVMsRUFBQyxTQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSwwQ0FDSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUF1QmMsTUFBTSxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBRyw2QkFBUyxFQUFDLFdBQWI7QUFBQSw4QkFBMEJELE1BQU0sQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFLSTtBQUNJLDJCQUFTLFlBQ0xGLE1BQU0sQ0FBQ0csSUFBUCw2QkFBd0MsRUFEbkM7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLGVBVUk7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEsMENBQ0k7QUFBRyw2QkFBUyxFQUFDLFlBQWI7QUFBQSw4QkFBMkJILE1BQU0sQ0FBQ0k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sNkJBQVMsRUFBQyxPQUFoQjtBQUFBLDhCQUF5QkosTUFBTSxDQUFDSztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWNJO0FBQ0ksMkJBQVMsYUFDTEwsTUFBTSxDQUFDRyxJQUFQLEdBQWMsUUFBZCxHQUF5QixPQURwQiwrQkFEYjtBQUlJLHVCQUFLLEVBQUU7QUFBRUcsMEJBQU0sRUFBRTtBQUFWO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFkSjtBQUFBLGlCQUE4QnBCLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFU7QUFBQSxhQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxHQTZERDtBQTlEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRUgsQ0EvRUQ7O0dBQU1BLEs7VUFDYUkscUQ7OztBQWdGSkosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGJhNzAyZDFhYjQ1ZmJkZmM3ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICdAY29tcG9uZW50cy9GaWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IEZpbHRlckV4aGliaXRpb24gZnJvbSAnQGNvbXBvbmVudHMvRmlsdGVyL2ZpbHRlckV4aGliaXRpb24nO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSAnQGFzc2V0cy9zdmcvYXJyb3cuc3ZnJztcclxuaW1wb3J0IEZpbHRlckljb24gZnJvbSAnQGFzc2V0cy9zdmcvZmlsdGVyLnN2Zyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICBoYW5kbGVDbGljaz86IGFueTtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZDPFByb3BzPiA9ICh7IHNob3csIGhhbmRsZUNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKEZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RmlsdGVycyhGaWx0ZXJFeGhpYml0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBsZzpoaWRkZW4gbWQ6aGlkZGVuIGJsb2NrIHctZnVsbCBoLXNjcmVlbiAgb3ZlcmZsb3cteS1hdXRvIHRvcC0wIGZpeGVkIHotNTAgYmctd2hpdGVgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA/ICdtci0wJyA6ICdsZzptci0xMCBtZDptci0xMCAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBiZy1ibGFjay01MCB3LTI0IGgtMTAgcm91bmRlZC1mdWxsICBib3JkZXItMiBib3JkZXItd2hpdGUgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgYmctYmxhY2stNTAgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItd2hpdGVgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteHMgbXItMlwiPtmB24zZhNiq2LE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay01MCB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIHRyYW5zZm9ybSByb3RhdGUtMTgwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCByb3ctc3Bhbi0xIHJvdW5kZWQtbGcgcC0zIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJzPy5tYXAoKGZpbHRlcjogYW55LCBpbmRleDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj57ZmlsdGVyLmljb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMSBtdC0zXCI+e2ZpbHRlci50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/IGBoLTExIGJnLXJlZC01MCB3LWZ1bGxgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItOCAtbXQtMlwiPntmaWx0ZXIubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLW10LTFcIj57ZmlsdGVyLmFycm93fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/ICdoaWRkZW4nIDogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYmctd2F0dXNpLTI1MCB3LWZ1bGwgbXQtMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
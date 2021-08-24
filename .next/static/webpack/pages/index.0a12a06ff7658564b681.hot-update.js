webpackHotUpdate_N_E("pages/index",{

/***/ "./assets/svg/user-icon.svg":
/*!**********************************!*\
  !*** ./assets/svg/user-icon.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function UserIcon (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0)","key":0},React.createElement("path",{"d":"M14.4539 14.4147C13.1855 14.4147 12.5756 15.1282 10.494 15.1282C8.41238 15.1282 7.80691 14.4147 6.53408 14.4147C3.25479 14.4147 0.594238 17.0991 0.594238 20.4079V21.5494C0.594238 22.7311 1.54444 23.6898 2.71561 23.6898H18.2724C19.4435 23.6898 20.3937 22.7311 20.3937 21.5494V20.4079C20.3937 17.0991 17.7332 14.4147 14.4539 14.4147ZM18.2724 21.5494H2.71561V20.4079C2.71561 18.2853 4.43039 16.5551 6.53408 16.5551C7.17934 16.5551 8.22676 17.2686 10.494 17.2686C12.7789 17.2686 13.8042 16.5551 14.4539 16.5551C16.5576 16.5551 18.2724 18.2853 18.2724 20.4079V21.5494ZM10.494 13.7012C14.0075 13.7012 16.8581 10.825 16.8581 7.27996C16.8581 3.73489 14.0075 0.858704 10.494 0.858704C6.98046 0.858704 4.12986 3.73489 4.12986 7.27996C4.12986 10.825 6.98046 13.7012 10.494 13.7012ZM10.494 2.99912C12.8319 2.99912 14.7367 4.92104 14.7367 7.27996C14.7367 9.63888 12.8319 11.5608 10.494 11.5608C8.15605 11.5608 6.25124 9.63888 6.25124 7.27996C6.25124 4.92104 8.15605 2.99912 10.494 2.99912Z","fill":"white"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0"},React.createElement("rect",{"width":"19.7995","height":"22.8311","fill":"white","transform":"translate(0.594238 0.858704)"})))]);
}

UserIcon.defaultProps = {"width":"21","height":"24","viewBox":"0 0 21 24","fill":"none"};

module.exports = UserIcon;

UserIcon.default = UserIcon;


/***/ }),

/***/ "./components/Menu/index.tsx":
/*!***********************************!*\
  !*** ./components/Menu/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svg/user-icon.svg */ "./assets/svg/user-icon.svg");
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\components\\Menu\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var index = function index(_ref) {
  _s();

  var menu = _ref.menu,
      handleClick = _ref.handleClick;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      sideBar = _React$useState2[0],
      setSideBar = _React$useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      onClick: handleClick,
      className: menu ? "w-full h-screen bg-blacks-100 z-20 absolute opacity-80" : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: " ".concat(menu ? ' transition-all duration-300 w-72 bg-white' : ' transition-all duration-300 w-0', "   h-screen z-50 absolute w-0 p-3"),
      children: menu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "p-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex justify-around",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "w-16 h-16 bg-red-50 rounded-full"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "text-sm",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "\u0646\u0645\u0627\u06CC\u0634\u06AF\u0627\u0647 \u0627\u062D\u0645\u062F\u06CC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "\u06A9\u062F \u0646\u0645\u0627\u06CC\u0646\u062F\u06AF\u06CC : whh5476"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "09104866595"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 41
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0635\u0644\u062D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }, _this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(index, "sPalOcAh/xVtD5xsGGu1ppQVD+o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3N2Zy91c2VyLWljb24uc3ZnIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwibWVudSIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLG1CQUFPLENBQUMsNENBQU87O0FBRTNCO0FBQ0EscUVBQXFFLGlDQUFpQyw2QkFBNkIscytCQUFzK0IsK0JBQStCLFFBQVEsaUNBQWlDLGFBQWEsNkJBQTZCLCtGQUErRjtBQUMxekM7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBT0EsSUFBTUEsS0FBZ0IsR0FBRyxTQUFuQkEsS0FBbUIsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSx3QkFDbEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGtCO0FBQUE7QUFBQSxNQUN6Q0MsT0FEeUM7QUFBQSxNQUNoQ0MsVUFEZ0M7O0FBR2hELHNCQUNJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSw0QkFDSTtBQUNJLGFBQU8sRUFBRUosV0FEYjtBQUVJLGVBQVMsRUFBRUQsSUFBSSw4REFBOEQ7QUFGakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTVE7QUFDSSxlQUFTLGFBQ0xBLElBQUksR0FDRSw0Q0FERixHQUVFLGtDQUhELHNDQURiO0FBQUEsZ0JBT0tBLElBQUksZ0JBQ0Q7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVdJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQWlCRDtBQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0F2Q0Q7O0dBQU1ELEs7O0FBeUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTEyYTA2ZmY3NjU4NTY0YjY4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gVXNlckljb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJjbGlwUGF0aFwiOlwidXJsKCNjbGlwMClcIixcImtleVwiOjB9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTE0LjQ1MzkgMTQuNDE0N0MxMy4xODU1IDE0LjQxNDcgMTIuNTc1NiAxNS4xMjgyIDEwLjQ5NCAxNS4xMjgyQzguNDEyMzggMTUuMTI4MiA3LjgwNjkxIDE0LjQxNDcgNi41MzQwOCAxNC40MTQ3QzMuMjU0NzkgMTQuNDE0NyAwLjU5NDIzOCAxNy4wOTkxIDAuNTk0MjM4IDIwLjQwNzlWMjEuNTQ5NEMwLjU5NDIzOCAyMi43MzExIDEuNTQ0NDQgMjMuNjg5OCAyLjcxNTYxIDIzLjY4OThIMTguMjcyNEMxOS40NDM1IDIzLjY4OTggMjAuMzkzNyAyMi43MzExIDIwLjM5MzcgMjEuNTQ5NFYyMC40MDc5QzIwLjM5MzcgMTcuMDk5MSAxNy43MzMyIDE0LjQxNDcgMTQuNDUzOSAxNC40MTQ3Wk0xOC4yNzI0IDIxLjU0OTRIMi43MTU2MVYyMC40MDc5QzIuNzE1NjEgMTguMjg1MyA0LjQzMDM5IDE2LjU1NTEgNi41MzQwOCAxNi41NTUxQzcuMTc5MzQgMTYuNTU1MSA4LjIyNjc2IDE3LjI2ODYgMTAuNDk0IDE3LjI2ODZDMTIuNzc4OSAxNy4yNjg2IDEzLjgwNDIgMTYuNTU1MSAxNC40NTM5IDE2LjU1NTFDMTYuNTU3NiAxNi41NTUxIDE4LjI3MjQgMTguMjg1MyAxOC4yNzI0IDIwLjQwNzlWMjEuNTQ5NFpNMTAuNDk0IDEzLjcwMTJDMTQuMDA3NSAxMy43MDEyIDE2Ljg1ODEgMTAuODI1IDE2Ljg1ODEgNy4yNzk5NkMxNi44NTgxIDMuNzM0ODkgMTQuMDA3NSAwLjg1ODcwNCAxMC40OTQgMC44NTg3MDRDNi45ODA0NiAwLjg1ODcwNCA0LjEyOTg2IDMuNzM0ODkgNC4xMjk4NiA3LjI3OTk2QzQuMTI5ODYgMTAuODI1IDYuOTgwNDYgMTMuNzAxMiAxMC40OTQgMTMuNzAxMlpNMTAuNDk0IDIuOTk5MTJDMTIuODMxOSAyLjk5OTEyIDE0LjczNjcgNC45MjEwNCAxNC43MzY3IDcuMjc5OTZDMTQuNzM2NyA5LjYzODg4IDEyLjgzMTkgMTEuNTYwOCAxMC40OTQgMTEuNTYwOEM4LjE1NjA1IDExLjU2MDggNi4yNTEyNCA5LjYzODg4IDYuMjUxMjQgNy4yNzk5NkM2LjI1MTI0IDQuOTIxMDQgOC4xNTYwNSAyLjk5OTEyIDEwLjQ5NCAyLjk5OTEyWlwiLFwiZmlsbFwiOlwid2hpdGVcIn0pKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLHtcImtleVwiOjF9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjbGlwUGF0aFwiLHtcImlkXCI6XCJjbGlwMFwifSxSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLHtcIndpZHRoXCI6XCIxOS43OTk1XCIsXCJoZWlnaHRcIjpcIjIyLjgzMTFcIixcImZpbGxcIjpcIndoaXRlXCIsXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZSgwLjU5NDIzOCAwLjg1ODcwNClcIn0pKSldKTtcbn1cblxuVXNlckljb24uZGVmYXVsdFByb3BzID0ge1wid2lkdGhcIjpcIjIxXCIsXCJoZWlnaHRcIjpcIjI0XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjEgMjRcIixcImZpbGxcIjpcIm5vbmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckljb247XG5cblVzZXJJY29uLmRlZmF1bHQgPSBVc2VySWNvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJJY29uIGZyb20gJ0Bhc3NldHMvc3ZnL3VzZXItaWNvbi5zdmcnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG1lbnU/OiBib29sZWFuO1xyXG4gICAgaGFuZGxlQ2xpY2s/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4OiBGQzxQcm9wcz4gPSAoeyBtZW51LCBoYW5kbGVDbGljayB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bWVudSA/IGB3LWZ1bGwgaC1zY3JlZW4gYmctYmxhY2tzLTEwMCB6LTIwIGFic29sdXRlIG9wYWNpdHktODBgIDogJyd9XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHctNzIgYmctd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHctMCdcclxuICAgICAgICAgICAgICAgICAgICB9ICAgaC1zY3JlZW4gei01MCBhYnNvbHV0ZSB3LTAgcC0zYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVudSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLXJlZC01MCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7ZhtmF2KfbjNi02q/Yp9mHINin2K3Zhdiv24w8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7aqdivINmG2YXYp9uM2YbYr9qv24wgOiB3aGg1NDc2PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MDkxMDQ4NjY1OTU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Yp9i32YTYp9i52KfYqiDYtdmE2K08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
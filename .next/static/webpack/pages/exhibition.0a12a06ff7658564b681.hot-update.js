webpackHotUpdate_N_E("pages/exhibition",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3N2Zy91c2VyLWljb24uc3ZnIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4IiwibWVudSIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLG1CQUFPLENBQUMsNENBQU87O0FBRTNCO0FBQ0EscUVBQXFFLGlDQUFpQyw2QkFBNkIscytCQUFzK0IsK0JBQStCLFFBQVEsaUNBQWlDLGFBQWEsNkJBQTZCLCtGQUErRjtBQUMxekM7O0FBRUEseUJBQXlCOztBQUV6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBT0EsSUFBTUEsS0FBZ0IsR0FBRyxTQUFuQkEsS0FBbUIsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSx3QkFDbEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGtCO0FBQUE7QUFBQSxNQUN6Q0MsT0FEeUM7QUFBQSxNQUNoQ0MsVUFEZ0M7O0FBR2hELHNCQUNJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSw0QkFDSTtBQUNJLGFBQU8sRUFBRUosV0FEYjtBQUVJLGVBQVMsRUFBRUQsSUFBSSw4REFBOEQ7QUFGakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTVE7QUFDSSxlQUFTLGFBQ0xBLElBQUksR0FDRSw0Q0FERixHQUVFLGtDQUhELHNDQURiO0FBQUEsZ0JBT0tBLElBQUksZ0JBQ0Q7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVdJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQWlCRDtBQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0F2Q0Q7O0dBQU1ELEs7O0FBeUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGhpYml0aW9uLjBhMTJhMDZmZjc2NTg1NjRiNjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBVc2VySWNvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImNsaXBQYXRoXCI6XCJ1cmwoI2NsaXAwKVwiLFwia2V5XCI6MH0sUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJNMTQuNDUzOSAxNC40MTQ3QzEzLjE4NTUgMTQuNDE0NyAxMi41NzU2IDE1LjEyODIgMTAuNDk0IDE1LjEyODJDOC40MTIzOCAxNS4xMjgyIDcuODA2OTEgMTQuNDE0NyA2LjUzNDA4IDE0LjQxNDdDMy4yNTQ3OSAxNC40MTQ3IDAuNTk0MjM4IDE3LjA5OTEgMC41OTQyMzggMjAuNDA3OVYyMS41NDk0QzAuNTk0MjM4IDIyLjczMTEgMS41NDQ0NCAyMy42ODk4IDIuNzE1NjEgMjMuNjg5OEgxOC4yNzI0QzE5LjQ0MzUgMjMuNjg5OCAyMC4zOTM3IDIyLjczMTEgMjAuMzkzNyAyMS41NDk0VjIwLjQwNzlDMjAuMzkzNyAxNy4wOTkxIDE3LjczMzIgMTQuNDE0NyAxNC40NTM5IDE0LjQxNDdaTTE4LjI3MjQgMjEuNTQ5NEgyLjcxNTYxVjIwLjQwNzlDMi43MTU2MSAxOC4yODUzIDQuNDMwMzkgMTYuNTU1MSA2LjUzNDA4IDE2LjU1NTFDNy4xNzkzNCAxNi41NTUxIDguMjI2NzYgMTcuMjY4NiAxMC40OTQgMTcuMjY4NkMxMi43Nzg5IDE3LjI2ODYgMTMuODA0MiAxNi41NTUxIDE0LjQ1MzkgMTYuNTU1MUMxNi41NTc2IDE2LjU1NTEgMTguMjcyNCAxOC4yODUzIDE4LjI3MjQgMjAuNDA3OVYyMS41NDk0Wk0xMC40OTQgMTMuNzAxMkMxNC4wMDc1IDEzLjcwMTIgMTYuODU4MSAxMC44MjUgMTYuODU4MSA3LjI3OTk2QzE2Ljg1ODEgMy43MzQ4OSAxNC4wMDc1IDAuODU4NzA0IDEwLjQ5NCAwLjg1ODcwNEM2Ljk4MDQ2IDAuODU4NzA0IDQuMTI5ODYgMy43MzQ4OSA0LjEyOTg2IDcuMjc5OTZDNC4xMjk4NiAxMC44MjUgNi45ODA0NiAxMy43MDEyIDEwLjQ5NCAxMy43MDEyWk0xMC40OTQgMi45OTkxMkMxMi44MzE5IDIuOTk5MTIgMTQuNzM2NyA0LjkyMTA0IDE0LjczNjcgNy4yNzk5NkMxNC43MzY3IDkuNjM4ODggMTIuODMxOSAxMS41NjA4IDEwLjQ5NCAxMS41NjA4QzguMTU2MDUgMTEuNTYwOCA2LjI1MTI0IDkuNjM4ODggNi4yNTEyNCA3LjI3OTk2QzYuMjUxMjQgNC45MjEwNCA4LjE1NjA1IDIuOTk5MTIgMTAuNDk0IDIuOTk5MTJaXCIsXCJmaWxsXCI6XCJ3aGl0ZVwifSkpLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIse1wia2V5XCI6MX0sUmVhY3QuY3JlYXRlRWxlbWVudChcImNsaXBQYXRoXCIse1wiaWRcIjpcImNsaXAwXCJ9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIse1wid2lkdGhcIjpcIjE5Ljc5OTVcIixcImhlaWdodFwiOlwiMjIuODMxMVwiLFwiZmlsbFwiOlwid2hpdGVcIixcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlKDAuNTk0MjM4IDAuODU4NzA0KVwifSkpKV0pO1xufVxuXG5Vc2VySWNvbi5kZWZhdWx0UHJvcHMgPSB7XCJ3aWR0aFwiOlwiMjFcIixcImhlaWdodFwiOlwiMjRcIixcInZpZXdCb3hcIjpcIjAgMCAyMSAyNFwiLFwiZmlsbFwiOlwibm9uZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySWNvbjtcblxuVXNlckljb24uZGVmYXVsdCA9IFVzZXJJY29uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVXNlckljb24gZnJvbSAnQGFzc2V0cy9zdmcvdXNlci1pY29uLnN2Zyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbWVudT86IGJvb2xlYW47XHJcbiAgICBoYW5kbGVDbGljaz86IGFueTtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZDPFByb3BzPiA9ICh7IG1lbnUsIGhhbmRsZUNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttZW51ID8gYHctZnVsbCBoLXNjcmVlbiBiZy1ibGFja3MtMTAwIHotMjAgYWJzb2x1dGUgb3BhY2l0eS04MGAgOiAnJ31cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdy03MiBiZy13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdy0wJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICBoLXNjcmVlbiB6LTUwIGFic29sdXRlIHctMCBwLTNgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW51ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYmctcmVkLTUwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmG2YXYp9uM2LTar9in2Ycg2KfYrdmF2K/bjDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtqp2K8g2YbZhdin24zZhtiv2q/bjCA6IHdoaDU0NzY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4wOTEwNDg2NjU5NTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtin2LfZhNin2LnYp9iqINi12YTYrTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
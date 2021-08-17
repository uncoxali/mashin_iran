webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svg/user-icon.svg */ "./assets/svg/user-icon.svg");
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/svg/close.svg */ "./assets/svg/close.svg");
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_code_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-code-input */ "./node_modules/react-code-input/dist/ReactCodeInput.js");
/* harmony import */ var react_code_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_code_input__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\pages\\login\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Auth = function Auth() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('l1'),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      times = _useState2[0],
      setTimer = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // const time = new Date();
  // time.setSeconds(time.getSeconds() + 60);
  // const { seconds, minutes } = useTimer({
  //     expiryTimestamp: time,
  //     onExpire: () => console.warn('onExpire called'),
  // });

  var handleClick = function handleClick() {
    if (login == 'l1') {
      setLogin('l2');
    } else if (login == 'l2') {
      setLogin('l3');
    } else if (login == 'l3') {
      sessionStorage.setItem('name', 'login');
      router.push('/');
    } else {}
  };

  var handleBack = function handleBack() {
    if (login == 'l3') {
      setLogin('l2');
    } else if (login == 'l2') {
      setLogin('l1');
    } else {}
  };

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
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mt-2 text-sm font-bold",
          children: "\u0645\u0627\u0634\u06CC\u0646 \u0627\u06CC\u0631\u0627\u0646"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white w-80 h-auto mt-2 rounded-xl shadow-2xl p-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-red-50 h-12 w-auto rounded-full ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-between px-3 ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-white text-xs mt-1 mr-2",
                children: "\u0648\u0631\u0648\u062F / \u0639\u0636\u0648\u06CC\u062A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white mt-3 rounded-full w-6 flex justify-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {
                className: "mt-1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " ".concat(login == 'l1' ? 'block' : 'hidden', " text-right mt-8 text-xs"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            dir: "ltr",
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-70  mt-5 text-brown-50 text-lg outline-none p-3",
            defaultValue: "09"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " ".concat(login == 'l2' ? 'block' : 'hidden', " text-right mt-12 text-xs "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center ml-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "",
              children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u06A9\u062F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mr-3 text-gren-50",
              children: "09104866595"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-5 flex justify-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_code_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
              fields: 4,
              type: "tel",
              inputStyle: {
                direction: 'ltr',
                textAlign: 'center',
                outline: 'none',
                margin: '4px',
                MozAppearance: 'textfield',
                width: '40px',
                borderRadius: '50%',
                font: 'bold',
                fontSize: '20px',
                height: '40px',
                backgroundColor: 'white',
                color: '#FF5800',
                border: '2px solid #FF5800',
                fontWeight: 'bold'
              },
              pattern: "/^\\d+$/",
              name: 'code',
              inputMode: "numeric",
              autoFocus: true,
              isValid: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center mt-3",
            children: ["\u0627\u0631\u0633\u0627\u0644 \u062F\u0648\u0628\u0627\u0631\u0647 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-gren-50 mr-5",
              children: "01:00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 42
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " ".concat(login == 'l3' ? 'block' : 'hidden', " text-right mt-12 text-xs"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-70 mt-5 placeholder-brown-50 text-right text-xs outline-none p-3",
            placeholder: "\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 149,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: handleBack,
            className: "bg-white text-red-50 border border-red-50 p-3 rounded-full w-32 outline-none",
            style: {
              outline: 'none'
            },
            children: "\u0628\u0627\u0632\u06AF\u0634\u062A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(Auth, "0K/WEGrZGTsaGKJvfa1wKc5ViMU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Auth;
/* harmony default export */ __webpack_exports__["default"] = (Auth);

var _c;

$RefreshReg$(_c, "Auth");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkF1dGgiLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJ0aW1lcyIsInNldFRpbWVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiaGFuZGxlQmFjayIsImRpcmVjdGlvbiIsInRleHRBbGlnbiIsIm91dGxpbmUiLCJtYXJnaW4iLCJNb3pBcHBlYXJhbmNlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250IiwiZm9udFNpemUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFRLEdBQUcsU0FBWEEsSUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQVMsSUFBVCxDQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUhtQixDQUtuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJTixLQUFLLElBQUksSUFBYixFQUFtQjtBQUNmQyxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUVPLElBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ3RCQyxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGTSxNQUVBLElBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ3RCTyxvQkFBYyxDQUFD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O0FBQUEsK0ZBS2tCLEdBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVFJO0FBQ0ksbUJBQU8sRUFBRUgsVUFEYjtBQUVJLHFCQUFTLEVBQUMsOEVBRmQ7QUFHSSxpQkFBSyxFQUFFO0FBQUVHLHFCQUFPLEVBQUU7QUFBWCxhQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkhILENBOUpEOztHQUFNZixJO1VBR2FPLHFEOzs7S0FIYlAsSTtBQWdLU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNWNlM2E4ZDIyZjBiNjQ1Njc1YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUaW1lciB9IGZyb20gJ3JlYWN0LXRpbWVyLWhvb2snO1xyXG5cclxuaW1wb3J0IFVzZXJJY29uIGZyb20gJ0Bhc3NldHMvc3ZnL3VzZXItaWNvbi5zdmcnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQGFzc2V0cy9zdmcvY2xvc2Uuc3ZnJztcclxuXHJcbmltcG9ydCBSZWFjdENvZGVJbnB1dCBmcm9tICdyZWFjdC1jb2RlLWlucHV0JztcclxuXHJcbmNvbnN0IEF1dGg6IEZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdsMScpO1xyXG4gICAgY29uc3QgW3RpbWVzLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIC8vIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDYwKTtcclxuICAgIC8vIGNvbnN0IHsgc2Vjb25kcywgbWludXRlcyB9ID0gdXNlVGltZXIoe1xyXG4gICAgLy8gICAgIGV4cGlyeVRpbWVzdGFtcDogdGltZSxcclxuICAgIC8vICAgICBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dpbiA9PSAnbDEnKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9naW4gPT0gJ2wyJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDMnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvZ2luID09ICdsMycpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsICdsb2dpbicpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dpbiA9PSAnbDMnKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9naW4gPT0gJ2wyJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBiZy1yZWQtMTAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGZsZXgganVzdGlmeS1jZW50ZXJcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gZm9udC1ib2xkXCI+2YXYp9i024zZhiDYp9uM2LHYp9mGPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctODAgaC1hdXRvIG10LTIgcm91bmRlZC14bCBzaGFkb3ctMnhsIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIGgtMTIgdy1hdXRvIHJvdW5kZWQtZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14cyBtdC0xIG1yLTJcIj7ZiNix2YjYryAvINi52LbZiNuM2Ko8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtdC0zIHJvdW5kZWQtZnVsbCB3LTYgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBjbGFzc05hbWU9XCJtdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtsb2dpbiA9PSAnbDEnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfSB0ZXh0LXJpZ2h0IG10LTggdGV4dC14c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ZiNin2LHYryDaqdix2K/ZhiDYtNmF2KfYsdmHINmH2YXYsdin2Yc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPVwibHRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctNzAgIG10LTUgdGV4dC1icm93bi01MCB0ZXh0LWxnIG91dGxpbmUtbm9uZSBwLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbiA9PSAnbDInID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGV4dC1yaWdodCBtdC0xMiB0ZXh0LXhzIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWwtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+2YjYp9ix2K8g2qnYsdiv2YYg2qnYrzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1ncmVuLTUwXCI+MDkxMDQ4NjY1OTU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENvZGVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2x0cicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW96QXBwZWFyYW5jZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRkY1ODAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNGRjU4MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiL15cXGQrJC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eydjb2RlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTIgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC1yZWQtNTAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtcmVkLTUwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfYsdiz2KfZhCDYr9mI2KjYp9ix2YcgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVuLTUwIG1yLTVcIj4wMTowMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbiA9PSAnbDMnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGV4dC1yaWdodCBtdC0xMiB0ZXh0LXhzYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmI2KfYsdivINqp2LHYr9mGINmG2KfZhSDZiCDZhtin2YUg2K7Yp9mG2YjYp9iv2q/bjDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTcwIG10LTUgcGxhY2Vob2xkZXItYnJvd24tNTAgdGV4dC1yaWdodCB0ZXh0LXhzIG91dGxpbmUtbm9uZSBwLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLZhNi32YHYpyDZhtin2YUg2Ygg2YbYp9mFINiu2KfZhtmI2KfYr9qv24wg2K7ZiNivINix2Kcg2YjYp9ix2K8g2qnZhtuM2K9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTYgdGV4dC14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MCBwLTMgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgdy0zMiBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINiq2KfbjNuM2K8g2Ygg2KfYr9in2YXZh3snICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1yZWQtNTAgYm9yZGVyIGJvcmRlci1yZWQtNTAgcC0zIHJvdW5kZWQtZnVsbCB3LTMyIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjYp9iy2q/YtNiqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
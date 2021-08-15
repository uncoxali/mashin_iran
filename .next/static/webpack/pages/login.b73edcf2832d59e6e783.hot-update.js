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
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-timer-hook */ "./node_modules/react-timer-hook/dist/index.js");
/* harmony import */ var react_timer_hook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_timer_hook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/svg/user-icon.svg */ "./assets/svg/user-icon.svg");
/* harmony import */ var _assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/svg/close.svg */ "./assets/svg/close.svg");
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\pages\\login\\index.tsx",
    _this = undefined,
    _s3 = $RefreshSig$();







var Auth = function Auth() {
  _s3();

  var _s = $RefreshSig$(),
      _s2 = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('l1'),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      times = _useState2[0],
      setTimer = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var timer = function timer() {
    _s();

    var time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    var timer = Object(react_timer_hook__WEBPACK_IMPORTED_MODULE_3__["useTimer"])({
      expiryTimestamp: time,
      onExpire: function onExpire() {
        return console.warn('onExpire called');
      }
    });
    console.log(timer);
  };

  _s(timer, "HwFlJAPsY3sp8LUdGVJr45T4B2A=", false, function () {
    return [react_timer_hook__WEBPACK_IMPORTED_MODULE_3__["useTimer"]];
  });

  var handleClick = function handleClick() {
    _s2();

    if (login == 'l1') {
      setLogin('l2');
      var time = new Date();
      time.setSeconds(time.getSeconds() + 60);

      var _timer = Object(react_timer_hook__WEBPACK_IMPORTED_MODULE_3__["useTimer"])({
        expiryTimestamp: time,
        onExpire: function onExpire() {
          return console.warn('onExpire called');
        }
      });

      setTimer(_timer);
    } else if (login == 'l2') {
      setLogin('l3');
    } else if (login == 'l3') {
      sessionStorage.setItem('name', 'login');
      router.push('/');
    } else {}
  };

  _s2(handleClick, "HwFlJAPsY3sp8LUdGVJr45T4B2A=", false, function () {
    return [react_timer_hook__WEBPACK_IMPORTED_MODULE_3__["useTimer"]];
  });

  var handleBack = function handleBack() {
    if (login == 'l3') {
      setLogin('l2');
    } else if (login == 'l2') {
      setLogin('l1');
    } else {}
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-screen bg-red-100 flex justify-center items-center",
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
          lineNumber: 56,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mt-2 text-sm font-bold",
          children: "\u0645\u0627\u0634\u06CC\u0646 \u0627\u06CC\u0631\u0627\u0646"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white w-80 h-auto mt-3 rounded-xl shadow-2xl p-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-red-50 h-12 w-auto rounded-full ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-between px-3 ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_user_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text-white text-xs mt-1 mr-2",
                children: "\u0648\u0631\u0648\u062F / \u0639\u0636\u0648\u06CC\u062A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "bg-white mt-3 rounded-full w-6 flex justify-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
                className: "mt-1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " ".concat(login == 'l1' ? 'block' : 'hidden', " text-right mt-12 text-xs"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-72 mt-5 placeholder-brown-50 text-left text-lg outline-none p-3",
            placeholder: "9 0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
              lineNumber: 92,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "mr-3 text-gren-50",
              children: "09104866595"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-5 flex justify-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "border border-red-50 rounded-full h-10 w-10 ml-2 outline-none text-center text-lg text-red-50 font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "border border-red-50 rounded-full h-10 w-10 ml-2 outline-none text-center text-lg text-red-50 font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "border border-red-50 rounded-full h-10 w-10 ml-2 outline-none text-center text-lg text-red-50 font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "border border-red-50 rounded-full h-10 w-10 ml-2 outline-none text-center text-lg text-red-50 font-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center mt-3",
            children: ["\u0627\u0631\u0633\u0627\u0644 \u062F\u0648\u0628\u0627\u0631\u0647", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-gren-50 mr-5",
              children: (times === null || times === void 0 ? void 0 : times.seconds) + ' : ' + (times === null || times === void 0 ? void 0 : times.minutes)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: " ".concat(login == 'l3' ? 'block' : 'hidden', " text-right mt-12 text-xs"),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "border border-red-50 rounded-full h-10 w-72 mt-5 placeholder-brown-50 text-right text-xs outline-none p-3",
            placeholder: "\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
            lineNumber: 136,
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
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s3(Auth, "0K/WEGrZGTsaGKJvfa1wKc5ViMU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkF1dGgiLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJ0aW1lcyIsInNldFRpbWVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidGltZXIiLCJ0aW1lIiwiRGF0ZSIsInNldFNlY29uZHMiLCJnZXRTZWNvbmRzIiwidXNlVGltZXIiLCJleHBpcnlUaW1lc3RhbXAiLCJvbkV4cGlyZSIsImNvbnNvbGUiLCJ3YXJuIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiaGFuZGxlQmFjayIsInNlY29uZHMiLCJtaW51dGVzIiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFTLElBQVQsQ0FEbkI7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFBQSxtQkFFV0Ysc0RBQVEsRUFGbkI7QUFBQSxNQUVSRyxLQUZRO0FBQUEsTUFFREMsUUFGQzs7QUFHZixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLEtBQUssR0FBRyxpQkFBTTtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0FELFFBQUksQ0FBQ0UsVUFBTCxDQUFnQkYsSUFBSSxDQUFDRyxVQUFMLEtBQW9CLEVBQXBDO0FBQ0EsUUFBTUosS0FBSyxHQUFHSyxpRUFBUSxDQUFDO0FBQ25CQyxxQkFBZSxFQUFFTCxJQURFO0FBRW5CTSxjQUFRLEVBQUU7QUFBQSxlQUFNQyxPQUFPLENBQUNDLElBQVIsQ0FBYSxpQkFBYixDQUFOO0FBQUE7QUFGUyxLQUFELENBQXRCO0FBS0FELFdBQU8sQ0FBQ0UsR0FBUixDQUFZVixLQUFaO0FBQ0gsR0FURDs7QUFMZSxLQUtUQSxLQUxTO0FBQUEsWUFRR0sseURBUkg7QUFBQTs7QUFnQmYsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixRQUFJakIsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDZkMsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBLFVBQU1NLElBQUksR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQUQsVUFBSSxDQUFDRSxVQUFMLENBQWdCRixJQUFJLENBQUNHLFVBQUwsS0FBb0IsRUFBcEM7O0FBQ0EsVUFBTUosTUFBSyxHQUFHSyxpRUFBUSxDQUFDO0FBQ25CQyx1QkFBZSxFQUFFTCxJQURFO0FBRW5CTSxnQkFBUSxFQUFFO0FBQUEsaUJBQU1DLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGlCQUFiLENBQU47QUFBQTtBQUZTLE9BQUQsQ0FBdEI7O0FBS0FaLGNBQVEsQ0FBQ0csTUFBRCxDQUFSO0FBQ0gsS0FWRCxNQVVPLElBQUlOLEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ3RCQyxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGTSxNQUVBLElBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ3RCa0Isb0JBQWMsQ0FBQ0MsT0FBZixDQUF1QixNQUF2QixFQUErQixPQUEvQjtBQUNBZixZQUFNLENBQUNnQixJQUFQLENBQVksR0FBWjtBQUNILEtBSE0sTUFHQSxDQUNOO0FBQ0osR0FsQkQ7O0FBaEJlLE1BZ0JUSCxXQWhCUztBQUFBLFlBcUJPTix5REFyQlA7QUFBQTs7QUFvQ2YsTUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJckIsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDZkMsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEtBRkQsTUFFTyxJQUFJRCxLQUFLLElBQUksSUFBYixFQUFtQjtBQUN0QkMsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEtBRk0sTUFFQSxDQUNOO0FBQ0osR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBK0MsYUFBRyxFQUFDLGtCQUFuRDtBQUFzRSxhQUFHLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBT0k7QUFBSyxpQkFBUyxFQUFDLHFEQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQUssdUJBQVMsRUFBQyxvREFBZjtBQUFBLHFDQUNJLHFFQUFDLDREQUFEO0FBQU8seUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBYUk7QUFDSSxtQkFBUyxhQUNMRCxLQUFLLElBQUksSUFBVCxHQUFnQixPQUFoQixHQUEwQixRQURyQiw4QkFEYjtBQUFBLGtDQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFDSSxnQkFBSSxFQUFDLE1BRFQ7QUFFSSxxQkFBUyxFQUFDLDBHQUZkO0FBR0ksdUJBQVcsRUFBQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixlQXlCSTtBQUNJLG1CQUFTLGFBQ0xBLEtBQUssSUFBSSxJQUFULEdBQWdCLE9BQWhCLEdBQTBCLFFBRHJCLCtCQURiO0FBQUEsa0NBS0k7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFHLHVCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUk7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsb0NBQ0k7QUFDSSxrQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBUyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJO0FBQ0ksa0JBQUksRUFBQyxNQURUO0FBRUksdUJBQVMsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFTSTtBQUNJLGtCQUFJLEVBQUMsTUFEVDtBQUVJLHVCQUFTLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBYUk7QUFDSSxrQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBUyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUE0Qkk7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsOEZBQ2lCLEdBRGpCLGVBRUk7QUFBTSx1QkFBUyxFQUFDLG1CQUFoQjtBQUFBLHdCQUNLLENBQUFFLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFFb0IsT0FBUCxJQUFpQixLQUFqQixJQUF5QnBCLEtBQXpCLGFBQXlCQSxLQUF6Qix1QkFBeUJBLEtBQUssQ0FBRXFCLE9BQWhDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkosZUE2REk7QUFDSSxtQkFBUyxhQUNMdkIsS0FBSyxJQUFJLElBQVQsR0FBZ0IsT0FBaEIsR0FBMEIsUUFEckIsOEJBRGI7QUFBQSxrQ0FLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUkscUJBQVMsRUFBQywyR0FGZDtBQUdJLHVCQUFXLEVBQUM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0RKLGVBMEVJO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtDQUNJO0FBQ0ksbUJBQU8sRUFBRWlCLFdBRGI7QUFFSSxxQkFBUyxFQUFDLHlEQUZkO0FBR0ksaUJBQUssRUFBRTtBQUFFTyxxQkFBTyxFQUFFO0FBQVgsYUFIWDtBQUFBLCtGQUtrQixHQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFRSTtBQUNJLG1CQUFPLEVBQUVILFVBRGI7QUFFSSxxQkFBUyxFQUFDLDhFQUZkO0FBR0ksaUJBQUssRUFBRTtBQUFFRyxxQkFBTyxFQUFFO0FBQVgsYUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVHSCxDQXBKRDs7SUFBTTFCLEk7VUFHYU8scUQ7OztLQUhiUCxJO0FBc0pTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5iNzNlZGNmMjgzMmQ1OWU2ZTc4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVGltZXIgfSBmcm9tICdyZWFjdC10aW1lci1ob29rJztcclxuaW1wb3J0IFVzZXJJY29uIGZyb20gJ0Bhc3NldHMvc3ZnL3VzZXItaWNvbi5zdmcnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQGFzc2V0cy9zdmcvY2xvc2Uuc3ZnJztcclxuXHJcbmNvbnN0IEF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2wxJyk7XHJcbiAgICBjb25zdCBbdGltZXMsIHNldFRpbWVyXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDYwKTtcclxuICAgICAgICBjb25zdCB0aW1lciA9IHVzZVRpbWVyKHtcclxuICAgICAgICAgICAgZXhwaXJ5VGltZXN0YW1wOiB0aW1lLFxyXG4gICAgICAgICAgICBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGltZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAobG9naW4gPT0gJ2wxJykge1xyXG4gICAgICAgICAgICBzZXRMb2dpbignbDInKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRpbWUuc2V0U2Vjb25kcyh0aW1lLmdldFNlY29uZHMoKSArIDYwKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSB1c2VUaW1lcih7XHJcbiAgICAgICAgICAgICAgICBleHBpcnlUaW1lc3RhbXA6IHRpbWUsXHJcbiAgICAgICAgICAgICAgICBvbkV4cGlyZTogKCkgPT4gY29uc29sZS53YXJuKCdvbkV4cGlyZSBjYWxsZWQnKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lcih0aW1lcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpbiA9PSAnbDInKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobG9naW4gPT0gJ2wzJykge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ2luID09ICdsMycpIHtcclxuICAgICAgICAgICAgc2V0TG9naW4oJ2wyJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpbiA9PSAnbDInKSB7XHJcbiAgICAgICAgICAgIHNldExvZ2luKCdsMScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLXJlZC0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMjAgaC0yMCBmbGV4IGp1c3RpZnktY2VudGVyXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIGZvbnQtYm9sZFwiPtmF2KfYtNuM2YYg2KfbjNix2KfZhjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LTgwIGgtYXV0byBtdC0zIHJvdW5kZWQteGwgc2hhZG93LTJ4bCBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MCBoLTEyIHctYXV0byByb3VuZGVkLWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteHMgbXQtMSBtci0yXCI+2YjYsdmI2K8gLyDYudi22YjbjNiqPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbXQtMyByb3VuZGVkLWZ1bGwgdy02IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2UgY2xhc3NOYW1lPVwibXQtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbiA9PSAnbDEnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gdGV4dC1yaWdodCBtdC0xMiB0ZXh0LXhzYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmI2KfYsdivINqp2LHYr9mGINi02YXYp9ix2Ycg2YfZhdix2KfZhzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTcyIG10LTUgcGxhY2Vob2xkZXItYnJvd24tNTAgdGV4dC1sZWZ0IHRleHQtbGcgb3V0bGluZS1ub25lIHAtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjkgMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luID09ICdsMicgPyAnYmxvY2snIDogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB0ZXh0LXJpZ2h0IG10LTEyIHRleHQteHMgYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtbC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj7ZiNin2LHYryDaqdix2K/ZhiDaqdivPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMyB0ZXh0LWdyZW4tNTBcIj4wOTEwNDg2NjU5NTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXJlZC01MCByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIG1sLTIgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC1yZWQtNTAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy0xMCBtbC0yIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtcmVkLTUwIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcmVkLTUwIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgbWwtMiBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXJlZC01MCBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9ix2LPYp9mEINiv2YjYqNin2LHZh3snICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZW4tNTAgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lcz8uc2Vjb25kcyArICcgOiAnICsgdGltZXM/Lm1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW4gPT0gJ2wzJyA/ICdibG9jaycgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHRleHQtcmlnaHQgbXQtMTIgdGV4dC14c2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7ZiNin2LHYryDaqdix2K/ZhiDZhtin2YUg2Ygg2YbYp9mFINiu2KfZhtmI2KfYr9qv24w8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1yZWQtNTAgcm91bmRlZC1mdWxsIGgtMTAgdy03MiBtdC01IHBsYWNlaG9sZGVyLWJyb3duLTUwIHRleHQtcmlnaHQgdGV4dC14cyBvdXRsaW5lLW5vbmUgcC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2YTYt9mB2Kcg2YbYp9mFINmIINmG2KfZhSDYrtin2YbZiNin2K/ar9uMINiu2YjYryDYsdinINmI2KfYsdivINqp2YbbjNivXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC02IHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAgcC0zIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHctMzIgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYqtin24zbjNivINmIINin2K/Yp9mF2Yd7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTUwIHAtMyByb3VuZGVkLWZ1bGwgdy0zMiBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3V0bGluZTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINio2KfYstqv2LTYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
              children: filter.price ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ui_MultiRange__WEBPACK_IMPORTED_MODULE_6__["default"], {
                min: 0,
                max: 1000,
                onChange: function onChange(_ref2) {
                  var min = _ref2.min,
                      max = _ref2.max;
                  return console.log("min = ".concat(min, ", max = ").concat(max));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 41
              }, _this) : null
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
                lineNumber: 61,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "-mt-1",
                children: [filter.arrow, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: " bg-watusi-250 w-full ",
              style: {
                height: '1px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluZGV4Iiwic2hvdyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwiRmlsdGVyIiwiRmlsdGVyRXhoaWJpdGlvbiIsIm1hcCIsImZpbHRlciIsImljb24iLCJ0aXRsZSIsImxpbmUiLCJwcmljZSIsIm1pbiIsIm1heCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYXJyb3ciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxLQUFnQixHQUFHLFNBQW5CQSxLQUFtQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1DLHdCQUdMQyw0Q0FBSyxDQUFDQyxRQUFOLEVBSEs7QUFBQTtBQUFBLE1BRzVCQyxPQUg0QjtBQUFBLE1BR25CQyxVQUhtQjs7QUFLbkNILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQixRQUFJTixNQUFNLENBQUNPLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJGLGdCQUFVLENBQUNHLCtDQUFELENBQVY7QUFDSCxLQUZELE1BRU87QUFDSEgsZ0JBQVUsQ0FBQ0kseURBQUQsQ0FBVjtBQUNIO0FBQ0osR0FORDtBQVFBLHNCQUNJO0FBQUEsMkJBQ0k7QUFDSSxlQUFTLGFBQ0xWLElBQUksR0FDRSxzREFERixHQUVFLDRDQUhELHNDQURiO0FBQUEsZ0JBT0tBLElBQUksZ0JBQ0Q7QUFBSyxpQkFBUywyQkFBZDtBQUFBLGtCQUNLSyxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRU0sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBY2IsS0FBZDtBQUFBLDhCQUNWO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUF1QmEsTUFBTSxDQUFDQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBRyx5QkFBUyxFQUFDLFdBQWI7QUFBQSwwQkFBMEJELE1BQU0sQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSTtBQUNJLHVCQUFTLFlBQ0xGLE1BQU0sQ0FBQ0csSUFBUCw2QkFBd0MsRUFEbkMsWUFEYjtBQUFBLHdCQUtLSCxNQUFNLENBQUNJLEtBQVAsZ0JBQ0cscUVBQUMsaUVBQUQ7QUFDSSxtQkFBRyxFQUFFLENBRFQ7QUFFSSxtQkFBRyxFQUFFLElBRlQ7QUFHSSx3QkFBUSxFQUFFO0FBQUEsc0JBQ05DLEdBRE0sU0FDTkEsR0FETTtBQUFBLHNCQUVOQyxHQUZNLFNBRU5BLEdBRk07QUFBQSx5QkFNSkMsT0FBTyxDQUFDQyxHQUFSLGlCQUFxQkgsR0FBckIscUJBQW1DQyxHQUFuQyxFQU5JO0FBQUE7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURILEdBWUc7QUFqQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQXdCSTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDSTtBQUFHLHlCQUFTLEVBQUMsWUFBYjtBQUFBLDBCQUEyQk4sTUFBTSxDQUFDUztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBTSx5QkFBUyxFQUFDLE9BQWhCO0FBQUEsMkJBQXlCVCxNQUFNLENBQUNVLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJKLGVBNEJJO0FBQ0ksdUJBQVMsMEJBRGI7QUFFSSxtQkFBSyxFQUFFO0FBQUVDLHNCQUFNLEVBQUU7QUFBVjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNUJKO0FBQUEsYUFBOEJ4QixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQyxHQXNDRDtBQTdDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtREgsQ0FoRUQ7O0dBQU1BLEs7VUFDYUcscUQ7OztBQWlFSkgsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhoaWJpdGlvbi45NjlkNTI2Y2ZjNWM5OTUyZTNiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgRmlsdGVyRXhoaWJpdGlvbiBmcm9tICcuL2ZpbHRlckV4aGliaXRpb24nO1xyXG5pbXBvcnQgTXVsdGlSYW5nZVNsaWRlciBmcm9tICdAY29tcG9uZW50cy91aS9NdWx0aVJhbmdlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzaG93PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZDPFByb3BzPiA9ICh7IHNob3cgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8YW55PigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcnMoRmlsdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJzKEZpbHRlckV4aGliaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdy02MCBoLWF1dG8gYmctd2hpdGUgcC0zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgIHctMCAgYmctd2hpdGUnXHJcbiAgICAgICAgICAgICAgICB9IHJvdy1zcGFuLTEgcm91bmRlZC1sZyBzaGFkb3ctMnhsYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Agcm93LXNwYW4tMSByb3VuZGVkLWxnIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycz8ubWFwKChmaWx0ZXI6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+e2ZpbHRlci5pY29ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0xIG10LTJcIj57ZmlsdGVyLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubGluZSA/IGBoLTExIGJnLXJlZC01MCB3LWZ1bGxgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIG10LTNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlci5wcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVJhbmdlU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gY29uc29sZS5sb2coYG1pbiA9ICR7bWlufSwgbWF4ID0gJHttYXh9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTggLW10LTJcIj57ZmlsdGVyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCItbXQtMVwiPntmaWx0ZXIuYXJyb3d9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBiZy13YXR1c2ktMjUwIHctZnVsbCBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
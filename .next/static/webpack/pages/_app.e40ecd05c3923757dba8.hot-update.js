webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/react-query/es/hydration/hydration.js":
/*!************************************************************!*\
  !*** ./node_modules/react-query/es/hydration/hydration.js ***!
  \************************************************************/
/*! exports provided: dehydrate, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return dehydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}

function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}

function dehydrate(client, options) {
  var _options, _options2;

  options = options || {};
  var mutations = [];
  var queries = [];

  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function (mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function (query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations: mutations,
    queries: queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function (dehydratedMutation) {
    var _options$defaultOptio;

    mutationCache.build(client, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function (dehydratedQuery) {
    var _options$defaultOptio2;

    var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }

      return;
    } // Restore query


    queryCache.build(client, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

/***/ }),

/***/ "./node_modules/react-query/es/hydration/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/hydration/index.js ***!
  \********************************************************/
/*! exports provided: dehydrate, hydrate, useHydrate, Hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydration */ "./node_modules/react-query/es/hydration/hydration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dehydrate", function() { return _hydration__WEBPACK_IMPORTED_MODULE_0__["dehydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _hydration__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./node_modules/react-query/es/hydration/react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHydrate", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useHydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hydrate", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["Hydrate"]; });


 // Types

/***/ }),

/***/ "./node_modules/react-query/es/hydration/react.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/hydration/react.js ***!
  \********************************************************/
/*! exports provided: useHydrate, Hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHydrate", function() { return useHydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hydrate", function() { return Hydrate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hydration */ "./node_modules/react-query/es/hydration/hydration.js");



function useHydrate(state, options) {
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  var optionsRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(options);
  optionsRef.current = options; // Running hydrate again with the same queries is safe,
  // it wont overwrite or initialize existing queries,
  // relying on useMemo here is only a performance optimization.
  // hydrate can and should be run *during* render here for SSR to work properly

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    if (state) {
      Object(_hydration__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(queryClient, state, optionsRef.current);
    }
  }, [queryClient, state]);
}
var Hydrate = function Hydrate(_ref) {
  var children = _ref.children,
      options = _ref.options,
      state = _ref.state;
  useHydrate(state, options);
  return children;
};

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/styles/main.css */ "./assets/styles/main.css");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/index */ "./store/index.ts");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query/hydration */ "./node_modules/react-query/es/hydration/index.js");


var _jsxFileName = "C:\\Users\\Ali\\Desktop\\MashinIran\\mashin_iran\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__["QueryClient"]();

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_query__WEBPACK_IMPORTED_MODULE_5__["QueryClientProvider"], {
    client: queryClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_query_hydration__WEBPACK_IMPORTED_MODULE_6__["Hydrate"], {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaHlkcmF0aW9uL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2h5ZHJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2h5ZHJhdGlvbi9yZWFjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGVoeWRyYXRlZFN0YXRlIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQTBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxrRkFBUSxHQUFHO0FBQzNDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTCw2QkFBNkIsa0ZBQVEsR0FBRztBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNILFM7Ozs7Ozs7Ozs7OztBQ0Q5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNtQjtBQUNQO0FBQy9CO0FBQ1Asb0JBQW9CLGtFQUFjO0FBQ2xDLG1CQUFtQiw0Q0FBSztBQUN4QiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBLEVBQUUsNENBQUs7QUFDUDtBQUNBLE1BQU0sMERBQU87QUFDYjtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFJQyx1REFBSixFQUFwQjs7QUFFQSxTQUFTQyxLQUFULE9BQW1EO0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFDL0Msc0JBQ0kscUVBQUMsK0RBQUQ7QUFBcUIsVUFBTSxFQUFFSixXQUE3QjtBQUFBLDJCQUNJLHFFQUFDLDZEQUFEO0FBQVMsV0FBSyxFQUFFSSxTQUFTLENBQUNDLGVBQTFCO0FBQUEsNkJBQ0kscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQVJRRixLO0FBVU0scUVBQUFJLG9EQUFPLENBQUNDLFNBQVIsQ0FBa0JMLEtBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNDBlY2QwNWMzOTIzNzU3ZGJhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5cbi8vIFRZUEVTXG4vLyBGVU5DVElPTlNcbmZ1bmN0aW9uIGRlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25LZXk6IG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXksXG4gICAgc3RhdGU6IG11dGF0aW9uLnN0YXRlXG4gIH07XG59IC8vIE1vc3QgY29uZmlnIGlzIG5vdCBkZWh5ZHJhdGVkIGJ1dCBpbnN0ZWFkIG1lYW50IHRvIGNvbmZpZ3VyZSBhZ2FpbiB3aGVuXG4vLyBjb25zdW1pbmcgdGhlIGRlL3JlaHlkcmF0ZWQgZGF0YSwgdHlwaWNhbGx5IHdpdGggdXNlUXVlcnkgb24gdGhlIGNsaWVudC5cbi8vIFNvbWV0aW1lcyBpdCBtaWdodCBtYWtlIHNlbnNlIHRvIHByZWZldGNoIGRhdGEgb24gdGhlIHNlcnZlciBhbmQgaW5jbHVkZVxuLy8gaW4gdGhlIGh0bWwtcGF5bG9hZCwgYnV0IG5vdCBjb25zdW1lIGl0IG9uIHRoZSBpbml0aWFsIHJlbmRlci5cblxuXG5mdW5jdGlvbiBkZWh5ZHJhdGVRdWVyeShxdWVyeSkge1xuICByZXR1cm4ge1xuICAgIHN0YXRlOiBxdWVyeS5zdGF0ZSxcbiAgICBxdWVyeUtleTogcXVlcnkucXVlcnlLZXksXG4gICAgcXVlcnlIYXNoOiBxdWVyeS5xdWVyeUhhc2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiBtdXRhdGlvbi5zdGF0ZS5pc1BhdXNlZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiBxdWVyeS5zdGF0ZS5zdGF0dXMgPT09ICdzdWNjZXNzJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlaHlkcmF0ZShjbGllbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zLCBfb3B0aW9uczI7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBtdXRhdGlvbnMgPSBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBpZiAoKChfb3B0aW9ucyA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9ucy5kZWh5ZHJhdGVNdXRhdGlvbnMpICE9PSBmYWxzZSkge1xuICAgIHZhciBzaG91bGREZWh5ZHJhdGVNdXRhdGlvbiA9IG9wdGlvbnMuc2hvdWxkRGVoeWRyYXRlTXV0YXRpb24gfHwgZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uO1xuICAgIGNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuZ2V0QWxsKCkuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIGlmIChzaG91bGREZWh5ZHJhdGVNdXRhdGlvbihtdXRhdGlvbikpIHtcbiAgICAgICAgbXV0YXRpb25zLnB1c2goZGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICgoKF9vcHRpb25zMiA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9uczIuZGVoeWRyYXRlUXVlcmllcykgIT09IGZhbHNlKSB7XG4gICAgdmFyIHNob3VsZERlaHlkcmF0ZVF1ZXJ5ID0gb3B0aW9ucy5zaG91bGREZWh5ZHJhdGVRdWVyeSB8fCBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlUXVlcnk7XG4gICAgY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgaWYgKHNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSkge1xuICAgICAgICBxdWVyaWVzLnB1c2goZGVoeWRyYXRlUXVlcnkocXVlcnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25zOiBtdXRhdGlvbnMsXG4gICAgcXVlcmllczogcXVlcmllc1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY2xpZW50LCBkZWh5ZHJhdGVkU3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkZWh5ZHJhdGVkU3RhdGUgIT09ICdvYmplY3QnIHx8IGRlaHlkcmF0ZWRTdGF0ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtdXRhdGlvbkNhY2hlID0gY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKTtcbiAgdmFyIHF1ZXJ5Q2FjaGUgPSBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpO1xuICB2YXIgbXV0YXRpb25zID0gZGVoeWRyYXRlZFN0YXRlLm11dGF0aW9ucyB8fCBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBkZWh5ZHJhdGVkU3RhdGUucXVlcmllcyB8fCBbXTtcbiAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlaHlkcmF0ZWRNdXRhdGlvbikge1xuICAgIHZhciBfb3B0aW9ucyRkZWZhdWx0T3B0aW87XG5cbiAgICBtdXRhdGlvbkNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8gPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbnMkZGVmYXVsdE9wdGlvLm11dGF0aW9ucywge1xuICAgICAgbXV0YXRpb25LZXk6IGRlaHlkcmF0ZWRNdXRhdGlvbi5tdXRhdGlvbktleVxuICAgIH0pLCBkZWh5ZHJhdGVkTXV0YXRpb24uc3RhdGUpO1xuICB9KTtcbiAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWh5ZHJhdGVkUXVlcnkpIHtcbiAgICB2YXIgX29wdGlvbnMkZGVmYXVsdE9wdGlvMjtcblxuICAgIHZhciBxdWVyeSA9IHF1ZXJ5Q2FjaGUuZ2V0KGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUhhc2gpOyAvLyBEbyBub3QgaHlkcmF0ZSBpZiBhbiBleGlzdGluZyBxdWVyeSBleGlzdHMgd2l0aCBuZXdlciBkYXRhXG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0IDwgZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQpIHtcbiAgICAgICAgcXVlcnkuc2V0U3RhdGUoZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzdG9yZSBxdWVyeVxuXG5cbiAgICBxdWVyeUNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8yID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zJGRlZmF1bHRPcHRpbzIucXVlcmllcywge1xuICAgICAgcXVlcnlLZXk6IGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUtleSxcbiAgICAgIHF1ZXJ5SGFzaDogZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5SGFzaFxuICAgIH0pLCBkZWh5ZHJhdGVkUXVlcnkuc3RhdGUpO1xuICB9KTtcbn0iLCJleHBvcnQgeyBkZWh5ZHJhdGUsIGh5ZHJhdGUgfSBmcm9tICcuL2h5ZHJhdGlvbic7XG5leHBvcnQgeyB1c2VIeWRyYXRlLCBIeWRyYXRlIH0gZnJvbSAnLi9yZWFjdCc7IC8vIFR5cGVzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJy4vaHlkcmF0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VIeWRyYXRlKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBvcHRpb25zUmVmID0gUmVhY3QudXNlUmVmKG9wdGlvbnMpO1xuICBvcHRpb25zUmVmLmN1cnJlbnQgPSBvcHRpb25zOyAvLyBSdW5uaW5nIGh5ZHJhdGUgYWdhaW4gd2l0aCB0aGUgc2FtZSBxdWVyaWVzIGlzIHNhZmUsXG4gIC8vIGl0IHdvbnQgb3ZlcndyaXRlIG9yIGluaXRpYWxpemUgZXhpc3RpbmcgcXVlcmllcyxcbiAgLy8gcmVseWluZyBvbiB1c2VNZW1vIGhlcmUgaXMgb25seSBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbi5cbiAgLy8gaHlkcmF0ZSBjYW4gYW5kIHNob3VsZCBiZSBydW4gKmR1cmluZyogcmVuZGVyIGhlcmUgZm9yIFNTUiB0byB3b3JrIHByb3Blcmx5XG5cbiAgUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBoeWRyYXRlKHF1ZXJ5Q2xpZW50LCBzdGF0ZSwgb3B0aW9uc1JlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtxdWVyeUNsaWVudCwgc3RhdGVdKTtcbn1cbmV4cG9ydCB2YXIgSHlkcmF0ZSA9IGZ1bmN0aW9uIEh5ZHJhdGUoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgdXNlSHlkcmF0ZShzdGF0ZSwgb3B0aW9ucyk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn07IiwiaW1wb3J0ICdAYXNzZXRzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJ2tlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3MnO1xuXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnQHN0b3JlL2luZGV4JztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBIeWRyYXRlIH0gZnJvbSAncmVhY3QtcXVlcnkvaHlkcmF0aW9uJztcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvSHlkcmF0ZT5cbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
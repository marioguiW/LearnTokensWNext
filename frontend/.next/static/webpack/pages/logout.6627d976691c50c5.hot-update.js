"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logout",{

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoutPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/HttpClient */ \"./services/auth/HttpClient.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/tokenService */ \"./services/auth/tokenService.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LogoutPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Função assíncrona dentro do useEffect\n        async function logout() {\n            try {\n                const resposta = await (0,_services_auth_HttpClient__WEBPACK_IMPORTED_MODULE_2__.HttpClient)(\"/api/refresh\", {\n                    method: \"DELETE\"\n                });\n                console.log(resposta);\n                _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_4__.tokenService.delete();\n                router.push(\"/\");\n            } catch (error) {\n                console.error(\"Erro ao fazer logout:\", error);\n            // Trate o erro conforme necessário\n            }\n        }\n        (async ()=>{})();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Voce est\\xe1 sendo redirecionado\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\unima\\\\OneDrive\\\\Documentos\\\\React\\\\NextAlura\\\\testando\\\\frontend\\\\pages\\\\logout.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(LogoutPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LogoutPage;\nvar _c;\n$RefreshReg$(_c, \"LogoutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1I7QUFDK0I7QUFDakI7QUFDcUI7QUFHN0MsU0FBU0s7O0lBQ3BCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QkgsZ0RBQVNBLENBQUM7UUFDTix3Q0FBd0M7UUFDeEMsZUFBZU87WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTU4scUVBQVVBLENBQUMsZ0JBQWdCO29CQUNoRE8sUUFBUTtnQkFDVjtnQkFFQUMsUUFBUUMsR0FBRyxDQUFDSDtnQkFFWkoscUVBQVlBLENBQUNRLE1BQU07Z0JBQ25CTixPQUFPTyxJQUFJLENBQUM7WUFDZCxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RKLFFBQVFJLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDLG1DQUFtQztZQUNyQztRQUNGO1FBQ0MsWUFFRDtJQUNGLEdBQUcsRUFBRTtJQUVQLHFCQUNJLDhEQUFDQztrQkFBSTs7Ozs7O0FBRWI7R0E1QndCVjs7UUFDTEYsa0RBQVNBOzs7S0FESkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9nb3V0LmpzeD80OTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoL0h0dHBDbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB0b2tlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2VcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ291dFBhZ2UoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBGdW7Dp8OjbyBhc3PDrW5jcm9uYSBkZW50cm8gZG8gdXNlRWZmZWN0XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9zdGEgPSBhd2FpdCBIdHRwQ2xpZW50KCcvYXBpL3JlZnJlc2gnLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3Bvc3RhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRva2VuU2VydmljZS5kZWxldGUoKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gZmF6ZXIgbG9nb3V0OlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIFRyYXRlIG8gZXJybyBjb25mb3JtZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAoYXN5bmMgKCk9PntcclxuXHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+Vm9jZSBlc3TDoSBzZW5kbyByZWRpcmVjaW9uYWRvPC9kaXY+ICAgIFxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlYWN0IiwiSHR0cENsaWVudCIsInVzZVJvdXRlciIsInRva2VuU2VydmljZSIsIkxvZ291dFBhZ2UiLCJyb3V0ZXIiLCJsb2dvdXQiLCJyZXNwb3N0YSIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGUiLCJwdXNoIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.jsx\n"));

/***/ })

});
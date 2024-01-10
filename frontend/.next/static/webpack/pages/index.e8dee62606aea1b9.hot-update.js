"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/auth/HttpClient.js":
/*!*************************************!*\
  !*** ./services/auth/HttpClient.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpClient: function() { return /* binding */ HttpClient; }\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/tokenService */ \"./services/auth/tokenService.js\");\n// Arquitetura Hexagonal\n\n\n// Ports & Adapters\nasync function HttpClient(fetchUrl) {\n    let fetchOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    const defaultHeaders = fetchOptions.headers || {};\n    const options = {\n        ...fetchOptions,\n        headers: {\n            \"Content-Type\": \"application/json\",\n            ...defaultHeaders\n        },\n        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null\n    };\n    return fetch(fetchUrl, options).then(async (respostaDoServidor)=>{\n        return {\n            ok: respostaDoServidor.ok,\n            status: respostaDoServidor.status,\n            statusText: respostaDoServidor.statusText,\n            body: await respostaDoServidor.json()\n        };\n    }).then(async (response)=>{\n        var _fetchOptions_ctx_req, _fetchOptions_ctx, _fetchOptions_ctx_req1, _fetchOptions_ctx1;\n        if (!fetchOptions.refresh) return response;\n        if (response.status !== 401) return response;\n        console.log(\"Middleware: Rodar c\\xf3digo para atualizar o token\");\n        const isServer = Boolean(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.ctx);\n        console.log(\"isServer\", isServer);\n        console.log(\"Testando Cookies :\", fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx = fetchOptions.ctx) === null || _fetchOptions_ctx === void 0 ? void 0 : (_fetchOptions_ctx_req = _fetchOptions_ctx.req) === null || _fetchOptions_ctx_req === void 0 ? void 0 : _fetchOptions_ctx_req.cookies);\n        const currentRefreshToken = fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx1 = fetchOptions.ctx) === null || _fetchOptions_ctx1 === void 0 ? void 0 : (_fetchOptions_ctx_req1 = _fetchOptions_ctx1.req) === null || _fetchOptions_ctx_req1 === void 0 ? void 0 : _fetchOptions_ctx_req1.cookies;\n        console.log();\n        try {\n            // [Tentar atualizar os tokens]\n            const refreshResponse = await HttpClient(\"http://localhost:3000/api/refresh\", {\n                method: isServer ? \"PUT\" : \"GET\",\n                body: isServer ? {\n                    refresh_token: currentRefreshToken\n                } : undefined\n            });\n            console.log(\"1 -> \", refreshResponse);\n            console.log(\"Testando aqui calmo\", refreshResponse.body.data);\n            const newAccessToken = refreshResponse.body.data.respostaRefresh.access_token;\n            console.log(\"tokenService.save(newAccessToken);\", newAccessToken);\n            const newRefreshToken = refreshResponse.body.data.respostaRefresh.refresh_token;\n            _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            // [Guarda os Tokens]\n            if (isServer) {\n                nookies__WEBPACK_IMPORTED_MODULE_0___default().set(fetchOptions.ctx, \"REFRESH_TOKEN_NAME\", newRefreshToken, {\n                    httpOnly: true,\n                    sameSite: \"lax\"\n                });\n                _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            }\n            // // }\n            // [Tentar rodar o request anterior]\n            const retryResponse = await HttpClient(fetchUrl, {\n                ...options,\n                refresh: false,\n                headers: {\n                    \"Authorization\": \"Bearer \".concat(newAccessToken)\n                }\n            });\n            // console.log('retryResponse', retryResponse);\n            return retryResponse;\n        } catch (err) {\n            console.error(err);\n            return response;\n        }\n    });\n}\n_c = HttpClient;\nvar _c;\n$RefreshReg$(_c, \"HttpClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPeEI7UUFDVDtJQUNGO0FBQ0o7S0E1RXNCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXV0aC9IdHRwQ2xpZW50LmpzP2MxZjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJxdWl0ZXR1cmEgSGV4YWdvbmFsXHJcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgeyB0b2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZSc7XHJcblxyXG4vLyBQb3J0cyAmIEFkYXB0ZXJzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBIdHRwQ2xpZW50KGZldGNoVXJsLCBmZXRjaE9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IGRlZmF1bHRIZWFkZXJzID0gZmV0Y2hPcHRpb25zLmhlYWRlcnMgfHwge307XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC4uLmZldGNoT3B0aW9ucyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXHJcbiAgICB9LFxyXG4gICAgYm9keTogZmV0Y2hPcHRpb25zLmJvZHkgPyBKU09OLnN0cmluZ2lmeShmZXRjaE9wdGlvbnMuYm9keSkgOiBudWxsLFxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKGZldGNoVXJsLCBvcHRpb25zKVxyXG4gICAgLnRoZW4oYXN5bmMgKHJlc3Bvc3RhRG9TZXJ2aWRvcikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9rOiByZXNwb3N0YURvU2Vydmlkb3Iub2ssXHJcbiAgICAgICAgc3RhdHVzOiByZXNwb3N0YURvU2Vydmlkb3Iuc3RhdHVzLFxyXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3Bvc3RhRG9TZXJ2aWRvci5zdGF0dXNUZXh0LFxyXG4gICAgICAgIGJvZHk6IGF3YWl0IHJlc3Bvc3RhRG9TZXJ2aWRvci5qc29uKCksXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYoIWZldGNoT3B0aW9ucy5yZWZyZXNoKSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDAxKSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlOiBSb2RhciBjw7NkaWdvIHBhcmEgYXR1YWxpemFyIG8gdG9rZW4nKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGlzU2VydmVyID0gQm9vbGVhbihmZXRjaE9wdGlvbnM/LmN0eCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaXNTZXJ2ZXJcIiwgaXNTZXJ2ZXIpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlRlc3RhbmRvIENvb2tpZXMgOlwiLGZldGNoT3B0aW9ucz8uY3R4Py5yZXE/LmNvb2tpZXMpXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBjdXJyZW50UmVmcmVzaFRva2VuID0gZmV0Y2hPcHRpb25zPy5jdHg/LnJlcT8uY29va2llc1xyXG4gICAgICBjb25zb2xlLmxvZygpXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFtUZW50YXIgYXR1YWxpemFyIG9zIHRva2Vuc11cclxuICAgICAgICBjb25zdCByZWZyZXNoUmVzcG9uc2UgPSBhd2FpdCBIdHRwQ2xpZW50KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3JlZnJlc2gnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IGlzU2VydmVyID8gJ1BVVCcgOiAnR0VUJyxcclxuICAgICAgICAgIGJvZHk6IGlzU2VydmVyID8geyByZWZyZXNoX3Rva2VuOiBjdXJyZW50UmVmcmVzaFRva2VuIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMSAtPiBcIiwgcmVmcmVzaFJlc3BvbnNlKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RhbmRvIGFxdWkgY2FsbW9cIiwgcmVmcmVzaFJlc3BvbnNlLmJvZHkuZGF0YSlcclxuICAgICAgICBjb25zdCBuZXdBY2Nlc3NUb2tlbiA9IHJlZnJlc2hSZXNwb25zZS5ib2R5LmRhdGEucmVzcG9zdGFSZWZyZXNoLmFjY2Vzc190b2tlbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuU2VydmljZS5zYXZlKG5ld0FjY2Vzc1Rva2VuKTtcIiwgbmV3QWNjZXNzVG9rZW4pXHJcbiAgICAgICAgY29uc3QgbmV3UmVmcmVzaFRva2VuID0gcmVmcmVzaFJlc3BvbnNlLmJvZHkuZGF0YS5yZXNwb3N0YVJlZnJlc2gucmVmcmVzaF90b2tlbjsgIFxyXG5cclxuXHJcbiAgICAgICAgdG9rZW5TZXJ2aWNlLnNhdmUobmV3QWNjZXNzVG9rZW4pO1xyXG5cclxuICAgICAgICAvLyBbR3VhcmRhIG9zIFRva2Vuc11cclxuICAgICAgICBpZihpc1NlcnZlcikge1xyXG4gICAgICAgICAgbm9va2llcy5zZXQoZmV0Y2hPcHRpb25zLmN0eCwgJ1JFRlJFU0hfVE9LRU5fTkFNRScsIG5ld1JlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICB0b2tlblNlcnZpY2Uuc2F2ZShuZXdBY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC8vIH1cclxuICAgICAgICAvLyBbVGVudGFyIHJvZGFyIG8gcmVxdWVzdCBhbnRlcmlvcl1cclxuXHJcbiAgICAgICAgY29uc3QgcmV0cnlSZXNwb25zZSA9IGF3YWl0IEh0dHBDbGllbnQoZmV0Y2hVcmwsIHtcclxuICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICByZWZyZXNoOiBmYWxzZSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bmV3QWNjZXNzVG9rZW59YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXRyeVJlc3BvbnNlJywgcmV0cnlSZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHJ5UmVzcG9uc2U7XHJcblxyXG4gICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59Il0sIm5hbWVzIjpbIm5vb2tpZXMiLCJ0b2tlblNlcnZpY2UiLCJIdHRwQ2xpZW50IiwiZmV0Y2hVcmwiLCJmZXRjaE9wdGlvbnMiLCJkZWZhdWx0SGVhZGVycyIsImhlYWRlcnMiLCJvcHRpb25zIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJvayIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJqc29uIiwicmVzcG9uc2UiLCJyZWZyZXNoIiwiY29uc29sZSIsImxvZyIsImlzU2VydmVyIiwiQm9vbGVhbiIsImN0eCIsInJlcSIsImNvb2tpZXMiLCJjdXJyZW50UmVmcmVzaFRva2VuIiwicmVmcmVzaFJlc3BvbnNlIiwibWV0aG9kIiwicmVmcmVzaF90b2tlbiIsInVuZGVmaW5lZCIsImRhdGEiLCJuZXdBY2Nlc3NUb2tlbiIsInJlc3Bvc3RhUmVmcmVzaCIsImFjY2Vzc190b2tlbiIsIm5ld1JlZnJlc2hUb2tlbiIsInNhdmUiLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwicmV0cnlSZXNwb25zZSIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/auth/HttpClient.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpClient: function() { return /* binding */ HttpClient; }\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/tokenService */ \"./services/auth/tokenService.js\");\n// Arquitetura Hexagonal\n\n\n// Ports & Adapters\nasync function HttpClient(fetchUrl) {\n    let fetchOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    const defaultHeaders = fetchOptions.headers || {};\n    const options = {\n        ...fetchOptions,\n        headers: {\n            \"Content-Type\": \"application/json\",\n            ...defaultHeaders\n        },\n        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null\n    };\n    return fetch(fetchUrl, options).then(async (respostaDoServidor)=>{\n        return {\n            ok: respostaDoServidor.ok,\n            status: respostaDoServidor.status,\n            statusText: respostaDoServidor.statusText,\n            body: await respostaDoServidor.json()\n        };\n    }).then(async (response)=>{\n        var _fetchOptions_ctx_req, _fetchOptions_ctx, _fetchOptions_ctx_req1, _fetchOptions_ctx1;\n        if (!fetchOptions.refresh) return response;\n        if (response.status !== 401) return response;\n        console.log(\"Middleware: Rodar c\\xf3digo para atualizar o token\");\n        const isServer = Boolean(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.ctx);\n        console.log(\"isServer\", isServer);\n        console.log(\"Testando Cookies :\", fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx = fetchOptions.ctx) === null || _fetchOptions_ctx === void 0 ? void 0 : (_fetchOptions_ctx_req = _fetchOptions_ctx.req) === null || _fetchOptions_ctx_req === void 0 ? void 0 : _fetchOptions_ctx_req.cookies);\n        const currentRefreshToken = fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx1 = fetchOptions.ctx) === null || _fetchOptions_ctx1 === void 0 ? void 0 : (_fetchOptions_ctx_req1 = _fetchOptions_ctx1.req) === null || _fetchOptions_ctx_req1 === void 0 ? void 0 : _fetchOptions_ctx_req1.cookies;\n        try {\n            // [Tentar atualizar os tokens]\n            const refreshResponse = await HttpClient(\"http://localhost:3000/api/refresh\", {\n                method: isServer ? \"PUT\" : \"GET\",\n                body: isServer ? {\n                    refresh_token: currentRefreshToken\n                } : undefined\n            });\n            console.log(\"1 -> \", refreshResponse);\n            console.log();\n            const newAccessToken = refreshResponse.body.data.respostaRefresh.access_token;\n            console.log(\"tokenService.save(newAccessToken);\", newAccessToken);\n            const newRefreshToken = refreshResponse.body.data.respostaRefresh.refresh_token;\n            _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            // [Guarda os Tokens]\n            if (isServer) {\n                nookies__WEBPACK_IMPORTED_MODULE_0___default().set(fetchOptions.ctx, \"REFRESH_TOKEN_NAME\", newRefreshToken, {\n                    httpOnly: true,\n                    sameSite: \"lax\"\n                });\n                _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            }\n            // // }\n            // [Tentar rodar o request anterior]\n            const retryResponse = await HttpClient(fetchUrl, {\n                ...options,\n                refresh: false,\n                headers: {\n                    \"Authorization\": \"Bearer \".concat(newAccessToken)\n                }\n            });\n            // console.log('retryResponse', retryResponse);\n            return retryResponse;\n        } catch (err) {\n            console.error(err);\n            return response;\n        }\n    });\n}\n_c = HttpClient;\nvar _c;\n$RefreshReg$(_c, \"HttpClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc2VydmljZXMvYXV0aC9IdHRwQ2xpZW50LmpzP2MxZjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXJxdWl0ZXR1cmEgSGV4YWdvbmFsXHJcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgeyB0b2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL3Rva2VuU2VydmljZSc7XHJcblxyXG4vLyBQb3J0cyAmIEFkYXB0ZXJzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBIdHRwQ2xpZW50KGZldGNoVXJsLCBmZXRjaE9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IGRlZmF1bHRIZWFkZXJzID0gZmV0Y2hPcHRpb25zLmhlYWRlcnMgfHwge307XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC4uLmZldGNoT3B0aW9ucyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXHJcbiAgICB9LFxyXG4gICAgYm9keTogZmV0Y2hPcHRpb25zLmJvZHkgPyBKU09OLnN0cmluZ2lmeShmZXRjaE9wdGlvbnMuYm9keSkgOiBudWxsLFxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKGZldGNoVXJsLCBvcHRpb25zKVxyXG4gICAgLnRoZW4oYXN5bmMgKHJlc3Bvc3RhRG9TZXJ2aWRvcikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9rOiByZXNwb3N0YURvU2Vydmlkb3Iub2ssXHJcbiAgICAgICAgc3RhdHVzOiByZXNwb3N0YURvU2Vydmlkb3Iuc3RhdHVzLFxyXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3Bvc3RhRG9TZXJ2aWRvci5zdGF0dXNUZXh0LFxyXG4gICAgICAgIGJvZHk6IGF3YWl0IHJlc3Bvc3RhRG9TZXJ2aWRvci5qc29uKCksXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYoIWZldGNoT3B0aW9ucy5yZWZyZXNoKSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDAxKSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNaWRkbGV3YXJlOiBSb2RhciBjw7NkaWdvIHBhcmEgYXR1YWxpemFyIG8gdG9rZW4nKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGlzU2VydmVyID0gQm9vbGVhbihmZXRjaE9wdGlvbnM/LmN0eCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaXNTZXJ2ZXJcIiwgaXNTZXJ2ZXIpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlRlc3RhbmRvIENvb2tpZXMgOlwiLGZldGNoT3B0aW9ucz8uY3R4Py5yZXE/LmNvb2tpZXMpXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBjdXJyZW50UmVmcmVzaFRva2VuID0gZmV0Y2hPcHRpb25zPy5jdHg/LnJlcT8uY29va2llc1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBbVGVudGFyIGF0dWFsaXphciBvcyB0b2tlbnNdXHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFJlc3BvbnNlID0gYXdhaXQgSHR0cENsaWVudCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yZWZyZXNoJywge1xyXG4gICAgICAgICAgbWV0aG9kOiBpc1NlcnZlciA/ICdQVVQnIDogJ0dFVCcsXHJcbiAgICAgICAgICBib2R5OiBpc1NlcnZlciA/IHsgcmVmcmVzaF90b2tlbjogY3VycmVudFJlZnJlc2hUb2tlbiB9IDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEgLT4gXCIsIHJlZnJlc2hSZXNwb25zZSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgIGNvbnN0IG5ld0FjY2Vzc1Rva2VuID0gcmVmcmVzaFJlc3BvbnNlLmJvZHkuZGF0YS5yZXNwb3N0YVJlZnJlc2guYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5TZXJ2aWNlLnNhdmUobmV3QWNjZXNzVG9rZW4pO1wiLCBuZXdBY2Nlc3NUb2tlbilcclxuICAgICAgICBjb25zdCBuZXdSZWZyZXNoVG9rZW4gPSByZWZyZXNoUmVzcG9uc2UuYm9keS5kYXRhLnJlc3Bvc3RhUmVmcmVzaC5yZWZyZXNoX3Rva2VuOyAgXHJcblxyXG5cclxuICAgICAgICB0b2tlblNlcnZpY2Uuc2F2ZShuZXdBY2Nlc3NUb2tlbik7XHJcblxyXG4gICAgICAgIC8vIFtHdWFyZGEgb3MgVG9rZW5zXVxyXG4gICAgICAgIGlmKGlzU2VydmVyKSB7XHJcbiAgICAgICAgICBub29raWVzLnNldChmZXRjaE9wdGlvbnMuY3R4LCAnUkVGUkVTSF9UT0tFTl9OQU1FJywgbmV3UmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIHRva2VuU2VydmljZS5zYXZlKG5ld0FjY2Vzc1Rva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gfVxyXG4gICAgICAgIC8vIFtUZW50YXIgcm9kYXIgbyByZXF1ZXN0IGFudGVyaW9yXVxyXG5cclxuICAgICAgICBjb25zdCByZXRyeVJlc3BvbnNlID0gYXdhaXQgSHR0cENsaWVudChmZXRjaFVybCwge1xyXG4gICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgIHJlZnJlc2g6IGZhbHNlLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtuZXdBY2Nlc3NUb2tlbn1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JldHJ5UmVzcG9uc2UnLCByZXRyeVJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gcmV0cnlSZXNwb25zZTtcclxuXHJcbiAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsibm9va2llcyIsInRva2VuU2VydmljZSIsIkh0dHBDbGllbnQiLCJmZXRjaFVybCIsImZldGNoT3B0aW9ucyIsImRlZmF1bHRIZWFkZXJzIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsIm9rIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImpzb24iLCJyZXNwb25zZSIsInJlZnJlc2giLCJjb25zb2xlIiwibG9nIiwiaXNTZXJ2ZXIiLCJCb29sZWFuIiwiY3R4IiwicmVxIiwiY29va2llcyIsImN1cnJlbnRSZWZyZXNoVG9rZW4iLCJyZWZyZXNoUmVzcG9uc2UiLCJtZXRob2QiLCJyZWZyZXNoX3Rva2VuIiwidW5kZWZpbmVkIiwibmV3QWNjZXNzVG9rZW4iLCJkYXRhIiwicmVzcG9zdGFSZWZyZXNoIiwiYWNjZXNzX3Rva2VuIiwibmV3UmVmcmVzaFRva2VuIiwic2F2ZSIsInNldCIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJyZXRyeVJlc3BvbnNlIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/auth/HttpClient.js\n"));

/***/ })

});
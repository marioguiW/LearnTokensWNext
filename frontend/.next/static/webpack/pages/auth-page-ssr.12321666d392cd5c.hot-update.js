"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth-page-ssr",{

/***/ "./services/auth/HttpClient.js":
/*!*************************************!*\
  !*** ./services/auth/HttpClient.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpClient: function() { return /* binding */ HttpClient; }\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/tokenService */ \"./services/auth/tokenService.js\");\n// Arquitetura Hexagonal\n\n\n// Ports & Adapters\nasync function HttpClient(fetchUrl) {\n    let fetchOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    const defaultHeaders = fetchOptions.headers || {};\n    const options = {\n        ...fetchOptions,\n        headers: {\n            \"Content-Type\": \"application/json\",\n            ...defaultHeaders\n        },\n        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null\n    };\n    return fetch(fetchUrl, options).then(async (respostaDoServidor)=>{\n        return {\n            ok: respostaDoServidor.ok,\n            status: respostaDoServidor.status,\n            statusText: respostaDoServidor.statusText,\n            body: await respostaDoServidor.json()\n        };\n    }).then(async (response)=>{\n        var _fetchOptions_ctx_req, _fetchOptions_ctx, _fetchOptions_ctx_req1, _fetchOptions_ctx1;\n        if (!fetchOptions.refresh) return response;\n        if (response.status !== 401) return response;\n        console.log(\"Middleware: Rodar c\\xf3digo para atualizar o token\");\n        const isServer = Boolean(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.ctx);\n        console.log(\"isServer\", isServer);\n        console.log(\"Testando Cookies :\", fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx = fetchOptions.ctx) === null || _fetchOptions_ctx === void 0 ? void 0 : (_fetchOptions_ctx_req = _fetchOptions_ctx.req) === null || _fetchOptions_ctx_req === void 0 ? void 0 : _fetchOptions_ctx_req.cookies);\n        const currentRefreshToken = fetchOptions === null || fetchOptions === void 0 ? void 0 : (_fetchOptions_ctx1 = fetchOptions.ctx) === null || _fetchOptions_ctx1 === void 0 ? void 0 : (_fetchOptions_ctx_req1 = _fetchOptions_ctx1.req) === null || _fetchOptions_ctx_req1 === void 0 ? void 0 : _fetchOptions_ctx_req1.cookies;\n        try {\n            // [Tentar atualizar os tokens]\n            const refreshResponse = await HttpClient(\"http://localhost:3000/api/refresh\", {\n                method: isServer ? \"PUT\" : \"GET\"\n            });\n            console.log(\"1 -> \", refreshResponse);\n            const newAccessToken = refreshResponse.body.data.respostaRefresh.access_token;\n            console.log(\"tokenService.save(newAccessToken);\", newAccessToken);\n            const newRefreshToken = refreshResponse.body.data.respostaRefresh.refresh_token;\n            _services_auth_tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(newAccessToken);\n            // [Guarda os Tokens]\n            // if(isServer) {\n            //   nookies.set(fetchOptions.ctx, 'REFRESH_TOKEN_NAME', newRefreshToken, {\n            //     httpOnly: true,\n            //     sameSite: 'lax',\n            //   })\n            // // }\n            // tokenService.save(newAccessToken);\n            // [Tentar rodar o request anterior]\n            const retryResponse = await HttpClient(fetchUrl, {\n                ...options,\n                refresh: false,\n                headers: {\n                    \"Authorization\": \"Bearer \".concat(newAccessToken)\n                }\n            });\n            // console.log('retryResponse', retryResponse);\n            return retryResponse;\n        } catch (err) {\n            console.error(err);\n            return response;\n        }\n    });\n}\n_c = HttpClient;\nvar _c;\n$RefreshReg$(_c, \"HttpClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoL0h0dHBDbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHdCQUF3QjtBQUNNO0FBQ2tDO0FBRWhFLG1CQUFtQjtBQUNaLGVBQWVFLFdBQVdDLFFBQVE7UUFBRUMsZUFBQUEsaUVBQWUsQ0FBQztJQUN6RCxNQUFNQyxpQkFBaUJELGFBQWFFLE9BQU8sSUFBSSxDQUFDO0lBQ2hELE1BQU1DLFVBQVU7UUFDZCxHQUFHSCxZQUFZO1FBQ2ZFLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsR0FBR0QsY0FBYztRQUNuQjtRQUNBRyxNQUFNSixhQUFhSSxJQUFJLEdBQUdDLEtBQUtDLFNBQVMsQ0FBQ04sYUFBYUksSUFBSSxJQUFJO0lBQ2hFO0lBQ0EsT0FBT0csTUFBTVIsVUFBVUksU0FDcEJLLElBQUksQ0FBQyxPQUFPQztRQUNYLE9BQU87WUFDTEMsSUFBSUQsbUJBQW1CQyxFQUFFO1lBQ3pCQyxRQUFRRixtQkFBbUJFLE1BQU07WUFDakNDLFlBQVlILG1CQUFtQkcsVUFBVTtZQUN6Q1IsTUFBTSxNQUFNSyxtQkFBbUJJLElBQUk7UUFDckM7SUFDRixHQUNDTCxJQUFJLENBQUMsT0FBT007WUFRc0JkLHVCQUFBQSxtQkFFTEEsd0JBQUFBO1FBVDVCLElBQUcsQ0FBQ0EsYUFBYWUsT0FBTyxFQUFFLE9BQU9EO1FBQ2pDLElBQUdBLFNBQVNILE1BQU0sS0FBSyxLQUFLLE9BQU9HO1FBQ25DRSxRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNQyxXQUFXQyxRQUFRbkIseUJBQUFBLG1DQUFBQSxhQUFjb0IsR0FBRztRQUMxQ0osUUFBUUMsR0FBRyxDQUFDLFlBQVlDO1FBRXhCRixRQUFRQyxHQUFHLENBQUMsc0JBQXFCakIseUJBQUFBLG9DQUFBQSxvQkFBQUEsYUFBY29CLEdBQUcsY0FBakJwQix5Q0FBQUEsd0JBQUFBLGtCQUFtQnFCLEdBQUcsY0FBdEJyQiw0Q0FBQUEsc0JBQXdCc0IsT0FBTztRQUVoRSxNQUFNQyxzQkFBc0J2Qix5QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFjb0IsR0FBRyxjQUFqQnBCLDBDQUFBQSx5QkFBQUEsbUJBQW1CcUIsR0FBRyxjQUF0QnJCLDZDQUFBQSx1QkFBd0JzQixPQUFPO1FBRTNELElBQUk7WUFDRiwrQkFBK0I7WUFDL0IsTUFBTUUsa0JBQWtCLE1BQU0xQixXQUFXLHFDQUFxQztnQkFDNUUyQixRQUFRUCxXQUFXLFFBQVE7WUFFN0I7WUFFQUYsUUFBUUMsR0FBRyxDQUFDLFNBQVNPO1lBRXJCLE1BQU1FLGlCQUFpQkYsZ0JBQWdCcEIsSUFBSSxDQUFDdUIsSUFBSSxDQUFDQyxlQUFlLENBQUNDLFlBQVk7WUFDN0ViLFFBQVFDLEdBQUcsQ0FBQyxzQ0FBc0NTO1lBQ2xELE1BQU1JLGtCQUFrQk4sZ0JBQWdCcEIsSUFBSSxDQUFDdUIsSUFBSSxDQUFDQyxlQUFlLENBQUNHLGFBQWE7WUFHL0VsQyxxRUFBWUEsQ0FBQ21DLElBQUksQ0FBQ047WUFFbEIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQiwyRUFBMkU7WUFDM0Usc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QixPQUFPO1lBQ1AsT0FBTztZQUNQLHFDQUFxQztZQUNyQyxvQ0FBb0M7WUFFcEMsTUFBTU8sZ0JBQWdCLE1BQU1uQyxXQUFXQyxVQUFVO2dCQUMvQyxHQUFHSSxPQUFPO2dCQUNWWSxTQUFTO2dCQUNUYixTQUFTO29CQUNQLGlCQUFpQixVQUF5QixPQUFmd0I7Z0JBQzdCO1lBQ0Y7WUFDQSwrQ0FBK0M7WUFDL0MsT0FBT087UUFFVCxFQUFFLE9BQU1DLEtBQUs7WUFDWGxCLFFBQVFtQixLQUFLLENBQUNEO1lBQ2QsT0FBT3BCO1FBQ1Q7SUFDRjtBQUNKO0tBeEVzQmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2F1dGgvSHR0cENsaWVudC5qcz9jMWY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFycXVpdGV0dXJhIEhleGFnb25hbFxyXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcclxuaW1wb3J0IHsgdG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC90b2tlblNlcnZpY2UnO1xyXG5cclxuLy8gUG9ydHMgJiBBZGFwdGVyc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gSHR0cENsaWVudChmZXRjaFVybCwgZmV0Y2hPcHRpb25zID0ge30pIHtcclxuICBjb25zdCBkZWZhdWx0SGVhZGVycyA9IGZldGNoT3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAuLi5mZXRjaE9wdGlvbnMsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIC4uLmRlZmF1bHRIZWFkZXJzLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IGZldGNoT3B0aW9ucy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkoZmV0Y2hPcHRpb25zLmJvZHkpIDogbnVsbCxcclxuICB9O1xyXG4gIHJldHVybiBmZXRjaChmZXRjaFVybCwgb3B0aW9ucylcclxuICAgIC50aGVuKGFzeW5jIChyZXNwb3N0YURvU2Vydmlkb3IpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvazogcmVzcG9zdGFEb1NlcnZpZG9yLm9rLFxyXG4gICAgICAgIHN0YXR1czogcmVzcG9zdGFEb1NlcnZpZG9yLnN0YXR1cyxcclxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb3N0YURvU2Vydmlkb3Iuc3RhdHVzVGV4dCxcclxuICAgICAgICBib2R5OiBhd2FpdCByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmKCFmZXRjaE9wdGlvbnMucmVmcmVzaCkgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT09IDQwMSkgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICBjb25zb2xlLmxvZygnTWlkZGxld2FyZTogUm9kYXIgY8OzZGlnbyBwYXJhIGF0dWFsaXphciBvIHRva2VuJyk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBpc1NlcnZlciA9IEJvb2xlYW4oZmV0Y2hPcHRpb25zPy5jdHgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImlzU2VydmVyXCIsIGlzU2VydmVyKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJUZXN0YW5kbyBDb29raWVzIDpcIixmZXRjaE9wdGlvbnM/LmN0eD8ucmVxPy5jb29raWVzKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgY3VycmVudFJlZnJlc2hUb2tlbiA9IGZldGNoT3B0aW9ucz8uY3R4Py5yZXE/LmNvb2tpZXNcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gW1RlbnRhciBhdHVhbGl6YXIgb3MgdG9rZW5zXVxyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hSZXNwb25zZSA9IGF3YWl0IEh0dHBDbGllbnQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVmcmVzaCcsIHtcclxuICAgICAgICAgIG1ldGhvZDogaXNTZXJ2ZXIgPyAnUFVUJyA6ICdHRVQnLFxyXG4gICAgICAgICAgLy8gYm9keTogaXNTZXJ2ZXIgPyB7IHJlZnJlc2hfdG9rZW46IGN1cnJlbnRSZWZyZXNoVG9rZW4gfSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxIC0+IFwiLCByZWZyZXNoUmVzcG9uc2UpXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0FjY2Vzc1Rva2VuID0gcmVmcmVzaFJlc3BvbnNlLmJvZHkuZGF0YS5yZXNwb3N0YVJlZnJlc2guYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5TZXJ2aWNlLnNhdmUobmV3QWNjZXNzVG9rZW4pO1wiLCBuZXdBY2Nlc3NUb2tlbilcclxuICAgICAgICBjb25zdCBuZXdSZWZyZXNoVG9rZW4gPSByZWZyZXNoUmVzcG9uc2UuYm9keS5kYXRhLnJlc3Bvc3RhUmVmcmVzaC5yZWZyZXNoX3Rva2VuOyAgXHJcblxyXG5cclxuICAgICAgICB0b2tlblNlcnZpY2Uuc2F2ZShuZXdBY2Nlc3NUb2tlbik7XHJcblxyXG4gICAgICAgIC8vIFtHdWFyZGEgb3MgVG9rZW5zXVxyXG4gICAgICAgIC8vIGlmKGlzU2VydmVyKSB7XHJcbiAgICAgICAgLy8gICBub29raWVzLnNldChmZXRjaE9wdGlvbnMuY3R4LCAnUkVGUkVTSF9UT0tFTl9OQU1FJywgbmV3UmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgLy8gICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vIC8vIH1cclxuICAgICAgICAvLyB0b2tlblNlcnZpY2Uuc2F2ZShuZXdBY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgLy8gW1RlbnRhciByb2RhciBvIHJlcXVlc3QgYW50ZXJpb3JdXHJcblxyXG4gICAgICAgIGNvbnN0IHJldHJ5UmVzcG9uc2UgPSBhd2FpdCBIdHRwQ2xpZW50KGZldGNoVXJsLCB7XHJcbiAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgcmVmcmVzaDogZmFsc2UsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke25ld0FjY2Vzc1Rva2VufWBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmV0cnlSZXNwb25zZScsIHJldHJ5UmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiByZXRyeVJlc3BvbnNlO1xyXG5cclxuICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJub29raWVzIiwidG9rZW5TZXJ2aWNlIiwiSHR0cENsaWVudCIsImZldGNoVXJsIiwiZmV0Y2hPcHRpb25zIiwiZGVmYXVsdEhlYWRlcnMiLCJoZWFkZXJzIiwib3B0aW9ucyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZpZG9yIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwianNvbiIsInJlc3BvbnNlIiwicmVmcmVzaCIsImNvbnNvbGUiLCJsb2ciLCJpc1NlcnZlciIsIkJvb2xlYW4iLCJjdHgiLCJyZXEiLCJjb29raWVzIiwiY3VycmVudFJlZnJlc2hUb2tlbiIsInJlZnJlc2hSZXNwb25zZSIsIm1ldGhvZCIsIm5ld0FjY2Vzc1Rva2VuIiwiZGF0YSIsInJlc3Bvc3RhUmVmcmVzaCIsImFjY2Vzc190b2tlbiIsIm5ld1JlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJzYXZlIiwicmV0cnlSZXNwb25zZSIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/auth/HttpClient.js\n"));

/***/ })

});
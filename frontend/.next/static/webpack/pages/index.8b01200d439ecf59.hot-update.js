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

/***/ "./services/auth/authService.js":
/*!**************************************!*\
  !*** ./services/auth/authService.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: function() { return /* binding */ authService; }\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenService */ \"./services/auth/tokenService.js\");\n/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpClient */ \"./services/auth/HttpClient.js\");\n\n\n\nconst authService = {\n    async login (body) {\n        console.log(JSON.stringify(body));\n        return await (0,_HttpClient__WEBPACK_IMPORTED_MODULE_2__.HttpClient)(\"http://localhost:4000/api/login\", {\n            method: \"POST\",\n            body: body\n        }).then(async (respostaDoServidor)=>{\n            console.log(\"linha 13 - authService\", respostaDoServidor);\n            const response = {\n                ok: respostaDoServidor.ok,\n                status: respostaDoServidor.status,\n                statusText: respostaDoServidor.statusText,\n                body: await respostaDoServidor.body\n            };\n            if (!response.ok) throw new Error(\"Usuario ou senha inv\\xe1lidos\");\n            const body = response.body;\n            _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.save(body.data.access_token);\n            console.log(\"body RETORNADO\", body);\n            return body;\n        }).then(async (param)=>{\n            let { data } = param;\n            console.log(\"dadossss\", data);\n            const { refresh_token } = data;\n            console.log(\"Testando crl\", refresh_token);\n            const respostaTeste = await (0,_HttpClient__WEBPACK_IMPORTED_MODULE_2__.HttpClient)(\"/api/refresh\", {\n                method: \"POST\",\n                body: {\n                    refresh_token: refresh_token\n                }\n            });\n        });\n    },\n    async getSession () {\n        let ctx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n        const token = _tokenService__WEBPACK_IMPORTED_MODULE_1__.tokenService.get(ctx);\n        return (0,_HttpClient__WEBPACK_IMPORTED_MODULE_2__.HttpClient)(\"http://localhost:4000/api/session\", {\n            method: \"GET\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            },\n            ctx,\n            refresh: true\n        }).then(async (response)=>{\n            console.log(\"resposta do tentandooo\", response.body.data);\n            if (!response.ok) {\n                console.log(\"erro\");\n                throw new Error(\"Erro ao obter sess\\xe3o\");\n            }\n            console.log(\"passo\");\n            return response // Retorne os dados JSON da resposta\n            ;\n        });\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoL2F1dGhTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ1A7QUFDSDtBQUVuQyxNQUFNRyxjQUFjO0lBQ3ZCLE1BQU1DLE9BQU1DLElBQUk7UUFDWkMsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNKO1FBQzNCLE9BQU8sTUFBTUgsdURBQVVBLENBQUMsbUNBQW1DO1lBQ3ZEUSxRQUFRO1lBQ1JMLE1BQU1BO1FBQ1YsR0FDQ00sSUFBSSxDQUFDLE9BQU9DO1lBQ1ROLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJLO1lBQ3RDLE1BQU1DLFdBQVk7Z0JBQ2RDLElBQUlGLG1CQUFtQkUsRUFBRTtnQkFDekJDLFFBQVFILG1CQUFtQkcsTUFBTTtnQkFDakNDLFlBQVlKLG1CQUFtQkksVUFBVTtnQkFDekNYLE1BQU0sTUFBTU8sbUJBQW1CUCxJQUFJO1lBQ3ZDO1lBRUEsSUFBRyxDQUFDUSxTQUFTQyxFQUFFLEVBQUUsTUFBTSxJQUFJRyxNQUFNO1lBQ2pDLE1BQU1aLE9BQU9RLFNBQVNSLElBQUk7WUFFMUJKLHVEQUFZQSxDQUFDaUIsSUFBSSxDQUFDYixLQUFLYyxJQUFJLENBQUNDLFlBQVk7WUFDeENkLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO1lBQzlCLE9BQU9BO1FBRVgsR0FDQ00sSUFBSSxDQUFFO2dCQUFPLEVBQUNRLElBQUksRUFBQztZQUNoQmIsUUFBUUMsR0FBRyxDQUFDLFlBQVlZO1lBQ3hCLE1BQU0sRUFBQ0UsYUFBYSxFQUFDLEdBQUdGO1lBQ3hCYixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCYztZQUU1QixNQUFNQyxnQkFBZ0IsTUFBTXBCLHVEQUFVQSxDQUFDLGdCQUFnQjtnQkFDbkRRLFFBQVE7Z0JBQ1JMLE1BQU07b0JBQ0ZnQixlQUFlQTtnQkFDbkI7WUFDSjtRQUNKO0lBQ0o7SUFDQSxNQUFNRTtZQUFXQyxNQUFBQSxpRUFBTTtRQUNuQixNQUFNQyxRQUFReEIsdURBQVlBLENBQUN5QixHQUFHLENBQUNGO1FBRS9CLE9BQU90Qix1REFBVUEsQ0FBQyxxQ0FBcUM7WUFDbkRRLFFBQVE7WUFDUmlCLFNBQVM7Z0JBQ0wsaUJBQWlCLFVBQWdCLE9BQU5GO1lBQy9CO1lBQ0FEO1lBQ0FJLFNBQVM7UUFDYixHQUNDakIsSUFBSSxDQUFDLE9BQU9FO1lBRVRQLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJNLFNBQVNSLElBQUksQ0FBQ2MsSUFBSTtZQUN4RCxJQUFJLENBQUNOLFNBQVNDLEVBQUUsRUFBRTtnQkFDZFIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE1BQU0sSUFBSVUsTUFBTTtZQUNwQjtZQUNBWCxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPTSxTQUFTLG9DQUFvQzs7UUFDeEQ7SUFDSjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXV0aC9hdXRoU2VydmljZS5qcz9hZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlcm1hbmVudFJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB0b2tlblNlcnZpY2UgfSBmcm9tIFwiLi90b2tlblNlcnZpY2VcIlxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIi4vSHR0cENsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0ge1xyXG4gICAgYXN5bmMgbG9naW4oYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBIdHRwQ2xpZW50KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBib2R5XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAocmVzcG9zdGFEb1NlcnZpZG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGluaGEgMTMgLSBhdXRoU2VydmljZVwiLCByZXNwb3N0YURvU2Vydmlkb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIHtcclxuICAgICAgICAgICAgICAgIG9rOiByZXNwb3N0YURvU2Vydmlkb3Iub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3Bvc3RhRG9TZXJ2aWRvci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb3N0YURvU2Vydmlkb3Iuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGF3YWl0IHJlc3Bvc3RhRG9TZXJ2aWRvci5ib2R5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIlVzdWFyaW8gb3Ugc2VuaGEgaW52w6FsaWRvc1wiKVxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gcmVzcG9uc2UuYm9keVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdG9rZW5TZXJ2aWNlLnNhdmUoYm9keS5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2R5IFJFVE9STkFET1wiLCBib2R5KVxyXG4gICAgICAgICAgICByZXR1cm4gYm9keVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCBhc3luYyAoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFkb3Nzc3NcIiwgZGF0YSlcclxuICAgICAgICAgICAgY29uc3Qge3JlZnJlc2hfdG9rZW59ID0gZGF0YVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RhbmRvIGNybFwiLCByZWZyZXNoX3Rva2VuKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3Bvc3RhVGVzdGUgPSBhd2FpdCBIdHRwQ2xpZW50KFwiL2FwaS9yZWZyZXNoXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaF90b2tlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0U2Vzc2lvbihjdHggPSBudWxsKXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQoY3R4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Nlc3Npb25cIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9zdGEgZG8gdGVudGFuZG9vb1wiLCByZXNwb25zZS5ib2R5LmRhdGEpXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb1wiKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJybyBhbyBvYnRlciBzZXNzw6NvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzc29cIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlIC8vIFJldG9ybmUgb3MgZGFkb3MgSlNPTiBkYSByZXNwb3N0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicGVybWFuZW50UmVkaXJlY3QiLCJ0b2tlblNlcnZpY2UiLCJIdHRwQ2xpZW50IiwiYXV0aFNlcnZpY2UiLCJsb2dpbiIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkVycm9yIiwic2F2ZSIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicmVzcG9zdGFUZXN0ZSIsImdldFNlc3Npb24iLCJjdHgiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJyZWZyZXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/auth/authService.js\n"));

/***/ })

});
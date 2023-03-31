"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./services.tsx":
/*!**********************!*\
  !*** ./services.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"isWallectConnected\": function() { return /* binding */ isWallectConnected; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-client)/./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"(app-client)/./store/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nconst { ethereum  } = window;\nwindow.web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(ethereum);\nwindow.web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);\nconst connectWallet = async ()=>{\n    try {\n        var _accounts_;\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        window.location.reload();\n    } catch (error) {\n        console.log(error.message);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);\n    }\n};\nconst isWallectConnected = async ()=>{\n    try {\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        window.ethereum.on(\"chainChanged\", (chainId)=>{\n            window.location.reload();\n        });\n        window.ethereum.on(\"accountsChanged\", async ()=>{\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n            await isWallectConnected();\n            window.location.reload();\n        });\n        if (accounts.length) {\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please install Metamask\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n        const chainID = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        console.log(\"chainID: \", chainID);\n        if (chainID == \"0xaa36a7\") {\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"currentChain\", \"Sepolia\");\n            console.log();\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Can only access Sepolia\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n    } catch (error) {\n        reportError(error);\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc2VydmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QjtBQUNpQztBQUNqQjtBQVN4QyxNQUFNLEVBQUVHLFNBQVEsRUFBRSxHQUFHQztBQUNyQkEsT0FBT0MsSUFBSSxHQUFHLElBQUlMLDZDQUFJQSxDQUFDRztBQUN2QkMsT0FBT0MsSUFBSSxHQUFHLElBQUlMLDZDQUFJQSxDQUFDSSxPQUFPQyxJQUFJLENBQUNDLGVBQWU7QUFFbEQsTUFBTUMsZ0JBQWdCLFVBQVk7SUFDaEMsSUFBSTtZQUdpQ0M7UUFGbkMsSUFBSSxDQUFDTCxVQUFVLE9BQU9NLFFBQVFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNRixXQUFXLE1BQU1MLFNBQVNRLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQXNCO1FBQ3hFWCxzREFBY0EsQ0FBQyxvQkFBb0JPLENBQUFBLGFBQUFBLFFBQVEsQ0FBQyxFQUFFLGNBQVhBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFhSztRQUNoRFQsT0FBT1UsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCLEVBQUUsT0FBT0MsT0FBVztRQUNsQlAsUUFBUUMsR0FBRyxDQUFDTSxNQUFNQyxPQUFPO1FBQ3pCZix3REFBVyxDQUFDYyxNQUFNQyxPQUFPO0lBQzNCO0FBQ0Y7QUFHQSxNQUFNQyxxQkFBcUIsVUFBWTtJQUNyQyxJQUFJO1FBQ0YsSUFBSSxDQUFDZixVQUFVLE9BQU9NLFFBQVFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNRixXQUFXLE1BQU1MLFNBQVNRLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQWU7UUFFakVSLE9BQU9ELFFBQVEsQ0FBQ2dCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQ0MsVUFBaUI7WUFDbkRoQixPQUFPVSxRQUFRLENBQUNDLE1BQU07UUFDeEI7UUFFQVgsT0FBT0QsUUFBUSxDQUFDZ0IsRUFBRSxDQUFDLG1CQUFtQixVQUFZO2dCQUNiWDtZQUFuQ1Asc0RBQWNBLENBQUMsb0JBQW9CTyxDQUFBQSxhQUFBQSxRQUFRLENBQUMsRUFBRSxjQUFYQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBYUs7WUFDaEQsTUFBTUs7WUFDTmQsT0FBT1UsUUFBUSxDQUFDQyxNQUFNO1FBQ3hCO1FBRUEsSUFBSVAsU0FBU2EsTUFBTSxFQUFFO2dCQUNnQmI7WUFBbkNQLHNEQUFjQSxDQUFDLG9CQUFvQk8sQ0FBQUEsYUFBQUEsUUFBUSxDQUFDLEVBQUUsY0FBWEEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQWFLO1FBQ2xELE9BQU87WUFDTFgsd0RBQVcsQ0FBQztZQUVaRCxzREFBY0EsQ0FBQyxvQkFBb0I7UUFDckMsQ0FBQztRQUNELE1BQU1xQixVQUFXLE1BQU1sQixPQUFPRCxRQUFRLENBQUNRLE9BQU8sQ0FBQztZQUFDQyxRQUFRO1FBQWE7UUFDckVILFFBQVFDLEdBQUcsQ0FBQyxhQUFhWTtRQUN6QixJQUFJQSxXQUFXLFlBQVk7WUFDekJyQixzREFBY0EsQ0FBQyxnQkFBZ0I7WUFDL0JRLFFBQVFDLEdBQUc7UUFFYixPQUNJO1lBQ0ZSLHdEQUFXLENBQUM7WUFDWkQsc0RBQWNBLENBQUMsb0JBQW9CO1FBQ3JDLENBQUM7SUFDSCxFQUFFLE9BQU9lLE9BQU87UUFDZE8sWUFBWVA7SUFDZDtBQUNGO0FBS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMudHN4PzQ5ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxTdGF0ZSwgc2V0R2xvYmFsU3RhdGUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7IGxvZyB9IGZyb20gJ2NvbnNvbGUnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV0aGVyZXVtPzogYW55O1xuICAgIHdlYjM/OiBhbnk7XG4gIH1cbn1cbmNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbndpbmRvdy53ZWIzID0gbmV3IFdlYjMoZXRoZXJldW0pO1xud2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuXG5jb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmICghZXRoZXJldW0pIHJldHVybiBjb25zb2xlLmxvZygnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2snKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsIGFjY291bnRzWzBdPy50b0xvd2VyQ2FzZSgpKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gY2F0Y2ggKGVycm9yOmFueSkge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5cbmNvbnN0IGlzV2FsbGVjdENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5sb2coJ1BsZWFzZSBpbnN0YWxsIE1ldGFtYXNrJyk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcblxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgKGNoYWluSWQ6IGFueSkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsIGFjY291bnRzWzBdPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGF3YWl0IGlzV2FsbGVjdENvbm5lY3RlZCgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCkge1xuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCBhY2NvdW50c1swXT8udG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpO1xuXG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsICcnKTtcbiAgICB9XG4gICAgY29uc3QgY2hhaW5JRCA9ICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7bWV0aG9kOiAnZXRoX2NoYWluSWQnfSlcbiAgICBjb25zb2xlLmxvZygnY2hhaW5JRDogJywgY2hhaW5JRCk7XG4gICAgaWYgKGNoYWluSUQgPT0gXCIweGFhMzZhN1wiICl7XG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY3VycmVudENoYWluJywgJ1NlcG9saWEnKTtcbiAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRvYXN0LmVycm9yKCdDYW4gb25seSBhY2Nlc3MgU2Vwb2xpYScpXG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsICcnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVwb3J0RXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBjb25uZWN0V2FsbGV0LFxuICBpc1dhbGxlY3RDb25uZWN0ZWRcbn0iXSwibmFtZXMiOlsiV2ViMyIsInNldEdsb2JhbFN0YXRlIiwidG9hc3QiLCJldGhlcmV1bSIsIndpbmRvdyIsIndlYjMiLCJjdXJyZW50UHJvdmlkZXIiLCJjb25uZWN0V2FsbGV0IiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsIm1lc3NhZ2UiLCJpc1dhbGxlY3RDb25uZWN0ZWQiLCJvbiIsImNoYWluSWQiLCJsZW5ndGgiLCJjaGFpbklEIiwicmVwb3J0RXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./services.tsx\n"));

/***/ })

});
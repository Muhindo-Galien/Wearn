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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"isWallectConnected\": function() { return /* binding */ isWallectConnected; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-client)/./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"(app-client)/./store/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nconst { ethereum  } = window;\nwindow.web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(ethereum);\nwindow.web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);\nconst connectWallet = async ()=>{\n    try {\n        var _accounts_;\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        window.location.reload();\n    } catch (error) {\n        console.log(error.message);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);\n    }\n};\nconst isWallectConnected = async ()=>{\n    try {\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        window.ethereum.on(\"chainChanged\", (chainId)=>{\n            window.location.reload();\n        });\n        window.ethereum.on(\"accountsChanged\", async ()=>{\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n            await isWallectConnected();\n            window.location.reload();\n        });\n        if (accounts.length) {\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please install Metamask\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n        const chainID = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        console.log(\"chainID: \", chainID);\n        if (chainID == \"0xaa36a7\") {\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"currentChain\", \"Sepolia\");\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Can only access Sepolia\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n    } catch (error) {\n        reportError(error);\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc2VydmljZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QjtBQUNpQztBQUNqQjtBQVF4QyxNQUFNLEVBQUVHLFNBQVEsRUFBRSxHQUFHQztBQUNyQkEsT0FBT0MsSUFBSSxHQUFHLElBQUlMLDZDQUFJQSxDQUFDRztBQUN2QkMsT0FBT0MsSUFBSSxHQUFHLElBQUlMLDZDQUFJQSxDQUFDSSxPQUFPQyxJQUFJLENBQUNDLGVBQWU7QUFFbEQsTUFBTUMsZ0JBQWdCLFVBQVk7SUFDaEMsSUFBSTtZQUdpQ0M7UUFGbkMsSUFBSSxDQUFDTCxVQUFVLE9BQU9NLFFBQVFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNRixXQUFXLE1BQU1MLFNBQVNRLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQXNCO1FBQ3hFWCxzREFBY0EsQ0FBQyxvQkFBb0JPLENBQUFBLGFBQUFBLFFBQVEsQ0FBQyxFQUFFLGNBQVhBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFhSztRQUNoRFQsT0FBT1UsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCLEVBQUUsT0FBT0MsT0FBVztRQUNsQlAsUUFBUUMsR0FBRyxDQUFDTSxNQUFNQyxPQUFPO1FBQ3pCZix3REFBVyxDQUFDYyxNQUFNQyxPQUFPO0lBQzNCO0FBQ0Y7QUFHQSxNQUFNQyxxQkFBcUIsVUFBWTtJQUNyQyxJQUFJO1FBQ0YsSUFBSSxDQUFDZixVQUFVLE9BQU9NLFFBQVFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNRixXQUFXLE1BQU1MLFNBQVNRLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQWU7UUFFakVSLE9BQU9ELFFBQVEsQ0FBQ2dCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQ0MsVUFBaUI7WUFDbkRoQixPQUFPVSxRQUFRLENBQUNDLE1BQU07UUFDeEI7UUFFQVgsT0FBT0QsUUFBUSxDQUFDZ0IsRUFBRSxDQUFDLG1CQUFtQixVQUFZO2dCQUNiWDtZQUFuQ1Asc0RBQWNBLENBQUMsb0JBQW9CTyxDQUFBQSxhQUFBQSxRQUFRLENBQUMsRUFBRSxjQUFYQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBYUs7WUFDaEQsTUFBTUs7WUFDTmQsT0FBT1UsUUFBUSxDQUFDQyxNQUFNO1FBQ3hCO1FBRUEsSUFBSVAsU0FBU2EsTUFBTSxFQUFFO2dCQUNnQmI7WUFBbkNQLHNEQUFjQSxDQUFDLG9CQUFvQk8sQ0FBQUEsYUFBQUEsUUFBUSxDQUFDLEVBQUUsY0FBWEEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQWFLO1FBQ2xELE9BQU87WUFDTFgsd0RBQVcsQ0FBQztZQUVaRCxzREFBY0EsQ0FBQyxvQkFBb0I7UUFDckMsQ0FBQztRQUNELE1BQU1xQixVQUFXLE1BQU1sQixPQUFPRCxRQUFRLENBQUNRLE9BQU8sQ0FBQztZQUFDQyxRQUFRO1FBQWE7UUFDckVILFFBQVFDLEdBQUcsQ0FBQyxhQUFhWTtRQUN6QixJQUFJQSxXQUFXLFlBQVk7WUFDekJyQixzREFBY0EsQ0FBQyxnQkFBZ0I7UUFFakMsT0FDSTtZQUNGQyx3REFBVyxDQUFDO1lBQ1pELHNEQUFjQSxDQUFDLG9CQUFvQjtRQUNyQyxDQUFDO0lBQ0gsRUFBRSxPQUFPZSxPQUFPO1FBQ2RPLFlBQVlQO0lBQ2Q7QUFDRjtBQUtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzLnRzeD80OTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsU3RhdGUsIHNldEdsb2JhbFN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZXRoZXJldW0/OiBhbnk7XG4gICAgd2ViMz86IGFueTtcbiAgfVxufVxuY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xud2luZG93LndlYjMgPSBuZXcgV2ViMyhldGhlcmV1bSk7XG53aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG5cbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGNvbnNvbGUubG9nKCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgYWNjb3VudHNbMF0/LnRvTG93ZXJDYXNlKCkpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cblxuY29uc3QgaXNXYWxsZWN0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmICghZXRoZXJldW0pIHJldHVybiBjb25zb2xlLmxvZygnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2snKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCAoY2hhaW5JZDogYW55KSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgYWNjb3VudHNbMF0/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgYXdhaXQgaXNXYWxsZWN0Q29ubmVjdGVkKCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsIGFjY291bnRzWzBdPy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBpbnN0YWxsIE1ldGFtYXNrJyk7XG5cbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgJycpO1xuICAgIH1cbiAgICBjb25zdCBjaGFpbklEID0gIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgIGNvbnNvbGUubG9nKCdjaGFpbklEOiAnLCBjaGFpbklEKTtcbiAgICBpZiAoY2hhaW5JRCA9PSBcIjB4YWEzNmE3XCIgKXtcbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjdXJyZW50Q2hhaW4nLCAnU2Vwb2xpYScpO1xuICAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0b2FzdC5lcnJvcignQ2FuIG9ubHkgYWNjZXNzIFNlcG9saWEnKVxuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCAnJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcG9ydEVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgY29ubmVjdFdhbGxldCxcbiAgaXNXYWxsZWN0Q29ubmVjdGVkXG59Il0sIm5hbWVzIjpbIldlYjMiLCJzZXRHbG9iYWxTdGF0ZSIsInRvYXN0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiY29ubmVjdFdhbGxldCIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJ0b0xvd2VyQ2FzZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJtZXNzYWdlIiwiaXNXYWxsZWN0Q29ubmVjdGVkIiwib24iLCJjaGFpbklkIiwibGVuZ3RoIiwiY2hhaW5JRCIsInJlcG9ydEVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./services.tsx\n"));

/***/ })

});
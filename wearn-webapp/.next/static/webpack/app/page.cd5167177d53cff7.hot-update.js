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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"getDAIBalance\": function() { return /* binding */ getDAIBalance; },\n/* harmony export */   \"getEthereumContract\": function() { return /* binding */ getEthereumContract; },\n/* harmony export */   \"getMyBalance\": function() { return /* binding */ getMyBalance; },\n/* harmony export */   \"getYDAIBalance\": function() { return /* binding */ getYDAIBalance; },\n/* harmony export */   \"investDAI\": function() { return /* binding */ investDAI; },\n/* harmony export */   \"investUSDC\": function() { return /* binding */ investUSDC; },\n/* harmony export */   \"isWallectConnected\": function() { return /* binding */ isWallectConnected; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-client)/./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"(app-client)/./store/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _constants_abi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/abi.json */ \"(app-client)/./constants/abi.json\");\n/* harmony import */ var _constants_ercAbi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/ercAbi.json */ \"(app-client)/./constants/ercAbi.json\");\n\n\n\n\n\nconst contractAddress = \"0x0F6595EDC3C5864e75A987a12ebC2911B1C33330\";\nconst contractABI = _constants_abi_json__WEBPACK_IMPORTED_MODULE_3__.abi;\nconst daiTokenAddress = \"0x68194a729C2450ad26072b3D33ADaCbcef39D574\"; // DAI token contract address\nconst daiTokenABI = _constants_ercAbi_json__WEBPACK_IMPORTED_MODULE_4__.abi; // DAI token contract ABI\nlet ethereum = null;\nlet web3 = null;\nif (true) {\n    ethereum = window.ethereum;\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(ethereum || window.web3.currentProvider);\n}\nconst connectWallet = async ()=>{\n    try {\n        var _accounts_;\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        window.location.reload();\n    } catch (error) {\n        console.log(error.message);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);\n    }\n};\nconst isWallectConnected = async ()=>{\n    try {\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        window.ethereum.on(\"chainChanged\", (chainId)=>{\n            window.location.reload();\n        });\n        window.ethereum.on(\"accountsChanged\", async ()=>{\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n            await isWallectConnected();\n            window.location.reload();\n        });\n        if (accounts.length) {\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please install Metamask\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n        const chainID = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chainID == \"0xaa36a7\") {\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"currentChain\", \"Sepolia\");\n        } else {\n            console.log(\"here\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Can only access Sepolia\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n    } catch (error) {\n        reportError(error);\n    }\n};\nconst getEthereumContract = async ()=>{\n    const connectedAccount = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    if (connectedAccount) {\n        if (!web3) {\n            web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum || window.web3.currentProvider);\n        }\n        const contract = new web3.eth.Contract(contractABI, contractAddress);\n        console.log(contract);\n        return contract;\n    } else {\n        return (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"contract\");\n    }\n};\nconst getMyBalance = async ()=>{\n    const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    const daiTokenContract1 = new web3.eth.Contract(daiTokenABI, daiTokenAddress);\n    console.log(\"DAI Token Contract: \", daiTokenContract1);\n    const daiBalance = await daiTokenContract1.methods.balanceOf(sender).call();\n    const daiBalanceInEth = Num(await web3.utils.fromWei(daiBalance, \"ether\"));\n    console.log(\"DAI Balance in Ether: \", daiBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"myDAIBalance\", daiBalanceInEth);\n    return daiBalance;\n};\n// ==================================================\nconst investDAI = async (amount)=>{\n    try {\n        const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n        const value = web3 ? web3.utils.toWei(amount, \"ether\") : \"\";\n        console.log(\"Value in Wei: \", value);\n        const daiBalanceInEth = await getMyBalance();\n        if (Number(daiBalanceInEth) < Number(amount)) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Insufficient DAI balance\");\n            return;\n        }\n        const contract = await getEthereumContract();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Send tokens initlialized\");\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", true);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setLoadingMsg)(\"Send tokens\");\n        const tx = await daiTokenContract.methods.approve(contract.options.address, value).send({\n            from: sender\n        });\n        console.log(\"DAI Token Approval Tx: \", tx);\n        const investTx = await contract.methods.save(value).send({\n            from: sender\n        });\n        console.log(\"Invest Tx: \", investTx);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setAlert)(\"Token sent!\", \"green\");\n    } catch (error) {\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setAlert)(\"Proccess failed\", \"red\");\n        console.log(error);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", false);\n    }\n};\n// ===================================================\nconst investUSDC = async (amount)=>{\n    const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    const value = window.web3.utils.toWei(amount, \"ether\");\n    try {\n        const contract = await getEtheriumContract();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Transfer started...\");\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", true);\n        const tx = await contract.methods.saveUSDC(value).send({\n            from: sender\n        });\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Token sent successfully\");\n    } catch (error) {\n        console.log(error);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", false);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Transfer Failed\");\n    }\n};\n// ================================================\nconst getDAIBalance = async ()=>{\n    const daiTokenContract1 = new web3.eth.Contract(daiTokenABI, daiTokenAddress);\n    const contractBalance = await daiTokenContract1.methods.balanceOf(contractAddress).call();\n    const contractBalanceInEth = web3.utils.fromWei(contractBalance, \"ether\");\n    console.log(\"DAI Balance in Ether: \", contractBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"DAIBalance\", contractBalanceInEth);\n};\nconst getYDAIBalance = async ()=>{\n    const contract = await getEthereumContract();\n    const yDaiTokenContract = await (contract === null || contract === void 0 ? void 0 : contract.methods.balance().call());\n    const contractBalanceInEth = web3.utils.fromWei(yDaiTokenContract, \"ether\");\n    console.log(\"DAI Balance in Ether: \", contractBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"yDAIBalance\", contractBalanceInEth);\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxPQUFPLENBQUNDLFNBQVMsQ0FBQ25DLGlCQUFpQm9DLElBQUk7SUFDdEYsTUFBTXdCLHVCQUF1QnZELEtBQUtrQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ21CLGlCQUFpQjtJQUNqRWpELFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJpRDtJQUN0Q2pFLHNEQUFjQSxDQUFDLGNBQWFpRTtBQUM5QjtBQUVBLE1BQU1DLGlCQUFpQixVQUFZO0lBQ2pDLE1BQU1sQyxXQUFXLE1BQU1GO0lBQ3ZCLE1BQU1xQyxvQkFBcUIsTUFBTW5DLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVU8sT0FBTyxDQUFDNkIsT0FBTyxHQUFHM0IsSUFBSSxFQUFFO0lBQ25FLE1BQU13Qix1QkFBdUJ2RCxLQUFLa0MsS0FBSyxDQUFDQyxPQUFPLENBQUNzQixtQkFBbUI7SUFDbkVwRCxRQUFRQyxHQUFHLENBQUMsMEJBQTBCaUQ7SUFDdENqRSxzREFBY0EsQ0FBQyxlQUFjaUU7QUFDL0I7QUFhQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy50c3g/NDk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IGdldEdsb2JhbFN0YXRlLCBzZXRBbGVydCwgc2V0R2xvYmFsU3RhdGUsIHNldExvYWRpbmdNc2cgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCBhYmkgZnJvbSBcIi4vY29uc3RhbnRzL2FiaS5qc29uXCJcbmltcG9ydCBlcmNBYmkgZnJvbSAnLi9jb25zdGFudHMvZXJjQWJpLmpzb24nO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHgwRjY1OTVFREMzQzU4NjRlNzVBOTg3YTEyZWJDMjkxMUIxQzMzMzMwJztcbmNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaTtcbmNvbnN0IGRhaVRva2VuQWRkcmVzcyA9ICcweDY4MTk0YTcyOUMyNDUwYWQyNjA3MmIzRDMzQURhQ2JjZWYzOUQ1NzQnOyAvLyBEQUkgdG9rZW4gY29udHJhY3QgYWRkcmVzc1xuY29uc3QgZGFpVG9rZW5BQkkgPSBlcmNBYmkuYWJpOyAvLyBEQUkgdG9rZW4gY29udHJhY3QgQUJJXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGV0aGVyZXVtPzogYW55O1xuICAgIHdlYjM/OiBhbnk7XG4gIH1cbn1cblxubGV0IGV0aGVyZXVtOiBhbnkgfCBudWxsID0gbnVsbDtcbmxldCB3ZWIzOiBXZWIzIHwgbnVsbCA9IG51bGw7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBldGhlcmV1bSA9IHdpbmRvdy5ldGhlcmV1bTtcbiAgd2ViMyA9IG5ldyBXZWIzKGV0aGVyZXVtIHx8IHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59XG5cbmNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGNvbnNvbGUubG9nKCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgYWNjb3VudHNbMF0/LnRvTG93ZXJDYXNlKCkpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn07XG5cblxuY29uc3QgaXNXYWxsZWN0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmICghZXRoZXJldW0pIHJldHVybiBjb25zb2xlLmxvZygnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2snKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCAoY2hhaW5JZDogYW55KSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgYWNjb3VudHNbMF0/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgYXdhaXQgaXNXYWxsZWN0Q29ubmVjdGVkKCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsIGFjY291bnRzWzBdPy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBpbnN0YWxsIE1ldGFtYXNrJyk7XG5cbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgJycpO1xuICAgIH1cbiAgICBjb25zdCBjaGFpbklEID0gIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfY2hhaW5JZCd9KVxuICAgIGlmIChjaGFpbklEID09IFwiMHhhYTM2YTdcIiApe1xuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2N1cnJlbnRDaGFpbicsICdTZXBvbGlhJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgICB0b2FzdC5lcnJvcignQ2FuIG9ubHkgYWNjZXNzIFNlcG9saWEnKVxuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCAnJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcG9ydEVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29ubmVjdGVkQWNjb3VudCA9IGdldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50Jyk7XG5cbiAgaWYgKGNvbm5lY3RlZEFjY291bnQpIHtcbiAgICBpZiAoIXdlYjMpIHtcbiAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0gfHwgd2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLGNvbnRyYWN0QWRkcmVzcyApO1xuICAgIGNvbnNvbGUubG9nKGNvbnRyYWN0KTtcbiAgICBcbiAgICByZXR1cm4gY29udHJhY3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEdsb2JhbFN0YXRlKCdjb250cmFjdCcpO1xuICB9XG59O1xuY29uc3QgZ2V0TXlCYWxhbmNlID0gYXN5bmMoKT0+e1xuICBjb25zdCBzZW5kZXIgPSBnZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcpO1xuICBjb25zdCBkYWlUb2tlbkNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGRhaVRva2VuQUJJLCBkYWlUb2tlbkFkZHJlc3MpO1xuICBjb25zb2xlLmxvZygnREFJIFRva2VuIENvbnRyYWN0OiAnLCBkYWlUb2tlbkNvbnRyYWN0KTtcblxuICBjb25zdCBkYWlCYWxhbmNlID0gYXdhaXQgZGFpVG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihzZW5kZXIpLmNhbGwoKTtcbiAgY29uc3QgZGFpQmFsYW5jZUluRXRoID1OdW0oYXdhaXQgd2ViMy51dGlscy5mcm9tV2VpKGRhaUJhbGFuY2UsICdldGhlcicpKTtcbiAgY29uc29sZS5sb2coJ0RBSSBCYWxhbmNlIGluIEV0aGVyOiAnLCBkYWlCYWxhbmNlSW5FdGgpO1xuICBzZXRHbG9iYWxTdGF0ZSgnbXlEQUlCYWxhbmNlJywgZGFpQmFsYW5jZUluRXRoKVxuICByZXR1cm4gZGFpQmFsYW5jZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGludmVzdERBSSA9IGFzeW5jIChhbW91bnQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNlbmRlciA9IGdldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50Jyk7XG4gICAgY29uc3QgdmFsdWUgPSB3ZWIzID8gd2ViMy51dGlscy50b1dlaShhbW91bnQsICdldGhlcicpIDogJyc7XG4gICAgY29uc29sZS5sb2coJ1ZhbHVlIGluIFdlaTogJywgdmFsdWUpO1xuICAgIGNvbnN0IGRhaUJhbGFuY2VJbkV0aCA9IGF3YWl0IGdldE15QmFsYW5jZSgpXG5cbiAgICBpZiAoTnVtYmVyKGRhaUJhbGFuY2VJbkV0aCkgPCBOdW1iZXIoYW1vdW50KSkge1xuICAgICAgdG9hc3QuZXJyb3IoJ0luc3VmZmljaWVudCBEQUkgYmFsYW5jZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZ2V0RXRoZXJldW1Db250cmFjdCgpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ1NlbmQgdG9rZW5zIGluaXRsaWFsaXplZCcpO1xuICAgIHNldEdsb2JhbFN0YXRlKCdzdGFydGVkJywgdHJ1ZSk7XG4gICAgc2V0TG9hZGluZ01zZyhcIlNlbmQgdG9rZW5zXCIpXG4gICAgXG4gICAgY29uc3QgdHggPSBhd2FpdCBkYWlUb2tlbkNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgIC5hcHByb3ZlKGNvbnRyYWN0Lm9wdGlvbnMuYWRkcmVzcywgdmFsdWUpXG4gICAgICAuc2VuZCh7IGZyb206IHNlbmRlciB9KTtcbiAgICBjb25zb2xlLmxvZygnREFJIFRva2VuIEFwcHJvdmFsIFR4OiAnLCB0eCk7XG5cbiAgICBjb25zdCBpbnZlc3RUeCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgIC5zYXZlKHZhbHVlKVxuICAgICAgLnNlbmQoeyBmcm9tOiBzZW5kZXIgfSk7XG4gICAgY29uc29sZS5sb2coJ0ludmVzdCBUeDogJywgaW52ZXN0VHgpO1xuXG4gICAgc2V0QWxlcnQoJ1Rva2VuIHNlbnQhJywnZ3JlZW4nKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHNldEFsZXJ0KFwiUHJvY2Nlc3MgZmFpbGVkXCIsJ3JlZCcpXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHNldEdsb2JhbFN0YXRlKCdzdGFydGVkJywgZmFsc2UpO1xuICB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGludmVzdFVTREMgPWFzeW5jKGFtb3VudDogbnVtYmVyKT0+e1xuICBjb25zdCBzZW5kZXIgPSBnZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcpO1xuICBjb25zdCB2YWx1ZSA9IHdpbmRvdy53ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ2V0aGVyJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBnZXRFdGhlcml1bUNvbnRyYWN0KCk7XG4gICAgdG9hc3Quc3VjY2VzcygnVHJhbnNmZXIgc3RhcnRlZC4uLicpO1xuICAgIHNldEdsb2JhbFN0YXRlKCdzdGFydGVkJywgdHJ1ZSk7XG4gICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXG4gICAgLnNhdmVVU0RDKHZhbHVlKVxuICAgIC5zZW5kKHsgZnJvbTogc2VuZGVyIH0pO1xuICB0b2FzdC5zdWNjZXNzKCdUb2tlbiBzZW50IHN1Y2Nlc3NmdWxseScpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHNldEdsb2JhbFN0YXRlKCdzdGFydGVkJywgZmFsc2UpO1xuICAgIHRvYXN0LmVycm9yKCdUcmFuc2ZlciBGYWlsZWQnKTtcbiAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBnZXREQUlCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYWlUb2tlbkNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGRhaVRva2VuQUJJLCBkYWlUb2tlbkFkZHJlc3MpO1xuICBjb25zdCBjb250cmFjdEJhbGFuY2UgPSBhd2FpdCBkYWlUb2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKGNvbnRyYWN0QWRkcmVzcykuY2FsbCgpO1xuICBjb25zdCBjb250cmFjdEJhbGFuY2VJbkV0aCA9IHdlYjMudXRpbHMuZnJvbVdlaShjb250cmFjdEJhbGFuY2UsICdldGhlcicpO1xuICBjb25zb2xlLmxvZygnREFJIEJhbGFuY2UgaW4gRXRoZXI6ICcsIGNvbnRyYWN0QmFsYW5jZUluRXRoKTtcbiAgc2V0R2xvYmFsU3RhdGUoJ0RBSUJhbGFuY2UnLGNvbnRyYWN0QmFsYW5jZUluRXRoKVxufTtcblxuY29uc3QgZ2V0WURBSUJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZ2V0RXRoZXJldW1Db250cmFjdCgpXG4gIGNvbnN0IHlEYWlUb2tlbkNvbnRyYWN0ID0gIGF3YWl0IGNvbnRyYWN0Py5tZXRob2RzLmJhbGFuY2UoKS5jYWxsKClcbiAgY29uc3QgY29udHJhY3RCYWxhbmNlSW5FdGggPSB3ZWIzLnV0aWxzLmZyb21XZWkoeURhaVRva2VuQ29udHJhY3QsICdldGhlcicpO1xuICBjb25zb2xlLmxvZygnREFJIEJhbGFuY2UgaW4gRXRoZXI6ICcsIGNvbnRyYWN0QmFsYW5jZUluRXRoKTtcbiAgc2V0R2xvYmFsU3RhdGUoJ3lEQUlCYWxhbmNlJyxjb250cmFjdEJhbGFuY2VJbkV0aClcbn07XG5cblxuXG5leHBvcnQge1xuICBjb25uZWN0V2FsbGV0LFxuICBpc1dhbGxlY3RDb25uZWN0ZWQsXG4gIGdldEV0aGVyZXVtQ29udHJhY3QsXG4gIGludmVzdERBSSxcbiAgaW52ZXN0VVNEQyxcbiAgZ2V0REFJQmFsYW5jZSxcbiAgZ2V0WURBSUJhbGFuY2UsXG4gIGdldE15QmFsYW5jZVxufVxuIl0sIm5hbWVzIjpbIldlYjMiLCJnZXRHbG9iYWxTdGF0ZSIsInNldEFsZXJ0Iiwic2V0R2xvYmFsU3RhdGUiLCJzZXRMb2FkaW5nTXNnIiwidG9hc3QiLCJhYmkiLCJlcmNBYmkiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImRhaVRva2VuQWRkcmVzcyIsImRhaVRva2VuQUJJIiwiZXRoZXJldW0iLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29ubmVjdFdhbGxldCIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJ0b0xvd2VyQ2FzZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJtZXNzYWdlIiwiaXNXYWxsZWN0Q29ubmVjdGVkIiwib24iLCJjaGFpbklkIiwibGVuZ3RoIiwiY2hhaW5JRCIsInJlcG9ydEVycm9yIiwiZ2V0RXRoZXJldW1Db250cmFjdCIsImNvbm5lY3RlZEFjY291bnQiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiZ2V0TXlCYWxhbmNlIiwic2VuZGVyIiwiZGFpVG9rZW5Db250cmFjdCIsImRhaUJhbGFuY2UiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsImRhaUJhbGFuY2VJbkV0aCIsIk51bSIsInV0aWxzIiwiZnJvbVdlaSIsImludmVzdERBSSIsImFtb3VudCIsInZhbHVlIiwidG9XZWkiLCJOdW1iZXIiLCJzdWNjZXNzIiwidHgiLCJhcHByb3ZlIiwib3B0aW9ucyIsImFkZHJlc3MiLCJzZW5kIiwiZnJvbSIsImludmVzdFR4Iiwic2F2ZSIsImludmVzdFVTREMiLCJnZXRFdGhlcml1bUNvbnRyYWN0Iiwic2F2ZVVTREMiLCJnZXREQUlCYWxhbmNlIiwiY29udHJhY3RCYWxhbmNlIiwiY29udHJhY3RCYWxhbmNlSW5FdGgiLCJnZXRZREFJQmFsYW5jZSIsInlEYWlUb2tlbkNvbnRyYWN0IiwiYmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./services.tsx\n"));

/***/ })

});
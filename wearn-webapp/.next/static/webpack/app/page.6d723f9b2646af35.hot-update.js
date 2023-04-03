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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"getDAIBalance\": function() { return /* binding */ getDAIBalance; },\n/* harmony export */   \"getEthereumContract\": function() { return /* binding */ getEthereumContract; },\n/* harmony export */   \"getMyBalance\": function() { return /* binding */ getMyBalance; },\n/* harmony export */   \"getYDAIBalance\": function() { return /* binding */ getYDAIBalance; },\n/* harmony export */   \"investDAI\": function() { return /* binding */ investDAI; },\n/* harmony export */   \"investUSDC\": function() { return /* binding */ investUSDC; },\n/* harmony export */   \"isWallectConnected\": function() { return /* binding */ isWallectConnected; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-client)/./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"(app-client)/./store/index.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _constants_abi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/abi.json */ \"(app-client)/./constants/abi.json\");\n/* harmony import */ var _constants_ercAbi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/ercAbi.json */ \"(app-client)/./constants/ercAbi.json\");\n\n\n\n\n\nconst contractAddress = \"0x0F6595EDC3C5864e75A987a12ebC2911B1C33330\";\nconst contractABI = _constants_abi_json__WEBPACK_IMPORTED_MODULE_3__.abi;\nconst daiTokenAddress = \"0x68194a729C2450ad26072b3D33ADaCbcef39D574\"; // DAI token contract address\nconst daiTokenABI = _constants_ercAbi_json__WEBPACK_IMPORTED_MODULE_4__.abi; // DAI token contract ABI\nlet ethereum = null;\nlet web3 = null;\nif (true) {\n    ethereum = window.ethereum;\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(ethereum || window.web3.currentProvider);\n}\nconst connectWallet = async ()=>{\n    try {\n        var _accounts_;\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        window.location.reload();\n    } catch (error) {\n        console.log(error.message);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);\n    }\n};\nconst isWallectConnected = async ()=>{\n    try {\n        if (!ethereum) return console.log(\"Please install Metamask\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        window.ethereum.on(\"chainChanged\", (chainId)=>{\n            window.location.reload();\n        });\n        window.ethereum.on(\"accountsChanged\", async ()=>{\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n            await isWallectConnected();\n            window.location.reload();\n        });\n        if (accounts.length) {\n            var _accounts_;\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", (_accounts_ = accounts[0]) === null || _accounts_ === void 0 ? void 0 : _accounts_.toLowerCase());\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please install Metamask\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n        const chainID = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chainID == \"0xaa36a7\") {\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"currentChain\", \"Sepolia\");\n        } else {\n            console.log(\"here\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Can only access Sepolia\");\n            (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"connectedAccount\", \"\");\n        }\n    } catch (error) {\n        reportError(error);\n    }\n};\nconst getEthereumContract = async ()=>{\n    const connectedAccount = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    if (connectedAccount) {\n        if (!web3) {\n            web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum || window.web3.currentProvider);\n        }\n        const contract = new web3.eth.Contract(contractABI, contractAddress);\n        console.log(contract);\n        return contract;\n    } else {\n        return (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"contract\");\n    }\n};\nconst getMyBalance = async ()=>{\n    const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    const daiTokenContract1 = new web3.eth.Contract(daiTokenABI, daiTokenAddress);\n    console.log(\"DAI Token Contract: \", daiTokenContract1);\n    const daiBalance = await daiTokenContract1.methods.balanceOf(sender).call();\n    const daiBalanceInEth = Number(await web3.utils.fromWei(daiBalance, \"ether\")).toFixed(2);\n    console.log(\"DAI Balance in Ether: \", daiBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"myDAIBalance\", daiBalanceInEth);\n    return daiBalance;\n};\n// ==================================================\nconst investDAI = async (amount)=>{\n    try {\n        const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n        const value = web3 ? web3.utils.toWei(amount, \"ether\") : \"\";\n        console.log(\"Value in Wei: \", value);\n        const daiBalanceInEth = await getMyBalance();\n        if (Number(daiBalanceInEth) < Number(amount)) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Insufficient DAI balance\");\n            return;\n        }\n        const contract = await getEthereumContract();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Send tokens initlialized\");\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", true);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setLoadingMsg)(\"Send tokens\");\n        const tx = await daiTokenContract.methods.approve(contract.options.address, value).send({\n            from: sender\n        });\n        console.log(\"DAI Token Approval Tx: \", tx);\n        const investTx = await contract.methods.save(value).send({\n            from: sender\n        });\n        console.log(\"Invest Tx: \", investTx);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setAlert)(\"Token sent!\", \"green\");\n    } catch (error) {\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setAlert)(\"Proccess failed\", \"red\");\n        console.log(error);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", false);\n    }\n};\n// ===================================================\nconst investUSDC = async (amount)=>{\n    const sender = (0,_store__WEBPACK_IMPORTED_MODULE_1__.getGlobalState)(\"connectedAccount\");\n    const value = window.web3.utils.toWei(amount, \"ether\");\n    try {\n        const contract = await getEtheriumContract();\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Transfer started...\");\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", true);\n        const tx = await contract.methods.saveUSDC(value).send({\n            from: sender\n        });\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Token sent successfully\");\n    } catch (error) {\n        console.log(error);\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"started\", false);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Transfer Failed\");\n    }\n};\n// ================================================\nconst getDAIBalance = async ()=>{\n    const daiTokenContract1 = new web3.eth.Contract(daiTokenABI, daiTokenAddress);\n    const contractBalance = await daiTokenContract1.methods.balanceOf(contractAddress).call();\n    const contractBalanceInEth = web3.utils.fromWei(contractBalance, \"ether\");\n    console.log(\"DAI Balance in Ether: \", contractBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"DAIBalance\", contractBalanceInEth);\n};\nconst getYDAIBalance = async ()=>{\n    const contract = await getEthereumContract();\n    const yDaiTokenContract = await (contract === null || contract === void 0 ? void 0 : contract.methods.balance().call());\n    const contractBalanceInEth = web3.utils.fromWei(yDaiTokenContract, \"ether\");\n    console.log(\"DAI Balance in Ether: \", contractBalanceInEth);\n    (0,_store__WEBPACK_IMPORTED_MODULE_1__.setGlobalState)(\"yDAIBalance\", contractBalanceInEth);\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLE1BQU0zQixrQkFBaUJFLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDbkMsaUJBQWlCb0MsSUFBSTtJQUN0RixNQUFNd0IsdUJBQXVCdkQsS0FBS2tDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbUIsaUJBQWlCO0lBQ2pFakQsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQmlEO0lBQ3RDakUsc0RBQWNBLENBQUMsY0FBYWlFO0FBQzlCO0FBRUEsTUFBTUMsaUJBQWlCLFVBQVk7SUFDakMsTUFBTWxDLFdBQVcsTUFBTUY7SUFDdkIsTUFBTXFDLG9CQUFxQixNQUFNbkMsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTyxPQUFPLENBQUM2QixPQUFPLEdBQUczQixJQUFJLEVBQUU7SUFDbkUsTUFBTXdCLHVCQUF1QnZELEtBQUtrQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3NCLG1CQUFtQjtJQUNuRXBELFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJpRDtJQUN0Q2pFLHNEQUFjQSxDQUFDLGVBQWNpRTtBQUMvQjtBQWFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzLnRzeD80OTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsU3RhdGUsIHNldEFsZXJ0LCBzZXRHbG9iYWxTdGF0ZSwgc2V0TG9hZGluZ01zZyB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IGFiaSBmcm9tIFwiLi9jb25zdGFudHMvYWJpLmpzb25cIlxuaW1wb3J0IGVyY0FiaSBmcm9tICcuL2NvbnN0YW50cy9lcmNBYmkuanNvbic7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDBGNjU5NUVEQzNDNTg2NGU3NUE5ODdhMTJlYkMyOTExQjFDMzMzMzAnO1xuY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpO1xuY29uc3QgZGFpVG9rZW5BZGRyZXNzID0gJzB4NjgxOTRhNzI5QzI0NTBhZDI2MDcyYjNEMzNBRGFDYmNlZjM5RDU3NCc7IC8vIERBSSB0b2tlbiBjb250cmFjdCBhZGRyZXNzXG5jb25zdCBkYWlUb2tlbkFCSSA9IGVyY0FiaS5hYmk7IC8vIERBSSB0b2tlbiBjb250cmFjdCBBQklcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZXRoZXJldW0/OiBhbnk7XG4gICAgd2ViMz86IGFueTtcbiAgfVxufVxuXG5sZXQgZXRoZXJldW06IGFueSB8IG51bGwgPSBudWxsO1xubGV0IHdlYjM6IFdlYjMgfCBudWxsID0gbnVsbDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGV0aGVyZXVtID0gd2luZG93LmV0aGVyZXVtO1xuICB3ZWIzID0gbmV3IFdlYjMoZXRoZXJldW0gfHwgd2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn1cblxuY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5sb2coJ1BsZWFzZSBpbnN0YWxsIE1ldGFtYXNrJyk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCBhY2NvdW50c1swXT8udG9Mb3dlckNhc2UoKSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgfVxufTtcblxuXG5jb25zdCBpc1dhbGxlY3RDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGNvbnNvbGUubG9nKCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChjaGFpbklkOiBhbnkpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCBhY2NvdW50c1swXT8udG9Mb3dlckNhc2UoKSk7XG4gICAgICBhd2FpdCBpc1dhbGxlY3RDb25uZWN0ZWQoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGlmIChhY2NvdW50cy5sZW5ndGgpIHtcbiAgICAgIHNldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50JywgYWNjb3VudHNbMF0/LnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdC5lcnJvcignUGxlYXNlIGluc3RhbGwgTWV0YW1hc2snKTtcblxuICAgICAgc2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnLCAnJyk7XG4gICAgfVxuICAgIGNvbnN0IGNoYWluSUQgPSAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9jaGFpbklkJ30pXG4gICAgaWYgKGNoYWluSUQgPT0gXCIweGFhMzZhN1wiICl7XG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY3VycmVudENoYWluJywgJ1NlcG9saWEnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICAgIHRvYXN0LmVycm9yKCdDYW4gb25seSBhY2Nlc3MgU2Vwb2xpYScpXG4gICAgICBzZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcsICcnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVwb3J0RXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRFdGhlcmV1bUNvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb25uZWN0ZWRBY2NvdW50ID0gZ2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnKTtcblxuICBpZiAoY29ubmVjdGVkQWNjb3VudCkge1xuICAgIGlmICghd2ViMykge1xuICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSB8fCB3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAgIH1cbiAgXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RBQkksY29udHJhY3RBZGRyZXNzICk7XG4gICAgY29uc29sZS5sb2coY29udHJhY3QpO1xuICAgIFxuICAgIHJldHVybiBjb250cmFjdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0R2xvYmFsU3RhdGUoJ2NvbnRyYWN0Jyk7XG4gIH1cbn07XG5jb25zdCBnZXRNeUJhbGFuY2UgPSBhc3luYygpPT57XG4gIGNvbnN0IHNlbmRlciA9IGdldEdsb2JhbFN0YXRlKCdjb25uZWN0ZWRBY2NvdW50Jyk7XG4gIGNvbnN0IGRhaVRva2VuQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoZGFpVG9rZW5BQkksIGRhaVRva2VuQWRkcmVzcyk7XG4gIGNvbnNvbGUubG9nKCdEQUkgVG9rZW4gQ29udHJhY3Q6ICcsIGRhaVRva2VuQ29udHJhY3QpO1xuXG4gIGNvbnN0IGRhaUJhbGFuY2UgPSBhd2FpdCBkYWlUb2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKHNlbmRlcikuY2FsbCgpO1xuICBjb25zdCBkYWlCYWxhbmNlSW5FdGggPU51bWJlcihhd2FpdCB3ZWIzLnV0aWxzLmZyb21XZWkoZGFpQmFsYW5jZSwgJ2V0aGVyJykpLnRvRml4ZWQoMik7XG4gIGNvbnNvbGUubG9nKCdEQUkgQmFsYW5jZSBpbiBFdGhlcjogJywgZGFpQmFsYW5jZUluRXRoKTtcbiAgc2V0R2xvYmFsU3RhdGUoJ215REFJQmFsYW5jZScsIGRhaUJhbGFuY2VJbkV0aClcbiAgcmV0dXJuIGRhaUJhbGFuY2U7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBpbnZlc3REQUkgPSBhc3luYyAoYW1vdW50OiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZW5kZXIgPSBnZXRHbG9iYWxTdGF0ZSgnY29ubmVjdGVkQWNjb3VudCcpO1xuICAgIGNvbnN0IHZhbHVlID0gd2ViMyA/IHdlYjMudXRpbHMudG9XZWkoYW1vdW50LCAnZXRoZXInKSA6ICcnO1xuICAgIGNvbnNvbGUubG9nKCdWYWx1ZSBpbiBXZWk6ICcsIHZhbHVlKTtcbiAgICBjb25zdCBkYWlCYWxhbmNlSW5FdGggPSBhd2FpdCBnZXRNeUJhbGFuY2UoKVxuXG4gICAgaWYgKE51bWJlcihkYWlCYWxhbmNlSW5FdGgpIDwgTnVtYmVyKGFtb3VudCkpIHtcbiAgICAgIHRvYXN0LmVycm9yKCdJbnN1ZmZpY2llbnQgREFJIGJhbGFuY2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGdldEV0aGVyZXVtQ29udHJhY3QoKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdTZW5kIHRva2VucyBpbml0bGlhbGl6ZWQnKTtcbiAgICBzZXRHbG9iYWxTdGF0ZSgnc3RhcnRlZCcsIHRydWUpO1xuICAgIHNldExvYWRpbmdNc2coXCJTZW5kIHRva2Vuc1wiKVxuICAgIFxuICAgIGNvbnN0IHR4ID0gYXdhaXQgZGFpVG9rZW5Db250cmFjdC5tZXRob2RzXG4gICAgICAuYXBwcm92ZShjb250cmFjdC5vcHRpb25zLmFkZHJlc3MsIHZhbHVlKVxuICAgICAgLnNlbmQoeyBmcm9tOiBzZW5kZXIgfSk7XG4gICAgY29uc29sZS5sb2coJ0RBSSBUb2tlbiBBcHByb3ZhbCBUeDogJywgdHgpO1xuXG4gICAgY29uc3QgaW52ZXN0VHggPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXG4gICAgICAuc2F2ZSh2YWx1ZSlcbiAgICAgIC5zZW5kKHsgZnJvbTogc2VuZGVyIH0pO1xuICAgIGNvbnNvbGUubG9nKCdJbnZlc3QgVHg6ICcsIGludmVzdFR4KTtcblxuICAgIHNldEFsZXJ0KCdUb2tlbiBzZW50IScsJ2dyZWVuJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzZXRBbGVydChcIlByb2NjZXNzIGZhaWxlZFwiLCdyZWQnKVxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBzZXRHbG9iYWxTdGF0ZSgnc3RhcnRlZCcsIGZhbHNlKTtcbiAgfVxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBpbnZlc3RVU0RDID1hc3luYyhhbW91bnQ6IG51bWJlcik9PntcbiAgY29uc3Qgc2VuZGVyID0gZ2V0R2xvYmFsU3RhdGUoJ2Nvbm5lY3RlZEFjY291bnQnKTtcbiAgY29uc3QgdmFsdWUgPSB3aW5kb3cud2ViMy51dGlscy50b1dlaShhbW91bnQsICdldGhlcicpO1xuICB0cnkge1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZ2V0RXRoZXJpdW1Db250cmFjdCgpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ1RyYW5zZmVyIHN0YXJ0ZWQuLi4nKTtcbiAgICBzZXRHbG9iYWxTdGF0ZSgnc3RhcnRlZCcsIHRydWUpO1xuICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xuICAgIC5zYXZlVVNEQyh2YWx1ZSlcbiAgICAuc2VuZCh7IGZyb206IHNlbmRlciB9KTtcbiAgdG9hc3Quc3VjY2VzcygnVG9rZW4gc2VudCBzdWNjZXNzZnVsbHknKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBzZXRHbG9iYWxTdGF0ZSgnc3RhcnRlZCcsIGZhbHNlKTtcbiAgICB0b2FzdC5lcnJvcignVHJhbnNmZXIgRmFpbGVkJyk7XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgZ2V0REFJQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGFpVG9rZW5Db250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChkYWlUb2tlbkFCSSwgZGFpVG9rZW5BZGRyZXNzKTtcbiAgY29uc3QgY29udHJhY3RCYWxhbmNlID0gYXdhaXQgZGFpVG9rZW5Db250cmFjdC5tZXRob2RzLmJhbGFuY2VPZihjb250cmFjdEFkZHJlc3MpLmNhbGwoKTtcbiAgY29uc3QgY29udHJhY3RCYWxhbmNlSW5FdGggPSB3ZWIzLnV0aWxzLmZyb21XZWkoY29udHJhY3RCYWxhbmNlLCAnZXRoZXInKTtcbiAgY29uc29sZS5sb2coJ0RBSSBCYWxhbmNlIGluIEV0aGVyOiAnLCBjb250cmFjdEJhbGFuY2VJbkV0aCk7XG4gIHNldEdsb2JhbFN0YXRlKCdEQUlCYWxhbmNlJyxjb250cmFjdEJhbGFuY2VJbkV0aClcbn07XG5cbmNvbnN0IGdldFlEQUlCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGdldEV0aGVyZXVtQ29udHJhY3QoKVxuICBjb25zdCB5RGFpVG9rZW5Db250cmFjdCA9ICBhd2FpdCBjb250cmFjdD8ubWV0aG9kcy5iYWxhbmNlKCkuY2FsbCgpXG4gIGNvbnN0IGNvbnRyYWN0QmFsYW5jZUluRXRoID0gd2ViMy51dGlscy5mcm9tV2VpKHlEYWlUb2tlbkNvbnRyYWN0LCAnZXRoZXInKTtcbiAgY29uc29sZS5sb2coJ0RBSSBCYWxhbmNlIGluIEV0aGVyOiAnLCBjb250cmFjdEJhbGFuY2VJbkV0aCk7XG4gIHNldEdsb2JhbFN0YXRlKCd5REFJQmFsYW5jZScsY29udHJhY3RCYWxhbmNlSW5FdGgpXG59O1xuXG5cblxuZXhwb3J0IHtcbiAgY29ubmVjdFdhbGxldCxcbiAgaXNXYWxsZWN0Q29ubmVjdGVkLFxuICBnZXRFdGhlcmV1bUNvbnRyYWN0LFxuICBpbnZlc3REQUksXG4gIGludmVzdFVTREMsXG4gIGdldERBSUJhbGFuY2UsXG4gIGdldFlEQUlCYWxhbmNlLFxuICBnZXRNeUJhbGFuY2Vcbn1cbiJdLCJuYW1lcyI6WyJXZWIzIiwiZ2V0R2xvYmFsU3RhdGUiLCJzZXRBbGVydCIsInNldEdsb2JhbFN0YXRlIiwic2V0TG9hZGluZ01zZyIsInRvYXN0IiwiYWJpIiwiZXJjQWJpIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJkYWlUb2tlbkFkZHJlc3MiLCJkYWlUb2tlbkFCSSIsImV0aGVyZXVtIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImNvbm5lY3RXYWxsZXQiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0IiwibWV0aG9kIiwidG9Mb3dlckNhc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwibWVzc2FnZSIsImlzV2FsbGVjdENvbm5lY3RlZCIsIm9uIiwiY2hhaW5JZCIsImxlbmd0aCIsImNoYWluSUQiLCJyZXBvcnRFcnJvciIsImdldEV0aGVyZXVtQ29udHJhY3QiLCJjb25uZWN0ZWRBY2NvdW50IiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsImdldE15QmFsYW5jZSIsInNlbmRlciIsImRhaVRva2VuQ29udHJhY3QiLCJkYWlCYWxhbmNlIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJkYWlCYWxhbmNlSW5FdGgiLCJOdW1iZXIiLCJ1dGlscyIsImZyb21XZWkiLCJ0b0ZpeGVkIiwiaW52ZXN0REFJIiwiYW1vdW50IiwidmFsdWUiLCJ0b1dlaSIsInN1Y2Nlc3MiLCJ0eCIsImFwcHJvdmUiLCJvcHRpb25zIiwiYWRkcmVzcyIsInNlbmQiLCJmcm9tIiwiaW52ZXN0VHgiLCJzYXZlIiwiaW52ZXN0VVNEQyIsImdldEV0aGVyaXVtQ29udHJhY3QiLCJzYXZlVVNEQyIsImdldERBSUJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2VJbkV0aCIsImdldFlEQUlCYWxhbmNlIiwieURhaVRva2VuQ29udHJhY3QiLCJiYWxhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./services.tsx\n"));

/***/ })

});
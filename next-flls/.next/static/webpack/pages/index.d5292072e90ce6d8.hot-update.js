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

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inputValores_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputValores/index */ \"./src/components/inputValores/index.tsx\");\n/* harmony import */ var _buttonCalcular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttonCalcular */ \"./src/components/buttonCalcular/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ \"./context/Context.tsx\");\n/* harmony import */ var _Result_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Result/index */ \"./src/components/Result/index.tsx\");\n/* harmony import */ var _background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../background/backgroundLayout */ \"./src/components/background/backgroundLayout.tsx\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout() {\n    var VerificaValores = function VerificaValores() {\n        var buscar = valores.includes(0);\n        var buscarInan = valores.includes(undefined);\n        console.log(buscar);\n        console.log(buscarInan);\n        console.log(valores);\n        // const VerificaTipo = valores.map(item => Number(item) === true )\n        if (buscar || buscarInan) {\n            return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire(\"Preencha todos os campos\", \"\", \"error\");\n        }\n        calcularPrecoMedio();\n    };\n    var calcularPrecoMedio = function calcularPrecoMedio() {\n        var novaQuantidade = Number(userAçõesQuantidade) + Number(QuantiCompraAções);\n        var novoValorTotal = Number(userAçõesQuantidade) * Number(userPreçoAções) + Number(QuantiCompraAções) * Number(CompraPreçoAções);\n        var precoMedio = novoValorTotal / novaQuantidade;\n        var novosValores = {\n            novaQuantidade: novaQuantidade,\n            novoValorTotal: novoValorTotal,\n            precoMedio: precoMedio\n        };\n        MostraValores(novosValores);\n    };\n    var MostraValores = function MostraValores(novosValores) {\n        setPrecoMedio({\n            quantidadeTotal: novosValores.novaQuantidade,\n            valorTotal: novosValores.novoValorTotal,\n            novoPrecoMedio: novosValores.precoMedio\n        });\n        setMostraResult(true);\n    };\n    _s();\n    var mostraResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.FllsContext).mostraResult;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.FllsContext), _usuario = ref.usuario, userAçõesQuantidade = _usuario.userAçõesQuantidade, userPreçoAções = _usuario.userPreçoAções, _ações = ref.ações, CompraPreçoAções = _ações.CompraPreçoAções, QuantiCompraAções = _ações.QuantiCompraAções, setPrecoMedio = ref.setPrecoMedio, setAções = ref.setAções, setUserAçõesQuantidade = ref.setUserAçõesQuantidade, setMostraResult = ref.setMostraResult;\n    var valores = [\n        userAçõesQuantidade,\n        userPreçoAções,\n        CompraPreçoAções,\n        QuantiCompraAções, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: mostraResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__.BackgroundLayout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Result_index__WEBPACK_IMPORTED_MODULE_5__.Result, {}, void 0, false, {\n                fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__.BackgroundLayout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    role: \"title\",\n                    children: \"Pre\\xe7o M\\xe9dio\"\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputValores_index__WEBPACK_IMPORTED_MODULE_1__.Valores, {\n                    açõesQuantidade: userAçõesQuantidade,\n                    açõesPreço: userPreçoAções,\n                    Titulo: \"Carteira\",\n                    CarteiraPlaceholder: \"Quantas a\\xe7\\xf5es Voc\\xea tem?\",\n                    ValorPlaceholder: \"Qual o pre\\xe7o?\",\n                    dispatch: setUserAçõesQuantidade,\n                    usuario: true\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputValores_index__WEBPACK_IMPORTED_MODULE_1__.Valores, {\n                    açõesPreço: CompraPreçoAções,\n                    açõesQuantidade: QuantiCompraAções,\n                    Titulo: \"Compra\",\n                    CarteiraPlaceholder: \"Quantas a\\xe7\\xf5es voc\\xea vai compra?\",\n                    ValorPlaceholder: \"Qual o valor da a\\xe7\\xe3o?\",\n                    dispatch: setAções\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttonCalcular__WEBPACK_IMPORTED_MODULE_2__.ButtonCalcular, {\n                    nomeButton: \"Calcular\",\n                    funcaoChamada: VerificaValores\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n            lineNumber: 88,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"bpJmjxf4jDipTSlrPIFgLcuNf9U=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhCQUVqQyw4REFBRHZDLHdEQUFPO29CQUNOd0MsaUJBQWUsRUFBSXBCO29CQUNmcUIsYUFBTSxFQUFLbEI7b0JBQ1RtQixNQUFBLEVBQUMsVUFBVTtvQkFDakJDLG1CQUFtQixFQUFDLGtDQUF5QjtvQkFDMUNDLGdCQUFhLEVBQUMsa0JBQWU7b0JBQy9CQyxRQUFPLEVBQUVSO29CQUNSSCxPQUFLOzs7Ozt3QkFDUDs4QkFFRiw4REFBQ2xDLHdEQUFPO29CQUNOeUMsYUFBVSxFQUFLakI7b0JBQ1RnQixpQkFBUyxFQUFJbkI7b0JBQ2ZxQixNQUFFLEVBQUMsUUFBUTtvQkFDZkMsbUJBQW1CLEVBQUMseUNBQWdDO29CQUNqREMsZ0JBQWEsRUFBQyw2QkFBdUI7b0JBQ3RDQyxRQUFNLEVBQUVUOzs7Ozt3QkFDVjs4QkFFRiw4REFBQ25DLDJEQUFjO29CQUNiNkMsVUFBVSxFQUFDLFVBQVU7b0JBQ3JCQyxhQUFhLEVBQUV2QyxlQUFlOzs7Ozt3QkFDOUI7Ozs7OztnQkFDZTtxQkFFcEIsQ0FDSDtDQUNIO0dBdEdlRCxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeD84ZjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbG9yZXMgfSBmcm9tIFwiLi4vaW5wdXRWYWxvcmVzL2luZGV4XCI7XG5pbXBvcnQgeyBCdXR0b25DYWxjdWxhciB9IGZyb20gXCIuLi9idXR0b25DYWxjdWxhclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmxsc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9Db250ZXh0XCI7XG5cbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuLi9SZXN1bHQvaW5kZXhcIjtcbmltcG9ydCB7IEJhY2tncm91bmRMYXlvdXQgfSBmcm9tIFwiLi4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kTGF5b3V0XCI7XG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcblxuaW50ZXJmYWNlIG5vdm9zVmFsb3JlcyB7XG4gIG5vdmFRdWFudGlkYWRlOiBudW1iZXI7XG4gIG5vdm9WYWxvclRvdGFsOiBudW1iZXI7XG4gIHByZWNvTWVkaW86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCgpIHtcbiAgY29uc3QgeyBtb3N0cmFSZXN1bHQgfSA9IHVzZUNvbnRleHQoRmxsc0NvbnRleHQpO1xuXG4gIGNvbnN0IHtcbiAgICB1c3VhcmlvOiB7IHVzZXJBw6fDtWVzUXVhbnRpZGFkZSwgdXNlclByZcOnb0HDp8O1ZXMgfSxcbiAgICBhw6fDtWVzOiB7IENvbXByYVByZcOnb0HDp8O1ZXMsIFF1YW50aUNvbXByYUHDp8O1ZXMgfSxcbiAgICBzZXRQcmVjb01lZGlvLFxuICAgIHNldEHDp8O1ZXMsXG4gICAgc2V0VXNlckHDp8O1ZXNRdWFudGlkYWRlLFxuICAgIHNldE1vc3RyYVJlc3VsdCxcbiAgfSA9IHVzZUNvbnRleHQoRmxsc0NvbnRleHQpO1xuXG4gIGNvbnN0IHZhbG9yZXMgPSBbXG4gICAgdXNlckHDp8O1ZXNRdWFudGlkYWRlLFxuICAgIHVzZXJQcmXDp29Bw6fDtWVzLFxuICAgIENvbXByYVByZcOnb0HDp8O1ZXMsXG4gICAgUXVhbnRpQ29tcHJhQcOnw7VlcyxcbiAgXTtcblxuICBmdW5jdGlvbiBWZXJpZmljYVZhbG9yZXMoKSB7XG4gICAgY29uc3QgYnVzY2FyID0gdmFsb3Jlcy5pbmNsdWRlcygwKTtcbiAgICBjb25zdCBidXNjYXJJbmFuID0gdmFsb3Jlcy5pbmNsdWRlcyh1bmRlZmluZWQpO1xuXG4gICAgY29uc29sZS5sb2coYnVzY2FyKTtcbiAgICBjb25zb2xlLmxvZyhidXNjYXJJbmFuKTtcbiAgICBjb25zb2xlLmxvZyh2YWxvcmVzKTtcblxuICAgIC8vIGNvbnN0IFZlcmlmaWNhVGlwbyA9IHZhbG9yZXMubWFwKGl0ZW0gPT4gTnVtYmVyKGl0ZW0pID09PSB0cnVlIClcblxuICAgIGlmIChidXNjYXIgfHwgYnVzY2FySW5hbikge1xuICAgICAgcmV0dXJuIFN3YWwuZmlyZShcIlByZWVuY2hhIHRvZG9zIG9zIGNhbXBvc1wiLCBcIlwiLCBcImVycm9yXCIpO1xuICAgIH1cblxuICAgIGNhbGN1bGFyUHJlY29NZWRpbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXJQcmVjb01lZGlvKCkge1xuICAgIGNvbnN0IG5vdmFRdWFudGlkYWRlID1cbiAgICAgIE51bWJlcih1c2VyQcOnw7Vlc1F1YW50aWRhZGUpICsgTnVtYmVyKFF1YW50aUNvbXByYUHDp8O1ZXMpO1xuXG4gICAgY29uc3Qgbm92b1ZhbG9yVG90YWwgPVxuICAgICAgTnVtYmVyKHVzZXJBw6fDtWVzUXVhbnRpZGFkZSkgKiBOdW1iZXIodXNlclByZcOnb0HDp8O1ZXMpICtcbiAgICAgIE51bWJlcihRdWFudGlDb21wcmFBw6fDtWVzKSAqIE51bWJlcihDb21wcmFQcmXDp29Bw6fDtWVzKTtcblxuICAgIGNvbnN0IHByZWNvTWVkaW8gPSBub3ZvVmFsb3JUb3RhbCAvIG5vdmFRdWFudGlkYWRlO1xuXG4gICAgY29uc3Qgbm92b3NWYWxvcmVzID0ge1xuICAgICAgbm92YVF1YW50aWRhZGUsXG4gICAgICBub3ZvVmFsb3JUb3RhbCxcbiAgICAgIHByZWNvTWVkaW8sXG4gICAgfTtcblxuICAgIE1vc3RyYVZhbG9yZXMobm92b3NWYWxvcmVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1vc3RyYVZhbG9yZXMobm92b3NWYWxvcmVzOiBub3Zvc1ZhbG9yZXMpIHtcbiAgICBzZXRQcmVjb01lZGlvKHtcbiAgICAgIHF1YW50aWRhZGVUb3RhbDogbm92b3NWYWxvcmVzLm5vdmFRdWFudGlkYWRlLFxuICAgICAgdmFsb3JUb3RhbDogbm92b3NWYWxvcmVzLm5vdm9WYWxvclRvdGFsLFxuICAgICAgbm92b1ByZWNvTWVkaW86IG5vdm9zVmFsb3Jlcy5wcmVjb01lZGlvLFxuICAgIH0pO1xuXG4gICAgc2V0TW9zdHJhUmVzdWx0KHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vc3RyYVJlc3VsdCA/IChcbiAgICAgICAgPEJhY2tncm91bmRMYXlvdXQ+XG4gICAgICAgICAgPFJlc3VsdCAvPlxuICAgICAgICA8L0JhY2tncm91bmRMYXlvdXQ+XG4gICAgICApIDogKFxuICAgICAgICA8QmFja2dyb3VuZExheW91dD5cbiAgICAgICAgICA8aDEgcm9sZT1cInRpdGxlXCI+UHJlw6dvIE3DqWRpbzwvaDE+XG5cbiAgICAgICAgICA8VmFsb3Jlc1xuICAgICAgICAgICAgYcOnw7Vlc1F1YW50aWRhZGU9e3VzZXJBw6fDtWVzUXVhbnRpZGFkZX1cbiAgICAgICAgICAgIGHDp8O1ZXNQcmXDp289e3VzZXJQcmXDp29Bw6fDtWVzfVxuICAgICAgICAgICAgVGl0dWxvPVwiQ2FydGVpcmFcIlxuICAgICAgICAgICAgQ2FydGVpcmFQbGFjZWhvbGRlcj1cIlF1YW50YXMgYcOnw7VlcyBWb2PDqiB0ZW0/XCJcbiAgICAgICAgICAgIFZhbG9yUGxhY2Vob2xkZXI9XCJRdWFsIG8gcHJlw6dvP1wiXG4gICAgICAgICAgICBkaXNwYXRjaD17c2V0VXNlckHDp8O1ZXNRdWFudGlkYWRlfVxuICAgICAgICAgICAgdXN1YXJpb1xuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8VmFsb3Jlc1xuICAgICAgICAgICAgYcOnw7Vlc1ByZcOnbz17Q29tcHJhUHJlw6dvQcOnw7Vlc31cbiAgICAgICAgICAgIGHDp8O1ZXNRdWFudGlkYWRlPXtRdWFudGlDb21wcmFBw6fDtWVzfVxuICAgICAgICAgICAgVGl0dWxvPVwiQ29tcHJhXCJcbiAgICAgICAgICAgIENhcnRlaXJhUGxhY2Vob2xkZXI9XCJRdWFudGFzIGHDp8O1ZXMgdm9jw6ogdmFpIGNvbXByYT9cIlxuICAgICAgICAgICAgVmFsb3JQbGFjZWhvbGRlcj1cIlF1YWwgbyB2YWxvciBkYSBhw6fDo28/XCJcbiAgICAgICAgICAgIGRpc3BhdGNoPXtzZXRBw6fDtWVzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8QnV0dG9uQ2FsY3VsYXJcbiAgICAgICAgICAgIG5vbWVCdXR0b249XCJDYWxjdWxhclwiXG4gICAgICAgICAgICBmdW5jYW9DaGFtYWRhPXtWZXJpZmljYVZhbG9yZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CYWNrZ3JvdW5kTGF5b3V0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJWYWxvcmVzIiwiQnV0dG9uQ2FsY3VsYXIiLCJ1c2VDb250ZXh0IiwiRmxsc0NvbnRleHQiLCJSZXN1bHQiLCJCYWNrZ3JvdW5kTGF5b3V0IiwiU3dhbCIsIkxheW91dCIsIlZlcmlmaWNhVmFsb3JlcyIsImJ1c2NhciIsInZhbG9yZXMiLCJpbmNsdWRlcyIsImJ1c2NhckluYW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsImNhbGN1bGFyUHJlY29NZWRpbyIsIm5vdmFRdWFudGlkYWRlIiwiTnVtYmVyIiwidXNlckHDp8O1ZXNRdWFudGlkYWRlIiwiUXVhbnRpQ29tcHJhQcOnw7VlcyIsIm5vdm9WYWxvclRvdGFsIiwidXNlclByZcOnb0HDp8O1ZXMiLCJDb21wcmFQcmXDp29Bw6fDtWVzIiwicHJlY29NZWRpbyIsIm5vdm9zVmFsb3JlcyIsIk1vc3RyYVZhbG9yZXMiLCJzZXRQcmVjb01lZGlvIiwicXVhbnRpZGFkZVRvdGFsIiwidmFsb3JUb3RhbCIsIm5vdm9QcmVjb01lZGlvIiwic2V0TW9zdHJhUmVzdWx0IiwibW9zdHJhUmVzdWx0IiwidXN1YXJpbyIsImHDp8O1ZXMiLCJzZXRBw6fDtWVzIiwic2V0VXNlckHDp8O1ZXNRdWFudGlkYWRlIiwiaDEiLCJyb2xlIiwiYcOnw7Vlc1F1YW50aWRhZGUiLCJhw6fDtWVzUHJlw6dvIiwiVGl0dWxvIiwiQ2FydGVpcmFQbGFjZWhvbGRlciIsIlZhbG9yUGxhY2Vob2xkZXIiLCJkaXNwYXRjaCIsIm5vbWVCdXR0b24iLCJmdW5jYW9DaGFtYWRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ })

});
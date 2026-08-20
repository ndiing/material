"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["src_demo_components_grid-compact_js"],{

/***/ "./src/demo/components/grid-compact.js"
/*!*********************************************!*\
  !*** ./src/demo/components/grid-compact.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var _material_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material/base/element.js */ \"./src/material/base/element.js\");\n\n\nclass DemoGridCompact extends _material_base_element_js__WEBPACK_IMPORTED_MODULE_1__.MdElement {\n  /* prettier-ignore */\n  render() {\n    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`\n            <md-grid class=\"demo-grid\">\n                <md-grid-column class=\"demo-grid__column\" compact=\"1\">1</md-grid-column>\n                <md-grid-column class=\"demo-grid__column\" compact=\"3\">3</md-grid-column>\n                <md-grid-column class=\"demo-grid__column\" compact=\"2\">2</md-grid-column>\n                <md-grid-column class=\"demo-grid__column\" compact=\"2\">2</md-grid-column>\n                <md-grid-column class=\"demo-grid__column\" compact=\"4\">4</md-grid-column>\n            </md-grid>\n        `;\n  }\n}\ncustomElements.define(\"demo-grid-compact\", DemoGridCompact);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement(\"demo-grid-compact\"));\n\n//# sourceURL=webpack://webpack-project/./src/demo/components/grid-compact.js?\n}");

/***/ }

}]);
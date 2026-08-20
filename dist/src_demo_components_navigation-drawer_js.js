"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["src_demo_components_navigation-drawer_js"],{

/***/ "./src/demo/components/navigation-drawer.js"
/*!**************************************************!*\
  !*** ./src/demo/components/navigation-drawer.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var _material_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material/base/element.js */ \"./src/material/base/element.js\");\n/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ \"./node_modules/lit/directives/ref.js\");\n\n\n\nclass DemoNavigationDrawer extends _material_base_element_js__WEBPACK_IMPORTED_MODULE_1__.MdElement {\n  west = (0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.createRef)();\n  constructor() {\n    super();\n    this.items5 = [{\n      id: 0,\n      leading: [{\n        component: \"icon\",\n        icon: \"image\"\n      }],\n      label: \"Item 1\",\n      selected: true\n    }, {\n      id: 1,\n      leading: [{\n        component: \"icon\",\n        icon: \"image\"\n      }],\n      label: \"Item 2\"\n    }, {\n      id: 2,\n      leading: [{\n        component: \"icon\",\n        icon: \"image\"\n      }],\n      label: \"Item 3\"\n    }, {\n      id: 3,\n      leading: [{\n        component: \"icon\",\n        icon: \"image\"\n      }],\n      label: \"Item 4\"\n    }];\n  }\n\n  /* prettier-ignore */\n  render() {\n    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`\n            <md-layout>\n                <md-navigation-drawer ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(this.west)} .items=\"${this.items5}\" open></md-navigation-drawer>\n                <md-layout-item region=\"center\">\n                    \n                    <md-grid class=\"demo-grid\">\n                        <md-grid-column expanded=\"12\" medium=\"8\" compact=\"4\">\n                            <md-grid>\n                                <md-grid-column expanded=\"12\" medium=\"8\" compact=\"8\">\n                                    <h3>Standard navigation drawer</h3>\n                                </md-grid-column>\n\n                                <md-grid-column expanded=\"6\" medium=\"4\" compact=\"4\">\n                                    <md-button label=\"Toggle\" @click=\"${this.handleClickWest}\"></md-button>\n                                </md-grid-column>\n                                \n                            </md-grid>\n                        </md-grid-column>\n                        \n                    </md-grid>\n                </md-layout-item>\n            </md-layout>\n        `;\n  }\n  handleClickWest() {\n    this.west.value.toggle();\n  }\n}\ncustomElements.define(\"demo-navigation-drawer\", DemoNavigationDrawer);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement(\"demo-navigation-drawer\"));\n\n//# sourceURL=webpack://webpack-project/./src/demo/components/navigation-drawer.js?\n}");

/***/ }

}]);
"use strict";
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    };
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdSheetComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
/**
 * @extends MdComponent
 * @element md-sheet
 * @fires MdSheetComponent#onSheetShow
 * @fires MdSheetComponent#onSheetClose
 * @fires MdSheetComponent#onSheetShown
 * @fires MdSheetComponent#onSheetClosed
 * @fires MdSheetComponent#onSheetScrimClose
 * @fires MdSheetComponent#onSheetIconButtonClick
 * @fires MdSheetComponent#onSheetButtonClick
 */
var MdSheetComponent = /** @class */ (function (_super) {
    __extends(MdSheetComponent, _super);
    /**
     */
    function MdSheetComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.regions = ["north", "east", "south", "west", "center"];
        _this.body = Array.from(_this.childNodes);
        _this.region = "center";
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdSheetComponent.prototype.renderIcon = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([' <md-icon .data="', '">', "</md-icon> "], [' <md-icon .data="', '">', "</md-icon> "])), item, item.icon);
    };
    /**
     * @param {String} [item]
     */
    MdSheetComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '], ['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleSheetIconButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdSheetComponent.prototype.renderButton = function (item) {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '], ['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleSheetButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdSheetComponent.prototype.renderSpacer = function (item) {
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([' <div class="md-sheet__spacer"></div> '], [' <div class="md-sheet__spacer"></div> '])));
    };
    /**
     * @param {String} [item]
     * @param {String} [component="icon"]
     */
    MdSheetComponent.prototype.renderComponent = function (item, component) {
        var _this = this;
        if (component === void 0) {
            component = "icon";
        }
        var components = [
            [
                "icon",
                function () {
                    return _this.renderIcon(item);
                },
            ],
            [
                "icon-button",
                function () {
                    return _this.renderIconButton(item);
                },
            ],
            [
                "button",
                function () {
                    return _this.renderButton(item);
                },
            ],
            [
                "spacer",
                function () {
                    return _this.renderSpacer(item);
                },
            ],
        ];
        return (0, choose_js_1.choose)(item.component || component, components, function () {
            return lit_1.nothing;
        });
    };
    /**
     */
    MdSheetComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (0, lit_1.html)(
            templateObject_15 || (templateObject_15 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])),
            ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) || this.label || this.sublabel || ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.length)
                ? (0, lit_1.html)(
                      templateObject_10 || (templateObject_10 = __makeTemplateObject([' <div class="md-sheet__header">', " ", " ", "</div> "], [' <div class="md-sheet__header">', " ", " ", "</div> "])),
                      ((_c = this.icons) === null || _c === void 0 ? void 0 : _c.length)
                          ? (0, lit_1.html)(
                                templateObject_5 || (templateObject_5 = __makeTemplateObject([' <div class="md-sheet__icons">', "</div> "], [' <div class="md-sheet__icons">', "</div> "])),
                                this.icons.map(function (icon) {
                                    return _this.renderComponent(icon, "icon");
                                }),
                            )
                          : lit_1.nothing,
                      this.label || this.sublabel ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject([' <div class="md-sheet__labels">', " ", "</div> "], [' <div class="md-sheet__labels">', " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(['<div class="md-sheet__label">', "</div>"], ['<div class="md-sheet__label">', "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(['<div class="md-sheet__sublabel">', "</div>"], ['<div class="md-sheet__sublabel">', "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing,
                      ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.length)
                          ? (0, lit_1.html)(
                                templateObject_9 || (templateObject_9 = __makeTemplateObject([' <div class="md-sheet__actions">', "</div> "], [' <div class="md-sheet__actions">', "</div> "])),
                                this.actions.map(function (action) {
                                    return _this.renderComponent(action, "icon-button");
                                }),
                            )
                          : lit_1.nothing,
                  )
                : lit_1.nothing,
            ((_e = this.body) === null || _e === void 0 ? void 0 : _e.length) || ((_f = this.buttons) === null || _f === void 0 ? void 0 : _f.length)
                ? (0, lit_1.html)(
                      templateObject_14 || (templateObject_14 = __makeTemplateObject([' <div class="md-sheet__wrapper">', " ", "</div> "], [' <div class="md-sheet__wrapper">', " ", "</div> "])),
                      ((_g = this.body) === null || _g === void 0 ? void 0 : _g.length) ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(['<div class="md-sheet__body">', "</div>"], ['<div class="md-sheet__body">', "</div>"])), this.body) : lit_1.nothing,
                      ((_h = this.buttons) === null || _h === void 0 ? void 0 : _h.length)
                          ? (0, lit_1.html)(
                                templateObject_13 || (templateObject_13 = __makeTemplateObject([' <div class="md-sheet__footer">', "</div> "], [' <div class="md-sheet__footer">', "</div> "])),
                                ((_j = this.buttons) === null || _j === void 0 ? void 0 : _j.length)
                                    ? (0, lit_1.html)(
                                          templateObject_12 || (templateObject_12 = __makeTemplateObject([' <div class="md-sheet__buttons">', "</div> "], [' <div class="md-sheet__buttons">', "</div> "])),
                                          this.buttons.map(function (button) {
                                              return _this.renderComponent(button, "button");
                                          }),
                                      )
                                    : lit_1.nothing,
                            )
                          : lit_1.nothing,
                  )
                : lit_1.nothing,
        );
    };
    /**
     * @async
     */
    MdSheetComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-sheet");
                        this.style.setProperty("--md-comp-sheet-animation", "none");
                        this.sheetScrim = document.createElement("md-scrim");
                        this.parentElement.insertBefore(this.sheetScrim, this.nextElementSibling);
                        this.handleSheetScrimClose = this.handleSheetScrimClose.bind(this);
                        this.sheetScrim.addEventListener("onScrimClose", this.handleSheetScrimClose);
                        if (this.modal && this.open) this.sheetScrim.show();
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
                        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdSheetComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.sheetScrim.removeEventListener("onScrimClose", this.handleSheetScrimClose);
        this.sheetScrim.remove();
    };
    /**
     * @param {String} [changedProperties]
     */
    MdSheetComponent.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("region")) {
            this.regions.forEach(function (region) {
                _this.classList.toggle("md-sheet--".concat(region), region === _this.region);
            });
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle("md-sheet--modal", !!this.modal);
        }
    };
    /**
     */
    MdSheetComponent.prototype.show = function () {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.handleSheetShown = this.handleSheetShown.bind(this);
        this.addEventListener("animationend", this.handleSheetShown);
        this.open = true;
        if (this.modal) this.sheetScrim.show();
        this.emit("onSheetShow");
    };
    /**
     */
    MdSheetComponent.prototype.close = function () {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.handleSheetClosed = this.handleSheetClosed.bind(this);
        this.addEventListener("animationend", this.handleSheetClosed);
        this.open = false;
        if (this.sheetScrim.open) this.sheetScrim.close();
        this.emit("onSheetClose");
    };
    /**
     */
    MdSheetComponent.prototype.toggle = function () {
        if (this.open) this.close();
        else this.show();
    };
    /**
     * @param {Object} [event]
     */
    MdSheetComponent.prototype.handleSheetShown = function (event) {
        this.removeEventListener("animationend", this.handleSheetShown);
        this.emit("onSheetShown");
    };
    /**
     * @param {Object} [event]
     */
    MdSheetComponent.prototype.handleSheetClosed = function (event) {
        this.removeEventListener("animationend", this.handleSheetClosed);
        this.emit("onSheetClosed");
    };
    /**
     * @param {Object} [event]
     */
    MdSheetComponent.prototype.handleSheetScrimClose = function (event) {
        if (this.open) this.close();
        this.emit("onSheetScrimClose", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdSheetComponent.prototype.handleSheetIconButtonClick = function (event) {
        this.emit("onSheetIconButtonClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdSheetComponent.prototype.handleSheetButtonClick = function (event) {
        this.emit("onSheetButtonClick", { event: event });
    };
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {String} [region]
     * @property {Boolean} [modal]
     */
    MdSheetComponent.properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        region: { type: String },
        modal: { type: Boolean, reflect: true },
    };
    return MdSheetComponent;
})(component_1.MdComponent);
exports.MdSheetComponent = MdSheetComponent;
customElements.define("md-sheet", MdSheetComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

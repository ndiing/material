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
exports.MdTopAppBarComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
/**
 * @extends MdComponent
 * @element md-top-app-bar
 * @fires MdTopAppBarComponent#onTopAppBarShown
 * @fires MdTopAppBarComponent#onTopAppBarClosed
 * @fires MdTopAppBarComponent#onTopAppBarIconButtonClick
 */
var MdTopAppBarComponent = /** @class */ (function (_super) {
    __extends(MdTopAppBarComponent, _super);
    /**
     */
    function MdTopAppBarComponent() {
        return _super.call(this) || this;
    }
    /**
     * @param {String} [item]
     */
    MdTopAppBarComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '], ['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleTopAppBarIconButtonClick);
    };
    /**
     */
    MdTopAppBarComponent.prototype.render = function () {
        var _this = this;
        var _a, _b;
        return (0, lit_1.html)(
            templateObject_7 || (templateObject_7 = __makeTemplateObject([" ", " ", " ", " "], [" ", " ", " ", " "])),
            ((_a = this.leadingActions) === null || _a === void 0 ? void 0 : _a.length)
                ? (0, lit_1.html)(
                      templateObject_2 || (templateObject_2 = __makeTemplateObject([' <div class="md-top-app-bar__actions">', "</div> "], [' <div class="md-top-app-bar__actions">', "</div> "])),
                      this.leadingActions.map(function (action) {
                          return _this.renderIconButton(action);
                      }),
                  )
                : lit_1.nothing,
            this.label || this.sublabel ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject([' <div class="md-top-app-bar__labels">', " ", "</div> "], [' <div class="md-top-app-bar__labels">', " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(['<div class="md-top-app-bar__label">', "</div>"], ['<div class="md-top-app-bar__label">', "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(['<div class="md-top-app-bar__sublabel">', "</div>"], ['<div class="md-top-app-bar__sublabel">', "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing,
            ((_b = this.trailingActions) === null || _b === void 0 ? void 0 : _b.length)
                ? (0, lit_1.html)(
                      templateObject_6 || (templateObject_6 = __makeTemplateObject([' <div class="md-top-app-bar__actions">', "</div> "], [' <div class="md-top-app-bar__actions">', "</div> "])),
                      this.trailingActions.map(function (action) {
                          return _this.renderIconButton(action);
                      }),
                  )
                : lit_1.nothing,
        );
    };
    /**
     * @async
     */
    MdTopAppBarComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-top-app-bar");
                        this.style.setProperty("--md-comp-sheet-animation", "none");
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
     * @param {String} [changedProperties]
     */
    MdTopAppBarComponent.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
    };
    /**
     */
    MdTopAppBarComponent.prototype.show = function () {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onTopAppBarShown");
    };
    /**
     */
    MdTopAppBarComponent.prototype.close = function () {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onTopAppBarClosed");
    };
    /**
     */
    MdTopAppBarComponent.prototype.toggle = function () {
        if (this.open) this.close();
        else this.show();
    };
    /**
     * @param {Object} [event]
     */
    MdTopAppBarComponent.prototype.handleTopAppBarIconButtonClick = function (event) {
        this.emit("onTopAppBarIconButtonClick", { event: event });
    };
    /**
     * @property {Array} [leadingActions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [trailingActions]
     * @property {Boolean} [open]
     */
    MdTopAppBarComponent.properties = {
        leadingActions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        trailingActions: { type: Array },
        open: { type: Boolean, reflect: true },
    };
    return MdTopAppBarComponent;
})(component_1.MdComponent);
exports.MdTopAppBarComponent = MdTopAppBarComponent;
customElements.define("md-top-app-bar", MdTopAppBarComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

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
exports.MdNavigationListItemComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var ripple_1 = require("../ripple/ripple");
/**
 * @extends MdComponent
 * @element md-navigation-list-item
 * @fires MdNavigationListItemComponent#onNavigationListItemSelected
 */
var MdNavigationListItemComponent = /** @class */ (function (_super) {
    __extends(MdNavigationListItemComponent, _super);
    /**
     */
    function MdNavigationListItemComponent() {
        var _this = _super.call(this) || this;
        _this.rippleOptions = {};
        return _this;
    }
    /**
     */
    MdNavigationListItemComponent.prototype.render = function () {
        return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            ", " ", " ", "\n            ", "\n        "], ["\n            ", " ", " ", "\n            ", "\n        "])), this.icon ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['<md-icon class="md-navigation-list__icon">', "</md-icon>"], ['<md-icon class="md-navigation-list__icon">', "</md-icon>"])), this.icon) : lit_1.nothing, this.label || this.sublabel ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([' <div class="md-navigation-list__labels">', " ", "</div> "], [' <div class="md-navigation-list__labels">', " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(['<div class="md-navigation-list__label">', "</div>"], ['<div class="md-navigation-list__label">', "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(['<div class="md-navigation-list__sublabel">', "</div>"], ['<div class="md-navigation-list__sublabel">', "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing, this.text ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(['<div class="md-navigation-list__text">', "</div>"], ['<div class="md-navigation-list__text">', "</div>"])), this.text) : lit_1.nothing, this.badge !== undefined ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(['<md-badge\n                      class="md-navigation-list__badge"\n                      .label="', '"\n                  ></md-badge>'], ['<md-badge\n                      class="md-navigation-list__badge"\n                      .label="', '"\n                  ></md-badge>'])), this.badge) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdNavigationListItemComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-navigation-list__item");
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.ripple = new ripple_1.Ripple(this, this.rippleOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @async
     */
    MdNavigationListItemComponent.prototype.disconnectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.disconnectedCallback.call(this);
                if (this.ripple) this.ripple.destroy();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @async
     * @param {String} [changedProperties]
     */
    MdNavigationListItemComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.updated.call(this, changedProperties);
                if (changedProperties.has("icon")) {
                    this.classList.toggle("md-navigation-list__item--with-icon", !!this.icon);
                }
                if (changedProperties.has("selected") && this.selected) {
                    this.emit("onNavigationListItemSelected", {
                        navigationListItem: this,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [routerLink]
     * @property {Object} [rippleOptions]
     * @property {Number} [badge]
     */
    MdNavigationListItemComponent.properties = {
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        rippleOptions: { type: Object },
        badge: { type: Number },
    };
    return MdNavigationListItemComponent;
})(component_1.MdComponent);
exports.MdNavigationListItemComponent = MdNavigationListItemComponent;
customElements.define("md-navigation-list-item", MdNavigationListItemComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

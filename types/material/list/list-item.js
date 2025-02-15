"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdListItemComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var ripple_1 = require("../ripple/ripple");
/**
 * @extends MdComponent
 * @element md-list-item
 * @fires MdListItemComponent#onListItemSelected
 */
var MdListItemComponent = /** @class */ (function (_super) {
    __extends(MdListItemComponent, _super);
    /**
     */
    function MdListItemComponent() {
        var _this = _super.call(this) || this;
        _this.rippleOptions = {};
        return _this;
    }
    /**
     */
    MdListItemComponent.prototype.render = function () {
        return (0, lit_1.html)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", " ", " ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        "], ["\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", " ", " ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.leadingCheckbox
            ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<md-checkbox\n                      class=\"md-list__checkbox\"\n                      .checked=\"", "\"\n                  ></md-checkbox>"], ["<md-checkbox\n                      class=\"md-list__checkbox\"\n                      .checked=\"", "\"\n                  ></md-checkbox>"])), this.selected) : lit_1.nothing, this.leadingRadioButton
            ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<md-radio-button\n                      class=\"md-list__radio-button\"\n                      .checked=\"", "\"\n                  ></md-radio-button>"], ["<md-radio-button\n                      class=\"md-list__radio-button\"\n                      .checked=\"", "\"\n                  ></md-radio-button>"])), this.selected) : lit_1.nothing, this.leadingSwitch
            ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<md-switch\n                      class=\"md-list__switch\"\n                      .checked=\"", "\"\n                  ></md-switch>"], ["<md-switch\n                      class=\"md-list__switch\"\n                      .checked=\"", "\"\n                  ></md-switch>"])), this.selected) : lit_1.nothing, this.avatar
            ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<md-image\n                      class=\"md-list__avatar\"\n                      .src=\"", "\"\n                      circular\n                  ></md-image>"], ["<md-image\n                      class=\"md-list__avatar\"\n                      .src=\"", "\"\n                      circular\n                  ></md-image>"])), (0, if_defined_js_1.ifDefined)(this.avatar)) : lit_1.nothing, this.image
            ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<md-image\n                      class=\"md-list__image\"\n                      .src=\"", "\"\n                  ></md-image>"], ["<md-image\n                      class=\"md-list__image\"\n                      .src=\"", "\"\n                  ></md-image>"])), (0, if_defined_js_1.ifDefined)(this.image)) : lit_1.nothing, this.video
            ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<md-image\n                      class=\"md-list__video\"\n                      .src=\"", "\"\n                      ratio=\"3/2\"\n                  ></md-image>"], ["<md-image\n                      class=\"md-list__video\"\n                      .src=\"", "\"\n                      ratio=\"3/2\"\n                  ></md-image>"])), (0, if_defined_js_1.ifDefined)(this.video)) : lit_1.nothing, this.icon ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<md-icon class=\"md-list__icon\">", "</md-icon>"], ["<md-icon class=\"md-list__icon\">", "</md-icon>"])), this.icon) : lit_1.nothing, this.label || this.sublabel ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject([" <div class=\"md-list__labels\">", " ", "</div> "], [" <div class=\"md-list__labels\">", " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div class=\"md-list__label\">", "</div>"], ["<div class=\"md-list__label\">", "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["<div class=\"md-list__sublabel\">", "</div>"], ["<div class=\"md-list__sublabel\">", "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing, this.text ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["<div class=\"md-list__text\">", "</div>"], ["<div class=\"md-list__text\">", "</div>"])), this.text) : lit_1.nothing, this.trailingCheckbox
            ? (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["<md-checkbox\n                      class=\"md-list__checkbox\"\n                      .checked=\"", "\"\n                  ></md-checkbox>"], ["<md-checkbox\n                      class=\"md-list__checkbox\"\n                      .checked=\"", "\"\n                  ></md-checkbox>"])), this.selected) : lit_1.nothing, this.trailingRadioButton
            ? (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["<md-radio-button\n                      class=\"md-list__radio-button\"\n                      .checked=\"", "\"\n                  ></md-radio-button>"], ["<md-radio-button\n                      class=\"md-list__radio-button\"\n                      .checked=\"", "\"\n                  ></md-radio-button>"])), this.selected) : lit_1.nothing, this.trailingSwitch
            ? (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["<md-switch\n                      class=\"md-list__switch\"\n                      .checked=\"", "\"\n                  ></md-switch>"], ["<md-switch\n                      class=\"md-list__switch\"\n                      .checked=\"", "\"\n                  ></md-switch>"])), this.selected) : lit_1.nothing, this.badge !== undefined
            ? (0, lit_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["<md-badge\n                      class=\"md-list__badge\"\n                      .label=\"", "\"\n                  ></md-badge>"], ["<md-badge\n                      class=\"md-list__badge\"\n                      .label=\"", "\"\n                  ></md-badge>"])), this.badge) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdListItemComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sublabel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-list__item");
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        if (this.sublabel) {
                            sublabel = this.querySelector(".md-list__sublabel");
                            if (sublabel.scrollHeight > sublabel.clientHeight) {
                                this.classList.add("md-list__item--three-line");
                            }
                            else {
                                this.classList.add("md-list__item--two-line");
                            }
                        }
                        this.ripple = new ripple_1.Ripple(this, this.rippleOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @async
     */
    MdListItemComponent.prototype.disconnectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.disconnectedCallback.call(this);
                if (this.ripple)
                    this.ripple.destroy();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @async
     * @param {Any} [changedProperties]
     */
    MdListItemComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.updated.call(this, changedProperties);
                if (changedProperties.has("icon")) {
                    this.classList.toggle("md-list__item--with-icon", !!this.icon);
                }
                if (changedProperties.has("selected") && this.selected) {
                    this.emit("onListItemSelected", { listItem: this });
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @property {Boolean} [leadingCheckbox]
     * @property {Boolean} [leadingRadioButton]
     * @property {Boolean} [leadingSwitch]
     * @property {String} [avatar]
     * @property {String} [image]
     * @property {String} [video]
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {String} [text]
     * @property {Boolean} [trailingCheckbox]
     * @property {Boolean} [trailingRadioButton]
     * @property {Boolean} [trailingSwitch]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [routerLink]
     * @property {Object} [rippleOptions]
     * @property {Number} [badge]
     */
    MdListItemComponent.properties = {
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        avatar: { type: String },
        image: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        text: { type: String },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        rippleOptions: { type: Object },
        badge: { type: Number },
    };
    return MdListItemComponent;
}(component_1.MdComponent));
exports.MdListItemComponent = MdListItemComponent;
customElements.define("md-list-item", MdListItemComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;

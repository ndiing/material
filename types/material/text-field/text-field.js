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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.MdTextFieldComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * @extends MdComponent
 * @element md-text-field
 * @fires MdTextFieldComponent#onTextFieldFocus
 * @fires MdTextFieldComponent#onTextFieldBlur
 * @fires MdTextFieldComponent#onTextFieldInput
 * @fires MdTextFieldComponent#onTextFieldInvalid
 * @fires MdTextFieldComponent#onTextFieldReset
 * @fires MdTextFieldComponent#onTextFieldIconButtonCancelClick
 * @fires MdTextFieldComponent#onTextFieldIconButtonClick
 * @fires MdTextFieldComponent#onTextFieldClick
 */
var MdTextFieldComponent = /** @class */ (function (_super) {
    __extends(MdTextFieldComponent, _super);
    /**
     */
    function MdTextFieldComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.variants = ["outlined", "filled"];
        _this.type = "text";
        _this.title = "";
        _this.autocomplete = "off";
        _this.actions = [];
        return _this;
    }
    Object.defineProperty(MdTextFieldComponent.prototype, "leadingActions", {
        /**
         * @readonly
         */
        get: function () {
            var actions = [];
            if (this.errorIcon && this.error)
                actions = actions.concat([
                    {
                        id: "error",
                        component: "icon",
                        icon: "error",
                        classMap: { "md-text-field__icon--error": true },
                    },
                ]);
            if (this.cancelAction && this.value)
                actions = actions.concat([
                    {
                        id: "cancel",
                        component: "icon-button",
                        icon: "cancel",
                    },
                ]);
            return actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTextFieldComponent.prototype, "trailingActions", {
        /**
         * @readonly
         */
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTextFieldComponent.prototype, "textFieldNative", {
        /**
         * @readonly
         */
        get: function () {
            return this.querySelector(".md-text-field__native");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTextFieldComponent.prototype, "textFieldContainer", {
        /**
         * @readonly
         */
        get: function () {
            return this.querySelector(".md-text-field__container");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {String} [item]
     */
    MdTextFieldComponent.prototype.renderIcon = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <md-icon\n                .data=\"", "\"\n                class=\"", "\"\n                >", "</md-icon\n            >\n        "], ["\n            <md-icon\n                .data=\"", "\"\n                class=\"", "\"\n                >", "</md-icon\n            >\n        "])), item, (0, class_map_js_1.classMap)(__assign({}, item.classMap)), item.icon);
    };
    /**
     * @param {String} [item]
     */
    MdTextFieldComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <md-icon-button\n                .data=\"", "\"\n                class=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "], ["\n            <md-icon-button\n                .data=\"", "\"\n                class=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "])), item, (0, class_map_js_1.classMap)(__assign({}, item.classMap)), (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleTextFieldIconButtonClick);
    };
    /**
     * @param {String} [item]
     * @param {String} [component="icon"]
     */
    MdTextFieldComponent.prototype.renderComponent = function (item, component) {
        var _this = this;
        if (component === void 0) { component = "icon"; }
        return (0, choose_js_1.choose)(item.component || component, [
            ["icon", function () { return _this.renderIcon(item); }],
            ["icon-button", function () { return _this.renderIconButton(item); }],
        ], function () { return lit_1.nothing; });
    };
    /**
     */
    MdTextFieldComponent.prototype.render = function () {
        var _this = this;
        var _a;
        var actions = this.leadingActions.concat(this.actions).concat(this.trailingActions);
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            ", "\n            <div class=\"md-text-field__container\">\n                ", "\n                ", "\n                <input\n                    .name=\"", "\"\n                    .type=\"", "\"\n                    .value=\"", "\"\n                    .placeholder=\"", "\"\n                    .required=\"", "\"\n                    .readOnly=\"", "\"\n                    .title=\"", "\"\n                    .autocomplete=\"", "\"\n                    .defaultValue=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .minLength=\"", "\"\n                    .maxLength=\"", "\"\n                    .pattern=\"", "\"\n                    @focus=\"", "\"\n                    @blur=\"", "\"\n                    @input=\"", "\"\n                    @invalid=\"", "\"\n                    @reset=\"", "\"\n                    @click=\"", "\"\n                    class=\"md-text-field__native\"\n                />\n                ", "\n                ", "\n            </div>\n            ", "\n        "], ["\n            ", "\n            <div class=\"md-text-field__container\">\n                ", "\n                ", "\n                <input\n                    .name=\"", "\"\n                    .type=\"", "\"\n                    .value=\"", "\"\n                    .placeholder=\"", "\"\n                    .required=\"", "\"\n                    .readOnly=\"", "\"\n                    .title=\"", "\"\n                    .autocomplete=\"", "\"\n                    .defaultValue=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .minLength=\"", "\"\n                    .maxLength=\"", "\"\n                    .pattern=\"", "\"\n                    @focus=\"", "\"\n                    @blur=\"", "\"\n                    @input=\"", "\"\n                    @invalid=\"", "\"\n                    @reset=\"", "\"\n                    @click=\"", "\"\n                    class=\"md-text-field__native\"\n                />\n                ", "\n                ", "\n            </div>\n            ", "\n        "])), this.label ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<label class=\"md-text-field__label\">", "</label>"], ["<label class=\"md-text-field__label\">", "</label>"])), this.label) : lit_1.nothing, ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length)
            ? (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                          <div\n                            class=\"md-text-field__icons\"\n                          >\n                              ", "\n                          </div>\n                      "], ["\n                          <div\n                            class=\"md-text-field__icons\"\n                          >\n                              ", "\n                          </div>\n                      "])), this.icons.map(function (item) { return _this.renderComponent(item, "icon"); })) : lit_1.nothing, this.prefix ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<div class=\"md-text-field__prefix\">", "</div>"], ["<div class=\"md-text-field__prefix\">", "</div>"])), this.prefix) : lit_1.nothing, (0, if_defined_js_1.ifDefined)(this.name), (0, if_defined_js_1.ifDefined)(this.type), (0, if_defined_js_1.ifDefined)(this.value), (0, if_defined_js_1.ifDefined)(this.placeholder), (0, if_defined_js_1.ifDefined)(this.required), (0, if_defined_js_1.ifDefined)(this.readOnly), (0, if_defined_js_1.ifDefined)(this.title), (0, if_defined_js_1.ifDefined)(this.autocomplete), (0, if_defined_js_1.ifDefined)(this.defaultValue), (0, if_defined_js_1.ifDefined)(this.min), (0, if_defined_js_1.ifDefined)(this.max), (0, if_defined_js_1.ifDefined)(this.minLength), (0, if_defined_js_1.ifDefined)(this.maxLength), (0, if_defined_js_1.ifDefined)(this.pattern), this.handleTextFieldFocus, this.handleTextFieldBlur, this.handleTextFieldInput, this.handleTextFieldInvalid, this.handleTextFieldReset, this.handleTextFieldClick, this.suffix
            ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<div\n                          class=\"md-text-field__suffix\"\n                      >\n                          ", "\n                      </div>"], ["<div\n                          class=\"md-text-field__suffix\"\n                      >\n                          ", "\n                      </div>"])), this.suffix) : lit_1.nothing, (actions === null || actions === void 0 ? void 0 : actions.length)
            ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                          <div\n                              class=\"md-text-field__actions\"\n                          >\n                              ", "\n                          </div>\n                      "], ["\n                          <div\n                              class=\"md-text-field__actions\"\n                          >\n                              ", "\n                          </div>\n                      "])), actions.map(function (item) { return _this.renderComponent(item, "icon-button"); })) : lit_1.nothing, this.text || this.error || this.counter
            ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                      <div\n                          class=\"md-text-field__wrapper\"\n                      >\n                          ", "\n                          ", "\n                      </div>\n                  "], ["\n                      <div\n                          class=\"md-text-field__wrapper\"\n                      >\n                          ", "\n                          ", "\n                      </div>\n                  "])), this.text || this.error
                ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["<div\n                                    class=\"md-text-field__text\"\n                                >\n                                    ", "\n                                </div>"], ["<div\n                                    class=\"md-text-field__text\"\n                                >\n                                    ", "\n                                </div>"])), this.error || this.text) : lit_1.nothing, this.counter
                ? (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["<div\n                                    class=\"md-text-field__counter\"\n                                >\n                                    ", "\n                                </div>"], ["<div\n                                    class=\"md-text-field__counter\"\n                                >\n                                    ", "\n                                </div>"])), this.counter) : lit_1.nothing) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdTextFieldComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.defaultValue = this.value;
                        this.classList.add("md-text-field");
                        this.classList.toggle("md-text-field--populated", !!this.value);
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.textFieldOffset = this.querySelector(".md-text-field__prefix,.md-text-field__native");
                        this.style.setProperty("--md-comp-text-field-offset-left", this.textFieldOffset.offsetLeft + "px");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {String} [changedProperties]
     */
    MdTextFieldComponent.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach(function (variant) {
                _this.classList.toggle("md-text-field--".concat(variant), variant === _this.variant);
            });
        }
        if (changedProperties.has("separateLabel")) {
            this.classList.toggle("md-text-field--separate-label", !!this.separateLabel);
        }
        if (changedProperties.has("label")) {
            this.classList.toggle("md-text-field--with-label", !!this.label);
        }
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldFocus = function (event) {
        this.classList.add("md-text-field--focus");
        this.emit("onTextFieldFocus", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldBlur = function (event) {
        this.classList.remove("md-text-field--focus");
        this.emit("onTextFieldBlur", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldInput = function (event) {
        this.updateValue();
        this.emit("onTextFieldInput", { event: event });
    };
    /**
     */
    MdTextFieldComponent.prototype.updateValue = function () {
        this.value = this.textFieldNative.value;
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--populated", !!this.textFieldNative.value);
        this.classList.toggle("md-text-field--error", !!this.error);
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldInvalid = function (event) {
        event.preventDefault();
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldInvalid", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldReset = function (event) {
        this.value = this.defaultValue;
        this.error = undefined;
        this.classList.toggle("md-text-field--populated", !!this.value);
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldReset", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldIconButtonCancelClick = function (event) {
        this.textFieldNative.value = "";
        this.value = this.textFieldNative.value;
        this.error = undefined;
        this.classList.toggle("md-text-field--populated", !!this.textFieldNative.value);
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldIconButtonCancelClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldIconButtonClick = function (event) {
        var data = event.currentTarget.data;
        if (data.id === "cancel")
            return this.handleTextFieldIconButtonCancelClick(event);
        this.emit("onTextFieldIconButtonClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTextFieldComponent.prototype.handleTextFieldClick = function (event) {
        event.preventDefault();
        this.emit("onTextFieldClick", { event: event });
    };
    /**
     * @property {String} [label]
     * @property {Boolean} [separateLabel]
     * @property {Array} [icons]
     * @property {String} [prefix]
     * @property {String} [suffix]
     * @property {Array} [actions]
     * @property {String} [text]
     * @property {String} [error]
     * @property {String} [counter]
     * @property {String} [name]
     * @property {String} [type]
     * @property {String} [value]
     * @property {String} [placeholder]
     * @property {String} [title]
     * @property {String} [autocomplete]
     * @property {Boolean} [required]
     * @property {Boolean} [readOnly]
     * @property {Number} [min]
     * @property {Number} [max]
     * @property {Number} [minLength]
     * @property {Number} [maxLength]
     * @property {String} [pattern]
     * @property {String} [variant]
     * @property {Boolean} [disabled]
     * @property {Boolean} [errorIcon]
     * @property {Boolean} [cancelAction]
     */
    MdTextFieldComponent.properties = {
        label: { type: String },
        separateLabel: { type: Boolean },
        icons: { type: Array },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },
        error: { type: String },
        counter: { type: String },
        name: { type: String },
        type: { type: String },
        value: { type: String },
        placeholder: { type: String },
        title: { type: String },
        autocomplete: { type: String },
        required: { type: Boolean },
        readOnly: { type: Boolean },
        min: { type: Number },
        max: { type: Number },
        minLength: { type: Number },
        maxLength: { type: Number },
        pattern: { type: String },
        variant: { type: String },
        disabled: { type: Boolean, reflect: true },
        errorIcon: { type: Boolean },
        cancelAction: { type: Boolean },
    };
    return MdTextFieldComponent;
}(component_1.MdComponent));
exports.MdTextFieldComponent = MdTextFieldComponent;
customElements.define("md-text-field", MdTextFieldComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

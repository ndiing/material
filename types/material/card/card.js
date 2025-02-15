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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdCardComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
/**
 * @extends MdComponent
 * @element md-card
 * @fires MdCardComponent#onCardIconButtonClick
 * @fires MdCardComponent#onCardButtonClick
 */
var MdCardComponent = /** @class */ (function (_super) {
    __extends(MdCardComponent, _super);
    /**
     */
    function MdCardComponent() {
        var _this = _super.call(this) || this;
        _this.body = Array.from(_this.childNodes);
        return _this;
    }
    /**
     * @param {Any} [item]
     */
    MdCardComponent.prototype.renderIcon = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <md-icon .data=\"", "\">", "</md-icon> "], [" <md-icon .data=\"", "\">", "</md-icon> "])), item, item.icon);
    };
    /**
     * @param {Any} [item]
     */
    MdCardComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "], ["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleCardIconButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdCardComponent.prototype.renderButton = function (item) {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "], ["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleCardButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdCardComponent.prototype.renderSpacer = function (item) {
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([" <div class=\"md-card__spacer\"></div> "], [" <div class=\"md-card__spacer\"></div> "])));
    };
    /**
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    MdCardComponent.prototype.renderComponent = function (item, component) {
        var _this = this;
        if (component === void 0) { component = "icon"; }
        var components = [
            ["icon", function () { return _this.renderIcon(item); }],
            ["icon-button", function () { return _this.renderIconButton(item); }],
            ["button", function () { return _this.renderButton(item); }],
            ["spacer", function () { return _this.renderSpacer(item); }],
        ];
        return (0, choose_js_1.choose)(item.component || component, components, function () { return lit_1.nothing; });
    };
    /**
     */
    MdCardComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (0, lit_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])), ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) || this.label || this.sublabel || ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.length) ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject([" <div class=\"md-card__header\">", " ", " ", "</div> "], [" <div class=\"md-card__header\">", " ", " ", "</div> "])), ((_c = this.icons) === null || _c === void 0 ? void 0 : _c.length) ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject([" <div class=\"md-card__icons\">", "</div> "], [" <div class=\"md-card__icons\">", "</div> "])), this.icons.map(function (icon) { return _this.renderComponent(icon, "icon"); })) : lit_1.nothing, this.label || this.sublabel ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject([" <div class=\"md-card__labels\">", " ", "</div> "], [" <div class=\"md-card__labels\">", " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<div class=\"md-card__label\">", "</div>"], ["<div class=\"md-card__label\">", "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["<div class=\"md-card__sublabel\">", "</div>"], ["<div class=\"md-card__sublabel\">", "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.length) ? (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject([" <div class=\"md-card__actions\">", "</div> "], [" <div class=\"md-card__actions\">", "</div> "])), this.actions.map(function (action) { return _this.renderComponent(action, "icon-button"); })) : lit_1.nothing) : lit_1.nothing, ((_e = this.body) === null || _e === void 0 ? void 0 : _e.length) || ((_f = this.buttons) === null || _f === void 0 ? void 0 : _f.length) ? (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject([" <div class=\"md-card__wrapper\">", " ", "</div> "], [" <div class=\"md-card__wrapper\">", " ", "</div> "])), ((_g = this.body) === null || _g === void 0 ? void 0 : _g.length) ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["<div class=\"md-card__body\">", "</div>"], ["<div class=\"md-card__body\">", "</div>"])), this.body) : lit_1.nothing, ((_h = this.buttons) === null || _h === void 0 ? void 0 : _h.length) ? (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject([" <div class=\"md-card__footer\">", "</div> "], [" <div class=\"md-card__footer\">", "</div> "])), ((_j = this.buttons) === null || _j === void 0 ? void 0 : _j.length) ? (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject([" <div class=\"md-card__buttons\">", "</div> "], [" <div class=\"md-card__buttons\">", "</div> "])), this.buttons.map(function (button) { return _this.renderComponent(button, "button"); })) : lit_1.nothing) : lit_1.nothing) : lit_1.nothing);
    };
    /**
     */
    MdCardComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-card");
    };
    /**
     * @param {Any} [event]
     */
    MdCardComponent.prototype.handleCardIconButtonClick = function (event) {
        this.emit("onCardIconButtonClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdCardComponent.prototype.handleCardButtonClick = function (event) {
        this.emit("onCardButtonClick", { event: event });
    };
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     */
    MdCardComponent.properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
    };
    return MdCardComponent;
}(component_1.MdComponent));
exports.MdCardComponent = MdCardComponent;
customElements.define("md-card", MdCardComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

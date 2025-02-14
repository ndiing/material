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
exports.MdProgressIndicatorComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
/**
 * @extends MdComponent
 * @element md-progress-indicator
 */
var MdProgressIndicatorComponent = /** @class */ (function (_super) {
    __extends(MdProgressIndicatorComponent, _super);
    /**
     */
    function MdProgressIndicatorComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.variants = ["circular"];
        _this.max = 100;
        _this.value = 0;
        return _this;
    }
    /**
     */
    MdProgressIndicatorComponent.prototype.renderProgressIndicatorNative = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <progress\n                class=\"md-progress-indicator__native\"\n                max=\"", "\"\n                value=\"", "\"\n            ></progress>\n        "], ["\n            <progress\n                class=\"md-progress-indicator__native\"\n                max=\"", "\"\n                value=\"", "\"\n            ></progress>\n        "])), this.max, this.value);
    };
    /**
     */
    MdProgressIndicatorComponent.prototype.renderProgressIndicatorCircular = function () {
        this.r = ((36 / 40) * 100) / 2;
        this.strokeWidth = (4 / 40) * 100;
        this.strokeDasharray = 2 * Math.PI * this.r;
        this.strokeDashoffset = this.strokeDasharray * (1 - this.value / this.max);
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"md-progress-indicator__wrapper\">\n                <svg\n                    class=\"md-progress-indicator__track\"\n                    viewBox=\"0 0 100 100\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                    <circle\n                        cx=\"50\"\n                        cy=\"50\"\n                        r=\"", "\"\n                        fill=\"transparent\"\n                        stroke=\"var(--md-sys-color-secondary-container)\"\n                        stroke-width=\"", "\"\n                        stroke-linecap=\"round\"\n                        stroke-dasharray=\"", "\"\n                        stroke-dashoffset=\"0\"\n                    />\n                </svg>\n                <svg\n                    class=\"md-progress-indicator__indicator\"\n                    viewBox=\"0 0 100 100\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                    <circle\n                        cx=\"50\"\n                        cy=\"50\"\n                        r=\"", "\"\n                        fill=\"transparent\"\n                        stroke=\"var(--md-sys-color-primary)\"\n                        stroke-width=\"", "\"\n                        stroke-linecap=\"round\"\n                        stroke-dasharray=\"", "\"\n                        stroke-dashoffset=\"", "\"\n                    />\n                </svg>\n            </div>\n        "], ["\n            <div class=\"md-progress-indicator__wrapper\">\n                <svg\n                    class=\"md-progress-indicator__track\"\n                    viewBox=\"0 0 100 100\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                    <circle\n                        cx=\"50\"\n                        cy=\"50\"\n                        r=\"", "\"\n                        fill=\"transparent\"\n                        stroke=\"var(--md-sys-color-secondary-container)\"\n                        stroke-width=\"", "\"\n                        stroke-linecap=\"round\"\n                        stroke-dasharray=\"", "\"\n                        stroke-dashoffset=\"0\"\n                    />\n                </svg>\n                <svg\n                    class=\"md-progress-indicator__indicator\"\n                    viewBox=\"0 0 100 100\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                    <circle\n                        cx=\"50\"\n                        cy=\"50\"\n                        r=\"", "\"\n                        fill=\"transparent\"\n                        stroke=\"var(--md-sys-color-primary)\"\n                        stroke-width=\"", "\"\n                        stroke-linecap=\"round\"\n                        stroke-dasharray=\"", "\"\n                        stroke-dashoffset=\"", "\"\n                    />\n                </svg>\n            </div>\n        "])), this.r, this.strokeWidth, this.strokeDasharray, this.r, this.strokeWidth, this.strokeDasharray, this.strokeDashoffset);
    };
    /**
     */
    MdProgressIndicatorComponent.prototype.render = function () {
        if (this.variant === "circular")
            return this.renderProgressIndicatorCircular();
        else
            return this.renderProgressIndicatorNative();
    };
    /**
     */
    MdProgressIndicatorComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-progress-indicator");
    };
    /**
     * @param {String} [changedProperties]
     */
    MdProgressIndicatorComponent.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach(function (variant) {
                _this.classList.toggle("md-progress-indicator--".concat(variant), _this.variant === variant);
            });
        }
    };
    /**
     * @property {String} [variant]
     * @property {Number} [max]
     * @property {Number} [value]
     */
    MdProgressIndicatorComponent.properties = {
        variant: { type: String },
        max: { type: Number },
        value: { type: Number },
    };
    return MdProgressIndicatorComponent;
}(component_1.MdComponent));
exports.MdProgressIndicatorComponent = MdProgressIndicatorComponent;
customElements.define("md-progress-indicator", MdProgressIndicatorComponent);
var templateObject_1, templateObject_2;

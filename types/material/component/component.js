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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdComponent = void 0;
var lit_1 = require("lit");
var localize_1 = require("@lit/localize");
/**
 * @extends LitElement
 */
var MdComponent = /** @class */ (function (_super) {
    __extends(MdComponent, _super);
    /**
     */
    function MdComponent() {
        var _this = _super.call(this) || this;
        (0, localize_1.updateWhenLocaleChanges)(_this);
        return _this;
    }
    /**
     */
    MdComponent.prototype.createRenderRoot = function () {
        return this;
    };
    /**
     * @param {Any} [type]
     * @param {Any} [detail]
     */
    MdComponent.prototype.emit = function (type, detail) {
        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });
        this.dispatchEvent(event);
    };
    return MdComponent;
}(lit_1.LitElement));
exports.MdComponent = MdComponent;

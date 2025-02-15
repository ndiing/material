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
exports.MdBadgeComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
/**
 * @extends MdComponent
 * @element md-badge
 */
var MdBadgeComponent = /** @class */ (function (_super) {
    __extends(MdBadgeComponent, _super);
    /**
     */
    function MdBadgeComponent() {
        var _this = _super.call(this) || this;
        _this.max = 999;
        return _this;
    }
    /**
     */
    MdBadgeComponent.prototype.render = function () {
        return this.label ? (this.label > this.max ? "".concat(this.max, "+") : this.label) : lit_1.nothing;
    };
    /**
     */
    MdBadgeComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-badge");
    };
    /**
     * @property {Number} [label]
     * @property {Number} [max]
     */
    MdBadgeComponent.properties = {
        label: { type: Number },
        max: { type: Number },
    };
    return MdBadgeComponent;
}(component_1.MdComponent));
exports.MdBadgeComponent = MdBadgeComponent;
customElements.define("md-badge", MdBadgeComponent);

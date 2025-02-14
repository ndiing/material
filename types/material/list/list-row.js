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
exports.MdListRowComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
/**
 * @extends MdComponent
 * @element md-list-row
 */
var MdListRowComponent = /** @class */ (function (_super) {
    __extends(MdListRowComponent, _super);
    function MdListRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     */
    MdListRowComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-list__row");
    };
    return MdListRowComponent;
}(component_1.MdComponent));
exports.MdListRowComponent = MdListRowComponent;
customElements.define("md-list-row", MdListRowComponent);

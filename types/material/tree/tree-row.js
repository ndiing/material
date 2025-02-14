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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdTreeRowComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
/**
 * @extends MdComponent
 * @element md-tree-row
 */
var MdTreeRowComponent = /** @class */ (function (_super) {
    __extends(MdTreeRowComponent, _super);
    function MdTreeRowComponent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     */
    MdTreeRowComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-tree__row");
    };
    return MdTreeRowComponent;
})(component_1.MdComponent);
exports.MdTreeRowComponent = MdTreeRowComponent;
customElements.define("md-tree-row", MdTreeRowComponent);

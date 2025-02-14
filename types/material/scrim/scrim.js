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
exports.MdScrimComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
/**
 * @extends MdComponent
 * @element md-scrim
 * @fires MdScrimComponent#onScrimShow
 * @fires MdScrimComponent#onScrimClose
 * @fires MdScrimComponent#onScrimClick
 * @fires MdScrimComponent#onScrimShown
 * @fires MdScrimComponent#onScrimClosed
 */
var MdScrimComponent = /** @class */ (function (_super) {
    __extends(MdScrimComponent, _super);
    function MdScrimComponent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     */
    MdScrimComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-scrim");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
    };
    /**
     */
    MdScrimComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("click", this.handleScrimClick);
    };
    /**
     */
    MdScrimComponent.prototype.show = function () {
        this.handleScrimShown = this.handleScrimShown.bind(this);
        this.addEventListener("animationend", this.handleScrimShown);
        this.open = true;
        this.emit("onScrimShow");
    };
    /**
     */
    MdScrimComponent.prototype.close = function () {
        this.handleScrimClosed = this.handleScrimClosed.bind(this);
        this.addEventListener("animationend", this.handleScrimClosed);
        this.open = false;
        this.emit("onScrimClose");
    };
    /**
     */
    MdScrimComponent.prototype.toggle = function () {
        if (this.open) this.close();
        else this.show();
    };
    /**
     * @param {Object} [event]
     */
    MdScrimComponent.prototype.handleScrimClick = function (event) {
        this.close();
        this.emit("onScrimClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdScrimComponent.prototype.handleScrimShown = function (event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);
            this.emit("onScrimShown", { event: event });
        }
    };
    /**
     * @param {Object} [event]
     */
    MdScrimComponent.prototype.handleScrimClosed = function (event) {
        if (event.animationName === "scrim-in") {
            this.removeEventListener("animationend", this.handleScrimClosed);
            this.emit("onScrimClosed", { event: event });
        }
    };
    /**
     * @property {Boolean} [open]
     */
    MdScrimComponent.properties = {
        open: { type: Boolean, reflect: true },
    };
    return MdScrimComponent;
})(component_1.MdComponent);
exports.MdScrimComponent = MdScrimComponent;
customElements.define("md-scrim", MdScrimComponent);

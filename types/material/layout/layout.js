"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
/**
 */
var Layout = /** @class */ (function () {
    /**
     * @param {String} [callback]
     */
    function Layout(callback) {
        /**
         * @readonly
         */
        this.items = [
            { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
            { name: "medium", media: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
            { name: "compact", media: window.matchMedia("(max-width: 599px)") },
        ];
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    /**
     */
    Layout.prototype.handleChange = function () {
        this.destroy();
        this.init();
    };
    /**
     */
    Layout.prototype.init = function () {
        this.item = this.items.find(function (item) {
            return item.media.matches;
        });
        this.callback(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    };
    /**
     */
    Layout.prototype.destroy = function () {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    };
    return Layout;
})();
exports.Layout = Layout;

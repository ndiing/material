"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualScroll = void 0;
/**
 * @fires VirtualScroll#onVirtualScroll
 */
var VirtualScroll = /** @class */ (function () {
    /**
     * @param {Any} [host]
     * @param {Any} [options]
     */
    function VirtualScroll(host, options) {
        this.host = host;
        this.options = __assign({ total: undefined, rowHeight: 56, nodePadding: 2, viewportHeight: undefined, track: ".md-virtual-scroll__track", item: ".md-virtual-scroll__item" }, options);
        this.init();
    }
    /**
     * @param {Any} [options={}]
     */
    VirtualScroll.prototype.load = function (options) {
        if (options === void 0) { options = {}; }
        for (var name_1 in options) {
            var value = options[name_1];
            this.options[name_1] = value;
        }
        this.handleScroll();
    };
    /**
     * @param {Any} [event]
     */
    VirtualScroll.prototype.handleScroll = function (event) {
        var _a;
        var total = this.options.total;
        var rowHeight = this.options.rowHeight;
        var scrollTop = this.host.scrollTop;
        var nodePadding = this.options.nodePadding;
        var viewportHeight = (_a = this.options.viewportHeight) !== null && _a !== void 0 ? _a : this.host.clientHeight;
        var trackHeight = total * rowHeight;
        var start = Math.floor(scrollTop / rowHeight) - nodePadding;
        start = Math.max(0, start);
        var end = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
        end = Math.min(total - start, end);
        end = end + start;
        var translateY = start * rowHeight;
        this.track.style.setProperty("height", trackHeight + "px");
        this.host.querySelectorAll(this.options.item).forEach(function (item) {
            item.style.setProperty("transform", "translate3d(0," + translateY + "px,0)");
        });
        this.emit("onVirtualScroll", {
            start: start,
            end: end,
        });
    };
    /**
     * @param {Any} [type]
     * @param {Any} [detail]
     */
    VirtualScroll.prototype.emit = function (type, detail) {
        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });
        this.host.dispatchEvent(event);
    };
    /**
     */
    VirtualScroll.prototype.init = function () {
        this.host.classList.add("md-virtual-scroll");
        this.track = this.host.querySelector(this.options.track);
        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    };
    /**
     */
    VirtualScroll.prototype.destroy = function () {
        this.host.classList.remove("md-virtual-scroll");
        this.host.removeEventListener("scroll", this.handleScroll);
        this.track = null;
        this.handleScroll = null;
    };
    return VirtualScroll;
}());
exports.VirtualScroll = VirtualScroll;

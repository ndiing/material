"use strict";
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
/**
 * @fires Movable#onMovablePointerdown
 * @fires Movable#onMovablePointermove
 * @fires Movable#onMovablePointerup
 */
var Movable = /** @class */ (function () {
    /**
     * @param {String} [host]
     * @param {Object} [options={}]
     */
    function Movable(host, options) {
        if (options === void 0) {
            options = {};
        }
        this.host = host;
        this.options = __assign({ axis: ["x", "y"], handles: ["n", "e", "s", "w", "nw", "ne", "sw", "se"] }, options);
        this.init();
    }
    /**
     * @param {Object} [event]
     */
    Movable.prototype.handlePointerdown = function (event) {
        var _a, _b;
        this.handle = event.target.closest(".md-resizable__handle") && event.target.className.match(/--(\w+)/)[1];
        document.body.classList.add("md-user-select--none");
        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);
        this.endX = (_a = this.endX) !== null && _a !== void 0 ? _a : 0;
        this.endY = (_b = this.endY) !== null && _b !== void 0 ? _b : 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;
        this.emit("onMovablePointerdown");
    };
    /**
     * @param {Object} [event]
     */
    Movable.prototype.handlePointermove = function (event) {
        var _a, _b, _c, _d;
        var currentX = event.clientX - this.startX;
        var currentY = event.clientY - this.startY;
        if (this.handle) {
            if (this.handle === "e" || this.handle === "ne" || this.handle === "se") {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }
            if (this.handle === "w" || this.handle === "sw" || this.handle === "nw") {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - currentX + this.endX;
            }
            if (this.handle === "s" || this.handle === "se" || this.handle === "sw") {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }
            if (this.handle === "n" || this.handle === "ne" || this.handle === "nw") {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - currentY + this.endY;
            }
        } else {
            if (this.options.axis.includes("x")) {
                this.currentX = currentX;
            }
            if (this.options.axis.includes("y")) {
                this.currentY = currentY;
            }
        }
        this.host.style.setProperty("position", "relative");
        this.host.style.setProperty("left", ((_a = this.currentX) !== null && _a !== void 0 ? _a : 0) + "px");
        this.host.style.setProperty("top", ((_b = this.currentY) !== null && _b !== void 0 ? _b : 0) + "px");
        this.host.style.setProperty("width", ((_c = this.currentWidth) !== null && _c !== void 0 ? _c : this.startWidth) + "px");
        this.host.style.setProperty("height", ((_d = this.currentHeight) !== null && _d !== void 0 ? _d : this.startHeight) + "px");
        this.emit("onMovablePointermove");
    };
    /**
     * @param {Object} [event]
     */
    Movable.prototype.handlePointerup = function (event) {
        this.endX = this.currentX;
        this.endY = this.currentY;
        document.body.classList.remove("md-user-select--none");
        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
        this.emit("onMovablePointerup");
    };
    /**
     * @param {String} [type]
     * @param {String} [detail]
     */
    Movable.prototype.emit = function (type, detail) {
        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });
        this.host.dispatchEvent(event);
    };
    /**
     */
    Movable.prototype.init = function () {
        var text = "";
        text += '<div class="md-resizable">';
        for (var _i = 0, _a = this.options.handles; _i < _a.length; _i++) {
            var handle = _a[_i];
            text += '<div class="md-resizable__handle md-resizable__handle--'.concat(handle, '"></div>');
        }
        text += "</div>";
        this.host.insertAdjacentHTML("afterbegin", text);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.host.addEventListener("pointerdown", this.handlePointerdown);
    };
    /**
     */
    Movable.prototype.destroy = function () {
        var resizable = this.host.querySelector(".md-resizable");
        if (resizable) {
            resizable.remove();
        }
        this.host.removeEventListener("pointerdown", this.handlePointerdown);
        this.handlePointerdown = null;
        this.handlePointermove = null;
        this.handlePointerup = null;
    };
    return Movable;
})();
exports.Movable = Movable;

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ripple = void 0;
/**
 */
var Ripple = /** @class */ (function () {
    /**
     * @param {Any} [host]
     * @param {Any} [options]
     */
    function Ripple(host, options) {
        this.host = host;
        this.options = __assign({ centered: false, radius: undefined, trigger: undefined, unbounded: false, container: undefined }, options);
        this.init();
    }
    /**
     * @async
     */
    Ripple.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.container = this.host;
                if (this.options.container) {
                    if (typeof this.options.container === "string") {
                        this.container = this.host.querySelector(this.options.container);
                    }
                    else {
                        this.container = this.options.container;
                    }
                }
                this.trigger = this.host;
                if (this.options.trigger) {
                    if (typeof this.options.trigger === "string") {
                        this.trigger = this.host.querySelector(this.options.trigger);
                    }
                    else {
                        this.trigger = this.options.trigger;
                    }
                }
                this.container.classList.add("md-ripple");
                this.container.classList.toggle("md-ripple--bounded", !this.options.unbounded);
                this.container.setAttribute("tabIndex", 0);
                this.trigger.classList.add("md-ripple--trigger");
                this.radius = 141.4213562373095;
                if (this.options.radius) {
                    this.radius = (this.options.radius / this.container.clientWidth) * 100;
                }
                this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");
                this.handleRippleHoverIn = this.handleRippleHoverIn.bind(this);
                this.handleRippleHoverOut = this.handleRippleHoverOut.bind(this);
                this.handleRipplePressIn = this.handleRipplePressIn.bind(this);
                this.handleRipplePressOut = this.handleRipplePressOut.bind(this);
                this.handleRippleFocusIn = this.handleRippleFocusIn.bind(this);
                this.handleRippleFocusOut = this.handleRippleFocusOut.bind(this);
                this.trigger.addEventListener("pointerenter", this.handleRippleHoverIn);
                this.trigger.addEventListener("pointerleave", this.handleRippleHoverOut);
                this.trigger.addEventListener("pointerdown", this.handleRipplePressIn);
                this.trigger.addEventListener("focus", this.handleRippleFocusIn);
                this.trigger.addEventListener("blur", this.handleRippleFocusOut);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @async
     */
    Ripple.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.container) {
                    this.container.classList.remove("md-ripple");
                    this.container.classList.remove("md-ripple--bounded");
                    this.container.removeAttribute("tabIndex");
                    this.container.style.removeProperty("--md-comp-ripple-radius");
                }
                if (this.trigger) {
                    this.trigger.classList.remove("md-ripple--trigger");
                    this.trigger.removeEventListener("pointerenter", this.handleRippleHoverIn);
                    this.trigger.removeEventListener("pointerleave", this.handleRippleHoverOut);
                    this.trigger.removeEventListener("pointerdown", this.handleRipplePressIn);
                    this.trigger.removeEventListener("focus", this.handleRippleFocusIn);
                    this.trigger.removeEventListener("blur", this.handleRippleFocusOut);
                }
                this.container = null;
                this.trigger = null;
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRippleHoverIn = function (event) {
        this.container.classList.add("md-ripple--hover");
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRippleHoverOut = function (event) {
        this.container.classList.remove("md-ripple--hover");
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRipplePressIn = function (event) {
        window.addEventListener("pointerup", this.handleRipplePressOut, { passive: true });
        window.addEventListener("touchend", this.handleRipplePressOut, { passive: true });
        this.container.classList.add("md-ripple--press");
        var rect = this.container.getBoundingClientRect();
        if (!this.options.centered) {
            var left = (event.clientX - rect.left) / rect.width;
            var top_1 = (event.clientY - rect.top) / rect.height;
            var x = (0.5 - left) * (100 / this.radius);
            var y = (0.5 - top_1) * ((100 / this.radius) * (rect.height / rect.width));
            this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");
            this.container.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-top", top_1 * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRipplePressOut = function (event) {
        window.removeEventListener("pointerup", this.handleRipplePressOut);
        window.removeEventListener("touchend", this.handleRipplePressOut);
        this.container.classList.remove("md-ripple--press");
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRippleFocusIn = function (event) {
        this.container.classList.add("md-ripple--focus");
    };
    /**
     * @param {Any} [event]
     */
    Ripple.prototype.handleRippleFocusOut = function (event) {
        this.container.classList.remove("md-ripple--focus");
    };
    return Ripple;
}());
exports.Ripple = Ripple;

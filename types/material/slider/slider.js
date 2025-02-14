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
exports.MdSliderComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * @extends MdComponent
 * @element md-slider
 * @fires MdSliderComponent#onSliderNativeInput
 * @fires MdSliderComponent#onSliderNativeReset
 */
var MdSliderComponent = /** @class */ (function (_super) {
    __extends(MdSliderComponent, _super);
    /**
     */
    function MdSliderComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.variants = ["centered", "continuous", "discrete", "range-selection"];
        _this.min = 0;
        _this.max = 100;
        _this.step = 1;
        return _this;
    }
    Object.defineProperty(MdSliderComponent.prototype, "indicators", {
        /**
         * @readonly
         */
        get: function () {
            var lengths = {
                centered: 3,
                continuous: 1,
                discrete: this.max / this.step + 1,
                "range-selection": 2,
            };
            return lengths[this.variant];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdSliderComponent.prototype, "sliderNativeAll", {
        /**
         * @readonly
         */
        get: function () {
            return this.querySelectorAll(".md-slider__native");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdSliderComponent.prototype, "sliderValueAll", {
        /**
         * @readonly
         */
        get: function () {
            return this.querySelectorAll(".md-slider__value");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {String} [value]
     * @param {String} [index]
     */
    MdSliderComponent.prototype.renderSliderWrapper = function (value, index) {
        var _this = this;
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"md-slider__wrapper\">\n                <input\n                    type=\"range\"\n                    class=\"md-slider__native\"\n                    .data=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .step=\"", "\"\n                    .value=\"", "\"\n                    .defaultValue=\"", "\"\n                    @input=\"", "\"\n                    @reset=\"", "\"\n                />\n                <div class=\"md-slider__indicators\">\n                    ", "\n                </div>\n                <output class=\"md-slider__value\">", "</output>\n            </div>\n        "], ["\n            <div class=\"md-slider__wrapper\">\n                <input\n                    type=\"range\"\n                    class=\"md-slider__native\"\n                    .data=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .step=\"", "\"\n                    .value=\"", "\"\n                    .defaultValue=\"", "\"\n                    @input=\"", "\"\n                    @reset=\"", "\"\n                />\n                <div class=\"md-slider__indicators\">\n                    ", "\n                </div>\n                <output class=\"md-slider__value\">", "</output>\n            </div>\n        "])), { index: index }, (0, if_defined_js_1.ifDefined)(this.min), (0, if_defined_js_1.ifDefined)(this.max), (0, if_defined_js_1.ifDefined)(this.step), (0, if_defined_js_1.ifDefined)(value), (0, if_defined_js_1.ifDefined)(this.defaultValue[index]), this.handleSliderNativeInput, this.handleSliderNativeReset, Array.from({ length: this.indicators }, function (v, k) { return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                            <div\n                                class=\"", "\"\n                            ></div>\n                        "], ["\n                            <div\n                                class=\"", "\"\n                            ></div>\n                        "])), (0, class_map_js_1.classMap)({
            "md-slider__indicator": true,
            "md-slider__indicator--activated": value >= _this.step * k,
        })); }), value);
    };
    /**
     */
    MdSliderComponent.prototype.render = function () {
        var _this = this;
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", "\n            <input\n                type=\"hidden\"\n                class=\"md-slider__hidden\"\n                .name=\"", "\"\n                .value=\"", "\"\n            />\n        "], ["\n            ", "\n            <input\n                type=\"hidden\"\n                class=\"md-slider__hidden\"\n                .name=\"", "\"\n                .value=\"", "\"\n            />\n        "])), this.value.map(function (value, index) { return _this.renderSliderWrapper(value, index); }), this.name, this.value);
    };
    /**
     * @async
     */
    MdSliderComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-slider");
                        if (this.value === undefined) {
                            this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
                        }
                        this.defaultValue = JSON.parse(JSON.stringify(this.value));
                        if (this.min < 0)
                            this.variant = "centered";
                        else if (this.step > 1)
                            this.variant = "discrete";
                        else if (this.value.length > 1)
                            this.variant = "range-selection";
                        else
                            this.variant = "continuous";
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.updateValue();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {String} [changedProperties]
     */
    MdSliderComponent.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach(function (variant) {
                _this.classList.toggle("md-slider--".concat(variant), variant === _this.variant);
            });
        }
    };
    /**
     */
    MdSliderComponent.prototype.updateValue = function () {
        var _this = this;
        this.value.forEach(function (value, index) {
            _this.style.setProperty("--md-comp-slider-value".concat(index), _this.percentage(value));
            _this.style.setProperty("--md-comp-slider-value-width".concat(index), _this.sliderValueAll[index].clientWidth + "px");
        });
    };
    /**
     * @param {String} [value]
     * @param {String} [min=this.min]
     * @param {String} [max=this.max]
     */
    MdSliderComponent.prototype.percentage = function (value, min, max) {
        if (min === void 0) { min = this.min; }
        if (max === void 0) { max = this.max; }
        return (value - min) / (max - min);
    };
    /**
     * @param {Object} [event]
     */
    MdSliderComponent.prototype.handleSliderNativeInput = function (event) {
        var native = event.currentTarget;
        var data = native.data;
        if (this.value.length > 1) {
            this.sliderNativeAll[0].value = Math.min(this.sliderNativeAll[0].value, this.value[1]);
            this.sliderNativeAll[1].value = Math.max(this.sliderNativeAll[1].value, this.value[0]);
        }
        this.value[data.index] = Number(native.value);
        native.value = this.value[data.index];
        this.updateValue();
        this.requestUpdate();
        this.emit("onSliderNativeInput", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdSliderComponent.prototype.handleSliderNativeReset = function (event) {
        this.value = JSON.parse(JSON.stringify(this.defaultValue));
        this.updateValue();
        this.requestUpdate();
        this.emit("onSliderNativeReset", { event: event });
    };
    /**
     * @property {Number} [min]
     * @property {Number} [max]
     * @property {Number} [step]
     * @property {String} [variant]
     * @property {String} [name]
     * @property {Any} [value]
     */
    MdSliderComponent.properties = {
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        variant: { type: String },
        name: { type: String },
        value: {
            converter: {
                fromAttribute: function (value, type) {
                    return [].concat(JSON.parse(value));
                },
                toAttribute: function (value, type) {
                    return JSON.stringify(value);
                },
            },
        },
    };
    return MdSliderComponent;
}(component_1.MdComponent));
exports.MdSliderComponent = MdSliderComponent;
customElements.define("md-slider", MdSliderComponent);
var templateObject_1, templateObject_2, templateObject_3;

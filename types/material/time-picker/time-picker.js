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
exports.MdTimePickerComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
var util_1 = require("../util/util");
var popper_1 = require("../popper/popper");
var class_map_js_1 = require("lit/directives/class-map.js");
var cache_js_1 = require("lit/directives/cache.js");
/**
 * @extends MdComponent
 * @element md-time-picker
 * @fires MdTimePickerComponent#onTimePickerShow
 * @fires MdTimePickerComponent#onTimePickerClose
 * @fires MdTimePickerComponent#onTimePickerHourItemClick
 * @fires MdTimePickerComponent#onTimePickerMinuteItemClick
 * @fires MdTimePickerComponent#onTimePickerScrimClose
 * @fires MdTimePickerComponent#onTimePickerShown
 * @fires MdTimePickerComponent#onTimePickerClosed
 * @fires MdTimePickerComponent#onTimePickerIconButtonPrevClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonNextClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonClick
 * @fires MdTimePickerComponent#onTimePickerButtonCancelClick
 * @fires MdTimePickerComponent#onTimePickerButtonOkClick
 * @fires MdTimePickerComponent#onTimePickerButtonLabelClick
 * @fires MdTimePickerComponent#onTimePickerButtonClick
 */
var MdTimePickerComponent = /** @class */ (function (_super) {
    __extends(MdTimePickerComponent, _super);
    /**
     */
    function MdTimePickerComponent() {
        var _this = _super.call(this) || this;
        _this.hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
        _this.minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;
        _this.current = new Date();
        _this.value = new Date();
        _this.selection = new Date();
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(MdTimePickerComponent.prototype, "hours", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            return Array.from({ length: 24 }, function (v, k) {
                var date = new Date(_this.selection.getFullYear(), _this.selection.getMonth(), _this.selection.getDate(), k);
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    hour: date.getHours(),
                    label: _this.hourFormat(date),
                    selected: date.getFullYear() === _this.value.getFullYear() && date.getMonth() === _this.value.getMonth() && date.getDate() === _this.value.getDate() && date.getHours() === _this.value.getHours(),
                    activated: date.getFullYear() === _this.current.getFullYear() && date.getMonth() === _this.current.getMonth() && date.getDate() === _this.current.getDate() && date.getHours() === _this.current.getHours(),
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTimePickerComponent.prototype, "minutes", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            return Array.from({ length: 60 }, function (v, k) {
                var date = new Date(_this.selection.getFullYear(), _this.selection.getMonth(), _this.selection.getDate(), _this.selection.getHours(), k);
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    label: _this.minuteFormat(date),
                    selected: date.getFullYear() === _this.value.getFullYear() && date.getMonth() === _this.value.getMonth() && date.getDate() === _this.value.getDate() && date.getHours() === _this.value.getHours() && date.getMinutes() === _this.value.getMinutes(),
                    activated: date.getFullYear() === _this.current.getFullYear() && date.getMonth() === _this.current.getMonth() && date.getDate() === _this.current.getDate() && date.getHours() === _this.current.getHours() && date.getMinutes() === _this.current.getMinutes(),
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTimePickerComponent.prototype, "icons", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            var map = {
                0: function () { return (0, util_1.stringifyTime)(_this.selection); },
                1: function () { return (0, util_1.stringifyTime)(_this.selection); },
            };
            return [{ component: "button", id: "label", label: map[this.index]() }];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTimePickerComponent.prototype, "actions", {
        /**
         * @readonly
         */
        get: function () {
            return [
                { id: "prev", icon: "keyboard_arrow_left" },
                { id: "next", icon: "keyboard_arrow_right" },
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdTimePickerComponent.prototype, "buttons", {
        /**
         * @readonly
         */
        get: function () {
            return [{ component: "spacer" }, { id: "cancel", label: "Cancel" }, { id: "ok", label: "Ok" }];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {String} [item]
     */
    MdTimePickerComponent.prototype.renderIcon = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <md-icon\n                .data=\"", "\"\n            >", "</md-icon>\n        "], ["\n            <md-icon\n                .data=\"", "\"\n            >", "</md-icon>\n        "])), item, item.icon);
    };
    /**
     * @param {String} [item]
     */
    MdTimePickerComponent.prototype.renderIconButton = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "], ["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleTimePickerIconButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdTimePickerComponent.prototype.renderButton = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "], ["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleTimePickerButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdTimePickerComponent.prototype.renderSpacer = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div \n                class=\"md-time-picker__spacer\"\n            ></div>\n        "], ["\n            <div \n                class=\"md-time-picker__spacer\"\n            ></div>\n        "])));
    };
    /**
     * @param {String} [item]
     * @param {String} [component="icon"]
     */
    MdTimePickerComponent.prototype.renderComponent = function (item, component) {
        var _this = this;
        if (component === void 0) { component = "icon"; }
        var components = [
            ["icon", function () { return _this.renderIcon(item); }],
            ["icon-button", function () { return _this.renderIconButton(item); }],
            ["button", function () { return _this.renderButton(item); }],
            ["spacer", function () { return _this.renderSpacer(item); }],
        ];
        return (0, choose_js_1.choose)(item.component || component, components, function () { return lit_1.nothing; });
    };
    /**
     */
    MdTimePickerComponent.prototype.renderTimePickerHour = function () {
        var _this = this;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <div class=\"md-time-picker__circle md-time-picker__circle--hours\">\n                ", "\n            </div>\n        "], ["\n            <div class=\"md-time-picker__circle md-time-picker__circle--hours\">\n                ", "\n            </div>\n        "])), this.hours.map(function (item) { return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-time-picker__circle-item\"\n                    >", "</div>\n                "], ["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-time-picker__circle-item\"\n                    >", "</div>\n                "])), item, item.selected, item.activated, _this.handleTimePickerHourItemClick, item.label); }));
    };
    /**
     */
    MdTimePickerComponent.prototype.renderTimePickerMinute = function () {
        var _this = this;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <div class=\"md-time-picker__circle md-time-picker__circle--minutes\">\n                ", "\n            </div>\n        "], ["\n            <div class=\"md-time-picker__circle md-time-picker__circle--minutes\">\n                ", "\n            </div>\n        "])), this.minutes.map(function (item) { return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-time-picker__circle-item\"\n                    >", "</div>\n                "], ["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-time-picker__circle-item\"\n                    >", "</div>\n                "])), item, item.selected, item.activated, _this.handleTimePickerMinuteItemClick, item.label); }));
    };
    /**
     */
    MdTimePickerComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            ", "\n            <div class=\"md-time-picker__wrapper\">\n                <div class=\"md-time-picker__body\">\n                    <div class=\"md-time-picker__items\">\n                        <div class=\"md-time-picker__item\">", "</div>\n                    </div>\n                </div>\n                ", "\n            </div>\n        "], ["\n            ", "\n            <div class=\"md-time-picker__wrapper\">\n                <div class=\"md-time-picker__body\">\n                    <div class=\"md-time-picker__items\">\n                        <div class=\"md-time-picker__item\">", "</div>\n                    </div>\n                </div>\n                ", "\n            </div>\n        "])), ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) || this.label || this.sublabel || ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.length) ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                <div class=\"md-time-picker__header\">\n                    <div class=\"md-time-picker__icons\">", "</div>\n                    ", "\n                </div>\n            "], ["\n                <div class=\"md-time-picker__header\">\n                    <div class=\"md-time-picker__icons\">", "</div>\n                    ", "\n                </div>\n            "])), this.icons.map(function (icon) { return _this.renderComponent(icon, "icon"); }), ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.length) ? (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject([" <div class=\"md-time-picker__actions\">", "</div> "], [" <div class=\"md-time-picker__actions\">", "</div> "])), this.actions.map(function (action) { return _this.renderComponent(action, "icon-button"); })) : lit_1.nothing) : lit_1.nothing, (0, cache_js_1.cache)([
            this.renderTimePickerHour.bind(this),
            this.renderTimePickerMinute.bind(this)
        ][this.index]()), ((_d = this.buttons) === null || _d === void 0 ? void 0 : _d.length) ? (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                    <div class=\"md-time-picker__footer\">\n                        ", "\n                    </div>    \n                "], ["\n                    <div class=\"md-time-picker__footer\">\n                        ", "\n                    </div>    \n                "])), ((_e = this.buttons) === null || _e === void 0 ? void 0 : _e.length) ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                            <div class=\"md-time-picker__buttons\">", "</div>\n                        "], ["\n                            <div class=\"md-time-picker__buttons\">", "</div>\n                        "])), this.buttons.map(function (button) { return _this.renderComponent(button, "button"); })) : lit_1.nothing) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdTimePickerComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.defaultValue = new Date(this.value.valueOf());
                        this.defaultIndex = this.index;
                        this.classList.add("md-time-picker");
                        this.style.setProperty("--md-comp-time-picker-animation", "none");
                        this.timePickerScrim = document.createElement("md-scrim");
                        this.parentElement.insertBefore(this.timePickerScrim, this.nextElementSibling);
                        this.handleTimePickerScrimClose = this.handleTimePickerScrimClose.bind(this);
                        this.timePickerScrim.addEventListener("onScrimClose", this.handleTimePickerScrimClose);
                        if (this.modal && this.open)
                            this.timePickerScrim.show();
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.style.setProperty("--md-comp-time-picker-height", this.clientHeight + "px");
                        this.style.setProperty("--md-comp-time-picker-width", this.clientWidth + "px");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdTimePickerComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.timePickerScrim.removeEventListener("onScrimClose", this.handleTimePickerScrimClose);
        this.timePickerScrim.remove();
    };
    /**
     * @async
     * @param {String} [changedProperties]
     */
    MdTimePickerComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (changedProperties.has("index")) {
                            this.style.setProperty("--md-comp-time-picker-index", this.index);
                        }
                        if (changedProperties.has("modal")) {
                            this.classList.toggle("md-time-picker--modal", !!this.modal);
                        }
                        if (!changedProperties.has("value")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.selection = new Date(this.value.valueOf());
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {Object} [options]
     */
    MdTimePickerComponent.prototype.show = function (options) {
        this.index = this.defaultIndex;
        this.handleTimePickerShown = this.handleTimePickerShown.bind(this);
        this.addEventListener("animationend", this.handleTimePickerShown);
        this.style.removeProperty("--md-comp-time-picker-animation");
        (0, popper_1.setPosition)(__assign({ container: this, offset: 4 + 4, 
            /* prettier-ignore */
            placements: [
                "bottom-start", "bottom-end", "bottom",
                "top-start", "top-end", "top",
                "right-start", "right-end", "right",
                "left-start", "left-end", "left"
            ] }, options));
        this.open = true;
        if (this.modal)
            this.timePickerScrim.show();
        this.emit("onTimePickerShow");
    };
    /**
     */
    MdTimePickerComponent.prototype.close = function () {
        this.handleTimePickerClosed = this.handleTimePickerClosed.bind(this);
        this.addEventListener("animationend", this.handleTimePickerClosed);
        this.style.removeProperty("--md-comp-time-picker-animation");
        this.open = false;
        if (this.modal)
            this.timePickerScrim.close();
        this.emit("onTimePickerClose");
    };
    /**
     * @param {Object} [options]
     */
    MdTimePickerComponent.prototype.toggle = function (options) {
        if (this.open)
            this.close();
        else
            this.show(options);
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerHourItemClick = function (event) {
        var data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.value.setHours(data.hour);
        this.index = 1;
        this.emit("onTimePickerHourItemClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerMinuteItemClick = function (event) {
        var data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.value.setMinutes(data.minute);
        this.index = 0;
        this.emit("onTimePickerMinuteItemClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerScrimClose = function (event) {
        if (this.open)
            this.close();
        this.emit("onTimePickerScrimClose", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerShown = function (event) {
        this.removeEventListener("animationend", this.handleTimePickerShown);
        this.emit("onTimePickerShown");
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerClosed = function (event) {
        this.removeEventListener("animationend", this.handleTimePickerClosed);
        this.emit("onTimePickerClosed");
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerIconButtonPrevClick = function (event) {
        var _this = this;
        var map = {
            0: function () { return _this.selection.setHours(_this.selection.getHours() - 1); },
            1: function () { return _this.selection.setMinutes(_this.selection.getMinutes() - 1); },
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onTimePickerIconButtonPrevClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerIconButtonNextClick = function (event) {
        var _this = this;
        var map = {
            0: function () { return _this.selection.setHours(_this.selection.getHours() + 1); },
            1: function () { return _this.selection.setMinutes(_this.selection.getMinutes() + 1); },
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onTimePickerIconButtonNextClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerIconButtonClick = function (event) {
        var data = event.currentTarget.data;
        var map = {
            prev: this.handleTimePickerIconButtonPrevClick.bind(this),
            next: this.handleTimePickerIconButtonNextClick.bind(this),
        };
        var fn = map[data.id];
        if (fn)
            return fn(event);
        this.emit("onTimePickerIconButtonClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerButtonCancelClick = function (event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onTimePickerButtonCancelClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerButtonOkClick = function (event) {
        // this.close();
        this.emit("onTimePickerButtonOkClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerButtonLabelClick = function (event) {
        var map = {
            0: 1,
            1: 0,
        };
        this.index = map[this.index];
        this.emit("onTimePickerButtonLabelClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTimePickerComponent.prototype.handleTimePickerButtonClick = function (event) {
        var data = event.currentTarget.data;
        var map = {
            cancel: this.handleTimePickerButtonCancelClick.bind(this),
            ok: this.handleTimePickerButtonOkClick.bind(this),
            label: this.handleTimePickerButtonLabelClick.bind(this),
        };
        var fn = map[data.id];
        if (fn)
            return fn(event);
        this.emit("onTimePickerButtonClick", { event: event });
    };
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {Boolean} [modal]
     * @property {String} [value]
     * @property {Any} [index]
     * @property {Any} [selection]
     */
    MdTimePickerComponent.properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean },
        value: {
            type: String,
            reflect: true,
            converter: {
                fromAttribute: function (value, type) {
                    return (0, util_1.parseTime)(value);
                },
                toAttribute: function (value, type) {
                    return (0, util_1.stringifyTime)(value);
                },
            },
        },
        index: { state: true },
        selection: { state: true },
    };
    return MdTimePickerComponent;
}(component_1.MdComponent));
exports.MdTimePickerComponent = MdTimePickerComponent;
customElements.define("md-time-picker", MdTimePickerComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

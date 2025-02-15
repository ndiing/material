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
exports.MdDatePickerComponent = void 0;
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
 * @element md-date-picker
 * @fires MdDatePickerComponent#onDatePickerShow
 * @fires MdDatePickerComponent#onDatePickerClose
 * @fires MdDatePickerComponent#onDatePickerYearItemClick
 * @fires MdDatePickerComponent#onDatePickerMonthItemClick
 * @fires MdDatePickerComponent#onDatePickerDayItemClick
 * @fires MdDatePickerComponent#onDatePickerScrimClose
 * @fires MdDatePickerComponent#onDatePickerShown
 * @fires MdDatePickerComponent#onDatePickerClosed
 * @fires MdDatePickerComponent#onDatePickerIconButtonPrevClick
 * @fires MdDatePickerComponent#onDatePickerIconButtonNextClick
 * @fires MdDatePickerComponent#onDatePickerIconButtonClick
 * @fires MdDatePickerComponent#onDatePickerButtonCancelClick
 * @fires MdDatePickerComponent#onDatePickerButtonOkClick
 * @fires MdDatePickerComponent#onDatePickerButtonLabelClick
 * @fires MdDatePickerComponent#onDatePickerButtonClick
 */
var MdDatePickerComponent = /** @class */ (function (_super) {
    __extends(MdDatePickerComponent, _super);
    /**
     */
    function MdDatePickerComponent() {
        var _this = _super.call(this) || this;
        _this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
        _this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        _this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
        _this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
        _this.current = new Date();
        _this.value = new Date();
        _this.selection = new Date();
        _this.index = 2;
        return _this;
    }
    Object.defineProperty(MdDatePickerComponent.prototype, "startOfDay", {
        /**
         * @readonly
         */
        get: function () {
            return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "years", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            var year = this.selection.getFullYear();
            year = Math.floor(year / 10) * 10;
            return Array.from({ length: 10 }, function (v, k) {
                var date = new Date(year + k, 0);
                return {
                    year: date.getFullYear(),
                    label: _this.yearFormat(date),
                    selected: date.getFullYear() === _this.value.getFullYear(),
                    activated: date.getFullYear() === _this.current.getFullYear(),
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "months", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            return Array.from({ length: 12 }, function (v, k) {
                var date = new Date(_this.selection.getFullYear(), k);
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    label: _this.monthFormat(date),
                    selected: date.getFullYear() === _this.value.getFullYear() && date.getMonth() === _this.value.getMonth(),
                    activated: date.getFullYear() === _this.current.getFullYear() && date.getMonth() === _this.current.getMonth(),
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "weekdays", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            return Array.from({ length: 7 }, function (v, k) {
                var date = new Date(0, 0, k);
                return {
                    label: _this.weekdayFormat(date),
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "days", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            return Array.from({ length: 6 }, function (v, k) {
                return Array.from({ length: 7 }, function (v2, k2) {
                    var date = new Date(_this.selection.getFullYear(), _this.selection.getMonth(), k * 7 + k2 + 1 - _this.startOfDay);
                    return {
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        day: date.getDate(),
                        label: _this.dayFormat(date),
                        selected: date.getFullYear() === _this.value.getFullYear() && date.getMonth() === _this.value.getMonth() && date.getDate() === _this.value.getDate(),
                        activated: date.getFullYear() === _this.current.getFullYear() && date.getMonth() === _this.current.getMonth() && date.getDate() === _this.current.getDate(),
                        isSameMonth: date.getFullYear() === _this.selection.getFullYear() && date.getMonth() === _this.selection.getMonth(),
                        isSunday: date.getDay() === 0,
                    };
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "icons", {
        /**
         * @readonly
         */
        get: function () {
            var _this = this;
            var map = {
                0: function () { return [_this.years[0].label, _this.years[_this.years.length - 1].label].join(" - "); },
                1: function () { return _this.selection.getFullYear(); },
                2: function () { return (0, util_1.stringifyDate)(_this.selection); },
            };
            return [{ component: "button", id: "label", label: map[this.index]() }];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDatePickerComponent.prototype, "actions", {
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
    Object.defineProperty(MdDatePickerComponent.prototype, "buttons", {
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
     * @param {Any} [item]
     */
    MdDatePickerComponent.prototype.renderIcon = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <md-icon\n                .data=\"", "\"\n            >", "</md-icon>\n        "], ["\n            <md-icon\n                .data=\"", "\"\n            >", "</md-icon>\n        "])), item, item.icon);
    };
    /**
     * @param {Any} [item]
     */
    MdDatePickerComponent.prototype.renderIconButton = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "], ["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleDatePickerIconButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdDatePickerComponent.prototype.renderButton = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "], ["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleDatePickerButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdDatePickerComponent.prototype.renderSpacer = function (item) {
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div \n                class=\"md-date-picker__spacer\"\n            ></div>\n        "], ["\n            <div \n                class=\"md-date-picker__spacer\"\n            ></div>\n        "])));
    };
    /**
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    MdDatePickerComponent.prototype.renderComponent = function (item, component) {
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
    MdDatePickerComponent.prototype.renderDatePickerYear = function () {
        var _this = this;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <div class=\"md-date-picker__list\">\n                ", "\n            </div>\n        "], ["\n            <div class=\"md-date-picker__list\">\n                ", "\n            </div>\n        "])), this.years.map(function (item) { return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-date-picker__list-item\"\n                    >", "</div>\n                "], ["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-date-picker__list-item\"\n                    >", "</div>\n                "])), item, item.selected, item.activated, _this.handleDatePickerYearItemClick, item.label); }));
    };
    /**
     */
    MdDatePickerComponent.prototype.renderDatePickerMonth = function () {
        var _this = this;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <div class=\"md-date-picker__list\">\n                ", "\n            </div>\n        "], ["\n            <div class=\"md-date-picker__list\">\n                ", "\n            </div>\n        "])), this.months.map(function (item) { return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-date-picker__list-item\"\n                    >", "</div>\n                "], ["\n                    <div\n                        .data=\"", "\"\n                        ?selected=\"", "\"\n                        ?activated=\"", "\"\n                        @click=\"", "\"\n                        class=\"md-date-picker__list-item\"\n                    >", "</div>\n                "])), item, item.selected, item.activated, _this.handleDatePickerMonthItemClick, item.label); }));
    };
    /**
     */
    MdDatePickerComponent.prototype.renderDatePickerDay = function () {
        var _this = this;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            <div class=\"md-date-picker__table\">\n                <div class=\"md-date-picker__table-header\">\n                    <div class=\"md-date-picker__table-row\">\n                        ", "\n                    </div>\n                </div>\n                <div class=\"md-date-picker__table-body\">\n                    ", "\n                </div>\n            </div>\n        "], ["\n            <div class=\"md-date-picker__table\">\n                <div class=\"md-date-picker__table-header\">\n                    <div class=\"md-date-picker__table-row\">\n                        ", "\n                    </div>\n                </div>\n                <div class=\"md-date-picker__table-body\">\n                    ", "\n                </div>\n            </div>\n        "])), this.weekdays.map(function (item) { return (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                            <div class=\"md-date-picker__table-cell\">", "</div>    \n                        "], ["\n                            <div class=\"md-date-picker__table-cell\">", "</div>    \n                        "])), item.label); }), this.days.map(function (row) { return (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                        <div class=\"md-date-picker__table-row\">\n                            ", "\n                        </div>\n                    "], ["\n                        <div class=\"md-date-picker__table-row\">\n                            ", "\n                        </div>\n                    "])), row.map(function (item) { return (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                                <div\n                                    .data=\"", "\"\n                                    ?selected=\"", "\"\n                                    ?activated=\"", "\"\n                                    @click=\"", "\"\n                                    class=\"", "\"\n                                >", "</div>\n                            "], ["\n                                <div\n                                    .data=\"", "\"\n                                    ?selected=\"", "\"\n                                    ?activated=\"", "\"\n                                    @click=\"", "\"\n                                    class=\"", "\"\n                                >", "</div>\n                            "])), item, item.selected, item.activated, _this.handleDatePickerDayItemClick, (0, class_map_js_1.classMap)({
            "md-date-picker__table-cell": true,
            "md-date-picker__table-cell--same-month": item.isSameMonth,
            "md-date-picker__table-cell--sunday": item.isSunday,
        }), item.label); })); }));
    };
    /**
     */
    MdDatePickerComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        /* prettier-ignore */
        return (0, lit_1.html)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            ", "\n            <div class=\"md-date-picker__wrapper\">\n                <div class=\"md-date-picker__body\">\n                    <div class=\"md-date-picker__items\">\n                        <div class=\"md-date-picker__item\">", "</div>\n                    </div>\n                </div>\n                ", "\n            </div>\n        "], ["\n            ", "\n            <div class=\"md-date-picker__wrapper\">\n                <div class=\"md-date-picker__body\">\n                    <div class=\"md-date-picker__items\">\n                        <div class=\"md-date-picker__item\">", "</div>\n                    </div>\n                </div>\n                ", "\n            </div>\n        "])), ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) || this.label || this.sublabel || ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.length) ? (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n                <div class=\"md-date-picker__header\">\n                    <div class=\"md-date-picker__icons\">", "</div>\n                    ", "\n                </div>\n            "], ["\n                <div class=\"md-date-picker__header\">\n                    <div class=\"md-date-picker__icons\">", "</div>\n                    ", "\n                </div>\n            "])), this.icons.map(function (icon) { return _this.renderComponent(icon, "icon"); }), ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.length) ? (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject([" <div class=\"md-date-picker__actions\">", "</div> "], [" <div class=\"md-date-picker__actions\">", "</div> "])), this.actions.map(function (action) { return _this.renderComponent(action, "icon-button"); })) : lit_1.nothing) : lit_1.nothing, (0, cache_js_1.cache)([
            this.renderDatePickerYear.bind(this),
            this.renderDatePickerMonth.bind(this),
            this.renderDatePickerDay.bind(this),
        ][this.index]()), ((_d = this.buttons) === null || _d === void 0 ? void 0 : _d.length) ? (0, lit_1.html)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n                    <div class=\"md-date-picker__footer\">\n                        ", "\n                    </div>    \n                "], ["\n                    <div class=\"md-date-picker__footer\">\n                        ", "\n                    </div>    \n                "])), ((_e = this.buttons) === null || _e === void 0 ? void 0 : _e.length) ? (0, lit_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n                            <div class=\"md-date-picker__buttons\">", "</div>\n                        "], ["\n                            <div class=\"md-date-picker__buttons\">", "</div>\n                        "])), this.buttons.map(function (button) { return _this.renderComponent(button, "button"); })) : lit_1.nothing) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdDatePickerComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.defaultValue = new Date(this.value.valueOf());
                        this.defaultIndex = this.index;
                        this.classList.add("md-date-picker");
                        this.style.setProperty("--md-comp-date-picker-animation", "none");
                        this.datePickerScrim = document.createElement("md-scrim");
                        this.parentElement.insertBefore(this.datePickerScrim, this.nextElementSibling);
                        this.handleDatePickerScrimClose = this.handleDatePickerScrimClose.bind(this);
                        this.datePickerScrim.addEventListener("onScrimClose", this.handleDatePickerScrimClose);
                        if (this.modal && this.open)
                            this.datePickerScrim.show();
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.style.setProperty("--md-comp-date-picker-height", this.clientHeight + "px");
                        this.style.setProperty("--md-comp-date-picker-width", this.clientWidth + "px");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdDatePickerComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.datePickerScrim.removeEventListener("onScrimClose", this.handleDatePickerScrimClose);
        this.datePickerScrim.remove();
    };
    /**
     * @async
     * @param {Any} [changedProperties]
     */
    MdDatePickerComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (changedProperties.has("index")) {
                            this.style.setProperty("--md-comp-date-picker-index", this.index);
                        }
                        if (changedProperties.has("modal")) {
                            this.classList.toggle("md-date-picker--modal", !!this.modal);
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
     * @param {Any} [options]
     */
    MdDatePickerComponent.prototype.show = function (options) {
        this.index = this.defaultIndex;
        this.handleDatePickerShown = this.handleDatePickerShown.bind(this);
        this.addEventListener("animationend", this.handleDatePickerShown);
        this.style.removeProperty("--md-comp-date-picker-animation");
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
            this.datePickerScrim.show();
        this.emit("onDatePickerShow");
    };
    /**
     */
    MdDatePickerComponent.prototype.close = function () {
        this.handleDatePickerClosed = this.handleDatePickerClosed.bind(this);
        this.addEventListener("animationend", this.handleDatePickerClosed);
        this.style.removeProperty("--md-comp-date-picker-animation");
        this.open = false;
        if (this.modal)
            this.datePickerScrim.close();
        this.emit("onDatePickerClose");
    };
    /**
     * @param {Any} [options]
     */
    MdDatePickerComponent.prototype.toggle = function (options) {
        if (this.open)
            this.close();
        else
            this.show(options);
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerYearItemClick = function (event) {
        var data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatePickerYearItemClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerMonthItemClick = function (event) {
        var data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatePickerMonthItemClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerDayItemClick = function (event) {
        var data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);
        this.requestUpdate();
        this.emit("onDatePickerDayItemClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerScrimClose = function (event) {
        if (this.open)
            this.close();
        this.emit("onDatePickerScrimClose", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerShown = function (event) {
        this.removeEventListener("animationend", this.handleDatePickerShown);
        this.emit("onDatePickerShown");
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerClosed = function (event) {
        this.removeEventListener("animationend", this.handleDatePickerClosed);
        this.emit("onDatePickerClosed");
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerIconButtonPrevClick = function (event) {
        var _this = this;
        var map = {
            0: function () { return _this.selection.setFullYear(_this.selection.getFullYear() - 10); },
            1: function () { return _this.selection.setFullYear(_this.selection.getFullYear() - 1); },
            2: function () { return _this.selection.setMonth(_this.selection.getMonth() - 1); },
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatePickerIconButtonPrevClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerIconButtonNextClick = function (event) {
        var _this = this;
        var map = {
            0: function () { return _this.selection.setFullYear(_this.selection.getFullYear() + 10); },
            1: function () { return _this.selection.setFullYear(_this.selection.getFullYear() + 1); },
            2: function () { return _this.selection.setMonth(_this.selection.getMonth() + 1); },
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatePickerIconButtonNextClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerIconButtonClick = function (event) {
        var data = event.currentTarget.data;
        var map = {
            prev: this.handleDatePickerIconButtonPrevClick.bind(this),
            next: this.handleDatePickerIconButtonNextClick.bind(this),
        };
        var fn = map[data.id];
        if (fn)
            return fn(event);
        this.emit("onDatePickerIconButtonClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerButtonCancelClick = function (event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onDatePickerButtonCancelClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerButtonOkClick = function (event) {
        // this.close();
        this.emit("onDatePickerButtonOkClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerButtonLabelClick = function (event) {
        var map = {
            0: 1,
            1: 2,
            2: 0,
        };
        this.index = map[this.index];
        this.emit("onDatePickerButtonLabelClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdDatePickerComponent.prototype.handleDatePickerButtonClick = function (event) {
        var data = event.currentTarget.data;
        var map = {
            cancel: this.handleDatePickerButtonCancelClick.bind(this),
            ok: this.handleDatePickerButtonOkClick.bind(this),
            label: this.handleDatePickerButtonLabelClick.bind(this),
        };
        var fn = map[data.id];
        if (fn)
            return fn(event);
        this.emit("onDatePickerButtonClick", { event: event });
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
    MdDatePickerComponent.properties = {
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
                    return (0, util_1.parseDate)(value);
                },
                toAttribute: function (value, type) {
                    return (0, util_1.stringifyDate)(value);
                },
            },
        },
        index: { state: true },
        selection: { state: true },
    };
    return MdDatePickerComponent;
}(component_1.MdComponent));
exports.MdDatePickerComponent = MdDatePickerComponent;
customElements.define("md-date-picker", MdDatePickerComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

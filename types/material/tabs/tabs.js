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
exports.MdTabsComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
/**
 * @extends MdComponent
 * @element md-tabs
 * @fires MdTabsComponent#onTabClick
 */
var MdTabsComponent = /** @class */ (function (_super) {
    __extends(MdTabsComponent, _super);
    /**
     */
    function MdTabsComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.variants = ["primary", "secondary"];
        _this.items = [];
        _this.variant = "primary";
        return _this;
    }
    /**
     * @param {Any} [item]
     */
    MdTabsComponent.prototype.renderTab = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <md-tab\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                .routerLink=\"", "\"\n                .rippleOptions=\"", "\"\n                .badge=\"", "\"\n                @click=\"", "\"\n                @onTabSelected=\"", "\"\n            ></md-tab>\n        "], ["\n            <md-tab\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                .routerLink=\"", "\"\n                .rippleOptions=\"", "\"\n                .badge=\"", "\"\n                @click=\"", "\"\n                @onTabSelected=\"", "\"\n            ></md-tab>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.routerLink), (0, if_defined_js_1.ifDefined)(item.rippleOptions || this.rippleOptions), (0, if_defined_js_1.ifDefined)(item.badge), this.handleTabClick, this.handleTabSelected);
    };
    /**
     */
    MdTabsComponent.prototype.render = function () {
        var _this = this;
        return this.items.map(function (item) { return _this.renderTab(item); });
    };
    /**
     */
    MdTabsComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-tabs");
        this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
    };
    /**
     * @param {Any} [changedProperties]
     */
    MdTabsComponent.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach(function (variant) {
                _this.classList.toggle("md-tabs--".concat(variant), variant === _this.variant);
            });
        }
    };
    /**
     * @param {Any} [event]
     */
    MdTabsComponent.prototype.handleTabClick = function (event) {
        this.style.removeProperty("--md-comp-tabs-indicator-transition-property");
        var data = event.currentTarget.data;
        this.items.forEach(function (item) {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onTabClick", { event: event });
    };
    /**
     * @async
     * @param {Any} [event]
     */
    MdTabsComponent.prototype.handleTabSelected = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var tab, data, direction, left, right, label, badge;
            var _a;
            return __generator(this, function (_b) {
                if (this.classList.contains("md-tabs")) {
                    tab = event.detail.tab;
                    data = tab.data;
                    this.currIndex = this.items.indexOf(data);
                    this.prevIndex = (_a = this.prevIndex) !== null && _a !== void 0 ? _a : this.currIndex;
                    direction = this.currIndex > this.prevIndex ? "right" : "left";
                    this.classList.remove("md-tabs--left");
                    this.classList.remove("md-tabs--right");
                    this.classList.add("md-tabs--" + direction);
                    this.prevIndex = this.currIndex;
                    left = tab.offsetLeft;
                    right = this.clientWidth - (left + tab.clientWidth);
                    if (this.classList.contains("md-tabs--primary")) {
                        label = tab.querySelector(".md-tab__label");
                        left = label.offsetLeft + tab.offsetLeft;
                        right = this.clientWidth - (left + label.clientWidth);
                        if (!tab.classList.contains("md-tab--with-icon")) {
                            badge = tab.querySelector(".md-tab__badge");
                            if (badge) {
                                right = this.clientWidth - (badge.offsetLeft + tab.offsetLeft + badge.clientWidth);
                            }
                        }
                    }
                    this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
                    this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     * @property {String} [variant]
     */
    MdTabsComponent.properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
        variant: { type: String },
    };
    return MdTabsComponent;
}(component_1.MdComponent));
exports.MdTabsComponent = MdTabsComponent;
customElements.define("md-tabs", MdTabsComponent);
var templateObject_1;

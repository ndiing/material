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
exports.MdNavigationListComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var store_1 = require("../store/store");
/**
 * @extends MdComponent
 * @element md-navigation-list
 * @fires MdNavigationListComponent#onNavigationListKeydownArrowUp
 * @fires MdNavigationListComponent#onNavigationListKeydownArrowDown
 * @fires MdNavigationListComponent#onNavigationListKeydownEnter
 * @fires MdNavigationListComponent#onNavigationListKeydown
 * @fires MdNavigationListComponent#onNavigationListItemClick
 */
var MdNavigationListComponent = /** @class */ (function (_super) {
    __extends(MdNavigationListComponent, _super);
    /**
     */
    function MdNavigationListComponent() {
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.store = new store_1.Store();
        _this.storeItems = [];
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdNavigationListComponent.prototype.renderNavigationListItem = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <md-navigation-list-row>\n                <md-navigation-list-item\n                    .data=\"", "\"\n                    .icon=\"", "\"\n                    .label=\"", "\"\n                    .selected=\"", "\"\n                    .disabled=\"", "\"\n                    .routerLink=\"", "\"\n                    .rippleOptions=\"", "\"\n                    .badge=\"", "\"\n                    @click=\"", "\"\n                ></md-navigation-list-item>\n            </md-navigation-list-row>\n        "], ["\n            <md-navigation-list-row>\n                <md-navigation-list-item\n                    .data=\"", "\"\n                    .icon=\"", "\"\n                    .label=\"", "\"\n                    .selected=\"", "\"\n                    .disabled=\"", "\"\n                    .routerLink=\"", "\"\n                    .rippleOptions=\"", "\"\n                    .badge=\"", "\"\n                    @click=\"", "\"\n                ></md-navigation-list-item>\n            </md-navigation-list-row>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.routerLink), (0, if_defined_js_1.ifDefined)(item.rippleOptions || this.rippleOptions), (0, if_defined_js_1.ifDefined)(item.badge), this.handleNavigationListItemClick);
    };
    /**
     */
    MdNavigationListComponent.prototype.render = function () {
        var _this = this;
        return this.items.map(function (item) { return _this.renderNavigationListItem(item); });
    };
    /**
     * @async
     */
    MdNavigationListComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.connectedCallback.call(this);
                this.classList.add("md-navigation-list");
                this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
                this.handleNavigationListKeydown = this.handleNavigationListKeydown.bind(this);
                window.addEventListener("keydown", this.handleNavigationListKeydown);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @async
     */
    MdNavigationListComponent.prototype.disconnectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.disconnectedCallback.call(this);
                window.removeEventListener("keydown", this.handleNavigationListKeydown);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @async
     * @param {String} [changedProperties]
     */
    MdNavigationListComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (!changedProperties.has("items")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.store.load(this.items);
                        this.updateStore();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdNavigationListComponent.prototype.updateStore = function () {
        var result = this.store.get({});
        this.storeItems = result.data;
        this.requestUpdate();
    };
    /**
     * @async
     */
    MdNavigationListComponent.prototype.updateScroll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var navigationListItemSelected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        navigationListItemSelected = this.querySelector("md-navigation-list-item[selected]");
                        navigationListItemSelected.focus();
                        navigationListItemSelected.scrollIntoView({
                            block: "nearest",
                            inline: "nearest",
                            behavior: "instant",
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {Object} [event]
     */
    MdNavigationListComponent.prototype.handleNavigationListKeydownArrowUp = function (event) {
        event.preventDefault();
        var selectedIndex = this.storeItems.findIndex(function (item) { return item.selected; });
        var prevIndex = selectedIndex - 1;
        if (prevIndex === -1)
            return;
        this.storeItems.forEach(function (item, index) {
            item.selected = index === prevIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onNavigationListKeydownArrowUp", { event: event });
    };
    /**
     * @async
     * @param {Object} [event]
     */
    MdNavigationListComponent.prototype.handleNavigationListKeydownArrowDown = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedIndex, nextIndex;
            return __generator(this, function (_a) {
                event.preventDefault();
                selectedIndex = this.storeItems.findIndex(function (item) { return item.selected; });
                nextIndex = selectedIndex + 1;
                if (nextIndex === this.storeItems.length)
                    return [2 /*return*/];
                this.storeItems.forEach(function (item, index) {
                    item.selected = index === nextIndex;
                });
                this.requestUpdate();
                this.updateScroll();
                this.emit("onNavigationListKeydownArrowDown", { event: event });
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {Object} [event]
     */
    MdNavigationListComponent.prototype.handleNavigationListKeydownEnter = function (event) {
        event.preventDefault();
        var navigationListItemSelected = this.querySelector("md-navigation-list-item[selected]");
        navigationListItemSelected.click();
        this.emit("onNavigationListKeydownEnter", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdNavigationListComponent.prototype.handleNavigationListKeydown = function (event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowUp")
                return this.handleNavigationListKeydownArrowUp(event);
            else if (event.key === "ArrowDown")
                return this.handleNavigationListKeydownArrowDown(event);
            else if (event.key === "Enter")
                return this.handleNavigationListKeydownEnter(event);
        }
        this.emit("onNavigationListKeydown", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdNavigationListComponent.prototype.handleNavigationListItemClick = function (event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");
        var data = event.currentTarget.data;
        this.items.forEach(function (item) {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onNavigationListItemClick", { event: event });
    };
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     */
    MdNavigationListComponent.properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
    };
    return MdNavigationListComponent;
}(component_1.MdComponent));
exports.MdNavigationListComponent = MdNavigationListComponent;
customElements.define("md-navigation-list", MdNavigationListComponent);
var templateObject_1;

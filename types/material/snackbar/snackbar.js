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
exports.MdSnackbarComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
var queue = function () {
    var pending = Promise.resolve();
    var execute = function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, pending];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2: return [2 /*return*/, callback()];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return function (callback) { return (pending = execute(callback)); };
};
var task = queue();
/**
 * @extends MdComponent
 * @element md-snackbar
 * @fires MdSnackbarComponent#onSnackbarShow
 * @fires MdSnackbarComponent#onSnackbarClose
 * @fires MdSnackbarComponent#onSnackbarShown
 * @fires MdSnackbarComponent#onSnackbarClosed
 * @fires MdSnackbarComponent#onSnackbarIconButtonClick
 * @fires MdSnackbarComponent#onSnackbarButtonClick
 */
var MdSnackbarComponent = /** @class */ (function (_super) {
    __extends(MdSnackbarComponent, _super);
    /**
     */
    function MdSnackbarComponent() {
        var _this = _super.call(this) || this;
        _this.body = Array.from(_this.childNodes);
        _this.autoDismiss = 1000 * 4;
        return _this;
    }
    /**
     * @param {Any} [item]
     */
    MdSnackbarComponent.prototype.renderIcon = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([" <md-icon .data=\"", "\">", "</md-icon> "], [" <md-icon .data=\"", "\">", "</md-icon> "])), item, item.icon);
    };
    /**
     * @param {Any} [item]
     */
    MdSnackbarComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "], ["\n            <md-icon-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .toggle=\"", "\"\n                .selected=\"", "\"\n                .disabled=\"", "\"\n                @click=\"", "\"\n            ></md-icon-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleSnackbarIconButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdSnackbarComponent.prototype.renderButton = function (item) {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "], ["\n            <md-button\n                .data=\"", "\"\n                .icon=\"", "\"\n                .label=\"", "\"\n                .variant=\"", "\"\n                .type=\"", "\"\n                .disabled=\"", "\"\n                .selected=\"", "\"\n                @click=\"", "\"\n            ></md-button>\n        "])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleSnackbarButtonClick);
    };
    /**
     * @param {Any} [item]
     */
    MdSnackbarComponent.prototype.renderSpacer = function (item) {
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([" <div class=\"md-snackbar__spacer\"></div> "], [" <div class=\"md-snackbar__spacer\"></div> "])));
    };
    /**
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    MdSnackbarComponent.prototype.renderComponent = function (item, component) {
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
    MdSnackbarComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c;
        return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])), ((_a = this.body) === null || _a === void 0 ? void 0 : _a.length) ? (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<div class=\"md-snackbar__body\">", "</div>"], ["<div class=\"md-snackbar__body\">", "</div>"])), this.body) : lit_1.nothing, ((_b = this.buttons) === null || _b === void 0 ? void 0 : _b.length) ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject([" <div class=\"md-snackbar__footer\">", "</div> "], [" <div class=\"md-snackbar__footer\">", "</div> "])), ((_c = this.buttons) === null || _c === void 0 ? void 0 : _c.length) ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject([" <div class=\"md-snackbar__buttons\">", "</div> "], [" <div class=\"md-snackbar__buttons\">", "</div> "])), this.buttons.map(function (button) { return _this.renderComponent(button, "button"); })) : lit_1.nothing) : lit_1.nothing);
    };
    /**
     * @async
     */
    MdSnackbarComponent.prototype.connectedCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.connectedCallback.call(this);
                        this.classList.add("md-snackbar");
                        this.style.setProperty("--md-comp-snackbar-animation", "none");
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.style.setProperty("--md-comp-snackbar-height", this.clientHeight + "px");
                        this.style.setProperty("--md-comp-snackbar-width", this.clientWidth + "px");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdSnackbarComponent.prototype.show = function () {
        var _this = this;
        task(function () {
            return new Promise(function (resolve) {
                var handleSnackbarAutoDismiss = function () {
                    _this.close();
                };
                var timeout = setTimeout(handleSnackbarAutoDismiss, _this.autoDismiss);
                var handleSnackbarDismissed = function () {
                    clearTimeout(timeout);
                    _this.removeEventListener("onSnackbarClosed", handleSnackbarDismissed);
                    resolve();
                };
                _this.addEventListener("onSnackbarClosed", handleSnackbarDismissed);
                _this.handleSnackbarShown = _this.handleSnackbarShown.bind(_this);
                _this.addEventListener("animationend", _this.handleSnackbarShown);
                _this.style.removeProperty("--md-comp-snackbar-animation");
                _this.open = true;
                _this.emit("onSnackbarShow");
            });
        });
    };
    /**
     */
    MdSnackbarComponent.prototype.close = function () {
        this.handleSnackbarClosed = this.handleSnackbarClosed.bind(this);
        this.addEventListener("animationend", this.handleSnackbarClosed);
        this.style.removeProperty("--md-comp-snackbar-animation");
        this.open = false;
        this.emit("onSnackbarClose");
    };
    /**
     */
    MdSnackbarComponent.prototype.toggle = function () {
        if (this.open)
            this.close();
        else
            this.show();
    };
    /**
     * @param {Any} [event]
     */
    MdSnackbarComponent.prototype.handleSnackbarShown = function (event) {
        if (event.animationName === "snackbar-out") {
            this.removeEventListener("animationend", this.handleSnackbarShown);
            this.emit("onSnackbarShown");
        }
    };
    /**
     * @param {Any} [event]
     */
    MdSnackbarComponent.prototype.handleSnackbarClosed = function (event) {
        if (event.animationName === "snackbar-in") {
            this.removeEventListener("animationend", this.handleSnackbarClosed);
            this.emit("onSnackbarClosed");
        }
    };
    /**
     * @param {Any} [event]
     */
    MdSnackbarComponent.prototype.handleSnackbarIconButtonClick = function (event) {
        this.emit("onSnackbarIconButtonClick", { event: event });
    };
    /**
     * @param {Any} [event]
     */
    MdSnackbarComponent.prototype.handleSnackbarButtonClick = function (event) {
        this.emit("onSnackbarButtonClick", { event: event });
    };
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {Number} [autoDismiss]
     */
    MdSnackbarComponent.properties = {
        icons: { type: Array },
        actions: { type: Array },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        autoDismiss: { type: Number },
    };
    return MdSnackbarComponent;
}(component_1.MdComponent));
exports.MdSnackbarComponent = MdSnackbarComponent;
customElements.define("md-snackbar", MdSnackbarComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

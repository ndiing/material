"use strict";
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    };
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
exports.MdTooltipComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var choose_js_1 = require("lit/directives/choose.js");
var popper_1 = require("../popper/popper");
/**
 * @extends MdComponent
 * @element md-tooltip
 * @fires MdTooltipComponent#onTooltipShow
 * @fires MdTooltipComponent#onTooltipClose
 * @fires MdTooltipComponent#onTooltipIconButtonClick
 * @fires MdTooltipComponent#onTooltipButtonClick
 */
var MdTooltipComponent = /** @class */ (function (_super) {
    __extends(MdTooltipComponent, _super);
    /**
     */
    function MdTooltipComponent() {
        var _this = _super.call(this) || this;
        _this.body = Array.from(_this.childNodes);
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdTooltipComponent.prototype.renderIcon = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([' <md-icon .data="', '">', "</md-icon> "], [' <md-icon .data="', '">', "</md-icon> "])), item, item.icon);
    };
    /**
     * @param {String} [item]
     */
    MdTooltipComponent.prototype.renderIconButton = function (item) {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '], ['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.toggle), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleTooltipIconButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdTooltipComponent.prototype.renderButton = function (item) {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '], ['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.variant), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.selected), this.handleTooltipButtonClick);
    };
    /**
     * @param {String} [item]
     */
    MdTooltipComponent.prototype.renderSpacer = function (item) {
        return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject([' <div class="md-tooltip__spacer"></div> '], [' <div class="md-tooltip__spacer"></div> '])));
    };
    /**
     * @param {String} [item]
     * @param {String} [component="icon"]
     */
    MdTooltipComponent.prototype.renderComponent = function (item, component) {
        var _this = this;
        if (component === void 0) {
            component = "icon";
        }
        var components = [
            [
                "icon",
                function () {
                    return _this.renderIcon(item);
                },
            ],
            [
                "icon-button",
                function () {
                    return _this.renderIconButton(item);
                },
            ],
            [
                "button",
                function () {
                    return _this.renderButton(item);
                },
            ],
            [
                "spacer",
                function () {
                    return _this.renderSpacer(item);
                },
            ],
        ];
        return (0, choose_js_1.choose)(item.component || component, components, function () {
            return lit_1.nothing;
        });
    };
    /**
     */
    MdTooltipComponent.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (0, lit_1.html)(
            templateObject_15 || (templateObject_15 = __makeTemplateObject([" ", " ", " "], [" ", " ", " "])),
            ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) || this.label || this.sublabel || ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.length)
                ? (0, lit_1.html)(
                      templateObject_10 || (templateObject_10 = __makeTemplateObject([' <div class="md-tooltip__header">', " ", " ", "</div> "], [' <div class="md-tooltip__header">', " ", " ", "</div> "])),
                      ((_c = this.icons) === null || _c === void 0 ? void 0 : _c.length)
                          ? (0, lit_1.html)(
                                templateObject_5 || (templateObject_5 = __makeTemplateObject([' <div class="md-tooltip__icons">', "</div> "], [' <div class="md-tooltip__icons">', "</div> "])),
                                this.icons.map(function (icon) {
                                    return _this.renderComponent(icon, "icon");
                                }),
                            )
                          : lit_1.nothing,
                      this.label || this.sublabel ? (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject([' <div class="md-tooltip__labels">', " ", "</div> "], [' <div class="md-tooltip__labels">', " ", "</div> "])), this.label ? (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(['<div class="md-tooltip__label">', "</div>"], ['<div class="md-tooltip__label">', "</div>"])), this.label) : lit_1.nothing, this.sublabel ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(['<div class="md-tooltip__sublabel">', "</div>"], ['<div class="md-tooltip__sublabel">', "</div>"])), this.sublabel) : lit_1.nothing) : lit_1.nothing,
                      ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.length)
                          ? (0, lit_1.html)(
                                templateObject_9 || (templateObject_9 = __makeTemplateObject([' <div class="md-tooltip__actions">', "</div> "], [' <div class="md-tooltip__actions">', "</div> "])),
                                this.actions.map(function (action) {
                                    return _this.renderComponent(action, "icon-button");
                                }),
                            )
                          : lit_1.nothing,
                  )
                : lit_1.nothing,
            ((_e = this.body) === null || _e === void 0 ? void 0 : _e.length) || ((_f = this.buttons) === null || _f === void 0 ? void 0 : _f.length)
                ? (0, lit_1.html)(
                      templateObject_14 || (templateObject_14 = __makeTemplateObject([' <div class="md-tooltip__wrapper">', " ", "</div> "], [' <div class="md-tooltip__wrapper">', " ", "</div> "])),
                      ((_g = this.body) === null || _g === void 0 ? void 0 : _g.length) ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(['<div class="md-tooltip__body">', "</div>"], ['<div class="md-tooltip__body">', "</div>"])), this.body) : lit_1.nothing,
                      ((_h = this.buttons) === null || _h === void 0 ? void 0 : _h.length)
                          ? (0, lit_1.html)(
                                templateObject_13 || (templateObject_13 = __makeTemplateObject([' <div class="md-tooltip__footer">', "</div> "], [' <div class="md-tooltip__footer">', "</div> "])),
                                ((_j = this.buttons) === null || _j === void 0 ? void 0 : _j.length)
                                    ? (0, lit_1.html)(
                                          templateObject_12 || (templateObject_12 = __makeTemplateObject([' <div class="md-tooltip__buttons">', "</div> "], [' <div class="md-tooltip__buttons">', "</div> "])),
                                          this.buttons.map(function (button) {
                                              return _this.renderComponent(button, "button");
                                          }),
                                      )
                                    : lit_1.nothing,
                            )
                          : lit_1.nothing,
                  )
                : lit_1.nothing,
        );
    };
    /**
     */
    MdTooltipComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-tooltip");
    };
    /**
     * @param {Object} [options]
     */
    MdTooltipComponent.prototype.show = function (options) {
        (0, popper_1.setPosition)(__assign({ container: this, placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"], offset: 8 }, options));
        this.open = true;
        this.emit("onTooltipShow");
    };
    /**
     */
    MdTooltipComponent.prototype.close = function () {
        this.open = false;
        this.emit("onTooltipClose");
    };
    /**
     * @param {Object} [options]
     */
    MdTooltipComponent.prototype.toggle = function (options) {
        if (this.open) this.close();
        else this.show(options);
    };
    /**
     * @param {Object} [event]
     */
    MdTooltipComponent.prototype.handleTooltipIconButtonClick = function (event) {
        this.emit("onTooltipIconButtonClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTooltipComponent.prototype.handleTooltipButtonClick = function (event) {
        this.emit("onTooltipButtonClick", { event: event });
    };
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     */
    MdTooltipComponent.properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };
    return MdTooltipComponent;
})(component_1.MdComponent);
exports.MdTooltipComponent = MdTooltipComponent;
customElements.define("md-tooltip", MdTooltipComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

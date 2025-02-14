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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdListComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
/**
 * @extends MdComponent
 * @element md-list
 * @fires MdListComponent#onListItemClick
 * @fires MdListComponent#onListItemCheckboxNativeInput
 * @fires MdListComponent#onListItemRadioButtonNativeInput
 * @fires MdListComponent#onListItemSwitchNativeInput
 */
var MdListComponent = /** @class */ (function (_super) {
    __extends(MdListComponent, _super);
    /**
     */
    function MdListComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.types = ["single-select", "multi-select"];
        _this.items = [];
        _this.type = "single-select";
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdListComponent.prototype.renderListItem = function (item) {
        if (this.fieldMap) {
            for (var name_1 in this.fieldMap) {
                var value = this.fieldMap[name_1];
                item[name_1] = item[value];
            }
        }
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <md-list-row>\n                <md-list-item\n                    .data="', '"\n                    .avatar="', '"\n                    .image="', '"\n                    .video="', '"\n                    .icon="', '"\n                    .label="', '"\n                    .sublabel="', '"\n                    .text="', '"\n                    .leadingCheckbox="', '"\n                    .leadingRadioButton="', '"\n                    .leadingSwitch="', '"\n                    .trailingCheckbox="', '"\n                    .trailingRadioButton="', '"\n                    .trailingSwitch="', '"\n                    .selected="', '"\n                    .disabled="', '"\n                    .routerLink="', '"\n                    .rippleOptions="', '"\n                    .badge="', '"\n                    @click="', '"\n                    @onCheckboxNativeInput="', '"\n                    @onRadioButtonNativeInput="', '"\n                    @onSwitchNativeInput="', '"\n                ></md-list-item>\n            </md-list-row>\n        '], ['\n            <md-list-row>\n                <md-list-item\n                    .data="', '"\n                    .avatar="', '"\n                    .image="', '"\n                    .video="', '"\n                    .icon="', '"\n                    .label="', '"\n                    .sublabel="', '"\n                    .text="', '"\n                    .leadingCheckbox="', '"\n                    .leadingRadioButton="', '"\n                    .leadingSwitch="', '"\n                    .trailingCheckbox="', '"\n                    .trailingRadioButton="', '"\n                    .trailingSwitch="', '"\n                    .selected="', '"\n                    .disabled="', '"\n                    .routerLink="', '"\n                    .rippleOptions="', '"\n                    .badge="', '"\n                    @click="', '"\n                    @onCheckboxNativeInput="', '"\n                    @onRadioButtonNativeInput="', '"\n                    @onSwitchNativeInput="', '"\n                ></md-list-item>\n            </md-list-row>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.avatar), (0, if_defined_js_1.ifDefined)(item.image), (0, if_defined_js_1.ifDefined)(item.video), (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.sublabel), (0, if_defined_js_1.ifDefined)(item.text), (0, if_defined_js_1.ifDefined)(item.leadingCheckbox), (0, if_defined_js_1.ifDefined)(item.leadingRadioButton), (0, if_defined_js_1.ifDefined)(item.leadingSwitch), (0, if_defined_js_1.ifDefined)(item.trailingCheckbox), (0, if_defined_js_1.ifDefined)(item.trailingRadioButton), (0, if_defined_js_1.ifDefined)(item.trailingSwitch), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), (0, if_defined_js_1.ifDefined)(item.routerLink), (0, if_defined_js_1.ifDefined)(item.rippleOptions || this.rippleOptions), (0, if_defined_js_1.ifDefined)(item.badge), this.handleListItemClick, this.handleListItemCheckboxNativeInput, this.handleListItemRadioButtonNativeInput, this.handleListItemSwitchNativeInput);
    };
    /**
     */
    MdListComponent.prototype.render = function () {
        var _this = this;
        return this.items.map(function (item) {
            return _this.renderListItem(item);
        });
    };
    /**
     */
    MdListComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-list");
    };
    /**
     * @param {Object} [event]
     */
    MdListComponent.prototype.handleListItemClick = function (event) {
        var action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");
        if (action) return;
        var data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.items.forEach(function (item) {
                item.selected = item === data;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        this.emit("onListItemClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdListComponent.prototype.handleListItemCheckboxNativeInput = function (event) {
        var data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdListComponent.prototype.handleListItemRadioButtonNativeInput = function (event) {
        var data = event.currentTarget.data;
        this.items.forEach(function (item) {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdListComponent.prototype.handleListItemSwitchNativeInput = function (event) {
        var data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput", { event: event });
    };
    /**
     * @property {Array} [items]
     * @property {String} [type]
     * @property {Object} [fieldMap]
     * @property {Object} [rippleOptions]
     */
    MdListComponent.properties = {
        items: { type: Array },
        type: { type: String },
        fieldMap: { type: Object },
        rippleOptions: { type: Object },
    };
    return MdListComponent;
})(component_1.MdComponent);
exports.MdListComponent = MdListComponent;
customElements.define("md-list", MdListComponent);
var templateObject_1;

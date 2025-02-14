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
exports.MdSegmentedButtonComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
/**
 * @extends MdComponent
 * @element md-segmented-button
 * @fires MdSegmentedButtonComponent#onSegmentedButtonItemClick
 */
var MdSegmentedButtonComponent = /** @class */ (function (_super) {
    __extends(MdSegmentedButtonComponent, _super);
    /**
     */
    function MdSegmentedButtonComponent() {
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
    MdSegmentedButtonComponent.prototype.renderButton = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <md-button\n                .data="', '"\n                class="md-segmented-button__button"\n                .icon="', '"\n                .label="', '"\n                variant="outlined"\n                .type="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-button>\n        '], ['\n            <md-button\n                .data="', '"\n                class="md-segmented-button__button"\n                .icon="', '"\n                .label="', '"\n                variant="outlined"\n                .type="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-button>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon || (item.selected && "check")), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.type), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleSegmentedButtonItemClick);
    };
    /**
     */
    MdSegmentedButtonComponent.prototype.render = function () {
        var _this = this;
        return this.items.map(function (item) {
            return _this.renderButton(item);
        });
    };
    /**
     */
    MdSegmentedButtonComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-segmented-button");
    };
    /**
     * @param {Object} [event]
     */
    MdSegmentedButtonComponent.prototype.handleSegmentedButtonItemClick = function (event) {
        var data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.items.forEach(function (item) {
                item.selected = item === data;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        this.emit("onSegmentedButtonItemClick", { event: event });
    };
    /**
     * @property {Array} [items]
     * @property {String} [type]
     */
    MdSegmentedButtonComponent.properties = {
        items: { type: Array },
        type: { type: String },
    };
    return MdSegmentedButtonComponent;
})(component_1.MdComponent);
exports.MdSegmentedButtonComponent = MdSegmentedButtonComponent;
customElements.define("md-segmented-button", MdSegmentedButtonComponent);
var templateObject_1;

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
exports.MdChipsComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var ripple_1 = require("../ripple/ripple");
/**
 * @extends MdComponent
 * @element md-chips
 * @fires MdChipsComponent#onChipClick
 */
var MdChipsComponent = /** @class */ (function (_super) {
    __extends(MdChipsComponent, _super);
    /**
     */
    function MdChipsComponent() {
        var _this = _super.call(this) || this;
        /**
         * @readonly
         */
        _this.types = ["single-select", "multi-select"];
        _this.type = "single-select";
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdChipsComponent.prototype.renderChip = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <md-chip\n                .data="', '"\n                .icon="', '"\n                .avatar="', '"\n                .label="', '"\n                .action="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-chip>\n        '], ['\n            <md-chip\n                .data="', '"\n                .icon="', '"\n                .avatar="', '"\n                .label="', '"\n                .action="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-chip>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.icon), (0, if_defined_js_1.ifDefined)(item.avatar), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.action), (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.disabled), this.handleChipClick);
    };
    /**
     */
    MdChipsComponent.prototype.render = function () {
        var _this = this;
        return this.items.map(function (item) {
            return _this.renderChip(item);
        });
    };
    /**
     */
    MdChipsComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-chips");
    };
    /**
     * @param {Object} [event]
     */
    MdChipsComponent.prototype.handleChipClick = function (event) {
        var data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.items.forEach(function (item) {
                item.selected = data === item;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        this.emit("onChipClick", { event: event });
    };
    /**
     * @property {Array} [items]
     * @property {String} [type]
     */
    MdChipsComponent.properties = {
        items: { type: Array },
        type: { type: String },
    };
    return MdChipsComponent;
})(component_1.MdComponent);
exports.MdChipsComponent = MdChipsComponent;
customElements.define("md-chips", MdChipsComponent);
var templateObject_1;

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdFormComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var ref_js_1 = require("lit/directives/ref.js");
/**
 * @extends MdComponent
 * @element md-form
 * @fires MdFormComponent#onFormNativeFormdata
 * @fires MdFormComponent#onFormNativeReset
 * @fires MdFormComponent#onFormNativeSubmit
 */
var MdFormComponent = /** @class */ (function (_super) {
    __extends(MdFormComponent, _super);
    /**
     */
    function MdFormComponent() {
        var _this = _super.call(this) || this;
        _this.body = Array.from(_this.childNodes);
        return _this;
    }
    Object.defineProperty(MdFormComponent.prototype, "formNative", {
        /**
         * @readonly
         */
        get: function () {
            return this.querySelector(".md-form__native");
        },
        enumerable: false,
        configurable: true
    });
    /**
     */
    MdFormComponent.prototype.render = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <form\n                class=\"md-form__native\"\n                .acceptCharset=\"", "\"\n                .action=\"", "\"\n                .autocomplete=\"", "\"\n                .enctype=\"", "\"\n                .method=\"", "\"\n                .name=\"", "\"\n                .noValidate=\"", "\"\n                @formdata=\"", "\"\n                @reset=\"", "\"\n                @submit=\"", "\"\n            >\n                ", "\n            </form>\n        "], ["\n            <form\n                class=\"md-form__native\"\n                .acceptCharset=\"", "\"\n                .action=\"", "\"\n                .autocomplete=\"", "\"\n                .enctype=\"", "\"\n                .method=\"", "\"\n                .name=\"", "\"\n                .noValidate=\"", "\"\n                @formdata=\"", "\"\n                @reset=\"", "\"\n                @submit=\"", "\"\n            >\n                ", "\n            </form>\n        "])), (0, if_defined_js_1.ifDefined)(this.acceptCharset), (0, if_defined_js_1.ifDefined)(this.action), (0, if_defined_js_1.ifDefined)(this.autocomplete), (0, if_defined_js_1.ifDefined)(this.enctype), (0, if_defined_js_1.ifDefined)(this.method), (0, if_defined_js_1.ifDefined)(this.name), (0, if_defined_js_1.ifDefined)(this.noValidate), this.handleFormNativeFormdata, this.handleFormNativeReset, this.handleFormNativeSubmit, this.body);
    };
    /**
     */
    MdFormComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-form");
    };
    /**
     */
    MdFormComponent.prototype.reset = function () {
        this.formNative.reset();
    };
    /**
     * @param {String} [submitButton]
     */
    MdFormComponent.prototype.submit = function (submitButton) {
        if (this.formNative.requestSubmit) {
            if (submitButton) {
                this.formNative.requestSubmit(submitButton);
            }
            else {
                this.formNative.requestSubmit();
            }
        }
        else {
            this.formNative.submit();
        }
    };
    /**
     * @param {Object} [event]
     */
    MdFormComponent.prototype.handleFormNativeFormdata = function (event) {
        this.emit("onFormNativeFormdata", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdFormComponent.prototype.handleFormNativeReset = function (event) {
        for (var _i = 0, _a = this.formNative.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var event_1 = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
            });
            element.dispatchEvent(event_1);
        }
        this.emit("onFormNativeReset", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdFormComponent.prototype.handleFormNativeSubmit = function (event) {
        event.preventDefault();
        new FormData(this.formNative);
        this.emit("onFormNativeSubmit", { event: event });
    };
    /**
     * @property {String} [acceptCharset]
     * @property {String} [action]
     * @property {String} [autocomplete]
     * @property {String} [enctype]
     * @property {String} [method]
     * @property {String} [name]
     * @property {Boolean} [noValidate]
     */
    MdFormComponent.properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        noValidate: { type: Boolean },
    };
    return MdFormComponent;
}(component_1.MdComponent));
exports.MdFormComponent = MdFormComponent;
customElements.define("md-form", MdFormComponent);
var templateObject_1;

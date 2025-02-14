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
exports.MdImageComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var style_map_js_1 = require("lit/directives/style-map.js");
/**
 * @extends MdComponent
 * @element md-image
 */
var MdImageComponent = /** @class */ (function (_super) {
    __extends(MdImageComponent, _super);
    /**
     */
    function MdImageComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MdImageComponent.prototype, "styleImageNative", {
        /**
         * @readonly
         */
        get: function () {
            var style = {};
            if (this.ratio) {
                style["aspect-ratio"] = this.ratio;
            }
            if (this.circular) {
                if (this.ratio) {
                    var _a = this.ratio.split("/").map(Number),
                        x = _a[0],
                        y = _a[1];
                    style["border-radius"] = "50% / ".concat((50 * x) / y, "%");
                } else {
                    style["border-radius"] = "50%";
                }
            }
            return style;
        },
        enumerable: false,
        configurable: true,
    });
    /**
     */
    MdImageComponent.prototype.render = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <img\n                .src="', '"\n                .alt="', '"\n                class="md-image__native"\n                style="', '"\n            />\n        '], ['\n            <img\n                .src="', '"\n                .alt="', '"\n                class="md-image__native"\n                style="', '"\n            />\n        '])), (0, if_defined_js_1.ifDefined)(this.src), (0, if_defined_js_1.ifDefined)(this.alt), (0, style_map_js_1.styleMap)(this.styleImageNative));
    };
    /**
     */
    MdImageComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-image");
    };
    /**
     * @property {String} [src]
     * @property {String} [alt]
     * @property {String} [ratio]
     * @property {Boolean} [circular]
     */
    MdImageComponent.properties = {
        src: { type: String },
        alt: { type: String },
        ratio: { type: String },
        circular: { type: Boolean },
    };
    return MdImageComponent;
})(component_1.MdComponent);
exports.MdImageComponent = MdImageComponent;
customElements.define("md-image", MdImageComponent);
var templateObject_1;

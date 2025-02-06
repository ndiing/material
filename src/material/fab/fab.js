import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 */
class MdFabComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [type]
     * @property {String} [size]
     * @property {String} [variant]
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        type: { type: String },
        size: { type: String },
        variant: { type: String },
    };
    sizes = ["small", "large"];
    types = ["extended"];
    variants = ["unelevated"];

    /**
     */
    constructor() {
        super();
        this.ripple = new RippleController(this, {});
    }

    /**
     * @private
     */
    render() {
        return html` ${this.icon ? html`<md-icon class="md-fab__icon">${this.icon}</md-icon>` : nothing} ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing} `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("type")) {
            this.types.forEach((type) => {
                this.classList.toggle(`md-fab--${type}`, type === this.type);
            });
        }
        if (changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-fab--${size}`, size === this.size);
            });
        }
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-fab--${variant}`, variant === this.variant);
            });
        }
    }
}
customElements.define("md-fab", MdFabComponent);
export { MdFabComponent };

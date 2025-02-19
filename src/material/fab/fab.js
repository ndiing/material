import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { Ripple } from "../ripple/ripple";
import { ifDefined } from "lit/directives/if-defined.js";
/**
 * @extends MdComponent
 * @element md-fab
 */
class MDFabComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {String} [label]
     * @property {extended} [type]
     * @property {small|large} [size]
     * @property {unelevated} [variant]
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

    constructor() {
        super();
    }

    render() {
        return html` ${this.icon ? html`<md-icon class="md-fab__icon">${this.icon}</md-icon>` : nothing} ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
        await this.updateComplete;
        this.ripple = new Ripple(this, {});
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.ripple) this.ripple.destroy();
    }

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

customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };

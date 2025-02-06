import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 */
class MdButtonComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [disabled]
     * @property {Boolean} [selected]
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        variant: { type: String },
        type: { type: String },
        disabled: { type: Boolean, reflect: true },
        selected: { type: Boolean, reflect: true },
    };
    variants = ["elevated", "filled", "filled-tonal", "outlined"];

    /**
     */
    constructor() {
        super();
        this.type = "button";
        this.ripple = new RippleController(this, {
            trigger: ".md-button__native",
        });
    }

    /**
     * @private
     */
    render() {
        return html`
            <button
                class="md-button__native"
                .type="${ifDefined(this.type)}"
            >
                button
            </button>
            ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing} ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-button--${variant}`, variant === this.variant);
            });
        }
    }
}
customElements.define("md-button", MdButtonComponent);
export { MdButtonComponent };

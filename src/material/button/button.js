import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{description}}
 * @element md-button
 * @extends MDComponent
 */
class MDButtonComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} variant - {{description}}
     * @property {String} type - {{description}}
     * @property {String} icon - {{description}}
     * @property {String} label - {{description}}
     * @property {Boolean} selected - {{description}}
     * @property {Boolean} disabled - {{description}}
     */
    static properties = {
        variant: { type: String },
        type: { type: String },
        icon: { type: String },
        label: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["elevated", "filled", "tonal", "outlined", "icon-right"];

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.type = "button";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-button__native",
            clipped: true,
        });
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon ? html`<div class="md-icon md-button__icon">${this.icon}</div>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
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
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-button--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("disabled")) {
            if (this.disabled) {
                this.setAttribute("aria-disabled", "true");
                this.setAttribute("tabindex", "-1");
            } else {
                this.removeAttribute("aria-disabled");
                this.removeAttribute("tabindex");
            }
        }
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };

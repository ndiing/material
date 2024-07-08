import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{description}}
 * @element md-fab
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} variant - {{description}}
     * @property {String} icon - {{description}}
     * @property {String} label - {{description}}
     * @property {Boolean} selected - {{description}}
     * @property {Boolean} disabled - {{description}}
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        label: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["small", "large", "surface", "secondary", "tertiary", "unelevated", "extended"];

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
            fadeOut: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icon ? html`<div class="md-icon md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-fab--${variant}`, (this.variant ?? "").split(" ").includes(variant));
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

customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };

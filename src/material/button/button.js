import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Button component for Material Design.
 * @extends MDComponent
 * @tagname md-button
 */
class MDButtonComponent extends MDComponent {
    /**
     * @property {String} variant - The variant style of the button (e.g., elevated, filled, outlined).
     * @property {String} type - The type attribute of the button (default is "button").
     * @property {String} icon - Optional icon to display inside the button.
     * @property {String} label - The label or text content of the button.
     * @property {Boolean} selected - Indicates if the button is selected.
     * @property {Boolean} disabled - Indicates if the button is disabled.
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

    constructor() {
        super();

        this.type = "button";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-button__native",
            clipped: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon ? html`<div class="md-icon md-button__icon">${this.icon}</div>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

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

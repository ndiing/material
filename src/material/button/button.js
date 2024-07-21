import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-button
 */
class MDButtonComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} type - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {String} label - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     */
    static properties = {
        ...MDComponent.properties,
        variant: { type: String },
        type: { type: String },
        icon: { type: String },
        label: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };
    variants = ["elevated", "filled", "tonal", "outlined", "icon-right"];

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.type = "button";
        this.ripple = new MDRippleController(this, {
            clipped: true,
            button: ".md-button__native",
        });
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            <button 
                class="md-button__native" 
                .type="${this.type}"
            >
                ${this.icon ? html`<md-icon class="md-button__icon" .icon="${this.icon}"></md-icon>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-button--${variant}`, variants.includes(variant));
            });
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

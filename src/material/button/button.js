import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * A custom element for creating various styles of buttons with optional ripple effects.
 * @element md-button
 * @extends MDComponent
 */
class MDButtonComponent extends MDComponent {
    /**
     * Defines the properties of the element.
     * @property {String} variant - The style variant of the button (e.g., "elevated", "filled", "tonal", "outlined", "icon-right").
     * @property {String} type - The type attribute of the button element (default is "button").
     * @property {String} icon - The icon to display within the button.
     * @property {String} label - The label text to display within the button.
     * @property {Boolean} selected - Indicates whether the button is selected.
     * @property {Boolean} disabled - Indicates whether the button is disabled.
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
     * Creates an instance of MDButtonComponent.
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
     * Renders the button element with optional icon and label.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <button 
                class="md-button__native" 
                .type="${this.type}"
            >
                ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing}
                <div class="md-button__label">${this.label}</div>
            </button>
        `;
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-button' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * Called when the element's properties are updated.
     * Toggles the button's variant classes and handles the disabled state.
     * @private
     * @param {Map} changedProperties - The properties that changed.
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

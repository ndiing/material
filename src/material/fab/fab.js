import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
/**
 * A custom floating action button (FAB) component.
 * @element md-fab
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties for the md-fab component.
     * @property {String} variant - The variant of the FAB (e.g., "small", "large", "extended").
     * @property {String} icon - The icon to display inside the FAB.
     * @property {String} label - The label to display inside the FAB.
     * @property {Boolean} selected - Indicates if the FAB is selected.
     * @property {Boolean} disabled - Indicates if the FAB is disabled.
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
     * Constructs an instance of MDFabComponent.
     * Initializes the ripple effect for the FAB.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the FAB component.
     * @private
     * @returns {TemplateResult} - The rendered template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icon ? html`<md-icon class="md-fab__icon" .icon="${this.icon}"></md-icon>` : nothing}

            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }
    /**
     * Invoked when the component is added to the document's DOM.
     * Adds the base class for the FAB.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    /**
     * Called when properties change.
     * Updates the FAB's classes and attributes based on the changed properties.
     * @private
     * @param {Map} changedProperties - The properties that changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-fab--${variant}`, variants.includes(variant));
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
customElements.define("md-fab", MDFabComponent);
export { MDFabComponent };

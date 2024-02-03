import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDChipComponent represents a material design chip.
 *
 * @extends MDComponent
 */
class MDChipComponent extends MDComponent {
    /**
     * @property {String} icon - The icon for the chip.
     * @property {String} avatar - The avatar for the chip.
     * @property {String} label - The label for the chip.
     * @property {String} trailingIcon - The trailing icon for the chip.
     * @property {Boolean} activated - Indicates whether the chip is activated.
     */
    static properties = {
        icon: { type: String },
        avatar: { type: String },
        label: { type: String },
        trailingIcon: { type: String },
        activated: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-chip' class to the component
        this.classList.add("md-chip");
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-chip' class from the component
        this.classList.remove("md-chip");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Initialize the ripple effect for the chip
        this.ripple = new MDRippleController(this, {});
    }

    /**
     * Called when the component is updated.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
        // Additional logic if needed
    }

    /**
     * Render method for the component.
     *
     * @returns {TemplateResult} Rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : nothing}
            ${this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar?.src ?? this.avatar}" .ui="${this.avatar?.ui ?? 'shape'}"></md-image>` : nothing}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : nothing}
            ${this.trailingIcon ? html`<md-icon class="md-chip__icon">${this.trailingIcon}</md-icon>` : nothing}
        `;
    }
}

// Define the custom element
customElements.define("md-chip", MDChipComponent);

// Export the component
export { MDChipComponent };

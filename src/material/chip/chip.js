import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDChipComponent` is a custom web component representing a chip.
 * @extends MDComponent
 */
class MDChipComponent extends MDComponent {
    /**
     * Properties for MDChipComponent.
     * @static
     * @type {object}
     * @property {String} leadingIcon - The leading icon to be displayed in the chip.
     * @property {String} avatar - The avatar image source for the chip.
     * @property {String} trailingIcon - The trailing icon to be displayed in the chip.
     * @property {String} label - The label text for the chip.
     * @property {Boolean} activated - Indicates whether the chip is activated or not.
     */
    static properties = {
        leadingIcon: { type: String },
        avatar: { type: String },
        trailingIcon: { type: String },
        label: { type: String },
        activated: { type: Boolean, reflect: true },
    };

    /**
     * Constructs an instance of MDChipComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-chip");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {});
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders the content of the MDChipComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.leadingIcon ? html`<md-icon class="md-chip__icon">${this.leadingIcon}</md-icon>` : nothing}
            ${this.avatar ? html`<md-image class="md-chip__image" .src="${this.avatar}"></md-image>` : nothing}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : nothing}
            ${this.trailingIcon ? html`<md-icon class="md-chip__icon">${this.trailingIcon}</md-icon>` : nothing}
        `;
    }
}

/**
 * Define the custom element "md-chip" with MDChipComponent.
 */
customElements.define("md-chip", MDChipComponent);

export { MDChipComponent };

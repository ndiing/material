import { html } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * MDButtonComponent represents a button element with customizable appearance and ripple effect.
 */
class MDButtonComponent extends MDComponent {
    /**
     * Defines the properties and their types for MDButtonComponent.
     * @property {String} appearance - The appearance/style of the button.
     * @property {String} type - The type of the button element.
     * @property {String} icon - The icon displayed in the button.
     * @property {String} label - The label or text content of the button.
     * @property {Boolean} activated - Reflects whether the button is activated or not.
     * @returns {Object} An object containing property definitions.
     */
    static get properties() {
        return {
            appearance: { type: String },
            type: { type: String },
            icon: { type: String },
            label: { type: String },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MDButtonComponent setting default 'type' to "button".
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Returns the native button element inside the MDButtonComponent.
     * @returns {HTMLElement} The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Renders the HTML template for the MDButtonComponent.
     * @returns {HTMLElement} A template result representing the rendered HTML.
     */
    render() {
        // prettier-ignore
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : ``}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : ``}
        `;
    }

    /**
     * Lifecycle method called when the element is added to the DOM.
     * Initializes the component and attaches MDRipple effect to the button.
     * @returns {Promise<void>} A promise resolving when initialization is complete.
     */
    async connectedCallback() {
        super.connectedCallback();
        
        await this.updateComplete;
        
        this.classList.add("md-button");
        
        this.mdRipple = new MDRipple(this, {
            trigger: this.buttonNative,
            inverted: this.appearance === "filled",
        });
    }

    /**
     * Lifecycle method called when the element is removed from the DOM.
     * Cleans up the component, removing added classes and destroying the ripple effect.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-button");
        
        this.mdRipple.destroy();
    }

    /**
     * Lifecycle method called after the first update of the element.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    firstUpdated(_changedProperties) {
        // Implementation specific to first update (not provided in the snippet)
    }

    /**
     * Lifecycle method called when properties are updated.
     * Updates the appearance-related classes based on the 'appearance' property.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("appearance")) {
            ["elevated", "filled", "filled-tonal", "outlined"].forEach((appearance) => this.classList.remove("md-button--" + appearance));
            if (this.appearance) this.classList.add("md-button--" + this.appearance);
        }
    }
}
// Registers the MDButtonComponent custom element
customElements.define("md-button", MDButtonComponent);
export { MDButtonComponent };

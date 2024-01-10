import { html } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * MDFabComponent represents a floating action button (FAB) element with customizable appearance and ripple effect.
 */
class MDFabComponent extends MDComponent {
    /**
     * Defines the properties and their types for MDFabComponent.
     * @property {String} size - The size of the FAB. Can be 'small' or 'large'.
     * @property {String} appearance - The appearance/style of the FAB. Currently supports 'extended'.
     * @property {String} type - The type of the button.
     * @property {String} icon - The icon displayed in the FAB.
     * @property {String} label - The label or text content of the FAB.
     * @returns {Object} An object containing property definitions.
     */
    static get properties() {
        return {
            size: { type: String },
            appearance: { type: String },
            type: { type: String },
            icon: { type: String },
            label: { type: String },
        };
    }

    /**
     * Constructor for MDFabComponent setting default 'type' to "button".
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Returns the native button element inside the MDFabComponent.
     * @returns {HTMLElement} The native button element.
     */
    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Renders the HTML template for the MDFabComponent.
     * @returns {HTMLElement} A template result representing the rendered HTML.
     */
    render() {
        // prettier-ignore
        return html`
            <button class="md-fab__native" .type="${this.type}"></button>
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : ``}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : ``}
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
        this.classList.add("md-fab");
        this.mdRipple = new MDRipple(this, {
            trigger: this.fabNative,
        });
    }

    /**
     * Lifecycle method called when the element is removed from the DOM.
     * Cleans up the component, removing added classes and destroying the ripple effect.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
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
     * Updates the size-related and appearance-related classes based on their respective properties.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("size")) {
            ["small", "large"].forEach((size) => this.classList.remove("md-fab--" + size));
            if (this.size) this.classList.add("md-fab--" + this.size);
        }
        if (_changedProperties.has("appearance")) {
            ["extended"].forEach((appearance) => this.classList.remove("md-fab--" + appearance));
            if (this.appearance) this.classList.add("md-fab--" + this.appearance);
        }
    }
}

// Registers the MDFabComponent custom element
customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };

import { html } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * MDIconButtonComponent represents an icon button element with customizable appearance and ripple effect.
 * @fires MDIconButtonComponent#onIconButtonNativeClick - Fires when the native icon button is clicked.
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Defines the properties and their types for MDIconButtonComponent.
     * @property {String} appearance - The appearance/style of the icon button.
     * @property {String} type - The type of the button.
     * @property {String} icon - The icon displayed in the button.
     * @property {Boolean} toggle - Indicates if the icon button is toggleable.
     * @property {Boolean} activated - Reflects whether the icon button is activated or not.
     * @returns {Object} An object containing property definitions.
     */
    static get properties() {
        return {
            appearance: { type: String },
            type: { type: String },
            icon: { type: String },
            toggle: { type: Boolean },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MDIconButtonComponent setting default 'type' to "button".
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Returns the native icon button element inside the MDIconButtonComponent.
     * @returns {HTMLElement} The native icon button element.
     */
    get iconButtonNative() {
        return this.querySelector(".md-icon-button__native");
    }

    /**
     * Renders the HTML template for the MDIconButtonComponent.
     * @returns {HTMLElement} A template result representing the rendered HTML.
     */
    render() {
        // prettier-ignore
        return html`
            <icon-button class="md-icon-button__native" .type="${this.type}" @click="${this.handleIconButtonNativeClick}"></icon-button>
            ${this.icon ? html`<div class="md-icon-button__icon">${this.icon}</div>` : ``}
        `;
    }

    /**
     * Lifecycle method called when the element is added to the DOM.
     * Initializes the component and attaches MDRipple effect to the icon button.
     * @returns {Promise<void>} A promise resolving when initialization is complete.
     */
    async connectedCallback() {
        super.connectedCallback();
        
        await this.updateComplete;
        
        this.classList.add("md-icon-button");
        
        this.mdRipple = new MDRipple(this, {
            trigger: this.iconButtonNative,
            inverted: this.appearance === "filled",
            bounded: false,
            diameter: this.appearance ? (40 / 40) * 100 : (40 / 24) * 100,
            fadeout: true,
        });
    }

    /**
     * Lifecycle method called when the element is removed from the DOM.
     * Cleans up the component, removing added classes and destroying the ripple effect.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-icon-button");
        
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
     * Updates classes based on the 'appearance' and 'toggle' properties.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("appearance")) {
            ["filled", "filled-tonal", "outlined"].forEach((appearance) => this.classList.remove("md-icon-button--" + appearance));
            if (this.appearance) this.classList.add("md-icon-button--" + this.appearance);
        }
        
        if (_changedProperties.has("toggle")) {
            if (this.toggle) this.classList.add("md-icon-button--toggle");
            else this.classList.remove("md-icon-button--toggle");
        }
    }

    /**
     * Handles the click event on the native icon button element.
     * Toggles activation if 'toggle' property is enabled and emits a custom event.
     * @param {Event} event - The click event on the icon button.
     * @fires MDIconButtonComponent#onIconButtonNativeClick
     */
    handleIconButtonNativeClick(event) {
        if (this.toggle) this.activated = !this.activated;

        /**
         * Event fired when the native icon button is clicked.
         * @event MDIconButtonComponent#onIconButtonNativeClick
         */
        this.emit("onIconButtonNativeClick");
    }
}
// Registers the MDIconButtonComponent custom element
customElements.define("md-icon-button", MDIconButtonComponent);
export { MDIconButtonComponent };

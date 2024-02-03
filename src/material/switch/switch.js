import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDSwitchComponent represents a material design switch.
 *
 * @extends MDComponent
 */
class MDSwitchComponent extends MDComponent {
    /**
     * @property {String} name - The name attribute for the switch.
     * @property {Boolean} checked - The checked state of the switch.
     */
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    constructor() {
        super();

        // default
    }

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-switch' class to the component
        this.classList.add("md-switch");
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-switch' class from the component
        this.classList.remove("md-switch");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Initialize the ripple effect for the switch
        this.ripple = new MDRippleController(this, {
            // size:40/16*100,
            containment: false,
            fadeout: true,
            button: this.querySelector('.md-switch__native'),
            container: this.querySelector('.md-switch__thumb'),
            centered: true
        });
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
            <input 
            type="checkbox" 
            class="md-switch__native"
            .name="${ifDefined(this.name)}"
            .checked="${ifDefined(this.checked)}"
            @input="${this.handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `;
    }

    /**
     * Handles the input event for the native switch.
     *
     * @param {Event} event - The input event.
     */
    handleSwitchNativeInput(event) {
        const input = event.currentTarget;

        this.checked = input.checked;

        // Emit a custom event when the native switch is input
        /**
         * @event MDSwitchComponent#onSwitchNativeInput
         * @type {Object}
         * @property {Event} event - The input event.
         */
        this.emit("onSwitchNativeInput", { event });
    }
}

// Define the custom element
customElements.define("md-switch", MDSwitchComponent);

// Export the component
export { MDSwitchComponent };

import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDRadioButtonComponent class represents a material design radio button.
 *
 * @extends MDComponent
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * @property {String} name - The name attribute for the radio button.
     * @property {Boolean} checked - The checked state of the radio button.
     */
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-radio-button' class to the component
        this.classList.add("md-radio-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-radio-button' class from the component
        this.classList.remove("md-radio-button");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Initialize the ripple effect for the radio button
        this.ripple = new MDRippleController(this, {
            size: 40 / 16 * 100,
            containment: false,
            fadeout: true,
            button: this.querySelector('.md-radio-button__native'),
            container: this.querySelector('.md-radio-button__track')
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
            type="radio" 
            class="md-radio-button__native"
            .name="${ifDefined(this.name)}"
            .checked="${ifDefined(this.checked)}"
            @input="${this.handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    /**
     * Handles the input event for the native radio button.
     *
     * @param {Event} event - The input event.
     */
    handleRadioButtonNativeInput(event) {
        const input = event.currentTarget;

        this.checked = input.checked;

        // Emit a custom event when the native radio button is input
        /**
         * @event MDRadioButtonComponent#onRadioButtonNativeInput
         * @type {Object}
         * @property {Event} event - The input event.
         */
        this.emit("onRadioButtonNativeInput", { event });
    }
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };

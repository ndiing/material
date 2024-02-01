import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDRadioButtonComponent` is a custom web component representing a radio button.
 * @extends MDComponent
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * Properties for MDRadioButtonComponent.
     * @static
     * @type {object}
     * @property {String} name - The name attribute of the radio button.
     * @property {Boolean} checked - Indicates whether the radio button is checked.
     */
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    /**
     * Gets the native radio button element.
     * @returns {HTMLInputElement} The native radio button element.
     */
    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }

    /**
     * Gets the radio button track element.
     * @returns {HTMLDivElement} The radio button track element.
     */
    get radioButtonTrack() {
        return this.querySelector(".md-radio-button__track");
    }

    /**
     * Gets the radio button thumb element.
     * @returns {HTMLDivElement} The radio button thumb element.
     */
    get radioButtonThumb() {
        return this.querySelector(".md-radio-button__thumb");
    }

    /**
     * Constructs an instance of MDRadioButtonComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.radioButtonNative,
            container: this.radioButtonTrack,
            size: (40 / 16) * 100,
            containment: false,
            fadeout: true,
            centered: true,
        });
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders the content of the MDRadioButtonComponent.
     * @returns {TemplateResult} The lit-html template result.
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
     * Handles the input event on the native radio button.
     * @param {Event} event - The input event.
     * @fires MDRadioButtonComponent#onRadioButtonNativeInput
     */
    handleRadioButtonNativeInput(event) {
        const radioButtonNative = event.currentTarget;

        this.checked = radioButtonNative.checked;

        /**
         * Emitted when the native radio button input event occurs.
         * @event MDRadioButtonComponent#onRadioButtonNativeInput
         * @type {object}
         * @property {Event} event - The original input event.
         * @property {HTMLInputElement} radioButtonNative - The native radio button element.
         */
        this.emit("onRadioButtonNativeInput", { event, radioButtonNative });
    }
}

/**
 * Define the custom element "md-radio-button" with MDRadioButtonComponent.
 */
customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };

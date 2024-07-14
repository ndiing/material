import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Radio button component that extends the MDComponent base class.
 * @element md-radio-button
 * @extends MDComponent
 * @fires MDRadioButtonComponent#onRadioButtonNativeInput - Fired when the radio button input is changed.
 * @fires MDRadioButtonComponent#onRadioButtonNativeReset - Fired when the radio button input is reset.
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * Defines the properties of the radio button component.
     * @property {String} name - The name attribute of the radio button.
     * @property {String} value - The value attribute of the radio button.
     * @property {Boolean} indeterminate - The indeterminate state of the radio button.
     * @property {Boolean} checked - The checked state of the radio button.
     * @property {Boolean} disabled - The disabled state of the radio button.
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
    };

    /**
     * Initializes a new instance of the MDRadioButtonComponent.
     * Sets up the ripple effect and initializes component properties.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-radio-button__native",
            containerSelector: ".md-radio-button__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }
    radioButtonNative = createRef();

    /**
     * Renders the radio button component template.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-radio-button__native"
                aria-label="label"
                type="radio" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                ${ref(this.radioButtonNative)}
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
            <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
        `;
    }

    /**
     * Lifecycle method called when the component is added to the DOM.
     * Initializes default values and adds necessary classes.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-radio-button");

        if (this.defaultValue === undefined) {
            this.defaultValue = this.value || "on";
        }

        if (this.defaultChecked === undefined) {
            this.defaultChecked = !!this.checked;
        }

        if (this.defaultIndeterminate === undefined) {
            this.defaultIndeterminate = !!this.indeterminate;
        }
    }

    /**
     * Event handler for the radio button input event.
     * Updates component properties and emits the onRadioButtonNativeInput event.
     * @param {Event} event - The input event.
     * @private
     */
    handleRadioButtonNativeInput(event) {
        this.value = this.radioButtonNative.value.value;
        this.checked = this.radioButtonNative.value.checked;
        this.indeterminate = this.radioButtonNative.value.indeterminate;
        this.emit("onRadioButtonNativeInput", event);
    }

    /**
     * Event handler for the radio button reset event.
     * Resets component properties to their default values and emits the onRadioButtonNativeReset event.
     * @param {Event} event - The reset event.
     * @private
     */
    handleRadioButtonNativeReset(event) {
        this.radioButtonNative.value.value = this.defaultValue;
        this.radioButtonNative.value.checked = this.defaultChecked;
        this.radioButtonNative.value.indeterminate = this.defaultIndeterminate;
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onRadioButtonNativeReset", event);
    }
}
customElements.define("md-radio-button", MDRadioButtonComponent);
export { MDRadioButtonComponent };

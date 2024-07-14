import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * A custom checkbox component with ripple effect.
 * @element md-checkbox
 * @extends MDComponent
 * @fires MDCheckboxComponent#onCheckboxNativeInput - Fired when the checkbox input changes.
 * @fires MDCheckboxComponent#onCheckboxNativeReset - Fired when the checkbox is reset to its default state.
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properties for the MDCheckboxComponent.
     * @property {String} name - The name of the checkbox input.
     * @property {String} value - The value of the checkbox input.
     * @property {Boolean} indeterminate - Whether the checkbox is in an indeterminate state.
     * @property {Boolean} checked - Whether the checkbox is checked.
     * @property {Boolean} disabled - Whether the checkbox is disabled.
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
    };

    /**
     * Constructs an instance of MDCheckboxComponent.
     * Initializes the ripple effect for the checkbox.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-checkbox__native",
            containerSelector: ".md-checkbox__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }
    checkboxNative = createRef();

    /**
     * Renders the HTML template for the checkbox component.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-checkbox__native"
                aria-label="label"
                type="checkbox" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ${ref(this.checkboxNative)}
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            >
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `;
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");

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
     * Handles the input event of the checkbox.
     * Updates the component's properties based on the input's state.
     * @private
     * @param {Event} event - The input event.
     */
    handleCheckboxNativeInput(event) {
        this.value = this.checkboxNative.value.value;
        this.checked = this.checkboxNative.value.checked;
        this.indeterminate = this.checkboxNative.value.indeterminate;
        this.emit("onCheckboxNativeInput", event);
    }

    /**
     * Handles the reset event of the checkbox.
     * Resets the checkbox to its default state.
     * @private
     * @param {Event} event - The reset event.
     */
    handleCheckboxNativeReset(event) {
        this.checkboxNative.value.value = this.defaultValue;
        this.checkboxNative.value.checked = this.defaultChecked;
        this.checkboxNative.value.indeterminate = this.defaultIndeterminate;
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onCheckboxNativeReset", event);
    }
}
customElements.define("md-checkbox", MDCheckboxComponent);
export { MDCheckboxComponent };

import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDCheckboxComponent` is a custom web component representing a checkbox.
 * @extends MDComponent
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properties for MDCheckboxComponent.
     * @static
     * @type {object}
     * @property {String} name - The name attribute of the checkbox.
     * @property {Boolean} indeterminate - Indicates whether the checkbox is in an indeterminate state.
     * @property {Boolean} checked - Indicates whether the checkbox is checked.
     */
    static properties = {
        name: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    /**
     * Gets the native checkbox element.
     * @returns {HTMLInputElement} The native checkbox element.
     */
    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    /**
     * Gets the checkbox track element.
     * @returns {HTMLDivElement} The checkbox track element.
     */
    get checkboxTrack() {
        return this.querySelector(".md-checkbox__track");
    }

    /**
     * Gets the checkbox thumb element.
     * @returns {HTMLDivElement} The checkbox thumb element.
     */
    get checkboxThumb() {
        return this.querySelector(".md-checkbox__thumb");
    }

    /**
     * Constructs an instance of MDCheckboxComponent.
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

        this.classList.add("md-checkbox");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.checkboxNative,
            container: this.checkboxTrack,
            size: (40 / 14) * 100,
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
     * Renders the content of the MDCheckboxComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    /**
     * Handles the input event on the native checkbox.
     * @param {Event} event - The input event.
     * @fires MDCheckboxComponent#onCheckboxNativeInput
     */
    handleCheckboxNativeInput(event) {
        const checkboxNative = event.currentTarget;

        this.indeterminate = checkboxNative.indeterminate;
        this.checked = checkboxNative.checked;

        /**
         * Emitted when the native checkbox input event occurs.
         * @event MDCheckboxComponent#onCheckboxNativeInput
         * @type {object}
         * @property {Event} event - The original input event.
         * @property {HTMLInputElement} checkboxNative - The native checkbox element.
         */
        this.emit("onCheckboxNativeInput", { event, checkboxNative });
    }
}

/**
 * Define the custom element "md-checkbox" with MDCheckboxComponent.
 */
customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };

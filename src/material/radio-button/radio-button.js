import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom radio-button component extending MDComponent.
 * @fires MDRadioButtonComponent#onRadioButtonNativeInput - Indicates the native radio-button input event.
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * Properties for the MDRadioButtonComponent.
     * @property {string} name - The name of the radio-button.
     * @property {boolean} checked - Represents whether the radio-button is checked or not.
     * @property {boolean} indeterminate - Indicates if the radio-button is in an indeterminate state.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
            indeterminate: { type: Boolean },
        };
    }

    /**
     * Constructor for MDRadioButtonComponent.
     */
    constructor() {
        super();
    }

    /**
     * Retrieves the native radio-button element.
     * @returns {HTMLInputElement} The native radio-button element.
     */
    get native() {
        return this.querySelector('.md-radio-button__native');
    }

    /**
     * Retrieves the track element of the radio-button.
     * @returns {HTMLElement} The track element of the radio-button.
     */
    get track() {
        return this.querySelector('.md-radio-button__track');
    }

    /**
     * Retrieves the thumb element of the radio-button.
     * @returns {HTMLElement} The thumb element of the radio-button.
     */
    get thumb() {
        return this.querySelector('.md-radio-button__thumb');
    }

    /**
     * Renders the MDRadioButtonComponent.
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${this.name}"
                .checked="${this.checked}"
                .indeterminate="${this.indeterminate}"
                @input="${this.handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     * Initializes the radio-button component.
     * @returns {Promise<void>} A Promise that resolves when initialization is complete.
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-radio-button');
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Lifecycle method called when the element's first update happens.
     * Initializes the ripple effect for the radio-button.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        new MDRipple(this.track, {
            trigger: this.native,
            bounded: false,
            diameter: 40 / 16 * 100,
            centered: true,
            fadeout: true,
        });
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
    }

    /**
     * Handles the radio-button's native input event.
     * Emits an event when the native radio-button input occurs.
     * @param {Event} event - The input event.
     */
    handleRadioButtonNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit('onRadioButtonNativeInput', { event, input });
    }
}

/**
 * Define the custom element "md-radio-button".
 */
customElements.define('md-radio-button', MDRadioButtonComponent);

export { MDRadioButtonComponent };

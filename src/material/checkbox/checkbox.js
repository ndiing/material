import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom checkbox component extending MDComponent.
 * @fires MDCheckboxComponent#onCheckboxNativeInput - Indicates the native checkbox input event.
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properties for the MDCheckboxComponent.
     * @property {string} name - The name of the checkbox.
     * @property {boolean} checked - Represents whether the checkbox is checked or not.
     * @property {boolean} indeterminate - Indicates if the checkbox is in an indeterminate state.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
            indeterminate: { type: Boolean },
        };
    }

    /**
     * Constructor for MDCheckboxComponent.
     */
    constructor() {
        super();
    }

    /**
     * Retrieves the native checkbox element.
     * @returns {HTMLInputElement} The native checkbox element.
     */
    get native() {
        return this.querySelector('.md-checkbox__native');
    }

    /**
     * Retrieves the track element of the checkbox.
     * @returns {HTMLElement} The track element of the checkbox.
     */
    get track() {
        return this.querySelector('.md-checkbox__track');
    }

    /**
     * Retrieves the thumb element of the checkbox.
     * @returns {HTMLElement} The thumb element of the checkbox.
     */
    get thumb() {
        return this.querySelector('.md-checkbox__thumb');
    }

    /**
     * Renders the MDCheckboxComponent.
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${this.name}"
                .checked="${this.checked}"
                .indeterminate="${this.indeterminate}"
                @input="${this.handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     * Initializes the checkbox component.
     * @returns {Promise<void>} A Promise that resolves when initialization is complete.
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-checkbox');
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Lifecycle method called when the element's first update happens.
     * Initializes the ripple effect for the checkbox.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        new MDRipple(this.track, {
            trigger: this.native,
            bounded: false,
            diameter: 40 / 14 * 100,
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
     * Handles the checkbox's native input event.
     * Emits an event when the native checkbox input occurs.
     * @param {Event} event - The input event.
     */
    handleCheckboxNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit('onCheckboxNativeInput', { event, input });
    }
}

// Define the custom element "md-checkbox"
customElements.define('md-checkbox', MDCheckboxComponent);

export { MDCheckboxComponent };

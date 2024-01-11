import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDRadioButton.
 * @extends MDComponent
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * Properties for the MDRadioButtonComponent.
     * @returns {Object} Property configuration.
     * @property {String} name - The name attribute for the radio-button.
     * @property {Boolean} checked - A boolean indicating whether the radio-button is checked.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
        };
    }

    /**
     * Constructor for MDRadioButtonComponent.
     */
    constructor() {
        super();
    }

    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }
    get radioButtonTrack() {
        return this.querySelector(".md-radio-button__track");
    }
    get radioButtonThumb() {
        return this.querySelector(".md-radio-button__thumb");
    }

    /**
     * Renders the MDRadioButtonComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-radio-button");

        this.mdState = new MDState(this.radioButtonTrack, {
            trigger: this.radioButtonNative,
            bounded: false,
            size: (40 / 16) * 100,
            fadeout: true,
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");

        this.mdState.destroy();
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };

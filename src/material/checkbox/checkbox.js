import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDCheckbox.
 * @extends MDComponent
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properties for the MDCheckboxComponent.
     * @returns {Object} Property configuration.
     * @property {String} name - The name attribute for the checkbox.
     * @property {Boolean} indeterminate - A boolean indicating whether the checkbox is in an indeterminate state.
     * @property {Boolean} checked - A boolean indicating whether the checkbox is checked.
     */
    static get properties() {
        return {
            name: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
        };
    }

    /**
     * Constructor for MDCheckboxComponent.
     */
    constructor() {
        super();
    }

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }
    get checkboxTrack() {
        return this.querySelector(".md-checkbox__track");
    }
    get checkboxThumb() {
        return this.querySelector(".md-checkbox__thumb");
    }

    /**
     * Renders the MDCheckboxComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
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

        this.classList.add("md-checkbox");

        this.mdState = new MDState(this.checkboxTrack, {
            trigger: this.checkboxNative,
            bounded: false,
            size: (40 / 14) * 100,
            fadeout: true,
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");

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

    /**
     * Handles the 'input' event from the native checkbox.
     * Updates the component's state based on the native checkbox input.
     * @param {Event} event - The 'input' event.
     * @fires MDCheckboxComponent#onCheckboxNativeInput
     */
    handleCheckboxNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit("onCheckboxNativeInput", { event, input });
    }
}

customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };

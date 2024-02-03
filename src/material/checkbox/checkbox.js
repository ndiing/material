import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDCheckboxComponent represents a checkbox component.
 *
 * @extends MDComponent
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} name - The name of the checkbox.
     * @property {Boolean} indeterminate - Indicates whether the checkbox is in an indeterminate state.
     * @property {Boolean} checked - Indicates whether the checkbox is checked.
     */
    static properties={
        name:{type:String},
        indeterminate:{type:Boolean},
        checked:{type:Boolean},
    }

    /**
     * Constructor for MDCheckboxComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-checkbox");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            size: 40 / 14 * 100,
            containment: false,
            fadeout: true,
            button: this.querySelector('.md-checkbox__native'),
            container: this.querySelector('.md-checkbox__track')
        });
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the checkbox.
     *
     * @returns {TemplateResult} - The HTML template result.
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
     * Event handler for checkbox native input events.
     *
     * @param {Event} event - The input event.
     * @fires MDCheckboxComponent#onCheckboxNativeInput
     */
    handleCheckboxNativeInput(event) {
        const input = event.currentTarget;

        this.indeterminate = input.indeterminate;
        this.checked = input.checked;

        this.emit("onCheckboxNativeInput", { event });
    }
}

customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };

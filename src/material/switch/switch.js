import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Switch component that extends the MDComponent base class.
 * @element md-switch
 * @extends MDComponent
 * @fires MDSwitchComponent#onSwitchNativeInput - Fired when the switch input changes.
 * @fires MDSwitchComponent#onSwitchNativeReset - Fired when the switch is reset.
 */
class MDSwitchComponent extends MDComponent {
    /**
     * Defines the properties of the switch component.
     * @property {String} name - The name attribute of the switch input.
     * @property {String} value - The value attribute of the switch input.
     * @property {Boolean} indeterminate - The indeterminate state of the switch.
     * @property {Boolean} checked - The checked state of the switch.
     * @property {Boolean} disabled - The disabled state of the switch.
     * @property {Array} icons - Array of icons to display based on the checked state.
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        icons: { type: Array },
    };

    switchNative = createRef();

    /**
     * Initializes a new instance of the MDSwitchComponent.
     * Sets up the ripple controller.
     */
    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-switch__native",
            containerSelector: ".md-switch__thumb",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the switch component template.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-switch__native"
                aria-label="label"
                type="checkbox" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ${ref(this.switchNative)}
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            >
            <div class="md-switch__track"><div class="md-icon md-switch__thumb">${this.icons?.length ? this.icons[~~this.checked] : nothing}</div></div>
        `;
    }

    /**
     * Lifecycle method called when the component is added to the DOM.
     * Adds necessary classes to the switch element and sets default properties.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        if (this.defaultValue === undefined) {
            this.defaultValue = this.value || "on";
        }
        if (this.defaultChecked === undefined) {
            this.defaultChecked = !!this.checked;
        }
        if (this.defaultIndeterminate === undefined) {
            this.defaultIndeterminate = !!this.indeterminate;
        }

        this.classList.add("md-switch");
    }

    /**
     * Event handler for the switch input event.
     * Updates the component's properties and emits the onSwitchNativeInput event.
     * @param {Event} event - The input event.
     * @private
     */
    handleSwitchNativeInput(event) {
        this.value = this.switchNative.value.value;
        this.checked = this.switchNative.value.checked;
        this.indeterminate = this.switchNative.value.indeterminate;

        this.emit("onSwitchNativeInput", event);
    }

    /**
     * Event handler for the switch reset event.
     * Resets the component's properties and emits the onSwitchNativeReset event.
     * @param {Event} event - The reset event.
     * @private
     */
    handleSwitchNativeReset(event) {
        this.switchNative.value.value = this.defaultValue;
        this.switchNative.value.checked = this.defaultChecked;
        this.switchNative.value.indeterminate = this.defaultIndeterminate;

        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;

        this.emit("onSwitchNativeReset", event);
    }
}

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };

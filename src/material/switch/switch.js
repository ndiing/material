import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDSwitchComponent` is a custom web component representing a switch.
 * @extends MDComponent
 */
class MDSwitchComponent extends MDComponent {
    /**
     * Properties for MDSwitchComponent.
     * @static
     * @type {object}
     * @property {String} name - The name attribute of the switch.
     * @property {Boolean} checked - Indicates whether the switch is checked.
     */
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
    };

    /**
     * Gets the native switch element.
     * @returns {HTMLInputElement} The native switch element.
     */
    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    /**
     * Gets the switch track element.
     * @returns {HTMLDivElement} The switch track element.
     */
    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }

    /**
     * Gets the switch thumb element.
     * @returns {HTMLDivElement} The switch thumb element.
     */
    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    /**
     * Constructs an instance of MDSwitchComponent.
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

        this.classList.add("md-switch");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.switchNative,
            container: this.switchThumb,
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
     * Renders the content of the MDSwitchComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `;
    }

    /**
     * Handles the input event on the native switch.
     * @param {Event} event - The input event.
     * @fires MDSwitchComponent#onSwitchNativeInput
     */
    handleSwitchNativeInput(event) {
        const switchNative = event.currentTarget;

        this.checked = switchNative.checked;

        /**
         * Emitted when the native switch input event occurs.
         * @event MDSwitchComponent#onSwitchNativeInput
         * @type {object}
         * @property {Event} event - The original input event.
         * @property {HTMLInputElement} switchNative - The native switch element.
         */
        this.emit("onSwitchNativeInput", { event, switchNative });
    }
}

/**
 * Define the custom element "md-switch" with MDSwitchComponent.
 */
customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };

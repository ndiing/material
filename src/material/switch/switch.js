import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDSwitch.
 * @extends MDComponent
 */
class MDSwitchComponent extends MDComponent {
    /**
     * Properties for the MDSwitchComponent.
     * @returns {Object} Property configuration.
     * @property {String} name - The name attribute for the switch.
     * @property {Boolean} checked - A boolean indicating whether the switch is checked.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
        };
    }

    /**
     * Constructor for MDSwitchComponent.
     */
    constructor() {
        super();
    }

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }
    get switchTrack() {
        return this.querySelector(".md-switch__track");
    }
    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }

    /**
     * Renders the MDSwitchComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
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

        this.classList.add("md-switch");

        this.mdState = new MDState(this.switchThumb, {
            trigger: this.switchNative,
            bounded: false,
            fadeout: true,
            centered: true,
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");

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

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };

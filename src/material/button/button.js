import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom element representing a material design button.
 *
 * @extends LitElement
 */
class MdButtonComponent extends LitElement {
    /**
     * Properties for the MdButtonComponent.
     *
     * @property {String} type - The type of the button (e.g., "button", "submit", "reset").
     * @property {String} label - The label text for the button.
     * @property {String} icon - The icon content for the button.
     * @property {String} ui - The UI style for the button ("elevated", "filled", "filled-tonal", "outlined").
     * @property {Boolean} activated - Reflects whether the button is activated or not.
     */
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            icon: { type: String },
            ui: { type: String },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MdButtonComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Overrides the default render root to be the element itself.
     *
     * @returns {MdButtonComponent} The instance of MdButtonComponent.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Renders the HTML template for the MdButtonComponent.
     *
     * @returns {TemplateResult} The HTML template for the component.
     */
    render() {
        // prettier-ignore
        return html`
            <button class="md-button__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    /**
     * Adds "md-button" class to the element when connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * Removes "md-button" class when disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
    }

    /**
     * Gets the native button element inside the component.
     *
     * @property {HTMLElement} buttonNative - The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Initializes the MdStateController when the component is first updated.
     */
    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });

        // this.state.options.inverted = this.ui === "filled";
        // this.state.options.size = this.ui ? (40 / 40) * 100 : (40 / 24) * 100;
        // this.requestUpdate();
    }

    /**
     * Handles updates to the "ui" property and updates the component's class accordingly.
     *
     * @param {Map} _changedProperties - The properties that have changed.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("ui")) {
            ["elevated", "filled", "filled-tonal", "outlined"].forEach((ui) => {
                this.classList.remove("md-button--" + ui);
            });
            if (this.ui) {
                this.classList.add("md-button--" + this.ui);
            }
        }
    }
}

/**
 * Defines the "md-button" custom element.
 */
customElements.define("md-button", MdButtonComponent);

/**
 * Exports MdButtonComponent for external use.
 *
 * @exports {MdButtonComponent}
 */
export { MdButtonComponent };

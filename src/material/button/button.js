import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom button component that extends LitElement.
 * @element md-button
 *
 * @fires MdButtonComponent#custom-event - Fired when a custom event occurs.
 *
 * @cssproperty --md-button-color - Color of the button.
 * @cssproperty --md-button-background - Background color of the button.
 */
class MdButtonComponent extends LitElement {
    /**
     * Properties of the custom button component.
     * @override
     * @type {Object}
     * @property {String} type - The type of the button.
     * @property {String} label - The label text of the button.
     * @property {String} icon - The icon of the button.
     * @property {String} ui - The UI style of the button.
     * @property {Boolean} activated - Reflects whether the button is activated.
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
     * Default constructor for MdButtonComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Overrides the default render root to use the custom element itself.
     * @override
     * @returns {Element} - The render root of the component.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Renders the custom button component.
     * @override
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        /*prettier-ignore*/
        return html`
            <button class="md-button__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    /**
     * Adds the "md-button" class when the component is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * Removes the "md-button" class when the component is disconnected from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
    }

    /**
     * Returns the native button element inside the component.
     * @returns {HTMLButtonElement} - The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Initializes the state controller when the component is first updated.
     * @override
     */
    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });
    }

    /**
     * Handles updates to the "ui" property and adjusts the component's class accordingly.
     * @override
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
 * Custom event fired by MdButtonComponent.
 * @event MdButtonComponent#custom-event
 * @type {Object}
 * @property {String} detail - Details about the custom event.
 */

customElements.define("md-button", MdButtonComponent);

export { MdButtonComponent };

/**
 * Example usage of md-button element.
 *
 * @example
 * <md-button ui="elevated" label="Label"></md-button>
 * <md-button ui="filled" label="Label"></md-button>
 * <md-button ui="filled-tonal" label="Label"></md-button>
 * <md-button ui="outlined" label="Label"></md-button>
 * <md-button label="Label"></md-button>
 */

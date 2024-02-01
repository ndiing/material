import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * `MDButtonComponent` is a custom web component representing a button with optional icon and label.
 * @extends MDComponent
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properties for MDButtonComponent.
     * @static
     * @type {object}
     * @property {String} icon - The icon to be displayed in the button.
     * @property {String} label - The label text for the button.
     * @property {Boolean} activated - Indicates whether the button is activated or not.
     * @property {String} type - The type attribute of the button (e.g., "button", "submit").
     * @property {String} ui - The UI style for the button ("elevated", "filled", "filled-tonal", "outlined").
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        activated: { type: Boolean, reflect: true },
        type: { type: String },
        ui: { type: String },
    };

    /**
     * Gets the native button element.
     * @returns {HTMLElement} The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Constructs an instance of MDButtonComponent.
     */
    constructor() {
        super();

        // default
        this.type = "button";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-button--elevated");
            this.classList.remove("md-button--filled");
            this.classList.remove("md-button--filled-tonal");
            this.classList.remove("md-button--outlined");

            if (this.ui) {
                this.classList.add(`md-button--${this.ui}`);
            }
        }
    }

    /**
     * Renders the content of the MDButtonComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-button__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }
}

/**
 * Define the custom element "md-button" with MDButtonComponent.
 */
customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };

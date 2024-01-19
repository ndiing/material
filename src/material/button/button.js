import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom button component with Material Design styling.
 *
 * @element md-button
 *
 * @example
 * <md-button ui="elevated" icon="image" label="Label"></md-button>
 * <md-button ui="filled" icon="image" label="Label"></md-button>
 * <md-button ui="filled-tonal" icon="image" label="Label"></md-button>
 * <md-button ui="outlined" icon="image" label="Label"></md-button>
 * <md-button icon="image" label="Label"></md-button>
 */
class MdButtonComponent extends LitElement {
    /**
     * Properties of the `md-button` element.
     *
     * @property {String} type - The type of the button.
     * @property {String} label - The label text of the button.
     * @property {String} icon - The icon to be displayed in the button.
     * @property {String} ui - The UI style of the button (e.g., "elevated", "filled", "filled-tonal", "outlined").
     * @property {Boolean} activated - Indicates whether the button is activated or not.
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
     * Constructor for the `md-button` element.
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Overrides the default render root to use the element itself.
     *
     * @returns {this} The element itself as the render root.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Renders the button element with optional icon and label.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing} 
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    /**
     * Callback when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
    }

    /**
     * Returns the native button element inside the component.
     *
     * @returns {HTMLButtonElement} The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Callback when the element is first updated.
     */
    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });
    }

    /**
     * Callback when the element is updated.
     *
     * @param {Map} _changedProperties - Map of changed properties.
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

customElements.define("md-button", MdButtonComponent);

export { MdButtonComponent };

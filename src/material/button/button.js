import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom button component for Material Design.
 *
 * @element md-button
 *
 * @example
 * // Example usage of md-button in HTML:
 * <md-button ui="elevated" icon="image" label="Label"></md-button>
 * <md-button ui="filled" icon="image" label="Label"></md-button>
 * <md-button ui="filled-tonal" icon="image" label="Label"></md-button>
 * <md-button ui="outlined" icon="image" label="Label"></md-button>
 * <md-button icon="image" label="Label"></md-button>
 */
class MdButtonComponent extends LitElement {
    /**
     * Properties that can be set on the md-button component.
     *
     * @property {String} type - The type of the button (e.g., "button", "submit", "reset").
     * @property {String} label - The label text for the button.
     * @property {String} icon - The icon to be displayed on the button.
     * @property {String} ui - The UI style of the button ("elevated", "filled", "filled-tonal", "outlined").
     * @property {Boolean} activated - Indicates whether the button is in an activated state.
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
     * Returns the native button element within the md-button.
     *
     * @readonly
     * @returns {HTMLButtonElement} The native button element.
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    constructor() {
        super();
        this.type = "button";
    }

    createRenderRoot() {
        return this;
    }

    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing} 
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });
    }

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

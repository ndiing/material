import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
/**
 * Custom element representing a material design button.
 *
 * @element md-button
 *
 * @cssprop {String} --md-button-color - Color of the button.
 * @cssprop {String} --md-button-background - Background color of the button.
 *
 * @fires {CustomEvent} md-button-click - Dispatched when the button is clicked.
 *
 * @prop {String} type - The type of the button (e.g., "button", "submit").
 * @prop {String} label - The label text of the button.
 * @prop {String} icon - The icon content of the button.
 * @prop {String} ui - The UI style of the button ("elevated", "filled", "filled-tonal", "outlined").
 * @prop {Boolean} activated - Indicates whether the button is activated.
 */
class MdButtonComponent extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            icon: { type: String },
            ui: { type: String },
            activated: { type: Boolean, reflect: true },
        };
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

    get buttonNative() {
        return this.querySelector(".md-button__native");
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

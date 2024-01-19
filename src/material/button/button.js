import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

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

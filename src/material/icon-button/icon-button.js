import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdIconButtonComponent extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            icon: { type: String },
            ui: { type: String },
            toggle: { type: Boolean },
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
        /*prettier-ignore*/() {
                return html`
            <button class="md-icon-button__native"
                .type="${this.type}"
                @click="${this.onIconButtonClick}"
            ></button>
            ${this.icon ? html`<div class="md-icon-button__icon">${this.icon}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon-button");
    }

    get iconButtonNative() {
        return this.querySelector(".md-icon-button__native");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.iconButtonNative,
            containment: false,
            size: this.ui ? (40 / 40) * 100 : (40 / 24) * 100,
            fadeout: true,
        });
    }

    updated(_changedProperties) {
        if (_changedProperties.has("ui")) {
            ["filled", "filled-tonal", "outlined"].forEach((ui) => {
                this.classList.remove("md-icon-button--" + ui);
            });
            if (this.ui) {
                this.classList.add("md-icon-button--" + this.ui);
            }
        }
        if (_changedProperties.has("toggle")) {
            if (this.toggle) {
                this.classList.add("md-icon-button--toggle");
            } else {
                this.classList.remove("md-icon-button--toggle");
            }
        }
    }

    onIconButtonClick(event) {
        if (this.toggle) {
            this.activated = !this.activated;
        }

        this.dispatchEvent(
            new CustomEvent("onIconButtonClick", {
                bubbles: true,
                cancelable: true,
                detail: { event },
            })
        );
    }
}

customElements.define("md-icon-button", MdIconButtonComponent);

export { MdIconButtonComponent };

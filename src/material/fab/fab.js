import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdFabComponent extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            icon: { type: String },
            size: { type: String },
            extended: { type: Boolean },
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
        // prettier-ignore
        return html`
            <button class="md-fab__native"
                .type="${this.type}"
            ></button>
            ${this.icon?html`<div class="md-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
    }

    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.fabNative,
        });

        // this.state.options.inverted = this.ui === "filled";
        // this.state.options.size = this.ui ? (40 / 40) * 100 : (40 / 24) * 100;
        // this.requestUpdate();
    }

    updated(_changedProperties) {
        if (_changedProperties.has("size")) {
            ["small", "large"].forEach((size) => {
                this.classList.remove("md-fab--" + size);
            });
            if (this.size) {
                this.classList.add("md-fab--" + this.size);
            }
        }
        if (_changedProperties.has("extended")) {
            if (this.extended) {
                this.classList.add("md-fab--extended");
            } else {
                this.classList.remove("md-fab--extended");
            }
        }
    }
}

customElements.define("md-fab", MdFabComponent);

export { MdFabComponent };

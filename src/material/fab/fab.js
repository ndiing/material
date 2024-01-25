import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { MdComponent } from "../component/component";

class MdFabComponent extends MdComponent {
    static get properties() {
        return {
            type: { type: String },
            label: { type: String },
            icon: { type: String },
            size: { type: String },
            extended: { type: Boolean },
        };
    }

    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    constructor() {
        super();
        this.type = "button";
    }

    render() {
        /*prettier-ignore*/
        return html`
            <button class="md-fab__native"
                .type="${this.type}"
            ></button>
            ${this.icon?html`<div class="md-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-fab");
    }

    firstUpdated() {
        this.state = new MdStateController(this, {
            button: this.fabNative,
        });
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

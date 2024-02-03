import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDTextFieldComponent extends MDComponent {
    static properties = {
        icon: { type: String },
        label: { type: String },
    };

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-text-field");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-text-field__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };

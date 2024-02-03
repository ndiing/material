import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDTimePickerComponent extends MDComponent {
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

        this.classList.add("md-time-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-time-picker");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-time-picker__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-time-picker__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-time-picker", MDTimePickerComponent);

export { MDTimePickerComponent };

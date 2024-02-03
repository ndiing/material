import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDDatePickerComponent extends MDComponent {
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

        this.classList.add("md-date-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-date-picker");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-date-picker__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-date-picker__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-date-picker", MDDatePickerComponent);

export { MDDatePickerComponent };

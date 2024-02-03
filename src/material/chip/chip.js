import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDChipComponent extends MDComponent {
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

        this.classList.add("md-chip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-chip");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-chip__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-chip__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-chip", MDChipComponent);

export { MDChipComponent };

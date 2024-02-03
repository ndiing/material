import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDTabComponent extends MDComponent {
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

        this.classList.add("md-tab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tab");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-tab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-tab__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-tab", MDTabComponent);

export { MDTabComponent };

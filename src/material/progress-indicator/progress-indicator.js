import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDProgressIndicatorComponent extends MDComponent {
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

        this.classList.add("md-progress-indicator");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-progress-indicator");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-progress-indicator__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-progress-indicator__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-progress-indicator", MDProgressIndicatorComponent);

export { MDProgressIndicatorComponent };

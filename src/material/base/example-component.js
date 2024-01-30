import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDExampleComponent extends MDComponent {
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

        this.classList.add("md-example");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-example");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-example__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-example__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-example", MDExampleComponent);

export { MDExampleComponent };

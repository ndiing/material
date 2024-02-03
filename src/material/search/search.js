import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDSearchComponent extends MDComponent {
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

        this.classList.add("md-search");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-search");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-search__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-search__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-search", MDSearchComponent);

export { MDSearchComponent };

import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDSideSheetComponent extends MDComponent {
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

        this.classList.add("md-side-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-side-sheet");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-side-sheet__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-side-sheet__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };

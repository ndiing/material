import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDBottomSheetComponent extends MDComponent {
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

        this.classList.add("md-bottom-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-bottom-sheet");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-bottom-sheet__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-bottom-sheet__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };

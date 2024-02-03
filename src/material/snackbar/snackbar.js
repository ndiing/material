import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDSnackbarComponent extends MDComponent {
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

        this.classList.add("md-snackbar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-snackbar");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-snackbar__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-snackbar__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };

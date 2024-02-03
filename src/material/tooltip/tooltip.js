import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDTooltipComponent extends MDComponent {
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

        this.classList.add("md-tooltip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-tooltip__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-tooltip__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };

import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDSliderComponent extends MDComponent {
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

        this.classList.add("md-slider");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-slider");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-slider__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-slider__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-slider", MDSliderComponent);

export { MDSliderComponent };

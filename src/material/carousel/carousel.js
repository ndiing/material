import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDCarouselComponent extends MDComponent {
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

        this.classList.add("md-carousel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-carousel");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-carousel__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-carousel__label">${this.label}</div>`:nothing}
        `;
    }
}

customElements.define("md-carousel", MDCarouselComponent);

export { MDCarouselComponent };

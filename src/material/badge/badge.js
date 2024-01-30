import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDBadgeComponent extends MDComponent {
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };

    constructor() {
        super();

        // default
        // this.label = "Label";
        this.limit = 999;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-badge");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return this.label?html`<div class="md-badge__label">${this.label>this.limit?this.limit+'+':this.label}</div>`:nothing
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };

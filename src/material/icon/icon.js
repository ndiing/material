import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDIconComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };

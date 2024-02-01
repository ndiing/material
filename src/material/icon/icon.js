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

    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    updated(changedProperties) {
        // Implement logic if needed
    }

    render() {
        // Implement rendering logic using lit-html
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };

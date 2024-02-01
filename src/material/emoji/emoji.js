import { MDComponent } from "../base/component";

class MDEmojiComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-emoji");
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

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };

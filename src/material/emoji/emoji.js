import { html, nothing } from "lit";
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

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };

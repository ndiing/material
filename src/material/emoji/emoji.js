import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdEmojiComponent extends LitElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    // render() {
    //     // prettier-ignore
    //     return html`
    //     `
    // }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-emoji");
    }

    firstUpdated() {
    }

    updated(_changedProperties) {
    }
}

customElements.define("md-emoji", MdEmojiComponent);

export { MdEmojiComponent };

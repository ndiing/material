import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdIconComponent extends LitElement {
    static get properties() {
        return {};
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
    }

    firstUpdated() {}

    updated(_changedProperties) {}

    dispatchCustomEvent() {
        this.dispatchEvent(new CustomEvent("custom-event"));
    }
}

customElements.define("md-icon", MdIconComponent);

export { MdIconComponent };

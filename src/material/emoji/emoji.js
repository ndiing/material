import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { MdComponent } from "../component/component";

class MdEmojiComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-emoji");
    }
}

customElements.define("md-emoji", MdEmojiComponent);

export { MdEmojiComponent };

import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { MdComponent } from "../component/component";

class MdIconComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
    }
}

customElements.define("md-icon", MdIconComponent);

export { MdIconComponent };

import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdLayout extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");
    }
}

customElements.define("md-layout", MdLayout);

export { MdLayout };

import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardHeader extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-card__header");
    }
}

customElements.define("md-card-header", MdCardHeader);

export { MdCardHeader };

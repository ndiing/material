import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        
        this.classList.add("md-card__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-card__body");
    }
}

customElements.define("md-card-body", MdCardBody);

export { MdCardBody };

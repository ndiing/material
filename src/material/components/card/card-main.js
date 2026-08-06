import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        
        this.classList.add("md-card__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-card__main");
    }
}

customElements.define("md-card-main", MdCardMain);

export { MdCardMain };

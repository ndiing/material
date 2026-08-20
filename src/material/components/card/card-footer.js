import { html } from "lit";
import { MdElement } from "../../base/element.js";

/**
 * @class MdCardFooter
 * @extends MdElement
 */
class MdCardFooter extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__footer");
    }
}

customElements.define("md-card-footer", MdCardFooter);

export { MdCardFooter };

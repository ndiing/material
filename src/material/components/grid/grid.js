import { html } from "lit";
import { MdElement } from "../../base/element.js";


/**
 * @class MdGrid
 * @extends MdElement
 */
class MdGrid extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-grid");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-grid");
    }
}

customElements.define("md-grid", MdGrid);

export { MdGrid };

import { html } from "lit";
import { MdElement } from "../../base/element.js";


/**
 * @class MdSheetBody
 * @extends MdElement
 */
class MdSheetBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-sheet__body");
    }
}

customElements.define("md-sheet-body", MdSheetBody);

export { MdSheetBody };

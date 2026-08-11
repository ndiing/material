import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdSheetMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-sheet__main");
    }
}

customElements.define("md-sheet-main", MdSheetMain);

export { MdSheetMain };

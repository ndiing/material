import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogHeader extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog__header");
    }
}

customElements.define("md-dialog-header", MdDialogHeader);

export { MdDialogHeader };

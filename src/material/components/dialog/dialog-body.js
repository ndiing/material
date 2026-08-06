import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-dialog__body");
    }
}

customElements.define("md-dialog-body", MdDialogBody);

export { MdDialogBody };

import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__main");
    }
}

customElements.define("md-dialog-main", MdDialogMain);

export { MdDialogMain };

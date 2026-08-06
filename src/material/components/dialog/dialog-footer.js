import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogFooter extends MdElement {
    connectedCallback() {
        super.connectedCallback();
        
        this.classList.add("md-dialog__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-dialog__footer");
    }
}

customElements.define("md-dialog-footer", MdDialogFooter);

export { MdDialogFooter };

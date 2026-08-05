import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDataTableCell extends MdElement {
    static properties = {
        label: { type: String },
    };

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-data-table__label">${this.label}</div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__cell");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-data-table__cell");
    }
}

customElements.define("md-data-table-cell", MdDataTableCell);

export { MdDataTableCell };

import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";


/**
 * @class MdDataTableCell
 * @extends MdElement
 */
class MdDataTableCell extends MdElement {
    
    /**
     * @property {String} label - 
     */
    static properties = {
        label: { type: String },
    };

    constructor() {
        super();
    }

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

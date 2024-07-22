import { MDDataTableItemComponent } from "../data-table-item/data-table-item.js";

/**
 * {{desc}}
 * @extends MDDataTableItemComponent
 * @element md-data-table-row-cell
 */
class MDDataTableRowCellComponent extends MDDataTableItemComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__row-cell");
    }
}
customElements.define("md-data-table-row-cell", MDDataTableRowCellComponent);
export { MDDataTableRowCellComponent };

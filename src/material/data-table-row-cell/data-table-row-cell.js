import { MDDataTableItemComponent } from "../data-table-item/data-table-item.js";
class MDDataTableRowCellComponent extends MDDataTableItemComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__row-cell");
    }
}
customElements.define("md-data-table-row-cell", MDDataTableRowCellComponent);
export { MDDataTableRowCellComponent };

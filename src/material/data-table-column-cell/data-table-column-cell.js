import { MDDataTableItemComponent } from "../data-table-item/data-table-item.js";
import { MDGestureController } from "../material.js";

/**
 * {{desc}}
 * @extends MDDataTableItemComponent
 * @element md-data-table-column-cell
 */
class MDDataTableColumnCellComponent extends MDDataTableItemComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__column-cell");
        this.gesture = new MDGestureController(this, {
            container: this.parentElement,
            drag: ["x"],
            resize: ["e"],
        });
    }

    /**
     * {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("reorderable")) {
            if (this.reorderable) {
                this.gesture.options.drag = ["x"];
            } else {
                this.gesture.options.drag = [];
            }
        }
        if (changedProperties.has("resizable")) {
            if (this.resizable) {
                this.gesture.options.resize = ["e"];
            } else {
                this.gesture.options.resize = [];
            }
        }
    }
}
customElements.define("md-data-table-column-cell", MDDataTableColumnCellComponent);
export { MDDataTableColumnCellComponent };

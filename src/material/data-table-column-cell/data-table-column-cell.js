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
     * @property {String} tooltip - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {Boolean} leadingCheckbox - {{desc}}
     * @property {Boolean} leadingRadio - {{desc}}
     * @property {Boolean} leadingSwitch - {{desc}}
     * @property {String} leadingAvatar - {{desc}}
     * @property {String} leadingImage - {{desc}}
     * @property {String} leadingVideo - {{desc}}
     * @property {String} leadingIcon - {{desc}}
     * @property {String} leadingSupportingText - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} supportingText - {{desc}}
     * @property {String} trailingSupportingText - {{desc}}
     * @property {String} trailingIcon - {{desc}}
     * @property {String} trailingVideo - {{desc}}
     * @property {String} trailingImage - {{desc}}
     * @property {String} trailingAvatar - {{desc}}
     * @property {Boolean} trailingSwitch - {{desc}}
     * @property {Boolean} trailingRadio - {{desc}}
     * @property {Boolean} trailingCheckbox - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Number} badge - {{desc}}
     * @property {Boolean} activated - {{desc}}
     * @property {Boolean} indeterminate - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     */
    static properties = {
        ...MDDataTableItemComponent.properties,
    };

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
     * @param {Any} changedProperties - {{desc}}
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

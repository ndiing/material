import { MDDataTableItemComponent } from "../data-table-item/data-table-item.js";

/**
 * {{desc}}
 * @extends MDDataTableItemComponent
 * @element md-data-table-row-cell
 */
class MDDataTableRowCellComponent extends MDDataTableItemComponent {
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
        this.classList.add("md-data-table__row-cell");
    }
}
customElements.define("md-data-table-row-cell", MDDataTableRowCellComponent);
export { MDDataTableRowCellComponent };

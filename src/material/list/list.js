import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * List component for managing lists with selectable items.
 * @element md-list
 * @extends MDComponent
 * @fires MDListComponent#onListItemClick - Triggered when a list item is clicked.
 * @fires MDListComponent#handleListKeydown - Triggered on keydown events within the list.
 * @fires MDListComponent#onListItemSelectionStart - Triggered when selection starts on a list item.
 * @fires MDListComponent#onListItemSelection - Triggered during selection of a list item.
 * @fires MDListComponent#onListItemSelectionEnd - Triggered when selection ends on a list item.
 * @fires MDListComponent#onListItemCheckboxNativeInput - Triggered when a checkbox within a list item is interacted with.
 * @fires MDListComponent#onListItemRadioButtonNativeInput - Triggered when a radio button within a list item is interacted with.
 * @fires MDListComponent#onListItemSwitchNativeInput - Triggered when a switch within a list item is interacted with.
 */
class MDListComponent extends MDComponent {
    /**
     * Properties for MDListComponent.
     * @property {Array} list - List of items to display.
     * @property {Object} map - Mapping configuration for list items.
     * @property {Function} format - Function for formatting list item labels.
     * @property {Boolean} rangeSelection - Indicates if range selection mode is enabled.
     * @property {Boolean} multiSelection - Indicates if multi-selection mode is enabled.
     * @property {Boolean} singleSelection - Indicates if single-selection mode is enabled.
     * @property {Boolean} allSelection - Indicates if all-selection mode is enabled.
     */
    static properties = {
        list: { type: Array },
        map: { type: Object },
        format: { type: Function },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    /**
     * Initializes MDListComponent with default values.
     */
    constructor() {
        super();
        this.map = {
            label: "label",
            value: "value",
        };
    }

    /**
     * Renders the list of items.
     * @private
     * @returns {TemplateResult[]} Array of HTML templates for list items.
     */
    render() {
        /* prettier-ignore */
        return this.list?.map((item) => {
            item.component = item.component||"list-item";
            item.label=item[this.map.label]
            item.value=item[this.map.value]
            item.onListItemClick = this.handleListItemClick;
            item.onCheckboxNativeInput = this.handleListItemCheckboxNativeInput;
            item.onRadioButtonNativeInput = this.handleListItemRadioButtonNativeInput;
            item.onSwitchNativeInput = this.handleListItemSwitchNativeInput;
            return renderComponent(item);
        });
    }

    /**
     * Initializes component styles and class.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.on("keydown", this.handleListKeydown);
    }

    /**
     * Cleans up event listeners when component is disconnected.
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("keydown", this.handleListKeydown);
    }

    /**
     * Selects a specific item in the list.
     * @param {Object} data - The data object of the item to select.
     */
    select(data) {
        this.list.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.list.indexOf(data);
    }

    /**
     * Toggles the selection state of a specific item in the list.
     * @param {Object} data - The data object of the item to toggle.
     */
    selectToggle(data) {
        data.selected = !data.selected;
    }

    /**
     * Selects a range of items in the list.
     * @param {Object} data - The data object of the item to include in the selection range.
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.list.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;
        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }
        this.list.forEach((item, i) => {
            item.selected = i >= this.startIndex && i <= this.endIndex;
        });
        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     * Selects all items in the list.
     */
    selectAll() {
        this.list.forEach((item) => {
            item.selected = true;
        });
    }

    /**
     * Handles click events on list items.
     * @private
     * @param {MouseEvent} event - The click event.
     */
    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox," + ".md-list__radio-button," + ".md-list__switch")) {
            return;
        }
        const data = event.currentTarget.data;
        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection && event.ctrlKey) {
            this.selectToggle(data);
        } else if (this.singleSelection) {
            this.select(data);
        }
        this.requestUpdate();
        this.emit("onListItemClick", event);
    }

    /**
     * Handles keydown events within the list.
     * @private
     * @param {KeyboardEvent} event - The keydown event.
     */
    handleListKeydown(event) {
        const activeElement = document.activeElement === event.target.closest(".md-list__item");
        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();
            this.requestUpdate();
        }
        this.emit("onListKeydown", event);
    }

    /**
     * Handles native input events on list item checkboxes.
     * @private
     * @param {CustomEvent} event - The native input event.
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput", event);
    }

    /**
     * Handles native input events on list item radio buttons.
     * @private
     * @param {CustomEvent} event - The native input event.
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.select(data);
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput", event);
    }

    /**
     * Handles native input events on list item switches.
     * @private
     * @param {CustomEvent} event - The native input event.
     */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput", event);
    }
}
customElements.define("md-list", MDListComponent);
export { MDListComponent };

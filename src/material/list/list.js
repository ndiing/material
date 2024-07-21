import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-list
 * @fires MDListComponent#onListItemClick - {{desc}}
 * @fires MDListComponent#onListKeydown - {{desc}}
 * @fires MDListComponent#onListItemCheckboxNativeInput - {{desc}}
 * @fires MDListComponent#onListItemRadioButtonNativeInput - {{desc}}
 * @fires MDListComponent#onListItemSwitchNativeInput - {{desc}}
 */
class MDListComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} list - {{desc}}
     * @property {Object} map - {{desc}}
     * @property {Function} format - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
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
     * {{desc}}
     */
    constructor() {
        super();
        this.map = {
            label: "label",
            value: "value",
        };
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.on("keydown", this.handleListKeydown);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("keydown", this.handleListKeydown);
    }

    /**
     * {{desc}}
     */
    select(data) {
        this.list.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.list.indexOf(data);
    }

    /**
     * {{desc}}
     */
    selectToggle(data) {
        data.selected = !data.selected;
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    selectAll() {
        this.list.forEach((item) => {
            item.selected = true;
        });
    }

    /**
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput", event);
    }

    /**
     * {{desc}}
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.select(data);
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput", event);
    }

    /**
     * {{desc}}
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

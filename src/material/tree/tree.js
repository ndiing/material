import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderDivider, renderListItem } from "../template/template.js";
import { choose } from "lit/directives/choose.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-tree
 * @fires MDTreeComponent#onTreeItemClick - {{desc}}
 */
class MDTreeComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} items - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
     */
    static properties = {
        items: { type: Array },
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
        this.singleSelection = true;
    }

    /**
     * {{desc}}
     * @param {Any} item = {} - {{desc}}
     */
    renderListItem(item = {}) {
        item.leadingActions = [
            //
            ...((item.isNode && [{ icon: item.expanded ? "keyboard_arrow_down" : "keyboard_arrow_right" }]) || (item.indent > 0 && [{ component: "icon", icon: "" }]) || []),
            { component: "icon", icon: item.isNode ? "folder" : "draft" },
        ];
        item.onListItemClick = this.handleTreeItemClick.bind(this);
        // item.onCheckboxNativeInput = this.handleTreeItemCheckboxNativeInput.bind(this);
        // item.onRadioButtonNativeInput = this.handleTreeItemRadioButtonNativeInput.bind(this);
        // item.onSwitchNativeInput = this.handleTreeItemSwitchNativeInput.bind(this);
        /* prettier-ignore */
        return [
            renderListItem(item),
            item.expanded&&item.items?.map((item) => this.renderListItem(item))||nothing
        ]
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return this.items?.map((item) => this.renderListItem(item));
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
        // this.on("keydown", this.handleTreeKeydown);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        // this.off("keydown", this.handleTreeKeydown);
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete
            this.setItems(this.items);
            this.requestUpdate();
        }
    }
    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     * @param {Any} indent = 0 - {{desc}}
     */
    setItems(items, indent = 0) {
        let expanded;
        let activated;
        items.forEach((item, index, array) => {
            item.indent = indent;
            item.hasNode = indent === 0 && array.find((arr) => arr.items?.length);
            if (item.expanded || item.selected) {
                expanded = true;
            }
            if (item.selected) {
                activated = true;
            }
            item.isNode = !!item.items?.length;
            if (item.items?.length) {
                let { expanded: expanded_, activated: activated_ } = this.setItems(item.items, indent + 1);
                if (expanded_) {
                    expanded = expanded_;
                    item.expanded = expanded;
                }
                if (activated_) {
                    activated = activated_;
                    item.activated = activated;
                }
            }
        });
        return { expanded, activated };
    }

    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     * @param {Any} data - {{desc}}
     */
    select(items, data) {
        let activated;
        items.forEach((item) => {
            item.selected = item === data;
            item.activated = false;
            if (item.selected) {
                activated = true;
            }
            if (item.items?.length) {
                let activated_ = this.select(item.items, data);
                if (activated_) {
                    activated = activated_;
                    item.activated = activated;
                }
            }
        });
        return activated;
        // this.endIndex = items.indexOf(data);
    }
    //
    // selectToggle(data) {
    //     data.selected = !data.selected;
    // }

    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     * @param {Any} data - {{desc}}
     */
    expand(items, data) {
        data.expanded = !data.expanded;
    }
    //
    // selectRange(data) {
    //     this.endIndex = this.endIndex || 0;
    //     this.startIndex = this.items.indexOf(data);
    //     this.swapIndex = this.startIndex > this.endIndex;
    //     if (this.swapIndex) {
    //         [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
    //     }
    //     this.items.forEach((item, i) => {
    //         item.selected = i >= this.startIndex && i <= this.endIndex;
    //     });
    //     if (this.swapIndex) {
    //         [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
    //     }
    // }
    //
    // selectAll() {
    //     this.items.forEach((item) => {
    //         item.selected = true;
    //     });
    // }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleTreeItemClick(event) {
        if (
            /* prettier-ignore */
            event.target.closest(
                ".md-block__checkbox," + 
                ".md-block__radio-button," +
                ".md-block__switch",
            )
        ) {
            return;
        }
        const data = event.currentTarget.data;
        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection && event.ctrlKey) {
            this.selectToggle(data);
        } else if (this.singleSelection) {
            if (data.isNode) {
                this.expand(this.items, data);
            } else {
                this.select(this.items, data);
            }
        }
        this.requestUpdate();
        this.emit("onTreeItemClick", event);
    }
    //
    // handleTreeKeydown(event) {
    //     const activeElement = document.activeElement === event.target.closest(".md-tree__item");
    //     if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
    //         this.selectAll();
    //         this.requestUpdate();
    //     }
    //     this.emit("onTreeKeydown", event);
    // }
    //
    // handleTreeItemCheckboxNativeInput(event) {
    //     const data = event.currentTarget.data;
    //     this.selectToggle(data);
    //     this.requestUpdate();
    //     this.emit("onTreeItemCheckboxNativeInput", event);
    // }
    //
    // handleTreeItemRadioButtonNativeInput(event) {
    //     const data = event.currentTarget.data;
    //     this.select(data);
    //     this.requestUpdate();
    //     this.emit("onTreeItemRadioButtonNativeInput", event);
    // }
    //
    // handleTreeItemSwitchNativeInput(event) {
    //     const data = event.currentTarget.data;
    //     this.selectToggle(data);
    //     this.requestUpdate();
    //     this.emit("onTreeItemSwitchNativeInput", event);
    // }
}
customElements.define("md-tree", MDTreeComponent);
export { MDTreeComponent };

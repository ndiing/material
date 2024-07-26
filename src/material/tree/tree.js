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
            ...((item.isNode && [{ icon: item.expanded ? "keyboard_arrow_down" : "keyboard_arrow_right" }]) || (item.indent > 0 && [{ component: "icon", icon: "" }]) || []),
            { component: "icon", icon: item.isNode ? "folder" : "draft" },
        ];
        item.onListItemClick = this.handleTreeItemClick.bind(this);
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
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
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
    }

    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     * @param {Any} data - {{desc}}
     */
    expand(items, data) {
        data.expanded = !data.expanded;
    }
    

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
   
}
customElements.define("md-tree", MDTreeComponent);
export { MDTreeComponent };

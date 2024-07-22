import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

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
     * @property {String} variant - {{desc}}
     */
    static properties = {
        items: { type: Array },
        variant: { type: String },
    };
    variants = ["plain", "accordion", "tree", "level"];

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.variant = "tree";
    }

    /**
     * {{desc}}
     * @param {Any} item - {{desc}}
     */
    renderTree(item) {
        item.component = item.component || "tree-item";
        item.variant = this.variant;
        item.onTreeItemClick = this.handleTreeItemClick;
        item.onTreeItemSelected = this.handleTreeItemSelected;
        /* prettier-ignore */
        return html`
            ${renderComponent(item)}
            ${item.expanded && item.items?.length ? item.items.map((item) => this.renderTree(item)) : nothing}
        `;
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return (this.variant === 'level' ? this.getList(this.items) || this.items : this.items)?.map(item => this.renderTree(item));
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
     * @param {Any} changedProperties - {{desc}}
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tree--${variant}`, variants.includes(variant));
            });
        }
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.setList(this.items);
            this.requestUpdate();
        }
    }

    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     */
    getList(items) {
        let temp;
        items.forEach((item) => {
            if (item.expanded) {
                temp = item.items;
            }
            if (item.items?.length) {
                const temp2 = this.getList(item.items);
                if (temp2) {
                    temp = temp2;
                }
            }
        });
        return temp;
    }

    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     * @param {Any} indent = 0 - {{desc}}
     */
    setList(items, indent = 0) {
        let expanded;
        let activated;
        items.forEach((item) => {
            item.indent = indent;
            if (item.expanded || item.selected) {
                expanded = true;
            }
            if (item.selected) {
                activated = true;
            }
            if (item.items?.length) {
                if (this.variant === "level") {
                    item.items.unshift({
                        label: item.label,
                        parent: item,
                        isParent: true,
                    });
                }
                item.isNode = true;
                const { expanded: isExpanded, activated: isActivated } = this.setList(item.items, indent + 1);
                if (isExpanded) {
                    expanded = true;
                    item.expanded = true;
                }
                if (isActivated) {
                    activated = true;
                    item.activated = true;
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
                if (this.select(item.items, data)) {
                    activated = true;
                    item.activated = true;
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
        const data = event.currentTarget.data;
        if (data.isNode || data.isParent) {
            event.stopPropagation();
            this.expand(this.items, data.isParent ? data.parent : data);
        } else {
            this.select(this.items, data);
        }
        this.requestUpdate();
        this.emit("onTreeItemClick", event);
    }
    handleTreeItemSelected() {}
}
customElements.define("md-tree", MDTreeComponent);
export { MDTreeComponent };

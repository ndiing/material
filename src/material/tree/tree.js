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
     * @property {Array} list - {{desc}}
     * @property {String} variant - {{desc}}
     */
    static properties = {
        list: { type: Array },
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
     */
    renderTree(item) {
        item.component = item.component || "tree-item";
        item.variant = this.variant;
        item.onTreeItemClick = this.handleTreeItemClick;
        item.onTreeItemSelected = this.handleTreeItemSelected;
        /* prettier-ignore */
        return html`
            ${renderComponent(item)}
            ${item.expanded && item.children?.length ? item.children.map((item) => this.renderTree(item)) : nothing}
        `;
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return (this.variant === 'level' ? this.getList(this.list) || this.list : this.list)?.map(item => this.renderTree(item));
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
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tree--${variant}`, variants.includes(variant));
            });
        }
        if (changedProperties.has("list")) {
            await this.updateComplete;
            this.setList(this.list);
            this.requestUpdate();
        }
    }

    /**
     * {{desc}}
     */
    getList(list) {
        let children;
        list.forEach((item) => {
            if (item.expanded) {
                children = item.children;
            }
            if (item.children?.length) {
                const children_ = this.getList(item.children);
                if (children_) {
                    children = children_;
                }
            }
        });
        return children;
    }

    /**
     * {{desc}}
     */
    setList(list, indent = 0) {
        let expanded;
        let activated;
        list.forEach((item) => {
            item.indent = indent;
            if (item.expanded || item.selected) {
                expanded = true;
            }
            if (item.selected) {
                activated = true;
            }
            if (item.children?.length) {
                if (this.variant === "level") {
                    item.children.unshift({
                        label: item.label,
                        parent: item,
                        isParent: true,
                    });
                }
                item.isNode = true;
                const { expanded: isExpanded, activated: isActivated } = this.setList(item.children, indent + 1);
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
     */
    select(list, data) {
        let activated;
        list.forEach((item) => {
            item.selected = item === data;
            item.activated = false;
            if (item.selected) {
                activated = true;
            }
            if (item.children?.length) {
                if (this.select(item.children, data)) {
                    activated = true;
                    item.activated = true;
                }
            }
        });
        return activated;
    }

    /**
     * {{desc}}
     */
    expand(list, data) {
        data.expanded = !data.expanded;
    }

    /**
     * {{desc}}
     */
    handleTreeItemClick(event) {
        const data = event.currentTarget.data;
        if (data.isNode || data.isParent) {
            event.stopPropagation();
            this.expand(this.list, data.isParent ? data.parent : data);
        } else {
            this.select(this.list, data);
        }
        this.requestUpdate();
        this.emit("onTreeItemClick", event);
    }
    handleTreeItemSelected() {}
}
customElements.define("md-tree", MDTreeComponent);
export { MDTreeComponent };

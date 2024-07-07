import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-tree
 * @fires MDTreeComponent#onTreeItemClick - {{desc}}
 */
class MDTreeComponent extends MDComponent {
    
    /**
     * @property {Array} list - {{desc}}
     * @property {String} variant - {{desc}}
     */
    static properties = {
        list: { type: Array },
        variant: { type: String },
    };

    variants = ["plain", "accordion", "tree", "level"];

    constructor() {
        super();

        this.variant = "tree";
    }

    renderTreeItem(item) {
        /* prettier-ignore */
        return html`
            <md-tree-item
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .badge="${ifDefined(item.badge)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .indent="${ifDefined(item.indent)}"
                .isNode="${ifDefined(item.isNode)}"
                .expanded="${ifDefined(item.expanded)}"
                .activated="${ifDefined(item.activated)}"
                .variant="${ifDefined(this.variant)}"
                .isParent="${ifDefined(item.isParent)}"
                .nodeActions="${ifDefined(item.nodeActions)}"
                .nodeIcons="${ifDefined(item.nodeIcons)}"
                .leafIcons="${ifDefined(item.leafIcons)}"
                @click="${this.handleTreeItemClick}"
                @onTreeItemSelected="${this.handleTreeItemSelected}"
            ></md-tree-item>
            ${item.expanded && item.children?.length ? item.children.map(item => this.renderTreeItem(item)) : nothing}
        `;
    }

    render() {
        /* prettier-ignore */
        return (this.variant === 'level' ? this.getList(this.list) || this.list : this.list)?.map(item => this.renderTreeItem(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
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

        for (let i = 0; i < list.length; i++) {
            let item = list[i];

            if (item.expanded) {
                children = item.children;
            }

            if (item.children?.length) {
                const children_ = this.getList(item.children);

                if (children_) {
                    children = children_;
                }
            }
        }

        return children;
    }

    
    /**
     * {{desc}}
     */
    setList(list, indent = 0) {
        let expanded;
        let activated;

        for (let index = 0; index < list.length; index++) {
            let item = list[index];
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
        }

        return { expanded, activated };
    }

    
    /**
     * {{desc}}
     */
    select(list, data) {
        let activated;

        for (let i = 0; i < list.length; i++) {
            let item = list[i];
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
        }

        return activated;
    }

    
    /**
     * {{desc}}
     */
    expand(list, data) {
        data.expanded = !data.expanded;
    }

    handleTreeItemClick(event) {
        const data = event.currentTarget.data;

        if (data.isNode || data.isParent) {
            event.preventDefault();

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

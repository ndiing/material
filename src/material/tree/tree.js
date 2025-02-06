import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @fires MdTreeComponent#onTreeItemClick - {"detail":{"event":{}}}
 */
class MdTreeComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Array} [items2]
     */
    static properties = {
        items: { type: Array },
        items2: { type: Array },
    };

    /**
     */
    constructor() {
        super();
        this.items = [];
        this.items2 = [];
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderTreeItem(item) {
        // console.log(item)
        return html`
            <md-tree-row>
                <md-tree-item
                    .data="${item}"
                    .selected="${ifDefined(item.selected)}"
                    .expanded="${ifDefined(item.expanded)}"
                    .indent="${ifDefined(item.indent)}"
                    .actions="${ifDefined(item.actions)}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcons="${ifDefined(item.leafIcons)}"
                    .label="${ifDefined(item.label)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    @click="${this.handleTreeItemClick}"
                ></md-tree-item>
            </md-tree-row>
        `;
    }

    /**
     * @private
     */
    render() {
        return this.items2.filter((item) => item.visible).map((item) => this.renderTreeItem(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
    }

    /**
     * @private
     * @async
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.items2 = this.flatten(this.items).items2;
        }
    }

    /**
     * @param {Array} [items]
     * @param {String} [parent]
     * @param {Number} [indent=0]
     */
    flatten(items, parent, indent = 0) {
        let expanded;
        let items2 = [];
        items.forEach((item) => {
            item.parent = parent;
            item.indent = indent;
            if (indent === 0) item.visible = true;
            if (item.expanded || item.selected) expanded = true;
            items2.push(item);
            if (item.children?.length) {
                const result = this.flatten(item.children, item, indent + 1);
                if (result.expanded) {
                    expanded = result.expanded;
                    item.expanded = expanded;
                    this.toggle(item);
                }
                items2.push(...result.items2);
            }
        });
        return { expanded, items2 };
    }

    /**
     * @param {Object} [data]
     */
    toggle(data) {
        data.children.forEach((item) => {
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if (item.children?.length) this.toggle(item);
        });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleTreeItemClick(event) {
        const action = event.target.closest(".md-tree__action");
        const data = event.currentTarget.data;
        if (action && data.children?.length) {
            data.expanded = !data.expanded;
            this.toggle(data);
        }
        this.items2.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onTreeItemClick", { event });
    }
}
customElements.define("md-tree", MdTreeComponent);
export { MdTreeComponent };

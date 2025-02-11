import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MdComponent
 * @fires onTreeItemClick
 * @element md-tree
 */
class MdTreeComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Array} [flatItems]
     */
    static properties = {
        items: { type: Array },
        flatItems: { type: Array },
    };

    /**
     *
     */
    constructor() {
        super();
        this.items = [];
        this.flatItems = [];
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderTreeItem(item) {
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
     *
     * @private
     */
    render() {
        return this.flatItems.filter((item) => item.visible).map((item) => this.renderTreeItem(item));
    }

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
    }

    /**
     *
     * @private
     * @async
     * @param {Any} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.flatItems = this.flatten(this.items).flatItems;
        }
    }

    /**
     *
     * @param {Any} [items]
     * @param {Any} [parent]
     * @param {Any} [indent=0]
     */
    flatten(items, parent, indent = 0) {
        let expanded;
        let flatItems = [];
        items.forEach((item) => {
            item.parent = parent;
            item.indent = indent;
            if (indent === 0) item.visible = true;
            if (item.expanded || item.selected) expanded = true;
            flatItems.push(item);
            if (item.children?.length) {
                const result = this.flatten(item.children, item, indent + 1);
                if (result.expanded) {
                    expanded = result.expanded;
                    item.expanded = expanded;
                    this.toggle(item);
                }
                flatItems.push(...result.flatItems);
            }
        });
        return { expanded, flatItems };
    }

    /**
     *
     * @param {Any} [data]
     */
    toggle(data) {
        data.children.forEach((item) => {
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if (item.children?.length) this.toggle(item);
        });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTreeItemClick(event) {
        const action = event.target.closest(".md-tree__action");
        const data = event.currentTarget.data;
        if (action && data.children?.length) {
            data.expanded = !data.expanded;
            this.toggle(data);
        }
        this.flatItems.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onTreeItemClick", { event });
    }
}
customElements.define("md-tree", MdTreeComponent);
export { MdTreeComponent };

import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Tree component for displaying hierarchical data with expandable nodes and selection.
 * @element md-tree
 * @extends MDComponent
 * @fires MDTreeComponent#onTreeItemClick - Triggered when an item in the tree is clicked.
 */
class MDTreeComponent extends MDComponent {
    /**
     * Properties defining the structure and behavior of the tree component.
     * @property {Array} list - The hierarchical list of tree items.
     * @property {String} variant - The display variant of the tree component ('plain', 'accordion', 'tree', 'level').
     */
    static properties = {
        list: { type: Array },
        variant: { type: String },
    };

    variants = ["plain", "accordion", "tree", "level"];

    /**
     * Initializes MDTreeComponent with default variant 'tree'.
     */
    constructor() {
        super();
        this.variant = "tree";
    }

    /**
     * Renders a tree item based on its properties.
     * @private
     * @param {Object} item - The tree item data object.
     * @returns {TemplateResult} The rendered HTML template for the tree item.
     */
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

    /**
     * Renders the tree component based on the current variant and list.
     * @private
     * @returns {TemplateResult[]} Array of rendered HTML templates for tree items.
     */
    render() {
        /* prettier-ignore */
        return (this.variant === 'level' ? this.getList(this.list) || this.list : this.list)?.map(item => this.renderTreeItem(item));
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree");
    }

    /**
     * Handles updates to the component properties.
     * @private
     * @param {Map} changedProperties - Map of changed properties.
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
     * Retrieves a list of children for a given list item.
     * @private
     * @param {Array} list - The hierarchical list of tree items.
     * @returns {Array} The list of children items.
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
     * Recursively sets properties on tree items, such as indentation and state.
     * @private
     * @param {Array} list - The hierarchical list of tree items.
     * @param {Number} indent - The current indentation level.
     * @returns {Object} Object with `expanded` and `activated` flags.
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
     * Selects a tree item and updates its state.
     * @param {Array} list - The hierarchical list of tree items.
     * @param {Object} data - The data object representing the item to be selected.
     * @returns {Boolean} True if the item is activated.
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
     * Toggles the expansion state of a tree node.
     * @param {Array} list - The hierarchical list of tree items.
     * @param {Object} data - The data object representing the node to expand/collapse.
     */
    expand(list, data) {
        data.expanded = !data.expanded;
    }

    /**
     * Handles the click event on a tree item.
     * Expands or selects the item based on its properties.
     * @private
     * @param {Event} event - The click event object.
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

    /**
     * Placeholder method for handling tree item selection events.
     * To be implemented as needed.
     * @private
     */
    handleTreeItemSelected() {}
}
customElements.define("md-tree", MDTreeComponent);
export { MDTreeComponent };

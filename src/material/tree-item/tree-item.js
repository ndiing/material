import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { choose } from "lit/directives/choose.js";
import { isDefined } from "../functions/functions.js";

/**
 * Represents a tree item component in MD framework.
 * @extends MDComponent
 * @tagname md-tree-item
 * @fires MDTreeItemComponent#onTreeItemSelected - Event fired when the tree item is selected.
 */
class MDTreeItemComponent extends MDComponent {
    /**
     * @property {String} icon - Icon for the tree item.
     * @property {String} label - Label text for the tree item.
     * @property {Number} badge - Badge number for the tree item.
     * @property {Boolean} selected - Indicates if the tree item is selected.
     * @property {String} routerLink - Link associated with the tree item.
     * @property {Number} indent - Indentation level of the tree item.
     * @property {Boolean} isNode - Indicates if the item is a node in the tree.
     * @property {Boolean} expanded - Indicates if the node is expanded.
     * @property {Boolean} activated - Indicates if the node is activated.
     * @property {String} variant - Variant of the tree item (plain, accordion, tree, level).
     * @property {Boolean} isParent - Indicates if the node has children.
     * @property {Array} nodeActions - Actions available for the node.
     * @property {Array} nodeIcons - Icons associated with the node.
     * @property {Array} leafIcons - Icons associated with the leaf nodes.
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        badge: { type: Number },
        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        indent: { type: Number },
        isNode: { type: Boolean },
        expanded: { type: Boolean, reflect: true },
        activated: { type: Boolean, reflect: true },
        variant: { type: String },
        isParent: { type: Boolean },
        nodeActions: { type: Array },
        nodeIcons: { type: Array },
        leafIcons: { type: Array },
    };

    /**
     * Retrieves the node actions based on the variant and node actions property.
     * @returns {Array} Array of node actions icons.
     */
    get nodeActions_() {
        let icons = [];

        if (this.variant === "accordion") {
            icons = ["keyboard_arrow_down", "keyboard_arrow_up"];
        } else if (this.variant === "tree") {
            icons = ["keyboard_arrow_right", "keyboard_arrow_down"];
        } else if (this.variant === "level") {
            icons = ["arrow_forward", "arrow_back"];
        }

        if (this.nodeActions) {
            icons = this.nodeActions;
        }

        return icons;
    }

    /**
     * Retrieves the node icons based on the variant and node icons property.
     * @returns {Array} Array of node icons.
     */
    get nodeIcons_() {
        let icons = [];

        if (this.variant === "tree") {
            icons = ["folder", "folder_open"];
        }

        if (this.nodeIcons) {
            icons = this.nodeIcons;
        } else if (this.icon) {
            icons = [this.icon, this.icon];
        }

        return icons;
    }

    /**
     * Retrieves the leaf icons based on the variant and leaf icons property.
     * @returns {Array} Array of leaf icons.
     */
    get leafIcons_() {
        let icons = [];

        if (this.variant === "tree") {
            icons = ["draft", "draft"];
        }

        if (this.leafIcons) {
            icons = this.leafIcons;
        } else if (this.icon) {
            icons = [this.icon, this.icon];
        }

        return icons;
    }

    /**
     * Retrieves the current node action based on the expanded state.
     * @returns {String} Current node action icon.
     */
    get nodeAction() {
        return this.nodeActions_[~~this.expanded];
    }

    /**
     * Retrieves the current node icon based on the expanded state.
     * @returns {String} Current node icon.
     */
    get nodeicon() {
        return this.nodeIcons_[~~this.expanded];
    }

    /**
     * Retrieves the current leaf icon based on the selected state.
     * @returns {String} Current leaf icon.
     */
    get leafIcon() {
        return this.leafIcons_[~~this.selected];
    }

    /**
     * Retrieves the appropriate icon based on whether the item is a node or leaf.
     * @returns {String} Icon associated with the item.
     */
    get icon_() {
        return this.isNode ? this.nodeicon : this.leafIcon;
    }

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    renderPlain() {
        /* prettier-ignore */
        return html`
            ${this.icon_ ? html`<div class="md-icon md-tree__icon">${this.icon_}</div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : nothing}
        `;
    }

    renderAccordion() {
        /* prettier-ignore */
        return html`
            ${this.icon_ ? html`<div class="md-icon md-tree__icon">${this.icon_}</div>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : nothing}
        `;
    }

    renderTree() {
        /* prettier-ignore */
        return html`
            ${Array.from({ length: this.indent }, () => html`<div class="md-tree__indent"></div>`)}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.icon_ ? html`<div class="md-icon md-tree__icon">${this.icon_}</div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
        `;
    }

    renderLevel() {
        /* prettier-ignore */
        return html`
            ${this.isParent ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[1]}"></md-icon-button>` : this.icon_ ? html`<div class="md-icon md-tree__icon">${this.icon_}</div>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[0]}"></md-icon-button>` : nothing}
        `;
    }

    render() {
        /* prettier-ignore */
        return choose(this.variant, [
            ['accordion', () => this.renderAccordion()],
            ['tree', () => this.renderTree()],
            ['level', () => this.renderLevel()],
        ], () => this.renderPlain());
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree__item");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onTreeItemSelected", this);
            }
        }
    }
}

customElements.define("md-tree-item", MDTreeItemComponent);

export { MDTreeItemComponent };

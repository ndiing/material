import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { choose } from "lit/directives/choose.js";
import { isDefined } from "../functions/functions.js";

/**
 * Tree item component for displaying items within a tree structure.
 * @element md-tree-item
 * @extends MDComponent
 * @fires MDTreeItemComponent#onTreeItemSelected - Triggered when a tree item is selected.
 */
class MDTreeItemComponent extends MDComponent {
    /**
     * Properties defining the structure and behavior of the tree item component.
     * @property {String} icon - The icon name or URL for the tree item.
     * @property {String} label - The label or text content of the tree item.
     * @property {Number} badge - The badge number associated with the tree item.
     * @property {Boolean} selected - Indicates if the tree item is currently selected.
     * @property {String} routerLink - The URL or path to navigate when the tree item is clicked.
     * @property {Number} indent - The level of indentation for the tree item.
     * @property {Boolean} isNode - Indicates if the tree item is a node (expandable).
     * @property {Boolean} expanded - Indicates if the tree item is currently expanded.
     * @property {Boolean} activated - Indicates if the tree item is currently activated.
     * @property {String} variant - The display variant of the tree item ('plain', 'accordion', 'tree', 'level').
     * @property {Boolean} isParent - Indicates if the tree item is a parent node.
     * @property {Array} nodeActions - Actions/icons associated with the node.
     * @property {Array} nodeIcons - Icons associated with the node.
     * @property {Array} leafIcons - Icons associated with the leaf node.
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
     * Retrieves the node actions/icons based on the current variant.
     * @private
     * @returns {Array} Array of node action/icon names.
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
     * Retrieves the node icons based on the current variant.
     * @private
     * @returns {Array} Array of node icon names.
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
     * Retrieves the leaf icons based on the current variant.
     * @private
     * @returns {Array} Array of leaf icon names.
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
     * Retrieves the current node action/icon based on the expanded state.
     * @private
     * @returns {String} Current node action/icon name.
     */
    get nodeAction() {
        return this.nodeActions_[~~this.expanded];
    }

    /**
     * Retrieves the current node icon based on the expanded state.
     * @private
     * @returns {String} Current node icon name.
     */
    get nodeicon() {
        return this.nodeIcons_[~~this.expanded];
    }

    /**
     * Retrieves the current leaf icon based on the selected state.
     * @private
     * @returns {String} Current leaf icon name.
     */
    get leafIcon() {
        return this.leafIcons_[~~this.selected];
    }

    /**
     * Retrieves the current icon based on whether the item is a node or leaf.
     * @private
     * @returns {String} Current icon name.
     */
    get icon_() {
        return this.isNode ? this.nodeicon : this.leafIcon;
    }

    /**
     * Initializes MDTreeItemComponent and sets up ripple effect for interaction.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    /**
     * Renders the tree item in 'plain' variant.
     * @private
     * @returns {TemplateResult} Rendered HTML template for plain variant.
     */
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

    /**
     * Renders the tree item in 'accordion' variant.
     * @private
     * @returns {TemplateResult} Rendered HTML template for accordion variant.
     */
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

    /**
     * Renders the tree item in 'tree' variant.
     * @private
     * @returns {TemplateResult} Rendered HTML template for tree variant.
     */
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

    /**
     * Renders the tree item in 'level' variant.
     * @private
     * @returns {TemplateResult} Rendered HTML template for level variant.
     */
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

    /**
     * Renders the tree item based on its variant.
     * @private
     * @returns {TemplateResult} Rendered HTML template for the tree item.
     */
    render() {
        /* prettier-ignore */
        return choose(this.variant, [
            ['accordion', () => this.renderAccordion()],
            ['tree', () => this.renderTree()],
            ['level', () => this.renderLevel()],
        ], () => this.renderPlain());
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree__item");
    }

    /**
     * Handles updates to the component properties.
     * @private
     * @param {Map} changedProperties - Map of changed properties.
     */
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

import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { choose } from "lit/directives/choose.js";
import { isDefined } from "../functions/functions.js";

/**
 * {{description}}
 * @element md-tree-item
 * @extends MDComponent
 * @fires MDTreeItemComponent#onTreeItemSelected - {{description}}
 */
class MDTreeItemComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} icon - {{description}}
     * @property {String} label - {{description}}
     * @property {Number} badge - {{description}}
     * @property {Boolean} selected - {{description}}
     * @property {String} routerLink - {{description}}
     * @property {Number} indent - {{description}}
     * @property {Boolean} isNode - {{description}}
     * @property {Boolean} expanded - {{description}}
     * @property {Boolean} activated - {{description}}
     * @property {String} variant - {{description}}
     * @property {Boolean} isParent - {{description}}
     * @property {Array} nodeActions - {{description}}
     * @property {Array} nodeIcons - {{description}}
     * @property {Array} leafIcons - {{description}}
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
     * {{description}}
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
     * {{description}}
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
     * {{description}}
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
     * {{description}}
     */
    get nodeAction() {
        return this.nodeActions_[~~this.expanded];
    }

    /**
     * {{description}}
     */
    get nodeicon() {
        return this.nodeIcons_[~~this.expanded];
    }

    /**
     * {{description}}
     */
    get leafIcon() {
        return this.leafIcons_[~~this.selected];
    }

    /**
     * {{description}}
     */
    get icon_() {
        return this.isNode ? this.nodeicon : this.leafIcon;
    }

    /**
     * {{description}}
     */
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

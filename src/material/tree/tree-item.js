import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @fires MdTreeItemComponent#onTreeItemSelected - {"detail":{"treeItem":"this"}}
 */
class MdTreeItemComponent extends MdComponent {
    /**
     * @property {Boolean} [selected]
     * @property {Boolean} [expanded]
     * @property {String} [indent]
     * @property {Array} [actions]
     * @property {Array} [nodeIcons]
     * @property {Array} [leafIcons]
     * @property {String} [label]
     * @property {String} [routerLink]
     */
    static properties = {
        selected: { type: Boolean, reflect: true },
        expanded: { type: Boolean, reflect: true },
        indent: { type: String },
        actions: { type: Array },
        nodeIcons: { type: Array },
        leafIcons: { type: Array },
        label: { type: String },
        routerLink: { type: String, reflect: true },
    };

    /**
     */
    constructor() {
        super();
        this.ripple = new RippleController(this, {});
        this.actions = ["keyboard_arrow_right", "keyboard_arrow_down"];
        this.nodeIcons = ["folder", "folder_open"];
        this.leafIcons = ["draft", "draft"];
    }

    /**
     */
    get action() {
        if (!this.actions?.length) return;
        if (this.data.children?.length) return this.actions[~~this.expanded];
        else return [" ", ""][~~(this.indent === 0)];
    }

    /**
     */
    get icon() {
        if (!this.leafIcons?.length) return;
        if (this.data.children?.length) return this.nodeIcons[~~this.expanded];
        else return this.leafIcons[~~this.selected];
    }

    /**
     * @private
     */
    render() {
        return html` ${Array.from({ length: this.indent }, () => html`<div class="md-tree__indent"></div>`)} ${this.action ? html`<md-icon class="md-tree__action">${this.action}</md-icon>` : nothing} ${this.icon ? html`<md-icon class="md-tree__icon">${this.icon}</md-icon>` : nothing} ${this.label ? html`<div class="md-tree__label">${this.label}</div>` : nothing} `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree__item");
    }

    /**
     * @private
     * @async
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("selected") && this.selected) {
            this.emit("onTreeItemSelected", { treeItem: this });
        }
    }
}
customElements.define("md-tree-item", MdTreeItemComponent);
export { MdTreeItemComponent };

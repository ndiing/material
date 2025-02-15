import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-navigation-drawer
 * @fires MdNavigationDrawerComponent#onNavigationDrawerShow
 * @fires MdNavigationDrawerComponent#onNavigationDrawerClose
 * @fires MdNavigationDrawerComponent#onNavigationDrawerIconButtonClick
 * @fires MdNavigationDrawerComponent#onNavigationDrawerScrimClose
 */
class MdNavigationDrawerComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [items]
     * @property {Boolean} [open]
     * @property {Boolean} [modal]
     * @property {navigation-list|tree} [type]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        items: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
        type: { type: String },
    };

    types = ["navigation-list", "tree"];

    constructor() {
        super();
        this.type = "navigation-list";
    }

    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleNavigationDrawerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderComponent(item, component = "icon") {
        return choose(
            item.component || component,
            [
                ["icon", () => this.renderIcon(item)],
                ["icon-button", () => this.renderIconButton(item)],
            ],
            () => nothing,
        );
    }

    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-navigation-drawer__header">${this.icons?.length ? html` <div class="md-navigation-drawer__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-navigation-drawer__labels">${this.label ? html`<div class="md-navigation-drawer__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-navigation-drawer__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-navigation-drawer__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing}
            <div class="md-navigation-drawer__wrapper">
                <div class="md-navigation-drawer__body">${this.type === "navigation-list" ? html` <md-navigation-list .items="${this.items}"></md-navigation-list> ` : html` <md-tree .items="${this.items}"></md-tree> `}</div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        this.navigationDrawerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.navigationDrawerScrim, this.nextElementSibling);
        this.handleNavigationDrawerScrimClose = this.handleNavigationDrawerScrimClose.bind(this);
        this.navigationDrawerScrim.addEventListener("onScrimClose", this.handleNavigationDrawerScrimClose);
        if (this.modal && this.open) this.navigationDrawerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.navigationDrawerScrim.removeEventListener("onScrimClose", this.handleNavigationDrawerScrimClose);
        this.navigationDrawerScrim.remove();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-navigation-drawer--${region}`, region === this.region);
            });
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-drawer--modal`, !!this.modal);
        }
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        if (this.modal) this.navigationDrawerScrim.show();
        this.open = true;
        this.emit("onNavigationDrawerShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        if (this.navigationDrawerScrim.open) this.navigationDrawerScrim.close();
        this.emit("onNavigationDrawerClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleNavigationDrawerIconButtonClick(event) {
        this.emit("onNavigationDrawerIconButtonClick", { event });
    }

    handleNavigationDrawerScrimClose(event) {
        if (this.open) this.close();
        this.emit("onNavigationDrawerScrimClose", { event });
    }
}
customElements.define("md-navigation-drawer", MdNavigationDrawerComponent);
export { MdNavigationDrawerComponent };

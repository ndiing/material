import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 * @extends MdComponent
 * @element md-navigation-drawer
 */
class MDNavigationDrawerComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [items]
     * @property {Boolean} [open]
     * @property {Boolean} [modal]
     * @property {tree} [type]
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

    types = ["tree", "list"];

    constructor() {
        super();

        this.type = "list";
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @onIconButtonClick="${this.handleNavigationDrawerIconButtonClick}"
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

    renderTree(items) {
        /* prettier-ignore */
        return html`<md-tree .items="${items}"></md-tree>`;
    }

    renderList(items) {
        /* prettier-ignore */
        return html`<md-list .items="${items}"></md-list>`;
    }

    renderItems(type, items) {
        return choose(type, [["tree", () => this.renderTree(items)]], () => this.renderList(items));
    }

    render() {
        /* prettier-ignore */
        return html`
       
        ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` 
            <div class="md-navigation-drawer__header">
            
            ${this.icons?.length ? html` 
                <div class="md-navigation-drawer__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                ` : nothing}
                ${this.label || this.sublabel ? html` 
                <div class="md-navigation-drawer__labels">
                
                ${this.label ? html`
                    <div class="md-navigation-drawer__label">${this.label}</div>
                    ` : nothing}
                    ${this.sublabel ? html`
                    <div class="md-navigation-drawer__sublabel">${this.sublabel}</div>
                    ` : nothing}
                </div>
                ` : nothing}
                ${this.actions?.length ? html` 
                <div class="md-navigation-drawer__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div>
                ` : nothing}
            </div>
            ` : nothing}
            <div class="md-navigation-drawer__wrapper">
                <div class="md-navigation-drawer__body">${this.renderItems(this.type, this.items)}</div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
        this.style.setProperty("--md-comp-navigation-drawer-animation", "none");
        this.scrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
        this.handleNavigationDrawerScrimClose = this.handleNavigationDrawerScrimClose.bind(this);
        this.scrim.addEventListener("onScrimClose", this.handleNavigationDrawerScrimClose);

        if (this.modal) {
            this.scrim.open = this.open;
        }

        await this.updateComplete;

        this.style.setProperty("--md-comp-navigation-drawer-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-navigation-drawer-height", this.clientHeight + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.scrim.removeEventListener("onScrimClose", this.handleNavigationDrawerScrimClose);
        this.scrim.remove();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-drawer--modal`, !!this.modal);
        }
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-navigation-drawer-animation");

        if (this.modal) {
            this.scrim.show();
        }
        this.open = true;
        /**
         * @event onNavigationDrawerShow
         * @property {Object} event
         */
        this.emit("onNavigationDrawerShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-navigation-drawer-animation");

        if (this.scrim.open) {
            this.scrim.close();
        }
        this.open = false;
        /**
         * @event onNavigationDrawerClose
         * @property {Object} event
         */
        this.emit("onNavigationDrawerClose");
    }

    /**
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleNavigationDrawerIconButtonClick(event) {
        /**
         * @event onNavigationDrawerIconButtonClick
         * @property {Object} event
         */
        this.emit("onNavigationDrawerIconButtonClick", { event });
    }

    handleNavigationDrawerScrimClose(event) {
        if (this.open) {
            this.close();
        }
        /**
         * @event onNavigationDrawerScrimClose
         * @property {Object} event
         */
        this.emit("onNavigationDrawerScrimClose", { event });
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);

export { MDNavigationDrawerComponent };

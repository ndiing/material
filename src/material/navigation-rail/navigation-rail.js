import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 * @extends MdComponent
 * @element md-navigation-rail
 */
class MDNavigationRailComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [items]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        items: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        this.items = [];
        this.rippleOptions = { container: ".md-list__icon" };
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
                @onIconButtonClick="${this.handleNavigationRailIconButtonClick}"
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
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` 
                <div class="md-navigation-rail__header">
                    ${this.icons?.length ? html`
                        <div class="md-navigation-rail__icons">
                            ${this.icons.map((icon) => this.renderComponent(icon, "icon"))}
                        </div>
                    ` : nothing} 
                    ${this.label || this.sublabel ? html` 
                        <div class="md-navigation-rail__labels">
                            ${this.label ? html`<div class="md-navigation-rail__label">${this.label}</div>` : nothing} 
                            ${this.sublabel ? html`<div class="md-navigation-rail__sublabel">${this.sublabel}</div>` : nothing}
                        </div>
                    ` : nothing} 
                    ${this.actions?.length ? html`
                        <div class="md-navigation-rail__actions">
                            ${this.actions.map((action) => this.renderComponent(action, "icon-button"))}
                        </div>
                    ` : nothing}
                </div>
            ` : nothing}
            <div class="md-navigation-rail__wrapper">
                <div class="md-navigation-rail__body">
                    <md-list
                        .rippleOptions="${ifDefined(this.rippleOptions)}"
                        .items="${ifDefined(this.items)}"
                    ></md-list>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
        this.style.setProperty("--md-comp-navigation-rail-animation", "none");

        await this.updateComplete;

        this.style.setProperty("--md-comp-navigation-rail-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-navigation-rail-height", this.clientHeight + "px");
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-navigation-rail-animation");
        this.open = true;
        /**
         * @event onNavigationRailShow
         * @property {Object} event
         */
        this.emit("onNavigationRailShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-navigation-rail-animation");
        this.open = false;
        /**
         * @event onNavigationRailClose
         * @property {Object} event
         */
        this.emit("onNavigationRailClose");
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

    handleNavigationRailIconButtonClick(event) {
        /**
         * @event onNavigationRailIconButtonClick
         * @property {Object} event
         */
        this.emit("onNavigationRailIconButtonClick", { event });
    }
}

customElements.define("md-navigation-rail", MDNavigationRailComponent);

export { MDNavigationRailComponent };

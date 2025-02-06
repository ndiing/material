import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @fires MdNavigationRailComponent#onNavigationRailIconButtonClick - {"detail":{"event":{}}}
 */
class MdNavigationRailComponent extends MdComponent {
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

    /**
     */
    constructor() {
        super();
        this.items = [];
        this.rippleOptions = { container: ".md-navigation-list__icon" };
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @private
     * @param {String} [item]
     */
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
                @click="${this.handleNavigationRailIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @private
     * @param {String} [item]
     * @param {String} [component=icon]
     */
    renderItem(item, component = "icon") {
        return choose(
            item.component || component,
            [
                ["icon", () => this.renderIcon(item)],
                ["icon-button", () => this.renderIconButton(item)],
            ],
            () => nothing,
        );
    }

    /**
     * @private
     */
    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-navigation-rail__header">${this.icons?.length ? html` <div class="md-navigation-rail__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-navigation-rail__labels">${this.label ? html`<div class="md-navigation-rail__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-navigation-rail__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-navigation-rail__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing}
            <div class="md-navigation-rail__wrapper">
                <div class="md-navigation-rail__body">
                    <md-navigation-list
                        .rippleOptions="${this.rippleOptions}"
                        .items="${this.items}"
                    ></md-navigation-list>
                </div>
            </div>
        `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleNavigationRailIconButtonClick(event) {
        this.emit("onNavigationRailIconButtonClick", { event });
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onNavigationRailShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onNavigationRailClosed");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-navigation-rail", MdNavigationRailComponent);
export { MdNavigationRailComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @fires MdSideSheetComponent#onSideSheetIconButtonClick - {"detail":{"event":{}}}
 * @fires MdSideSheetComponent#onSideSheetButtonClick - {"detail":{"event":{}}}
 * @fires MdSideSheetComponent#onSideSheetScrimClosed - {"detail":{"event":{}}}
 */
class MdSideSheetComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {Boolean} [modal]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
    };

    /**
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
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
                @click="${this.handleSideSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleSideSheetButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-side-sheet__spacer"></div> `;
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
                ["button", () => this.renderButton(item)],
                ["spacer", () => this.renderSpacer(item)],
            ],
            () => nothing,
        );
    }

    /**
     * @private
     */
    render() {
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-side-sheet__header">${this.icons?.length ? html` <div class="md-side-sheet__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-side-sheet__labels">${this.label ? html`<div class="md-side-sheet__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-side-sheet__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-side-sheet__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-side-sheet__wrapper">${this.body?.length ? html`<div class="md-side-sheet__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-side-sheet__footer">${this.buttons?.length ? html` <div class="md-side-sheet__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.sideSheetScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.sideSheetScrim, this.nextElementSibling);
        this.handleSideSheetScrimClosed = this.handleSideSheetScrimClosed.bind(this);
        this.sideSheetScrim.addEventListener("onScrimClosed", this.handleSideSheetScrimClosed);
        if (this.modal && this.open) this.sideSheetScrim.show();
        this.classList.add("md-side-sheet");
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
        this.sideSheetScrim.removeEventListener("onScrimClosed", this.handleSideSheetScrimClosed);
        this.sideSheetScrim.remove();
        this.classList.remove("md-side-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-side-sheet--modal`, !!this.modal);
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSideSheetIconButtonClick(event) {
        this.emit("onSideSheetIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", { event });
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        if (this.modal) this.sideSheetScrim.show();
        this.open = true;
        this.emit("onSideSheetShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        if (this.sideSheetScrim.open) this.sideSheetScrim.close();
        this.emit("onSideSheetClosed");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSideSheetScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onSideSheetScrimClosed", { event });
    }
}
customElements.define("md-side-sheet", MdSideSheetComponent);
export { MdSideSheetComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-side-sheet
 * @fires MdSideSheetComponent#onSideSheetShow
 * @fires MdSideSheetComponent#onSideSheetClose
 * @fires MdSideSheetComponent#onSideSheetShown
 * @fires MdSideSheetComponent#onSideSheetClosed
 * @fires MdSideSheetComponent#onSideSheetScrimClose
 * @fires MdSideSheetComponent#onSideSheetIconButtonClick
 * @fires MdSideSheetComponent#onSideSheetButtonClick
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
     * @param {Any} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @param {Any} [item]
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
     * @param {Any} [item]
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
     * @param {Any} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-side-sheet__spacer"></div> `;
    }

    /**
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    /**
     */
    render() {
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-side-sheet__header">${this.icons?.length ? html` <div class="md-side-sheet__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-side-sheet__labels">${this.label ? html`<div class="md-side-sheet__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-side-sheet__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-side-sheet__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-side-sheet__wrapper">${this.body?.length ? html`<div class="md-side-sheet__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-side-sheet__footer">${this.buttons?.length ? html` <div class="md-side-sheet__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
        this.style.setProperty("--md-comp-side-sheet-animation", "none");
        this.sideSheetScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.sideSheetScrim, this.nextElementSibling);
        this.handleSideSheetScrimClose = this.handleSideSheetScrimClose.bind(this);
        this.sideSheetScrim.addEventListener("onScrimClose", this.handleSideSheetScrimClose);
        if (this.modal && this.open) this.sideSheetScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-side-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-side-sheet-height", this.clientHeight + "px");
    }

    /**
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.sideSheetScrim.removeEventListener("onScrimClose", this.handleSideSheetScrimClose);
        this.sideSheetScrim.remove();
    }

    /**
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-side-sheet--modal`, !!this.modal);
        }
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-side-sheet-animation");
        this.handleSideSheetShown = this.handleSideSheetShown.bind(this);
        this.addEventListener("animationend", this.handleSideSheetShown);
        this.open = true;
        if (this.modal) this.sideSheetScrim.show();
        this.emit("onSideSheetShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-side-sheet-animation");
        this.handleSideSheetClosed = this.handleSideSheetClosed.bind(this);
        this.addEventListener("animationend", this.handleSideSheetClosed);
        this.open = false;
        if (this.sideSheetScrim.open) this.sideSheetScrim.close();
        this.emit("onSideSheetClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @param {Any} [event]
     */
    handleSideSheetShown(event) {
        if (event.animationName === "side-sheet-modal-out" || event.animationName === "side-sheet-out") {
            this.removeEventListener("animationend", this.handleSideSheetShown);
            this.emit("onSideSheetShown");
        }
    }

    /**
     * @param {Any} [event]
     */
    handleSideSheetClosed(event) {
        if (event.animationName === "side-sheet-modal-in" || event.animationName === "side-sheet-in") {
            this.removeEventListener("animationend", this.handleSideSheetClosed);
            this.emit("onSideSheetClosed");
        }
    }

    /**
     * @param {Any} [event]
     */
    handleSideSheetScrimClose(event) {
        if (this.open) this.close();
        this.emit("onSideSheetScrimClose", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleSideSheetIconButtonClick(event) {
        this.emit("onSideSheetIconButtonClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", { event });
    }
}
customElements.define("md-side-sheet", MdSideSheetComponent);
export { MdSideSheetComponent };

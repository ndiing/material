import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-dialog
 * @fires MdDialogComponent#onDialogShow
 * @fires MdDialogComponent#onDialogClose
 * @fires MdDialogComponent#onDialogScrimClosed
 * @fires MdDialogComponent#onDialogShown
 * @fires MdDialogComponent#onDialogClosed
 * @fires MdDialogComponent#onDialogIconButtonClick
 * @fires MdDialogComponent#onDialogButtonClick
 * @element md-dialog
 */
class MdDialogComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    /**
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
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
                @click="${this.handleDialogIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
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
                @click="${this.handleDialogButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-dialog__spacer"></div> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     * @param {String} [component="icon"]
     */
    renderComponent(item, component = "icon") {
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
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-dialog__header">${this.icons?.length ? html` <div class="md-dialog__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-dialog__labels">${this.label ? html`<div class="md-dialog__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-dialog__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-dialog__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-dialog__wrapper">${this.body?.length ? html`<div class="md-dialog__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-dialog__footer">${this.buttons?.length ? html` <div class="md-dialog__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
        this.style.setProperty("--md-comp-dialog-animation", "none");
        this.dialogScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.dialogScrim, this.nextElementSibling);
        this.handleDialogScrimClosed = this.handleDialogScrimClosed.bind(this);
        this.dialogScrim.addEventListener("onScrimClosed", this.handleDialogScrimClosed);
        if (this.open) this.dialogScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-dialog-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-dialog-width", this.clientWidth + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.dialogScrim.removeEventListener("onScrimClosed", this.handleDialogScrimClosed);
        this.dialogScrim.remove();
    }

    /**
     */
    show() {
        this.handleDialogShown = this.handleDialogShown.bind(this);
        this.addEventListener("animationend", this.handleDialogShown);
        this.style.removeProperty("--md-comp-dialog-animation");
        this.dialogScrim.show();
        this.open = true;
        this.emit("onDialogShow");
    }

    /**
     */
    close() {
        this.handleDialogClosed = this.handleDialogClosed.bind(this);
        this.addEventListener("animationend", this.handleDialogClosed);
        this.style.removeProperty("--md-comp-dialog-animation");
        this.dialogScrim.close();
        this.open = false;
        this.emit("onDialogClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleDialogScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onDialogScrimClosed", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleDialogShown(event) {
        if (event.animationName === "dialog-body-out") {
            this.removeEventListener("animationend", this.handleDialogShown);
            this.emit("onDialogShown");
        }
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleDialogClosed(event) {
        if (event.animationName === "dialog-body-in") {
            this.removeEventListener("animationend", this.handleDialogClosed);
            this.emit("onDialogClosed");
        }
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleDialogIconButtonClick(event) {
        this.emit("onDialogIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", { event });
    }
}
customElements.define("md-dialog", MdDialogComponent);
export { MdDialogComponent };

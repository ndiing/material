import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 *
 * @extends MdComponent
 * @fires MdBottomSheetComponent#onBottomSheetShown
 * @fires MdBottomSheetComponent#onBottomSheetClosed
 * @fires MdBottomSheetComponent#onBottomSheetIconButtonClick
 * @fires MdBottomSheetComponent#onBottomSheetButtonClick
 * @fires MdBottomSheetComponent#onBottomSheetScrimClosed
 * @element md-bottom-sheet
 */
class MdBottomSheetComponent extends MdComponent {
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
     *
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     *
     * @private
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
                @click="${this.handleBottomSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     *
     * @private
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
                @click="${this.handleBottomSheetButtonClick}"
            ></md-button>
        `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-bottom-sheet__spacer"></div> `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     * @param {Any} [component="icon"]
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
     *
     * @private
     */
    render() {
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-bottom-sheet__header">${this.icons?.length ? html` <div class="md-bottom-sheet__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-bottom-sheet__labels">${this.label ? html`<div class="md-bottom-sheet__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-bottom-sheet__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-bottom-sheet__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-bottom-sheet__wrapper">${this.body?.length ? html`<div class="md-bottom-sheet__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-bottom-sheet__footer">${this.buttons?.length ? html` <div class="md-bottom-sheet__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     *
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        this.bottomSheetScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.bottomSheetScrim, this.nextElementSibling);
        this.handleBottomSheetScrimClosed = this.handleBottomSheetScrimClosed.bind(this);
        this.bottomSheetScrim.addEventListener("onScrimClosed", this.handleBottomSheetScrimClosed);
        if (this.modal && this.open) this.bottomSheetScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**
     *
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.bottomSheetScrim.removeEventListener("onScrimClosed", this.handleBottomSheetScrimClosed);
        this.bottomSheetScrim.remove();
    }

    /**
     *
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-bottom-sheet--modal`, !!this.modal);
        }
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        if (this.modal) this.bottomSheetScrim.show();
        this.open = true;
        this.emit("onBottomSheetShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        if (this.bottomSheetScrim.open) this.bottomSheetScrim.close();
        this.emit("onBottomSheetClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleBottomSheetIconButtonClick(event) {
        this.emit("onBottomSheetIconButtonClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleBottomSheetButtonClick(event) {
        this.emit("onBottomSheetButtonClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleBottomSheetScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onBottomSheetScrimClosed", { event });
    }
}
customElements.define("md-bottom-sheet", MdBottomSheetComponent);
export { MdBottomSheetComponent };

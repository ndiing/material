import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 * @extends MdComponent
 * @element md-sheet
 */
class MDSheetComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {north|east|south|west|center} [region]
     * @property {Boolean} [modal]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        region: { type: String },
        modal: { type: Boolean, reflect: true },
    };

    regions = ["north", "east", "south", "west", "center"];

    constructor() {
        super();
        this.body = Array.from(this.childNodes);
        this.region = "center";
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
                @onIconButtonClick="${this.handleSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

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
                @click="${this.handleSheetButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        return html` <div class="md-sheet__spacer"></div> `;
    }

    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    render() {
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-sheet__header">${this.icons?.length ? html` <div class="md-sheet__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-sheet__labels">${this.label ? html`<div class="md-sheet__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-sheet__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-sheet__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-sheet__wrapper">${this.body?.length ? html`<div class="md-sheet__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-sheet__footer">${this.buttons?.length ? html` <div class="md-sheet__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        this.sheetScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.sheetScrim, this.nextElementSibling);
        this.handleSheetScrimClose = this.handleSheetScrimClose.bind(this);
        this.sheetScrim.addEventListener("onScrimClose", this.handleSheetScrimClose);

        if (this.modal && this.open) this.sheetScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.sheetScrim.removeEventListener("onScrimClose", this.handleSheetScrimClose);
        this.sheetScrim.remove();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-sheet--${region}`, region === this.region);
            });
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-sheet--modal`, !!this.modal);
        }
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.handleSheetShown = this.handleSheetShown.bind(this);
        this.addEventListener("animationend", this.handleSheetShown);
        this.open = true;

        if (this.modal) this.sheetScrim.show();
        /**
         * @event onSheetShow
         * @property {Object} event
         */
        this.emit("onSheetShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.handleSheetClosed = this.handleSheetClosed.bind(this);
        this.addEventListener("animationend", this.handleSheetClosed);
        this.open = false;

        if (this.sheetScrim.open) this.sheetScrim.close();
        /**
         * @event onSheetClose
         * @property {Object} event
         */
        this.emit("onSheetClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleSheetShown(event) {
        this.removeEventListener("animationend", this.handleSheetShown);
        /**
         * @event onSheetShown
         * @property {Object} event
         */
        this.emit("onSheetShown");
    }

    handleSheetClosed(event) {
        this.removeEventListener("animationend", this.handleSheetClosed);
        /**
         * @event onSheetClosed
         * @property {Object} event
         */
        this.emit("onSheetClosed");
    }

    handleSheetScrimClose(event) {
        if (this.open) this.close();
        /**
         * @event onSheetScrimClose
         * @property {Object} event
         */
        this.emit("onSheetScrimClose", { event });
    }

    handleSheetIconButtonClick(event) {
        /**
         * @event onSheetIconButtonClick
         * @property {Object} event
         */
        this.emit("onSheetIconButtonClick", { event });
    }

    handleSheetButtonClick(event) {
        /**
         * @event onSheetButtonClick
         * @property {Object} event
         */
        this.emit("onSheetButtonClick", { event });
    }
}

customElements.define("md-sheet", MDSheetComponent);

export { MDSheetComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-bottom-sheet
 */
class MDBottomSheetComponent extends MdComponent {
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

    constructor() {
        super();

        this.body = Array.from(this.childNodes);
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
                @onIconButtonClick="${this.handleBottomSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        /* prettier-ignore */
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

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-bottom-sheet__spacer"></div> `;
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
        /* prettier-ignore */
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` 
            <div class="md-bottom-sheet__header">
                ${this.icons?.length ? html` 
                <div class="md-bottom-sheet__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                ` : nothing} ${this.label || this.sublabel ? html` 
                <div class="md-bottom-sheet__labels">
                    ${this.label ? html`
                    <div class="md-bottom-sheet__label">${this.label}</div>
                    ` : nothing} ${this.sublabel ? html`
                    <div class="md-bottom-sheet__sublabel">${this.sublabel}</div>
                    ` : nothing}
                </div>
                ` : nothing} ${this.actions?.length ? html` 
                <div class="md-bottom-sheet__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div>
                ` : nothing}
            </div>
            ` : nothing} ${this.body?.length || this.buttons?.length ? html` 
            <div class="md-bottom-sheet__wrapper">
                ${this.body?.length ? html`
                <div class="md-bottom-sheet__body">${this.body}</div>
                ` : nothing} ${this.buttons?.length ? html` 
                <div class="md-bottom-sheet__footer">
                    ${this.buttons?.length ? html` 
                    <div class="md-bottom-sheet__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                    ` : nothing}
                </div>
                ` : nothing}
            </div>
            ` : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-bottom-sheet");
        this.style.setProperty("--md-comp-bottom-sheet-animation", "none");

        this.handleBottomSheetAnimationend = this.handleBottomSheetAnimationend.bind(this);
        this.addEventListener("animationend", this.handleBottomSheetAnimationend);

        this.scrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleBottomSheetScrimClose = this.handleBottomSheetScrimClose.bind(this);
        this.scrim.addEventListener("onScrimClose", this.handleBottomSheetScrimClose);

        if (this.modal) this.scrim.open = this.open;

        await this.updateComplete;

        this.style.setProperty("--md-comp-bottom-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-bottom-sheet-height", this.clientHeight + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleBottomSheetAnimationend);

        this.scrim.removeEventListener("onScrimClose", this.handleBottomSheetScrimClose);
        this.scrim.remove();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-bottom-sheet--modal`, !!this.modal);
        }
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-bottom-sheet-animation");

        if (this.modal) this.scrim.show();
        this.open = true;

        /**
         * @event onBottomSheetShow
         * @property {Object} event
         */
        this.emit("onBottomSheetShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-bottom-sheet-animation");

        if (this.scrim.open) this.scrim.close();
        this.open = false;

        /**
         * @event onBottomSheetClose
         * @property {Object} event
         */
        this.emit("onBottomSheetClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleBottomSheetShown(event) {
        /**
         * @event onBottomSheetShown
         * @property {Object} event
         */
        this.emit("onBottomSheetShown");
    }

    handleBottomSheetClosed(event) {
        /**
         * @event onBottomSheetClosed
         * @property {Object} event
         */
        this.emit("onBottomSheetClosed");
    }

    handleBottomSheetAnimationend(event) {
        if (event.animationName === "bottom-sheet-out" || event.animationName === "bottom-sheet-modal-out") this.handleBottomSheetShown(event);
        else if (event.animationName === "bottom-sheet-in" || event.animationName === "bottom-sheet-modal-in") this.handleBottomSheetClosed(event);
    }

    handleBottomSheetScrimClose(event) {
        if (this.open) this.close();

        /**
         * @event onBottomSheetScrimClose
         * @property {Object} event
         */
        this.emit("onBottomSheetScrimClose", { event });
    }

    handleBottomSheetIconButtonClick(event) {
        /**
         * @event onBottomSheetIconButtonClick
         * @property {Object} event
         */
        this.emit("onBottomSheetIconButtonClick", { event });
    }

    handleBottomSheetButtonClick(event) {
        /**
         * @event onBottomSheetButtonClick
         * @property {Object} event
         */
        this.emit("onBottomSheetButtonClick", { event });
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };

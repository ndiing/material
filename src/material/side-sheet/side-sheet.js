import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 * @extends MdComponent
 * @element md-side-sheet
 */
class MDSideSheetComponent extends MdComponent {
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
                @onIconButtonClick="${this.handleSideSheetIconButtonClick}"
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
                @click="${this.handleSideSheetButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-side-sheet__spacer"></div> `;
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
            <div class="md-side-sheet__header">
                ${this.icons?.length ? html` 
                <div class="md-side-sheet__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                ` : nothing} ${this.label || this.sublabel ? html` 
                <div class="md-side-sheet__labels">
                    ${this.label ? html`
                    <div class="md-side-sheet__label">${this.label}</div>
                    ` : nothing} ${this.sublabel ? html`
                    <div class="md-side-sheet__sublabel">${this.sublabel}</div>
                    ` : nothing}
                </div>
                ` : nothing} ${this.actions?.length ? html` 
                <div class="md-side-sheet__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div>
                ` : nothing}
            </div>
            ` : nothing} ${this.body?.length || this.buttons?.length ? html` 
            <div class="md-side-sheet__wrapper">
                ${this.body?.length ? html`
                <div class="md-side-sheet__body">${this.body}</div>
                ` : nothing} ${this.buttons?.length ? html` 
                <div class="md-side-sheet__footer">
                    ${this.buttons?.length ? html` 
                    <div class="md-side-sheet__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                    ` : nothing}
                </div>
                ` : nothing}
            </div>
            ` : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-side-sheet");
        this.style.setProperty("--md-comp-side-sheet-animation", "none");
        this.handleSideSheetAnimationend = this.handleSideSheetAnimationend.bind(this);
        this.addEventListener("animationend", this.handleSideSheetAnimationend);
        this.scrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
        this.handleSideSheetClosed = this.handleSideSheetClosed.bind(this);
        this.scrim.addEventListener("onScrimClose", this.handleSideSheetClosed);

        if (this.modal) {
            this.scrim.open = this.open;
        }

        await this.updateComplete;

        this.style.setProperty("--md-comp-side-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-side-sheet-height", this.clientHeight + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleSideSheetAnimationend);
        this.scrim.removeEventListener("onScrimClose", this.handleSideSheetClosed);
        this.scrim.remove();
    }

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

        if (this.modal) {
            this.scrim.show();
        }
        this.open = true;
        /**
         * @event onSideSheetShow
         * @property {Object} event
         */
        this.emit("onSideSheetShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-side-sheet-animation");

        if (this.scrim.open) {
            this.scrim.close();
        }
        this.open = false;
        /**
         * @event onSideSheetClose
         * @property {Object} event
         */
        this.emit("onSideSheetClose");
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

    handleSideSheetShown(event) {
        /**
         * @event onSideSheetShown
         * @property {Object} event
         */
        this.emit("onSideSheetShown");
    }

    handleSideSheetClosed(event) {
        /**
         * @event onSideSheetClosed
         * @property {Object} event
         */
        this.emit("onSideSheetClosed");
    }

    handleSideSheetAnimationend(event) {
        if (event.animationName === "side-sheet-out" || event.animationName === "side-sheet-modal-out") {
            this.handleSideSheetShown(event);
        } else if (event.animationName === "side-sheet-in" || event.animationName === "side-sheet-modal-in") {
            this.handleSideSheetClosed(event);
        }
    }

    handleSideSheetScrimClose(event) {
        if (this.open) {
            this.close();
        }
        /**
         * @event onSideSheetScrimClose
         * @property {Object} event
         */
        this.emit("onSideSheetScrimClose", { event });
    }

    handleSideSheetIconButtonClick(event) {
        /**
         * @event onSideSheetIconButtonClick
         * @property {Object} event
         */
        this.emit("onSideSheetIconButtonClick", { event });
    }

    handleSideSheetButtonClick(event) {
        /**
         * @event onSideSheetButtonClick
         * @property {Object} event
         */
        this.emit("onSideSheetButtonClick", { event });
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };

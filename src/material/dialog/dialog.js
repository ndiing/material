import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 * @extends MdComponent
 * @element md-dialog
 */
class MDDialogComponent extends MdComponent {
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
                @onIconButtonClick="${this.handleDialogIconButtonClick}"
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
                @click="${this.handleDialogButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-dialog__spacer"></div> `;
    }

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

    render() {
        /* prettier-ignore */
        return html` 
        ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` 
            <div class="md-dialog__header">
                
                ${this.icons?.length ? html` 
                <div class="md-dialog__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                ` : nothing} 
                ${this.label || this.sublabel ? html` 
                <div class="md-dialog__labels">
                    
                    ${this.label ? html`
                    <div class="md-dialog__label">${this.label}</div>
                    ` : nothing} 
                    ${this.sublabel ? html`
                    <div class="md-dialog__sublabel">${this.sublabel}</div>
                    ` : nothing}
                </div>
                ` : nothing} 
                ${this.actions?.length ? html` 
                <div class="md-dialog__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div>
                ` : nothing}
            </div>
            ` : nothing} 
            ${this.body?.length || this.buttons?.length ? html` 
            <div class="md-dialog__wrapper">
                
                ${this.body?.length ? html`
                <div class="md-dialog__body">${this.body}</div>
                ` : nothing} 
                ${this.buttons?.length ? html` 
                <div class="md-dialog__footer">
                    
                    ${this.buttons?.length ? html` 
                    <div class="md-dialog__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                    ` : nothing}
                </div>
                ` : nothing}
            </div>
            ` : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
        this.style.setProperty("--md-comp-dialog-animation", "none");

        this.handleDialogAnimationend = this.handleDialogAnimationend.bind(this);
        this.addEventListener("animationend", this.handleDialogAnimationend);

        this.scrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleDialogScrimClose = this.handleDialogScrimClose.bind(this);
        this.scrim.addEventListener("onScrimClose", this.handleDialogScrimClose);
        
        this.scrim.open = this.open;

        await this.updateComplete;

        this.style.setProperty("--md-comp-dialog-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-dialog-width", this.clientWidth + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleDialogAnimationend);
        this.scrim.removeEventListener("onScrimClose", this.handleDialogScrimClose);
        this.scrim.remove();
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-dialog-animation");
        this.scrim.show();
        this.open = true;
        /**
         * @event onDialogShow
         * @property {Object} event
         */
        this.emit("onDialogShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-dialog-animation");

        if (this.scrim.open) {
            this.scrim.close();
        }
        this.open = false;
        /**
         * @event onDialogClose
         * @property {Object} event
         */
        this.emit("onDialogClose");
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

    handleDialogShown(event) {
        /**
         * @event onDialogShown
         * @property {Object} event
         */
        this.emit("onDialogShown");
    }

    handleDialogClosed(event) {
        /**
         * @event onDialogClosed
         * @property {Object} event
         */
        this.emit("onDialogClosed");
    }

    handleDialogAnimationend(event) {
        if (event.animationName === "dialog-in" || event.animationName === "dialog-modal-in") {
            this.handleDialogClosed(event);
        } else if (event.animationName === "dialog-out" || event.animationName === "dialog-modal-out") {
            this.handleDialogShown(event);
        }
    }

    handleDialogScrimClose(event) {
        this.close();
        /**
         * @event onDialogScrimClose
         * @property {Object} event
         */
        this.emit("onDialogScrimClose", { event });
    }

    handleDialogIconButtonClick(event) {
        /**
         * @event onDialogIconButtonClick
         * @property {Object} event
         */
        this.emit("onDialogIconButtonClick", { event });
    }

    handleDialogButtonClick(event) {
        /**
         * @event onDialogButtonClick
         * @property {Object} event
         */
        this.emit("onDialogButtonClick", { event });
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };

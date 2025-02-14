import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { setPosition } from "../popper/popper";

/**
 * @extends MdComponent
 * @element md-tooltip
 * @fires MdTooltipComponent#onTooltipShown
 * @fires MdTooltipComponent#onTooltipClosed
 * @fires MdTooltipComponent#onTooltipIconButtonClick
 * @fires MdTooltipComponent#onTooltipButtonClick
 */
class MdTooltipComponent extends MdComponent {
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
                @click="${this.handleTooltipIconButtonClick}"
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
                @click="${this.handleTooltipButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-tooltip__spacer"></div> `;
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
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-tooltip__header">${this.icons?.length ? html` <div class="md-tooltip__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-tooltip__labels">${this.label ? html`<div class="md-tooltip__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-tooltip__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-tooltip__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-tooltip__wrapper">${this.body?.length ? html`<div class="md-tooltip__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-tooltip__footer">${this.buttons?.length ? html` <div class="md-tooltip__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    /**
     * @param {Undefined} [options]
     */
    show(options) {
        options = {
            container: this,
            placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"],
            offset: 8,
            ...options,
        };
        this.open = true;
        setPosition(options);
        this.emit("onTooltipShown");
    }

    /**
     */
    close() {
        this.open = false;
        this.emit("onTooltipClosed");
    }

    /**
     * @param {Undefined} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTooltipIconButtonClick(event) {
        this.emit("onTooltipIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTooltipButtonClick(event) {
        this.emit("onTooltipButtonClick", { event });
    }
}
customElements.define("md-tooltip", MdTooltipComponent);
export { MdTooltipComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { setPosition } from "../popper/popper";

/**
 * @extends MdComponent
 * @element md-tooltip
 */
class MDTooltipComponent extends MdComponent {
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
                @onIconButtonClick="${this.handleTooltipIconButtonClick}"
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
                @click="${this.handleTooltipButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        return html` <div class="md-tooltip__spacer"></div> `;
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
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-tooltip__header">${this.icons?.length ? html` <div class="md-tooltip__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-tooltip__labels">${this.label ? html`<div class="md-tooltip__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-tooltip__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-tooltip__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-tooltip__wrapper">${this.body?.length ? html`<div class="md-tooltip__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-tooltip__footer">${this.buttons?.length ? html` <div class="md-tooltip__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    /**
     * @param {Any} [options]
     */
    show(options) {
        setPosition({
            container: this,
            placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"],
            offset: 8,
            ...options,
        });
        this.open = true;

        /**
         * @event onTooltipShow
         * @property {Object} event
         */
        this.emit("onTooltipShow");
    }

    /**
     */
    close() {
        this.open = false;

        /**
         * @event onTooltipClose
         * @property {Object} event
         */
        this.emit("onTooltipClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    handleTooltipIconButtonClick(event) {
        /**
         * @event onTooltipIconButtonClick
         * @property {Object} event
         */
        this.emit("onTooltipIconButtonClick", { event });
    }

    handleTooltipButtonClick(event) {
        /**
         * @event onTooltipButtonClick
         * @property {Object} event
         */
        this.emit("onTooltipButtonClick", { event });
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };

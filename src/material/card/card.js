import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @fires MdCardComponent#onCardIconButtonClick - {"detail":{"event":{}}}
 * @fires MdCardComponent#onCardButtonClick - {"detail":{"event":{}}}
 */
class MdCardComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
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
                @click="${this.handleCardIconButtonClick}"
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
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-card__spacer"></div> `;
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
        return html` ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` <div class="md-card__header">${this.icons?.length ? html` <div class="md-card__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div> ` : nothing} ${this.label || this.sublabel ? html` <div class="md-card__labels">${this.label ? html`<div class="md-card__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-card__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.actions?.length ? html` <div class="md-card__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}</div> ` : nothing} ${this.body?.length || this.buttons?.length ? html` <div class="md-card__wrapper">${this.body?.length ? html`<div class="md-card__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-card__footer">${this.buttons?.length ? html` <div class="md-card__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", { event });
    }
}
customElements.define("md-card", MdCardComponent);
export { MdCardComponent };

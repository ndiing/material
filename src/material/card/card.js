import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-card
 */
class MDCardComponent extends MdComponent {
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
                @onIconButtonClick="${this.handleCardIconButtonClick}"
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
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-card__spacer"></div> `;
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
        return html` 
        ${this.icons?.length || this.label || this.sublabel || this.actions?.length ? html` 
            <div class="md-card__header">
                
                ${this.icons?.length ? html` 
                <div class="md-card__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                ` : nothing} 
                ${this.label || this.sublabel ? html` 
                <div class="md-card__labels">
                    
                    ${this.label ? html` 
                    <div class="md-card__label">${this.label}</div>
                    ` : nothing} 
                    ${this.sublabel ? html` 
                    <div class="md-card__sublabel">${this.sublabel}</div>
                    ` : nothing}
                </div>
                ` : nothing} 
                ${this.actions?.length ? html` 
                <div class="md-card__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div>
                ` : nothing}
            </div>
            ` : nothing} 
            ${this.body?.length || this.buttons?.length ? html` 
            <div class="md-card__wrapper">
                
                ${this.body?.length ? html` 
                <div class="md-card__body">${this.body}</div>
                ` : nothing} 
                ${this.buttons?.length ? html` 
                <div class="md-card__footer">
                    
                    ${this.buttons?.length ? html` 
                    <div class="md-card__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                    ` : nothing}
                </div>
                ` : nothing}
            </div>
            ` : nothing} `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
    }

    handleCardIconButtonClick(event) {
        /**
         * @event onCardIconButtonClick
         * @property {Object} event
         */
        this.emit("onCardIconButtonClick", { event });
    }

    handleCardButtonClick(event) {
        /**
         * @event onCardButtonClick
         * @property {Object} event
         */
        this.emit("onCardButtonClick", { event });
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };

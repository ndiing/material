import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @fires MdChipComponent#onChipActionClick - {"detail":{"event":{}}}
 */
class MdChipComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {String} [avatar]
     * @property {String} [label]
     * @property {String} [action]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     */
    static properties = {
        icon: { type: String },
        avatar: { type: String },
        label: { type: String },
        action: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    /**
     */
    constructor() {
        super();
        this.ripple = new RippleController(this, {});
    }

    /**
     * @private
     */
    render() {
        return html`
            ${this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : nothing}
            ${this.avatar
                ? html`<md-image
                      class="md-chip__avatar"
                      .circular="${true}"
                      .src="${this.avatar}"
                  ></md-image>`
                : nothing}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : nothing}
            ${this.action
                ? html`<md-icon-button
                      class="md-chip__action"
                      .icon="${this.action}"
                      .rippleOptions="${{ radius: 24 }}"
                      @click="${this.handleChipActionClick}"
                  ></md-icon-button>`
                : nothing}
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleChipActionClick(event) {
        this.emit("onChipActionClick", { event });
    }
}
customElements.define("md-chip", MdChipComponent);
export { MdChipComponent };

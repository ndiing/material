import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @element md-tab
 */
class MDTabComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [routerLink]
     * @property {Object} [rippleOptions]
     * @property {Number} [badge]
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        rippleOptions: { type: Object },
        badge: { type: Number },
    };

    constructor() {
        super();
        this.rippleOptions = {};
    }

    render() {
        return html`
            ${this.icon ? html`<md-icon class="md-tab__icon">${this.icon}</md-icon>` : nothing} ${this.label || this.sublabel ? html` <div class="md-tab__labels">${this.label ? html`<div class="md-tab__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-tab__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.text ? html`<div class="md-tab__text">${this.text}</div>` : nothing}
            ${this.badge !== undefined
                ? html`<md-badge
                      class="md-tab__badge"
                      .label="${this.badge}"
                  ></md-badge>`
                : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab");
        await this.updateComplete;

        this.ripple = new Ripple(this, this.rippleOptions);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.ripple) this.ripple.destroy();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("icon")) {
            this.classList.toggle("md-tab--with-icon", !!this.icon);
        }

        if (changedProperties.has("selected") && this.selected) {
            /**
             * @event onTabSelected
             * @property {HTMLElement} currentTarget
             */
            this.emit("onTabSelected", { currentTarget: this });
        }
    }
}

customElements.define("md-tab", MDTabComponent);

export { MDTabComponent };

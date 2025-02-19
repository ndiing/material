import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";
/**
 * @extends MdComponent
 * @element md-navigation-list-item
 */
class MDNavigationListItemComponent extends MdComponent {
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
            ${this.icon ? html`<md-icon class="md-navigation-list__icon">${this.icon}</md-icon>` : nothing} ${this.label || this.sublabel ? html` <div class="md-navigation-list__labels">${this.label ? html`<div class="md-navigation-list__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-navigation-list__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.text ? html`<div class="md-navigation-list__text">${this.text}</div>` : nothing}
            ${this.badge !== undefined
                ? html`<md-badge
                      class="md-navigation-list__badge"
                      .label="${this.badge}"
                  ></md-badge>`
                : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list__item");
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
            this.classList.toggle("md-navigation-list__item--with-icon", !!this.icon);
        }

        if (changedProperties.has("selected") && this.selected) {
            this.emit("onNavigationListItemSelected", {
                currentTarget: this,
            });
        }
    }
}

customElements.define("md-navigation-list-item", MDNavigationListItemComponent);

export { MDNavigationListItemComponent };

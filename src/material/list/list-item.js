import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @fires MdListItemComponent#onListItemSelected - {"detail":{"listItem":"this"}}
 */
class MdListItemComponent extends MdComponent {
    /**
     * @property {Boolean} [leadingCheckbox]
     * @property {Boolean} [leadingRadioButton]
     * @property {Boolean} [leadingSwitch]
     * @property {String} [avatar]
     * @property {String} [image]
     * @property {String} [video]
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {String} [text]
     * @property {Boolean} [trailingCheckbox]
     * @property {Boolean} [trailingRadioButton]
     * @property {Boolean} [trailingSwitch]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [routerLink]
     * @property {Object} [rippleOptions]
     * @property {Number} [badge]
     */
    static properties = {
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        avatar: { type: String },
        image: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        text: { type: String },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        rippleOptions: { type: Object },
        badge: { type: Number },
    };

    /**
     */
    constructor() {
        super();
        this.rippleOptions = {};
    }

    /**
     * @private
     */
    render() {
        return html`
            ${this.leadingCheckbox
                ? html`<md-checkbox
                      class="md-list__checkbox"
                      .checked="${this.selected}"
                  ></md-checkbox>`
                : nothing}
            ${this.leadingRadioButton
                ? html`<md-radio-button
                      class="md-list__radio-button"
                      .checked="${this.selected}"
                  ></md-radio-button>`
                : nothing}
            ${this.leadingSwitch
                ? html`<md-switch
                      class="md-list__switch"
                      .checked="${this.selected}"
                  ></md-switch>`
                : nothing}
            ${this.avatar
                ? html`<md-image
                      class="md-list__avatar"
                      .src="${ifDefined(this.avatar)}"
                      circular
                  ></md-image>`
                : nothing}
            ${this.image
                ? html`<md-image
                      class="md-list__image"
                      .src="${ifDefined(this.image)}"
                  ></md-image>`
                : nothing}
            ${this.video
                ? html`<md-image
                      class="md-list__video"
                      .src="${ifDefined(this.video)}"
                      ratio="3/2"
                  ></md-image>`
                : nothing}
            ${this.icon ? html`<md-icon class="md-list__icon">${this.icon}</md-icon>` : nothing} ${this.label || this.sublabel ? html` <div class="md-list__labels">${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-list__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.text ? html`<div class="md-list__text">${this.text}</div>` : nothing}
            ${this.trailingCheckbox
                ? html`<md-checkbox
                      class="md-list__checkbox"
                      .checked="${this.selected}"
                  ></md-checkbox>`
                : nothing}
            ${this.trailingRadioButton
                ? html`<md-radio-button
                      class="md-list__radio-button"
                      .checked="${this.selected}"
                  ></md-radio-button>`
                : nothing}
            ${this.trailingSwitch
                ? html`<md-switch
                      class="md-list__switch"
                      .checked="${this.selected}"
                  ></md-switch>`
                : nothing}
            ${this.badge !== undefined
                ? html`<md-badge
                      class="md-list__badge"
                      .label="${this.badge}"
                  ></md-badge>`
                : nothing}
        `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
        await this.updateComplete;
        if (this.sublabel) {
            const sublabel = this.querySelector(".md-list__sublabel");
            if (sublabel.scrollHeight > sublabel.clientHeight) {
                this.classList.add("md-list__item--three-line");
            } else {
                this.classList.add("md-list__item--two-line");
            }
        }
        this.ripple = new RippleController(this, this.rippleOptions);
    }

    /**
     * @private
     * @async
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("icon")) {
            this.classList.toggle("md-list__item--with-icon", !!this.icon);
        }
        if (changedProperties.has("selected") && this.selected) {
            this.emit("onListItemSelected", { listItem: this });
        }
    }
}
customElements.define("md-list-item", MdListItemComponent);
export { MdListItemComponent };

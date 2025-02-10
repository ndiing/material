import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
/**
 * @class MdDataTableCellComponent
 * @extends MdComponent
//  * @fires onDataTableCellActionClick
 */
class MdDataTableCellComponent extends MdComponent {
    /**
     * @property {Boolean} checkbox
     * @property {Boolean} leadingRadioButton
     * @property {Boolean} leadingSwitch
     * @property {String} avatar
     * @property {String} image
     * @property {String} video
     * @property {String} icon
     * @property {String} label
     * @property {String} sublabel
     * @property {String} text
     * @property {String} action
     * @property {Boolean} trailingCheckbox
     * @property {Boolean} trailingRadioButton
     * @property {Boolean} trailingSwitch
     * @property {Boolean} indeterminate
     * @property {Boolean} checked
     * @property {Number} badge
     */
    static properties = {
        checkbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        avatar: { type: String },
        image: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        text: { type: String },
        action: { type: String },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        badge: { type: Number },
    };

    /**
     */
    constructor() {
        super();
        this.rippleOptions = {};
    }

    /**
     */
    render() {
        return html`
            ${this.checkbox
                ? html`<md-checkbox
                      class="md-data-table__checkbox"
                      .indeterminate="${this.indeterminate}"
                      .checked="${this.checked}"
                  ></md-checkbox>`
                : nothing}
            ${this.leadingRadioButton
                ? html`<md-radio-button
                      class="md-data-table__radio-button"
                      .checked="${this.selected}"
                  ></md-radio-button>`
                : nothing}
            ${this.leadingSwitch
                ? html`<md-switch
                      class="md-data-table__switch"
                      .checked="${this.selected}"
                  ></md-switch>`
                : nothing}
            ${this.avatar
                ? html`<md-image
                      class="md-data-table__avatar"
                      .src="${ifDefined(this.avatar)}"
                      circular
                  ></md-image>`
                : nothing}
            ${this.image
                ? html`<md-image
                      class="md-data-table__image"
                      .src="${ifDefined(this.image)}"
                  ></md-image>`
                : nothing}
            ${this.video
                ? html`<md-image
                      class="md-data-table__video"
                      .src="${ifDefined(this.video)}"
                      ratio="3/2"
                  ></md-image>`
                : nothing}
            ${this.icon ? html`<md-icon class="md-data-table__icon">${this.icon}</md-icon>` : nothing} ${this.label || this.sublabel ? html` <div class="md-data-table__labels">${this.label ? html`<div class="md-data-table__label">${this.label}</div>` : nothing} ${this.sublabel ? html`<div class="md-data-table__sublabel">${this.sublabel}</div>` : nothing}</div> ` : nothing} ${this.text ? html`<div class="md-data-table__text">${this.text}</div>` : nothing}
            ${this.action
                ? html`
                      <md-icon-button
                          class="md-data-table__action"
                          .icon="${this.action}"
                          @click="${this.handleDataTableCellActionClick}"
                      ></md-icon-button>
                  `
                : nothing}
            ${this.trailingCheckbox
                ? html`<md-checkbox
                      class="md-data-table__checkbox"
                      .checked="${this.selected}"
                  ></md-checkbox>`
                : nothing}
            ${this.trailingRadioButton
                ? html`<md-radio-button
                      class="md-data-table__radio-button"
                      .checked="${this.selected}"
                  ></md-radio-button>`
                : nothing}
            ${this.trailingSwitch
                ? html`<md-switch
                      class="md-data-table__switch"
                      .checked="${this.selected}"
                  ></md-switch>`
                : nothing}
            ${this.badge !== undefined
                ? html`<md-badge
                      class="md-data-table__badge"
                      .label="${this.badge}"
                  ></md-badge>`
                : nothing}
        `;
    }

    /**
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__cell");
        await this.updateComplete;
        if (this.sublabel) {
            const sublabel = this.querySelector(".md-data-table__sublabel");
            if (sublabel.scrollHeight > sublabel.clientHeight) {
                this.classList.add("md-data-table__cell--three-line");
            } else {
                this.classList.add("md-data-table__cell--two-line");
            }
        }
    }

    /**
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("icon")) {
            this.classList.toggle("md-data-table__cell--with-icon", !!this.icon);
        }
    }

    handleDataTableCellActionClick(event) {
        this.emit("onDataTableCellActionClick", { event });
    }
}
customElements.define("md-data-table-cell", MdDataTableCellComponent);
export { MdDataTableCellComponent };

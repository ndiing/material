import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { isDefined } from "../functions/functions.js";

/**
 * {{description}}
 * @element md-data-table-item
 * @extends MDComponent
 */
class MDDataTableItemComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} avatar - {{description}}
     * @property {String} thumbnail - {{description}}
     * @property {String} video - {{description}}
     * @property {String} icon - {{description}}
     * @property {String} label - {{description}}
     * @property {String} subLabel - {{description}}
     * @property {Number} badge - {{description}}
     * @property {String} text - {{description}}
     * @property {Boolean} leadingCheckbox - {{description}}
     * @property {Boolean} leadingRadioButton - {{description}}
     * @property {Boolean} leadingSwitch - {{description}}
     * @property {Boolean} trailingCheckbox - {{description}}
     * @property {Boolean} trailingRadioButton - {{description}}
     * @property {Boolean} trailingSwitch - {{description}}
     * @property {Boolean} selected - {{description}}
     * @property {Boolean} indeterminate - {{description}}
     * @property {String} routerLink - {{description}}
     * @property {Boolean} sortable - {{description}}
     * @property {String} sortableIcon - {{description}}
     */
    static properties = {
        avatar: { type: String },
        thumbnail: { type: String },
        video: { type: String },
        icon: { type: String },
        label: { type: String },
        subLabel: { type: String },
        badge: { type: Number },
        text: { type: String },
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        indeterminate: { type: Boolean },
        routerLink: { type: String, reflect: true },
        sortable: { type: Boolean },
        sortableIcon: { type: String },
    };

    /**
     * {{description}}
     */
    constructor() {
        super();
    }

    /**
     * @private
     */
    renderCheckbox() {
        /* prettier-ignore */
        return html`<md-checkbox 
            class="md-data-table__checkbox"
            .checked="${this.selected}"
            .indeterminate="${this.indeterminate}"
        ></md-checkbox>`
    }

    /**
     * @private
     */
    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-data-table__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`
    }

    /**
     * @private
     */
    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-data-table__switch"
            .checked="${this.selected}"
        ></md-switch>`
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingCheckbox?this.renderCheckbox():nothing}
            ${this.leadingRadioButton?this.renderRadioButton():nothing}
            ${this.leadingSwitch?this.renderSwitch():nothing}
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-data-table__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-table__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>`:nothing}
            ${this.icon?html`<div class="md-icon md-data-table__icon">${this.icon}</div>`:nothing}
            
            ${isDefined(this.label)||this.subLabel||this.badge?html`
                <div class="md-data-table__inner">
                    ${isDefined(this.label)||this.subLabel?html`
                        <div class="md-data-table__label">
                            ${isDefined(this.label)?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.sortable?html`<div class="md-icon md-data-table__sortable">${this.sortableIcon}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}
            ${this.trailingCheckbox?this.renderCheckbox():nothing}
            ${this.trailingRadioButton?this.renderRadioButton():nothing}
            ${this.trailingSwitch?this.renderSwitch():nothing}
        `
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__item");
    }

    /**
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("subLabel")) {
            await this.requestUpdate;
            const secondary = this.querySelector(".md-data-table__label-secondary");
            const style = window.getComputedStyle(secondary);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (secondary.scrollHeight > lineHeight) {
                this.classList.add("md-data-table__item--three");
            } else {
                this.classList.add("md-data-table__item--two");
            }
        }
    }
}
customElements.define("md-data-table-item", MDDataTableItemComponent);
export { MDDataTableItemComponent };

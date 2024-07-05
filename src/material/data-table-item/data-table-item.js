import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";

/**
 * Represents a custom data-table item component with various content options such as avatar, thumbnail, icon, and more.
 * @extends MDComponent
 * @tagname md-data-table-item
 */
class MDDataTableItemComponent extends MDComponent {
    /**
     * @property {String} avatar - URL for the avatar image.
     * @property {String} thumbnail - URL for the thumbnail image.
     * @property {String} video - URL for the video thumbnail image.
     * @property {String} icon - Icon to display in the data-table item.
     * @property {String} label - Primary label text.
     * @property {String} subLabel - Secondary label text.
     * @property {Number} badge - Badge number to display.
     * @property {String} text - Main text content of the data-table item.
     * @property {Boolean} leadingCheckbox - Indicates if a leading checkbox is displayed.
     * @property {Boolean} leadingRadioButton - Indicates if a leading radio button is displayed.
     * @property {Boolean} leadingSwitch - Indicates if a leading switch is displayed.
     * @property {Boolean} trailingCheckbox - Indicates if a trailing checkbox is displayed.
     * @property {Boolean} trailingRadioButton - Indicates if a trailing radio button is displayed.
     * @property {Boolean} trailingSwitch - Indicates if a trailing switch is displayed.
     * @property {Boolean} selected - Indicates if the data-table item is selected.
     * @property {String} routerLink - URL for routing purposes.
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
        routerLink: { type: String, reflect: true },
        indeterminate: { type: Boolean },
    };

    constructor() {
        super();

    }

    renderCheckbox() {
        /* prettier-ignore */
        return html`<md-checkbox 
            class="md-data-table__checkbox"
            .checked="${this.selected}"
            .indeterminate="${this.indeterminate}"
        ></md-checkbox>`
    }

    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-data-table__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`
    }

    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-data-table__switch"
            .checked="${this.selected}"
        ></md-switch>`
    }

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

            ${this.label||this.subLabel||this.badge?html`
                <div class="md-data-table__inner">
                    ${this.label||this.subLabel?html`
                        <div class="md-data-table__label">
                            ${this.label?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}

            ${this.trailingCheckbox?this.renderCheckbox():nothing}
            ${this.trailingRadioButton?this.renderRadioButton():nothing}
            ${this.trailingSwitch?this.renderSwitch():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table__item");
    }

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

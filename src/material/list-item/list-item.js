import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";

/**
 * {{description}}
 * @element md-list-item
 * @extends MDComponent
 * @fires MDListItemComponent#onListItemSelected - {{description}}
 */
class MDListItemComponent extends MDComponent {
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
     * @property {String} routerLink - {{description}}
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
    };

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
        });

        this.gesture = new MDGestureController(this, {
            drag: [],
            dragAfterLongPress: true,
            resize: [],
            resizeAfterLongPress: true,
            selection: true,
            selectionAfterLongPress: true,
        });
    }

    renderCheckbox() {
        /* prettier-ignore */
        return html`<md-checkbox 
            class="md-list__checkbox"
            .checked="${this.selected}"
        ></md-checkbox>`
    }

    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`
    }

    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
        ></md-switch>`
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingCheckbox?this.renderCheckbox():nothing}
            ${this.leadingRadioButton?this.renderRadioButton():nothing}
            ${this.leadingSwitch?this.renderSwitch():nothing}

            ${this.avatar?html`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>`:nothing}

            ${this.icon?html`<div class="md-icon md-list__icon">${this.icon}</div>`:nothing}

            ${this.label||this.subLabel||this.badge?html`
                <div class="md-list__inner">
                    ${this.label||this.subLabel?html`
                        <div class="md-list__label">
                            ${this.label?html`<div class="md-list__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-list__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.badge?html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.text?html`<div class="md-list__text">${this.text}</div>`:nothing}

            ${this.trailingCheckbox?this.renderCheckbox():nothing}
            ${this.trailingRadioButton?this.renderRadioButton():nothing}
            ${this.trailingSwitch?this.renderSwitch():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");

        this.list = this.closest("md-list");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("subLabel")) {
            await this.requestUpdate;
            const secondary = this.querySelector(".md-list__label-secondary");
            const style = window.getComputedStyle(secondary);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (secondary.scrollHeight > lineHeight) {
                this.classList.add("md-list__item--three");
            } else {
                this.classList.add("md-list__item--two");
            }
        }

        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListItemSelected", this);
            }
        }
    }
}

customElements.define("md-list-item", MDListItemComponent);

export { MDListItemComponent };

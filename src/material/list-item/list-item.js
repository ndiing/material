import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-list-item
 */
class MDListItemComponent extends MDComponent {
    
    /**
     * @property {String} avatar - {{desc}}
     * @property {String} thumbnail - {{desc}}
     * @property {String} video - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Number} badge - {{desc}}
     * @property {String} text - {{desc}}
     * @property {Boolean} leadingCheckbox - {{desc}}
     * @property {Boolean} leadingRadioButton - {{desc}}
     * @property {Boolean} leadingSwitch - {{desc}}
     * @property {Boolean} trailingCheckbox - {{desc}}
     * @property {Boolean} trailingRadioButton - {{desc}}
     * @property {Boolean} trailingSwitch - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {String} routerLink - {{desc}}
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
            @onCheckboxNativeInput="${this.handleCheckboxNativeInput}"
        ></md-checkbox>`
    }

    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
            @onRadioButtonNativeInput="${this.handleRadioButtonNativeInput}"
        ></md-radio-button>`
    }

    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
            @onSwitchNativeInput="${this.handleSwitchNativeInput}"
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
    }

    handleCheckboxNativeInput(event){
        this.emit('onCheckboxNativeInput',event)
    }

    handleRadioButtonNativeInput(event){
        this.emit('onRadioButtonNativeInput',event)
    }

    handleSwitchNativeInput(event){
        this.emit('onSwitchNativeInput',event)
    }

}

customElements.define("md-list-item", MDListItemComponent);

export { MDListItemComponent };

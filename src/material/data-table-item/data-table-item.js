import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";
class MDDataTableItemComponent extends MDComponent {
    static properties = {
        leadingActions: { type: Array },
        leadingCheckbox: { type: Boolean },
        leadingRadio: { type: Boolean },
        leadingSwitch: { type: Boolean },
        leadingAvatar: { type: String },
        leadingImage: { type: String },
        leadingVideo: { type: String },
        leadingIcon: { type: String },
        leadingSupportingText: { type: String },
        headline: { type: String },
        supportingText: { type: String },
        trailingSupportingText: { type: String },
        trailingIcon: { type: String },
        trailingVideo: { type: String },
        trailingImage: { type: String },
        trailingAvatar: { type: String },
        trailingSwitch: { type: Boolean },
        trailingRadio: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingActions: { type: Array },
        badge: { type: Number },
        activated: { type: Boolean, reflect: true },
        indeterminate: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-data-table__inner">
                ${this.leadingActions?.length?this.leadingActions.map(item=>html`<md-icon-button class="md-data-table__icon-button" .icon="${item.icon}"></md-icon-button>`):nothing}

                ${this.leadingCheckbox?html`<md-checkbox class="md-data-table__checkbox" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkbox>`:nothing}
                ${this.leadingRadio?html`<md-radio-button class="md-data-table__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>`:nothing}
                ${this.leadingSwitch?html`<md-switch class="md-data-table__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>`:nothing}
                ${this.leadingAvatar?html`<md-image class="md-data-table__avatar" .variant="${"rounded"}" .src="${this.leadingAvatar}"></md-image>`:nothing}
                ${this.leadingImage?html`<md-image class="md-data-table__image" .src="${this.leadingImage}"></md-image>`:nothing}
                ${this.leadingVideo?html`<md-image class="md-data-table__video" .ratio="${"3/2"}" .src="${this.leadingVideo}"></md-image>`:nothing}
                ${this.leadingIcon?html`<md-icon class="md-data-table__icon" .icon="${this.leadingIcon}"></md-icon>`:nothing}
                ${this.leadingSupportingText?html`<div class="md-data-table__supporting-text">${this.leadingSupportingText}</div>`:nothing}
                ${this.headline||this.supportingText?html`
                    <div class="md-data-table__section md-data-table__section--center">
                        ${this.headline?html`<div class="md-data-table__headline">${this.headline}</div>`:nothing}
                        ${this.supportingText?html`<div class="md-data-table__supporting-text">${this.supportingText}</div>`:nothing}
                    </div>
                `:nothing}
                ${this.trailingSupportingText?html`<div class="md-data-table__supporting-text">${this.trailingSupportingText}</div>`:nothing}
                ${this.trailingIcon?html`<md-icon class="md-data-table__icon" .icon="${this.trailingIcon}"></md-icon>`:nothing}
                ${this.trailingVideo?html`<md-image class="md-data-table__video" .ratio="${"3/2"}" .src="${this.trailingVideo}"></md-image>`:nothing}
                ${this.trailingImage?html`<md-image class="md-data-table__image" .src="${this.trailingImage}"></md-image>`:nothing}
                ${this.trailingAvatar?html`<md-image class="md-data-table__avatar" .variant="${"rounded"}" .src="${this.trailingAvatar}"></md-image>`:nothing}
                ${this.trailingSwitch?html`<md-switch class="md-data-table__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>`:nothing}
                ${this.trailingRadio?html`<md-radio-button class="md-data-table__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>`:nothing}
                ${this.trailingCheckbox?html`<md-checkbox class="md-data-table__checkbox" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkbox>`:nothing}
                ${this.trailingActions?.length?this.trailingActions.map(item=>html`<md-icon-button class="md-data-table__icon-button" .icon="${item.icon}"></md-icon-button>`):nothing}
                ${this.badge!==undefined?html`<md-badge class="md-data-table__badge" .label="${this.badge}"></md-badge>`:nothing}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__item");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("supportingText")) {
            await this.updateComplete;
            const supportingTextElement = this.querySelector(".md-data-table__section--center .md-data-table__supporting-text");
            const style = window.getComputedStyle(supportingTextElement);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (supportingTextElement.scrollHeight > lineHeight) {
                this.classList.add("md-data-table__item--three-line");
            } else {
                this.classList.add("md-data-table__item--two-line");
            }
        }
    }
}
customElements.define("md-data-table-item", MDDataTableItemComponent);
export { MDDataTableItemComponent };

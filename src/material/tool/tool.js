import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

class MDToolComponent extends MDComponent {
    static properties = {
        leadingActions: { type: Array },
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        leadingAvatar: { type: String },
        leadingImage: { type: String },
        leadingVideo: { type: String },
        leadingSupportingText: { type: String },
        leadingIcon: { type: String },

        headline: { type: String },
        supportingText: { type: String },

        trailingIcon: { type: String },
        trailingSupportingText: { type: String },
        trailingVideo: { type: String },
        trailingImage: { type: String },
        trailingAvatar: { type: String },
        trailingSwitch: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingActions: { type: Array },

        badge: { type: Number },
        
        activated: { type: Boolean },
        indeterminate: { type: Boolean },
        selected: { type: Boolean },
        disabled: { type: Boolean },
    };

    get hasSectionStart() {
        /* prettier-ignore */
        return (
            this.leadingActions?.length||
            this.leadingCheckbox||
            this.leadingRadioButton||
            this.leadingSwitch||
            this.leadingAvatar||
            this.leadingImage||
            this.leadingVideo||
            this.leadingSupportingText||
            this.leadingIcon
        )
    }

    get hasSectionCenter() {
        /* prettier-ignore */
        return (
            this.headline||
            this.supportingText
        )
    }

    get hasSectionEnd() {
        /* prettier-ignore */
        return (
            this.trailingIcon || 
            this.trailingSupportingText || 
            this.trailingVideo || 
            this.trailingImage || 
            this.trailingAvatar||
            this.trailingSwitch || 
            this.trailingRadioButton || 
            this.trailingCheckbox || 
            this.trailingActions?.length
        )
    }

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-tool__inner">
                ${this.hasSectionStart?html`
                    <div class="md-tool__section md-tool__section--start">
                        ${this.leadingActions?.length?this.leadingActions.map(item=>html`<md-icon-button class="md-tool__icon-button" .icon="${item.icon}"></md-icon-button>`):nothing}
                        ${this.leadingCheckbox?html`<md-checkbox class="md-tool__checkbox"></md-checkbox>`:nothing}
                        ${this.leadingRadioButton?html`<md-radio-button class="md-tool__radio-button"></md-radio-button>`:nothing}
                        ${this.leadingSwitch?html`<md-switch class="md-tool__switch"></md-switch>`:nothing}
                        
                        ${this.leadingAvatar?html`<md-image class="md-tool__avatar" .variant="${"rounded"}" .src="${this.leadingAvatar}"></md-image>`:nothing}
                        ${this.leadingImage?html`<md-image class="md-tool__image" .src="${this.leadingImage}"></md-image>`:nothing}
                        ${this.leadingVideo?html`<md-image class="md-tool__video" .ratio="${"3/2"}" .src="${this.leadingVideo}"></md-image>`:nothing}
                        ${this.leadingSupportingText?html`<div class="md-tool__supporting-text">${this.leadingSupportingText}</div>`:nothing}
                        ${this.leadingIcon?html`<md-icon class="md-tool__icon">${this.leadingIcon}</md-icon>`:nothing}
                    </div>
                `:nothing}
                ${this.hasSectionCenter?html`
                    <div class="md-tool__section md-tool__section--center">
                        ${this.headline?html`<div class="md-tool__headline">${this.headline}</div>`:nothing}
                        ${this.supportingText?html`<div class="md-tool__supporting-text">${this.supportingText}</div>`:nothing}
                    </div>
                `:nothing}
                ${this.hasSectionEnd?html`
                    <div class="md-tool__section md-tool__section--end">
                        ${this.trailingIcon?html`<md-icon class="md-tool__icon">${this.trailingIcon}</md-icon>`:nothing}
                        ${this.trailingSupportingText?html`<div class="md-tool__supporting-text">${this.trailingSupportingText}</div>`:nothing}
                        ${this.trailingVideo?html`<md-image class="md-tool__video" .ratio="${"3/2"}" .src="${this.trailingVideo}"></md-image>`:nothing}
                        ${this.trailingImage?html`<md-image class="md-tool__image" .src="${this.trailingImage}"></md-image>`:nothing}
                        ${this.trailingAvatar?html`<md-image class="md-tool__avatar" .variant="${"rounded"}" .src="${this.trailingAvatar}"></md-image>`:nothing}
                        ${this.trailingSwitch?html`<md-switch class="md-tool__switch"></md-switch>`:nothing}
                        ${this.trailingRadioButton?html`<md-radio-button class="md-tool__radio-button"></md-radio-button>`:nothing}
                        ${this.trailingCheckbox?html`<md-checkbox class="md-tool__checkbox"></md-checkbox>`:nothing}
                        ${this.trailingActions?.length?this.trailingActions.map(item=>html`<md-icon-button class="md-tool__icon-button" .icon="${item.icon}"></md-icon-button>`):nothing}
                    </div>
                `:nothing}
                ${this.badge!==undefined?html`<md-badge class="md-tool__badge" .label="${this.badge}"></md-badge>`:nothing}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tool");
    }
}
customElements.define("md-tool", MDToolComponent);
export { MDToolComponent };

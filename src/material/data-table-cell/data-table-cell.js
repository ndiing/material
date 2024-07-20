import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

class MDBoxComponent extends MDComponent {
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

    get hasSectionStart(){
        return (
            this.leadingActions?.length||
            this.leadingCheckbox||
            this.leadingRadio||
            this.leadingSwitch||
            this.leadingAvatar||
            this.leadingImage||
            this.leadingVideo||
            this.leadingIcon||
            this.leadingSupportingText
        )
    }
    get hasSectionCenter(){
        return (
            this.headline||
            this.supportingText
        )
    }
    get hasSectionEnd(){
        return (
            this.trailingSupportingText||
            this.trailingIcon||
            this.trailingVideo||
            this.trailingImage||
            this.trailingAvatar||
            this.trailingSwitch||
            this.trailingRadio||
            this.trailingCheckbox||
            this.trailingActions?.length
        )
    }

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-box__inner">
                ${this.hasSectionStart?html`
                    <div class="md-box__section md-box__section--start">
                        ${this.leadingActions?.length?this.leadingActions.map(item=>renderComponent({ component: "icon-button", classMap: { "md-box__icon-button": true }, icon: item.icon })):nothing}
                        ${this.leadingCheckbox?renderComponent({ component: "checkbox", classMap: { "md-box__checkbox": true } }):nothing}
                        ${this.leadingRadio?renderComponent({ component: "radio-button", classMap: { "md-box__radio-button": true } }):nothing}
                        ${this.leadingSwitch?renderComponent({ component: "switch", classMap: { "md-box__switch": true } }):nothing}
                        ${this.leadingAvatar?renderComponent({ component: "image", classMap: { "md-box__avatar": true }, variant: "rounded", src: this.leadingAvatar, alt:'leadingAvatar' }):nothing}
                        ${this.leadingImage?renderComponent({ component: "image", classMap: { "md-box__image": true }, src: this.leadingImage, alt:'leadingImage' }):nothing}
                        ${this.leadingVideo?renderComponent({ component: "image", classMap: { "md-box__video": true }, ratio: "3/2", src: this.leadingVideo, alt:'leadingVideo' }):nothing}
                        ${this.leadingIcon?renderComponent({ component: "icon", classMap: { "md-box__icon": true }, icon: this.leadingIcon }):nothing}
                        ${this.leadingSupportingText?html`<div class="md-box__supporting-text">${this.leadingSupportingText}</div>`:nothing}
                    </div>
                `:nothing}
                ${this.hasSectionCenter?html`
                    <div class="md-box__section md-box__section--center">
                        ${this.headline?html`<div class="md-box__headline">${this.headline}</div>`:nothing}
                        ${this.supportingText?html`<div class="md-box__supporting-text">${this.supportingText}</div>`:nothing}
                    </div>
                `:nothing}
                ${this.hasSectionEnd?html`
                    <div class="md-box__section md-box__section--end">
                        ${this.trailingSupportingText?html`<div class="md-box__supporting-text">${this.trailingSupportingText}</div>`:nothing}
                        ${this.trailingIcon?renderComponent({ component: "icon", classMap: { "md-box__icon": true }, icon: this.trailingIcon }):nothing}
                        ${this.trailingVideo?renderComponent({ component: "image", classMap: { "md-box__video": true }, ratio: "3/2", src: this.trailingVideo, alt:'trailingVideo' }):nothing}
                        ${this.trailingImage?renderComponent({ component: "image", classMap: { "md-box__image": true }, src: this.trailingImage, alt:'trailingImage' }):nothing}
                        ${this.trailingAvatar?renderComponent({ component: "image", classMap: { "md-box__avatar": true }, variant: "rounded", src: this.trailingAvatar, alt:'trailingAvatar' }):nothing}
                        ${this.trailingSwitch?renderComponent({ component: "switch", classMap: { "md-box__switch": true } }):nothing}
                        ${this.trailingRadio?renderComponent({ component: "radio-button", classMap: { "md-box__radio-button": true } }):nothing}
                        ${this.trailingCheckbox?renderComponent({ component: "checkbox", classMap: { "md-box__checkbox": true } }):nothing}
                        ${this.trailingActions?.length?this.trailingActions.map(item=>renderComponent({ component: "icon-button", classMap: { "md-box__icon-button": true }, icon: item.icon })):nothing}
                    </div>
                `:nothing}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-box");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if(changedProperties.has('supportingText')){
            await this.updateComplete
            const supportingTextElement = this.querySelector('.md-box__section--center .md-box__supporting-text')
            const style=window.getComputedStyle(supportingTextElement)
            const lineHeight=parseFloat(style.getPropertyValue('line-height'))
            if(supportingTextElement.scrollHeight>lineHeight){
                this.classList.add('md-box--three-line')
            }else{
                this.classList.add('md-box--two-line')
            }
        }
    }
}
customElements.define("md-box", MDBoxComponent);
export { MDBoxComponent };

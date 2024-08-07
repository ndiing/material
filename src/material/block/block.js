import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-block
 * @fires MDBlockComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDBlockComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDBlockComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDBlockComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDBlockComponent#onSwitchNativeInput - {{desc}}
 * @fires MDBlockComponent#onSwitchNativeReset - {{desc}}
 * @fires MDBlockComponent#onImageNativeLoad - {{desc}}
 * @fires MDBlockComponent#onImageNativeError - {{desc}}
 * @fires MDBlockComponent#onSelected - {{desc}}
 */
class MDBlockComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {Boolean} leadingCheckbox - {{desc}}
     * @property {Boolean} leadingRadioButton - {{desc}}
     * @property {Boolean} leadingSwitch - {{desc}}
     * @property {String} leadingAvatar - {{desc}}
     * @property {String} leadingImage - {{desc}}
     * @property {String} leadingVideo - {{desc}}
     * @property {String} leadingIcon - {{desc}}
     * @property {String} leadingSupportingText - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} supportingText - {{desc}}
     * @property {String} trailingSupportingText - {{desc}}
     * @property {String} trailingIcon - {{desc}}
     * @property {String} trailingVideo - {{desc}}
     * @property {String} trailingImage - {{desc}}
     * @property {String} trailingAvatar - {{desc}}
     * @property {Boolean} trailingSwitch - {{desc}}
     * @property {Boolean} trailingRadioButton - {{desc}}
     * @property {Boolean} trailingCheckbox - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Number} badge - {{desc}}
     * @property {Number} indent - {{desc}}
     * @property {String} routerLink - {{desc}}
     * @property {String} defaultLeadingActionComponent - {{desc}}
     * @property {String} defaultTrailingActionComponent - {{desc}}
     * @property {Boolean} activated - {{desc}}
     * @property {Boolean} indeterminate - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     */
    static properties = {
        leadingActions: { type: Array },
        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
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
        trailingRadioButton: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingActions: { type: Array },
        badge: { type: Number },
        indent: { type: Number },
        routerLink: { type: String, reflect: true },
        defaultLeadingActionComponent: { type: String },
        defaultTrailingActionComponent: { type: String },
        activated: { type: Boolean, reflect: true },
        indeterminate: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    /**
     * {{desc}}
     */
    get hasSectionStart() {
        return this.leadingActions?.length || this.leadingCheckbox || this.leadingRadioButton || this.leadingSwitch || this.leadingAvatar || this.leadingImage || this.leadingVideo || this.leadingIcon || this.leadingSupportingText || this.indent;
    }

    /**
     * {{desc}}
     */
    get hasSectionCenter() {
        return this.headline || this.supportingText;
    }

    /**
     * {{desc}}
     */
    get hasSectionEnd() {
        return this.trailingActions?.length || this.trailingCheckbox || this.trailingRadioButton || this.trailingSwitch || this.trailingAvatar || this.trailingImage || this.trailingVideo || this.trailingIcon || this.trailingSupportingText;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.defaultLeadingActionComponent = "icon-button";
        this.defaultTrailingActionComponent = "icon-button";
        this.indent = 0;
    }

    /**
     * {{desc}}
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <div class="md-block__inner">
                ${this.hasSectionStart?html`
                    <div class="md-block__section md-block__section--start">
                        ${Array.from({length:this.indent}, () => html`<md-icon class="md-block__indent"></md-icon>`)}
                        ${this.leadingActions?.length ? this.leadingActions.map(item => {
                            item.component = item.component || this.defaultLeadingActionComponent;
                            return renderComponent(item);
                        }) : nothing}
                        ${this.leadingCheckbox ? html`<md-checkbox class="md-block__checkbox" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkbox>` : nothing}
                        ${this.leadingRadioButton ? html`<md-radio-button class="md-block__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>` : nothing}
                        ${this.leadingSwitch ? html`<md-switch class="md-block__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>` : nothing}
                        ${this.leadingAvatar ? html`<md-image class="md-block__avatar" .variant="${"rounded"}" .src="${this.leadingAvatar}"></md-image>` : nothing}
                        ${this.leadingImage ? html`<md-image class="md-block__image" .src="${this.leadingImage}"></md-image>` : nothing}
                        ${this.leadingVideo ? html`<md-image class="md-block__video" .ratio="${"3/2"}" .src="${this.leadingVideo}"></md-image>` : nothing}
                        ${this.leadingIcon ? html`<md-icon class="md-block__icon" .icon="${this.leadingIcon}"></md-icon>` : nothing}
                        ${this.leadingSupportingText ? html`<div class="md-block__supporting-text">${this.leadingSupportingText}</div>` : nothing}
                    </div>
                `:nothing}
                ${this.hasSectionCenter ? html`
                    <div class="md-block__section md-block__section--center">
                        ${this.headline ? html`<div class="md-block__headline">${this.headline}</div>` : nothing}
                        ${this.supportingText ? html`<div class="md-block__supporting-text">${this.supportingText}</div>` : nothing}
                    </div>
                ` : nothing}
                ${this.hasSectionEnd?html`
                    <div class="md-block__section md-block__section--end">
                        ${this.trailingSupportingText ? html`<div class="md-block__supporting-text">${this.trailingSupportingText}</div>` : nothing}
                        ${this.trailingIcon ? html`<md-icon class="md-block__icon" .icon="${this.trailingIcon}"></md-icon>` : nothing}
                        ${this.trailingVideo ? html`<md-image class="md-block__video" .ratio="${"3/2"}" .src="${this.trailingVideo}"></md-image>` : nothing}
                        ${this.trailingImage ? html`<md-image class="md-block__image" .src="${this.trailingImage}"></md-image>` : nothing}
                        ${this.trailingAvatar ? html`<md-image class="md-block__avatar" .variant="${"rounded"}" .src="${this.trailingAvatar}"></md-image>` : nothing}
                        ${this.trailingSwitch ? html`<md-switch class="md-block__switch" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-switch>` : nothing}
                        ${this.trailingRadioButton ? html`<md-radio-button class="md-block__radio-button" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-radio-button>` : nothing}
                        ${this.trailingCheckbox ? html`<md-checkbox class="md-block__checkbox" .indeterminate="${this.indeterminate}" .checked="${this.selected}"></md-checkbox>` : nothing}
                        ${this.trailingActions?.length ? this.trailingActions.map(item => {
                            item.component = item.component || this.defaultTrailingActionComponent;
                            return renderComponent(item);
                        }) : nothing}
                    </div>
                `:nothing}
                ${this.badge !== undefined ? html`<md-badge class="md-block__badge" .label="${this.badge}"></md-badge>` : nothing}
            </div>
        `;
        /* this.emit("onCheckboxNativeInput", this); */
        /* this.emit("onCheckboxNativeReset", this); */
        /* this.emit("onRadioButtonNativeInput", this); */
        /* this.emit("onRadioButtonNativeReset", this); */
        /* this.emit("onSwitchNativeInput", this); */
        /* this.emit("onSwitchNativeReset", this); */
        /* this.emit("onImageNativeLoad", this); */
        /* this.emit("onImageNativeError", this); */
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-block");
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("supportingText")) {
            await this.updateComplete;
            const supportingTextElement = this.querySelector(".md-block__section--center .md-block__supporting-text");
            if (supportingTextElement) {
                const style = window.getComputedStyle(supportingTextElement);
                const lineHeight = parseFloat(style.getPropertyValue("line-height"));
                if (supportingTextElement.scrollHeight > lineHeight) {
                    this.classList.add("md-block--three-line");
                } else {
                    this.classList.add("md-block--two-line");
                }
            }
        }
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onSelected", this);
            }
        }
    }
}
customElements.define("md-block", MDBlockComponent);
export { MDBlockComponent };

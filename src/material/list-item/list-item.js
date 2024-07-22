import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDBlockComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDBlockComponent
 * @element md-list-item
 * @fires MDListItemComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDListItemComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDListItemComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDListItemComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDListItemComponent#onSwitchNativeInput - {{desc}}
 * @fires MDListItemComponent#onSwitchNativeReset - {{desc}}
 * @fires MDListItemComponent#onImageNativeLoad - {{desc}}
 * @fires MDListItemComponent#onImageNativeError - {{desc}}
 */
class MDListItemComponent extends MDBlockComponent {
    // 
    // static properties = {
    //     avatar: { type: String },
    //     thumbnail: { type: String },
    //     video: { type: String },
    //     icon: { type: String },
    //     label: { type: String },
    //     subLabel: { type: String },
    //     badge: { type: Number },
    //     text: { type: String },
    //     leadingCheckbox: { type: Boolean },
    //     leadingRadioButton: { type: Boolean },
    //     leadingSwitch: { type: Boolean },
    //     trailingCheckbox: { type: Boolean },
    //     trailingRadioButton: { type: Boolean },
    //     trailingSwitch: { type: Boolean },
    //     selected: { type: Boolean, reflect: true },
    //     routerLink: { type: String, reflect: true },
    //     activated: { type: Boolean, reflect: true },
    // };
    
    
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }
    // 
    // renderCheckbox() {
    //     /* prettier-ignore */
    //     return html`<md-checkbox 
    //         class="md-list__checkbox"
    //         .checked="${this.selected}"
    //     ></md-checkbox>`;
    // }
    // 
    // renderRadioButton() {
    //     /* prettier-ignore */
    //     return html`<md-radio-button 
    //         class="md-list__radio-button"
    //         .checked="${this.selected}"
    //     ></md-radio-button>`;
    // }
    // 
    // renderSwitch() {
    //     /* prettier-ignore */
    //     return html`<md-switch 
    //         class="md-list__switch"
    //         .checked="${this.selected}"
    //     ></md-switch>`;
    // }
    // 
    // render() {
    //     /* prettier-ignore */
    //     return html`
    //         ${this.leadingCheckbox ? this.renderCheckbox() : nothing}
    //         ${this.leadingRadioButton ? this.renderRadioButton() : nothing}
    //         ${this.leadingSwitch ? this.renderSwitch() : nothing}
    //         ${this.avatar ? html`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
    //         ${this.thumbnail ? html`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>` : nothing}
    //         ${this.video ? html`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>` : nothing}
    //         ${this.icon ? html`<md-icon class="md-list__icon" .icon="${this.icon}"></md-icon>` : nothing}
    //         ${this.label || this.subLabel || this.badge ? html`
    //             <div class="md-list__inner">
    //                 ${this.label || this.subLabel ? html`
    //                     <div class="md-list__label">
    //                         ${this.label ? html`<div class="md-list__label-primary">${this.label}</div>` : nothing}
    //                         ${this.subLabel ? html`<div class="md-list__label-secondary">${this.subLabel}</div>` : nothing}
    //                     </div>
    //                 ` : nothing}
    //                 ${this.badge ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing}
    //             </div>
    //         ` : nothing}
    //         ${this.text ? html`<div class="md-list__text">${this.text}</div>` : nothing}
    //         ${this.trailingCheckbox ? this.renderCheckbox() : nothing}
    //         ${this.trailingRadioButton ? this.renderRadioButton() : nothing}
    //         ${this.trailingSwitch ? this.renderSwitch() : nothing}
    //     `;
    //     // this.emit("onCheckboxNativeInput", this);
    //     // this.emit("onRadioButtonNativeInput", this);
    //     // this.emit("onSwitchNativeInput", this);
    // }
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
    }
    // 
    // async updated(changedProperties) {
    //     super.updated(changedProperties);
    //     if (changedProperties.has("subLabel")) {
    //         await this.updateComplete;
    //         const secondary = this.querySelector(".md-list__label-secondary");
    //         const style = window.getComputedStyle(secondary);
    //         const lineHeight = parseFloat(style.getPropertyValue("line-height"));
    //         if (secondary.scrollHeight > lineHeight) {
    //             this.classList.add("md-list__item--three");
    //         } else {
    //             this.classList.add("md-list__item--two");
    //         }
    //     }
    //     if (changedProperties.has("selected")) {
    //         if (this.selected) {
    //             this.emit("onListItemSelected", this);
    //         }
    //     }
    // }
}
customElements.define("md-list-item", MDListItemComponent);
export { MDListItemComponent };

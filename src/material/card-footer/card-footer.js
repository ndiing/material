import { MDBlockComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDBlockComponent
 * @element md-card-footer
 * @fires MDCardFooterComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDCardFooterComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDCardFooterComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDCardFooterComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDCardFooterComponent#onSwitchNativeInput - {{desc}}
 * @fires MDCardFooterComponent#onSwitchNativeReset - {{desc}}
 * @fires MDCardFooterComponent#onImageNativeLoad - {{desc}}
 * @fires MDCardFooterComponent#onImageNativeError - {{desc}}
 */
class MDCardFooterComponent extends MDBlockComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card__footer");
    }
}
customElements.define("md-card-footer", MDCardFooterComponent);
export { MDCardFooterComponent };

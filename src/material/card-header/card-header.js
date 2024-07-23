import { MDBlockComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDBlockComponent
 * @element md-card-header
 * @fires MDCardHeaderComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDCardHeaderComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDCardHeaderComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDCardHeaderComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDCardHeaderComponent#onSwitchNativeInput - {{desc}}
 * @fires MDCardHeaderComponent#onSwitchNativeReset - {{desc}}
 * @fires MDCardHeaderComponent#onImageNativeLoad - {{desc}}
 * @fires MDCardHeaderComponent#onImageNativeError - {{desc}}
 */
class MDCardHeaderComponent extends MDBlockComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card__header");
    }
}
customElements.define("md-card-header", MDCardHeaderComponent);
export { MDCardHeaderComponent };

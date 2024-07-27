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
 * @fires MDListItemComponent#onSelected - {{desc}}
 */
class MDListItemComponent extends MDBlockComponent {
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
    }
}
customElements.define("md-list-item", MDListItemComponent);
export { MDListItemComponent };

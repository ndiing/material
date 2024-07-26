import { MDRippleController } from "../ripple/ripple.js";
import { MDBlockComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDBlockComponent
 * @element md-tree-item
 * @fires MDTreeItemComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDTreeItemComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDTreeItemComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDTreeItemComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDTreeItemComponent#onSwitchNativeInput - {{desc}}
 * @fires MDTreeItemComponent#onSwitchNativeReset - {{desc}}
 * @fires MDTreeItemComponent#onImageNativeLoad - {{desc}}
 * @fires MDTreeItemComponent#onImageNativeError - {{desc}}
 */
class MDTreeItemComponent extends MDBlockComponent {
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
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree__item");
    }
}
customElements.define("md-tree-item", MDTreeItemComponent);
export { MDTreeItemComponent };

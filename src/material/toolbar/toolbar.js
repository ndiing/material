import { MDBlockComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDBlockComponent
 * @element md-toolbar
 * @fires MDToolbarComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDToolbarComponent#onCheckboxNativeReset - {{desc}}
 * @fires MDToolbarComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDToolbarComponent#onRadioButtonNativeReset - {{desc}}
 * @fires MDToolbarComponent#onSwitchNativeInput - {{desc}}
 * @fires MDToolbarComponent#onSwitchNativeReset - {{desc}}
 * @fires MDToolbarComponent#onImageNativeLoad - {{desc}}
 * @fires MDToolbarComponent#onImageNativeError - {{desc}}
 */
class MDToolbarComponent extends MDBlockComponent {
    static properties = {
        items: { type: Array },
    };

    /**
     * {{desc}}
     */
    get leadingActions() {
        return this.items;
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set leadingActions(value) {}

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-toolbar");
    }
}
customElements.define("md-toolbar", MDToolbarComponent);
export { MDToolbarComponent };

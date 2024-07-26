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
     * @property {Array} items - {{desc}}
     */
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
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-toolbar");
    }
}
customElements.define("md-toolbar", MDToolbarComponent);
export { MDToolbarComponent };

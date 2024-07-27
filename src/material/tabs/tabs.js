import { MDListComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDListComponent
 * @element md-tabs
 * @fires MDTabsComponent#onListItemClick - {{desc}}
 * @fires MDTabsComponent#onListKeydown - {{desc}}
 * @fires MDTabsComponent#onListItemCheckboxNativeInput - {{desc}}
 * @fires MDTabsComponent#onListItemRadioButtonNativeInput - {{desc}}
 * @fires MDTabsComponent#onListItemSwitchNativeInput - {{desc}}
 * @fires MDTabsComponent#onListItemSelected - {{desc}}
 */
class MDTabsComponent extends MDListComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Array} items - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
     * @property {String} variant - {{desc}}
     */
    static properties = {
        ...MDListComponent.properties,
        variant: { type: String },
    };
    variants = ["primary", "secondary"];

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tabs--${variant}`, variants.includes(variant));
            });
        }
    }
}
customElements.define("md-tabs", MDTabsComponent);
export { MDTabsComponent };

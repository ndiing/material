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
 */
class MDTabsComponent extends MDListComponent {
    static properties = {
        ...MDListComponent.properties,
        variant: { type: String },
    };

    variants = ["primary", "secondary"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
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

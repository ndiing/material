import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-divider
 */
class MDDividerComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     */
    static properties = {
        variant: { type: String },
    };
    variants = ["vertical", "horizontal"];

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-divider");
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
                this.classList.toggle(`md-divider--${variant}`, variants.includes(variant));
            });
        }
    }
}
customElements.define("md-divider", MDDividerComponent);
export { MDDividerComponent };

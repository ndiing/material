import { MDComponent } from "../component/component.js";
/**
 * {{desc}}
 * @extends MDComponent
 * @element md-layout
 */
class MDLayoutComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} variant - {{desc}}
     */
    static properties = {
        variant: { type: String },
    };
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
    }
    /**
     * {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const classMap = {
                "md-layout-border": this.variant === "border",
                "md-layout-column": this.variant === "column",
            };
            for (const name in classMap) {
                const value = classMap[name];
                this.classList.toggle(name, value);
            }
        }
    }
}
customElements.define("md-layout", MDLayoutComponent);
export { MDLayoutComponent };

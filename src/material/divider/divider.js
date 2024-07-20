import { MDComponent } from "../component/component.js";

/**
 * A custom element for displaying dividers.
 * @element md-divider
 * @extends MDComponent
 */
class MDDividerComponent extends MDComponent {
    static properties = {
        variant: { type: String },
    };
    variants = ["vertical", "horizontal"];

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-divider' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-divider");
    }
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

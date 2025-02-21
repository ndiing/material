import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
/**
 * MDDividerComponent class responsible for displaying a divider.
 * @extends MdComponent
 * @element md-divider
 */
class MDDividerComponent extends MdComponent {
    /**
     * The properties of the component.
     * @property {boolean} [vertical=false] - Indicates if the divider is vertical. Reflects to attribute.
     */
    static properties = {
        vertical: { type: Boolean, reflect: true },
    };

    /**
     * Called when the element is connected to the DOM.
     * Adds the 'md-divider' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-divider");
    }
}

customElements.define("md-divider", MDDividerComponent);

export { MDDividerComponent };

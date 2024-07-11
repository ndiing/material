import { MDComponent } from "../component/component.js";

/**
 * A custom element for displaying icons.
 * @element md-icon
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    
    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-icon' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}
customElements.define("md-icon", MDIconComponent);
export { MDIconComponent };

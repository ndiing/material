import { MDComponent } from "../component/component.js";

/**
 * A custom element for displaying spacers.
 * @element md-spacer
 * @extends MDComponent
 */
class MDSpacerComponent extends MDComponent {

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-spacer' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-spacer");
    }
}
customElements.define("md-spacer", MDSpacerComponent);
export { MDSpacerComponent };

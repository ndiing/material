import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";
/**
 * A custom element for displaying toolbars.
 * @element md-toolbar
 * @extends MDComponent
 */
class MDToolbarComponent extends MDComponent {
    static properties = {
        items: { type: Array },
    };

    render() {
        return this.items?.map((item) => {
            item.component = item.component || "icon-button";
            return renderComponent(item);
        });
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-toolbar' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-toolbar");
    }
}
customElements.define("md-toolbar", MDToolbarComponent);
export { MDToolbarComponent };

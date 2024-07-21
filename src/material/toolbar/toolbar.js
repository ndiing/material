import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-toolbar
 */
class MDToolbarComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {Array} items - {{desc}}
     */
    static properties = {
        items: { type: Array },
    };
    /**
     * {{desc}}
     */
    render() {
        return this.items?.map((item) => {
            item.component = item.component || "icon-button";
            return renderComponent(item);
        });
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-toolbar");
    }
}
customElements.define("md-toolbar", MDToolbarComponent);
export { MDToolbarComponent };

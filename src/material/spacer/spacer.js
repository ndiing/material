import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-spacer
 */
class MDSpacerComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     */
    static properties = {
        ...MDComponent.properties,
    };

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-spacer");
    }
}
customElements.define("md-spacer", MDSpacerComponent);
export { MDSpacerComponent };

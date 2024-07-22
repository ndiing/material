import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-icon
 */
class MDIconComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} icon - {{desc}}
     */
    static properties = {
        icon: { type: String },
    };

    /**
     * {{desc}}
     */
    render() {
        return this.icon;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}
customElements.define("md-icon", MDIconComponent);
export { MDIconComponent };

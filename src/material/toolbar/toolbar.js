import { MDComponent } from "../component/component.js";
import { MDBlockComponent } from "../material.js";
import { renderComponent } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-toolbar
 */
class MDToolbarComponent extends MDBlockComponent {
    static properties={
        items:{type:Array},
    }

    get leadingActions() {
        return this.items;
    }
    set leadingActions(value) {
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

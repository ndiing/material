import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-scrim
 */
class MDScrimComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
    }

    /**
     * {{desc}}
     */
    show() {
        this.open = true;
    }

    /**
     * {{desc}}
     */
    close() {
        this.open = false;
    }

    /**
     * {{desc}}
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}
customElements.define("md-scrim", MDScrimComponent);
export { MDScrimComponent };

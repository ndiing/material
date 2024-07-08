import { MDComponent } from "../component/component.js";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-scrim
 */
class MDScrimComponent extends MDComponent {
    
    /**
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

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

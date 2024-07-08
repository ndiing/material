import { MDComponent } from "../component/component.js";

/**
 * {{description}}
 * @element md-scrim
 * @extends MDComponent
 */
class MDScrimComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Boolean} open - {{description}}
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");
    }

    /**
     * {{description}}
     */
    show() {
        this.open = true;
    }

    /**
     * {{description}}
     */
    close() {
        this.open = false;
    }

    /**
     * {{description}}
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

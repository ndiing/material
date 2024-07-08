import { MDComponent } from "../component/component.js";

/**
 * Represents a scrim component that extends MDComponent.
 * @element md-scrim
 * @extends MDComponent
 */
class MDScrimComponent extends MDComponent {
    /**
     * Properties of the MDScrimComponent.
     * @property {Boolean} open - Reflects whether the scrim is open.
     */
    static properties = {
        ...MDComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    /**
     * Enhances connectedCallback to add specific CSS class.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
    }

    /**
     * Shows the scrim by setting `open` to true.
     */
    show() {
        this.open = true;
    }

    /**
     * Hides the scrim by setting `open` to false.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the scrim visibility.
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

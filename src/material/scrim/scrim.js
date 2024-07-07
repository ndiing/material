import { MDComponent } from "../component/component.js";

/**
 * Represents a scrim component that provides overlay functionality.
 * @extends MDComponent
 * @tagname md-scrim
 */
class MDScrimComponent extends MDComponent {
    /**
     * @property {Boolean} open - Controls the visibility state of the scrim. Set to `true` to show the scrim and `false` to hide it.
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
     * Shows the scrim by setting `open` to `true`. This method makes the scrim visible.
     */
    show() {
        this.open = true;
    }

    /**
     * Hides the scrim by setting `open` to `false`. This method hides the scrim if it is currently visible.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the scrim. If the scrim is visible, it will hide it. If hidden, it will show it.
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

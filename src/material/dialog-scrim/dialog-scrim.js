import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDDialogScrimComponent represents the scrim component for a dialog.
 *
 * @extends MDComponent
 */
class MDDialogScrimComponent extends MDComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__scrim");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__scrim");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the dialog scrim.
     */
    render() {}
}

customElements.define("md-dialog-scrim", MDDialogScrimComponent);

export { MDDialogScrimComponent };

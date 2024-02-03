import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardBodyComponent } from "../card-body/card-body";

/**
 * MDDialogBodyComponent represents the body component for a dialog.
 *
 * @extends MDCardBodyComponent
 */
class MDDialogBodyComponent extends MDCardBodyComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__body");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__body");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }
}

customElements.define("md-dialog-body", MDDialogBodyComponent);

export { MDDialogBodyComponent };

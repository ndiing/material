import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardFooterComponent } from "../card-footer/card-footer";

/**
 * MDDialogFooterComponent represents the footer component for a dialog.
 *
 * @extends MDCardFooterComponent
 */
class MDDialogFooterComponent extends MDCardFooterComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__footer");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__footer");
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

customElements.define("md-dialog-footer", MDDialogFooterComponent);

export { MDDialogFooterComponent };

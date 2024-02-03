import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardBodyComponent } from "../card-body/card-body";

/**
 * MDSheetBodyComponent represents the body for a material design sheet.
 *
 * @extends MDCardBodyComponent
 */
class MDSheetBodyComponent extends MDCardBodyComponent {
    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-sheet__body' class to the component
        this.classList.add("md-sheet__body");
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-sheet__body' class from the component
        this.classList.remove("md-sheet__body");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Additional logic if needed
    }

    /**
     * Called when the component is updated.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        // Additional logic if needed
    }
}

// Define the custom element
customElements.define("md-sheet-body", MDSheetBodyComponent);

// Export the component
export { MDSheetBodyComponent };

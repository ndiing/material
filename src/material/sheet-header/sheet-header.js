import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardHeaderComponent } from "../card-header/card-header";

/**
 * MDSheetHeaderComponent represents the header for a material design sheet.
 *
 * @extends MDCardHeaderComponent
 */
class MDSheetHeaderComponent extends MDCardHeaderComponent {
    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-sheet__header' class to the component
        this.classList.add("md-sheet__header");
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-sheet__header' class from the component
        this.classList.remove("md-sheet__header");
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
customElements.define("md-sheet-header", MDSheetHeaderComponent);

// Export the component
export { MDSheetHeaderComponent };

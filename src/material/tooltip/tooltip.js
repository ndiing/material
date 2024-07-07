import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a tooltip component.
 * @extends MDSheetComponent
 * @tagname md-tooltip
 */
class MDTooltipComponent extends MDSheetComponent {
    variants = ["plain", "rich"];

    constructor() {
        super();

        // Initialize a new Popper controller for managing tooltip placement.
        this.popper = new MDPopperController(this, {});
    }

    connectedCallback() {
        super.connectedCallback();

        // Add necessary CSS classes for styling tooltip appearance.
        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * Shows the tooltip as a modal.
     * @param {HTMLElement} button - The button element that triggers the tooltip.
     * @param {Object} options - Additional options for customizing tooltip behavior.
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Shows the tooltip.
     * @param {HTMLElement} button - The button element that triggers the tooltip.
     * @param {Object} options - Additional options for customizing tooltip behavior.
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the tooltip relative to a button.
     * @param {HTMLElement} button - The button element that triggers the tooltip.
     * @param {Object} options - Additional options for customizing tooltip placement.
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west", "center"],
            offset: 8,
            ...options,
        });
    }
}

customElements.define("md-tooltip", MDTooltipComponent);

export { MDTooltipComponent };

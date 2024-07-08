import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a tooltip component.
 * @element md-tooltip
 * @extends MDSheetComponent
 */
class MDTooltipComponent extends MDSheetComponent {
    /**
     * Variants of the tooltip component.
     */
    variants = ["plain", "rich"];

    /**
     * Initializes the tooltip component.
     */
    constructor() {
        super();

        // Initialize MDPopperController for positioning the tooltip
        this.popper = new MDPopperController(this, {});
    }

    /**
     * Enhances connectedCallback to add specific CSS classes for tooltip styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * Shows the tooltip as a modal.
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
     */
    showModal(button, options) {
        super.showModal(); // Call MDSheetComponent's showModal method

        this.setPlacement(button, options);
    }

    /**
     * Shows the tooltip.
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
     */
    show(button, options) {
        super.show(); // Call MDSheetComponent's show method

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the tooltip relative to the provided button element.
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
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

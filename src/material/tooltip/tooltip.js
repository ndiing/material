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
        this.popper = new MDPopperController(this, {});
    }

    /**
     * Enhances connectedCallback to add specific CSS classes for tooltip styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    /**
     * Shows the tooltip as a modal.
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
     */
    showModal(button, options) {
        this.updatePosition(button, options);
        super.showModal();
    }

    /**
     * Shows the tooltip.
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
     */
    show(button, options) {
        this.updatePosition(button, options);
        super.show();
    }

    /**
     * Sets the placement of the tooltip relative to the provided button element.
     * @private
     * @param {Element} button - The button element to which the tooltip is attached.
     * @param {Object} options - Options for positioning the tooltip.
     */
    updatePosition(button, options) {
        this.popper.setPosition(button, {
            /* prettier-ignore */
            placements: [
                "below","below-start","below-end",
                "above","above-start","above-end",
                "before","before-start","before-end",
                "after","after-start","after-end",
                "north-east","south-east","south-west","north-west",
            ],
            offset: 8,
            ...options,
        });
    }
}
customElements.define("md-tooltip", MDTooltipComponent);
export { MDTooltipComponent };

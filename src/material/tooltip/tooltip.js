import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{description}}
 * @element md-tooltip
 * @extends MDSheetComponent
 */
class MDTooltipComponent extends MDSheetComponent {
    variants = ["plain", "rich"];

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.popper = new MDPopperController(this, {});
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * {{description}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
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

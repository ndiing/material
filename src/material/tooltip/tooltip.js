import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @tagname md-tooltip
 */
class MDTooltipComponent extends MDSheetComponent {
    variants = ["plain", "rich"];

    constructor() {
        super();

        this.popper = new MDPopperController(this, {});
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-tooltip");
    }

    /**
     * {{desc}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * {{desc}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * {{desc}}
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

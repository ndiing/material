import { MDPopperController } from "../popper/popper.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-tooltip
 * @fires MDTooltipComponent#onSheetShow - {{desc}}
 * @fires MDTooltipComponent#onSheetClose - {{desc}}
 * @fires MDTooltipComponent#onSheetScrimClick - {{desc}}
 */
class MDTooltipComponent extends MDSheetComponent {
    variants = ["plain", "rich"];

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    showModal(button, options) {
        this.updatePosition(button, options);
        super.showModal();
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    show(button, options) {
        this.updatePosition(button, options);
        super.show();
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
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

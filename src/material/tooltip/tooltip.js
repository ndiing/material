import { MDPaneComponent } from "../pane/pane.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-tooltip
 * @fires MDTooltipComponent#onScrimClick - {{desc}}
 */
class MDTooltipComponent extends MDPaneComponent {
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

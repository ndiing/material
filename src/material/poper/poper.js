import { MDController } from "../base/controller";

/**
 * Controller class for managing Material Design popovers.
 * @extends MDController
 */
class MDPoperController extends MDController {
    /**
     * Creates an instance of MDPoperController.
     * @param {HTMLElement} host - The host element for the controller.
     * @param {PopoverOptions} [options={}] - Options for the controller.
     * @property {HTMLElement} container - The container element for the popover.
     * @property {string} placement - The placement of the popover ("top", "right", "bottom", "left", etc.).
     * @property {boolean} shift - Whether to shift the popover to fit within the containment bounds.
     * @property {number} offset - The offset value for the popover placement.
     * @property {HTMLElement} containment - The containment element for the popover.
     */
    constructor(host, options = {}) {
        super(host, {
            // default options
            container: host,
            placement: "bottom",
            shift: true,
            // flip: false,
            offset: 0,
            containment: document.documentElement,
            ...options,
        });
    }

     /**
     * Lifecycle method called when the host element is connected to the DOM.
     */
    hostConnected() {
        this.options.container.classList.add("md-poper");

        // let count = 0;
        // const update = () => {
        //     const placements = ["top-end", "top", "top-start", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-end", "left", "left-start"];
        //     const placement = this.getPlacement(placements[count % placements.length]);
        //     let left = placement.left;
        //     let top = placement.top;
        //     this.options.container.style.setProperty("left", `${left}px`);
        //     this.options.container.style.setProperty("top", `${top}px`);
        //     ++count;
        // };

        // update();
        // setInterval(() => {
        //     update();
        // }, 1000);

        // binding
        // this.handlePoperClick = this.handlePoperClick.bind(this);

        // listen
        // this.host.addEventListener("click", this.handlePoperClick);
    }

    /**
     * Lifecycle method called when the host element is disconnected from the DOM.
     */
    hostDisconnected() {
        // unlisten
        // this.host.removeEventListener("click", this.handlePoperClick);
    }

    // handlePoperClick(event) {
    //     // emit
    //     this.host.emit("onPoperClick", { event });
    // }

     /**
     * Calculate the placement of the popover based on the specified placement option.
     * @param {string} [placement=this.options.placement] - The placement option.
     * @returns {Object} - The calculated placement object containing 'left', 'top', 'right', and 'bottom' values.
     */
    getPlacement(placement = this.options.placement) {
        const containerRect = this.options.container.getBoundingClientRect();
        const buttonRect = this.options.button.getBoundingClientRect();
        const containmentRect = this.options.containment.getBoundingClientRect();

        const calculations = [
            { placement: "top-end", left: buttonRect.right - containerRect.width, top: buttonRect.top - containerRect.height - this.options.offset },
            { placement: "top", left: buttonRect.left - (containerRect.width - buttonRect.width) / 2, top: buttonRect.top - containerRect.height - this.options.offset },
            { placement: "top-start", left: buttonRect.left, top: buttonRect.top - containerRect.height - this.options.offset },
            { placement: "right-start", left: buttonRect.right + this.options.offset, top: buttonRect.top },
            { placement: "right", left: buttonRect.right + this.options.offset, top: buttonRect.top - (containerRect.height - buttonRect.height) / 2 },
            { placement: "right-end", left: buttonRect.right + this.options.offset, top: buttonRect.bottom - containerRect.height },
            { placement: "bottom-start", left: buttonRect.left, top: buttonRect.bottom + this.options.offset },
            { placement: "bottom", left: buttonRect.left - (containerRect.width - buttonRect.width) / 2, top: buttonRect.bottom + this.options.offset },
            { placement: "bottom-end", left: buttonRect.right - containerRect.width, top: buttonRect.bottom + this.options.offset },
            { placement: "left-end", left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.bottom - containerRect.height },
            { placement: "left", left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top - (containerRect.height - buttonRect.height) / 2 },
            { placement: "left-start", left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top },
        ];

        const result = calculations.find((item) => item.placement === placement);

        result.right = result.left + containerRect.width;
        result.bottom = result.top + containerRect.height;

        // if (result.left < containmentRect.left) {
        // }
        // if (result.top < containmentRect.top) {
        // }
        // if (result.right > containmentRect.right) {
        // }
        // if (result.bottom > containmentRect.bottom) {
        // }

        if (this.options.shift) {
            if (result.left < containmentRect.left) {
                result.left = containmentRect.left;
            }
            if (result.top < containmentRect.top) {
                result.top = containmentRect.top;
            }
            if (result.right > containmentRect.right) {
                result.right = containmentRect.right;
            }
            if (result.bottom > containmentRect.bottom) {
                result.bottom = containmentRect.bottom;
            }
        }

        return result;
    }

    /**
     * Set the calculated placement for the popover container.
     */
    setPlacement() {
        const result = this.getPlacement(this.options.placement);
        let left = result.left;
        let top = result.top;
        this.options.container.style.setProperty("left", `${left}px`);
        this.options.container.style.setProperty("top", `${top}px`);
    }
}

export { MDPoperController };

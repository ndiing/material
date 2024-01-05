import { MDCDK } from "./cdk";

/**
 * Represents a popover functionality based on Material Design components.
 * @extends MDCDK
 */
class MDPopover extends MDCDK {
    /**
     * Creates an instance of MDPopover.
     * @param {HTMLElement} root - The root element for the popover.
     * @param {Object} [options={}] - Additional options for the popover.
     * @param {string} [options.placement="bottom-start"] - The placement of the popover.
     * @param {number} [options.offset=0] - The offset value for positioning the popover.
     * @param {boolean} [options.shift=false] - Whether to shift the popover to stay within the viewport.
     */
    constructor(root, options = {}) {
        super(root, {
            placement: "bottom-start",
            offset: 0,
            shift: false,
            ...options,
        });
    }

    /**
     * Initializes the popover.
     */
    init() {
        this.root.classList.add("md-popover");

        this.setPlacement();
    }

    /**
     * Destroys the popover.
     */
    destroy() {
        this.root.classList.remove("md-popover");
    }

    /**
     * Sets the placement of the popover based on the specified options.
     */
    setPlacement() {
        const placement = this.getPlacement(this.options.placement);
        this.root.style.left = placement.left + "px";
        this.root.style.top = placement.top + "px";
    }

    /**
     * Calculates the placement of the popover based on the specified placement option.
     * @param {string} placement - The placement option for the popover.
     * @returns {{left: number, top: number}} Returns an object with left and top positions for the popover.
     */
    getPlacement(placement) {
        const rootRect = this.root.getBoundingClientRect();
        const triggerRect = this.options.trigger.getBoundingClientRect();
        const boundaryRect = document.documentElement.getBoundingClientRect();

        let left;
        let top;

        if (placement === "top-end") {
            left = triggerRect.right - rootRect.width;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "top") {
            left = triggerRect.left - (rootRect.width - triggerRect.width) / 2;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "top-start") {
            left = triggerRect.left;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "right-end") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.bottom - rootRect.height;
        } else if (placement === "right") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.top - (rootRect.height - triggerRect.height) / 2;
        } else if (placement === "right-start") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.top;
        } else if (placement === "bottom-start") {
            left = triggerRect.left;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "bottom") {
            left = triggerRect.left - (rootRect.width - triggerRect.width) / 2;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "bottom-end") {
            left = triggerRect.right - rootRect.width;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "left-start") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.top;
        } else if (placement === "left") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.top - (rootRect.height - triggerRect.height) / 2;
        } else if (placement === "left-end") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.bottom - rootRect.height;
        }

        // left += window.scrollX;
        // top += window.scrollY;

        if (this.options.shift) {
            if (left <= boundaryRect.left) left = boundaryRect.left + this.options.offset;
            else if (left >= boundaryRect.right - rootRect.width) left = boundaryRect.right - rootRect.width - this.options.offset;
            if (top <= boundaryRect.top) top = boundaryRect.top + this.options.offset;
            else if (top >= boundaryRect.bottom - rootRect.height) top = boundaryRect.bottom - rootRect.height - this.options.offset;
        }

        return { left, top };
    }
}

export { MDPopover };

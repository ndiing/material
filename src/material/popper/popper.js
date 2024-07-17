import { getBoundary } from "../functions/functions";

/**
 * A controller for managing popper elements positioning.
 */
class MDPopperController {
    
    /**
     * Initializes the MDPopperController.
     * @param {HTMLElement} host - The host element to which the popper is attached.
     * @param {Object} [options={}] - Configuration options for the popper controller.
     * @property {HTMLElement} [options.container=null] - The container element for the popper.
     * @property {HTMLElement} [options.boundary=null] - The boundary element for the popper.
     * @property {HTMLElement} [options.button=null] - The button element that triggers the popper.
     * @property {string[]} [options.placements=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","above","above-start","above-end","after","after-start","after-end","below","below-start","below-end","before","before-start","before-end","north-east","south-east","south-west","north-west","center"]] - The possible placements for the popper.
     * @property {number} [options.offset=0] - The offset distance for the popper.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            // container: null,
            boundary: null,
            // button: null,
            /* prettier-ignore */
            placements: [
                "top","top-start","top-end",
                "bottom","bottom-start","bottom-end",
                "right","right-start","right-end",
                "left","left-start","left-end",
                "below","below-start","below-end",
                "above","above-start","above-end",
                "after","after-start","after-end",
                "before","before-start","before-end",
                "north-east","south-east","south-west","north-west",
                "center",
            ],
            offset: 0,
            ...options,
        };
    }

    /**
     * Gets the rectangle boundaries of an element or event.
     * @private
     * @param {HTMLElement|Event} element - The element or event to get the rectangle boundaries from.
     * @param {Object} [absoluteRect={left: 0, top: 0}] - The absolute rectangle for adjustments.
     * @property {number} absoluteRect.left - The left position of the absolute rectangle.
     * @property {number} absoluteRect.top - The top position of the absolute rectangle.
     * @returns {Object} The rectangle boundaries with width, height, left, top, right, and bottom properties.
     */
    getRect(element, absoluteRect = { left: 0, top: 0 }) {
        let width, height, left, top, right, bottom;

        if (element instanceof HTMLElement) {
            ({ width, height, left, top, right, bottom } = element.getBoundingClientRect());
        } else {
            const event = element;
            width = event.width;
            height = event.height;
            left = event.clientX;
            top = event.clientY;
        }
        left -= absoluteRect.left;
        top -= absoluteRect.top;
        right = left + width;
        bottom = top + height;
        return { width, height, left, top, right, bottom };
    }

    /**
     * Gets the absolute rectangle boundaries of a container.
     * @private
     * @param {HTMLElement} container - The container element to get the absolute rectangle boundaries from.
     * @returns {Object} The absolute rectangle boundaries with width, height, left, top, right, and bottom properties.
     */
    getAbsoluteRect(container) {
        const absolute = document.createElement("div");
        absolute.style.position = "absolute";
        absolute.style.left = "0px";
        absolute.style.top = "0px";
        absolute.style.right = "0px";
        absolute.style.bottom = "0px";
        container.parentElement.insertBefore(absolute, container.nextElementSibling);
        const { width, height, left, top, right, bottom } = absolute.getBoundingClientRect();
        absolute.remove();
        return { width, height, left, top, right, bottom };
    }

    /**
     * Adjusts the maximum boundary rectangle based on given parameters.
     * @private
     * @param {Object} params - The parameters for adjustment.
     * @property {number} params.left - The left position to be adjusted.
     * @property {Object} params.boundaryRect - The rectangle boundaries of the boundary element.
     * @property {number} params.top - The top position to be adjusted.
     * @property {number} params.right - The right position to be adjusted.
     * @property {Object} params.containerRect - The rectangle boundaries of the container element.
     * @property {number} params.bottom - The bottom position to be adjusted.
     * @returns {Object} The adjusted left and top positions.
     */
    adjustMaxBoundaryRect({ left, boundaryRect, top, right, containerRect, bottom }) {
        if (left < boundaryRect.left) {
            left = Math.max(left, boundaryRect.left);
        }

        if (top < boundaryRect.top) {
            top = Math.max(top, boundaryRect.top);
        }

        if (right > boundaryRect.right) {
            left = Math.min(right - containerRect.width, boundaryRect.right - containerRect.width);
        }

        if (bottom > boundaryRect.bottom) {
            top = Math.min(bottom - containerRect.height, boundaryRect.bottom - containerRect.height);
        }
        return { left, top };
    }

    /**
     * Sets the position of the popper element relative to the button and container.
     * @param {HTMLElement} button - The button element that triggers the popper.
     * @param {Object} [options={}] - Configuration options for positioning the popper.
     * @property {HTMLElement} [options.container=null] - The container element for the popper.
     * @property {HTMLElement} [options.boundary=null] - The boundary element for the popper.
     * @property {number} [options.offset=0] - The offset distance for the popper.
     * @property {string[]} [options.placements=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","above","above-start","above-end","after","after-start","after-end","below","below-start","below-end","before","before-start","before-end","north-east","south-east","south-west","north-west","center"]] - The possible placements for the popper.
     */
    setPosition(button, options = {}) {
        options = {
            ...this.options,
            ...options,
        };
        const container = options.container || this.host;
        const boundary = options.boundary || getBoundary(container);

        const absoluteRect = this.getAbsoluteRect(container);
        const containerRect = this.getRect(container, absoluteRect);
        const buttonRect = this.getRect(button, absoluteRect);
        const boundaryRect = this.getRect(boundary, absoluteRect);

        const offset = options.offset;

        let x, y, left, top, right, bottom;

        const calc = {
            above: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top - containerRect.height - offset, x: "50%", y: "100%" }),
            "above-start": () => ({ left: buttonRect.left, top: buttonRect.top - containerRect.height - offset, x: "0%", y: "100%" }),
            "above-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top - containerRect.height - offset, x: "100%", y: "100%" }),
            after: () => ({ left: buttonRect.right + offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, x: "0%", y: "50%" }),
            "after-start": () => ({ left: buttonRect.right + offset, top: buttonRect.top, x: "0%", y: "0%" }),
            "after-end": () => ({ left: buttonRect.right + offset, top: buttonRect.top + buttonRect.height - containerRect.height, x: "0%", y: "100%" }),
            below: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom + offset, x: "50%", y: "0%" }),
            "below-start": () => ({ left: buttonRect.left, top: buttonRect.bottom + offset, x: "0%", y: "0%" }),
            "below-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom + offset, x: "100%", y: "0%" }),
            before: () => ({ left: buttonRect.left - containerRect.width - offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, x: "100%", y: "50%" }),
            "before-start": () => ({ left: buttonRect.left - containerRect.width - offset, top: buttonRect.top, x: "100%", y: "0%" }),
            "before-end": () => ({ left: buttonRect.left - containerRect.width - offset, top: buttonRect.top + buttonRect.height - containerRect.height, x: "100%", y: "100%" }),
            top: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + offset, x: "50%", y: "0%" }),
            "top-start": () => ({ left: buttonRect.left, top: buttonRect.top + offset, x: "0%", y: "0%" }),
            "top-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top + offset, x: "100%", y: "0%" }),
            right: () => ({ left: buttonRect.right - containerRect.width - offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, x: "0%", y: "50%" }),
            "right-start": () => ({ left: buttonRect.right - containerRect.width - offset, top: buttonRect.top, x: "0%", y: "0%" }),
            "right-end": () => ({ left: buttonRect.right - containerRect.width - offset, top: buttonRect.top + buttonRect.height - containerRect.height, x: "0%", y: "100%" }),
            bottom: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom - containerRect.height - offset, x: "50%", y: "100%" }),
            "bottom-start": () => ({ left: buttonRect.left, top: buttonRect.bottom - containerRect.height - offset, x: "0%", y: "100%" }),
            "bottom-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom - containerRect.height - offset, x: "100%", y: "100%" }),
            left: () => ({ left: buttonRect.left + offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, x: "100%", y: "50%" }),
            "left-start": () => ({ left: buttonRect.left + offset, top: buttonRect.top, x: "100%", y: "0%" }),
            "left-end": () => ({ left: buttonRect.left + offset, top: buttonRect.top + buttonRect.height - containerRect.height, x: "100%", y: "100%" }),
            "north-east": () => ({ left: buttonRect.right + offset, top: buttonRect.top - containerRect.height - offset, x: "0%", y: "100%" }),
            "south-east": () => ({ left: buttonRect.right + offset, top: buttonRect.bottom + offset, x: "0%", y: "0%" }),
            "south-west": () => ({ left: buttonRect.left - containerRect.width - offset, top: buttonRect.bottom + offset, x: "100%", y: "0%" }),
            "north-west": () => ({ left: buttonRect.left - containerRect.width - offset, top: buttonRect.top - containerRect.height - offset, x: "100%", y: "100%" }),
            center: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, x: "50%", y: "50%" }),
        };

        for (const placement of options.placements) {
            ({ left, top, x, y } = calc[placement]());
            right = left + containerRect.width;
            bottom = top + containerRect.height;
            const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;

            if (!exceed) {
                break;
            }
        }

        ({ left, top } = this.adjustMaxBoundaryRect({
            left,
            top,
            right,
            bottom,
            boundaryRect,
            containerRect,
        }));

        container.style.left = `${left}px`;
        container.style.top = `${top}px`;
        container.style.transformOrigin = `${x} ${y}`;
    }
}
export { MDPopperController };

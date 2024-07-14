import { getBoundary } from "../functions/functions";

/**
 * Class representing a MDPopperController.
 */
class MDPopperController {
    /**
     * Create a MDPopperController.
     * @param {HTMLElement} host - The host element.
     * @param {Object} [options={}] - The options for the popper controller.
     * @param {string[]} [options.placements] - The possible placements for the popper.
     * @param {HTMLElement|null} [options.boundary] - The boundary element for the popper.
     * @param {number} [options.offset] - The offset for the popper.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            /* prettier-ignore */
            placements: [
                "top","top-start","top-end",
                "right","right-start","right-end",
                "bottom","bottom-start","bottom-end",
                "left","left-start","left-end",
                "above","above-start","above-end",
                "after","after-start","after-end",
                "below","below-start","below-end",
                "before","before-start","before-end",
                "north-east","south-east","south-west","north-west",
                "center",
            ],
            boundary: null,
            offset: 0,
            ...options,
        };
    }

    /**
     * Get the bounding rect of an element.
     * @param {HTMLElement|Event} element - The element or event to get the rect from.
     * @param {Object} [divRect={left:0,top:0}] - The rect of the div.
     * @returns {Object} The bounding rect of the element.
     */
    getRect(element, divRect = { left: 0, top: 0 }) {
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
        left -= divRect.left;
        top -= divRect.top;
        right = left + width;
        bottom = top + height;
        return { width, height, left, top, right, bottom };
    }

    /**
     * Set the placement of the popper.
     * @param {HTMLElement} button - The button element to position relative to.
     * @param {Object} [options={}] - The options for the placement.
     */
    setPosition(button, options = {}) {
        options = {
            ...this.options,
            ...options,
        };
        const container = this.host;
        const boundary = options.boundary || getBoundary(container);
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.right = "0px";
        div.style.bottom = "0px";
        container.parentElement.insertBefore(div, container.nextElementSibling);
        const divRect = div.getBoundingClientRect();
        div.remove();
        const containerRect = this.getRect(container, divRect);
        const buttonRect = this.getRect(button, divRect);
        const boundaryRect = this.getRect(boundary, divRect);

        let originX, originY, left, top, right, bottom;
        const placements = {
            above: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top - containerRect.height - options.offset, originX: "50%", originY: "100%" }),
            "above-start": () => ({ left: buttonRect.left, top: buttonRect.top - containerRect.height - options.offset, originX: "0%", originY: "100%" }),
            "above-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top - containerRect.height - options.offset, originX: "100%", originY: "100%" }),
            after: () => ({ left: buttonRect.right + options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "0%", originY: "50%" }),
            "after-start": () => ({ left: buttonRect.right + options.offset, top: buttonRect.top, originX: "0%", originY: "0%" }),
            "after-end": () => ({ left: buttonRect.right + options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "0%", originY: "100%" }),
            below: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom + options.offset, originX: "50%", originY: "0%" }),
            "below-start": () => ({ left: buttonRect.left, top: buttonRect.bottom + options.offset, originX: "0%", originY: "0%" }),
            "below-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom + options.offset, originX: "100%", originY: "0%" }),
            before: () => ({ left: buttonRect.left - containerRect.width - options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "100%", originY: "50%" }),
            "before-start": () => ({ left: buttonRect.left - containerRect.width - options.offset, top: buttonRect.top, originX: "100%", originY: "0%" }),
            "before-end": () => ({ left: buttonRect.left - containerRect.width - options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "100%", originY: "100%" }),
            top: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + options.offset, originX: "50%", originY: "0%" }),
            "top-start": () => ({ left: buttonRect.left, top: buttonRect.top + options.offset, originX: "0%", originY: "0%" }),
            "top-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top + options.offset, originX: "100%", originY: "0%" }),
            right: () => ({ left: buttonRect.right - containerRect.width - options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "0%", originY: "50%" }),
            "right-start": () => ({ left: buttonRect.right - containerRect.width - options.offset, top: buttonRect.top, originX: "0%", originY: "0%" }),
            "right-end": () => ({ left: buttonRect.right - containerRect.width - options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "0%", originY: "100%" }),
            bottom: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom - containerRect.height - options.offset, originX: "50%", originY: "100%" }),
            "bottom-start": () => ({ left: buttonRect.left, top: buttonRect.bottom - containerRect.height - options.offset, originX: "0%", originY: "100%" }),
            "bottom-end": () => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom - containerRect.height - options.offset, originX: "100%", originY: "100%" }),
            left: () => ({ left: buttonRect.left + options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "100%", originY: "50%" }),
            "left-start": () => ({ left: buttonRect.left + options.offset, top: buttonRect.top, originX: "100%", originY: "0%" }),
            "left-end": () => ({ left: buttonRect.left + options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "100%", originY: "100%" }),
            "north-east": () => ({ left: buttonRect.right + options.offset, top: buttonRect.top - containerRect.height - options.offset, originX: "0%", originY: "100%" }),
            "south-east": () => ({ left: buttonRect.right + options.offset, top: buttonRect.bottom + options.offset, originX: "0%", originY: "0%" }),
            "south-west": () => ({ left: buttonRect.left - containerRect.width - options.offset, top: buttonRect.bottom + options.offset, originX: "100%", originY: "0%" }),
            "north-west": () => ({ left: buttonRect.left - containerRect.width - options.offset, top: buttonRect.top - containerRect.height - options.offset, originX: "100%", originY: "100%" }),
            center: () => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "50%", originY: "50%" }),
        };

        for (const placement of options.placements) {
            ({ left, top, originX, originY } = placements[placement]());
            right = left + containerRect.width;
            bottom = top + containerRect.height;
            const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;

            if (!exceed) {
                break;
            }
        }

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
        this.host.style.left = `${left}px`;
        this.host.style.top = `${top}px`;
        this.host.style.transformOrigin = `${originX} ${originY}`;
    }
}
export { MDPopperController };

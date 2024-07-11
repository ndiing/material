/**
 * Provides a controller for managing popper-like behavior on elements.
 */
class MDPopperController {
    /**
     * Initializes the popper controller for a host element.
     * @param {HTMLElement} host - Host element to apply popper behavior.
     * @param {Object} options - Configuration options for the popper behavior.
     * @property {string[]} options.placements - List of possible placements for the popper.
     * @property {HTMLElement} options.boundary - Boundary element for the popper positioning.
     * @property {number} options.offset - Offset value for the popper position.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            placements: ["center", "top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "above", "above-start", "above-end", "after", "after-start", "after-end", "below", "below-start", "below-end", "before", "before-start", "before-end", "north-east", "south-east", "south-west", "north-west"],
            boundary: document.documentElement,
            offset: 0,
            ...options,
        };
    }
    async hostConnected() {
        await this.host.updateComplete;
    }
    async hostDisconnected() {
        await this.host.updateComplete;
    }

    /**
     * Sets the placement of the popper relative to a button element.
     * @param {HTMLElement} button - Button element triggering the popper.
     * @param {Object} options - Additional options for setting the popper placement.
     */
    async setPlacement(button, options = {}) {
        options = {
            ...this.options,
            ...options,
        };
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
        let buttonRect;
        if (button instanceof Event) {
            const { clientX: left, clientY: top, width, height } = button;
            buttonRect = { left, top, width, height, right: left + width, bottom: top + height };
        } else {
            buttonRect = button.getBoundingClientRect();
        }
        let containerRect = this.host.getBoundingClientRect();
        let boundaryRect = options.boundary.getBoundingClientRect();
        let left, top, originX, originY;
        let matches;
        for (const placement of options.placements) {
            ({ left, top, originX, originY } = placements[placement]());
            const right = left + containerRect.width;
            const bottom = top + containerRect.height;
            const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
            if (!exceed) {
                matches = 1;
                break;
            }
        }
        // if (!matches) {
        //     ({ left, top, originX, originY } = placements.center());
        // }
        this.host.style.left = `${left}px`;
        this.host.style.top = `${top}px`;
        this.host.style.transformOrigin = `${originX} ${originY}`;
    }

    /**
     * Finds the nearest scrollable parent of the given element.
     * A scrollable parent is an element that can be scrolled, i.e., it has overflow set to auto, scroll, or hidden with non-zero scrollHeight or scrollWidth.
     *
     * @param {Element} element - The element whose scrollable parent needs to be found.
     * @returns {Element|null} - The nearest scrollable parent element, or null if none is found.
     */
    getScrollableParent(element) {
        let parent = element;
        while (parent) {
            parent = parent.parentElement;
            if (!parent) {
                return null;
            }
            const overflowY = window.getComputedStyle(parent).overflowY;
            const overflowX = window.getComputedStyle(parent).overflowX;
            const isScrollableY = (overflowY === "auto" || overflowY === "scroll" || overflowY === "hidden") && parent.scrollHeight > parent.clientHeight;
            const isScrollableX = (overflowX === "auto" || overflowX === "scroll" || overflowX === "hidden") && parent.scrollWidth > parent.clientWidth;
            if (isScrollableY || isScrollableX) {
                return parent;
            }
        }
        return null;
    }
}
export { MDPopperController };

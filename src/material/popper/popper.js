/**
 * Finds the nearest scrollable parent of the given element.
 * A scrollable parent is an element that can be scrolled, i.e., it has overflow set to auto, scroll, or hidden with non-zero scrollHeight or scrollWidth.
 * 
 * @param {Element} element - The element whose scrollable parent needs to be found.
 * @returns {Element|null} - The nearest scrollable parent element, or null if none is found.
 */
function getScrollableParent(element) {
    let parent = element;

    while (parent) {
        parent = parent.parentElement;
        if (!parent) {
            return null;
        }

        const overflowY = window.getComputedStyle(parent).overflowY;
        const overflowX = window.getComputedStyle(parent).overflowX;
        
        const isScrollableY = (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'hidden') && parent.scrollHeight > parent.clientHeight;
        const isScrollableX = (overflowX === 'auto' || overflowX === 'scroll' || overflowX === 'hidden') && parent.scrollWidth > parent.clientWidth;

        if (isScrollableY || isScrollableX) {
            return parent;
        }
    }

    return null;
}


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

    /**
     * Sets the placement of the popper relative to a button element.
     * @param {HTMLElement} button - Button element triggering the popper.
     * @param {Object} options - Additional options for setting the popper placement.
     */
    async setPlacement(button, options = {}) {
        this.button = button;
        this.options = {
            ...this.options,
            ...options,
        };
        this.container = this.host;
        this.boundary = this.options.boundary;

        const placements = {
            above: () => ({ left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2, top: this.buttonRect.top - this.containerRect.height - this.options.offset, originX: "50%", originY: "100%" }),
            "above-start": () => ({ left: this.buttonRect.left, top: this.buttonRect.top - this.containerRect.height - this.options.offset, originX: "0%", originY: "100%" }),
            "above-end": () => ({ left: this.buttonRect.left + this.buttonRect.width - this.containerRect.width, top: this.buttonRect.top - this.containerRect.height - this.options.offset, originX: "100%", originY: "100%" }),
            after: () => ({ left: this.buttonRect.right + this.options.offset, top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, originX: "0%", originY: "50%" }),
            "after-start": () => ({ left: this.buttonRect.right + this.options.offset, top: this.buttonRect.top, originX: "0%", originY: "0%" }),
            "after-end": () => ({ left: this.buttonRect.right + this.options.offset, top: this.buttonRect.top + this.buttonRect.height - this.containerRect.height, originX: "0%", originY: "100%" }),
            below: () => ({ left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2, top: this.buttonRect.bottom + this.options.offset, originX: "50%", originY: "0%" }),
            "below-start": () => ({ left: this.buttonRect.left, top: this.buttonRect.bottom + this.options.offset, originX: "0%", originY: "0%" }),
            "below-end": () => ({ left: this.buttonRect.left + this.buttonRect.width - this.containerRect.width, top: this.buttonRect.bottom + this.options.offset, originX: "100%", originY: "0%" }),
            before: () => ({ left: this.buttonRect.left - this.containerRect.width - this.options.offset, top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, originX: "100%", originY: "50%" }),
            "before-start": () => ({ left: this.buttonRect.left - this.containerRect.width - this.options.offset, top: this.buttonRect.top, originX: "100%", originY: "0%" }),
            "before-end": () => ({ left: this.buttonRect.left - this.containerRect.width - this.options.offset, top: this.buttonRect.top + this.buttonRect.height - this.containerRect.height, originX: "100%", originY: "100%" }),
            top: () => ({ left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2, top: this.buttonRect.top + this.options.offset, originX: "50%", originY: "0%" }),
            "top-start": () => ({ left: this.buttonRect.left, top: this.buttonRect.top + this.options.offset, originX: "0%", originY: "0%" }),
            "top-end": () => ({ left: this.buttonRect.left + this.buttonRect.width - this.containerRect.width, top: this.buttonRect.top + this.options.offset, originX: "100%", originY: "0%" }),
            right: () => ({ left: this.buttonRect.right - this.containerRect.width - this.options.offset, top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, originX: "0%", originY: "50%" }),
            "right-start": () => ({ left: this.buttonRect.right - this.containerRect.width - this.options.offset, top: this.buttonRect.top, originX: "0%", originY: "0%" }),
            "right-end": () => ({ left: this.buttonRect.right - this.containerRect.width - this.options.offset, top: this.buttonRect.top + this.buttonRect.height - this.containerRect.height, originX: "0%", originY: "100%" }),
            bottom: () => ({ left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2, top: this.buttonRect.bottom - this.containerRect.height - this.options.offset, originX: "50%", originY: "100%" }),
            "bottom-start": () => ({ left: this.buttonRect.left, top: this.buttonRect.bottom - this.containerRect.height - this.options.offset, originX: "0%", originY: "100%" }),
            "bottom-end": () => ({ left: this.buttonRect.left + this.buttonRect.width - this.containerRect.width, top: this.buttonRect.bottom - this.containerRect.height - this.options.offset, originX: "100%", originY: "100%" }),
            left: () => ({ left: this.buttonRect.left + this.options.offset, top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, originX: "100%", originY: "50%" }),
            "left-start": () => ({ left: this.buttonRect.left + this.options.offset, top: this.buttonRect.top, originX: "100%", originY: "0%" }),
            "left-end": () => ({ left: this.buttonRect.left + this.options.offset, top: this.buttonRect.top + this.buttonRect.height - this.containerRect.height, originX: "100%", originY: "100%" }),
            "north-east": () => ({ left: this.buttonRect.right + this.options.offset, top: this.buttonRect.top - this.containerRect.height - this.options.offset, originX: "0%", originY: "100%" }),
            "south-east": () => ({ left: this.buttonRect.right + this.options.offset, top: this.buttonRect.bottom + this.options.offset, originX: "0%", originY: "0%" }),
            "south-west": () => ({ left: this.buttonRect.left - this.containerRect.width - this.options.offset, top: this.buttonRect.bottom + this.options.offset, originX: "100%", originY: "0%" }),
            "north-west": () => ({ left: this.buttonRect.left - this.containerRect.width - this.options.offset, top: this.buttonRect.top - this.containerRect.height - this.options.offset, originX: "100%", originY: "100%" }),
            center: () => ({ left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2, top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, originX: "50%", originY: "50%" }),
        };


        if (this.button instanceof Event) {
            const { clientX: left, clientY: top, width, height } = this.button;
            this.buttonRect =  { left, top, width, height, right: left + width, bottom: top + height };
        } else {
            this.buttonRect =  this.button.getBoundingClientRect();
        }

        this.containerRect = this.container.getBoundingClientRect();
        this.boundaryRect = this.boundary.getBoundingClientRect();

        let left, top, originX, originY;
        let matches;

        for (const placement of this.options.placements) {
            ({ left, top, originX, originY } = placements[placement]());
            const right = left + this.containerRect.width;
            const bottom = top + this.containerRect.height;

            const exceed = left < this.boundaryRect.left || top < this.boundaryRect.top || right > this.boundaryRect.right || bottom > this.boundaryRect.bottom;

            if (!exceed) {
                matches = 1;
                break;
            }
        }

        if (!matches) {
            ({ left, top, originX, originY } = placements.center());
        }

        this.container.style.left = `${left}px`;
        this.container.style.top = `${top}px`;
        this.container.style.transformOrigin = `${originX} ${originY}`;

    }

}

export { MDPopperController };

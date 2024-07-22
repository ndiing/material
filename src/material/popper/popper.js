import { getBoundary } from "../functions/functions";

/**
 * {{desc}}
 */
class MDPopperController {
    
    
    /**
     * {{desc}}
     * @param {Any} host - {{desc}}
     * @param {Any} options = {} - {{desc}}
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            ...options,
        };
    }
    
    
    /**
     * {{desc}}
     * @param {Any} element - {{desc}}
     * @param {Any} absoluteRect = { left: 0 - {{desc}}
     * @param {Any} top: 0 } - {{desc}}
     */
    getRect(element, absoluteRect = { left: 0, top: 0 }) {
        let width, height, left, top, right, bottom;
        if (element instanceof Event) {
            const event = element;
            width = event.width;
            height = event.height;
            left = event.clientX;
            top = event.clientY;
        } else {
            ({ width, height, left, top, right, bottom } = element.getBoundingClientRect());
        }
        left -= absoluteRect.left;
        top -= absoluteRect.top;
        right = left + width;
        bottom = top + height;
        return { width, height, left, top, right, bottom };
    }
    
    
    /**
     * {{desc}}
     * @param {Any} container - {{desc}}
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
     * {{desc}}
     * @param {Any} { left - {{desc}}
     * @param {Any} boundaryRect - {{desc}}
     * @param {Any} top - {{desc}}
     * @param {Any} right - {{desc}}
     * @param {Any} containerRect - {{desc}}
     * @param {Any} bottom } - {{desc}}
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
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options = {} - {{desc}}
     */
    setPosition(button, options = {}) {
        options = {
            container: null,
            boundary: null,
            button: null,
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
                "north-east","south-east",
                "south-west","north-west",
                "center",
            ],
            offset: 0,
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

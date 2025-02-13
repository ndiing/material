/**
 * @module Popper
 */

/**
 * @memberof module:Popper
 */
const methods = {
    "top-end": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right - containerRect.width,
        top: triggerRect.top - containerRect.height - offset.bottom,
    }),
    top: ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - (containerRect.width - triggerRect.width) / 2,
        top: triggerRect.top - containerRect.height - offset.bottom,
    }),
    "top-start": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left,
        top: triggerRect.top - containerRect.height - offset.bottom,
    }),
    "top-right": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right + offset.left,
        top: triggerRect.top - containerRect.height - offset.bottom,
    }),
    "right-end": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right + offset.left,
        top: triggerRect.bottom - containerRect.height,
    }),
    right: ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right + offset.left,
        top: triggerRect.top - (containerRect.height - triggerRect.height) / 2,
    }),
    "right-start": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right + offset.left,
        top: triggerRect.top,
    }),
    "bottom-right": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right + offset.left,
        top: triggerRect.bottom + offset.top,
    }),
    "bottom-start": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left,
        top: triggerRect.bottom + offset.top,
    }),
    bottom: ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - (containerRect.width - triggerRect.width) / 2,
        top: triggerRect.bottom + offset.top,
    }),
    "bottom-end": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.right - containerRect.width,
        top: triggerRect.bottom + offset.top,
    }),
    "bottom-left": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - containerRect.width - offset.right,
        top: triggerRect.bottom + offset.top,
    }),
    "left-start": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - containerRect.width - offset.right,
        top: triggerRect.top,
    }),
    left: ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - containerRect.width - offset.right,
        top: triggerRect.top - (containerRect.height - triggerRect.height) / 2,
    }),
    "left-end": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - containerRect.width - offset.right,
        top: triggerRect.bottom - containerRect.height,
    }),
    "top-left": ({ containerRect, triggerRect, offset } = {}) => ({
        left: triggerRect.left - containerRect.width - offset.right,
        top: triggerRect.top - containerRect.height - offset.bottom,
    }),
};

/**
 * @memberof module:Popper
 * @param {String} offset
 */
function parseOffset(offset) {
    let [top = 0, right = 0, bottom = 0, left = 0] = String(offset).split(" ").map(Number);
    return { top, right, bottom, left };
}

/**
 * @typedef {Object} PopperShowOptions
 * @property {HTMLElement} [container]
 * @property {HTMLElement} [trigger]
 * @property {HTMLElement} [boundary=closestScrollableElement(container)]
 * @property {String} [offset='0']
 * @property {Array} [placements=["top-end", "top", "top-start", "top-right", "right-end", "right", "right-start", "bottom-right", "bottom-start", "bottom", "bottom-end", "bottom-left", "left-start", "left", "left-end", "top-left"]]
 */

/**
 * @memberof module:Popper
 * @param {PopperShowOptions} [options={}]
 */
function setPosition(options = {}) {
    let { container = undefined, trigger = undefined, boundary, offset = "0", placements = ["top-end", "top", "top-start", "top-right", "right-end", "right", "right-start", "bottom-right", "bottom-start", "bottom", "bottom-end", "bottom-left", "left-start", "left", "left-end", "top-left"] } = options;
    boundary = boundary || closestScrollableElement(container);

    offset = parseOffset(offset);

    let left;
    let top;
    for (let i = 0; i < placements.length; i++) {
        const method = methods[placements[i]];
        const containerRect = container.getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();
        const boundaryRect = boundary.getBoundingClientRect();
        ({ left, top } = method({ triggerRect, containerRect, offset }));
        const right = left + containerRect.width;
        const bottom = top + containerRect.height;
        const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
        if (!exceed) break;
    }
    container.style.setProperty("left", left + "px");
    container.style.setProperty("top", top + "px");
}

/**
 * @memberof module:Popper
 * @param {Any} [element]
 */
function closestScrollableElement(element) {
    let current = element;
    while (current) {
        const style = window.getComputedStyle(current);
        const isScrollable = style.overflow === "auto" || style.overflow === "scroll" || style.overflowY === "auto" || style.overflowY === "scroll";
        // || current.scrollHeight > current.clientHeight;
        if (isScrollable) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}

export { methods, setPosition, parseOffset, closestScrollableElement };

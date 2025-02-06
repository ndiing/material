/**
 */
class Popper {
    /**
     * @param {String} [host]
     * @param {Object} [options={}]
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = options;
        this.init();
    }

    /**
     */
    init() {}
    destroy() {}
    methods = {
        "top-end": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right - containerRect.width, top: triggerRect.top - containerRect.height - offset }),
        top: ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, top: triggerRect.top - containerRect.height - offset }),
        "top-start": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left, top: triggerRect.top - containerRect.height - offset }),
        "top-right": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right + offset, top: triggerRect.top - containerRect.height - offset }),
        "right-end": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right + offset, top: triggerRect.bottom - containerRect.height }),
        right: ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right + offset, top: triggerRect.top - (containerRect.height - triggerRect.height) / 2 }),
        "right-start": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right + offset, top: triggerRect.top }),
        "bottom-right": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right + offset, top: triggerRect.bottom + offset }),
        "bottom-start": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left, top: triggerRect.bottom + offset }),
        bottom: ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, top: triggerRect.bottom + offset }),
        "bottom-end": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.right - containerRect.width, top: triggerRect.bottom + offset }),
        "bottom-left": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - containerRect.width - offset, top: triggerRect.bottom + offset }),
        "left-start": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - containerRect.width - offset, top: triggerRect.top }),
        left: ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - containerRect.width - offset, top: triggerRect.top - (containerRect.height - triggerRect.height) / 2 }),
        "left-end": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - containerRect.width - offset, top: triggerRect.bottom - containerRect.height }),
        "top-left": ({ containerRect, triggerRect, offset } = {}) => ({ left: triggerRect.left - containerRect.width - offset, top: triggerRect.top - containerRect.height - offset }),
    };

    /**
     * @param {Object} [options={}]
     */
    show(options = {}) {
        const { container = undefined, trigger = undefined, boundary = this.closestScrollable(container), offset = 0, placements = ["top-end", "top", "top-start", "top-right", "right-end", "right", "right-start", "bottom-right", "bottom-start", "bottom", "bottom-end", "bottom-left", "left-start", "left", "left-end", "top-left"] } = options;
        let left;
        let top;
        for (let i = 0; i < placements.length; i++) {
            const method = this.methods[placements[i]];
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
     * @param {String} [element]
     */
    closestScrollable(element) {
        let current = element;
        while (current) {
            const style = window.getComputedStyle(current);
            const isScrollable = style.overflow === "auto" || style.overflow === "scroll" || style.overflowY === "auto" || style.overflowY === "scroll" || current.scrollHeight > current.clientHeight;
            if (isScrollable) {
                return current;
            }
            current = current.parentElement;
        }
        return null;
    }
}
export { Popper };

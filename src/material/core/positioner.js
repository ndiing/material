const STRATEGIES = {
    "above-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left, x: 0, y: 100 }),
    above: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 100 }),
    "above-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.right - containerRect.width, x: 100, y: 100 }),

    "after-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.right + offset.left, x: 0, y: 0 }),
    after: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.right + offset.left, x: 0, y: 50 }),
    "after-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.right + offset.left, x: 0, y: 100 }),

    "below-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left, x: 0, y: 0 }),
    below: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 0 }),
    "below-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 0 }),

    "before-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 0 }),
    before: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 50 }),
    "before-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 100 }),

    "top-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.left, x: 0, y: 0 }),
    top: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 0 }),
    "top-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 0 }),

    "right-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 0 }),
    right: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 50 }),
    "right-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 100 }),

    "bottom-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.left, x: 0, y: 100 }),
    bottom: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 100 }),
    "bottom-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 100 }),

    "left-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.left + offset.left, x: 100, y: 0 }),
    left: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left + offset.left, x: 100, y: 50 }),
    "left-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.left + offset.left, x: 100, y: 100 }),

    "north-east": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.right + offset.left, x: 0, y: 100 }),
    "south-east": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.right + offset.left, x: 0, y: 0 }),
    "south-west": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 0 }),
    "north-west": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 100 }),

    center: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 50 }),
};

const PLACEMENTS = Object.keys(STRATEGIES);

function _getStrategy(placement) {
    return STRATEGIES[placement];
}

function _getOffset(offset = 0) {
    const arr = Array.isArray(offset) ? offset : [offset];
    const top = arr[0] ?? 0;
    const right = arr[1] ?? arr[0] ?? 0;
    const bottom = arr[2] ?? arr[0] ?? 0;
    const left = arr[3] ?? arr[1] ?? arr[0] ?? 0;
    return { top, right, bottom, left };
}

function _getBoundary(element) {
    let parentElement = element;
    while (parentElement) {
        const style = window.getComputedStyle(parentElement);
        if (/(auto|scroll)/.test(`${style.overflow} ${style.overflowX} ${style.overflowY}`)) {
            return parentElement;
        }
        parentElement = parentElement.parentElement;
    }
    return document.body;
}

function _getRect(element) {
    if (!element) return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0 };

    if ("clientX" in element && "clientY" in element) {
        const width = element.width ?? 0;
        const height = element.height ?? 0;
        const clientX = element.clientX ?? 0;
        const clientY = element.clientY ?? 0;
        return {
            width,
            height,
            left: clientX,
            top: clientY,
            right: clientX + width,
            bottom: clientY + height,
            x: element.x ?? clientX,
            y: element.y ?? clientY,
        };
    }
    return element.getBoundingClientRect();
}

/**
 * Set position of container relative to trigger
 * @param {HTMLElement|Event} trigger - Trigger element or event
 * @param {HTMLElement} container - Element to position
 * @param {Object} options - Positioning options
 * @param {string|string[]} options.placement - Single placement or array of fallbacks
 * @param {number|number[]} options.offset - Offset in pixels
 */
function setPosition(trigger, container, options = {}) {
    options = {
        placement: Object.keys(STRATEGIES),
        offset: 0,
        ...options,
    };
    const boundary = _getBoundary(container);

    const triggerRect = _getRect(trigger);
    const containerRect = _getRect(container);
    const boundaryRect = _getRect(boundary);

    const offset = _getOffset(options.offset);

    let placement, top, right, bottom, left, x, y;

    const placements = Array.isArray(options.placement) ? options.placement : [options.placement];
    for (let index = 0; index < placements.length; index++) {
        placement = placements[index];
        const strategy = _getStrategy(placement);
        const position = strategy({ triggerRect, containerRect, offset });

        top = position.top;
        right = position.left + containerRect.width;
        bottom = position.top + containerRect.height;
        left = position.left;
        x = position.x;
        y = position.y;

        const isExceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
        if (!isExceed) {
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

    container.style.setProperty("top", `${top}px`);
    container.style.setProperty("left", `${left}px`);
    container.style.setProperty("transform-origin", `${x}% ${y}%`);

    return { placement, top, right, bottom, left, x, y };
}

export { PLACEMENTS, setPosition };

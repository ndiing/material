import { closestScrollableElement } from "../util/util";

/**
 * @param {String} [placement]
 * @param {Object} [options={}]
 */
function calculatePosition(placement, options = {}) {
    const { containerRect, triggerRect, offset } = options;
    const { left, top, right, bottom, width, height } = triggerRect;
    const cWidth = containerRect.width;
    const cHeight = containerRect.height;
    const positions = {
        "top-end": () => ({ left: right - cWidth, top: top - cHeight - offset.bottom }),
        top: () => ({ left: left - (cWidth - width) / 2, top: top - cHeight - offset.bottom }),
        "top-start": () => ({ left, top: top - cHeight - offset.bottom }),
        "top-right": () => ({ left: right + offset.left, top: top - cHeight - offset.bottom }),
        "right-end": () => ({ left: right + offset.left, top: bottom - cHeight }),
        right: () => ({ left: right + offset.left, top: top - (cHeight - height) / 2 }),
        "right-start": () => ({ left: right + offset.left, top }),
        "bottom-right": () => ({ left: right + offset.left, top: bottom + offset.top }),
        "bottom-start": () => ({ left, top: bottom + offset.top }),
        bottom: () => ({ left: left - (cWidth - width) / 2, top: bottom + offset.top }),
        "bottom-end": () => ({ left: right - cWidth, top: bottom + offset.top }),
        "bottom-left": () => ({ left: left - cWidth - offset.right, top: bottom + offset.top }),
        "left-start": () => ({ left: left - cWidth - offset.right, top }),
        left: () => ({ left: left - cWidth - offset.right, top: top - (cHeight - height) / 2 }),
        "left-end": () => ({ left: left - cWidth - offset.right, top: bottom - cHeight }),
        "top-left": () => ({ left: left - cWidth - offset.right, top: top - cHeight - offset.bottom }),
    };
    return (positions[placement] || positions.top)();
}

/**
 * @param {String} [offset]
 */
function parseOffset(offset) {
    let [top = 0, right, bottom, left] = String(offset).split(" ").map(Number);
    right = right ?? top;
    bottom = bottom ?? top;
    left = left ?? right;
    return { top, right, bottom, left };
}

/**
 * @param {Object} [options={}]
 */
function setPosition(options = {}) {
    const { container, trigger, boundary, offset = "0", placements } = options;
    const boundaryEl = boundary || closestScrollableElement(container);
    const parsedOffset = parseOffset(offset);
    const containerRect = container.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const boundaryRect = boundaryEl.getBoundingClientRect();
    let bestLeft = null,
        bestTop = null,
        minOverflow = Infinity;
    for (const placement of placements) {
        const { left, top } = calculatePosition(placement, { triggerRect, containerRect, offset: parsedOffset });
        const right = left + containerRect.width;
        const bottom = top + containerRect.height;
        const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
        const totalOverflow = Math.max(boundaryRect.left - left, 0) + Math.max(top - boundaryRect.top, 0) + Math.max(right - boundaryRect.right, 0) + Math.max(bottom - boundaryRect.bottom, 0);
        if (!exceed) {
            bestLeft = left;
            bestTop = top;
            break;
        } else if (totalOverflow < minOverflow) {
            minOverflow = totalOverflow;
            bestLeft = left;
            bestTop = top;
        }
    }
    bestLeft = Math.max(boundaryRect.left, Math.min(bestLeft, boundaryRect.right - containerRect.width));
    bestTop = Math.max(boundaryRect.top, Math.min(bestTop, boundaryRect.bottom - containerRect.height));
    container.style.left = `${bestLeft}px`;
    container.style.top = `${bestTop}px`;
}
export { calculatePosition, setPosition, parseOffset };

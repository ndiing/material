/**
 * @namespace Popper
*/

/**
 * Menghitung posisi elemen berdasarkan peletakan (placement) yang diberikan.
 * @memberof Popper
 * @param {string} placement - Peletakan elemen relatif terhadap elemen pemicu (trigger).
 * @param {Object} options - Opsi posisi elemen.
 * @param {DOMRect} options.containerRect - Dimensi elemen kontainer.
 * @param {DOMRect} options.triggerRect - Dimensi elemen pemicu (trigger).
 * @param {Object} options.offset - Jarak offset dalam bentuk objek { top, right, bottom, left }.
 * @returns {Object} Posisi { left, top } dari elemen.
 */
function calculatePosition(placement, { containerRect, triggerRect, offset }) {
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
 * Menguraikan string offset menjadi objek dengan nilai { top, right, bottom, left }.
 * @memberof Popper
 * @param {string|number} offset - Nilai offset dalam format CSS (misal: "10 15 5 20").
 * @returns {Object} Objek offset dalam bentuk { top, right, bottom, left }.
 */
function parseOffset(offset) {
    let [top = 0, right, bottom, left] = String(offset).split(" ").map(Number);
    right = right ?? top;
    bottom = bottom ?? top;
    left = left ?? right;
    return { top, right, bottom, left };
}

/**
 * Menetapkan posisi elemen berdasarkan berbagai opsi dan batasan.
 * @memberof Popper
 * @param {Object} options - Konfigurasi posisi.
 * @param {HTMLElement} options.container - Elemen yang akan diposisikan.
 * @param {HTMLElement} options.trigger - Elemen pemicu untuk posisi elemen.
 * @param {HTMLElement} [options.boundary] - Elemen batas untuk membatasi posisi.
 * @param {string|number} [options.offset="0"] - Offset dalam format CSS.
 * @param {string[]} options.placements - Daftar kemungkinan peletakan (misalnya: ["top", "bottom"]).
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

/**
 * Menemukan elemen terdekat yang memiliki overflow dapat discroll.
 * @memberof Popper
 * @param {HTMLElement} element - Elemen awal untuk pencarian.
 * @returns {HTMLElement} Elemen yang memiliki overflow scroll, atau <html> / <body> jika tidak ditemukan.
 */
function closestScrollableElement(element) {
    let current = element;
    while (current) {
        const style = window.getComputedStyle(current);
        if (/(auto|scroll)/.test(style.overflow + style.overflowY)) return current;
        current = current.parentElement;
    }
    return document.documentElement || document.body;
}
export { calculatePosition, setPosition, parseOffset, closestScrollableElement };

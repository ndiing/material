import { MDCDK } from "./cdk";

/**
 * Mewakili fungsionalitas popover berdasarkan komponen Material Design.
 * @extends MDCDK
 */
class MDPopover extends MDCDK {
    /**
     * Membuat sebuah instance dari MDPopover.
     * @param {HTMLElement} root - Elemen root untuk popover.
     * @param {Object} [options={}] - Opsi tambahan untuk popover.
     * @param {string} [options.placement="bottom-start"] - Penempatan dari popover.
     * @param {number} [options.offset=0] - Nilai offset untuk penempatan popover.
     * @param {boolean} [options.shift=false] - Apakah untuk memindahkan popover agar tetap dalam viewport.
     */
    constructor(root, options = {}) {
        super(root, {
            placement: "bottom-start",
            offset: 0,
            shift: false,
            ...options,
        });
    }

    /**
     * Menginisialisasi popover.
     */
    init() {
        this.root.classList.add("md-popover");

        this.setPlacement();
    }

    /**
     * Menghancurkan popover.
     */
    destroy() {
        this.root.classList.remove("md-popover");
    }

    /**
     * Mengatur penempatan dari popover berdasarkan opsi yang ditentukan.
     */
    setPlacement() {
        const placement = this.getPlacement(this.options.placement);
        this.root.style.left = placement.left + "px";
        this.root.style.top = placement.top + "px";
    }

    /**
     * Menghitung penempatan dari popover berdasarkan opsi penempatan yang ditentukan.
     * @param {string} placement - Opsi penempatan untuk popover.
     * @returns {{left: number, top: number}} Mengembalikan objek dengan posisi left dan top untuk popover.
     */
    getPlacement(placement) {
        const rootRect = this.root.getBoundingClientRect();
        const triggerRect = this.options.trigger.getBoundingClientRect();
        const boundaryRect = document.documentElement.getBoundingClientRect();

        let left;
        let top;

        if (placement === "top-end") {
            left = triggerRect.right - rootRect.width;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "top") {
            left = triggerRect.left - (rootRect.width - triggerRect.width) / 2;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "top-start") {
            left = triggerRect.left;
            top = triggerRect.top - rootRect.height - this.options.offset;
        } else if (placement === "right-end") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.bottom - rootRect.height;
        } else if (placement === "right") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.top - (rootRect.height - triggerRect.height) / 2;
        } else if (placement === "right-start") {
            left = triggerRect.right + this.options.offset;
            top = triggerRect.top;
        } else if (placement === "bottom-start") {
            left = triggerRect.left;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "bottom") {
            left = triggerRect.left - (rootRect.width - triggerRect.width) / 2;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "bottom-end") {
            left = triggerRect.right - rootRect.width;
            top = triggerRect.bottom + this.options.offset;
        } else if (placement === "left-start") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.top;
        } else if (placement === "left") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.top - (rootRect.height - triggerRect.height) / 2;
        } else if (placement === "left-end") {
            left = triggerRect.left - rootRect.width - this.options.offset;
            top = triggerRect.bottom - rootRect.height;
        }

        // left += window.scrollX;
        // top += window.scrollY;

        if (this.options.shift) {
            if (left <= boundaryRect.left) left = boundaryRect.left + this.options.offset;
            else if (left >= boundaryRect.right - rootRect.width) left = boundaryRect.right - rootRect.width - this.options.offset;
            if (top <= boundaryRect.top) top = boundaryRect.top + this.options.offset;
            else if (top >= boundaryRect.bottom - rootRect.height) top = boundaryRect.bottom - rootRect.height - this.options.offset;
        }

        return { left, top };
    }
}

export { MDPopover };

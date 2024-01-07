import { MDCDK } from "./cdk";

/**
 * Mewakili fungsionalitas gulir virtual menggunakan komponen Material Design.
 * @extends MDCDK
 */
class MDVirtualScroll extends MDCDK {
     /**
     * @typedef {Object} Scroll - Mewakili detail dari peristiwa gulir.
     * @property {number} scrollbarHeight - Total tinggi dari konten yang dapat digulir.
     * @property {number} start - Indeks dari node yang pertama terlihat di dalam viewport.
     * @property {number} limit - Jumlah node yang terlihat di dalam viewport.
     * @property {number} translateY - Perpindahan dari node yang pertama terlihat dari bagian atas viewport.
     */

    /**
     * Membuat instance dari MDVirtualScroll.
     * @param {HTMLElement} root - Elemen root untuk menerapkan gulir virtual.
     * @param {Object} [options={}] - Opsi tambahan untuk gulir virtual.
     * @param {number} [options.total=0] - Jumlah total item.
     * @param {number} [options.contentHeight=48] - Tinggi setiap item.
     * @param {number} [options.threshold=2] - Ambang untuk memuat pra-item.
     * @fires root#onScroll
     */
    constructor(root, options = {}) {
        super(root, options);
    }

    /**
     * Menginisialisasi instance MDVirtualScroll.
     * Mengikat penangan peristiwa gulir dan menyiapkan parameter yang diperlukan.
     */
    init() {
        this.handleScroll = this.handleScroll.bind(this);
        this.on("scroll", this.handleScroll);
    }

    /**
     * Menghancurkan instance MDVirtualScroll.
     * Menghapus penyetel peristiwa gulir.
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Menangani peristiwa gulir dan menghitung parameter untuk gulir virtual.
     * Memancarkan peristiwa "onScroll" dengan parameter yang dihitung.
     * @private
     * @fires MDVirtualScroll#onScroll
     */
    handleScroll() {
        const total = this.options.total || 0;
        const contentHeight = this.options.contentHeight || 48;
        const scrollTop = this.root.scrollTop;
        const threshold = this.options.threshold || 2;
        const viewportHeight = this.root.clientHeight;

        const scrollbarHeight = total * contentHeight;

        let start = Math.floor(scrollTop / contentHeight) - threshold;
        start = Math.max(0, start);

        let limit = Math.ceil(viewportHeight / contentHeight) + 2 * threshold;
        limit = Math.min(total - start, limit);

        const translateY = start * contentHeight;

        /**
         * @type {Scroll}
         */
        const detail = {
            scrollbarHeight,
            start,
            limit,
            translateY,
        };

        this.emit("onScroll", detail);
    }
}

export { MDVirtualScroll };

/**
 * Kelas VirtualScroll digunakan untuk menangani scrolling virtual,
 * mengoptimalkan rendering elemen dalam daftar panjang dengan hanya menampilkan elemen yang terlihat.
 *
 * @fires VirtualScroll#onVirtualScroll - Dipicu saat daftar bergulir, memberikan informasi tentang item yang terlihat.
 */
class VirtualScroll {
    /**
     * Membuat instance VirtualScroll.
     *
     * @param {HTMLElement} host - Elemen utama yang berisi daftar scroll.
     * @param {Object} [options] - Opsi konfigurasi.
     * @param {number} [options.total] - Jumlah total item dalam daftar.
     * @param {number} [options.rowHeight=56] - Tinggi setiap baris dalam daftar (default: 56px).
     * @param {number} [options.nodePadding=2] - Jumlah padding node di luar viewport (default: 2).
     * @param {number} [options.viewportHeight] - Tinggi viewport jika ditentukan, default ke `clientHeight` host.
     * @param {string} [options.track=".md-virtual-scroll__track"] - Selector elemen track (default: `.md-virtual-scroll__track`).
     * @param {string} [options.item=".md-virtual-scroll__item"] - Selector item dalam daftar (default: `.md-virtual-scroll__item`).
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            total: undefined,
            rowHeight: 56,
            nodePadding: 2,
            viewportHeight: undefined,
            track: ".md-virtual-scroll__track",
            item: ".md-virtual-scroll__item",
            ...options,
        };
        this.init();
    }

    /**
     * Memperbarui opsi VirtualScroll dan memperbarui tampilan daftar.
     *
     * @param {Object} [options={}] - Opsi baru untuk diperbarui.
     */
    load(options = {}) {
        for (const name in options) {
            const value = options[name];
            this.options[name] = value;
        }
        this.handleScroll();
    }

    /**
     * Menangani event scroll dan memperbarui tampilan item yang terlihat.
     *
     * @private
     * @param {Event} [event] - Event scroll (opsional).
     */
    handleScroll(event) {
        const total = this.options.total;
        const rowHeight = this.options.rowHeight;
        const scrollTop = this.host.scrollTop;
        const nodePadding = this.options.nodePadding;
        const viewportHeight = this.options.viewportHeight ?? this.host.clientHeight;
        const trackHeight = total * rowHeight;
        let start = Math.floor(scrollTop / rowHeight) - nodePadding;
        start = Math.max(0, start);
        let end = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
        end = Math.min(total - start, end);
        end = end + start;
        const translateY = start * rowHeight;
        this.track.style.setProperty("height", trackHeight + "px");
        this.host.querySelectorAll(this.options.item).forEach((item) => {
            item.style.setProperty("transform", "translate3d(0," + translateY + "px,0)");
        });
        this.emit("onVirtualScroll", {
            start,
            end,
        });
    }

    /**
     * Memicu event kustom.
     *
     * @private
     * @param {string} type - Nama event yang akan dipicu.
     * @param {Object} detail - Detail tambahan yang akan dikirim dalam event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     * Menginisialisasi VirtualScroll dengan menambahkan event listener dan memulai perhitungan awal.
     */
    init() {
        this.host.classList.add("md-virtual-scroll");
        this.track = this.host.querySelector(this.options.track);
        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }

    /**
     * Menghapus VirtualScroll dengan membersihkan event listener dan referensi elemen.
     */
    destroy() {
        this.host.classList.remove("md-virtual-scroll");
        this.host.removeEventListener("scroll", this.handleScroll);
        this.track = null;
        this.handleScroll = null;
    }
}
export { VirtualScroll };

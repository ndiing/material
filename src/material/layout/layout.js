/**
 * Kelas Layout digunakan untuk mendeteksi dan merespons perubahan ukuran layar
 * berdasarkan media query yang telah ditentukan.
 */
class Layout {
    /**
     * Daftar kondisi media query untuk menentukan mode tata letak.
     * @type {Array<{ name: string, media: MediaQueryList }>}
     */
    items = [
        { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
        { name: "medium", media: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
        { name: "compact", media: window.matchMedia("(max-width: 599px)") },
    ];

    /**
     * Membuat instance Layout.
     * @param {Function} callback - Fungsi yang akan dipanggil saat perubahan tata letak terjadi.
     */
    constructor(callback) {
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Menangani perubahan media query.
     * @private
     */
    handleChange() {
        this.destroy();
        this.init();
    }

    /**
     * Menginisialisasi listener untuk mendeteksi perubahan media query.
     */
    init() {
        this.item = this.items.find((item) => item.media.matches);
        this.callback(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    }

    /**
     * Menghapus listener media query yang sedang aktif.
     */
    destroy() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    }
}
export { Layout };

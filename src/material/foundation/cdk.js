/**
 * Mewakili sebuah Custom Development Kit untuk MD Framework.
 */
class MDCDK {
    /**
     * Membuat sebuah instance dari MDCDK.
     * @param {HTMLElement} root - Elemen HTML root untuk mengikat event kepadanya.
     * @param {Object} [options={}] - Opsi tambahan untuk MDCDK.
     */
    constructor(root, options = {}) {
        this.root = root;
        this.options = options;

        this.init();
    }

    /**
     * Menginisialisasi instance MDCDK.
     */
    init() {
        // Kode inisialisasi diletakkan di sini
        // Contoh: this.on('click', listener)
    }

    /**
     * Menghancurkan instance MDCDK.
     */
    destroy() {
        // Kode penghancuran diletakkan di sini
        // Contoh: this.off('click', listener)
    }

    /**
     * Melampirkan event listener ke elemen root.
     * @param {string} type - Jenis event yang akan didengarkan.
     * @param {EventListenerOrEventListenerObject} listener - Fungsi event listener yang akan dipanggil ketika event terjadi.
     */
    on(type, listener) {
        this.root.addEventListener(type, listener);
    }

    /**
     * Menghapus event listener dari elemen root.
     * @param {string} type - Jenis event untuk menghapus event listener.
     * @param {EventListenerOrEventListenerObject} listener - Fungsi event listener yang akan dihapus.
     */
    off(type, listener) {
        this.root.removeEventListener(type, listener);
    }

    /**
     * Memancarkan sebuah event kustom dari elemen root.
     * @param {string} type - Jenis dari event kustom yang akan di-dispatch.
     * @param {any} detail - Detail opsional yang akan disertakan dalam event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.root.dispatchEvent(event);
    }
}

export { MDCDK };

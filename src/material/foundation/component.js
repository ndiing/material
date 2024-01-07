const { LitElement } = require("lit");

/**
 * Mewakili sebuah komponen untuk framework MD.
 * Memperluas kelas LitElement.
 */
class MDComponent extends LitElement {
    /**
     * Melakukan override terhadap metode pembuatan root render default dari LitElement.
     * @private
     * @returns {this} - Instance dari komponen.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Melampirkan event listener ke komponen.
     * @param {string} type - Jenis dari event yang akan didengarkan.
     * @param {EventListenerOrEventListenerObject} listener - Fungsi event listener yang akan dipanggil ketika event terjadi.
     */
    on(type, listener) {
        this.addEventListener(type, listener);
    }

    /**
     * Menghapus event listener dari komponen.
     * @param {string} type - Jenis dari event untuk menghapus event listener.
     * @param {EventListenerOrEventListenerObject} listener - Fungsi event listener yang akan dihapus.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Memancarkan sebuah event kustom dari komponen.
     * @param {string} type - Jenis dari event kustom yang akan di-dispatch.
     * @param {any} detail - Detail opsional yang akan disertakan dalam event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }
}

export { MDComponent };

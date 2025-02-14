import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * Kelas dasar untuk komponen berbasis Lit yang mendukung perubahan lokal.
 *
 * @extends LitElement
 */
class MdComponent extends LitElement {
    /**
     * Membuat instance MdComponent dan mengaktifkan pembaruan saat bahasa berubah.
     */
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     * Menggunakan shadow DOM standar dari LitElement.
     *
     * @private
     * @returns {MdComponent} - Mengembalikan instance komponen.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Memicu event kustom dari komponen.
     *
     * @private
     * @param {string} type - Nama event yang akan dipicu.
     * @param {Object} [detail] - Detail tambahan yang dikirim dalam event.
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
export { MdComponent };

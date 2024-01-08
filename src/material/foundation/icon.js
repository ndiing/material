import { html, nothing } from "lit";
import { MDComponent } from "./component";

/**
 * Kelas untuk komponen ikon kustom.
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    /**
     * Mendefinisikan properti-properti komponen.
     * @returns {Object} Properti-properti komponen.
     */
    static get properties() {
        return {
            // Definisikan properti-properti komponen jika ada.
        };
    }

    constructor() {
        super();
    }

    /**
     * Mengembalikan tampilan komponen ikon.
     * @returns {TemplateResult} Tampilan komponen ikon.
     */
    render() {
        // prettier-ignore
        return html``
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-icon');
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Dipanggil ketika komponen telah diperbarui untuk pertama kalinya.
     * @param {Map} changedProperties Properti yang berubah.
     */
    firstUpdated(changedProperties) {
        // Lakukan sesuatu setelah komponen diperbarui untuk pertama kalinya.
    }

    /**
     * Dipanggil ketika komponen telah diperbarui.
     * @param {Map} changedProperties Properti yang berubah.
     */
    updated(changedProperties) {
        // Lakukan sesuatu setelah komponen diperbarui.
    }
}

customElements.define('md-icon', MDIconComponent);

export { MDIconComponent };

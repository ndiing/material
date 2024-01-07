import { html } from "lit";
import { MDComponent } from "../foundation/component";

/**
 * Komponen tombol segmen kustom yang memperluas MDComponent.
 * @fires MDSegmentedButtonComponent#onButtonClick - Menunjukkan bahwa tombol dalam komponen segmen telah diklik.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * Properti untuk MDSegmentedButtonComponent.
     * @property {Array} data - Array data yang digunakan untuk mengisi tombol segmen.
     * @property {string} type - Jenis tombol segmen ("single-select" atau "multi-select").
     */
    static get properties() {
        return {
            data: { type: Array },
            type: { type: String },
        };
    }

    /**
     * Konstruktor untuk MDSegmentedButtonComponent.
     */
    constructor() {
        super();
        this.data = [];
        this.type = "single-select";
    }

    /**
     * Merender MDSegmentedButtonComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.data.map(doc => html`
                <md-button
                    .doc="${doc}"
                    .icon="${doc.icon}"
                    .label="${doc.label}"
                    .type="${doc.type}"
                    .activated="${doc.activated}"
                    .appearance="${doc.appearance}"
                    @click="${this.handleButtonClick}"
                ></md-button>
            `)}
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen tombol segmen.
     * @returns {Promise<void>} Sebuah Promise yang diselesaikan ketika inisialisasi selesai.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        // Logika pembersihan tambahan dapat ditambahkan di sini jika diperlukan.
    }

    /**
     * Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    firstUpdated(changedProperties) {}

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    updated(changedProperties) {
        // Logika untuk menangani pembaruan properti komponen dapat ditambahkan di sini.
    }

    /**
     * Menangani acara klik pada tombol segmen.
     * @param {Event} event - Acara klik.
     */
    handleButtonClick(event) {
        const button = event.currentTarget;
        if (this.type === "multi-select") {
            button.doc.activated = !button.doc.activated;
        } else {
            this.data.forEach((doc) => (doc.activated = doc === button.doc));
        }
        this.requestUpdate();
        this.emit('onButtonClick',{event,button})
    }
}

/**
 * Mendefinisikan elemen kustom "md-segmented-button".
 */
customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };

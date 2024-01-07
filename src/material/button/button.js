import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen tombol kustom yang memperluas MDComponent.
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properti untuk MDButtonComponent.
     * @property {string} icon - Ikon yang ditampilkan di dalam tombol.
     * @property {string} label - Label atau teks yang ditampilkan di dalam tombol.
     * @property {string} type - Tipe dari tombol (misalnya, "button", "submit", "reset").
     * @property {string} appearance - Gaya penampilan dari tombol ("elevated", "filled", "tonal", "outlined").
     * @property {boolean} activated - Mewakili apakah tombol telah diaktifkan atau tidak.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            appearance: { type: String },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Konstruktor untuk MDButtonComponent.
     */
    constructor() {
        super();
        // Tipe tombol default
        this.type = "button";
    }

    /**
     * Mengambil elemen tombol asli.
     * @returns {HTMLButtonElement} Elemen tombol asli.
     */
    get native() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Merender MDButtonComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
            <button class="md-button__native" .type="${this.type}"></button>
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen tombol dan efek riaknya.
     * @returns {Promise<void>} Promise yang menyelesaikan inisialisasi.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }
    
    async firstUpdated() {
        await this.updateComplete;
        // Inisialisasi efek riak untuk tombol
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.
     * Memperbarui gaya tombol berdasarkan perubahan properti.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    updated(changedProperties) {
        if (changedProperties.has("appearance")) {
            const validAppearances = ["elevated", "filled", "tonal", "outlined"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-button--${validAppearance}`);
                });
                this.classList.add(`md-button--${appearance}`);
            }
        }
    }
}

// Tentukan elemen kustom "md-button"
customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };

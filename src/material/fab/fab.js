import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen fab kustom yang memperluas MDComponent.
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * Properti untuk MDFabComponent.
     * @property {string} icon - Ikon yang ditampilkan di dalam fab.
     * @property {string} label - Label atau teks yang ditampilkan di dalam fab.
     * @property {string} type - Tipe dari fab (misalnya, "button", "submit", "reset").
     * @property {string} appearance - Gaya penampilan dari fab ("extended").
     * @property {string} size - Gaya ukuran dari fab ("small", "large").
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            appearance: { type: String },
            size: { type: String },
        };
    }

    /**
     * Konstruktor untuk MDFabComponent.
     */
    constructor() {
        super();
        // Tipe fab default
        this.type = "button";
    }

    /**
     * Mengambil elemen fab asli.
     * @returns {HTMLElement} Elemen fab asli.
     */
    get native() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Merender MDFabComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
            <button class="md-fab__native" .type="${this.type}"></button>
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen fab dan efek riaknya.
     * @returns {Promise<void>} Promise yang menyelesaikan inisialisasi.
     */
     connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
        
    }

    async firstUpdated(){
        await this.updateComplete;
        // Inisialisasi efek riak untuk fab
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.
     * Memperbarui gaya fab berdasarkan perubahan properti.
     * @param {Map} changedProperties - Properti yang telah berubah.
     */
    updated(changedProperties) {
        if (changedProperties.has("appearance")) {
            const validAppearances = ["extended"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-fab--${validAppearance}`);
                });
                this.classList.add(`md-fab--${appearance}`);
            }
        }
        if (changedProperties.has("size")) {
            const validSizes = ["small", "large"];
            const { size } = this;
            if (validSizes.includes(size)) {
                validSizes.forEach((validSize) => {
                    this.classList.remove(`md-fab--${validSize}`);
                });
                this.classList.add(`md-fab--${size}`);
            }
        }
    }
}

// Tentukan elemen kustom "md-fab"
customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };

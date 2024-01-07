import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen checkbox kustom yang memperluas MDComponent.
 * @fires MDCheckboxComponent#onCheckboxNativeInput - Menunjukkan acara input checkbox asli.
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Properti untuk MDCheckboxComponent.
     * @property {string} name - Nama dari checkbox.
     * @property {boolean} checked - Mewakili apakah checkbox dicentang atau tidak.
     * @property {boolean} indeterminate - Menunjukkan apakah checkbox berada dalam keadaan tidak pasti.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
            indeterminate: { type: Boolean },
        };
    }

    /**
     * Konstruktor untuk MDCheckboxComponent.
     */
    constructor() {
        super();
    }

    /**
     * Mendapatkan elemen checkbox asli.
     * @returns {HTMLInputElement} Elemen checkbox asli.
     */
    get native() {
        return this.querySelector('.md-checkbox__native');
    }

    /**
     * Mendapatkan elemen track dari checkbox.
     * @returns {HTMLElement} Elemen track dari checkbox.
     */
    get track() {
        return this.querySelector('.md-checkbox__track');
    }

    /**
     * Mendapatkan elemen thumb dari checkbox.
     * @returns {HTMLElement} Elemen thumb dari checkbox.
     */
    get thumb() {
        return this.querySelector('.md-checkbox__thumb');
    }

    /**
     * Merender MDCheckboxComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                @input="${this.handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen checkbox.
     * @returns {Promise<void>} Sebuah Promise yang diselesaikan ketika inisialisasi selesai.
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-checkbox');
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.
     * Menginisialisasi efek riak untuk checkbox.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        new MDRipple(this.track, {
            trigger: this.native,
            bounded: false,
            diameter: 40 / 14 * 100,
            centered: true,
            fadeout: true,
        });
    }

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    updated(changedProperties) {
    }

    /**
     * Menangani acara input checkbox asli.
     * Memancarkan sebuah acara saat input checkbox asli terjadi.
     * @param {Event} event - Acara input.
     */
    handleCheckboxNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit('onCheckboxNativeInput', { event, input });
    }
}

// Tentukan elemen kustom "md-checkbox"
customElements.define('md-checkbox', MDCheckboxComponent);

export { MDCheckboxComponent };

import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen radio-button kustom yang memperluas MDComponent.
 * @fires MDRadioButtonComponent#onRadioButtonNativeInput - Menunjukkan acara input radio-button asli.
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * Properti untuk MDRadioButtonComponent.
     * @property {string} name - Nama dari radio-button.
     * @property {boolean} checked - Mengindikasikan apakah radio-button diceklis atau tidak.
     * @property {boolean} indeterminate - Menunjukkan jika radio-button dalam keadaan indeterminate.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
            indeterminate: { type: Boolean },
        };
    }

    /**
     * Konstruktor untuk MDRadioButtonComponent.
     */
    constructor() {
        super();
    }

    /**
     * Mengambil elemen radio-button asli.
     * @returns {HTMLInputElement} Elemen radio-button asli.
     */
    get native() {
        return this.querySelector('.md-radio-button__native');
    }

    /**
     * Mengambil elemen track dari radio-button.
     * @returns {HTMLElement} Elemen track dari radio-button.
     */
    get track() {
        return this.querySelector('.md-radio-button__track');
    }

    /**
     * Mengambil elemen thumb dari radio-button.
     * @returns {HTMLElement} Elemen thumb dari radio-button.
     */
    get thumb() {
        return this.querySelector('.md-radio-button__thumb');
    }

    /**
     * Merender MDRadioButtonComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                @input="${this.handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen radio-button.
     * @returns {Promise<void>} Sebuah Promise yang diselesaikan ketika inisialisasi selesai.
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-radio-button');
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.
     * Menginisialisasi efek ripple untuk radio-button.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        new MDRipple(this.track, {
            trigger: this.native,
            bounded: false,
            diameter: 40 / 16 * 100,
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
     * Menangani acara input radio-button asli.
     * Memancarkan suatu acara ketika input radio-button asli terjadi.
     * @param {Event} event - Acara input.
     */
    handleRadioButtonNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit('onRadioButtonNativeInput', { event, input });
    }
}

/**
 * Mendefinisikan elemen kustom "md-radio-button".
 */
customElements.define('md-radio-button', MDRadioButtonComponent);

export { MDRadioButtonComponent };

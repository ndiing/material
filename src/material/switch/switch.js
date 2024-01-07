import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen switch kustom yang memperluas MDComponent.
 * @fires MDSwitchComponent#onSwitchNativeInput - Menunjukkan acara input switch asli.
 */
class MDSwitchComponent extends MDComponent {
    /**
     * Properti untuk MDSwitchComponent.
     * @property {string} name - Nama dari switch.
     * @property {boolean} checked - Mewakili apakah switch dicentang atau tidak.
     * @property {boolean} indeterminate - Menunjukkan apakah switch berada dalam keadaan tidak pasti.
     */
    static get properties() {
        return {
            name: { type: String },
            checked: { type: Boolean },
            indeterminate: { type: Boolean },
        };
    }

    /**
     * Konstruktor untuk MDSwitchComponent.
     */
    constructor() {
        super();
    }

    /**
     * Mendapatkan elemen switch asli.
     * @returns {HTMLInputElement} Elemen switch asli.
     */
    get native() {
        return this.querySelector('.md-switch__native');
    }

    /**
     * Mendapatkan elemen track dari switch.
     * @returns {HTMLElement} Elemen track dari switch.
     */
    get track() {
        return this.querySelector('.md-switch__track');
    }

    /**
     * Mendapatkan elemen thumb dari switch.
     * @returns {HTMLElement} Elemen thumb dari switch.
     */
    get thumb() {
        return this.querySelector('.md-switch__thumb');
    }

    /**
     * Merender MDSwitchComponent.
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html`
            <input 
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                @input="${this.handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `;
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     * Menginisialisasi komponen switch.
     * @returns {Promise<void>} Sebuah Promise yang diselesaikan ketika inisialisasi selesai.
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-switch');
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.
     * Menginisialisasi efek riak untuk switch.
     * @param {Map<string, unknown>} changedProperties - Properti yang telah berubah.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;

        new MDRipple(this.thumb, {
            trigger: this.native,
            bounded: false,
            // diameter: 40 / 14 * 100,
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
     * Menangani acara input switch asli.
     * Memancarkan sebuah acara saat input switch asli terjadi.
     * @param {Event} event - Acara input.
     */
    handleSwitchNativeInput(event) {
        const input = event.currentTarget;
        this.indeterminate = input.indeterminate;
        this.checked = input.checked;
        this.emit('onSwitchNativeInput', { event, input });
    }
}

// Tentukan elemen kustom "md-switch"
customElements.define('md-switch', MDSwitchComponent);

export { MDSwitchComponent };

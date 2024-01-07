import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Komponen tombol ikon kustom yang memperluas MDComponent.
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Properti untuk MDIconButtonComponent.
     * @property {boolean} toggle - Menunjukkan apakah tombol berperilaku sebagai toggle.
     * @property {boolean} activated - Menunjukkan apakah tombol diaktifkan.
     * @property {string} appearance - Penampilan tombol. Nilai yang mungkin: "filled", "tonal", "outlined".
     */
    static get properties() {
        return {
            toggle: { type: Boolean },
            activated: { type: Boolean, reflect: true },
            appearance: { type: String },
        };
    }

    constructor() {
        super();
    }

    /**
     * Merender MDIconButtonComponent.
     * @private
     * @returns {TemplateResult} Hasil template yang dirender.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.addEventListener("click", this.handleClick);
    }

    /**
     * Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleClick);
    }

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui untuk pertama kalinya.
     * @param {Map} changedProperties - Properti yang telah berubah.
     */
    async firstUpdated(changedProperties) {
        await this.updateComplete;
        new MDRipple(this, {
            bounded: false,
            diameter: this.appearance ? (40 / 40) * 100 : (40 / 24) * 100,
            centered: true,
            fadeout: true,
        });
    }

    /**
     * Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.
     * @param {Map} changedProperties - Properti yang telah berubah.
     */
    updated(changedProperties) {
        if (changedProperties.has("toggle")) {
            this.toggle ? this.classList.add("md-icon-button--toggle") : this.classList.remove("md-icon-button--toggle");
        }
        if (changedProperties.has("activated")) {
            this.activated ? this.classList.add("md-icon-button--activated") : this.classList.remove("md-icon-button--activated");
        }
        if (changedProperties.has("appearance")) {
            const validAppearances = ["filled", "tonal", "outlined"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-icon-button--${validAppearance}`);
                });
                this.classList.add(`md-icon-button--${appearance}`);
            }
        }
    }

    /**
     * Menangani acara klik pada tombol ikon.
     * @private
     * @param {Event} event - Acara klik.
     */
    handleClick(event) {
        if (this.toggle) this.activated = !this.activated;
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };

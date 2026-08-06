import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

class MdElement extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add(`${this.localName}--initialize`);
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        // rAF Pertama: Panggil saya SBLUM Browser menggambar Frame 1
        requestAnimationFrame(() => {
            // rAF Kedua: Panggil saya TEPAT SEBELUM Browser menggambar Frame 2
            requestAnimationFrame(() => {
                // Pada titik ini, Frame 1 (dengan class --initialize)
                // DITAMPILKAN TEPAT 1 FRAME di layar!

                // Sekarang BARU AMAN menghapus class untuk memicu Transisi CSS!
                this.classList.remove(`${this.localName}--initialize`);
            });
        });
    }

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

export { MdElement };

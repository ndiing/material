import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { setPosition } from "../../material/core/positioner.js";

class DemoInputMask extends MdElement {
    constructor() {
        super();
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                type="text"
                @input="${this.handleInput}"
            >
        `
    }

    handleInput(event) {
        const input = event.currentTarget;
        const mask = "dd/mm/yyyy";
        const raw = input.value.replace(/\D/g, "");

        // Track cursor position sebelum di-mask
        let cursorPos = input.selectionStart;
        const rawBeforeCursor = input.value.slice(0, cursorPos).replace(/\D/g, "").length;

        // Format value
        let formatted = "";
        let rawIndex = 0;
        for (let i = 0; i < mask.length; i++) {
            if (rawIndex >= raw.length) break;

            if (/[dmy]/.test(mask[i])) {
                formatted += raw[rawIndex];
                rawIndex++;
            } else {
                formatted += mask[i];
            }
        }

        // Hitung cursor position baru
        let newCursorPos = 0;
        let rawCount = 0;
        for (let i = 0; i < formatted.length; i++) {
            if (rawCount >= rawBeforeCursor) {
                newCursorPos = i;
                break;
            }
            if (formatted[i].match(/\d/)) rawCount++;
            newCursorPos = i + 1;
        }

        // Kalo hapus/backspace
        if (input.value.length > formatted.length) {
            // Backspace
            newCursorPos = Math.max(0, newCursorPos - 1);
        }

        input.value = formatted;
        input.setSelectionRange(newCursorPos, newCursorPos);
    }
}
customElements.define("demo-input-mask", DemoInputMask);
export default document.createElement("demo-input-mask");

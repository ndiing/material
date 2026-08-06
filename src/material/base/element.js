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
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
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

import { LitElement } from "lit";

class MDComponent extends LitElement {
    createRenderRoot() {
        return this;
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }

    on(type, listener) {
        this.addEventListener(type,listener)
    }

    off(type, listener) {
        this.removeEventListener(type,listener)
    }
}

export { MDComponent };

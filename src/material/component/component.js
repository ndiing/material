import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * {{desc}}
 * @extends LitElement
 */
class MDComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
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

export { MDComponent };

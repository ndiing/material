import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * {{description}}
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

    /**
     * {{description}}
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * {{description}}
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
    }

    /**
     * {{description}}
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * {{description}}
     */
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

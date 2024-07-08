import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * {{description}}
 * @extends LitElement
 */
class MDComponent extends LitElement {
    /**
     * {{description}}
     */
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     * @private
     */
    createRenderRoot() {
        return this;
    }

    /**
     * @private
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
     * @private
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * @private
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

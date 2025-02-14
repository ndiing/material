import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * @extends LitElement
 */
class MdComponent extends LitElement {
    /**
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
     * @param {Undefined} [type]
     * @param {Undefined} [detail]
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
export { MdComponent };

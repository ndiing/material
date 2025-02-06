import { LitElement } from "lit";

/**
 * @extends LitElement
 */
class MdComponent extends LitElement {
    /**
     * @private
     */
    createRenderRoot() {
        return this;
    }

    /**
     * @param {String} [type]
     * @param {String} [detail]
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

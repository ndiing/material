import { LitElement } from "lit";

/**
 * 
 * @extends LitElement
 */
class MdComponent extends LitElement {

    /**
     * 
     * @private
     */
    createRenderRoot() {
        return this;
    }

    /**
     * 
     * @private
     * @param {Any} [type]
     * @param {Any} [detail]
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

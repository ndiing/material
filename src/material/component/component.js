import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";
/**
 * @extends LitElement
 */
class MdComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    emit(type, detail) {
        // if(typeof this[type] === 'function')
        //     this[type]({detail})

        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }
}
export { MdComponent };

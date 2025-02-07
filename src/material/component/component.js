import { LitElement } from "lit";
class MdComponent extends LitElement {
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
}
export { MdComponent };

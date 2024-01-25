import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdComponent extends LitElement {
    createRenderRoot() {
        return this;
    }

    emit(type, detail) {
        this.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            })
        );
    }
}

export { MdComponent };

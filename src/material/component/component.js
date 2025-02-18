import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";
const Mixins = (Super) =>
    class extends Super {
        emit(type, detail) {
            const event = new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            });
            this.dispatchEvent(event);
        }
    };
/**
 * @extends LitElement
 */
class MdComponent extends Mixins(LitElement) {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }
}
class MdElement extends Mixins(HTMLElement) {}
export { Mixins, MdComponent, MdElement };

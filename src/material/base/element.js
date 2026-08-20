import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";
import { createRef } from "lit/directives/ref.js";

/**
 * @class MdElement
 * @extends LitElement
 */
class MdElement extends LitElement {
    constructor() {
        super();

        this.refMap = new Map();

        updateWhenLocaleChanges(this);
    }

    /**
     *
     */
    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add(`${this.localName}--initialize`);

        this.updateComplete.then(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.classList.remove(`${this.localName}--initialize`);
                });
            });
        });
    }

    /**
     *
     */
    getRef(key) {
        if (!this.refMap.has(key)) {
            this.refMap.set(key, createRef());
        }
        return this.refMap.get(key);
    }

    /**
     *
     */
    on(type, listener) {
        this.addEventListener(type, listener);
    }

    /**
     *
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     *
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

export { MdElement };

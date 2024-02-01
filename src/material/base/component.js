import { LitElement } from "lit";

/**
 * Custom LitElement class for MDComponent.
 * @extends LitElement
 */
class MDComponent extends LitElement {
    /**
     * Overrides LitElement's default render root creation.
     * @returns {this} The created render root.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Emits a custom event with the specified type and detail.
     * @param {string} type - The type of the custom event.
     * @param {*} detail - The details or data to be included in the event.
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

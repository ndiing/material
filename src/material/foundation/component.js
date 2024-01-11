import { LitElement } from "lit";

/**
 * Custom component based on LitElement.
 */
class MDComponent extends LitElement {
    /**
     * Overrides the createRenderRoot method to return 'this'.
     * @returns {this} The current element instance.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Adds an event listener to the element.
     * @param {string} type - The type of event to listen for.
     * @param {Function} listener - The callback function to execute when the event is triggered.
     */
    on(type, listener) {
        this.addEventListener(type, listener);
    }

    /**
     * Removes an event listener from the element.
     * @param {string} type - The type of event to remove the listener from.
     * @param {Function} listener - The callback function previously registered.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the element.
     * @param {string} type - The type of the custom event.
     * @param {*} detail - Any data to be sent as the event's `detail` property.
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

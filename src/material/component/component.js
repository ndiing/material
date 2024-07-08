import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * MDComponent is a base class for all custom elements that extends LitElement. It provides additional utility methods for event handling and localization updates.
 * 
 * @extends LitElement
 */
class MDComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);  // Update the component when the locale changes
    }

    createRenderRoot() {
        return this;
    }

    /**
     * Adds an event listener to the component. The listener is automatically bound to the component's context.
     * 
     * @param {string} type - The event type to listen for.
     * @param {Function} listener - The callback function to handle the event.
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * Adds an event listener to the component that will only be called once. The listener is automatically bound to the component's context and removed after the first call.
     * 
     * @param {string} type - The event type to listen for.
     * @param {Function} listener - The callback function to handle the event.
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
    }

    /**
     * Removes an event listener from the component.
     * 
     * @param {string} type - The event type to remove.
     * @param {Function} listener - The callback function to be removed.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the component.
     * 
     * @param {string} type - The event type to emit.
     * @param {any} detail - The detail object to include with the event.
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

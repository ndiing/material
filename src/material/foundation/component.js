const { LitElement } = require("lit");

/**
 * Represents a component for the MD framework.
 * Extends LitElement class.
 */
class MDComponent extends LitElement {
    /**
     * Overrides LitElement's default render root creation method.
     * @private
     * @returns {this} - The instance of the component.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Attaches an event listener to the component.
     * @param {string} type - The type of event to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function to be called when the event occurs.
     */
    on(type, listener) {
        this.addEventListener(type, listener);
    }

    /**
     * Removes an event listener from the component.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function to be removed.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the component.
     * @param {string} type - The type of the custom event to be dispatched.
     * @param {any} detail - Optional detail to be included in the event.
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

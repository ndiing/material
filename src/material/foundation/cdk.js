/**
 * MDCDK class for handling custom events and initialization.
 */
class MDCDK {
    /**
     * Creates an instance of MDCDK.
     * @param {HTMLElement} root - The root element for the MDCDK instance.
     * @param {Object} [options={}] - Optional configuration options for MDCDK.
     */
    constructor(root, options = {}) {
        this.root = root;
        this.options = options;
        this.init();
    }

    /**
     * Initializes the MDCDK instance.
     */
    init() {
        // Add initialization logic here
    }

    /**
     * Destroys the MDCDK instance.
     */
    destroy() {
        // Add destruction logic here
    }

    /**
     * Adds an event listener to the root element.
     * @param {string} type - The type of event to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function or object.
     */
    on(type, listener) {
        this.root.addEventListener(type, listener);
    }

    /**
     * Removes an event listener from the root element.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function or object.
     */
    off(type, listener) {
        this.root.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the root element.
     * @param {string} type - The type of the custom event.
     * @param {*} detail - Any data to be sent as the event's `detail` property.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.root.dispatchEvent(event);
    }
}
export { MDCDK };

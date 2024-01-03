/**
 * Represents a Custom Development Kit for MD Framework.
 */
class MDCDK {
    /**
     * Creates an instance of MDCDK.
     * @param {HTMLElement} root - The root HTML element to bind events to.
     * @param {Object} [options={}] - Additional options for MDCDK.
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
        // Initialization code goes here
        // Example: this.on('click', listener)
    }

    /**
     * Destroys the MDCDK instance.
     */
    destroy() {
        // Destruction code goes here
        // Example: this.off('click', listener)
    }

    /**
     * Attaches an event listener to the root element.
     * @param {string} type - The type of event to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function to be called when the event occurs.
     */
    on(type, listener) {
        this.root.addEventListener(type, listener);
    }

    /**
     * Removes an event listener from the root element.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListenerOrEventListenerObject} listener - The event listener function to be removed.
     */
    off(type, listener) {
        this.root.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the root element.
     * @param {string} type - The type of the custom event to be dispatched.
     * @param {any} detail - Optional detail to be included in the event.
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

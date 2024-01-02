/**
 * Library class for handling events on a root element.
 * @author Ridho Prasetya
 */
class Library {
    /**
     * Creates an instance of Library.
     * @param {Object} [options={}] - The options for the library.
     * @param {HTMLElement} [options.root] - The root element to attach events to.
     */
    constructor(options = {}) {
        /**
         * Options for the library.
         * @type {Object}
         */
        this.options = options;

        this.init();
    }

    /**
     * Attach an event listener to the root element.
     * @param {string} type - The type of event to listen for.
     * @param {EventListener} listener - The callback function to execute when the event is triggered.
     */
    on(type, listener) {
        this.options.root.addEventListener(type, listener);
    }

    /**
     * Remove an event listener from the root element.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListener} listener - The callback function that was registered.
     */
    off(type, listener) {
        this.options.root.removeEventListener(type, listener);
    }

    /**
     * Emit a custom event on the root element.
     * @param {string} type - The type of event to emit.
     * @param {*} detail - Additional information to pass along with the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.options.root.dispatchEvent(event);
    }

    /**
     * Initializes the Library instance.
     */
    init() {
        // Perform initialization tasks
        // Example: this.on('click', this.handleClick.bind(this));
    }

    /**
     * Cleans up and destroys the Library instance.
     */
    destroy() {
        // Perform cleanup tasks
        // Example: this.off('click', this.handleClick.bind(this));
    }
}

export { Library };

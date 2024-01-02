/**
 * Library class for handling events on a root element.
 * @class
 * @author Ridho Prasetya
 */
class Library {
    /**
     * Creates an instance of Library.
     * @constructor
     * @param {HTMLElement} [root=null] - The root element to attach events to.
     * @param {Object} [options={}] - The options for the library.
     */
    constructor(root = null, options = {}) {
        /**
         * The root element to attach events to.
         * @type {HTMLElement}
         */
        this.root = root;

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
        this.root.addEventListener(type, listener);
    }

    /**
     * Remove an event listener from the root element.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListener} listener - The callback function that was registered.
     */
    off(type, listener) {
        this.root.removeEventListener(type, listener);
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
        this.root.dispatchEvent(event);
    }

    /**
     * Initializes the Library instance.
     * @private
     */
    init() {
        // Perform initialization tasks
        // Example: this.on('click', this.handleClick.bind(this));
    }

    /**
     * Cleans up and destroys the Library instance.
     * @public
     */
    destroy() {
        // Perform cleanup tasks
        // Example: this.off('click', this.handleClick.bind(this));
    }
}

export { Library };

/**
 * Base class for Material Design controllers.
 */
class MDController {
    /**
     * Creates an instance of MDController.
     * @param {HTMLElement} host - The host element for the controller.
     * @param {Object} [options={}] - Options for the controller.
     */
    constructor(host, options = {}) {
        /**
         * The host element associated with the controller.
         * @type {HTMLElement}
         */
        this.host = host;

        /**
         * Options for the controller.
         * @type {Object}
         */
        this.options = options;

        // Register the controller with the host element
        host.addController(this);
    }

    /**
     * Lifecycle method called when the host element is connected to the DOM.
     */
    hostConnected() {}

    /**
     * Lifecycle method called when the host element is updated.
     */
    hostUpdate() {}

    /**
     * Lifecycle method called when the host element has completed an update cycle.
     */
    hostUpdated() {}

    /**
     * Lifecycle method called when the host element is disconnected from the DOM.
     */
    hostDisconnected() {}
}

export { MDController };

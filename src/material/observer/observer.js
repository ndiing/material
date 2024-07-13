/**
 * MDObserver class.
 *
 * This class uses the `requestAnimationFrame` method to repeatedly execute a callback function.
 */
class MDObserver {
    handle;
    isObserving = false;

    /**
     * Creates an instance of MDObserver.
     * @param {function} [callback=()=>{}] - The callback function to be executed in the animation frame.
     */
    constructor(callback = () => {}) {
        /**
         * @private
         * @type {function}
         */
        this.callback = callback;
    }

    /**
     * Executes the callback function and sets up the next animation frame.
     * @param {number} time - The current time, as provided by `requestAnimationFrame`.
     * @private
     */
    executeCallback(time) {
        this.handle = undefined;
        this.callback(time);
        if (this.isObserving) {
            this.scheduleNextFrame();
        }
    }

    /**
     * Schedules the next animation frame.
     * @private
     */
    scheduleNextFrame() {
        if (!this.handle && this.isObserving) {
            this.handle = window.requestAnimationFrame(this.executeCallback.bind(this));
        }
    }

    /**
     * Starts observing by setting up an animation frame if it hasn't been set up already.
     */
    observe() {
        if (!this.isObserving) {
            this.isObserving = true;
            this.scheduleNextFrame();
        }
    }

    /**
     * Stops observing by canceling the animation frame.
     */
    disconnect() {
        if (this.handle) {
            window.cancelAnimationFrame(this.handle);
            this.handle = undefined;
        }
        this.isObserving = false;
    }
}

export { MDObserver };

// // Example usage
// const observer = new MDObserver(() => {
//     console.log('Observer callback executed');
//     observer.disconnect();
// });
// observer.observe();

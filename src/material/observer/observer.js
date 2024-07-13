/**
 * Class for observing changes and executing callbacks on animation frames.
 */
class MDObserver {
    handle;
    isObserving = false;

    /**
     * Creates an instance of MDObserver.
     * @param {Function} [callback=() => {}] - The callback function to execute on each animation frame.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Executes the callback function with the given time argument.
     * @private
     * @param {DOMHighResTimeStamp} time - The time when the callback is executed.
     */
    executeCallback(time) {
        this.handle = undefined;
        this.callback(time);
        if (this.isObserving) {
            this.scheduleNextFrame();
        }
    }

    /**
     * Schedules the next animation frame for executing the callback.
     * @private
     */
    scheduleNextFrame() {
        if (!this.handle && this.isObserving) {
            this.handle = window.requestAnimationFrame(this.executeCallback.bind(this));
        }
    }

    /**
     * Starts observing changes and schedules the first animation frame.
     */
    observe() {
        if (!this.isObserving) {
            this.isObserving = true;
            this.scheduleNextFrame();
        }
    }

    /**
     * Stops observing changes by canceling the animation frame.
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

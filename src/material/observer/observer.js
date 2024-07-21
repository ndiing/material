/**
 * {{desc}}
 * @extends undefined
 * @element undefined
 */
class MDObserver {
    handle;
    isObserving = false;

    /**
     * {{desc}}
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * {{desc}}
     */
    executeCallback(time) {
        this.handle = undefined;
        this.callback(time);
        if (this.isObserving) {
            this.scheduleNextFrame();
        }
    }

    /**
     * {{desc}}
     */
    scheduleNextFrame() {
        if (!this.handle && this.isObserving) {
            this.handle = window.requestAnimationFrame(this.executeCallback.bind(this));
        }
    }

    /**
     * {{desc}}
     */
    observe() {
        if (!this.isObserving) {
            this.isObserving = true;
            this.scheduleNextFrame();
        }
    }

    /**
     * {{desc}}
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

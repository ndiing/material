/**
 * Progress class responsible for managing and displaying a progress indicator.
 */
class Progress {
    /**
     * Creates an instance of the Progress class.
     */
    constructor() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.progressIndicator = null;
    }

    // /**
    //  * Renders the progress indicator element if it does not already exist.
    //  */
    render() {
        if (!this.progressIndicator) {
            this.progressIndicator = document.createElement("md-progress-indicator");
            this.progressIndicator.classList.add("md-progress");
            document.body.insertBefore(this.progressIndicator, document.body.nextElementSibling);
        }
    }

    /**
     * Starts the progress indicator with the specified duration.
     * @param {number} [duration] - The duration for the progress indicator.
     */
    start(duration) {
        this.duration += duration;

        if (this.startTime === null) {
            this.startTime = performance.now();
            this.render();
        }

        if (!this.requestId) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        }
    }

    // /**
    //  * Updates the progress indicator at each animation frame.
    //  * @param {DOMHighResTimeStamp} currentTime - The current time of the animation frame.
    //  */
    step(currentTime) {
        if (!this.progressIndicator) {
            return;
        }
        let elapsed = currentTime - this.startTime;
        let progress = Math.min(elapsed / this.duration, 1);
        this.progressIndicator.max = this.duration;
        this.progressIndicator.value = elapsed;

        if (progress < 1) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        } else {
            this.reset();
        }
    }

    // /**
    //  * Removes the progress indicator element from the DOM.
    //  */
    remove() {
        if (this.progressIndicator) {
            this.progressIndicator.remove();
            this.progressIndicator = null;
        }
    }

    // /**
    //  * Resets the progress indicator and clears its state.
    //  */
    reset() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.remove();
    }
}

export { Progress };

/**
 */
class Progress {
    /**
     */
    constructor() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.progressIndicator = null;
    }

    /**
     * @private
     */
    render() {
        if (!this.progressIndicator) {
            this.progressIndicator = document.createElement("md-progress-indicator");
            this.progressIndicator.classList.add("md-progress");
            document.body.insertBefore(this.progressIndicator, document.body.nextElementSibling);
        }
    }

    /**
     * @param {Undefined} [newDuration]
     */
    start(newDuration) {
        this.duration += newDuration;
        if (this.startTime === null) {
            this.startTime = performance.now();
            this.render();
        }
        if (!this.requestId) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        }
    }

    /**
     * @param {Undefined} [currentTime]
     */
    step(currentTime) {
        if (!this.progressIndicator) return;
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

    /**
     */
    remove() {
        if (this.progressIndicator) {
            this.progressIndicator.remove();
            this.progressIndicator = null;
        }
    }

    /**
     */
    reset() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.remove();
    }
}
export { Progress };

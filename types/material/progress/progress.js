"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
/**
 */
var Progress = /** @class */ (function () {
    /**
     */
    function Progress() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.progressIndicator = null;
    }
    /**
     */
    Progress.prototype.render = function () {
        if (!this.progressIndicator) {
            this.progressIndicator = document.createElement("md-progress-indicator");
            this.progressIndicator.classList.add("md-progress");
            document.body.insertBefore(this.progressIndicator, document.body.nextElementSibling);
        }
    };
    /**
     * @param {String} [newDuration]
     */
    Progress.prototype.start = function (newDuration) {
        this.duration += newDuration;
        if (this.startTime === null) {
            this.startTime = performance.now();
            this.render();
        }
        if (!this.requestId) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        }
    };
    /**
     * @param {String} [currentTime]
     */
    Progress.prototype.step = function (currentTime) {
        if (!this.progressIndicator) return;
        var elapsed = currentTime - this.startTime;
        var progress = Math.min(elapsed / this.duration, 1);
        this.progressIndicator.max = this.duration;
        this.progressIndicator.value = elapsed;
        if (progress < 1) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        } else {
            this.reset();
        }
    };
    /**
     */
    Progress.prototype.remove = function () {
        if (this.progressIndicator) {
            this.progressIndicator.remove();
            this.progressIndicator = null;
        }
    };
    /**
     */
    Progress.prototype.reset = function () {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.remove();
    };
    return Progress;
})();
exports.Progress = Progress;

/**
 * Represents a controller for managing a progress indicator.
 */
let requestId;
let startTime;
let pausedTime = 0;
let totalDuration = 10000;
let isAnimating = false;
let elapsedTime = 0;
let progressBar;

/**
 * Creates a new progress indicator element and appends it to the document body.
 */
function create() {
    progressBar = document.createElement("md-progress-indicator");
    progressBar.setAttribute("max", totalDuration);
    progressBar.setAttribute("value", 0);
    document.body.insertAdjacentElement("afterbegin", progressBar);
    progressBar.style.position = "absolute";
    progressBar.style.left = "0px";
    progressBar.style.top = "0px";
}

/**
 * Resets the progress indicator and animation state.
 */
function reset() {
    isAnimating = false;
    pausedTime = 0;
    totalDuration = 10000;
    elapsedTime = 0;

    progressBar.parentNode.removeChild(progressBar);
    progressBar = null;
}

/**
 * Observes the progress of the animation.
 * @param {Function} resolve - Callback function to execute when animation completes.
 */
function observe(resolve) {
    let currentTime = performance.now();
    elapsedTime = currentTime - startTime;

    // Update progress bar value
    if (progressBar) {
        progressBar.setAttribute("value", elapsedTime);
    }

    // Check if animation should continue or complete
    if (elapsedTime < totalDuration) {
        requestId = requestAnimationFrame(() => observe(resolve));
    } else {
        reset();
        if (resolve) {
            resolve();
        }
    }
}

/**
 * Starts the progress animation with a specified duration.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @returns {Promise} Promise that resolves when the animation completes.
 */
function start(duration = 10000) {
    return new Promise((resolve) => {
        if (!progressBar) {
            create();
        }

        // If already animating, adjust total duration
        if (isAnimating) {
            totalDuration += duration;
            resolve();
            return;
        }

        // Start new animation
        totalDuration = duration;
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        progressBar.setAttribute("max", totalDuration);
        observe(resolve);
    });
}

/**
 * Pauses the current animation.
 */
function pause() {
    if (isAnimating) {
        cancelAnimationFrame(requestId);
        pausedTime = performance.now() - startTime;
        isAnimating = false;
    }
}

/**
 * Resumes a paused animation.
 */
function resume() {
    if (!isAnimating) {
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        observe();
    }
}

/**
 * Stops the current animation and resets the progress indicator.
 */
function stop() {
    if (isAnimating) {
        // Complete animation
        if (progressBar) {
            progressBar.setAttribute("value", totalDuration);
        }

        cancelAnimationFrame(requestId);
        reset();
    }
}

export { start, pause, resume, stop };

// Automatically start and stop animations based on PerformanceObserver entries
(() => {
    let timeout;
    new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                stop();
            }, 100);
            start(entry.duration);
        });
    }).observe({
        entryTypes: ["mark", "measure", "navigation", "resource"],
    });
})();

let requestId;
let startTime;
let pausedTime = 0;
let totalDuration = 10000;
let isAnimating = false;
let elapsedTime = 0;
let progressBar;

/**
 * Creates a progress bar element and appends it to the document body.
 * Initializes the progress bar with maximum duration.
 */
function createProgressBar() {
    progressBar = document.createElement("md-progress-indicator");
    progressBar.setAttribute("max", totalDuration);
    progressBar.setAttribute("value", 0);
    document.body.insertAdjacentElement("afterbegin", progressBar);
    progressBar.style.position = "absolute";
    progressBar.style.left = "0px";
    progressBar.style.top = "0px";
}

/**
 * Resets animation variables and removes the progress bar element.
 */
function resetAnimationVariables() {
    isAnimating = false;
    pausedTime = 0;
    totalDuration = 10000;
    elapsedTime = 0;

    progressBar.parentNode.removeChild(progressBar);
    progressBar = null;
}

/**
 * Recursive function that updates the progress of the animation.
 * @param {Function} [resolve] - Optional callback function to be called when animation completes.
 */
function loop(resolve) {
    let currentTime = performance.now();
    elapsedTime = currentTime - startTime;

    // let progress = Math.min(100, (elapsedTime / totalDuration) * 100);

    if (progressBar) {
        progressBar.setAttribute("value", elapsedTime);
    }

    if (elapsedTime < totalDuration) {
        requestId = requestAnimationFrame(() => loop(resolve));
    } else {
        resetAnimationVariables();
        if (resolve) {
            resolve();
        }
    }
}

/**
 * Starts or resumes the animation for a specified duration.
 * If animation is already running, extends the total duration.
 * @param {number} [duration=10000] - The duration of the animation in milliseconds.
 * @returns {Promise} A promise that resolves when the animation completes.
 */
function start(duration = 10000) {
    return new Promise((resolve) => {
        if (!progressBar) {
            createProgressBar();
        }

        if (isAnimating) {
            totalDuration += duration;
            resolve();
            return;
        }

        totalDuration = duration;
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        progressBar.setAttribute("max", totalDuration);
        loop(resolve);
    });
}

/**
 * Pauses the currently running animation if any.
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
        loop();
    }
}

/**
 * Stops the current animation and resets animation variables.
 */
function stop() {
    if (isAnimating) {
        // let remainingTime = totalDuration - (performance.now() - startTime);
        // let progress = Math.min(100, ((totalDuration - remainingTime) / totalDuration) * 100);

        if (progressBar) {
            progressBar.setAttribute("value", totalDuration);
        }

        cancelAnimationFrame(requestId);
        resetAnimationVariables();
    }
}

export { start, pause, resume, stop };

// auto run
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
        entryTypes: PerformanceObserver.supportedEntryTypes,
    });
})();

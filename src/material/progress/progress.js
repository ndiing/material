let requestId;
let startTime;
let pausedTime = 0;
let totalDuration = 10000;
let isAnimating = false;
let elapsedTime = 0;
let progressBar;

/**
 * {{description}}
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
 * {{description}}
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
 * {{description}}
 */
function observe(resolve) {
    let currentTime = performance.now();
    elapsedTime = currentTime - startTime;

    // let progress = Math.min(100, (elapsedTime / totalDuration) * 100);

    if (progressBar) {
        progressBar.setAttribute("value", elapsedTime);
    }

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
 * {{description}}
 */
function start(duration = 10000) {
    return new Promise((resolve) => {
        if (!progressBar) {
            create();
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
        observe(resolve);
    });
}

/**
 * {{description}}
 */
function pause() {
    if (isAnimating) {
        cancelAnimationFrame(requestId);
        pausedTime = performance.now() - startTime;
        isAnimating = false;
    }
}

/**
 * {{description}}
 */
function resume() {
    if (!isAnimating) {
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        observe();
    }
}

/**
 * {{description}}
 */
function stop() {
    if (isAnimating) {
        // let remainingTime = totalDuration - (performance.now() - startTime);
        // let progress = Math.min(100, ((totalDuration - remainingTime) / totalDuration) * 100);

        if (progressBar) {
            progressBar.setAttribute("value", totalDuration);
        }

        cancelAnimationFrame(requestId);
        reset();
    }
}

export { start, pause, resume, stop };

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
        entryTypes: [
            // "element",
            // "event",
            // "first-input",
            // "largest-contentful-paint",
            // "layout-shift",
            // "long-animation-frame",
            // "longtask",
            "mark",
            "measure",
            "navigation",
            // "paint",
            "resource",
            // "visibility-state"
        ],
    });
})();

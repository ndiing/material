let requestId;
let startTime;
let pausedTime = 0;
let totalDuration = 10000;
let isAnimating = false;
let elapsedTime = 0;
let progressBar;

/**
 * {{desc}}
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
 * {{desc}}
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
 * {{desc}}
 * @param {Any} resolve - {{desc}}
 */
function observe(resolve) {
    let currentTime = performance.now();
    elapsedTime = currentTime - startTime;
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
 * {{desc}}
 * @param {Any} duration = 10000 - {{desc}}
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
 * {{desc}}
 */
function pause() {
    if (isAnimating) {
        cancelAnimationFrame(requestId);
        pausedTime = performance.now() - startTime;
        isAnimating = false;
    }
}

/**
 * {{desc}}
 */
function resume() {
    if (!isAnimating) {
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        observe();
    }
}

/**
 * {{desc}}
 */
function stop() {
    if (isAnimating) {
        if (progressBar) {
            progressBar.setAttribute("value", totalDuration);
        }
        cancelAnimationFrame(requestId);
        reset();
    }
}
export { start, pause, resume, stop };

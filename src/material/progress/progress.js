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
// (() => {
//     const windowFetch = window.fetch;
/**
 * {{desc}}
 */
//     function performanceStart() {
//         performance.mark("markFetchStart");
//     }
/**
 * {{desc}}
 */
//     function performanceEnd() {
//         performance.mark("markFetchEnd");
//         performance.measure("measureFetch", "markFetchStart", "markFetchEnd");
//         performance.clearMarks("markFetchStart");
//         performance.clearMarks("markFetchEnd");
//         performance.clearMeasures("measureFetch");
//     }
//     window.fetch = async function (...args) {
//         try {
//             performanceStart();
//             const response = await windowFetch.apply(this, args);
//             performanceEnd();
//             return response;
//         } catch (error) {
//             performanceEnd();
//             throw error;
//         }
//     };
//     let firstRun;

//     let timeout;
//     new PerformanceObserver((items) => {
//         items.getEntries().forEach((entry) => {
//             window.clearTimeout(timeout);
//             timeout = window.setTimeout(() => {
//                 stop();
//                 if (firstRun === 1) {
//                     firstRun = 0;
//                     // console.log(firstRun)
//                 }
//             }, 100);
//             start(entry.duration);
//             if (firstRun === undefined) {
//                 firstRun = 1;
//                 // console.log(firstRun)
//             }
//             // console.log(entry);
//         });
//     }).observe({
//         entryTypes: [
//             // "element",
//             // "event",
//             "first-input",
//             "largest-contentful-paint",
//             "layout-shift",
//             "long-animation-frame",
//             "longtask",
//             "mark",
//             "measure",
//             "navigation",
//             "paint",
//             // "resource",
//             // "visibility-state"
//         ],
//     });
// })();

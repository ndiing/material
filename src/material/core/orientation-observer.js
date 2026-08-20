import { MediaObserver } from "./observer.js";

/**
 * @class OrientationObserver
 * @extends MediaObserver
 */
class OrientationObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "landscape", query: "(orientation: landscape)" },
            { name: "portrait", query: "(orientation: portrait)" },
        ]);
    }
}

export { OrientationObserver };

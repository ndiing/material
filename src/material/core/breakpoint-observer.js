import { MediaObserver } from "./observer.js";


/**
 * @class BreakpointObserver
 * @extends MediaObserver
 */
class BreakpointObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "expanded", query: "(min-width: 840px)" },
            { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
            { name: "compact", query: "(max-width: 599px)" },
        ]);
    }
}

export { BreakpointObserver };

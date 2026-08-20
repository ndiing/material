import { MediaObserver } from "./observer.js";

/**
 * @class SchemeObserver
 * @extends MediaObserver
 */
class SchemeObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "light", query: "(prefers-color-scheme: light)" },
            { name: "dark", query: "(prefers-color-scheme: dark)" },
        ]);
    }
}

export { SchemeObserver };

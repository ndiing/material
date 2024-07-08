/**
 * Class to observe changes to a specified attribute on a target element.
 */
class MDAttributeObserver {
    /**
     * Creates an instance of MDAttributeObserver.
     * @param {Function} [callback=() => {}] - Callback function to be executed when the attribute changes.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Starts observing changes to the specified attribute on the target element.
     * @param {HTMLElement} target - The target element to observe.
     * @param {string} attributeName - The name of the attribute to observe.
     */
    observe(target, attributeName) {
        this.callback({
            name: attributeName,
            value: target.getAttribute(attributeName),
        });

        new MutationObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.attributeName === attributeName) {
                    this.callback({
                        name: attributeName,
                        value: target.getAttribute(attributeName),
                    });
                }
            });
        }).observe(target, {
            attributes: true,
            attributeFilter: [attributeName],
        });
    }
}

export { MDAttributeObserver };

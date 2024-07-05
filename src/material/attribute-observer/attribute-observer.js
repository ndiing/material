/**
 * Represents an attribute observer that watches changes in a specific attribute of a DOM element.
 */
class MDAttributeObserver {
    /**
     * Creates an instance of MDAttributeObserver.
     * @param {function} [callback] - The callback function to be called on attribute change.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Begins observing changes in the specified attribute of the target DOM element.
     * @param {Element} target - The DOM element to observe.
     * @param {string} attributeName - The name of the attribute to observe changes.
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

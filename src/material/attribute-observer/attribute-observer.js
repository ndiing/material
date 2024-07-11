/**
 * MDAttributeObserver observes changes to a specified attribute of a target element
 * and triggers a callback whenever the attribute's value changes.
 * @example
 * // Observe meta name="theme-color" when content change
 * const target = document.head.querySelector('meta[name="theme-color"]');
 * const observer = new MDAttributeObserver((entry) => {
 *     console.log(entry); // {name: 'content', value: '#ff0000'}
 * });
 * observer.observe(target, "content");
 */
class MDAttributeObserver {
    /**
     * Creates an instance of MDAttributeObserver.
     * @param {Function} [callback=() => {}] - The callback function to be called when the attribute changes.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Begins observing changes to the specified attribute of the target element.
     * @param {Element} target - The target element to observe.
     * @param {string} attributeName - The name of the attribute to observe for changes.
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

/**
 * Class for observing changes to a specific attribute on a target element.
* @example
* // Create an instance of MDAttributeObserver with a callback function
* const attributeObserver = new MDAttributeObserver(attributeInfo => {
*     console.log(`Attribute ${attributeInfo.name} changed to: ${attributeInfo.value}`);
* });
* 
* // Example usage: observe changes to the 'src' attribute of an image element
* const imageElement = document.getElementById('myImage');
* attributeObserver.observe(imageElement, 'src');
* 
* // Example usage: observe changes to the 'class' attribute of a div element
* const divElement = document.getElementById('myDiv');
* attributeObserver.observe(divElement, 'class');
 */
class MDAttributeObserver {
    /**
     * Creates an instance of MDAttributeObserver.
     * @param {Function} [callback=() => {}] - The callback function to execute when attribute changes are detected.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Starts observing changes to the specified attribute on the target element.
     * @param {Element} target - The target element to observe.
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



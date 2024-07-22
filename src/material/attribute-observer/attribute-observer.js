

/**
 * {{desc}}
 */
class MDAttributeObserver {
    
    
    /**
     * {{desc}}
     * @param {Any} callback = () => {} - {{desc}}
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }
    
    
    /**
     * {{desc}}
     * @param {Any} target - {{desc}}
     * @param {Any} attributeName - {{desc}}
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

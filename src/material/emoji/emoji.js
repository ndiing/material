import { MDComponent } from "../base/component";

/**
 * `MDEmojiComponent` is a custom web component for displaying emojis.
 * @extends MDComponent
 */
class MDEmojiComponent extends MDComponent {
    /**
     * Default properties for MDEmojiComponent.
     * @static
     * @type {object}
     */
    static properties = {};

    /**
     * Constructs an instance of MDEmojiComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-emoji");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders the content of the MDEmojiComponent.
     */
    render() {
        // Implement rendering logic using lit-html
    }
}

/**
 * Define the custom element "md-emoji" with MDEmojiComponent.
 */
customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };

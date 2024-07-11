import { MDComponent } from "../component/component.js";

/**
 * A custom element for displaying emojis.
 * @element md-emoji
 * @extends MDComponent
 */
class MDEmojiComponent extends MDComponent {
    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * Adds the 'md-emoji' class to the element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }
}
customElements.define("md-emoji", MDEmojiComponent);
export { MDEmojiComponent };

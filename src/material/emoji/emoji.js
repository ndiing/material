import { MDComponent } from "../component/component.js";

/**
 * {{description}}
 * @element md-emoji
 * @extends MDComponent
 */
class MDEmojiComponent extends MDComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }
}

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };

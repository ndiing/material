import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-emoji
 */
class MDEmojiComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }
}

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };

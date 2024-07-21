import { MDComponent } from "../component/component.js";

function emojiToHexadecimal(emoji) {
    const codePoint = emoji.codePointAt(0);
    const hexString = codePoint.toString(16);
    const paddedHexString = hexString.padStart(4, "0");
    return paddedHexString;
}

/**
 * A custom element for displaying emojis.
 * @element md-emoji
 * @extends MDComponent
 */
class MDEmojiComponent extends MDComponent {
    get webp() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/512.webp`;
    }

    get svg() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/emoji.svg`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }
}
customElements.define("md-emoji", MDEmojiComponent);
export { MDEmojiComponent };

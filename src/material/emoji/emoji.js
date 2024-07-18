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
    static properties = {
        emoji: { type: String },
        hover: { type: String },
    };

    get webp() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/512.webp`;
    }

    get svg() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/emoji.svg`;
    }

    constructor() {
        super();
    }

    render() {
        return this.emoji;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }
}
customElements.define("md-emoji", MDEmojiComponent);
export { MDEmojiComponent };

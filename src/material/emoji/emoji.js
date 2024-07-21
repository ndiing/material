import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 */
function emojiToHexadecimal(emoji) {
    const codePoint = emoji.codePointAt(0);
    const hexString = codePoint.toString(16);
    const paddedHexString = hexString.padStart(4, "0");
    return paddedHexString;
}

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-emoji
 */
class MDEmojiComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} emoji - {{desc}}
     */
    static properties = {
        emoji: { type: String },
    };

    /**
     * {{desc}}
     */
    get webp() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/512.webp`;
    }

    /**
     * {{desc}}
     */
    get svg() {
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/emoji.svg`;
    }

    /**
     * {{desc}}
     */
    render() {
        return this.emoji;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
    }
}
customElements.define("md-emoji", MDEmojiComponent);
export { MDEmojiComponent };

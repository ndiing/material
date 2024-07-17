// import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
// import { createRef, ref } from "lit/directives/ref.js";

function emojiToHexadecimal(emoji) {
    const codePoint = emoji.codePointAt(0);
    const hexString = codePoint.toString(16); //.toUpperCase();
    const paddedHexString =
        // 'U+' +
        hexString.padStart(4, "0");
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

    get webp(){
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/512.webp`
    }

    get svg(){
        return `https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiToHexadecimal(this.emoji)}/emoji.svg`
    }

    // emojiNative=createRef()

    constructor() {
        super();
    }

    render() {
        return this.emoji
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji");
        // this.on("pointerenter", this.handleEmojiPointerenter);
        // this.on("pointerleave", this.handleEmojiPointerleave);
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        // this.off("pointerenter", this.handleEmojiPointerenter);
        // this.off("pointerleave", this.handleEmojiPointerleave);
    }

    // handleEmojiPointerenter() {
    //     this.hover = true;
    // }

    // handleEmojiPointerleave() {
    //     this.hover = false;
    // }

    // handleEmojiNativeError(event){
    //     event.currentTarget.src=this.svg
    //     event.currentTarget.onerror=null
    // }
}
customElements.define("md-emoji", MDEmojiComponent);
export { MDEmojiComponent };

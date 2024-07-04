import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevEmojiPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-markdown href="./docs/emoji-picker.md"></md-markdown>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="emoji">Select emoji</label>
                    <div
                        contenteditable="true"
                        tabindex="0"
                        id="emoji"
                        name="emoji"
                        @input="${this.handleEmojiInput}"
                        @focus="${this.saveCursorPosition}"
                        @click="${this.saveCursorPosition}"
                        style="min-height:24px;min-width:240px;background:white;display:inline-block;"
                    ></div>
                    <md-emoji-picker
                        id="emojiPicker"
                        .rows="${[{ emoji: "😀" }, { emoji: "😚" }, { emoji: "😶" }, { emoji: "🤧" }, { emoji: "😲" }, { emoji: "😡" }, { emoji: "😽" }, { emoji: "❤" }, { emoji: "☺" }, { emoji: "😑" }, { emoji: "🤮" }, { emoji: "😯" }, { emoji: "😤" }]}"
                        @onEmojiPickerButtonCancelClick="${this.handleEmojiPickerButtonCancelClick}"
                        @onEmojiPickerButtonOkClick="${this.handleEmojiPickerButtonOkClick}"
                        @onEmojiPickerGridColumnClick="${this.handleEmojiPickerGridColumnClick}"
                        @onEmojiPickerTextFieldNativeInput="${this.handleEmojiPickerTextFieldNativeInput}"
                        @onTextFieldNativeBlur="${this.handleTextFieldNativeBlur}"
                    ></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker"
                        @click="${this.handleEmojiPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-emoji-picker id="emojiPicker2"></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker 2"
                        @click="${this.handleEmojiPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get emoji() {
        return this.querySelector("#emoji");
    }

    get emojiPicker() {
        return this.querySelector("#emojiPicker");
    }

    get emojiPicker2() {
        return this.querySelector("#emojiPicker2");
    }

    handleEmojiPickerButtonCancelClick() {
        this.emojiPicker.close();
    }

    handleEmojiPickerButtonOkClick() {
        this.emojiPicker.close();
    }

    handleEmojiPickerButtonClick(event) {
        this.saveCursorPosition();
        this.emojiPicker.showModal(event.currentTarget);
    }

    handleEmojiPickerButtonClick2(event) {
        this.saveCursorPosition();
        this.emojiPicker2.showModal(event.currentTarget);
    }

    // contenteditable
    handleEmojiInput() {}

    // search emoji
    handleEmojiPickerTextFieldNativeInput() {}
    handleTextFieldNativeBlur() {
        this.restoreCursorPosition();
    }

    // pick emoji
    handleEmojiPickerGridColumnClick(event) {
        const emoji = event.detail.currentTarget.data.emoji;
        this.insertEmojiAtCursor(emoji);
    }

    saveCursorPosition() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            this.savedRange = selection.getRangeAt(0);
        }
    }

    restoreCursorPosition() {
        if (this.savedRange) {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(this.savedRange);
        }
    }

    insertEmojiAtCursor(emoji) {
        const editableDiv = this.emoji;
        editableDiv.focus();

        this.restoreCursorPosition();

        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        range.deleteContents();

        const emojiNode = document.createElement("span");
        emojiNode.textContent = emoji;
        range.insertNode(emojiNode);

        // Move the cursor to the end of the inserted emoji
        range.setStartAfter(emojiNode);
        range.setEndAfter(emojiNode);

        selection.removeAllRanges();
        selection.addRange(range);

        this.saveCursorPosition(); // Save the new cursor position
    }
}

customElements.define("dev-emoji-picker", DevEmojiPickerComponent);

export default document.createElement("dev-emoji-picker");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevEmojiPicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:360px;height:640px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-emoji-picker
                                open
                                tabs='{}'
                                rows='[]'
                                @onEmojiPickerTabsItemClick="${console.log}"
                                @onEmojiPickerViewportVirtualScroll="${console.log}"
                                @onEmojiPickerTextFieldNativeInput="${console.log}"
                                @onEmojiPickerGridColumnClick="${console.log}"
                                @onEmojiPickerIconButtonClick="${console.log}"
                                @onEmojiPickerButtonClick="${console.log}"
                                @onEmojiPickerSelection="${console.log}"
                                @onEmojiPickerIconButtonPrevClick="${console.log}"
                                @onEmojiPickerIconButtonNextClick="${console.log}"
                                @onEmojiPickerButtonLabelClick="${console.log}"
                                @onEmojiPickerButtonCancelClick="${console.log}"
                                @onEmojiPickerButtonOkClick="${console.log}"
                            ></md-emoji-picker>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-emoji-picker", DevEmojiPicker);

export default document.createElement("dev-emoji-picker");

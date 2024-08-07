import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevEmojiPicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-emoji-picker open tabs="{}" rows="[]"></md-emoji-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-emoji-picker", DevEmojiPicker);

export default document.createElement("dev-emoji-picker");

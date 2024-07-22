import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevColorPicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-color-picker open value="#289f9a"></md-color-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-color-picker", DevColorPicker);

export default document.createElement("dev-color-picker");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevColorPicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-color-picker open value="#289f9a" @onColorPickerIconButtonClick="${console.log}" @onColorPickerButtonClick="${console.log}" @onColorPickerSelection="${console.log}" @onColorPickerIconButtonPrevClick="${console.log}" @onColorPickerIconButtonNextClick="${console.log}" @onColorPickerButtonLabelClick="${console.log}" @onColorPickerButtonCancelClick="${console.log}" @onColorPickerButtonOkClick="${console.log}" @onColorPickerGradientTrackPointerdown="${console.log}" @onColorPickerGradientTrackPointermove="${console.log}" @onColorPickerGradientTrackPointerup="${console.log}" @onColorPickerHueNativeInput="${console.log}" @onColorPickerOpacityNativeInput="${console.log}"></md-color-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-color-picker", DevColorPicker);

export default document.createElement("dev-color-picker");

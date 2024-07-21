import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTimePicker extends MDComponent {
    render() {
        return html`
            <div
                class="md-layout-border"
                style="position:relative;"
            >
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-time-picker
                                open
                                value="20:30"
                                @onTimePickerSelection="${console.log}"
                                @onTimePickerIconButtonPrevClick="${console.log}"
                                @onTimePickerIconButtonNextClick="${console.log}"
                                @onTimePickerButtonLabelClick="${console.log}"
                                @onTimePickerButtonCancelClick="${console.log}"
                                @onTimePickerButtonOkClick="${console.log}"
                                @onTimePickerHourItemClick="${console.log}"
                                @onTimePickerMinuteItemClick="${console.log}"
                            ></md-time-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-time-picker", DevTimePicker);

export default document.createElement("dev-time-picker");

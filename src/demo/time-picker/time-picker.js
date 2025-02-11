import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoTimePicker extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Time Picker"
                            @click="${(event) => timePicker.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-time-picker
                            id="timePicker"
                            @onTimePickerLabelClick="${console.log}"
                            @onTimePickerIconButtonPrevClick="${console.log}"
                            @onTimePickerIconButtonNextClick="${console.log}"
                            @onTimePickerIconButtonClick="${console.log}"
                            @onTimePickerYearItemClick="${console.log}"
                            @onTimePickerMonthItemClick="${console.log}"
                            @onTimePickerDayItemClick="${console.log}"
                            @onTimePickerHourItemClick="${console.log}"
                            @onTimePickerMinuteItemClick="${console.log}"
                            @onTimePickerButtonCancelClick="${console.log}"
                            @onTimePickerButtonOkClick="${(event) => console.log(event.detail.value)}"
                            @onTimePickerButtonLabelClick="${console.log}"
                            @onTimePickerButtonClick="${console.log}"
                            @onTimePickerScrimClosed="${console.log}"
                            @onTimePickerShown="${console.log}"
                            @onTimePickerClosed="${console.log}"
                        ></md-time-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Time Picker"
                            @click="${(event) => timePicker2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-time-picker
                            id="timePicker2"
                            value="20:30"
                            @onTimePickerLabelClick="${console.log}"
                            @onTimePickerIconButtonPrevClick="${console.log}"
                            @onTimePickerIconButtonNextClick="${console.log}"
                            @onTimePickerIconButtonClick="${console.log}"
                            @onTimePickerYearItemClick="${console.log}"
                            @onTimePickerMonthItemClick="${console.log}"
                            @onTimePickerDayItemClick="${console.log}"
                            @onTimePickerHourItemClick="${console.log}"
                            @onTimePickerMinuteItemClick="${console.log}"
                            @onTimePickerButtonCancelClick="${console.log}"
                            @onTimePickerButtonOkClick="${(event) => console.log(event.detail.value)}"
                            @onTimePickerButtonLabelClick="${console.log}"
                            @onTimePickerButtonClick="${console.log}"
                            @onTimePickerScrimClosed="${console.log}"
                            @onTimePickerShown="${console.log}"
                            @onTimePickerClosed="${console.log}"
                        ></md-time-picker>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-time-picker", DemoTimePicker);
export default document.createElement("demo-time-picker");

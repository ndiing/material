import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDatetimePicker extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Datetime Picker"
                            @click="${(event) => datetimePicker.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-datetime-picker
                            id="datetimePicker"
                            @onDatetimePickerLabelClick="${console.log}"
                            @onDatetimePickerIconButtonPrevClick="${console.log}"
                            @onDatetimePickerIconButtonNextClick="${console.log}"
                            @onDatetimePickerIconButtonClick="${console.log}"
                            @onDatetimePickerYearItemClick="${console.log}"
                            @onDatetimePickerMonthItemClick="${console.log}"
                            @onDatetimePickerDayItemClick="${console.log}"
                            @onDatetimePickerHourItemClick="${console.log}"
                            @onDatetimePickerMinuteItemClick="${console.log}"
                            @onDatetimePickerButtonCancelClick="${console.log}"
                            @onDatetimePickerButtonOkClick="${(event) => console.log(event.detail.value)}"
                            @onDatetimePickerButtonLabelClick="${console.log}"
                            @onDatetimePickerButtonClick="${console.log}"
                            @onDatetimePickerScrimClosed="${console.log}"
                            @onDatetimePickerShown="${console.log}"
                            @onDatetimePickerClosed="${console.log}"
                        ></md-datetime-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Datetime Picker"
                            @click="${(event) => datetimePicker2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-datetime-picker
                            id="datetimePicker2"
                            value="1990-10-17T20:30"
                            @onDatetimePickerLabelClick="${console.log}"
                            @onDatetimePickerIconButtonPrevClick="${console.log}"
                            @onDatetimePickerIconButtonNextClick="${console.log}"
                            @onDatetimePickerIconButtonClick="${console.log}"
                            @onDatetimePickerYearItemClick="${console.log}"
                            @onDatetimePickerMonthItemClick="${console.log}"
                            @onDatetimePickerDayItemClick="${console.log}"
                            @onDatetimePickerHourItemClick="${console.log}"
                            @onDatetimePickerMinuteItemClick="${console.log}"
                            @onDatetimePickerButtonCancelClick="${console.log}"
                            @onDatetimePickerButtonOkClick="${(event) => console.log(event.detail.value)}"
                            @onDatetimePickerButtonLabelClick="${console.log}"
                            @onDatetimePickerButtonClick="${console.log}"
                            @onDatetimePickerScrimClosed="${console.log}"
                            @onDatetimePickerShown="${console.log}"
                            @onDatetimePickerClosed="${console.log}"
                        ></md-datetime-picker>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-datetime-picker", DemoDatetimePicker);
export default document.createElement("demo-datetime-picker");

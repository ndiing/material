import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDatePicker extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Date Picker"
                            @click="${(event) => datePicker.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-date-picker
                            id="datePicker"
                            @onDatePickerShow="${console.log}"
                            @onDatePickerClose="${console.log}"
                            @onDatePickerShown="${console.log}"
                            @onDatePickerClosed="${console.log}"
                            @onDatePickerIconButtonPrevClick="${console.log}"
                            @onDatePickerIconButtonNextClick="${console.log}"
                            @onDatePickerIconButtonClick="${console.log}"
                            @onDatePickerYearItemClick="${console.log}"
                            @onDatePickerMonthItemClick="${console.log}"
                            @onDatePickerDayItemClick="${console.log}"
                            @onDatePickerButtonCancelClick="${() => datePicker.close()}"
                            @onDatePickerButtonOkClick="${() => datePicker.close()}"
                            @onDatePickerButtonLabelClick="${console.log}"
                            @onDatePickerButtonClick="${console.log}"
                            @onDatePickerScrimClose="${console.log}"
                        ></md-date-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Date Picker"
                            @click="${(event) => datePicker2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-date-picker
                            id="datePicker2"
                            value="1990-10-17"
                            @onDatePickerShow="${console.log}"
                            @onDatePickerClose="${console.log}"
                            @onDatePickerShown="${console.log}"
                            @onDatePickerClosed="${console.log}"
                            @onDatePickerIconButtonPrevClick="${console.log}"
                            @onDatePickerIconButtonNextClick="${console.log}"
                            @onDatePickerIconButtonClick="${console.log}"
                            @onDatePickerYearItemClick="${console.log}"
                            @onDatePickerMonthItemClick="${console.log}"
                            @onDatePickerDayItemClick="${console.log}"
                            @onDatePickerButtonCancelClick="${() => datePicker2.close()}"
                            @onDatePickerButtonOkClick="${() => datePicker2.close()}"
                            @onDatePickerButtonLabelClick="${console.log}"
                            @onDatePickerButtonClick="${console.log}"
                            @onDatePickerScrimClose="${console.log}"
                        ></md-date-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-date-picker", DemoDatePicker);

export default document.createElement("demo-date-picker");

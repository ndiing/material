import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoMonthPicker extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Month Picker"
                            @click="${(event) => monthPicker.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-month-picker
                            id="monthPicker"
                            @onMonthPickerShow="${console.log}"
                            @onMonthPickerClose="${console.log}"
                            @onMonthPickerShown="${console.log}"
                            @onMonthPickerClosed="${console.log}"
                            @onMonthPickerIconButtonPrevClick="${console.log}"
                            @onMonthPickerIconButtonNextClick="${console.log}"
                            @onMonthPickerIconButtonClick="${console.log}"
                            @onMonthPickerYearItemClick="${console.log}"
                            @onMonthPickerMonthItemClick="${console.log}"
                            @onMonthPickerButtonCancelClick="${() => monthPicker.close()}"
                            @onMonthPickerButtonOkClick="${() => monthPicker.close()}"
                            @onMonthPickerButtonLabelClick="${console.log}"
                            @onMonthPickerButtonClick="${console.log}"
                            @onMonthPickerScrimClose="${console.log}"
                        ></md-month-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Month Picker"
                            @click="${(event) => monthPicker2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-month-picker
                            id="monthPicker2"
                            value="1990-10"
                            @onMonthPickerShow="${console.log}"
                            @onMonthPickerClose="${console.log}"
                            @onMonthPickerShown="${console.log}"
                            @onMonthPickerClosed="${console.log}"
                            @onMonthPickerIconButtonPrevClick="${console.log}"
                            @onMonthPickerIconButtonNextClick="${console.log}"
                            @onMonthPickerIconButtonClick="${console.log}"
                            @onMonthPickerYearItemClick="${console.log}"
                            @onMonthPickerMonthItemClick="${console.log}"
                            @onMonthPickerButtonCancelClick="${() => monthPicker2.close()}"
                            @onMonthPickerButtonOkClick="${() => monthPicker2.close()}"
                            @onMonthPickerButtonLabelClick="${console.log}"
                            @onMonthPickerButtonClick="${console.log}"
                            @onMonthPickerScrimClose="${console.log}"
                        ></md-month-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-month-picker", DemoMonthPicker);

export default document.createElement("demo-month-picker");

import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoWeekPicker extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Week Picker"
                            @click="${(event) => weekPicker.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-week-picker
                            id="weekPicker"
                            @onWeekPickerShow="${console.log}"
                            @onWeekPickerClose="${console.log}"
                            @onWeekPickerShown="${console.log}"
                            @onWeekPickerClosed="${console.log}"
                            @onWeekPickerIconButtonPrevClick="${console.log}"
                            @onWeekPickerIconButtonNextClick="${console.log}"
                            @onWeekPickerIconButtonClick="${console.log}"
                            @onWeekPickerYearItemClick="${console.log}"
                            @onWeekPickerMonthItemClick="${console.log}"
                            @onWeekPickerWeekItemClick="${console.log}"
                            @onWeekPickerButtonCancelClick="${() => weekPicker.close()}"
                            @onWeekPickerButtonOkClick="${() => weekPicker.close()}"
                            @onWeekPickerButtonLabelClick="${console.log}"
                            @onWeekPickerButtonClick="${console.log}"
                            @onWeekPickerScrimClose="${console.log}"
                        ></md-week-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Week Picker"
                            @click="${(event) => weekPicker2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-week-picker
                            id="weekPicker2"
                            value="1990-W42"
                            @onWeekPickerShow="${console.log}"
                            @onWeekPickerClose="${console.log}"
                            @onWeekPickerShown="${console.log}"
                            @onWeekPickerClosed="${console.log}"
                            @onWeekPickerIconButtonPrevClick="${console.log}"
                            @onWeekPickerIconButtonNextClick="${console.log}"
                            @onWeekPickerIconButtonClick="${console.log}"
                            @onWeekPickerYearItemClick="${console.log}"
                            @onWeekPickerMonthItemClick="${console.log}"
                            @onWeekPickerWeekItemClick="${console.log}"
                            @onWeekPickerButtonCancelClick="${() => weekPicker2.close()}"
                            @onWeekPickerButtonOkClick="${() => weekPicker2.close()}"
                            @onWeekPickerButtonLabelClick="${console.log}"
                            @onWeekPickerButtonClick="${console.log}"
                            @onWeekPickerScrimClose="${console.log}"
                        ></md-week-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-week-picker", DemoWeekPicker);

export default document.createElement("demo-week-picker");

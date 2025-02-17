import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTimePickerModal extends MdComponent {
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
                            modal
                            @onTimePickerShow="${console.log}"
                            @onTimePickerClose="${console.log}"
                            @onTimePickerShown="${console.log}"
                            @onTimePickerClosed="${console.log}"
                            @onTimePickerIconButtonPrevClick="${console.log}"
                            @onTimePickerIconButtonNextClick="${console.log}"
                            @onTimePickerIconButtonClick="${console.log}"
                            @onTimePickerHourItemClick="${console.log}"
                            @onTimePickerMinuteItemClick="${console.log}"
                            @onTimePickerButtonCancelClick="${() => timePicker.close()}"
                            @onTimePickerButtonOkClick="${() => timePicker.close()}"
                            @onTimePickerButtonLabelClick="${console.log}"
                            @onTimePickerButtonClick="${console.log}"
                            @onTimePickerScrimClose="${console.log}"
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
                            modal
                            @onTimePickerShow="${console.log}"
                            @onTimePickerClose="${console.log}"
                            @onTimePickerShown="${console.log}"
                            @onTimePickerClosed="${console.log}"
                            @onTimePickerIconButtonPrevClick="${console.log}"
                            @onTimePickerIconButtonNextClick="${console.log}"
                            @onTimePickerIconButtonClick="${console.log}"
                            @onTimePickerHourItemClick="${console.log}"
                            @onTimePickerMinuteItemClick="${console.log}"
                            @onTimePickerButtonCancelClick="${() => timePicker2.close()}"
                            @onTimePickerButtonOkClick="${() => timePicker2.close()}"
                            @onTimePickerButtonLabelClick="${console.log}"
                            @onTimePickerButtonClick="${console.log}"
                            @onTimePickerScrimClose="${console.log}"
                        ></md-time-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-time-picker-modal", DemoTimePickerModal);

export default document.createElement("demo-time-picker-modal");

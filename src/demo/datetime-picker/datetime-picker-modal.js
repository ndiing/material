import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDatetimePickerModal extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Toggle Datetime Picker" @click="${(event) => datetimePicker.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-datetime-picker id="datetimePicker" modal @onDatetimePickerButtonCancelClick="${() => datetimePicker.close()}" @onDatetimePickerButtonOkClick="${() => datetimePicker.close()}"></md-datetime-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Toggle Datetime Picker" @click="${(event) => datetimePicker2.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-datetime-picker id="datetimePicker2" value="1990-10-17T20:30" modal @onDatetimePickerButtonCancelClick="${() => datetimePicker2.close()}" @onDatetimePickerButtonOkClick="${() => datetimePicker2.close()}"></md-datetime-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-datetime-picker-modal", DemoDatetimePickerModal);

export default document.createElement("demo-datetime-picker-modal");

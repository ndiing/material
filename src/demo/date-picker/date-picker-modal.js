import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDatePickerModal extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Toggle Date Picker" @click="${(event) => datePicker.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-date-picker id="datePicker" modal @onDatePickerButtonCancelClick="${() => datePicker.close()}" @onDatePickerButtonOkClick="${() => datePicker.close()}"></md-date-picker>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Toggle Date Picker" @click="${(event) => datePicker2.toggle({ trigger: event.currentTarget })}"></md-button>
                        <md-date-picker id="datePicker2" value="1990-10-17" modal @onDatePickerButtonCancelClick="${() => datePicker2.close()}" @onDatePickerButtonOkClick="${() => datePicker2.close()}"></md-date-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-date-picker-modal", DemoDatePickerModal);

export default document.createElement("demo-date-picker-modal");

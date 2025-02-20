import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoMonthPickerModal extends MdComponent {
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
                            modal
                            @onMonthPickerButtonCancelClick="${() => monthPicker.close()}"
                            @onMonthPickerButtonOkClick="${() => monthPicker.close()}"
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
                            modal
                            @onMonthPickerButtonCancelClick="${() => monthPicker2.close()}"
                            @onMonthPickerButtonOkClick="${() => monthPicker2.close()}"
                        ></md-month-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-month-picker-modal", DemoMonthPickerModal);

export default document.createElement("demo-month-picker-modal");

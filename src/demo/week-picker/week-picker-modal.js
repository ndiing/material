import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoWeekPickerModal extends MdComponent {
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
                            modal
                            @onWeekPickerButtonCancelClick="${() => weekPicker.close()}"
                            @onWeekPickerButtonOkClick="${() => weekPicker.close()}"
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
                            modal
                            @onWeekPickerButtonCancelClick="${() => weekPicker2.close()}"
                            @onWeekPickerButtonOkClick="${() => weekPicker2.close()}"
                        ></md-week-picker>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-week-picker-modal", DemoWeekPickerModal);

export default document.createElement("demo-week-picker-modal");

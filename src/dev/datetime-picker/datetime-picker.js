import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyDatetimeLocal } from "../../material/functions/functions.js";

class DevDatetimePickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="datetimeLocal">Select datetime-local</label>
                    <input
                        id="datetimeLocal"
                        name="datetime-local"
                        type="datetime-local"
                        value="1990-10-17T20:30"
                        @input="${this.handleDatetimeLocalInput}"
                    />
                    <md-datetime-picker
                        id="datetimePicker"
                        value="1990-10-17T20:30"
                        @onDatetimePickerButtonCancelClick="${this.handleDatetimePickerButtonCancelClick}"
                        @onDatetimePickerButtonOkClick="${this.handleDatetimePickerButtonOkClick}"
                        @onDatetimePickerSelection="${this.handleDatetimePickerSelection}"
                    ></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker"
                        @click="${this.handleDatetimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-picker id="datetimePicker2"></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker 2"
                        @click="${this.handleDatetimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get datetimeLocal() {
        return this.querySelector("#datetimeLocal");
    }

    get datetimePicker() {
        return this.querySelector("#datetimePicker");
    }

    get datetimePicker2() {
        return this.querySelector("#datetimePicker2");
    }

    // button
    handleDatetimePickerButtonClick(event) {
        this.datetimePicker.showModal(event.currentTarget);
    }

    handleDatetimePickerButtonClick2(event) {
        this.datetimePicker2.showModal(event.currentTarget);
    }

    // input
    handleDatetimeLocalInput() {
        this.datetimePicker.value = this.datetimeLocal.value;
    }

    // datetime-picker
    handleDatetimePickerButtonCancelClick() {
        this.datetimeLocal.value = this.datetimePicker.value;
        this.datetimePicker.close();
    }

    handleDatetimePickerButtonOkClick() {
        this.datetimeLocal.value = this.datetimePicker.value;
        this.datetimePicker.close();
    }

    handleDatetimePickerSelection() {
        this.datetimeLocal.value = stringifyDatetimeLocal(this.datetimePicker.selection);
    }
}

customElements.define("dev-datetime-picker", DevDatetimePickerComponent);

export default document.createElement("dev-datetime-picker");

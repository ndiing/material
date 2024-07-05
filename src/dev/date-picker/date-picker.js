import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyDate } from "../../material/functions/functions.js";

class DevDatePickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="date">Select date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value="1990-10-17"
                        @input="${this.handleDateInput}"
                    />
                    <md-date-picker
                        id="datePicker"
                        value="1990-10-17"
                        @onDatePickerButtonCancelClick="${this.handleDatePickerButtonCancelClick}"
                        @onDatePickerButtonOkClick="${this.handleDatePickerButtonOkClick}"
                        @onDatePickerSelection="${this.handleDatePickerSelection}"
                    ></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker"
                        @click="${this.handleDatePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-picker id="datePicker2"></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker 2"
                        @click="${this.handleDatePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get date() {
        return this.querySelector("#date");
    }

    get datePicker() {
        return this.querySelector("#datePicker");
    }

    get datePicker2() {
        return this.querySelector("#datePicker2");
    }

    // button
    handleDatePickerButtonClick(event) {
        this.datePicker.showModal(event.currentTarget);
    }

    handleDatePickerButtonClick2(event) {
        this.datePicker2.showModal(event.currentTarget);
    }

    // input
    handleDateInput() {
        this.datePicker.value = this.date.value;
    }

    // date-picker
    handleDatePickerButtonCancelClick() {
        this.date.value = this.datePicker.value;
        this.datePicker.close();
    }

    handleDatePickerButtonOkClick() {
        this.date.value = this.datePicker.value;
        this.datePicker.close();
    }

    handleDatePickerSelection() {
        this.date.value = stringifyDate(this.datePicker.selection);
    }
}

customElements.define("dev-date-picker", DevDatePickerComponent);

export default document.createElement("dev-date-picker");

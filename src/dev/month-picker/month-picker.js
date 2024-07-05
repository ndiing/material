import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyMonth } from "../../material/functions/functions.js";

class DevMonthPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="month">Select month</label>
                    <input
                        id="month"
                        name="month"
                        type="month"
                        value="1990-10"
                        @input="${this.handleMonthInput}"
                    />
                    <md-month-picker
                        id="monthPicker"
                        value="1990-10"
                        @onMonthPickerButtonCancelClick="${this.handleMonthPickerButtonCancelClick}"
                        @onMonthPickerButtonOkClick="${this.handleMonthPickerButtonOkClick}"
                        @onMonthPickerSelection="${this.handleMonthPickerSelection}"
                    ></md-month-picker>
                    <md-button
                        variant="tonal"
                        label="Month Picker"
                        @click="${this.handleMonthPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-month-picker id="monthPicker2"></md-month-picker>
                    <md-button
                        variant="tonal"
                        label="Month Picker 2"
                        @click="${this.handleMonthPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get month() {
        return this.querySelector("#month");
    }

    get monthPicker() {
        return this.querySelector("#monthPicker");
    }

    get monthPicker2() {
        return this.querySelector("#monthPicker2");
    }

    // button
    handleMonthPickerButtonClick(event) {
        this.monthPicker.showModal(event.currentTarget);
    }

    handleMonthPickerButtonClick2(event) {
        this.monthPicker2.showModal(event.currentTarget);
    }

    // input
    handleMonthInput() {
        this.monthPicker.value = this.month.value;
    }

    // month-picker
    handleMonthPickerButtonCancelClick() {
        this.month.value = this.monthPicker.value;
        this.monthPicker.close();
    }

    handleMonthPickerButtonOkClick() {
        this.month.value = this.monthPicker.value;
        this.monthPicker.close();
    }

    handleMonthPickerSelection() {
        this.month.value = stringifyMonth(this.monthPicker.selection);
    }
}

customElements.define("dev-month-picker", DevMonthPickerComponent);

export default document.createElement("dev-month-picker");

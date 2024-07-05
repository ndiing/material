import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyWeek } from "../../material/functions/functions.js";

class DevWeekPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="week">Select week</label>
                    <input
                        id="week"
                        name="week"
                        type="week"
                        value="1990-W42"
                        @input="${this.handleWeekInput}"
                    />
                    <md-week-picker
                        id="weekPicker"
                        value="1990-W42"
                        @onWeekPickerButtonCancelClick="${this.handleWeekPickerButtonCancelClick}"
                        @onWeekPickerButtonOkClick="${this.handleWeekPickerButtonOkClick}"
                        @onWeekPickerSelection="${this.handleWeekPickerSelection}"
                    ></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker"
                        @click="${this.handleWeekPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="weekPicker2"></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker 2"
                        @click="${this.handleWeekPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get week() {
        return this.querySelector("#week");
    }

    get weekPicker() {
        return this.querySelector("#weekPicker");
    }

    get weekPicker2() {
        return this.querySelector("#weekPicker2");
    }

    // button
    handleWeekPickerButtonClick(event) {
        this.weekPicker.showModal(event.currentTarget);
    }

    handleWeekPickerButtonClick2(event) {
        this.weekPicker2.showModal(event.currentTarget);
    }

    // input
    handleWeekInput() {
        this.weekPicker.value = this.week.value;
    }

    // week-picker
    handleWeekPickerButtonCancelClick() {
        this.week.value = this.weekPicker.value;
        this.weekPicker.close();
    }

    handleWeekPickerButtonOkClick() {
        this.week.value = this.weekPicker.value;
        this.weekPicker.close();
    }

    handleWeekPickerSelection() {
        this.week.value = stringifyWeek(this.weekPicker.selection);
    }
}

customElements.define("dev-week-picker", DevWeekPickerComponent);

export default document.createElement("dev-week-picker");

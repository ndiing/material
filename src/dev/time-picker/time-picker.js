import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyTime } from "../../material/functions/functions.js";

class DevTimePickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="time">Select time</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value="20:30"
                        @input="${this.handleTimeInput}"
                    />
                    <md-time-picker
                        id="timePicker"
                        value="20:30"
                        @onTimePickerButtonCancelClick="${this.handleTimePickerButtonCancelClick}"
                        @onTimePickerButtonOkClick="${this.handleTimePickerButtonOkClick}"
                        @onTimePickerSelection="${this.handleTimePickerSelection}"
                    ></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker"
                        @click="${this.handleTimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker id="timePicker2"></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker 2"
                        @click="${this.handleTimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get time() {
        return this.querySelector("#time");
    }

    get timePicker() {
        return this.querySelector("#timePicker");
    }

    get timePicker2() {
        return this.querySelector("#timePicker2");
    }

    // button
    handleTimePickerButtonClick(event) {
        this.timePicker.showModal(event.currentTarget);
    }

    handleTimePickerButtonClick2(event) {
        this.timePicker2.showModal(event.currentTarget);
    }

    // input
    handleTimeInput() {
        this.timePicker.value = this.time.value;
    }

    // time-picker
    handleTimePickerButtonCancelClick() {
        this.time.value = this.timePicker.value;
        this.timePicker.close();
    }

    handleTimePickerButtonOkClick() {
        this.time.value = this.timePicker.value;
        this.timePicker.close();
    }

    handleTimePickerSelection() {
        this.time.value = stringifyTime(this.timePicker.selection);
    }
}

customElements.define("dev-time-picker", DevTimePickerComponent);

export default document.createElement("dev-time-picker");

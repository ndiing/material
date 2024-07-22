import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { stringifyDatetimeLocal } from "../../material/functions/functions.js";

class DevPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-picker id="datetimePicker"></md-datetime-picker>
                    <md-button variant="tonal" label="Datetime Picker" @click="${this.handleDatetimePickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-picker id="datePicker"></md-date-picker>
                    <md-button variant="tonal" label="Date Picker" @click="${this.handleDatePickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-month-picker id="monthPicker"></md-month-picker>
                    <md-button variant="tonal" label="Month Picker" @click="${this.handleMonthPickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker id="timePicker"></md-time-picker>
                    <md-button variant="tonal" label="Time Picker" @click="${this.handleTimePickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="weekPicker"></md-week-picker>
                    <md-button variant="tonal" label="Week Picker" @click="${this.handleWeekPickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="colorPicker"></md-color-picker>
                    <md-button variant="tonal" label="Color Picker" @click="${this.handleColorPickerButtonClick}"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-emoji-picker id="emojiPicker"></md-emoji-picker>
                    <md-button variant="tonal" label="Emoji Picker" @click="${this.handleEmojiPickerButtonClick}"></md-button>
                </div>
            </div>
        `;
    }

    get datetimePicker() {
        return this.querySelector("#datetimePicker");
    }

    handleDatetimePickerButtonClick(event) {
        this.datetimePicker.showModal(event.currentTarget);
    }

    get datePicker() {
        return this.querySelector("#datePicker");
    }

    handleDatePickerButtonClick(event) {
        this.datePicker.showModal(event.currentTarget);
    }

    get monthPicker() {
        return this.querySelector("#monthPicker");
    }

    handleMonthPickerButtonClick(event) {
        this.monthPicker.showModal(event.currentTarget);
    }

    get timePicker() {
        return this.querySelector("#timePicker");
    }

    handleTimePickerButtonClick(event) {
        this.timePicker.showModal(event.currentTarget);
    }

    get weekPicker() {
        return this.querySelector("#weekPicker");
    }

    handleWeekPickerButtonClick(event) {
        this.weekPicker.showModal(event.currentTarget);
    }

    get colorPicker() {
        return this.querySelector("#colorPicker");
    }

    handleColorPickerButtonClick(event) {
        this.colorPicker.showModal(event.currentTarget);
    }

    get emojiPicker() {
        return this.querySelector("#emojiPicker");
    }

    handleEmojiPickerButtonClick(event) {
        this.emojiPicker.showModal(event.currentTarget);
    }
}

customElements.define("dev-picker", DevPickerComponent);

export default document.createElement("dev-picker");

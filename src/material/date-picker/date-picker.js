import { html } from "lit";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { parseDate, stringifyDate, stringifyYear } from "../functions/functions.js";

/**
 * Custom date picker component.
 * @element md-date-picker
 * @extends MDDatetimePickerComponent
 * @fires MDDatePickerComponent#onDatePickerIconButtonPrevClick - Fires when the previous icon button is clicked.
 * @fires MDDatePickerComponent#onDatePickerIconButtonNextClick - Fires when the next icon button is clicked.
 * @fires MDDatePickerComponent#onDatePickerButtonLabelClick - Fires when the label button is clicked.
 * @fires MDDatePickerComponent#onDatePickerButtonCancelClick - Fires when the cancel button is clicked.
 * @fires MDDatePickerComponent#onDatePickerButtonOkClick - Fires when the OK button is clicked.
 * @fires MDDatePickerComponent#onDatePickerYearItemClick - Fires when a year item is clicked.
 * @fires MDDatePickerComponent#onDatePickerMonthItemClick - Fires when a month item is clicked.
 * @fires MDDatePickerComponent#onDatePickerSelection - Fires when a date is selected.
 * @fires MDDatePickerComponent#onDatePickerDayItemClick - Fires when a day item is clicked.
 */
class MDDatePickerComponent extends MDDatetimePickerComponent {
    /**
     * Gets the leading actions for the date picker.
     * @returns {Array} The leading actions array.
     */
    get leadingActions() {
        let label;

        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyYear(this.selection);
        } else if (this.index === 2) {
            label = stringifyDate(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * Gets the child nodes for the date picker.
     * @returns {Array} The child nodes array.
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `];
    }

    /**
     * Sets the child nodes for the date picker.
     * @param {Array} value - The new child nodes array.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Lifecycle method called when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-picker");
    }

    /**
     * Updates the date selection based on the current value.
     * @private
     */
    updateDate() {
        const date = parseDate(this.value);
        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selection.setDate(date.getDate());
        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
    }

    /**
     * Handles the previous icon button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() - 1);
        }
        this.requestUpdate();
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerIconButtonPrevClick", event);
    }

    /**
     * Handles the next icon button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardIconButtonNextClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() + 1);
        }
        this.requestUpdate();
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerIconButtonNextClick", event);
    }

    /**
     * Handles the label button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 2;
        } else if (this.index === 1) {
            this.index = 0;
        } else if (this.index === 2) {
            this.index = 1;
        }
        this.emit("onDatePickerButtonLabelClick", event);
    }

    /**
     * Handles the cancel button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerButtonCancelClick", event);
    }

    /**
     * Handles the OK button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.selected.setDate(this.selection.getDate());
        this.value = this.getValue();
        this.requestUpdate();
        this.index = 2;
        this.emit("onDatePickerButtonOkClick", event);
    }

    /**
     * Handles the year item click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatePickerYearItemClick", event);
    }

    /**
     * Handles the month item click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerMonthItemClick", event);
    }

    /**
     * Handles the day item click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.requestUpdate();
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerDayItemClick", event);
    }

    /**
     * Gets the current value of the date picker.
     * @returns {string} The current date value.
     * @private
     */
    getValue() {
        return stringifyDate(this.selected);
    }
}
customElements.define("md-date-picker", MDDatePickerComponent);
export { MDDatePickerComponent };

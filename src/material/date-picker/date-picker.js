import { html } from "lit";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { parseDate, stringifyDate, stringifyYear } from "../functions/functions.js";

/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @element md-date-picker
 * @fires MDDatePickerComponent#onSheetShow - {{desc}}
 * @fires MDDatePickerComponent#onSheetClose - {{desc}}
 * @fires MDDatePickerComponent#onSheetScrimClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerSelection - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerIconButtonPrevClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerIconButtonNextClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerButtonLabelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerButtonCancelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerButtonOkClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerYearItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerMonthItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerDayItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerHourItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatetimePickerMinuteItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonLabelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerSelection - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerIconButtonPrevClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerIconButtonNextClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerYearItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerMonthItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerDayItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonCancelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonOkClick - {{desc}}
 */
class MDDatePickerComponent extends MDDatetimePickerComponent {
    /**
     * {{desc}}
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
        return [{ component: "button", variant: "icon-right", icon: "arrow_drop_down", label, onButtonClick: this.handleCardButtonLabelClick }];
    }

    /**
     * {{desc}}
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
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-picker");
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    getValue() {
        return stringifyDate(this.selected);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatePickerYearItemClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerMonthItemClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
}
customElements.define("md-date-picker", MDDatePickerComponent);
export { MDDatePickerComponent };

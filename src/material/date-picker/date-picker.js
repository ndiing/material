import { html } from "lit";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { parseDate, stringifyDate, stringifyYear } from "../functions/functions.js";


/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @tagname md-date-picker
 * @fires MDDatePickerComponent#onDatePickerSelection - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerIconButtonPrevClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerIconButtonNextClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonLabelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonCancelClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerButtonOkClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerYearItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerMonthItemClick - {{desc}}
 * @fires MDDatePickerComponent#onDatePickerDayItemClick - {{desc}}
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
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    
    /**
     * {{desc}}
     */
    get body() {
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
     */
    set body(value) {
        this._body = value;
    }

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

    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.selected.setDate(this.selection.getDate());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onDatePickerButtonOkClick", event);
    }

    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatePickerYearItemClick", event);
    }

    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onDatePickerSelection", event);
        this.emit("onDatePickerMonthItemClick", event);
    }

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
     */
    getValue() {
        return stringifyDate(this.selected);
    }
}

customElements.define("md-date-picker", MDDatePickerComponent);

export { MDDatePickerComponent };

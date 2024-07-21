import { parseMonth, stringifyMonth } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @element md-month-picker
 * @fires MDMonthPickerComponent#onMonthPickerButtonLabelClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonPrevClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonNextClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerYearItemClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerMonthItemClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonCancelClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonOkClick - {{desc}}
 */
class MDMonthPickerComponent extends MDDatetimePickerComponent {
    /**
     * {{desc}}
     */
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyMonth(this.selection);
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
            </div>
        `];
    }

    /**
     * {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.index = 1;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-picker");
    }

    /**
     * {{desc}}
     */
    updateDate() {
        const date = parseMonth(this.value);
        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
    }

    /**
     * {{desc}}
     */
    getValue() {
        return stringifyMonth(this.selected);
    }

    /**
     * {{desc}}
     */
    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 1;
        } else if (this.index === 1) {
            this.index = 0;
        }
        this.emit("onMonthPickerButtonLabelClick", event);
    }

    /**
     * {{desc}}
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        }
        this.requestUpdate();
        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonPrevClick", event);
    }

    /**
     * {{desc}}
     */
    handleCardIconButtonNextClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        }
        this.requestUpdate();
        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonNextClick", event);
    }

    /**
     * {{desc}}
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerYearItemClick", event);
    }

    /**
     * {{desc}}
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.requestUpdate();
        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerMonthItemClick", event);
    }

    /**
     * {{desc}}
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 1;
        this.emit("onMonthPickerButtonCancelClick", event);
    }

    /**
     * {{desc}}
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.value = this.getValue();
        this.requestUpdate();
        this.index = 1;
        this.emit("onMonthPickerButtonOkClick", event);
    }
}
customElements.define("md-month-picker", MDMonthPickerComponent);
export { MDMonthPickerComponent };

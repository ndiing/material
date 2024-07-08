import { parseMonth, stringifyMonth } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{description}}
 * @element md-month-picker
 * @extends MDDatetimePickerComponent
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonPrevClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonNextClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonLabelClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonCancelClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonOkClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerYearItemClick - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{description}}
 * @fires MDMonthPickerComponent#onMonthPickerMonthItemClick - {{description}}
 */
class MDMonthPickerComponent extends MDDatetimePickerComponent {
    /**
     * {{description}}
     */
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyMonth(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
            </div>
        `];
    }

    /**
     * {{description}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.index = 1;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-month-picker");
    }

    /**
     * {{description}}
     */
    updateDate() {
        const date = parseMonth(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
    }

    /**
     * @private
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
     * @private
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
     * @private
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
     * @private
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 1;

        this.emit("onMonthPickerButtonCancelClick", event);
    }

    /**
     * @private
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerButtonOkClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerYearItemClick", event);
    }

    /**
     * @private
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
     * {{description}}
     */
    getValue() {
        return stringifyMonth(this.selected);
    }
}

customElements.define("md-month-picker", MDMonthPickerComponent);

export { MDMonthPickerComponent };

import { parseMonth, stringifyMonth } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";



/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @tagname md-month-picker
 * @fires MDMonthPickerComponent#onMonthPickerSelection - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonPrevClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonNextClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonLabelClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonCancelClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerButtonOkClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerYearItemClick - {{desc}}
 * @fires MDMonthPickerComponent#onMonthPickerMonthItemClick - {{desc}}
 */
class MDMonthPickerComponent extends MDDatetimePickerComponent {
    
    
    /**
     * {{desc}}
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index == 1) {
            label = stringifyMonth(this.selection);
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
            </div>
        `];
    }

    
    
    /**
     * {{desc}}
     */
    set body(value) {
        this._body = value;
    }

    constructor() {
        super();
        this.index = 1;
    }

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

    handleCardIconButtonPrevClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        }

        this.requestUpdate();

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonPrevClick", event);
    }

    handleCardIconButtonNextClick(event) {
        if (this.index == 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index == 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        }

        this.requestUpdate();

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerIconButtonNextClick", event);
    }

    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }

        this.emit("onMonthPickerButtonLabelClick", event);
    }

    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerButtonOkClick", event);
    }

    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onMonthPickerSelection", event);
        this.emit("onMonthPickerYearItemClick", event);
    }

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
    getValue() {
        return stringifyMonth(this.selected);
    }
}

customElements.define("md-month-picker", MDMonthPickerComponent);

export { MDMonthPickerComponent };

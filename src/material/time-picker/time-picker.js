import { parseTime, stringifyTime } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{description}}
 * @element md-time-picker
 * @extends MDDatetimePickerComponent
 * @fires MDTimePickerComponent#onTimePickerIconButtonPrevClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerIconButtonNextClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerButtonLabelClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerButtonCancelClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerButtonOkClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerHourItemClick - {{description}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{description}}
 * @fires MDTimePickerComponent#onTimePickerMinuteItemClick - {{description}}
 */
class MDTimePickerComponent extends MDDatetimePickerComponent {
    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
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
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = stringifyTime(this.selection);
        } else if (this.index === 1) {
            label = stringifyTime(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.index = 0;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-time-picker");
    }

    /**
     * {{description}}
     * @private
     */
    updateDate() {
        const date = parseTime(this.value);

        this.selection.setHours(date.getHours());
        this.selection.setMinutes(date.getMinutes());

        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * @private
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index === 0) {
            this.selection.setHours(this.selection.getHours() - 1);

            this.selected.setHours(this.selection.getHours());
        } else if (this.index === 1) {
            this.selection.setMinutes(this.selection.getMinutes() - 1);

            this.selected.setMinutes(this.selection.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerIconButtonPrevClick", event);
    }

    /**
     * @private
     */
    handleCardIconButtonNextClick(event) {
        if (this.index === 0) {
            this.selection.setHours(this.selection.getHours() + 1);

            this.selected.setHours(this.selection.getHours());
        } else if (this.index === 1) {
            this.selection.setMinutes(this.selection.getMinutes() + 1);

            this.selected.setMinutes(this.selection.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerIconButtonNextClick", event);
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

        this.emit("onTimePickerButtonLabelClick", event);
    }

    /**
     * @private
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 0;

        this.emit("onTimePickerButtonCancelClick", event);
    }

    /**
     * @private
     */
    handleCardButtonOkClick(event) {
        this.selected.setMinutes(this.selection.getMinutes());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerButtonOkClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.selection.setHours(data.hour);

        this.index = 1;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerHourItemClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.selection.setHours(data.hour);
        this.selection.setMinutes(data.minute);

        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerMinuteItemClick", event);
    }

    /**
     * {{description}}
     * @private
     */
    getValue() {
        return stringifyTime(this.selected);
    }
}

customElements.define("md-time-picker", MDTimePickerComponent);

export { MDTimePickerComponent };

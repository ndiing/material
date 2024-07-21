import { parseTime, stringifyTime } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @element md-time-picker
 * @fires MDTimePickerComponent#onTimePickerButtonLabelClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerIconButtonPrevClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerIconButtonNextClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerHourItemClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerMinuteItemClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerButtonCancelClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerButtonOkClick - {{desc}}
 */
class MDTimePickerComponent extends MDDatetimePickerComponent {
    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
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
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = stringifyTime(this.selection);
        } else if (this.index === 1) {
            label = stringifyTime(this.selection);
        }
        return [{ component: "button", variant: "icon-right", icon: "arrow_drop_down", label, onButtonClick: this.handleCardButtonLabelClick }];
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.index = 0;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
    }

    /**
     * {{desc}}
     */
    updateDate() {
        const date = parseTime(this.value);
        this.selection.setHours(date.getHours());
        this.selection.setMinutes(date.getMinutes());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * {{desc}}
     */
    getValue() {
        return stringifyTime(this.selected);
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
        this.emit("onTimePickerButtonLabelClick", event);
    }

    /**
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 0;
        this.emit("onTimePickerButtonCancelClick", event);
    }

    /**
     * {{desc}}
     */
    handleCardButtonOkClick(event) {
        this.selected.setMinutes(this.selection.getMinutes());
        this.value = this.getValue();
        this.requestUpdate();
        this.index = 0;
        this.emit("onTimePickerButtonOkClick", event);
    }
}
customElements.define("md-time-picker", MDTimePickerComponent);
export { MDTimePickerComponent };

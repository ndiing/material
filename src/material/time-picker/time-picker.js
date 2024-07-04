import { parseTime, stringifyTime } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @tagname md-time-picker
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerIconButtonPrevClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerIconButtonNextClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerButtonLabelClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerButtonCancelClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerButtonOkClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerHourItemClick - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerSelection - {{desc}}
 * @fires MDTimePickerComponent#onTimePickerMinuteItemClick - {{desc}}
 */
class MDTimePickerComponent extends MDDatetimePickerComponent {
    /**
     * {{desc}}
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
     * {{desc}}
     */
    set body(value) {
        this._body = value;
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
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    constructor() {
        super();
        this.index = 0;
    }

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

    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 1;
        } else if (this.index === 1) {
            this.index = 0;
        }

        this.emit("onTimePickerButtonLabelClick", event);
    }

    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.selected.setMinutes(this.selection.getMinutes());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerButtonOkClick", event);
    }

    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.selection.setHours(data.hour);

        this.index = 1;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerHourItemClick", event);
    }

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
    getValue() {
        return stringifyTime(this.selected);
    }
}

customElements.define("md-time-picker", MDTimePickerComponent);

export { MDTimePickerComponent };

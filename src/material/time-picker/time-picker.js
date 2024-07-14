import { parseTime, stringifyTime } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * Custom time picker component for selecting hours and minutes.
 * @element md-time-picker
 * @extends MDDatetimePickerComponent
 * @fires MDTimePickerComponent#onTimePickerIconButtonPrevClick - When the previous button is clicked.
 * @fires MDTimePickerComponent#onTimePickerIconButtonNextClick - When the next button is clicked.
 * @fires MDTimePickerComponent#onTimePickerButtonLabelClick - When the label button is clicked.
 * @fires MDTimePickerComponent#onTimePickerButtonCancelClick - When the cancel button is clicked.
 * @fires MDTimePickerComponent#onTimePickerButtonOkClick - When the OK button is clicked.
 * @fires MDTimePickerComponent#onTimePickerHourItemClick - When an hour item is clicked.
 * @fires MDTimePickerComponent#onTimePickerMinuteItemClick - When a minute item is clicked.
 */
class MDTimePickerComponent extends MDDatetimePickerComponent {
    /**
     * Returns the child nodes for rendering hours and minutes.
     * @returns {TemplateResult[]} Array of Lit HTML template results.
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
     * Sets the child nodes.
     * @param {TemplateResult[]} value - Array of Lit HTML template results.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Returns the leading actions with the current time label.
     * @returns {object[]} Array of action objects with icon, variant, name, component, and label properties.
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
     * Initializes the component with default index.
     */
    constructor() {
        super();
        this.index = 0;
    }

    /**
     * Lifecycle callback when the element is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
    }

    /**
     * Updates the date selection based on the input value.
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
     * Handles click on the previous button in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the next button in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the label button in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the cancel button in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the OK button in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the hour item in the time picker.
     * @param {Event} event - The click event object.
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
     * Handles click on the minute item in the time picker.
     * @param {Event} event - The click event object.
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
     * Returns the formatted time value.
     * @returns {string} Formatted time string.
     * @private
     */
    getValue() {
        return stringifyTime(this.selected);
    }
}
customElements.define("md-time-picker", MDTimePickerComponent);
export { MDTimePickerComponent };

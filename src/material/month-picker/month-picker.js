import { parseMonth, stringifyMonth } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * Custom month picker component that extends MDDatetimePickerComponent.
 * @element md-month-picker
 * @extends MDDatetimePickerComponent
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonPrevClick - Event fired when the previous button is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerIconButtonNextClick - Event fired when the next button is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerButtonLabelClick - Event fired when the label button is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerButtonCancelClick - Event fired when the cancel button is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerButtonOkClick - Event fired when the OK button is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerYearItemClick - Event fired when a year item is clicked.
 * @fires MDMonthPickerComponent#onMonthPickerSelection - Event fired when a selection is made in the month picker.
 * @fires MDMonthPickerComponent#onMonthPickerMonthItemClick - Event fired when a month item is clicked.
 */
class MDMonthPickerComponent extends MDDatetimePickerComponent {
    /**
     * Returns leading actions based on the current index.
     * @returns {object[]} Array of action objects.
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
     * Returns child nodes for rendering in the component.
     * @returns {TemplateResult[]} Array of Lit HTML template results.
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
     * Setter for child nodes.
     * @param {TemplateResult[]} value - Array of Lit HTML template results.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Constructor for initializing the component.
     */
    constructor() {
        super();
        this.index = 1;
    }

    /**
     * Lifecycle callback when the component is connected to the DOM.
     * Adds necessary class for styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-picker");
    }

    /**
     * Updates the date selection based on the input value.
     * @private
     */
    updateDate() {
        const date = parseMonth(this.value);
        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
    }

    /**
     * Handles click event on the previous button in the card.
     * Updates the selection and emits events.
     * @param {Event} event - The click event object.
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
     * Handles click event on the next button in the card.
     * Updates the selection and emits events.
     * @param {Event} event - The click event object.
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
     * Handles click event on the label button in the card.
     * Toggles between year and month view.
     * @param {Event} event - The click event object.
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
     * Handles click event on the cancel button in the card.
     * Resets the value to default and emits events.
     * @param {Event} event - The click event object.
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
     * Handles click event on the OK button in the card.
     * Updates the selected value and emits events.
     * @param {Event} event - The click event object.
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
     * Handles click event on a year item in the picker.
     * Updates the selection year and emits events.
     * @param {Event} event - The click event object.
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
     * Handles click event on a month item in the picker.
     * Updates the selected month and emits events.
     * @param {Event} event - The click event object.
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
     * Retrieves the formatted string value of the selected month.
     * @returns {string} Formatted month string.
     * @private
     */
    getValue() {
        return stringifyMonth(this.selected);
    }
}
customElements.define("md-month-picker", MDMonthPickerComponent);
export { MDMonthPickerComponent };

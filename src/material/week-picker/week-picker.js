import { parseWeek, stringifyWeek, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * Custom component for selecting a week.
 * @element md-week-picker
 * @extends MDDatetimePickerComponent
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonPrevClick - Event fired when the previous button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonNextClick - Event fired when the next button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonLabelClick - Event fired when the label button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick - Event fired when the cancel button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick - Event fired when the OK button is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerYearItemClick - Event fired when a year item is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerMonthItemClick - Event fired when a month item is clicked.
 * @fires MDWeekPickerComponent#onWeekPickerSelection - Event fired when a week selection is made.
 * @fires MDWeekPickerComponent#onWeekPickerDayItemClick - Event fired when a day item is clicked.
 */
class MDWeekPickerComponent extends MDDatetimePickerComponent {
    /**
     * Retrieves the weekdays for display.
     * @returns {Array} Array containing weekday objects with labels.
     */
    get weekdays() {
        const rows = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i + 1);
            rows.push({
                label: this.weekdayFormat(date),
            });
        }
        return rows;
    }

    /**
     * Retrieves the days for display.
     * @returns {Array} Array containing day objects for the week grid.
     */
    get days() {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + 0 + 1 - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const week = date.getWeek();
            const children = [];
            const column = {
                activated: year === this.activated.getFullYear() && week === this.activated.getWeek(),
                selected: year === this.selected.getFullYear() && week === this.selected.getWeek(),
                year,
                month,
                week,
            };
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first + 1);
                children.push({
                    label: this.dayFormat(date),
                });
            }
            column.children = children;
            rows.push(column);
        }
        return rows;
    }

    /**
     * Retrieves the child nodes to render.
     * @returns {Array} Array containing HTML templates for child nodes.
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
     * Sets the child nodes for rendering.
     * @param {Array} value - Array containing HTML templates for child nodes.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Retrieves the leading actions for display.
     * @returns {Array} Array containing action objects for leading actions.
     */
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyYear(this.selection);
        } else if (this.index === 2) {
            label = stringifyWeek(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * @private
     */
    renderDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map(item=>html`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${item.label}</div>
                        </div>    
                    `)}
                </div>
                ${this.days.map(row=>html`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days" ?activated="${row.activated}" ?selected="${row.selected}" .data="${row}" @click="${this.handleDatetimePickerDayItemClick}">
                        ${row.children.map(item=>html`
                            <div class="md-datetime-picker__grid-item" >
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>    
                        `)}
                    </div>
                `)}
            </div>
        `;
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * Adds necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-picker");
    }

    /**
     * Updates the selected date based on the input value.
     * @private
     */
    updateDate() {
        const date = parseWeek(this.value);
        this.selection.setFullYear(date.getFullYear());
        this.selection.setWeek(date.getWeek());
        this.selected.setFullYear(date.getFullYear());
        this.selected.setWeek(date.getWeek());
    }

    /**
     * Handles click events on the previous button of the card.
     * Adjusts the selection based on the current index.
     * @private
     * @param {Event} event - The click event.
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
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonPrevClick", event);
    }

    /**
     * Handles click events on the next button of the card.
     * Adjusts the selection based on the current index.
     * @private
     * @param {Event} event - The click event.
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
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerIconButtonNextClick", event);
    }

    /**
     * Handles click events on the label button of the card.
     * Changes the displayed content based on the current index.
     * @private
     * @param {Event} event - The click event.
     */
    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 2;
        } else if (this.index === 1) {
            this.index = 0;
        } else if (this.index === 2) {
            this.index = 1;
        }
        this.emit("onWeekPickerButtonLabelClick", event);
    }

    /**
     * Handles click events on the cancel button of the card.
     * Resets the value and updates the display accordingly.
     * @private
     * @param {Event} event - The click event.
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;
        this.emit("onWeekPickerButtonCancelClick", event);
    }

    /**
     * Handles click events on the OK button of the card.
     * Sets the selected value and updates the display accordingly.
     * @private
     * @param {Event} event - The click event.
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setWeek(this.selection.getWeek());
        this.value = this.getValue();
        this.requestUpdate();
        this.index = 2;
        this.emit("onWeekPickerButtonOkClick", event);
    }

    /**
     * Handles click events on a year item in the date picker.
     * Updates the selection to the clicked year and switches focus.
     * @private
     * @param {Event} event - The click event.
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerYearItemClick", event);
    }

    /**
     * Handles click events on a month item in the date picker.
     * Updates the selection to the clicked month and switches focus.
     * @private
     * @param {Event} event - The click event.
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerMonthItemClick", event);
    }

    /**
     * Handles click events on a day item in the week picker.
     * Updates the selected week and triggers an update in the display.
     * @private
     * @param {Event} event - The click event.
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;
        this.selected.setFullYear(data.year);
        this.selected.setWeek(data.week);
        this.selection.setFullYear(data.year);
        this.selection.setWeek(data.week);
        this.requestUpdate();
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerDayItemClick", event);
    }

    /**
     * Retrieves the string representation of the selected week.
     * @returns {string} String representation of the selected week.
     * @private
     */
    getValue() {
        return stringifyWeek(this.selected);
    }
}
customElements.define("md-week-picker", MDWeekPickerComponent);
export { MDWeekPickerComponent };

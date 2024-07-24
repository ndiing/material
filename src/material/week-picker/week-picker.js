import { parseWeek, stringifyWeek, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

/**
 * {{desc}}
 * @extends MDDatetimePickerComponent
 * @element md-week-picker
 * @fires MDWeekPickerComponent#onSheetShow - {{desc}}
 * @fires MDWeekPickerComponent#onSheetClose - {{desc}}
 * @fires MDWeekPickerComponent#onSheetScrimClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerSelection - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerIconButtonPrevClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerIconButtonNextClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerButtonLabelClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerButtonCancelClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerButtonOkClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerYearItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerMonthItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerDayItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerHourItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onDatetimePickerMinuteItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerButtonLabelClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerSelection - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonPrevClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerIconButtonNextClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerYearItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerMonthItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerDayItemClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerButtonCancelClick - {{desc}}
 * @fires MDWeekPickerComponent#onWeekPickerButtonOkClick - {{desc}}
 */
class MDWeekPickerComponent extends MDDatetimePickerComponent {
    /**
     * {{desc}}
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
     * {{desc}}
     */
    get days() {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + 0 + 1 - this.first + 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const week = date.getWeek();
            const items = [];
            const column = {
                activated: year === this.activated.getFullYear() && week === this.activated.getWeek(),
                selected: year === this.selected.getFullYear() && week === this.selected.getWeek(),
                year,
                month,
                week,
            };
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first + 1);
                items.push({
                    label: this.dayFormat(date),
                });
            }
            column.items = items;
            rows.push(column);
        }
        return rows;
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
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
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
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyYear(this.selection);
        } else if (this.index === 2) {
            label = stringifyWeek(this.selection);
        }
        return [{ component: "button", label, onButtonClick: this.handleCardButtonLabelClick.bind(this) }];
    }

    /**
     * {{desc}}
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
                        ${row.items.map(item=>html`
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-picker");
    }

    /**
     * {{desc}}
     */
    updateDate() {
        const date = parseWeek(this.value);
        this.selection.setFullYear(date.getFullYear());
        this.selection.setWeek(date.getWeek());
        this.selected.setFullYear(date.getFullYear());
        this.selected.setWeek(date.getWeek());
    }

    /**
     * {{desc}}
     */
    getValue() {
        return stringifyWeek(this.selected);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerYearItemClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onWeekPickerSelection", event);
        this.emit("onWeekPickerMonthItemClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;
        this.emit("onWeekPickerButtonCancelClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setWeek(this.selection.getWeek());
        this.value = this.getValue();
        this.requestUpdate();
        this.index = 2;
        this.emit("onWeekPickerButtonOkClick", event);
    }
}
customElements.define("md-week-picker", MDWeekPickerComponent);
export { MDWeekPickerComponent };

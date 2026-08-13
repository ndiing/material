import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDatetimePickerElement } from "../../base/datetime-picker.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";
import { dateFormatter } from "../../core/date-formatter.js";
import { addMonths, isValid, subMonths } from "date-fns";
import { createRef, ref } from "lit/directives/ref.js";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {
        ...MdDatetimePickerElement.properties,
        view: { type: Number, state: true },
        value: { type: String },
    };

    timeInputHour = createRef();
    timeInputMinute = createRef();

    constructor() {
        super();

        this.view = "calendar";

        // test
        this.view = "minutes";
    }

    /* prettier-ignore */
    renderCalendar() {
        return html`
            <table class="md-datetime-picker__table">
                <thead>
                    <tr>
                        ${this.weekdays.map((cell) => html`
                            <th>
                                <div
                                    class="${classMap({
                                        "md-datetime-picker__cell": true,
                                        "md-datetime-picker__cell--sunday": cell.startOfWeek,
                                    })}"
                                >${cell.label}</div>
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.calendar.map((row) => html`
                        <tr>
                            ${row.cells.map((cell) => html`
                                <td 
                                    .cell="${cell}" 
                                    @click="${this._handleDatetimePickerDateSelection}"
                                >
                                    <div
                                        class="${classMap({
                                            "md-datetime-picker__cell": true,
                                            "md-datetime-picker__cell--sunday": cell.startOfWeek,
                                            "md-datetime-picker__cell--outside": cell.outsideMonth,
                                            "md-datetime-picker__cell--today": cell.active,
                                            "md-datetime-picker__cell--selected": cell.selected,
                                        })}"
                                    >${cell.label}</div>
                                </td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }

    /* prettier-ignore */
    renderMonths() {
        return html`
            <md-list 
                class="md-datetime-picker__list" 
                .items="${this.months}" 
                .singleSelect="${true}" 
                @onListItemSelection="${this._handleDatetimePickerMonthSelection}"
            ></md-list>
        `;
    }

    /* prettier-ignore */
    renderYears() {
        return html`
            <md-list 
                class="md-datetime-picker__list" 
                .items="${this.years}" 
                .singleSelect="${true}" 
                @onListItemSelection="${this._handleDatetimePickerYearSelection}"
            ></md-list>
        `;
    }

    /* prettier-ignore */
    renderHours() {
        return html`
            <div class="md-datetime-picker__dial md-datetime-picker__dial--hours">
                ${this.hours.map(cell=>html`
                    <div
                        .data="${cell}"
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
                        @click="${this._handleDatetimePickerHourSelection}"
                    >${cell.label}</div>
                `)}
            </div>
        `;
    }

    /* prettier-ignore */
    renderMinutes() {
        return html`
            <div class="md-datetime-picker__dial md-datetime-picker__dial--minutes">
                ${this.minutes.map(cell=>html`
                    <div
                        .data="${cell}"
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
                        @click="${this._handleDatetimePickerMinuteSelection}"
                    >${cell.label}</div>
                `)}
            </div>
        `;
    }

    /* prettier-ignore */
    renderView(view){
        return choose(view, [
            ['calendar', () => this.renderCalendar()],
            ['months', () => this.renderMonths()],
            ['years', () => this.renderYears()],
            ['hours', () => this.renderHours()],
            ['minutes', () => this.renderMinutes()],
        ], () => nothing)
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__leading">
                    ${['hours','minutes'].includes(this.view)?html`
                        <div class="md-datetime-picker__headline">Select time</div>
                    `:nothing}
                    ${['calendar','years','months'].includes(this.view)?html`
                        <md-icon-button 
                            class="${classMap({
                                "md-datetime-picker__icon-button":true,
                                "md-datetime-picker__icon-button--hidden":this.view==='years',
                            })}" 
                            .color="${"standard"}" 
                            .icon="${"keyboard_arrow_left"}"
                            @onIconButtonClick="${this._handleDatetimePickerPrevMonth}"
                        ></md-icon-button>
                        <md-split-button 
                            class="${classMap({
                                "md-datetime-picker__split-button":true,
                                "md-datetime-picker__split-button--disabled":this.view==='years',
                            })}" 
                            .color="${"text"}" 
                            .label="${this.selectedMonth.label}" 
                            .trailingIcon="${"arrow_drop_down"}"
                            .selected="${this.view==='months'}"
                            @onSplitButtonSelection="${this._handleDatetimePickerMonthView}"
                        ></md-split-button>
                        <md-icon-button 
                            class="${classMap({
                                "md-datetime-picker__icon-button":true,
                                "md-datetime-picker__icon-button--hidden":this.view==='years',
                            })}" 
                            .color="${"standard"}" 
                            .icon="${"keyboard_arrow_right"}"
                            @onIconButtonClick="${this._handleDatetimePickerNextMonth}"
                        ></md-icon-button>
                    `:nothing}
                </div>
                <div class="md-datetime-picker__spacer"></div>
                ${['calendar','years','months'].includes(this.view)?html`
                    <div class="md-datetime-picker__trailing">
                        <md-icon-button 
                            class="${classMap({
                                "md-datetime-picker__icon-button":true,
                                "md-datetime-picker__icon-button--hidden":this.view==='months',
                            })}" 
                            .color="${"standard"}" 
                            .icon="${"keyboard_arrow_left"}"
                            @onIconButtonClick="${this._handleDatetimePickerPrevYear}"
                        ></md-icon-button>
                        <md-split-button 
                            class="${classMap({
                                "md-datetime-picker__split-button":true,
                                "md-datetime-picker__split-button--disabled":this.view==='months',
                            })}" 
                            .color="${"text"}" 
                            .label="${this.selectedYear.label}" 
                            .trailingIcon="${"arrow_drop_down"}"
                            .selected="${this.view==='years'}"
                            @onSplitButtonSelection="${this._handleDatetimePickerYearView}"
                        ></md-split-button>
                        <md-icon-button 
                            class="${classMap({
                                "md-datetime-picker__icon-button":true,
                                "md-datetime-picker__icon-button--hidden":this.view==='months',
                            })}" 
                            .color="${"standard"}" 
                            .icon="${"keyboard_arrow_right"}"
                            @onIconButtonClick="${this._handleDatetimePickerNextYear}"
                        ></md-icon-button>
                    </div>
                `:nothing}
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__main">
                    ${['hours','minutes'].includes(this.view)?html`
                        <div class="md-datetime-picker__container">
                            <input 
                                ${ref(this.timeInputHour)}
                                class="${classMap({
                                    "md-datetime-picker__input":true,
                                    "md-datetime-picker__input--active":this.view==="hours",
                                })}" 
                                type="text"
                                .value="${this.selectedHour.label}"
                                @focus="${this._handleDatetimePickerHourFocus}"
                                @click="${this._handleDatetimePickerHourFocus}"
                                @input="${this._handleDatetimePickerHourInput}"
                            >
                            <div class="md-datetime-picker__separator">:</div>
                            <input 
                                ${ref(this.timeInputMinute)}
                                class="${classMap({
                                    "md-datetime-picker__input":true,
                                    "md-datetime-picker__input--active":this.view==="minutes",
                                })}" 
                                type="text"
                                .value="${this.selectedMinute.label}"
                                @focus="${this._handleDatetimePickerMinuteFocus}"
                                @click="${this._handleDatetimePickerMinuteFocus}"
                                @input="${this._handleDatetimePickerMinuteInput}"
                            >
                        </div>
                    `:nothing}
                    ${this.renderView(this.view)}
                </div>
                ${['calendar','hours'].includes(this.view)?html`
                    <div class="md-datetime-picker__footer">
                        <div class="md-datetime-picker__spacer"></div>
                        <md-button 
                            class="md-datetime-picker__button" 
                            .color="${"text"}" 
                            .label="${"Cancel"}"
                            @onButtonClick="${this._handleDatetimePickerCancel}"
                        ></md-button>
                        <md-button 
                            class="md-datetime-picker__button" 
                            .color="${"text"}" 
                            .label="${"Ok"}"
                            @onButtonClick="${this._handleDatetimePickerOk}"
                        ></md-button>
                    </div>
                `:nothing}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-datetime-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-datetime-picker");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("value")) {
            queueMicrotask(() => {
                this._reset();
            });
        }
    }

    _handleDatetimePickerHourFocus(event) {
        const input = event.currentTarget;
        window.requestAnimationFrame(() => {
            input.select();
        });
        this.view = "hours";
    }

    _handleDatetimePickerMinuteFocus(event) {
        const input = event.currentTarget;
        window.requestAnimationFrame(() => {
            input.select();
        });
        this.view = "minutes";
    }

    _handleDatetimePickerHourInput(event) {
        const input = event.currentTarget;
        const data = (event.data || "").replace(/\D/, "");
        this._hourBuffer = this._hourBuffer || "";
        if (this._hourBuffer.length === 0 && Number(data) > 2) {
            this._hourBuffer = "0" + data;
        } else {
            this._hourBuffer += data;
        }
        const value = Math.min(Number(this._hourBuffer), 23);
        const formatted = String(value).padStart(2, "0");
        input.setRangeText(formatted, 0, 2, "select");
        if (this._hourBuffer.length >= 2) {
            this._hourBuffer = "";
            this.selection.setHours(value);
            this.selection = new Date(this.selection);
            this.selected = new Date(this.selection);
            this.timeInputMinute.value.focus();
        }
    }

    _handleDatetimePickerMinuteInput(event) {
        const input = event.currentTarget;
        const data = (event.data || "").replace(/\D/, "");
        this._minuteBuffer = this._minuteBuffer || "";
        if (this._minuteBuffer.length === 0 && Number(data) > 5) {
            this._minuteBuffer = "0" + data;
        } else {
            this._minuteBuffer += data;
        }
        const value = Math.min(Number(this._minuteBuffer), 59);
        const formatted = String(value).padStart(2, "0");
        input.setRangeText(formatted, 0, 2, "select");
        if (this._minuteBuffer.length >= 2) {
            this._minuteBuffer = "";
            this.selection.setMinutes(value);
            this.selection = new Date(this.selection);
            this.selected = new Date(this.selection);
            this.view = "hours";
            this.timeInputMinute.value.blur();
        }
    }

    _handleDatetimePickerHourSelection(event) {
        const data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
    }
    _handleDatetimePickerMinuteSelection(event) {
        const data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this.view = "hours";
    }

    _reset() {
        const parsed = dateFormatter["datetime-local"].parse(this.value);
        const fallbackDate = parsed && isValid(parsed) ? parsed : new Date();

        this.selection = fallbackDate;
        this.selected = fallbackDate;
    }

    _handleDatetimePickerMonthView(event) {
        const selected = event.detail.selected;
        this.view = selected ? "months" : "calendar";
    }

    _handleDatetimePickerYearView(event) {
        const selected = event.detail.selected;
        this.view = selected ? "years" : "calendar";
    }

    _handleDatetimePickerPrevMonth(event) {
        this.selection = subMonths(this.selection, 1);
    }

    _handleDatetimePickerNextMonth(event) {
        this.selection = addMonths(this.selection, 1);
    }

    _handleDatetimePickerPrevYear(event) {
        const value = this.view === "years" ? 10 : 1;
        this.selection.setFullYear(this.selection.getFullYear() - value);
        this.selection = new Date(this.selection);
    }

    _handleDatetimePickerNextYear(event) {
        const value = this.view === "years" ? 10 : 1;
        this.selection.setFullYear(this.selection.getFullYear() + value);
        this.selection = new Date(this.selection);
    }

    _handleDatetimePickerMonthSelection(event) {
        const item = event.detail.item;
        this.selection.setMonth(item.month);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this.view = "calendar";
    }

    _handleDatetimePickerYearSelection(event) {
        const item = event.detail.item;
        this.selection.setFullYear(item.year);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this.view = "months";
    }

    _handleDatetimePickerDateSelection(event) {
        const cell = event.currentTarget.cell;
        this.selection.setDate(cell.date);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
    }

    _handleDatetimePickerCancel(event) {
        this._reset();
    }

    _handleDatetimePickerOk(event) {
        this._emitSelection(event);
    }

    _emitSelection(event) {
        const value = dateFormatter["datetime-local"].toString(this.selected);
    }
}

customElements.define("md-datetime-picker", MdDatetimePicker);

export { MdDatetimePicker };

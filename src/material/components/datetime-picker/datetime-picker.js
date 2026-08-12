import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDatetimePickerElement } from "../../base/datetime-picker.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";
import { dateFormatter } from "../../core/date-formatter.js";
import { addMonths, isValid, subMonths } from "date-fns";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {
        ...MdDatetimePickerElement.properties,
        view: { type: Number, state: true },
        value: { type: String },
    };

    constructor() {
        super();

        this.view = "calendar";
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
    renderView(view){
        return choose(view, [
            ['calendar', () => this.renderCalendar()],
            ['months', () => this.renderMonths()],
            ['years', () => this.renderYears()],
        ], () => nothing)
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__leading">
                    <md-icon-button 
                        class="${classMap({
                            "md-datetime-picker__icon-button":true,
                            "md-datetime-picker__icon-button--hidden":this.view==='years',
                        })}" 
                        .color="${"standard"}" 
                        .icon="${"keyboard_arrow_left"}"
                        @onIconButtonClick="${this._handleDatetimePickerPrevMonthSelection}"
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
                        @onSplitButtonSelection="${this._handleDatetimePickerMonthViewSelection}"
                    ></md-split-button>
                    <md-icon-button 
                        class="${classMap({
                            "md-datetime-picker__icon-button":true,
                            "md-datetime-picker__icon-button--hidden":this.view==='years',
                        })}" 
                        .color="${"standard"}" 
                        .icon="${"keyboard_arrow_right"}"
                        @onIconButtonClick="${this._handleDatetimePickerNextMonthSelection}"
                    ></md-icon-button>
                </div>
                <div class="md-datetime-picker__spacer"></div>
                <div class="md-datetime-picker__trailing">
                    <md-icon-button 
                        class="${classMap({
                            "md-datetime-picker__icon-button":true,
                            "md-datetime-picker__icon-button--hidden":this.view==='months',
                        })}" 
                        .color="${"standard"}" 
                        .icon="${"keyboard_arrow_left"}"
                        @onIconButtonClick="${this._handleDatetimePickerPrevYearSelection}"
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
                        @onSplitButtonSelection="${this._handleDatetimePickerYearViewSelection}"
                    ></md-split-button>
                    <md-icon-button 
                        class="${classMap({
                            "md-datetime-picker__icon-button":true,
                            "md-datetime-picker__icon-button--hidden":this.view==='months',
                        })}" 
                        .color="${"standard"}" 
                        .icon="${"keyboard_arrow_right"}"
                        @onIconButtonClick="${this._handleDatetimePickerNextYearSelection}"
                    ></md-icon-button>
                </div>
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__main">${this.renderView(this.view)}</div>
                ${this.view==='calendar'?html`
                    <div class="md-datetime-picker__footer">
                        <div class="md-datetime-picker__spacer"></div>
                        <md-button 
                            class="md-datetime-picker__button" 
                            .color="${"text"}" 
                            .label="${"Cancel"}"
                            @onButtonClick="${this._handleDatetimePickerCancelSelection}"
                        ></md-button>
                        <md-button 
                            class="md-datetime-picker__button" 
                            .color="${"text"}" 
                            .label="${"Ok"}"
                            @onButtonClick="${this._handleDatetimePickerOkSelection}"
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

    _reset() {
        const parsed = dateFormatter["datetime-local"].parse(this.value);
        const fallbackDate = parsed && isValid(parsed) ? parsed : new Date();

        this.selection = fallbackDate;
        this.selected = fallbackDate;
    }

    _handleDatetimePickerMonthViewSelection(event) {
        const selected = event.detail.selected;
        this.view = selected ? "months" : "calendar";
        this.emit("onDatetimePickerMonthViewSelection", { event, element: this });
    }
    _handleDatetimePickerYearViewSelection(event) {
        const selected = event.detail.selected;
        this.view = selected ? "years" : "calendar";
        this.emit("onDatetimePickerYearViewSelection", { event, element: this });
    }

    _handleDatetimePickerPrevMonthSelection(event) {
        this.selection = subMonths(this.selection, 1);
        this.emit("onDatetimePickerPrevMonthSelection", { event, element: this });
    }
    _handleDatetimePickerNextMonthSelection(event) {
        this.selection = addMonths(this.selection, 1);
        this.emit("onDatetimePickerNextMonthSelection", { event, element: this });
    }

    _handleDatetimePickerPrevYearSelection(event) {
        const value = this.view === "years" ? 10 : 1;
        this.selection.setFullYear(this.selection.getFullYear() - value);
        this.selection = new Date(this.selection);
        this.emit("onDatetimePickerPrevYearSelection", { event, element: this });
    }
    _handleDatetimePickerNextYearSelection(event) {
        const value = this.view === "years" ? 10 : 1;
        this.selection.setFullYear(this.selection.getFullYear() + value);
        this.selection = new Date(this.selection);
        this.emit("onDatetimePickerNextYearSelection", { event, element: this });
    }

    _handleDatetimePickerMonthSelection(event) {
        const item = event.detail.item;
        this.selection.setMonth(item.month);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this.view = "calendar";
        this._emitSelection(event);
        this.emit("onDatetimePickerMonthSelection", { event, element: this });
    }
    _handleDatetimePickerYearSelection(event) {
        const item = event.detail.item;
        this.selection.setFullYear(item.year);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this.view = "months";
        this._emitSelection(event);
        this.emit("onDatetimePickerYearSelection", { event, element: this });
    }
    _handleDatetimePickerDateSelection(event) {
        const cell = event.currentTarget.cell;
        this.selection.setDate(cell.date);
        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
        this._emitSelection(event);
        this.emit("onDatetimePickerDateSelection", { event, element: this });
    }
    _handleDatetimePickerCancelSelection(event) {
        this._reset();
        this.emit("onDatetimePickerCancelSelection", { event, element: this });
    }
    _handleDatetimePickerOkSelection(event) {
        this._emitSelection(event);
        this.emit("onDatetimePickerOkSelection", { event, element: this });
    }

    _emitSelection(event) {
        const value = dateFormatter["datetime-local"].toString(this.selected);
        this.emit("onDatetimePickerSelection", { event, element: this, value });
    }
}

customElements.define("md-datetime-picker", MdDatetimePicker);

export { MdDatetimePicker };

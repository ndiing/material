## src\material\base

### datetime-picker

src\material\base\datetime-picker.js

```js
import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
import { getWeek, setWeek } from "date-fns";

class MdDatetimePickerElement extends MdElement {
    static properties = {
        locale: { type: String },
        type: { type: String },
        selection: { type: Date },
    };

    get years() {
        const arr = [];
        const selectedYear = Math.floor(this.selection.getFullYear() / 10) * 10;
        for (let i = 0; i < 10; i++) {
            const date = new Date(selectedYear + i, 0);
            const selected = date.getFullYear() === this.selected.getFullYear();
            arr.push({
                id: i,
                year: date.getFullYear(),
                label: this.yearFormat(date),
                active: date.getFullYear() === this.current.getFullYear(),
                selected,
                leading: [{ component: "icon", icon: selected ? "check" : "" }],
            });
        }
        return arr;
    }

    get months() {
        const arr = [];
        const selectedYear = this.selection.getFullYear();
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectedYear, i);
            const selected = date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth();
            arr.push({
                id: i,
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth(),
                selected,
                leading: [{ component: "icon", icon: selected ? "check" : "" }],
            });
        }
        return arr;
    }

    get weekdays() {
        return this.type === "week" ? this.weekColumns : this.dayColumns;
    }

    get dayColumns() {
        const arr = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            arr.push({
                label: this.weekdayFormat(date),
                startOfWeek: date.getDay() === 0,
            });
        }
        return arr;
    }

    get weekColumns() {
        const arr = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i + 1);
            arr.push({
                label: this.weekdayFormat(date),
                startOfWeek: date.getDay() === 0,
            });
        }
        return arr;
    }

    get calendar() {
        return this.type === "week" ? this.weekCalendar : this.dayCalendar;
    }

    get dayCalendar() {
        const selectedYear = this.selection.getFullYear();
        const selectedMonth = this.selection.getMonth();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth).getDay();
        const arr = [];
        for (let i = 0; i < 6; i++) {
            const obj = {
                cells: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth);
                obj.cells.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate(),
                    selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && date.getDate() === this.selected.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }

    get weekCalendar() {
        const selectedYear = this.selection.getFullYear();
        const selectedMonth = this.selection.getMonth();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth).getDay();
        const arr = [];
        for (let i = 0; i < 6; i++) {
            const k = i * 7 + 1;
            const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth + 1);
            const obj = {
                year: date.getFullYear(),
                month: date.getMonth(),
                week: getWeek(date),
                label: this.dateFormat(date),
                active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && getWeek(date) === this.getWeek(this.current),
                selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && getWeek(date) === this.getWeek(this.selected),
                outsideMonth: !(date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth()),
                cells: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth + 1);
                obj.cells.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate(),
                    selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && date.getDate() === this.selected.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }

    get hours() {
        const selectedYear = this.selection.getFullYear();
        const selectedMonth = this.selection.getMonth();
        const selectedDate = this.selection.getDate();
        const arr = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(selectedYear, selectedMonth, selectedDate, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours(),
                selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && date.getDate() === this.selected.getDate() && date.getHours() === this.selected.getHours(),
            });
        }
        return arr;
    }

    get minutes() {
        const selectedYear = this.selection.getFullYear();
        const selectedMonth = this.selection.getMonth();
        const selectedDate = this.selection.getDate();
        const selectedHour = this.selection.getHours();
        const arr = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(selectedYear, selectedMonth, selectedDate, selectedHour, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                label: this.minuteFormat(date),
                active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours() && date.getMinutes() === this.current.getMinutes(),
                selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && date.getDate() === this.selected.getDate() && date.getHours() === this.selected.getHours() && date.getMinutes() === this.selected.getMinutes(),
            });
        }
        return arr;
    }

    get selectedMonth() {
        const value = this.selection.getMonth();
        const label = this.selectedMonthFormat(this.selection);
        return { value, label };
    }

    get selectedYear() {
        const value = this.selection.getFullYear();
        const label = this.selectedYearFormat(this.selection);
        return { value, label };
    }

    constructor() {
        super();

        this.locale = undefined;

        this._setFormatter();

        this.type = "day";

        this.current = new Date();
        this.selection = new Date();
        this.selected = new Date();
    }

    _setFormatter() {
        const locale = this.locale || undefined;

        this.yearFormat = new Intl.DateTimeFormat(locale, { year: "numeric" }).format;
        this.selectedYearFormat = new Intl.DateTimeFormat(locale, { year: "numeric" }).format;

        this.monthFormat = new Intl.DateTimeFormat(locale, { month: "long" }).format;
        this.selectedMonthFormat = new Intl.DateTimeFormat(locale, { month: "short" }).format;

        this.weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format;
        this.dateFormat = new Intl.DateTimeFormat(locale, { day: "numeric" }).format;

        this.hourFormat = new Intl.DateTimeFormat(locale, { hour: "numeric", hour12: false }).format;
        this.minuteFormat = new Intl.DateTimeFormat(locale, { minute: "numeric", hour12: false }).format;
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("locale")) {
            this._setFormatter();
        }
    }
}

export { MdDatetimePickerElement };
```

## src\material\components\datetime-picker

### datetime-picker

src\material\components\datetime-picker\datetime-picker.js

```js
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

        // test
        this.view = "hours";
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
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
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
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
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
            ${['calendar','years','months'].includes(this.view)?html`
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
            `:nothing}
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__main">${this.renderView(this.view)}</div>
                ${['calendar','hours'].includes(this.view)?html`
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
```

### datetime-picker

src\material\components\datetime-picker\datetime-picker.scss

```scss
@use "../../shared/mixins.scss";

.md-datetime-picker {
    display: inline-flex;
    flex-direction: column;
    max-width: 360px;
    max-height: 460px;
    background-color: var(--md-sys-color-surface-container-high);
    color: var(--md-sys-color-on-surface);
    box-shadow: var(--md-sys-elevation-level3);
    border-radius: var(--md-sys-shape-corner-large);
}

.md-datetime-picker__header {
    display: flex;
    align-items: center;
    padding: 20px 12px;

    + .md-datetime-picker__body {
        margin-top: -12px;
    }
}

.md-datetime-picker__leading {
    display: inline-flex;
    align-items: center;
    gap: 0 16px;
}

.md-datetime-picker__spacer {
    flex: 1;
}

.md-datetime-picker__trailing {
    display: inline-flex;
    align-items: center;
    gap: 0 16px;
}

.md-datetime-picker__leading,
.md-datetime-picker__trailing {
    .md-datetime-picker__icon-button {
        margin: -8px;
        color: var(--md-sys-color-on-surface-variant);

        &.md-datetime-picker__icon-button--hidden {
            visibility: hidden;
            @include mixins.ripple-disabled();
        }
    }

    .md-datetime-picker__split-button {
        margin: -8px;
        min-width: 80px;
        color: var(--md-sys-color-on-surface-variant);

        .md-split-button__leading {
            padding-left: calc(var(--md-comp-split-button-leading-padding-left) - 8px);
            padding-right: calc(var(--md-comp-split-button-leading-padding-right) - 8px);
            gap: 0 calc(var(--md-comp-split-button-leading-gap) - 8px);
        }

        .md-split-button__trailing {
            padding-left: calc(var(--md-comp-split-button-trailing-padding-left) - 8px);
            padding-right: calc(var(--md-comp-split-button-trailing-padding-right) - 8px);
        }

        &.md-split-button--selected .md-split-button__trailing {
            padding-left: calc(var(--md-comp-split-button-selected-trailing-padding-left) - 8px);
            padding-right: calc(var(--md-comp-split-button-selected-trailing-padding-right) - 8px);
        }

        &.md-datetime-picker__split-button--disabled {
            .md-split-button__leading {
                color: var(--md-sys-color-on-surface38);
                @include mixins.ripple-disabled();
            }

            .md-split-button__trailing {
                visibility: hidden;
                @include mixins.ripple-disabled();
            }
        }
    }
}

.md-datetime-picker__body {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.md-datetime-picker__main {
    flex: 1;
    padding: 16px 0;

    + .md-datetime-picker__footer {
        margin-top: -20px;
    }
}

.md-datetime-picker__table {
    display: block;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 12px;

    th {
        text-align: left;

        &:has(.md-datetime-picker__cell) {
            @include mixins.ripple-disabled();
        }
    }

    td {
        max-width: 0;

        &:has(.md-datetime-picker__cell--outside) {
            @include mixins.ripple-disabled();
        }
    }
}

.md-datetime-picker__cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: var(--md-sys-shape-corner-full);

    @include mixins.ripple();
    @include mixins.ripple-bounded();
    @include mixins.ripple-trigger();

    &:focus {
        @include mixins.ripple-focus();
    }

    &:active {
        @include mixins.ripple-press();
    }

    &:hover {
        @include mixins.ripple-hover();
    }

    &:drag {
        @include mixins.ripple-drag();
    }
}

.md-datetime-picker__cell--outside {
    color: var(--md-sys-color-on-surface38);
    @include mixins.ripple-disabled();
}

.md-datetime-picker__cell--today {
    border: 1px solid var(--md-sys-color-primary);
    color: var(--md-sys-color-primary);
}

.md-datetime-picker__cell--selected {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
}

.md-datetime-picker__cell--sunday {
    color: var(--md-sys-color-error);

    &.md-datetime-picker__cell--outside {
        color: var(--md-sys-color-error38);
    }

    &.md-datetime-picker__cell--today {
        border: 1px solid var(--md-sys-color-error);
        color: var(--md-sys-color-error);
    }

    &.md-datetime-picker__cell--selected {
        background-color: var(--md-sys-color-error);
        color: var(--md-sys-color-on-error);
    }
}

.md-datetime-picker__list {
    padding: 0;
    height: 336px;
    overflow: auto;

    .md-list__item {
        min-height: 48px;
        padding: 12px 16px;
        gap: 0 16px;
    }

    .md-list__item--selected {
        background-color: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
    }
}

.md-datetime-picker__dial {
    position: relative;
    width: 256px;
    height: 256px;
    margin: 36px;
    border-radius: var(--md-sys-shape-corner-full);
    background-color: var(--md-sys-color-surface-container-highest);

    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: var(--md-sys-shape-corner-full);
        background-color: var(--md-sys-color-primary);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}

.md-datetime-picker__handle {
    @include mixins.ripple();
    @include mixins.ripple-trigger();
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--md-sys-shape-corner-full);

    &:focus {
        @include mixins.ripple-focus();
    }

    &:active {
        @include mixins.ripple-press();
    }

    &:hover {
        @include mixins.ripple-hover();
    }

    &:drag {
        @include mixins.ripple-drag();
    }

    &::before {
        content: "";
        height: 2px;
        border-radius: var(--md-sys-shape-corner-full);
        position: absolute;
        z-index: -1;
        right: 50%;
        top: 50%;
        transform-origin: 100% 50%;
    }

    &::after {
        width: 100%;
    }
}

.md-datetime-picker__handle--now {
    border: 1px solid var(--md-sys-color-primary);
    color: var(--md-sys-color-primary);
}

.md-datetime-picker__handle--selected {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);

    &::before {
        background-color: var(--md-sys-color-primary);
    }
}

.md-datetime-picker__dial--hours {
    .md-datetime-picker__handle {
        @for $i from 1 through 24 {
            &:nth-child(#{$i}) {
                @if $i <= 12 {
                    // 256/2 = 128-48/2 = 104-4 = 100
                    left: calc(100px * cos((($i - 4) / 12) * 2 * pi) + 104px);
                    top: calc(100px * sin((($i - 4) / 12) * 2 * pi) + 104px);

                    &::before {
                        width: 100px;
                        transform: rotate(calc((360deg / 12) * ($i - 4)));
                    }
                } @else {
                    // 256/2 = 128-48/2 = 104-48/2 = 80-4 = 76
                    left: calc(76px * cos((($i - 4) / 12) * 2 * pi) + 104px);
                    top: calc(76px * sin((($i - 4) / 12) * 2 * pi) + 104px);

                    &::before {
                        width: 76px;
                        transform: rotate(calc((360deg / 12) * ($i - 12 - 4)));
                    }
                }
            }
        }
    }
}

.md-datetime-picker__dial--minutes {
    .md-datetime-picker__handle {
        @for $i from 1 through 60 {
            &:nth-child(#{$i}) {
                // 256/2 = 128-48/2 = 104-4 = 100
                left: calc(100px * cos((($i - 16) / 60) * 2 * pi) + 104px);
                top: calc(100px * sin((($i - 16) / 60) * 2 * pi) + 104px);

                @if ((($i - 16) % 5) != 0) {
                    z-index: 1;
                    height: 24px;
                    width: 24px;
                    // 256/2 = 128-48/2 = 104-4 = 100
                    // 104+(48/2)-(24/2) = 116
                    left: calc(100px * cos((($i - 16) / 60) * 2 * pi) + 116px);
                    top: calc(100px * sin((($i - 16) / 60) * 2 * pi) + 116px);
                    color: transparent;
                }

                &::before {
                    width: 100px;
                    transform: rotate(calc((360deg / 60) * ($i - 16)));
                }
            }
        }
    }
}

.md-datetime-picker__footer {
    display: flex;
    align-items: center;
    gap: 0 16px;
    padding: 12px;
}

.md-datetime-picker__button {
    margin: -2px;
}
```

## src\material\core

### date-formatter

src\material\core\date-formatter.js

```js
import { parse, parseISO, format, getWeek, setWeek, isValid } from "date-fns";

const dateFormatter = {
    date: {
        parse: (value) => parseISO(value),
        toString: (date) => format(date, "yyyy-MM-dd"),
        pattern: "yyyy-MM-dd",
    },
    week: {
        parse: (value) => {
            const match = value?.match(/^(\d{4})-W(\d{1,2})$/);
            return match ? setWeek(new Date(parseInt(match[1]), 0, 4), parseInt(match[2]), { weekStartsOn: 1 }) : null;
        },
        toString: (date) => {
            if (!date || !isValid(date)) return "";
            return `${date.getFullYear()}-W${String(getWeek(date, { weekStartsOn: 1 })).padStart(2, "0")}`;
        },
        pattern: "yyyy-Www",
    },
    month: {
        parse: (value) => (value ? parseISO(`${value}-01`) : null),
        toString: (date) => (date && isValid(date) ? format(date, "yyyy-MM") : ""),
        pattern: "yyyy-MM",
    },
    time: {
        parse: (value) => (value ? parse(value, "HH:mm", new Date()) : null),
        toString: (date) => (date && isValid(date) ? format(date, "HH:mm") : ""),
        pattern: "HH:mm",
    },
    "datetime-local": {
        parse: (value) => (value ? parseISO(value) : null),
        toString: (date) => (date && isValid(date) ? format(date, "yyyy-MM-dd'T'HH:mm") : ""),
        pattern: "yyyy-MM-dd'T'HH:mm",
    },
};

export { dateFormatter };
```

## src\material\base

### datetime-picker

src\material\base\datetime-picker.js

```js
import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
import { getISOWeek, setWeek } from "date-fns";

class MdDatetimePickerElement extends MdElement {
    static properties = {
        hour12: { type: Boolean },
        locale: { type: String },
        calendarType: { type: String },
        selection: { type: Date },
    };

    get years() {
        const arr = [];
        const selectionYear = Math.floor(this.selection.getFullYear() / 10) * 10;
        for (let i = 0; i < this.yearCount; i++) {
            const date = new Date(selectionYear + i, 0);
            const selected = date.getFullYear() === this.selected.getFullYear();
            arr.push({
                id: date.getFullYear(),
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
        const selectionYear = this.selection.getFullYear();
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectionYear, i);
            const selected =
                date.getFullYear() === this.selected.getFullYear() && //
                date.getMonth() === this.selected.getMonth();
            arr.push({
                id: date.getMonth(),
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                labelShort: this.monthFormatShort(date),
                active:
                    date.getFullYear() === this.current.getFullYear() && //
                    date.getMonth() === this.current.getMonth(),
                selected,
                leading: [{ component: "icon", icon: selected ? "check" : "" }],
            });
        }
        return arr;
    }

    get weekdays() {
        return this.calendarType === "week" ? this.weekColumns : this.dayColumns;
    }

    get dayColumns() {
        const arr = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            arr.push({
                label: this.weekdayFormat(date),
                sunday: date.getDay() === 0,
            });
        }
        return arr;
    }

    get weekColumns() {
        const arr = [
            {
                label: "W",
            },
        ];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            arr.push({
                label: this.weekdayFormat(date),
                sunday: date.getDay() === 0,
            });
        }
        return arr;
    }

    get calendar() {
        return this.calendarType === "week" ? this.weekCalendar : this.dayCalendar;
    }

    get dayCalendar() {
        const selectionYear = this.selection.getFullYear();
        const selectionMonth = this.selection.getMonth();
        const firstDayOfMonth = new Date(selectionYear, selectionMonth).getDay();
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const cells = [];
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectionYear, selectionMonth, k - firstDayOfMonth);
                cells.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active:
                        date.getFullYear() === this.current.getFullYear() && //
                        date.getMonth() === this.current.getMonth() && //
                        date.getDate() === this.current.getDate(),
                    selected:
                        date.getFullYear() === this.selected.getFullYear() && //
                        date.getMonth() === this.selected.getMonth() && //
                        date.getDate() === this.selected.getDate(),
                    outside: !(
                        date.getFullYear() === this.selection.getFullYear() && //
                        date.getMonth() === this.selection.getMonth()
                    ),
                    sunday: date.getDay() === 0,
                });
            }
            rows.push(cells);
        }
        return rows;
    }

    get weekCalendar() {
        const selectionYear = this.selection.getFullYear();
        const selectionMonth = this.selection.getMonth();
        const firstDayOfMonth = new Date(selectionYear, selectionMonth).getDay();
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const cells = [];
            const k = i * 7 + 0 + 1;
            const weekDate = new Date(selectionYear, selectionMonth, k - firstDayOfMonth + 1);
            cells.push({
                year: weekDate.getFullYear(),
                month: weekDate.getMonth(),
                week: getISOWeek(weekDate),
                label: getISOWeek(weekDate),
                active:
                    weekDate.getFullYear() === this.current.getFullYear() && //
                    getISOWeek(weekDate) === getISOWeek(this.current),
                selected:
                    weekDate.getFullYear() === this.selected.getFullYear() && //
                    getISOWeek(weekDate) === getISOWeek(this.selected),
                sunday: weekDate.getDay() === 0,
            });
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectionYear, selectionMonth, k - firstDayOfMonth);
                const selected =
                    date.getFullYear() === this.selected.getFullYear() && //
                    getISOWeek(date) === getISOWeek(this.selected);
                cells.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    selected,
                    outside: !(
                        date.getFullYear() === this.selection.getFullYear() && //
                        date.getMonth() === this.selection.getMonth()
                    ),
                    sunday: date.getDay() === 0,
                    rangeStart:
                        selected && //
                        date.getDay() === 1,
                    inRange:
                        selected && //
                        date.getDay() !== 1 && //
                        date.getDay() !== 0,
                    rangeEnd:
                        selected && //
                        date.getDay() === 0,
                });
            }
            rows.push(cells);
        }
        return rows;
    }

    get hours() {
        const hourCount = this.hour12 ? 12 : 24;
        const selectionYear = this.selection.getFullYear();
        const selectionMonth = this.selection.getMonth();
        const selectionDate = this.selection.getDate();
        const arr = [];
        for (let i = 0; i < hourCount; i++) {
            const date = new Date(selectionYear, selectionMonth, selectionDate, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                active: date.getHours() === this.current.getHours(),
                selected: this.hourFormat(date) === this.hourFormat(this.selected),
            });
        }
        return arr;
    }

    get minutes() {
        const selectionYear = this.selection.getFullYear();
        const selectionMonth = this.selection.getMonth();
        const selectionDate = this.selection.getDate();
        const selectionHour = this.selection.getHours();
        const arr = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(selectionYear, selectionMonth, selectionDate, selectionHour, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                label: this.minuteFormat(date),
                active: date.getMinutes() === this.current.getMinutes(),
                selected: date.getMinutes() === this.selected.getMinutes(),
            });
        }
        return arr;
    }

    get info() {
        return {
            monthShort: this.infoFormat.monthShort(this.selection),
            year: this.infoFormat.year(this.selection),
            monthYear: this.infoFormat.monthYear(this.selection),
            weekdayMonthDay: this.infoFormat.weekdayMonthDay(this.selection),
            hour: this.infoFormat.hour(this.selection),
            minute: this.infoFormat.minute(this.selection),
            ampm: this.infoFormat.ampm(this.selection).slice(-2),
        };
    }

    constructor() {
        super();

        this.hour12 = false;
        this.locale = navigator.language;
        this._setFormatter();
        this.calendarType = "day";
        this.selection = new Date();
        this.yearCount = 10;

        this.current = new Date();
        this.selected = new Date();
    }

    _setFormatter() {
        const locale = this.locale || undefined;

        this.yearFormat = new Intl.DateTimeFormat(locale, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(locale, { month: "long" }).format;
        this.monthFormatShort = new Intl.DateTimeFormat(locale, { month: "short" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format;
        this.dateFormat = (date) => String(date.getDate());
        this.hourFormat = (date) => {
            const hour = this.hour12 ? date.getHours() % 12 || 12 : date.getHours();
            return String(hour).padStart(2, "0");
        };
        this.minuteFormat = (date) => String(date.getMinutes()).padStart(2, "0");

        this.infoFormat = {
            monthShort: new Intl.DateTimeFormat(locale, { month: "short" }).format,
            year: new Intl.DateTimeFormat(locale, { year: "numeric" }).format,
            monthYear: new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format,
            weekdayMonthDay: new Intl.DateTimeFormat(locale, { weekday: "short", month: "short", day: "numeric" }).format,
            hour: this.hourFormat,
            minute: this.minuteFormat,
            ampm: new Intl.DateTimeFormat(locale, { hour: "numeric", hour12: true }).format,
        };
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
import { addMonths, isValid, setISOWeek, subMonths } from "date-fns";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {
        ...MdDatetimePickerElement.properties,
        variant: { type: String },
        view: { type: String },
        type: { type: String },
        value: { type: String },
    };

    dateInputRef = createRef();
    hourInputRef = createRef();
    minuteInputRef = createRef();

    get dateInput() {
        return this.dateInputRef.value.textFieldNative.value;
    }
    get hourInput() {
        return this.hourInputRef.value.textFieldNative.value;
    }
    get minuteInput() {
        return this.minuteInputRef.value.textFieldNative.value;
    }

    variants = ["docked", "modal", "modal-input", "dial", "input"];

    constructor() {
        super();

        this.calendarType = "day";
        this.variant = "docked";
        this.view = "calendar";
        this.type = "datetime-local";

        this._handleDatetimePickerHourInput = this._handleDatetimePickerHourInput.bind(this);
        this._handleDatetimePickerMinuteInput = this._handleDatetimePickerMinuteInput.bind(this);
    }

    /* prettier-ignore */
    renderCalendar(){
        return html`
            <div class="md-datetime-picker__grid md-datetime-picker__grid--${this.calendarType}">
                <div class="md-datetime-picker__grid-head">
                    ${this.weekdays.map(cell=>html`
                        <div 
                            class="${classMap({
                                "md-datetime-picker__cell":true,
                                "md-datetime-picker__cell--sunday":cell.sunday,
                            })}"
                        >${cell.label}</div>
                    `)}
                </div>
                <div class="md-datetime-picker__grid-body">
                    ${this.calendar.map(cells=>html`
                        ${cells.map(cell=>html`
                            <div 
                                .cell="${cell}"
                                class="${classMap({
                                    "md-datetime-picker__cell":true,
                                    "md-datetime-picker__cell--sunday":cell.sunday,
                                    "md-datetime-picker__cell--outside":cell.outside,
                                    "md-datetime-picker__cell--today":cell.active,
                                    "md-datetime-picker__cell--selected":cell.selected,
                                    "md-datetime-picker__cell--range-start":cell.rangeStart,
                                    "md-datetime-picker__cell--in-range":cell.inRange,
                                    "md-datetime-picker__cell--range-end":cell.rangeEnd,
                                })}"
                                @click="${this._handleDatetimePickerDateSelection}"
                            >${cell.label}</div>
                        `)}
                    `)}
                </div>
            </div>
            
        `
    }

    /* prettier-ignore */
    renderYears(){
        this.yearCount=this.variant==='modal'?7*3:10
        return html`
            <md-list 
                class="md-datetime-picker__menu"
                .items="${this.years}"
                .singleSelect="${true}"
                @onListItemSelection="${this._handleDatetimePickerYearSelection}"
            ></md-list>
        `
    }

    /* prettier-ignore */
    renderMonths(){
        return html`
            <md-list 
                class="md-datetime-picker__menu"
                .items="${this.months}"
                .labelField="${this.variant==="docked"?"label":"labelShort"}"
                .singleSelect="${true}"
                @onListItemSelection="${this._handleDatetimePickerMonthSelection}"
            ></md-list>
        `
    }

    /* prettier-ignore */
    renderHours(){
        return html`
            <div class="md-datetime-picker__dial md-datetime-picker__dial--hours">
                ${this.hours.map(cell=>html`
                    <div 
                        .cell="${cell}"
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
                        @click="${this._handleDatetimePickerHourSelection}"
                    >${cell.label}</div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderMinutes(){
        return html`
            <div class="md-datetime-picker__dial md-datetime-picker__dial--minutes">
                ${this.minutes.map(cell=>html`
                    <div 
                        .cell="${cell}"
                        class="${classMap({
                            "md-datetime-picker__handle":true,
                            "md-datetime-picker__handle--now":cell.active,
                            "md-datetime-picker__handle--selected":cell.selected,
                        })}"
                        @click="${this._handleDatetimePickerMinuteSelection}"
                    >${cell.label}</div>
                `)}
            </div>
        `
    }

    /* prettier-ignore */
    renderDockedHeader(){
        return nothing
    }
    /* prettier-ignore */
    renderDockedToolbar(){
        return html`
            <div class="md-datetime-picker__toolbar">
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_left"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerMonthPrev}"
                ></md-icon-button>
                <md-split-button 
                    class="md-datetime-picker__split-button"
                    .label="${this.info.monthShort}"
                    .color="${"text"}"
                    .trailingIcon="${"arrow_drop_down"}"
                    .selected="${this.view === "months"}"
                    @onSplitButtonSelection="${this._handleDatetimePickerMonthMenu}"
                ></md-split-button>
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_right"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerMonthNext}"
                ></md-icon-button>
                <div class="md-datetime-picker__spacer"></div>
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_left"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerYearPrev}"
                ></md-icon-button>
                <md-split-button 
                    class="md-datetime-picker__split-button"
                    .label="${this.info.year}"
                    .color="${"text"}"
                    .trailingIcon="${"arrow_drop_down"}"
                    .selected="${this.view === "years"}"
                    @onSplitButtonSelection="${this._handleDatetimePickerYearMenu}"
                ></md-split-button>
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_right"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerYearNext}"
                ></md-icon-button>
            </div>
        `
    }
    /* prettier-ignore */
    renderDockedFooter(){
        return html`
            ${['dial','input'].includes(this.variant)?html`
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${this.variant==="dial"?"keyboard":"schedule"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerDialInput}"
                ></md-icon-button>
            `:nothing}
            <div class="md-datetime-picker__spacer"></div>
            <md-button 
                class="md-datetime-picker__button"
                .label="${"Cancel"}"
                .color="${"text"}"
                @onButtonClick="${this._handleDatetimePickerCancel}"
            ></md-button>
            <md-button 
                class="md-datetime-picker__button"
                .label="${"Ok"}"
                .color="${"text"}"
                @onButtonClick="${this._handleDatetimePickerOk}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    renderModalHeader(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__row">
                    <div class="md-datetime-picker__label">Select date</div>
                    <div class="md-datetime-picker__spacer"></div>
                </div>
                <div class="md-datetime-picker__row">
                    <div class="md-datetime-picker__headline">${this.variant==="modal-input"?"Enter dates":this.info.weekdayMonthDay}</div>
                    <div class="md-datetime-picker__spacer"></div>
                    <md-icon-button 
                        class="md-datetime-picker__icon-button"
                        .icon="${this.variant==="modal-input"?"calendar_today":"edit"}"
                        .color="${"standard"}"
                        @onIconButtonClick="${this._handleDatetimePickerModalInput}"
                    ></md-icon-button>
                </div>
            </div>
        `
    }
    /* prettier-ignore */
    renderModalToolbar(){
        return html`
            <div class="md-datetime-picker__toolbar">
                <md-split-button 
                    class="md-datetime-picker__split-button"
                    .label="${this.info.monthYear}"
                    .color="${"text"}"
                    .trailingIcon="${"arrow_drop_down"}"
                    .selected="${['years','months'].includes(this.view)}"
                    @onSplitButtonSelection="${this._handleDatetimePickerMonthYearMenu}"
                ></md-split-button>
                <div class="md-datetime-picker__spacer"></div>
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_left"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerMonthYearPrev}"
                ></md-icon-button>
                <md-icon-button 
                    class="md-datetime-picker__icon-button"
                    .icon="${"keyboard_arrow_right"}"
                    .color="${"standard"}"
                    @onIconButtonClick="${this._handleDatetimePickerMonthYearNext}"
                ></md-icon-button>
            </div>
        `
    }
    /* prettier-ignore */
    renderModalFooter(){
        return this.renderDockedFooter()
    }

    /* prettier-ignore */
    renderModalInputHeader(){
        return this.renderModalHeader()
    }
    /* prettier-ignore */
    renderModalInputToolbar(){
        return html`
            <div class="md-datetime-picker__toolbar">
                <md-text-field 
                    ${ref(this.dateInput)}
                    class="md-datetime-picker__text-field"
                    .type="${"date"}"
                    .label="${"Date"}"
                    .placeholder="${"mm/dd/yyyy"}"
                    .color="${"outlined"}"
                    @onTextFieldNativeInput="${this._handleDatetimePickerDateInput}"
                ></md-text-field>
            </div>
        `
    }
    /* prettier-ignore */
    renderModalInputFooter(){
        return this.renderDockedFooter()
    }

    /* prettier-ignore */
    renderDialHeader(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__row">
                    <div class="md-datetime-picker__label">${this.variant === "input"?"Enter time": "Select time"}</div>
                    <div class="md-datetime-picker__spacer"></div>
                </div>
            </div>
        `
    }
    /* prettier-ignore */
    renderDialToolbar(){
        return html`
            <div class="md-datetime-picker__toolbar">
                <div class="md-datetime-picker__input-time">
                    <md-text-field 
                        ${ref(this.hourInputRef)}
                        class="${classMap({
                            "md-datetime-picker__text-field":true,
                            "md-datetime-picker__text-field--active":this.view==="hours",
                        })}"
                        .value="${this.info.hour}"
                        .label="${ifDefined(this.variant==="input"?"Hour":undefined)}"
                        @onTextFieldNativeClick="${this._handleDatetimePickerHourFocus}"
                        @onTextFieldNativeFocus="${this._handleDatetimePickerHourFocus}"
                        @onTextFieldNativeInput="${this._formatTimeInput({type:'hour',threshold: this.hour12 ? 1 : 2,max: this.hour12 ? 12 : 23,digit: 2,callback: this._handleDatetimePickerHourInput,})}"
                    ></md-text-field>
                    <div class="md-datetime-picker__separator">:</div>
                    <md-text-field 
                        ${ref(this.minuteInputRef)}
                        class="${classMap({
                            "md-datetime-picker__text-field":true,
                            "md-datetime-picker__text-field--active":this.view==="minutes",
                        })}"
                        .value="${this.info.minute}"
                        .label="${ifDefined(this.variant==="input"?"Minute":undefined)}"
                        @onTextFieldNativeClick="${this._handleDatetimePickerMinuteFocus}"
                        @onTextFieldNativeFocus="${this._handleDatetimePickerMinuteFocus}"
                        @onTextFieldNativeInput="${this._formatTimeInput({type:'minute',threshold: 5,max: 59,digit: 2,callback: this._handleDatetimePickerMinuteInput,})}"
                    ></md-text-field>
                </div>
                ${this.hour12?html`
                    <md-button-group 
                        class="md-datetime-picker--button-group"
                        .buttons="${[
                            { id: "AM", component:"button", label:"AM", selected: this.info.ampm==="AM" },
                            { id: "PM", component:"button", label:"PM", selected: this.info.ampm==="PM" },
                        ]}"
                        .variant="${"connected"}"
                        .vertical="${true}"
                        .shape="${"square"}"
                        .color="${"outlined"}"
                        .singleSelect="${true}"
                        @onButtonGroupItemSelection="${this._handleDatetimePickerPeriodSelection}"
                    ></md-button-group>
                `:nothing}
            </div>
        `
    }
    /* prettier-ignore */
    renderDialFooter(){
        return this.renderDockedFooter()
    }

    /* prettier-ignore */
    renderInputHeader(){
        return this.renderDialHeader()
    }
    /* prettier-ignore */
    renderInputToolbar(){
        return this.renderDialToolbar()
    }
    /* prettier-ignore */
    renderInputFooter(){
        return this.renderDialFooter()
    }

    /* prettier-ignore */
    renderHeader(){
        return choose(this.variant,[
            ['docked',() => this.renderDockedHeader()],
            ['modal',() => this.renderModalHeader()],
            ['modal-input',() => this.renderModalInputHeader()],
            ['dial',() => this.renderDialHeader()],
            ['input',() => this.renderInputHeader()],
        ],() => nothing)
    }
    /* prettier-ignore */
    renderToolbar(){
        return choose(this.variant,[
            ['docked',() => this.renderDockedToolbar()],
            ['modal',() => this.renderModalToolbar()],
            ['modal-input',() => this.renderModalInputToolbar()],
            ['dial',() => this.renderDialToolbar()],
            ['input',() => this.renderInputToolbar()],
        ],() => nothing)
    }
    /* prettier-ignore */
    renderView(){
        return choose(this.view,[
            ["calendar",() => this.renderCalendar()],
            ["years",() => this.renderYears()],
            ["months",() => this.renderMonths()],
            ["hours",() => this.renderHours()],
            ["minutes",() => this.renderMinutes()],
        ],() => nothing)
    }
    /* prettier-ignore */
    renderFooter(){
        return choose(this.variant,[
            ['docked',() => this.renderDockedFooter()],
            ['modal',() => this.renderModalFooter()],
            ['modal-input',() => this.renderModalInputFooter()],
            ['dial',() => this.renderDialFooter()],
            ['input',() => this.renderInputFooter()],
        ],() => nothing)
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.renderHeader()}
            <div class="md-datetime-picker__body">
                ${this.renderToolbar()}
                ${this.renderView()}
            </div>
            <div class="md-datetime-picker__footer">
                ${this.renderFooter()}
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

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("value")) {
            this.reset();
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-datetime-picker--${variant}`, this.variant === variant);
            });
        }
    }

    // Selection
    _handleDatetimePickerYearSelection(event) {
        const item = event.detail.item;

        this.selection.setFullYear(item.year);

        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);

        this.view = "months";

        this._emitChange();
    }
    _handleDatetimePickerMonthSelection(event) {
        const item = event.detail.item;

        this.selection.setMonth(item.month);

        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);

        this.view = "calendar";

        this._emitChange();
    }
    _handleDatetimePickerDateSelection(event) {
        const cell = event.currentTarget.cell;

        if (cell.week === undefined) {
            this.selection.setDate(cell.date);
        } else {
            this.selection = setISOWeek(this.selection, cell.week);
        }

        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);

        this._emitChange();
    }
    _handleDatetimePickerHourSelection(event) {
        const cell = event.currentTarget.cell;

        this.setHour(cell.hour, this.hour12 && this.info.ampm);

        this._emitChange();
    }
    _handleDatetimePickerMinuteSelection(event) {
        const cell = event.currentTarget.cell;

        this.setMinute(cell.minute);

        this.view = "hours";

        this._emitChange();
    }

    _handleDatetimePickerPeriodSelection(event) {
        const data = event.detail.data;

        const hour = this.selection.getHours();
        this.setHour(hour, data.id);

        this._emitChange();
    }

    _handleDatetimePickerMonthPrev(event) {
        this.selection.setMonth(this.selection.getMonth() - 1);

        this.selection = new Date(this.selection);
    }
    _handleDatetimePickerMonthNext(event) {
        this.selection.setMonth(this.selection.getMonth() + 1);

        this.selection = new Date(this.selection);
    }

    _handleDatetimePickerYearPrev(event) {
        const count = this.view === "years" ? this.yearCount : 1;
        this.selection.setFullYear(this.selection.getFullYear() - count);

        this.selection = new Date(this.selection);
    }
    _handleDatetimePickerYearNext(event) {
        const count = this.view === "years" ? this.yearCount : 1;
        this.selection.setFullYear(this.selection.getFullYear() + count);

        this.selection = new Date(this.selection);
    }

    _handleDatetimePickerMonthMenu({ detail: { selected } } = {}) {
        this.view = selected ? "months" : "calendar";
    }
    _handleDatetimePickerYearMenu({ detail: { selected } } = {}) {
        this.view = selected ? "years" : "calendar";
    }

    _handleDatetimePickerModalInput(event) {
        this.variant = this.variant === "modal-input" ? "modal" : "modal-input";
        this.view = this.variant === "modal-input" ? "nothing" : "calendar";
    }
    _handleDatetimePickerDialInput(event) {
        this.variant = this.variant === "dial" ? "input" : "dial";
        this.view = this.variant === "dial" ? "hours" : "nothing";
    }

    _handleDatetimePickerMonthYearPrev(event) {
        if (this.view === "calendar") {
            this.selection.setMonth(this.selection.getMonth() - 1);

            this.selection = new Date(this.selection);
        } else if (this.view === "years") {
            this.selection.setFullYear(this.selection.getFullYear() - this.yearCount);

            this.selection = new Date(this.selection);
        } else if (this.view === "months") {
            this.selection.setFullYear(this.selection.getFullYear() - 1);

            this.selection = new Date(this.selection);
        }
    }
    _handleDatetimePickerMonthYearNext(event) {
        if (this.view === "calendar") {
            this.selection.setMonth(this.selection.getMonth() + 1);

            this.selection = new Date(this.selection);
        } else if (this.view === "years") {
            this.selection.setFullYear(this.selection.getFullYear() + this.yearCount);

            this.selection = new Date(this.selection);
        } else if (this.view === "months") {
            this.selection.setFullYear(this.selection.getFullYear() + 1);

            this.selection = new Date(this.selection);
        }
    }
    _handleDatetimePickerMonthYearMenu({ detail: { selected } } = {}) {
        this.view = selected ? "years" : "calendar";
    }

    // Input
    _handleDatetimePickerHourFocus(event) {
        this.view = this.variant === "dial" ? "hours" : "nothing";
        this.hourInput.select();
    }
    _handleDatetimePickerMinuteFocus(event) {
        this.view = this.variant === "dial" ? "minutes" : "nothing";
        this.minuteInput.select();
    }

    _handleDatetimePickerDateInput(event) {}
    _formatTimeInput({ key, threshold, max, digit, callback } = {}) {
        return ({ detail: { event } } = {}) => {
            const input = event.currentTarget;
            const data = (event.data || "").replace(/\D/, "");
            const key = `_${type}Buffer`;
            this[key] = this[key] || "";
            if (this[key].length === 0 && Number(data) > threshold) {
                this[key] += "0";
            }
            this[key] += data;
            const value = Math.min(Number(this[key]), max);
            const formatted = String(value).padStart(2, "0");
            window.requestAnimationFrame(() => {
                input.setRangeText(formatted, 0, formatted.length, "select");
            });
            if (this[key].length === digit) {
                this[key] = "";
                callback(value);
            }
        };
    }
    _handleDatetimePickerHourInput(value) {
        this.setHour(value, this.hour12 && this.info.ampm);
        this.minuteInput.focus();
    }

    _handleDatetimePickerMinuteInput(value) {
        this.setMinute(value);
        this.view = this.variant === "dial" ? "hours" : "nothing";
        this.minuteInput.blur();
    }

    _handleDatetimePickerCancel(event) {
        this.reset();
        this._emitChange();
    }
    _handleDatetimePickerOk(event) {
        this._emitChange();
    }

    _emitChange() {
        const value = dateFormatter[this.type].toString(this.selected);
        const data = {
            type: this.type,
            value,
        };
        this.emit("onDatetimePickerChange", { data });
    }

    reset() {
        const date = dateFormatter[this.type].parse(this.value);
        this.selection = new Date(date);
        this.selected = new Date(date);
    }

    setHour(hour, periode) {
        if (periode === "AM" && hour >= 12) {
            this.selection.setHours(hour - 12);
        } else if (periode === "PM" && hour < 12) {
            this.selection.setHours(hour + 12);
        } else {
            this.selection.setHours(hour);
        }

        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
    }

    setMinute(minute) {
        this.selection.setMinutes(minute);

        this.selection = new Date(this.selection);
        this.selected = new Date(this.selection);
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
    background-color: var(--md-sys-color-surface-container-high);
    box-shadow: var(--md-sys-elevation-level3);
    border-radius: var(--md-sys-shape-corner-large);
    zoom: 0.8;
}

.md-datetime-picker__header {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    padding-right: 16px;
}

.md-datetime-picker__row {
    display: flex;
    align-items: center;
}

.md-datetime-picker__label {
    font-family: var(--md-sys-typescale-label-large-font);
    font-weight: var(--md-sys-typescale-label-large-weight);
    font-size: var(--md-sys-typescale-label-large-size);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
    line-height: var(--md-sys-typescale-label-large-line-height);
}

.md-datetime-picker__headline {
    font-family: var(--md-sys-typescale-headline-large-font);
    font-weight: var(--md-sys-typescale-headline-large-weight);
    font-size: var(--md-sys-typescale-headline-large-size);
    letter-spacing: var(--md-sys-typescale-headline-large-tracking);
    line-height: var(--md-sys-typescale-headline-large-line-height);
}

.md-datetime-picker__spacer {
    flex: 1;
}

.md-datetime-picker__body {
    display: flex;
    flex-direction: column;
}

.md-datetime-picker__toolbar {
    display: flex;
    align-items: center;
    padding: 0 24px;
    padding-right: 16px;
    padding-left: 16px;
}

.md-datetime-picker__split-button {
    --md-comp-split-button-gap: 0;

    --md-comp-split-button-leading-padding-left: 8px;
    --md-comp-split-button-leading-padding-right: 4px;

    --md-comp-split-button-trailing-padding-left: 4px;
    --md-comp-split-button-trailing-padding-right: 6px;

    --md-comp-split-button-selected-trailing-padding-left: 5px;
    --md-comp-split-button-selected-trailing-padding-right: 5px;
}

.md-datetime-picker__input-time {
    display: inline-flex;

    .md-datetime-picker__text-field {
        --md-comp-text-field-height: 80px;
        width: 96px;

        .md-text-field__label {
            margin: 0;
            order: 1;
        }

        .md-text-field__container {
            border-radius: var(--md-sys-shape-corner-small);
        }

        .md-text-field__native {
            padding: 0 16px;
            margin: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-display-medium-line-height)) / 2) 0;
            font-family: var(--md-sys-typescale-display-medium-font);
            font-weight: var(--md-sys-typescale-display-medium-weight);
            font-size: var(--md-sys-typescale-display-medium-size);
            letter-spacing: var(--md-sys-typescale-display-medium-tracking);
            line-height: var(--md-sys-typescale-display-medium-line-height);
            text-align: center;

            &::selection {
                background-color: transparent;
            }
        }

        &.md-datetime-picker__text-field--active,
        &.md-text-field--focus {
            .md-text-field__container {
                background-color: var(--md-sys-color-primary-container);
                color: var(--md-sys-color-on-primary-container);
            }
        }

        &.md-text-field--focus {
            .md-text-field__container {
                outline: 2px solid var(--md-sys-color-primary);
                outline-offset: -2px;
            }
        }
    }
}

.md-datetime-picker__text-field.md-text-field--outlined {
    &.md-text-field--with-label {
        .md-text-field__label {
            &:before {
                background-color: var(--md-sys-color-surface-container-high);
            }
        }
    }
}

.md-datetime-picker__separator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 80px;
    font-family: var(--md-sys-typescale-display-large-font);
    font-weight: var(--md-sys-typescale-display-large-weight);
    font-size: var(--md-sys-typescale-display-large-size);
    letter-spacing: var(--md-sys-typescale-display-large-tracking);
    line-height: var(--md-sys-typescale-display-large-line-height);
}

.md-datetime-picker--button-group.md-button-group--connected.md-button-group--vertical {
    --md-comp-button-group-standard-button-selected-border-radius: var(--md-sys-shape-corner-small);
    --md-comp-button-group-standard-button-border-radius: 0;
    --md-comp-button-group-standard-button-active-border-radius: 0;

    gap: 0;

    .md-button {
        --md-comp-button-padding: 12px;
        --md-comp-button-square-border-radius: var(--md-sys-shape-corner-small);
        --md-comp-button-toggle-selected-border-color: var(--md-sys-color-outline-variant);
        --md-comp-button-toggle-selected-background-color: var(--md-sys-color-tertiary-container);
        --md-comp-button-toggle-selected-color: var(--md-sys-color-on-tertiary-container);
        min-width: 52px;

        &.md-button--selected {
            border-radius: 0;
        }
    }
}

.md-datetime-picker__footer {
    display: flex;
    align-items: center;
    padding: 0 24px;
    padding-right: 8px;
    padding-left: 16px;
    gap: 0 8px;
}

.md-datetime-picker__grid {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    z-index: 1;
    overflow: hidden;
}
.md-datetime-picker__grid-head {
    display: grid;
    grid-template-columns: repeat(7, 48px);
    grid-template-rows: repeat(1, 48px);

    .md-datetime-picker__cell {
        @include mixins.ripple-disabled();
    }
}
.md-datetime-picker__grid-body {
    display: grid;
    grid-template-columns: repeat(7, 48px);
    grid-template-rows: repeat(6, 48px);
}

.md-datetime-picker__cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: var(--md-sys-shape-corner-full);
    @include mixins.ripple-vars();
    @include mixins.ripple();
    // @include mixins.ripple-bounded();
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
    // &:drag {@include mixins.ripple-drag();}
    &[disabled] {
        @include mixins.ripple-disabled();
    }
    &:after {
        width: 40px;
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
.md-datetime-picker__cell--in-range {
    border: 1px solid var(--md-sys-color-secondary-container);
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
}

.md-datetime-picker__cell--range-start,
.md-datetime-picker__cell--in-range,
.md-datetime-picker__cell--range-end {
    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 96px;
        height: 40px;
        background-color: var(--md-sys-color-secondary-container);
    }
}
.md-datetime-picker__cell--range-start {
    &::before {
        left: 50%;
    }
}
.md-datetime-picker__cell--range-end {
    &::before {
        right: 50%;
    }
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

.md-datetime-picker__grid--week {
    .md-datetime-picker__grid-head {
        grid-template-columns: repeat(8, 48px);
    }
    .md-datetime-picker__grid-body {
        grid-template-columns: repeat(8, 48px);
    }
}

.md-datetime-picker__menu {
    padding: 0;
    height: calc(48px * 7);
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
    border-radius: var(--md-sys-shape-corner-full);
    background-color: var(--md-sys-color-surface-container-highest);

    &::before {
        content: "";
        position: absolute;
        z-index: 3;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 8px;
        height: 8px;
        border-radius: var(--md-sys-shape-corner-full);
        background-color: var(--md-sys-color-primary);
    }
}

.md-datetime-picker__handle {
    @include mixins.ripple-vars();
    @include mixins.ripple();
    // @include mixins.ripple-bounded();
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
    // &:drag {@include mixins.ripple-drag();}
    &[disabled] {
        @include mixins.ripple-disabled();
    }

    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--md-sys-shape-corner-full);

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        right: 50%;
        top: 50%;
        transform-origin: right center;
        height: 2px;
        border-radius: var(--md-sys-shape-corner-full);
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
                    left: calc(100px * cos((($i - 4) / 12) * 2 * pi) + 104px);
                    top: calc(100px * sin((($i - 4) / 12) * 2 * pi) + 104px);

                    &::before {
                        width: 100px;
                        transform: rotate(calc((360deg / 12) * ($i - 4)));
                    }
                } @else {
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
                left: calc(100px * cos((($i - 16) / 60) * 2 * pi) + 104px);
                top: calc(100px * sin((($i - 16) / 60) * 2 * pi) + 104px);

                @if ((($i - 16) % 5) != 0) {
                    z-index: 1;
                    height: 24px;
                    width: 24px;
                    left: calc(100px * cos((($i - 16) / 60) * 2 * pi) + 116px);
                    top: calc(100px * sin((($i - 16) / 60) * 2 * pi) + 116px);
                    font-family: var(--md-sys-typescale-body-small-font);
                    font-weight: var(--md-sys-typescale-body-small-weight);
                    font-size: var(--md-sys-typescale-body-small-size);
                    letter-spacing: var(--md-sys-typescale-body-small-tracking);
                    line-height: var(--md-sys-typescale-body-small-line-height);

                    &:not(:hover, .md-datetime-picker__handle--now, .md-datetime-picker__handle--selected) {
                        font-size: 0;
                    }
                }

                &::before {
                    width: 100px;
                    transform: rotate(calc((360deg / 60) * ($i - 16)));
                }
            }
        }
    }
}

.md-datetime-picker--docked {
    min-width: 360px;

    .md-datetime-picker__toolbar {
        padding-top: 20px;
        padding-bottom: 18px;
    }

    .md-datetime-picker__menu {
        border-top: 1px solid var(--md-sys-color-outline-variant);
    }

    .md-datetime-picker__footer {
        padding-top: 8px;
        padding-bottom: 12px;
    }
}

.md-datetime-picker--modal,
.md-datetime-picker--modal-input {
    min-width: 360px;

    .md-datetime-picker__header {
        padding-top: 16px;
        padding-bottom: 12px;
        gap: 36px 0;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }

    .md-datetime-picker__toolbar {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    .md-datetime-picker__menu {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(7, minmax(0, 1fr));
        height: unset;
        padding: 0 12px;

        .md-list__item {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 36px;
            padding: 6px 16px;
            gap: 0 16px;
            min-width: 72px;
            width: 72px;
            margin: 6px 20px;
            border-radius: var(--md-sys-shape-corner-full);
        }

        .md-list__leading {
            display: none;
        }

        .md-list__content {
            flex: unset;
        }

        .md-list__item--selected {
            background-color: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
        }
    }

    .md-datetime-picker__footer {
        padding-top: 8px;
        padding-bottom: 12px;
    }
}

.md-datetime-picker--modal-input {
    min-width: 328px;

    .md-datetime-picker__toolbar {
        padding-top: 16px;
        padding-bottom: 16px;
    }
}

.md-datetime-picker--dial {
    min-width: 328px;
}
.md-datetime-picker--dial,
.md-datetime-picker--input {
    .md-datetime-picker__header {
        padding-top: 24px;
        padding-bottom: 20px;
    }

    .md-datetime-picker__body {
        align-items: center;
        gap: 36px 0;
    }

    .md-datetime-picker__toolbar {
        align-items: flex-start;
        padding-left: 24px;
        padding-right: 24px;
        gap: 0 12px;
    }

    .md-datetime-picker__footer {
        padding-top: 24px;
        padding-bottom: 24px;
    }
}

// .md-datetime-picker--input {
// }
```

## src\material\core

### date-formatter

src\material\core\date-formatter.js

```js
import { parse, parseISO, format, getISOWeek, setISOWeek, isValid } from "date-fns";

const dateFormatter = {
    date: {
        parse: (value) => parseISO(value),
        toString: (date) => format(date, "yyyy-MM-dd"),
        pattern: "yyyy-MM-dd",
    },
    week: {
        parse: (value) => {
            const match = value?.match(/^(\d{4})-W(\d{1,2})$/);
            return match ? setISOWeek(new Date(parseInt(match[1]), 0, 4), parseInt(match[2])) : null;
        },
        toString: (date) => {
            if (!date || !isValid(date)) return "";
            return `${date.getFullYear()}-W${String(getISOWeek(date)).padStart(2, "0")}`;
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

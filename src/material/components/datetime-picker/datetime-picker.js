import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDatetimePickerElement } from "../../base/datetime-picker.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";
import { dateFormatter } from "../../core/date-formatter.js";
import { addMonths, isValid, setISOWeek, subMonths } from "date-fns";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {
        ...MdDatetimePickerElement.properties,
        variant: { type: String },
        view: { type: String },
        type: { type: String },
        value: { type: String },
    };

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

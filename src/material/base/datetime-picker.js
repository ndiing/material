import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
import { getISOWeek, setWeek } from "date-fns";


/**
 * @class MdDatetimePickerElement
 * @extends MdElement
 */
class MdDatetimePickerElement extends MdElement {
    
    /**
     * @property {Boolean} hour12 - 
     * @property {String} locale - 
     * @property {String} calendarType - 
     * @property {Date} selection - 
     */
    static properties = {
        hour12: { type: Boolean },
        locale: { type: String },
        calendarType: { type: String },
        selection: { type: Date },
    };

    
    /**
     * 
     */
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

    
    /**
     * 
     */
    get months() {
        const arr = [];
        const selectionYear = this.selection.getFullYear();
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectionYear, i);
            const selected = date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth();
            arr.push({
                id: date.getMonth(),
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                labelShort: this.monthFormatShort(date),
                active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth(),
                selected,
                leading: [{ component: "icon", icon: selected ? "check" : "" }],
            });
        }
        return arr;
    }

    
    /**
     * 
     */
    get weekdays() {
        return this.calendarType === "week" ? this.weekColumns : this.dayColumns;
    }

    
    /**
     * 
     */
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

    
    /**
     * 
     */
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

    
    /**
     * 
     */
    get calendar() {
        return this.calendarType === "week" ? this.weekCalendar : this.dayCalendar;
    }

    
    /**
     * 
     */
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
                    active: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate(),
                    selected: date.getFullYear() === this.selected.getFullYear() && date.getMonth() === this.selected.getMonth() && date.getDate() === this.selected.getDate(),
                    outside: !(date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth()),
                    sunday: date.getDay() === 0,
                });
            }
            rows.push(cells);
        }
        return rows;
    }

    
    /**
     * 
     */
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
                active: weekDate.getFullYear() === this.current.getFullYear() && getISOWeek(weekDate) === getISOWeek(this.current),
                selected: weekDate.getFullYear() === this.selected.getFullYear() && getISOWeek(weekDate) === getISOWeek(this.selected),
                sunday: weekDate.getDay() === 0,
            });
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectionYear, selectionMonth, k - firstDayOfMonth);
                const selected = date.getFullYear() === this.selected.getFullYear() && getISOWeek(date) === getISOWeek(this.selected);
                cells.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    selected,
                    outside: !(date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth()),
                    sunday: date.getDay() === 0,
                    rangeStart: selected && date.getDay() === 1,
                    inRange: selected && date.getDay() !== 1 && date.getDay() !== 0,
                    rangeEnd: selected && date.getDay() === 0,
                });
            }
            rows.push(cells);
        }
        return rows;
    }

    
    /**
     * 
     */
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

    
    /**
     * 
     */
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

    
    /**
     * 
     */
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

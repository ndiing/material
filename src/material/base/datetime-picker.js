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

import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
import { getWeek, setWeek } from "date-fns";

class MdDatetimePickerElement extends MdElement {
    static properties = {
        locale: { type: String },
        type: { type: String },
        selectedDate: { type: Date },
    };

    get years() {
        const arr = [];
        const selectedYear = Math.floor(this.selectedDate.getFullYear() / 10) * 10;
        for (let i = 0; i < 10; i++) {
            const date = new Date(selectedYear + i, 0);
            arr.push({
                year: date.getFullYear(),
                label: this.yearFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear(),
                selected: date.getFullYear() === this.selectedDate.getFullYear(),
            });
        }
        return arr;
    }

    get months() {
        const arr = [];
        const selectedYear = this.selectedDate.getFullYear();
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectedYear, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth(),
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
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth).getDay();
        const arr = [];
        for (let i = 0; i < 6; i++) {
            const obj = {
                children: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth);
                obj.children.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate(),
                    selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }

    get weekCalendar() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
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
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && getWeek(date) === this.getWeek(currentDate),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && getWeek(date) === this.getWeek(selectedDate),
                outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                children: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth + 1);
                obj.children.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate(),
                    selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }

    get hours() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const selectedDate = this.selectedDate.getDate();
        const arr = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(selectedYear, selectedMonth, selectedDate, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate() && date.getHours() === this.currentDate.getHours(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate() && date.getHours() === this.selectedDate.getHours(),
            });
        }
        return arr;
    }

    get minutes() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const selectedDate = this.selectedDate.getDate();
        const selectedHour = this.selectedDate.getHours();
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
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate() && date.getHours() === this.currentDate.getHours() && date.getMinutes() === this.currentDate.getMinutes(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate() && date.getHours() === this.selectedDate.getHours() && date.getMinutes() === this.selectedDate.getMinutes(),
            });
        }
        return arr;
    }

    get selectedMonth() {
        const value = this.selectedDate.getMonth();
        const label = this.selectedMonthFormat(this.selectedDate);
        return { value, label };
    }

    get selectedYear() {
        const value = this.selectedDate.getFullYear();
        const label = this.selectedYearFormat(this.selectedDate);
        return { value, label };
    }

    constructor() {
        super();

        this.locale = undefined;

        this._setFormatter();

        this.type = "day";

        this.currentDate = new Date();
        this.selectedDate = new Date();
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

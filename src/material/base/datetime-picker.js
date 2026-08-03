import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";

if (typeof Date.prototype.setWeek !== "function") {
    Date.prototype.setWeek = function (week) {
        const year = this.getFullYear();
        const firstThursday = new Date(year, 0, 4);
        const firstThursdayTime = firstThursday.getTime();
        const weekStartTime = firstThursdayTime + (week - 1) * 7 * 24 * 60 * 60 * 1000;
        this.setTime(weekStartTime);
        return this;
    };
}

if (typeof Date.prototype.getWeek !== "function") {
    Date.prototype.getWeek = function () {
        const target = new Date(this.valueOf());
        const dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        const firstThursday = new Date(target.getFullYear(), 0, 4);
        const weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
        return weekNumber;
    };
}

class MdDatetimePickerElement extends MdElement {
    static properties = {
        locale: { type: String },
        type: { type: String },
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
                week: date.getWeek(),
                label: this.dateFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getWeek() === this.currentDate.getWeek(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getWeek() === this.selectedDate.getWeek(),
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
        this.monthFormat = new Intl.DateTimeFormat(locale, { month: "long" }).format;
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

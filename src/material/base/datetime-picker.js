import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
import { format, getISOWeek, setWeek } from "date-fns";

/**
 * @class MdDatetimePickerElement
 * @extends MdElement
 */
class MdDatetimePickerElement extends MdElement {
    /**
     * @property {Boolean} hour12 -
     * @property {String} calendarType -
     * @property {Date} selection -
     */
    static properties = {
        hour12: { type: Boolean },
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
                label: date.getFullYear(),
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
                label: format(date, "MMMM"),
                labelShort: format(date, "MMM"),
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
                label: format(date, "EEEEE"),
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
                label: format(date, "EEEEE"),
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
                    label: date.getDate(),
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
                label: format(weekDate, "II"),
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
                    label: date.getDate(),
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
                label: format(date, this.hour12 ? "hh" : "HH"),
                active: date.getHours() === this.current.getHours(),
                selected: format(date, this.hour12 ? "hh" : "HH") === format(this.selected, this.hour12 ? "hh" : "HH"),
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
                label: format(date, "mm"),
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
            monthShort: format(this.selection, "MMM"),
            year: format(this.selection, "yyyy"),
            monthYear: format(this.selection, "MMMM yyyy"),
            weekdayMonthDay: format(this.selection, "EEE, MMM d"),
            hour: format(this.selection, this.hour12 ? "hh" : "HH"),
            minute: format(this.selection, "mm"),
            ampm: format(this.selection, "a"),
        };
    }

    constructor() {
        super();

        this.hour12 = false;

        this.calendarType = "day";
        this.selection = new Date();
        this.yearCount = 10;

        this.current = new Date();
        this.selected = new Date();
    }
}

export { MdDatetimePickerElement };

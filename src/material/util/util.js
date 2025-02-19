/**
 * @module Util
 */
/**
 * Parses a date string and returns a Date object.
 * @memberof member:Util
 * @param {string} [string] - The date string to parse.
 * @returns {Date} The parsed Date object.
 */
function parseDate(string) {
    return new Date(string);
}
/**
 * Parses a datetime-local string and returns a Date object.
 * @memberof member:Util
 * @param {string} [string] - The datetime-local string to parse.
 * @returns {Date} The parsed Date object.
 */
function parseDatetimeLocal(string) {
    return new Date(string);
}
/**
 * Parses a month string and returns a Date object set to the first day of the month.
 * @memberof member:Util
 * @param {string} [string] - The month string to parse.
 * @returns {Date} The parsed Date object.
 */
function parseMonth(string) {
    return new Date(string + "-01");
}
/**
 * Parses a time string and returns a Date object with the time set.
 * @memberof member:Util
 * @param {string} [string] - The time string to parse (HH:MM).
 * @returns {Date} The parsed Date object with the time set.
 */
function parseTime(string) {
    const [hours, minutes] = string.split(":");
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}
/**
 * Parses a week string and returns a Date object set to the first day of the week.
 * @memberof member:Util
 * @param {string} [string] - The week string to parse (YYYY-W##).
 * @returns {Date} The parsed Date object set to the first day of the week.
 */
function parseWeek(string) {
    const [year, week] = string.split("-W");
    const d = new Date(year, 0, 1);
    const days = (week - 1) * 7;
    d.setDate(d.getDate() + days);
    return d;
}
/**
 * Converts a Date object to a date string (YYYY-MM-DD).
 * @memberof member:Util
 * @param {Date} [date] - The Date object to convert.
 * @returns {string} The date string.
 */
function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}
/**
 * Converts a Date object to a datetime-local string (YYYY-MM-DDTHH:MM).
 * @memberof member:Util
 * @param {Date} [date] - The Date object to convert.
 * @returns {string} The datetime-local string.
 */
function stringifyDatetimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}
/**
 * Converts a Date object to a month string (YYYY-MM).
 * @memberof member:Util
 * @param {Date} [date] - The Date object to convert.
 * @returns {string} The month string.
 */
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7);
}
/**
 * Converts a Date object to a time string (HH:MM).
 * @memberof member:Util
 * @param {Date} [date] - The Date object to convert.
 * @returns {string} The time string.
 */
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}
/**
 * Converts a Date object to a week string (YYYY-W##).
 * @memberof member:Util
 * @param {Date} [date] - The Date object to convert.
 * @returns {string} The week string.
 */
function stringifyWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}
/**
 * Finds the closest scrollable ancestor element.
 * @memberof member:Util
 * @param {HTMLElement} [element] - The element to start the search from.
 * @returns {HTMLElement} The closest scrollable ancestor element.
 */
function closestScrollableElement(element) {
    let current = element;

    while (current) {
        const style = window.getComputedStyle(current);

        if (/(auto|scroll)/.test(style.overflow + style.overflowY)) return current;
        current = current.parentElement;
    }

    return document.documentElement || document.body;
}
export { parseDate, parseDatetimeLocal, parseMonth, parseTime, parseWeek, stringifyDate, stringifyDatetimeLocal, stringifyMonth, stringifyTime, stringifyWeek, closestScrollableElement };

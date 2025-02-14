/**
 * @namespace Util
 */

/**
 * @memberof Util
 * @param {String} [string] - The date string to parse
 * @returns {Date} The parsed date
 */
function parseDate(string) {
    return new Date(string);
}

/**
 * @memberof Util
 * @param {String} [string] - The datetime-local string to parse
 * @returns {Date} The parsed datetime-local
 */
function parseDatetimeLocal(string) {
    return new Date(string);
}

/**
 * @memberof Util
 * @param {String} [string] - The month string to parse
 * @returns {Date} The parsed month
 */
function parseMonth(string) {
    return new Date(string + "-01");
}

/**
 * @memberof Util
 * @param {String} [string] - The time string to parse
 * @returns {Date} The parsed time
 */
function parseTime(string) {
    const [hours, minutes] = string.split(":");
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * @memberof Util
 * @param {String} [string] - The week string to parse
 * @returns {Date} The parsed week
 */
function parseWeek(string) {
    const [year, week] = string.split("-W");
    const d = new Date(year, 0, 1);
    const days = (week - 1) * 7;
    d.setDate(d.getDate() + days);
    return d;
}

/**
 * @memberof Util
 * @param {Date} [date] - The date to stringify
 * @returns {String} The stringified date
 */
function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}

/**
 * @memberof Util
 * @param {Date} [date] - The datetime-local to stringify
 * @returns {String} The stringified datetime-local
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
 * @memberof Util
 * @param {Date} [date] - The month to stringify
 * @returns {String} The stringified month
 */
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7);
}

/**
 * @memberof Util
 * @param {Date} [date] - The time to stringify
 * @returns {String} The stringified time
 */
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}

/**
 * @memberof Util
 * @param {Date} [date] - The week to stringify
 * @returns {String} The stringified week
 */
function stringifyWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}
export { parseDate, parseDatetimeLocal, parseMonth, parseTime, parseWeek, stringifyDate, stringifyDatetimeLocal, stringifyMonth, stringifyTime, stringifyWeek };

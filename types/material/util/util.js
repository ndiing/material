"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = parseDate;
exports.parseDatetimeLocal = parseDatetimeLocal;
exports.parseMonth = parseMonth;
exports.parseTime = parseTime;
exports.parseWeek = parseWeek;
exports.stringifyDate = stringifyDate;
exports.stringifyDatetimeLocal = stringifyDatetimeLocal;
exports.stringifyMonth = stringifyMonth;
exports.stringifyTime = stringifyTime;
exports.stringifyWeek = stringifyWeek;
exports.closestScrollableElement = closestScrollableElement;
/**
 * @param {Any} [string]
 */
function parseDate(string) {
    return new Date(string);
}
/**
 * @param {Any} [string]
 */
function parseDatetimeLocal(string) {
    return new Date(string);
}
/**
 * @param {Any} [string]
 */
function parseMonth(string) {
    return new Date(string + "-01");
}
/**
 * @param {Any} [string]
 */
function parseTime(string) {
    var _a = string.split(":"), hours = _a[0], minutes = _a[1];
    var date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}
/**
 * @param {Any} [string]
 */
function parseWeek(string) {
    var _a = string.split("-W"), year = _a[0], week = _a[1];
    var d = new Date(year, 0, 1);
    var days = (week - 1) * 7;
    d.setDate(d.getDate() + days);
    return d;
}
/**
 * @param {Any} [date]
 */
function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}
/**
 * @param {Any} [date]
 */
function stringifyDatetimeLocal(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hours, ":").concat(minutes);
}
/**
 * @param {Any} [date]
 */
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7);
}
/**
 * @param {Any} [date]
 */
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}
/**
 * @param {Any} [date]
 */
function stringifyWeek(date) {
    var firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    var days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil((days + 1) / 7);
    return "".concat(date.getFullYear(), "-W").concat(String(weekNumber).padStart(2, "0"));
}
/**
 * @param {Any} [element]
 */
function closestScrollableElement(element) {
    var current = element;
    while (current) {
        var style = window.getComputedStyle(current);
        if (/(auto|scroll)/.test(style.overflow + style.overflowY))
            return current;
        current = current.parentElement;
    }
    return document.documentElement || document.body;
}

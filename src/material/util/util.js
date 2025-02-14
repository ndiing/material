/**
 * @param {Undefined} [string]
 */
function parseDate(string) {
    return new Date(string);
}

/**
 * @param {Undefined} [string]
 */
function parseDatetimeLocal(string) {
    return new Date(string);
}

/**
 * @param {Undefined} [string]
 */
function parseMonth(string) {
    return new Date(string + "-01");
}

/**
 * @param {Undefined} [string]
 */
function parseTime(string) {
    const [hours, minutes] = string.split(":");
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * @param {Undefined} [string]
 */
function parseWeek(string) {
    const [year, week] = string.split("-W");
    const d = new Date(year, 0, 1);
    const days = (week - 1) * 7;
    d.setDate(d.getDate() + days);
    return d;
}

/**
 * @param {Undefined} [date]
 */
function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}

/**
 * @param {Undefined} [date]
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
 * @param {Undefined} [date]
 */
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7);
}

/**
 * @param {Undefined} [date]
 */
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}

/**
 * @param {Undefined} [date]
 */
function stringifyWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}

/**
 * @param {Undefined} [element]
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

/**
 * @namespace Util
*/

/**
 * Mengonversi string menjadi objek Date.
 * @memberof Util
 * @param {string | number | Date} input - Tanggal dalam format string, timestamp, atau objek Date.
 * @returns {Date} Objek Date yang sesuai.
 */
function parseDate(string) {
    return new Date(string);
}

/**
 * Mengonversi string ke objek Date sesuai format datetime-local.
 * @memberof Util
 * @param {string} input - String dalam format datetime-local (YYYY-MM-DDTHH:MM).
 * @returns {Date} Objek Date yang sesuai.
 */
function parseDatetimeLocal(string) {
    return new Date(string);
}

/**
 * Mengonversi string bulan menjadi objek Date.
 * @memberof Util
 * @param {string} input - String dalam format YYYY-MM.
 * @returns {Date} Objek Date dengan tanggal pertama bulan tersebut.
 */
function parseMonth(string) {
    return new Date(string + "-01");
}

/**
 * Mengonversi string waktu menjadi objek Date dengan tanggal hari ini.
 * @memberof Util
 * @param {string} input - String dalam format HH:MM.
 * @returns {Date} Objek Date dengan waktu yang ditentukan.
 */
function parseTime(string) {
    const [hours, minutes] = string.split(":");
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * Mengonversi string minggu ke objek Date.
 * @memberof Util
 * @param {string} input - String dalam format YYYY-W##.
 * @returns {Date} Objek Date untuk awal minggu yang dimaksud.
 */
function parseWeek(string) {
    const [year, week] = string.split("-W");
    const d = new Date(year, 0, 1);
    const days = (week - 1) * 7;
    d.setDate(d.getDate() + days);
    return d;
}

/**
 * Mengonversi objek Date menjadi string dalam format YYYY-MM-DD.
 * @memberof Util
 * @param {Date} date - Objek Date yang akan dikonversi.
 * @returns {string} String dalam format YYYY-MM-DD.
 */
function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}

/**
 * Mengonversi objek Date menjadi string dalam format datetime-local.
 * @memberof Util
 * @param {Date} date - Objek Date yang akan dikonversi.
 * @returns {string} String dalam format YYYY-MM-DDTHH:MM.
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
 * Mengonversi objek Date menjadi string dalam format YYYY-MM.
 * @memberof Util
 * @param {Date} date - Objek Date yang akan dikonversi.
 * @returns {string} String dalam format YYYY-MM.
 */
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7);
}

/**
 * Mengonversi objek Date menjadi string dalam format HH:MM.
 * @memberof Util
 * @param {Date} date - Objek Date yang akan dikonversi.
 * @returns {string} String dalam format HH:MM.
 */
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}

/**
 * Mengonversi objek Date menjadi string dalam format YYYY-W##.
 * @memberof Util
 * @param {Date} date - Objek Date yang akan dikonversi.
 * @returns {string} String dalam format YYYY-W##.
 */
function stringifyWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}
export { parseDate, parseDatetimeLocal, parseMonth, parseTime, parseWeek, stringifyDate, stringifyDatetimeLocal, stringifyMonth, stringifyTime, stringifyWeek };

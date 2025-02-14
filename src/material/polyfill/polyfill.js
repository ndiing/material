/**
 * @namespace Date
 */

/**
 * Mengatur tanggal berdasarkan nomor minggu dalam setahun.
 *
 * @memberof Date
 * @param {number} week - Nomor minggu yang ingin diatur (1-53).
 * @returns {Date} - Objek `Date` yang diperbarui ke minggu yang diinginkan.
 */
Date.prototype.setWeek = function (week) {
    const year = this.getFullYear();
    const firstThursday = new Date(year, 0, 4);
    const firstThursdayTime = firstThursday.getTime();
    const weekStartTime = firstThursdayTime + (week - 1) * 7 * 24 * 60 * 60 * 1000;
    this.setTime(weekStartTime);
    return this;
};

/**
 * Mendapatkan nomor minggu dalam setahun berdasarkan standar ISO 8601.
 *
 * @memberof Date
 * @returns {number} - Nomor minggu dalam setahun (1-53).
 */
Date.prototype.getWeek = function () {
    const target = new Date(this.valueOf());
    const dayNr = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return weekNumber;
};

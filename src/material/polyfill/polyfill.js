/**
 * Sets the date to the specified week of the year.
 * @param {number} week - The week number to set.
 * @returns {Date} The updated date object.
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
 * Gets the current week number of the year.
 * @returns {number} The week number.
 */
Date.prototype.getWeek = function () {
    const target = new Date(this.valueOf());
    const dayNr = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return weekNumber;
};

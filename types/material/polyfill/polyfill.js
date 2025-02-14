/**
 * @param {Number} [week]
 */
Date.prototype.setWeek = function (week) {
    var year = this.getFullYear();
    var firstThursday = new Date(year, 0, 4);
    var firstThursdayTime = firstThursday.getTime();
    var weekStartTime = firstThursdayTime + (week - 1) * 7 * 24 * 60 * 60 * 1000;
    this.setTime(weekStartTime);
    return this;
};
/**
 */
Date.prototype.getWeek = function () {
    var target = new Date(this.valueOf());
    var dayNr = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = new Date(target.getFullYear(), 0, 4);
    var weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return weekNumber;
};

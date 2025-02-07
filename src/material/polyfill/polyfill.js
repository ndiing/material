Date.prototype.setWeek = function (year, week) {
    const date = new Date(year, 0, 1);
    const days = (week - 1) * 7;
    date.setDate(date.getDate() + days);
    this.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return this;
};
Date.prototype.getWeek = function () {
    const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
    const days = Math.floor((this - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return weekNumber;
};

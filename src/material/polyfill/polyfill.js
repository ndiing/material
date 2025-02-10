Date.prototype.setWeek = function (week) {
    const year = this.getFullYear(); // Menggunakan tahun saat ini
    const firstThursday = new Date(year, 0, 4); // Kamis pertama tahun ini
    const firstThursdayTime = firstThursday.getTime();
    const weekStartTime = firstThursdayTime + (week - 1) * 7 * 24 * 60 * 60 * 1000;
    this.setTime(weekStartTime);
    return this;
};
Date.prototype.getWeek = function () {
    const target = new Date(this.valueOf());
    const dayNr = (this.getDay() + 6) % 7; // Ubah agar Senin sebagai hari pertama
    target.setDate(target.getDate() - dayNr + 3); // Geser ke Kamis di minggu yang sama
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return weekNumber;
};
// // Contoh penggunaan
// const date = new Date();
// date.setWeek(42);
// console.log(date.getWeek()); // Harus mencetak 42

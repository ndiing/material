## src

### index
src\index.js

```js
import "./material/material.scss";
import "./material/material.js";

import "./demo/demo.scss";
import "./demo/demo.js";

```
## src\material\base

### datetime-picker
src\material\base\datetime-picker.js

```js
import { html } from "lit";
import { MdElement } from "./element.js";
import { classMap } from "lit/directives/class-map.js";
if (typeof Date.prototype.setWeek !== "function") {
    Date.prototype.setWeek = function (week) {
        const year = this.getFullYear();
        const firstThursday = new Date(year, 0, 4);
        const firstThursdayTime = firstThursday.getTime();
        const weekStartTime = firstThursdayTime + (week - 1) * 7 * 24 * 60 * 60 * 1000;
        this.setTime(weekStartTime);
        return this;
    };
}
if (typeof Date.prototype.getWeek !== "function") {
    Date.prototype.getWeek = function () {
        const target = new Date(this.valueOf());
        const dayNr = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        const firstThursday = new Date(target.getFullYear(), 0, 4);
        const weekNumber = Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000)) + 1;
        return weekNumber;
    };
}

class MdDatetimePickerElement extends MdElement {
    static properties = {
        locale: { type: String },
        type: { type: String },
    };
    get years() {
        const arr = [];
        const selectedYear = Math.floor(this.selectedDate.getFullYear() / 10) * 10;
        for (let i = 0; i < 10; i++) {
            const date = new Date(selectedYear + i, 0);
            arr.push({
                year: date.getFullYear(),
                label: this.yearFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear(),
                selected: date.getFullYear() === this.selectedDate.getFullYear(),
            });
        }
        return arr;
    }
    get months() {
        const arr = [];
        const selectedYear = this.selectedDate.getFullYear();
        for (let i = 0; i < 12; i++) {
            const date = new Date(selectedYear, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth(),
            });
        }
        return arr;
    }
    get weekdays() {
        return this.type === "week" ? this.weekColumns : this.dayColumns;
    }
    get dayColumns() {
        const arr = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            arr.push({
                label: this.weekdayFormat(date),
                startOfWeek: date.getDay() === 0,
            });
        }
        return arr;
    }
    get weekColumns() {
        const arr = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i + 1);
            arr.push({
                label: this.weekdayFormat(date),
                startOfWeek: date.getDay() === 0,
            });
        }
        return arr;
    }
    get calendar() {
        return this.type === "week" ? this.weekCalendar : this.dayCalendar;
    }
    get dayCalendar() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth).getDay();
        const arr = [];
        for (let i = 0; i < 6; i++) {
            const obj = {
                children: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth);
                obj.children.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate(),
                    selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }
    get weekCalendar() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const firstDayOfMonth = new Date(selectedYear, selectedMonth).getDay();
        const arr = [];
        for (let i = 0; i < 6; i++) {
            const k = i * 7 + 1;
            const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth + 1);
            const obj = {
                year: date.getFullYear(),
                month: date.getMonth(),
                week: date.getWeek(),
                label: this.dateFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getWeek() === this.currentDate.getWeek(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getWeek() === this.selectedDate.getWeek(),
                outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                children: [],
            };
            for (let j = 0; j < 7; j++) {
                const k = i * 7 + j + 1;
                const date = new Date(selectedYear, selectedMonth, k - firstDayOfMonth + 1);
                obj.children.push({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    label: this.dateFormat(date),
                    active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate(),
                    selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate(),
                    outsideMonth: !(date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth()),
                    startOfWeek: date.getDay() === 0,
                });
            }
            arr.push(obj);
        }
        return arr;
    }
    get hours() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const selectedDate = this.selectedDate.getDate();
        const arr = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(selectedYear, selectedMonth, selectedDate, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate() && date.getHours() === this.currentDate.getHours(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate() && date.getHours() === this.selectedDate.getHours(),
            });
        }
        return arr;
    }
    get minutes() {
        const selectedYear = this.selectedDate.getFullYear();
        const selectedMonth = this.selectedDate.getMonth();
        const selectedDate = this.selectedDate.getDate();
        const selectedHour = this.selectedDate.getHours();
        const arr = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(selectedYear, selectedMonth, selectedDate, selectedHour, i);
            arr.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                label: this.minuteFormat(date),
                active: date.getFullYear() === this.currentDate.getFullYear() && date.getMonth() === this.currentDate.getMonth() && date.getDate() === this.currentDate.getDate() && date.getHours() === this.currentDate.getHours() && date.getMinutes() === this.currentDate.getMinutes(),
                selected: date.getFullYear() === this.selectedDate.getFullYear() && date.getMonth() === this.selectedDate.getMonth() && date.getDate() === this.selectedDate.getDate() && date.getHours() === this.selectedDate.getHours() && date.getMinutes() === this.selectedDate.getMinutes(),
            });
        }
        return arr;
    }

    constructor() {
        super();
        this.locale = undefined;
        this._setFormatter();
        this.type = "day";
        this.currentDate = new Date();
        this.selectedDate = new Date();
    }

    _setFormatter() {
        const locale = this.locale || undefined;
        this.yearFormat = new Intl.DateTimeFormat(locale, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(locale, { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format;
        this.dateFormat = new Intl.DateTimeFormat(locale, { day: "numeric" }).format;
        this.hourFormat = new Intl.DateTimeFormat(locale, { hour: "numeric", hour12: false }).format;
        this.minuteFormat = new Intl.DateTimeFormat(locale, { minute: "numeric", hour12: false }).format;
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("locale")) {
            this._setFormatter();
        }
    }
}

export { MdDatetimePickerElement };

```
### element
src\material\base\element.js

```js
import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

class MdElement extends LitElement {
    constructor() {
        super();

        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add(`${this.localName}--initialize`);

        this.updateComplete.then(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.classList.remove(`${this.localName}--initialize`);
                });
            });
        });
    }

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

export { MdElement };

```
### fonts
src\material\base\fonts.scss

```scss
/* fallback */

@font-face {
    font-family: "Material Symbols Outlined";
    font-style: normal;
    font-weight: 100 700;
    src: url("fonts/s/materialsymbolsoutlined/v364/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2") format("woff2");
}

.material-symbols-outlined {
    font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.0.woff2") format("woff2");
    unicode-range: U+1f1e6-1f1ff;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.1.woff2") format("woff2");
    unicode-range: U+200d, U+2620, U+26a7, U+fe0f, U+1f308, U+1f38c, U+1f3c1, U+1f3f3-1f3f4, U+1f6a9, U+e0062-e0063, U+e0065, U+e0067, U+e006c, U+e006e, U+e0073-e0074, U+e0077, U+e007f;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.2.woff2") format("woff2");
    unicode-range: U+23, U+2a, U+30-39, U+a9, U+ae, U+200d, U+203c, U+2049, U+20e3, U+2122, U+2139, U+2194-2199, U+21a9-21aa, U+23cf, U+23e9-23ef, U+23f8-23fa, U+24c2, U+25aa-25ab, U+25b6, U+25c0, U+25fb-25fe, U+2611, U+2622-2623, U+2626, U+262a, U+262e-262f, U+2638, U+2640, U+2642, U+2648-2653, U+2660, U+2663, U+2665-2666, U+2668, U+267b, U+267e-267f, U+2695, U+269b-269c, U+26a0, U+26a7, U+26aa-26ab, U+26ce, U+26d4, U+2705, U+2714, U+2716, U+271d, U+2721, U+2733-2734, U+2747, U+274c, U+274e, U+2753-2755, U+2757, U+2764, U+2795-2797, U+27a1, U+27b0, U+27bf, U+2934-2935, U+2b05-2b07, U+2b1b-2b1c, U+2b55, U+3030, U+303d, U+3297, U+3299, U+fe0f, U+1f170-1f171, U+1f17e-1f17f, U+1f18e, U+1f191-1f19a, U+1f201-1f202, U+1f21a, U+1f22f, U+1f232-1f23a, U+1f250-1f251, U+1f310, U+1f3a6, U+1f3b5-1f3b6, U+1f3bc, U+1f3e7, U+1f441, U+1f499-1f49c, U+1f49f-1f4a0, U+1f4ac-1f4ad, U+1f4b1-1f4b2, U+1f4b9, U+1f4db, U+1f4f2-1f4f6, U+1f500-1f507, U+1f515, U+1f518-1f524, U+1f52f-1f53d, U+1f549, U+1f54e, U+1f5a4, U+1f5e8, U+1f5ef, U+1f6ab, U+1f6ad-1f6b1, U+1f6b3, U+1f6b7-1f6bc, U+1f6be, U+1f6c2-1f6c5, U+1f6d0-1f6d1, U+1f6d7, U+1f6dc, U+1f7e0-1f7eb, U+1f7f0, U+1f90d-1f90e, U+1f9d1-1f9d2, U+1f9e1, U+1fa75-1fa77, U+1faaf;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.3.woff2") format("woff2");
    unicode-range: U+200d, U+231a-231b, U+2328, U+23f0-23f3, U+2602, U+260e, U+2692, U+2694, U+2696-2697, U+2699, U+26b0-26b1, U+26cf, U+26d1, U+26d3, U+2702, U+2709, U+270f, U+2712, U+fe0f, U+1f302, U+1f321, U+1f392-1f393, U+1f3a9, U+1f3bd, U+1f3ee, U+1f3f7, U+1f3fa, U+1f451-1f462, U+1f484, U+1f489-1f48a, U+1f48c-1f48e, U+1f4a1, U+1f4a3, U+1f4a5, U+1f4b0, U+1f4b3-1f4b8, U+1f4bb-1f4da, U+1f4dc-1f4f1, U+1f4ff, U+1f508-1f514, U+1f516-1f517, U+1f526-1f529, U+1f52c-1f52e, U+1f550-1f567, U+1f56f-1f570, U+1f576, U+1f587, U+1f58a-1f58d, U+1f5a5, U+1f5a8, U+1f5b1-1f5b2, U+1f5c2-1f5c4, U+1f5d1-1f5d3, U+1f5dc-1f5de, U+1f5e1, U+1f5f3, U+1f6aa, U+1f6ac, U+1f6bd, U+1f6bf, U+1f6c1, U+1f6cb, U+1f6cd-1f6cf, U+1f6d2, U+1f6e0-1f6e1, U+1f6f0, U+1f97b-1f97f, U+1f9af, U+1f9ba, U+1f9e2-1f9e6, U+1f9ea-1f9ec, U+1f9ee-1f9f4, U+1f9f7-1f9ff, U+1fa71-1fa74, U+1fa79-1fa7b, U+1fa86, U+1fa8e-1fa8f, U+1fa91-1fa93, U+1fa96, U+1fa99-1faa0, U+1faa2-1faa7, U+1faaa-1faae;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.4.woff2") format("woff2");
    unicode-range: U+265f, U+26bd-26be, U+26f3, U+26f8, U+fe0f, U+1f004, U+1f0cf, U+1f380-1f384, U+1f386-1f38b, U+1f38d-1f391, U+1f396-1f397, U+1f399-1f39b, U+1f39e-1f39f, U+1f3a3-1f3a5, U+1f3a7-1f3a9, U+1f3ab-1f3b4, U+1f3b7-1f3bb, U+1f3bd-1f3c0, U+1f3c5-1f3c6, U+1f3c8-1f3c9, U+1f3cf-1f3d3, U+1f3f8-1f3f9, U+1f47e, U+1f4e2, U+1f4f7-1f4fd, U+1f52b, U+1f579, U+1f58c-1f58d, U+1f5bc, U+1f6f7, U+1f6f9, U+1f6fc, U+1f93f, U+1f941, U+1f945, U+1f947-1f94f, U+1f9e7-1f9e9, U+1f9f5-1f9f6, U+1fa70-1fa71, U+1fa80-1fa81, U+1fa83-1fa85, U+1fa87-1fa8a, U+1fa94-1fa95, U+1fa97-1fa98, U+1faa1, U+1faa9, U+1fadf;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.5.woff2") format("woff2");
    unicode-range: U+2693, U+26e9-26ea, U+26f1-26f2, U+26f4-26f5, U+26fa, U+26fd, U+2708, U+fe0f, U+1f301, U+1f303, U+1f306-1f307, U+1f309, U+1f310, U+1f3a0-1f3a2, U+1f3aa, U+1f3cd-1f3ce, U+1f3d5, U+1f3d7-1f3db, U+1f3df-1f3e6, U+1f3e8-1f3ed, U+1f3ef-1f3f0, U+1f488, U+1f492, U+1f4ba, U+1f54b-1f54d, U+1f5fa-1f5ff, U+1f680-1f6a2, U+1f6a4-1f6a8, U+1f6b2, U+1f6d1, U+1f6d5-1f6d6, U+1f6dd-1f6df, U+1f6e2-1f6e5, U+1f6e9, U+1f6eb-1f6ec, U+1f6f3-1f6f6, U+1f6f8, U+1f6fa-1f6fb, U+1f9bc-1f9bd, U+1f9ed, U+1f9f3, U+1fa7c;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.6.woff2") format("woff2");
    unicode-range: U+200d, U+2615, U+fe0f, U+1f32d-1f330, U+1f336, U+1f33d, U+1f344-1f37f, U+1f382, U+1f52a, U+1f7e9, U+1f7eb, U+1f942-1f944, U+1f950-1f96f, U+1f99e, U+1f9aa, U+1f9c0-1f9cb, U+1fad0-1fadc;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.7.woff2") format("woff2");
    unicode-range: U+200d, U+2600-2601, U+2603-2604, U+2614, U+2618, U+26a1, U+26c4-26c5, U+26c8, U+26f0, U+2728, U+2744, U+2b1b, U+2b50, U+fe0f, U+1f300, U+1f304-1f305, U+1f308, U+1f30a-1f30f, U+1f311-1f321, U+1f324-1f32c, U+1f331-1f335, U+1f337-1f33c, U+1f33e-1f344, U+1f3d4, U+1f3d6, U+1f3dc-1f3de, U+1f3f5, U+1f400-1f43f, U+1f490, U+1f4a7, U+1f4ae, U+1f525, U+1f54a, U+1f573, U+1f577-1f578, U+1f648-1f64a, U+1f6d8, U+1f940, U+1f980-1f9ae, U+1f9ba, U+1fa90, U+1faa8, U+1fab0-1fabf, U+1facd-1facf, U+1fae7;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.8.woff2") format("woff2");
    unicode-range: U+200d, U+2640, U+2642, U+2695-2696, U+26f7, U+26f9, U+2708, U+2764, U+27a1, U+fe0f, U+1f33e, U+1f373, U+1f37c, U+1f384-1f385, U+1f393, U+1f3a4, U+1f3a8, U+1f3c2-1f3c4, U+1f3c7, U+1f3ca-1f3cc, U+1f3eb, U+1f3ed, U+1f3fb-1f3ff, U+1f430, U+1f466-1f469, U+1f46b-1f478, U+1f47c, U+1f481-1f483, U+1f486-1f487, U+1f48b, U+1f48f, U+1f491, U+1f4bb-1f4bc, U+1f527, U+1f52c, U+1f574-1f575, U+1f57a, U+1f645-1f647, U+1f64b, U+1f64d-1f64e, U+1f680, U+1f692, U+1f6a3, U+1f6b4-1f6b6, U+1f6c0, U+1f6cc, U+1f91d, U+1f926, U+1f930-1f931, U+1f934-1f93a, U+1f93c-1f93e, U+1f977, U+1f9af-1f9b3, U+1f9b8-1f9b9, U+1f9bc-1f9bd, U+1f9cc-1f9cf, U+1f9d1-1f9df, U+1fa70, U+1fa82, U+1fac3-1fac5, U+1fac8, U+1faef;
}

@font-face {
    font-family: "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("fonts/s/notocoloremoji/v39/Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabsE4tq3luCC7p-aXxcn.9.woff2") format("woff2");
    unicode-range: U+200d, U+2194-2195, U+2603, U+261d, U+2620, U+2639-263a, U+2665, U+26a1, U+26c4, U+270a-270d, U+2728, U+2763-2764, U+2b50, U+fe0f, U+1f31a-1f31f, U+1f32b, U+1f389-1f38a, U+1f3fb-1f3ff, U+1f440-1f450, U+1f463-1f465, U+1f479-1f47b, U+1f47d-1f480, U+1f485, U+1f48b-1f48c, U+1f493-1f49f, U+1f4a2, U+1f4a4-1f4a6, U+1f4a8-1f4ab, U+1f4af, U+1f525, U+1f573, U+1f590, U+1f595-1f596, U+1f5a4, U+1f5e3, U+1f600-1f644, U+1f648-1f64a, U+1f64c, U+1f64f, U+1f90c-1f925, U+1f927-1f92f, U+1f932-1f933, U+1f970-1f976, U+1f978-1f97a, U+1f9a0, U+1f9b4-1f9b7, U+1f9bb, U+1f9be-1f9bf, U+1f9d0, U+1f9e0-1f9e1, U+1fa75-1fa79, U+1fac0-1fac2, U+1fac6, U+1fae0-1fae6, U+1fae8-1faea, U+1faef-1faf8;
}
/* cyrillic-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevttHOmDyw.woff2") format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtvXOmDyw.woff2") format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* devanagari */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtuHOmDyw.woff2") format("woff2");
    unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* greek-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevttXOmDyw.woff2") format("woff2");
    unicode-range: U+1F00-1FFF;
}
/* greek */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtunOmDyw.woff2") format("woff2");
    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevttnOmDyw.woff2") format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtt3OmDyw.woff2") format("woff2");
    unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */

@font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0ZIpQlx3QUlC5A4PNr4C5OaxRsfNNlKbCePevtuXOm.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5aPdu2ui.woff2") format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5ardu2ui.woff2") format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* devanagari */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a_du2ui.woff2") format("woff2");
    unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* greek-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5aLdu2ui.woff2") format("woff2");
    unicode-range: U+1F00-1FFF;
}
/* greek */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a3du2ui.woff2") format("woff2");
    unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5aHdu2ui.woff2") format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5aDdu2ui.woff2") format("woff2");
    unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */

@font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 100 900;
    font-stretch: 100%;
    font-display: swap;
    src: url("fonts/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a7duw.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    --google-font-color-notocoloremoji: colrv1;
}

```
### list
src\material\base\list.js

```js
import { html, nothing } from "lit";
import { MdElement } from "./element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { classMap } from "lit/directives/class-map.js";

class MdListElement extends MdElement {
    static properties = {
        items: { type: Array },
        _list: { type: Array, state: true },
        _tree: { type: Array, state: true },
        _stack: { type: Array, state: true },
        type: { type: String },
        valueField: { type: String },
        parentField: { type: String },
        labelField: { type: String },
    };
    get current() {
        return this._stack[this._stack.length - 1];
    }

    constructor() {
        super();
        this.items = [];
        this._list = [];
        this._tree = [];
        this._stack = [];
        this.type = "list";
        this.valueField = "id";
        this.parentField = "parent_id";
        this.labelField = "label";
        this.selectedValues = new Set();
        this.expandedValues = new Set();
    }

    _setStack() {
        const [selectedId] = this.selectedValues;
        if (!selectedId) {
            this._stack = [{ items: this._tree, parent: null }];
            return;
        }
        const path = this._getSelectedParents(selectedId);
        const stack = [];
        let current = this._tree;
        stack.push({
            items: current,
            parent: null,
        });
        for (const parentId of path) {
            const node = current.find((n) => n[this.valueField] === parentId);
            if (!node) break;
            current = node.children || [];
            stack.push({
                items: current,
                parent: node,
            });
        }
        this._stack = stack;
    }

    _getItems() {
        const items = [];
        const walk = (node, level = 0) => {
            const expanded = this.expandedValues.has(node[this.valueField]);
            const { children, ...item } = node;
            items.push({ ...item, hasChildren: !!children?.length, expanded, level });
            if (!expanded) {
                return;
            }
            if (children?.length) {
                children.forEach((node) => walk(node, level + 1));
            }
        };
        this._tree.forEach((node) => walk(node, 0));
        return items;
    }

    _setItems() {
        this._list = this._getItems();
    }

    _getSelectedParents(id) {
        const path = [];
        let current = id;
        while (this._parents.has(current)) {
            const parent = this._parents.get(current);
            path.push(parent);
            current = parent;
        }
        return path.reverse();
    }

    _getAllSelectedParents() {
        const parents = new Set();
        for (const id of this.selectedValues) {
            const path = this._getSelectedParents(id);
            path.forEach((p) => parents.add(p));
        }
        return parents;
    }

    _setExpanded() {
        const parents = this._getAllSelectedParents();
        parents.forEach((id) => this.expandedValues.add(id));
    }

    _getParents() {
        const parents = new Map();
        const walk = (node, parent) => {
            if (parent) {
                parents.set(node[this.valueField], parent[this.valueField]);
            }
            if (node.children?.length) {
                node.children.forEach((child) => walk(child, node));
            }
        };
        this._tree.forEach((node) => walk(node));
        return parents;
    }

    _setParents() {
        this._parents = this._getParents();
    }

    _getSelected() {
        const selected = new Set();
        const nodes = [...this._tree];
        while (nodes.length) {
            const node = nodes.pop();
            if (node.selected) {
                selected.add(node[this.valueField]);
            }
            if (node.children?.length) {
                nodes.push(...node.children);
            }
        }
        return selected;
    }

    _setSelected() {
        const selected = this._getSelected();
        selected.forEach((id) => this.selectedValues.add(id));
    }

    _buildTree(items) {
        const map = new Map();
        const tree = [];
        items.forEach((item) => {
            map.set(item[this.valueField], { ...item, children: [] });
        });
        items.forEach((item) => {
            const node = map.get(item[this.valueField]);
            if (item[this.parentField]) {
                const parent = map.get(item[this.parentField]);
                if (parent) {
                    parent.children.push(node);
                } else {
                    tree.push(node);
                }
            } else {
                tree.push(node);
            }
        });
        return tree;
    }

    _setTree() {
        this._tree = this._buildTree(this.items);
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("items")) {
            this._setTree();
            this._setSelected();
            this._setParents();
            if (this.type === "list" || this.type === "tree") {
                this._setExpanded();
                this._setItems();
            } else if (this.type === "stack") {
                this._setStack();
            }
        }
    }

    push(item) {
        this._stack = [
            ...this._stack,
            {
                items: item.children,
                parent: item,
            },
        ];
    }

    pop() {
        if (this._stack.length > 1) {
            this._stack = this._stack.slice(0, -1);
        }
    }
}

export { MdListElement };

```
### reset
src\material\base\reset.scss

```scss
@use "../shared/mixins.scss";

:root {
    interpolate-size: allow-keywords;
}

* {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
    &,
    &::before,
    &::after {
        box-sizing: border-box;
    }

    &:focus-visible {
        outline: 2px solid var(--md-sys-color-outline);
        outline-offset: -2px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
}
html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    overflow: auto;
    background-color: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
    @include mixins.typescale-body-large();
}

```
### tokens
src\material\base\tokens.scss

```scss
@media (prefers-color-scheme: light) {
    :root {
        --md-sys-color-background: #fef7ff;
        --md-sys-color-error: #b3261e;
        --md-sys-color-error-container: #f9dedc;
        --md-sys-color-inverse-on-surface: #f5eff7;
        --md-sys-color-inverse-primary: #d0bcff;
        --md-sys-color-inverse-surface: #322f35;
        --md-sys-color-on-background: #1d1b20;
        --md-sys-color-on-error: #ffffff;
        --md-sys-color-on-error-container: #8c1d18;
        --md-sys-color-on-primary: #ffffff;
        --md-sys-color-on-primary-container: #4f378b;
        --md-sys-color-on-primary-fixed: #21005d;
        --md-sys-color-on-primary-fixed-variant: #4f378b;
        --md-sys-color-on-secondary: #ffffff;
        --md-sys-color-on-secondary-container: #4a4458;
        --md-sys-color-on-secondary-fixed: #1d192b;
        --md-sys-color-on-secondary-fixed-variant: #4a4458;
        --md-sys-color-on-surface: #1d1b20;
        --md-sys-color-on-surface-variant: #49454f;
        --md-sys-color-on-tertiary: #ffffff;
        --md-sys-color-on-tertiary-container: #633b48;
        --md-sys-color-on-tertiary-fixed: #31111d;
        --md-sys-color-on-tertiary-fixed-variant: #633b48;
        --md-sys-color-outline: #79747e;
        --md-sys-color-outline-variant: #cac4d0;
        --md-sys-color-primary: #6750a4;
        --md-sys-color-primary-container: #eaddff;
        --md-sys-color-primary-fixed: #eaddff;
        --md-sys-color-primary-fixed-dim: #d0bcff;
        --md-sys-color-scrim: #000000;
        --md-sys-color-secondary: #625b71;
        --md-sys-color-secondary-container: #e8def8;
        --md-sys-color-secondary-fixed: #e8def8;
        --md-sys-color-secondary-fixed-dim: #ccc2dc;
        --md-sys-color-shadow: #000000;
        --md-sys-color-surface: #fef7ff;
        --md-sys-color-surface-bright: #fef7ff;
        --md-sys-color-surface-container: #f3edf7;
        --md-sys-color-surface-container-high: #ece6f0;
        --md-sys-color-surface-container-highest: #e6e0e9;
        --md-sys-color-surface-container-low: #f7f2fa;
        --md-sys-color-surface-container-lowest: #ffffff;
        --md-sys-color-surface-dim: #ded8e1;
        --md-sys-color-surface-tint: #6750a4;
        --md-sys-color-surface-tint-color: #6750a4;
        --md-sys-color-surface-variant: #e7e0ec;
        --md-sys-color-tertiary: #7d5260;
        --md-sys-color-tertiary-container: #ffd8e4;
        --md-sys-color-tertiary-fixed: #ffd8e4;
        --md-sys-color-tertiary-fixed-dim: #efb8c8;
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        --md-sys-color-primary: #d0bcff;
        --md-sys-color-on-primary: #381e72;
        --md-sys-color-primary-container: #4f378b;
        --md-sys-color-on-primary-container: #eaddff;
        --md-sys-color-secondary: #ccc2dc;
        --md-sys-color-on-secondary: #332d41;
        --md-sys-color-secondary-container: #4a4458;
        --md-sys-color-on-secondary-container: #e8def8;
        --md-sys-color-tertiary: #efb8c8;
        --md-sys-color-on-tertiary: #492532;
        --md-sys-color-tertiary-container: #633b48;
        --md-sys-color-on-tertiary-container: #ffd8e4;
        --md-sys-color-error: #f2b8b5;
        --md-sys-color-on-error: #601410;
        --md-sys-color-error-container: #8c1d18;
        --md-sys-color-on-error-container: #f9dedc;
        --md-sys-color-surface: #141218;
        --md-sys-color-on-surface: #e6e0e9;
        --md-sys-color-surface-variant: #49454f;
        --md-sys-color-on-surface-variant: #cac4d0;
        --md-sys-color-surface-container-highest: #36343b;
        --md-sys-color-surface-container-high: #2b2930;
        --md-sys-color-surface-container: #211f26;
        --md-sys-color-surface-container-low: #1d1b20;
        --md-sys-color-surface-container-lowest: #0f0d13;
        --md-sys-color-inverse-surface: #e6e0e9;
        --md-sys-color-inverse-on-surface: #322f35;
        --md-sys-color-surface-tint: #d0bcff;
        --md-sys-color-surface-tint-color: #d0bcff;
        --md-sys-color-outline: #938f99;
        --md-sys-color-outline-variant: #49454f;
        --md-sys-color-primary-fixed: #eaddff;
        --md-sys-color-on-primary-fixed: #21005d;
        --md-sys-color-primary-fixed-dim: #d0bcff;
        --md-sys-color-on-primary-fixed-variant: #4f378b;
        --md-sys-color-inverse-primary: #6750a4;
        --md-sys-color-secondary-fixed: #e8def8;
        --md-sys-color-on-secondary-fixed: #1d192b;
        --md-sys-color-secondary-fixed-dim: #ccc2dc;
        --md-sys-color-on-secondary-fixed-variant: #4a4458;
        --md-sys-color-tertiary-fixed: #ffd8e4;
        --md-sys-color-on-tertiary-fixed: #31111d;
        --md-sys-color-tertiary-fixed-dim: #efb8c8;
        --md-sys-color-on-tertiary-fixed-variant: #633b48;
        --md-sys-color-background: #141218;
        --md-sys-color-on-background: #e6e0e9;
        --md-sys-color-surface-bright: #3b383e;
        --md-sys-color-surface-dim: #141218;
        --md-sys-color-scrim: #000000;
        --md-sys-color-shadow: #000000;
    }
}

:root {
    --md-sys-color-on-surface4: color-mix(in srgb, var(--md-sys-color-on-surface) 4%, var(--md-sys-color-surface));
    --md-sys-color-on-surface10: color-mix(in srgb, var(--md-sys-color-on-surface) 10%, var(--md-sys-color-surface));
    --md-sys-color-on-surface12: color-mix(in srgb, var(--md-sys-color-on-surface) 12%, var(--md-sys-color-surface));
    --md-sys-color-on-surface38: color-mix(in srgb, var(--md-sys-color-on-surface) 38%, var(--md-sys-color-surface));
}

:root {
    --md-sys-elevation-level5: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
    --md-sys-elevation-level4: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    --md-sys-elevation-level3: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    --md-sys-elevation-level2: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    --md-sys-elevation-level1: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    --md-sys-elevation-level0: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px;
}

@media (prefers-color-scheme: light) {
    :root {
        --md-sys-elevation-surface-tint-color: #6750a4;
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        --md-sys-elevation-surface-tint-color: #d0bcff;
    }
}

:root {
    --md-sys-motion-spring-fast-spatial-damping: 0.9;
    --md-sys-motion-spring-fast-spatial-stiffness: 1400;
    --md-sys-motion-spring-fast-effects-damping: 1;
    --md-sys-motion-spring-fast-effects-stiffness: 3800;
    --md-sys-motion-spring-default-spatial-damping: 0.9;
    --md-sys-motion-spring-default-spatial-stiffness: 700;
    --md-sys-motion-spring-default-effects-damping: 1;
    --md-sys-motion-spring-default-effects-stiffness: 1600;
    --md-sys-motion-spring-slow-spatial-damping: 0.9;
    --md-sys-motion-spring-slow-spatial-stiffness: 300;
    --md-sys-motion-spring-slow-effects-damping: 1;
    --md-sys-motion-spring-slow-effects-stiffness: 800;
    --md-sys-motion-easing-emphasized: 0.2, 0, 0, 1;
    --md-sys-motion-easing-emphasized-accelerate: 0.3, 0, 0.8, 0.15;
    --md-sys-motion-easing-emphasized-decelerate: 0.05, 0.7, 0.1, 1;
    --md-sys-motion-easing-standard: 0.2, 0, 0, 1;
    --md-sys-motion-easing-standard-accelerate: 0.3, 0, 1, 1;
    --md-sys-motion-easing-standard-decelerate: 0, 0, 0, 1;
    --md-sys-motion-easing-legacy: 0.4, 0, 0.2, 1;
    --md-sys-motion-easing-legacy-accelerate: 0.4, 0, 1, 1;
    --md-sys-motion-easing-legacy-decelerate: 0, 0, 0.2, 1;
    --md-sys-motion-easing-linear: 0, 0, 1, 1;
    --md-sys-motion-duration-short1: 100ms;
    --md-sys-motion-duration-short2: 200ms;
    --md-sys-motion-duration-short3: 300ms;
    --md-sys-motion-duration-short4: 400ms;
    --md-sys-motion-duration-medium1: 500ms;
    --md-sys-motion-duration-medium2: 600ms;
    --md-sys-motion-duration-medium3: 700ms;
    --md-sys-motion-duration-medium4: 800ms;
    --md-sys-motion-duration-long1: 900ms;
    --md-sys-motion-duration-long2: 1000ms;
    --md-sys-motion-duration-long3: 1100ms;
    --md-sys-motion-duration-long4: 1200ms;
    --md-sys-motion-duration-extra-long1: 1400ms;
    --md-sys-motion-duration-extra-long2: 1600ms;
    --md-sys-motion-duration-extra-long3: 1800ms;
    --md-sys-motion-duration-extra-long4: 2000ms;
    --md-sys-motion-path: linear;
}

:root {
    --md-sys-shape-corner-full: 9999px;
    --md-sys-shape-corner-extra-large-top: 28px 28px 0 0;
    --md-sys-shape-corner-extra-large: 28px;
    --md-sys-shape-corner-large-top: 16px 16px 0 0;
    --md-sys-shape-corner-large-end: 0 16px 16px 0;
    --md-sys-shape-corner-large-start: 16px 0 0 16px;
    --md-sys-shape-corner-large: 16px;
    --md-sys-shape-corner-medium: 12px;
    --md-sys-shape-corner-small: 8px;
    --md-sys-shape-corner-extra-small-top: 4px 4px 0 0;
    --md-sys-shape-corner-extra-small: 4px;
    --md-sys-shape-corner-none: 0;
    --md-sys-shape-corner-large-increased: 20px;
    --md-sys-shape-corner-extra-large-increased: 32px;
    --md-sys-shape-corner-extra-extra-large: 48px;
    --md-sys-shape-corner-value-none: 0;
    --md-sys-shape-corner-value-extra-small: 4px;
    --md-sys-shape-corner-value-small: 8px;
    --md-sys-shape-corner-value-medium: 12px;
    --md-sys-shape-corner-value-large: 16px;
    --md-sys-shape-corner-value-large-increased: 20px;
    --md-sys-shape-corner-value-extra-large: 28px;
    --md-sys-shape-corner-value-extra-large-increased: 32px;
    --md-sys-shape-corner-value-extra-extra-large: 48px;
}

:root {
    --md-sys-typescale-display-large-font: "Noto Sans";
    --md-sys-typescale-display-large-weight: 400;
    --md-sys-typescale-display-large-size: 57px;
    --md-sys-typescale-display-large-tracking: -0.25px;
    --md-sys-typescale-display-large-line-height: 64px;
    --md-sys-typescale-display-medium-font: "Noto Sans";
    --md-sys-typescale-display-medium-weight: 400;
    --md-sys-typescale-display-medium-size: 45px;
    --md-sys-typescale-display-medium-tracking: 0;
    --md-sys-typescale-display-medium-line-height: 52px;
    --md-sys-typescale-display-small-font: "Noto Sans";
    --md-sys-typescale-display-small-weight: 400;
    --md-sys-typescale-display-small-size: 36px;
    --md-sys-typescale-display-small-tracking: 0;
    --md-sys-typescale-display-small-line-height: 44px;
    --md-sys-typescale-headline-large-font: "Noto Sans";
    --md-sys-typescale-headline-large-weight: 400;
    --md-sys-typescale-headline-large-size: 32px;
    --md-sys-typescale-headline-large-tracking: 0;
    --md-sys-typescale-headline-large-line-height: 40px;
    --md-sys-typescale-headline-medium-font: "Noto Sans";
    --md-sys-typescale-headline-medium-weight: 400;
    --md-sys-typescale-headline-medium-size: 28px;
    --md-sys-typescale-headline-medium-tracking: 0;
    --md-sys-typescale-headline-medium-line-height: 36px;
    --md-sys-typescale-headline-small-font: "Noto Sans";
    --md-sys-typescale-headline-small-weight: 400;
    --md-sys-typescale-headline-small-size: 24px;
    --md-sys-typescale-headline-small-tracking: 0;
    --md-sys-typescale-headline-small-line-height: 32px;
    --md-sys-typescale-title-large-font: "Noto Sans";
    --md-sys-typescale-title-large-weight: 400;
    --md-sys-typescale-title-large-size: 22px;
    --md-sys-typescale-title-large-tracking: 0;
    --md-sys-typescale-title-large-line-height: 28px;
    --md-sys-typescale-title-medium-font: "Noto Sans";
    --md-sys-typescale-title-medium-weight: 500;
    --md-sys-typescale-title-medium-size: 16px;
    --md-sys-typescale-title-medium-tracking: 0.15px;
    --md-sys-typescale-title-medium-line-height: 24px;
    --md-sys-typescale-title-small-font: "Noto Sans";
    --md-sys-typescale-title-small-weight: 500;
    --md-sys-typescale-title-small-size: 14px;
    --md-sys-typescale-title-small-tracking: 0.1px;
    --md-sys-typescale-title-small-line-height: 20px;
    --md-sys-typescale-body-large-font: "Noto Sans";
    --md-sys-typescale-body-large-weight: 400;
    --md-sys-typescale-body-large-size: 16px;
    --md-sys-typescale-body-large-tracking: 0.5px;
    --md-sys-typescale-body-large-line-height: 24px;
    --md-sys-typescale-body-medium-font: "Noto Sans";
    --md-sys-typescale-body-medium-weight: 400;
    --md-sys-typescale-body-medium-size: 14px;
    --md-sys-typescale-body-medium-tracking: 0.25px;
    --md-sys-typescale-body-medium-line-height: 20px;
    --md-sys-typescale-body-small-font: "Noto Sans";
    --md-sys-typescale-body-small-weight: 400;
    --md-sys-typescale-body-small-size: 12px;
    --md-sys-typescale-body-small-tracking: 0.4px;
    --md-sys-typescale-body-small-line-height: 16px;
    --md-sys-typescale-label-large-font: "Noto Sans";
    --md-sys-typescale-label-large-weight: 500;
    --md-sys-typescale-label-large-weight-prominent: 700;
    --md-sys-typescale-label-large-size: 14px;
    --md-sys-typescale-label-large-tracking: 0.1px;
    --md-sys-typescale-label-large-line-height: 20px;
    --md-sys-typescale-label-medium-text-transform: None;
    --md-sys-typescale-label-medium-font: "Noto Sans";
    --md-sys-typescale-label-medium-weight: 500;
    --md-sys-typescale-label-medium-weight-prominent: 700;
    --md-sys-typescale-label-medium-size: 12px;
    --md-sys-typescale-label-medium-tracking: 0.5px;
    --md-sys-typescale-label-medium-line-height: 16px;
    --md-sys-typescale-label-small-font: "Noto Sans";
    --md-sys-typescale-label-small-weight: 500;
    --md-sys-typescale-label-small-size: 11px;
    --md-sys-typescale-label-small-tracking: 0.5px;
    --md-sys-typescale-label-small-line-height: 16px;
}

```
## src\material\components\badge

### badge
src\material\components\badge\badge.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";

class MdBadge extends MdElement {
    static properties = {
        label: { type: String },
        max: { type: Number },
        maxLength: { type: Number },
    };

    constructor() {
        super();
        this.max = 999;
        this.maxLength = 4;
    }

    render() {
        if (!this.label) {
            return nothing;
        }

        const rawLabel = String(this.label).trim();

        const labelAsNumber = Number(rawLabel);
        if (!isNaN(labelAsNumber)) {
            return labelAsNumber > this.max ? `${this.max}+` : labelAsNumber;
        }

        if (rawLabel.length > this.maxLength) {
            return rawLabel.slice(0, this.maxLength);
        }

        return rawLabel;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-badge");
    }
}

customElements.define("md-badge", MdBadge);

export { MdBadge };

```
### badge
src\material\components\badge\badge.scss

```scss
@use "../../shared/mixins.scss";

.md-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: var(--md-sys-shape-corner-full);
    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-label-small();

    &:empty {
        min-width: 6px;
        height: 6px;
        padding: 0;
    }
}

```
## src\material\components\button

### button
src\material\components\button\button.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

class MdButton extends MdElement {
    static properties = {
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        label: { type: String },
        icon: { type: String },
        selected: { type: Boolean },
        disabled: { type: Boolean },
        type: { type: String },
        rippleOptions: { type: Object },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["elevated", "filled", "tonal", "outlined", "text"];

    buttonNative = createRef();

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.type = "button";

        this._handleButtonClick = this._handleButtonClick.bind(this);

        this.rippleController = new RippleController(this, {
            trigger: ".md-button__native",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <button 
                ${ref(this.buttonNative)}
                class="md-button__native"
                type="${ifDefined(this.type)}"
                ?disabled="${ifDefined(this.disabled)}"
            >${this.label}</button>
            ${this.icon?html`<md-icon class="md-button__icon" .icon="${this.icon}"></md-icon>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.on("click", this._handleButtonClick);

        this.classList.add("md-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleButtonClick);

        this.classList.remove("md-button");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-button--${variant}`, this.variant === variant);
            });
        }
        if (changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-button--${size}`, this.size === size);
            });
        }
        if (changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-button--${shape}`, this.shape === shape);
            });
        }
        if (changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-button--${color}`, this.color === color);
            });
        }
        if (changedProperties.has("selected")) {
            this.classList.toggle(`md-button--selected`, !!this.selected);
        }
        if (changedProperties.has("disabled")) {
            this.classList.toggle(`md-button--disabled`, !!this.disabled);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    _handleButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;

            this.emit("onButtonSelection", { event, element: this, selected: this.selected });
        }

        this.emit("onButtonClick", { event, element: this });
    }
}

customElements.define("md-button", MdButton);

export { MdButton };

```
### button
src\material\components\button\button.scss

```scss
@use "../../shared/mixins.scss";

.md-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    will-change: border-radius, background-color, color, border-color;
    transition-property: border-radius, background-color, color, border-color;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
    @include mixins.initialize();

    &:active {
        transition-duration: var(--md-sys-motion-duration-short3);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));

        .md-button__icon {
            transition-duration: var(--md-sys-motion-duration-short3);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }

        .md-button__label {
            transition-duration: var(--md-sys-motion-duration-short3);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
    }
}

.md-button__native {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
    color: transparent;
    border-radius: inherit;
}

.md-button__icon {
    will-change: font-size;
    transition-property: font-size;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-button__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-label-large();
    will-change: font-size;
    transition-property: font-size;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-button--default {
}

.md-button--extra-small {
    height: 32px;
    padding: 0 12px;
    gap: 0 4px;

    &.md-button--round {
        border-radius: 16px;

        &.md-button--selected {
            border-radius: 12px;
        }
    }

    &.md-button--square {
        border-radius: 12px;

        &.md-button--selected {
            border-radius: 16px;
        }
    }

    &:active {
        border-radius: 8px;
    }

    .md-button__icon {
        width: 20px;
        height: 20px;
        font-size: 20px;
    }

    .md-button__label {
        @include mixins.typescale-label-large();
    }
}

.md-button--small {
    height: 40px;
    padding: 0 16px;
    gap: 0 8px;

    &.md-button--round {
        border-radius: 20px;

        &.md-button--selected {
            border-radius: 12px;
        }
    }

    &.md-button--square {
        border-radius: 12px;

        &.md-button--selected {
            border-radius: 20px;
        }
    }

    &:active {
        border-radius: 8px;
    }

    .md-button__icon {
        width: 20px;
        height: 20px;
        font-size: 20px;
    }

    .md-button__label {
        @include mixins.typescale-label-large();
    }
}

.md-button--medium {
    height: 56px;
    padding: 0 24px;
    gap: 0 8px;

    &.md-button--round {
        border-radius: 28px;

        &.md-button--selected {
            border-radius: 16px;
        }
    }

    &.md-button--square {
        border-radius: 16px;

        &.md-button--selected {
            border-radius: 28px;
        }
    }

    &:active {
        border-radius: 12px;
    }

    .md-button__icon {
        width: 24px;
        height: 24px;
        font-size: 24px;
    }

    .md-button__label {
        @include mixins.typescale-title-medium();
    }
}

.md-button--large {
    height: 96px;
    padding: 0 48px;
    gap: 0 12px;

    &.md-button--round {
        border-radius: 48px;

        &.md-button--selected {
            border-radius: 28px;
        }
    }

    &.md-button--square {
        border-radius: 28px;

        &.md-button--selected {
            border-radius: 48px;
        }
    }

    &:active {
        border-radius: 16px;
    }

    .md-button__icon {
        width: 32px;
        height: 32px;
        font-size: 32px;
    }

    .md-button__label {
        @include mixins.typescale-headline-small();
    }
}

.md-button--extra-large {
    height: 136px;
    padding: 0 64px;
    gap: 0 16px;

    &.md-button--round {
        border-radius: 68px;

        &.md-button--selected {
            border-radius: 28px;
        }
    }

    &.md-button--square {
        border-radius: 28px;

        &.md-button--selected {
            border-radius: 68px;
        }
    }

    &:active {
        border-radius: 16px;
    }

    .md-button__icon {
        width: 40px;
        height: 40px;
        font-size: 40px;
    }

    .md-button__label {
        @include mixins.typescale-headline-large();
    }
}

.md-button--elevated {
    background-color: var(--md-sys-color-surface-container-low);
    color: var(--md-sys-color-primary);
    box-shadow: var(--md-sys-elevation-level1);

    &.md-button--toggle {
        background-color: var(--md-sys-color-surface-container-low);
        color: var(--md-sys-color-primary);

        &.md-button--selected {
            background-color: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
        }
    }
    &.md-button--disabled,
    &.md-button--disabled.md-button--selected {
        background-color: var(--md-sys-color-on-surface10);
        color: var(--md-sys-color-on-surface38);
        box-shadow: var(--md-sys-elevation-level0);
    }
}

.md-button--filled {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);

    &.md-button--toggle {
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface-variant);

        &.md-button--selected {
            background-color: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
        }
    }
    &.md-button--disabled,
    &.md-button--disabled.md-button--selected {
        background-color: var(--md-sys-color-on-surface10);
        color: var(--md-sys-color-on-surface38);
    }
}

.md-button--tonal {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);

    &.md-button--toggle {
        background-color: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);

        &.md-button--selected {
            background-color: var(--md-sys-color-secondary);
            color: var(--md-sys-color-on-secondary);
        }
    }
    &.md-button--disabled,
    &.md-button--disabled.md-button--selected {
        background-color: var(--md-sys-color-on-surface10);
        color: var(--md-sys-color-on-surface38);
    }
}

.md-button--outlined {
    border: 1px solid var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-on-surface-variant);

    &.md-button--toggle {
        border: 1px solid var(--md-sys-color-outline-variant);
        color: var(--md-sys-color-on-surface-variant);

        &.md-button--selected {
            background-color: var(--md-sys-color-inverse-surface);
            border: 1px solid var(--md-sys-color-inverse-surface);
            color: var(--md-sys-color-inverse-on-surface);
        }
    }
    &.md-button--disabled,
    &.md-button--disabled.md-button--selected {
        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-on-surface10);
        color: var(--md-sys-color-on-surface38);
    }
}

.md-button--text {
    color: var(--md-sys-color-primary);
    &.md-button--disabled,
    &.md-button--disabled.md-button--selected {
        background-color: var(--md-sys-color-on-surface10);
        color: var(--md-sys-color-on-surface38);
    }
}

.md-button--disabled {
    pointer-events: none;
}

```
## src\material\components\card

### card-body
src\material\components\card\card-body.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__body");
    }
}

customElements.define("md-card-body", MdCardBody);

export { MdCardBody };

```
### card-footer
src\material\components\card\card-footer.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardFooter extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__footer");
    }
}

customElements.define("md-card-footer", MdCardFooter);

export { MdCardFooter };

```
### card-header
src\material\components\card\card-header.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardHeader extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__header");
    }
}

customElements.define("md-card-header", MdCardHeader);

export { MdCardHeader };

```
### card-main
src\material\components\card\card-main.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCardMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__main");
    }
}

customElements.define("md-card-main", MdCardMain);

export { MdCardMain };

```
### card
src\material\components\card\card.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdCard extends MdElement {
    static properties = {
        color: { type: String },
    };

    colors = ["elevated", "filled", "outlined"];

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-card");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-card--${color}`, this.color === color);
            });
        }
    }
}

customElements.define("md-card", MdCard);

export { MdCard };

```
### card
src\material\components\card\card.scss

```scss
@use "../../shared/mixins.scss";

.md-card {
    display: flex;
    flex-direction: column;
    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

    // &:active {
    //     transition-duration: var(--md-sys-motion-duration-short3);
    //     transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    // }
}

.md-card__header {
    display: flex;
    align-items: center;
    padding: 16px;

    + .md-card__body {
        margin-top: -16px;
    }
}

.md-card__body {
    display: flex;
    flex-direction: column;
}

.md-card__main {
    flex: 1;
    padding: 0 16px;
    margin: 16px 0;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    @include mixins.typescale-body-large();

    + .md-card__footer {
        margin-top: -16px;
    }
}

.md-card__footer {
    display: flex;
    align-items: center;
    padding: 16px;
}

.md-card--elevated {
    border-radius: var(--md-sys-shape-corner-medium);
    background-color: var(--md-sys-color-surface-container-low);
    color: var(--md-sys-color-on-surface);
    box-shadow: var(--md-sys-elevation-level1);

    &:hover {
        box-shadow: var(--md-sys-elevation-level3);
    }

    &:active {
        box-shadow: var(--md-sys-elevation-level1);
    }

    &:focus {
        box-shadow: var(--md-sys-elevation-level1);
    }
}

.md-card--filled {
    border-radius: var(--md-sys-shape-corner-medium);
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--md-sys-color-on-surface);

    &:hover {
        box-shadow: var(--md-sys-elevation-level1);
    }

    &:active {
        box-shadow: var(--md-sys-elevation-level0);
    }

    &:focus {
        box-shadow: var(--md-sys-elevation-level0);
    }
}

.md-card--outlined {
    border-radius: var(--md-sys-shape-corner-medium);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    border: 1px solid var(--md-sys-color-outline-variant);

    &:hover {
        box-shadow: var(--md-sys-elevation-level1);
    }

    &:active {
        box-shadow: var(--md-sys-elevation-level0);
    }

    &:focus {
        box-shadow: var(--md-sys-elevation-level0);
    }
}

```
## src\material\components\checkbox

### checkbox
src\material\components\checkbox\checkbox.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";

class MdCheckbox extends MdElement {
    static formAssociated = true;
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean, reflect: true },
        checked: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        required: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
        validateOnInput: { type: Boolean },
        validationMessage: { type: String, state: true },
        tabIndex: { type: Number },
    };

    checkboxNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.validateOnInput = true;

        this.rippleController = new RippleController(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-checkbox__native",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="checkbox"
                ${ref(this.checkboxNative)}
                class="md-checkbox__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @invalid="${this._handleCheckboxNativeInvalid}"
                @input="${this._handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__container">
                <div class="md-checkbox__icon"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-checkbox");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-checkbox--disabled", !!this.disabled);
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultIndeterminate = this.defaultIndeterminate ?? this.indeterminate ?? false;
        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;

        const checkboxNative = this.checkboxNative.value;
        checkboxNative.indeterminate = this.defaultIndeterminate;
        checkboxNative.checked = this.defaultChecked;

        this.validationMessage = "";
        this._updateValidationClass();
    }

    _handleCheckboxNativeInvalid(event) {
        event.preventDefault();
        this.validate();
        this.emit("onCheckboxNativeInvalid", { event, element: this });
    }

    _handleCheckboxNativeInput(event) {
        const checkboxNative = this.checkboxNative.value;
        this.indeterminate = checkboxNative.indeterminate;
        this.checked = checkboxNative.checked;

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("onCheckboxNativeInput", { event, element: this });
    }

    _updateValidationClass() {
        this.classList.toggle("md-checkbox--error", !!this.validationMessage);
    }

    validate() {
        const checkboxNative = this.checkboxNative.value;
        this.validationMessage = checkboxNative.validationMessage;
        this._updateValidationClass();
    }
}

customElements.define("md-checkbox", MdCheckbox);

export { MdCheckbox };

```
### checkbox
src\material\components\checkbox\checkbox.scss

```scss
.md-checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    position: relative;
}

.md-checkbox__native {
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: var(--md-sys-shape-corner-full);
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;

    &:indeterminate {
        + .md-checkbox__container {
            background-color: var(--md-sys-color-primary);
            border-color: var(--md-sys-color-primary);

            .md-checkbox__icon {
                width: 10px;
                border-bottom: 2px solid var(--md-sys-color-on-primary);
            }
        }
    }

    &:checked {
        + .md-checkbox__container {
            background-color: var(--md-sys-color-primary);
            border-color: var(--md-sys-color-primary);

            .md-checkbox__icon {
                width: 10px;
                height: 5px;
                border-bottom: 2px solid var(--md-sys-color-on-primary);
                border-left: 2px solid var(--md-sys-color-on-primary);
                transform: rotate(-45deg);
                margin-top: -2px;
            }
        }
    }
    &:indeterminate,
    &:checked {
        + .md-checkbox__container {
            transition-duration: var(--md-sys-motion-duration-short2);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

            .md-checkbox__icon {
                transition-duration: var(--md-sys-motion-duration-short2);
                transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
            }
        }
    }
}

.md-checkbox__container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    border: 2px solid var(--md-sys-color-on-surface-variant);
    border-radius: 2px;
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-checkbox__icon {
    will-change: border-color;
    transition-property: border-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-checkbox--disabled {
    pointer-events: none;
    opacity: 38%;

    .md-checkbox__container {
        border-color: var(--md-sys-color-on-surface);
    }

    .md-checkbox__native {
        &:indeterminate {
            + .md-checkbox__container {
                background-color: var(--md-sys-color-on-surface);
                border-color: var(--md-sys-color-on-surface);

                .md-checkbox__icon {
                    border-bottom-color: var(--md-sys-color-surface);
                }
            }
        }

        &:checked {
            + .md-checkbox__container {
                background-color: var(--md-sys-color-on-surface);
                border-color: var(--md-sys-color-on-surface);

                .md-checkbox__icon {
                    border-bottom-color: var(--md-sys-color-surface);
                    border-left-color: var(--md-sys-color-surface);
                }
            }
        }
    }
}

.md-checkbox--error {
    .md-checkbox__container {
        border-color: var(--md-sys-color-error);
    }

    .md-checkbox__native {
        &:indeterminate {
            + .md-checkbox__container {
                background-color: var(--md-sys-color-error);
                border-color: var(--md-sys-color-error);

                .md-checkbox__icon {
                    border-bottom-color: var(--md-sys-color-on-error);
                }
            }
        }

        &:checked {
            + .md-checkbox__container {
                background-color: var(--md-sys-color-error);
                border-color: var(--md-sys-color-error);

                .md-checkbox__icon {
                    border-bottom-color: var(--md-sys-color-on-error);
                    border-left-color: var(--md-sys-color-on-error);
                }
            }
        }
    }
}

```
## src\material\components\data-table

### data-table-cell
src\material\components\data-table\data-table-cell.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDataTableCell extends MdElement {
    static properties = {
        label: { type: String },
    };

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-data-table__label">${this.label}</div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table__cell");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__cell");
    }
}

customElements.define("md-data-table-cell", MdDataTableCell);

export { MdDataTableCell };

```
### data-table
src\material\components\data-table\data-table.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";

class MdDataTable extends MdElement {
    static properties = {
        columns: { type: Array },
        rows: { type: Array },
        valueField: { type: String },
        clearSelection: { type: Boolean },
        selectAll: { type: Boolean },
        activeRow: { type: Boolean },
        scrollOnArrowUpActiveRow: { type: Boolean },
        selectOnArrowUpActiveRow: { type: Boolean },
        scrollOnArrowDownActiveRow: { type: Boolean },
        selectOnArrowDownActiveRow: { type: Boolean },
        activeCell: { type: Boolean },
        selectOnEnterActiveRow: { type: Boolean },
        selectRange: { type: Boolean },
        multiSelect: { type: Boolean },
        singleSelect: { type: Boolean },
        activeVisible: { type: Boolean, state: true },
        checkbox: { type: Boolean },
        _rows: { type: Array, state: true },
    };

    constructor() {
        super();
        this.columns = [];
        this.rows = [];
        this._rows = [];
        this.valueField = "id";
        this.selectedValues = new Set();
        this.activeRowIndex = 0;
        this.activeCellIndex = 0;
        this.checkbox = true;

        this._handleDataTableVirtualScrollUpdate = this._handleDataTableVirtualScrollUpdate.bind(this);
        this._handleDataTableKeydown = this._handleDataTableKeydown.bind(this);
        this._handleDataTableClick = this._handleDataTableClick.bind(this);

        this.virtualScrollController = new VirtualScrollController(this, {
            rowHeight: 52,
            onUpdate: this._handleDataTableVirtualScrollUpdate,
        });
    }

    /* prettier-ignore */
    renderThead(){
        const size=this.selectedValues.size
        const checked = size&&size===this.rows.length
        const indeterminate = size&&size!==this.rows.length
        return html`
            <thead>
                <tr>
                    ${this.checkbox?html`
                        <th>
                            <div class="md-data-table__cell">
                                <md-checkbox
                                    class="md-data-table__checkbox"
                                    .tabIndex="${-1}"
                                    .indeterminate="${indeterminate}"
                                    .checked="${checked}"
                                    @onCheckboxNativeInput="${this._handleDataTableHeaderCellCheckboxNativeInput}"
                                ></md-checkbox>
                            </div>
                        </th>
                    `:nothing}
                    ${this.columns.map(column=>html`
                        <th
                            style="${styleMap(column.style??{})}"
                        >
                            <md-data-table-cell
                                .label="${column.label}"
                            ></md-data-table-cell>
                        </th>
                    `)}
                </tr>
            </thead>
        `
    }

    /* prettier-ignore */
    renderTbody(){
        return html`
            <tbody
                style="${styleMap({
                    'transform':'translate3d(0,var(--md-comp-virtual-scroll-content-translate-y),0)'
                })}"
            >
                ${this._rows.map((row,rowIndex)=>{
                    const selected= this.selectedValues.has(row[this.valueField])
                    return html`
                        <tr
                            class="${classMap({
                                'md-data-table__row--selected':selected
                            })}"
                            .row="${row}"
                            @click="${this._handleDataTableRowClick}"
                        >
                            ${this.checkbox?html`
                                <td>
                                    <div class="md-data-table__cell">
                                        <md-checkbox
                                            class="md-data-table__checkbox"
                                            .tabIndex="${-1}"
                                            .checked="${selected}"
                                            @onCheckboxNativeInput="${this._handleDataTableCellCheckboxNativeInput}"
                                        ></md-checkbox>
                                    </div>
                                </td>
                            `:nothing}
                            ${this.columns.map((cell,cellIndex)=>html`
                                <td
                                    class="${classMap({
                                        'md-data-table__cell--active':((this.activeVisible&&this.activeRow&&this.activeCell)&&(this.activeRowIndex-this.startNode)===rowIndex&&this.activeCellIndex===cellIndex)
                                    })}"
                                    .cell="${cell}"
                                    @click="${this._handleDataTableCellClick}"
                                >
                                    <md-data-table-cell
                                        .label="${row[cell.name]}"
                                    ></md-data-table-cell>
                                </td>
                            `)}
                        </tr>
                    `
                })}
            </tbody>
        `
    }

    /* prettier-ignore */
    renderEmptyTbody(){
        return html`
            <tbody>
                <tr>
                    <td colspan="${this.columns.length}">
                        <md-data-table-cell
                            label="No data to display." 
                        ></md-data-table-cell>
                    </td>
                </tr>
            </tbody>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            <table
                .dataTable="${this}"
            >
                ${this.renderThead()}
                ${this._rows?.length?this.renderTbody():this.renderEmptyTbody()}
            </table>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table");

        this.tabIndex = 0;

        this.on("keydown", this._handleDataTableKeydown);
        this.on("click", this._handleDataTableClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this._handleDataTableKeydown);
        this.off("click", this._handleDataTableClick);

        this.classList.remove("md-data-table");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("rows")) {
            this.updateComplete.then(() => {
                this.virtualScrollController.reinit({
                    viewport: this.querySelector("table"),
                    itemCount: this.rows.length,
                });
            });
        }
    }

    _handleDataTableHeaderCellCheckboxNativeInput(event) {
        const checkbox = event.detail.element;

        if (checkbox.checked) {
            this.rows.forEach((row) => {
                this.selectedValues.add(row[this.valueField]);
            });
        } else {
            this.selectedValues.clear();
        }

        this.requestUpdate();
    }

    _handleDataTableCellCheckboxNativeInput(event) {}

    _handleDataTableVirtualScrollUpdate({ controller } = {}) {
        this.startNode = controller.startNode;
        this.endNode = controller.endNode;

        this._rows = this.rows.slice(controller.startNode, controller.endNode);
    }

    _handleDataTableClick(event) {
        if (this.clearSelection && !event.target.closest("tr")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();

            this.emit("onDataTableRowSelection", { event, element: this });
        }

        this.emit("onDataTableClick", { event, element: this });
    }

    _handleDataTableKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.rows.forEach((row) => {
                this.selectedValues.add(row[this.valueField]);
            });
            this.requestUpdate();

            this.emit("onDataTableRowSelection", { event, element: this });
        }

        if (this.activeRow && event.key === "ArrowUp") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.max(this.activeRowIndex - 1, 0);

            if (this.scrollOnArrowUpActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex);
            }

            if (this.selectOnArrowUpActiveRow) {
                this.select(this.rows[this.activeRowIndex][this.valueField]);
                this.emit("onDataTableRowSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeRow && event.key === "ArrowDown") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.min(this.activeRowIndex + 1, this.rows.length - 1);

            if (this.scrollOnArrowDownActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex, { offset: 52 });
            }

            if (this.selectOnArrowDownActiveRow) {
                this.select(this.rows[this.activeRowIndex][this.valueField]);
                this.emit("onDataTableRowSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeCell && event.key === "ArrowLeft") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeCellIndex = Math.max(this.activeCellIndex - 1, 0);

            this.requestUpdate();
        }

        if (this.activeCell && event.key === "ArrowRight") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeCellIndex = Math.min(this.activeCellIndex + 1, this.columns.length - 1);

            this.requestUpdate();
        }

        if (this.selectOnEnterActiveRow && event.key === "Enter") {
            event.preventDefault();

            this.activeVisible = true;

            this.select(this.rows[this.activeRowIndex][this.valueField]);
            this.requestUpdate();

            this.emit("onDataTableRowSelection", { event, element: this });
        }

        this.emit("onDataTableKeydown", { event, element: this });
    }

    _handleDataTableRowClick(event) {
        const tr = event.currentTarget;
        const row = tr.row;

        if (this.selectRange && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;
            this.currentSelectedIndex = this._rows.findIndex((_row) => _row[this.valueField] === row[this.valueField]);

            const [start, end] = [this.lastSelectedIndex, this.currentSelectedIndex].toSorted((a, b) => a - b);

            this.selectedValues.clear();
            this._rows.forEach((row, index) => {
                if (index >= start && index <= end) {
                    this.selectedValues.add(row[this.valueField]);
                }
            });

            this.emit("onDataTableRowSelection", { event, element: this });
        } else if ((this.multiSelect && event.ctrlKey) || this.checkbox) {
            if (this.selectedValues.has(row[this.valueField])) {
                this.selectedValues.delete(row[this.valueField]);
            } else {
                this.selectedValues.add(row[this.valueField]);
            }

            this.emit("onDataTableRowSelection", { event, element: this });
        } else if (this.singleSelect) {
            this.select(row[this.valueField]);

            this.emit("onDataTableRowSelection", { event, element: this });
        }

        this.requestUpdate();
        this.emit("onDataTableRowClick", { event, element: this });
    }

    _handleDataTableCellClick(event) {
        if (!(this.activeRow && this.activeCell)) {
            return;
        }

        const td = event.currentTarget;
        const tr = td.parentElement;

        this.activeVisible = false;
        this.activeRowIndex = tr.sectionRowIndex + this.startNode;
        this.activeCellIndex = td.cellIndex;

        this.emit("onDataTableCellClick", { event, element: this });
    }

    select(id) {
        this.selectedValues.clear();
        this.selectedValues.add(id);

        this.lastSelectedIndex = this._rows.findIndex((_row) => _row[this.valueField] === id);
    }
}

customElements.define("md-data-table", MdDataTable);

export { MdDataTable };

```
### data-table
src\material\components\data-table\data-table.scss

```scss
@use "../../shared/mixins.scss";

.md-data-table {
    display: block;
    width: 100%;
    height: 100%;

    table {
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    thead,
    tfoot {
        position: sticky;
        z-index: 1;
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
    }

    thead {
        inset-block-start: 0;
    }

    tfoot {
        inset-block-end: 0;
    }

    th {
        text-align: left;

        .md-data-table__cell {
            height: 56px;
        }
    }

    td {
        max-width: 0;
    }
}

.md-data-table__row--selected {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
}

.md-data-table__cell {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 52px;
    user-select: none;
}

.md-data-table__cell--active {
    outline: 2px solid var(--md-sys-color-outline);
    outline-offset: -2px;
}

.md-data-table__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-body-large();
}

```
## src\material\components\dialog

### dialog-body
src\material\components\dialog\dialog-body.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__body");
    }
}

customElements.define("md-dialog-body", MdDialogBody);

export { MdDialogBody };

```
### dialog-footer
src\material\components\dialog\dialog-footer.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDialogFooter extends MdElement {
    static properties = {
        buttons: { type: Array },
    };

    constructor() {
        super();

        this.buttons = [];
    }

    /* prettier-ignore */
    renderButton(properties){
        return html`
            <md-button 
                class="md-dialog__button"
                style="${styleMap(properties.style??{})}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .label="${ifDefined(properties.label)}"
                .icon="${ifDefined(properties.icon)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .type="${ifDefined(properties.type)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onDialogButtonClick}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.buttons?.length?this.buttons.map(({component,...properties}) => this.renderButton(properties)):nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__footer");
    }
}

customElements.define("md-dialog-footer", MdDialogFooter);

export { MdDialogFooter };

```
### dialog-header
src\material\components\dialog\dialog-header.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";

class MdDialogHeader extends MdElement {
    static properties = {
        leading: { type: Array },
        headline: { type: String },
        trailing: { type: Array },
    };

    constructor() {
        super();

        this.leading = [];
        this.trailing = [];
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="md-dialog__avatar"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-dialog__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-dialog__icon-button"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
            ></md-icon-button>
        `
    }

    /* prettier-ignore */
    renderButton(properties){
        return html`
            <md-button 
                class="md-dialog__button"
                style="${styleMap(properties.style??{})}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .label="${ifDefined(properties.label)}"
                .icon="${ifDefined(properties.icon)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .type="${ifDefined(properties.type)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onDialogButtonClick}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['button', () => this.renderButton(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-dialog__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-dialog__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div class="md-dialog__content">
                ${this.headline?html`<div class="md-dialog__headline">${this.headline}</div>`:nothing}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length?this.renderLeading():nothing}
            ${(this.headline)?this.renderContent():nothing}
            ${this.trailing?.length?this.renderTrailing():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__header");
    }
}

customElements.define("md-dialog-header", MdDialogHeader);

export { MdDialogHeader };

```
### dialog-main
src\material\components\dialog\dialog-main.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__main");
    }
}

customElements.define("md-dialog-main", MdDialogMain);

export { MdDialogMain };

```
### dialog
src\material\components\dialog\dialog.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialog extends MdElement {
    static properties = {
        open: { type: Boolean, reflect: true },
        variant: { type: String },
        heroIcon: { type: Boolean },
    };

    variants = ["basic", "full-screen"];

    constructor() {
        super();

        this.variant = "basic";

        this._handleDialogScrimClick = this._handleDialogScrimClick.bind(this);
        this._handleDialogAnimationend = this._handleDialogAnimationend.bind(this);
        this._handleWindowKeydown = this._handleWindowKeydown.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-dialog");

        this.on("animationend", this._handleDialogAnimationend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClick", this._handleDialogScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener("keydown", this._handleWindowKeydown);

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleDialogScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("animationend", this._handleDialogAnimationend);

        this.classList.remove("md-dialog");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-dialog--open");
            } else {
                this.classList.remove("md-dialog--open");
                this.classList.add("md-dialog--close");
            }
        }

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-dialog--${variant}`, this.variant === variant);
            });
        }

        if (changedProperties.has("heroIcon")) {
            this.classList.toggle(`md-dialog--hero-icon`, !!this.heroIcon);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open") && this.variant === "basic") {
            if (this.open) {
                this.scrimElement.show();
            } else {
                this.scrimElement.close();
            }
        }
    }

    _handleDialogScrimClick(event) {
        this.close();
    }

    _handleDialogAnimationend(event) {
        if (!this.open) {
            this.classList.remove("md-dialog--close");
        }
    }

    _handleWindowKeydown(event) {
        if (event.code === "Escape") {
            event.preventDefault();
            this.close();
        }
    }

    show() {
        if (this.open) {
            return;
        }
        this.open = true;
        this.focus();
        window.addEventListener("keydown", this._handleWindowKeydown);
    }

    close() {
        if (!this.open) {
            return;
        }
        this.open = false;
        window.removeEventListener("keydown", this._handleWindowKeydown);
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-dialog", MdDialog);

export { MdDialog };

```
### dialog
src\material\components\dialog\dialog.scss

```scss
@use "../../shared/mixins.scss";

@keyframes basic-dialog-show {
    from {
        opacity: 0;
        transform: translate3d(-50%, -100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
    }
}

@keyframes basic-dialog-close {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(-50%, -100%, 0);
    }
}

@keyframes full-screen-dialog-show {
    from {
        opacity: 0;
        transform: translate3d(-50%, 2000px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
    }
}

@keyframes full-screen-dialog-close {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(-50%, 2000px, 0);
    }
}

.md-dialog {
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-width: 560px;
    background-color: var(--md-sys-color-surface-container-high);
    color: var(--md-sys-color-on-surface-variant);
    border-radius: var(--md-sys-shape-corner-extra-large);
    box-shadow: var(--md-sys-elevation-level3);
    position: absolute;
    z-index: 20;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
    pointer-events: none;
    @include mixins.initialize();
}

.md-dialog__header {
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 0 16px;

    + .md-dialog__body {
        margin-top: -32px;
    }
}

.md-dialog__leading {
    display: inline-flex;
    align-items: center;
    gap: 0 24px;
}

.md-dialog__content {
    flex: 1;
    min-width: 0;
}

.md-dialog__headline {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-headline-small();
}

.md-dialog__trailing {
    display: inline-flex;
    align-items: center;
    gap: 0 24px;

    .md-dialog__icon-button {
        margin: 0 -8px;
    }

    .md-dialog__button {
        margin: 0 -8px;
    }
}

// .md-dialog__icon {}

.md-dialog--hero-icon .md-dialog__header {
    flex-direction: column;
    gap: 24px 0;
}

.md-dialog__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.md-dialog__main {
    flex: 1;
    padding: 0 24px;
    margin: 24px 0;
    overflow: auto;
    @include mixins.typescale-body-medium();

    + .md-dialog__footer {
        margin-top: -24px;
    }
}

.md-dialog__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 24px;
    gap: 0 8px;
}

.md-dialog--close {
    animation-name: basic-dialog-close;
    animation-duration: var(--md-sys-motion-duration-short2);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-dialog--open {
    opacity: 1;
    pointer-events: all;
    animation-name: basic-dialog-show;
    animation-duration: var(--md-sys-motion-duration-short3);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

// .md-dialog--basic{}

.md-dialog--full-screen {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface-variant);

    .md-dialog__header {
        padding-top: 12px;
        padding-bottom: 12px;
        min-height: 64px;
    }

    .md-dialog__headline {
        @include mixins.typescale-title-large();
    }

    &.md-dialog--close {
        animation-name: full-screen-dialog-close;
    }

    &.md-dialog--open {
        animation-name: full-screen-dialog-show;
    }
}

```
## src\material\components\form

### form
src\material\components\form\form.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdForm extends MdElement {
    static properties = {
        method: { type: String },
        action: { type: String },
        enctype: { type: String },
        target: { type: String },
        autocomplete: { type: String },
        noValidate: { type: Boolean },
    };

    formNative = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <form 
                ${ref(this.formNative)}
                class="md-form__native"
                method="${ifDefined(this.method)}"
                action="${ifDefined(this.action)}"
                enctype="${ifDefined(this.enctype)}"
                target="${ifDefined(this.target)}"
                autocomplete="${ifDefined(this.autocomplete)}"
                ?novalidate="${ifDefined(this.noValidate)}"
                @formdata="${this._handleFormNativeFormdata}"
                @reset="${this._handleFormNativeReset}"
                @submit="${this._handleFormNativeSubmit}"
            >${this._childNodes}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.classList.add("md-form");

        this._childNodes = Array.from(this.childNodes);
        this.replaceChildren();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form");
    }

    reset() {
        const formNative = this.formNative.value;

        formNative.reset();
    }

    submit(button) {
        const formNative = this.formNative.value;

        formNative.reportValidity();

        if (formNative.requestSubmit) {
            if (button) {
                formNative.requestSubmit(button);
            } else {
                formNative.requestSubmit();
            }
        } else {
            formNative.submit();
        }
    }

    _handleFormNativeFormdata(event) {
        this.emit("onFormNativeFormdata", { event, element: this, formData: event.formData });
    }

    _handleFormNativeReset(event) {
        this.emit("onFormNativeReset", { event, element: this });
    }

    _handleFormNativeSubmit(event) {
        event.preventDefault();

        const formNative = this.formNative.value;
        new FormData(formNative);

        this.emit("onFormNativeSubmit", { event, element: this });
    }
}

customElements.define("md-form", MdForm);

export { MdForm };

```
### form
src\material\components\form\form.scss

```scss
.md-form {
    display: block;
}

.md-form__native {
}

```
## src\material\components\grid

### grid-column
src\material\components\grid\grid-column.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdGridColumn extends MdElement {
    static properties = {
        expanded: { type: Number },
        medium: { type: Number },
        compact: { type: Number },
    };

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-grid__column");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-grid__column");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("expanded")) {
            for (let index = 1; index <= 12; index++) {
                this.classList.toggle(`md-grid__column--expanded${index}`, index === this.expanded);
            }
        }

        if (changedProperties.has("medium")) {
            for (let index = 1; index <= 8; index++) {
                this.classList.toggle(`md-grid__column--medium${index}`, index === this.medium);
            }
        }

        if (changedProperties.has("compact")) {
            for (let index = 1; index <= 4; index++) {
                this.classList.toggle(`md-grid__column--compact${index}`, index === this.compact);
            }
        }
    }
}

customElements.define("md-grid-column", MdGridColumn);

export { MdGridColumn };

```
### grid
src\material\components\grid\grid.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdGrid extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-grid");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-grid");
    }
}

customElements.define("md-grid", MdGrid);

export { MdGrid };

```
### grid
src\material\components\grid\grid.scss

```scss
@use "../../shared/mixins.scss";

.md-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: 24px;
}

.md-grid__column {
    grid-column-end: span 4;
}

@include mixins.breakpoint-expanded() {
    .md-grid {
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-gap: 24px;
    }

    @for $i from 1 through 12 {
        .md-grid__column--expanded#{$i} {
            grid-column-end: span $i;
        }
    }
}

@include mixins.breakpoint-medium() {
    .md-grid {
        grid-template-columns: repeat(8, minmax(0, 1fr));
        grid-gap: 16px;
    }

    @for $i from 1 through 8 {
        .md-grid__column--medium#{$i} {
            grid-column-end: span $i;
        }
    }
}

@include mixins.breakpoint-compact() {
    .md-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: 8px;
    }

    @for $i from 1 through 4 {
        .md-grid__column--compact#{$i} {
            grid-column-end: span $i;
        }
    }
}

```
## src\material\components\icon

### icon
src\material\components\icon\icon.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdIcon extends MdElement {
    static properties = {
        icon: { type: String },
    };

    /* prettier-ignore */
    render(){
        return this.icon
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }
}

customElements.define("md-icon", MdIcon);

export { MdIcon };

```
### icon
src\material\components\icon\icon.scss

```scss
.md-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    overflow: hidden;
    font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-variation-settings:
        "FILL" 0,
        "wght" 400,
        "GRAD" 0,
        "opsz" 24;
}

```
## src\material\components\icon-button

### icon-button
src\material\components\icon-button\icon-button.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";

const converter = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

class MdIconButton extends MdElement {
    static properties = {
        icon: { type: String, converter },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        width: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["filled", "tonal", "outlined", "standard"];
    widths = ["narrow", "default", "wide"];

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.width = "default";

        this._handleIconButtonClick = this._handleIconButtonClick.bind(this);

        this.rippleController = new RippleController(this, {});
    }

    /* prettier-ignore */
    render() {
        const icons = Array.isArray(this.icon) ? this.icon : [this.icon];
        const index = this.selected ? 1 : 0;
        const icon = icons[index] ?? icons[0] ?? "";

        return html`
            <md-icon 
                class="md-icon-button__native" 
                .icon="${icon}"
            ></md-icon>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this._handleIconButtonClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleIconButtonClick);

        this.classList.remove("md-icon-button");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-icon-button--${variant}`, this.variant === variant);
            });
        }
        if (changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-icon-button--${size}`, this.size === size);
            });
        }
        if (changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-icon-button--${shape}`, this.shape === shape);
            });
        }
        if (changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-icon-button--${color}`, this.color === color);
            });
        }
        if (changedProperties.has("width")) {
            this.widths.forEach((width) => {
                this.classList.toggle(`md-icon-button--${width}`, this.width === width);
            });
        }
        if (changedProperties.has("selected")) {
            this.classList.toggle(`md-icon-button--selected`, !!this.selected);
        }
        if (changedProperties.has("disabled")) {
            this.classList.toggle(`md-icon-button--disabled`, !!this.disabled);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    _handleIconButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;

            this.emit("onIconButtonSelection", { event, element: this });
        }

        this.emit("onIconButtonClick", { event, element: this });
    }
}

customElements.define("md-icon-button", MdIconButton);

export { MdIconButton };

```
### icon-button
src\material\components\icon-button\icon-button.scss

```scss
@use "../../shared/mixins.scss";

.md-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    will-change: border-radius, background-color, color, border-color;
    transition-property: border-radius, background-color, color, border-color;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
    @include mixins.initialize();

    &:active {
        transition-duration: var(--md-sys-motion-duration-short3);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));

        .md-icon-button__native {
            transition-duration: var(--md-sys-motion-duration-short3);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
    }
}

.md-icon-button__native {
    will-change: font-size;
    transition-property: font-size;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-icon-button--extra-small {
    height: 32px;
    width: 32px;

    &.md-icon-button--narrow {
        width: 28px;
        height: 32px;
    }

    &.md-icon-button--wide {
        width: 40px;
        height: 32px;
    }

    &.md-icon-button--round {
        border-radius: 16px;

        &.md-icon-button--selected {
            border-radius: 12px;
        }
    }

    &.md-icon-button--square {
        border-radius: 12px;

        &.md-icon-button--selected {
            border-radius: 16px;
        }
    }

    &:active {
        border-radius: 8px;
    }

    .md-icon-button__native {
        height: 20px;
        width: 20px;
        font-size: 20px;
    }
}

.md-icon-button--small {
    height: 40px;
    width: 40px;

    &.md-icon-button--narrow {
        width: 32px;
        height: 40px;
    }

    &.md-icon-button--wide {
        width: 52px;
        height: 40px;
    }

    &.md-icon-button--round {
        border-radius: 20px;

        &.md-icon-button--selected {
            border-radius: 12px;
        }
    }

    &.md-icon-button--square {
        border-radius: 12px;

        &.md-icon-button--selected {
            border-radius: 20px;
        }
    }

    &:active {
        border-radius: 8px;
    }

    .md-icon-button__native {
        height: 24px;
        width: 24px;
        font-size: 24px;
    }
}

.md-icon-button--medium {
    height: 56px;
    width: 56px;

    &.md-icon-button--narrow {
        width: 48px;
        height: 56px;
    }

    &.md-icon-button--wide {
        width: 72px;
        height: 56px;
    }

    &.md-icon-button--round {
        border-radius: 28px;

        &.md-icon-button--selected {
            border-radius: 16px;
        }
    }

    &.md-icon-button--square {
        border-radius: 16px;

        &.md-icon-button--selected {
            border-radius: 28px;
        }
    }

    &:active {
        border-radius: 12px;
    }

    .md-icon-button__native {
        height: 24px;
        width: 24px;
        font-size: 24px;
    }
}

.md-icon-button--large {
    height: 96px;
    width: 96px;

    &.md-icon-button--narrow {
        width: 64px;
        height: 96px;
    }

    &.md-icon-button--wide {
        width: 128px;
        height: 96px;
    }

    &.md-icon-button--round {
        border-radius: 48px;

        &.md-icon-button--selected {
            border-radius: 28px;
        }
    }

    &.md-icon-button--square {
        border-radius: 28px;

        &.md-icon-button--selected {
            border-radius: 48px;
        }
    }

    &:active {
        border-radius: 16px;
    }

    .md-icon-button__native {
        height: 32px;
        width: 32px;
        font-size: 32px;
    }
}

.md-icon-button--extra-large {
    height: 136px;
    width: 136px;

    &.md-icon-button--narrow {
        width: 104px;
        height: 136px;
    }

    &.md-icon-button--wide {
        width: 184px;
        height: 136px;
    }

    &.md-icon-button--round {
        border-radius: 68px;

        &.md-icon-button--selected {
            border-radius: 28px;
        }
    }

    &.md-icon-button--square {
        border-radius: 28px;

        &.md-icon-button--selected {
            border-radius: 68px;
        }
    }

    &:active {
        border-radius: 16px;
    }

    .md-icon-button__native {
        height: 40px;
        width: 40px;
        font-size: 40px;
    }
}

.md-icon-button--filled {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);

    &.md-icon-button--toggle {
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface-variant);

        &.md-icon-button--selected {
            background-color: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
        }
    }
}

.md-icon-button--tonal {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);

    &.md-icon-button--toggle {
        background-color: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);

        &.md-icon-button--selected {
            background-color: var(--md-sys-color-secondary);
            color: var(--md-sys-color-on-secondary);
        }
    }
}

.md-icon-button--outlined {
    border: 1px solid var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-on-surface-variant);

    &.md-icon-button--toggle {
        border: 1px solid var(--md-sys-color-outline-variant);
        color: var(--md-sys-color-on-surface-variant);

        &.md-icon-button--selected {
            background-color: var(--md-sys-color-inverse-surface);
            border: 1px solid var(--md-sys-color-inverse-surface);
            color: var(--md-sys-color-inverse-on-surface);
        }
    }
}

.md-icon-button--standard {
    color: var(--md-sys-color-on-surface-variant);

    &.md-icon-button--toggle {
        color: var(--md-sys-color-on-surface-variant);

        &.md-icon-button--selected {
            color: var(--md-sys-color-primary);
        }
    }
}

```
## src\material\components\image

### image
src\material\components\image\image.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";

class MdImage extends MdElement {
    static properties = {
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        shape: { type: String },
        error: { type: Boolean, state: true },
        errorSrc: { type: String },
    };

    shapes = ["round", "square", "sharp"];

    constructor() {
        super();
        this.loading = "lazy";
        this.shape = "square";
        this.errorSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this._handleImageResizeObserver = this._handleImageResizeObserver.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <img 
                class="md-image__native"
                src="${this.error?this.errorSrc:ifDefined(this.src)}"
                alt="${ifDefined(this.alt??'alt')}"
                loading="${ifDefined(this.loading)}"
                @load="${this._handleImageNativeLoad}"
                @error="${this._handleImageNativeError}"
            >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");

        this.resizeObserver = new ResizeObserver(this._handleImageResizeObserver);
        this.resizeObserver.observe(this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.resizeObserver.disconnect(this);

        this.classList.remove("md-image");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-image--${shape}`, this.shape === shape);
            });
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("shape")) {
            this._updateSquareRadius();
        }
    }

    _updateSquareRadius() {
        if (this.shape === "square") {
            const radius = Math.ceil(Math.sqrt(Math.max(this.clientWidth, this.clientHeight)) * 2);

            this.style.setProperty("--md-comp-image-radius", `${radius}px`);
        } else {
            this.style.removeProperty("--md-comp-image-radius");
        }
    }

    _handleImageResizeObserver() {
        window.requestAnimationFrame(() => {
            this._updateSquareRadius();
        });
    }

    _handleImageNativeLoad(event) {
        this.classList.add("md-image--loaded");

        this.emit("onImageNativeLoad", { event, element: this });
    }

    _handleImageNativeError(event) {
        this.classList.add("md-image--error");

        this.error = true;

        this.emit("onImageNativeError", { event, element: this });
    }
}

customElements.define("md-image", MdImage);

export { MdImage };

```
### image
src\material\components\image\image.scss

```scss
@use "../../shared/mixins.scss";

.md-image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    opacity: 0%;
    will-change: width, height, border-radius, opacity, background-color;
    transition-property: width, height, border-radius, opacity, background-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    @include mixins.initialize();
}

.md-image__native {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.md-image--square {
    border-radius: var(--md-comp-image-radius);
}

.md-image--round {
    border-radius: var(--md-sys-shape-corner-full);
}

.md-image--sharp {
}

.md-image--loaded {
    opacity: 100%;
}

.md-image--error {
    opacity: 50%;
}

```
## src\material\components\layout

### layout-item
src\material\components\layout\layout-item.js

```js
import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        modal: { type: Boolean },
        open: { type: Boolean, reflect: true },
    };

    regions = ["center", "west", "north", "east", "south"];

    constructor() {
        super();

        this.region = "center";

        this._handleLayoutItemTransitionend = this._handleLayoutItemTransitionend.bind(this);
        this._handleLayoutItemScrimClose = this._handleLayoutItemScrimClose.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__item");

        this.on("transitionend", this._handleLayoutItemTransitionend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClose", this._handleLayoutItemScrimClose);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClose", this._handleLayoutItemScrimClose);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("transitionend", this._handleLayoutItemTransitionend);

        this.classList.remove("md-layout__item");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-layout__item--modal`, !!this.modal);
        }

        if (changedProperties.has("open")) {
            this.classList.toggle(`md-layout__item--open`, !!this.open);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open")) {
            if (this.modal) {
                if (this.open) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }
    }

    _handleLayoutItemTransitionend(event) {
        if (this.open) {
            this.emit("onLayoutItemShowed", { event, element: this });
        } else {
            this.emit("onLayoutItemClosed", { event, element: this });
        }
    }

    _handleLayoutItemScrimClose(event) {
        this.close();
    }

    show() {
        this.open = true;

        this.emit("onLayoutItemShow", { element: this });
    }

    close() {
        this.open = false;

        this.emit("onLayoutItemClose", { element: this });
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-layout-item", MdLayoutItem);

export { MdLayoutItem };

```
### layout
src\material\components\layout\layout.js

```js
import { MdElement } from "../../base/element.js";

class MdLayout extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");
    }
}

customElements.define("md-layout", MdLayout);

export { MdLayout };

```
### layout
src\material\components\layout\layout.scss

```scss
:root {
    --md-comp-layout-north-size: 64px;
    --md-comp-layout-south-size: 64px;
    --md-comp-layout-west-size: 256px;
    --md-comp-layout-east-size: 256px;
}

.md-layout {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "north north north"
        "west center east"
        "south south south";
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.md-layout__item {
    overflow: auto;
    will-change: margin;
    transition-property: margin;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

    &.md-layout__item--modal {
        position: absolute;
        z-index: 20;
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface);
    }

    &.md-layout__item--open {
        transition-property: margin;
        transition-duration: var(--md-sys-motion-duration-short3);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}

.md-layout__item--north {
    grid-area: north;
    height: var(--md-comp-layout-north-size);
    margin-top: calc(0px - var(--md-comp-layout-north-size));

    &.md-layout__item--modal {
        left: 0;
        top: 0;
        right: 0;
    }

    &.md-layout__item--open {
        margin-top: 0;
    }
}

.md-layout__item--south {
    grid-area: south;
    height: var(--md-comp-layout-south-size);
    margin-bottom: calc(0px - var(--md-comp-layout-south-size));

    &.md-layout__item--modal {
        left: 0;
        right: 0;
        bottom: 0;
    }

    &.md-layout__item--open {
        margin-bottom: 0;
    }
}

.md-layout__item--west {
    grid-area: west;
    width: var(--md-comp-layout-west-size);
    margin-left: calc(0px - var(--md-comp-layout-west-size));

    &.md-layout__item--modal {
        left: 0;
        top: 0;
        bottom: 0;
    }

    &.md-layout__item--open {
        margin-left: 0;
    }
}

.md-layout__item--east {
    grid-area: east;
    width: var(--md-comp-layout-east-size);
    margin-right: calc(0px - var(--md-comp-layout-east-size));

    &.md-layout__item--modal {
        top: 0;
        right: 0;
        bottom: 0;
    }

    &.md-layout__item--open {
        margin-right: 0;
    }
}

.md-layout__item--center {
    grid-area: center;
}

```
## src\material\components\list

### list-item
src\material\components\list\list-item.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";

class MdListItem extends MdElement {
    static properties = {
        leading: { type: Array },
        trailing: { type: Array },
        overline: { type: String },
        label: { type: String },
        supporting: { type: String },
        routerLink: { type: String, reflect: true },
        interactive: { type: Boolean },
        rippleOptions: { type: Object },
        selected: { type: Boolean },
    };

    layouts = ["one-line", "two-line", "three-line"];

    get hasCheckbox() {
        return this.leading?.some((i) => i.component === "checkbox") || this.trailing?.some((i) => i.component === "checkbox");
    }

    get hasRadioButton() {
        return this.leading?.some((i) => i.component === "radio-button") || this.trailing?.some((i) => i.component === "radioButton");
    }

    get hasSwitch() {
        return this.leading?.some((i) => i.component === "switch") || this.trailing?.some((i) => i.component === "switch");
    }

    listSupporting = createRef();

    constructor() {
        super();
        this.leading = [];
        this.trailing = [];
        this.interactive = true;

        this.rippleController = new RippleController(this, {
            register: false,
        });
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="md-list__avatar"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderImage(properties){
        return html`
            <md-image 
                class="md-list__image"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'sharp')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderVideo(properties){
        return html`
            <md-image 
                class="md-list__video"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'sharp')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-list__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-list__icon-button"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
            ></md-icon-button>
        `
    }

    /* prettier-ignore */
    renderCheckbox(properties){
        return html`
            <md-checkbox 
                class="md-list__checkbox"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .indeterminate="${ifDefined(properties.indeterminate)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .validateOnInput="${ifDefined(properties.validateOnInput)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-checkbox>
        `
    }

    /* prettier-ignore */
    renderRadioButton(properties){
        return html`
            <md-radio-button 
                class="md-list__radio-button"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-radio-button>
        `
    }

    /* prettier-ignore */
    renderSwitch(properties){
        return html`
            <md-switch 
                class="md-list__switch"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-switch>
        `
    }

    /* prettier-ignore */
    renderText(properties){
        return html`
            <div 
                class="md-list__text"
                style="${styleMap(properties.style??{})}"
            >${properties.text}</div>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['image', () => this.renderImage(properties)],
            ['video', () => this.renderVideo(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['checkbox', () => this.renderCheckbox(properties)],
            ['radio-button', () => this.renderRadioButton(properties)],
            ['switch', () => this.renderSwitch(properties)],
            ['text', () => this.renderText(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-list__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-list__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div class="md-list__content">
                ${this.overline?html`<div class="md-list__overline">${this.overline}</div>`:nothing}
                ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                ${this.supporting?html`<div ${ref(this.listSupporting)} class="md-list__supporting">${this.supporting}</div>`:nothing}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length?this.renderLeading():nothing}
            ${(this.overline||this.label||this.supporting)?this.renderContent():nothing}
            ${this.trailing?.length?this.renderTrailing():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");

        if (this.interactive) {
            this.rippleController.init();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.interactive) {
            this.rippleController.destroy();
        }

        this.classList.remove("md-list__item");
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (this.supporting) {
            const clientHeight = this.listSupporting.value.clientHeight;
            const lineHeight = parseInt(window.getComputedStyle(this.listSupporting.value).getPropertyValue("line-height"));
            this.layout = clientHeight > lineHeight ? "three-line" : "two-line";
        } else {
            this.layout = "one-line";
        }

        this.layouts.forEach((layout) => {
            this.classList.toggle(`md-list__item--${layout}`, this.layout === layout);
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }
}

customElements.define("md-list-item", MdListItem);

export { MdListItem };

```
### list
src\material\components\list\list.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";

class MdList extends MdListElement {
    static properties = {
        ...MdListElement.properties,
        clearSelection: { type: Boolean },
        selectAll: { type: Boolean },
        activeRow: { type: Boolean },
        scrollOnArrowUpActiveRow: { type: Boolean },
        selectOnArrowUpActiveRow: { type: Boolean },
        scrollOnArrowDownActiveRow: { type: Boolean },
        selectOnArrowDownActiveRow: { type: Boolean },
        selectOnEnterActiveRow: { type: Boolean },
        selectRange: { type: Boolean },
        multiSelect: { type: Boolean },
        singleSelect: { type: Boolean },
        activeVisible: { type: Boolean, state: true },
        virtualScroll: { type: Boolean },
        virtualScrollOptions: { type: Object },
        _items: { type: Array, state: true },
    };

    constructor() {
        super();

        this._items = [];
        this.activeRowIndex = 0;
        this.activeVisible = false;
        this.startNode = 0;

        this._handleListVirtualScrollUpdate = this._handleListVirtualScrollUpdate.bind(this);
        this._handleListKeydown = this._handleListKeydown.bind(this);
        this._handleListClick = this._handleListClick.bind(this);

        this.virtualScrollController = new VirtualScrollController(this, {
            rowHeight: 56,
            register: false,
            onUpdate: this._handleListVirtualScrollUpdate,
        });
    }

    /* prettier-ignore */
    renderItems(){
        return repeat(this._items, (item) => item[this.valueField], (item,rowIndex)=>{
            const selected=this.selectedValues.has(item[this.valueField])
            return html`
                <md-list-item
                    style="${styleMap({
                        'transform':'translate3d(0,var(--md-comp-virtual-scroll-content-translate-y),0)',
                        '--md-comp-list-item-level': item.level,
                    })}"
                    class="${classMap({
                        'md-list__item--selected':selected,
                        'md-list__item--active':((this.activeVisible&&this.activeRow)&&(this.activeRowIndex-this.startNode)===rowIndex),
                    })}"
                    .item="${item}"
                    .leading="${ifDefined(item.leading)}"
                    .trailing="${this._getTrailingItem(item)}"
                    .overline="${ifDefined(item.overline)}"
                    .label="${ifDefined(item[this.labelField])}"
                    .supporting="${ifDefined(item.supporting)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .interactive="${ifDefined(item.interactive)}"
                    .rippleOptions="${ifDefined(item.rippleOptions)}"
                    .selected="${selected}"
                    @click="${this._handleListItemClick}"
                ></md-list-item>    
            `
        })
    }

    /* prettier-ignore */
    renderEmptyItems(){
        return html`
            <md-list-item
                label="No data to display."
            ></md-list-item>
        `
    }

    /* prettier-ignore */
    render(){
        return this._items?.length?this.renderItems():this.renderEmptyItems()
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.tabIndex = 0;

        if (this.virtualScroll) {
            this.updateComplete.then(() => {
                this.virtualScrollController.init();
            });
        }

        this.on("keydown", this._handleListKeydown);
        this.on("click", this._handleListClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.virtualScroll) {
            this.virtualScrollController.destroy();
        }

        this.off("keydown", this._handleListKeydown);
        this.off("click", this._handleListClick);

        this.classList.remove("md-list");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("_list")) {
            if (!this.virtualScroll) {
                queueMicrotask(() => {
                    this._items = this._list;
                });
            }
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("_list")) {
            if (this.virtualScroll) {
                this.updateComplete.then(() => {
                    this.virtualScrollController.reinit({
                        itemCount: this._list.length,
                    });
                });
            }
        }

        if (_changedProperties.has("virtualScrollOptions")) {
            if (this.virtualScroll) {
                this.updateComplete.then(() => {
                    this.virtualScrollController.reinit(this.virtualScrollOptions);
                });
            }
        }
    }

    _getTrailingItem(item) {
        const trailing = [];

        if (item.hasChildren) {
            trailing.push({ component: "icon-button", width: "narrow", color: "standard", icon: this.expandedValues.has(item[this.valueField]) ? "keyboard_arrow_up" : "keyboard_arrow_down" });
        }

        return [...((item.trailing?.length && item.trailing) || []), ...trailing];
    }

    _handleListVirtualScrollUpdate({ controller } = {}) {
        this.startNode = controller.startNode;

        this._items = this._list.slice(controller.startNode, controller.endNode);
    }

    _handleListClick(event) {
        if (this.clearSelection && !event.target.closest(".md-list__item")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();

            this.emit("onListItemSelection", { event, element: this });
        }

        this.emit("onListClick", { event, element: this });
    }

    _handleListKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.items.forEach((item) => {
                this.selectedValues.add(item[this.valueField]);
            });
            this.requestUpdate();

            this.emit("onListItemSelection", { event, element: this });
        }

        if (this.activeRow && event.key === "ArrowUp") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.max(this.activeRowIndex - 1, 0);

            if (this.scrollOnArrowUpActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex);
            }

            if (this.selectOnArrowUpActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("onListItemSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeRow && event.key === "ArrowDown") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.min(this.activeRowIndex + 1, this.items.length - 1);

            if (this.scrollOnArrowDownActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex, { offset: 16 });
            }

            if (this.selectOnArrowDownActiveRow) {
                this.select(this.items[this.activeRowIndex]);
                this.emit("onListItemSelection", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.selectOnEnterActiveRow && event.key === "Enter") {
            event.preventDefault();

            const li = this.querySelector(`.md-list__item:nth-child(${this.activeRowIndex + 1 - this.startNode})`);
            const item = li.item;

            if (item.routerLink) {
                li.click();
            } else {
                this.activeVisible = true;
                this.select(this.items[this.activeRowIndex]);
                this.requestUpdate();
            }

            this.emit("onListItemSelection", { event, element: this });
        }
        this.emit("onListKeydown", { event, element: this });
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;

        if (this.selectRange && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;
            this.currentSelectedIndex = this._items.findIndex((_item) => _item[this.valueField] === item[this.valueField]);

            const [start, end] = [this.lastSelectedIndex, this.currentSelectedIndex].toSorted((a, b) => a - b);

            this.selectedValues.clear();
            this._items.forEach((item, index) => {
                if (index >= start && index <= end) {
                    this.selectedValues.add(item[this.valueField]);
                }
            });
            this.requestUpdate();

            this.emit("onListItemSelection", { event, element: this });
        } else if ((this.multiSelect && event.ctrlKey) || li.hasCheckbox || li.hasSwitch) {
            if (this.selectedValues.has(item[this.valueField])) {
                this.selectedValues.delete(item[this.valueField]);
            } else {
                this.selectedValues.add(item[this.valueField]);
            }
            this.requestUpdate();
            this.emit("onListItemSelection", { event, element: this });
        } else if (this.singleSelect || li.hasRadioButton) {
            this.select(item);
            this.emit("onListItemSelection", { event, element: this });
        }
        if (this.activeRow) {
            this.activeVisible = false;

            const index = Array.prototype.indexOf.call(li.parentElement.children, li);
            this.activeRowIndex = index + this.startNode;

            this.requestUpdate();
        }

        this.emit("onListItemClick", { event, element: this });
    }

    select(item) {
        if (item.hasChildren) {
            if (this.expandedValues.has(item[this.valueField])) {
                this.expandedValues.delete(item[this.valueField]);
            } else {
                this.expandedValues.add(item[this.valueField]);
            }
        }
        this.selectedValues.clear();
        this.selectedValues.add(item[this.valueField]);

        this._setItems();

        this.lastSelectedIndex = this._items.findIndex((_item) => _item[this.valueField] === item[this.valueField]);
    }
}

customElements.define("md-list", MdList);

export { MdList };

```
### list
src\material\components\list\list.scss

```scss
@use "../../shared/mixins.scss";

.md-list {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
}

.md-list__item {
    display: flex;
    align-items: center;
    min-height: 56px;
    padding: 8px 16px 8px calc(16px + (24px * var(--md-comp-list-item-level, 0)));
    gap: 0 12px;
}

.md-list__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
}

.md-list__overline {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-label-small();
}

.md-list__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-body-large();
}

.md-list__supporting {
    max-height: calc(var(--md-sys-typescale-label-small-line-height) * 2);
    overflow: hidden;
    @include mixins.typescale-label-small();
}

.md-list__leading {
    display: inline-flex;
    align-items: center;
}

.md-list__trailing {
    display: inline-flex;
    align-items: center;
}

.md-list__avatar {
    width: 40px;
    height: 40px;
}

.md-list__image {
    width: 56px;
    height: 56px;
}

.md-list__video {
    height: 64px;
    aspect-ratio: 4/3;
    margin: 4px 0 0 -16px;
}

// .md-list__icon {}

// .md-list__icon-button {}

.md-list__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-label-small();
}

// .md-list__checkbox {}

// .md-list__radio-button {}

// .md-list__switch {}

.md-list__item--selected {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
}

.md-list__item--active {
    outline: 2px solid var(--md-sys-color-outline);
    outline-offset: -2px;
}

.md-list__item--one-line {
    min-height: 56px;
}

.md-list__item--two-line {
    min-height: 72px;
}

.md-list__item--three-line {
    align-items: flex-start;
    min-height: 88px;
    padding-top: 12px;
    padding-bottom: 12px;

    .md-list__video {
        margin-top: 0;
        margin-bottom: 0;
    }
}

.md-menu {
    display: inline-flex;
    flex-direction: column;
    min-width: calc((44px * 3) + (2px * (3 - 1)) + (4px * 2));
    max-height: calc((44px * 5) + (2px * (5 - 1)) + (4px * 2));
    border-radius: var(--md-sys-shape-corner-large);
    background-color: var(--md-sys-color-surface-container);
    box-shadow: var(--md-sys-elevation-level2);
}

.md-menu__list {
    padding: 4px;
    gap: 2px 0;

    .md-list__item {
        min-height: 44px;
        padding: 8px 12px;
        gap: 0 8px;
        border-radius: var(--md-sys-shape-corner-small);
    }

    .md-list__item--selected {
        border-radius: var(--md-sys-shape-corner-medium);
    }

    .md-list__icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
    }

    .md-list__label {
        @include mixins.typescale-label-large();
    }
}

```
## src\material\components\push-menu

### push-menu
src\material\components\push-menu\push-menu.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

class MdPushMenu extends MdListElement {
    constructor() {
        super();
        this.type = "stack";
    }

    /* prettier-ignore */
    render(){
        const { items, parent } = this.current;
        
        return html`
            ${parent?html`
                <md-list-item
                    .item="${parent}"
                    .label="${parent[this.labelField]}"
                    .leading="${this._getLeading(parent)}"
                    @click="${this.pop}"
                ></md-list-item>
            `:nothing}
            ${repeat(items, (item) => item[this.valueField], (item) => html`
                <md-list-item
                    style="${styleMap({
                        '--md-comp-list-item-level': item.level,
                    })}"
                    .item="${item}"
                    .label="${item[this.labelField]}"
                    .leading="${this._getLeadingItem(item,parent)}"
                    .trailing="${this._getTrailingItem(item)}"
                    @click="${this._handleListItemClick}"
                ></md-list-item>
            `)}
        `
    }

    _getTrailingItem(item) {
        const trailing = [];

        if (item.children?.length) {
            trailing.push({ component: "icon", icon: "arrow_forward" });
        }

        return trailing;
    }

    _getLeadingItem(item, parent) {
        const leading = [];

        if (parent) {
            leading.push({ component: "icon", icon: "" });
        }

        return leading;
    }

    _getLeading(parent) {
        const leading = [];

        leading.push({ component: "icon", icon: "arrow_back" });

        return leading;
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;

        if (item?.children?.length) {
            this.push(item);
        } else {
            this.selectedValues.clear();
            this.selectedValues.add(item[this.valueField]);

            this._setStack();
        }
    }
}

customElements.define("md-push-menu", MdPushMenu);

export { MdPushMenu };

```
### push-menu
src\material\components\push-menu\push-menu.scss

```scss

```
## src\material\components\radio-button

### radio-button
src\material\components\radio-button\radio-button.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";

class MdRadioButton extends MdElement {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        required: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
        tabIndex: { type: Number },
    };

    radioButtonNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.rippleController = new RippleController(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-radio-button__native",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="radio-button"
                ${ref(this.radioButtonNative)}
                class="md-radio-button__native"
                type="radio"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @input="${this._handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__container">
                <div class="md-radio-button__icon"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-radio-button--disabled", this.disabled);
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        this.checked = this.defaultChecked;
        const radioButtonNative = this.radioButtonNative.value;
        radioButtonNative.checked = this.defaultChecked;
    }

    _handleRadioButtonNativeInput(event) {
        const radioButtonNative = this.radioButtonNative.value;
        this.checked = radioButtonNative.checked;
        this.emit("onRadioButtonNativeInput", { event, element: this });
    }
}

customElements.define("md-radio-button", MdRadioButton);

export { MdRadioButton };

```
### radio-button
src\material\components\radio-button\radio-button.scss

```scss
.md-radio-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    width: 24px;
    height: 24px;
}

.md-radio-button__native {
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: var(--md-sys-shape-corner-full);
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;

    &:checked {
        + .md-radio-button__container {
            border-color: var(--md-sys-color-primary);
            transition-duration: var(--md-sys-motion-duration-short2);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

            .md-radio-button__icon {
                width: 10px;
                height: 10px;
                border-radius: var(--md-sys-shape-corner-full);
                background-color: var(--md-sys-color-primary);
                border-color: var(--md-sys-color-primary);
                transition-duration: var(--md-sys-motion-duration-short2);
                transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
            }
        }
    }
}

.md-radio-button__container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border: 2px solid var(--md-sys-color-on-surface-variant);
    border-radius: var(--md-sys-shape-corner-full);
    will-change: border-color;
    transition-property: border-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-radio-button__icon {
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-radio-button--disabled {
    pointer-events: none;
    opacity: 38%;

    .md-radio-button__container {
        border-color: var(--md-sys-color-on-surface);
    }

    .md-radio-button__native {
        &:checked {
            + .md-radio-button__container {
                border-color: var(--md-sys-color-on-surface);

                .md-radio-button__icon {
                    background-color: var(--md-sys-color-on-surface);
                    border-color: var(--md-sys-color-on-surface);
                }
            }
        }
    }
}

```
## src\material\components\scrim

### scrim
src\material\components\scrim\scrim.js

```js
import { MdElement } from "../../base/element.js";

class MdScrim extends MdElement {
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        this._handleScrimTransitionend = this._handleScrimTransitionend.bind(this);
        this._handleScrimClick = this._handleScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");

        this.on("transitionend", this._handleScrimTransitionend);
        this.on("click", this._handleScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleScrimClick);
        this.off("transitionend", this._handleScrimTransitionend);

        this.classList.remove("md-scrim");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("open")) {
            this.classList.toggle("md-scrim--open", !!this.open);
        }
    }

    _handleScrimClick(event) {
        // this.close();
        this.emit("onScrimClick", { event, element: this });
    }

    _handleScrimTransitionend(event) {
        if (this.open) {
            this.emit("onScrimShowed", { event, element: this });
        } else {
            this.emit("onScrimClosed", { event, element: this });
        }
    }

    show() {
        this.open = true;
        this.emit("onScrimShow", { element: this });
    }

    close() {
        this.open = false;
        this.emit("onScrimClose", { element: this });
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-scrim", MdScrim);

export { MdScrim };

```
### scrim
src\material\components\scrim\scrim.scss

```scss
.md-scrim {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: var(--md-sys-color-scrim);
    opacity: 0%;
    pointer-events: none;
    will-change: opacity;
    transition-property: opacity;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

    &.md-scrim--open {
        opacity: 40%;
        pointer-events: all;
        transition-property: opacity;
        transition-duration: var(--md-sys-motion-duration-short3);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}

```
## src\material\components\slider

### slider
src\material\components\slider\slider.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";
import { classMap } from "lit/directives/class-map.js";

function converter(value) {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

function getFraction(min, max, value) {
    return (value - min) / (max - min);
}

class MdSlider extends MdElement {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        value: { type: Number, converter },
        variant: { type: String, state: true },
        icon: { type: String, converter },
        orientation: { type: String },
        size: { type: String },
        stopIndicator: { type: Boolean },
        valueIndicator: { type: Boolean },
        values: { type: Array, state: true },
        stops: { type: Number, state: true },
    };

    variants = ["standard", "centered", "range"];
    orientations = ["horizontal", "vertical"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    sliderNative = [createRef(), createRef()];

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.variant = "standard";
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 50;
        this.stopIndicator = true;
        this.valueIndicator = true;
        this.values = [];

        this.orientation = "horizontal";
        this.size = "extra-small";
    }

    /* prettier-ignore */
    render(){
        const icons = Array.isArray(this.icon) ? this.icon : [this.icon];
        const fraction = getFraction(this.min, this.max, this.values[0] ?? this.min);
        const iconIndex = Math.round(fraction * (icons.length - 1));
        const index = Math.max(0, Math.min(icons.length - 1, iconIndex));
        
        return html`
            <input 
                class="md-slider__hidden"
                type="hidden" 
                name="${ifDefined(this.name)}"
                value="${this.values}"
            >
            ${icons[index]?html`
                <md-icon
                    class="${classMap({
                        "md-slider__icon":true,
                    })}"
                    icon="${icons[index]}"
                ></md-icon>    
            `:nothing}
            <div class="md-slider__track"></div>
            ${this.values.map((value,index)=>html`
                <input 
                    ${ref(this.sliderNative[index])}
                    class="${classMap({
                        'md-slider__native':true,
                        [`md-slider__native${index}`]:true,
                    })}"
                    type="range"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    value="${ifDefined(value)}"
                    @input="${this._handleSliderNativeInput}"
                    @focus="${this._handleSliderNativeFocus}"
                    @blur="${this._handleSliderNativeBlur}"
                >
                <div 
                    class="${classMap({
                        'md-slider__thumb':true,
                        [`md-slider__thumb${index}`]:true,
                    })}"
                ></div>
                ${this.valueIndicator?html`
                    <div 
                        class="${classMap({
                            'md-slider__label':true,
                            [`md-slider__label${index}`]:true
                        })}"
                    >${value}</div>
                `:nothing}
            `)}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-slider");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-slider");
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("min")) {
            if (this.min < 0) {
                this.variant = "centered";
            }
        }

        if (_changedProperties.has("step")) {
            this.stops = this.step > 1 ? Math.floor((this.max - this.min) / this.step) : this.step;
        }

        if (_changedProperties.has("value")) {
            this.values = Array.isArray(this.value) ? this.value : [this.value];
            if (this.values.length === 2) {
                this.variant = "range";
            }
        }
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, this.variant === variant);
            });
        }
        if (changedProperties.has("orientation")) {
            this.orientations.forEach((orientation) => {
                this.classList.toggle(`md-slider--${orientation}`, this.orientation === orientation);
            });
        }
        if (changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-slider--${size}`, this.size === size);
            });
        }
        if (changedProperties.has("stops")) {
            this.classList.toggle(`md-slider--discrete`, this.stops > 1);
            this.style.setProperty("--md-comp-slider-stop", this.stops);
        }
    }

    _calculate(sliderNative) {
        const min = Number(sliderNative.min);
        const max = Number(sliderNative.max);
        const value = Number(sliderNative.value);
        const fraction = getFraction(min, max, value);
        const percentage = fraction * 100;
        return { min, max, value, fraction, percentage };
    }

    _setCssVar(index, fraction, percentage) {
        this.style.setProperty(`--md-comp-slider-fraction${index}`, fraction);
        this.style.setProperty(`--md-comp-slider-percentage${index}`, `${percentage}%`);
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.defaultValues = structuredClone(this.values);

        this._setVariantCssVar();
    }

    formResetCallback(event) {
        this.values = [...this.defaultValues];
        this.defaultValues.forEach((value, index) => {
            const sliderNative = this.sliderNative[index].value;
            sliderNative.value = value;
        });

        this._setVariantCssVar();
    }

    _handleSliderNativeInput(event) {
        if (this.variant === "centered") {
            const sliderNative = this.sliderNative[0].value;
            this.values = [Number(sliderNative.value)];
        } else if (this.variant === "range") {
            const sliderNative0 = this.sliderNative[0].value;
            const sliderNative1 = this.sliderNative[1].value;

            const clampValue0 = Math.min(Number(sliderNative0.value), this.values[1]);
            const clampValue1 = Math.max(Number(sliderNative1.value), this.values[0]);

            sliderNative0.value = clampValue0;
            sliderNative1.value = clampValue1;

            this.values = [clampValue0, clampValue1];
        } else {
            const sliderNative = this.sliderNative[0].value;
            this.values = [Number(sliderNative.value)];
        }

        this._setVariantCssVar();
    }

    _handleSliderNativeFocus(event) {
        this.classList.toggle("md-slider--focus", true);
        this.classList.toggle("md-slider--focus-visible", !this.matches(":active"));
    }
    _handleSliderNativeBlur(event) {
        this.classList.toggle("md-slider--focus", false);
        this.classList.toggle("md-slider--focus-visible", false);
    }

    _setVariantCssVar() {
        if (this.variant === "centered") {
            const sliderNative = this.sliderNative[0].value;

            const { fraction, percentage } = this._calculate(sliderNative);
            const percentage0 = Math.min(50, percentage);
            const percentage1 = Math.max(50, percentage);
            this._setCssVar(0, fraction, percentage0);
            this._setCssVar(1, fraction, percentage1);
        } else if (this.variant === "range") {
            const sliderNative0 = this.sliderNative[0].value;
            const sliderNative1 = this.sliderNative[1].value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(sliderNative0);
            const { fraction: fraction1, percentage: percentage1 } = this._calculate(sliderNative1);
            this._setCssVar(0, fraction0, percentage0);
            this._setCssVar(1, fraction1, percentage1);
        } else {
            const sliderNative = this.sliderNative[0].value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(sliderNative);
            this._setCssVar(0, fraction0, percentage0);
        }
    }
}

customElements.define("md-slider", MdSlider);

export { MdSlider };

```
### slider
src\material\components\slider\slider.scss

```scss
.md-slider {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
    --md-comp-slider-stop-indicator-size: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    margin: 0 calc(var(--md-comp-slider-stop-indicator-size) / 2);
    height: calc(var(--md-comp-slider-handle-height) + (4px * 2));
    position: relative;
    user-select: none;
}

// .md-slider__hidden {}

.md-slider__native {
    appearance: none;
    background-color: transparent;
    outline: none;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 6;
}

.md-slider__native::-webkit-slider-container {
    appearance: none;
}

.md-slider__native::-webkit-slider-runnable-track {
    appearance: none;
}

.md-slider__native::-webkit-slider-thumb {
    appearance: none;
    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    background-color: transparent;
}

.md-slider__native::-moz-range-track {
    appearance: none;
}

.md-slider__native::-moz-range-progress {
    appearance: none;
}

.md-slider__native::-moz-range-thumb {
    appearance: none;
    border: 0;
    border-radius: 0;
    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    background-color: transparent;
}

.md-slider__icon {
    position: absolute;
    left: calc(14px + (4px - 14px) * min(1, var(--md-comp-slider-fraction0) * (100% / (var(--md-comp-slider-inset-icon-size) + 14px))));
    z-index: 3;
    pointer-events: none;
    font-size: var(--md-comp-slider-inset-icon-size);
    width: var(--md-comp-slider-inset-icon-size);
    height: var(--md-comp-slider-inset-icon-size);
    color: color-mix(in srgb, var(--md-sys-color-on-secondary-container), var(--md-sys-color-on-primary) calc(min(1, var(--md-comp-slider-fraction0) * (100% / ((var(--md-comp-slider-inset-icon-size) + 14px)/2))) * 100%));
}

.md-slider__track {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    left: calc(0px - (var(--md-comp-slider-stop-indicator-size) / 2));
    right: calc(0px - (var(--md-comp-slider-stop-indicator-size) / 2));
    height: var(--md-comp-slider-track-height);
}
.md-slider__track::before,
.md-slider__track::after {
    content: "";
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    border-radius: var(--md-comp-slider-track-shape);
    background-size: calc((100% - var(--md-comp-slider-stop-indicator-size) * 2) / var(--md-comp-slider-stop)) 100%;
}

.md-slider__track::before {
    background-color: var(--md-sys-color-secondary-container);
    background-image: radial-gradient(circle at var(--md-comp-slider-stop-indicator-size) center, var(--md-sys-color-on-secondary-container) 0, var(--md-sys-color-on-secondary-container) calc(var(--md-comp-slider-stop-indicator-size) / 2), transparent calc(var(--md-comp-slider-stop-indicator-size) / 2));
}

.md-slider__track::after {
    background-color: var(--md-sys-color-primary);
    clip-path: inset(0 calc(100% - var(--md-comp-slider-percentage0)) 0 0);
}

.md-slider--discrete {
    .md-slider__track::after {
        background-image: radial-gradient(circle at var(--md-comp-slider-stop-indicator-size) center, var(--md-sys-color-on-primary) 0, var(--md-sys-color-on-primary) calc(var(--md-comp-slider-stop-indicator-size) / 2), transparent calc(var(--md-comp-slider-stop-indicator-size) / 2));
    }
}

.md-slider__thumb {
    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    border-radius: var(--md-sys-shape-corner-full);
    background-color: var(--md-sys-color-primary);
    box-shadow: 0 0 0 6px var(--md-sys-color-background);
    position: absolute;
    left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
    transform: translate3d(-50%, 0, 0);
    z-index: 4;
    pointer-events: none;
}

.md-slider__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--md-comp-slider-label-container-height);
    width: var(--md-comp-slider-label-container-width);
    padding: 12px 16px;
    border-radius: var(--md-sys-shape-corner-full);
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    position: absolute;
    z-index: 5;
    pointer-events: none;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-slider__native:focus-visible + .md-slider__thumb {
    outline: 2px solid var(--md-sys-color-outline);
    outline-offset: 2px;
}

// .md-slider--standard {}

.md-slider--horizontal {
    .md-slider__label {
        bottom: calc(100% - (var(--md-comp-slider-label-container-height) / 2));
        left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(-50%, 0, 0) scale3d(0, 0, 0);
        will-change: bottom, transform;
        transition-property: bottom, transform;
    }

    .md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
        bottom: 100%;
        transform: translate3d(-50%, 0, 0) scale3d(1, 1, 1);
    }

    &.md-slider--centered {
        .md-slider__track::after {
            clip-path: inset(0 calc(100% - var(--md-comp-slider-percentage1)) 0 var(--md-comp-slider-percentage0));
        }
    }

    &.md-slider--range {
        .md-slider__native0 {
            clip-path: inset(0 calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0);
        }

        .md-slider__native1 {
            clip-path: inset(0 0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)));
        }

        .md-slider__track::after {
            clip-path: inset(0 calc(100% - var(--md-comp-slider-percentage1)) 0 var(--md-comp-slider-percentage0));
        }

        .md-slider__thumb1 {
            left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }

        .md-slider__label1 {
            left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }
    }
}

.md-slider--vertical {
    height: 192px;
    width: calc(var(--md-comp-slider-handle-height) + (4px * 2));
    margin: calc(var(--md-comp-slider-stop-indicator-size) / 2) 0;

    .md-slider__native {
        writing-mode: vertical-lr;
        direction: rtl;
    }

    .md-slider__native::-webkit-slider-thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
    }

    .md-slider__native::-moz-range-thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
    }

    .md-slider__icon {
        left: auto;
        bottom: calc(14px + (4px - 14px) * min(1, var(--md-comp-slider-fraction0) * (100% / (var(--md-comp-slider-inset-icon-size) + 14px))));
    }

    .md-slider__track {
        left: auto;
        right: auto;
        height: auto;
        top: calc(0px - (var(--md-comp-slider-stop-indicator-size) / 2));
        bottom: calc(0px - (var(--md-comp-slider-stop-indicator-size) / 2));
        width: var(--md-comp-slider-track-height);
    }
    .md-slider__track::before,
    .md-slider__track::after {
        background-size: 100% calc((100% - var(--md-comp-slider-stop-indicator-size) * 2) / var(--md-comp-slider-stop));
    }

    .md-slider__track::before {
        background-image: radial-gradient(circle at center var(--md-comp-slider-stop-indicator-size), var(--md-sys-color-on-secondary-container) 0, var(--md-sys-color-on-secondary-container) calc(var(--md-comp-slider-stop-indicator-size) / 2), transparent calc(var(--md-comp-slider-stop-indicator-size) / 2));
    }

    .md-slider__track::after {
        clip-path: inset(calc(100% - var(--md-comp-slider-percentage0)) 0 0 0);
    }

    &.md-slider--discrete {
        .md-slider__track::after {
            background-image: radial-gradient(circle at center var(--md-comp-slider-stop-indicator-size), var(--md-sys-color-on-primary) 0, var(--md-sys-color-on-primary) calc(var(--md-comp-slider-stop-indicator-size) / 2), transparent calc(var(--md-comp-slider-stop-indicator-size) / 2));
        }
    }

    .md-slider__thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
        left: auto;
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0);
    }

    .md-slider__label {
        left: calc(100% - (var(--md-comp-slider-label-container-height) / 2));
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0) scale3d(0, 0, 0);
        will-change: left, transform;
        transition-property: left, transform;
    }

    .md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
        left: 100%;
        transform: translate3d(0, 50%, 0) scale3d(1, 1, 1);
    }

    .md-slider__stops {
        flex-direction: column-reverse;
        width: auto;
        height: 100%;
    }

    &.md-slider--centered {
        .md-slider__track::after {
            clip-path: inset(calc(100% - var(--md-comp-slider-percentage1)) 0 var(--md-comp-slider-percentage0) 0);
        }
    }

    &.md-slider--range {
        .md-slider__native0 {
            clip-path: inset(calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0 0);
        }

        .md-slider__native1 {
            clip-path: inset(0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)) 0);
        }

        .md-slider__track::after {
            clip-path: inset(calc(100% - var(--md-comp-slider-percentage1)) 0 var(--md-comp-slider-percentage0) 0);
        }

        .md-slider__thumb1 {
            bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }

        .md-slider__label1 {
            bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }
    }
}

.md-slider--extra-small {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
}

.md-slider--small {
    --md-comp-slider-track-height: 24px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
}

.md-slider--medium {
    --md-comp-slider-track-height: 40px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 52px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 12px;
    --md-comp-slider-inset-icon-size: 24px;
}

.md-slider--large {
    --md-comp-slider-track-height: 56px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 68px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 16px;
    --md-comp-slider-inset-icon-size: 24px;
}

.md-slider--extra-large {
    --md-comp-slider-track-height: 96px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 108px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 28px;
    --md-comp-slider-inset-icon-size: 32px;
}

```
## src\material\components\switch

### switch
src\material\components\switch\switch.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";
const converter = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

class MdSwitch extends MdElement {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        required: { type: Boolean },
        rippleOptions: { type: Object },
        icon: { type: String, converter },
        tabIndex: { type: Number },
    };

    switchNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.rippleController = new RippleController(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-switch__native",
            container: ".md-switch__thumb",
        });
    }

    /* prettier-ignore */
    renderIcon(){
        const icons=Array.isArray(this.icon)?this.icon:[this.icon]
        const index=this.checked?1:0
        const icon=icons[index]
        return icon?html`<md-icon class="md-switch__icon" .icon="${icon}"></md-icon>`:nothing
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="switch"
                ${ref(this.switchNative)}
                class="md-switch__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @input="${this._handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icon?this.renderIcon():nothing}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-switch--disabled", this.disabled);
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        this.checked = this.defaultChecked;
        const switchNative = this.switchNative.value;
        switchNative.checked = this.defaultChecked;
    }

    _handleSwitchNativeInput(event) {
        const switchNative = this.switchNative.value;
        this.checked = switchNative.checked;
        this.emit("onSwitchNativeInput", { event, element: this });
    }
}

customElements.define("md-switch", MdSwitch);

export { MdSwitch };

```
### switch
src\material\components\switch\switch.scss

```scss
.md-switch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    width: 52px;
    height: 32px;
}

.md-switch__native {
    appearance: none;
    width: 52px;
    height: 32px;
    border-radius: var(--md-sys-shape-corner-full);
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;

    &:checked {
        + .md-switch__track {
            background-color: var(--md-sys-color-primary);
            border-color: var(--md-sys-color-primary);
            transition-duration: var(--md-sys-motion-duration-short2);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

            .md-switch__thumb {
                width: 24px;
                height: 24px;
                border-radius: var(--md-sys-shape-corner-full);
                left: 22px;
                background-color: var(--md-sys-color-on-primary);
                color: var(--md-sys-color-primary);
                transition-duration: var(--md-sys-motion-duration-short2);
                transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
            }
        }
    }

    &:active {
        + .md-switch__track {
            .md-switch__thumb {
                width: 28px;
                height: 28px;
                border-radius: var(--md-sys-shape-corner-full);
                left: 0px;
            }
        }

        &:checked {
            + .md-switch__track {
                .md-switch__thumb {
                    left: 22px;
                }
            }
        }
    }

    &:focus-visible {
        outline-offset: 2px;
        border-radius: var(--md-sys-shape-corner-full);
    }
}

.md-switch__track {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 52px;
    height: 32px;
    background-color: var(--md-sys-color-surface-container-highest);
    border: 2px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-full);
    position: relative;
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-switch__thumb {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background-color: var(--md-sys-color-outline);
    color: var(--md-sys-color-surface-container-highest);
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: var(--md-sys-shape-corner-full);
    left: 2px;
    will-change: width, height, border-radius, left, background-color, color;
    transition-property: width, height, border-radius, left, background-color, color;
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));

    &:empty {
        width: 16px;
        height: 16px;
        border-radius: var(--md-sys-shape-corner-full);
        left: 4px;
    }

    &.md-ripple {
        &::after {
            width: 40px;
        }
    }

    &.md-ripple--press {
        &::after {
            width: 0;
        }
    }
}

.md-switch__icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
}

.md-switch--disabled {
    pointer-events: none;
    opacity: 38%;

    .md-switch__track {
        background-color: var(--md-sys-color-surface);
        border-color: var(--md-sys-color-on-surface);
    }

    .md-switch__thumb {
        background-color: var(--md-sys-color-on-surface);
        color: var(--md-sys-color-surface);
    }

    .md-switch__native {
        &:checked {
            + .md-switch__track {
                background-color: var(--md-sys-color-surface);
                border-color: var(--md-sys-color-on-surface);

                .md-switch__thumb {
                    background-color: var(--md-sys-color-on-surface);
                    color: var(--md-sys-color-surface);
                }
            }
        }
    }
}

```
## src\material\components\text-field

### text-field
src\material\components\text-field\text-field.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

class MdTextField extends MdElement {
    static formAssociated = true;

    static properties = {
        leading: { type: Array },
        label: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        clearable: { type: Boolean },
        trailing: { type: Array },
        supporting: { type: String },
        color: { type: String },
        type: { type: String },
        name: { type: String },
        value: { type: String },
        placeholder: { type: String },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        required: { type: Boolean },
        minLength: { type: Number },
        maxLength: { type: Number },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        pattern: { type: String },
        autocomplete: { type: String },
        inputmode: { type: String },
        validationMessage: { type: String, state: true },
        validateOnBlur: { type: Boolean },
        validateOnInput: { type: Boolean },
    };

    textFieldNative = createRef();
    textFieldContent = createRef();

    colors = ["standard", "filled", "outlined"];

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.leading = [];
        this.trailing = [];
        this.validateOnInput = true;
        this.variant = "filled";

        this._handleTextFieldIconButtonClearClick = this._handleTextFieldIconButtonClearClick.bind(this);
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="${classMap({
                    'md-list__avatar':true,
                    ...properties.class
                })}"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
                @click="${properties.onTextFieldAvatarClick}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="${classMap({
                    'md-text-field__icon':true,
                    ...properties.class
                })}"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                @click="${properties.onTextFieldIconClick}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="${classMap({
                    'md-text-field__icon-button':true,
                    ...properties.class
                })}"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onTextFieldIconButtonClick}"
            ></md-icon-button>
        `
    }

    /* prettier-ignore */
    renderText(properties){
        return html`
            <div 
                class="md-text-field__text"
                style="${styleMap(properties.style??{})}"
            >${properties.text}</div>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['text', () => this.renderText(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return this.leading?.length?html`
            <div class="md-text-field__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `:nothing
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div
                ${ref(this.textFieldContent)}
                class="md-text-field__content"
            >
                ${this.prefix?this.renderText({text:this.prefix}):nothing}
                <input 
                    aria-label="text-field"
                    ${ref(this.textFieldNative)}
                    class="md-text-field__native"
                    type="${ifDefined(this.type)}"
                    name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                    placeholder="${ifDefined(this.placeholder)}"
                    ?disabled="${ifDefined(this.disabled)}"
                    ?readonly="${ifDefined(this.readonly)}"
                    ?required="${ifDefined(this.required)}"
                    minlength="${ifDefined(this.minLength)}"
                    maxlength="${ifDefined(this.maxLength)}"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    pattern="${ifDefined(this.pattern)}"
                    autocomplete="${ifDefined(this.autocomplete)}"
                    inputmode="${ifDefined(this.inputmode)}"
                    @focus="${this._handleTextFieldNativeFocus}"
                    @input="${this._handleTextFieldNativeInput}"
                    @blur="${this._handleTextFieldNativeBlur}"
                    @invalid="${this._handleTextFieldNativeInvalid}"
                >
                ${this.suffix?this.renderText({text:this.suffix}):nothing}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return (this.clearable&&this.value)||this.validationMessage||this.trailing?.length?html`
            <div class="md-text-field__trailing">
                ${(this.clearable&&this.value)?this.renderIconButton({icon:'cancel',color:'standard',onTextFieldIconButtonClick:this._handleTextFieldIconButtonClearClick}):nothing}
                ${this.validationMessage?this.renderIcon({icon:'error',class:{'md-text-field__icon--error':true}}):nothing}
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `:nothing
    }

    /* prettier-ignore */
    render(){
        const currentLength = this.value?.length
        return html`
            ${this.label?html`<label class="md-text-field__label">${this.label}</label>`:nothing}
            <div class="md-text-field__container">
                ${this.renderLeading()}
                ${this.renderContent()}
                ${this.renderTrailing()}
            </div>
            <div class="md-text-field__information">
                ${this.supporting||this.validationMessage?html`<div class="md-text-field__supporting">${this.validationMessage||this.supporting}</div>`:nothing}
                ${(this.maxLength&&currentLength>0)?html`<div class="md-text-field__counter">${currentLength}/${this.maxLength}</div>`:nothing}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-text-field");
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-text-field--${color}`, this.color === color);
            });
        }
        if (changedProperties.has("label")) {
            this.classList.toggle(`md-text-field--with-label`, !!this.label);
        }
        if (changedProperties.has("disabled")) {
            this.classList.toggle(`md-text-field--disabled`, !!this.disabled);
        }
        if (changedProperties.has("readonly")) {
            this.classList.toggle(`md-text-field--readonly`, !!this.readonly);
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultValue = this.defaultValue ?? this.value ?? "";

        const textFieldNative = this.textFieldNative.value;
        this.classList.toggle(`md-text-field--populated`, !!textFieldNative.value);
        this.style.setProperty("--md-comp-text-field-content-offset-left", this.textFieldContent.value.offsetLeft + "px");
    }

    formResetCallback(event) {
        this.value = this.defaultValue;
        const textFieldNative = this.textFieldNative.value;
        textFieldNative.value = this.defaultValue;
        this.classList.toggle(`md-text-field--populated`, !!this.value);

        this.validationMessage = "";
        this.classList.toggle(`md-text-field--error`, !!this.validationMessage);
    }

    _handleTextFieldNativeFocus(event) {
        this.classList.toggle(`md-text-field--focus`, true);
        this.classList.toggle(`md-text-field--focus-visible`, !this.textFieldNative.value.matches(":active"));

        this.emit("onTextFieldNativeFocus", { event, element: this });
    }

    _handleTextFieldNativeBlur(event) {
        this.classList.toggle(`md-text-field--focus`, false);
        this.classList.toggle(`md-text-field--focus-visible`, false);

        if (this.validateOnBlur) {
            this.validate();
        }

        this.emit("onTextFieldNativeBlur", { event, element: this });
    }

    _handleTextFieldNativeInput(event) {
        const textFieldNative = this.textFieldNative.value;
        this.value = textFieldNative.value;
        this.classList.toggle(`md-text-field--populated`, !!this.value);

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("onTextFieldNativeInput", { event, element: this });
    }

    _handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validate();
        this.emit("onTextFieldNativeInvalid", { event, element: this });
    }

    _handleTextFieldIconButtonClearClick(event) {
        const textFieldNative = this.textFieldNative.value;
        textFieldNative.value = "";
        this.value = "";
        this.classList.toggle(`md-text-field--populated`, !!this.value);
    }

    validate() {
        const textFieldNative = this.textFieldNative.value;
        this.validationMessage = textFieldNative.validationMessage;
        this.classList.toggle(`md-text-field--error`, !!this.validationMessage);
    }
}

customElements.define("md-text-field", MdTextField);

export { MdTextField };

```
### text-field
src\material\components\text-field\text-field.scss

```scss
@use "../../shared/mixins.scss";

.md-text-field {
    --md-comp-text-field-height: 56px;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    gap: 4px 0;
    position: relative;
    @include mixins.initialize();
}

.md-text-field__label {
    margin: 0 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-body-small();
}

.md-text-field__container {
    display: flex;
    align-items: flex-start;
    gap: 0 16px;
    border-radius: var(--md-sys-shape-corner-extra-small);
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--md-sys-color-on-surface-variant);
}

.md-text-field__leading {
    display: inline-flex;
    align-items: center;
    padding: calc((var(--md-comp-text-field-height) - 24px) / 2) 12px;
    gap: 0 12px;

    + .md-text-field__content {
        margin-left: -28px;
    }
}

.md-text-field__icon-button {
    margin: -8px;
}

// .md-text-field__icon {}

.md-text-field__content {
    flex: 1;
    display: inline-flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    + .md-text-field__trailing {
        margin-left: -28px;
    }
}

.md-text-field__text {
    padding: 0 16px;
    margin: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) 0;
    @include mixins.typescale-body-large();

    + .md-text-field__native {
        margin-left: -32px;
    }
}

.md-text-field__native {
    flex: 1;
    appearance: none;
    width: 100%;
    padding: 0 16px;
    margin: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) 0;
    @include mixins.typescale-body-large();
    background-color: transparent;
    color: inherit;
    outline: none;

    + .md-text-field__text {
        margin-left: -32px;
    }

    &::placeholder {
        @include mixins.typescale-body-large();
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &::-webkit-inner-spin-button {
        display: none;
    }

    &::-webkit-search-cancel-button {
        display: none;
    }

    &::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
    }
    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-week-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-minute-field {
        padding: 0;
    }
    &:-webkit-autofill::first-line,
    &:-webkit-autofill::first-line,
    &:-webkit-autofill::first-line {
        @include mixins.typescale-body-large();
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 1000px var(--md-sys-color-surface-container-highest) inset;
        -webkit-text-fill-color: var(--md-sys-color-on-surface);
        caret-color: var(--md-sys-color-on-surface);
        transition: background-color 5000s ease-in-out 0s;
    }
}

.md-text-field__trailing {
    display: inline-flex;
    align-items: center;
    padding: calc((var(--md-comp-text-field-height) - 24px) / 2) 12px;
    gap: 0 12px;
}

.md-text-field__information {
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 0 16px;
}

.md-text-field__supporting {
    @include mixins.typescale-body-small();
}

.md-text-field__counter {
    margin-left: auto;
    @include mixins.typescale-body-small();
}

// .md-text-field--populated {}

.md-text-field--focus {
    .md-text-field__label {
        color: var(--md-sys-color-primary);
    }
}

.md-text-field--focus-visible {
    .md-text-field__container {
        outline: 2px solid var(--md-sys-color-outline);
        outline-offset: -2px;
    }
}

.md-text-field--error {
    .md-text-field__label {
        color: var(--md-sys-color-error);
    }

    .md-text-field__supporting {
        color: var(--md-sys-color-error);
    }

    .md-text-field__icon--error {
        color: var(--md-sys-color-error);
    }
}

.md-text-field--disabled {
    pointer-events: none;

    .md-text-field__label {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__container {
        background-color: var(--md-sys-color-on-surface4);
    }

    .md-text-field__native {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__text {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__icon {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__icon-button {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__supporting {
        color: var(--md-sys-color-on-surface38);
    }
}

.md-text-field--filled {
    &.md-text-field--with-label {
        .md-text-field__label {
            position: absolute;
            pointer-events: none;
            left: var(--md-comp-text-field-content-offset-left, 0);
            margin-top: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            margin-bottom: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            @include mixins.typescale-body-large();
            will-change: margin, font-size, line-height, color;
            transition-property: margin, font-size, line-height, color;
            transition-duration: var(--md-sys-motion-duration-short1);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
        .md-text-field__text,
        .md-text-field__native::placeholder,
        .md-text-field__native::-webkit-datetime-edit {
            color: transparent;
        }
    }

    .md-text-field__container {
        border-radius: var(--md-sys-shape-corner-extra-small-top);
        box-shadow: inset 0 -1px 0 0 var(--md-sys-color-on-surface-variant);
    }
    &.md-text-field--populated,
    &.md-text-field--focus {
        &.md-text-field--with-label {
            .md-text-field__label {
                margin-top: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-small-line-height)) / 2) - 8px);
                margin-bottom: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-small-line-height)) / 2) + 8px);
                @include mixins.typescale-body-small();
            }
            .md-text-field__text,
            .md-text-field__native {
                margin-top: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) + 8px);
                margin-bottom: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) - 8px);
            }
            .md-text-field__text,
            .md-text-field__native::placeholder,
            .md-text-field__native::-webkit-datetime-edit {
                color: var(--md-sys-color-on-surface-variant);
            }
        }
    }

    &.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 -2px 0 0 var(--md-sys-color-primary);
        }
    }

    &.md-text-field--error {
        .md-text-field__container {
            box-shadow: inset 0 -1px 0 0 var(--md-sys-color-error);
        }
    }

    &.md-text-field--error.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 -2px 0 0 var(--md-sys-color-error);
        }
    }
}

.md-text-field--outlined {
    &.md-text-field--with-label {
        .md-text-field__label {
            margin-left: 12px;
            margin-right: 12px;
            padding-left: 4px;
            padding-right: 4px;
            margin-top: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            margin-bottom: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            position: absolute;
            z-index: 1;
            pointer-events: none;
            left: var(--md-comp-text-field-content-offset-left, 0);
            @include mixins.typescale-body-large();
            will-change: margin, font-size, line-height, color, top, left;
            transition-property: margin, font-size, line-height, color, top, left;
            transition-duration: var(--md-sys-motion-duration-short1);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));

            &:before {
                content: "";
                width: 0%;
                height: var(--md-sys-typescale-body-small-line-height);
                position: absolute;
                z-index: -1;
                left: 50%;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);
                background-color: var(--md-sys-color-background);
                color: var(--md-sys-color-on-background);
                will-change: width;
                transition-property: width;
                transition-duration: var(--md-sys-motion-duration-short1);
                transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
            }
        }
        .md-text-field__text,
        .md-text-field__native::placeholder,
        .md-text-field__native::-webkit-datetime-edit {
            color: transparent;
        }
    }

    .md-text-field__container {
        border-radius: var(--md-sys-shape-corner-extra-small);
        background-color: transparent;
        box-shadow: inset 0 0 0 1px var(--md-sys-color-on-surface-variant);
    }
    &.md-text-field--populated,
    &.md-text-field--focus {
        &.md-text-field--with-label {
            .md-text-field__label {
                margin-top: 0;
                margin-bottom: 0;
                top: calc(0px - (var(--md-sys-typescale-body-small-line-height) / 2));
                left: 0;
                @include mixins.typescale-body-small();

                &:before {
                    width: 100%;
                }
            }
            .md-text-field__text,
            .md-text-field__native::placeholder,
            .md-text-field__native::-webkit-datetime-edit {
                color: var(--md-sys-color-on-surface-variant);
            }
        }
    }

    &.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 0 0 2px var(--md-sys-color-primary);
        }
    }

    &.md-text-field--error {
        .md-text-field__container {
            box-shadow: inset 0 0 0 1px var(--md-sys-color-error);
        }
    }

    &.md-text-field--error.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 0 0 2px var(--md-sys-color-error);
        }
    }
}

```
## src\material\components\textarea

### textarea
src\material\components\textarea\textarea.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdTextField } from "../text-field/text-field.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

class MdTextarea extends MdTextField {
    static properties = {
        ...MdTextField.properties,
        rows: { type: Number },
        cols: { type: Number },
    };

    /* prettier-ignore */
    renderContent(){
        return html`
            <div
                ${ref(this.textFieldContent)}
                class="md-text-field__content"
            >
                ${this.prefix?this.renderText({text:this.prefix}):nothing}
                <textarea
                    aria-label="${ifDefined(this.ariaLabel || this.name || 'textarea')}"
                    ${ref(this.textFieldNative)}
                    class="md-text-field__native"
                    name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                    rows="${ifDefined(this.rows)}"
                    cols="${ifDefined(this.cols)}"
                    placeholder="${ifDefined(this.placeholder)}"
                    ?disabled="${ifDefined(this.disabled)}"
                    ?readonly="${ifDefined(this.readonly)}"
                    ?required="${ifDefined(this.required)}"
                    minlength="${ifDefined(this.minLength)}"
                    maxlength="${ifDefined(this.maxLength)}"
                    autocomplete="${ifDefined(this.autocomplete)}"
                    @focus="${this._handleTextFieldNativeFocus}"
                    @input="${this._handleTextFieldNativeInput}"
                    @blur="${this._handleTextFieldNativeBlur}"
                    @invalid="${this._handleTextFieldNativeInvalid}"
                ></textarea>
                ${this.suffix?this.renderText({text:this.suffix}):nothing}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-textarea");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-textarea");
    }
}

customElements.define("md-textarea", MdTextarea);

export { MdTextarea };

```
### textarea
src\material\components\textarea\textarea.scss

```scss
@use "../../shared/mixins.scss";

.md-textarea {
    @include mixins.initialize();

    .md-text-field__native {
        resize: none;
        field-sizing: content;
    }
}

```
## src\material\components\tree

### tree
src\material\components\tree\tree.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

class MdTree extends MdListElement {
    constructor() {
        super();
        this.type = "tree";
    }

    /* prettier-ignore */
    render(){
        const rootHasBranch = this._tree.some((node) => node.children?.length);
        return repeat(this._list, (item) => item[this.valueField], (item) => html`
            <md-list-item
                style="${styleMap({
                    '--md-comp-list-item-level': item.level,
                })}"
                .item="${item}"
                .label="${item[this.labelField]}"
                .leading="${this._getLeadingItem(item,rootHasBranch)}"
                @click="${this._handleListItemClick}"
            ></md-list-item>
        `)
    }

    _getLeadingItem(item, rootHasBranch) {
        const leading = [];

        if (rootHasBranch) {
            if (item.hasChildren) {
                leading.push({ component: "icon-button", width: "narrow", color: "standard", icon: item.expanded ? "keyboard_arrow_down" : "keyboard_arrow_right" });
            } else {
                leading.push({ component: "icon", icon: "", style: { width: "32px" } });
            }
        }

        leading.push({ component: "icon", icon: item.hasChildren ? (this.expandedValues.has(item[this.valueField]) ? "folder_open" : "folder") : "draft" });
        return leading;
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;

        if (item.hasChildren) {
            if (this.expandedValues.has(item[this.valueField])) {
                this.expandedValues.delete(item[this.valueField]);
            } else {
                this.expandedValues.add(item[this.valueField]);
            }
        }

        this.selectedValues.clear();
        this.selectedValues.add(item[this.valueField]);

        this._setItems();
    }
}

customElements.define("md-tree", MdTree);

export { MdTree };

```
### tree
src\material\components\tree\tree.scss

```scss

```
## src\material\components\typography

### typography
src\material\components\typography\typography.scss

```scss
@use "../../shared/mixins.scss";

.md-typography--display-large {
    @include mixins.typescale-display-large();
}

.md-typography--display-medium {
    @include mixins.typescale-display-medium();
}

.md-typography--display-small {
    @include mixins.typescale-display-small();
}

.md-typography--headline-large {
    @include mixins.typescale-headline-large();
}

.md-typography--headline-medium {
    @include mixins.typescale-headline-medium();
}

.md-typography--headline-small {
    @include mixins.typescale-headline-small();
}

.md-typography--title-large {
    @include mixins.typescale-title-large();
}

.md-typography--title-medium {
    @include mixins.typescale-title-medium();
}

.md-typography--title-small {
    @include mixins.typescale-title-small();
}

.md-typography--body-large {
    @include mixins.typescale-body-large();
}

.md-typography--body-medium {
    @include mixins.typescale-body-medium();
}

.md-typography--body-small {
    @include mixins.typescale-body-small();
}

.md-typography--label-large {
    @include mixins.typescale-label-large();
}

.md-typography--label-medium {
    @include mixins.typescale-label-medium();
}

.md-typography--label-small {
    @include mixins.typescale-label-small();
}

```
## src\material\controller

### ripple
src\material\controller\ripple.js

```js
class RippleController {
    constructor(host, options = {}) {
        this.host = host;

        this.setOptions(options);

        if (this.register) {
            (this.host = host).addController(this);
        }

        this._handlePointerenter = this._handlePointerenter.bind(this);
        this._handlePointerleave = this._handlePointerleave.bind(this);
        this._handlePointerdown = this._handlePointerdown.bind(this);
        this._handlePointerup = this._handlePointerup.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
    }

    setOptions(options) {
        this.centered = options.centered ?? this.centered ?? false;
        this.radius = options.radius ?? this.radius;
        this.unbounded = options.unbounded ?? this.unbounded ?? false;
        this.trigger = options.trigger ?? this.trigger;
        this.container = options.container ?? this.container;
        this.register = options.register ?? this.register ?? true;
    }

    _handlePointerenter(event) {
        this.containerElement.classList.add("md-ripple--hover");
    }

    _handlePointerleave(event) {
        this.containerElement.classList.remove("md-ripple--hover");
    }

    _handlePointerdown(event) {
        window.addEventListener("pointerup", this._handlePointerup, { passive: true });
        window.addEventListener("touchend", this._handlePointerup, { passive: true });

        this.containerElement.classList.add("md-ripple--press");

        const rect = this.containerElement.getBoundingClientRect();

        let radius;
        if (this.radius) {
            radius = (this.radius / rect.width) * 100;
        } else {
            const hypotenuse = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
            radius = (hypotenuse / rect.width) * 100;
        }

        this.containerElement.style.setProperty("--md-comp-ripple-radius", `${radius}%`);

        if (!this.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / radius);
            const y = (0.5 - top) * ((100 / radius) * (rect.height / rect.width));

            this.containerElement.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-top", top * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    }

    _handlePointerup(event) {
        this.containerElement.classList.remove("md-ripple--press");

        window.removeEventListener("pointerup", this._handlePointerup);
        window.removeEventListener("touchend", this._handlePointerup);
    }

    _handleFocus(event) {
        this.containerElement.classList.add("md-ripple--focus");
    }

    _handleBlur(event) {
        this.containerElement.classList.remove("md-ripple--focus");
    }

    init() {
        this.containerElement = this.container ? (typeof this.container === "string" ? this.host.querySelector(this.container) : this.container) : this.host;
        this.triggerElement = this.trigger ? (typeof this.trigger === "string" ? this.host.querySelector(this.trigger) : this.trigger) : this.host;

        this.containerElement.classList.add("md-ripple");

        if (!this.unbounded) {
            this.containerElement.classList.add("md-ripple--bounded");
        }

        this.triggerElement.classList.add("md-ripple--trigger");

        this.triggerElement.addEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.addEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.addEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.addEventListener("focus", this._handleFocus);
        this.triggerElement.addEventListener("blur", this._handleBlur);
    }

    destroy() {
        this.containerElement.classList.remove("md-ripple");
        this.containerElement.classList.remove("md-ripple--bounded");
        this.containerElement.classList.remove("md-ripple--hover");
        this.containerElement.classList.remove("md-ripple--press");
        this.containerElement.classList.remove("md-ripple--focus");

        this.containerElement.style.removeProperty("--md-comp-ripple-radius");
        this.containerElement.style.removeProperty("--md-comp-ripple-left");
        this.containerElement.style.removeProperty("--md-comp-ripple-top");
        this.containerElement.style.removeProperty("--md-comp-ripple-x");
        this.containerElement.style.removeProperty("--md-comp-ripple-y");

        this.triggerElement.classList.remove("md-ripple--trigger");

        this.triggerElement.removeEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.removeEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.removeEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.removeEventListener("focus", this._handleFocus);
        this.triggerElement.removeEventListener("blur", this._handleBlur);

        this.containerElement = null;
        this.triggerElement = null;
    }

    reinit(options) {
        this.setOptions(options);
        this.host.updateComplete.then(() => {
            this.destroy();
            this.init();
        });
    }

    hostConnected() {
        this.host.updateComplete.then(() => {
            this.init();
        });
    }

    hostDisconnected() {
        this.destroy();
    }
}

export { RippleController };

```
### ripple
src\material\controller\ripple.scss

```scss
@keyframes ripple-out {
    0% {
        width: 0;
    }

    100% {
    }
}

.md-ripple {
    --md-comp-ripple-radius: 141.4213562373095%;
    --md-comp-ripple-left: 50%;
    --md-comp-ripple-top: 50%;
    --md-comp-ripple-x: 0%;
    --md-comp-ripple-y: 0%;
    position: relative;
    isolation: isolate;

    &:after {
        content: "";
        width: var(--md-comp-ripple-radius);
        aspect-ratio: 1/1;
        border-radius: var(--md-sys-shape-corner-full);
        position: absolute;
        left: var(--md-comp-ripple-left);
        top: var(--md-comp-ripple-top);
        z-index: 1;
        transform: translate3d(-50%, -50%, 0) translate3d(var(--md-comp-ripple-x), var(--md-comp-ripple-y), 0);
        background-color: currentColor;
        opacity: 0;
        pointer-events: none;
    }
}

.md-ripple--bounded {
    overflow: hidden;
}

.md-ripple--trigger {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

.md-ripple--focus {
    &::after {
        opacity: 10%;
    }
}

.md-ripple--press {
    &::after {
        opacity: 10%;
        animation-name: ripple-out;
        animation-duration: var(--md-sys-motion-duration-short3);
        animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}

.md-ripple--hover {
    &::after {
        opacity: 8%;
    }
}

.md-ripple--drag {
    &::after {
        opacity: 16%;
    }
}

.md-ripple--disabled {
    pointer-events: none;
}

```
### virtual-scroll
src\material\controller\virtual-scroll.js

```js
class VirtualScrollController {
    constructor(host, options = {}) {
        this.host = host;

        this.setOptions(options);

        if (this.register) {
            (this.host = host).addController(this);
        }

        this._handleScroll = this._handleScroll.bind(this);
        this._handleResizeObserver = this._handleResizeObserver.bind(this);
    }

    setOptions(options) {
        this.viewport = options.viewport ?? this.viewport ?? this.host;
        this.itemCount = options.itemCount ?? this.itemCount ?? 0;
        this.rowHeight = options.rowHeight ?? this.rowHeight ?? 56;
        this.nodePadding = options.nodePadding ?? this.nodePadding ?? 2;
        this.onUpdate = options.onUpdate ?? this.onUpdate ?? (() => {});
        this.register = options.register ?? this.register ?? true;
    }

    _update() {
        this.startNode = Math.max(0, Math.floor(this.viewport.scrollTop / this.rowHeight) - this.nodePadding);
        this.visibleNodesCount = Math.min(this.itemCount - this.startNode, Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.nodePadding);
        this.endNode = this.startNode + this.visibleNodesCount;
        this.offsetY = this.startNode * this.rowHeight;

        this.viewport.style.setProperty("--md-comp-virtual-scroll-content-translate-y", `${this.offsetY}px`);

        this.onUpdate({ controller: this });
    }

    _updateViewportHeight() {
        this.viewportHeight = this.viewport.clientHeight;
    }

    _updateTotalContentHeight() {
        this.totalContentHeight = this.itemCount * this.rowHeight;

        this.viewport.style.setProperty("--md-comp-virtual-scroll-total-content-height", `${this.totalContentHeight}px`);
    }

    _saveScrollPosition() {
        this.scrollTop = this.viewport.scrollTop;
    }

    _restoreScrollPosition() {
        if (this.scrollTop) {
            this.viewport.scrollTo({ top: this.scrollTop });
        }
    }

    _handleScroll() {
        // this._saveScrollPosition();
        window.requestAnimationFrame(() => {
            this._update();
        });
    }

    _handleResizeObserver(entries) {
        window.requestAnimationFrame(() => {
            this._updateViewportHeight();
            this._update();
        });
    }

    scrollTo(index, { behavior = "auto", align = "auto", offset = 0 } = {}) {
        const rowTop = this.rowHeight * index;
        const rowBottom = rowTop + this.rowHeight;
        const viewportTop = this.viewport.scrollTop;
        const viewportBottom = viewportTop + this.viewportHeight;

        let top = null;
        if (align === "center") {
            top = rowTop - this.viewportHeight / 2;
        } else if (align === "start") {
            top = rowTop;
        } else if (align === "end") {
            top = rowBottom - this.viewportHeight;
        } else {
            if (rowTop <= viewportTop) {
                top = rowTop;
            } else if (rowBottom >= viewportBottom) {
                top = rowBottom - this.viewportHeight;
            }
        }

        if (top !== null) {
            top += offset;

            this.viewport.scrollTo({ top, behavior });
        }
    }

    init() {
        this.viewport.classList.add("md-virtual-scroll");

        this._updateViewportHeight();
        this._updateTotalContentHeight();
        // this._restoreScrollPosition();

        this.viewport.addEventListener("scroll", this._handleScroll);

        this.resizeObserver = new ResizeObserver(this._handleResizeObserver);
        this.resizeObserver.observe(this.viewport);
    }

    destroy() {
        this.resizeObserver.disconnect();

        this.viewport.removeEventListener("scroll", this._handleScroll);
        this.viewport.style.removeProperty("--md-comp-virtual-scroll-total-content-height");
        this.viewport.classList.remove("md-virtual-scroll");
    }

    reinit(options) {
        this.setOptions(options);
        this.destroy();
        this.init();
    }

    hostConnected() {
        this.host.updateComplete.then(() => {
            this.init();
        });
    }

    hostDisconnected() {
        this.destroy();
    }
}

export { VirtualScrollController };

```
### virtual-scroll
src\material\controller\virtual-scroll.scss

```scss
.md-virtual-scroll {
    display: block;
    height: 100%;
    overflow: auto;
    position: relative;

    &::before {
        content: "";
        height: var(--md-comp-virtual-scroll-total-content-height);
        width: 1px;
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
    }
}

```
## src\material\core

### breakpoint-observer
src\material\core\breakpoint-observer.js

```js
import { MediaObserver } from "./observer.js";

class BreakpointObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "expanded", query: "(min-width: 840px)" },
            { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
            { name: "compact", query: "(max-width: 599px)" },
        ]);
    }
}

export { BreakpointObserver };

```
### localization
src\material\core\localization.js

```js
import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";
const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

export { sourceLocale, targetLocales, getLocale, setLocale };

```
### observer
src\material\core\observer.js

```js
class MediaObserver {
    constructor(callback = () => {}, list) {
        this.callback = callback;
        this.list = list;
        this.observe = this.observe.bind(this);
    }

    observe(list) {
        if (!this.list) {
            this.list = list;
        }
        this.disconnect();
        this.item = this.list.find((item) => {
            item.mql = window.matchMedia(item.query);
            return item.mql.matches;
        });
        this.callback(this.item);
        this.item.mql.addEventListener("change", this.observe);
    }

    disconnect() {
        if (this.item?.mql) {
            this.item.mql.removeEventListener("change", this.observe);
        }
    }
}

export { MediaObserver };

```
### orientation-observer
src\material\core\orientation-observer.js

```js
import { MediaObserver } from "./observer.js";

class OrientationObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "landscape", query: "(orientation: landscape)" },
            { name: "portrait", query: "(orientation: portrait)" },
        ]);
    }
}

export { OrientationObserver };

```
### positioner
src\material\core\positioner.js

```js
const STRATEGIES = {
    "above-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left, x: 0, y: 100 }),
    above: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 100 }),
    "above-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.right - containerRect.width, x: 100, y: 100 }),

    "after-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.right + offset.left, x: 0, y: 0 }),
    after: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.right + offset.left, x: 0, y: 50 }),
    "after-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.right + offset.left, x: 0, y: 100 }),

    "below-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left, x: 0, y: 0 }),
    below: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 0 }),
    "below-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 0 }),

    "before-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 0 }),
    before: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 50 }),
    "before-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 100 }),

    "top-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.left, x: 0, y: 0 }),
    top: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 0 }),
    "top-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top + offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 0 }),

    "right-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 0 }),
    right: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 50 }),
    "right-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.right - containerRect.width - offset.right, x: 0, y: 100 }),

    "bottom-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.left, x: 0, y: 100 }),
    bottom: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 100 }),
    "bottom-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height - offset.top, left: triggerRect.right - containerRect.width, x: 100, y: 100 }),

    "left-start": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top, left: triggerRect.left + offset.left, x: 100, y: 0 }),
    left: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left + offset.left, x: 100, y: 50 }),
    "left-end": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom - containerRect.height, left: triggerRect.left + offset.left, x: 100, y: 100 }),

    "north-east": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.right + offset.left, x: 0, y: 100 }),
    "south-east": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.right + offset.left, x: 0, y: 0 }),
    "south-west": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.bottom + offset.top, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 0 }),
    "north-west": ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - containerRect.height - offset.bottom, left: triggerRect.left - containerRect.width - offset.right, x: 100, y: 100 }),

    center: ({ triggerRect, containerRect, offset } = {}) => ({ top: triggerRect.top - (containerRect.height - triggerRect.height) / 2, left: triggerRect.left - (containerRect.width - triggerRect.width) / 2, x: 50, y: 50 }),
};

const PLACEMENTS = Object.keys(STRATEGIES);

function _getStrategy(placement) {
    return STRATEGIES[placement];
}

function _getOffset(offset = 0) {
    const arr = Array.isArray(offset) ? offset : [offset];
    const top = arr[0] ?? 0;
    const right = arr[1] ?? arr[0] ?? 0;
    const bottom = arr[2] ?? arr[0] ?? 0;
    const left = arr[3] ?? arr[1] ?? arr[0] ?? 0;
    return { top, right, bottom, left };
}

function _getBoundary(element) {
    let parentElement = element;
    while (parentElement) {
        const style = window.getComputedStyle(parentElement);
        if (/(auto|scroll)/.test(`${style.overflow} ${style.overflowX} ${style.overflowY}`)) {
            return parentElement;
        }
        parentElement = parentElement.parentElement;
    }
    return document.body;
}

function _getRect(element) {
    if (!element) return { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, x: 0, y: 0 };

    if ("clientX" in element && "clientY" in element) {
        const width = element.width ?? 0;
        const height = element.height ?? 0;
        const clientX = element.clientX ?? 0;
        const clientY = element.clientY ?? 0;
        return {
            width,
            height,
            left: clientX,
            top: clientY,
            right: clientX + width,
            bottom: clientY + height,
            x: element.x ?? clientX,
            y: element.y ?? clientY,
        };
    }
    return element.getBoundingClientRect();
}

/**
 * Set position of container relative to trigger
 * @param {HTMLElement|Event} trigger - Trigger element or event
 * @param {HTMLElement} container - Element to position
 * @param {Object} options - Positioning options
 * @param {string|string[]} options.placement - Single placement or array of fallbacks
 * @param {number|number[]} options.offset - Offset in pixels
 */
function setPosition(trigger, container, options = {}) {
    const boundary = _getBoundary(container);

    const triggerRect = _getRect(trigger);
    const containerRect = _getRect(container);
    const boundaryRect = _getRect(boundary);

    const offset = _getOffset(options.offset);

    let placement, top, right, bottom, left, x, y;

    const placements = Array.isArray(options.placement) ? options.placement : [options.placement];
    for (let index = 0; index < placements.length; index++) {
        placement = placements[index];
        const strategy = _getStrategy(placement);
        const position = strategy({ triggerRect, containerRect, offset });

        top = position.top;
        right = position.left + containerRect.width;
        bottom = position.top + containerRect.height;
        left = position.left;
        x = position.x;
        y = position.y;

        const isExceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
        if (!isExceed) {
            break;
        }
    }

    if (left < boundaryRect.left) {
        left = Math.max(left, boundaryRect.left);
    }
    if (top < boundaryRect.top) {
        top = Math.max(top, boundaryRect.top);
    }
    if (right > boundaryRect.right) {
        left = Math.min(right - containerRect.width, boundaryRect.right - containerRect.width);
    }
    if (bottom > boundaryRect.bottom) {
        top = Math.min(bottom - containerRect.height, boundaryRect.bottom - containerRect.height);
    }

    container.style.setProperty("top", `${top}px`);
    container.style.setProperty("left", `${left}px`);
    container.style.setProperty("transform-origin", `${x}% ${y}%`);

    return { placement, top, right, bottom, left, x, y };
}

export { PLACEMENTS, setPosition };

```
### query-builder
src\material\core\query-builder.js

```js
class QueryBuilder {
    constructor(searchParams, options = {}) {
        this.searchParams = searchParams ?? new URLSearchParams();
        this.knownTypes = {
            _page: Number,
            _limit: Number,
            _start: Number,
            _end: Number,
        };
        this._limit = options._limit ?? 10;
        this._end = options._end ?? 10;
    }

    search(q) {
        if (q && String(q).trim() !== "") {
            this.searchParams.set("q", q.trim());
        } else {
            this.searchParams.delete("q");
        }
        return this;
    }

    filter(name, value, operator = "") {
        if (!name) {
            const systemKeys = ["_sort", "_order", "_page", "_limit", "_start", "_end", "q"];
            [...this.searchParams.keys()].forEach((key) => {
                if (!systemKeys.includes(key)) {
                    this.searchParams.delete(key);
                }
            });
            return this;
        }
        const keyName = operator ? `${name}_${operator}` : name;
        if (value !== undefined && value !== null && value !== "") {
            this.searchParams.append(keyName, value);
        } else {
            this.searchParams.delete(keyName);
        }
        return this;
    }

    sort(_sort, _order) {
        if (_sort) {
            const _sorts = this.searchParams.getAll("_sort");
            const _orders = this.searchParams.getAll("_order");
            const foundIndex = _sorts.indexOf(_sort);
            if (_order) {
                if (foundIndex === -1) {
                    this.searchParams.append("_sort", _sort);
                    this.searchParams.append("_order", _order);
                } else {
                    this.searchParams.delete("_sort");
                    this.searchParams.delete("_order");
                    _sorts.forEach((s, idx) => {
                        this.searchParams.append("_sort", s);
                        this.searchParams.append("_order", idx === foundIndex ? _order : _orders[idx] || "asc");
                    });
                }
            } else {
                this.searchParams.delete("_sort");
                this.searchParams.delete("_order");
                _sorts.forEach((s, idx) => {
                    if (idx !== foundIndex) {
                        this.searchParams.append("_sort", s);
                        this.searchParams.append("_order", _orders[idx] || "asc");
                    }
                });
            }
        } else {
            this.searchParams.delete("_sort");
            this.searchParams.delete("_order");
        }
        return this;
    }

    paginate(_page, _limit = this._limit) {
        this.searchParams.delete("_start");
        this.searchParams.delete("_end");
        if (_page) {
            this.searchParams.set("_page", _page);
            this.searchParams.set("_limit", _limit);
        } else {
            this.searchParams.delete("_page");
            this.searchParams.delete("_limit");
        }
        return this;
    }

    slice(_start, _end = this._end) {
        this.searchParams.delete("_page");
        this.searchParams.delete("_limit");
        if (_start !== undefined && _start !== null) {
            this.searchParams.set("_start", _start);
            this.searchParams.set("_end", _end);
        } else {
            this.searchParams.delete("_start");
            this.searchParams.delete("_end");
        }
        return this;
    }

    clear() {
        [...this.searchParams.keys()].forEach((key) => {
            this.searchParams.delete(key);
        });
        return this;
    }

    toString() {
        const str = this.searchParams.toString();
        return str ? `?${str}` : "";
    }

    toJSON() {
        const query = {};
        for (const [key, value] of this.searchParams.entries()) {
            let parsedValue = value;
            if (this.knownTypes[key]) {
                parsedValue = this.knownTypes[key](value);
            } else if (!isNaN(Number(value)) && value.trim() !== "") {
                parsedValue = Number(value);
            }
            if (query[key] !== undefined) {
                if (Array.isArray(query[key])) {
                    query[key].push(parsedValue);
                } else {
                    query[key] = [query[key], parsedValue];
                }
            } else {
                query[key] = parsedValue;
            }
        }
        return query;
    }
}

export { QueryBuilder };

```
### router
src\material\core\router.js

```js
import { QueryBuilder } from "./query-builder.js";

class Router {
    constructor(routes, options = {}) {
        this.routes = [...routes];

        const { timeout = 5000, historyApiFallback = false, base = "http://localhost" } = options;

        this.timeout = timeout;
        this.historyApiFallback = historyApiFallback;
        this.base = base;

        this.url = new URL("/", this.base);
        this.queryBuilder = new QueryBuilder(this.url.searchParams);
        this.query = {};
        this.params = {};
        this.controller = null;
    }

    _getRoutes(routes = this.routes, parent = null, result = []) {
        this.params = {};

        for (const route of routes) {
            if (!route.input) {
                route.parent = parent;
                route.input = `${route.parent?.input ?? "/"}/${route.path}`.replace(/\/+/g, "/").replace(/(?!^)\/$/, "");
                route.pattern = new URLPattern(route.input, this.base);
            }

            if (route.pattern.test(this.url.pathname, this.base)) {
                const execResult = route.pattern.exec(this.url.pathname, this.base);
                this.params = execResult?.pathname?.groups ?? {};
                return [...result, route];
            }

            if (route?.children && route.children?.length) {
                const matches = this._getRoutes(route.children, route, [...result, route]);
                if (matches) {
                    return matches;
                }
            }
        }
        return null;
    }

    async _beforeLoad(route) {
        return new Promise((resolve, reject) => {
            const next = (err) => {
                clearTimeout(timeout);

                if (this.controller) {
                    this.controller.signal.removeEventListener("abort", handleAbort);
                }

                if (err) reject(err);
                else resolve();
            };

            const handleTimeout = () => {
                next(new Error(`beforeLoad timeout on path: ${route.input}`));
            };

            const timeout = setTimeout(handleTimeout, this.timeout);

            const handleAbort = (event) => {
                next(event);
            };

            if (this.controller) {
                this.controller.signal.addEventListener("abort", handleAbort);
            }

            route.beforeLoad(this, next);
        });
    }

    async _getOutlet(route, container) {
        return new Promise((resolve, reject) => {
            let outlet;

            const target = route.outlet ? document.body : container;
            const selector = route.outlet ? `md-outlet[name="${route.outlet}"]` : "md-outlet:not([name])";

            const resolveOutlet = () => {
                outlet = target.querySelector(selector);
                if (outlet) {
                    clearTimeout(timeout);
                    observer.disconnect();
                    resolve(outlet);
                }
            };

            const observer = new MutationObserver(resolveOutlet);
            observer.observe(target, {
                childList: true,
                subtree: true,
            });

            const rejectOutlet = () => {
                observer.disconnect();
                reject(new Error(`Outlet [${selector}] not found for route: ${route.input}`));
            };
            const timeout = setTimeout(rejectOutlet, this.timeout);

            resolveOutlet();
        });
    }

    async _renderComponent(route) {
        if (!route.component) {
            if (!route.load) {
                throw new Error(`route.load() not set for path: ${route.input}`);
            }

            route.component = await route.load(this);
        }

        if (!route.component) {
            throw new Error(`route.component not resolved for path: ${route.input}`);
        }

        const container = route.parent?.component ?? document.body;
        const outlet = await this._getOutlet(route, container);

        if (!route.component.isConnected) {
            route.component.isComponent = true;
            route.component.router = this;
            route.component.route = route;

            outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
        }
    }

    _removeComponent(activeRoutes = []) {
        const outlets = Array.from(document.body.querySelectorAll("md-outlet"));
        for (const outlet of outlets) {
            let nextElement = outlet.nextElementSibling;
            while (nextElement) {
                if (nextElement.isComponent && !activeRoutes.find((route) => nextElement === route.component) && !outlets.find((o) => nextElement === o)) {
                    const toRemove = nextElement;
                    nextElement = nextElement.nextElementSibling;
                    toRemove.remove();
                } else {
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
    }

    _parseURL() {
        if (this.historyApiFallback) {
            return URL.parse(window.location.href);
        } else {
            return URL.parse(window.location.hash.slice(1), this.base);
        }
    }

    async _handleNavigation() {
        // performance.mark("onNavigationStart");
        this.emit("onNavigationStart", this);

        const { pathname, search, hash } = this._parseURL();
        this.url.pathname = pathname;
        this.url.search = search;
        this.url.hash = hash;
        this.query = this.queryBuilder.toJSON();

        const routes = this._getRoutes();
        if (!routes || routes.length === 0) {
            this.emit("onNavigationError", new Error(`404 Not Found: ${this.url.pathname}`));
            return;
        }

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }
        this.controller = new AbortController();

        for (const route of routes) {
            if (route.redirectTo) {
                return this.navigate(route.redirectTo);
            }

            if (route.beforeLoad) {
                try {
                    this.emit("onGuardsCheckStart", this);
                    await this._beforeLoad(route);
                    this.emit("onGuardsCheckEnd", this);
                } catch (error) {
                    if (error.type === "abort" || error.name === "AbortError") {
                        return;
                    } else {
                        this.emit("onNavigationError", error);
                        throw error;
                    }
                }
            }

            try {
                await this._renderComponent(route);
            } catch (err) {
                this.emit("onNavigationError", err);
                throw err;
            }
        }

        this._removeComponent(routes);

        this.emit("onNavigationEnd", this);
        // performance.mark("onNavigationEnd");
        // performance.measure("measureNavigation", "onNavigationStart", "onNavigationEnd");
        // performance.clearMarks("onNavigationStart");
        // performance.clearMarks("onNavigationEnd");
        // performance.clearMeasures("measureNavigation");
    }

    navigate(url, options = {}) {
        let targetUrl = url;

        if (!targetUrl) {
            targetUrl = `${this.url.pathname}${this.url.search}${this.url.hash}`;
        }

        if (this.historyApiFallback) {
            if (options.replace) {
                window.history.replaceState({}, "", targetUrl);
            } else {
                window.history.pushState({}, "", targetUrl);
            }

            this._handleNavigation();
        } else {
            window.location.hash = targetUrl;
        }
    }

    _handleNavigate(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (!routerLink) return;

        event.preventDefault();
        const url = routerLink.getAttribute("routerLink");
        this.navigate(url);
    }

    listen() {
        if (document.readyState === "loading") {
            window.addEventListener("DOMContentLoaded", () => this._handleNavigation());
        } else {
            this._handleNavigation();
        }

        if (this.historyApiFallback) {
            window.addEventListener("popstate", () => this._handleNavigation());
        } else {
            window.addEventListener("hashchange", () => this._handleNavigation());
        }

        window.addEventListener("click", (event) => this._handleNavigate(event));
    }

    on(type, listener) {
        window.addEventListener(type, listener);
    }

    off(type, listener) {
        window.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    search(...args) {
        this.queryBuilder.search(...args);
        return this;
    }

    filter(...args) {
        this.queryBuilder.filter(...args);
        return this;
    }

    sort(...args) {
        this.queryBuilder.sort(...args);
        return this;
    }

    paginate(...args) {
        this.queryBuilder.paginate(...args);
        return this;
    }

    slice(...args) {
        this.queryBuilder.slice(...args);
        return this;
    }

    hash(hash) {
        this.url.hash = hash;
        return this;
    }

    clear(...args) {
        this.url.hash = "";
        this.queryBuilder.clear(...args);
        return this;
    }

    reload(force = false) {
        if (force) {
            window.location.reload();
        } else {
            this._handleNavigation();
        }
    }

    back() {
        window.history.back();
    }

    forward() {
        window.history.forward();
    }
}

export { Router };

```
### scheme-observer
src\material\core\scheme-observer.js

```js
import { MediaObserver } from "./observer.js";

class SchemeObserver extends MediaObserver {
    constructor(callback, list) {
        super(callback, [
            { name: "light", query: "(prefers-color-scheme: light)" },
            { name: "dark", query: "(prefers-color-scheme: dark)" },
        ]);
    }
}

export { SchemeObserver };

```
### store
src\material\core\store.js

```js
class Store {
    constructor(docs = [], options = {}) {
        this.primaryKey = options.primaryKey ?? "id";
        this.load(docs);
    }

    _rebuildIndex() {
        this.searchIndex = this._buildSearchIndex(this.docs);
    }

    _updateIndexForDoc(doc) {
        const flatValues = this._flattenObject(doc);
        flatValues.forEach((value) => {
            if (value && typeof value === "string") {
                const words = value.toLowerCase().split(/\s+/);
                words.forEach((word) => {
                    if (!this.searchIndex.has(word)) {
                        this.searchIndex.set(word, new Set());
                    }
                    this.searchIndex.get(word).add(doc[this.primaryKey]);
                });
            }
        });
    }

    _removeFromIndex(doc) {
        const flatValues = this._flattenObject(doc);
        flatValues.forEach((value) => {
            if (value && typeof value === "string") {
                const words = value.toLowerCase().split(/\s+/);
                words.forEach((word) => {
                    const ids = this.searchIndex.get(word);
                    if (ids) {
                        ids.delete(doc[this.primaryKey]);
                        if (ids.size === 0) {
                            this.searchIndex.delete(word);
                        }
                    }
                });
            }
        });
    }

    _getValueByPath(obj, path) {
        return path.split(".").reduce((current, key) => current?.[key], obj);
    }

    _buildSearchIndex(docs) {
        const index = new Map();
        docs.forEach((doc) => {
            const flatValues = this._flattenObject(doc);
            flatValues.forEach((value) => {
                if (value && typeof value === "string" && value.length >= 3) {
                    const words = value.toLowerCase().split(/\s+/);
                    words.forEach((word) => {
                        if (word.length >= 3) {
                            if (!index.has(word)) {
                                index.set(word, new Set());
                            }
                            index.get(word).add(doc[this.primaryKey]);
                        }
                    });
                }
            });
        });
        return index;
    }

    _flattenObject(obj, prefix = "") {
        let values = [];
        for (const key in obj) {
            const value = obj[key];
            if (value && typeof value === "object" && !Array.isArray(value)) {
                values = values.concat(this._flattenObject(value, `${prefix}${key}.`));
            } else {
                values.push(value);
            }
        }
        return values;
    }

    load(docs) {
        this.docs = structuredClone(docs);
        this._rebuildIndex();
    }

    get(id) {
        return this.docs.find((doc) => doc[this.primaryKey] === id) || null;
    }

    getAll(options = {}) {
        const { _sort, _order, q, _page, _limit, _start, _end, ...restOptions } = options;
        let docs = [...this.docs];
        if (q) {
            docs = this.search(docs, q);
        }
        if (Object.keys(restOptions).length) {
            const filters = [];
            const regexp = /^(\w+?)(_(lt|gt|lte|gte|eq|ne|like))?$/i;
            for (const key in restOptions) {
                const value = restOptions[key];
                const [, name, , operator] = key.match(regexp) || [];
                if (name) {
                    filters.push({ name, value, operator: operator || "eq" });
                }
            }
            docs = this.filter(docs, filters);
        }
        if (_sort) {
            const sorters = [];
            const sortFields = Array.isArray(_sort) ? _sort : [_sort];
            const sortOrders = Array.isArray(_order) ? _order : [];
            sortFields.forEach((field, index) => {
                sorters.push({
                    _sort: field,
                    _order: sortOrders[index] || "asc",
                });
            });
            docs = this.sort(docs, sorters);
        }
        const filtered = docs.length;
        if (_page && _limit) {
            docs = this.paginate(docs, _page, _limit);
        } else if (_start !== undefined || _end !== undefined) {
            docs = this.slice(docs, _start, _end);
        }
        return {
            docs,
            total: this.docs.length,
            filtered,
            page: parseInt(_page) || 1,
            limit: parseInt(_limit) || filtered,
            totalPages: Math.ceil(filtered / (parseInt(_limit) || filtered || 1)),
            _links: {
                self: `?_page=${_page || 1}&_limit=${_limit || filtered}`,
                first: `?_page=1&_limit=${_limit || filtered}`,
                prev: _page > 1 ? `?_page=${_page - 1}&_limit=${_limit || filtered}` : null,
                next: _page < Math.ceil(filtered / (_limit || filtered || 1)) ? `?_page=${parseInt(_page) + 1}&_limit=${_limit || filtered}` : null,
                last: `?_page=${Math.ceil(filtered / (_limit || filtered || 1))}&_limit=${_limit || filtered}`,
            },
        };
    }

    post(doc = {}) {
        if (!doc[this.primaryKey]) {
            throw new Error("Document must have an 'id' field");
        }
        if (this.docs.some((d) => d[this.primaryKey] === doc[this.primaryKey])) {
            throw new Error(`Document with id ${doc[this.primaryKey]} already exists`);
        }
        const newDoc = structuredClone(doc);
        this.docs.push(newDoc);
        this._updateIndexForDoc(newDoc);
        return newDoc;
    }

    patch(id, doc) {
        const index = this.docs.findIndex((d) => d[this.primaryKey] === id);
        if (index === -1) {
            throw new Error(`Document with id ${id} not found`);
        }
        this._removeFromIndex(this.docs[index]);
        this.docs[index] = {
            ...this.docs[index],
            ...structuredClone(doc),
        };
        this._updateIndexForDoc(this.docs[index]);
        return this.docs[index];
    }

    delete(id) {
        const index = this.docs.findIndex((d) => d[this.primaryKey] === id);
        if (index === -1) {
            throw new Error(`Document with id ${id} not found`);
        }
        const deleted = this.docs[index];
        this._removeFromIndex(deleted);
        this.docs.splice(index, 1);
        return deleted;
    }

    search(docs, q = "") {
        if (!q || q.trim() === "") return docs;
        const query = q.toLowerCase().trim();
        const exactMatch = query.match(/"(.*?)"/);
        let searchWords = [];
        let exactPhrase = null;
        if (exactMatch) {
            exactPhrase = exactMatch[1];
            const remaining = query.replace(`"${exactPhrase}"`, "").trim();
            searchWords = remaining ? remaining.split(/\s+/) : [];
        } else {
            searchWords = query.split(/\s+/);
        }
        const matchingIds = new Set();
        if (exactPhrase) {
            for (const [word, ids] of this.searchIndex) {
                if (word.includes(exactPhrase)) {
                    ids.forEach((id) => matchingIds.add(id));
                }
            }
        }
        for (const searchWord of searchWords) {
            const tempIds = new Set();
            for (const [indexWord, ids] of this.searchIndex) {
                if (indexWord.includes(searchWord)) {
                    ids.forEach((id) => tempIds.add(id));
                }
            }
            if (matchingIds.size === 0) {
                tempIds.forEach((id) => matchingIds.add(id));
            } else {
                for (const id of matchingIds) {
                    if (!tempIds.has(id)) {
                        matchingIds.delete(id);
                    }
                }
            }
        }
        return docs.filter((doc) => matchingIds.has(doc[this.primaryKey]));
    }

    filter(docs, filters = []) {
        if (!filters.length) return docs;
        return docs.filter((doc) => {
            return filters.every((filter) => {
                const { name, value, operator } = filter;
                const docValue = this._getValueByPath(doc, name);
                if (docValue === undefined || docValue === null) return false;
                let compareValue = value;
                if (typeof docValue === "number" && !isNaN(Number(value))) {
                    compareValue = Number(value);
                } else if (typeof docValue === "boolean") {
                    compareValue = value === "true" || value === true;
                } else if (docValue instanceof Date) {
                    compareValue = new Date(value);
                }
                switch (operator) {
                    case "eq":
                        return docValue == compareValue;
                    case "ne":
                        return docValue != compareValue;
                    case "lt":
                        return docValue < compareValue;
                    case "gt":
                        return docValue > compareValue;
                    case "lte":
                        return docValue <= compareValue;
                    case "gte":
                        return docValue >= compareValue;
                    case "like":
                        return String(docValue).toLowerCase().includes(String(compareValue).toLowerCase());
                    default:
                        return docValue == compareValue;
                }
            });
        });
    }

    sort(docs, sorters = []) {
        if (!sorters.length) return docs;
        return [...docs].toSorted((a, b) => {
            for (const s of sorters) {
                const { _sort, _order } = s;
                if (!_sort) continue;
                const aVal = this._getValueByPath(a, _sort) ?? "";
                const bVal = this._getValueByPath(b, _sort) ?? "";
                let comparison = 0;
                if (typeof aVal === "string" || typeof bVal === "string") {
                    comparison = String(aVal).localeCompare(String(bVal));
                } else {
                    comparison = aVal - bVal;
                }
                if (comparison !== 0) {
                    return _order === "desc" ? -comparison : comparison;
                }
            }
            return 0;
        });
    }

    paginate(docs, _page = 1, _limit = 10) {
        const page = parseInt(_page) || 1;
        const limit = parseInt(_limit) || 10;
        const start = (page - 1) * limit;
        return docs.slice(start, start + limit);
    }

    slice(docs, _start, _end) {
        if (_start === undefined && _end === undefined) return docs;
        const start = parseInt(_start) || 0;
        const end = _end !== undefined ? parseInt(_end) : docs.length;
        return docs.slice(start, end);
    }
}

export { Store };
/* 
sort()
_sort=column1,column2
_order=asc,desc
search()
q=value
filter()
name=value
name_gt=value
name_lt=value
name_gte=value
name_lte=value
name_eq=value
name_ne=value
name_like=value
paginate()
_page=1&_limit=10
slice()
_start=0&_end=10
/pathname?_sort=column1&_order=asc&_sort=column2&_order=asc&_sort=column3&_order=desc
{
    _sort:[
        "column1",
        "column2",
        "column3",
    ],
    _order:[
        "asc",
        "asc",
        "desc",
    ],
}
*/

```
### theme
src\material\core\theme.js

```js
import { argbFromHex, themeFromSourceColor, themeFromImage, applyTheme } from "@material/material-color-utilities";
async function setTheme(input, customColors) {
    let theme;
    if (input instanceof HTMLImageElement) {
        theme = await themeFromImage(input, customColors);
    } else {
        theme = themeFromSourceColor(argbFromHex(input), customColors);
    }
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemDark) {
        Object.assign(theme.schemes.dark.props, {
            surfaceDim: theme.palettes.neutral.tone(6),
            surfaceBright: theme.palettes.neutral.tone(24),
            surfaceContainerLowest: theme.palettes.neutral.tone(4),
            surfaceContainerLow: theme.palettes.neutral.tone(10),
            surfaceContainer: theme.palettes.neutral.tone(12),
            surfaceContainerHigh: theme.palettes.neutral.tone(17),
            surfaceContainerHighest: theme.palettes.neutral.tone(22),
        });
    } else {
        Object.assign(theme.schemes.light.props, {
            surfaceDim: theme.palettes.neutral.tone(87),
            surfaceBright: theme.palettes.neutral.tone(98),
            surfaceContainerLowest: theme.palettes.neutral.tone(100),
            surfaceContainerLow: theme.palettes.neutral.tone(96),
            surfaceContainer: theme.palettes.neutral.tone(94),
            surfaceContainerHigh: theme.palettes.neutral.tone(92),
            surfaceContainerHighest: theme.palettes.neutral.tone(90),
        });
    }
    return applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };

```
## src\material

### material
src\material\material.js

```js
import "./core/router.js";
import "./core/observer.js";
import "./core/breakpoint-observer.js";
import "./core/scheme-observer.js";
import "./core/orientation-observer.js";
import "./core/theme.js";
import "./core/localization.js";
import "./core/store.js";
import "./core/query-builder.js";
import "./core/positioner.js";

import "./base/element.js";
import "./base/list.js";
import "./base/datetime-picker.js";

import "./controller/virtual-scroll.js";
import "./controller/ripple.js";

import "./components/scrim/scrim.js";
import "./components/layout/layout.js";
import "./components/layout/layout-item.js";
import "./components/grid/grid.js";
import "./components/grid/grid-column.js";

import "./components/icon/icon.js";
import "./components/image/image.js";

import "./components/badge/badge.js";
import "./components/icon-button/icon-button.js";
import "./components/button/button.js";

import "./components/card/card.js";
import "./components/card/card-header.js";
import "./components/card/card-body.js";
import "./components/card/card-main.js";
import "./components/card/card-footer.js";

import "./components/dialog/dialog.js";
import "./components/dialog/dialog-header.js";
import "./components/dialog/dialog-body.js";
import "./components/dialog/dialog-main.js";
import "./components/dialog/dialog-footer.js";

import "./components/text-field/text-field.js";
import "./components/textarea/textarea.js";
import "./components/checkbox/checkbox.js";
import "./components/radio-button/radio-button.js";
import "./components/switch/switch.js";
import "./components/slider/slider.js";
import "./components/form/form.js";

import "./components/data-table/data-table-cell.js";
import "./components/data-table/data-table.js";

import "./components/list/list-item.js";
import "./components/list/list.js";
import "./components/tree/tree.js";
import "./components/push-menu/push-menu.js";

```
### material
src\material\material.scss

```scss
@use "./shared/mixins.scss";

@use "./base/tokens.scss";
@use "./base/fonts.scss";
@use "./base/reset.scss";

@use "./controller/virtual-scroll.scss";
@use "./controller/ripple.scss";

@use "./components/grid/grid.scss";
@use "./components/scrim/scrim.scss";
@use "./components/layout/layout.scss";

@use "./components/typography/typography.scss";
@use "./components/icon/icon.scss";
@use "./components/image/image.scss";

@use "./components/badge/badge.scss";
@use "./components/icon-button/icon-button.scss";
@use "./components/button/button.scss";

@use "./components/card/card.scss";
@use "./components/dialog/dialog.scss";

@use "./components/text-field/text-field.scss";
@use "./components/textarea/textarea.scss";
@use "./components/checkbox/checkbox.scss";
@use "./components/radio-button/radio-button.scss";
@use "./components/switch/switch.scss";
@use "./components/slider/slider.scss";
@use "./components/form/form.scss";

@use "./components/data-table/data-table.scss";

@use "./components/list/list.scss";
@use "./components/tree/tree.scss";
@use "./components/push-menu/push-menu.scss";

```
## src\material\shared

### mixins
src\material\shared\mixins.scss

```scss
@mixin breakpoint-expanded() {
    @media (min-width: 840px) {
        @content;
    }
}

@mixin breakpoint-medium() {
    @media (min-width: 600px) and (max-width: 839px) {
        @content;
    }
}

@mixin breakpoint-compact() {
    @media (max-width: 599px) {
        @content;
    }
}

@mixin typescale-display-large() {
    font-family: var(--md-sys-typescale-display-large-font);
    font-weight: var(--md-sys-typescale-display-large-weight);
    font-size: var(--md-sys-typescale-display-large-size);
    letter-spacing: var(--md-sys-typescale-display-large-tracking);
    line-height: var(--md-sys-typescale-display-large-line-height);
}

@mixin typescale-display-medium() {
    font-family: var(--md-sys-typescale-display-medium-font);
    font-weight: var(--md-sys-typescale-display-medium-weight);
    font-size: var(--md-sys-typescale-display-medium-size);
    letter-spacing: var(--md-sys-typescale-display-medium-tracking);
    line-height: var(--md-sys-typescale-display-medium-line-height);
}

@mixin typescale-display-small() {
    font-family: var(--md-sys-typescale-display-small-font);
    font-weight: var(--md-sys-typescale-display-small-weight);
    font-size: var(--md-sys-typescale-display-small-size);
    letter-spacing: var(--md-sys-typescale-display-small-tracking);
    line-height: var(--md-sys-typescale-display-small-line-height);
}

@mixin typescale-headline-large() {
    font-family: var(--md-sys-typescale-headline-large-font);
    font-weight: var(--md-sys-typescale-headline-large-weight);
    font-size: var(--md-sys-typescale-headline-large-size);
    letter-spacing: var(--md-sys-typescale-headline-large-tracking);
    line-height: var(--md-sys-typescale-headline-large-line-height);
}

@mixin typescale-headline-medium() {
    font-family: var(--md-sys-typescale-headline-medium-font);
    font-weight: var(--md-sys-typescale-headline-medium-weight);
    font-size: var(--md-sys-typescale-headline-medium-size);
    letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
    line-height: var(--md-sys-typescale-headline-medium-line-height);
}

@mixin typescale-headline-small() {
    font-family: var(--md-sys-typescale-headline-small-font);
    font-weight: var(--md-sys-typescale-headline-small-weight);
    font-size: var(--md-sys-typescale-headline-small-size);
    letter-spacing: var(--md-sys-typescale-headline-small-tracking);
    line-height: var(--md-sys-typescale-headline-small-line-height);
}

@mixin typescale-title-large() {
    font-family: var(--md-sys-typescale-title-large-font);
    font-weight: var(--md-sys-typescale-title-large-weight);
    font-size: var(--md-sys-typescale-title-large-size);
    letter-spacing: var(--md-sys-typescale-title-large-tracking);
    line-height: var(--md-sys-typescale-title-large-line-height);
}

@mixin typescale-title-medium() {
    font-family: var(--md-sys-typescale-title-medium-font);
    font-weight: var(--md-sys-typescale-title-medium-weight);
    font-size: var(--md-sys-typescale-title-medium-size);
    letter-spacing: var(--md-sys-typescale-title-medium-tracking);
    line-height: var(--md-sys-typescale-title-medium-line-height);
}

@mixin typescale-title-small() {
    font-family: var(--md-sys-typescale-title-small-font);
    font-weight: var(--md-sys-typescale-title-small-weight);
    font-size: var(--md-sys-typescale-title-small-size);
    letter-spacing: var(--md-sys-typescale-title-small-tracking);
    line-height: var(--md-sys-typescale-title-small-line-height);
}

@mixin typescale-body-large() {
    font-family: var(--md-sys-typescale-body-large-font);
    font-weight: var(--md-sys-typescale-body-large-weight);
    font-size: var(--md-sys-typescale-body-large-size);
    letter-spacing: var(--md-sys-typescale-body-large-tracking);
    line-height: var(--md-sys-typescale-body-large-line-height);
}

@mixin typescale-body-medium() {
    font-family: var(--md-sys-typescale-body-medium-font);
    font-weight: var(--md-sys-typescale-body-medium-weight);
    font-size: var(--md-sys-typescale-body-medium-size);
    letter-spacing: var(--md-sys-typescale-body-medium-tracking);
    line-height: var(--md-sys-typescale-body-medium-line-height);
}

@mixin typescale-body-small() {
    font-family: var(--md-sys-typescale-body-small-font);
    font-weight: var(--md-sys-typescale-body-small-weight);
    font-size: var(--md-sys-typescale-body-small-size);
    letter-spacing: var(--md-sys-typescale-body-small-tracking);
    line-height: var(--md-sys-typescale-body-small-line-height);
}

@mixin typescale-label-large() {
    font-family: var(--md-sys-typescale-label-large-font);
    font-weight: var(--md-sys-typescale-label-large-weight);
    font-size: var(--md-sys-typescale-label-large-size);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
    line-height: var(--md-sys-typescale-label-large-line-height);
}

@mixin typescale-label-medium() {
    font-family: var(--md-sys-typescale-label-medium-font);
    font-weight: var(--md-sys-typescale-label-medium-weight);
    font-size: var(--md-sys-typescale-label-medium-size);
    letter-spacing: var(--md-sys-typescale-label-medium-tracking);
    line-height: var(--md-sys-typescale-label-medium-line-height);
}

@mixin typescale-label-small() {
    font-family: var(--md-sys-typescale-label-small-font);
    font-weight: var(--md-sys-typescale-label-small-weight);
    font-size: var(--md-sys-typescale-label-small-size);
    letter-spacing: var(--md-sys-typescale-label-small-tracking);
    line-height: var(--md-sys-typescale-label-small-line-height);
}

@mixin initialize {
    &--initialize {
        &,
        *,
        *::before,
        *::after {
            transition: none !important;
            animation: none !important;
        }
    }
}

```

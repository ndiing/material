import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { parseDatetimeLocal, stringifyDatetimeLocal, stringifyTime, stringifyYear } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * {{description}}
 * @element md-datetime-picker
 * @extends MDSheetComponent
 * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerButtonClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonPrevClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerIconButtonNextClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerButtonLabelClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerButtonCancelClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerButtonOkClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerYearItemClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerMonthItemClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerDayItemClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerHourItemClick - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerSelection - {{description}}
 * @fires MDDatetimePickerComponent#onDatetimePickerMinuteItemClick - {{description}}
 */
class MDDatetimePickerComponent extends MDSheetComponent {
    /**
     * {{description}}
     * @property {Number} index - {{description}}
     * @property {String} value - {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        index: { type: Number },
        value: { type: String },
    };

    /**
     * {{description}}
     */
    get years() {
        const rows = [];
        const year = this.selection.getFullYear();
        const start = Math.floor(year / 10) * 10;
        const end = Math.floor((year + 10) / 10) * 10;
        for (let i = 0; i < end - start; i++) {
            const date = new Date(start + i, 0);
            const year = date.getFullYear();
            rows.push({
                label: this.yearFormat(date),
                activated: year === this.activated.getFullYear(),
                selected: year === this.selected.getFullYear(),
                year,
            });
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get months() {
        const rows = [];
        for (let i = 0; i < 12; i++) {
            const date = new Date(this.selection.getFullYear(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            rows.push({
                label: this.monthFormat(date),
                activated: year === this.activated.getFullYear() && month === this.activated.getMonth(),
                selected: year === this.selected.getFullYear() && month === this.selected.getMonth(),
                year,
                month,
            });
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get first() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

    /**
     * {{description}}
     */
    get last() {
        return 32 - new Date(this.selection.getFullYear(), this.selection.getMonth(), 32).getDate();
    }

    /**
     * {{description}}
     */
    get weekdays() {
        const rows = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(0, 0, i);
            rows.push({
                label: this.weekdayFormat(date),
            });
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get days() {
        const rows = [];
        for (let i = 0; i < 6; i++) {
            const column = {};
            const children = [];
            for (let j = 0; j < 7; j++) {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), i * 7 + j + 1 - this.first);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                children.push({
                    label: this.dayFormat(date),
                    activated: year === this.activated.getFullYear() && month === this.activated.getMonth() && day === this.activated.getDate(),
                    selected: year === this.selected.getFullYear() && month === this.selected.getMonth() && day === this.selected.getDate(),
                    year,
                    month,
                    day,
                });
            }
            column.children = children;
            rows.push(column);
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get hours() {
        const rows = [];
        for (let i = 0; i < 24; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            rows.push({
                label: this.hourFormat(date),
                activated: hour === this.activated.getHours(),
                selected: hour === this.selected.getHours(),
                year,
                month,
                day,
                hour,
            });
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get minutes() {
        const rows = [];
        for (let i = 0; i < 60; i++) {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), this.selection.getHours(), i);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            rows.push({
                label: this.minuteFormat(date),
                activated: hour === this.activated.getHours() && minute === this.activated.getMinutes(),

                selected: hour === this.selected.getHours() && minute === this.selected.getMinutes(),
                year,
                month,
                day,
                hour,
                minute,
            });
        }
        return rows;
    }

    /**
     * {{description}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `];
    }

    /**
     * {{description}}
     */
    set childNodes_(value) {
        this._body = value;
    }

    /**
     * {{description}}
     */
    get leadingActions() {
        let label;
        if (this.index === 0) {
            label = [this.years[0].label, this.years[this.years.length - 1].label].join("-");
        } else if (this.index === 1) {
            label = stringifyYear(this.selection);
        } else if (this.index === 2) {
            label = stringifyDatetimeLocal(this.selection);
        } else if (this.index === 3) {
            label = stringifyTime(this.selection);
        } else if (this.index === 4) {
            label = stringifyTime(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * {{description}}
     */
    get trailingActions() {
        return [
            { name: "prev", icon: "keyboard_arrow_left" },
            { name: "next", icon: "keyboard_arrow_right" },
        ];
    }

    /**
     * {{description}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
        this.hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
        this.minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;

        this.activated = new Date();
        this.selection = new Date();
        this.selected = new Date();

        this.index = 2;
        this.value = this.getValue();

        this.popper = new MDPopperController(this, {});
    }

    /**
     * @private
     */
    renderYear() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--years">
                ${this.years.map(item=>html`
                    <div class="md-datetime-picker__list-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerYearItemClick}">
                        <div class="md-icon md-datetime-picker__list-icon">${item.selected?'check':nothing}</div>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    renderMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--months">
                ${this.months.map(item=>html`
                    <div class="md-datetime-picker__list-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerMonthItemClick}">
                        <div class="md-icon md-datetime-picker__list-icon">${item.selected?'check':nothing}</div>
                        <div class="md-datetime-picker__list-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    renderDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map(item=>html`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${item.label}</div>
                        </div>    
                    `)}
                </div>
                ${this.days.map(row=>html`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days">
                        ${row.children.map(item=>html`
                            <div class="md-datetime-picker__grid-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerDayItemClick}">
                                <div class="md-datetime-picker__grid-label">${item.label}</div>
                            </div>    
                        `)}
                    </div>
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    renderHour() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hours">
                ${this.hours.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerHourItemClick}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    renderMinute() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minutes">
                ${this.minutes.map(item=>html`
                    <div class="md-datetime-picker__absolute-item" ?activated="${item.activated}" ?selected="${item.selected}" .data="${item}" @click="${this.handleDatetimePickerMinuteItemClick}">
                        <div class="md-datetime-picker__absolute-label">${item.label}</div>
                    </div>    
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-datetime-picker");

        this.defaultValue = this.value;
        this.updateDate();
    }

    /**
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-datetime-picker-card-index", this.index);
        }

        if (changedProperties.has("value") && changedProperties.get("value")) {
            if (this.value) {
                await this.updateComplete;
                this.updateDate();
                this.requestUpdate();
            }
        }
    }

    /**
     * @private
     */
    handleCardIconButtonClick(event) {
        if (event.currentTarget.name === "prev") {
            this.handleCardIconButtonPrevClick(event);
        } else if (event.currentTarget.name === "next") {
            this.handleCardIconButtonNextClick(event);
        }

        this.emit("onDatetimePickerIconButtonClick", event);
    }

    /**
     * @private
     */
    handleCardButtonClick(event) {
        if (event.currentTarget.name === "label") {
            this.handleCardButtonLabelClick(event);
        } else if (event.currentTarget.name === "cancel") {
            this.handleCardButtonCancelClick(event);
        } else if (event.currentTarget.name === "ok") {
            this.handleCardButtonOkClick(event);
        }

        this.emit("onDatetimePickerButtonClick", event);
    }

    /**
     * {{description}}
     * @private
     */
    updateDate() {
        const date = parseDatetimeLocal(this.value);

        this.selection.setFullYear(date.getFullYear());
        this.selection.setMonth(date.getMonth());
        this.selection.setDate(date.getDate());
        this.selection.setHours(date.getHours());
        this.selection.setMinutes(date.getMinutes());

        this.selected.setFullYear(date.getFullYear());
        this.selected.setMonth(date.getMonth());
        this.selected.setDate(date.getDate());
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * @private
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() - 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() - 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() - 1);
        } else if (this.index === 3) {
            this.selection.setHours(this.selection.getHours() - 1);
        } else if (this.index === 4) {
            this.selection.setMinutes(this.selection.getMinutes() - 1);
        }

        this.requestUpdate();

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerIconButtonPrevClick", event);
    }

    /**
     * @private
     */
    handleCardIconButtonNextClick(event) {
        if (this.index === 0) {
            this.selection.setFullYear(this.selection.getFullYear() + 10);
        } else if (this.index === 1) {
            this.selection.setFullYear(this.selection.getFullYear() + 1);
        } else if (this.index === 2) {
            this.selection.setMonth(this.selection.getMonth() + 1);
        } else if (this.index === 3) {
            this.selection.setHours(this.selection.getHours() + 1);
        } else if (this.index === 4) {
            this.selection.setMinutes(this.selection.getMinutes() + 1);
        }

        this.requestUpdate();

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerIconButtonNextClick", event);
    }

    /**
     * @private
     */
    handleCardButtonLabelClick(event) {
        if (this.index === 0) {
            this.index = 2;
        } else if (this.index === 1) {
            this.index = 0;
        } else if (this.index === 2) {
            this.index = 1;
        } else if (this.index === 3) {
            this.index = 4;
        } else if (this.index === 4) {
            this.index = 2;
        }

        this.emit("onDatetimePickerButtonLabelClick", event);
    }

    /**
     * @private
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 2;

        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    /**
     * @private
     */
    handleCardButtonOkClick(event) {
        this.selected.setFullYear(this.selection.getFullYear());
        this.selected.setMonth(this.selection.getMonth());
        this.selected.setDate(this.selection.getDate());
        this.selected.setHours(this.selection.getHours());
        this.selected.setMinutes(this.selection.getMinutes());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 2;

        this.emit("onDatetimePickerButtonOkClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setFullYear(data.year);

        this.index = 1;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerYearItemClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.selection.setMonth(data.month);

        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerMonthItemClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);

        this.index = 3;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerDayItemClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.selection.setHours(data.hour);

        this.index = 4;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerHourItemClick", event);
    }

    /**
     * @private
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.selection.setHours(data.hour);
        this.selection.setMinutes(data.minute);

        this.index = 2;

        this.emit("onDatetimePickerSelection", event);
        this.emit("onDatetimePickerMinuteItemClick", event);
    }

    /**
     * {{description}}
     * @private
     */
    getValue() {
        return stringifyDatetimeLocal(this.selected);
    }

    /**
     * {{description}}
     */
    showModal(button, options) {
        this.setPlacement(button, options);
        super.showModal();
    }

    /**
     * {{description}}
     */
    show(button, options) {
        this.setPlacement(button, options);
        super.show();
    }

    /**
     * {{description}}
     * @private
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-datetime-picker", MDDatetimePickerComponent);

export { MDDatetimePickerComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseDatetimeLocal, stringifyDatetimeLocal } from "../util/util";
import { Popper } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";

/**
 * 
 * @extends MdComponent
 * @fires onDatetimePickerShown
 * @fires onDatetimePickerClosed
 * @fires onDatetimePickerLabelClick
 * @fires onDatetimePickerIconButtonPrevClick
 * @fires onDatetimePickerIconButtonNextClick
 * @fires onDatetimePickerIconButtonClick
 * @fires onDatetimePickerYearItemClick
 * @fires onDatetimePickerMonthItemClick
 * @fires onDatetimePickerDayItemClick
 * @fires onDatetimePickerHourItemClick
 * @fires onDatetimePickerMinuteItemClick
 * @fires onDatetimePickerButtonCancelClick
 * @fires onDatetimePickerButtonOkClick
 * @fires onDatetimePickerButtonLabelClick
 * @fires onDatetimePickerButtonClick
 * @fires onDatetimePickerScrimClosed
 * @element md-datetime-picker
 */
class MdDatetimePickerComponent extends MdComponent {
    /**
     * @property {Array} [icons] 
     * @property {Array} [actions] 
     * @property {String} [label] 
     * @property {String} [sublabel] 
     * @property {Array} [buttons] 
     * @property {Boolean} [open] 
     * @property {Boolean} [modal] 
     * @property {Number} [index] 
     * @property {Any} [value] 
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean },
        index: { type: Number },
        value: {
            converter: {
                fromAttribute: (value, type) => {
                    return parseDatetimeLocal(value);
                },
                toAttribute: (value, type) => {
                    return stringifyDatetimeLocal(value);
                },
            },
        },
    };

    /**
     * 
     * @readonly
     */
    get startOfDay() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

    /**
     * 
     * @readonly
     */
    get years() {
        let year = this.selection.getFullYear();
        year = Math.floor(year / 10) * 10;
        return Array.from({ length: 10 }, (v, k) => {
            const date = new Date(year + k, 0);
            return {
                year: date.getFullYear(),
                label: this.yearFormat(date),
                selected: date.getFullYear() === this.value.getFullYear(),
                activated: date.getFullYear() === this.current.getFullYear(),
            };
        });
    }

    /**
     * 
     * @readonly
     */
    get months() {
        return Array.from({ length: 12 }, (v, k) => {
            const date = new Date(this.selection.getFullYear(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth(),
            };
        });
    }

    /**
     * 
     * @readonly
     */
    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                label: this.weekdayFormat(date),
            };
        });
    }

    /**
     * 
     * @readonly
     */
    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), k2 + 1 + 7 * k - this.startOfDay);
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    label: this.dayFormat(date),
                    selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate(),
                    activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate(),
                    isSameMonth: date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth(),
                    isSunday: date.getDay() === 0,
                };
            });
        });
    }

    /**
     * 
     * @readonly
     */
    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate() && date.getHours() === this.value.getHours(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours(),
            };
        });
    }

    /**
     * 
     * @readonly
     */
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), this.selection.getDate(), this.selection.getHours(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                label: this.minuteFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate() && date.getHours() === this.value.getHours() && date.getMinutes() === this.value.getMinutes(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours() && date.getMinutes() === this.current.getMinutes(),
            };
        });
    }

    /**
     * 
     * @readonly
     */
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
            2: () => stringifyDatetimeLocal(this.selection),
            3: () => stringifyDatetimeLocal(this.selection),
            4: () => stringifyDatetimeLocal(this.selection),
        };
        return [{ component: "button", id: "label", label: map[this.index]() }];
    }

    /**
     * 
     */
    constructor() {
        super();
        this.current = new Date();
        this.value = new Date();
        this.selection = new Date();
        this.index = 2;
        this.yearFormat = new Intl.DateTimeFormat(undefined, {
            year: "numeric",
        }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, {
            month: "long",
        }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, {
            weekday: "narrow",
        }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, {
            day: "numeric",
        }).format;
        this.hourFormat = new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            hour12: false,
        }).format;
        this.minuteFormat = new Intl.DateTimeFormat(undefined, {
            minute: "numeric",
            hour12: false,
        }).format;
        this.actions = [
            { id: "prev", icon: "keyboard_arrow_left" },
            { id: "next", icon: "keyboard_arrow_right" },
        ];
        this.buttons = [{ component: "spacer" }, { id: "cancel", label: "Cancel" }, { id: "ok", label: "Ok" }];
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     */
    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleDatetimePickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     */
    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleDatetimePickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-datetime-picker__spacer"></div> `;
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    renderItem(item, component = "icon") {
        return choose(
            item.component || component,
            [
                ["icon", () => this.renderIcon(item)],
                ["icon-button", () => this.renderIconButton(item)],
                ["button", () => this.renderButton(item)],
                ["spacer", () => this.renderSpacer(item)],
            ],
            () => nothing,
        );
    }

    /**
     * 
     * @private
     */
    renderDatetimePickerYear() {
        return html`
            <div class="md-datetime-picker__list">
                ${this.years.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerYearItemClick}"
                            class="md-datetime-picker__list-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * 
     * @private
     */
    renderDatetimePickerMonth() {
        return html`
            <div class="md-datetime-picker__list">
                ${this.months.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerMonthItemClick}"
                            class="md-datetime-picker__list-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * 
     * @private
     */
    renderDatetimePickerDay() {
        return html`
            <div class="md-datetime-picker__table">
                <div class="md-datetime-picker__table-header">
                    <div class="md-datetime-picker__table-row">${this.weekdays.map((item) => html` <div class="md-datetime-picker__table-cell">${item.label}</div> `)}</div>
                </div>
                <div class="md-datetime-picker__table-body">
                    ${this.days.map(
                        (row) => html`
                            <div class="md-datetime-picker__table-row">
                                ${row.map(
                                    (item) => html`
                                        <div
                                            .data="${item}"
                                            ?selected="${item.selected}"
                                            ?activated="${item.activated}"
                                            @click="${this.handleDatetimePickerDayItemClick}"
                                            class="${classMap({
                                                "md-datetime-picker__table-cell": true,
                                                "md-datetime-picker__table-cell--same-month": item.isSameMonth,
                                                "md-datetime-picker__table-cell--sunday": item.isSunday,
                                            })}"
                                        >
                                            ${item.label}
                                        </div>
                                    `,
                                )}
                            </div>
                        `,
                    )}
                </div>
            </div>
        `;
    }

    /**
     * 
     * @private
     */
    renderDatetimePickerHour() {
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--hours">
                ${this.hours.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerHourItemClick}"
                            class="md-datetime-picker__circle-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * 
     * @private
     */
    renderDatetimePickerMinute() {
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--minutes">
                ${this.minutes.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerMinuteItemClick}"
                            class="md-datetime-picker__circle-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * 
     * @private
     */
    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length
                ? html`
                      <div class="md-datetime-picker__header">
                          <div class="md-datetime-picker__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-datetime-picker__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-datetime-picker__wrapper">
                <div class="md-datetime-picker__body">
                    <div class="md-datetime-picker__items">
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerYear()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerMonth()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerDay()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerHour()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerMinute()}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-datetime-picker__footer">${this.buttons?.length ? html` <div class="md-datetime-picker__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}
            </div>
        `;
    }

    /**
     * 
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.datetimePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.datetimePickerScrim, this.nextElementSibling);
        this.handleDatetimePickerScrimClosed = this.handleDatetimePickerScrimClosed.bind(this);
        this.datetimePickerScrim.addEventListener("onScrimClosed", this.handleDatetimePickerScrimClosed);
        if (this.modal && this.open) this.datetimePickerScrim.show();
        this.classList.add("md-datetime-picker");
        this.style.setProperty("--md-comp-datetime-picker-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-datetime-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-datetime-picker-width", this.clientWidth + "px");
        this.selection = new Date(this.value.valueOf());
        this.defaultValue = new Date(this.value.valueOf());
        this.defaultIndex = this.index;
    }

    /**
     * 
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.datetimePickerScrim.removeEventListener("onScrimClosed", this.handleDatetimePickerScrimClosed);
        this.datetimePickerScrim.remove();
        this.classList.remove("md-datetime-picker");
    }

    /**
     * 
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-datetime-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-datetime-picker--modal`, !!this.modal);
        }
    }

    /**
     * 
     * @param {Any} [options]
     */
    show(options) {
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.index = this.defaultIndex;
        if (this.modal) this.datetimePickerScrim.show();
        this.open = true;
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.popper = new Popper();
        this.popper.show(options);
        this.emit("onDatetimePickerShown");
    }

    /**
     * 
     */
    close() {
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.open = false;
        this.datetimePickerScrim.close();
        this.emit("onDatetimePickerClosed");
    }

    /**
     * 
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerLabelClick(event) {
        this.emit("onDatetimePickerLabelClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerIconButtonPrevClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() - 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() - 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() - 1);
        else if (this.index === 3) this.selection.setHours(this.selection.getHours() - 1);
        else if (this.index === 4) this.selection.setMinutes(this.selection.getMinutes() - 1);
        this.requestUpdate();
        this.emit("onDatetimePickerIconButtonPrevClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerIconButtonNextClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() + 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() + 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() + 1);
        else if (this.index === 3) this.selection.setHours(this.selection.getHours() + 1);
        else if (this.index === 4) this.selection.setMinutes(this.selection.getMinutes() + 1);
        this.requestUpdate();
        this.emit("onDatetimePickerIconButtonNextClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "prev") return this.handleDatetimePickerIconButtonPrevClick(event);
        else if (data.id === "next") return this.handleDatetimePickerIconButtonNextClick(event);
        this.emit("onDatetimePickerIconButtonClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatetimePickerYearItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatetimePickerMonthItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);
        this.index = 3;
        this.emit("onDatetimePickerDayItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.value.setHours(data.hour);
        this.index = 4;
        this.emit("onDatetimePickerHourItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.value.setMinutes(data.minute);
        this.index = 2;
        this.emit("onDatetimePickerMinuteItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerButtonCancelClick(event) {
        this.close();
        this.value.setFullYear(this.defaultValue.getFullYear());
        this.value.setMonth(this.defaultValue.getMonth());
        this.value.setDate(this.defaultValue.getDate());
        this.value.setHours(this.defaultValue.getHours());
        this.value.setMinutes(this.defaultValue.getMinutes());
        this.emit("onDatetimePickerButtonCancelClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerButtonOkClick(event) {
        this.close();
        this.emit("onDatetimePickerButtonOkClick", {
            event,
            value: stringifyDatetimeLocal(this.value),
        });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerButtonLabelClick(event) {
        const map = {
            2: 0,
            0: 1,
            1: 2,
            3: 4,
            4: 2,
        };
        this.index = map[this.index];
        this.emit("onDatetimePickerButtonLabelClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleDatetimePickerButtonCancelClick(event);
        else if (data.id === "ok") return this.handleDatetimePickerButtonOkClick(event);
        else if (data.id === "label") return this.handleDatetimePickerButtonLabelClick(event);
        this.emit("onDatetimePickerButtonClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleDatetimePickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onDatetimePickerScrimClosed", { event });
    }
}
customElements.define("md-datetime-picker", MdDatetimePickerComponent);
export { MdDatetimePickerComponent };

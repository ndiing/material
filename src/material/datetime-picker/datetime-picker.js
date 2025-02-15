import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseDatetimeLocal, stringifyDatetimeLocal } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-datetime-picker
 * @fires MdDatetimePickerComponent#onDatetimePickerShow
 * @fires MdDatetimePickerComponent#onDatetimePickerClose
 * @fires MdDatetimePickerComponent#onDatetimePickerYearItemClick
 * @fires MdDatetimePickerComponent#onDatetimePickerMonthItemClick
 * @fires MdDatetimePickerComponent#onDatetimePickerDayItemClick
 * @fires MdDatetimePickerComponent#onDatetimePickerHourItemClick
 * @fires MdDatetimePickerComponent#onDatetimePickerMinuteItemClick
 * @fires MdDatetimePickerComponent#onDatetimePickerScrimClose
 * @fires MdDatetimePickerComponent#onDatetimePickerShown
 * @fires MdDatetimePickerComponent#onDatetimePickerClosed
 * @fires MdDatetimePickerComponent#onDatetimePickerIconButtonPrevClick
 * @fires MdDatetimePickerComponent#onDatetimePickerIconButtonNextClick
 * @fires MdDatetimePickerComponent#onDatetimePickerIconButtonClick
 * @fires MdDatetimePickerComponent#onDatetimePickerButtonCancelClick
 * @fires MdDatetimePickerComponent#onDatetimePickerButtonOkClick
 * @fires MdDatetimePickerComponent#onDatetimePickerButtonLabelClick
 * @fires MdDatetimePickerComponent#onDatetimePickerButtonClick
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
     * @property {String} [value]
     * @property {Any} [index]
     * @property {Any} [selection]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean },
        value: {
            type: String,
            reflect: true,
            converter: {
                fromAttribute: (value, type) => {
                    return parseDatetimeLocal(value);
                },
                toAttribute: (value, type) => {
                    return stringifyDatetimeLocal(value);
                },
            },
        },
        index: { state: true },
        selection: { state: true },
    };
    yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
    monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
    weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
    dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
    hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
    minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;

    get startOfDay() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

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

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                label: this.weekdayFormat(date),
            };
        });
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), k * 7 + k2 + 1 - this.startOfDay);
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

    get actions() {
        return [
            { id: "prev", icon: "keyboard_arrow_left" },
            { id: "next", icon: "keyboard_arrow_right" },
        ];
    }

    get buttons() {
        return [{ component: "spacer" }, { id: "cancel", label: "Cancel" }, { id: "ok", label: "Ok" }];
    }

    constructor() {
        super();
        this.current = new Date();
        this.value = new Date();
        this.selection = new Date();
        this.index = 2;
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `;
    }

    renderIconButton(item) {
        /* prettier-ignore */
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

    renderButton(item) {
        /* prettier-ignore */
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

    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div 
                class="md-datetime-picker__spacer"
            ></div>
        `;
    }

    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    renderDatetimePickerYear() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.years.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatetimePickerYearItemClick}"
                        class="md-datetime-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    renderDatetimePickerMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.months.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatetimePickerMonthItemClick}"
                        class="md-datetime-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    renderDatetimePickerDay() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__table">
                <div class="md-datetime-picker__table-header">
                    <div class="md-datetime-picker__table-row">
                        ${this.weekdays.map((item) => html`
                            <div class="md-datetime-picker__table-cell">${item.label}</div>    
                        `)}
                    </div>
                </div>
                <div class="md-datetime-picker__table-body">
                    ${this.days.map((row) => html`
                        <div class="md-datetime-picker__table-row">
                            ${row.map((item) => html`
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
                                >${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `;
    }

    renderDatetimePickerHour() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--hours">
                ${this.hours.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatetimePickerHourItemClick}"
                        class="md-datetime-picker__circle-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    renderDatetimePickerMinute() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--minutes">
                ${this.minutes.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatetimePickerMinuteItemClick}"
                        class="md-datetime-picker__circle-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length? html`
                <div class="md-datetime-picker__header">
                    <div class="md-datetime-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                    ${this.actions?.length ? html` <div class="md-datetime-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                </div>
            `: nothing}
            <div class="md-datetime-picker__wrapper">
                <div class="md-datetime-picker__body">
                    <div class="md-datetime-picker__items">
                        <div class="md-datetime-picker__item">${cache([
                            this.renderDatetimePickerYear.bind(this), 
                            this.renderDatetimePickerMonth.bind(this), 
                            this.renderDatetimePickerDay.bind(this), 
                            this.renderDatetimePickerHour.bind(this), 
                            this.renderDatetimePickerMinute.bind(this)
                        ][this.index]())}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html`
                    <div class="md-datetime-picker__footer">
                        ${this.buttons?.length ? html`
                            <div class="md-datetime-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                        ` : nothing}
                    </div>    
                ` : nothing}
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = new Date(this.value.valueOf());
        this.defaultIndex = this.index;
        this.classList.add("md-datetime-picker");
        this.style.setProperty("--md-comp-datetime-picker-animation", "none");
        this.datetimePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.datetimePickerScrim, this.nextElementSibling);
        this.handleDatetimePickerScrimClose = this.handleDatetimePickerScrimClose.bind(this);
        this.datetimePickerScrim.addEventListener("onScrimClose", this.handleDatetimePickerScrimClose);
        if (this.modal && this.open) this.datetimePickerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-datetime-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-datetime-picker-width", this.clientWidth + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.datetimePickerScrim.removeEventListener("onScrimClose", this.handleDatetimePickerScrimClose);
        this.datetimePickerScrim.remove();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-datetime-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-datetime-picker--modal`, !!this.modal);
        }
        if (changedProperties.has("value")) {
            await this.updateComplete;
            this.selection = new Date(this.value.valueOf());
        }
    }

    /**
     * @param {Any} [options]
     */
    show(options) {
        this.index = this.defaultIndex;

        this.handleDatetimePickerShown = this.handleDatetimePickerShown.bind(this);
        this.addEventListener("animationend", this.handleDatetimePickerShown);

        this.style.removeProperty("--md-comp-datetime-picker-animation");

        setPosition({
            container: this,
            offset: 4 + 4,
            /* prettier-ignore */
            placements: [
                "bottom-start", "bottom-end", "bottom", 
                "top-start", "top-end", "top", 
                "right-start", "right-end", "right", 
                "left-start", "left-end", "left"
            ],
            ...options,
        });

        this.open = true;

        if (this.modal) this.datetimePickerScrim.show();

        this.emit("onDatetimePickerShow");
    }

    /**
     */
    close() {
        this.handleDatetimePickerClosed = this.handleDatetimePickerClosed.bind(this);
        this.addEventListener("animationend", this.handleDatetimePickerClosed);

        this.style.removeProperty("--md-comp-datetime-picker-animation");

        this.open = false;

        if (this.modal) this.datetimePickerScrim.close();

        this.emit("onDatetimePickerClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatetimePickerYearItemClick", { event });
    }

    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatetimePickerMonthItemClick", { event });
    }

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

    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.value.setHours(data.hour);
        this.index = 4;
        this.emit("onDatetimePickerHourItemClick", { event });
    }

    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.value.setMinutes(data.minute);
        this.index = 2;
        this.emit("onDatetimePickerMinuteItemClick", { event });
    }

    handleDatetimePickerScrimClose(event) {
        if (this.open) this.close();
        this.emit("onDatetimePickerScrimClose", { event });
    }

    handleDatetimePickerShown(event) {
        this.removeEventListener("animationend", this.handleDatetimePickerShown);
        this.emit("onDatetimePickerShown");
    }

    handleDatetimePickerClosed(event) {
        this.removeEventListener("animationend", this.handleDatetimePickerClosed);
        this.emit("onDatetimePickerClosed");
    }

    handleDatetimePickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() - 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() - 1),
            2: () => this.selection.setMonth(this.selection.getMonth() - 1),
            3: () => this.selection.setHours(this.selection.getHours() - 1),
            4: () => this.selection.setMinutes(this.selection.getMinutes() - 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatetimePickerIconButtonPrevClick", { event });
    }

    handleDatetimePickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() + 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() + 1),
            2: () => this.selection.setMonth(this.selection.getMonth() + 1),
            3: () => this.selection.setHours(this.selection.getHours() + 1),
            4: () => this.selection.setMinutes(this.selection.getMinutes() + 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatetimePickerIconButtonNextClick", { event });
    }

    handleDatetimePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleDatetimePickerIconButtonPrevClick.bind(this),
            next: this.handleDatetimePickerIconButtonNextClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onDatetimePickerIconButtonClick", { event });
    }

    handleDatetimePickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onDatetimePickerButtonCancelClick", { event });
    }

    handleDatetimePickerButtonOkClick(event) {
        // this.close();
        this.emit("onDatetimePickerButtonOkClick", { event });
    }

    handleDatetimePickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 2,
            2: 0,
            3: 4,
            4: 2,
        };
        this.index = map[this.index];
        this.emit("onDatetimePickerButtonLabelClick", { event });
    }

    handleDatetimePickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleDatetimePickerButtonCancelClick.bind(this),
            ok: this.handleDatetimePickerButtonOkClick.bind(this),
            label: this.handleDatetimePickerButtonLabelClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onDatetimePickerButtonClick", { event });
    }
}
customElements.define("md-datetime-picker", MdDatetimePickerComponent);
export { MdDatetimePickerComponent };

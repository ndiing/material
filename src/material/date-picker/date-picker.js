import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseDate, stringifyDate } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-date-picker
 * @fires MdDatePickerComponent#onDatePickerShow
 * @fires MdDatePickerComponent#onDatePickerClose
 * @fires MdDatePickerComponent#onDatePickerYearItemClick
 * @fires MdDatePickerComponent#onDatePickerMonthItemClick
 * @fires MdDatePickerComponent#onDatePickerDayItemClick
 * @fires MdDatePickerComponent#onDatePickerScrimClose
 * @fires MdDatePickerComponent#onDatePickerShown
 * @fires MdDatePickerComponent#onDatePickerClosed
 * @fires MdDatePickerComponent#onDatePickerIconButtonPrevClick
 * @fires MdDatePickerComponent#onDatePickerIconButtonNextClick
 * @fires MdDatePickerComponent#onDatePickerIconButtonClick
 * @fires MdDatePickerComponent#onDatePickerButtonCancelClick
 * @fires MdDatePickerComponent#onDatePickerButtonOkClick
 * @fires MdDatePickerComponent#onDatePickerButtonLabelClick
 * @fires MdDatePickerComponent#onDatePickerButtonClick
 */
class MdDatePickerComponent extends MdComponent {
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
                    return parseDate(value);
                },
                toAttribute: (value, type) => {
                    return stringifyDate(value);
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

    /**
     * @readonly
     */
    get startOfDay() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

    /**
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
     * @readonly
     */
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

    /**
     * @readonly
     */
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
            2: () => stringifyDate(this.selection),
        };
        return [{ component: "button", id: "label", label: map[this.index]() }];
    }

    /**
     * @readonly
     */
    get actions() {
        return [
            { id: "prev", icon: "keyboard_arrow_left" },
            { id: "next", icon: "keyboard_arrow_right" },
        ];
    }

    /**
     * @readonly
     */
    get buttons() {
        return [{ component: "spacer" }, { id: "cancel", label: "Cancel" }, { id: "ok", label: "Ok" }];
    }

    /**
     */
    constructor() {
        super();
        this.current = new Date();
        this.value = new Date();
        this.selection = new Date();
        this.index = 2;
    }

    /**
     * @param {String} [item]
     */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `;
    }

    /**
     * @param {String} [item]
     */
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
                @click="${this.handleDatePickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @param {String} [item]
     */
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
                @click="${this.handleDatePickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @param {String} [item]
     */
    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div 
                class="md-date-picker__spacer"
            ></div>
        `;
    }

    /**
     * @param {String} [item]
     * @param {String} [component="icon"]
     */
    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    /**
     */
    renderDatePickerYear() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__list">
                ${this.years.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatePickerYearItemClick}"
                        class="md-date-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    /**
     */
    renderDatePickerMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__list">
                ${this.months.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleDatePickerMonthItemClick}"
                        class="md-date-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    /**
     */
    renderDatePickerDay() {
        /* prettier-ignore */
        return html`
            <div class="md-date-picker__table">
                <div class="md-date-picker__table-header">
                    <div class="md-date-picker__table-row">
                        ${this.weekdays.map((item) => html`
                            <div class="md-date-picker__table-cell">${item.label}</div>    
                        `)}
                    </div>
                </div>
                <div class="md-date-picker__table-body">
                    ${this.days.map((row) => html`
                        <div class="md-date-picker__table-row">
                            ${row.map((item) => html`
                                <div
                                    .data="${item}"
                                    ?selected="${item.selected}"
                                    ?activated="${item.activated}"
                                    @click="${this.handleDatePickerDayItemClick}"
                                    class="${classMap({
                                        "md-date-picker__table-cell": true,
                                        "md-date-picker__table-cell--same-month": item.isSameMonth,
                                        "md-date-picker__table-cell--sunday": item.isSunday,
                                    })}"
                                >${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `;
    }

    /**
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length? html`
                <div class="md-date-picker__header">
                    <div class="md-date-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                    ${this.actions?.length ? html` <div class="md-date-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                </div>
            `: nothing}
            <div class="md-date-picker__wrapper">
                <div class="md-date-picker__body">
                    <div class="md-date-picker__items">
                        <div class="md-date-picker__item">${cache([
                            this.renderDatePickerYear.bind(this), 
                            this.renderDatePickerMonth.bind(this), 
                            this.renderDatePickerDay.bind(this), 
                        ][this.index]())}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html`
                    <div class="md-date-picker__footer">
                        ${this.buttons?.length ? html`
                            <div class="md-date-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                        ` : nothing}
                    </div>    
                ` : nothing}
            </div>
        `;
    }

    /**
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = new Date(this.value.valueOf());
        this.defaultIndex = this.index;
        this.classList.add("md-date-picker");
        this.style.setProperty("--md-comp-date-picker-animation", "none");
        this.datePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.datePickerScrim, this.nextElementSibling);
        this.handleDatePickerScrimClose = this.handleDatePickerScrimClose.bind(this);
        this.datePickerScrim.addEventListener("onScrimClose", this.handleDatePickerScrimClose);
        if (this.modal && this.open) this.datePickerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-date-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-date-picker-width", this.clientWidth + "px");
    }

    /**
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.datePickerScrim.removeEventListener("onScrimClose", this.handleDatePickerScrimClose);
        this.datePickerScrim.remove();
    }

    /**
     * @async
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-date-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-date-picker--modal`, !!this.modal);
        }
        if (changedProperties.has("value")) {
            await this.updateComplete;
            this.selection = new Date(this.value.valueOf());
        }
    }

    /**
     * @param {Object} [options]
     */
    show(options) {
        this.index = this.defaultIndex;
        this.handleDatePickerShown = this.handleDatePickerShown.bind(this);
        this.addEventListener("animationend", this.handleDatePickerShown);
        this.style.removeProperty("--md-comp-date-picker-animation");
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
        if (this.modal) this.datePickerScrim.show();
        this.emit("onDatePickerShow");
    }

    /**
     */
    close() {
        this.handleDatePickerClosed = this.handleDatePickerClosed.bind(this);
        this.addEventListener("animationend", this.handleDatePickerClosed);
        this.style.removeProperty("--md-comp-date-picker-animation");
        this.open = false;
        if (this.modal) this.datePickerScrim.close();
        this.emit("onDatePickerClose");
    }

    /**
     * @param {Object} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatePickerYearItemClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatePickerMonthItemClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerDayItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setDate(data.day);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setDate(data.day);
        this.requestUpdate();
        this.emit("onDatePickerDayItemClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerScrimClose(event) {
        if (this.open) this.close();
        this.emit("onDatePickerScrimClose", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerShown(event) {
        this.removeEventListener("animationend", this.handleDatePickerShown);
        this.emit("onDatePickerShown");
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerClosed(event) {
        this.removeEventListener("animationend", this.handleDatePickerClosed);
        this.emit("onDatePickerClosed");
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() - 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() - 1),
            2: () => this.selection.setMonth(this.selection.getMonth() - 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatePickerIconButtonPrevClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() + 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() + 1),
            2: () => this.selection.setMonth(this.selection.getMonth() + 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onDatePickerIconButtonNextClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleDatePickerIconButtonPrevClick.bind(this),
            next: this.handleDatePickerIconButtonNextClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onDatePickerIconButtonClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onDatePickerButtonCancelClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerButtonOkClick(event) {
        // this.close();
        this.emit("onDatePickerButtonOkClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 2,
            2: 0,
        };
        this.index = map[this.index];
        this.emit("onDatePickerButtonLabelClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleDatePickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleDatePickerButtonCancelClick.bind(this),
            ok: this.handleDatePickerButtonOkClick.bind(this),
            label: this.handleDatePickerButtonLabelClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onDatePickerButtonClick", { event });
    }
}
customElements.define("md-date-picker", MdDatePickerComponent);
export { MdDatePickerComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseDate, stringifyDate } from "../util/util";
import { Popper } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";

/**
 *
 * @extends MdComponent
 * @fires onDatePickerLabelClick
 * @fires onDatePickerIconButtonPrevClick
 * @fires onDatePickerIconButtonNextClick
 * @fires onDatePickerIconButtonClick
 * @fires onDatePickerYearItemClick
 * @fires onDatePickerMonthItemClick
 * @fires onDatePickerDayItemClick
 * @fires onDatePickerButtonCancelClick
 * @fires onDatePickerButtonOkClick
 * @fires onDatePickerButtonLabelClick
 * @fires onDatePickerButtonClick
 * @fires onDatePickerScrimClosed
 * @fires onDatePickerShown
 * @fires onDatePickerClosed
 * @element md-date-picker
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
                    return parseDate(value);
                },
                toAttribute: (value, type) => {
                    return stringifyDate(value);
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
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
            2: () => stringifyDate(this.selection),
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
                @click="${this.handleDatePickerIconButtonClick}"
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
                @click="${this.handleDatePickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-date-picker__spacer"></div> `;
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
    renderDatePickerYear() {
        return html`
            <div class="md-date-picker__list">
                ${this.years.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatePickerYearItemClick}"
                            class="md-date-picker__list-item"
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
    renderDatePickerMonth() {
        return html`
            <div class="md-date-picker__list">
                ${this.months.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatePickerMonthItemClick}"
                            class="md-date-picker__list-item"
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
    renderDatePickerDay() {
        return html`
            <div class="md-date-picker__table">
                <div class="md-date-picker__table-header">
                    <div class="md-date-picker__table-row">${this.weekdays.map((item) => html` <div class="md-date-picker__table-cell">${item.label}</div> `)}</div>
                </div>
                <div class="md-date-picker__table-body">
                    ${this.days.map(
                        (row) => html`
                            <div class="md-date-picker__table-row">
                                ${row.map(
                                    (item) => html`
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
    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length
                ? html`
                      <div class="md-date-picker__header">
                          <div class="md-date-picker__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-date-picker__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-date-picker__wrapper">
                <div class="md-date-picker__body">
                    <div class="md-date-picker__items">
                        <div class="md-date-picker__item">${this.renderDatePickerYear()}</div>
                        <div class="md-date-picker__item">${this.renderDatePickerMonth()}</div>
                        <div class="md-date-picker__item">${this.renderDatePickerDay()}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-date-picker__footer">${this.buttons?.length ? html` <div class="md-date-picker__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}
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
        this.datePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.datePickerScrim, this.nextElementSibling);
        this.handleDatePickerScrimClosed = this.handleDatePickerScrimClosed.bind(this);
        this.datePickerScrim.addEventListener("onScrimClosed", this.handleDatePickerScrimClosed);
        if (this.modal && this.open) this.datePickerScrim.show();
        this.classList.add("md-date-picker");
        this.style.setProperty("--md-comp-date-picker-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-date-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-date-picker-width", this.clientWidth + "px");
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
        this.datePickerScrim.removeEventListener("onScrimClosed", this.handleDatePickerScrimClosed);
        this.datePickerScrim.remove();
        this.classList.remove("md-date-picker");
    }

    /**
     *
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-date-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-date-picker--modal`, !!this.modal);
        }
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerLabelClick(event) {
        this.emit("onDatePickerLabelClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerIconButtonPrevClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() - 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() - 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() - 1);
        this.requestUpdate();
        this.emit("onDatePickerIconButtonPrevClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerIconButtonNextClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() + 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() + 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() + 1);
        this.requestUpdate();
        this.emit("onDatePickerIconButtonNextClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "prev") return this.handleDatePickerIconButtonPrevClick(event);
        else if (data.id === "next") return this.handleDatePickerIconButtonNextClick(event);
        this.emit("onDatePickerIconButtonClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onDatePickerYearItemClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onDatePickerMonthItemClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
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
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerButtonCancelClick(event) {
        this.close();
        this.value.setFullYear(this.defaultValue.getFullYear());
        this.value.setMonth(this.defaultValue.getMonth());
        this.value.setDate(this.defaultValue.getDate());
        this.emit("onDatePickerButtonCancelClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerButtonOkClick(event) {
        this.close();
        this.emit("onDatePickerButtonOkClick", {
            event,
            value: stringifyDate(this.value),
        });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerButtonLabelClick(event) {
        const map = {
            2: 0,
            0: 1,
            1: 2,
        };
        this.index = map[this.index];
        this.emit("onDatePickerButtonLabelClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleDatePickerButtonCancelClick(event);
        else if (data.id === "ok") return this.handleDatePickerButtonOkClick(event);
        else if (data.id === "label") return this.handleDatePickerButtonLabelClick(event);
        this.emit("onDatePickerButtonClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDatePickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onDatePickerScrimClosed", { event });
    }

    /**
     *
     * @param {Any} [options]
     */
    show(options) {
        this.style.removeProperty("--md-comp-date-picker-animation");
        this.index = this.defaultIndex;
        if (this.modal) this.datePickerScrim.show();
        this.open = true;
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.popper = new Popper();
        this.popper.show(options);
        this.emit("onDatePickerShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-date-picker-animation");
        this.open = false;
        this.datePickerScrim.close();
        this.emit("onDatePickerClosed");
    }

    /**
     *
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}
customElements.define("md-date-picker", MdDatePickerComponent);
export { MdDatePickerComponent };

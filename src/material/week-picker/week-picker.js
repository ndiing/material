import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseWeek, stringifyWeek } from "../util/util";
import { Popper } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
/**
 * @class MdWeekPickerComponent
 * @extends MdComponent
 * @fires onWeekPickerLabelClick
 * @fires onWeekPickerIconButtonPrevClick
 * @fires onWeekPickerIconButtonNextClick
 * @fires onWeekPickerIconButtonClick
 * @fires onWeekPickerYearItemClick
 * @fires onWeekPickerMonthItemClick
 * @fires onWeekPickerWeekRowClick
 * @fires onWeekPickerHourItemClick
 * @fires onWeekPickerMinuteItemClick
 * @fires onWeekPickerButtonCancelClick
 * @fires onWeekPickerButtonOkClick
 * @fires onWeekPickerButtonLabelClick
 * @fires onWeekPickerButtonClick
 * @fires onWeekPickerScrimClosed
 * @fires onWeekPickerShown
 * @fires onWeekPickerClosed
 */
class MdWeekPickerComponent extends MdComponent {
    /**
     * @property {Array} icons
     * @property {Array} actions
     * @property {String} label
     * @property {String} sublabel
     * @property {Array} buttons
     * @property {Boolean} open
     * @property {Boolean} modal
     * @property {Number} index
     * @property {undefined} value
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
                    return parseWeek(value);
                },
                toAttribute: (value, type) => {
                    return stringifyWeek(value);
                },
            },
        },
    };

    /**
     */
    get startOfDay() {
        return new Date(this.selection.getFullYear(), this.selection.getMonth()).getDay();
    }

    /**
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
     */
    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k + 1);
            return {
                label: this.weekdayFormat(date),
            };
        });
    }

    /**
     */
    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            const date2 = new Date(this.selection.getFullYear(), this.selection.getMonth(), k * 7 + 0 + 1 - this.startOfDay + 1);

            const children = Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), k * 7 + k2 + 1 - this.startOfDay + 1);
                return {
                    label: this.dayFormat(date),
                    isSameMonth: date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth(),
                    isSunday: date.getDay() === 0,
                };
            });

            return {
                year: date2.getFullYear(),
                month: date2.getMonth(),
                week: date2.getWeek(),
                selected: date2.getFullYear() === this.value.getFullYear() && date2.getWeek() === this.value.getWeek(),
                activated: date2.getFullYear() === this.current.getFullYear() && date2.getWeek() === this.current.getWeek(),
                children,
            };
        });
    }

    /**
     */
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
            2: () => stringifyWeek(this.selection),
        };
        return [{ component: "button", id: "label", label: map[this.index]() }];
    }

    /**
     */
    constructor() {
        super();
        this.current = new Date();
        this.value = new Date();
        this.selection = new Date();
        this.index = 2;
        this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
        this.actions = [
            { id: "prev", icon: "keyboard_arrow_left" },
            { id: "next", icon: "keyboard_arrow_right" },
        ];
        this.buttons = [{ component: "spacer" }, { id: "cancel", label: "Cancel" }, { id: "ok", label: "Ok" }];
    }

    /**
     * @param {String} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @param {String} [item]
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
                @click="${this.handleWeekPickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @param {String} [item]
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
                @click="${this.handleWeekPickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @param {String} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-week-picker__spacer"></div> `;
    }

    /**
     * @param {String} [item]
     * @param {String} [component=icon]
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
     */
    renderWeekPickerYear() {
        return html`
            <div class="md-week-picker__list">
                ${this.years.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleWeekPickerYearItemClick}"
                            class="md-week-picker__list-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     */
    renderWeekPickerMonth() {
        return html`
            <div class="md-week-picker__list">
                ${this.months.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleWeekPickerMonthItemClick}"
                            class="md-week-picker__list-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     */
    renderWeekPickerDay() {
        return html`
            <div class="md-week-picker__table">
                <div class="md-week-picker__table-header">
                    <div class="md-week-picker__table-row">${this.weekdays.map((item) => html` <div class="md-week-picker__table-cell">${item.label}</div> `)}</div>
                </div>
                <div class="md-week-picker__table-body">
                    ${this.days.map(
                        (row) => html`
                            <div
                                class="md-week-picker__table-row"
                                .data="${row}"
                                ?selected="${row.selected}"
                                ?activated="${row.activated}"
                                @click="${this.handleWeekPickerWeekRowClick}"
                            >
                                ${row.children.map(
                                    (item) => html`
                                        <div
                                            class="${classMap({
                                                "md-week-picker__table-cell": true,
                                                "md-week-picker__table-cell--same-month": item.isSameMonth,
                                                "md-week-picker__table-cell--sunday": item.isSunday,
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
     */
    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length
                ? html`
                      <div class="md-week-picker__header">
                          <div class="md-week-picker__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-week-picker__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-week-picker__wrapper">
                <div class="md-week-picker__body">
                    <div class="md-week-picker__items">
                        <div class="md-week-picker__item">${this.renderWeekPickerYear()}</div>
                        <div class="md-week-picker__item">${this.renderWeekPickerMonth()}</div>
                        <div class="md-week-picker__item">${this.renderWeekPickerDay()}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-week-picker__footer">${this.buttons?.length ? html` <div class="md-week-picker__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}
            </div>
        `;
    }

    /**
     */
    async connectedCallback() {
        super.connectedCallback();
        this.weekPickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.weekPickerScrim, this.nextElementSibling);
        this.handleWeekPickerScrimClosed = this.handleWeekPickerScrimClosed.bind(this);
        this.weekPickerScrim.addEventListener("onScrimClosed", this.handleWeekPickerScrimClosed);
        if (this.modal && this.open) this.weekPickerScrim.show();
        this.classList.add("md-week-picker");
        this.style.setProperty("--md-comp-week-picker-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-week-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-week-picker-width", this.clientWidth + "px");
        this.selection = new Date(this.value.valueOf());
        this.defaultValue = new Date(this.value.valueOf());
        this.defaultIndex = this.index;
    }

    /**
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.weekPickerScrim.removeEventListener("onScrimClosed", this.handleWeekPickerScrimClosed);
        this.weekPickerScrim.remove();
        this.classList.remove("md-week-picker");
    }

    /**
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-week-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-week-picker--modal`, !!this.modal);
        }
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerLabelClick(event) {
        this.emit("onWeekPickerLabelClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerIconButtonPrevClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() - 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() - 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() - 1);
        this.requestUpdate();
        this.emit("onWeekPickerIconButtonPrevClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerIconButtonNextClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() + 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() + 1);
        else if (this.index === 2) this.selection.setMonth(this.selection.getMonth() + 1);
        this.requestUpdate();
        this.emit("onWeekPickerIconButtonNextClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "prev") return this.handleWeekPickerIconButtonPrevClick(event);
        else if (data.id === "next") return this.handleWeekPickerIconButtonNextClick(event);
        this.emit("onWeekPickerIconButtonClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onWeekPickerYearItemClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;
        this.emit("onWeekPickerMonthItemClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerWeekRowClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setWeek(data.week);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setWeek(data.week);
        this.requestUpdate();
        this.emit("onWeekPickerWeekRowClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerButtonCancelClick(event) {
        this.close();
        this.value.setFullYear(this.defaultValue.getFullYear());
        this.value.setMonth(this.defaultValue.getMonth());
        this.value.setDate(this.defaultValue.getDate());

        this.emit("onWeekPickerButtonCancelClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerButtonOkClick(event) {
        this.close();
        this.emit("onWeekPickerButtonOkClick", { event, value: stringifyWeek(this.value) });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerButtonLabelClick(event) {
        const map = {
            2: 0,
            0: 1,
            1: 2,
        };
        this.index = map[this.index];
        this.emit("onWeekPickerButtonLabelClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleWeekPickerButtonCancelClick(event);
        else if (data.id === "ok") return this.handleWeekPickerButtonOkClick(event);
        else if (data.id === "label") return this.handleWeekPickerButtonLabelClick(event);
        this.emit("onWeekPickerButtonClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleWeekPickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onWeekPickerScrimClosed", { event });
    }

    /**
     * @param {Object} [options]
     */
    show(options) {
        this.style.removeProperty("--md-comp-week-picker-animation");
        this.index = this.defaultIndex;
        if (this.modal) this.weekPickerScrim.show();
        this.open = true;
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.popper = new Popper();
        this.popper.show(options);
        this.emit("onWeekPickerShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-week-picker-animation");
        this.open = false;
        this.weekPickerScrim.close();
        this.emit("onWeekPickerClosed");
    }

    /**
     * @param {Object} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}
customElements.define("md-week-picker", MdWeekPickerComponent);
export { MdWeekPickerComponent };

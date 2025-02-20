import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { closestScrollableElement, parseWeek, stringifyWeek } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-week-picker
 */
class MDWeekPickerComponent extends MdComponent {
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
                    return parseWeek(value);
                },
                toAttribute: (value, type) => {
                    return stringifyWeek(value);
                },
            },
        },
        index: { state: true },
    };

    yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;

    monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;

    weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;

    dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;

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
            const date = new Date(0, 0, k + 1);
            return {
                label: this.weekdayFormat(date),
            };
        });
    }

    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            const dateWeek = new Date(this.selection.getFullYear(), this.selection.getMonth(), k * 7 + 0 + 1 - this.startOfDay + 1);
            return {
                year: dateWeek.getFullYear(),
                month: dateWeek.getMonth(),
                week: dateWeek.getWeek(),
                selected: dateWeek.getFullYear() === this.value.getFullYear() && dateWeek.getWeek() === this.value.getWeek(),
                activated: dateWeek.getFullYear() === this.current.getFullYear() && dateWeek.getWeek() === this.current.getWeek(),
                children: Array.from({ length: 7 }, (v2, k2) => {
                    const date = new Date(this.selection.getFullYear(), this.selection.getMonth(), k * 7 + k2 + 1 - this.startOfDay);
                    return {
                        label: this.dayFormat(date),
                        isSameMonth: date.getFullYear() === this.selection.getFullYear() && date.getMonth() === this.selection.getMonth(),
                        isSunday: date.getDay() === 0,
                    };
                }),
            };
        });
    }

    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
            2: () => stringifyWeek(this.selection),
            3: () => stringifyWeek(this.selection),
            4: () => stringifyWeek(this.selection),
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
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
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
                @onIconButtonClick="${this.handleWeekPickerIconButtonClick}"
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
                @click="${this.handleWeekPickerButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-week-picker__spacer"></div> `;
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

    renderWeekPickerYear() {
        /* prettier-ignore */
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

    renderWeekPickerMonth() {
        /* prettier-ignore */
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

    renderWeekPickerDay() {
        /* prettier-ignore */
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
                                @click="${this.handleWeekPickerWeekItemClick}"
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

    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length
                ? html`
                      <div class="md-week-picker__header">
                          <div class="md-week-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-week-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-week-picker__wrapper">
                <div class="md-week-picker__body">
                    <div class="md-week-picker__items">
                        <div class="md-week-picker__item">${cache([this.renderWeekPickerYear.bind(this), this.renderWeekPickerMonth.bind(this), this.renderWeekPickerDay.bind(this)][this.index]())}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-week-picker__footer">${this.buttons?.length ? html` <div class="md-week-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = this.defaultValue || new Date(this.value.valueOf());
        this.defaultIndex = this.defaultIndex || this.index;

        this.classList.add("md-week-picker");
        this.style.setProperty("--md-comp-week-picker-animation", "none");

        this.handleWeekPickerAnimationend = this.handleWeekPickerAnimationend.bind(this);
        this.addEventListener("animationend", this.handleWeekPickerAnimationend);

        this.scrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleWeekPickerScrimClose = this.handleWeekPickerScrimClose.bind(this);
        this.scrim.addEventListener("onScrimClose", this.handleWeekPickerScrimClose);

        if (this.modal) this.scrim.open = this.open;

        await this.updateComplete;

        this.style.setProperty("--md-comp-week-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-week-picker-width", this.clientWidth + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleWeekPickerAnimationend);

        this.scrim.removeEventListener("onScrimClose", this.handleWeekPickerScrimClose);
        this.scrim.remove();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-week-picker-index", this.index);
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-week-picker--modal`, !!this.modal);
        }

        if (changedProperties.has("value")) {
            this.selection = new Date(this.value.valueOf());
        }
    }

    /**
     * @param {Any} [options]
     */
    show(options) {
        this.index = this.defaultIndex;

        this.weekPickerWindow = closestScrollableElement(this);
        this.handleWeekPickerWindowScroll = this.handleWeekPickerWindowScroll.bind(this);
        this.weekPickerWindow.addEventListener("scroll", this.handleWeekPickerWindowScroll);
        this.handleWeekPickerWindowClick = this.handleWeekPickerWindowClick.bind(this);
        window.addEventListener("click", this.handleWeekPickerWindowClick);
        this.style.removeProperty("--md-comp-week-picker-animation");
        setPosition({
            container: this,
            offset: 4 + 4,

            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        });
        this.open = true;
        if (this.modal) this.scrim.show();

        /**
         * @event onWeekPickerShow
         * @property {Object} event
         */
        this.emit("onWeekPickerShow");
    }

    /**
     */
    close() {
        this.weekPickerWindow.removeEventListener("scroll", this.handleWeekPickerWindowScroll);
        window.removeEventListener("click", this.handleWeekPickerWindowClick);
        this.style.removeProperty("--md-comp-week-picker-animation");
        this.open = false;
        if (this.modal) this.scrim.close();

        /**
         * @event onWeekPickerClose
         * @property {Object} event
         */
        this.emit("onWeekPickerClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    handleWeekPickerWindowScroll(event) {
        /**
         * @event onWeekPickerWindowScroll
         * @property {Object} event
         */
        this.emit("onWeekPickerWindowScroll", { event });
    }

    handleWeekPickerWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);

        /**
         * @event onWeekPickerWindowClick
         * @property {Object} event
         * @property {HTMLElement} target
         */
        this.emit("onWeekPickerWindowClick", { event, target });
    }

    handleWeekPickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;

        /**
         * @event onWeekPickerYearItemClick
         * @property {Object} event
         */
        this.emit("onWeekPickerYearItemClick", { event });
    }

    handleWeekPickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.index = 2;

        /**
         * @event onWeekPickerMonthItemClick
         * @property {Object} event
         */
        this.emit("onWeekPickerMonthItemClick", { event });
    }

    handleWeekPickerWeekItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.selection.setWeek(data.week);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.value.setWeek(data.week);
        this.requestUpdate();

        /**
         * @event onWeekPickerWeekItemClick
         * @property {Object} event
         */
        this.emit("onWeekPickerWeekItemClick", { event });
    }

    handleWeekPickerScrimClose(event) {
        if (this.open) this.close();

        /**
         * @event onWeekPickerScrimClose
         * @property {Object} event
         */
        this.emit("onWeekPickerScrimClose", { event });
    }

    handleWeekPickerShown(event) {
        /**
         * @event onWeekPickerShown
         * @property {Object} event
         */
        this.emit("onWeekPickerShown");
    }

    handleWeekPickerClosed(event) {
        /**
         * @event onWeekPickerClosed
         * @property {Object} event
         */
        this.emit("onWeekPickerClosed");
    }

    handleWeekPickerAnimationend(event) {
        if (event.animationName === "week-picker-out" || event.animationName === "week-picker-modal-out") this.handleWeekPickerShown(event);
        else if (event.animationName === "week-picker-in" || event.animationName === "week-picker-modal-in") this.handleWeekPickerClosed(event);
    }

    handleWeekPickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() - 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() - 1),
            2: () => this.selection.setMonth(this.selection.getMonth() - 1),
        };
        map[this.index]();
        this.requestUpdate();

        /**
         * @event onWeekPickerIconButtonPrevClick
         * @property {Object} event
         */
        this.emit("onWeekPickerIconButtonPrevClick", { event });
    }

    handleWeekPickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() + 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() + 1),
            2: () => this.selection.setMonth(this.selection.getMonth() + 1),
        };
        map[this.index]();
        this.requestUpdate();

        /**
         * @event onWeekPickerIconButtonNextClick
         * @property {Object} event
         */
        this.emit("onWeekPickerIconButtonNextClick", { event });
    }

    handleWeekPickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleWeekPickerIconButtonPrevClick.bind(this),
            next: this.handleWeekPickerIconButtonNextClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);

        /**
         * @event onWeekPickerIconButtonClick
         * @property {Object} event
         */
        this.emit("onWeekPickerIconButtonClick", { event });
    }

    handleWeekPickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());

        /**
         * @event onWeekPickerButtonCancelClick
         * @property {Object} event
         */
        this.emit("onWeekPickerButtonCancelClick", { event });
    }

    handleWeekPickerButtonOkClick(event) {
        /**
         * @event onWeekPickerButtonOkClick
         * @property {Object} event
         */
        this.emit("onWeekPickerButtonOkClick", { event });
    }

    handleWeekPickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 2,
            2: 0,
        };
        this.index = map[this.index];

        /**
         * @event onWeekPickerButtonLabelClick
         * @property {Object} event
         */
        this.emit("onWeekPickerButtonLabelClick", { event });
    }

    handleWeekPickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleWeekPickerButtonCancelClick.bind(this),
            ok: this.handleWeekPickerButtonOkClick.bind(this),
            label: this.handleWeekPickerButtonLabelClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);

        /**
         * @event onWeekPickerButtonClick
         * @property {Object} event
         */
        this.emit("onWeekPickerButtonClick", { event });
    }
}

customElements.define("md-week-picker", MDWeekPickerComponent);

export { MDWeekPickerComponent };

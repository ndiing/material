import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { closestScrollableElement, parseMonth, stringifyMonth } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-month-picker
 */
class MDMonthPickerComponent extends MdComponent {
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
                    return parseMonth(value);
                },

                toAttribute: (value, type) => {
                    return stringifyMonth(value);
                },
            },
        },
        index: { state: true },
        selection: { state: true },
    };

    yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;

    monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;

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

    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),

            1: () => this.selection.getFullYear(),
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
        this.index = 1;
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
                @onIconButtonClick="${this.handleMonthPickerIconButtonClick}"
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
                @click="${this.handleMonthPickerButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div 
                class="md-month-picker__spacer"
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

    renderMonthPickerYear() {
        /* prettier-ignore */
        return html`
            <div class="md-month-picker__list">

                ${this.years.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleMonthPickerYearItemClick}"
                        class="md-month-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    renderMonthPickerMonth() {
        /* prettier-ignore */
        return html`
            <div class="md-month-picker__list">

                ${this.months.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleMonthPickerMonthItemClick}"
                        class="md-month-picker__list-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length? html`
                <div class="md-month-picker__header">

                    <div class="md-month-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>

                    ${this.actions?.length ? html` <div class="md-month-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                </div>
            `: nothing}
            <div class="md-month-picker__wrapper">
                <div class="md-month-picker__body">
                    <div class="md-month-picker__items">
                        <div class="md-month-picker__item">${cache([
                            this.renderMonthPickerYear.bind(this), 
                            this.renderMonthPickerMonth.bind(this), 
                        ][this.index]())}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html`
                    <div class="md-month-picker__footer">
                        ${this.buttons?.length ? html`

                            <div class="md-month-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
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
        this.classList.add("md-month-picker");
        this.style.setProperty("--md-comp-month-picker-animation", "none");
        this.monthPickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.monthPickerScrim, this.nextElementSibling);
        this.handleMonthPickerScrimClose = this.handleMonthPickerScrimClose.bind(this);
        this.monthPickerScrim.addEventListener("onScrimClose", this.handleMonthPickerScrimClose);

        if (this.modal && this.open) this.monthPickerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-month-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-month-picker-width", this.clientWidth + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.monthPickerScrim.removeEventListener("onScrimClose", this.handleMonthPickerScrimClose);
        this.monthPickerScrim.remove();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-month-picker-index", this.index);
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-month-picker--modal`, !!this.modal);
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
        this.handleMonthPickerShown = this.handleMonthPickerShown.bind(this);
        this.addEventListener("animationend", this.handleMonthPickerShown);
        this.monthPickerWindow = closestScrollableElement(this);
        this.handleMonthPickerWindowScroll = this.handleMonthPickerWindowScroll.bind(this);
        this.monthPickerWindow.addEventListener("scroll", this.handleMonthPickerWindowScroll);
        this.handleMonthPickerWindowClick = this.handleMonthPickerWindowClick.bind(this);
        window.addEventListener("click", this.handleMonthPickerWindowClick);
        this.style.removeProperty("--md-comp-month-picker-animation");
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

        if (this.modal) this.monthPickerScrim.show();

        /**
         * @event onMonthPickerShow
         * @property {Object} event
         */
        this.emit("onMonthPickerShow");
    }

    /**
     */
    close() {
        this.handleMonthPickerClosed = this.handleMonthPickerClosed.bind(this);
        this.addEventListener("animationend", this.handleMonthPickerClosed);
        this.monthPickerWindow.removeEventListener("scroll", this.handleMonthPickerWindowScroll);
        window.removeEventListener("click", this.handleMonthPickerWindowClick);
        this.style.removeProperty("--md-comp-month-picker-animation");
        this.open = false;

        if (this.modal) this.monthPickerScrim.close();

        /**
         * @event onMonthPickerClose
         * @property {Object} event
         */
        this.emit("onMonthPickerClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    handleMonthPickerWindowScroll(event) {
        /**
         * @event onMonthPickerWindowScroll
         * @property {Object} event
         */
        this.emit("onMonthPickerWindowScroll", { event });
    }

    handleMonthPickerWindowClick(event) {
        3;
        const target = document.elementFromPoint(event.clientX, event.clientY);

        /**
         * @event onMonthPickerWindowClick
         * @property {Object} event
         */
        this.emit("onMonthPickerWindowClick", { event, target });
    }

    handleMonthPickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;

        /**
         * @event onMonthPickerYearItemClick
         * @property {Object} event
         */
        this.emit("onMonthPickerYearItemClick", { event });
    }

    handleMonthPickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        console.log(data);
        this.requestUpdate();

        /**
         * @event onMonthPickerMonthItemClick
         * @property {Object} event
         */
        this.emit("onMonthPickerMonthItemClick", { event });
    }

    handleMonthPickerScrimClose(event) {
        if (this.open) this.close();

        /**
         * @event onMonthPickerScrimClose
         * @property {Object} event
         */
        this.emit("onMonthPickerScrimClose", { event });
    }

    handleMonthPickerShown(event) {
        this.removeEventListener("animationend", this.handleMonthPickerShown);

        /**
         * @event onMonthPickerShown
         * @property {Object} event
         */
        this.emit("onMonthPickerShown");
    }

    handleMonthPickerClosed(event) {
        this.removeEventListener("animationend", this.handleMonthPickerClosed);

        /**
         * @event onMonthPickerClosed
         * @property {Object} event
         */
        this.emit("onMonthPickerClosed");
    }

    handleMonthPickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() - 10),

            1: () => this.selection.setFullYear(this.selection.getFullYear() - 1),
        };

        map[this.index]();
        this.requestUpdate();

        /**
         * @event onMonthPickerIconButtonPrevClick
         * @property {Object} event
         */
        this.emit("onMonthPickerIconButtonPrevClick", { event });
    }

    handleMonthPickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() + 10),

            1: () => this.selection.setFullYear(this.selection.getFullYear() + 1),
        };

        map[this.index]();
        this.requestUpdate();

        /**
         * @event onMonthPickerIconButtonNextClick
         * @property {Object} event
         */
        this.emit("onMonthPickerIconButtonNextClick", { event });
    }

    handleMonthPickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleMonthPickerIconButtonPrevClick.bind(this),
            next: this.handleMonthPickerIconButtonNextClick.bind(this),
        };

        const fn = map[data.id];

        if (fn) return fn(event);

        /**
         * @event onMonthPickerIconButtonClick
         * @property {Object} event
         */
        this.emit("onMonthPickerIconButtonClick", { event });
    }

    handleMonthPickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());

        /**
         * @event onMonthPickerButtonCancelClick
         * @property {Object} event
         */
        this.emit("onMonthPickerButtonCancelClick", { event });
    }

    handleMonthPickerButtonOkClick(event) {
        /**
         * @event onMonthPickerButtonOkClick
         * @property {Object} event
         */
        this.emit("onMonthPickerButtonOkClick", { event });
    }

    handleMonthPickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 0,
        };

        this.index = map[this.index];

        /**
         * @event onMonthPickerButtonLabelClick
         * @property {Object} event
         */
        this.emit("onMonthPickerButtonLabelClick", { event });
    }

    handleMonthPickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleMonthPickerButtonCancelClick.bind(this),
            ok: this.handleMonthPickerButtonOkClick.bind(this),
            label: this.handleMonthPickerButtonLabelClick.bind(this),
        };

        const fn = map[data.id];

        if (fn) return fn(event);

        /**
         * @event onMonthPickerButtonClick
         * @property {Object} event
         */
        this.emit("onMonthPickerButtonClick", { event });
    }
}

customElements.define("md-month-picker", MDMonthPickerComponent);

export { MDMonthPickerComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseMonth, stringifyMonth } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-month-picker
 * @fires MdMonthPickerComponent#onMonthPickerShow
 * @fires MdMonthPickerComponent#onMonthPickerClose
 * @fires MdMonthPickerComponent#onMonthPickerYearItemClick
 * @fires MdMonthPickerComponent#onMonthPickerMonthItemClick
 * @fires MdMonthPickerComponent#onMonthPickerScrimClose
 * @fires MdMonthPickerComponent#onMonthPickerShown
 * @fires MdMonthPickerComponent#onMonthPickerClosed
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonPrevClick
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonNextClick
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonCancelClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonOkClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonLabelClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonClick
 */
class MdMonthPickerComponent extends MdComponent {
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
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
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
        this.index = 1;
    }

    /**
     * @param {Any} [item]
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
     * @param {Any} [item]
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
                @click="${this.handleMonthPickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @param {Any} [item]
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
                @click="${this.handleMonthPickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @param {Any} [item]
     */
    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div 
                class="md-month-picker__spacer"
            ></div>
        `;
    }

    /**
     * @param {Any} [item]
     * @param {Any} [component="icon"]
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

    /**
     */
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

    /**
     */
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

    /**
     * @async
     */
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

    /**
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.monthPickerScrim.removeEventListener("onScrimClose", this.handleMonthPickerScrimClose);
        this.monthPickerScrim.remove();
    }

    /**
     * @async
     * @param {Any} [changedProperties]
     */
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
        this.emit("onMonthPickerShow");
    }

    /**
     */
    close() {
        this.handleMonthPickerClosed = this.handleMonthPickerClosed.bind(this);
        this.addEventListener("animationend", this.handleMonthPickerClosed);
        this.style.removeProperty("--md-comp-month-picker-animation");
        this.open = false;
        if (this.modal) this.monthPickerScrim.close();
        this.emit("onMonthPickerClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onMonthPickerYearItemClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        console.log(data);
        this.requestUpdate();
        this.emit("onMonthPickerMonthItemClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerScrimClose(event) {
        if (this.open) this.close();
        this.emit("onMonthPickerScrimClose", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerShown(event) {
        this.removeEventListener("animationend", this.handleMonthPickerShown);
        this.emit("onMonthPickerShown");
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerClosed(event) {
        this.removeEventListener("animationend", this.handleMonthPickerClosed);
        this.emit("onMonthPickerClosed");
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() - 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() - 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onMonthPickerIconButtonPrevClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setFullYear(this.selection.getFullYear() + 10),
            1: () => this.selection.setFullYear(this.selection.getFullYear() + 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onMonthPickerIconButtonNextClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleMonthPickerIconButtonPrevClick.bind(this),
            next: this.handleMonthPickerIconButtonNextClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onMonthPickerIconButtonClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onMonthPickerButtonCancelClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerButtonOkClick(event) {
        // this.close();
        this.emit("onMonthPickerButtonOkClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 0,
        };
        this.index = map[this.index];
        this.emit("onMonthPickerButtonLabelClick", { event });
    }

    /**
     * @param {Any} [event]
     */
    handleMonthPickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleMonthPickerButtonCancelClick.bind(this),
            ok: this.handleMonthPickerButtonOkClick.bind(this),
            label: this.handleMonthPickerButtonLabelClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onMonthPickerButtonClick", { event });
    }
}
customElements.define("md-month-picker", MdMonthPickerComponent);
export { MdMonthPickerComponent };

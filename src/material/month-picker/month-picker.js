import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseMonth, stringifyMonth } from "../util/util";
import { Popper } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";

/**
 * 
 * @extends MdComponent
 * @fires MdMonthPickerComponent#onMonthPickerShown
 * @fires MdMonthPickerComponent#onMonthPickerClosed
 * @fires MdMonthPickerComponent#onMonthPickerLabelClick
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonPrevClick
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonNextClick
 * @fires MdMonthPickerComponent#onMonthPickerIconButtonClick
 * @fires MdMonthPickerComponent#onMonthPickerYearItemClick
 * @fires MdMonthPickerComponent#onMonthPickerMonthItemClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonCancelClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonOkClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonLabelClick
 * @fires MdMonthPickerComponent#onMonthPickerButtonClick
 * @fires MdMonthPickerComponent#onMonthPickerScrimClosed
 * @element md-month-picker
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
                    return parseMonth(value);
                },
                toAttribute: (value, type) => {
                    return stringifyMonth(value);
                },
            },
        },
    };

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
    get icons() {
        const map = {
            0: () => [this.years[0].label, this.years[this.years.length - 1].label].join(" - "),
            1: () => this.selection.getFullYear(),
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
        this.index = 1;
        this.yearFormat = new Intl.DateTimeFormat(undefined, {
            year: "numeric",
        }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, {
            month: "long",
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
                @click="${this.handleMonthPickerIconButtonClick}"
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
                @click="${this.handleMonthPickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * 
     * @private
     * @param {Any} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-month-picker__spacer"></div> `;
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
    renderMonthPickerYear() {
        return html`
            <div class="md-month-picker__list">
                ${this.years.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleMonthPickerYearItemClick}"
                            class="md-month-picker__list-item"
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
    renderMonthPickerMonth() {
        return html`
            <div class="md-month-picker__list">
                ${this.months.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleMonthPickerMonthItemClick}"
                            class="md-month-picker__list-item"
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
                      <div class="md-month-picker__header">
                          <div class="md-month-picker__icons">${this.icons.map((icon) => this.renderItem(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-month-picker__actions">${this.actions.map((action) => this.renderItem(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-month-picker__wrapper">
                <div class="md-month-picker__body">
                    <div class="md-month-picker__items">
                        <div class="md-month-picker__item">${this.renderMonthPickerYear()}</div>
                        <div class="md-month-picker__item">${this.renderMonthPickerMonth()}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-month-picker__footer">${this.buttons?.length ? html` <div class="md-month-picker__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing}
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
        this.monthPickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.monthPickerScrim, this.nextElementSibling);
        this.handleMonthPickerScrimClosed = this.handleMonthPickerScrimClosed.bind(this);
        this.monthPickerScrim.addEventListener("onScrimClosed", this.handleMonthPickerScrimClosed);
        if (this.modal && this.open) this.monthPickerScrim.show();
        this.classList.add("md-month-picker");
        this.style.setProperty("--md-comp-month-picker-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-month-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-month-picker-width", this.clientWidth + "px");
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
        this.monthPickerScrim.removeEventListener("onScrimClosed", this.handleMonthPickerScrimClosed);
        this.monthPickerScrim.remove();
        this.classList.remove("md-month-picker");
    }

    /**
     * 
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-month-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-month-picker--modal`, !!this.modal);
        }
    }

    /**
     * 
     * @param {Any} [options]
     */
    show(options) {
        this.style.removeProperty("--md-comp-month-picker-animation");
        this.index = this.defaultIndex;
        if (this.modal) this.monthPickerScrim.show();
        this.open = true;
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.popper = new Popper();
        this.popper.show(options);
        this.emit("onMonthPickerShown");
    }

    /**
     * 
     */
    close() {
        this.style.removeProperty("--md-comp-month-picker-animation");
        this.open = false;
        this.monthPickerScrim.close();
        this.emit("onMonthPickerClosed");
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
    handleMonthPickerLabelClick(event) {
        this.emit("onMonthPickerLabelClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonPrevClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() - 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() - 1);
        this.requestUpdate();
        this.emit("onMonthPickerIconButtonPrevClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonNextClick(event) {
        if (this.index === 0) this.selection.setFullYear(this.selection.getFullYear() + 10);
        else if (this.index === 1) this.selection.setFullYear(this.selection.getFullYear() + 1);
        this.requestUpdate();
        this.emit("onMonthPickerIconButtonNextClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "prev") return this.handleMonthPickerIconButtonPrevClick(event);
        else if (data.id === "next") return this.handleMonthPickerIconButtonNextClick(event);
        this.emit("onMonthPickerIconButtonClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerYearItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.index = 1;
        this.emit("onMonthPickerYearItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerMonthItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setFullYear(data.year);
        this.selection.setMonth(data.month);
        this.value.setFullYear(data.year);
        this.value.setMonth(data.month);
        this.requestUpdate();
        this.emit("onMonthPickerMonthItemClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerButtonCancelClick(event) {
        this.close();
        this.value.setFullYear(this.defaultValue.getFullYear());
        this.value.setMonth(this.defaultValue.getMonth());
        this.emit("onMonthPickerButtonCancelClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerButtonOkClick(event) {
        this.close();
        this.emit("onMonthPickerButtonOkClick", {
            event,
            value: stringifyMonth(this.value),
        });
    }

    /**
     * 
     * @private
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
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleMonthPickerButtonCancelClick(event);
        else if (data.id === "ok") return this.handleMonthPickerButtonOkClick(event);
        else if (data.id === "label") return this.handleMonthPickerButtonLabelClick(event);
        this.emit("onMonthPickerButtonClick", { event });
    }

    /**
     * 
     * @private
     * @param {Any} [event]
     */
    handleMonthPickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onMonthPickerScrimClosed", { event });
    }
}
customElements.define("md-month-picker", MdMonthPickerComponent);
export { MdMonthPickerComponent };

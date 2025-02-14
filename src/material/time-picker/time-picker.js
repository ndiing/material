import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseTime, stringifyTime } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";

/**
 * @extends MdComponent
 * @element md-time-picker
 * @fires MdTimePickerComponent#onTimePickerShown
 * @fires MdTimePickerComponent#onTimePickerClosed
 * @fires MdTimePickerComponent#onTimePickerLabelClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonPrevClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonNextClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonClick
 * @fires MdTimePickerComponent#onTimePickerHourItemClick
 * @fires MdTimePickerComponent#onTimePickerMinuteItemClick
 * @fires MdTimePickerComponent#onTimePickerButtonCancelClick
 * @fires MdTimePickerComponent#onTimePickerButtonOkClick
 * @fires MdTimePickerComponent#onTimePickerButtonLabelClick
 * @fires MdTimePickerComponent#onTimePickerButtonClick
 * @fires MdTimePickerComponent#onTimePickerScrimClosed
 */
class MdTimePickerComponent extends MdComponent {
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
                    return parseTime(value);
                },
                toAttribute: (value, type) => {
                    return stringifyTime(value);
                },
            },
        },
        index: { state: true },
        selection: { state: true },
    };

    /**
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
     * @readonly
     */
    get icons() {
        const map = {
            0: () => stringifyTime(this.selection),
            1: () => stringifyTime(this.selection),
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
        this.index = 0;
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
     * @private
     * @param {Undefined} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
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
                @click="${this.handleTimePickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
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
                @click="${this.handleTimePickerButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-time-picker__spacer"></div> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     * @param {String} [component="icon"]
     */
    renderComponent(item, component = "icon") {
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
     * @private
     */
    renderTimePickerHour() {
        return html`
            <div class="md-time-picker__circle md-time-picker__circle--hours">
                ${this.hours.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleTimePickerHourItemClick}"
                            class="md-time-picker__circle-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * @private
     */
    renderTimePickerMinute() {
        return html`
            <div class="md-time-picker__circle md-time-picker__circle--minutes">
                ${this.minutes.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleTimePickerMinuteItemClick}"
                            class="md-time-picker__circle-item"
                        >
                            ${item.label}
                        </div>
                    `,
                )}
            </div>
        `;
    }

    /**
     * @private
     */
    render() {
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length
                ? html`
                      <div class="md-time-picker__header">
                          <div class="md-time-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                          ${this.actions?.length ? html` <div class="md-time-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                      </div>
                  `
                : nothing}
            <div class="md-time-picker__wrapper">
                <div class="md-time-picker__body">
                    <div class="md-time-picker__items">
                        <div class="md-time-picker__item">${this.renderTimePickerHour()}</div>
                        <div class="md-time-picker__item">${this.renderTimePickerMinute()}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html` <div class="md-time-picker__footer">${this.buttons?.length ? html` <div class="md-time-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing}
            </div>
        `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = new Date(this.value.valueOf());
        this.defaultIndex = this.index;
        this.classList.add("md-time-picker");
        this.style.setProperty("--md-comp-time-picker-animation", "none");
        this.timePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.timePickerScrim, this.nextElementSibling);
        this.handleTimePickerScrimClosed = this.handleTimePickerScrimClosed.bind(this);
        this.timePickerScrim.addEventListener("onScrimClosed", this.handleTimePickerScrimClosed);
        if (this.modal && this.open) this.timePickerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-time-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-time-picker-width", this.clientWidth + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.timePickerScrim.removeEventListener("onScrimClosed", this.handleTimePickerScrimClosed);
        this.timePickerScrim.remove();
    }

    /**
     * @private
     * @async
     * @param {Undefined} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-time-picker-index", this.index);
        }
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-time-picker--modal`, !!this.modal);
        }
        if (changedProperties.has("value")) {
            await this.updateComplete;
            this.selection = new Date(this.value.valueOf());
        }
    }

    /**
     * @param {Undefined} [options]
     */
    show(options) {
        this.style.removeProperty("--md-comp-time-picker-animation");
        this.index = this.defaultIndex;
        if (this.modal) this.timePickerScrim.show();
        this.open = true;
        setPosition({
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        });
        this.emit("onTimePickerShown");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-time-picker-animation");
        this.open = false;
        this.timePickerScrim.close();
        this.emit("onTimePickerClosed");
    }

    /**
     * @param {Undefined} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerLabelClick(event) {
        this.emit("onTimePickerLabelClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerIconButtonPrevClick(event) {
        if (this.index === 0) this.selection.setHours(this.selection.getHours() - 1);
        else if (this.index === 1) this.selection.setMinutes(this.selection.getMinutes() - 1);
        this.requestUpdate();
        this.emit("onTimePickerIconButtonPrevClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerIconButtonNextClick(event) {
        if (this.index === 0) this.selection.setHours(this.selection.getHours() + 1);
        else if (this.index === 1) this.selection.setMinutes(this.selection.getMinutes() + 1);
        this.requestUpdate();
        this.emit("onTimePickerIconButtonNextClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "prev") return this.handleTimePickerIconButtonPrevClick(event);
        else if (data.id === "next") return this.handleTimePickerIconButtonNextClick(event);
        this.emit("onTimePickerIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerHourItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.value.setHours(data.hour);
        this.index = 1;
        this.emit("onTimePickerHourItemClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.value.setMinutes(data.minute);
        this.index = 0;
        this.emit("onTimePickerMinuteItemClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerButtonCancelClick(event) {
        this.close();
        this.value.setHours(this.defaultValue.getHours());
        this.value.setMinutes(this.defaultValue.getMinutes());
        this.emit("onTimePickerButtonCancelClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerButtonOkClick(event) {
        this.close();
        this.emit("onTimePickerButtonOkClick", {
            event,
            value: stringifyTime(this.value),
        });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 0,
        };
        this.index = map[this.index];
        this.emit("onTimePickerButtonLabelClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleTimePickerButtonCancelClick(event);
        else if (data.id === "ok") return this.handleTimePickerButtonOkClick(event);
        else if (data.id === "label") return this.handleTimePickerButtonLabelClick(event);
        this.emit("onTimePickerButtonClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTimePickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onTimePickerScrimClosed", { event });
    }
}
customElements.define("md-time-picker", MdTimePickerComponent);
export { MdTimePickerComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { parseTime, stringifyTime } from "../util/util";
import { setPosition } from "../popper/popper";
import { classMap } from "lit/directives/class-map.js";
import { cache } from "lit/directives/cache.js";

/**
 * @extends MdComponent
 * @element md-time-picker
 * @fires MdTimePickerComponent#onTimePickerShow
 * @fires MdTimePickerComponent#onTimePickerClose
 * @fires MdTimePickerComponent#onTimePickerHourItemClick
 * @fires MdTimePickerComponent#onTimePickerMinuteItemClick
 * @fires MdTimePickerComponent#onTimePickerScrimClose
 * @fires MdTimePickerComponent#onTimePickerShown
 * @fires MdTimePickerComponent#onTimePickerClosed
 * @fires MdTimePickerComponent#onTimePickerIconButtonPrevClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonNextClick
 * @fires MdTimePickerComponent#onTimePickerIconButtonClick
 * @fires MdTimePickerComponent#onTimePickerButtonCancelClick
 * @fires MdTimePickerComponent#onTimePickerButtonOkClick
 * @fires MdTimePickerComponent#onTimePickerButtonLabelClick
 * @fires MdTimePickerComponent#onTimePickerButtonClick
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
    hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
    minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;

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
            0: () => stringifyTime(this.selection),
            1: () => stringifyTime(this.selection),
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
        this.index = 0;
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
                @click="${this.handleTimePickerIconButtonClick}"
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
                @click="${this.handleTimePickerButtonClick}"
            ></md-button>
        `;
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div 
                class="md-time-picker__spacer"
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

    renderTimePickerHour() {
        /* prettier-ignore */
        return html`
            <div class="md-time-picker__circle md-time-picker__circle--hours">
                ${this.hours.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleTimePickerHourItemClick}"
                        class="md-time-picker__circle-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    renderTimePickerMinute() {
        /* prettier-ignore */
        return html`
            <div class="md-time-picker__circle md-time-picker__circle--minutes">
                ${this.minutes.map((item) => html`
                    <div
                        .data="${item}"
                        ?selected="${item.selected}"
                        ?activated="${item.activated}"
                        @click="${this.handleTimePickerMinuteItemClick}"
                        class="md-time-picker__circle-item"
                    >${item.label}</div>
                `)}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length || this.label || this.sublabel || this.actions?.length? html`
                <div class="md-time-picker__header">
                    <div class="md-time-picker__icons">${this.icons.map((icon) => this.renderComponent(icon, "icon"))}</div>
                    ${this.actions?.length ? html` <div class="md-time-picker__actions">${this.actions.map((action) => this.renderComponent(action, "icon-button"))}</div> ` : nothing}
                </div>
            `: nothing}
            <div class="md-time-picker__wrapper">
                <div class="md-time-picker__body">
                    <div class="md-time-picker__items">
                        <div class="md-time-picker__item">${cache([
                            this.renderTimePickerHour.bind(this), 
                            this.renderTimePickerMinute.bind(this)
                        ][this.index]())}</div>
                    </div>
                </div>
                ${this.buttons?.length ? html`
                    <div class="md-time-picker__footer">
                        ${this.buttons?.length ? html`
                            <div class="md-time-picker__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
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
        this.classList.add("md-time-picker");
        this.style.setProperty("--md-comp-time-picker-animation", "none");
        this.timePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.timePickerScrim, this.nextElementSibling);
        this.handleTimePickerScrimClose = this.handleTimePickerScrimClose.bind(this);
        this.timePickerScrim.addEventListener("onScrimClose", this.handleTimePickerScrimClose);
        if (this.modal && this.open) this.timePickerScrim.show();
        await this.updateComplete;
        this.style.setProperty("--md-comp-time-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-time-picker-width", this.clientWidth + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.timePickerScrim.removeEventListener("onScrimClose", this.handleTimePickerScrimClose);
        this.timePickerScrim.remove();
    }

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
     * @param {Any} [options]
     */
    show(options) {
        this.index = this.defaultIndex;
        this.handleTimePickerShown = this.handleTimePickerShown.bind(this);
        this.addEventListener("animationend", this.handleTimePickerShown);
        this.style.removeProperty("--md-comp-time-picker-animation");
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
        if (this.modal) this.timePickerScrim.show();
        this.emit("onTimePickerShow");
    }

    /**
     */
    close() {
        this.handleTimePickerClosed = this.handleTimePickerClosed.bind(this);
        this.addEventListener("animationend", this.handleTimePickerClosed);
        this.style.removeProperty("--md-comp-time-picker-animation");
        this.open = false;
        if (this.modal) this.timePickerScrim.close();
        this.emit("onTimePickerClose");
    }

    /**
     * @param {Any} [options]
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }

    handleTimePickerHourItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setHours(data.hour);
        this.value.setHours(data.hour);
        this.index = 1;
        this.emit("onTimePickerHourItemClick", { event });
    }

    handleTimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;
        this.selection.setMinutes(data.minute);
        this.value.setMinutes(data.minute);
        this.index = 0;
        this.emit("onTimePickerMinuteItemClick", { event });
    }

    handleTimePickerScrimClose(event) {
        if (this.open) this.close();
        this.emit("onTimePickerScrimClose", { event });
    }

    handleTimePickerShown(event) {
        this.removeEventListener("animationend", this.handleTimePickerShown);
        this.emit("onTimePickerShown");
    }

    handleTimePickerClosed(event) {
        this.removeEventListener("animationend", this.handleTimePickerClosed);
        this.emit("onTimePickerClosed");
    }

    handleTimePickerIconButtonPrevClick(event) {
        const map = {
            0: () => this.selection.setHours(this.selection.getHours() - 1),
            1: () => this.selection.setMinutes(this.selection.getMinutes() - 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onTimePickerIconButtonPrevClick", { event });
    }

    handleTimePickerIconButtonNextClick(event) {
        const map = {
            0: () => this.selection.setHours(this.selection.getHours() + 1),
            1: () => this.selection.setMinutes(this.selection.getMinutes() + 1),
        };
        map[this.index]();
        this.requestUpdate();
        this.emit("onTimePickerIconButtonNextClick", { event });
    }

    handleTimePickerIconButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            prev: this.handleTimePickerIconButtonPrevClick.bind(this),
            next: this.handleTimePickerIconButtonNextClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onTimePickerIconButtonClick", { event });
    }

    handleTimePickerButtonCancelClick(event) {
        this.value = new Date(this.defaultValue.valueOf());
        // this.close();
        this.emit("onTimePickerButtonCancelClick", { event });
    }

    handleTimePickerButtonOkClick(event) {
        // this.close();
        this.emit("onTimePickerButtonOkClick", { event });
    }

    handleTimePickerButtonLabelClick(event) {
        const map = {
            0: 1,
            1: 0,
        };
        this.index = map[this.index];
        this.emit("onTimePickerButtonLabelClick", { event });
    }

    handleTimePickerButtonClick(event) {
        const data = event.currentTarget.data;
        const map = {
            cancel: this.handleTimePickerButtonCancelClick.bind(this),
            ok: this.handleTimePickerButtonOkClick.bind(this),
            label: this.handleTimePickerButtonLabelClick.bind(this),
        };
        const fn = map[data.id];
        if (fn) return fn(event);
        this.emit("onTimePickerButtonClick", { event });
    }
}
customElements.define("md-time-picker", MdTimePickerComponent);
export { MdTimePickerComponent };

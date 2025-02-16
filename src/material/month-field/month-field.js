import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseMonth, stringifyMonth } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-month-field
 */
class MdMonthFieldComponent extends MdTextFieldComponent {
    constructor() {
        super();
        this.type = "month";
    }

    get trailingActions() {
        let actions = [
            {
                id: "calendar_month",
                component: "icon-button",
                icon: "calendar_month",
            },
        ];
        return actions;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-month-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleMonthFieldPickerButtonCancelClick = this.handleMonthFieldPickerButtonCancelClick.bind(this);
            this.handleMonthFieldPickerButtonOkClick = this.handleMonthFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.picker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);

            this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.picker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);

            this.handleMonthFieldPickerWindowScroll = this.handleMonthFieldPickerWindowScroll.bind(this);
            this.handleMonthFieldPickerWindowClick = this.handleMonthFieldPickerWindowClick.bind(this);
            this.picker.addEventListener("onMonthPickerWindowScroll", this.handleMonthFieldPickerWindowScroll);
            this.picker.addEventListener("onMonthPickerWindowClick", this.handleMonthFieldPickerWindowClick);

            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);

            this.picker.removeEventListener("onMonthPickerWindowScroll", this.handleMonthFieldPickerWindowScroll);
            this.picker.removeEventListener("onMonthPickerWindowClick", this.handleMonthFieldPickerWindowClick);

            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            if (this.textFieldNative.value) this.picker.value = parseMonth(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            this.picker.close();
        }
    }

    /**
     * @param {Any} [options]
     */
    togglePicker(options) {
        if (this.picker) {
            if (this.picker.open) this.closePicker();
            else this.showPicker(options);
        }
    }

    handleMonthFieldPickerWindowClick(event) {
        const { clientX, clientY } = event.detail.event;
        const target = document.elementFromPoint(clientX, clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    handleMonthFieldPickerWindowScroll(event) {
        this.closePicker();
    }

    handleMonthFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    handleMonthFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyMonth(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    async handleTextFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "calendar_month") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-month-field", MdMonthFieldComponent);
export { MdMonthFieldComponent };

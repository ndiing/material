import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseMonth, stringifyMonth } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-month-field
 */
class MdMonthFieldComponent extends MdTextFieldComponent {
    /**
     */
    constructor() {
        super();
        this.type = "month";
    }

    /**
     * @readonly
     */
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

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
    }

    /**
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    /**
     * @async
     */
    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-month-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleMonthFieldPickerButtonCancelClick = this.handleMonthFieldPickerButtonCancelClick.bind(this);
            this.handleMonthFieldPickerButtonOkClick = this.handleMonthFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.picker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);
            await this.picker.updateComplete;
        }
    }

    /**
     */
    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handleMonthFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handleMonthFieldPickerButtonOkClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            this.pickerContainer = closestScrollableElement(this);
            this.handleMonthFieldWindowClick = this.handleMonthFieldWindowClick.bind(this);
            this.handleMonthFieldWindowScroll = this.handleMonthFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleMonthFieldWindowClick);
            this.pickerContainer.addEventListener("scroll", this.handleMonthFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseMonth(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleMonthFieldWindowClick);
            this.pickerContainer.removeEventListener("scroll", this.handleMonthFieldWindowScroll);
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

    /**
     * @param {Any} [event]
     */
    handleMonthFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    /**
     * @param {Any} [event]
     */
    handleMonthFieldWindowScroll(event) {
        this.closePicker();
    }

    /**
     * @param {Any} [event]
     */
    handleMonthFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    /**
     * @param {Any} [event]
     */
    handleMonthFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyMonth(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    /**
     * @async
     * @param {Any} [event]
     */
    async handleTextFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    /**
     * @param {Any} [event]
     */
    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "calendar_month") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-month-field", MdMonthFieldComponent);
export { MdMonthFieldComponent };

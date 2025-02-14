import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseDate, stringifyDate } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-date-field
 */
class MdDateFieldComponent extends MdTextFieldComponent {
    /**
     */
    constructor() {
        super();
        this.type = "date";
    }

    /**
     * @readonly
     */
    get trailingActions() {
        let actions = [
            {
                id: "calendar_today",
                component: "icon-button",
                icon: "calendar_today",
            },
        ];
        return actions;
    }

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
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
            this.picker = document.createElement("md-date-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleDateFieldPickerButtonCancelClick = this.handleDateFieldPickerButtonCancelClick.bind(this);
            this.handleDateFieldPickerButtonOkClick = this.handleDateFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
            this.picker.addEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);
            await this.picker.updateComplete;
        }
    }

    /**
     */
    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Object} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            this.pickerContainer = closestScrollableElement(this);
            this.handleDateFieldWindowClick = this.handleDateFieldWindowClick.bind(this);
            this.handleDateFieldWindowScroll = this.handleDateFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleDateFieldWindowClick);
            this.pickerContainer.addEventListener("scroll", this.handleDateFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseDate(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleDateFieldWindowClick);
            this.pickerContainer.removeEventListener("scroll", this.handleDateFieldWindowScroll);
            this.picker.close();
        }
    }

    /**
     * @param {Object} [options]
     */
    togglePicker(options) {
        if (this.picker) {
            if (this.picker.open) this.closePicker();
            else this.showPicker(options);
        }
    }

    /**
     * @param {Object} [event]
     */
    handleDateFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    /**
     * @param {Object} [event]
     */
    handleDateFieldWindowScroll(event) {
        this.closePicker();
    }

    /**
     * @param {Object} [event]
     */
    handleDateFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    /**
     * @param {Object} [event]
     */
    handleDateFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyDate(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    /**
     * @async
     * @param {Object} [event]
     */
    async handleTextFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    /**
     * @param {Object} [event]
     */
    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "calendar_today") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-date-field", MdDateFieldComponent);
export { MdDateFieldComponent };

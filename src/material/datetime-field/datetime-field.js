import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseDatetimeLocal, stringifyDatetimeLocal } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-datetime-field
 */
class MdDatetimeFieldComponent extends MdTextFieldComponent {
    /**
     */
    constructor() {
        super();
        this.type = "datetime-local";
    }

    /**
     * @readonly
     */
    get trailingActions() {
        let actions = [
            {
                id: "calendar_clock",
                component: "icon-button",
                icon: "calendar_clock",
            },
        ];
        return actions;
    }

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
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
            this.picker = document.createElement("md-datetime-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleDatetimeFieldPickerButtonCancelClick = this.handleDatetimeFieldPickerButtonCancelClick.bind(this);
            this.handleDatetimeFieldPickerButtonOkClick = this.handleDatetimeFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
            await this.picker.updateComplete;
        }
    }

    /**
     */
    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
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
            this.handleDatetimeFieldWindowClick = this.handleDatetimeFieldWindowClick.bind(this);
            this.handleDatetimeFieldWindowScroll = this.handleDatetimeFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleDatetimeFieldWindowClick);
            this.pickerContainer.addEventListener("scroll", this.handleDatetimeFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseDatetimeLocal(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleDatetimeFieldWindowClick);
            this.pickerContainer.removeEventListener("scroll", this.handleDatetimeFieldWindowScroll);
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
    handleDatetimeFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    /**
     * @param {Any} [event]
     */
    handleDatetimeFieldWindowScroll(event) {
        this.closePicker();
    }

    /**
     * @param {Any} [event]
     */
    handleDatetimeFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    /**
     * @param {Any} [event]
     */
    handleDatetimeFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyDatetimeLocal(this.picker.value);
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
        if (data.id === "calendar_clock") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-datetime-field", MdDatetimeFieldComponent);
export { MdDatetimeFieldComponent };

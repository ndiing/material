import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../material";
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
                id: "today",
                component: "icon-button",
                icon: "today",
            },
        ];
        return actions;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    /**
     * @private
     */
    createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-datetime-picker");
            if (this.textFieldNative.value) this.picker.value = parseDatetimeLocal(this.textFieldNative.value);
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleDatetimeFieldPickerButtonCancelClick = this.handleDatetimeFieldPickerButtonCancelClick.bind(this);
            this.handleDatetimeFieldPickerButtonOkClick = this.handleDatetimeFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
        }
    }

    /**
     * @private
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
     * @param {Object} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            this.pickerContainer = closestScrollableElement(this);
            this.handleDatetimeFieldWindowClick = this.handleDatetimeFieldWindowClick.bind(this);
            this.handleDatetimeFieldWindowScroll = this.handleDatetimeFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleDatetimeFieldWindowClick);
            this.pickerContainer.addEventListener("scroll", this.handleDatetimeFieldWindowScroll);
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
     * @param {Object} [options]
     */
    togglePicker(options) {
        if (this.picker) {
            if (this.picker.open) this.closePicker();
            else this.showPicker(options);
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDatetimeFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDatetimeFieldWindowScroll(event) {
        this.closePicker();
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDatetimeFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDatetimeFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyDatetimeLocal(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    /**
     * @private
     * @async
     * @param {Object} [event]
     */
    async handleTextFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        this.createPicker();
        await this.picker.updateComplete;
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "today") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-datetime-field", MdDatetimeFieldComponent);
export { MdDatetimeFieldComponent };

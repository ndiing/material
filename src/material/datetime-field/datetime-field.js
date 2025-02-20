import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MDTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseDatetimeLocal, stringifyDatetimeLocal } from "../util/util";
/**
 * @extends MDTextFieldComponent
 * @element md-datetime-field
 */
class MDDatetimeFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();
        this.type = "datetime-local";
    }

    get trailingActions() {
        let actions = [
            {
                id: "picker",
                component: "icon-button",
                icon: "calendar_clock",
            },
        ];
        return actions;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-datetime-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleDatetimeFieldPickerButtonCancelClick = this.handleDatetimeFieldPickerButtonCancelClick.bind(this);
            this.handleDatetimeFieldPickerButtonOkClick = this.handleDatetimeFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
            this.handleDatetimeFieldPickerWindowScroll = this.handleDatetimeFieldPickerWindowScroll.bind(this);
            this.handleDatetimeFieldPickerWindowClick = this.handleDatetimeFieldPickerWindowClick.bind(this);
            this.picker.addEventListener("onDatetimePickerWindowScroll", this.handleDatetimeFieldPickerWindowScroll);
            this.picker.addEventListener("onDatetimePickerWindowClick", this.handleDatetimeFieldPickerWindowClick);
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
            this.picker.removeEventListener("onDatetimePickerWindowScroll", this.handleDatetimeFieldPickerWindowScroll);
            this.picker.removeEventListener("onDatetimePickerWindowClick", this.handleDatetimeFieldPickerWindowClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }
    /**
     * @param {Any} [options={}]
     */

    showPicker(options = {}) {
        if (this.picker) {
            if (this.textFieldNative.value) this.picker.value = parseDatetimeLocal(this.textFieldNative.value);
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

    handleDatetimeFieldPickerWindowClick(event) {
        if (!this.pickerTrigger.contains(event.detail.target) && !this.picker.contains(event.detail.target)) {
            this.closePicker();
        }
    }

    handleDatetimeFieldPickerWindowScroll(event) {
        this.closePicker();
    }

    handleDatetimeFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    handleDatetimeFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyDatetimeLocal(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    async handleDatetimeFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "picker") return this.handleDatetimeFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-datetime-field", MDDatetimeFieldComponent);

export { MDDatetimeFieldComponent };

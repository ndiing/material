import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MDTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseDate, stringifyDate } from "../util/util";
/**
 * @extends MDTextFieldComponent
 * @element md-date-field
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();

        this.type = "date";
    }

    get trailingActions() {
        let actions = [
            {
                id: "picker",
                component: "icon-button",
                icon: "calendar_today",
            },
        ];
        return actions;
    }
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-date-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removePicker();
    }

    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-date-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleDateFieldPickerButtonCancelClick = this.handleDateFieldPickerButtonCancelClick.bind(this);
            this.picker.addEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
            this.handleDateFieldPickerButtonOkClick = this.handleDateFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);
            this.handleDateFieldPickerWindowScroll = this.handleDateFieldPickerWindowScroll.bind(this);
            this.picker.addEventListener("onDatePickerWindowScroll", this.handleDateFieldPickerWindowScroll);
            this.handleDateFieldPickerWindowClick = this.handleDateFieldPickerWindowClick.bind(this);
            this.picker.addEventListener("onDatePickerWindowClick", this.handleDateFieldPickerWindowClick);
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onDatePickerButtonCancelClick", this.handleDateFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onDatePickerButtonOkClick", this.handleDateFieldPickerButtonOkClick);
            this.picker.removeEventListener("onDatePickerWindowScroll", this.handleDateFieldPickerWindowScroll);
            this.picker.removeEventListener("onDatePickerWindowClick", this.handleDateFieldPickerWindowClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            if (this.textFieldNative.value) {
                this.picker.value = parseDate(this.textFieldNative.value);
            }
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
            if (this.picker.open) {
                this.closePicker();
            } else {
                this.showPicker(options);
            }
        }
    }

    handleDateFieldPickerWindowClick(event) {
        if (!this.pickerTrigger.contains(event.detail.target) && !this.picker.contains(event.detail.target)) {
            this.closePicker();
        }
    }

    handleDateFieldPickerWindowScroll(event) {
        this.closePicker();
    }

    handleDateFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    handleDateFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyDate(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    async handleDateFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;

        if (data.id === "picker") {
            return this.handleDateFieldIconButtonPickerClick(event);
        }
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };

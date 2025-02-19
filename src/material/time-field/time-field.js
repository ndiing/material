import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MDTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseTime, stringifyTime } from "../util/util";
/**
 * @extends MDTextFieldComponent
 * @element md-time-field
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();
        this.type = "time";
    }

    get trailingActions() {
        let actions = [
            {
                id: "picker",
                component: "icon-button",
                icon: "schedule",
            },
        ];
        return actions;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-time-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleTimeFieldPickerButtonCancelClick = this.handleTimeFieldPickerButtonCancelClick.bind(this);
            this.handleTimeFieldPickerButtonOkClick = this.handleTimeFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onTimePickerButtonCancelClick", this.handleTimeFieldPickerButtonCancelClick);
            this.picker.addEventListener("onTimePickerButtonOkClick", this.handleTimeFieldPickerButtonOkClick);
            this.handleTimeFieldPickerWindowScroll = this.handleTimeFieldPickerWindowScroll.bind(this);
            this.handleTimeFieldPickerWindowClick = this.handleTimeFieldPickerWindowClick.bind(this);
            this.picker.addEventListener("onTimePickerWindowScroll", this.handleTimeFieldPickerWindowScroll);
            this.picker.addEventListener("onTimePickerWindowClick", this.handleTimeFieldPickerWindowClick);
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handleTimeFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handleTimeFieldPickerButtonOkClick);
            this.picker.removeEventListener("onTimePickerWindowScroll", this.handleTimeFieldPickerWindowScroll);
            this.picker.removeEventListener("onTimePickerWindowClick", this.handleTimeFieldPickerWindowClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            if (this.textFieldNative.value) this.picker.value = parseTime(this.textFieldNative.value);
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

    handleTimeFieldPickerWindowClick(event) {
        if (!this.pickerTrigger.contains(event.detail.target) && !this.picker.contains(event.detail.target)) {
            this.closePicker();
        }
    }

    handleTimeFieldPickerWindowScroll(event) {
        this.closePicker();
    }

    handleTimeFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    handleTimeFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyTime(this.picker.value);
        this.updateValue();
        this.closePicker();
    }

    async handleTimeFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;

        if (data.id === "picker") return this.handleTimeFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-time-field", MDTimeFieldComponent);

export { MDTimeFieldComponent };

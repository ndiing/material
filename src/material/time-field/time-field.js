import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseTime, stringifyTime } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-time-field
 */
class MdTimeFieldComponent extends MdTextFieldComponent {
    constructor() {
        super();
        this.type = "time";
    }

    get trailingActions() {
        let actions = [
            {
                id: "schedule",
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
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handleTimeFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handleTimeFieldPickerButtonOkClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            this.pickerWindow = closestScrollableElement(this);
            this.handleTimeFieldWindowClick = this.handleTimeFieldWindowClick.bind(this);
            this.handleTimeFieldWindowScroll = this.handleTimeFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleTimeFieldWindowClick);
            this.pickerWindow.addEventListener("scroll", this.handleTimeFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseTime(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleTimeFieldWindowClick);
            this.pickerWindow.removeEventListener("scroll", this.handleTimeFieldWindowScroll);
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

    handleTimeFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    handleTimeFieldWindowScroll(event) {
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

    async handleTextFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "schedule") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-time-field", MdTimeFieldComponent);
export { MdTimeFieldComponent };

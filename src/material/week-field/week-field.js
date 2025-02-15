import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseWeek, stringifyWeek } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-week-field
 */
class MdWeekFieldComponent extends MdTextFieldComponent {
    constructor() {
        super();
        this.type = "week";
    }

    get trailingActions() {
        let actions = [
            {
                id: "date_range",
                component: "icon-button",
                icon: "date_range",
            },
        ];
        return actions;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removePicker();
    }

    async createPicker() {
        if (!this.picker) {
            this.picker = document.createElement("md-week-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleWeekFieldPickerButtonCancelClick = this.handleWeekFieldPickerButtonCancelClick.bind(this);
            this.handleWeekFieldPickerButtonOkClick = this.handleWeekFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.picker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
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
            this.handleWeekFieldWindowClick = this.handleWeekFieldWindowClick.bind(this);
            this.handleWeekFieldWindowScroll = this.handleWeekFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleWeekFieldWindowClick);
            this.pickerWindow.addEventListener("scroll", this.handleWeekFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseWeek(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleWeekFieldWindowClick);
            this.pickerWindow.removeEventListener("scroll", this.handleWeekFieldWindowScroll);
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

    handleWeekFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    handleWeekFieldWindowScroll(event) {
        this.closePicker();
    }

    handleWeekFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    handleWeekFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyWeek(this.picker.value);
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
        if (data.id === "date_range") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-week-field", MdWeekFieldComponent);
export { MdWeekFieldComponent };

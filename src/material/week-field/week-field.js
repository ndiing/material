import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseWeek, stringifyWeek } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-week-field
 */
class MdWeekFieldComponent extends MdTextFieldComponent {
    /**
     */
    constructor() {
        super();
        this.type = "week";
    }

    /**
     * @readonly
     */
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

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
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
            this.picker = document.createElement("md-week-picker");
            this.parentElement.insertBefore(this.picker, this.nextElementSibling);
            this.handleWeekFieldPickerButtonCancelClick = this.handleWeekFieldPickerButtonCancelClick.bind(this);
            this.handleWeekFieldPickerButtonOkClick = this.handleWeekFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.picker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
            await this.picker.updateComplete;
        }
    }

    /**
     */
    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
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
            this.handleWeekFieldWindowClick = this.handleWeekFieldWindowClick.bind(this);
            this.handleWeekFieldWindowScroll = this.handleWeekFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleWeekFieldWindowClick);
            this.pickerContainer.addEventListener("scroll", this.handleWeekFieldWindowScroll);
            if (this.textFieldNative.value) this.picker.value = parseWeek(this.textFieldNative.value);
            this.picker.show(options);
        }
    }

    /**
     */
    closePicker() {
        if (this.picker) {
            window.removeEventListener("click", this.handleWeekFieldWindowClick);
            this.pickerContainer.removeEventListener("scroll", this.handleWeekFieldWindowScroll);
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
    handleWeekFieldWindowClick(event) {
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    }

    /**
     * @param {Object} [event]
     */
    handleWeekFieldWindowScroll(event) {
        this.closePicker();
    }

    /**
     * @param {Object} [event]
     */
    handleWeekFieldPickerButtonCancelClick(event) {
        this.closePicker();
    }

    /**
     * @param {Object} [event]
     */
    handleWeekFieldPickerButtonOkClick(event) {
        this.textFieldNative.value = stringifyWeek(this.picker.value);
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
        if (data.id === "date_range") return this.handleTextFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-week-field", MdWeekFieldComponent);
export { MdWeekFieldComponent };

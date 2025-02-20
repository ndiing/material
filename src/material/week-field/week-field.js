import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MDTextFieldComponent } from "../text-field/text-field";
import { closestScrollableElement, parseWeek, stringifyWeek } from "../util/util";

/**
 * @extends MDTextFieldComponent
 * @element md-week-field
 */
class MDWeekFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();

        this.type = "week";
    }

    get trailingActions() {
        let actions = [
            {
                id: "picker",
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
            this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.handleWeekFieldPickerButtonOkClick = this.handleWeekFieldPickerButtonOkClick.bind(this);
            this.picker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
            this.handleWeekFieldPickerWindowScroll = this.handleWeekFieldPickerWindowScroll.bind(this);
            this.picker.addEventListener("onWeekPickerWindowScroll", this.handleWeekFieldPickerWindowScroll);
            this.handleWeekFieldPickerWindowClick = this.handleWeekFieldPickerWindowClick.bind(this);
            this.picker.addEventListener("onWeekPickerWindowClick", this.handleWeekFieldPickerWindowClick);
            await this.picker.updateComplete;
        }
    }

    removePicker() {
        if (this.picker) {
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekFieldPickerButtonOkClick);
            this.picker.removeEventListener("onWeekPickerWindowScroll", this.handleWeekFieldPickerWindowScroll);
            this.picker.removeEventListener("onWeekPickerWindowClick", this.handleWeekFieldPickerWindowClick);
            this.picker.remove();
            this.picker = undefined;
        }
    }

    /**
     * @param {Any} [options={}]
     */
    showPicker(options = {}) {
        if (this.picker) {
            if (this.textFieldNative.value) this.picker.value = parseWeek(this.textFieldNative.value);
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

    handleWeekFieldPickerWindowClick(event) {
        if (!this.pickerTrigger.contains(event.detail.target) && !this.picker.contains(event.detail.target)) {
            this.closePicker();
        }
    }

    handleWeekFieldPickerWindowScroll(event) {
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

    async handleWeekFieldIconButtonPickerClick(event) {
        this.pickerTrigger = event.currentTarget;
        await this.createPicker();
        this.togglePicker({ trigger: this.textFieldContainer });
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "picker") return this.handleWeekFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-week-field", MDWeekFieldComponent);

export { MDWeekFieldComponent };

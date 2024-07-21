import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-week-field
 */
class MDWeekFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "date_range" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "week";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
    }
    /**
     * {{desc}}
     */
    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * {{desc}}
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-week-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleWeekPickerButtonCancelClick = this.handleWeekPickerButtonCancelClick.bind(this);
        this.handleWeekPickerButtonOkClick = this.handleWeekPickerButtonOkClick.bind(this);
        this.handleWeekPickerSelection = this.handleWeekPickerSelection.bind(this);
        this.handleWeekPickerDayItemClick = this.handleWeekPickerDayItemClick.bind(this);
        this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekPickerButtonCancelClick);
        this.picker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekPickerButtonOkClick);
        this.picker.addEventListener("onWeekPickerSelection", this.handleWeekPickerSelection);
        this.picker.addEventListener("onWeekPickerDayItemClick", this.handleWeekPickerDayItemClick);
        const handleScroll = () => {
            this.picker.close();
            this.boundary.removeEventListener("scroll", handleScroll);
        };
        const handleClick = (event) => {
            let current = event.target;
            let matches;
            while (current) {
                matches = matches || current === this || current === this.picker;
                current = current.parentElement;
            }
            if (!matches) {
                this.picker.close();
                this.boundary.removeEventListener("click", handleClick);
            }
        };
        const handleSheetClose = () => {
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekPickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekPickerButtonOkClick);
            this.picker.removeEventListener("onWeekPickerSelection", this.handleWeekPickerSelection);
            this.picker.removeEventListener("onWeekPickerDayItemClick", this.handleWeekPickerDayItemClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.boundary.removeEventListener("scroll", handleScroll);
            this.boundary.removeEventListener("click", handleClick);
            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        this.boundary = getBoundary(this);
        this.boundary.addEventListener("scroll", handleScroll);
        this.boundary.addEventListener("click", handleClick);
        await this.picker.updateComplete;
        this.picker.show(this.textFieldContainer.value);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * {{desc}}
     */
    handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        if (event.currentTarget.name === "picker") {
            this.handleWeekFieldActionPickerClick(event);
        }
    }

    /**
     * {{desc}}
     */
    handleWeekFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * {{desc}}
     */
    handleWeekPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * {{desc}}
     */
    handleWeekPickerDayItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * {{desc}}
     */
    handleWeekPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * {{desc}}
     */
    handleWeekPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-week-field", MDWeekFieldComponent);
export { MDWeekFieldComponent };

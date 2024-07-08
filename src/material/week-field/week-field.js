import { stringifyWeek } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-week-field
 * @extends MDTextFieldComponent
 */
class MDWeekFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "date_range" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "week";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-week-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.picker = document.createElement("md-week-picker");
        if (this.value) {
            this.picker.value = this.value;
        }

        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);

        this.picker.addEventListener("onWeekPickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onWeekPickerButtonOkClick", this.handlePickerButtonOkClick);

        const handleSheetClose = () => {
            this.picker.removeEventListener("onWeekPickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handlePickerButtonOkClick);

            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        window.requestAnimationFrame(() => {
            this.picker.showModal(this.container);
        });
    }

    handlePickerSelection() {
        const value = stringifyWeek(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }

    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    handlePickerButtonOkClick() {
        const value = stringifyWeek(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-week-field", MDWeekFieldComponent);

export { MDWeekFieldComponent };

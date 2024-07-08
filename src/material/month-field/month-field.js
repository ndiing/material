import { stringifyMonth } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-month-field
 * @extends MDTextFieldComponent
 */
class MDMonthFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "calendar_month" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "month";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-month-field");
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * @private
     */
    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.picker = document.createElement("md-month-picker");
        if (this.value) {
            this.picker.value = this.value;
        }

        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);

        this.picker.addEventListener("onMonthPickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onMonthPickerButtonOkClick", this.handlePickerButtonOkClick);

        const handleSheetClose = () => {
            this.picker.removeEventListener("onMonthPickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handlePickerButtonOkClick);

            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        window.requestAnimationFrame(() => {
            this.picker.showModal(this.container);
        });
    }

    /**
     * @private
     */
    handlePickerSelection() {
        const value = stringifyMonth(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyMonth(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-month-field", MDMonthFieldComponent);

export { MDMonthFieldComponent };

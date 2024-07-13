import { MDComponent } from "../component/component.js";
import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

class MDDateTimeFieldComponent extends MDTextFieldComponent {
    get actions() {
        return [{ name: "picker", icon: "calendar_clock" }];
    }

    set actions(value) {}

    constructor() {
        super();
        this.type = "datetime-local";
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        if (event.currentTarget.name === "picker") {
            this.handleTextFieldActionPickerClick(event);
        }
    }

    handleTextFieldActionPickerClick(event) {
        this.showPicker();
        this.emit("onTextFieldActionPickerClick", event);
    }

    showPicker() {
        if(this.pickerOpen){return}
        this.pickerOpen=true
        this.picker = document.createElement("md-datetime-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
        this.picker.addEventListener("onDatetimePickerSelection", this.handlePickerSelection);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onDatetimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener('onSheetClose', handleSheetClose);
            this.boundary.addEventListener('scroll', handleScroll);
            this.boundary.addEventListener('click', handleClick);
            this.pickerOpen=false
        };
        this.picker.addEventListener('onSheetClose', handleSheetClose);

        this.boundary = getBoundary(this);

        const handleScroll = () => {
            this.picker.close();
            this.boundary.removeEventListener('scroll', handleScroll);
        };
        this.boundary.addEventListener('scroll', handleScroll);

        const handleClick = (event) => {
            let current = event.target;
            let matches;
            while (current) {
                matches = matches || current === this || current === this.picker;
                current = current.parentElement;
            }
            if (!matches) {
                this.picker.close();
                this.boundary.removeEventListener('click', handleClick);
            }
        };
        this.boundary.addEventListener('click', handleClick);

        this.picker.show(this.textFieldContainer.value);
    }

    handlePickerButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.textFieldNative.value.dispatchEvent(new CustomEvent('input'))
        this.picker.close()
        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    handlePickerButtonOkClick(event) {
        this.value=this.picker.getValue()
        this.textFieldNative.value.dispatchEvent(new CustomEvent('input'))
        this.picker.close()
        this.emit("onDatetimePickerButtonOkClick", event);
    }

    handlePickerSelection(event) {
        this.value=this.picker.getValue()
        this.textFieldNative.value.dispatchEvent(new CustomEvent('input'))
        this.emit("onDatetimePickerSelection", event);
    }
}
customElements.define("md-datetime-field", MDDateTimeFieldComponent);
export { MDDateTimeFieldComponent };

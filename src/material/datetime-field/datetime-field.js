import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
import { findClosestElement, parseDatetimeLocal, stringifyDatetimeLocal } from "../util/util";

/**
 * @extends MdTextFieldComponent
 * @element md-datetime-field
 * @fires MdDatetimeFieldComponent#onDatetimeFieldIconButtonPickerClick
 * @element md-datetime-field
 */
class MdDatetimeFieldComponent extends MdTextFieldComponent {
    /**
     */
    constructor() {
        super();
        this.type = "datetime-local";
    }

    /**
     * @readonly
     */
    get trailingActions() {
        let actions = [
            {
                id: "today",
                component: "icon-button",
                icon: "today",
            },
        ];
        return actions;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    /**
     * @private
     * @async
     * @param {Undefined} [event]
     */
    async handleDatetimeFieldIconButtonPickerClick(event) {
        const buttonIcon = event.currentTarget;
        if (!this.datetimePicker) {
            this.datetimePicker = document.createElement("md-datetime-picker");
            if (this.textFieldNative.value) this.datetimePicker.value = parseDatetimeLocal(this.textFieldNative.value);
            this.parentElement.insertBefore(this.datetimePicker, this.nextElementSibling);
            const handleDatetimePickerClosed = () => {
                window.removeEventListener("click", handleClick);
                this.datetimePicker.removeEventListener("onDatetimePickerClosed", handleDatetimePickerClosed);
                this.datetimePicker.removeEventListener("onDatetimePickerButtonCancelClick", handleDatetimePickerButtonCancelClick);
                this.datetimePicker.removeEventListener("onDatetimePickerButtonOkClick", handleDatetimePickerButtonOkClick);
                this.datetimePicker.remove();
                this.datetimePicker = undefined;
            };
            const handleDatetimePickerButtonCancelClick = () => {
                this.datetimePicker.close();
            };
            const handleDatetimePickerButtonOkClick = () => {
                this.textFieldNative.value = stringifyDatetimeLocal(this.datetimePicker.value);
                this.updateValue();
                this.datetimePicker.close();
            };
            const handleClick = (event) => {
                const target = document.elementFromPoint(event.clientX, event.clientY);
                if (!buttonIcon.contains(target) && !this.datetimePicker.contains(target)) this.datetimePicker.close();
            };
            window.addEventListener("click", handleClick);
            this.datetimePicker.addEventListener("onDatetimePickerClosed", handleDatetimePickerClosed);
            this.datetimePicker.addEventListener("onDatetimePickerButtonCancelClick", handleDatetimePickerButtonCancelClick);
            this.datetimePicker.addEventListener("onDatetimePickerButtonOkClick", handleDatetimePickerButtonOkClick);
            await this.updateComplete;
            let offset = 4 + 4;
            if (this.text) offset = 4 + 16 + 4;
            this.datetimePicker.show({ trigger: this.textFieldContainer, offset });
        } else if (this.datetimePicker) {
            this.datetimePicker.close();
        }
        this.emit("onDatetimeFieldIconButtonPickerClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "today") return this.handleDatetimeFieldIconButtonPickerClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}
customElements.define("md-datetime-field", MdDatetimeFieldComponent);
export { MdDatetimeFieldComponent };

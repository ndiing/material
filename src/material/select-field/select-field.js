import { html } from "lit";
import { MDTextFieldComponent } from "../text-field/text-field.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";
import { MDMenuComponent } from "../menu/menu.js";

/**
 * Custom select field component with additional features for selecting options.
 * @element md-select-field
 * @extends MDTextFieldComponent
 */
class MDSelectFieldComponent extends MDTextFieldComponent {
    static properties = {
        ...MDTextFieldComponent.properties,
        ...MDMenuComponent.properties,
    };

    /**
     * Returns actions associated with the select field.
     * @returns {object[]} Array of action objects.
     */
    get actions() {
        return [{ icon: "arrow_drop_down" }];
    }

    /**
     * Setter for actions.
     * @param {object[]} value - Array of action objects.
     */
    set actions(value) {}

    /**
     * Gets the index of the currently selected item in the options list.
     * @type {number}
     */
    get selectedIndex() {
        return this.options.findIndex((doc) => doc.selected);
    }

    /**
     * Gets the list of selected options.
     * @type {Array}
     */
    get selectedOptions() {
        return this.options.filter((doc) => doc.selected);
    }

    /**
     * Gets the list of default selected options.
     * @type {Array}
     */
    get defaultSelectedOptions() {
        return this.defaultOptions.filter((doc) => doc.selected);
    }

    constructor() {
        super();
        this.type = "select";
    }

    /**
     * Renders the select input element.
     * @private
     * @returns {TemplateResult} Lit HTML template result.
     */
    renderSelect() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                aria-label="Label"
                .name="${ifDefined(this.name)}"
                .min="${ifDefined(this.min)}"
                .max="${ifDefined(this.max)}"
                .minlength="${ifDefined(this.minLength)}"
                .maxlength="${ifDefined(this.maxLength)}"
                .pattern="${ifDefined(this.pattern)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                type="text"
                .defaultValue="${this.defaultSelectedOptions.map(option=>option.label)}"
                .value="${this.selectedOptions.map(option=>option.label)}"
                ${ref(this.textFieldNative)}
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
            >
        `;
    }

    /**
     * Renders a hidden input element for submitting selected option values.
     * @private
     * @returns {TemplateResult} Lit HTML template result.
     */
    renderHidden() {
        return html` <input type="hidden" class="md-text-field__hidden" .name="${ifDefined(this.name)}" .defaultValue="${this.defaultSelectedOptions.map((option) => option.value)}" .value="${this.selectedOptions.map((option) => option.value)}" /> `;
    }

    /**
     * Lifecycle callback when the element is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-select-field");
        this.defaultOptions = JSON.parse(JSON.stringify(this.options));
    }

    /**
     * Handles focus event on the native text field.
     * Opens the picker menu.
     * @private
     */
    handleTextFieldNativeFocus() {
        this.showPicker();
    }

    /**
     * Handles blur event on the native text field.
     * Closes the picker menu after a delay.
     * @private
     */
    handleTextFieldNativeBlur() {
        // window.setTimeout(() => this.picker.close(), 200);
    }

    /**
     * Handles input event on the native text field.
     * Filters options in the picker menu based on input value.
     * @private
     */
    handleTextFieldNativeInput() {
        this.picker.filter(this.textFieldNative.value.value);
    }

    /**
     * Resets the select field to its default state.
     * @private
     */
    reset() {
        this.options.forEach((option, index) => {
            const defaultOptions = this.defaultOptions[index];
            option.selected = defaultOptions.selected;
        });
        this.requestUpdate();
    }

    /**
     * Shows the picker menu for selecting options.
     * @private
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-menu");
        if (this.options) {
            this.picker.list = this.options;
        }
        if (this.map) {
            this.picker.map = this.map;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerMenuListItemClick = this.handlePickerMenuListItemClick.bind(this);
        this.handlePickerMenuListItemSelected = this.handlePickerMenuListItemSelected.bind(this);
        this.picker.addEventListener("onMenuListItemClick", this.handlePickerMenuListItemClick);
        this.picker.addEventListener("onMenuListItemSelected", this.handlePickerMenuListItemSelected);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onMenuListItemClick", this.handlePickerMenuListItemClick);
            this.picker.removeEventListener("onMenuListItemSelected", this.handlePickerMenuListItemSelected);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        console.log(this.picker)
        await new Promise((resolve) => this.picker.once("onMenuViewportVirtualScroll", resolve));
        await this.picker.updateComplete;
        this.picker.style.width = `${this.textFieldContainer.value.clientWidth}px`;
        this.picker.showModal(this.textFieldContainer.value, {
            /* prettier-ignore */
            placements: [
                "below-start", "below-end", "below", 
                "above-start", "above-end", "above", 
                "after-start", "after-end", "after", 
                "before-start", "before-end", "before", 
                "center"
            ],
        });
    }

    /**
     * Handles click on an item in the picker menu list.
     * Updates the select field and closes the picker menu.
     * @param {Event} event - The click event object.
     * @private
     */
    handlePickerMenuListItemClick(event) {
        this.requestUpdate();
        // this.picker.close();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.emit("onPickerMenuListItemClick", event);
    }

    /**
     * Handles selection of an item in the picker menu list.
     * Emits an event for item selection.
     * @param {Event} event - The selection event object.
     * @private
     */
    handlePickerMenuListItemSelected(event) {
        this.emit("onPickerMenuListItemSelected", event);
    }
}

customElements.define("md-select-field", MDSelectFieldComponent);
export { MDSelectFieldComponent };

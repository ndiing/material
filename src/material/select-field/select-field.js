import { createRef, ref } from "lit/directives/ref.js";
import { getBoundary } from "../functions/functions.js";
import { MDMenuComponent } from "../menu/menu.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * A custom element that provides a select and select picker field.
 * @element md-select-field
 * @extends MDTextFieldComponent
 * @fires MDSelectFieldComponent#onSelectFieldActionPickerClick - Event fired when the select-select picker icon is clicked.
 * @fires MDSelectFieldComponent#onSelectPickerButtonCancelClick - Event fired when the cancel button is clicked in the select-select picker.
 * @fires MDSelectFieldComponent#onSelectPickerButtonOkClick - Event fired when the OK button is clicked in the select-select picker.
 * @fires MDSelectFieldComponent#onMenuListItemClick - Event fired when a select-select selection is made in the picker.
 */
class MDSelectFieldComponent extends MDTextFieldComponent {
    static properties = {
        ...MDTextFieldComponent.properties,
        ...MDMenuComponent.properties,
    };

    /**
     * Gets the actions for the select-select field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "arrow_drop_down" }];
    }

    /**
     * Sets the actions for the select-select field.
     * @param {Array} value - The new actions for the select-select field.
     */
    set actions(value) {}
    textFieldHidden = createRef();

    get selectedIndex() {
        return this.options.findIndex((doc) => doc.selected);
    }

    get selectedOptions() {
        return this.options.filter((doc) => doc.selected);
    }

    get defaultSelectedIndex() {
        return this.defaultOptions.findIndex((doc) => doc.selected);
    }

    get defaultSelectedOptions() {
        return this.defaultOptions.filter((doc) => doc.selected);
    }

    get selectedOptionLabel() {
        return this.selectedOptions?.[0]?.[this.map.label] ?? "";
    }

    get defaultSelectedOptionLabel() {
        return this.defaultSelectedOptions?.[0]?.[this.map.label] ?? "";
    }

    get selectedOptionValue() {
        return this.selectedOptions?.[0]?.[this.map.value] ?? "";
    }

    get defaultSelectedOptionValue() {
        return this.defaultSelectedOptions?.[0]?.[this.map.value] ?? "";
    }

    constructor() {
        super();
        this.type = "select";
        this.options = [];
        this.map = { label: "label", value: "value" };
    }

    /**
     * Renders the native select element.
     * @private
     * @returns {TemplateResult} The rendered select element.
     */
    renderSelect() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                aria-label="Label"
                type="text"
                .placeholder="${ifDefined(this.placeholder)}"
                .value="${ifDefined(this.selectedOptionLabel)}"
                .defaultValue="${ifDefined(this.defaultSelectedOptionLabel)}"
                .min="${ifDefined(this.min)}"
                .max="${ifDefined(this.max)}"
                .minlength="${ifDefined(this.minLength)}"
                .maxlength="${ifDefined(this.maxLength)}"
                .pattern="${ifDefined(this.pattern)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                ${ref(this.textFieldNative)}
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @keydown="${this.handleTextFieldNativeKeydown}"
                @click="${this.handleTextFieldNativeClick}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
            >
        `;
    }

    /**
     * Renders the native select element.
     * @private
     * @returns {TemplateResult} The rendered select element.
     */
    renderHidden() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__hidden"
                type="hidden"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.selectedOptionValue)}"
                .defaultValue="${ifDefined(this.defaultSelectedOptionValue)}"
                ${ref(this.textFieldHidden)}
            >
        `;
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-select-field");

        if (!this.defaultOptions) {
            this.defaultOptions = JSON.parse(JSON.stringify(this.options));
        }
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    handleTextFieldContainerClick(event) {
        super.handleTextFieldContainerClick(event);
        this.togglePicker();
    }

    handleTextFieldNativeKeydown(event) {
        super.handleTextFieldNativeKeydown(event);

        if (!this.pickerOpen) {
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                event.preventDefault();
                this.activatedIndex = this.options.findIndex((option) => option.selected);

                if (this.activatedIndex === -1) {
                    this.activatedIndex = 0;
                }
                let offset = 0;

                if (event.key === "ArrowUp") {
                    offset = -1;
                }

                if (event.key === "ArrowDown") {
                    offset = 1;
                }
                this.activatedIndex = (this.activatedIndex + this.options.length + offset) % this.options.length;
                let data = this.options[this.activatedIndex];

                this.options.forEach((option) => {
                    option.selected = option === data;
                });

                this.requestUpdate();
            } else if (event.key === "Enter") {
                event.preventDefault();
                this.togglePicker();
            }
        }
    }

    handleTextFieldNativeInput(event) {
        super.handleTextFieldNativeInput(event);
        this.picker.filter(this.textFieldNative.value.value);
        this.showPicker();
    }

    validate() {
        this.textFieldNative.value.setCustomValidity(this.selectedIndex === -1 ? "Please select an item in the list." : "");
        super.validate();
    }

    handleTextFieldNativeReset(event) {
        super.handleTextFieldNativeReset(event);
        this.options.forEach((option, index) => {
            option.activated = this.defaultOptions[index].activated;
            option.selected = this.defaultOptions[index].selected;
        });
        this.requestUpdate();
    }

    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * Displays the select-select picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-menu");
        this.picker.list = this.options;
        this.picker.map = this.map;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleMenuListSelection = this.handleMenuListSelection.bind(this);
        this.picker.addEventListener("onMenuListSelection", this.handleMenuListSelection);

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
            this.picker.removeEventListener("onMenuListSelection", this.handleMenuListSelection);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.boundary.removeEventListener("scroll", handleScroll);
            this.boundary.removeEventListener("click", handleClick);
            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        this.boundary = getBoundary(this);
        this.boundary.addEventListener("scroll", handleScroll);
        this.boundary.addEventListener("click", handleClick);
        await new Promise((resolve) => this.picker.once("onMenuViewportVirtualScrollInitialized", resolve));
        this.picker.style.minWidth = `${this.textFieldContainer.value.clientWidth}px`;
        this.picker.style.maxWidth = `${this.textFieldContainer.value.clientWidth}px`;

        await this.picker.updateComplete;
        this.picker.show(this.textFieldContainer.value);
    }

    /**
     * Handles the select-select selection event in the picker.
     * @param {Event} event - The select-select selection event.
     * @private
     */
    handleMenuListSelection() {
        this.textFieldNative.value.value = this.selectedOptionLabel;
        this.textFieldHidden.value.value = this.selectedOptionValue;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.textFieldHidden.value.dispatchEvent(new CustomEvent("input"));
        this.requestUpdate();
        this.picker.close();
    }
}
customElements.define("md-select-field", MDSelectFieldComponent);
export { MDSelectFieldComponent };

import { html } from "lit";
import { MDTextFieldComponent } from "../text-field/text-field.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

/**
 * {{description}}
 * @element md-select-field
 * @extends MDTextFieldComponent
 */
class MDSelectFieldComponent extends MDTextFieldComponent {
    static properties = {
        ...MDTextFieldComponent.properties,
        map: { type: Object },
    };

    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "arrow_drop_down" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    /**
     * Gets the index of the currently selected item in the menu list.
     * @type {Number}
     */
    get selectedIndex() {
        return this.options.findIndex((doc) => doc.selected);
    }

    /**
     * Gets the list of selected items in the menu list.
     * @type {Array}
     */
    get selectedOptions() {
        return this.options.filter((doc) => doc.selected);
    }

    /**
     * Gets the list of selected items in the menu list.
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
     * @private
     */
    renderSelect() {
        /* prettier-ignore */
        return html`
            <input 
            class="md-text-field__native"
                aria-label="Label"
                name="${ifDefined(this.name)}"
                min="${ifDefined(this.min)}"
                max="${ifDefined(this.max)}"
                minlength="${ifDefined(this.minLength)}"
                maxlength="${ifDefined(this.maxLength)}"
                pattern="${ifDefined(this.pattern)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                autocomplete="${ifDefined(this.autocomplete)}"
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
     * @private
     */
    renderHidden() {
        return html`
            <input
                type="hidden"
                class="md-text-field__hidden"
                .name="${ifDefined(this.name)}"
                .defaultValue="${this.defaultSelectedOptions.map((option) => option.value)}"
                .value="${this.selectedOptions.map((option) => option.value)}"
            />
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-select-field");

        this.defaultOptions = JSON.parse(JSON.stringify(this.options));
    }

    /**
     * @private
     */
    handleTextFieldNativeFocus() {
        this.showPicker();
    }

    /**
     * @private
     */
    handleTextFieldNativeBlur() {
        window.setTimeout(() => this.picker.close(), 200);
    }

    /**
     * @private
     */
    handleTextFieldNativeInput() {
        this.picker.filter(this.textFieldNative.value.value);
    }

    /**
     * @private
     */
    reset() {
        this.options.forEach((option, index) => {
            const defaultOptions = this.defaultOptions[index];
            option.selected = defaultOptions.selected;
        });
        this.requestUpdate();
    }

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

    handlePickerMenuListItemClick(event) {
        this.requestUpdate();
        this.picker.close();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.emit("onPickerMenuListItemClick", event);
    }

    handlePickerMenuListItemSelected(event) {
        this.emit("onPickerMenuListItemSelected", event);
    }
}

customElements.define("md-select-field", MDSelectFieldComponent);

export { MDSelectFieldComponent };

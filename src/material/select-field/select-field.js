import { html } from "lit";
import { MDTextFieldComponent } from "../text-field/text-field.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * {{description}}
 * @element md-select-field
 * @extends MDTextFieldComponent
 */
class MDSelectFieldComponent extends MDTextFieldComponent {
    static properties = {
        ...MDTextFieldComponent.properties,
        // options:{type:Array},
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
                .accept="${ifDefined(this.accept)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .max="${ifDefined(this.max)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .min="${ifDefined(this.min)}"
                .minLength="${ifDefined(this.minLength)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .pattern="${ifDefined(this.pattern)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .step="${ifDefined(this.step)}"
                type="text"
                .defaultValue="${this.defaultSelectedOptions.map(option=>option.label)}"
                .value="${this.selectedOptions.map(option=>option.label)}"
                @click="${this.handleTextFieldNativeClick}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @change="${this.handleTextFieldNativeChange}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
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
    handleTextFieldNativeFocus(event) {
        this.showPicker();
    }

    /**
     * @private
     */
    handleTextFieldNativeBlur(event) {
        window.setTimeout(() => this.picker.close(), 200);
    }

    /**
     * @private
     */
    handleTextFieldNativeInput(event) {
        this.picker.filter(this.native.value);
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

    /**
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        this.showPicker();
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

        // await this.picker.updateComplete;
        await new Promise((resolve) => this.picker.once("onMenuViewportVirtualScrollInitialized", resolve));
        this.picker.style.width = `${this.container.clientWidth}px`;
        this.picker.show(this.container, {
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
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.emit("onPickerMenuListItemClick", event);
    }

    handlePickerMenuListItemSelected(event) {
        this.emit("onPickerMenuListItemSelected", event);
    }
}

customElements.define("md-select-field", MDSelectFieldComponent);

export { MDSelectFieldComponent };

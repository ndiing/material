import { createRef, ref } from "lit/directives/ref.js";
import { getBoundary } from "../functions/functions.js";
import { MDMenuComponent } from "../menu/menu.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-select-field
 */
class MDSelectFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    static properties = {
        ...MDTextFieldComponent.properties,
        ...MDMenuComponent.properties,
    };

    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "arrow_drop_down" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}
    textFieldHidden = createRef();
    get selectedIndex() {
        return this.options.findIndex((doc) => doc.selected);
    }
    /**
     * {{desc}}
     */
    get selectedOptions() {
        return this.options.filter((doc) => doc.selected);
    }
    /**
     * {{desc}}
     */
    get defaultSelectedIndex() {
        return this.defaultOptions.findIndex((doc) => doc.selected);
    }
    /**
     * {{desc}}
     */
    get defaultSelectedOptions() {
        return this.defaultOptions.filter((doc) => doc.selected);
    }
    /**
     * {{desc}}
     */
    get selectedOptionLabel() {
        return this.selectedOptions?.[0]?.[this.map.label] ?? "";
    }
    /**
     * {{desc}}
     */
    get defaultSelectedOptionLabel() {
        return this.defaultSelectedOptions?.[0]?.[this.map.label] ?? "";
    }
    /**
     * {{desc}}
     */
    get selectedOptionValue() {
        return this.selectedOptions?.[0]?.[this.map.value] ?? "";
    }
    /**
     * {{desc}}
     */
    get defaultSelectedOptionValue() {
        return this.defaultSelectedOptions?.[0]?.[this.map.value] ?? "";
    }
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.type = "select";
        this.options = [];
        this.map = { label: "label", value: "value" };
    }

    /**
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-select-field");
        if (!this.defaultOptions) {
            this.defaultOptions = JSON.parse(JSON.stringify(this.options));
        }
    }
    /**
     * {{desc}}
     */
    validate() {
        this.textFieldNative.value.setCustomValidity(this.selectedIndex === -1 ? "Please select an item in the list." : "");
        super.validate();
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
     * {{desc}}
     */
    handleTextFieldContainerClick(event) {
        super.handleTextFieldContainerClick(event);
        this.togglePicker();
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
    /**
     * {{desc}}
     */
    handleTextFieldNativeInput(event) {
        super.handleTextFieldNativeInput(event);
        this.picker.filter(this.textFieldNative.value.value);
        this.showPicker();
    }
    /**
     * {{desc}}
     */
    handleTextFieldNativeReset(event) {
        super.handleTextFieldNativeReset(event);
        this.options.forEach((option, index) => {
            option.activated = this.defaultOptions[index].activated;
            option.selected = this.defaultOptions[index].selected;
        });
        this.requestUpdate();
    }

    /**
     * {{desc}}
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

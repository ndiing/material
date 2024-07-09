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
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .value="${ifDefined(this.value)}"
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

    renderHidden() {
        /* prettier-ignore */
        return html``
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-select-field");
    }

    /**
     * @private
     */
    async handleTextFieldNativeFocus(event) {
        super.handleTextFieldNativeFocus(event);

        await this.showPicker();
    }

    /**
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        await this.showPicker();
    }

    async showPicker() {
        if(this.pickerShow){return}
        this.pickerShow=true

        this.picker = document.createElement("md-menu");
        this.picker.list = this.options;
        this.picker.map = this.map;

        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        const handleSheetClose = () => {
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
            this.pickerShow=false
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        await this.picker.updateComplete;
        await new Promise((resolve) => window.requestAnimationFrame(resolve));
        this.picker.style.width = this.container.clientWidth + "px";
        const options = {
            /* prettier-ignore */
            placements: [
                "below-start", "below-end", "below",
                "above-start", "above-end", "above",
                "after-start", "after-end", "after",
                "before-start", "before-end", "before",
                "center",
            ],
        };
        this.picker.showModal(this.container, options);
    }
}

customElements.define("md-select-field", MDSelectFieldComponent);

export { MDSelectFieldComponent };

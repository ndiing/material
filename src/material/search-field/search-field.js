import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-search-field
 */
class MDSearchFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [...((this.value && [{ name: "clear", icon: "close" }]) || [])];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();
        this.type = "search";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-search-field");
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
    async handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        this.textFieldNative.value.value = "";
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.textFieldNative.value.dispatchEvent(new CustomEvent("search", {}));
    }
}
customElements.define("md-search-field", MDSearchFieldComponent);
export { MDSearchFieldComponent };

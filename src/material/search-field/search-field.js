import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-search-field
 * @extends MDTextFieldComponent
 */
class MDSearchFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [...((this.value && [{ name: "clear", icon: "close" }]) || [])];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "search";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-search-field");
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

        this.native.value = "";

        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.native.dispatchEvent(new CustomEvent("search", {}));
    }
}

customElements.define("md-search-field", MDSearchFieldComponent);

export { MDSearchFieldComponent };

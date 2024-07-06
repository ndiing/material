import { MDTextFieldComponent } from "../text-field/text-field.js";


/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-search-field
 */
class MDSearchFieldComponent extends MDTextFieldComponent {
    
    /**
     * {{desc}}
     */
    get actions() {
        return [
            ...(this.value&&[{ name: "clear", icon: "close" }]||[]),
        ];
    }

    
    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "search";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-search-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.native.value=''

        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.native.dispatchEvent(new CustomEvent("search", {}));
    }
}

customElements.define("md-search-field", MDSearchFieldComponent);

export { MDSearchFieldComponent };

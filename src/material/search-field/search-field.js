import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for managing a search field with clear action.
 * @element md-search-field
 * @extends MDTextFieldComponent
 */
class MDSearchFieldComponent extends MDTextFieldComponent {
    /**
     * Returns actions based on the current state of the search field.
     * Includes a clear action when there is a value present.
     */
    get actions() {
        return [...((this.value && [{ name: "clear", icon: "close" }]) || [])];
    }

    /**
     * Setter for actions property.
     * @param {any} value - Value to set.
     */
    set actions(value) {}

    /**
     * Initializes the search field component.
     * Sets the input type to "search".
     */
    constructor() {
        super();

        this.type = "search";
    }

    /**
     * Callback when the component is connected to the DOM.
     * Adds necessary classes to style the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-search-field");
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();

        super.handleTextFieldNativeClick();
    }

    /**
     * Handles click events on the icon button associated with the search field.
     * Clears the search field value and dispatches input and search events.
     * @param {Event} event - Click event.
     * @private
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

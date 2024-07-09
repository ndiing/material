import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-number-field
 * @extends MDTextFieldComponent
 */
class MDNumberFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [
            { name: "subtract", icon: "remove" },
            { name: "add", icon: "add" },
        ];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "number";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-number-field");
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
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        const name = event.currentTarget.name;

        if (name === "subtract") {
            this.native.stepDown();
        } else if (name === "add") {
            this.native.stepUp();
        }

        this.native.dispatchEvent(new CustomEvent("input", {}));
    }
}

customElements.define("md-number-field", MDNumberFieldComponent);

export { MDNumberFieldComponent };

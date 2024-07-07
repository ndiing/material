import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-number-field
 */
class MDNumberFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [
            { name: "subtract", icon: "remove" },
            { name: "add", icon: "add" },
        ];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "number";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-number-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
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

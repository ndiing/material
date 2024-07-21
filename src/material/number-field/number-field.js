import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-number-field
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

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
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
        const name = event.currentTarget.name;
        if (name === "subtract") {
            this.textFieldNative.value.stepDown();
        } else if (name === "add") {
            this.textFieldNative.value.stepUp();
        }
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }
}
customElements.define("md-number-field", MDNumberFieldComponent);
export { MDNumberFieldComponent };

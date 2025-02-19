import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MDTextFieldComponent } from "../text-field/text-field";
/**
 * @extends MDTextFieldComponent
 * @element md-number-field
 */
class MDNumberFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();
        this.type = "number";
    }

    get trailingActions() {
        return [
            { component: "icon-button", id: "down", icon: "remove" },
            { component: "icon-button", id: "up", icon: "add" },
        ];
    }

    handleNumberFieldIconButtonUpClick(event) {
        this.textFieldNative.stepUp();
        this.updateValue();
    }

    handleNumberFieldIconButtonDownClick(event) {
        this.textFieldNative.stepDown();
        this.updateValue();
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;

        if (data.id === "up") return this.handleNumberFieldIconButtonUpClick(event);
        else if (data.id === "down") return this.handleNumberFieldIconButtonDownClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-number-field", MDNumberFieldComponent);

export { MDNumberFieldComponent };

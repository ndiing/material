import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";

/**
 * @extends MdTextFieldComponent
 * @element md-number-field
 */
class MdNumberFieldComponent extends MdTextFieldComponent {
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
customElements.define("md-number-field", MdNumberFieldComponent);
export { MdNumberFieldComponent };

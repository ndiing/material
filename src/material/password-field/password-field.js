import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { MdTextFieldComponent } from "../text-field/text-field";
/**
 * @extends MdTextFieldComponent
 * @element md-password-field
 */
class MdPasswordFieldComponent extends MdTextFieldComponent {
    constructor() {
        super();
        this.type = "password";
    }

    get trailingActions() {
        return [{ component: "icon-button", id: "toggle", toggle: true, icons: ["visibility_off", "visibility"] }];
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
    }

    handlePasswordFieldIconButtonToggleClick(event) {
        this.type = event.currentTarget.selected ? "text" : "password";
    }

    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "toggle") return this.handlePasswordFieldIconButtonToggleClick(event);
        super.handleTextFieldIconButtonClick(event);
    }
}

customElements.define("md-password-field", MdPasswordFieldComponent);

export { MdPasswordFieldComponent };

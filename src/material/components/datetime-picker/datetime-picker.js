import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDatetimePickerElement } from "../../base/datetime-picker.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

class MdDatetimePicker extends MdDatetimePickerElement {
    static properties = {};

    constructor() {
        super();
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-datetime-picker__header">
                <div class="md-datetime-picker__leading"></div>
                <div class="md-datetime-picker__trailing"></div>
            </div>
            <div class="md-datetime-picker__body">
                <div class="md-datetime-picker__main"></div>
                <div class="md-datetime-picker__footer"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-datetime-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-datetime-picker");
    }
}

customElements.define("md-datetime-picker", MdDatetimePicker);

export { MdDatetimePicker };

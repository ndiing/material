import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevColorPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color</label>
                    <input
                        id="color"
                        name="color"
                        type="color"
                        value="#6750a4"
                        @input="${this.handleColorInput}"
                    />
                    <md-color-picker
                        id="colorPicker"
                        value="#6750a4"
                        @onColorPickerButtonCancelClick="${this.handleColorPickerButtonCancelClick}"
                        @onColorPickerButtonOkClick="${this.handleColorPickerButtonOkClick}"
                        @onColorPickerSelection="${this.handleColorPickerSelection}"
                    ></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker"
                        @click="${this.handleColorPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="colorPicker2"></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker 2"
                        @click="${this.handleColorPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get color() {
        return this.querySelector("#color");
    }

    get colorPicker() {
        return this.querySelector("#colorPicker");
    }

    get colorPicker2() {
        return this.querySelector("#colorPicker2");
    }

    // button
    handleColorPickerButtonClick(event) {
        this.colorPicker.showModal(event.currentTarget);
    }

    handleColorPickerButtonClick2(event) {
        this.colorPicker2.showModal(event.currentTarget);
    }

    // input
    handleColorInput() {
        this.colorPicker.value = this.color.value;
    }

    // color-picker
    handleColorPickerButtonCancelClick() {
        this.color.value = this.colorPicker.value;
        this.colorPicker.close();
    }

    handleColorPickerButtonOkClick() {
        this.color.value = this.colorPicker.value;
        this.colorPicker.close();
    }

    handleColorPickerSelection() {
        this.color.value = this.colorPicker.selection.hex.slice(0, 1 + 6);
    }
}

customElements.define("dev-color-picker", DevColorPickerComponent);

export default document.createElement("dev-color-picker");

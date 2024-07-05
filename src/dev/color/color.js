import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { setTheme } from "../../material/color/color.js";

class DevColorComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color</label>
                    <input
                        type="color"
                        name=""
                        id="color"
                        @input="${this.handleChange}"
                    />
                </div>
            </div>
        `;
    }

    handleChange(event) {
        setTheme(event.currentTarget.value);
    }
}

customElements.define("dev-color", DevColorComponent);

export default document.createElement("dev-color");

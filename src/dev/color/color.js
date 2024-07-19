import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { setTheme } from "../../material/color/color.js";

class DevColor extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Set theme from color</md-markdown>
                            <md-color-field
                                @onTextFieldNativeInput="${(event) => {
                                    setTheme(event.detail.currentTarget.value);
                                }}"
                            ></md-color-field>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Set theme from image</md-markdown>
                            <md-text-field
                                type="file"
                                @onTextFieldNativeInput="${(event) => {
                                    const file = event.detail.currentTarget.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = function (e) {
                                            const imgElement = new Image();
                                            imgElement.src = e.target.result;
                                            setTheme(imgElement);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}"
                            ></md-text-field>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-color", DevColor);

export default document.createElement("dev-color");

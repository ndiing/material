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

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select image</label>
                    <input
                        type="file"
                        name=""
                        id="color"
                        @input="${this.handleChange2}"
                    />
                </div>

                
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-error);
                            color:var(--md-sys-color-on-error);
                        "
                    >error</div>
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-error-container);
                            color:var(--md-sys-color-on-error-container);
                        "
                    >error-container</div>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-success);
                            color:var(--md-sys-color-on-success);
                        "
                    >success</div>
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-success-container);
                            color:var(--md-sys-color-on-success-container);
                        "
                    >success-container</div>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-info);
                            color:var(--md-sys-color-on-info);
                        "
                    >info</div>
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-info-container);
                            color:var(--md-sys-color-on-info-container);
                        "
                    >info-container</div>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-warning);
                            color:var(--md-sys-color-on-warning);
                        "
                    >warning</div>
                    <div
                        style="
                            display:inline-block;
                            vertical-align:middle;
                            width:112px;
                            height:112px;
                            background-color:var(--md-sys-color-warning-container);
                            color:var(--md-sys-color-on-warning-container);
                        "
                    >warning-container</div>
                </div>

            </div>
        `;
    }

    handleChange(event) {
        setTheme(event.currentTarget.value);
    }

    handleChange2(event) {
        const file = event.target.files[0];

        if (!file) {
            console.error("No file selected.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            const imageUrl = event.target.result;
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            setTheme(imgElement);
        };

        reader.readAsDataURL(file);
    }
}

customElements.define("dev-color", DevColorComponent);

export default document.createElement("dev-color");

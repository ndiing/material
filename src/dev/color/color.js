import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { setTheme } from "../../material/color/color.js";

class DevColor extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:640px;height:360px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <input 
                                type="color"
                                @input="${event=>{
                                    setTheme(event.currentTarget.value)
                                }}"
                            >
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <input 
                                type="file"
                                @input="${event=>{
                                    const file = event.currentTarget.files[0];

                                    if (file) {
                                        const image = new Image()
                                        const reader = new FileReader();

                                        reader.addEventListener('load', ()=> {
                                            image.src = reader.result;
                                            setTheme(image)
                                        });

                                        reader.readAsDataURL(file);
                                    }
                                }}"
                            >
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-color", DevColor);

export default document.createElement("dev-color");

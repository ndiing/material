import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
// import data from "../../assets/icons.json"
// import data from "../../assets/icons.map.json";

// console.log(data)

class DevIconComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon>image</md-icon>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-icon", DevIconComponent);

export default document.createElement("dev-icon");

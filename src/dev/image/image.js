import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevImageComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image src="https://placehold.co/112"></md-image>
                    <md-image
                        variant="rounded"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="width:112px;"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="height:112px;"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-image", DevImageComponent);

export default document.createElement("dev-image");

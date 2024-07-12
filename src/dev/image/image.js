import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevImage extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-image
                                src="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                alt="alt"
                                srcset=""
                                sizes=""
                                crossorigin=""
                                usemap=""
                                ismap
                                width=""
                                height=""
                                errerpolicy=""
                                decoding=""
                                loading=""
                                title=""
                                longdesc=""
                                fetchpriority=""
                                ratio=""
                                variant="rounded"
                                @onImageNativeLoad="${console.log}"
                                @onImageNativeError="${console.log}"
                            ></md-image>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-image", DevImage);

export default document.createElement("dev-image");

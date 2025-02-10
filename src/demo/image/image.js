import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoImage extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image
                            src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah"
                            alt=""
                            ratio=""
                            circular=""
                        ></md-image>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-image", DemoImage);
export default document.createElement("demo-image");

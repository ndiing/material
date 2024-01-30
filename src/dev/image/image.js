import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ImageComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-image src="https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50"></md-image>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("image-component", ImageComponent);

export default document.createElement('image-component')

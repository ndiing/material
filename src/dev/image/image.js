import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ImageComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                    <md-image style="width:128px;" aspectRatio="16/9" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="3/2" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="4/3" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="1/1" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="3/4" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="2/3" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                </div>
                <div class="md-layout__item md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                    <md-image style="width:128px;" aspectRatio="16/9" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="3/2" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="4/3" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="1/1" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="3/4" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                    <md-image style="width:128px;" aspectRatio="2/3" ui="shape" src="https://api.dicebear.com/7.x/icons/svg?seed=Oliver"></md-image>
                </div>
                <div class="md-layout__item md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("image-component", ImageComponent);

export default document.createElement("image-component");

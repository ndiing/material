import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class BottomAppBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-bottom-app-bar
                        iconButton="image"
                        .iconButtons="${[
                            'image',
                            'image',
                            'image',
                        ]}"
                        trailingFab="image"
                    ></md-bottom-app-bar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("bottom-app-bar-component", BottomAppBarComponent);

export default document.createElement("bottom-app-bar-component");

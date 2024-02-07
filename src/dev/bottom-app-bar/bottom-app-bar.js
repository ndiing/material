import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class BottomAppBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div class="md-layout__item md-layout__item--south" open>
                    <md-bottom-app-bar
                        id="bar"
                        iconButton="image"
                        .iconButtons="${[
                            'image',
                            'image',
                            'image',
                        ]}"
                        trailingFab="image"
                    ></md-bottom-app-bar>
                </div>
                <div class="md-layout__item md-layout__item--center">
                    lorem*100
                </div>
            </div>
        `;
    }
}

customElements.define("bottom-app-bar-component", BottomAppBarComponent);

export default document.createElement("bottom-app-bar-component");

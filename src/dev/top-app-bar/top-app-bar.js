import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class TopAppBarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--border">
                <div class="md-layout__item md-layout__item--north" open>
                    <md-top-app-bar
                        iconButton="image"
                        label="Label"
                        trailingIconButton="image"
                    ></md-top-app-bar>
                </div>
                <div class="md-layout__item md-layout__item--center">
                    lorem*100
                </div>
            </div>
        `;
    }
}

customElements.define("top-app-bar-component", TopAppBarComponent);

export default document.createElement("top-app-bar-component");

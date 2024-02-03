import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ErrorComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout">
                <div class="md-layout md-layout--grid">
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <h1>Error</h1>
                        <md-outlet></md-outlet>
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    </div>
                    <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("error-component", ErrorComponent);

export default document.createElement("error-component");

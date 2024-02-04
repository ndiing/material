import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class FabComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-fab size="small" icon="image"></md-fab>
                    <md-fab size="" icon="image"></md-fab>
                    <md-fab size="large" icon="image"></md-fab>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-fab ui="extended" icon="image" label="Label"></md-fab>
                    <md-fab ui="extended" label="Label"></md-fab>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("fab-component", FabComponent);

export default document.createElement("fab-component");

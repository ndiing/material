import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class FabComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-fab ui="" size="small" icon="image"></md-fab>
                    <md-fab ui="" size="" icon="image"></md-fab>
                    <md-fab ui="" size="large" icon="image"></md-fab>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-fab ui="unelevated" size="small" icon="image"></md-fab>
                    <md-fab ui="unelevated" size="" icon="image"></md-fab>
                    <md-fab ui="unelevated" size="large" icon="image"></md-fab>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-fab ui="extended" icon="image" label="Label"></md-fab>
                    <md-fab ui="extended" label="Label"></md-fab>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-fab ui="extended unelevated" icon="image" label="Label"></md-fab>
                    <md-fab ui="extended unelevated" label="Label"></md-fab>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("fab-component", FabComponent);

export default document.createElement("fab-component");

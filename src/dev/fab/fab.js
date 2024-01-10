import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class FabComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab size="small" icon="image"></md-fab>
                        <md-fab size="" icon="image"></md-fab>
                        <md-fab size="large" icon="image"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab appearance="extended" icon="image" label="Label"></md-fab>
                        <md-fab appearance="extended" label="Label"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define("fab-component", FabComponent);

export default document.createElement("fab-component");

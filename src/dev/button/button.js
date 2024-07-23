import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevButton extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button variant="elevated" type="button" label="Elevated"></md-button>
                            <md-button variant="elevated" type="button" label="Elevated" icon="add"></md-button>
                            <md-button variant="elevated" type="button" label="Elevated" icon="add" disabled></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button variant="filled" type="button" label="Filled"></md-button>
                            <md-button variant="filled" type="button" label="Filled" icon="add"></md-button>
                            <md-button variant="filled" type="button" label="Filled" icon="add" disabled></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button variant="tonal" type="button" label="Tonal"></md-button>
                            <md-button variant="tonal" type="button" label="Tonal" icon="add"></md-button>
                            <md-button variant="tonal" type="button" label="Tonal" icon="add" disabled></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button variant="outlined" type="button" label="Outlined"></md-button>
                            <md-button variant="outlined" type="button" label="Outlined" icon="add"></md-button>
                            <md-button variant="outlined" type="button" label="Outlined" icon="add" disabled></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button type="button" label="Text"></md-button>
                            <md-button type="button" label="Text" icon="add"></md-button>
                            <md-button type="button" label="Text" icon="add" disabled></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-button", DevButton);

export default document.createElement("dev-button");

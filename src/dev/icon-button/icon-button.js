import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevIconButton extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-icon-button variant="" icon="image"></md-icon-button>
                            <md-icon-button variant="toggle " icon="image"></md-icon-button>
                            <md-icon-button selected variant="toggle " icon="image"></md-icon-button>
                            <md-icon-button disabled variant="toggle " icon="image"></md-icon-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-icon-button variant="filled" icon="image"></md-icon-button>
                            <md-icon-button variant="toggle filled" icon="image"></md-icon-button>
                            <md-icon-button selected variant="toggle filled" icon="image"></md-icon-button>
                            <md-icon-button disabled variant="toggle filled" icon="image"></md-icon-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-icon-button variant="tonal" icon="image"></md-icon-button>
                            <md-icon-button variant="toggle tonal" icon="image"></md-icon-button>
                            <md-icon-button selected variant="toggle tonal" icon="image"></md-icon-button>
                            <md-icon-button disabled variant="toggle tonal" icon="image"></md-icon-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-icon-button variant="outlined" icon="image"></md-icon-button>
                            <md-icon-button variant="toggle outlined" icon="image"></md-icon-button>
                            <md-icon-button selected variant="toggle outlined" icon="image"></md-icon-button>
                            <md-icon-button disabled variant="toggle outlined" icon="image"></md-icon-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-icon-button", DevIconButton);

export default document.createElement("dev-icon-button");

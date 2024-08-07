import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTopAppBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-top-app-bar leadingActions='[{"icon":"image"}]' headline="headline" trailingActions='[{"icon":"image"}]' variant="center-aligned" id="center"></md-top-app-bar>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-top-app-bar leadingActions='[{"icon":"image"}]' headline="headline" trailingActions='[{"icon":"image"}]' variant="small" id="small"></md-top-app-bar>
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-border">
                                <md-top-app-bar leadingActions='[{"icon":"image"}]' headline="headline" trailingActions='[{"component":"spacer"},{"icon":"image"}]' variant="medium" id="medium"></md-top-app-bar>
                                <div class="md-layout-border__item md-layout-border__item--center">
                                    <div class="md-layout-border">
                                        <md-top-app-bar leadingActions='[{"icon":"image"}]' headline="headline" trailingActions='[{"component":"spacer"},{"icon":"image"}]' variant="large" id="large"></md-top-app-bar>
                                        <div class="md-layout-border__item md-layout-border__item--center">
                                            <div class="md-layout-column">
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button variant="tonal" label="Center-aligned" @click="${() => center.toggle()}"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button variant="tonal" label="Small" @click="${() => small.toggle()}"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button variant="tonal" label="Medium" @click="${() => medium.toggle()}"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button variant="tonal" label="Large" @click="${() => large.toggle()}"></md-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");

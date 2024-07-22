import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevCard extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card>body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline">body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline" subhead="subhead">body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline" subhead="subhead" actions='[{"component":"spacer"},{"label":"label"}]'>body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline" subhead="subhead" actions='[{"component":"spacer"},{"label":"label"}]' leadingActions='[{"icon":"image"}]'>body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline" subhead="subhead" actions='[{"component":"spacer"},{"label":"label"}]' leadingActions='[{"icon":"image"}]' trailingActions='[{"icon":"image"}]'>body</md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="headline" subhead="subhead" actions='[{"component":"spacer"},{"label":"label"}]' leadingActions='[{"icon":"image"}]' trailingActions='[{"icon":"image"}]'>
                                <div class="md-layout-border">
                                    <div class="md-layout-border__item md-layout-border__item--north">north</div>
                                    <div class="md-layout-border__item md-layout-border__item--south">south</div>
                                    <div class="md-layout-border__item md-layout-border__item--west">west</div>
                                    <div class="md-layout-border__item md-layout-border__item--east">east</div>
                                    <div class="md-layout-border__item md-layout-border__item--center">center</div>
                                </div>
                            </md-card>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="elevated" variant="elevated"> </md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="filled" variant="filled"> </md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card headline="outlined" variant="outlined"> </md-card>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-card", DevCard);

export default document.createElement("dev-card");

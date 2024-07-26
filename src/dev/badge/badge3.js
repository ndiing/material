import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0=[
    {leadingIcon:'image',headline:'Photos',badge:9999,selected:true},
    {leadingIcon:'font_download',headline:'Fonts'},
    {leadingIcon:'article',headline:'Documents'},
]

class DevBadge extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">

                <md-navigation-drawer
                    open
                    .items="${items0}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">

                    <!-- <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-badge></md-badge>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-badge label="1"></md-badge>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-badge label="1111" limit="999"></md-badge>
                        </div>
                    </div> -->

                </div>
            </div>
        `;
    }
}

customElements.define("dev-badge3", DevBadge);

export default document.createElement("dev-badge3");

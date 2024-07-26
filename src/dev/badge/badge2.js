import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0=[
    {leadingIcon:'folder',headline:'All Files',badge:9999},
    {leadingIcon:'schedule',headline:'Recent',selected:true},
    {leadingIcon:'image',headline:'Images'},
    {leadingIcon:'library_music',headline:'Library',badge:1234},
]

class DevBadge extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">

                <md-navigation-rail
                    open
                    .items="${items0}"
                ></md-navigation-rail>

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

customElements.define("dev-badge2", DevBadge);

export default document.createElement("dev-badge2");

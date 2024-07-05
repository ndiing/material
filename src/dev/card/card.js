import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevCardComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="elevated interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"filled"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="filled interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"outlined"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="outlined interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"tonal"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                        trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                        actions='[{"component":"spacer"},{"label":"Action","variant":"outlined"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                        trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card> Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information. </md-card>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-card", DevCardComponent);

export default document.createElement("dev-card");

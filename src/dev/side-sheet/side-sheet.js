import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSideSheet extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-side-sheet
                    id="sideSheet0"
                    leadingActions='[{"icon":"image"}]'
                    label="label"
                    trailingActions='[{"icon":"image"}]'
                    actions='[{"label":"label","variant":"outlined"},{"label":"label","variant":"filled"}]'
                ></md-side-sheet>
                <md-side-sheet
                    id="sideSheet1"
                    variant="modal"
                    leadingActions='[{"icon":"image"}]'
                    label="label"
                    trailingActions='[{"icon":"image"}]'
                    actions='[{"label":"label","variant":"outlined"},{"label":"label","variant":"filled"}]'
                ></md-side-sheet>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Standard side sheet</md-markdown>
                            <md-button
                                label="toggle side sheet"
                                variant="tonal"
                                @click="${() => sideSheet0.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Modal side sheet</md-markdown>
                            <md-button
                                label="toggle side sheet"
                                variant="tonal"
                                @click="${() => sideSheet1.toggle(true)}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-side-sheet", DevSideSheet);

export default document.createElement("dev-side-sheet");

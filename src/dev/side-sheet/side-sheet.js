import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSideSheet extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-side-sheet open leadingActions='[{"icon":"image"}]' label="label" trailingActions='[{"icon":"image"}]' actions='[{"label":"label","variant":"outlined"},{"label":"label","variant":"filled"}]'></md-side-sheet>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-side-sheet", DevSideSheet);

export default document.createElement("dev-side-sheet");

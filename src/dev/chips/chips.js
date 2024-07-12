import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevChips extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    {"label":"label 1",selected:true},
                                    {"label":"label 2"},
                                    {"label":"label 3"},
                                    {"label":"label 4"},
                                    {"label":"label 5"},
                                ]}"
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    {"label":"label 1",selected:true},
                                    {"label":"label 2"},
                                    {"label":"label 3",selected:true},
                                    {"label":"label 4"},
                                    {"label":"label 5"},
                                ]}"
                                multiSelection
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chips", DevChips);

export default document.createElement("dev-chips");

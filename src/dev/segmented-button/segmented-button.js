import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSegmentedButtonComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        single-select
                        .buttons="${[{ label: "Enabled", selected: true }, { label: "Enabled" }, { label: "Enabled" }]}"
                    ></md-segmented-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        multi-select
                        .buttons="${[{ label: "$", selected: true }, { label: "$$", selected: true }, { label: "$$$" }, { label: "$$$$" }]}"
                    ></md-segmented-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:0;"
                        single-select
                        .buttons="${[{ label: "Enabled", selected: true }, { label: "Enabled" }, { label: "Enabled" }]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-1;"
                        single-select
                        .buttons="${[{ label: "Enabled", selected: true }, { label: "Enabled" }, { label: "Enabled" }]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-2;"
                        single-select
                        .buttons="${[{ label: "Enabled", selected: true }, { label: "Enabled" }, { label: "Enabled" }]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-3;"
                        single-select
                        .buttons="${[{ label: "Enabled", selected: true }, { label: "Enabled" }, { label: "Enabled" }]}"
                    ></md-segmented-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-segmented-button", DevSegmentedButtonComponent);

export default document.createElement("dev-segmented-button");

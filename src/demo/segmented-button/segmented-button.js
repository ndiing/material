import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoSegmentedButton extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            style="--md-comp-segmented-button-density:0;"
                            .items="${[{ label: "Label", selected: true }, { label: "Label" }, { label: "Label" }]}"
                        ></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            style="--md-comp-segmented-button-density:-1;"
                            .items="${[{ label: "Label", selected: true }, { label: "Label" }, { label: "Label" }]}"
                        ></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            style="--md-comp-segmented-button-density:-2;"
                            .items="${[{ label: "Label", selected: true }, { label: "Label" }, { label: "Label" }]}"
                        ></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            style="--md-comp-segmented-button-density:-3;"
                            .items="${[{ label: "Label", selected: true }, { label: "Label" }, { label: "Label" }]}"
                        ></md-segmented-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-segmented-button", DemoSegmentedButton);
export default document.createElement("demo-segmented-button");

import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoSegmentedButtonMulti extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            .items="${[{ label: "Label", selected: true }, { label: "Label", selected: true }, { label: "Label" }]}"
                            type="multi-selected"
                        ></md-segmented-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-segmented-button-multi", DemoSegmentedButtonMulti);
export default document.createElement("demo-segmented-button-multi");

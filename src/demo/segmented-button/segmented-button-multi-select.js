import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSegmentedButtonMultiSelect extends MdComponent {
    constructor() {
        super();
        this.items = [{ label: "Label", selected: true }, { label: "Label", selected: true }, { label: "Label" }];
    }

    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            type="multi-select"
                            .items="${this.items}"
                        ></md-segmented-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-segmented-button-multi-select", DemoSegmentedButtonMultiSelect);

export default document.createElement("demo-segmented-button-multi-select");

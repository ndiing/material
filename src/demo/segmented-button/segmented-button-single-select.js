import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSegmentedButtonSingleSelect extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-segmented-button
                            type="single-select"
                            items=""
                            type=""
                        ></md-segmented-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-segmented-button-single-select", DemoSegmentedButtonSingleSelect);

export default document.createElement("demo-segmented-button-single-select");

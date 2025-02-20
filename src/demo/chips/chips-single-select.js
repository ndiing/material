import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoChipsSingleSelect extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            type="single-select"
                            items=""
                            type=""
                        ></md-chips>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-chips-single-select", DemoChipsSingleSelect);

export default document.createElement("demo-chips-single-select");

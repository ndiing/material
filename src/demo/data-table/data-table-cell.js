import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDataTableCell extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-data-table-cell
                            checkbox=""
                            checked=""
                            indeterminate=""
                            avatar=""
                            icon=""
                            label=""
                            sublabel=""
                        ></md-data-table-cell>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-data-table-cell", DemoDataTableCell);

export default document.createElement("demo-data-table-cell");

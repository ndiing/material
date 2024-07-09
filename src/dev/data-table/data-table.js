import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();
        this.columns = Array.from({ length: 10 }, (v, k) => ({
            name: "name" + k,
            label: "label" + k,
        }));

        this.rows = Array.from({ length: 100 }, (v, k) => {
            return this.columns.reduce((acc, col) => {
                acc[col.name] = `data_${col.name}_${k}`;
                return acc;
            }, {});
        });
    }

    render() {
        return html`
            <div
                style="height:100%;width:100%;margin:0;min-width:0;min-height:0;padding:24px;"
                class="md-layout-column"
            >
                <div
                    style="height:100%;width:100%;margin:0;min-width:0;min-height:0;"
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                >
                    <md-data-table
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                        stickyHeader
                        checkboxSelection
                        stickyCheckboxSelection
                        rangeSelection
                        multiSelection
                        singleSelection
                        allSelection
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTableComponent);

export default document.createElement("dev-data-table");

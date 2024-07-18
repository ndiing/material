import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDataTable extends MDComponent {
    constructor() {
        super();

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis recusandae iste dicta eius! Nihil eos, labore reiciendis quidem officiis reprehenderit tempora veritatis error voluptatem porro sequi. Asperiores, ratione quisquam?".split(" ");

        // window.setInterval(() => {
        let length = 10;
        this.columns = Array.from({ length }, (_, k) => ({
            name: "name" + k,
            label: "label" + k,
            sticky: k === 0 || k === 1 || k === length - 2 || k === length - 1,
            reorderable:k>1&&k<length-2,
            resizable:k>1&&k<length-2,
            sortable:true,
        }));

        this.rows = Array.from({ length: 500 }, (_, k) => {
            let row = {};
            this.columns.forEach((column, index) => {
                if (index % 2 === 0) {
                    row[column.name] = lorem[getRandomNumber(0, lorem.length)];
                } else {
                    row[column.name] = getRandomNumber(0, 100);
                }
            });
            return row;
        });

        this.footer = Array.from({ length: 1 }, (_, k) => {
            let row = {};
            this.columns.forEach((column) => {
                row[column.name] = "sum" + k;
            });
            return row;
        });

        this.requestUpdate();
        // }, 1000*5)
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div
                        style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:24px;"
                        class="md-layout-column"
                    >
                        <div
                            style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;"
                            class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                        >
                            <md-data-table
                                .columns="${this.columns}"
                                .rows="${this.rows}"
                                .footer="${this.footer}"
                                stickyHeader
                                stickyFooter
                                checkboxSelection
                                stickyCheckboxSelection
                                rangeSelection
                                multiSelection
                                singleSelection
                                allSelection
                            ></md-data-table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");

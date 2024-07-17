import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const columns = [
    { name: "symbol", label: "Symbol", resizable: true, orderable: true, sortable: true, sticky: true },
    { name: "company", label: "Company Name", resizable: true, orderable: true, sortable: true, sticky: true },
    { name: "price", label: "Price", type: "currency", resizable: true, orderable: true, sortable: true },
    { name: "change", label: "Change", type: "percent", resizable: true, orderable: true, sortable: true },
    { name: "volume", label: "Volume", type: "number", resizable: true, orderable: true, sortable: true, sticky: true },
    { name: "marketCap", label: "Market Cap", type: "currency", resizable: true, orderable: true, sortable: true, sticky: true },
];

function generateRows(numRows) {
    const rows = [];
    for (let i = 1; i <= numRows; i++) {
        rows.push({
            symbol: `SYM${i}`,
            company: `Company ${i}`,
            price: Math.random() * 1000,
            change: (Math.random() - 0.5) * 10,
            volume: Math.floor(Math.random() * 10000000),
            marketCap: Math.random() * 1000e9,
        });
    }
    return rows;
}
const rows = generateRows(10000);

class DevDataTable extends MDComponent {
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
                                .columns=${columns}
                                .rows=${rows}
                                stickyHeader
                                checkboxSelection
                                stickyCheckboxSelection
                                rangeSelection
                                multiSelection
                                singleSelection
                                allSelection
                                @onDataTableViewportVirtualScroll="${console.log}"
                                @onDataTableColumnCheckboxNativeInput="${console.log}"
                                @onDataTableRowCheckboxNativeInput="${console.log}"
                                @onDataTableRowClick="${console.log}"
                                @handleDataTableKeydown="${console.log}"
                                @onDataTableColumnResizeStart="${console.log}"
                                @onDataTableColumnResize="${console.log}"
                                @onDataTableColumnResizeEnd="${console.log}"
                                @onDataTableColumnPointerenter="${console.log}"
                                @onDataTableColumnPointerleave="${console.log}"
                                @onDataTableColumnTap="${console.log}"
                                @onDataTableTextFieldNativeSearch="${console.log}"
                                @onDataTablePaginationChange="${console.log}"
                                @onDataTableColumnDoubleTap="${console.log}"
                                @onDataTableColumnResizeDoubleTap="${console.log}"
                                @onDataTableColumnDragStart="${console.log}"
                                @onDataTableColumnDrag="${console.log}"
                                @onDataTableColumnDragEnd="${console.log}"
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

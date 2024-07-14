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

const rows = [
    { symbol: "AAPL", company: "Apple Inc.", price: 145.11, change: -1.23, volume: 35678900, marketCap: 2400e9 },
    { symbol: "MSFT", company: "Microsoft Corporation", price: 279.23, change: 2.45, volume: 24567000, marketCap: 2100e9 },
    { symbol: "GOOGL", company: "Alphabet Inc.", price: 2689.45, change: -0.75, volume: 1789000, marketCap: 1800e9 },
    { symbol: "AMZN", company: "Amazon.com Inc.", price: 3425.1, change: 0.89, volume: 4567000, marketCap: 1700e9 },
    { symbol: "TSLA", company: "Tesla Inc.", price: 677.92, change: -3.21, volume: 12345000, marketCap: 650e9 },
    { symbol: "FB", company: "Meta Platforms Inc.", price: 332.45, change: 1.67, volume: 9876000, marketCap: 900e9 },
    { symbol: "NVDA", company: "NVIDIA Corporation", price: 816.78, change: -0.54, volume: 5678000, marketCap: 500e9 },
    { symbol: "NFLX", company: "Netflix Inc.", price: 620.34, change: 0.32, volume: 3456700, marketCap: 280e9 },
    { symbol: "PYPL", company: "PayPal Holdings Inc.", price: 298.56, change: 2.11, volume: 2345600, marketCap: 350e9 },
    { symbol: "CRM", company: "Salesforce.com Inc.", price: 254.89, change: -1.09, volume: 1234500, marketCap: 200e9 },
];

class DevDataTable extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-low);margin:24px;width:1280px;height:720px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:24px;" class="md-layout-column">
                        <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;" class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table .columns=${columns} .rows=${rows} stickyHeader checkboxSelection stickyCheckboxSelection rangeSelection multiSelection singleSelection allSelection @onDataTableViewportVirtualScroll="${console.log}" @onDataTableColumnCheckboxNativeInput="${console.log}" @onDataTableRowCheckboxNativeInput="${console.log}" @onDataTableRowClick="${console.log}" @handleDataTableKeydown="${console.log}" @onDataTableColumnResizeStart="${console.log}" @onDataTableColumnResize="${console.log}" @onDataTableColumnResizeEnd="${console.log}" @onDataTableColumnPointerenter="${console.log}" @onDataTableColumnPointerleave="${console.log}" @onDataTableColumnTap="${console.log}" @onDataTableTextFieldNativeSearch="${console.log}" @onDataTablePaginationChange="${console.log}" @onDataTableColumnDoubleTap="${console.log}" @onDataTableColumnResizeDoubleTap="${console.log}" @onDataTableColumnDragStart="${console.log}" @onDataTableColumnDrag="${console.log}" @onDataTableColumnDragEnd="${console.log}"></md-data-table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/screener.json";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();
        this.columns = [
            { name: "name", label: "name", sticky:true,sortable:true },
            { name: "description", label: "description",sortable:true },
            { name: "logoid", label: "logoid", sticky:true,sortable:true },
            { name: "update_mode", label: "update_mode",sortable:true },
            { name: "type", label: "type",sortable:true },
            { name: "typespecs", label: "typespecs",sortable:true },
            { name: "close", label: "close",sortable:true },
            { name: "pricescale", label: "pricescale",sortable:true },
            { name: "minmov", label: "minmov",sortable:true },
            { name: "fractional", label: "fractional",sortable:true },
            { name: "minmove2", label: "minmove2",sortable:true },
            { name: "currency", label: "currency",sortable:true },
            { name: "change", label: "change",sortable:true },
            { name: "volume", label: "volume",sortable:true },
            { name: "relative_volume_10d_calc", label: "relative_volume_10d_calc",sortable:true },
            { name: "market_cap_basic", label: "market_cap_basic",sortable:true },
            { name: "fundamental_currency_code", label: "fundamental_currency_code",sortable:true },
            { name: "price_earnings_ttm", label: "price_earnings_ttm",sortable:true },
            { name: "earnings_per_share_diluted_ttm", label: "earnings_per_share_diluted_ttm",sortable:true },
            { name: "earnings_per_share_diluted_yoy_growth_ttm", label: "earnings_per_share_diluted_yoy_growth_ttm",sortable:true },
            { name: "dividends_yield_current", label: "dividends_yield_current",sortable:true },
            { name: "sector.tr", label: "sector.tr",sortable:true },
            { name: "market", label: "market",sortable:true },
            { name: "sector", label: "sector", sticky:true,sortable:true },
            { name: "recommendation_mark", label: "recommendation_mark",sortable:true },
            { name: "exchange", label: "exchange", sticky:true,sortable:true },
        ];
        this.rows = data;
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
                        stickyCheckbox
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

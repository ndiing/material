import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/screener.json";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();

        this.columns = [
            { name: "name", label: "name", width: 56*3, sticky: true, sortable:true },
            { name: "description", label: "description", width: 56*3, sortable:true },
            { name: "logoid", label: "logoid", width: 56*3, sticky: true, sortable:true },
            { name: "update_mode", label: "update_mode", width: 56*3, sortable:true },
            { name: "type", label: "type", width: 56*3, sortable:true },
            { name: "typespecs", label: "typespecs", width: 56*3, sortable:true },
            { name: "close", label: "close", width: 56*3, sortable:true },
            { name: "pricescale", label: "pricescale", width: 56*3, sortable:true },
            { name: "minmov", label: "minmov", width: 56*3, sortable:true },
            { name: "fractional", label: "fractional", width: 56*3, sortable:true },
            { name: "minmove2", label: "minmove2", width: 56*3, sortable:true },
            { name: "currency", label: "currency", width: 56*3, sortable:true },
            { name: "change", label: "change", width: 56*3, sortable:true },
            { name: "volume", label: "volume", width: 56*3, sortable:true },
            { name: "relative_volume_10d_calc", label: "relative_volume_10d_calc", width: 56*3, sortable:true },
            { name: "market_cap_basic", label: "market_cap_basic", width: 56*3, sortable:true },
            { name: "fundamental_currency_code", label: "fundamental_currency_code", width: 56*3, sortable:true },
            { name: "price_earnings_ttm", label: "price_earnings_ttm", width: 56*3, sortable:true },
            { name: "earnings_per_share_diluted_ttm", label: "earnings_per_share_diluted_ttm", width: 56*3, sortable:true },
            { name: "earnings_per_share_diluted_yoy_growth_ttm", label: "earnings_per_share_diluted_yoy_growth_ttm", width: 56*3, sortable:true },
            { name: "dividends_yield_current", label: "dividends_yield_current", width: 56*3, sortable:true },
            { name: "sector.tr", label: "sector.tr",width: 56*3, sortable:true },
            { name: "market", label: "market", width: 56*3, sortable:true },
            { name: "sector", label: "sector", width: 56*3, sticky: true, sortable:true },
            { name: "recommendation_mark", label: "recommendation_mark", width: 56*3, sortable:true },
            { name: "exchange", label: "exchange", width: 56*3, sticky: true, sortable:true },
        ];
        this.rows = data;
    }
    render() {
        return html`
            <div
                class="md-layout-column"
                style="min-width:0;min-height:0;margin:0;height:100%;width:100%;padding:24px;"
            >
                <div
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                    style="min-width:0;min-height:0;margin:0;height:100%;width:100%;"
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

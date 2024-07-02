import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/screener.json";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();
        this.columns = [
            { name: "name", label: "name", sticky:true },
            { name: "description", label: "description" },
            { name: "logoid", label: "logoid", sticky:true },
            { name: "update_mode", label: "update_mode" },
            { name: "type", label: "type" },
            { name: "typespecs", label: "typespecs" },
            { name: "close", label: "close" },
            { name: "pricescale", label: "pricescale" },
            { name: "minmov", label: "minmov" },
            { name: "fractional", label: "fractional" },
            { name: "minmove2", label: "minmove2" },
            { name: "currency", label: "currency" },
            { name: "change", label: "change" },
            { name: "volume", label: "volume" },
            { name: "relative_volume_10d_calc", label: "relative_volume_10d_calc" },
            { name: "market_cap_basic", label: "market_cap_basic" },
            { name: "fundamental_currency_code", label: "fundamental_currency_code" },
            { name: "price_earnings_ttm", label: "price_earnings_ttm" },
            { name: "earnings_per_share_diluted_ttm", label: "earnings_per_share_diluted_ttm" },
            { name: "earnings_per_share_diluted_yoy_growth_ttm", label: "earnings_per_share_diluted_yoy_growth_ttm" },
            { name: "dividends_yield_current", label: "dividends_yield_current" },
            { name: "sector.tr", label: "sector.tr" },
            { name: "market", label: "market" },
            { name: "sector", label: "sector", sticky:true },
            { name: "recommendation_mark", label: "recommendation_mark" },
            { name: "exchange", label: "exchange", sticky:true },
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
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTableComponent);

export default document.createElement("dev-data-table");

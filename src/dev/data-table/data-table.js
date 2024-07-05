import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/screener.json";
import { toTitleCase } from "../../material/functions/functions.js";


class DevDataTableComponent extends MDComponent {
    constructor() {
        super();
        this.columns = [
            { name: "name", label: toTitleCase("name")/* , sticky: true *//* , sortable: true */ },
            { name: "description", label: toTitleCase("description")/* , sortable: true */ },
            { name: "logoid", label: toTitleCase("logoid")/* , sticky: true *//* , sortable: true */ },
            { name: "update_mode", label: toTitleCase("update_mode")/* , sortable: true */ },
            { name: "type", label: toTitleCase("type")/* , sortable: true */ },
            { name: "typespecs", label: toTitleCase("typespecs")/* , sortable: true */ },
            { name: "close", label: toTitleCase("close")/* , sortable: true */ },
            { name: "pricescale", label: toTitleCase("pricescale")/* , sortable: true */ },
            { name: "minmov", label: toTitleCase("minmov")/* , sortable: true */ },
            { name: "fractional", label: toTitleCase("fractional")/* , sortable: true */ },
            { name: "minmove2", label: toTitleCase("minmove2")/* , sortable: true */ },
            { name: "currency", label: toTitleCase("currency")/* , sortable: true */ },
            { name: "change", label: toTitleCase("change")/* , sortable: true */ },
            { name: "volume", label: toTitleCase("volume")/* , sortable: true */ },
            { name: "relative_volume_10d_calc", label: toTitleCase("relative_volume_10d_calc")/* , sortable: true */ },
            { name: "market_cap_basic", label: toTitleCase("market_cap_basic")/* , sortable: true */ },
            { name: "fundamental_currency_code", label: toTitleCase("fundamental_currency_code")/* , sortable: true */ },
            { name: "price_earnings_ttm", label: toTitleCase("price_earnings_ttm")/* , sortable: true */ },
            { name: "earnings_per_share_diluted_ttm", label: toTitleCase("earnings_per_share_diluted_ttm")/* , sortable: true */ },
            { name: "earnings_per_share_diluted_yoy_growth_ttm", label: toTitleCase("earnings_per_share_diluted_yoy_growth_ttm")/* , sortable: true */ },
            { name: "dividends_yield_current", label: "dividends_yield_current"/* , sortable: true */ },
            { name: "sector.tr", label: toTitleCase("sector.tr")/* , sortable: true */ },
            { name: "market", label: toTitleCase("market")/* , sortable: true */ },
            { name: "sector", label: toTitleCase("sector")/* , sticky: true *//* , sortable: true */ },
            { name: "recommendation_mark", label: toTitleCase("recommendation_mark")/* , sortable: true */ },
            { name: "exchange", label: toTitleCase("exchange")/* , sticky: true *//* , sortable: true */ },
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

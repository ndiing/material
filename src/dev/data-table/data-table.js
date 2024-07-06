import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/screener.json";
import { toTitleCase } from "../../material/functions/functions.js";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();
        this.columns = [
            { name: "name", label: toTitleCase("name"), sticky: true, sortable: true, resizable: true, orderable: true },
            { name: "description", label: toTitleCase("description"), sortable: true, resizable: true, orderable: true },
            { name: "logoid", label: toTitleCase("logoid"), sticky: true, sortable: true, resizable: true, orderable: true },
            { name: "update_mode", label: toTitleCase("update_mode"), sortable: true, resizable: true, orderable: true },
            { name: "type", label: toTitleCase("type"), sortable: true, resizable: true, orderable: true },
            { name: "typespecs", label: toTitleCase("typespecs"), sortable: true, resizable: true, orderable: true },
            { name: "close", label: toTitleCase("close"), sortable: true, resizable: true, orderable: true },
            { name: "pricescale", label: toTitleCase("pricescale"), sortable: true, resizable: true, orderable: true },
            { name: "minmov", label: toTitleCase("minmov"), sortable: true, resizable: true, orderable: true },
            { name: "fractional", label: toTitleCase("fractional"), sortable: true, resizable: true, orderable: true },
            { name: "minmove2", label: toTitleCase("minmove2"), sortable: true, resizable: true, orderable: true },
            { name: "currency", label: toTitleCase("currency"), sortable: true, resizable: true, orderable: true },
            { name: "change", label: toTitleCase("change"), sortable: true, resizable: true, orderable: true },
            { name: "volume", label: toTitleCase("volume"), sortable: true, resizable: true, orderable: true },
            { name: "relative_volume_10d_calc", label: toTitleCase("relative_volume_10d_calc"), sortable: true, resizable: true, orderable: true },
            { name: "market_cap_basic", label: toTitleCase("market_cap_basic"), sortable: true, resizable: true, orderable: true },
            { name: "fundamental_currency_code", label: toTitleCase("fundamental_currency_code"), sortable: true, resizable: true, orderable: true },
            { name: "price_earnings_ttm", label: toTitleCase("price_earnings_ttm"), sortable: true, resizable: true, orderable: true },
            { name: "earnings_per_share_diluted_ttm", label: toTitleCase("earnings_per_share_diluted_ttm"), sortable: true, resizable: true, orderable: true },
            { name: "earnings_per_share_diluted_yoy_growth_ttm", label: toTitleCase("earnings_per_share_diluted_yoy_growth_ttm"), sortable: true, resizable: true, orderable: true },
            { name: "dividends_yield_current", label: "dividends_yield_current", sortable: true, resizable: true, orderable: true },
            { name: "sector.tr", label: toTitleCase("sector.tr"), sortable: true, resizable: true, orderable: true },
            { name: "market", label: toTitleCase("market"), sortable: true, resizable: true, orderable: true },
            { name: "sector", label: toTitleCase("sector"), sticky: true, sortable: true, resizable: true, orderable: true },
            { name: "recommendation_mark", label: toTitleCase("recommendation_mark"), sortable: true, resizable: true, orderable: true },
            { name: "exchange", label: toTitleCase("exchange"), sticky: true, sortable: true, resizable: true, orderable: true },
        ];
        this.rows = data;

        // this.columns=[]
        // this.rows=[]
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

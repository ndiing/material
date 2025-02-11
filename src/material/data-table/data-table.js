import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 *
 * @extends MdComponent
 * @fires onDataTableHeaderCheckboxClick
 * @fires onDataTableBodyCheckboxClick
 * @fires onDataTableHeaderCellClick
 * @fires onDataTableBodyCellClick
 * @fires onDataTableBodyClick
 * @element md-data-table
 */
class MdDataTableComponent extends MdComponent {
    /**
     * @property {Array} [headers]
     * @property {Array} [bodies]
     * @property {Array} [footers]
     * @property {Array} [data]
     * @property {Boolean} [checkbox]
     */
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        footers: { type: Array },
        data: { type: Array },
        checkbox: { type: Boolean },
    };

    /**
     *
     */
    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.footers = [];
        this.data = [];
        this.storeData = [];
        this.store = new Store();
    }

    /**
     *
     * @param {Any} [th]
     */
    styleDataTableHeaderCell(th) {
        return {
            position: "sticky",
            top: 0,
            "z-index": 2,
            ...(th.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 3,
            }),
        };
    }

    /**
     *
     * @param {Any} [td]
     */
    styleDataTableBodyCell(td) {
        return {
            ...(td.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 1,
            }),
        };
    }

    /**
     *
     * @readonly
     */
    get checkboxData() {
        if (this.checkbox) {
            return [{ checkbox: true, sticky: true }];
        }
        return [];
    }

    /**
     *
     * @private
     */
    render() {
        return html`
            <table class="md-data-table__native">
                <thead>
                    ${this.headers.map(
                        (tr) => html`
                            <tr>
                                ${this.checkboxData.concat(tr).map(
                                    (th) => html`
                                        <th
                                            .data="${th}"
                                            style="${styleMap(this.styleDataTableHeaderCell(th))}"
                                            @click="${th.checkbox ? this.handleDataTableHeaderCheckboxClick : this.handleDataTableHeaderCellClick}"
                                        >
                                            <md-data-table-cell
                                                .label="${th.label}"
                                                .checkbox="${th.checkbox}"
                                                .indeterminate="${this.indeterminate}"
                                                .checked="${this.checked}"
                                                .action="${th.action || (th.sortable && " ")}"
                                            >
                                            </md-data-table-cell>
                                        </th>
                                    `,
                                )}
                            </tr>
                        `,
                    )}
                </thead>
                ${this.storeData.map(
                    (item) => html`
                        <tbody
                            .data="${item}"
                            ?selected="${item.selected}"
                            @click="${this.handleDataTableBodyClick}"
                        >
                            ${this.bodies.map(
                                (tr) => html`
                                    <tr>
                                        ${this.checkboxData.concat(tr).map(
                                            (td) => html`
                                                <td
                                                    .data="${td}"
                                                    style="${styleMap(this.styleDataTableBodyCell(td))}"
                                                    @click="${td.checkbox ? this.handleDataTableBodyCheckboxClick : this.handleDataTableBodyCellClick}"
                                                >
                                                    <md-data-table-cell
                                                        .label="${item[td.name]}"
                                                        .checkbox="${td.checkbox}"
                                                        .indeterminate="${item.indeterminate}"
                                                        .checked="${item.selected}"
                                                    >
                                                    </md-data-table-cell>
                                                </td>
                                            `,
                                        )}
                                    </tr>
                                `,
                            )}
                        </tbody>
                    `,
                )}
                <tfoot>
                    ${this.footers.map(
                        (tr) => html`
                            <tr>
                                ${tr.map(
                                    (td) => html`
                                        <td>
                                            <md-data-table-cell .label="${td.label}"> </md-data-table-cell>
                                        </td>
                                    `,
                                )}
                            </tr>
                        `,
                    )}
                </tfoot>
            </table>
        `;
    }

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
    }

    /**
     *
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("data")) {
            this.store.load(this.data);
            this.requestUpdateStore();
        }
    }

    /**
     *
     */
    requestUpdateStore() {
        const result = this.store.get({
            sorters: this.headers.flat().filter((item) => item.order),
            // q,
            // filters:[{name,value,operator}],
            // _start,
            // _end,
            // _page,
            // _limit,
        });
        this.storeData = result.data;
        this.requestUpdate();
    }

    /**
     *
     * @readonly
     */
    get selected() {
        return this.data.filter((item) => item.selected);
    }

    /**
     *
     * @readonly
     */
    get indeterminate() {
        return this.selected.length && this.selected.length < this.data.length;
    }

    /**
     *
     * @readonly
     */
    get checked() {
        return this.selected.length && this.selected.length === this.data.length;
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableHeaderCheckboxClick(event) {
        const data = event.currentTarget.data;
        const selected = !this.checked || this.indeterminate;
        this.data.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();
        this.emit("onDataTableHeaderCheckboxClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableBodyCheckboxClick(event) {
        const data = event.currentTarget.data;
        const bodyData = event.target.closest("tbody").data;
        bodyData.selected = !bodyData.selected;
        this.requestUpdate();
        this.emit("onDataTableBodyCheckboxClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableHeaderCellClick(event) {
        const data = event.currentTarget.data;
        if (data.sortable) {
            const actions = {
                undefined: "arrow_upward",
                asc: "arrow_downward",
                desc: undefined,
            };
            data.action = actions[data.order];
            const orders = {
                undefined: "asc",
                asc: "desc",
                desc: undefined,
            };
            data.order = orders[data.order];
            // console.log(data)
            // this.requestUpdate();
            this.requestUpdateStore();
        }
        this.emit("onDataTableHeaderCellClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableBodyCellClick(event) {
        this.emit("onDataTableBodyCellClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableBodyClick(event) {
        const bodyData = event.target.closest("tbody")?.data;
        if (bodyData?.checkbox) return;
        const data = event.currentTarget.data;
        this.data.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onDataTableBodyClick", { event });
    }
}
customElements.define("md-data-table", MdDataTableComponent);
export { MdDataTableComponent };

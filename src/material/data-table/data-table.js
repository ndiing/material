import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";

/**
 * @extends MdComponent
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

    get checkboxData() {
        if (this.checkbox) {
            return [{ checkbox: true, sticky: true }];
        }
        return [];
    }

    get selected() {
        return this.data.filter((item) => item.selected);
    }

    get indeterminate() {
        return this.selected.length && this.selected.length < this.data.length;
    }

    get checked() {
        return this.selected.length && this.selected.length === this.data.length;
    }

    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.footers = [];
        this.data = [];
        this.storeData = [];
        this.store = new Store();
    }

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

    styleDataTableBodyCell(td) {
        return {
            ...(td.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 1,
            }),
        };
    }

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
                                            @click="${th.checkbox ? this.handleDataTableHeaderCellCheckboxClick : this.handleDataTableHeaderCellClick}"
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
                                                    @click="${td.checkbox ? this.handleDataTableBodyCellCheckboxClick : this.handleDataTableBodyCellClick}"
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

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        window.addEventListener("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("data")) {
            await this.updateComplete;
            this.store.load(this.data);
            this.updateStore();
        }
    }

    /**
     */
    updateStore() {
        const result = this.store.get({
            sorters: this.headers.flat().filter((item) => item.order),
        });
        this.storeData = result.data;
        this.requestUpdate();
    }

    handleDataTableKeydown(event) {
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.data.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
        /**
         * @event onDataTableKeydown
         * @property {Object} event
         */
        this.emit("onDataTableKeydown", { event });
    }

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
            this.updateStore();
        }
        /**
         * @event onDataTableHeaderCellClick
         * @property {Object} event
         */
        this.emit("onDataTableHeaderCellClick", { event });
    }

    handleDataTableBodyCellClick(event) {
        /**
         * @event onDataTableBodyCellClick
         * @property {Object} event
         */
        this.emit("onDataTableBodyCellClick", { event });
    }

    handleDataTableHeaderCellCheckboxClick(event) {
        const data = event.currentTarget.data;
        const selected = !this.checked || this.indeterminate;
        this.data.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();
        /**
         * @event onDataTableHeaderCellCheckboxClick
         * @property {Object} event
         */
        this.emit("onDataTableHeaderCellCheckboxClick", { event });
    }

    handleDataTableBodyClick(event) {
        const bodyData = event.target.closest("td")?.data;
        if (bodyData?.checkbox) return;
        const data = event.currentTarget.data;
        if (event.ctrlKey) {
            data.selected = !data.selected;
        } else if (event.shiftKey) {
            this.prevSelectedIndex = this.prevSelectedIndex ?? 0;
            this.currentSelectedIndex = this.data.indexOf(data);
            this.swapSelectedIndex = this.prevSelectedIndex > this.currentSelectedIndex;
            if (this.swapSelectedIndex) {
                [this.prevSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.prevSelectedIndex];
            }
            this.data.forEach((item, index) => {
                item.selected = index >= this.prevSelectedIndex && index <= this.currentSelectedIndex;
            });
            if (this.swapSelectedIndex) {
                [this.currentSelectedIndex, this.prevSelectedIndex] = [this.prevSelectedIndex, this.currentSelectedIndex];
            }
        } else {
            this.data.forEach((item) => {
                item.selected = item === data;
            });
            this.prevSelectedIndex = this.data.indexOf(data);
        }
        this.requestUpdate();
        /**
         * @event onDataTableBodyClick
         * @property {Object} event
         */
        this.emit("onDataTableBodyClick", { event });
    }

    handleDataTableBodyCellCheckboxClick(event) {
        const data = event.currentTarget.data;
        const bodyData = event.target.closest("tbody").data;
        bodyData.selected = !bodyData.selected;
        this.requestUpdate();
        /**
         * @event onDataTableBodyCellCheckboxClick
         * @property {Object} event
         */
        this.emit("onDataTableBodyCellCheckboxClick", { event });
    }
}
customElements.define("md-data-table", MdDataTableComponent);
export { MdDataTableComponent };

import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * @extends MdComponent
 * @fires MdDataTableComponent#onDataTableBodyRowClick - {"detail":{"event":{}}}
 * @fires MdDataTableComponent#onDataTableHeaderCellCheckboxNativeInput - {"detail":{"event":{}}}
 * @fires MdDataTableComponent#onDataTableBodyCellCheckboxNativeInput - {"detail":{"event":{}}}
 */
class MdDataTableComponent extends MdComponent {
    /**
     * @property {Array} [headers]
     * @property {Array} [bodies]
     * @property {Array} [data]
     * @property {Array} [footers]
     */
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        data: { type: Array },
        footers: { type: Array },
    };

    /**
     */
    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.data = [];
        this.footers = [];
    }

    /**
     */
    get dataTableHeaderCellStickyStyle() {
        return {
            position: "sticky",
            top: 0,
            "z-index": 2,
        };
    }

    /**
     */
    get dataTableHeaderCellCheckboxStickyStyle() {
        return {
            position: "sticky",
            left: 0,
            "z-index": 3,
        };
    }

    /**
     */
    get dataTableBodyCellCheckboxStickyStyle() {
        return {
            position: "sticky",
            left: 0,
            "z-index": 1,
        };
    }

    /**
     * @private
     * @param {String} [tr]
     */
    renderDataTableHeaderRow(tr) {
        return html`
            <tr>
                <th style="${styleMap(this.dataTableHeaderCellCheckboxStickyStyle)}">
                    <md-data-table-cell
                        .checkbox="${true}"
                        .selected="${this.isSelectedAll}"
                        .indeterminate="${this.hasSelected}"
                        @onCheckboxNativeInput="${this.handleDataTableHeaderCellCheckboxNativeInput}"
                    ></md-data-table-cell>
                </th>
                ${tr.map(
                    (th) => html`
                        <th
                            .data="${th}"
                            style="${styleMap(this.dataTableHeaderCellStickyStyle)}"
                        >
                            <md-data-table-cell
                                style="${styleMap({ width: "200px" })}"
                                .label="${ifDefined(th.label)}"
                                .checkbox="${ifDefined(th.checkbox)}"
                                .action="${ifDefined(th.action)}"
                                .resizable="${true}"
                            ></md-data-table-cell>
                        </th>
                    `,
                )}
            </tr>
        `;
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderDataTableBodyRow(item) {
        return html`
            <tbody>
                ${this.bodies.map(
                    (tr) => html`
                        <tr
                            .data="${item}"
                            ?selected="${item.selected}"
                            @click="${this.handleDataTableBodyRowClick}"
                        >
                            <td style="${styleMap(this.dataTableBodyCellCheckboxStickyStyle)}">
                                <md-data-table-cell
                                    .data="${item}"
                                    .checkbox="${true}"
                                    .selected="${item.selected}"
                                    @onCheckboxNativeInput="${this.handleDataTableBodyCellCheckboxNativeInput}"
                                ></md-data-table-cell>
                            </td>
                            ${tr.map(
                                (td) => html`
                                    <td .data="${td}">
                                        <md-data-table-cell
                                            .label="${ifDefined(item[td.name])}"
                                            .checkbox="${ifDefined(td.checkbox)}"
                                            .action="${ifDefined(td.action)}"
                                        ></md-data-table-cell>
                                    </td>
                                `,
                            )}
                        </tr>
                    `,
                )}
            </tbody>
        `;
    }

    /**
     * @private
     * @param {String} [tr]
     */
    renderDataTableFooterRow(tr) {
        return html`
            <tr>
                ${tr.map(
                    (td) => html`
                        <td .data="${td}">
                            <md-data-table-cell></md-data-table-cell>
                        </td>
                    `,
                )}
            </tr>
        `;
    }

    /**
     * @private
     */
    render() {
        return html`
            <table class="md-data-table__native">
                <thead>
                    ${this.headers.map((tr) => this.renderDataTableHeaderRow(tr))}
                </thead>
                ${this.data.map((item) => this.renderDataTableBodyRow(item))}
                <tfoot>
                    ${this.footers.map((tr) => this.renderDataTableFooterRow(tr))}
                </tfoot>
            </table>
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
    }

    /**
     * @private
     * @async
     * @param {String} [changedProperties]
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("headers")) {
            if (!this.bodies?.length) {
                await this.updateComplete;
                this.bodies = this.headers;
            }
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDataTableBodyRowClick(event) {
        const target = event.target.closest(".md-data-table__checkbox");
        if (target) return;
        const data = event.currentTarget.data;
        this.data.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onDataTableBodyRowClick", { event });
    }

    /**
     */
    get selectedTotal() {
        return this.data.filter((item) => item.selected).length;
    }

    /**
     */
    get isSelectedAll() {
        return this.selectedTotal && this.selectedTotal === this.data.length;
    }

    /**
     */
    get hasSelected() {
        return this.selectedTotal && this.selectedTotal !== this.data.length;
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDataTableHeaderCellCheckboxNativeInput(event) {
        const selected = this.hasSelected || !this.isSelectedAll ? true : false;
        this.data.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();
        this.emit("onDataTableHeaderCellCheckboxNativeInput", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDataTableBodyCellCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onDataTableBodyCellCheckboxNativeInput", { event });
    }
}
customElements.define("md-data-table", MdDataTableComponent);
export { MdDataTableComponent };

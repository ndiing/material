import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MdComponent
 * @fires onDataTableHeaderCellCheckboxClick
 * @fires onDataTableBodyCellCheckboxClick
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
    }

    /**
     *
     */
    styleDataTableNativeHeaderCell() {
        return {
            position: "sticky",
            top: "0",
            zIndex: 2,
            // left: "0",
            // zIndex: 3,
        };
    }

    /**
     *
     */
    styleDataTableNativeBodyCell() {
        return {
            // position: "sticky",
            // left: "0",
            // zIndex: 1,
        };
    }

    /**
     *
     * @private
     */
    render() {
        return html`
            <table class="md-data-table__native">
                <thead>
                    ${this.renderDataTableHeaderRow()}
                </thead>
                ${this.renderDataTableNativeBody()}
                <tfoot>
                    ${this.renderDataTableNativeFooter()}
                </tfoot>
            </table>
        `;
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
     */
    renderDataTableHeaderCellCheckbox() {
        return html`
            <th
                .checkbox="${this.checkbox}"
                style="${styleMap(this.styleDataTableNativeHeaderCell())}"
                @click="${this.handleDataTableHeaderCellCheckboxClick}"
            >
                <md-data-table-cell
                    .leadingCheckbox="${true}"
                    .indeterminate="${this.indeterminate}"
                    .checked="${this.checked}"
                ></md-data-table-cell>
            </th>
        `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderDataTableBodyCellCheckbox(item) {
        return html`
            <td
                .data="${item}"
                .checkbox="${this.checkbox}"
                style="${styleMap(this.styleDataTableNativeBodyCell())}"
                @click="${this.handleDataTableBodyCellCheckboxClick}"
            >
                <md-data-table-cell
                    .leadingCheckbox="${true}"
                    .indeterminate="${ifDefined(item.indeterminate)}"
                    .checked="${ifDefined(item.checked ?? item.selected)}"
                ></md-data-table-cell>
            </td>
        `;
    }

    /**
     *
     * @private
     */
    renderDataTableHeaderRow() {
        return this.headers.map(
            (tr) => html`
                <tr>
                    ${this.checkbox ? this.renderDataTableHeaderCellCheckbox() : nothing}
                    ${tr.map(
                        (th, index) => html`
                            <th style="${styleMap(this.styleDataTableNativeHeaderCell())}">
                                <md-data-table-cell .label="${th.label}"></md-data-table-cell>
                            </th>
                        `,
                    )}
                </tr>
            `,
        );
    }

    /**
     *
     * @private
     */
    renderDataTableNativeBody() {
        return this.data.map(
            (item) => html`
                <tbody
                    .data="${item}"
                    ?selected="${item.selected}"
                    @click="${this.handleDataTableBodyClick}"
                >
                    ${this.bodies.map(
                        (tr) => html`
                            <tr>
                                ${this.checkbox ? this.renderDataTableBodyCellCheckbox(item) : nothing}
                                ${tr.map(
                                    (td, index) => html`
                                        <td style="${styleMap(this.styleDataTableNativeBodyCell())}">
                                            <md-data-table-cell .label="${item[td.name]}"></md-data-table-cell>
                                        </td>
                                    `,
                                )}
                            </tr>
                        `,
                    )}
                </tbody>
            `,
        );
    }

    /**
     *
     * @private
     */
    renderDataTableNativeFooter() {
        return this.footers.map(
            (tr) => html`
                <tr>
                    ${tr.map(
                        (td) => html`
                            <td>
                                <md-data-table-cell></md-data-table-cell>
                            </td>
                        `,
                    )}
                </tr>
            `,
        );
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
     * @param {Any} [event]
     */
    handleDataTableHeaderCellCheckboxClick(event) {
        const selected = !this.checked || this.indeterminate;
        this.data.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();
        this.emit("onDataTableHeaderCellCheckboxClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableBodyCellCheckboxClick(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onDataTableBodyCellCheckboxClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleDataTableBodyClick(event) {
        const td = event.target.closest("td");
        const checkbox = td.checkbox;
        if (checkbox) return;
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

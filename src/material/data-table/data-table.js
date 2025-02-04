import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @fires MdDataTableComponent#onDataTableBodyClick - {"detail":{"event":{}}}
 * @fires MdDataTableComponent#onDataTableHeaderCellCheckboxNativeInput - {"detail":{"event":{}}}
 * @fires MdDataTableComponent#onDataTableBodyCellCheckboxNativeInput - {"detail":{"event":{}}}
 */
class MdDataTableComponent extends MdComponent {

    /**
     * @property {Array} [headers]
     * @property {Array} [bodies]
     * @property {Array} [footers]
     * @property {Array} [data]
     */
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        footers: { type: Array },
        data: { type: Array },
    };

    /**
     */
    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.footers = [];
        this.data = [];
    }

    /**
     * @private
     */
    render() {
        return html`
            <table class="md-data-table__native">
                <thead>
                    ${this.headers.map(
                        (tr) => html`
                            <tr>
                                <th>
                                    <md-data-table-cell
                                        .checkbox="${true}"
                                        .checked="${this.checked}"
                                        .indeterminate="${this.indeterminate}"
                                        @onCheckboxNativeInput="${this.handleDataTableHeaderCellCheckboxNativeInput}"
                                    ></md-data-table-cell>
                                </th>
                                ${tr.map(
                                    (th) => html`
                                        <th>
                                            <md-data-table-cell .label="${ifDefined(th.label)}"></md-data-table-cell>
                                        </th>
                                    `,
                                )}
                            </tr>
                        `,
                    )}
                </thead>
                ${this.data.map(
                    (item) => html`
                        <tbody
                            .data="${item}"
                            ?selected="${item.selected}"
                            @click="${this.handleDataTableBodyClick}"
                        >
                            ${this.bodies.map(
                                (tr) => html`
                                    <tr>
                                        <td>
                                            <md-data-table-cell
                                                .data="${item}"
                                                .checkbox="${true}"
                                                .checked="${item.selected}"
                                                @onCheckboxNativeInput="${this.handleDataTableBodyCellCheckboxNativeInput}"
                                            ></md-data-table-cell>
                                        </td>
                                        ${tr.map(
                                            (td) => html`
                                                <td>
                                                    <md-data-table-cell .label="${item[td.name]}"></md-data-table-cell>
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
                    <tr>
                        <td></td>
                    </tr>
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
                this.bodies = JSON.parse(JSON.stringify(this.headers));
            }
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDataTableBodyClick(event) {
        if (event.target.closest(".md-data-table__checkbox")) {
            return;
        }
        const data = event.currentTarget.data;
        this.data.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onDataTableBodyClick", { event });
    }

    /**
     */
    get selected() {
        return this.data.filter((item) => item.selected);
    }

    /**
     */
    get checked() {
        return this.selected.length && this.selected.length === this.data.length;
    }

    /**
     */
    get indeterminate() {
        return this.selected.length && this.selected.length < this.data.length;
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleDataTableHeaderCellCheckboxNativeInput(event) {
        const checked = !this.checked || this.indeterminate;
        this.data.forEach((item) => {
            item.selected = checked;
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

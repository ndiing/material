import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ref } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";
import { RippleController } from "../../controller/ripple.js";

/**
 * @class MdDataTable
 * @extends MdElement
 *
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-select
 * @fires MdDataTable#row-click
 * @fires MdDataTable#cell-click
 */
class MdDataTable extends MdElement {
    /**
     * @property {Array} columns -
     * @property {Array} rows -
     * @property {String} valueField -
     * @property {Boolean} clearSelection -
     * @property {Boolean} selectAll -
     * @property {Boolean} activeRow -
     * @property {Boolean} scrollOnArrowUpActiveRow -
     * @property {Boolean} selectOnArrowUpActiveRow -
     * @property {Boolean} scrollOnArrowDownActiveRow -
     * @property {Boolean} selectOnArrowDownActiveRow -
     * @property {Boolean} activeCell -
     * @property {Boolean} selectOnEnterActiveRow -
     * @property {Boolean} selectRange -
     * @property {Boolean} multiSelect -
     * @property {Boolean} singleSelect -
     * @property {Boolean} activeVisible -
     * @property {Boolean} checkbox -
     * @property {Array} _rows -
     */
    static properties = {
        columns: { type: Array },
        rows: { type: Array },
        valueField: { type: String },
        clearSelection: { type: Boolean },
        selectAll: { type: Boolean },
        activeRow: { type: Boolean },
        scrollOnArrowUpActiveRow: { type: Boolean },
        selectOnArrowUpActiveRow: { type: Boolean },
        scrollOnArrowDownActiveRow: { type: Boolean },
        selectOnArrowDownActiveRow: { type: Boolean },
        activeCell: { type: Boolean },
        selectOnEnterActiveRow: { type: Boolean },
        selectRange: { type: Boolean },
        multiSelect: { type: Boolean },
        singleSelect: { type: Boolean },
        activeVisible: { type: Boolean, state: true },
        checkbox: { type: Boolean },
        _rows: { type: Array, state: true },
    };

    constructor() {
        super();
        this.columns = [];
        this.rows = [];
        this._rows = [];
        this.valueField = "id";
        this.selectedValues = new Set();
        this.activeRowIndex = 0;
        this.activeCellIndex = 0;
        this.checkbox = true;

        this._handleVirtualScrollUpdate = this._handleVirtualScrollUpdate.bind(this);
        this._handleKeydown = this._handleKeydown.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    /* prettier-ignore */

    renderThead(){
        const size=this.selectedValues.size
        const checked = size&&size===this.rows.length
        const indeterminate = size&&size!==this.rows.length
        return html`
            <thead>
                <tr>
                    ${this.checkbox?html`
                        <th>
                            <div class="md-data-table__cell">
                                <md-checkbox
                                    class="md-data-table__checkbox"
                                    .tabIndex="${-1}"
                                    .indeterminate="${indeterminate}"
                                    .checked="${checked}"
                                    @input="${this._handleHeaderCellCheckboxNativeInput}"
                                ></md-checkbox>
                            </div>
                        </th>
                    `:nothing}
                    ${this.columns.map(column=>html`
                        <th
                            style="${styleMap(column.style??{})}"
                        >
                            <md-data-table-cell
                                .label="${column.label}"
                            ></md-data-table-cell>
                        </th>
                    `)}
                </tr>
            </thead>
        `
    }

    /* prettier-ignore */

    renderTbody(){
        return html`
            <tbody
                style="${styleMap({
                    'transform':'translate3d(0,var(--md-comp-virtual-scroll-content-translate-y),0)'
                })}"
            >
                ${this._rows.map((row,rowIndex)=>{
                    const selected= this.selectedValues.has(row[this.valueField])
                    return html`
                        <tr
                            class="${classMap({
                                'md-data-table__row--selected':selected
                            })}"
                            .row="${row}"
                            @click="${this._handleRowClick}"
                        >
                            ${this.checkbox?html`
                                <td>
                                    <div class="md-data-table__cell">
                                        <md-checkbox
                                            class="md-data-table__checkbox"
                                            .tabIndex="${-1}"
                                            .checked="${selected}"
                                            @input="${this._handleCheckboxNativeInput}"
                                        ></md-checkbox>
                                    </div>
                                </td>
                            `:nothing}
                            ${this.columns.map((cell,cellIndex)=>html`
                                <td
                                    class="${classMap({
                                        'md-data-table__cell--active':((this.activeVisible&&this.activeRow&&this.activeCell)&&(this.activeRowIndex-this.startNode)===rowIndex&&this.activeCellIndex===cellIndex)
                                    })}"
                                    .cell="${cell}"
                                    @click="${this._handleCellClick}"
                                >
                                    <md-data-table-cell
                                        .label="${row[cell.name]}"
                                    ></md-data-table-cell>
                                </td>
                            `)}
                        </tr>
                    `
                })}
            </tbody>
        `
    }

    /* prettier-ignore */

    renderEmptyTbody(){
        return html`
            <tbody>
                <tr>
                    <td colspan="${this.columns.length}">
                        <md-data-table-cell
                            label="No data to display." 
                        ></md-data-table-cell>
                    </td>
                </tr>
            </tbody>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            <table
                .dataTable="${this}"
            >
                ${this.renderThead()}
                ${this._rows?.length?this.renderTbody():this.renderEmptyTbody()}
            </table>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table");

        this.tabIndex = 0;

        this.updateComplete.then(() => {
            if (!this.virtualScrollController) {
                this.virtualScrollController = new VirtualScrollController(this.querySelector("table"), {
                    register: false,
                    rowHeight: 52,
                    onUpdate: this._handleVirtualScrollUpdate,
                });
            }
            this.virtualScrollController.init();
        });

        this.addEventListener("keydown", this._handleKeydown);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.virtualScrollController.destroy();

        this.removeEventListener("keydown", this._handleKeydown);
        this.removeEventListener("click", this._handleClick);

        this.classList.remove("md-data-table");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("rows")) {
            this.updateComplete.then(() => {
                this.virtualScrollController.reinit({
                    itemCount: this.rows.length,
                });
            });
        }
    }

    _handleHeaderCellCheckboxNativeInput(event) {
        const checkbox = event.detail.element;

        if (checkbox.checked) {
            this.rows.forEach((row) => {
                this.selectedValues.add(row[this.valueField]);
            });
        } else {
            this.selectedValues.clear();
        }

        this.requestUpdate();
    }

    _handleCheckboxNativeInput(event) {}

    _handleVirtualScrollUpdate(params = {}) {
        const { controller } = params;
        this.startNode = controller.startNode;
        this.endNode = controller.endNode;

        this._rows = this.rows.slice(controller.startNode, controller.endNode);
    }

    _handleClick(event) {
        if (this.clearSelection && !event.target.closest("tr")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();

            this.emit("row-select", { event, element: this });
        }
    }

    _handleKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.rows.forEach((row) => {
                this.selectedValues.add(row[this.valueField]);
            });
            this.requestUpdate();

            this.emit("row-select", { event, element: this });
        }

        if (this.activeRow && event.key === "ArrowUp") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.max(this.activeRowIndex - 1, 0);

            if (this.scrollOnArrowUpActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex);
            }

            if (this.selectOnArrowUpActiveRow) {
                this.select(this.rows[this.activeRowIndex][this.valueField]);
                this.emit("row-select", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeRow && event.key === "ArrowDown") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeRowIndex = Math.min(this.activeRowIndex + 1, this.rows.length - 1);

            if (this.scrollOnArrowDownActiveRow) {
                this.virtualScrollController.scrollTo(this.activeRowIndex, { offset: 52 });
            }

            if (this.selectOnArrowDownActiveRow) {
                this.select(this.rows[this.activeRowIndex][this.valueField]);
                this.emit("row-select", { event, element: this });
            }

            this.requestUpdate();
        }

        if (this.activeCell && event.key === "ArrowLeft") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeCellIndex = Math.max(this.activeCellIndex - 1, 0);

            this.requestUpdate();
        }

        if (this.activeCell && event.key === "ArrowRight") {
            event.preventDefault();

            this.activeVisible = true;
            this.activeCellIndex = Math.min(this.activeCellIndex + 1, this.columns.length - 1);

            this.requestUpdate();
        }

        if (this.selectOnEnterActiveRow && (event.key === "Enter" || event.code === "Space")) {
            event.preventDefault();

            this.activeVisible = true;

            this.select(this.rows[this.activeRowIndex][this.valueField]);
            this.requestUpdate();

            this.emit("row-select", { event, element: this });
        }
    }

    _handleRowClick(event) {
        const tr = event.currentTarget;
        const row = tr.row;

        if (this.selectRange && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;
            this.currentSelectedIndex = this._rows.findIndex((_row) => _row[this.valueField] === row[this.valueField]);

            const [start, end] = [this.lastSelectedIndex, this.currentSelectedIndex].toSorted((a, b) => a - b);

            this.selectedValues.clear();
            this._rows.forEach((row, index) => {
                if (index >= start && index <= end) {
                    this.selectedValues.add(row[this.valueField]);
                }
            });

            this.emit("row-select", { event, element: this });
        } else if ((this.multiSelect && event.ctrlKey) || this.checkbox) {
            if (this.selectedValues.has(row[this.valueField])) {
                this.selectedValues.delete(row[this.valueField]);
            } else {
                this.selectedValues.add(row[this.valueField]);
            }

            this.emit("row-select", { event, element: this });
        } else if (this.singleSelect) {
            this.select(row[this.valueField]);

            this.emit("row-select", { event, element: this });
        }

        this.requestUpdate();
        this.emit("row-click", { event, element: this });
    }

    _handleCellClick(event) {
        if (!(this.activeRow && this.activeCell)) {
            return;
        }

        const td = event.currentTarget;
        const tr = td.parentElement;

        this.activeVisible = false;
        this.activeRowIndex = tr.sectionRowIndex + this.startNode;
        this.activeCellIndex = td.cellIndex;

        this.emit("cell-click", { event, element: this });
    }

    /**
     *
     */
    select(id) {
        this.selectedValues.clear();
        this.selectedValues.add(id);

        this.lastSelectedIndex = this._rows.findIndex((_row) => _row[this.valueField] === id);
    }
}

customElements.define("md-data-table", MdDataTable);

export { MdDataTable };

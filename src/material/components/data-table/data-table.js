import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScrollController } from "../../controller/virtual-scroll.js";

class MdDataTable extends MdElement {
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
        this.activeVisible = false;

        this.checkbox = true;

        this._handleDataTableVirtualScrollUpdate = this._handleDataTableVirtualScrollUpdate.bind(this);
        this._handleDataTableKeydown = this._handleDataTableKeydown.bind(this);
        this._handleDataTableClick = this._handleDataTableClick.bind(this);

        this.virtualScrollController = new VirtualScrollController(this, {
            rowHeight: 52,
            onUpdate: this._handleDataTableVirtualScrollUpdate,
        });
    }

    /* prettier-ignore */
    renderThead(){
        const size=this.selectedValues.size
        const checked = size===this.rows.length
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
                                    @onCheckboxNativeInput="${this._handleDataTableHeaderCellCheckboxNativeInput}"
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
                            @click="${this._handleDataTableRowClick}"
                        >
                            ${this.checkbox?html`
                                <td>
                                    <div class="md-data-table__cell">
                                        <md-checkbox
                                            class="md-data-table__checkbox"
                                            .tabIndex="${-1}"
                                            .checked="${selected}"
                                            @onCheckboxNativeInput="${this._handleDataTableCellCheckboxNativeInput}"
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
                                    @click="${this._handleDataTableCellClick}"
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

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table");

        this.tabIndex = 0;

        this.on("keydown", this._handleDataTableKeydown);
        this.on("click", this._handleDataTableClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this._handleDataTableKeydown);
        this.off("click", this._handleDataTableClick);

        this.classList.remove("md-data-table");
    }

    async update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("rows")) {
            await this.updateComplete;

            this.virtualScrollController.reinit({
                viewport: this.querySelector("table"),
                itemCount: this.rows.length,
            });
        }
    }

    _handleDataTableHeaderCellCheckboxNativeInput(event) {
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

    _handleDataTableCellCheckboxNativeInput(event) {}

    _handleDataTableVirtualScrollUpdate({ controller } = {}) {
        this.startNode = controller.startNode;
        this.endNode = controller.endNode;

        this._rows = this.rows.slice(controller.startNode, controller.endNode);
    }

    _handleDataTableClick(event) {
        if (this.clearSelection && !event.target.closest("tr")) {
            event.preventDefault();

            this.selectedValues.clear();
            this.requestUpdate();
            this.emit("onDataTableRowSelection", { event, element: this });
        }
        this.emit("onDataTableClick", { event, element: this });
    }

    _handleDataTableKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.code === "KeyA") {
            event.preventDefault();

            this.rows.forEach((row) => {
                this.selectedValues.add(row[this.valueField]);
            });
            this.requestUpdate();
            this.emit("onDataTableRowSelection", { event, element: this });
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
                this.emit("onDataTableRowSelection", { event, element: this });
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
                this.emit("onDataTableRowSelection", { event, element: this });
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

        if (this.selectOnEnterActiveRow && event.key === "Enter") {
            event.preventDefault();

            this.activeVisible = true;
            this.select(this.rows[this.activeRowIndex][this.valueField]);
            this.requestUpdate();
            this.emit("onDataTableRowSelection", { event, element: this });
        }
        this.emit("onDataTableKeydown", { event, element: this });
    }

    _handleDataTableRowClick(event) {
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
            this.emit("onDataTableRowSelection", { event, element: this });
        } else if ((this.multiSelect && event.ctrlKey) || this.checkbox) {
            if (this.selectedValues.has(row[this.valueField])) {
                this.selectedValues.delete(row[this.valueField]);
            } else {
                this.selectedValues.add(row[this.valueField]);
            }
            this.emit("onDataTableRowSelection", { event, element: this });
        } else if (this.singleSelect) {
            this.select(row[this.valueField]);
            this.emit("onDataTableRowSelection", { event, element: this });
        }

        this.requestUpdate();
        this.emit("onDataTableRowClick", { event, element: this });
    }

    _handleDataTableCellClick(event) {
        if (!(this.activeRow && this.activeCell)) {
            return;
        }

        const td = event.currentTarget;
        const tr = td.parentElement;

        this.activeVisible = false;
        this.activeRowIndex = tr.sectionRowIndex + this.startNode;
        this.activeCellIndex = td.cellIndex;
        this.emit("onDataTableCellClick", { event, element: this });
    }

    select(id) {
        this.selectedValues.clear();
        this.selectedValues.add(id);

        this.lastSelectedIndex = this._rows.findIndex((_row) => _row[this.valueField] === id);
    }
}

customElements.define("md-data-table", MdDataTable);

export { MdDataTable };

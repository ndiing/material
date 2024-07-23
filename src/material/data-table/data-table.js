import { html, nothing } from "lit";
import { MDCardComponent, MDStore, MDVirtualController } from "../material.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { renderComponent } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDCardComponent
 * @element md-data-table
 * @fires MDDataTableComponent#onDataTableTextFieldNativeSearch - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellDragStart - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellDrag - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellDragEnd - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellResizeStart - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellResize - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellResizeEnd - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellPointerenter - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellPointerleave - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellClick - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowCellCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowClick - {{desc}}
 * @fires MDDataTableComponent#onDataTableKeydown - {{desc}}
 * @fires MDDataTableComponent#onDataTablePaginationChange - {{desc}}
 */
class MDDataTableComponent extends MDCardComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Array} columns - {{desc}}
     * @property {Array} rows - {{desc}}
     * @property {Array} footer - {{desc}}
     * @property {Boolean} stickyHeader - {{desc}}
     * @property {Boolean} stickyFooter - {{desc}}
     * @property {Boolean} checkboxSelection - {{desc}}
     * @property {Boolean} stickyCheckboxSelection - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
     * @property {Array} toolbarItems - {{desc}}
     */
    static properties = {
        ...MDCardComponent.properties,
        columns: { type: Array },
        rows: { type: Array },
        footer: { type: Array },
        stickyHeader: { type: Boolean },
        stickyFooter: { type: Boolean },
        checkboxSelection: { type: Boolean },
        stickyCheckboxSelection: { type: Boolean },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
        toolbarItems: { type: Array },
    };

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [this.renderViewport()]
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {}
    get headline() {
        return "Label";
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set headline(value) {}
    get trailingActions() {
        return [{component:'spacer'},{ name: "search", classMap: { "md-data-table__search": true }, component: "search-field", placeholder: "search", icon: "search", variant: "outlined", onTextFieldNativeSearch: this.handleDataTableTextFieldNativeSearch.bind(this) }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set trailingActions(value) {}
    get actions() {
        return [{ component: "spacer" }, { name: "pagination", classMap: { "md-data-table__pagination": true }, component: "pagination", total: this.total, limit: this.limit, page: this.page, onPaginationChange: this.handleDataTablePaginationChange.bind(this) }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    get selected() {
        let total = this.store.docs?.filter((row) => row.selected)?.length;
        return total > 0 && total === this.store.docs.length;
    }

    /**
     * {{desc}}
     */
    get indeterminate() {
        let total = this.store.docs?.filter((row) => row.selected)?.length;
        return total > 0 && total < this.store.docs.length;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.total = 0;
        this.limit = 50;
        this.page = 1;
        this.store = new MDStore();
        this.virtual = new MDVirtualController(this);
    }

    /**
     * {{desc}}
     */
    styleStickyCheckboxSelection() {
        return {
            ...(this.stickyCheckboxSelection && { sticky: true, flow: "left", left: 0 }),
        };
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    styleDataTableColumnCell(column) {
        return styleMap({
            "min-width": `${column.width}px`,
            ...(this.stickyHeader && {
                position: "sticky",
                top: `${0 - this.virtual.translateY + 0}px`,
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${(column.flow === "left" ? 0 - this.virtual.translateX : this.virtual.translateX) + column[column.flow]}px`,
                "z-index": "3",
            }),
        });
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    styleDataTableRowCell(column) {
        return styleMap({
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${(column.flow === "left" ? 0 - this.virtual.translateX : this.virtual.translateX) + column[column.flow]}px`,
                "z-index": "1",
            }),
        });
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    styleDataTableFooterCell(column) {
        return styleMap({
            ...(this.stickyFooter && {
                position: "sticky",
                bottom: `${this.virtual.translateY + 0}px`,
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${(column.flow === "left" ? 0 - this.virtual.translateX : this.virtual.translateX) + column[column.flow]}px`,
                "z-index": "3",
            }),
        });
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    classDataTableColumnCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    classDataTableRowCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    /**
     * {{desc}}
     * @param {Any} column - {{desc}}
     */
    classDataTableFooterCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    /**
     * {{desc}}
     */
    renderNative() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        ${this.checkboxSelection&&this.virtualColumns?.length?html`
                            <th
                                style="${this.styleDataTableColumnCell(this.styleStickyCheckboxSelection())}"
                                class="${this.classDataTableColumnCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}"
                            >${renderComponent({
                                component: 'data-table-column-cell',
                                leadingCheckbox:true,
                                selected:this.selected,
                                indeterminate:this.indeterminate,
                            })}</th>
                        `:nothing}
                        ${this.virtualColumns?.map(column => html`
                            <th
                                .data="${column}"
                                ?reorderable="${column.reorderable}"
                                ?resizable="${column.resizable}"
                                style="${this.styleDataTableColumnCell(column)}"
                                class="${this.classDataTableColumnCell(column)}"
                                @onDragStart="${this.handleDataTableColumnCellDragStart}"
                                @onDrag="${this.handleDataTableColumnCellDrag}"
                                @onDragEnd="${this.handleDataTableColumnCellDragEnd}"
                                @onResizeStart="${this.handleDataTableColumnCellResizeStart}"
                                @onResize="${this.handleDataTableColumnCellResize}"
                                @onResizeEnd="${this.handleDataTableColumnCellResizeEnd}"
                                @pointerenter="${this.handleDataTableColumnCellPointerenter}"
                                @pointerleave="${this.handleDataTableColumnCellPointerleave}"
                                @click="${this.handleDataTableColumnCellClick}"
                            >${renderComponent({
                                component: 'data-table-column-cell',
                                headline: column.label,
                                /* FIX THIS LATER... */
                                reorderable: column.reorderable,
                                resizable: column.resizable,
                                sortable: column.sortable,
                                sortableIcon: column.sortableIcon,
                                /* FIX THIS LATER... */
                                trailingActions:[{icon:"arrow_drop_down"}]
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.virtualRows?.map(row => html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                        >
                            ${this.checkboxSelection&&this.virtualColumns?.length?html`
                                <td
                                    .data="${row}"
                                    style="${this.styleDataTableRowCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataTableRowCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                    @onCheckboxNativeInput="${this.handleDataTableRowCellCheckboxNativeInput}"
                                >${renderComponent({
                                    component: 'data-table-row-cell',
                                    leadingCheckbox:true,
                                    selected:row.selected,
                                })}</td>
                            `:nothing}
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    style="${this.styleDataTableRowCell(column)}"
                                    class="${this.classDataTableRowCell(column)}"
                                >${renderComponent({
                                    component: 'data-table-row-cell',
                                    headline: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
                <tfoot>
                    ${this.footer?.map(row => html`
                        <tr>
                            ${this.checkboxSelection&&this.virtualColumns?.length?html`
                                <td
                                    style="${this.styleDataTableFooterCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataTableFooterCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                >${renderComponent({
                                    component: 'data-table-row-cell',
                                })}</td>
                            `:nothing}
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    style="${this.styleDataTableFooterCell(column)}"
                                    class="${this.classDataTableFooterCell(column)}"
                                >${renderComponent({
                                    component: 'data-table-row-cell',
                                    headline: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tfoot>
            </table>
        `
    }

    /**
     * {{desc}}
     */
    renderViewport() {
        /* prettier-ignore */
        return html`
            <div class="md-layout-border">
                ${this.toolbarItems?.length?html`
                    <div class="md-layout-border__item md-layout-border__item--north">
                        <md-toolbar class="md-data-table__toolbar" .items="${this.toolbarItems}"></md-toolbar>
                    </div>
                `:nothing}
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div 
                        class="md-virtual md-data-table__viewport"
                        @onVirtualScroll="${this.handleDataTableVirtualScroll}"
                    >
                        <div class="md-virtual__scrollbar md-data-table__scrollbar"></div>
                        <div class="md-virtual__container md-data-table__container">${this.renderNative()}</div>
                    </div>
                </div>
            </div>
        `
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("columns")) {
            await this.updateComplete;
            this.columns.forEach((column) => {
                if (column.width === undefined) {
                    column.width = 56 * 3;
                }
            });
            this.requestUpdate();
            await this.updateComplete;
            this.updateColumns();
            this.requestUpdate();
        }
        if (changedProperties.has("rows")) {
            this.store.docs = this.rows;
            this.updateStore();
            this.updateVirtual();
        }
    }

    /**
     * {{desc}}
     */
    updateVirtual() {
        this.virtual.options.rowTotal = this._end - this._start;
        this.virtual.options.rowHeight = 56;
        this.virtual.options.rowBuffer = 0 + (this.stickyFooter ? 1 : 0);
        this.virtual.options.columnTotal = this.columns.length;
        this.virtual.options.columnWidth = this.columns.reduce((acc, curr) => acc + curr.width, 0) / this.columns.length;
        this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length;
        this.virtual.handleVirtualScroll();
    }

    /**
     * {{desc}}
     */
    updateStore() {
        const { total, docs } = this.store.getAll({
            sorters: this.sorters,
            q: this.q,
            _start: this._start,
            _end: this._end,
        });
        this.storeRowsTotal = total;
        this.storeRows = docs;
        this.total = this.storeRowsTotal;
        this.virtual.viewport.scrollTop = 0;
    }

    /**
     * {{desc}}
     */
    updateColumns() {
        const total = this.columns.length;
        const half = Math.floor(total / 2);
        let stickyRightStart = undefined;
        let stickyLeftEnd = undefined;
        this.columns.forEach((column, index) => {
            column.stickyRightStart = false;
            column.stickyLeftEnd = false;
            if (column.sticky) {
                let flow;
                let from;
                let to;
                let value = 0;
                if (index > half) {
                    flow = "right";
                    from = index + 1;
                    to = total;
                    if (stickyRightStart === undefined) {
                        stickyRightStart = index;
                    }
                } else {
                    flow = "left";
                    from = 0;
                    to = index;
                    if (this.stickyCheckboxSelection) {
                        value += 72;
                    }
                    stickyLeftEnd = index;
                }
                for (let i = from; i < to; i++) {
                    let column = this.columns[i];
                    if (column.sticky) {
                        value += column.width;
                    }
                }
                column.flow = flow;
                column[flow] = value;
            }
        });
        if (stickyRightStart !== undefined) {
            this.columns[stickyRightStart].stickyRightStart = true;
        }
        if (stickyLeftEnd !== undefined) {
            this.columns[stickyLeftEnd].stickyLeftEnd = true;
        }
        this.stickyLeftEnd = this.stickyCheckboxSelection && stickyLeftEnd === undefined;
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    select(data) {
        this.store.docs.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.store.docs.indexOf(data);
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    selectToggle(data) {
        data.selected = !data.selected;
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.store.docs.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;
        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }
        this.store.docs.forEach((item, i) => {
            item.selected = i >= this.startIndex && i <= this.endIndex;
        });
        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     * {{desc}}
     * @param {Any} selected = true - {{desc}}
     */
    selectAll(selected = true) {
        this.store.docs.forEach((item) => {
            item.selected = selected;
        });
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableTextFieldNativeSearch(event) {
        this.q = event.detail.currentTarget.value;
        this.updateStore();
        this.updateVirtual();
        this.emit("onDataTableTextFieldNativeSearch", event);
    }

    /**
     * {{desc}}
     */
    handleDataTableVirtualScroll() {
        if (!this.storeRows) {
            return;
        }
        this.virtualColumns = this.columns.filter((column, index) => {
            return (index >= this.virtual.columnStart && index < this.virtual.columnEnd) || column.sticky;
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return index >= this.virtual.rowStart && index < this.virtual.rowEnd;
        });
        this.requestUpdate();
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellDragStart(event) {
        this.emit("onDataTableColumnCellDragStart", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellDrag(event) {
        this.drag = true;
        this.emit("onDataTableColumnCellDrag", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellDragEnd(event) {
        const fromData = event.currentTarget.data;
        const toData = event.detail.target.closest("th")?.data;
        if (toData) {
            const fromIndex = this.columns.indexOf(fromData);
            const toIndex = this.columns.indexOf(toData);
            const [column] = this.columns.splice(fromIndex, 1);
            this.columns.splice(toIndex, 0, column);
            this.updateColumns();
            this.virtual.handleVirtualScroll();
        }
        window.requestAnimationFrame(() => {
            this.drag = false;
        });
        this.emit("onDataTableColumnCellDragEnd", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellResizeStart(event) {
        this.emit("onDataTableColumnCellResizeStart", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellResize(event) {
        this.resize = true;
        const item = event.currentTarget.children[0];
        const data = event.currentTarget.data;
        data.width = item.gesture.currentWidth;
        this.updateColumns();
        this.virtual.handleVirtualScroll();
        this.emit("onDataTableColumnCellResize", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellResizeEnd(event) {
        window.requestAnimationFrame(() => {
            this.resize = false;
        });
        this.emit("onDataTableColumnCellResizeEnd", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellPointerenter(event) {
        const data = event.currentTarget.data;
        if (data.sortable && !this.drag && !this.resize) {
            if (!data.order) {
                data.sortableIcon = "arrow_upward";
                this.requestUpdate();
            }
        }
        this.emit("onDataTableColumnCellPointerenter", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellPointerleave(event) {
        const data = event.currentTarget.data;
        if (data.sortable) {
            if (!data.order) {
                data.sortableIcon = "";
                this.requestUpdate();
            }
        }
        this.emit("onDataTableColumnCellPointerleave", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellClick(event) {
        const data = event.currentTarget.data;
        if (data.sortable && !this.drag && !this.resize) {
            if (!data.order) {
                data.sortableIcon = "arrow_upward";
                data.order = "asc";
            } else if (data.order === "asc") {
                data.sortableIcon = "arrow_downward";
                data.order = "desc";
            } else {
                data.sortableIcon = "";
                data.order = "";
            }
            this.sorters = this.columns.filter((column) => column.order);
            this.updateStore();
            this.updateVirtual();
        }
        this.emit("onDataTableColumnCellClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableColumnCellCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.selectAll(checked);
        this.requestUpdate();
        this.emit("onDataTableColumnCellCheckboxNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableRowCellCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onDataTableRowCellCheckboxNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox," + ".md-data-table__radio-button," + ".md-data-table__switch")) {
            return;
        }
        const data = event.currentTarget.data;
        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection && event.ctrlKey) {
            this.selectToggle(data);
        } else if (this.singleSelection) {
            this.select(data);
        }
        this.requestUpdate();
        this.emit("onDataTableRowClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTableKeydown(event) {
        const activeElement = document.activeElement === event.target.closest("tr");
        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleDataTablePaginationChange(event) {
        this._start = event.detail.start;
        this._end = event.detail.end;
        this.updateStore();
        this.updateVirtual();
        this.emit("onDataTablePaginationChange", event);
    }
}
customElements.define("md-data-table", MDDataTableComponent);
export { MDDataTableComponent };

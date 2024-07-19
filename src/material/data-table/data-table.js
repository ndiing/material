import { html, nothing } from "lit";
import { MDCardComponent, MDStore, MDVirtualController } from "../material.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
class MDDataTableComponent extends MDCardComponent {
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
    };

    get childNodes_() {
        /* prettier-ignore */
        return [this.renderViewport()]
    }

    set childNodes_(value) {}
    get label() {
        return "Data table";
    }

    set label(value) {}
    get trailingActions() {
        return [{ name: "search", classMap: { "md-data-table__search": true }, component: "search-field", placeholder: "search", icon: "search", onTextFieldNativeSearch: this.handleDataTableTextFieldNativeSearch }];
    }

    set trailingActions(value) {}
    get actions() {
        return [{ component: "spacer" }, { name: "pagination", classMap: { "md-data-table__pagination": true }, component: "pagination", total: this.total, limit: this.limit, page: this.page, onPaginationChange: this.handleDataTablePaginationChange }];
    }

    set actions(value) {}
    get selected() {
        let total = this.store.docs?.filter((row) => row.selected)?.length;
        return total > 0 && total === this.store.docs.length;
    }

    get indeterminate() {
        let total = this.store.docs?.filter((row) => row.selected)?.length;
        return total > 0 && total < this.store.docs.length;
    }

    constructor() {
        super();
        this.total = 0;
        this.limit = 50;
        this.page = 1;
        this.store = new MDStore();
        this.virtual = new MDVirtualController(this);
    }

    renderColumnCell(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-column-cell
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .activated="${ifDefined(item.activated)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .reorderable="${ifDefined(item.reorderable)}"
                .resizable="${ifDefined(item.resizable)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
                @onDataTableItemSelected="${ifDefined(item.onDataTableItemSelected)}"
            ></md-data-table-column-cell>
        `
    }

    renderRowCell(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-row-cell
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .activated="${ifDefined(item.activated)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                @onDataTableItemSelected="${ifDefined(item.onDataTableItemSelected)}"
            ></md-data-table-row-cell>
        `
    }

    styleStickyCheckboxSelection() {
        return {
            ...(this.stickyCheckboxSelection && { sticky: true, flow: "left", left: 0 }),
        };
    }

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

    styleDataTableRowCell(column) {
        return styleMap({
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${(column.flow === "left" ? 0 - this.virtual.translateX : this.virtual.translateX) + column[column.flow]}px`,
                "z-index": "1",
            }),
        });
    }

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

    classDataTableColumnCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    classDataTableRowCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    classDataTableFooterCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

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
                            >${this.renderColumnCell({
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
                            >${this.renderColumnCell({
                                label: column.label,
                                reorderable: column.reorderable,
                                resizable: column.resizable,
                                sortable: column.sortable,
                                sortableIcon: column.sortableIcon,
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
                                >${this.renderRowCell({
                                    leadingCheckbox:true,
                                    selected:row.selected,
                                })}</td>
                            `:nothing}
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    style="${this.styleDataTableRowCell(column)}"
                                    class="${this.classDataTableRowCell(column)}"
                                >${this.renderRowCell({
                                    label: row[column.name]
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
                                >${this.renderRowCell({
                                })}</td>
                            `:nothing}
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    style="${this.styleDataTableFooterCell(column)}"
                                    class="${this.classDataTableFooterCell(column)}"
                                >${this.renderRowCell({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tfoot>
            </table>
        `
    }

    renderViewport() {
        /* prettier-ignore */
        return html`
            <div class="md-layout-border">
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

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

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

    updateVirtual() {
        this.virtual.options.rowTotal = this._end - this._start;
        this.virtual.options.rowHeight = 52;
        this.virtual.options.rowBuffer = 0 + (this.stickyFooter ? 1 : 0);
        this.virtual.options.columnTotal = this.columns.length;
        this.virtual.options.columnWidth = this.columns.reduce((acc, curr) => acc + curr.width, 0) / this.columns.length;
        this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length;
        this.virtual.handleVirtualScroll();
    }

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
    }

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

    handleDataTableTextFieldNativeSearch(event) {
        this.q = event.detail.currentTarget.value;
        this.updateStore();
        this.updateVirtual();
        this.emit("onDataTableTextFieldNativeSearch", event);
    }

    handleDataTablePaginationChange(event) {
        this._start = event.detail.start;
        this._end = event.detail.end;
        this.updateStore();
        this.updateVirtual();
        this.emit("onDataTablePaginationChange", event);
    }

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

    handleDataTableColumnCellDragStart(event) {
        this.emit("onDataTableColumnCellDragStart", event);
    }

    handleDataTableColumnCellDrag(event) {
        this.drag = true;
        this.emit("onDataTableColumnCellDrag", event);
    }

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

    handleDataTableColumnCellResizeStart(event) {
        this.emit("onDataTableColumnCellResizeStart", event);
    }

    handleDataTableColumnCellResize(event) {
        this.resize = true;
        const item = event.currentTarget.children[0];
        const data = event.currentTarget.data;
        data.width = item.gesture.currentWidth;
        this.updateColumns();
        this.virtual.handleVirtualScroll();
        this.emit("onDataTableColumnCellResize", event);
    }

    handleDataTableColumnCellResizeEnd(event) {
        window.requestAnimationFrame(() => {
            this.resize = false;
        });
        this.emit("onDataTableColumnCellResizeEnd", event);
    }

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

    select(data) {
        this.store.docs.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.store.docs.indexOf(data);
    }

    selectToggle(data) {
        data.selected = !data.selected;
    }

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

    selectAll(selected = true) {
        this.store.docs.forEach((item) => {
            item.selected = selected;
        });
    }

    handleDataTableColumnCellCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.selectAll(checked);
        this.requestUpdate();
        this.emit("onDataTableColumnCellCheckboxNativeInput", event);
    }

    handleDataTableRowCellCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onDataTableRowCellCheckboxNativeInput", event);
    }

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

    handleDataTableKeydown(event) {
        const activeElement = document.activeElement === event.target.closest("tr");
        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }
}
customElements.define("md-data-table", MDDataTableComponent);
export { MDDataTableComponent };

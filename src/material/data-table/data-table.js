import { ifDefined } from "lit/directives/if-defined.js";
import { MDCardComponent } from "../card/card.js";
import { html, nothing } from "lit";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { MDGestureController } from "../gesture/gesture.js";

class MDDataTableNativeColumnComponent extends HTMLTableCellElement {
    constructor() {
        super();

        this.gesture = new MDGestureController(this, {
            drag: ["x"],
            resize: ["e"],
        });
    }

    connectedCallback() {
        this.gesture.hostConnected();
    }

    disconnectedCallback() {
        this.gesture.hostDisconnected();
    }

    /**
     * {{desc}}
     */
    addController() {}
}
customElements.define("md-data-table-native-column", MDDataTableNativeColumnComponent, { extends: "th" });

/**
 * {{desc}}
 * @extends HTMLTableCellElement
 * @tagname md-data-table
 * @fires MDDataTableNativeColumnComponent#onDataTableViewportVirtualScroll - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnCheckboxNativeInput - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableRowCheckboxNativeInput - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableRowClick - {{desc}}
 * @fires MDDataTableNativeColumnComponent#handleDataTableKeydown - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnResizeStart - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnResize - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnResizeEnd - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnPointerenter - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnPointerleave - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnTap - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableTextFieldNativeSearch - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTablePaginationChange - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnDoubleTap - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnResizeDoubleTap - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnDragStart - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnDrag - {{desc}}
 * @fires MDDataTableNativeColumnComponent#onDataTableColumnDragEnd - {{desc}}
 */
class MDDataTableComponent extends MDCardComponent {
    /**
     * @property {Array} columns - {{desc}}
     * @property {Array} rows - {{desc}}
     * @property {Boolean} stickyHeader - {{desc}}
     * @property {Boolean} checkboxSelection - {{desc}}
     * @property {Boolean} stickyCheckboxSelection - {{desc}}
     * @property {Boolean} rangeSelection - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     * @property {Boolean} singleSelection - {{desc}}
     * @property {Boolean} allSelection - {{desc}}
     */
    static properties = {
        ...MDCardComponent.properties,
        columns: { type: Array },
        rows: { type: Array },

        stickyHeader: { type: Boolean },

        checkboxSelection: { type: Boolean },
        stickyCheckboxSelection: { type: Boolean },

        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    /**
     * {{desc}}
     */
    get label() {
        return "label";
    }

    /**
     * {{desc}}
     */
    set label(value) {}

    get trailingActions() {
        return [
            //
            { name: "search", component: "search-field", icon: "search", placeholder: "Search" },
            { name: "filter", icon: "filter_list" },
            { name: "add", icon: "add" },
            { name: "more", icon: "more_vert" },
        ];
    }

    /**
     * {{desc}}
     */
    set trailingActions(value) {}

    get body() {
        return [this.renderViewport()];
    }

    /**
     * {{desc}}
     */
    set body(value) {}

    get actions() {
        return [
            //
            { name: "spacer", component: "spacer" },
            { name: "pagination", component: "pagination", total: this.storeTotal },
        ];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();
    }

    renderDataTableItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-item
                .data="${item}"
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
                .indeterminate="${ifDefined(item.indeterminate)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
            ></md-data-table-item>
        `;
    }

    renderDataTable() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>

                        ${this.virtualColumns?.length&&this.checkboxSelection?html`
                            <th
                                style="${styleMap({
                                    ...(this.stickyHeader&&{
                                        "position": "sticky",
                                        "top": `${0 - this.virtual.translateY}px`,
                                        "z-index": "2",
                                    }),
                                    ...(this.stickyCheckboxSelection&&{
                                        "position": "sticky",
                                        "left": `${0 - this.virtual.translateX}px`,
                                        "z-index": "3",
                                    }),
                                })}"
                                class="${classMap({
                                    "md-data-table__column--sticky-left-end": this.stickyLeftEnd,
                                })}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCheckboxNativeInput}"
                            >${this.renderDataTableItem({
                                leadingCheckbox: true,
                                selected: this.isSelectedAll,
                                indeterminate: this.isSelectedPartial,
                            })}</th>
                        `:nothing}

                        ${this.virtualColumns?.map(column=>html`
                            <th
                                .data="${column}"
                                is="md-data-table-native-column"
                                ?resizable="${column.resizable}"
                                ?orderable="${column.orderable}"
                                style="${styleMap({
                                    "min-width": `${column.width}px`,
                                    ...(this.stickyHeader&&{
                                        "position": "sticky",
                                        "top": `${0 - this.virtual.translateY}px`,
                                        "z-index": "2",
                                    }),
                                    ...(column.sticky&&{
                                        "position": "sticky",
                                        [column.flow]: `${(column.flow==='left'?0 - this.virtual.translateX:this.virtual.translateX) + column[column.flow]}px`,
                                        "z-index": "3",
                                    }),
                                })}"
                                class="${classMap({
                                    "md-data-table__column--sticky-left-end": column.stickyLeftEnd,
                                    "md-data-table__column--sticky-right-start": column.stickyRightStart,
                                })}"
                                @onResizeStart="${this.handleDataTableColumnResizeStart}"
                                @onResize="${this.handleDataTableColumnResize}"
                                @onResizeEnd="${this.handleDataTableColumnResizeEnd}"

                                @pointerenter="${this.handleDataTableColumnPointerenter}"
                                @pointerleave="${this.handleDataTableColumnPointerleave}"
                                @onTap="${this.handleDataTableColumnTap}"
                                @onDoubleTap="${this.handleDataTableColumnDoubleTap}"
                                
                                @onDragStart="${this.handleDataTableColumnDragStart}"
                                @onDrag="${this.handleDataTableColumnDrag}"
                                @onDragEnd="${this.handleDataTableColumnDragEnd}"
                            >${this.renderDataTableItem({
                                label: column.label,
                                sortable: column.sortable,
                                sortableIcon: column.sortableIcon,
                            })}</th> 
                        `)}

                    </tr>
                </thead>
                <tbody>
                    ${this.virtualRows?.map(row=>html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @onCheckboxNativeInput="${this.handleDataTableRowCheckboxNativeInput}"
                            @click="${this.handleDataTableRowClick}"
                        >

                            ${this.checkboxSelection?html`
                                <td
                                    style="${styleMap({
                                        ...(this.stickyCheckboxSelection&&{
                                            "position": "sticky",
                                            "left": `${0 - this.virtual.translateX}px`,
                                            "z-index": "1",
                                        }),
                                        
                                    })}"
                                    class="${classMap({
                                        "md-data-table__column--sticky-left-end": this.stickyLeftEnd,
                                    })}"
                                >${this.renderDataTableItem({
                                    leadingCheckbox: true,
                                    selected: row.selected
                                })}</td>
                            `:nothing}

                            ${this.virtualColumns?.map(column=>html`
                                <td
                                    style="${styleMap({
                                        ...(column.sticky&&{
                                            "position": "sticky",
                                            [column.flow]: `${(column.flow==='left'?0 - this.virtual.translateX:this.virtual.translateX) + column[column.flow]}px`,
                                            "z-index": "1",
                                        }),
                                    })}"
                                    class="${classMap({
                                        "md-data-table__column--sticky-left-end": column.stickyLeftEnd,
                                        "md-data-table__column--sticky-right-start": column.stickyRightStart,
                                    })}"
                                >${this.renderDataTableItem({
                                    label: (column.format||(value=>value))(row[column.name])
                                })}</td>
                            `)}

                        </tr>    
                    `)}
                </tbody>
            </table>
        `;
    }

    renderViewport() {
        /* prettier-ignore */
        return html`
            <div 
                class="md-virtual md-data-table__viewport"
                @onVirtualScroll="${this.handleDataTableViewportVirtualScroll}"
            >
                <div class="md-virtual__scrollbar md-data-table__scrollbar"></div>
                <div class="md-virtual__container md-data-table__container">${this.renderDataTable()}</div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");

        this.store = new MDStore(this.rows);

        this.virtual = new MDVirtualController(this,{});

        this.columns.forEach((column) => {
            column.width = column.width || 52 * 4;
        });

        this.updateColumns();

        this.updateVirtualRows();

        this.updateVirtualColumns();

        this.on("keydown", this.handleDataTableKeydown);
    }

    /**
     * {{desc}}
     */
    updateVirtualRows() {
        const { total, docs } = this.store.getAll({
            sorters: this.sorters,
            q: this.q,
            _page: this._page,
            _limit: this._limit,
        });
        this.storeTotal = total;
        this.storeRows = docs;

        this.virtual.options.rowTotal = this._end - this._start;
        this.virtual.options.rowHeight = 52;
        this.virtual.options.rowBuffer = 0 + (this.stickyHeader ? 1 : 0);
    }

    /**
     * {{desc}}
     */
    updateVirtualColumns() {
        this.virtual.options.columnTotal = this.columns.length;
        this.virtual.options.columnWidth = this.columns.reduce((acc, prev) => acc + prev.width, 0) / this.columns.length;
        this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length + (this.stickyCheckboxSelection ? 1 : 0);
    }

    /**
     * {{desc}}
     */
    updateColumns() {
        const half = Math.floor(this.columns.length / 2);
        let stickyLeftEnd;
        let stickyRightStart;
        this.columns.forEach((column, index) => {
            if (column.sticky) {
                let flow;
                let from;
                let to;
                let value;

                if (index <= half) {
                    flow = "left";
                    from = 0;
                    to = index;
                    value = 0 + (this.stickyCheckboxSelection ? 72 : 0);

                    stickyLeftEnd = index;
                } else {
                    flow = "right";
                    from = index + 1;
                    to = this.columns.length;
                    value = 0;

                    if (stickyRightStart === undefined) {
                        stickyRightStart = index;
                    }
                }

                for (let i = from; i < to; i++) {
                    const column = this.columns[i];

                    if (column.sticky) {
                        value += column.width;
                    }
                }

                column.flow = flow;
                column[flow] = value;
            }

            column.stickyLeftEnd = false;
            column.stickyRightStart = false;
        });

        if (stickyLeftEnd !== undefined) {
            this.columns[stickyLeftEnd].stickyLeftEnd = true;
        }
        if (stickyRightStart !== undefined) {
            this.columns[stickyRightStart].stickyRightStart = true;
        }
        this.stickyLeftEnd = this.stickyCheckboxSelection && stickyLeftEnd === undefined;
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this.handleDataTableKeydown);
    }

    handleDataTableViewportVirtualScroll(event) {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (index >= this.virtual.columnStart && index <= this.virtual.columnEnd) || column.sticky;
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return index >= this.virtual.rowStart && index <= this.virtual.rowEnd;
        });
        this.requestUpdate();

        this.virtual.scrollbar.style.width = `${this.virtual.scrollbarWidth}px`;
        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(${this.virtual.translateX}px,${this.virtual.translateY}px,0)`;

        this.emit("onDataTableViewportVirtualScroll", event);
    }

    /**
     * {{desc}}
     */
    get isSelectedAll() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal > 0 && selectedTotal === this.storeTotal;
    }

    /**
     * {{desc}}
     */
    get isSelectedPartial() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal > 0 && selectedTotal < this.storeTotal;
    }

    /**
     * {{desc}}
     */
    selectAllToggle(checked) {
        this.storeRows.forEach((row) => {
            row.selected = checked;
        });
    }

    /**
     * {{desc}}
     */
    selectToggle(data) {
        data.selected = !data.selected;
    }

    /**
     * {{desc}}
     */
    select(data) {
        this.storeRows.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.storeRows.indexOf(data);
    }

    /**
     * {{desc}}
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.storeRows.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        this.storeRows.forEach((item, i) => {
            item.selected = i >= this.startIndex && i <= this.endIndex;
        });

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     * {{desc}}
     */
    selectAll() {
        this.storeRows.forEach((item) => {
            item.selected = true;
        });
    }

    handleDataTableColumnCheckboxNativeInput(event) {
        event.preventDefault();

        const checked = event.detail.currentTarget.checked;

        this.selectAllToggle(checked);

        this.requestUpdate();

        this.emit("onDataTableColumnCheckboxNativeInput", event);
    }

    handleDataTableRowCheckboxNativeInput(event) {
        event.preventDefault();

        const data = event.currentTarget.data;

        this.selectToggle(data);

        this.requestUpdate();

        this.emit("onDataTableRowCheckboxNativeInput", event);
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

        this.emit("handleDataTableKeydown", event);
    }

    handleDataTableColumnResizeStart(event) {
        if (!event.currentTarget.hasAttribute("resizable")) {
            return;
        }
        this.resizing = true;
        this.emit("onDataTableColumnResizeStart", event);
    }

    handleDataTableColumnResize(event) {
        if (!event.currentTarget.hasAttribute("resizable")) {
            return;
        }
        const data = event.currentTarget.data;
        const gesture = event.currentTarget.gesture;

        data.width = gesture.currentWidth;
        this.requestUpdate();

        this.emit("onDataTableColumnResize", event);
    }

    handleDataTableColumnResizeEnd(event) {
        if (!event.currentTarget.hasAttribute("resizable")) {
            return;
        }
        this.resizing = false;
        this.updateColumns();
        this.updateVirtualColumns();
        this.virtual.handleVirtualScroll();

        this.emit("onDataTableColumnResizeEnd", event);
    }

    handleDataTableColumnPointerenter(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !this.dragging && !this.resizing) {
            if (!data.order) {
                data.sortableIcon = "arrow_upward";
                this.requestUpdate();
            }
        }

        this.emit("onDataTableColumnPointerenter", event);
    }

    handleDataTableColumnPointerleave(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.sortableIcon = "";
                this.requestUpdate();
            }
        }

        this.emit("onDataTableColumnPointerleave", event);
    }

    handleDataTableColumnTap(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !this.dragging && !this.resizing) {
            if (!data.order) {
                data.order = "asc";
                data.sortableIcon = "arrow_upward";
            } else if (data.order === "asc") {
                data.order = "desc";
                data.sortableIcon = "arrow_downward";
            } else {
                data.order = "";
                data.sortableIcon = "";
            }

            const sorters = this.columns.filter((column) => column.order);
            this.sorters = sorters;

            this.updateVirtualRows();
            this.virtual.viewport.scrollTop = 0;
            this.virtual.viewport.scrollLeft = 0;
            this.virtual.handleVirtualScroll();
        }

        this.emit("onDataTableColumnTap", event);
    }

    handleCardTextFieldNativeSearch(event) {
        const q = event.currentTarget.value;

        this.q = q;

        this.updateVirtualRows();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.viewport.scrollLeft = 0;
        this.virtual.handleVirtualScroll();

        this.emit("onDataTableTextFieldNativeSearch", event);
    }

    handleCardPaginationChange(event) {
        const page = event.currentTarget.page;
        const limit = event.currentTarget.limit;
        const start = event.currentTarget.start;
        const end = event.currentTarget.end;

        this._page = page;
        this._limit = limit;
        this._start = start;
        this._end = end;

        this.updateVirtualRows();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.viewport.scrollLeft = 0;
        this.virtual.handleVirtualScroll();

        this.emit("onDataTablePaginationChange", event);
    }

    handleDataTableColumnDoubleTap(event) {
        const gesture = event.currentTarget.gesture;

        if (gesture.resize) {
            return this.handleDataTableColumnResizeDoubleTap(event);
        }

        this.emit("onDataTableColumnDoubleTap", event);
    }

    handleDataTableColumnResizeDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const n = Array.from(th.parentElement.children).indexOf(th) + 1;

        let width = 0;
        this.querySelectorAll(`td:nth-child(${n}) .md-data-table__item`).forEach((item) => {
            const style = window.getComputedStyle(item);

            const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
            const paddingRight = parseFloat(style.getPropertyValue("padding-right"));

            const label = item.querySelector(".md-data-table__label-primary");
            const currentWidth = paddingLeft + label.scrollWidth + paddingRight;

            if (width < currentWidth) {
                width = currentWidth;
            }
        });
        data.width = width;

        this.updateColumns();
        this.updateVirtualColumns();
        this.virtual.handleVirtualScroll();

        this.emit("onDataTableColumnResizeDoubleTap", event);
    }

    handleDataTableColumnDragStart(event) {
        if (!event.currentTarget.hasAttribute("orderable")) {
            return;
        }
        this.fromData = event.currentTarget.data;

        this.emit("onDataTableColumnDragStart", event);
    }

    handleDataTableColumnDrag(event) {
        if (!event.currentTarget.hasAttribute("orderable")) {
            return;
        }
        this.dragging = true;
        const data = event.detail.target.closest("th")?.data;

        if (data && this.toData !== data) {
            this.toData = data;

            this.fromIndex = this.columns.indexOf(this.fromData);
            this.toIndex = this.columns.indexOf(this.toData);

            const [column] = this.columns.splice(this.fromIndex, 1);
            this.columns.splice(this.toIndex, 0, column);

            this.updateColumns();
            this.updateVirtualColumns();
            this.virtual.handleVirtualScroll();
        }

        this.emit("onDataTableColumnDrag", event);
    }

    handleDataTableColumnDragEnd(event) {
        if (!event.currentTarget.hasAttribute("orderable")) {
            return;
        }
        this.dragging = false;
        this.emit("onDataTableColumnDragEnd", event);
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

import { html, nothing } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { MDGestureController } from "../gesture/gesture.js";
import { choose } from "lit/directives/choose.js";

class MDDataTableColumnComponent extends HTMLTableCellElement {
    connectedCallback() {
        this.gesture = new MDGestureController(this, {
            // containerSelector: undefined,
            // dragHandleSelector: undefined,
            drag: ["x"],
            // dragAfterLongPress: true,
            resize: ["e"],
            // resizeAfterLongPress: true,
            // selection: false,
            // selectionAfterLongPress: false,
            // updateStyle: true,
        });
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
customElements.define("md-th", MDDataTableColumnComponent, { extends: "th" });


/**
 * {{desc}}
 * @extends MDCardComponent
 * @tagname md-data-table
 * @fires MDDataTableComponent#onDataTableViewportVirtualScroll - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowClick - {{desc}}
 * @fires MDDataTableComponent#onDataTableKeydown - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnResizeStart - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnResize - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnResizeEnd - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnPointerenter - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnPointerleave - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnTap - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnDoubleTap - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnResizeDoubleTap - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnDragStart - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnDrag - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnDragEnd - {{desc}}
 */
class MDDataTableComponent extends MDCardComponent {
    
    /**
     * @property {Array} columns - {{desc}}
     * @property {Array} rows - {{desc}}
     * @property {Boolean} stickyHeader - {{desc}}
     * @property {Boolean} checkboxSelection - {{desc}}
     * @property {Boolean} stickyCheckbox - {{desc}}
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
        stickyCheckbox: { type: Boolean },
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
            { name: "search", component: "text-field", type: "search", icon: "search", placeholder: "Search" },
            { name: "filter", icon: "filter_list" },
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
            { name: "spacer", component: "spacer" },
            { name: "pagination", component: "pagination",total:this.storeTotal,page:this._page,limit:this._limit },
        ];
    }

    
    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();
    }

    renderPagination(item) {
        /* prettier-ignore */
        return html`
            <md-pagination
                class="md-card__pagination"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .total="${ifDefined(item.total)}"
                .limit="${ifDefined(item.limit)}"
                .page="${ifDefined(item.page)}"
                @onPaginationChange="${this.handleCardPaginationChange}"
                @onPaginationLimitChange="${this.handleCardPaginationLimitChange}"
                @onPaginationFirstClick="${this.handleCardPaginationFirstClick}"
                @onPaginationPrevClick="${this.handleCardPaginationPrevClick}"
                @onPaginationNextClick="${this.handleCardPaginationNextClick}"
                @onPaginationLastClick="${this.handleCardPaginationLastClick}"
            ></md-pagination>
        `;
    }

    renderAction(item, defaultAction = this.renderButton) {
        /* prettier-ignore */
        return choose(item.component, [
            ['text-field', () => this.renderTextField(item)],
            ['icon-button', () => this.renderIconButton(item)],
            ['icon', () => this.renderIcon(item)],
            ['button', () => this.renderButton(item)],
            ['fab', () => this.renderFab(item)],
            ['pagination', () => this.renderPagination(item)],
            ['spacer', () => html`<div class="md-pane__spacer"></div>`],
        ], () => defaultAction(item));
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
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
            ></md-data-table-item>
        `;
    }

    renderDataTableNative() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        ${this.checkboxSelection?html`
                            <th
                                style="${styleMap({
                                    ...(this.stickyHeader&&{
                                        "position":"sticky",
                                        "top":(0-this.virtual.translateY)+"px",
                                        "z-index":"2",
                                    }),
                                    ...(this.stickyCheckbox&&{
                                        "position":"sticky",
                                        "left": (0-this.virtual.translateX)+"px",
                                        "z-index":"3",
                                    }),
                                })}"
                                class="${classMap({
                                    "md-data-table__column--sticky-left-end": this.stickyLeftEnd,
                                })}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCheckboxNativeInput}"
                            >
                                ${this.renderDataTableItem({
                                    leadingCheckbox:true,
                                    indeterminate:this.indeterminate,
                                    selected:this.selected,
                                })}
                            </th>
                        `:nothing}
                        ${this.virtualColumns?.map(column=>html`
                            <th
                                is="md-th"
                                .data="${column}"
                                style="${styleMap({
                                    "min-width":column.width+"px",
                                    "max-width":column.width+"px",
                                    ...(this.stickyHeader&&{
                                        "position":"sticky",
                                        "top":(0-this.virtual.translateY)+"px",
                                        "z-index":"2",
                                    }),
                                    ...(column.sticky&&{
                                        "position":"sticky",
                                        [column.flow]: ((column.flow==='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+"px",
                                        "z-index":"3",
                                    }),
                                })}"
                                class="${classMap({
                                    "md-data-table__column--sticky-left-end": column.stickyLeftEnd,
                                    "md-data-table__column--sticky-right-start": column.stickyRightStart,
                                })}"
                                @onResizeStart="${this.handleDataTableColumnResizeStart}"
                                @onResize="${this.handleDataTableColumnResize}"
                                @onResizeEnd="${this.handleDataTableColumnResizeEnd}"
                                @onDragStart="${this.handleDataTableColumnDragStart}"
                                @onDrag="${this.handleDataTableColumnDrag}"
                                @onDragEnd="${this.handleDataTableColumnDragEnd}"
                                @onTap="${this.handleDataTableColumnTap}"
                                @onDoubleTap="${this.handleDataTableColumnDoubleTap}"
                                @pointerenter="${this.handleDataTableColumnPointerenter}"
                                @pointerleave="${this.handleDataTableColumnPointerleave}"
                            >
                                ${this.renderDataTableItem({
                                    label:column.label,
                                    sortable:column.sortable,
                                    sortableIcon:column.sortableIcon,
                                })}
                            </th>
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
                                        ...(this.stickyCheckbox&&{
                                            "position":"sticky",
                                            "left":(0-this.virtual.translateX)+"px",
                                            "z-index":"1",
                                        }),
                                    })}"
                                    class="${classMap({
                                        "md-data-table__column--sticky-left-end": this.stickyLeftEnd,
                                    })}"
                                >
                                    ${this.renderDataTableItem({
                                        leadingCheckbox:true,
                                        selected:row.selected,
                                    })}
                                </td>
                            `:nothing}
                            ${this.virtualColumns?.map(column=>html`
                                <td
                                    style="${styleMap({
                                        ...(column.sticky&&{
                                            "position":"sticky",
                                            [column.flow]: ((column.flow==='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+"px",
                                            "z-index":"1",
                                        }),
                                    })}"
                                    class="${classMap({
                                        "md-data-table__column--sticky-left-end": column.stickyLeftEnd,
                                        "md-data-table__column--sticky-right-start": column.stickyRightStart,
                                    })}"
                                >
                                    ${this.renderDataTableItem({
                                        label:row[column.name]
                                    })}
                                </td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }

    renderViewport() {
        /* prettier-ignore */
        return html`
            <div 
                class="md-data-table__viewport"
                @onVirtualScroll="${this.handleDataTableViewportVirtualScroll}"
            >
                <div class="md-data-table__scrollbar"></div>
                <div class="md-data-table__container">${this.renderDataTableNative()}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");

        this.columns.forEach((column) => {
            column.width = column.width || 52 * 4;
        });

        this.updateColumns();

        this.store = new MDStore(this.rows);

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-data-table__viewport",
            scrollbarSelector: ".md-data-table__scrollbar",
            containerSelector: ".md-data-table__container",
        });

        this.updateRows()
        // const { total, docs } = this.store.getAll();
        // this.storeTotal = total;
        // this.storeRows = docs;

        // this.virtual.options.rowTotal = this.storeTotal;
        // this.virtual.options.rowHeight = 52;
        // this.virtual.options.rowBuffer = 0 + (this.stickyHeader ? 1 : 0);

        // this.virtual.options.columnTotal = this.columns.length;
        // this.virtual.options.columnWidth = this.columns.reduce((acc, curr) => acc + curr.width, 0) / this.columns.length;
        // this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length;

        this.on("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("keydown", this.handleDataTableKeydown);
    }

    
    /**
     * {{desc}}
     */
    updateColumns() {
        let half = Math.floor(this.columns.length / 2);
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
                    value = 0;

                    if (this.stickyCheckbox) {
                        value = 72;
                    }

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
                    let column = this.columns[i];

                    if (column.sticky) {
                        value += column.width;
                    }
                }

                column[flow] = value;
                column.flow = flow;
                column.stickyLeftEnd = false;
                column.stickyRightStart = false;
            }
        });

        if (stickyLeftEnd !== undefined) {
            this.columns[stickyLeftEnd].stickyLeftEnd = true;
        }

        if (stickyRightStart !== undefined) {
            this.columns[stickyRightStart].stickyRightStart = true;
        }
        this.stickyLeftEnd = this.stickyCheckbox && stickyLeftEnd === undefined;
    }

    handleDataTableViewportVirtualScroll(event) {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (index >= this.virtual.columnStart && index < this.virtual.columnEnd) || column.sticky;
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return index >= this.virtual.rowStart && index < this.virtual.rowEnd;
        });
        this.virtual.scrollbar.style.width = `${this.virtual.scrollbarWidth}px`;
        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(${this.virtual.translateX}px,${this.virtual.translateY}px,0)`;
        this.requestUpdate();

        this.emit("onDataTableViewportVirtualScroll", event);
    }

    // selection

    
    /**
     * {{desc}}
     */
    get indeterminate() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal > 0 && selectedTotal < this.storeTotal;
    }

    
    /**
     * {{desc}}
     */
    get selected() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal > 0 && selectedTotal === this.storeTotal;
    }

    handleDataTableColumnCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.storeRows.forEach((row) => {
            row.selected = checked;
        });
        this.requestUpdate();

        this.emit("onDataTableColumnCheckboxNativeInput", event);
    }

    handleDataTableRowCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();

        this.emit("onDataTableRowCheckboxNativeInput", event);
    }

    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.endIndex = this.endIndex || 0;
            this.startIndex = this.storeRows.indexOf(data);
            this.swapIndex = this.startIndex > this.endIndex;

            if (this.swapIndex) {
                [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
            }
            this.storeRows.forEach((row, index) => {
                row.selected = index >= this.startIndex && index <= this.endIndex;
            });

            if (this.swapIndex) {
                [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.storeRows.forEach((row) => {
                row.selected = row === data;
            });
            this.endIndex = this.storeRows.indexOf(data);
        }
        this.requestUpdate();

        this.emit("onDataTableRowClick", event);
    }

    handleDataTableKeydown(event) {
        const isRowFocused = document.activeElement === event.target.closest("tr");

        if (this.allSelection && isRowFocused && event.ctrlKey && event.key === "a") {
            this.storeRows.forEach((row) => {
                row.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    // resize

    handleDataTableColumnResizeStart(event) {
        this.emit("onDataTableColumnResizeStart", event);
    }

    handleDataTableColumnResize(event) {
        const data = event.currentTarget.data;
        const gesture = event.currentTarget.gesture;
        data.width = gesture.currentWidth;
        this.requestUpdate();

        this.emit("onDataTableColumnResize", event);
    }

    handleDataTableColumnResizeEnd(event) {
        this.updateColumns();
        this.requestUpdate();

        this.emit("onDataTableColumnResizeEnd", event);
    }

    handleDataTableColumnPointerenter(event) {
        const data = event.currentTarget.data;
        const gesture = event.currentTarget.gesture;

        if (data.sortable&&!this.dragged) {
            if (!data.order) {
                data.sortableIcon = "arrow_upward";
                this.requestUpdate();
            }
        }

        this.emit("onDataTableColumnPointerenter", event);
    }

    handleDataTableColumnPointerleave(event) {
        const data = event.currentTarget.data;
        const gesture = event.currentTarget.gesture;

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
        const gesture = event.currentTarget.gesture;

        // console.log(gesture)

        if (gesture.resize) {
            // this.handleDataTableColumnResizeTap(event);
            return;
        }

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
                data.sortableIcon = "arrow_upward";
            } else if (data.order == "asc") {
                data.order = "desc";
                data.sortableIcon = "arrow_downward";
            } else {
                data.order = "";
                data.sortableIcon = "";
            }
            const sorters = this.columns.filter((column) => column.order);

            this.sorters=sorters

        
            this.updateRows();
            this.virtual.viewport.scrollTop = 0;
            this.virtual.handleVirtualScroll();

        }

        this.emit("onDataTableColumnTap", event);
    }

    
    /**
     * {{desc}}
     */
    updateRows() {
        const { total, docs } = this.store.getAll({
            sorters: this.sorters,
            q: this.q,
            _page: this._page,
            _limit: this._limit,
        });
        this.storeTotal = total;
        this.storeRows = docs;

        // this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowTotal = (this._end-this._start)||this.storeTotal;
        // console.log(this.virtual.options.rowTotal)

        this.virtual.options.rowHeight = 52;
        this.virtual.options.rowBuffer = 0 + (this.stickyHeader ? 1 : 0);

        this.virtual.options.columnTotal = this.columns.length;
        this.virtual.options.columnWidth = this.columns.reduce((acc, curr) => acc + curr.width, 0) / this.columns.length;
        this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length;

    }

    handleDataTableColumnDoubleTap(event) {
        const gesture = event.currentTarget.gesture;

        if (gesture.resize) {
            this.handleDataTableColumnResizeDoubleTap(event);
        }

        this.emit("onDataTableColumnDoubleTap", event);
    }

    // handleDataTableColumnResizeTap(event) {
    //     this.emit("onDataTableColumnResizeTap", event);
    // }

    async handleDataTableColumnResizeDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = Array.from(th.parentElement.children).indexOf(th) + 1;
        let width = 0;
        th.style.setProperty("min-width", "0px");
        th.style.setProperty("max-width", "0px");
        this.querySelectorAll("td:nth-child(" + index + ") .md-data-table__item").forEach((item) => {
            const style = window.getComputedStyle(item);
            const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
            const paddingRight = parseFloat(style.getPropertyValue("padding-right"));
            const label = item.querySelector(".md-data-table__label-primary");
            const currentWidth = paddingLeft + label.scrollWidth + paddingRight;
            if (width < currentWidth) {
                width = currentWidth;
            }
        });
        th.style.removeProperty("min-width");
        th.style.removeProperty("max-width");
        data.width = width;
        this.updateColumns();
        this.virtual.handleVirtualScroll();

        this.emit("onDataTableColumnResizeDoubleTap", event);
    }

    handleDataTableColumnDragStart(event) {
        this.dragged=true
        this.emit("onDataTableColumnDragStart", event);
    }

    handleDataTableColumnDrag(event) {
        this.emit("onDataTableColumnDrag", event);
    }

    handleDataTableColumnDragEnd(event) {
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

        this.dragged=false
        this.emit("onDataTableColumnDragEnd", event);
    }

    handleCardTextFieldNativeSearch(event) {
        super.handleCardTextFieldNativeSearch(event);
        const name = event.currentTarget.name;
        if (name === "search") {
            this.handleDataTableTextFieldNativeSearch(event);
        }
    }

    handleCardPaginationChange(event) {
        super.handleCardPaginationChange(event);
        const name = event.currentTarget.name;
        if (name === "pagination") {
            this.handleDataTablePaginationChange(event);
        }
    }

    handleDataTableTextFieldNativeSearch(event) {
        const q = event.currentTarget.value;

        this.q=q

        this.updateRows()
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }

    handleDataTablePaginationChange(event) {
        const _page = event.currentTarget.page;
        const _limit = event.currentTarget.limit;
        const _start = event.currentTarget.start;
        const _end = event.currentTarget.end;

        this._page=_page
        this._limit=_limit
        this._start=_start
        this._end=_end

        this.updateRows()
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

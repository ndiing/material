import { html, nothing } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDStore } from "../store/store.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * {{desc}}
 * @extends MDCardComponent
 * @tagname md-data-table
 * @fires MDDataTableComponent#onDataTableViewportVirtualScroll - {{desc}}
 * @fires MDDataTableComponent#onDataTableColumnCellCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowCheckboxNativeInput - {{desc}}
 * @fires MDDataTableComponent#onDataTableRowClick - {{desc}}
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

    get body() {
        /* prettier-ignore */
        return [html`
            <div 
                class="md-data-table__viewport"
                @onVirtualScroll="${this.handleDataTableViewportVirtualScroll}"
            >
                <div class="md-data-table__scrollbar"></div>
                <div class="md-data-table__container">
                    ${this.renderTable()}
                </div>
            </div>
        `];
    }

    /**
     * {{desc}}
     */

    set body(value) {}

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
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
            ></md-data-table-item>
        `;
    }

    renderTable() {
        /* prettier-ignore */
        return html`
            <table 
                class="md-data-table__native"
                
            >
                <caption></caption>
                <thead>
                    <tr>
                        ${this.checkboxSelection?html`
                            <th
                                class="${classMap({
                                    'md-data-table__column--sticky-end':this.stickyEnd,
                                })}"
                                style="${styleMap({
                                    ...(this.stickyHeader&&({
                                        position:'sticky',
                                        top: `${0-this.virtual.translateY+0}px`,
                                        'z-index':'2',
                                    })),
                                    ...(this.stickyCheckbox&&{
                                        position:'sticky',
                                        left:`${0-this.virtual.translateX+0}px`,
                                        'z-index':'3',
                                    })
                                })}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}"
                            >${this.renderDataTableItem({
                                leadingCheckbox:true,
                                indeterminate:this.partialSelectedRows,
                                selected:this.selectedAllRows,
                            })}</th>
                        `:nothing}
                        ${this.virtualColumns?.map((column) => html`
                            <th
                                class="${classMap({
                                    'md-data-table__column':true,
                                    'md-data-table__column--sticky-end':column.stickyEnd,
                                    'md-data-table__column--sticky-start':column.stickyStart,
                                })}"
                                .data="${column}"
                                style="${styleMap({
                                    'min-width': `${column.width}px`,
                                    ...(this.stickyHeader&&({
                                        position:'sticky',
                                        top: `${0-this.virtual.translateY+0}px`,
                                        'z-index':'2',
                                    })),
                                    ...(column.sticky&&{
                                        position:'sticky',
                                        [column.flow]:`${(column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow]}px`,
                                        'z-index':'3',
                                    })
                                })}"
                                @pointerenter="${this.handleDataTableColumnCellPointerenter}"
                                @pointerleave="${this.handleDataTableColumnCellPointerleave}"
                                @click="${this.handleDataTableColumnCellClick}"
                            >${this.renderDataTableItem({
                                label: column.label,
                                sortable:column.sortable,
                                sortableIcon:column.sortableIcon,
                            })}</th>    
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.virtualRows?.map(row => html`
                        <tr
                            class="md-data-table__row"
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @onCheckboxNativeInput="${this.handleDataTableRowCheckboxNativeInput}"
                            @click="${this.handleDataTableRowClick}"
                        >
                            ${this.checkboxSelection?html`
                                <td
                                    class="${classMap({
                                        'md-data-table__column--sticky-end':this.stickyEnd,
                                    })}"
                                    style="${styleMap({
                                        ...(this.stickyCheckbox&&{
                                            position:'sticky',
                                            left:`${0-this.virtual.translateX+0}px`,
                                            'z-index':'1',
                                        })
                                    })}"
                                >${this.renderDataTableItem({
                                    leadingCheckbox:true,
                                    selected:row.selected
                                })}</td>
                            `:nothing}
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    class="${classMap({
                                        'md-data-table__column--sticky-end':column.stickyEnd,
                                        'md-data-table__column--sticky-start':column.stickyStart,
                                    })}"
                                    style="${styleMap({
                                        ...(column.sticky&&{
                                            position:'sticky',
                                            [column.flow]:`${(column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow]}px`,
                                            'z-index':'1',
                                        })
                                    })}"
                                >${this.renderDataTableItem({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");

        this.store = new MDStore(this.rows, {});
        const { total, docs } = this.store.getAll();

        this.storeRows = docs;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-data-table__viewport",
            scrollbarSelector: ".md-data-table__scrollbar",
            containerSelector: ".md-data-table__container",
            // columnSelector: ".md-data-table__column",
            // rowSelector: ".md-data-table__row",

            rowTotal: total,
            rowHeight: 56,
            rowBuffer: 0, //+ (this.stickyHeader ? 1 : 0),

            columnTotal: this.columns.length,
            columnWidth: this.columns.reduce((acc,prev) => acc+prev.width,0)/this.columns.length,
            columnBuffer: this.columns.filter((column) => column.sticky).length, //+ (this.stickyCheckbox ? 1 : 0),
        });

        this.on("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("keydown", this.handleDataTableKeydown);
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("columns")) {
            await this.updateComplete;

            this.columns.forEach((column) => {
                column.width = column.width || 200;
            });
            const half = Math.floor(this.columns.length / 2);
            let maxStickyLeftIndex;
            let minStickyRightIndex;
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
                        value = this.stickyCheckbox ? 56 : 0;

                        if (!maxStickyLeftIndex) {
                            maxStickyLeftIndex = index;
                        }

                        if (maxStickyLeftIndex <= index) {
                            maxStickyLeftIndex = index;
                        }
                    } else {
                        flow = "right";
                        from = index + 1;
                        to = this.columns.length;
                        value = 0;

                        if (!minStickyRightIndex) {
                            minStickyRightIndex = index;
                        }

                        if (minStickyRightIndex > index) {
                            minStickyRightIndex = index;
                        }
                    }

                    for (let i = from; i < to; i++) {
                        if (this.columns[i].sticky) {
                            value += this.columns[i].width;
                        }
                    }
                    column.flow = flow;
                    column[flow] = value;
                    column.stickyEnd = false;
                    column.stickyStart = false;
                }
            });

            if (maxStickyLeftIndex) {
                this.columns[maxStickyLeftIndex].stickyEnd = true;
            }

            if (minStickyRightIndex) {
                this.columns[minStickyRightIndex].stickyStart = true;
            }
            this.stickyEnd = this.stickyCheckbox && maxStickyLeftIndex == undefined;
        }
    }

    handleDataTableViewportVirtualScroll(event) {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (
                (index >= this.virtual.columnStart && //
                    index < this.virtual.columnEnd) ||
                column.sticky
            );
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return (
                index >= this.virtual.rowStart && //
                index < this.virtual.rowEnd
            );
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

    get partialSelectedRows() {
        if (!this.store.docs.length) {
            return false;
        }
        const selectedTotal = this.store.docs.filter((doc) => doc.selected).length;
        return selectedTotal && selectedTotal < this.store.docs.length;
    }
    /**
     * {{desc}}
     */

    get selectedAllRows() {
        if (!this.store.docs.length) {
            return false;
        }
        const selectedTotal = this.store.docs.filter((doc) => doc.selected).length;
        return selectedTotal && selectedTotal == this.store.docs.length;
    }

    handleDataTableColumnCellCheckboxNativeInput(event) {
        const checkboxNative = event.detail.currentTarget;

        this.store.docs.forEach((doc) => {
            doc.selected = checkboxNative.checked;
        });
        this.requestUpdate();

        this.emit("onDataTableColumnCellCheckboxNativeInput", event);
    }

    handleDataTableRowCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        data.selected = !data.selected;
        this.requestUpdate();

        this.emit("onDataTableRowCheckboxNativeInput", event);
    }

    handleDataTableRowClick(event) {
        const leadingAction = event.target.closest(".md-data-table__checkbox," + ".md-data-table__radio-button," + ".md-data-table__switch");

        if (leadingAction) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection && event.ctrlKey) {
            this.multiSelect(data);
        } else if (this.singleSelection) {
            this.select(data);
        }
        this.requestUpdate();

        this.emit("onDataTableRowClick", event);
    }

    handleDataTableKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.store.docs.forEach((doc) => {
                doc.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    /**
     * {{desc}}
     */

    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.store.docs.indexOf(data);
        this.swapIndex = this.endIndex < this.startIndex;

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
        this.store.docs.forEach((doc, index) => {
            doc.selected = index >= this.startIndex && index <= this.endIndex;
        });

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }
    }

    /**
     * {{desc}}
     */

    multiSelect(data) {
        data.selected = !data.selected;
    }

    /**
     * {{desc}}
     */

    select(data) {
        this.store.docs.forEach((doc) => {
            doc.selected = doc == data;
        });
        this.endIndex = this.store.docs.indexOf(data);
    }

    handleDataTableColumnCellPointerenter(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
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
                data.sortableIcon = undefined;
                this.requestUpdate();
            }
        }

        this.emit("onDataTableColumnCellPointerleave", event);
    }
    handleDataTableColumnCellClick(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
                data.sortableIcon = "arrow_upward";
            } else if (data.order == "asc") {
                data.order = "desc";
                data.sortableIcon = "arrow_downward";
            } else {
                data.order = undefined;
                data.sortableIcon = undefined;
            }
            const sorters = this.columns.filter((column) => column.order);
            const { docs } = this.store.getAll({ sorters });
            this.storeRows = docs;
            this.virtual.handleVirtualScroll();
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellClick", event);
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

import { html, nothing } from "lit";
import { MDCardComponent, MDStore, MDVirtualController } from "../material.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { ref } from "lit/directives/ref.js";

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
        return [this.renderDataTableViewport()]
    }

    set childNodes_(value) {}

    get label() {
        return " ";
    }

    set label(value) {}

    get actions() {
        return [{ component: "spacer" }];
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
        this.store = new MDStore();
        this.virtual = new MDVirtualController(this);
    }

    renderDataTableItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-item
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
                .resizable="${ifDefined(item.resizable)}"
                @onDataTableItemSelected="${ifDefined(item.onDataTableItemSelected)}"
            ></md-data-table-item>
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
                top: `${0-this.virtual.translateY}px`,
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
                "z-index": "3",
            }),
        });
    }

    styleDataTableRowCell(column) {
        return styleMap({
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
                "z-index": "1",
            }),
        });
    }

    styleDataTableFooterCell(column) {
        return styleMap({
            ...(this.stickyFooter && {
                position: "sticky",
                bottom: `${0+this.virtual.translateY}px`,
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
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

    renderDataTableNative() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        ${this.checkboxSelection&&this.columns?.length?html`
                            <th
                                style="${this.styleDataTableColumnCell(this.styleStickyCheckboxSelection())}"
                                class="${this.classDataTableColumnCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}"
                            >${this.renderDataTableItem({
                                leadingCheckbox:true,
                                selected:this.selected,
                                indeterminate:this.indeterminate,
                            })}</th>
                        `:nothing}
                        ${this.columns?.map(column => html`
                            <th
                                style="${this.styleDataTableColumnCell(column)}"
                                class="${this.classDataTableColumnCell(column)}"
                                ${ref(this.handleDataTableColumnCellRef)}
                            >${this.renderDataTableItem({
                                label: column.label,
                                resizable: true,
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
                            ${this.checkboxSelection&&this.columns?.length?html`
                                <td
                                    .data="${row}"
                                    style="${this.styleDataTableRowCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataTableRowCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                    @onCheckboxNativeInput="${this.handleDataTableRowCellCheckboxNativeInput}"
                                >${this.renderDataTableItem({
                                    leadingCheckbox:true,
                                    selected:row.selected,
                                })}</td>
                            `:nothing}
                            ${this.columns?.map(column => html`
                                <td
                                    style="${this.styleDataTableRowCell(column)}"
                                    class="${this.classDataTableRowCell(column)}"
                                >${this.renderDataTableItem({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
                <tfoot>
                    ${this.footer?.map(row => html`
                        <tr>
                            ${this.checkboxSelection&&this.columns?.length?html`
                                <td
                                    style="${this.styleDataTableFooterCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataTableFooterCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                >${this.renderDataTableItem({
                                })}</td>
                            `:nothing}
                            ${this.columns?.map(column => html`
                                <td
                                    style="${this.styleDataTableFooterCell(column)}"
                                    class="${this.classDataTableFooterCell(column)}"
                                >${this.renderDataTableItem({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tfoot>
            </table>
        `
    }

    renderDataTableViewport() {
        /* prettier-ignore */
        return html`
            <div 
                class="md-virtual md-data-table__viewport"
                @onVirtualScroll="${this.handleDataTableVirtualScroll}"
            >
                <div class="md-virtual__scrollbar md-data-table__scrollbar"></div>
                <div class="md-virtual__container md-data-table__container">${this.renderDataTableNative()}</div>
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
            const total = this.columns.length;
            const half = Math.floor(total / 2);
            let stickyRightStart = undefined;
            let stickyLeftEnd = undefined;

            this.columns.forEach((column, index) => {
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
            this.requestUpdate();
        }

        if (changedProperties.has("rows")) {
            this.store.docs = this.rows;
            const { total, docs } = this.store.getAll();
            this.storeRowsTotal = total;
            this.storeRows = docs;

            this.virtual.options.rowTotal = this.storeRowsTotal;
            this.virtual.options.rowHeight = 52;
            this.virtual.options.rowBuffer = 1;
            this.virtual.handleVirtualScroll();
        }
    }

    handleDataTableVirtualScroll(event) {
        if(!this.storeRows){return}
        this.virtualRows=this.storeRows.slice(this.virtual.rowStart,this.virtual.rowEnd)
        this.requestUpdate()
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

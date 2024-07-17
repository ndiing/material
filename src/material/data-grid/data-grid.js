import { html, nothing } from "lit";
import { MDCardComponent, MDStore, MDVirtualController } from "../material.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

class MDDataGridComponent extends MDCardComponent {
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
        return [this.renderDataGridViewport()]
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
        let total = this.rows?.filter((row) => row.selected)?.length;
        return total > 0 && total === this.rows.length;
    }

    get indeterminate() {
        let total = this.rows?.filter((row) => row.selected)?.length;
        return total > 0 && total < this.rows.length;
    }

    constructor() {
        super();
        this.store = new MDStore();
        this.virtual = new MDVirtualController(this);
    }

    renderDataGridItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-grid-item
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
                @onDataGridItemSelected="${ifDefined(item.onDataGridItemSelected)}"
            ></md-data-grid-item>
        `
    }

    styleStickyCheckboxSelection() {
        return {
            ...(this.stickyCheckboxSelection && { sticky: true, flow: "left", left: 0 }),
        };
    }

    styleDataGridColumnCell(column) {
        // console.log(column)
        return styleMap({
            "min-width": `${column.width}px`,
            ...(this.stickyHeader && {
                position: "sticky",
                top: "0px",
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
                "z-index": "3",
            }),
        });
    }

    styleDataGridRowCell(column) {
        // console.log(column)
        return styleMap({
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
                "z-index": "1",
            }),
        });
    }

    styleDataGridFooterCell(column) {
        // console.log(column)
        return styleMap({
            ...(this.stickyFooter && {
                position: "sticky",
                bottom: "0px",
                "z-index": "2",
            }),
            ...(column.sticky && {
                position: "sticky",
                [column.flow]: `${column[column.flow]}px`,
                "z-index": "3",
            }),
        });
    }

    classDataGridColumnCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    classDataGridRowCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    classDataGridFooterCell(column) {
        return classMap({
            "md-data-table__sticky--left-end": column.stickyLeftEnd,
            "md-data-table__sticky--right-start": column.stickyRightStart,
        });
    }

    renderDataGridNative() {
        /* prettier-ignore */
        return html`
            <table class="md-data-grid__native">
                <thead>
                    <tr>
                        ${this.checkboxSelection&&this.columns?.length?html`
                            <th
                                style="${this.styleDataGridColumnCell(this.styleStickyCheckboxSelection())}"
                                class="${this.classDataGridColumnCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                @onCheckboxNativeInput="${this.handleDataGridColumnCellCheckboxNativeInput}"
                            >${this.renderDataGridItem({
                                leadingCheckbox:true,
                                selected:this.selected,
                                indeterminate:this.indeterminate,
                            })}</th>
                        `:nothing}
                        ${this.columns?.map(column => html`
                            <th
                                style="${this.styleDataGridColumnCell(column)}"
                                class="${this.classDataGridColumnCell(column)}"
                            >${this.renderDataGridItem({
                                label: column.label
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row => html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @click="${this.handleDataGridRowClick}"
                        >
                            ${this.checkboxSelection&&this.columns?.length?html`
                                <td
                                    .data="${row}"
                                    style="${this.styleDataGridRowCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataGridRowCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                    @onCheckboxNativeInput="${this.handleDataGridRowCellCheckboxNativeInput}"
                                >${this.renderDataGridItem({
                                    leadingCheckbox:true,
                                    selected:row.selected,
                                })}</td>
                            `:nothing}
                            ${this.columns?.map(column => html`
                                <td
                                    style="${this.styleDataGridRowCell(column)}"
                                    class="${this.classDataGridRowCell(column)}"
                                >${this.renderDataGridItem({
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
                                    style="${this.styleDataGridFooterCell(this.styleStickyCheckboxSelection())}"
                                    class="${this.classDataGridFooterCell({stickyLeftEnd:this.stickyLeftEnd})}"
                                >${this.renderDataGridItem({
                                })}</td>
                            `:nothing}
                            ${this.columns?.map(column => html`
                                <td
                                    style="${this.styleDataGridFooterCell(column)}"
                                    class="${this.classDataGridFooterCell(column)}"
                                >${this.renderDataGridItem({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tfoot>
            </table>
        `
    }

    renderDataGridViewport() {
        /* prettier-ignore */
        return html`
            <div class="md-virtual md-data-grid__viewport">
                <div class="md-virtual__scrollbar md-data-grid__scrollbar"></div>
                <div class="md-virtual__container md-data-grid__container">${this.renderDataGridNative()}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-grid");
        this.handleDataGridKeydown = this.handleDataGridKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataGridKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("keydown", this.handleDataGridKeydown);
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
            console.log(this.rows);
        }
    }

    select(data) {
        this.rows.forEach((item) => {
            item.selected = item === data;
        });
        this.endIndex = this.rows.indexOf(data);
    }

    selectToggle(data) {
        data.selected = !data.selected;

        if (this.selectionMode && this.rows.findIndex((item) => item.selected) === -1) {
            this.selectionMode = false;
        }
    }

    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.rows.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        this.rows.forEach((item, i) => {
            item.selected = i >= this.startIndex && i <= this.endIndex;
        });

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    selectAll(selected = true) {
        this.rows.forEach((item) => {
            item.selected = selected;
        });
    }

    handleDataGridColumnCellCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.selectAll(checked);
        this.requestUpdate();
        this.emit("onDataGridColumnCellCheckboxNativeInput", event);
    }

    handleDataGridRowCellCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.selectToggle(data);
        this.requestUpdate();
        this.emit("onDataGridRowCellCheckboxNativeInput", event);
    }

    handleDataGridRowClick(event) {
        if (event.target.closest(".md-data-grid__checkbox," + ".md-data-grid__radio-button," + ".md-data-grid__switch")) {
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
        this.emit("onDataGridRowClick", event);
    }

    handleDataGridKeydown(event) {
        const activeElement = document.activeElement === event.target.closest("tr");

        if (this.allSelection && activeElement && event.ctrlKey && event.key === "a") {
            this.selectAll();
            this.requestUpdate();
        }
        this.emit("onDataGridKeydown", event);
    }
}
customElements.define("md-data-grid", MDDataGridComponent);
export { MDDataGridComponent };

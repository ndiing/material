import { html, nothing } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";

class MDDataTableComponent extends MDCardComponent {
    static properties = {
        ...MDCardComponent.properties,
        columns: { type: Array },
        rows: { type: Array },
        stickyHeader: { type: Boolean },
        checkboxSelection: { type: Boolean },
        stickyCheckbox: { type: Boolean },
    };

    get label() {
        return "label";
    }
    set label(value) {}

    get trailingActions() {
        return [
            { name: "search", component: "text-field", type: "search", icon: "search", placeholder: "Search" },
            { name: "filter", icon: "filter_list" },
            { name: "more", icon: "more_vert" },
        ];
    }
    set trailingActions(value) {}

    get body() {
        return [this.renderViewport()];
    }
    set body(value) {}

    get actions() {
        return [
            { name: "spacer", component: "spacer" },
            { name: "pagination", component: "pagination" },
        ];
    }
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
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
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
                                .data="${column}"
                                style="${styleMap({
                                    "min-width":column.width+"px",
                                    ...(this.stickyHeader&&{
                                        "position":"sticky",
                                        "top":(0-this.virtual.translateY)+"px",
                                        "z-index":"2",
                                    }),
                                    ...(column.sticky&&{
                                        "position":"sticky",
                                        [column.flow]: ((column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+"px",
                                        "z-index":"3",
                                    }),
                                })}"
                            >
                                ${this.renderDataTableItem({
                                    label:column.label
                                })}
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.virtualRows?.map(row=>html`
                        <tr
                            .data="${row}"
                            ?selected="${row.selected}"
                            @onCheckboxNativeInput="${this.handleDataTableRowCheckboxNativeInput}"
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
                                            [column.flow]: ((column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+"px",
                                            "z-index":"1",
                                        }),
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

        this.columns.forEach((column, index) => {
            column.width = column.width || 52 * 4;
        });

        let half = Math.floor(this.columns.length / 2);
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
                } else {
                    flow = "right";
                    from = index + 1;
                    to = this.columns.length;
                    value = 0;
                }
                for (let i = from; i < to; i++) {
                    let column = this.columns[i];
                    if (column.sticky) {
                        value += column.width;
                    }
                }
                column[flow] = value;
                column.flow = flow;
            }
        });

        this.store = new MDStore(this.rows);
        const { total, docs } = this.store.getAll();
        this.storeTotal = total;
        this.storeRows = docs;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-data-table__viewport",
            scrollbarSelector: ".md-data-table__scrollbar",
            containerSelector: ".md-data-table__container",
        });

        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = 52;
        this.virtual.options.rowBuffer = 0 + (this.stickyHeader ? 1 : 0);

        this.virtual.options.columnTotal = this.columns.length;
        this.virtual.options.columnWidth = this.columns.reduce((acc, curr) => acc + curr.width, 0) / this.columns.length;
        this.virtual.options.columnBuffer = this.columns.filter((column) => column.sticky).length;
    }

    handleDataTableViewportVirtualScroll(event) {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (index >= this.virtual.columnStart && index < this.virtual.columnEnd) || column.sticky;
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return index >= this.virtual.rowStart && index < this.virtual.rowEnd;
        });
        this.requestUpdate();

        this.virtual.scrollbar.style.width = `${this.virtual.scrollbarWidth}px`;
        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(${this.virtual.translateX}px,${this.virtual.translateY}px,0)`;

        this.emit('onDataTableViewportVirtualScroll',event)
    }

    get indeterminate(){
        const selectedTotal=this.storeRows.filter(row=>row.selected).length
        return selectedTotal>0&&selectedTotal<this.storeTotal
    }
    get selected(){
        const selectedTotal=this.storeRows.filter(row=>row.selected).length
        return selectedTotal>0&&selectedTotal==this.storeTotal
    }

    handleDataTableColumnCheckboxNativeInput(event){
        const checked=event.detail.currentTarget.checked

        this.storeRows.forEach(row=>{
            row.selected=checked
        })
        this.requestUpdate()

        this.emit('onDataTableColumnCheckboxNativeInput',event)
    }

    handleDataTableRowCheckboxNativeInput(event){
        const data = event.currentTarget.data

        data.selected=!data.selected
        this.requestUpdate()

        this.emit('onDataTableRowCheckboxNativeInput',event)
    }

}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

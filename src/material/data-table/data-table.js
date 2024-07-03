import { html, nothing } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { choose } from "lit/directives/choose.js";

class MDDataTableComponent extends MDCardComponent {
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

    get body() {
        return [this.renderViewport()];
    }
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

    renderDataTable() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        ${this.checkboxSelection?html`
                            <th
                                style="${styleMap({
                                    ...(this.stickyHeader&&{
                                        position:'sticky',
                                        top:(0-this.virtual.translateY)+'px',
                                        'z-index':'2',
                                    }),
                                    ...(this.stickyCheckbox&&{
                                        position:'sticky',
                                        left:(0-this.virtual.translateX)+'px',
                                        'z-index':'3',
                                    }),
                                })}"
                                @onCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}"
                            >
                                ${this.renderDataTableItem({
                                    leadingCheckbox:true,
                                    indeterminate:this.selectedPartial,
                                    selected:this.selectedAll,
                                })}
                            </th>
                        `:nothing}
                        ${this.virtualColumns?.map(column=>html`
                            <th
                                .data="${column}"
                                style="${styleMap({
                                    'min-width': (column.width||(52*4))+'px',
                                    ...(this.stickyHeader&&{
                                        position:'sticky',
                                        top:(0-this.virtual.translateY)+'px',
                                        'z-index':'2',
                                    }),
                                    ...(column.sticky&&{
                                        position:'sticky',
                                        [column.flow]:((column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+'px',
                                        'z-index':'3',
                                    }),
                                   
                                })}"
                                @pointerenter="${this.handleDataTableColumnCellPointerenter}"
                                @pointerleave="${this.handleDataTableColumnCellPointerleave}"
                                @click="${this.handleDataTableColumnCellClick}"
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
                                            position:'sticky',
                                            left:(0-this.virtual.translateX)+'px',
                                            'z-index':'1',
                                        }),
                                    })}"
                                >
                                    ${this.renderDataTableItem({
                                        leadingCheckbox:true,
                                        selected:row.selected
                                    })}
                                </td>
                            `:nothing}
                            ${this.virtualColumns?.map(column=>html`
                                <td
                                    style="${styleMap({
                                        ...(column.sticky&&{
                                            position:'sticky',
                                            [column.flow]:((column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow])+'px',
                                            'z-index':'1',
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
                <div class="md-data-table__container">${this.renderDataTable()}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");

        const half = Math.floor(this.columns.length / 2);
        this.columns.forEach((column, index) => {
            if (column.sticky) {
                let flow = "left";
                let from = 0;
                let to = index;
                let value = 0+(this.stickyCheckbox?56:0);
                if (index > half) {
                    flow = "right";
                    from = index + 1;
                    to = this.columns.length;
                    value=0
                }
                for (let i = from; i < to; i++) {
                    let column = this.columns[i];
                    if (column.sticky) {
                        value += column.width || 52 * 4;
                    }
                }
                column.flow = flow;
                column[flow] = value;
            }
        });

        this.store = new MDStore(this.rows);
        const { total, docs } = this.store.getAll();
        this.storeRows = docs;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-data-table__viewport",
            scrollbarSelector: ".md-data-table__scrollbar",
            containerSelector: ".md-data-table__container",

            rowTotal: total,
            rowHeight: 52,
            rowBuffer: 1,

            columnTotal: this.columns.length,
            columnWidth: this.columns.reduce((acc, prev) => acc + (prev.width || 52 * 4), 0) / this.columns.length,
            columnBuffer: this.columns.filter((column) => column.sticky).length,
        });

        this.on('keydown',this.handleDataTableKeydown)
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.off('keydown',this.handleDataTableKeydown)
    }

    handleDataTableViewportVirtualScroll(event) {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (index >= this.virtual.columnStart && index < this.virtual.columnEnd) || column.sticky;
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return index >= this.virtual.rowStart && index < this.virtual.rowEnd;
        });
        this.requestUpdate();

        this.virtual.scrollbar.style.width = this.virtual.scrollbarWidth + "px";
        this.virtual.scrollbar.style.height = this.virtual.scrollbarHeight + "px";
        this.virtual.container.style.transform = `translate3d(${this.virtual.translateX}px,${this.virtual.translateY}px,0)`;

        this.emit("onDataTableViewportVirtualScroll", event);
    }

    get selectedPartial() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal && selectedTotal < this.storeRows.length;
    }
    get selectedAll() {
        const selectedTotal = this.storeRows.filter((row) => row.selected).length;
        return selectedTotal && selectedTotal == this.storeRows.length;
    }

    handleDataTableColumnCellCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;

        this.storeRows.forEach((row) => {
            row.selected = checked;
        });
        this.requestUpdate();

        this.emit("onDataTableColumnCellCheckboxNativeInput", event);
    }
    handleDataTableRowCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data)
        this.requestUpdate();

        this.emit("onDataTableRowCheckboxNativeInput", event);
    }
    handleDataTableRowClick(event) {

        if(event.target.closest('.md-data-table__checkbox')){
            return
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection&&event.shiftKey) {
            this.selectRange(data);
        } else if (this.multiSelection&&event.ctrlKey) {
            this.multiSelect(data);
        } else if(this.singleSelection) {
            this.select(data);
        }
        this.requestUpdate();

        this.emit("onDataTableRowClick", event);
    }

    handleDataTableKeydown(event){
        if(this.allSelection&&event.ctrlKey&&event.key=='a'){
            this.selectAll();
            this.requestUpdate()
        }
        this.emit('onDataTableKeydown',event)
    }

    handleDataTableColumnCellPointerenter(event){
        const data=event.currentTarget.data

        if(data.sortable){
            if(!data.order){
                data.sortableIcon='arrow_upward'
                this.requestUpdate()
            }
        }

        this.emit('onDataTableColumnCellPointerenter',event)
    }
    handleDataTableColumnCellPointerleave(event){
        const data=event.currentTarget.data

        if(data.sortable){
            if(!data.order){
                data.sortableIcon=''
                this.requestUpdate()
            }
        }

        this.emit('onDataTableColumnCellPointerleave',event)
    }
    handleDataTableColumnCellClick(event){
        const data=event.currentTarget.data

        if(data.sortable){
            if(!data.order){
                data.order='asc'
                data.sortableIcon='arrow_upward'
            }   
            else if(data.order=='asc'){
                data.order='desc'
                data.sortableIcon='arrow_downward'
            }
            else {
                data.order=''
                data.sortableIcon=''
            }
            const sorters=(this.columns.filter(column=>column.order))
            this.storeRows=this.store.getAll({sorters}).docs
            this.virtual.handleVirtualScroll()
            this.requestUpdate()
        }

        this.emit('onDataTableColumnCellClick',event)
    }

    selectAll() {
        this.storeRows.forEach(row => {
            row.selected = true;
        });
    }

    select(data) {
        this.storeRows.forEach((row) => {
            row.selected = row == data;
        });
        this.endIndex = this.storeRows.indexOf(data);
    }

    multiSelect(data) {
        data.selected = !data.selected;
    }

    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.storeRows.indexOf(data);
        this.swapIndex = this.endIndex < this.startIndex;
        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        this.storeRows.forEach((row, index) => {
            row.selected = index >= this.startIndex && index <= this.endIndex;
        });

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

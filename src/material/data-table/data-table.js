import { html } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

class MDDataTableComponent extends MDCardComponent {
    static properties = {
        ...MDCardComponent.properties,
        columns: { type: Array },
        rows: { type: Array },
        stickyHeader: { type: Boolean },
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
            ></md-data-table-item>
        `;
    }

    renderDataTable() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        ${this.virtualColumns?.map(column=>html`
                            <th
                                .data="${column}"
                                style="${styleMap({
                                    'min-width': (column.width||(56*4))+'px',
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
                        >
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
                let value = 0;
                if (index > half) {
                    flow = "right";
                    from = index+1;
                    to = this.columns.length;
                }
                for (let i = from; i < to; i++) {
                    let column=this.columns[i]
                    if(column.sticky){
                        value+=(column.width||(56*4))
                    }
                }
                column.flow=flow
                column[flow]=value
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
            rowHeight: 56,
            rowBuffer: 1,

            columnTotal: this.columns.length,
            columnWidth: this.columns.reduce((acc,prev)=>acc+(prev.width||(56*4)),0)/this.columns.length,
            columnBuffer: this.columns.filter((column) => column.sticky).length,
        });

    }

    disconnectedCallback() {
        super.disconnectedCallback();
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
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

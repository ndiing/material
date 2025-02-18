import { html, nothing } from "lit";
import { MdComponent, Mixins } from "../component/component";
import { styleMap } from "lit/directives/style-map.js";
import { Store } from "../store/store";
import { Virtual } from "../virtual/virtual";
import { Movable } from "../movable/movable";
class MdDataTableNativeComponent extends Mixins(HTMLTableElement) {
    static observedAttributes = ["now"];
    get virtualize() {
        return this.hasAttribute("virtualize");
    }

    constructor() {
        super();
    }

    handleDataTableNativeVirtualScroll(event) {
        /**
         * @event onDataTableNativeVirtualScroll
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeVirtualScroll", { event });
    }

    connectedCallback() {
        if (this.virtualize) {
            this.handleDataTableNativeVirtualScroll = this.handleDataTableNativeVirtualScroll.bind(this);
            this.addEventListener("onVirtualScroll", this.handleDataTableNativeVirtualScroll);
            this.virtual = new Virtual(this, {
                item: "tbody",
            });
            this.virtual.load({ /* total: this.dataStore.length, */ data: this.dataStore });
        }
    }

    disconnectedCallback() {
        if (this.virtualize) {
            this.removeEventListener("onVirtualScroll", this.handleDataTableNativeVirtualScroll);
            this.virtual.destroy();
        }
    }

    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.virtualize && name === "now") {
            this.virtual?.load({ /* total: this.dataStore.length, */ data: this.dataStore });
        }
    }
}

customElements.define("md-data-table-native", MdDataTableNativeComponent, { extends: "table" });

class MdDataTableNativeHeaderCellComponent extends Mixins(HTMLTableCellElement) {
    static observedAttributes = [];
    get resizable() {
        return this.hasAttribute("resizable");
    }

    constructor() {
        super();
    }

    handleDataTableNativeHeaderCellMovableMove(event) {
        this.data.width=this.movable.currentWidth
        this.style.setProperty('min-width',this.data.width+'px')
        /**
         * @event onDataTableNativeHeaderCellMovableMove
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellMovableMove", { event });
    }

    connectedCallback() {
        if (this.resizable) {
            this.handleDataTableNativeHeaderCellMovableMove = this.handleDataTableNativeHeaderCellMovableMove.bind(this);
            this.addEventListener("onMovableMove", this.handleDataTableNativeHeaderCellMovableMove);
            this.movable = new Movable(this, {
                axis: [],
                handles: ["e"],
                updateStyle: false,
            });
        }
    }

    disconnectedCallback() {
        if (this.resizable) {
            this.removeEventListener("onMovableMove", this.handleDataTableNativeHeaderCellMovableMove);
            this.movable.destroy();
        }
    }

    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("md-data-table-native-header-cell", MdDataTableNativeHeaderCellComponent, { extends: "th" });

/**
 * @extends MdComponent
 * @element md-data-table
 */
class MdDataTableComponent extends MdComponent {
    /**
     * @typedef {Object} MdDataTableComponentHeaders
     * @property {String} name
     * @property {String} label
     * @property {Boolean} rightAligned
     * @property {Boolean} sortable
     * @property {Boolean} resizable
     * @property {Number} width
     */
    /**
     * @typedef {Object} MdDataTableComponentBodies
     * @property {String} name
     * @property {Boolean} rightAligned
     */
    /**
     * @typedef {Object} MdDataTableComponentFooters
     * @property {String} label
     */
    /**
     * @property {MdDataTableComponentHeaders.<Array>} [headers=[]]
     * @property {MdDataTableComponentBodies.<Array>} [bodies=[]]
     * @property {MdDataTableComponentFooters.<Array>} [footers=[]]
     * @property {Array} [data=[]]
     * @property {Boolean} checkbox
     * @property {Boolean} virtualize
     */
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        footers: { type: Array },
        data: { type: Array },
        checkbox: { type: Boolean },
        virtualize: { type: Boolean },
        dataStore: { type: Array, attribute: false },
        now: { type: Number, attribute: false },
        dataVirtual: { type: Array, attribute: false },
    };

    get checkboxColumn() {
        if (this.checkbox) {
            return [{ checkbox: true }];
        }
        return [];
    }

    /**
     * @readonly
     * @returns {Array}
     */
    get selected() {
        return this.dataStore.filter((item) => item.selected);
    }

    /**
     * @readonly
     * @returns {Boolean}
     */
    get indeterminate() {
        return this.selected.length && this.selected.length < this.dataStore.length;
    }

    /**
     * @readonly
     * @returns {Boolean}
     */
    get checked() {
        return this.selected.length && this.selected.length === this.dataStore.length;
    }

    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.footers = [];
        this.data = [];
        this.dataStore = [];
        this.dataVirtual = [];
        this.store = new Store();
    }

    styleDataTableNativeHeaderCell(th) {
        return {
            "min-width": th.width + "px",
            // "max-width": th.width + "px",
            position: "sticky",
            top: "0",
            zIndex: 2,
            ...(th.sticky && {
                position: "sticky",
                left: "0",
                zIndex: 3,
            }),
        };
    }

    styleDataTableNativeBodyCell(td) {
        return {
            ...(td.sticky && {
                position: "sticky",
                left: "0",
                zIndex: 1,
            }),
        };
    }

    render() {
        /* prettier-ignore */
        return html`
            <table 
                is="md-data-table-native"
                class="md-data-table__native"
                ?virtualize="${this.virtualize}"
                .dataStore="${this.dataStore}"
                now="${this.now}"
            >
                <caption></caption>
                <thead>
                    ${this.headers.map(tr=>html`
                        <tr>
                            ${this.checkboxColumn.concat(tr).map(th=>html`
                                <th
                                    is="md-data-table-native-header-cell"
                                    .data="${th}"
                                    ?resizable="${th.resizable}"
                                    style="${styleMap(this.styleDataTableNativeHeaderCell(th))}"
                                    @click="${this.handleDataTableNativeHeaderCellClick}"
                                    @dblclick="${this.handleDataTableNativeHeaderCellDblclick}"
                                    @pointerenter="${this.handleDataTableNativeHeaderCellPointerenter}"
                                    @pointerleave="${this.handleDataTableNativeHeaderCellPointerleave}"
                                >
                                    <md-data-table-cell
                                        .checkbox="${th.checkbox}"
                                        .indeterminate="${this.indeterminate}"
                                        .checked="${this.checked}"
                                        .label="${th.label}"
                                        .rightAligned="${th.rightAligned}"
                                        .sortable="${th.sortable}"
                                        .sortIcon="${th.sortIcon}"
                                    ></md-data-table-cell>
                                </th>
                            `)}
                        </tr>
                    `)}
                </thead>
                ${this.dataVirtual.map(item=>html`
                    <tbody
                        .data="${item}"
                        ?selected="${item.selected}"
                        @click="${this.handleDataTableNativeBodyClick}"
                    >
                        ${this.bodies.map(tr=>html`
                            <tr>
                                ${this.checkboxColumn.concat(tr).map(td=>html`
                                    <td
                                        .data="${td}"
                                        style="${styleMap(this.styleDataTableNativeBodyCell(td))}"
                                        @click="${this.handleDataTableNativeBodyCellClick}"
                                    >
                                        <md-data-table-cell
                                            .checkbox="${td.checkbox}"
                                            .checked="${item.selected}"
                                            .label="${item[td.name]}"
                                            .rightAligned="${td.rightAligned}"
                                        ></md-data-table-cell>
                                    </td>
                                `)}
                            </tr>
                        `)}
                    </tbody>
                `)}
                <!-- <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot> -->
            </table>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.handleDataTableWindowKeydown = this.handleDataTableWindowKeydown.bind(this);
        window.addEventListener("keydown", this.handleDataTableWindowKeydown);
        this.handleDataTableNativeVirtualScroll = this.handleDataTableNativeVirtualScroll.bind(this);
        this.addEventListener("onDataTableNativeVirtualScroll", this.handleDataTableNativeVirtualScroll);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("keydown", this.handleDataTableWindowKeydown);
        this.removeEventListener("onDataTableNativeVirtualScroll", this.handleDataTableNativeVirtualScroll);
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("data")) {
            await this.updateComplete;
            this.store.load(this.data);
            const result = this.store.get();
            this.dataStore = result.data;
            if (!this.virtualize) this.dataVirtual = this.dataStore;
            this.now = performance.now();
        }
    }

    handleDataTableNativeVirtualScroll(event) {
        this.dataVirtual = event.detail.event.detail.data;
    }

    handleDataTableWindowKeydownCtrlA(event) {
        event.preventDefault();
        this.dataStore.forEach((item) => {
            item.selected = true;
        });
        this.requestUpdate();
        /**
         * @event onDataTableWindowKeydownCtrlA
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableWindowKeydownCtrlA", { event });
    }

    handleDataTableWindowKeydown(event) {
        if (event.ctrlKey && event.key === "a") return this.handleDataTableWindowKeydownCtrlA(event);
        /**
         * @event onDataTableWindowKeydown
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableWindowKeydown", { event });
    }

    handleDataTableNativeHeaderCellSortablePointerenter(event) {
        const data = event.currentTarget.data;
        if (data.sortable && !data.order) {
            data.sortIcon = "arrow_upward";
            this.requestUpdate();
        }
        /**
         * @event onDataTableNativeHeaderCellSortablePointerenter
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellSortablePointerenter", { event });
    }

    handleDataTableNativeHeaderCellSortablePointerleave(event) {
        const data = event.currentTarget.data;
        if (data.sortable && !data.order) {
            data.sortIcon = "";
            this.requestUpdate();
        }
        /**
         * @event onDataTableNativeHeaderCellSortablePointerleave
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellSortablePointerleave", { event });
    }

    handleDataTableNativeHeaderCellSortableClick(event) {
        const data = event.currentTarget.data;
        if (data.sortable) {
            const sortIcons = {
                undefined: "arrow_upward",
                asc: "arrow_downward",
                desc: undefined,
            };
            data.sortIcon = sortIcons[data.order];
            const orders = {
                undefined: "asc",
                asc: "desc",
                desc: undefined,
            };
            data.order = orders[data.order];
            this.requestUpdate();
        }
        /**
         * @event onDataTableNativeHeaderCellSortableClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellSortableClick", { event });
    }

    handleDataTableNativeHeaderCellCheckboxClick(event) {
        const data = event.currentTarget.data;
        const selected = !this.checked || this.indeterminate;
        this.dataStore.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();
        /**
         * @event onDataTableNativeHeaderCellCheckboxClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellCheckboxClick", { event });
    }

    handleDataTableNativeBodyCellCheckboxClick(event) {
        const data = event.currentTarget.data;
        const dataBody = event.target.closest("tbody")?.data;
        dataBody.selected = !dataBody.selected;
        this.requestUpdate();
        /**
         * @event onDataTableNativeBodyCellCheckboxClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeBodyCellCheckboxClick", { event });
    }

    handleDataTableNativeHeaderCellPointerenter(event) {
        const data = event.currentTarget.data;
        if (data.sortable /* &&event.target.closest('.md-data-table__sortable') */) return this.handleDataTableNativeHeaderCellSortablePointerenter(event);
        /**
         * @event onDataTableNativeHeaderCellPointerenter
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellPointerenter", { event });
    }

    handleDataTableNativeHeaderCellPointerleave(event) {
        const data = event.currentTarget.data;
        if (data.sortable /* &&event.target.closest('.md-data-table__sortable') */) return this.handleDataTableNativeHeaderCellSortablePointerleave(event);
        /**
         * @event onDataTableNativeHeaderCellPointerleave
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellPointerleave", { event });
    }

    handleDataTableNativeHeaderCellClick(event) {
        const data = event.currentTarget.data;
        if (data.checkbox) return this.handleDataTableNativeHeaderCellCheckboxClick(event);
        else if (data.resizable && event.target.closest(".md-resizable__handle")) return;
        else if (data.sortable && event.target.closest(".md-data-table__sortable")) return this.handleDataTableNativeHeaderCellSortableClick(event);
        /**
         * @event onDataTableNativeHeaderCellClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellClick", { event });
    }

    handleDataTableNativeHeaderCellResizableDblclick(event) {
        const data = event.currentTarget.data;
        const rowIndex = event.currentTarget.parentElement.rowIndex + 1;
        const cellIndex = event.currentTarget.cellIndex + 1;
        const width = [...this.querySelectorAll(`tr:nth-child(${rowIndex}) td:nth-child(${cellIndex}) .md-data-table__label`)].reduce((max, element) => Math.max(max, element.scrollWidth), 0);
        data.width = width;
        event.currentTarget.style.setProperty("min-width", data.width + "px");
        // event.currentTarget.style.setProperty('max-width',data.width+'px')
        /**
         * @event onDataTableNativeHeaderCellResizableDblclick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellResizableDblclick", { event });
    }

    handleDataTableNativeHeaderCellDblclick(event) {
        const data = event.currentTarget.data;
        if (data.resizable && event.target.closest(".md-resizable__handle")) return this.handleDataTableNativeHeaderCellResizableDblclick(event);
        /**
         * @event onDataTableNativeHeaderCellDblclick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCellDblclick", { event });
    }

    handleDataTableNativeBodyCellClick(event) {
        const data = event.currentTarget.data;
        if (data.checkbox) return this.handleDataTableNativeBodyCellCheckboxClick(event);
        /**
         * @event onDataTableNativeBodyCellClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeBodyCellClick", { event });
    }

    handleDataTableNativeBodyClick(event) {
        const data = event.currentTarget.data;
        const dataTd = event.target.closest("td")?.data;
        if (dataTd.checkbox) return;
        if (event.ctrlKey) {
            data.selected = !data.selected;
        } else if (event.shiftKey) {
            this.prevSelectedIndex = this.prevSelectedIndex || 0;
            this.currSelectedIndex = this.dataStore.indexOf(data);
            this.swapSelectedIndex = this.currSelectedIndex > this.prevSelectedIndex;
            if (this.swapSelectedIndex) {
                [this.prevSelectedIndex, this.currSelectedIndex] = [this.currSelectedIndex, this.prevSelectedIndex];
            }
            this.dataStore.forEach((item, index) => {
                item.selected = index <= this.prevSelectedIndex && index >= this.currSelectedIndex;
            });
            if (this.swapSelectedIndex) {
                [this.currSelectedIndex, this.prevSelectedIndex] = [this.prevSelectedIndex, this.currSelectedIndex];
            }
        } else {
            this.dataStore.forEach((item, index) => {
                item.selected = item === data;
            });
            this.prevSelectedIndex = this.dataStore.indexOf(data);
        }
        this.requestUpdate();
        /**
         * @event onDataTableNativeBodyClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeBodyClick", { event });
    }
}

customElements.define("md-data-table", MdDataTableComponent);

export { MdDataTableComponent };

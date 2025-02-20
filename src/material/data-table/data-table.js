import { html, nothing } from "lit";
import { MdComponent, Mixins } from "../component/component";
import { styleMap } from "lit/directives/style-map.js";
import { Store } from "../store/store";

/**
 * MDDataTableComponent class responsible for displaying a data table.
 * @extends MdComponent
 * @element md-data-table
 */
class MDDataTableComponent extends MdComponent {
    /**
     * @typedef {Object} MDDataTableComponentHeaders
     * @property {string} name - The name of the header.
     * @property {string} label - The label of the header.
     * @property {boolean} rightAligned - Indicates if the header is right-aligned.
     * @property {number} width - The width of the header.
     * @property {boolean} sortable - Indicates if the header is sortable.
     */

    /**
     * @typedef {Object} MDDataTableComponentBodies
     * @property {string} name - The name of the body.
     * @property {boolean} rightAligned - Indicates if the body is right-aligned.
     * @property {number} width - The width of the body.
     */

    /**
     * @typedef {Object} MDDataTableComponentFooters
     * @property {string} label - The label of the footer.
     * @property {boolean} rightAligned - Indicates if the footer is right-aligned.
     * @property {number} width - The width of the footer.
     */

    /**
     * The properties of the component.
     * @property {MDDataTableComponentHeaders[]} headers - The headers of the table.
     * @property {MDDataTableComponentBodies[]} bodies - The bodies of the table.
     * @property {MDDataTableComponentFooters[]} footers - The footers of the table.
     * @property {Array} data - The data to be displayed in the table.
     * @property {boolean} checkbox - Indicates if checkboxes should be displayed.
     * @property {boolean} virtualize - Indicates if the table should use virtualization.
     */
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        footers: { type: Array },
        data: { type: Array },
        checkbox: { type: Boolean },
        virtualize: { type: Boolean },
        dataStore: { type: Array },
        dataVirtual: { type: Array },
        now: { type: Number },
    };

    sortIcons = {
        undefined: "arrow_upward",
        asc: "arrow_downward",
        desc: undefined,
    };

    orders = {
        undefined: "asc",
        asc: "desc",
        desc: undefined,
    };

    /**
     * Gets the selected items in the data table.
     * @readonly
     * @returns {Array} The selected items.
     */
    get selected() {
        return this.dataStore?.filter((item) => item.selected);
    }

    /**
     * Gets the indeterminate state of the checkboxes.
     * @readonly
     * @returns {boolean} The indeterminate state.
     */
    get indeterminate() {
        return this.selected?.length && this.selected?.length < this.dataStore?.length;
    }

    /**
     * Gets the checked state of the checkboxes.
     * @readonly
     * @returns {boolean} The checked state.
     */
    get checked() {
        return this.selected?.length && this.selected?.length === this.dataStore?.length;
    }

    get checkboxCell() {
        return [...((this.checkbox && [{ checkbox: true, sticky: true }]) || [])];
    }

    /**
     * Creates an instance of the MDDataTableComponent class.
     */
    constructor() {
        super();
        this.storeOptions = {};

        this.store = new Store();
    }

    styleDataTableNativeHeader(th) {
        return {
            "min-width": th.width + "px",
            position: "sticky",
            top: 0,
            "z-index": 2,
            ...(th.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 3,
            }),
        };
    }

    styleDataTableNativeData(td) {
        return {
            ...(td.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 1,
            }),
        };
    }

    styleDataTableNativeFooterData(td) {
        return {
            position: "sticky",
            bottom: 0,
            "z-index": 2,
            ...(td.sticky && {
                position: "sticky",
                left: 0,
                "z-index": 3,
            }),
        };
    }

    render() {
        /* prettier-ignore */
        return html`
            <table 
                is="md-data-table-native"
                .instance="${this}"
                now="${this.now}"
            >
                <caption 
                    is="md-data-table-native-caption"
                    .instance="${this}"
                ></caption>
                <thead 
                    is="md-data-table-native-head"
                    .instance="${this}"
                >
                    ${this.headers?.map(tr=>html`
                        <tr 
                            is="md-data-table-native-row"
                            .instance="${this}"
                        >
                            ${this.checkboxCell.concat(tr).map(th=>html`
                            
                                <th 
                                    is="md-data-table-native-header"
                                    .instance="${this}"
                                    .data="${th}"
                                    style="${styleMap(this.styleDataTableNativeHeader(th))}"
                                    @click="${this.handleDataTableNativeHeaderClick}"
                                >
                                    <md-data-table-cell
                                        .label="${th.label}"
                                        .rightAligned="${th.rightAligned}"
                                        .sortable="${th.sortable}"
                                        .sortIcon="${th.sortIcon}"
                                        .checkbox="${th.checkbox}"
                                        .indeterminate="${this.indeterminate}"
                                        .checked="${this.checked}"
                                    ></md-data-table-cell>
                                </th>
                            `)}
                        </tr>
                    `)}
                </thead>
                ${this.dataVirtual?.map(item=>html`
                    <tbody 
                        is="md-data-table-native-body"
                        .instance="${this}"
                        .data="${item}"
                        ?selected="${item.selected}"
                        @click="${this.handleDataTableNativeBodyClick}"
                    >
                        ${this.bodies?.map(tr=>html`
                            <tr 
                                is="md-data-table-native-row"
                                .instance="${this}"
                            >
                                ${this.checkboxCell.concat(tr).map(td=>html`
                                    <td 
                                        is="md-data-table-native-data"
                                        .instance="${this}"
                                        .data="${td}"
                                        .dataBody="${item}"
                                        style="${styleMap(this.styleDataTableNativeData(td))}"
                                        @click="${this.handleDataTableNativeDataClick}"
                                    >
                                        <md-data-table-cell
                                            .label="${item[td.name]}"
                                            .rightAligned="${td.rightAligned}"
                                            .checkbox="${td.checkbox}"
                                            .checked="${item.selected}"
                                        ></md-data-table-cell>
                                    </td>
                                `)}
                            </tr>
                        `)}
                    </tbody>
                `)}
                <tfoot 
                    is="md-data-table-native-footer"
                    .instance="${this}"
                >
                    ${this.footers?.map(tr=>html`
                        <tr 
                            is="md-data-table-native-row"
                            .instance="${this}"
                        >
                            ${this.checkboxCell.concat(tr).map(td=>html`
                                <td 
                                    is="md-data-table-native-data"
                                    .instance="${this}"
                                    style="${styleMap(this.styleDataTableNativeFooterData(td))}"
                                >
                                    <md-data-table-cell
                                        .label="${td.label}"
                                        .rightAligned="${td.rightAligned}"
                                        .checkbox="${td.checkbox}"
                                        .indeterminate="${this.indeterminate}"
                                        .checked="${this.checked}"
                                    ></md-data-table-cell>
                                </td>
                            `)}
                        </tr>
                    `)}
                </tfoot>
            </table>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        window.addEventListener("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (
            changedProperties.has("data")
            
        ) {
            await this.updateComplete;
            
            this.load();
        }
    }

    /**
     *
     */
    load() {
        this.store.load(this.data);
        
        const result = this.store.get(this.storeOptions);
        this.dataStore = result.data;

        if (this.virtualize) this.now = performance.now();
        else this.dataVirtual = this.dataStore;
    }

    handleDataTableKeydown(event) {
        if (event.ctrlKey && event.key === "a") this.handleDataTableKeydownCtrlA(event);

        /**
         * @event onDataTableKeydown
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableKeydown", { event });
    }

    handleDataTableKeydownCtrlA(event) {
        event.preventDefault();

        this.dataStore.forEach((item) => {
            item.selected = true;
        });
        this.requestUpdate();

        /**
         * @event onDataTableKeydownCtrlA
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableKeydownCtrlA", { event });
    }

    handleDataTableNativeHeaderClick(event) {
        const data = event.currentTarget.data;

        if (data.checkbox) {
            return this.handleDataTableNativeHeaderCheckboxClick(event);
        } else if (data.sortable && event.target.closest(".md-data-table__section--center")) {
            return this.handleDataTableNativeHeaderSortableClick(event);
        }

        /**
         * @event onDataTableNativeHeaderClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderClick", { event });
    }

    handleDataTableNativeBodyClick(event) {
        const data = event.currentTarget.data;

        if (event.ctrlKey) {
            data.selected = !data.selected;
        } else if (event.shiftKey) {
            this.prevIndex = this.prevIndex || 0;
            this.currIndex = this.dataStore.indexOf(data);
            this.swapIndex = this.prevIndex > this.currIndex;

            if (this.swapIndex) {
                [this.prevIndex, this.currIndex] = [this.currIndex, this.prevIndex];
            }

            this.dataStore.forEach((item, index) => {
                item.selected = index >= this.prevIndex && index <= this.currIndex;
            });

            if (this.swapIndex) {
                [this.currIndex, this.prevIndex] = [this.prevIndex, this.currIndex];
            }
        } else {
            this.dataStore.forEach((item, index) => {
                item.selected = item === data;

                if (item.selected) {
                    this.prevIndex = index;
                }
            });
        }
        this.requestUpdate();

        /**
         * @event onDataTableNativeBodyClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeBodyClick", { event });
    }

    handleDataTableNativeHeaderCheckboxClick(event) {
        event.stopPropagation();
        const data = event.currentTarget.data;
        const selected = !this.checked || this.indeterminate;

        this.dataStore.forEach((item) => {
            item.selected = selected;
        });
        this.requestUpdate();

        /**
         * @event onDataTableNativeHeaderCheckboxClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderCheckboxClick", { event });
    }

    handleDataTableNativeHeaderSortableClick(event) {
        event.stopPropagation();
        const data = event.currentTarget.data;
        data.sortIcon = this.sortIcons[data.order];
        data.order = this.orders[data.order];

        this.storeOptions.sorters = this.headers.flat().filter((item) => item.order);
        this.load();
        this.requestUpdate();

        /**
         * @event onDataTableNativeHeaderSortableClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeHeaderSortableClick", { event });
    }

    handleDataTableNativeDataCheckboxClick(event) {
        event.stopPropagation();
        const data = event.currentTarget.dataBody;
        data.selected = !data.selected;
        this.requestUpdate();

        /**
         * @event onDataTableNativeDataCheckboxClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeDataCheckboxClick", { event });
    }

    handleDataTableNativeDataClick(event) {
        const data = event.currentTarget.data;

        if (data.checkbox) {
            return this.handleDataTableNativeDataCheckboxClick(event);
        }

        /**
         * @event onDataTableNativeDataClick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onDataTableNativeDataClick", { event });
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };

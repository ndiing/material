import { html } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * A web component for pagination control.
 * @extends MDComponent
 * @tagname md-pagination
 * @fires MDPaginationComponent#onPaginationChange - Fired when the pagination changes.
 * @fires MDPaginationComponent#onPaginationLimitChange - Fired when the pagination limit changes.
 * @fires MDPaginationComponent#onPaginationFirstClick - Fired when the first page button is clicked.
 * @fires MDPaginationComponent#onPaginationPrevClick - Fired when the previous page button is clicked.
 * @fires MDPaginationComponent#onPaginationNextClick - Fired when the next page button is clicked.
 * @fires MDPaginationComponent#onPaginationLastClick - Fired when the last page button is clicked.
 */
class MDPaginationComponent extends MDComponent {
    /**
     * @property {Number} total - The total number of items.
     * @property {Number} limit - The number of items per page.
     * @property {Number} page - The current page number.
     */
    static properties = {
        total: { type: Number },
        limit: { type: Number },
        page: { type: Number },
    };

    /**
     * The total number of pages.
     * @returns {Number}
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }

    /**
     * The starting index of items on the current page.
     * @returns {Number}
     */
    get start() {
        return Math.max((this.page - 1) * this.limit, 0);
    }

    /**
     * The ending index of items on the current page.
     * @returns {Number}
     */
    get end() {
        return Math.min(this.start + this.limit, this.total);
    }

    /**
     * The starting item number displayed on the current page.
     * @returns {Number}
     */
    get numberStart() {
        return Math.min(this.start + 1, this.total);
    }

    /**
     * The ending item number displayed on the current page.
     * @returns {Number}
     */
    get numberEnd() {
        return this.end;
    }

    constructor() {
        super();
        this.total = 0;
        this.limit = 50;
        this.page = 1;
        this.options = [
            { value: 50, label: "50", selected: true },
            { value: 100, label: "100" },
            { value: 250, label: "250" },
            { value: 500, label: "500" },
            { value: 1000, label: "1000" },
        ];
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-pagination__label">Rows per page</div>
            <md-text-field 
                class="md-pagination__select"
                .type="${"select"}"
                .options="${this.options}"
                @onTextFieldNativeChange="${this.handlePaginationLimitChange}"
            ></md-text-field>
            <div class="md-pagination__text">${this.numberStart}-${this.numberEnd} of ${this.total}</div>
            <md-icon-button class="md-pagination__icon-button" .disabled="${this.pages===0||this.page===1}" .icon="${"first_page"}" @click="${this.handlePaginationFirstClick}"></md-icon-button>
            <md-icon-button class="md-pagination__icon-button" .disabled="${this.pages===0||this.page===1}" .icon="${"keyboard_arrow_left"}" @click="${this.handlePaginationPrevClick}"></md-icon-button>
            <md-icon-button class="md-pagination__icon-button" .disabled="${this.pages===0||this.page===this.pages}" .icon="${"keyboard_arrow_right"}" @click="${this.handlePaginationNextClick}"></md-icon-button>
            <md-icon-button class="md-pagination__icon-button" .disabled="${this.pages===0||this.page===this.pages}" .icon="${"last_page"}" @click="${this.handlePaginationLastClick}"></md-icon-button>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("limit") || changedProperties.has("total")) {
            await this.updateComplete;
            this.page = 1;
        }

        let cache = JSON.stringify([this.total, this.limit, this.page]);

        if (this.cache !== cache) {
            this.cache = cache;
            this.emit("onPaginationChange", this);
        }
    }

    handlePaginationLimitChange(event) {
        const limit = Number(event.detail.currentTarget.value);
        this.limit = limit;

        this.emit("onPaginationLimitChange", event);
    }

    handlePaginationFirstClick(event) {
        this.page = 1;

        this.emit("onPaginationFirstClick", event);
    }

    handlePaginationPrevClick(event) {
        this.page = Math.max(--this.page, 1);

        this.emit("onPaginationPrevClick", event);
    }

    handlePaginationNextClick(event) {
        this.page = Math.min(++this.page, this.pages);

        this.emit("onPaginationNextClick", event);
    }

    handlePaginationLastClick(event) {
        this.page = this.pages;

        this.emit("onPaginationLastClick", event);
    }
}

customElements.define("md-pagination", MDPaginationComponent);

export { MDPaginationComponent };

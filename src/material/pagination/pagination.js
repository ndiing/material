import { html } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * Pagination component for managing pagination UI and events.
 * @element md-pagination
 * @extends MDComponent
 * @fires MDPaginationComponent#onPaginationChange - Triggered when pagination parameters change.
 * @fires MDPaginationComponent#onPaginationLimitChange - Triggered when pagination limit changes.
 * @fires MDPaginationComponent#onPaginationFirstClick - Triggered when first page button is clicked.
 * @fires MDPaginationComponent#onPaginationPrevClick - Triggered when previous page button is clicked.
 * @fires MDPaginationComponent#onPaginationNextClick - Triggered when next page button is clicked.
 * @fires MDPaginationComponent#onPaginationLastClick - Triggered when last page button is clicked.
 */
class MDPaginationComponent extends MDComponent {
    /**
     * Properties for MDPaginationComponent.
     * @property {Number} total - Total number of items.
     * @property {Number} limit - Number of items per page.
     * @property {Number} page - Current page number.
     * @property {Array} options - Pagination options for items per page.
     */
    static properties = {
        total: { type: Number },
        limit: { type: Number },
        page: { type: Number },
        options: { type: Array },
    };

    /**
     * Calculates the total number of pages.
     * @returns {Number} The total number of pages.
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }

    /**
     * Calculates the start index of items shown on the current page.
     * @returns {Number} The start index of items.
     */
    get start() {
        return Math.max((this.page - 1) * this.limit, 0);
    }

    /**
     * Calculates the end index of items shown on the current page.
     * @returns {Number} The end index of items.
     */
    get end() {
        return Math.min(this.start + this.limit, this.total);
    }

    /**
     * Returns the starting number displayed on the pagination UI.
     * @returns {Number} The starting number displayed.
     */
    get numberStart() {
        return Math.min(this.start + 1, this.total);
    }

    /**
     * Returns the ending number displayed on the pagination UI.
     * @returns {Number} The ending number displayed.
     */
    get numberEnd() {
        return this.end;
    }

    /**
     * Initializes MDPaginationComponent with default values.
     */
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

    /**
     * Renders the pagination UI.
     * @private
     * @returns {TemplateResult} The HTML template for pagination.
     */
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
        `;
    }

    /**
     * Initializes component styles and class.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
    }

    /**
     * Handles updates to limit or total properties and emits pagination change event.
     * @private
     * @param {Map} changedProperties - Map of changed properties.
     */
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

    /**
     * Handles pagination limit change event.
     * @private
     * @param {Event} event - The change event.
     */
    handlePaginationLimitChange(event) {
        const limit = Number(event.detail.currentTarget.value);
        this.limit = limit;
        this.emit("onPaginationLimitChange", event);
    }

    /**
     * Handles first page button click event.
     * @private
     * @param {Event} event - The click event.
     */
    handlePaginationFirstClick(event) {
        this.page = 1;
        this.emit("onPaginationFirstClick", event);
    }

    /**
     * Handles previous page button click event.
     * @private
     * @param {Event} event - The click event.
     */
    handlePaginationPrevClick(event) {
        this.page = Math.max(--this.page, 1);
        this.emit("onPaginationPrevClick", event);
    }

    /**
     * Handles next page button click event.
     * @private
     * @param {Event} event - The click event.
     */
    handlePaginationNextClick(event) {
        this.page = Math.min(++this.page, this.pages);
        this.emit("onPaginationNextClick", event);
    }

    /**
     * Handles last page button click event.
     * @private
     * @param {Event} event - The click event.
     */
    handlePaginationLastClick(event) {
        this.page = this.pages;
        this.emit("onPaginationLastClick", event);
    }
}
customElements.define("md-pagination", MDPaginationComponent);
export { MDPaginationComponent };

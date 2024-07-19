import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * Represents a pagination component.
 * @element md-pagination
 * @extends MDComponent
 * @fires MDPaginationComponent#onPaginationChange - Triggered when pagination changes.
 * @fires MDPaginationComponent#onPaginationLimitChange - Triggered when pagination limit changes.
 * @fires MDPaginationComponent#onPaginationFirstClick - Triggered when first page button is clicked.
 * @fires MDPaginationComponent#onPaginationPrevClick - Triggered when previous page button is clicked.
 * @fires MDPaginationComponent#onPaginationNextClick - Triggered when next page button is clicked.
 * @fires MDPaginationComponent#onPaginationLastClick - Triggered when last page button is clicked.
 */
class MDPaginationComponent extends MDComponent {
    /**
     * Properties for MDPaginationComponent.
     * @property {Number} [total=0] - Total number of items.
     * @property {Number} [limit=50] - Items per page limit.
     * @property {Number} [page=1] - Current page number.
     * @property {String} [label="Rows per page"] - Label for pagination select.
     * @property {Array} [options=[{"value":50,"label":"50","selected":true},{"value":100,"label":"100"},{"value":250,"label":"250"},{"value":500,"label":"500"},{"value":1000,"label":"1000"}]] - Options for items per page select.
     * @property {String} [text="$numberStart-$numberEnd of $total"] - Text to display for pagination status.
     * @property {Boolean} [firstPage=true] - Whether first page button is enabled.
     * @property {Boolean} [prevPage=true] - Whether previous page button is enabled.
     * @property {Boolean} [nextPage=true] - Whether next page button is enabled.
     * @property {Boolean} [lastPage=true] - Whether last page button is enabled.
     */
    static properties = {
        total: { type: Number },
        limit: { type: Number },
        page: { type: Number },
        label: { type: String },
        options: { type: Array },
        text: { type: String },
        firstPage: { type: Boolean },
        prevPage: { type: Boolean },
        nextPage: { type: Boolean },
        lastPage: { type: Boolean },
    };

    /**
     * Calculates the total number of pages based on total items and limit.
     * @returns {Number} The total number of pages.
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }

    /**
     * Calculates the start index of items on the current page.
     * @returns {Number} The start index.
     */
    get start() {
        return Math.max((this.page - 1) * this.limit, 0);
    }

    /**
     * Calculates the end index of items on the current page.
     * @returns {Number} The end index.
     */
    get end() {
        return Math.min(this.start + this.limit, this.total);
    }

    /**
     * Calculates the starting item number on the current page.
     * @returns {Number} The starting item number.
     */
    get numberStart() {
        return Math.min(this.start + 1, this.total);
    }

    /**
     * Calculates the ending item number on the current page.
     * @returns {Number} The ending item number.
     */
    get numberEnd() {
        return this.end;
    }

    /**
     * Constructs a new MDPaginationComponent.
     */
    constructor() {
        super();
        this.total = 0;
        this.limit = 50;
        this.page = 1;
        this.label = "Rows per page";
        this.options = [
            { value: 50, label: "50", selected: true },
            { value: 100, label: "100" },
            { value: 250, label: "250" },
            { value: 500, label: "500" },
            { value: 1000, label: "1000" },
        ];
        this.text = "$numberStart-$numberEnd of $total";
        this.firstPage = true;
        this.prevPage = true;
        this.nextPage = true;
        this.lastPage = true;
    }

    /**
     * Renders the pagination text.
     * @private
     * @returns {TemplateResult} The rendered HTML template.
     */
    renderText() {
        return this.text.replace(/\$(\w+)/g, ($, $1) => {
            return this[$1];
        });
    }

    /**
     * Renders the pagination component.
     * @private
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.label ? html`<div class="md-pagination__label">${this.label}</div>` : nothing}
            ${this.options?.length ? html`
                <md-select-field 
                    class="md-pagination__select"
                    .options="${this.options}"
                    .readOnly="${true}"
                    @onTextFieldNativeInput="${this.handlePaginationLimitInput}"
                ></md-select-field>
            ` : nothing}
            ${this.text ? html`<div class="md-pagination__text">${this.renderText()}</div>` : nothing}
            ${this.firstPage ? html`<md-icon-button class="md-pagination__icon-button" .disabled="${this.pages === 0 || this.page === 1}" .icon="${"first_page"}" @click="${this.handlePaginationFirstClick}"></md-icon-button>` : nothing}
            ${this.prevPage ? html`<md-icon-button class="md-pagination__icon-button" .disabled="${this.pages === 0 || this.page === 1}" .icon="${"keyboard_arrow_left"}" @click="${this.handlePaginationPrevClick}"></md-icon-button>` : nothing}
            ${this.nextPage ? html`<md-icon-button class="md-pagination__icon-button" .disabled="${this.pages === 0 || this.page === this.pages}" .icon="${"keyboard_arrow_right"}" @click="${this.handlePaginationNextClick}"></md-icon-button>` : nothing}
            ${this.lastPage ? html`<md-icon-button class="md-pagination__icon-button" .disabled="${this.pages === 0 || this.page === this.pages}" .icon="${"last_page"}" @click="${this.handlePaginationLastClick}"></md-icon-button>` : nothing}
        `;
    }

    /**
     * Initializes the component when connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
    }

    /**
     * Handles updates to the component's properties.
     * @param {Map} changedProperties - The properties that have changed.
     * @private
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
     * Handles input event when pagination limit changes.
     * @param {Event} event - The input event.
     * @private
     */
    handlePaginationLimitInput(event) {
        const limit = Number(event.detail.currentTarget.value);
        this.limit = limit;
        this.emit("onPaginationLimitChange", event);
    }

    /**
     * Handles click event when first page button is clicked.
     * @param {Event} event - The click event.
     * @private
     */
    handlePaginationFirstClick(event) {
        this.page = 1;
        this.emit("onPaginationFirstClick", event);
    }

    /**
     * Handles click event when previous page button is clicked.
     * @param {Event} event - The click event.
     * @private
     */
    handlePaginationPrevClick(event) {
        this.page = Math.max(--this.page, 1);
        this.emit("onPaginationPrevClick", event);
    }

    /**
     * Handles click event when next page button is clicked.
     * @param {Event} event - The click event.
     * @private
     */
    handlePaginationNextClick(event) {
        this.page = Math.min(++this.page, this.pages);
        this.emit("onPaginationNextClick", event);
    }

    /**
     * Handles click event when last page button is clicked.
     * @param {Event} event - The click event.
     * @private
     */
    handlePaginationLastClick(event) {
        this.page = this.pages;
        this.emit("onPaginationLastClick", event);
    }
}
customElements.define("md-pagination", MDPaginationComponent);
export { MDPaginationComponent };

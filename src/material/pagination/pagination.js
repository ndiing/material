import { html } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * {{description}}
 * @element md-pagination
 * @extends MDComponent
 * @fires MDPaginationComponent#onPaginationChange - {{description}}
 * @fires MDPaginationComponent#onPaginationLimitChange - {{description}}
 * @fires MDPaginationComponent#onPaginationFirstClick - {{description}}
 * @fires MDPaginationComponent#onPaginationPrevClick - {{description}}
 * @fires MDPaginationComponent#onPaginationNextClick - {{description}}
 * @fires MDPaginationComponent#onPaginationLastClick - {{description}}
 */
class MDPaginationComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Number} total - {{description}}
     * @property {Number} limit - {{description}}
     * @property {Number} page - {{description}}
     * @property {Array} options - {{description}}
     */
    static properties = {
        total: { type: Number },
        limit: { type: Number },
        page: { type: Number },
        options: { type: Array },
    };

    /**
     * {{description}}
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }

    /**
     * {{description}}
     */
    get start() {
        return Math.max((this.page - 1) * this.limit, 0);
    }

    /**
     * {{description}}
     */
    get end() {
        return Math.min(this.start + this.limit, this.total);
    }

    /**
     * {{description}}
     */
    get numberStart() {
        return Math.min(this.start + 1, this.total);
    }

    /**
     * {{description}}
     */
    get numberEnd() {
        return this.end;
    }

    /**
     * {{description}}
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
     * @private
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
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
    }

    /**
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
     * @private
     */
    handlePaginationLimitChange(event) {
        const limit = Number(event.detail.currentTarget.value);
        this.limit = limit;

        this.emit("onPaginationLimitChange", event);
    }

    /**
     * @private
     */
    handlePaginationFirstClick(event) {
        this.page = 1;

        this.emit("onPaginationFirstClick", event);
    }

    /**
     * @private
     */
    handlePaginationPrevClick(event) {
        this.page = Math.max(--this.page, 1);

        this.emit("onPaginationPrevClick", event);
    }

    /**
     * @private
     */
    handlePaginationNextClick(event) {
        this.page = Math.min(++this.page, this.pages);

        this.emit("onPaginationNextClick", event);
    }

    /**
     * @private
     */
    handlePaginationLastClick(event) {
        this.page = this.pages;

        this.emit("onPaginationLastClick", event);
    }
}

customElements.define("md-pagination", MDPaginationComponent);

export { MDPaginationComponent };

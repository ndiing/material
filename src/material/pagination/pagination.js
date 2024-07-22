import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-pagination
 * @fires MDPaginationComponent#onPaginationChange - {{desc}}
 * @fires MDPaginationComponent#onPaginationLimitChange - {{desc}}
 * @fires MDPaginationComponent#onPaginationFirstClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationPrevClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationNextClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationLastClick - {{desc}}
 */
class MDPaginationComponent extends MDComponent {
    
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Number} total - {{desc}}
     * @property {Number} limit - {{desc}}
     * @property {Number} page - {{desc}}
     * @property {String} label - {{desc}}
     * @property {Array} options - {{desc}}
     * @property {String} text - {{desc}}
     * @property {Boolean} firstPage - {{desc}}
     * @property {Boolean} prevPage - {{desc}}
     * @property {Boolean} nextPage - {{desc}}
     * @property {Boolean} lastPage - {{desc}}
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
     * {{desc}}
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }
    
    /**
     * {{desc}}
     */
    get start() {
        return Math.max((this.page - 1) * this.limit, 0);
    }
    
    /**
     * {{desc}}
     */
    get end() {
        return Math.min(this.start + this.limit, this.total);
    }
    
    /**
     * {{desc}}
     */
    get numberStart() {
        return Math.min(this.start + 1, this.total);
    }
    
    /**
     * {{desc}}
     */
    get numberEnd() {
        return this.end;
    }
    
    /**
     * {{desc}}
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
     * {{desc}}
     */
    renderText() {
        return this.text.replace(/\$(\w+)/g, ($, $1) => {
            return this[$1];
        });
    }
    
    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.label ? html`<div class="md-pagination__label">${this.label}</div>` : nothing}
            ${this.options?.length ? html`
                <md-select-field 
                    class="md-pagination__select"
                    .variant="${"outlined"}"
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
    }
    
    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handlePaginationLimitInput(event) {
        const limit = Number(event.detail.currentTarget.value);
        this.limit = limit;
        this.emit("onPaginationLimitChange", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handlePaginationFirstClick(event) {
        this.page = 1;
        this.emit("onPaginationFirstClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handlePaginationPrevClick(event) {
        this.page = Math.max(--this.page, 1);
        this.emit("onPaginationPrevClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handlePaginationNextClick(event) {
        this.page = Math.min(++this.page, this.pages);
        this.emit("onPaginationNextClick", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handlePaginationLastClick(event) {
        this.page = this.pages;
        this.emit("onPaginationLastClick", event);
    }
}
customElements.define("md-pagination", MDPaginationComponent);
export { MDPaginationComponent };

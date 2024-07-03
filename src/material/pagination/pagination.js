import { html } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-pagination
 * @fires MDPaginationComponent#onPaginationChange - {{desc}}
 * @fires MDPaginationComponent#onPaginationLimitChange - {{desc}}
 * @fires MDPaginationComponent#onPaginationFirstClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationPrevClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationNextClick - {{desc}}
 * @fires MDPaginationComponent#onPaginationLastClick - {{desc}}
 */
class MDPaginationComponent extends MDComponent {
    /**
     * @property {Number} total - {{desc}}
     * @property {Number} page - {{desc}}
     * @property {Number} limit - {{desc}}
     */
    static properties = {
        total: { type: Number },
        page: { type: Number },
        limit: { type: Number },
    };

    /**
     * {{desc}}
     */
    get options() {
        const options = [];
        let selected;
        for (let i = 1; i <= 5; i++) {
            const value = (this.total / 5) * i;
            selected = value == this.defaultLimit;
            options.push({ value, label: String(value), selected });
        }
        if (!selected) {
            if (this.defaultLimit) {
                const value = this.defaultLimit;
                selected = value == this.defaultLimit;
                options.push({ value, label: String(value), selected });
                options.sort((a, b) => a.value - b.value);
            } else {
                options[0].selected = true;
            }
        }
        return options;
    }
    set options(value) {}

    /**
     * {{desc}}
     */
    get pages() {
        return Math.ceil(this.total / this.limit);
    }
    /**
     * {{desc}}
     */
    set pages(value) {}

    get start() {
        return (this.page - 1) * this.limit;
    }
    /**
     * {{desc}}
     */
    set start(value) {}

    get end() {
        return this.start + this.limit;
    }
    /**
     * {{desc}}
     */
    set end(value) {}

    get numberStart() {
        return this.start + 1;
    }
    /**
     * {{desc}}
     */
    set numberStart(value) {}

    get numberEnd() {
        return this.start + this.limit;
    }
    /**
     * {{desc}}
     */
    set numberEnd(value) {}

    constructor() {
        super();
        // this.total = 1000;
        this.page = 1;
        // this.limit = 1000;
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
            <md-icon-button 
                class="md-pagination__action" 
                .icon="${"first_page"}" 
                .disabled="${this.page==1}"
                @click="${this.handlePaginationFirstClick}"
            ></md-icon-button>
            <md-icon-button 
                class="md-pagination__action" 
                .icon="${"keyboard_arrow_left"}" 
                .disabled="${this.page==1}"
                @click="${this.handlePaginationPrevClick}"
            ></md-icon-button>
            <md-icon-button 
                class="md-pagination__action" 
                .icon="${"keyboard_arrow_right"}" 
                .disabled="${this.page==this.pages}"
                @click="${this.handlePaginationNextClick}"
            ></md-icon-button>
            <md-icon-button 
                class="md-pagination__action" 
                .icon="${"last_page"}" 
                .disabled="${this.page==this.pages}"
                @click="${this.handlePaginationLastClick}"
            ></md-icon-button>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pagination");
        this.defaultLimit = this.limit;
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("total") || changedProperties.has("limit")) {
            await this.updateComplete;
            this.page = 1;
        }
        let cache = JSON.stringify([this.total, this.page, this.limit, this.start, this.end]);
        if (this.cache !== cache) {
            this.cache = cache;
            this.emit("onPaginationChange", this);
        }
    }

    handlePaginationLimitChange(event) {
        this.limit = Number(event.detail.currentTarget.value);

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

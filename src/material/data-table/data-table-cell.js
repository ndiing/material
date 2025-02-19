import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @element md-data-table-cell
 */
class MDDataTableCellComponent extends MdComponent {
    /**
     * @property {String} [label]
     * @property {String} [sublabel]
     */
    static properties = {
        label: { type: String },
        sublabel: { type: String },
        rightAligned: { type: Boolean },
        sortable: { type: Boolean },
        sortIcon: { type: String },
        checkbox: { type: Boolean },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.checkbox?html`
                <div class="md-data-table__section md-data-table__section--start">
                    ${this.checkbox?html`
                        <md-checkbox
                            .indeterminate="${this.indeterminate}"
                            .checked="${this.checked}"
                        ></md-checkbox>
                    `:nothing}
                </div>
            `:nothing}
            ${this.label || this.sublabel || this.sortable ? html` 
                <div class="md-data-table__section md-data-table__section--center">
                    ${this.sortable&&this.rightAligned?html`<md-icon>${this.sortIcon}</md-icon>`:nothing}
                    ${this.label || this.sublabel ? html` 
                        <div class="md-data-table__labels">
                            ${this.label ? html`<div class="md-data-table__label">${this.label}</div>` : nothing} 
                            ${this.sublabel ? html`<div class="md-data-table__sublabel">${this.sublabel}</div>` : nothing}
                        </div>
                    ` : nothing}   
                    ${this.sortable&&!this.rightAligned?html`<md-icon>${this.sortIcon}</md-icon>`:nothing}
                </div>
            ` : nothing}            
            <!-- <div class="md-data-table__section md-data-table__section--end">
            </div> -->
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__cell");
        await this.updateComplete;

        if (this.sublabel) {
            const sublabel = this.querySelector(".md-data-table__sublabel");

            if (sublabel.scrollHeight > sublabel.clientHeight) {
                this.classList.add("md-data-table__cell--three-line");
            } else {
                this.classList.add("md-data-table__cell--two-line");
            }
        }
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("rightAligned")) {
            this.classList.toggle("md-data-table__cell--right-aligned", !!this.rightAligned);
        }
    }
}

customElements.define("md-data-table-cell", MDDataTableCellComponent);

export { MDDataTableCellComponent };
